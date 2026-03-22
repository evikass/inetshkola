'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Star, Trophy, RotateCcw, ArrowLeft, Zap, 
  Grid3X3, Clock, Volume2, VolumeX, Sparkles,
  ChevronDown, ChevronUp, Target, Flame
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

// Types
type Difficulty = 'easy' | 'medium' | 'hard'

interface MultiplicationProblem {
  num1: number
  num2: number
  correctAnswer: number
  options: number[]
}

interface GameState {
  score: number
  streak: number
  bestStreak: number
  problemsSolved: number
  correctAnswers: number
  timeLeft: number
}

// Difficulty settings
const difficultySettings = {
  easy: {
    maxNum: 5,
    minNum: 1,
    timeLimit: 0, // No time limit
    pointsMultiplier: 1,
    label: '😊 Легко (1-5)',
    totalProblems: 10
  },
  medium: {
    maxNum: 10,
    minNum: 1,
    timeLimit: 15,
    pointsMultiplier: 2,
    label: '🤔 Средне (1-10)',
    totalProblems: 15
  },
  hard: {
    maxNum: 12,
    minNum: 1,
    timeLimit: 10,
    pointsMultiplier: 3,
    label: '🔥 Сложно (1-12)',
    totalProblems: 20
  }
}

// Generate multiplication problem
const generateProblem = (difficulty: Difficulty): MultiplicationProblem => {
  const settings = difficultySettings[difficulty]
  const num1 = Math.floor(Math.random() * settings.maxNum) + settings.minNum
  const num2 = Math.floor(Math.random() * settings.maxNum) + settings.minNum
  const correctAnswer = num1 * num2

  // Generate wrong answers
  const options: Set<number> = new Set([correctAnswer])
  while (options.size < 4) {
    // Generate plausible wrong answers near the correct one
    const variance = Math.max(5, Math.floor(correctAnswer * 0.3))
    let wrongAnswer = correctAnswer + Math.floor(Math.random() * variance * 2) - variance
    
    // Ensure wrong answer is positive and different
    if (wrongAnswer > 0 && wrongAnswer !== correctAnswer) {
      options.add(wrongAnswer)
    }
    
    // Sometimes add a completely wrong answer
    if (options.size < 4 && Math.random() > 0.5) {
      const randomWrong = Math.floor(Math.random() * settings.maxNum * settings.maxNum) + 1
      if (randomWrong !== correctAnswer) {
        options.add(randomWrong)
      }
    }
  }

  return {
    num1,
    num2,
    correctAnswer,
    options: Array.from(options).sort(() => Math.random() - 0.5)
  }
}

// Multiplication Table Component
const MultiplicationTable = ({ maxNum = 10, highlightCell }: { maxNum?: number; highlightCell?: { row: number; col: number } }) => {
  return (
    <div className="overflow-x-auto">
      <table className="border-collapse text-sm">
        <thead>
          <tr>
            <th className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-tl-lg">×</th>
            {Array.from({ length: maxNum }, (_, i) => (
              <th 
                key={i + 1} 
                className={`w-8 h-8 text-center font-bold text-white
                  ${i === maxNum - 1 ? 'rounded-tr-lg' : ''}
                  bg-gradient-to-br from-blue-500 to-cyan-500
                `}
              >
                {i + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: maxNum }, (_, rowIndex) => (
            <tr key={rowIndex + 1}>
              <th 
                className={`w-8 h-8 text-center font-bold text-white
                  ${rowIndex === maxNum - 1 ? 'rounded-bl-lg' : ''}
                  bg-gradient-to-br from-blue-500 to-cyan-500
                `}
              >
                {rowIndex + 1}
              </th>
              {Array.from({ length: maxNum }, (_, colIndex) => {
                const row = rowIndex + 1
                const col = colIndex + 1
                const isHighlighted = highlightCell?.row === row && highlightCell?.col === col
                
                return (
                  <motion.td
                    key={col}
                    className={`w-8 h-8 text-center border border-white/10
                      ${rowIndex === maxNum - 1 && colIndex === maxNum - 1 ? 'rounded-br-lg' : ''}
                      ${isHighlighted 
                        ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-black font-bold' 
                        : rowIndex % 2 === 0 
                          ? 'bg-white/5' 
                          : 'bg-white/10'
                      }
                    `}
                    initial={isHighlighted ? { scale: 1 } : {}}
                    animate={isHighlighted ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {row * col}
                  </motion.td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Answer button component
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
interface MultiplicationTableGameProps {
  onBack: () => void
  onComplete: (stars: number, xp: number) => void
}

export default function MultiplicationTableGame({ onBack, onComplete }: MultiplicationTableGameProps) {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy')
  const [problem, setProblem] = useState<MultiplicationProblem | null>(null)
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    streak: 0,
    bestStreak: 0,
    problemsSolved: 0,
    correctAnswers: 0,
    timeLeft: 0
  })
  const [isPlaying, setIsPlaying] = useState(false)
  const [showResult, setShowResult] = useState<'correct' | 'wrong' | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showTable, setShowTable] = useState(false)
  const [gameComplete, setGameComplete] = useState(false)
  const [encouragement, setEncouragement] = useState('')
  
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const { playSuccess, playError, playWin, playLevelUp, isMuted, toggleMute } = useSound({ volume: 0.25 })

  // Encouragement phrases
  const encouragements = {
    correct: ['Супер! 🌟', 'Молодец! 🎉', 'Отлично! 👏', 'Правильно! ✨', 'Так держать! 💪', 'Умница! 🌸', 'Великолепно! 🏆'],
    wrong: ['Попробуй ещё! 💪', 'Не сдавайся! 🌟', 'Ты сможешь! 💫', 'Смотри в таблицу! 👀']
  }

  // Start game
  const startGame = useCallback(() => {
    setIsPlaying(true)
    setGameState({
      score: 0,
      streak: 0,
      bestStreak: 0,
      problemsSolved: 0,
      correctAnswers: 0,
      timeLeft: difficultySettings[difficulty].timeLimit
    })
    setProblem(generateProblem(difficulty))
    setShowResult(null)
    setSelectedAnswer(null)
    setGameComplete(false)
  }, [difficulty])

  // Timer effect
  useEffect(() => {
    if (!isPlaying || gameState.timeLeft === 0 || showResult) return

    timerRef.current = setInterval(() => {
      setGameState(prev => {
        if (prev.timeLeft <= 1) {
          // Time's up - count as wrong
          setShowResult('wrong')
          setEncouragement('Время вышло! ⏰')
          playError()
          
          setTimeout(() => {
            if (prev.problemsSolved + 1 >= difficultySettings[difficulty].totalProblems) {
              setGameComplete(true)
              playWin()
            } else {
              setProblem(generateProblem(difficulty))
              setShowResult(null)
              setSelectedAnswer(null)
              return {
                ...prev,
                timeLeft: difficultySettings[difficulty].timeLimit,
                streak: 0,
                problemsSolved: prev.problemsSolved + 1
              }
            }
          }, 1000)
          
          return { ...prev, timeLeft: 0 }
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 }
      })
    }, 1000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPlaying, gameState.timeLeft, showResult, difficulty, playError, playWin])

  // Next problem
  const nextProblem = useCallback(() => {
    setTimeout(() => {
      if (gameState.problemsSolved + 1 >= difficultySettings[difficulty].totalProblems) {
        setGameComplete(true)
        playWin()
      } else {
        setProblem(generateProblem(difficulty))
        setShowResult(null)
        setSelectedAnswer(null)
        setGameState(prev => ({
          ...prev,
          timeLeft: difficultySettings[difficulty].timeLimit
        }))
      }
    }, 1200)
  }, [gameState.problemsSolved, difficulty, playWin])

  // Handle answer
  const handleAnswer = useCallback((answer: number) => {
    if (!problem || showResult) return

    setSelectedAnswer(answer)
    const isCorrect = answer === problem.correctAnswer

    if (isCorrect) {
      const points = 10 * difficultySettings[difficulty].pointsMultiplier
      const streakBonus = gameState.streak >= 3 ? 5 : 0
      const timeBonus = gameState.timeLeft > 0 ? Math.floor(gameState.timeLeft * 0.5) : 0

      setGameState(prev => ({
        ...prev,
        score: prev.score + points + streakBonus + timeBonus,
        streak: prev.streak + 1,
        bestStreak: Math.max(prev.bestStreak, prev.streak + 1),
        problemsSolved: prev.problemsSolved + 1,
        correctAnswers: prev.correctAnswers + 1
      }))

      setShowResult('correct')
      setEncouragement(encouragements.correct[Math.floor(Math.random() * encouragements.correct.length)])
      playSuccess()

      // Check for streak milestone
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
      <Card className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-500/30 rounded-3xl p-6 sm:p-8">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl"
          >
            ✖️
          </motion.div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Таблица умножения
          </h2>

          <p className="text-white/80">
            Практикуй умножение и стань мастером!
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

          {/* Show table button */}
          <Button
            variant="outline"
            onClick={() => setShowTable(!showTable)}
            className="border-white/30 text-white hover:bg-white/10"
          >
            <Grid3X3 className="w-5 h-5 mr-2" />
            {showTable ? 'Скрыть таблицу' : 'Показать таблицу'}
          </Button>

          {/* Multiplication table */}
          <AnimatePresence>
            {showTable && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex justify-center"
              >
                <Card className="bg-white/10 p-4 rounded-2xl overflow-x-auto max-w-full">
                  <MultiplicationTable maxNum={difficultySettings[difficulty].maxNum} />
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

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
          {/* Timer */}
          {difficultySettings[difficulty].timeLimit > 0 && (
            <motion.div
              key={gameState.timeLeft}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 rounded-xl ${
                gameState.timeLeft <= 5 
                  ? 'bg-red-500/30 text-red-400' 
                  : 'bg-white/10 text-white'
              }`}
            >
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-bold text-base sm:text-lg">{gameState.timeLeft}с</span>
            </motion.div>
          )}

          {/* Streak */}
          {gameState.streak >= 2 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-2 bg-orange-500/30 rounded-xl"
            >
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
              <span className="text-orange-400 font-bold text-sm sm:text-base">{gameState.streak}</span>
            </motion.div>
          )}

          {/* Score */}
          <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 bg-white/10 rounded-xl">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-bold text-sm sm:text-base">{gameState.score}</span>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 bg-white/10 rounded-xl">
            <Target className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
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
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          animate={{ 
            width: `${(gameState.problemsSolved / difficultySettings[difficulty].totalProblems) * 100}%` 
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Problem */}
      {problem && (
        <Card className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border-blue-500/30 rounded-3xl overflow-hidden">
          {/* Encouragement */}
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className={`text-center py-4 text-2xl sm:text-3xl font-bold ${
                  showResult === 'correct' ? 'bg-green-500/30 text-green-400' : 'bg-red-500/30 text-red-400'
                }`}
              >
                {encouragement}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="p-6 sm:p-8">
            {/* Problem display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-4 sm:gap-6 bg-white/10 backdrop-blur rounded-3xl px-6 sm:px-10 py-4 sm:py-6">
                <motion.span
                  className="text-4xl sm:text-5xl font-bold text-white"
                  animate={showResult === 'correct' ? { scale: [1, 1.2, 1] } : {}}
                >
                  {problem.num1}
                </motion.span>
                <motion.span
                  className="text-4xl sm:text-5xl font-bold text-cyan-400"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ×
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
                  className="text-4xl sm:text-5xl font-bold text-yellow-400"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  ?
                </motion.span>
              </div>
            </motion.div>

            {/* Answer options */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {problem.options.map((option, index) => (
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

            {/* Show table hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-center"
            >
              <Button
                variant="ghost"
                onClick={() => setShowTable(!showTable)}
                className="text-white/60 hover:text-white hover:bg-white/10"
              >
                {showTable ? <ChevronUp className="w-4 h-4 mr-2" /> : <ChevronDown className="w-4 h-4 mr-2" />}
                {showTable ? 'Скрыть таблицу' : 'Подсказка: таблица'}
              </Button>
            </motion.div>

            {/* Table popup */}
            <AnimatePresence>
              {showTable && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 flex justify-center overflow-hidden"
                >
                  <Card className="bg-white/10 p-3 rounded-2xl overflow-x-auto max-w-full">
                    <MultiplicationTable 
                      maxNum={difficultySettings[difficulty].maxNum}
                      highlightCell={{ row: problem.num1, col: problem.num2 }}
                    />
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
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
