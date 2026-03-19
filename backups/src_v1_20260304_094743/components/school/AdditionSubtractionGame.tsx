'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Star, Trophy, RotateCcw, ArrowLeft, Zap, 
  Lightbulb, Volume2, VolumeX, Target, 
  Plus, Minus, Sparkles, HelpCircle, Eye
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

// Types
type Difficulty = 'easy' | 'medium' | 'hard'
type Operation = 'addition' | 'subtraction'

interface MathProblem {
  num1: number
  num2: number
  operation: Operation
  correctAnswer: number
}

interface GameState {
  score: number
  streak: number
  bestStreak: number
  problemsSolved: number
  correctAnswers: number
}

interface HintStep {
  description: string
  visual?: string
}

// Difficulty settings
const difficultySettings = {
  easy: {
    maxNum: 20,
    minNum: 1,
    operations: ['addition', 'subtraction'] as Operation[],
    pointsMultiplier: 1,
    label: '😊 Легко (1-20)',
    totalProblems: 10,
    useMultipleChoice: true,
    showNumberLine: true
  },
  medium: {
    maxNum: 100,
    minNum: 10,
    operations: ['addition', 'subtraction'] as Operation[],
    pointsMultiplier: 2,
    label: '🤔 Средне (1-100)',
    totalProblems: 12,
    useMultipleChoice: true,
    showNumberLine: false
  },
  hard: {
    maxNum: 1000,
    minNum: 100,
    operations: ['addition', 'subtraction'] as Operation[],
    pointsMultiplier: 3,
    label: '🔥 Сложно (1-1000)',
    totalProblems: 15,
    useMultipleChoice: false,
    showNumberLine: false
  }
}

// Emoji counters
const emojiCounters = ['🍎', '🍊', '🍋', '🍇', '🍓', '🌟', '🎈', '🦋', '🌸', '🍪', '🧁', '🍩']

// Generate problem
const generateProblem = (difficulty: Difficulty): MathProblem => {
  const settings = difficultySettings[difficulty]
  const operation = settings.operations[Math.floor(Math.random() * settings.operations.length)]
  
  let num1 = Math.floor(Math.random() * (settings.maxNum - settings.minNum + 1)) + settings.minNum
  let num2 = Math.floor(Math.random() * (settings.maxNum - settings.minNum + 1)) + settings.minNum
  
  // For subtraction, ensure num1 > num2 for positive results
  if (operation === 'subtraction') {
    if (num1 < num2) {
      [num1, num2] = [num2, num1]
    }
  }
  
  // For easy mode, keep numbers smaller
  if (difficulty === 'easy') {
    num1 = Math.min(num1, 15)
    num2 = Math.min(num2, 10)
    if (operation === 'subtraction' && num1 < num2) {
      [num1, num2] = [num2, num1]
    }
  }

  const correctAnswer = operation === 'addition' ? num1 + num2 : num1 - num2

  return { num1, num2, operation, correctAnswer }
}

// Generate multiple choice options
const generateOptions = (correctAnswer: number, difficulty: Difficulty): number[] => {
  const options: Set<number> = new Set([correctAnswer])
  const variance = difficulty === 'easy' ? 5 : difficulty === 'medium' ? 15 : 50
  
  while (options.size < 4) {
    const wrongAnswer = correctAnswer + Math.floor(Math.random() * variance * 2) - variance
    if (wrongAnswer > 0 && wrongAnswer !== correctAnswer) {
      options.add(wrongAnswer)
    }
  }
  
  return Array.from(options).sort(() => Math.random() - 0.5)
}

// Number Line Component
const NumberLine = ({ 
  start, 
  end, 
  highlight1, 
  highlight2,
  operation,
  answer
}: { 
  start: number
  end: number
  highlight1: number
  highlight2: number
  operation: Operation
  answer?: number
}) => {
  const range = end - start
  const numbers = Array.from({ length: range + 1 }, (_, i) => start + i)
  
  return (
    <div className="overflow-x-auto py-4">
      <div className="flex items-center min-w-max justify-center">
        {numbers.map((num, index) => {
          const isFirst = num === highlight1
          const isSecond = num === highlight2
          const isAnswer = num === answer
          const isInRange = operation === 'addition' 
            ? num >= highlight1 && num <= answer!
            : num <= highlight1 && num >= answer!
          
          return (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02 }}
              className="flex flex-col items-center"
            >
              {/* Tick mark */}
              <div className={`w-px h-3 ${isFirst || isSecond || isAnswer ? 'bg-yellow-400' : 'bg-gray-500'}`} />
              
              {/* Number circle */}
              <motion.div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
                  ${isFirst 
                    ? 'bg-gradient-to-br from-pink-500 to-rose-600 text-white ring-2 ring-pink-300' 
                    : isSecond
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-600 text-white ring-2 ring-blue-300'
                      : isAnswer
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white ring-2 ring-green-300'
                        : isInRange && answer !== undefined
                          ? 'bg-gradient-to-br from-yellow-400/50 to-orange-400/50 text-white'
                          : 'bg-white/10 text-gray-400'
                  }
                `}
                animate={isAnswer ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                {num}
              </motion.div>
              
              {/* Arrow between numbers */}
              {index < numbers.length - 1 && (
                <div className={`w-6 h-0.5 ${isInRange ? 'bg-yellow-400' : 'bg-gray-700'}`} />
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// Emoji Counter Visual
const EmojiCounter = ({ 
  count, 
  emoji, 
  operation,
  num1,
  num2
}: { 
  count: number
  emoji: string
  operation: Operation
  num1: number
  num2: number
}) => {
  const totalItems = operation === 'addition' ? num1 + num2 : num1
  const secondGroupStart = operation === 'addition' ? num1 : num1 - num2
  
  return (
    <div className="flex flex-wrap justify-center gap-2 max-w-sm mx-auto">
      {Array.from({ length: totalItems }, (_, i) => {
        const isFirstGroup = operation === 'addition' ? i < num1 : i < secondGroupStart
        const isSecondGroup = operation === 'addition' 
          ? i >= num1 && i < num1 + num2 
          : i >= secondGroupStart && i < num1
        
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.03 }}
            className={`text-2xl sm:text-3xl ${isSecondGroup ? 'opacity-100' : 'opacity-70'}`}
          >
            {emoji}
          </motion.span>
        )
      })}
    </div>
  )
}

// Hint generator
const generateHints = (problem: MathProblem): HintStep[] => {
  const hints: HintStep[] = []
  
  if (problem.operation === 'addition') {
    hints.push({
      description: `Начнём с ${problem.num1}`,
      visual: `📝 Первое число: ${problem.num1}`
    })
    
    hints.push({
      description: `Добавим ${problem.num2}`,
      visual: `➕ Прибавляем: ${problem.num2}`
    })
    
    // For easy mode, show step by step
    if (problem.num2 <= 10) {
      let current = problem.num1
      for (let i = 1; i <= problem.num2; i++) {
        current++
        hints.push({
          description: `Шаг ${i}: ${current - 1} + 1 = ${current}`,
          visual: `${i}. ${current - 1} + 1 = ${current}`
        })
      }
    }
    
    hints.push({
      description: `Ответ: ${problem.correctAnswer}`,
      visual: `✅ ${problem.num1} + ${problem.num2} = ${problem.correctAnswer}`
    })
  } else {
    hints.push({
      description: `Начнём с ${problem.num1}`,
      visual: `📝 Первое число: ${problem.num1}`
    })
    
    hints.push({
      description: `Вычтем ${problem.num2}`,
      visual: `➖ Вычитаем: ${problem.num2}`
    })
    
    // For easy mode, show step by step
    if (problem.num2 <= 10) {
      let current = problem.num1
      for (let i = 1; i <= problem.num2; i++) {
        current--
        hints.push({
          description: `Шаг ${i}: ${current + 1} - 1 = ${current}`,
          visual: `${i}. ${current + 1} - 1 = ${current}`
        })
      }
    }
    
    hints.push({
      description: `Ответ: ${problem.correctAnswer}`,
      visual: `✅ ${problem.num1} - ${problem.num2} = ${problem.correctAnswer}`
    })
  }
  
  return hints
}

// Answer button for multiple choice
const AnswerButton = ({ 
  answer, 
  index, 
  onClick, 
  disabled,
  isSelected,
  isCorrect,
  showResult
}: { 
  answer: number
  index: number
  onClick: () => void
  disabled: boolean
  isSelected: boolean
  isCorrect: boolean
  showResult: boolean
}) => {
  const colors = [
    'from-pink-500 to-rose-600',
    'from-blue-500 to-cyan-600',
    'from-green-500 to-emerald-600',
    'from-purple-500 to-violet-600'
  ]

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: 'spring' }}
      whileHover={!disabled ? { scale: 1.05, y: -5 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full py-4 sm:py-5 rounded-2xl text-xl sm:text-2xl font-bold
        transition-all duration-300 shadow-lg
        ${showResult
          ? isCorrect
            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white ring-4 ring-green-300 scale-105'
            : isSelected && !isCorrect
              ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white ring-4 ring-red-300 animate-shake'
              : 'bg-gray-600 text-gray-400'
          : `bg-gradient-to-r ${colors[index]} text-white hover:shadow-xl`
        }
        disabled:cursor-not-allowed
      `}
    >
      {answer}
    </motion.button>
  )
}

// Main component
interface AdditionSubtractionGameProps {
  onBack: () => void
  onComplete: (stars: number, xp: number) => void
}

export default function AdditionSubtractionGame({ onBack, onComplete }: AdditionSubtractionGameProps) {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy')
  const [problem, setProblem] = useState<MathProblem | null>(null)
  const [options, setOptions] = useState<number[]>([])
  const [userAnswer, setUserAnswer] = useState('')
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    streak: 0,
    bestStreak: 0,
    problemsSolved: 0,
    correctAnswers: 0
  })
  const [isPlaying, setIsPlaying] = useState(false)
  const [showResult, setShowResult] = useState<'correct' | 'wrong' | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [gameComplete, setGameComplete] = useState(false)
  const [encouragement, setEncouragement] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [currentHintStep, setCurrentHintStep] = useState(0)
  const [hints, setHints] = useState<HintStep[]>([])
  const [emoji, setEmoji] = useState(emojiCounters[0])
  
  const inputRef = useRef<HTMLInputElement>(null)
  const { playSuccess, playError, playWin, playLevelUp, isMuted, toggleMute } = useSound({ volume: 0.25 })

  // Encouragement phrases
  const encouragements = {
    correct: ['Супер! 🌟', 'Молодец! 🎉', 'Отлично! 👏', 'Правильно! ✨', 'Так держать! 💪', 'Умница! 🌸'],
    wrong: ['Попробуй ещё! 💪', 'Не сдавайся! 🌟', 'Ты сможешь! 💫', 'Посмотри подсказку! 💡']
  }

  // Start game
  const startGame = useCallback(() => {
    setIsPlaying(true)
    setGameState({
      score: 0,
      streak: 0,
      bestStreak: 0,
      problemsSolved: 0,
      correctAnswers: 0
    })
    const newProblem = generateProblem(difficulty)
    setProblem(newProblem)
    setEmoji(emojiCounters[Math.floor(Math.random() * emojiCounters.length)])
    
    if (difficultySettings[difficulty].useMultipleChoice) {
      setOptions(generateOptions(newProblem.correctAnswer, difficulty))
    }
    
    setShowResult(null)
    setSelectedAnswer(null)
    setUserAnswer('')
    setGameComplete(false)
    setShowHint(false)
    setCurrentHintStep(0)
  }, [difficulty])

  // Generate new problem
  const nextProblem = useCallback(() => {
    setTimeout(() => {
      if (gameState.problemsSolved + 1 >= difficultySettings[difficulty].totalProblems) {
        setGameComplete(true)
        playWin()
      } else {
        const newProblem = generateProblem(difficulty)
        setProblem(newProblem)
        setEmoji(emojiCounters[Math.floor(Math.random() * emojiCounters.length)])
        
        if (difficultySettings[difficulty].useMultipleChoice) {
          setOptions(generateOptions(newProblem.correctAnswer, difficulty))
        }
        
        setShowResult(null)
        setSelectedAnswer(null)
        setUserAnswer('')
        setShowHint(false)
        setCurrentHintStep(0)
        setHints([])
        
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }
    }, 1200)
  }, [gameState.problemsSolved, difficulty, playWin])

  // Handle answer
  const handleAnswer = useCallback((answer: number | string) => {
    if (!problem || showResult) return
    
    const numAnswer = typeof answer === 'string' ? parseInt(answer, 10) : answer
    if (isNaN(numAnswer)) return

    setSelectedAnswer(numAnswer)
    const isCorrect = numAnswer === problem.correctAnswer

    if (isCorrect) {
      const points = 10 * difficultySettings[difficulty].pointsMultiplier
      const streakBonus = gameState.streak >= 3 ? 5 : 0

      setGameState(prev => ({
        ...prev,
        score: prev.score + points + streakBonus,
        streak: prev.streak + 1,
        bestStreak: Math.max(prev.bestStreak, prev.streak + 1),
        problemsSolved: prev.problemsSolved + 1,
        correctAnswers: prev.correctAnswers + 1
      }))

      setShowResult('correct')
      setEncouragement(encouragements.correct[Math.floor(Math.random() * encouragements.correct.length)])
      playSuccess()

      if ((gameState.streak + 1) % 5 === 0) {
        playLevelUp()
      }

      nextProblem()
    } else {
      setGameState(prev => ({
        ...prev,
        streak: 0,
        problemsSolved: prev.problemsSolved + 1
      }))

      setShowResult('wrong')
      setEncouragement(encouragements.wrong[Math.floor(Math.random() * encouragements.wrong.length)])
      playError()
      nextProblem()
    }
  }, [problem, showResult, difficulty, gameState, nextProblem, playSuccess, playError, playLevelUp])

  // Handle hint
  const handleShowHint = () => {
    if (!problem) return
    const newHints = generateHints(problem)
    setHints(newHints)
    setShowHint(true)
    setCurrentHintStep(0)
  }

  const nextHintStep = () => {
    if (currentHintStep < hints.length - 1) {
      setCurrentHintStep(prev => prev + 1)
    }
  }

  // Calculate stars and XP
  const calculateRewards = () => {
    const accuracy = gameState.correctAnswers / gameState.problemsSolved
    const stars = Math.round(accuracy * 5)
    const xp = gameState.score + (gameState.bestStreak * 5)
    return { stars: Math.max(1, stars), xp }
  }

  // Handle game complete
  const handleComplete = () => {
    const { stars, xp } = calculateRewards()
    onComplete(stars, xp)
  }

  // Handle input submit
  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userAnswer.trim()) {
      handleAnswer(userAnswer)
    }
  }

  // Game complete screen
  if (gameComplete) {
    const { stars, xp } = calculateRewards()
    
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-green-500 to-emerald-600 z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/95 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-6 sm:p-8 text-center space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="text-7xl"
            >
              🏆
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-gray-800"
            >
              Отлично!
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <p className="text-gray-600">
                Правильных ответов: {gameState.correctAnswers} из {gameState.problemsSolved}
              </p>
              <p className="text-gray-600">
                Лучшая серия: {gameState.bestStreak} 🔥
              </p>
            </motion.div>

            {/* Stars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-2"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, type: 'spring' }}
                >
                  <Star
                    className={`w-10 h-10 ${
                      i < stars 
                        ? 'text-yellow-400 fill-yellow-400' 
                        : 'text-gray-300'
                    }`}
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-2xl font-bold text-purple-600"
            >
              +{xp} XP
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col gap-3"
            >
              <Button
                onClick={() => {
                  setGameComplete(false)
                  startGame()
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl py-5 text-lg font-bold"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Играть снова
              </Button>

              <Button
                onClick={handleComplete}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl py-5 text-lg font-bold"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Забрать награду
              </Button>
            </motion.div>
          </div>
        </Card>
      </div>
    )
  }

  // Start screen
  if (!isPlaying) {
    return (
      <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30 rounded-3xl p-6 sm:p-8">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-center gap-4">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-5xl sm:text-6xl"
            >
              ➕
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              className="text-5xl sm:text-6xl"
            >
              ➖
            </motion.div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Сложение и вычитание
          </h2>

          <p className="text-white/80">
            Практикуй вычисления и стань мастером арифметики!
          </p>

          {/* Difficulty selection */}
          <div className="space-y-3">
            <p className="text-white/60 text-sm">Выбери сложность:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {(['easy', 'medium', 'hard'] as Difficulty[]).map((diff) => (
                <motion.button
                  key={diff}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDifficulty(diff)}
                  className={`
                    px-4 py-2 rounded-xl font-bold transition-all
                    ${difficulty === diff
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white scale-110'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }
                  `}
                >
                  {difficultySettings[diff].label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3 text-sm text-white/60">
            {difficultySettings[difficulty].showNumberLine && (
              <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl">
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>Числовой луч</span>
              </div>
            )}
            <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl">
              <Lightbulb className="w-4 h-4 text-yellow-400" />
              <span>Подсказки</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span>Визуализация</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl">
              <Target className="w-4 h-4 text-green-400" />
              <span>{difficultySettings[difficulty].totalProblems} заданий</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMute}
              className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all"
              title={isMuted ? 'Включить звук' : 'Выключить звук'}
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6 text-white/60" />
              ) : (
                <Volume2 className="w-6 h-6 text-white" />
              )}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={startGame}
              className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl text-white font-bold text-xl shadow-lg shadow-green-500/30"
            >
              <Zap className="w-6 h-6 inline mr-2" />
              Начать!
            </motion.button>
          </div>
        </motion.div>
      </Card>
    )
  }

  // Game screen
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-white/70 hover:text-white hover:bg-white/10"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Выход
        </Button>

        {/* Stats */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Streak */}
          {gameState.streak >= 2 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-2 bg-orange-500/30 rounded-xl"
            >
              <span className="text-orange-400 font-bold text-sm sm:text-base">🔥 {gameState.streak}</span>
            </motion.div>
          )}

          {/* Score */}
          <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 bg-white/10 rounded-xl">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-bold text-sm sm:text-base">{gameState.score}</span>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 bg-white/10 rounded-xl">
            <Target className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
            <span className="text-white text-sm sm:text-base">{gameState.problemsSolved}/{difficultySettings[difficulty].totalProblems}</span>
          </div>

          {/* Sound toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMute}
            className="p-2 bg-white/10 rounded-xl hover:bg-white/20"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white/60" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-white/10 rounded-full h-2">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
          animate={{ 
            width: `${(gameState.problemsSolved / difficultySettings[difficulty].totalProblems) * 100}%` 
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Problem */}
      {problem && (
        <Card className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 border-purple-500/30 rounded-3xl overflow-hidden">
          {/* Encouragement */}
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className={`text-center py-3 sm:py-4 text-xl sm:text-2xl font-bold ${
                  showResult === 'correct' ? 'bg-green-500/30 text-green-400' : 'bg-red-500/30 text-red-400'
                }`}
              >
                {encouragement}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="p-4 sm:p-6">
            {/* Problem display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-6"
            >
              <div className="inline-flex items-center gap-3 sm:gap-4 bg-white/10 backdrop-blur rounded-2xl sm:rounded-3xl px-4 sm:px-8 py-3 sm:py-4">
                <motion.span
                  className="text-3xl sm:text-4xl font-bold text-white"
                  animate={showResult === 'correct' ? { scale: [1, 1.2, 1] } : {}}
                >
                  {problem.num1}
                </motion.span>
                <motion.span
                  className="text-3xl sm:text-4xl font-bold text-purple-400"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {problem.operation === 'addition' ? '+' : '-'}
                </motion.span>
                <motion.span
                  className="text-3xl sm:text-4xl font-bold text-white"
                  animate={showResult === 'correct' ? { scale: [1, 1.2, 1] } : {}}
                >
                  {problem.num2}
                </motion.span>
                <motion.span
                  className="text-3xl sm:text-4xl font-bold text-pink-300"
                >
                  =
                </motion.span>
                <motion.span
                  className="text-3xl sm:text-4xl font-bold text-yellow-400"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  ?
                </motion.span>
              </div>
            </motion.div>

            {/* Visual aids for easy mode */}
            {difficulty === 'easy' && (
              <div className="mb-6 space-y-4">
                {/* Emoji counter */}
                {problem.num1 + problem.num2 <= 20 && (
                  <EmojiCounter
                    count={problem.correctAnswer}
                    emoji={emoji}
                    operation={problem.operation}
                    num1={problem.num1}
                    num2={problem.num2}
                  />
                )}
                
                {/* Number line */}
                {difficultySettings[difficulty].showNumberLine && (
                  <NumberLine
                    start={0}
                    end={Math.max(problem.num1, problem.num2) + 5}
                    highlight1={problem.num1}
                    highlight2={problem.operation === 'addition' ? problem.num2 : problem.num1 - problem.num2}
                    operation={problem.operation}
                    answer={problem.correctAnswer}
                  />
                )}
              </div>
            )}

            {/* Multiple choice or input */}
            {difficultySettings[difficulty].useMultipleChoice ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {options.map((option, index) => (
                  <AnswerButton
                    key={option}
                    answer={option}
                    index={index}
                    onClick={() => handleAnswer(option)}
                    disabled={showResult !== null}
                    isSelected={selectedAnswer === option}
                    isCorrect={option === problem.correctAnswer}
                    showResult={showResult !== null}
                  />
                ))}
              </div>
            ) : (
              <form onSubmit={handleInputSubmit} className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Input
                    ref={inputRef}
                    type="number"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Введи ответ"
                    disabled={showResult !== null}
                    className="w-40 sm:w-48 h-14 sm:h-16 text-2xl sm:text-3xl text-center font-bold bg-white/10 border-2 border-white/20 focus:border-purple-400 text-white placeholder:text-white/40"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={!userAnswer.trim() || showResult !== null}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-2xl"
                >
                  Проверить
                </Button>
              </form>
            )}

            {/* Hint button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex justify-center"
            >
              {!showHint ? (
                <Button
                  variant="outline"
                  onClick={handleShowHint}
                  className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10"
                >
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Подсказка
                </Button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-4 max-w-md w-full"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-5 h-5 text-yellow-400" />
                    <span className="font-bold text-yellow-400">Подсказка</span>
                    <span className="text-white/40 text-sm ml-auto">
                      {currentHintStep + 1}/{hints.length}
                    </span>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentHintStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="text-white/80 mb-3"
                    >
                      <p className="mb-2">{hints[currentHintStep]?.description}</p>
                      <p className="text-sm font-mono bg-white/5 rounded-lg p-2">
                        {hints[currentHintStep]?.visual}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {currentHintStep < hints.length - 1 && (
                    <Button
                      variant="ghost"
                      onClick={nextHintStep}
                      className="w-full text-yellow-400 hover:bg-yellow-500/10"
                    >
                      Следующий шаг →
                    </Button>
                  )}
                </motion.div>
              )}
            </motion.div>
          </div>
        </Card>
      )}

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-5px); }
          40%, 80% { transform: translateX(5px); }
        }
        .animate-shake { animation: shake 0.4s ease-in-out; }
      `}</style>
    </div>
  )
}
