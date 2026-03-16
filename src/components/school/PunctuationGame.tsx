'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HelpCircle, Trophy, RotateCcw, Star, Zap, PenTool } from 'lucide-react'
import { useSound } from '@/hooks/useSound'

// Типы
interface PunctuationSentence {
  sentence: string
  correctAnswer: string
  options: string[]
  rule: string
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
}

// База предложений с правилами пунктуации
const punctuationSentences: PunctuationSentence[] = [
  // Запятая при однородных членах
  {
    sentence: 'На столе лежали книги тетради и ручки.',
    correctAnswer: 'На столе лежали книги, тетради и ручки.',
    options: [
      'На столе лежали книги, тетради и ручки.',
      'На столе лежали книги тетради и ручки.',
      'На столе лежали книги, тетради, и ручки.'
    ],
    rule: 'Запятая между однородными членами',
    explanation: 'Однородные члены разделяются запятыми. Перед союзом "и" запятая не ставится, если он используется один раз.',
    difficulty: 'easy',
    category: 'homogeneous'
  },
  {
    sentence: 'Дети играли бегали прыгали смеялись.',
    correctAnswer: 'Дети играли, бегали, прыгали, смеялись.',
    options: [
      'Дети играли, бегали, прыгали, смеялись.',
      'Дети играли бегали прыгали смеялись.',
      'Дети играли, бегали, прыгались смеялись.'
    ],
    rule: 'Запятая между однородными членами без союзов',
    explanation: 'Если однородные члены соединены только интонацией (без союзов), между ними ставятся запятые.',
    difficulty: 'easy',
    category: 'homogeneous'
  },
  // Обособленные определения
  {
    sentence: 'Книга прочитанная мною была интересной.',
    correctAnswer: 'Книга, прочитанная мною, была интересной.',
    options: [
      'Книга, прочитанная мною, была интересной.',
      'Книга прочитанная мною была интересной.',
      'Книга прочитанная мною, была интересной.'
    ],
    rule: 'Обособление причастного оборота',
    explanation: 'Причастный оборот, стоящий после определяемого слова, обособляется запятыми.',
    difficulty: 'medium',
    category: 'participle'
  },
  {
    sentence: 'Уставший после дороги путник присел отдохнуть.',
    correctAnswer: 'Уставший после дороги, путник присел отдохнуть.',
    options: [
      'Уставший после дороги, путник присел отдохнуть.',
      'Уставший после дороги путник присел отдохнуть.',
      'Уставший, после дороги путник присел отдохнуть.'
    ],
    rule: 'Обособление определения',
    explanation: 'Определение, стоящее перед определяемым словом, обособляется, если имеет добавочное обстоятельственное значение.',
    difficulty: 'hard',
    category: 'participle'
  },
  // Обособленные обстоятельства
  {
    sentence: 'Он говорил волнуясь.',
    correctAnswer: 'Он говорил, волнуясь.',
    options: [
      'Он говорил, волнуясь.',
      'Он говорил волнуясь.',
      'Он, говорил волнуясь.'
    ],
    rule: 'Обособление деепричастного оборота',
    explanation: 'Деепричастный оборот всегда обособляется запятыми.',
    difficulty: 'medium',
    category: 'adverbial'
  },
  {
    sentence: 'Вернувшись домой он сразу лёг спать.',
    correctAnswer: 'Вернувшись домой, он сразу лёг спать.',
    options: [
      'Вернувшись домой, он сразу лёг спать.',
      'Вернувшись домой он сразу лёг спать.',
      'Вернувшись, домой он сразу лёг спать.'
    ],
    rule: 'Обособление деепричастного оборота',
    explanation: 'Деепричастный оборот в начале предложения отделяется запятой.',
    difficulty: 'medium',
    category: 'adverbial'
  },
  // Вводные слова
  {
    sentence: 'К сожалению мы опоздали.',
    correctAnswer: 'К сожалению, мы опоздали.',
    options: [
      'К сожалению, мы опоздали.',
      'К сожалению мы опоздали.',
      'К сожалению мы, опоздали.'
    ],
    rule: 'Выделение вводных слов',
    explanation: 'Вводные слова выделяются запятыми.',
    difficulty: 'easy',
    category: 'introductory'
  },
  {
    sentence: 'Это было по-моему очень красиво.',
    correctAnswer: 'Это было, по-моему, очень красиво.',
    options: [
      'Это было, по-моему, очень красиво.',
      'Это было по-моему очень красиво.',
      'Это было по-моему, очень красиво.'
    ],
    rule: 'Выделение вводных слов',
    explanation: 'Вводные слова в середине предложения выделяются запятыми с обеих сторон.',
    difficulty: 'easy',
    category: 'introductory'
  },
  {
    sentence: 'Во-первых это важно а во-вторых это интересно.',
    correctAnswer: 'Во-первых, это важно, а во-вторых, это интересно.',
    options: [
      'Во-первых, это важно, а во-вторых, это интересно.',
      'Во-первых это важно а во-вторых это интересно.',
      'Во-первых, это важно а во-вторых это интересно.'
    ],
    rule: 'Выделение вводных слов-организаторов',
    explanation: 'Вводные слова "во-первых", "во-вторых" и т.д. всегда выделяются запятыми.',
    difficulty: 'medium',
    category: 'introductory'
  },
  // Обращения
  {
    sentence: 'Мама купи мне книгу.',
    correctAnswer: 'Мама, купи мне книгу.',
    options: [
      'Мама, купи мне книгу.',
      'Мама купи мне книгу.',
      'Мама купи, мне книгу.'
    ],
    rule: 'Выделение обращения',
    explanation: 'Обращения всегда выделяются запятыми.',
    difficulty: 'easy',
    category: 'address'
  },
  {
    sentence: 'Иван Иванович можно войти?',
    correctAnswer: 'Иван Иванович, можно войти?',
    options: [
      'Иван Иванович, можно войти?',
      'Иван Иванович можно войти?',
      'Иван, Иванович можно войти?'
    ],
    rule: 'Выделение обращения',
    explanation: 'Обращения выделяются запятыми независимо от места в предложении.',
    difficulty: 'easy',
    category: 'address'
  },
  // Сложносочинённые предложения
  {
    sentence: 'Солнце село и стало прохладно.',
    correctAnswer: 'Солнце село, и стало прохладно.',
    options: [
      'Солнце село, и стало прохладно.',
      'Солнце село и стало прохладно.',
      'Солнце, село и стало прохладно.'
    ],
    rule: 'Запятая в ССП',
    explanation: 'В сложносочинённом предложении части разделяются запятой перед союзом.',
    difficulty: 'medium',
    category: 'compound'
  },
  {
    sentence: 'Дождь шёл но дети продолжали играть.',
    correctAnswer: 'Дождь шёл, но дети продолжали играть.',
    options: [
      'Дождь шёл, но дети продолжали играть.',
      'Дождь шёл но дети продолжали играть.',
      'Дождь, шёл но дети продолжали играть.'
    ],
    rule: 'Запятая в ССП с союзом "но"',
    explanation: 'Перед союзом "но" в сложносочинённом предложении ставится запятая.',
    difficulty: 'medium',
    category: 'compound'
  },
  // Сложноподчинённые предложения
  {
    sentence: 'Я знаю что он придёт.',
    correctAnswer: 'Я знаю, что он придёт.',
    options: [
      'Я знаю, что он придёт.',
      'Я знаю что он придёт.',
      'Я, знаю что он придёт.'
    ],
    rule: 'Запятая в СПП',
    explanation: 'В сложноподчинённом предложении главная и придаточная части разделяются запятой.',
    difficulty: 'medium',
    category: 'complex'
  },
  {
    sentence: 'Когда пришла весна снег растаял.',
    correctAnswer: 'Когда пришла весна, снег растаял.',
    options: [
      'Когда пришла весна, снег растаял.',
      'Когда пришла весна снег растаял.',
      'Когда, пришла весна снег растаял.'
    ],
    rule: 'Запятая в СПП с придаточным времени',
    explanation: 'Придаточное предложение в начале отделяется от главного запятой.',
    difficulty: 'medium',
    category: 'complex'
  },
  {
    sentence: 'Книга которую я прочитал была интересной.',
    correctAnswer: 'Книга, которую я прочитал, была интересной.',
    options: [
      'Книга, которую я прочитал, была интересной.',
      'Книга которую я прочитал была интересной.',
      'Книга, которую я прочитал была интересной.'
    ],
    rule: 'Выделение придаточного определительного',
    explanation: 'Придаточное определительное выделяется запятыми с обеих сторон.',
    difficulty: 'hard',
    category: 'complex'
  },
  // Прямая речь
  {
    sentence: 'Учитель сказал садитесь.',
    correctAnswer: 'Учитель сказал: «Садитесь».',
    options: [
      'Учитель сказал: «Садитесь».',
      'Учитель сказал садитесь.',
      'Учитель сказал: «Садитесь».',
    ],
    rule: 'Оформление прямой речи',
    explanation: 'Прямая речь заключается в кавычки и отделяется от слов автора двоеточием.',
    difficulty: 'hard',
    category: 'direct-speech'
  },
  // Тире между подлежащим и сказуемым
  {
    sentence: 'Москва столица России.',
    correctAnswer: 'Москва — столица России.',
    options: [
      'Москва — столица России.',
      'Москва столица России.',
      'Москва, столица России.'
    ],
    rule: 'Тире между подлежащим и сказуемым',
    explanation: 'Если оба главных члена выражены существительными в именительном падеже, между ними ставится тире.',
    difficulty: 'hard',
    category: 'dash'
  },
  {
    sentence: 'Учить дело полезное.',
    correctAnswer: 'Учить — дело полезное.',
    options: [
      'Учить — дело полезное.',
      'Учить дело полезное.',
      'Учить, дело полезное.'
    ],
    rule: 'Тире при инфинитиве',
    explanation: 'Если подлежащее выражено инфинитивом, а сказуемое — существительным, ставится тире.',
    difficulty: 'hard',
    category: 'dash'
  }
]

// Настройки уровней сложности
const difficultySettings = {
  easy: {
    name: 'Легко',
    questions: 5,
    timeLimit: 0,
    categories: ['homogeneous', 'introductory', 'address'],
    xpReward: 50
  },
  medium: {
    name: 'Средне',
    questions: 8,
    timeLimit: 25,
    categories: ['homogeneous', 'introductory', 'address', 'participle', 'adverbial', 'compound', 'complex'],
    xpReward: 100
  },
  hard: {
    name: 'Сложно',
    questions: 10,
    timeLimit: 20,
    categories: ['participle', 'adverbial', 'compound', 'complex', 'direct-speech', 'dash'],
    xpReward: 150
  }
}

interface PunctuationGameProps {
  onExperience?: (xp: number) => void
  gradeId?: number
}

export default function PunctuationGame({ onExperience, gradeId = 1 }: PunctuationGameProps) {
  const { playSuccess, playError, playWin, playLevelUp, muted, toggleMute } = useSound()
  
  // Состояния игры
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'result'>('menu')
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState<PunctuationSentence[]>([])
  const [wrongAnswers, setWrongAnswers] = useState<{ sentence: PunctuationSentence; selected: string }[]>([])
  
  // Фильтрация предложений по сложности
  const filteredSentences = useMemo(() => {
    const settings = difficultySettings[difficulty]
    return punctuationSentences.filter(s => settings.categories.includes(s.category))
  }, [difficulty])
  
  // Выбор случайных предложений
  const gameSentences = useMemo(() => {
    const settings = difficultySettings[difficulty]
    const shuffled = [...filteredSentences].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, settings.questions)
  }, [filteredSentences, difficulty])
  
  // Функции в правильном порядке
  const endGame = useCallback(() => {
    if (!muted) playWin()
    setGameState('result')
    
    const settings = difficultySettings[difficulty]
    const earnedXP = Math.floor((score / (settings.questions * 10)) * settings.xpReward)
    if (onExperience) {
      onExperience(earnedXP)
    }
  }, [difficulty, score, onExperience, muted, playWin])
  
  const moveToNextQuestion = useCallback(() => {
    if (currentQuestion >= gameSentences.length - 1) {
      endGame()
    } else {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setShowHint(false)
      setTimeLeft(difficultySettings[difficulty].timeLimit)
    }
  }, [currentQuestion, gameSentences.length, difficulty, endGame])
  
  const handleTimeout = useCallback(() => {
    if (!muted) playError()
    const currentSentence = gameSentences[currentQuestion]
    setWrongAnswers(prev => [...prev, { sentence: currentSentence, selected: '' }])
    setStreak(0)
    setShowResult(true)
    
    setTimeout(() => {
      moveToNextQuestion()
    }, 2000)
  }, [currentQuestion, gameSentences, muted, playError, moveToNextQuestion])
  
  const handleAnswer = useCallback((answer: string) => {
    if (showResult) return
    
    const currentSentence = gameSentences[currentQuestion]
    const isCorrect = answer === currentSentence.correctAnswer
    
    setSelectedAnswer(answer)
    setShowResult(true)
    
    if (isCorrect) {
      if (!muted) playSuccess()
      setScore(prev => prev + (10 + streak * 2))
      setStreak(prev => prev + 1)
      setCorrectAnswers(prev => [...prev, currentSentence])
      
      if (streak > 0 && (streak + 1) % 5 === 0 && !muted) {
        playLevelUp()
      }
    } else {
      if (!muted) playError()
      setStreak(0)
      setWrongAnswers(prev => [...prev, { sentence: currentSentence, selected: answer }])
    }
    
    setTimeout(() => {
      moveToNextQuestion()
    }, 2500)
  }, [showResult, currentQuestion, gameSentences, streak, muted, playSuccess, playError, playLevelUp, moveToNextQuestion])
  
  // Таймер
  useEffect(() => {
    if (gameState !== 'playing' || showResult) return
    
    const settings = difficultySettings[difficulty]
    if (settings.timeLimit === 0) return
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleTimeout()
          return settings.timeLimit
        }
        return prev - 1
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [gameState, currentQuestion, showResult, difficulty, handleTimeout])
  
  const startGame = useCallback((diff: 'easy' | 'medium' | 'hard') => {
    setDifficulty(diff)
    setCurrentQuestion(0)
    setScore(0)
    setStreak(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setShowHint(false)
    setTimeLeft(difficultySettings[diff].timeLimit)
    setCorrectAnswers([])
    setWrongAnswers([])
    setGameState('playing')
  }, [])
  
  const resetGame = useCallback(() => {
    setGameState('menu')
  }, [])
  
  // Меню игры
  if (gameState === 'menu') {
    return (
      <Card className="p-6 bg-gradient-to-br from-indigo-900/50 to-violet-900/50 backdrop-blur-lg border-white/20">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <PenTool className="w-16 h-16 text-indigo-300" />
            </motion.div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Пунктуация</h2>
          <p className="text-white/70">Расставь знаки препинания правильно!</p>
        </div>
        
        <div className="flex justify-end mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMute}
            className="text-white/70 hover:text-white"
          >
            {muted ? '🔇' : '🔊'}
          </Button>
        </div>
        
        <div className="space-y-3">
          {(Object.keys(difficultySettings) as Array<'easy' | 'medium' | 'hard'>).map(diff => {
            const settings = difficultySettings[diff]
            return (
              <motion.button
                key={diff}
                onClick={() => startGame(diff)}
                className={cn(
                  'w-full p-4 rounded-xl text-left transition-all',
                  'bg-white/10 hover:bg-white/20 border border-white/20',
                  diff === 'easy' && 'hover:border-green-400/50',
                  diff === 'medium' && 'hover:border-yellow-400/50',
                  diff === 'hard' && 'hover:border-red-400/50'
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-white">{settings.name}</div>
                    <div className="text-sm text-white/60">
                      {settings.questions} предложений
                      {settings.timeLimit > 0 && ` • ${settings.timeLimit} сек`}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Zap className="w-4 h-4" />
                    <span className="font-bold">{settings.xpReward} XP</span>
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>
        
        <div className="mt-6 p-4 bg-white/5 rounded-xl">
          <h3 className="font-bold text-white/90 mb-2">📝 Изучаемые правила:</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-white/70">
            <span>• Однородные члены</span>
            <span>• Причастные обороты</span>
            <span>• Деепричастные обороты</span>
            <span>• Вводные слова</span>
            <span>• Обращения</span>
            <span>• Сложные предложения</span>
            <span>• Прямая речь</span>
            <span>• Тире в предложении</span>
          </div>
        </div>
      </Card>
    )
  }
  
  // Результаты игры
  if (gameState === 'result') {
    const settings = difficultySettings[difficulty]
    const earnedXP = Math.floor((score / (settings.questions * 10)) * settings.xpReward)
    const percentage = Math.round((correctAnswers.length / gameSentences.length) * 100)
    
    return (
      <Card className="p-6 bg-gradient-to-br from-indigo-900/50 to-violet-900/50 backdrop-blur-lg border-white/20">
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Trophy className={cn(
              'w-20 h-20 mx-auto mb-4',
              percentage >= 80 ? 'text-yellow-400' : percentage >= 50 ? 'text-gray-300' : 'text-amber-600'
            )} />
          </motion.div>
          
          <h2 className="text-2xl font-bold text-white mb-2">
            {percentage >= 80 ? 'Отлично! 🎉' : percentage >= 50 ? 'Хорошо! 👍' : 'Попробуй ещё! 💪'}
          </h2>
          
          <div className="flex justify-center gap-6 mb-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{correctAnswers.length}</div>
              <div className="text-sm text-white/60">Правильно</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{wrongAnswers.length}</div>
              <div className="text-sm text-white/60">Ошибок</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">{score}</div>
              <div className="text-sm text-white/60">Очков</div>
            </div>
          </div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center items-center gap-2 bg-yellow-500/20 px-4 py-2 rounded-full"
          >
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-xl font-bold text-yellow-400">+{earnedXP} XP</span>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-lg font-bold text-white">{percentage}%</div>
            <div className="text-xs text-white/60">Точность</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-lg font-bold text-white">{difficultySettings[difficulty].name}</div>
            <div className="text-xs text-white/60">Сложность</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-lg font-bold text-white">{streak}</div>
            <div className="text-xs text-white/60">Лучшая серия</div>
          </div>
        </div>
        
        {wrongAnswers.length > 0 && (
          <div className="mb-6 p-4 bg-red-500/10 rounded-xl">
            <h3 className="font-bold text-white/90 mb-2">📝 Работа над ошибками:</h3>
            <div className="space-y-3">
              {wrongAnswers.slice(0, 3).map((item, i) => (
                <div key={i} className="text-sm space-y-1">
                  <p className="text-white/80"><strong>Исходное:</strong> {item.sentence.sentence}</p>
                  <p className="text-green-300"><strong>Правильно:</strong> {item.sentence.correctAnswer}</p>
                  <p className="text-white/50 text-xs">{item.sentence.rule}: {item.sentence.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={resetGame}
            className="flex-1 border-white/20 text-white hover:bg-white/10"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Меню
          </Button>
          <Button
            onClick={() => startGame(difficulty)}
            className="flex-1 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600"
          >
            Ещё раз
          </Button>
        </div>
      </Card>
    )
  }
  
  // Игровой процесс
  const currentSentence = gameSentences[currentQuestion]
  const settings = difficultySettings[difficulty]
  const progress = ((currentQuestion + 1) / gameSentences.length) * 100
  
  return (
    <Card className="p-4 sm:p-6 bg-gradient-to-br from-indigo-900/50 to-violet-900/50 backdrop-blur-lg border-white/20">
      {/* Заголовок */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <PenTool className="w-5 h-5 text-indigo-300" />
          <span className="font-bold text-white">Пунктуация</span>
        </div>
        <div className="flex items-center gap-3">
          {streak > 0 && (
            <motion.div
              key={streak}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 bg-orange-500/20 px-2 py-1 rounded-full"
            >
              <span className="text-sm">🔥</span>
              <span className="text-orange-300 font-bold text-sm">{streak}</span>
            </motion.div>
          )}
          <Button variant="ghost" size="sm" onClick={toggleMute} className="text-white/70 hover:text-white h-8 w-8 p-0">
            {muted ? '🔇' : '🔊'}
          </Button>
        </div>
      </div>
      
      {/* Прогресс */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-white/70 mb-1">
          <span>{currentQuestion + 1} / {gameSentences.length}</span>
          {settings.timeLimit > 0 && (
            <span className={cn(timeLeft <= 5 && 'text-red-400')}>⏱ {timeLeft} сек</span>
          )}
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-400 to-violet-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      {/* Счёт */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-white font-bold">{score}</span>
        </div>
        <div className="flex items-center gap-2 text-yellow-400">
          <Zap className="w-4 h-4" />
          <span className="text-sm">{settings.xpReward} XP</span>
        </div>
      </div>
      
      {/* Вопрос */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="mb-6"
        >
          {/* Предложение с ошибкой */}
          <div className="text-center mb-4">
            <p className="text-white/70 text-sm mb-2">Расставь знаки препинания:</p>
            <motion.div
              className="text-lg sm:text-xl font-medium text-white py-4 px-4 bg-white/10 rounded-xl"
              animate={showResult ? { scale: [1, 1.02, 1] } : {}}
            >
              {currentSentence.sentence}
            </motion.div>
          </div>
          
          {/* Подсказка */}
          {showHint && !showResult && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-blue-500/20 rounded-xl text-center"
            >
              <p className="text-blue-200 text-sm">💡 {currentSentence.rule}</p>
            </motion.div>
          )}
          
          {/* Варианты ответов */}
          <div className="space-y-2">
            {currentSentence.options.map((option, i) => {
              const isSelected = selectedAnswer === option
              const isCorrect = option === currentSentence.correctAnswer
              const showCorrectness = showResult
              
              return (
                <motion.button
                  key={i}
                  onClick={() => handleAnswer(option)}
                  disabled={showResult}
                  className={cn(
                    'w-full p-3 sm:p-4 rounded-xl text-left transition-all text-sm sm:text-base',
                    'border-2',
                    !showCorrectness && 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40',
                    showCorrectness && isCorrect && 'bg-green-500/30 border-green-400 text-green-100',
                    showCorrectness && isSelected && !isCorrect && 'bg-red-500/30 border-red-400 text-red-100',
                    showCorrectness && !isSelected && !isCorrect && 'opacity-40'
                  )}
                  whileHover={!showResult ? { scale: 1.01 } : {}}
                  whileTap={!showResult ? { scale: 0.99 } : {}}
                >
                  {option}
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Результат ответа */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={cn(
              'p-4 rounded-xl mb-4',
              selectedAnswer === currentSentence.correctAnswer
                ? 'bg-green-500/20 border border-green-400/30'
                : 'bg-red-500/20 border border-red-400/30'
            )}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">
                {selectedAnswer === currentSentence.correctAnswer ? '✅' : '❌'}
              </span>
              <span className="font-bold text-white">
                {selectedAnswer === currentSentence.correctAnswer ? 'Правильно!' : 'Ошибка!'}
              </span>
            </div>
            <p className="text-white/80 text-sm mb-2">
              <strong>Правильный ответ:</strong>
            </p>
            <p className="text-green-300 text-sm mb-2 font-medium">
              {currentSentence.correctAnswer}
            </p>
            <p className="text-white/70 text-sm">
              📚 <strong>{currentSentence.rule}</strong>: {currentSentence.explanation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Кнопка подсказки */}
      {!showResult && !showHint && (
        <Button
          variant="ghost"
          onClick={() => setShowHint(true)}
          className="w-full text-white/70 hover:text-white hover:bg-white/10"
        >
          <HelpCircle className="w-4 h-4 mr-2" />
          Подсказка
        </Button>
      )}
    </Card>
  )
}
