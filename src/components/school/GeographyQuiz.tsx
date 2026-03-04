'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, Globe, Flag, Building, Mountain, River,
  Trophy, Star, Clock, Volume2, VolumeX, HelpCircle,
  ChevronRight, Target, Sparkles
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

type QuestionType = 'country' | 'capital' | 'flag' | 'landmark' | 'physical'

interface GeoQuestion {
  id: string
  type: QuestionType
  question: string
  image?: string
  options: string[]
  correctAnswer: number
  hint?: string
  points: number
}

interface GeographyQuizProps {
  onBack: () => void
  onComplete: (stars: number, xp: number) => void
}

// Sample questions database
const questionsDB: Record<string, GeoQuestion[]> = {
  country: [
    { id: 'c1', type: 'country', question: 'Какая страна отмечена на карте?', options: ['Россия', 'Канада', 'Китай', 'США'], correctAnswer: 0, hint: 'Самая большая страна в мире', points: 10 },
    { id: 'c2', type: 'country', question: 'В какой стране находится город Париж?', options: ['Германия', 'Франция', 'Италия', 'Испания'], correctAnswer: 1, hint: 'Страна Эйфелевой башни', points: 10 },
    { id: 'c3', type: 'country', question: 'Какая страна находится на островах?', options: ['Германия', 'Япония', 'Польша', 'Франция'], correctAnswer: 1, hint: 'Страна восходящего солнца', points: 10 },
    { id: 'c4', type: 'country', question: 'Где находятся пирамиды Гизы?', options: ['Мексика', 'Египет', 'Перу', 'Судан'], correctAnswer: 1, hint: 'Страна на реке Нил', points: 10 },
    { id: 'c5', type: 'country', question: 'Столица Австралии?', options: ['Сидней', 'Мельбурн', 'Канберра', 'Брисбен'], correctAnswer: 2, hint: 'Не самый большой город страны', points: 15 },
    { id: 'c6', type: 'country', question: 'Какая страна самая населённая?', options: ['Индия', 'Китай', 'США', 'Индонезия'], correctAnswer: 0, hint: 'Страна в Южной Азии', points: 15 },
    { id: 'c7', type: 'country', question: 'Где находится Амазонка?', options: ['Перу', 'Бразилия', 'Колумбия', 'Венесуэла'], correctAnswer: 1, hint: 'Самая большая страна Южной Америки', points: 10 },
    { id: 'c8', type: 'country', question: 'Какая страна в Европе самая большая?', options: ['Германия', 'Франция', 'Испания', 'Украина'], correctAnswer: 1, hint: 'Страна с самым посещаемым музеем', points: 15 },
    { id: 'c9', type: 'country', question: 'Где находится Мачу-Пикчу?', options: ['Боливия', 'Перу', 'Чили', 'Эквадор'], correctAnswer: 1, hint: 'Страна в Андах', points: 15 },
    { id: 'c10', type: 'country', question: 'Страна тысячи озёр?', options: ['Швеция', 'Норвегия', 'Финляндия', 'Дания'], correctAnswer: 2, hint: 'Соседка России', points: 10 },
  ],
  capital: [
    { id: 'cap1', type: 'capital', question: 'Столица России?', options: ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Казань'], correctAnswer: 0, points: 10 },
    { id: 'cap2', type: 'capital', question: 'Столица Великобритании?', options: ['Манчестер', 'Ливерпуль', 'Лондон', 'Эдинбург'], correctAnswer: 2, points: 10 },
    { id: 'cap3', type: 'capital', question: 'Столица Германии?', options: ['Мюнхен', 'Гамбург', 'Берлин', 'Франкфурт'], correctAnswer: 2, points: 10 },
    { id: 'cap4', type: 'capital', question: 'Столица Китая?', options: ['Шанхай', 'Пекин', 'Гонконг', 'Гуанчжоу'], correctAnswer: 1, points: 10 },
    { id: 'cap5', type: 'capital', question: 'Столица Италии?', options: ['Милан', 'Рим', 'Венеция', 'Флоренция'], correctAnswer: 1, points: 10 },
    { id: 'cap6', type: 'capital', question: 'Столица Японии?', options: ['Осака', 'Киото', 'Токио', 'Нагоя'], correctAnswer: 2, points: 10 },
    { id: 'cap7', type: 'capital', question: 'Столица Испании?', options: ['Барселона', 'Валенсия', 'Мадрид', 'Севилья'], correctAnswer: 2, points: 10 },
    { id: 'cap8', type: 'capital', question: 'Столица Бразилии?', options: ['Рио-де-Жанейро', 'Сан-Паулу', 'Бразилиа', 'Сальвадор'], correctAnswer: 2, hint: 'Не Рио и не Сан-Паулу!', points: 15 },
    { id: 'cap9', type: 'capital', question: 'Столица Индии?', options: ['Мумбаи', 'Нью-Дели', 'Калькутта', 'Бангалор'], correctAnswer: 1, points: 10 },
    { id: 'cap10', type: 'capital', question: 'Столица Канады?', options: ['Торонто', 'Ванкувер', 'Оттава', 'Монреаль'], correctAnswer: 2, hint: 'Не самый большой город', points: 15 },
  ],
  flag: [
    { id: 'f1', type: 'flag', question: '🇷🇺 Флаг какой страны?', options: ['Беларусь', 'Россия', 'Словакия', 'Словения'], correctAnswer: 1, points: 10 },
    { id: 'f2', type: 'flag', question: '🇺🇸 Флаг какой страны?', options: ['Канада', 'Великобритания', 'США', 'Австралия'], correctAnswer: 2, points: 10 },
    { id: 'f3', type: 'flag', question: '🇨🇳 Флаг какой страны?', options: ['Вьетнам', 'Китай', 'Тайвань', 'Корея'], correctAnswer: 1, points: 10 },
    { id: 'f4', type: 'flag', question: '🇯🇵 Флаг какой страны?', options: ['Корея', 'Китай', 'Япония', 'Вьетнам'], correctAnswer: 2, points: 10 },
    { id: 'f5', type: 'flag', question: '🇧🇷 Флаг какой страны?', options: ['Аргентина', 'Колумбия', 'Бразилия', 'Венесуэла'], correctAnswer: 2, points: 10 },
  ],
  landmark: [
    { id: 'l1', type: 'landmark', question: '🗼 Где находится Эйфелева башня?', options: ['Лондон', 'Париж', 'Рим', 'Берлин'], correctAnswer: 1, points: 10 },
    { id: 'l2', type: 'landmark', question: '🗽 Где находится Статуя Свободы?', options: ['Вашингтон', 'Лос-Анджелес', 'Нью-Йорк', 'Чикаго'], correctAnswer: 2, points: 10 },
    { id: 'l3', type: 'landmark', question: '🏛️ Где находится Колизей?', options: ['Афины', 'Рим', 'Милан', 'Барселона'], correctAnswer: 1, points: 10 },
    { id: 'l4', type: 'landmark', question: '🏛️ Где находится Тадж-Махал?', options: ['Пакистан', 'Индия', 'Бангладеш', 'Непал'], correctAnswer: 1, points: 10 },
    { id: 'l5', type: 'landmark', question: '🌉 Где находится мост Золотые Ворота?', options: ['Сиэтл', 'Лос-Анджелес', 'Сан-Франциско', 'Сан-Диего'], correctAnswer: 2, points: 15 },
  ],
  physical: [
    { id: 'p1', type: 'physical', question: '🏔️ Самая высокая гора мира?', options: ['Килиманджаро', 'Эверест', 'Эльбрус', 'Мак-Кинли'], correctAnswer: 1, points: 10 },
    { id: 'p2', type: 'physical', question: '🌊 Самая длинная река мира?', options: ['Амазонка', 'Нил', 'Миссисипи', 'Янцзы'], correctAnswer: 0, hint: 'В Южной Америке', points: 15 },
    { id: 'p3', type: 'physical', question: '🌊 Самый большой океан?', options: ['Атлантический', 'Индийский', 'Тихий', 'Северный Ледовитый'], correctAnswer: 2, points: 10 },
    { id: 'p4', type: 'physical', question: '🏜️ Самая большая пустыня?', options: ['Сахара', 'Гоби', 'Аравийская', 'Калахари'], correctAnswer: 0, points: 10 },
    { id: 'p5', type: 'physical', question: '🌊 Самое глубокое озеро?', options: ['Каспийское море', 'Байкал', 'Танганьика', 'Виктория'], correctAnswer: 1, points: 15 },
  ]
}

type Difficulty = 'easy' | 'hard'
type QuizState = 'menu' | 'playing' | 'result'

export default function GeographyQuiz({ onBack, onComplete }: GeographyQuizProps) {
  const { playSuccess, playError, playWin, isMuted, toggleMute } = useSound()
  const [state, setState] = useState<QuizState>('menu')
  const [difficulty, setDifficulty] = useState<Difficulty>('easy')
  const [currentQuestions, setCurrentQuestions] = useState<GeoQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [showResult, setShowResult] = useState(false)

  // Timer
  useEffect(() => {
    if (state !== 'playing' || selectedAnswer !== null) return
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleAnswer(-1)
          return 30
        }
        return prev - 1
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [state, selectedAnswer, currentIndex])

  const startQuiz = useCallback((diff: Difficulty) => {
    setDifficulty(diff)
    const allQuestions: GeoQuestion[] = []
    
    // Get questions based on difficulty
    const questionCount = diff === 'easy' ? 10 : 15
    
    // Easy: only country and capital
    // Hard: all types
    const types = diff === 'easy' 
      ? ['country', 'capital'] 
      : ['country', 'capital', 'flag', 'landmark', 'physical']
    
    types.forEach(type => {
      const typeQuestions = questionsDB[type]
      const shuffled = [...typeQuestions].sort(() => Math.random() - 0.5)
      const count = Math.ceil(questionCount / types.length)
      allQuestions.push(...shuffled.slice(0, count))
    })
    
    // Shuffle and limit
    const shuffled = allQuestions.sort(() => Math.random() - 0.5).slice(0, questionCount)
    
    setCurrentQuestions(shuffled)
    setCurrentIndex(0)
    setScore(0)
    setCorrectCount(0)
    setTimeLeft(30)
    setSelectedAnswer(null)
    setShowHint(false)
    setShowResult(false)
    setState('playing')
  }, [])

  const handleAnswer = useCallback((answerIndex: number) => {
    if (selectedAnswer !== null) return
    
    setSelectedAnswer(answerIndex)
    const question = currentQuestions[currentIndex]
    const isCorrect = answerIndex === question.correctAnswer
    
    if (isCorrect) {
      playSuccess()
      const bonusPoints = Math.floor(timeLeft / 3) // Time bonus
      setScore(prev => prev + question.points + bonusPoints)
      setCorrectCount(prev => prev + 1)
    } else {
      playError()
    }
    
    setShowResult(true)
    
    setTimeout(() => {
      if (currentIndex < currentQuestions.length - 1) {
        setCurrentIndex(prev => prev + 1)
        setSelectedAnswer(null)
        setShowHint(false)
        setShowResult(false)
        setTimeLeft(30)
      } else {
        playWin()
        setState('result')
      }
    }, 1500)
  }, [selectedAnswer, currentQuestions, currentIndex, timeLeft, playSuccess, playError, playWin])

  const renderMenu = () => (
    <div className="space-y-6">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-6xl mb-4">🌍</div>
        <h2 className="text-2xl font-bold mb-2">География Викторина</h2>
        <p className="text-gray-400">Проверь свои знания о мире!</p>
      </motion.div>

      <div className="grid gap-4 max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card 
            className="cursor-pointer border-2 border-green-400/30 hover:border-green-400/60 transition-all bg-gradient-to-br from-green-500/10 to-emerald-500/10"
            onClick={() => startQuiz('easy')}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🌱</div>
                <div>
                  <h3 className="text-xl font-bold text-green-400">Лёгкий</h3>
                  <p className="text-sm text-gray-400">Страны и столицы</p>
                  <p className="text-xs text-gray-500 mt-1">10 вопросов</p>
                </div>
                <ChevronRight className="w-6 h-6 text-green-400 ml-auto" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card 
            className="cursor-pointer border-2 border-orange-400/30 hover:border-orange-400/60 transition-all bg-gradient-to-br from-orange-500/10 to-red-500/10"
            onClick={() => startQuiz('hard')}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🏔️</div>
                <div>
                  <h3 className="text-xl font-bold text-orange-400">Сложный</h3>
                  <p className="text-sm text-gray-400">Все категории</p>
                  <p className="text-xs text-gray-500 mt-1">15 вопросов</p>
                </div>
                <ChevronRight className="w-6 h-6 text-orange-400 ml-auto" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Categories Info */}
      <motion.div
        className="grid grid-cols-5 gap-2 max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="text-center p-2 bg-white/5 rounded-lg">
          <Globe className="w-5 h-5 mx-auto mb-1 text-blue-400" />
          <span className="text-xs text-gray-400">Страны</span>
        </div>
        <div className="text-center p-2 bg-white/5 rounded-lg">
          <Building className="w-5 h-5 mx-auto mb-1 text-purple-400" />
          <span className="text-xs text-gray-400">Столицы</span>
        </div>
        <div className="text-center p-2 bg-white/5 rounded-lg">
          <Flag className="w-5 h-5 mx-auto mb-1 text-red-400" />
          <span className="text-xs text-gray-400">Флаги</span>
        </div>
        <div className="text-center p-2 bg-white/5 rounded-lg">
          <Target className="w-5 h-5 mx-auto mb-1 text-amber-400" />
          <span className="text-xs text-gray-400">Достопримечательности</span>
        </div>
        <div className="text-center p-2 bg-white/5 rounded-lg">
          <Mountain className="w-5 h-5 mx-auto mb-1 text-green-400" />
          <span className="text-xs text-gray-400">География</span>
        </div>
      </motion.div>
    </div>
  )

  const renderQuestion = () => {
    const question = currentQuestions[currentIndex]
    if (!question) return null

    const typeIcons: Record<QuestionType, React.ReactNode> = {
      country: <Globe className="w-5 h-5 text-blue-400" />,
      capital: <Building className="w-5 h-5 text-purple-400" />,
      flag: <Flag className="w-5 h-5 text-red-400" />,
      landmark: <Target className="w-5 h-5 text-amber-400" />,
      physical: <Mountain className="w-5 h-5 text-green-400" />
    }

    return (
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {typeIcons[question.type]}
            <span className="text-sm text-gray-400">
              {currentIndex + 1} / {currentQuestions.length}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="font-bold">{score}</span>
            </div>
            <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${
              timeLeft <= 10 ? 'bg-red-500/20 text-red-400' : 'bg-white/10'
            }`}>
              <Clock className="w-4 h-4" />
              <span className="font-mono">{timeLeft}с</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-teal-400 to-cyan-500"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / currentQuestions.length) * 100}%` }}
          />
        </div>

        {/* Question Card */}
        <Card className="border-2 border-white/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              {question.image && <span className="text-3xl">{question.image}</span>}
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* Options */}
            <div className="grid gap-2">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = index === question.correctAnswer
                const showCorrect = showResult && isCorrect
                const showWrong = showResult && isSelected && !isCorrect

                return (
                  <motion.button
                    key={index}
                    onClick={() => !selectedAnswer && handleAnswer(index)}
                    className={`w-full p-4 rounded-xl text-left transition-all ${
                      showCorrect
                        ? 'bg-green-500/30 border-2 border-green-400'
                        : showWrong
                        ? 'bg-red-500/30 border-2 border-red-400'
                        : isSelected
                        ? 'bg-white/20 border-2 border-white/40'
                        : 'bg-white/5 border-2 border-transparent hover:border-white/20 hover:bg-white/10'
                    } ${selectedAnswer !== null ? 'cursor-default' : 'cursor-pointer'}`}
                    whileHover={!selectedAnswer ? { scale: 1.02 } : {}}
                    whileTap={!selectedAnswer ? { scale: 0.98 } : {}}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-sm font-bold">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="font-medium">{option}</span>
                      {showCorrect && <Sparkles className="w-5 h-5 text-green-400 ml-auto" />}
                      {showWrong && <span className="ml-auto text-red-400">✕</span>}
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* Hint Button */}
            {!selectedAnswer && question.hint && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHint(!showHint)}
                className="text-gray-400"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                {showHint ? question.hint : 'Показать подсказку'}
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  const renderResult = () => {
    const percentage = Math.round((correctCount / currentQuestions.length) * 100)
    const stars = percentage >= 90 ? 3 : percentage >= 70 ? 2 : percentage >= 50 ? 1 : 0
    const xp = score + (stars * 20)

    return (
      <motion.div 
        className="text-center space-y-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="text-6xl">
          {stars >= 3 ? '🏆' : stars >= 2 ? '🥈' : stars >= 1 ? '🥉' : '📚'}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">
            {stars >= 3 ? 'Отлично!' : stars >= 2 ? 'Хорошо!' : stars >= 1 ? 'Неплохо!' : 'Попробуй ещё!'}
          </h2>
          <p className="text-gray-400">
            Правильных ответов: {correctCount} из {currentQuestions.length}
          </p>
        </div>

        {/* Stars */}
        <div className="flex justify-center gap-2">
          {[1, 2, 3].map(i => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: i <= stars ? 1 : 0.5, rotate: 0 }}
              transition={{ delay: i * 0.2, type: 'spring' }}
            >
              <Star 
                className={`w-10 h-10 ${i <= stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
              />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
          <Card className="bg-white/5">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">{score}</div>
              <div className="text-sm text-gray-400">Очки</div>
            </CardContent>
          </Card>
          <Card className="bg-white/5">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-teal-400">{percentage}%</div>
              <div className="text-sm text-gray-400">Результат</div>
            </CardContent>
          </Card>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 max-w-xs mx-auto">
          <Button
            onClick={() => startQuiz(difficulty)}
            className="bg-gradient-to-r from-teal-500 to-cyan-500"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Играть снова
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              onComplete(stars, xp)
              onBack()
            }}
          >
            Завершить
          </Button>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <motion.div 
        className="flex items-center justify-between mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        {state !== 'menu' && (
          <Button
            variant="ghost"
            onClick={() => state === 'playing' ? setState('menu') : onBack()}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {state === 'playing' ? 'В меню' : 'Назад'}
          </Button>
        )}
        {state === 'menu' && (
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Назад
          </Button>
        )}
        
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌍</span>
          <span className="font-bold">География</span>
        </div>

        <Button variant="ghost" size="icon" onClick={toggleMute}>
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </Button>
      </motion.div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={state}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {state === 'menu' && renderMenu()}
          {state === 'playing' && renderQuestion()}
          {state === 'result' && renderResult()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
