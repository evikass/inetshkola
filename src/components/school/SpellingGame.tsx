'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Volume2, HelpCircle, Trophy, RotateCcw, Star, Zap, BookOpen } from 'lucide-react'
import { useSound } from '@/hooks/useSound'

// Типы
interface SpellingWord {
  word: string
  correctSpelling: string
  options: string[]
  rule: string
  example: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
}

// База слов с правилами орфографии
const spellingWords: SpellingWord[] = [
  // ЖИ-ШИ
  {
    word: 'ш_ло',
    correctSpelling: 'шило',
    options: ['шило', 'шыло'],
    rule: 'ЖИ-ШИ пишется с буквой И',
    example: 'Шило, шина, шить, шик',
    difficulty: 'easy',
    category: 'жи-ши'
  },
  {
    word: 'ж_знь',
    correctSpelling: 'жизнь',
    options: ['жизнь', 'жызнь'],
    rule: 'ЖИ-ШИ пишется с буквой И',
    example: 'Жизнь, жир, живой, жираф',
    difficulty: 'easy',
    category: 'жи-ши'
  },
  {
    word: 'маш_на',
    correctSpelling: 'машина',
    options: ['машина', 'машина'],
    rule: 'ЖИ-ШИ пишется с буквой И',
    example: 'Машина, шина, широко',
    difficulty: 'easy',
    category: 'жи-ши'
  },
  // ЧА-ЩА
  {
    word: 'ч_ща',
    correctSpelling: 'чаща',
    options: ['чаща', 'чяща'],
    rule: 'ЧА-ЩА пишется с буквой А',
    example: 'Чаща, чаща, чайка, чаша',
    difficulty: 'easy',
    category: 'ча-ща'
  },
  {
    word: 'щ_ка',
    correctSpelling: 'щука',
    options: ['щука', 'щюка'],
    rule: 'ЧА-ЩА пишется с буквой А',
    example: 'Щука, щавель, щадить',
    difficulty: 'easy',
    category: 'ча-ща'
  },
  {
    word: 'задач_',
    correctSpelling: 'задача',
    options: ['задача', 'задачи'],
    rule: 'ЧА-ЩА пишется с буквой А',
    example: 'Задача, удача, дача',
    difficulty: 'easy',
    category: 'ча-ща'
  },
  // ЧУ-ЩУ
  {
    word: 'ч_до',
    correctSpelling: 'чудо',
    options: ['чудо', 'чюдо'],
    rule: 'ЧУ-ЩУ пишется с буквой У',
    example: 'Чудо, чулок, чугун',
    difficulty: 'easy',
    category: 'чу-щу'
  },
  {
    word: 'щ_ка',
    correctSpelling: 'щука',
    options: ['щука', 'щюка'],
    rule: 'ЧУ-ЩУ пишется с буквой У',
    example: 'Щука, щупальце, щуриться',
    difficulty: 'easy',
    category: 'чу-щу'
  },
  // Безударные гласные
  {
    word: 'с_лова',
    correctSpelling: 'солова',
    options: ['солова', 'салава', 'сулова'],
    rule: 'Безударная гласная проверяется ударением: солóвый',
    example: 'Проверочное слово: солóвый',
    difficulty: 'medium',
    category: 'безударные'
  },
  {
    word: 'м_ря',
    correctSpelling: 'моря',
    options: ['моря', 'маря', 'меря'],
    rule: 'Безударная гласная проверяется ударением: мóре',
    example: 'Проверочное слово: мóре',
    difficulty: 'medium',
    category: 'безударные'
  },
  {
    word: 'тр_ва',
    correctSpelling: 'трава',
    options: ['трава', 'трова', 'трева'],
    rule: 'Безударная гласная проверяется ударением: трáвы',
    example: 'Проверочное слово: трáвы',
    difficulty: 'medium',
    category: 'безударные'
  },
  // Парные согласные
  {
    word: 'ду_',
    correctSpelling: 'дуб',
    options: ['дуб', 'дуп'],
    rule: 'Парная согласная проверяется: дубы',
    example: 'Проверочное слово: дубы, дубок',
    difficulty: 'medium',
    category: 'парные'
  },
  {
    word: 'сне_',
    correctSpelling: 'снег',
    options: ['снег', 'снек'],
    rule: 'Парная согласная проверяется: снега',
    example: 'Проверочное слово: снега, снежок',
    difficulty: 'medium',
    category: 'парные'
  },
  {
    word: 'ара_уз',
    correctSpelling: 'арбуз',
    options: ['арбуз', 'арпуз', 'арвуз'],
    rule: 'Парная согласная проверяется: арбузы',
    example: 'Проверочное слово: арбузы',
    difficulty: 'medium',
    category: 'парные'
  },
  // Непроизносимые согласные
  {
    word: 'солнц_',
    correctSpelling: 'солнце',
    options: ['солнце', 'сонце'],
    rule: 'Непроизносимая согласная: солнечный',
    example: 'Проверочное слово: солнечный',
    difficulty: 'hard',
    category: 'непроизносимые'
  },
  {
    word: 'серс_е',
    correctSpelling: 'сердце',
    options: ['сердце', 'серце', 'сертце'],
    rule: 'Непроизносимая согласная: сердечный',
    example: 'Проверочное слово: сердечный',
    difficulty: 'hard',
    category: 'непроизносимые'
  },
  // Разделительные знаки
  {
    word: 'под_ём',
    correctSpelling: 'подъём',
    options: ['подъём', 'подьём', 'подйом'],
    rule: 'Разделительный Ъ перед Е, Ё, Ю, Я после приставки',
    example: 'Подъём, объезд, объявление',
    difficulty: 'hard',
    category: 'разделительные'
  },
  {
    word: 'в_юга',
    correctSpelling: 'вьюга',
    options: ['вьюга', 'вйуга', 'вюга'],
    rule: 'Разделительный Ь перед гласными Е, Ё, Ю, Я, И',
    example: 'Вьюга, семья, листья',
    difficulty: 'hard',
    category: 'разделительные'
  },
  // Удвоенные согласные
  {
    word: 'ка_а',
    correctSpelling: 'касса',
    options: ['касса', 'каса'],
    rule: 'Удвоенная согласная в заимствованных словах',
    example: 'Касса, класс, группа, коллекция',
    difficulty: 'hard',
    category: 'удвоенные'
  },
  {
    word: 'кла_',
    correctSpelling: 'класс',
    options: ['класс', 'клас'],
    rule: 'Удвоенная согласная С в слове класс',
    example: 'Класс, классный, классик',
    difficulty: 'hard',
    category: 'удвоенные'
  }
]

// Настройки уровней сложности
const difficultySettings = {
  easy: {
    name: 'Легко',
    questions: 5,
    timeLimit: 0,
    categories: ['жи-ши', 'ча-ща', 'чу-щу'],
    xpReward: 50
  },
  medium: {
    name: 'Средне',
    questions: 10,
    timeLimit: 20,
    categories: ['жи-ши', 'ча-ща', 'чу-щу', 'безударные', 'парные'],
    xpReward: 100
  },
  hard: {
    name: 'Сложно',
    questions: 15,
    timeLimit: 15,
    categories: ['безударные', 'парные', 'непроизносимые', 'разделительные', 'удвоенные'],
    xpReward: 150
  }
}

interface SpellingGameProps {
  onExperience?: (xp: number) => void
  gradeId?: number
}

export default function SpellingGame({ onExperience, gradeId = 1 }: SpellingGameProps) {
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
  const [correctAnswers, setCorrectAnswers] = useState<SpellingWord[]>([])
  const [wrongAnswers, setWrongAnswers] = useState<{ word: SpellingWord; selected: string }[]>([])
  
  // Фильтрация слов по сложности
  const filteredWords = useMemo(() => {
    const settings = difficultySettings[difficulty]
    return spellingWords.filter(w => settings.categories.includes(w.category))
  }, [difficulty])
  
  // Выбор случайных слов
  const gameWords = useMemo(() => {
    const settings = difficultySettings[difficulty]
    const shuffled = [...filteredWords].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, settings.questions)
  }, [filteredWords, difficulty])
  
  // Функции в правильном порядке (сначала endGame, потом moveToNextQuestion, потом handleTimeout)
  const endGame = useCallback(() => {
    if (!muted) playWin()
    setGameState('result')
    
    // Начисление XP
    const settings = difficultySettings[difficulty]
    const earnedXP = Math.floor((score / (settings.questions * 10)) * settings.xpReward)
    if (onExperience) {
      onExperience(earnedXP)
    }
  }, [difficulty, score, onExperience, muted, playWin])
  
  const moveToNextQuestion = useCallback(() => {
    if (currentQuestion >= gameWords.length - 1) {
      endGame()
    } else {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setShowHint(false)
      setTimeLeft(difficultySettings[difficulty].timeLimit)
    }
  }, [currentQuestion, gameWords.length, difficulty, endGame])
  
  const handleTimeout = useCallback(() => {
    if (!muted) playError()
    const currentWord = gameWords[currentQuestion]
    setWrongAnswers(prev => [...prev, { word: currentWord, selected: '' }])
    setStreak(0)
    setShowResult(true)
    
    setTimeout(() => {
      moveToNextQuestion()
    }, 1500)
  }, [currentQuestion, gameWords, muted, playError, moveToNextQuestion])
  
  const handleAnswer = useCallback((answer: string) => {
    if (showResult) return
    
    const currentWord = gameWords[currentQuestion]
    const isCorrect = answer === currentWord.correctSpelling
    
    setSelectedAnswer(answer)
    setShowResult(true)
    
    if (isCorrect) {
      if (!muted) playSuccess()
      setScore(prev => prev + (10 + streak * 2))
      setStreak(prev => prev + 1)
      setCorrectAnswers(prev => [...prev, currentWord])
      
      // Звук серии
      if (streak > 0 && (streak + 1) % 5 === 0 && !muted) {
        playLevelUp()
      }
    } else {
      if (!muted) playError()
      setStreak(0)
      setWrongAnswers(prev => [...prev, { word: currentWord, selected: answer }])
    }
    
    setTimeout(() => {
      moveToNextQuestion()
    }, 2000)
  }, [showResult, currentQuestion, gameWords, streak, muted, playSuccess, playError, playLevelUp, moveToNextQuestion])
  
  // Таймер
  useEffect(() => {
    if (gameState !== 'playing' || showResult) return
    
    const settings = difficultySettings[difficulty]
    if (settings.timeLimit === 0) return
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // Время вышло - считаем как неправильный ответ
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
      <Card className="p-6 bg-gradient-to-br from-rose-900/50 to-pink-900/50 backdrop-blur-lg border-white/20">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <BookOpen className="w-16 h-16 text-rose-300" />
            </motion.div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Орфография</h2>
          <p className="text-white/70">Проверь свои знания правил правописания!</p>
        </div>
        
        {/* Кнопка звука */}
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
        
        {/* Выбор сложности */}
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
                      {settings.questions} вопросов
                      {settings.timeLimit > 0 && ` • ${settings.timeLimit} сек на вопрос`}
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
        
        {/* Правила */}
        <div className="mt-6 p-4 bg-white/5 rounded-xl">
          <h3 className="font-bold text-white/90 mb-2">📚 Изучаемые правила:</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-white/70">
            <span>• ЖИ-ШИ, ЧА-ЩА, ЧУ-ЩУ</span>
            <span>• Безударные гласные</span>
            <span>• Парные согласные</span>
            <span>• Непроизносимые согласные</span>
            <span>• Разделительные Ъ и Ь</span>
            <span>• Удвоенные согласные</span>
          </div>
        </div>
      </Card>
    )
  }
  
  // Результаты игры
  if (gameState === 'result') {
    const settings = difficultySettings[difficulty]
    const earnedXP = Math.floor((score / (settings.questions * 10)) * settings.xpReward)
    const percentage = Math.round((correctAnswers.length / gameWords.length) * 100)
    
    return (
      <Card className="p-6 bg-gradient-to-br from-rose-900/50 to-pink-900/50 backdrop-blur-lg border-white/20">
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
        
        {/* Статистика */}
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
        
        {/* Ошибки */}
        {wrongAnswers.length > 0 && (
          <div className="mb-6 p-4 bg-red-500/10 rounded-xl">
            <h3 className="font-bold text-white/90 mb-2">📝 Работай над ошибками:</h3>
            <div className="space-y-2">
              {wrongAnswers.slice(0, 3).map((item, i) => (
                <div key={i} className="text-sm">
                  <span className="text-red-300 line-through">{item.selected || '—'}</span>
                  <span className="mx-2 text-white/40">→</span>
                  <span className="text-green-300 font-bold">{item.word.correctSpelling}</span>
                  <p className="text-white/50 text-xs">{item.word.rule}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Кнопки */}
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
            className="flex-1 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
          >
            Ещё раз
          </Button>
        </div>
      </Card>
    )
  }
  
  // Игровой процесс
  const currentWord = gameWords[currentQuestion]
  const settings = difficultySettings[difficulty]
  const progress = ((currentQuestion + 1) / gameWords.length) * 100
  
  return (
    <Card className="p-4 sm:p-6 bg-gradient-to-br from-rose-900/50 to-pink-900/50 backdrop-blur-lg border-white/20">
      {/* Заголовок */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-rose-300" />
          <span className="font-bold text-white">Орфография</span>
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
          <span>{currentQuestion + 1} / {gameWords.length}</span>
          {settings.timeLimit > 0 && (
            <span className={cn(timeLeft <= 5 && 'text-red-400')}>⏱ {timeLeft} сек</span>
          )}
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-rose-400 to-pink-500"
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
          {/* Слово с пропуском */}
          <div className="text-center mb-4">
            <p className="text-white/70 text-sm mb-2">Выбери правильное написание:</p>
            <motion.div
              className="text-3xl sm:text-4xl font-bold text-white py-4 px-6 bg-white/10 rounded-xl inline-block"
              animate={showResult ? { scale: [1, 1.05, 1] } : {}}
            >
              {currentWord.word.split('_').map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="text-rose-400 border-b-2 border-rose-400 px-1">_</span>
                  )}
                </span>
              ))}
            </motion.div>
          </div>
          
          {/* Подсказка */}
          {showHint && !showResult && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-blue-500/20 rounded-xl text-center"
            >
              <p className="text-blue-200 text-sm">{currentWord.rule}</p>
            </motion.div>
          )}
          
          {/* Варианты ответов */}
          <div className="grid grid-cols-2 gap-3">
            {currentWord.options.map((option, i) => {
              const isSelected = selectedAnswer === option
              const isCorrect = option === currentWord.correctSpelling
              const showCorrectness = showResult
              
              return (
                <motion.button
                  key={i}
                  onClick={() => handleAnswer(option)}
                  disabled={showResult}
                  className={cn(
                    'p-4 rounded-xl font-bold text-lg transition-all',
                    'border-2',
                    !showCorrectness && 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40',
                    showCorrectness && isCorrect && 'bg-green-500/30 border-green-400 text-green-100',
                    showCorrectness && isSelected && !isCorrect && 'bg-red-500/30 border-red-400 text-red-100',
                    showCorrectness && !isSelected && !isCorrect && 'opacity-50'
                  )}
                  whileHover={!showResult ? { scale: 1.02 } : {}}
                  whileTap={!showResult ? { scale: 0.98 } : {}}
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
              selectedAnswer === currentWord.correctSpelling
                ? 'bg-green-500/20 border border-green-400/30'
                : 'bg-red-500/20 border border-red-400/30'
            )}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">
                {selectedAnswer === currentWord.correctSpelling ? '✅' : '❌'}
              </span>
              <span className="font-bold text-white">
                {selectedAnswer === currentWord.correctSpelling ? 'Правильно!' : 'Ошибка!'}
              </span>
            </div>
            <p className="text-white/80 text-sm mb-1">
              <span className="text-white/50">Правильный ответ:</span>{' '}
              <span className="font-bold text-green-300">{currentWord.correctSpelling}</span>
            </p>
            <p className="text-white/70 text-sm">
              📚 {currentWord.rule}
            </p>
            {currentWord.example && (
              <p className="text-white/50 text-xs mt-1">
                Примеры: {currentWord.example}
              </p>
            )}
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
