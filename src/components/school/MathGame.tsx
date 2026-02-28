'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { 
  Star, Trophy, RefreshCw, Sparkles, Heart, 
  ChevronUp, ChevronDown, Zap, Target
} from 'lucide-react'

// Типы
type Operation = 'addition' | 'subtraction' | 'multiplication'
type Difficulty = 'easy' | 'medium' | 'hard'

interface MathProblem {
  num1: number
  num2: number
  operation: Operation
  correctAnswer: number
  options: number[]
}

interface GameState {
  score: number
  lives: number
  streak: number
  level: number
  problemsSolved: number
  highScore: number
}

// Настройки сложности
const difficultySettings = {
  easy: {
    maxNum: 10,
    operations: ['addition', 'subtraction'] as Operation[],
    timeLimit: 30000,
    pointsMultiplier: 1
  },
  medium: {
    maxNum: 20,
    operations: ['addition', 'subtraction', 'multiplication'] as Operation[],
    timeLimit: 20000,
    pointsMultiplier: 2
  },
  hard: {
    maxNum: 50,
    operations: ['addition', 'subtraction', 'multiplication'] as Operation[],
    timeLimit: 15000,
    pointsMultiplier: 3
  }
}

// Операторы
const operationSymbols: Record<Operation, string> = {
  addition: '+',
  subtraction: '-',
  multiplication: '×'
}

// Генерация задачи
const generateProblem = (difficulty: Difficulty): MathProblem => {
  const settings = difficultySettings[difficulty]
  const operation = settings.operations[Math.floor(Math.random() * settings.operations.length)]
  
  let num1 = Math.floor(Math.random() * settings.maxNum) + 1
  let num2 = Math.floor(Math.random() * settings.maxNum) + 1
  
  // Для вычитания убеждаемся, что результат положительный
  if (operation === 'subtraction') {
    if (num1 < num2) {
      [num1, num2] = [num2, num1]
    }
  }
  
  let correctAnswer: number
  switch (operation) {
    case 'addition':
      correctAnswer = num1 + num2
      break
    case 'subtraction':
      correctAnswer = num1 - num2
      break
    case 'multiplication':
      correctAnswer = num1 * num2
      break
  }
  
  // Генерация неправильных ответов
  const options: Set<number> = new Set([correctAnswer])
  while (options.size < 4) {
    const variance = Math.max(5, Math.floor(correctAnswer * 0.3))
    const wrongAnswer = correctAnswer + Math.floor(Math.random() * variance * 2) - variance
    if (wrongAnswer > 0 && wrongAnswer !== correctAnswer) {
      options.add(wrongAnswer)
    }
  }
  
  return {
    num1,
    num2,
    operation,
    correctAnswer,
    options: Array.from(options).sort(() => Math.random() - 0.5)
  }
}

// Анимации
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  },
  correct: {
    scale: [1, 1.2, 1],
    backgroundColor: ['rgba(34, 197, 94, 0.5)', 'rgba(34, 197, 94, 0.8)', 'rgba(34, 197, 94, 0.5)'],
    transition: { duration: 0.5 }
  },
  wrong: {
    x: [0, -20, 20, -20, 20, 0],
    backgroundColor: ['rgba(239, 68, 68, 0.5)', 'rgba(239, 68, 68, 0.8)', 'rgba(239, 68, 68, 0.5)'],
    transition: { duration: 0.5 }
  }
}

const starVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: { type: 'spring', stiffness: 300 }
  },
  pop: {
    scale: [1, 1.5, 1],
    transition: { duration: 0.3 }
  }
}

// Компонент звёзд очков
const ScoreStars = ({ score, maxScore = 10 }: { score: number; maxScore?: number }) => {
  const stars = Math.min(Math.floor(score / 10), maxScore)
  
  return (
    <div className="flex gap-1">
      {[...Array(maxScore)].map((_, i) => (
        <motion.div
          key={i}
          variants={starVariants}
          initial="hidden"
          animate={i < stars ? 'visible' : 'hidden'}
        >
          <Star 
            className={`w-6 h-6 ${i < stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
          />
        </motion.div>
      ))}
    </div>
  )
}

// Компонент жизней
const LivesDisplay = ({ lives, maxLives = 3 }: { lives: number; maxLives?: number }) => (
  <div className="flex gap-1">
    {[...Array(maxLives)].map((_, i) => (
      <motion.div
        key={i}
        animate={i < lives ? { scale: 1 } : { scale: 0 }}
        transition={{ type: 'spring' }}
      >
        <Heart 
          className={`w-6 h-6 ${i < lives ? 'text-red-500 fill-red-500' : 'text-gray-400'}`}
        />
      </motion.div>
    ))}
  </div>
)

// Компонент карточки с числом
const NumberCard = ({ 
  number, 
  onClick, 
  disabled,
  index 
}: { 
  number: number
  onClick: () => void
  disabled: boolean
  index: number
}) => {
  const colors = [
    'from-pink-400 to-rose-500',
    'from-blue-400 to-cyan-500',
    'from-green-400 to-emerald-500',
    'from-purple-400 to-violet-500'
  ]
  
  return (
    <motion.button
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-20 h-20 sm:w-24 sm:h-24
        bg-gradient-to-br ${colors[index % colors.length]}
        rounded-2xl
        flex items-center justify-center
        text-3xl sm:text-4xl font-bold text-white
        shadow-lg
        disabled:opacity-50 disabled:cursor-not-allowed
        border-4 border-white/30
      `}
    >
      {number}
    </motion.button>
  )
}

// Главный компонент игры
interface MathGameProps {
  onComplete?: (score: number) => void
  initialDifficulty?: Difficulty
}

export default function MathGame({ 
  onComplete,
  initialDifficulty = 'easy' 
}: MathGameProps) {
  const [difficulty, setDifficulty] = useState<Difficulty>(initialDifficulty)
  const [problem, setProblem] = useState<MathProblem | null>(null)
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    lives: 3,
    streak: 0,
    level: 1,
    problemsSolved: 0,
    highScore: 0
  })
  const [isPlaying, setIsPlaying] = useState(false)
  const [showResult, setShowResult] = useState<'correct' | 'wrong' | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [encouragement, setEncouragement] = useState('')

  // Поощрительные фразы
  const encouragements = {
    correct: ['Супер! 🌟', 'Молодец! 🎉', 'Отлично! 👏', 'Правильно! ✨', 'Так держать! 💪', 'Умница! 🌈', 'Великолепно! 🏆'],
    wrong: ['Попробуй ещё! 💪', 'Не сдавайся! 🌟', 'Ты сможешь! 💫', 'Смотри внимательнее! 👀']
  }

  // Начало новой игры
  const startGame = useCallback(() => {
    setIsPlaying(true)
    setGameState(prev => ({
      score: 0,
      lives: 3,
      streak: 0,
      level: 1,
      problemsSolved: 0,
      highScore: prev.highScore
    }))
    setProblem(generateProblem(difficulty))
    setShowResult(null)
    setSelectedAnswer(null)
  }, [difficulty])

  // Генерация новой задачи
  const nextProblem = useCallback(() => {
    setTimeout(() => {
      setProblem(generateProblem(difficulty))
      setShowResult(null)
      setSelectedAnswer(null)
    }, 1000)
  }, [difficulty])

  // Обработка ответа
  const handleAnswer = useCallback((answer: number) => {
    if (!problem || showResult) return
    
    setSelectedAnswer(answer)
    const isCorrect = answer === problem.correctAnswer
    
    if (isCorrect) {
      const points = 10 * difficultySettings[difficulty].pointsMultiplier
      const streakBonus = gameState.streak >= 3 ? 5 : 0
      
      setGameState(prev => ({
        ...prev,
        score: prev.score + points + streakBonus,
        streak: prev.streak + 1,
        level: Math.floor((prev.score + points) / 50) + 1,
        problemsSolved: prev.problemsSolved + 1,
        highScore: Math.max(prev.highScore, prev.score + points + streakBonus)
      }))
      
      setShowResult('correct')
      setEncouragement(encouragements.correct[Math.floor(Math.random() * encouragements.correct.length)])
      
      // Переход к следующей задаче
      nextProblem()
    } else {
      setGameState(prev => ({
        ...prev,
        lives: prev.lives - 1,
        streak: 0
      }))
      
      setShowResult('wrong')
      setEncouragement(encouragements.wrong[Math.floor(Math.random() * encouragements.wrong.length)])
      
      // Проверка конца игры
      if (gameState.lives <= 1) {
        setTimeout(() => {
          setIsPlaying(false)
          onComplete?.(gameState.score)
        }, 1500)
      } else {
        nextProblem()
      }
    }
  }, [problem, showResult, difficulty, gameState, nextProblem, onComplete])

  // Экран начала игры
  if (!isPlaying) {
    return (
      <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30 rounded-3xl p-6 sm:p-8">
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl"
          >
            🧮
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Математическая викторина!
          </h2>
          
          <p className="text-white/80">
            Реши примеры и набери очки!
          </p>

          {/* Выбор сложности */}
          <div className="space-y-3">
            <p className="text-white/60 text-sm">Выбери сложность:</p>
            <div className="flex justify-center gap-3">
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
                  {diff === 'easy' ? '😊 Легко' : diff === 'medium' ? '🤔 Средне' : '🔥 Сложно'}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Лучший результат */}
          {gameState.highScore > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center gap-2 text-yellow-400"
            >
              <Trophy className="w-5 h-5" />
              <span>Лучший результат: {gameState.highScore}</span>
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl text-white font-bold text-xl shadow-lg shadow-green-500/30"
          >
            <Zap className="w-6 h-6 inline mr-2" />
            Начать игру!
          </motion.button>
        </motion.div>
      </Card>
    )
  }

  // Игровой экран
  return (
    <Card className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border-purple-500/30 rounded-3xl overflow-hidden">
      {/* Верхняя панель */}
      <div className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 p-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Очки и звёзды */}
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="text-2xl"
            >
              ⭐
            </motion.div>
            <span className="text-2xl font-bold text-white">{gameState.score}</span>
            <ScoreStars score={gameState.score} maxScore={5} />
          </div>

          {/* Уровень */}
          <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
            <Target className="w-4 h-4 text-yellow-400" />
            <span className="text-white font-bold">Уровень {gameState.level}</span>
          </div>

          {/* Жизни */}
          <LivesDisplay lives={gameState.lives} />

          {/* Серия */}
          {gameState.streak >= 3 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 bg-orange-500/30 px-3 py-1 rounded-full"
            >
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 font-bold">x{gameState.streak}</span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Основной контент */}
      <div className="p-6 sm:p-8">
        {/* Поощрение */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className={`
                text-center text-3xl sm:text-4xl font-bold mb-6
                ${showResult === 'correct' ? 'text-green-400' : 'text-red-400'}
              `}
            >
              {encouragement}
              {showResult === 'correct' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-lg text-yellow-400"
                >
                  +{10 * difficultySettings[difficulty].pointsMultiplier + (gameState.streak >= 3 ? 5 : 0)} очков!
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Задача */}
        {problem && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Пример */}
            <motion.div
              variants={cardVariants}
              className="text-center"
            >
              <div className="inline-flex items-center gap-4 sm:gap-6 bg-white/10 backdrop-blur rounded-3xl px-6 sm:px-10 py-4 sm:py-6">
                <motion.span 
                  className="text-4xl sm:text-5xl font-bold text-white"
                  animate={showResult === 'correct' ? { scale: [1, 1.2, 1] } : {}}
                >
                  {problem.num1}
                </motion.span>
                <motion.span 
                  className="text-4xl sm:text-5xl font-bold text-yellow-400"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {operationSymbols[problem.operation]}
                </motion.span>
                <motion.span 
                  className="text-4xl sm:text-5xl font-bold text-white"
                  animate={showResult === 'correct' ? { scale: [1, 1.2, 1] } : {}}
                >
                  {problem.num2}
                </motion.span>
                <motion.span 
                  className="text-4xl sm:text-5xl font-bold text-purple-300"
                >
                  = 
                </motion.span>
                <motion.span 
                  className="text-4xl sm:text-5xl font-bold text-green-400"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  ?
                </motion.span>
              </div>
            </motion.div>

            {/* Варианты ответов */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={containerVariants}
            >
              {problem.options.map((option, index) => (
                <NumberCard
                  key={option}
                  number={option}
                  index={index}
                  disabled={showResult !== null}
                  onClick={() => handleAnswer(option)}
                />
              ))}
            </motion.div>

            {/* Подсказка для детей */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center text-white/60 text-sm"
            >
              💡 Выбери правильный ответ!
            </motion.p>
          </motion.div>
        )}
      </div>

      {/* Прогресс-бар */}
      <div className="px-6 pb-4">
        <div className="bg-white/10 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 to-emerald-400"
            animate={{ width: `${(gameState.problemsSolved % 10) * 10}%` }}
          />
        </div>
        <p className="text-center text-white/60 text-xs mt-1">
          {gameState.problemsSolved} задач решено
        </p>
      </div>
    </Card>
  )
}
