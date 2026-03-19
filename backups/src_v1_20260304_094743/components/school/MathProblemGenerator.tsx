'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import {
  Calculator, Timer, Lightbulb, ChevronRight, RotateCcw,
  Trophy, Zap, CheckCircle, XCircle, HelpCircle, Settings,
  Play, Pause, BarChart3, BookOpen
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

interface MathProblem {
  id: string
  type: 'add' | 'sub' | 'mul' | 'div' | 'fraction' | 'equation' | 'word'
  difficulty: 1 | 2 | 3 | 4
  question: string
  answer: number | string
  hint: string
  steps?: string[]
  visualAid?: 'numberLine' | 'fractionCircle' | 'balance'
  operands?: { a: number; b: number }
}

type DifficultyLevel = 1 | 2 | 3 | 4
type GameMode = 'practice' | 'timer'

const difficultyConfig = {
  1: { name: 'Легко', color: 'from-green-500 to-emerald-600', range: [1, 10] },
  2: { name: 'Средне', color: 'from-yellow-500 to-orange-600', range: [10, 50] },
  3: { name: 'Сложно', color: 'from-orange-500 to-red-600', range: [50, 200] },
  4: { name: 'Эксперт', color: 'from-red-500 to-pink-600', range: [100, 500] },
}

const problemTypes = [
  { id: 'add', name: 'Сложение', icon: '➕', symbol: '+' },
  { id: 'sub', name: 'Вычитание', icon: '➖', symbol: '-' },
  { id: 'mul', name: 'Умножение', icon: '✖️', symbol: '×' },
  { id: 'div', name: 'Деление', icon: '➗', symbol: '÷' },
  { id: 'fraction', name: 'Дроби', icon: '🔢', symbol: '/' },
  { id: 'equation', name: 'Уравнения', icon: '📐', symbol: '=' },
  { id: 'word', name: 'Задачи', icon: '📝', symbol: '?' },
]

// Generate random number in range
const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

// Generate problem based on type and difficulty
const generateProblem = (type: MathProblem['type'], difficulty: DifficultyLevel): MathProblem => {
  const range = difficultyConfig[difficulty].range
  const a = rand(range[0], range[1])
  const b = rand(range[0], Math.min(range[1], a))
  const id = `${type}-${Date.now()}-${rand(1000, 9999)}`

  switch (type) {
    case 'add': {
      const answer = a + b
      return {
        id,
        type: 'add',
        difficulty,
        question: `${a} + ${b} = ?`,
        answer,
        hint: `Сложи ${a} и ${b}`,
        steps: [`${a} + ${b}`, `Начни с ${a}`, `Добавь ${b}`, `Получится ${answer}`],
        visualAid: 'numberLine',
        operands: { a, b }
      }
    }
    case 'sub': {
      const answer = a - b
      return {
        id,
        type: 'sub',
        difficulty,
        question: `${a} - ${b} = ?`,
        answer,
        hint: `Вычти ${b} из ${a}`,
        steps: [`${a} - ${b}`, `Начни с ${a}`, `Отними ${b}`, `Получится ${answer}`],
        visualAid: 'numberLine',
        operands: { a, b }
      }
    }
    case 'mul': {
      const mulA = difficulty === 1 ? rand(1, 10) : rand(2, 12)
      const mulB = difficulty === 1 ? rand(1, 10) : rand(2, 12)
      const answer = mulA * mulB
      return {
        id,
        type: 'mul',
        difficulty,
        question: `${mulA} × ${mulB} = ?`,
        answer,
        hint: `${mulA} умножить на ${mulB}`,
        steps: [`${mulA} × ${mulB}`, `${mulA} + ${mulA} (${mulB} раз)`, `= ${answer}`],
        operands: { a: mulA, b: mulB }
      }
    }
    case 'div': {
      const divB = rand(2, difficulty === 1 ? 10 : 12)
      const answer = rand(1, difficulty === 1 ? 10 : 20)
      const divA = answer * divB
      return {
        id,
        type: 'div',
        difficulty,
        question: `${divA} ÷ ${divB} = ?`,
        answer,
        hint: `Раздели ${divA} на ${divB}`,
        steps: [`${divA} ÷ ${divB}`, `Сколько раз ${divB} помещается в ${divA}?`, `= ${answer}`],
        operands: { a: divA, b: divB }
      }
    }
    case 'fraction': {
      const num = rand(1, 8)
      const denom = rand(num + 1, 10)
      const num2 = rand(1, 8)
      const denom2 = denom
      const answerNum = num + num2
      const answer = `${answerNum}/${denom}`
      return {
        id,
        type: 'fraction',
        difficulty,
        question: `${num}/${denom} + ${num2}/${denom2} = ?`,
        answer,
        hint: 'Сложи числители, знаменатель остаётся тем же',
        steps: [`${num}/${denom} + ${num2}/${denom}`, `Числители: ${num} + ${num2} = ${answerNum}`, `Ответ: ${answerNum}/${denom}`],
        visualAid: 'fractionCircle'
      }
    }
    case 'equation': {
      const x = rand(1, 20)
      const coef = rand(2, 5)
      const constant = rand(1, 10)
      const result = coef * x + constant
      return {
        id,
        type: 'equation',
        difficulty,
        question: `${coef}x + ${constant} = ${result}. Найди x.`,
        answer: x,
        hint: `Сначала вычти ${constant} из ${result}, потом раздели на ${coef}`,
        steps: [`${coef}x + ${constant} = ${result}`, `${coef}x = ${result} - ${constant} = ${result - constant}`, `x = ${result - constant} ÷ ${coef} = ${x}`],
        visualAid: 'balance'
      }
    }
    case 'word': {
      const items = ['яблок', 'конфет', 'карандашей', 'книг', 'марок']
      const item = items[rand(0, items.length - 1)]
      const count1 = rand(5, 30)
      const count2 = rand(5, 30)
      const answer = count1 + count2
      return {
        id,
        type: 'word',
        difficulty,
        question: `У Маши ${count1} ${item}, а у Пети ${count2} ${item}. Сколько всего?`,
        answer,
        hint: 'Сложи количество',
        steps: [`У Маши: ${count1}`, `У Пети: ${count2}`, `Всего: ${count1} + ${count2} = ${answer}`]
      }
    }
    default:
      return generateProblem('add', difficulty)
  }
}

export default function MathProblemGenerator() {
  const [selectedType, setSelectedType] = useState<MathProblem['type']>('add')
  const [difficulty, setDifficulty] = useState<DifficultyLevel>(1)
  const [mode, setMode] = useState<GameMode>('practice')
  const [currentProblem, setCurrentProblem] = useState<MathProblem | null>(null)
  const [userAnswer, setUserAnswer] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [showSteps, setShowSteps] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState({ correct: 0, total: 0 })
  const [timer, setTimer] = useState(60)
  const [isRunning, setIsRunning] = useState(false)
  const [wrongAnswers, setWrongAnswers] = useState<MathProblem[]>([])
  const [showSettings, setShowSettings] = useState(false)
  const { playSuccess, playError, playWin, playClick } = useSound()

  // Start new problem
  const newProblem = useCallback(() => {
    const problem = generateProblem(selectedType, difficulty)
    setCurrentProblem(problem)
    setUserAnswer('')
    setShowHint(false)
    setShowSteps(false)
    setIsCorrect(null)
    playClick()
  }, [selectedType, difficulty, playClick])

  // Start game
  const startGame = () => {
    newProblem()
    setIsRunning(true)
    setScore({ correct: 0, total: 0 })
    setTimer(60)
    playClick()
  }

  // Timer effect
  useEffect(() => {
    if (mode !== 'timer' || !isRunning || timer <= 0) return
    
    const interval = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          setIsRunning(false)
          playWin()
          return 0
        }
        return t - 1
      })
    }, 1000)
    
    return () => clearInterval(interval)
  }, [mode, isRunning, playWin])

  // Check answer
  const checkAnswer = () => {
    if (!currentProblem) return

    const userNum = parseFloat(userAnswer)
    const correctAnswer = typeof currentProblem.answer === 'number'
      ? currentProblem.answer
      : parseFloat(currentProblem.answer.split('/')[0]) / parseFloat(currentProblem.answer.split('/')[1])

    const isAnswerCorrect = !isNaN(userNum) && (
      typeof currentProblem.answer === 'number'
        ? userNum === currentProblem.answer
        : Math.abs(userNum - correctAnswer) < 0.01
    )

    setIsCorrect(isAnswerCorrect)
    setScore((s) => ({
      correct: s.correct + (isAnswerCorrect ? 1 : 0),
      total: s.total + 1
    }))

    if (isAnswerCorrect) {
      playSuccess()
    } else {
      playError()
      setWrongAnswers((prev) => [...prev, currentProblem])
    }
  }

  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && userAnswer && isCorrect === null) {
      checkAnswer()
    } else if (e.key === 'Enter' && isCorrect !== null) {
      newProblem()
    }
  }

  // Render visual aid
  const renderVisualAid = () => {
    if (!currentProblem?.visualAid || !currentProblem.operands) return null

    const { a, b } = currentProblem.operands

    switch (currentProblem.visualAid) {
      case 'numberLine':
        const maxNum = Math.max(a, b, (a + b) || a - b) + 5
        return (
          <div className="mt-4 p-4 bg-white/5 rounded-xl">
            <p className="text-sm text-white/60 mb-2">Числовая прямая:</p>
            <div className="relative h-8">
              {[...Array(Math.min(maxNum, 20))].map((_, i) => (
                <div
                  key={i}
                  className="absolute bottom-0 flex flex-col items-center"
                  style={{ left: `${(i / (Math.min(maxNum, 20) - 1)) * 100}%` }}
                >
                  <div className="w-0.5 h-3 bg-white/30" />
                  <span className="text-xs text-white/50">{i}</span>
                </div>
              ))}
              <motion.div
                className="absolute bottom-4 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs"
                initial={{ left: 0 }}
                animate={{ left: `${(a / (Math.min(maxNum, 20) - 1)) * 100}%` }}
              >
                {a}
              </motion.div>
            </div>
          </div>
        )
      case 'fractionCircle':
        return (
          <div className="mt-4 p-4 bg-white/5 rounded-xl flex justify-center gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-4 border-purple-400 flex items-center justify-center">
                <span className="text-lg">1/4</span>
              </div>
              <p className="text-xs text-white/50 mt-1">Круг</p>
            </div>
          </div>
        )
      case 'balance':
        return (
          <div className="mt-4 p-4 bg-white/5 rounded-xl">
            <div className="flex items-center justify-center gap-4">
              <div className="w-20 h-12 bg-blue-500/30 rounded flex items-center justify-center text-white">
                ? × coef
              </div>
              <div className="text-2xl">⚖️</div>
              <div className="w-20 h-12 bg-green-500/30 rounded flex items-center justify-center text-white">
                результат
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  // Game over screen
  if (mode === 'timer' && !isRunning && score.total > 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-6xl mb-4"
        >
          🏆
        </motion.div>
        <h2 className="text-2xl font-bold text-white mb-2">Время вышло!</h2>
        <div className="flex gap-4 mb-6">
          <Card className="bg-green-500/20 border-green-500/30">
            <CardContent className="p-4">
              <p className="text-3xl font-bold text-green-400">{score.correct}</p>
              <p className="text-sm text-white/60">Правильно</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-4">
              <p className="text-3xl font-bold text-white">{score.total}</p>
              <p className="text-sm text-white/60">Всего</p>
            </CardContent>
          </Card>
        </div>
        <p className="text-lg text-white/70 mb-4">
          Точность: {Math.round((score.correct / score.total) * 100)}%
        </p>
        <Button onClick={startGame} className="bg-gradient-to-r from-purple-500 to-pink-500">
          <RotateCcw className="w-4 h-4 mr-2" />
          Играть снова
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calculator className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl font-bold text-white">Генератор задач</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={() => setShowSettings(!showSettings)}>
          <Settings className="w-4 h-4" />
        </Button>
      </div>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-4 space-y-4">
                {/* Mode Selection */}
                <div>
                  <p className="text-sm text-white/60 mb-2">Режим</p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => setMode('practice')}
                      className={mode === 'practice' ? 'bg-purple-500' : 'bg-white/10'}
                    >
                      <BookOpen className="w-4 h-4 mr-1" />
                      Практика
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => setMode('timer')}
                      className={mode === 'timer' ? 'bg-purple-500' : 'bg-white/10'}
                    >
                      <Timer className="w-4 h-4 mr-1" />
                      На время
                    </Button>
                  </div>
                </div>

                {/* Difficulty */}
                <div>
                  <p className="text-sm text-white/60 mb-2">Сложность</p>
                  <div className="flex gap-2">
                    {([1, 2, 3, 4] as DifficultyLevel[]).map((d) => (
                      <Button
                        key={d}
                        size="sm"
                        onClick={() => setDifficulty(d)}
                        className={difficulty === d ? `bg-gradient-to-r ${difficultyConfig[d].color}` : 'bg-white/10'}
                      >
                        {difficultyConfig[d].name}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Problem Types */}
      <div className="flex gap-1 flex-wrap">
        {problemTypes.map((type) => (
          <Button
            key={type.id}
            size="sm"
            variant="ghost"
            onClick={() => { setSelectedType(type.id as MathProblem['type']); playClick(); }}
            className={`
              ${selectedType === type.id ? 'bg-purple-500/20 text-purple-400' : 'text-white/60 hover:text-white'}
            `}
          >
            <span className="mr-1">{type.icon}</span>
            {type.name}
          </Button>
        ))}
      </div>

      {/* Timer Mode Header */}
      {mode === 'timer' && isRunning && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
              <Timer className="w-3 h-3 mr-1" />
              {timer}с
            </Badge>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
              {score.correct}/{score.total}
            </Badge>
          </div>
          <Button size="sm" variant="ghost" onClick={() => setIsRunning(false)}>
            <Pause className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Start Screen or Problem */}
      {!currentProblem ? (
        <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
          <CardContent className="p-8 text-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-4"
            >
              🧮
            </motion.div>
            <p className="text-white/70 mb-4">
              Выбери тип задачи и сложность, затем начни!
            </p>
            <Button
              onClick={startGame}
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500"
            >
              <Play className="w-4 h-4 mr-2" />
              {mode === 'timer' ? 'Начать на время' : 'Начать практику'}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <motion.div
          key={currentProblem.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              {/* Question */}
              <div className="text-center mb-6">
                <Badge className={`mb-3 bg-gradient-to-r ${difficultyConfig[currentProblem.difficulty].color}`}>
                  {difficultyConfig[currentProblem.difficulty].name}
                </Badge>
                <p className="text-2xl font-bold text-white">{currentProblem.question}</p>
              </div>

              {/* Visual Aid */}
              {renderVisualAid()}

              {/* Answer Input */}
              <div className="flex gap-2 mb-4">
                <Input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Твой ответ..."
                  className="text-lg bg-white/5 border-white/10 text-white"
                  disabled={isCorrect !== null}
                />
                <Button
                  onClick={checkAnswer}
                  disabled={!userAnswer || isCorrect !== null}
                  className="bg-gradient-to-r from-purple-500 to-pink-500"
                >
                  <CheckCircle className="w-4 h-4" />
                </Button>
              </div>

              {/* Hint */}
              <div className="flex gap-2 mb-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowHint(!showHint)}
                  className="text-yellow-400"
                >
                  <Lightbulb className="w-4 h-4 mr-1" />
                  Подсказка
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSteps(!showSteps)}
                  className="text-blue-400"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  Решение
                </Button>
              </div>

              <AnimatePresence>
                {showHint && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 mb-4"
                  >
                    <p className="text-yellow-400 text-sm">{currentProblem.hint}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {showSteps && currentProblem.steps && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 mb-4"
                  >
                    {currentProblem.steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-2 text-blue-400 text-sm">
                        <ChevronRight className="w-4 h-4" />
                        {step}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Result */}
              <AnimatePresence>
                {isCorrect !== null && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`p-4 rounded-xl mb-4 ${
                      isCorrect ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <>
                          <CheckCircle className="w-6 h-6 text-green-400" />
                          <p className="text-green-400 font-bold">Правильно! 🎉</p>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-6 h-6 text-red-400" />
                          <p className="text-red-400 font-bold">
                            Неправильно. Ответ: {currentProblem.answer}
                          </p>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next Button */}
              {isCorrect !== null && (
                <Button onClick={newProblem} className="w-full bg-white/10 hover:bg-white/20 text-white">
                  Следующая задача
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Stats */}
      {score.total > 0 && mode === 'practice' && (
        <div className="grid grid-cols-3 gap-2">
          <Card className="bg-green-500/10 border-green-500/20">
            <CardContent className="p-3 text-center">
              <CheckCircle className="w-5 h-5 mx-auto mb-1 text-green-400" />
              <p className="text-lg font-bold text-white">{score.correct}</p>
              <p className="text-xs text-white/60">Правильно</p>
            </CardContent>
          </Card>
          <Card className="bg-red-500/10 border-red-500/20">
            <CardContent className="p-3 text-center">
              <XCircle className="w-5 h-5 mx-auto mb-1 text-red-400" />
              <p className="text-lg font-bold text-white">{score.total - score.correct}</p>
              <p className="text-xs text-white/60">Ошибки</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-500/10 border-purple-500/20">
            <CardContent className="p-3 text-center">
              <BarChart3 className="w-5 h-5 mx-auto mb-1 text-purple-400" />
              <p className="text-lg font-bold text-white">
                {Math.round((score.correct / score.total) * 100)}%
              </p>
              <p className="text-xs text-white/60">Точность</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Wrong Answers Review */}
      {wrongAnswers.length > 0 && (
        <Card className="bg-red-500/5 border-red-500/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-red-400 flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              Ошибки ({wrongAnswers.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {wrongAnswers.map((problem, i) => (
                <div key={problem.id} className="text-sm text-white/70">
                  <span className="text-red-400">{i + 1}.</span> {problem.question} = <span className="text-green-400">{problem.answer}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
