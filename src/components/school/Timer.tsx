'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Timer, Play, Pause, RotateCcw, CheckCircle, XCircle,
  Zap, Trophy, Clock, AlertCircle, ChevronRight, Star
} from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'

interface SprintQuestion {
  id: string
  question: string
  correctAnswer: boolean // true/false для быстрого ответа
}

interface StudyTimerProps {
  initialMinutes?: number
  onSessionComplete?: (minutes: number) => void
}

// Хелпер для загрузки данных таймера
function loadTimerData() {
  if (typeof window === 'undefined') return { sessions: 0, minutes: 0 }
  try {
    const today = new Date().toDateString()
    const saved = localStorage.getItem(`studyTimer_${today}`)
    if (saved) return JSON.parse(saved)
  } catch { /* ignore */ }
  return { sessions: 0, minutes: 0 }
}

// Таймер для обучения
export function StudyTimer({ initialMinutes = 25, onSessionComplete }: StudyTimerProps) {
  const { addExperience, playSound, setUserStats } = useSchool()
  
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60)
  const [isRunning, setIsRunning] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [sessionsToday, setSessionsToday] = useState(() => loadTimerData().sessions)
  const [totalMinutesToday, setTotalMinutesToday] = useState(() => loadTimerData().minutes)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Сохранение данных
  useEffect(() => {
    const today = new Date().toDateString()
    localStorage.setItem(`studyTimer_${today}`, JSON.stringify({
      sessions: sessionsToday,
      minutes: totalMinutesToday
    }))
  }, [sessionsToday, totalMinutesToday])

  // Таймер
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false)
            setIsComplete(true)
            playSound('achievement')
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isRunning, playSound])

  // Форматирование времени
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // Прогресс
  const progress = ((initialMinutes * 60 - timeLeft) / (initialMinutes * 60)) * 100

  // Управление
  const handleStart = () => {
    setIsRunning(true)
    setIsComplete(false)
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setTimeLeft(initialMinutes * 60)
    setIsComplete(false)
  }

  // Завершение сессии
  const handleComplete = () => {
    const minutesStudied = initialMinutes - Math.ceil(timeLeft / 60)
    addExperience(minutesStudied * 2) // 2 XP за минуту
    
    setSessionsToday(prev => prev + 1)
    setTotalMinutesToday(prev => prev + minutesStudied)
    setUserStats(prev => ({
      ...prev,
      totalStudyTime: prev.totalStudyTime + minutesStudied
    }))
    
    onSessionComplete?.(minutesStudied)
    handleReset()
  }

  // Предустановки времени
  const presets = [
    { label: '15 мин', value: 15 },
    { label: '25 мин', value: 25 },
    { label: '45 мин', value: 45 },
    { label: '60 мин', value: 60 },
  ]

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardContent className="py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <Timer className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Таймер обучения</h3>
              <p className="text-xs text-slate-400">Сегодня: {totalMinutesToday} мин • {sessionsToday} сессий</p>
            </div>
          </div>
        </div>

        {/* Таймер */}
        <div className="relative flex items-center justify-center py-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-40 h-40 transform -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="rgba(100, 116, 139, 0.3)"
                strokeWidth="8"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="url(#timerGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={440}
                strokeDashoffset={440 - (440 * progress) / 100}
                className="transition-all duration-1000"
              />
              <defs>
                <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-center z-10">
            <p className={`text-4xl font-mono font-bold ${isComplete ? 'text-green-400' : 'text-white'}`}>
              {formatTime(timeLeft)}
            </p>
            {isComplete && (
              <p className="text-sm text-green-400 mt-1 flex items-center justify-center gap-1">
                <Trophy className="w-4 h-4" />
                Сессия завершена!
              </p>
            )}
          </div>
        </div>

        {/* Предустановки */}
        <div className="flex justify-center gap-2 mb-4">
          {presets.map(preset => (
            <Button
              key={preset.value}
              variant={initialMinutes === preset.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => {
                handleReset()
                setTimeLeft(preset.value * 60)
              }}
              className={initialMinutes === preset.value ? 'bg-blue-600' : ''}
            >
              {preset.label}
            </Button>
          ))}
        </div>

        {/* Кнопки управления */}
        <div className="flex justify-center gap-2">
          {!isRunning ? (
            <Button onClick={handleStart} className="bg-green-600 hover:bg-green-700">
              <Play className="w-4 h-4 mr-2" />
              Начать
            </Button>
          ) : (
            <Button onClick={handlePause} variant="outline">
              <Pause className="w-4 h-4 mr-2" />
              Пауза
            </Button>
          )}
          <Button variant="outline" onClick={handleReset}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Сброс
          </Button>
          {isComplete && (
            <Button onClick={handleComplete} className="bg-purple-600 hover:bg-purple-700">
              <CheckCircle className="w-4 h-4 mr-2" />
              Завершить
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// Спринт-режим
interface SprintModeProps {
  questions?: SprintQuestion[]
  onComplete?: (score: number, correct: number, total: number) => void
}

// Генератор вопросов для спринта
function generateSprintQuestions(count: number = 10): SprintQuestion[] {
  const questions: SprintQuestion[] = []
  const operations = ['+', '-']
  
  for (let i = 0; i < count; i++) {
    const op = operations[Math.floor(Math.random() * operations.length)]
    const a = Math.floor(Math.random() * 10) + 1
    const b = Math.floor(Math.random() * 10) + 1
    
    let correctAnswer: number
    let displayedResult: number
    
    if (op === '+') {
      correctAnswer = a + b
      // Иногда показываем неправильный результат
      const showWrong = Math.random() > 0.5
      displayedResult = showWrong ? correctAnswer + Math.floor(Math.random() * 3) + 1 : correctAnswer
    } else {
      correctAnswer = a - b
      const showWrong = Math.random() > 0.5
      displayedResult = showWrong ? correctAnswer - Math.floor(Math.random() * 3) - 1 : correctAnswer
    }
    
    questions.push({
      id: `sprint-${i}`,
      question: `${a} ${op} ${b} = ${displayedResult}`,
      correctAnswer: displayedResult === correctAnswer
    })
  }
  
  return questions
}

export function SprintMode({ onComplete }: SprintModeProps) {
  const { addExperience, playSound, setShowConfetti } = useSchool()
  
  const [questions] = useState(() => generateSprintQuestions(10))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30) // 30 секунд
  const [isRunning, setIsRunning] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [answer, setAnswer] = useState<boolean | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [combo, setCombo] = useState(0)
  const [maxCombo, setMaxCombo] = useState(0)

  // Таймер
  useEffect(() => {
    if (isRunning && timeLeft > 0 && !isFinished) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false)
            setIsFinished(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isRunning, timeLeft, isFinished])

  // Ответ
  const handleAnswer = (isTrue: boolean) => {
    if (!isRunning || isFinished) return
    
    const currentQuestion = questions[currentIndex]
    const isCorrect = isTrue === currentQuestion.correctAnswer
    
    setAnswer(isTrue)
    setShowFeedback(true)
    
    if (isCorrect) {
      playSound('success')
      setCorrect(prev => prev + 1)
      setCombo(prev => {
        const newCombo = prev + 1
        setMaxCombo(max => Math.max(max, newCombo))
        return newCombo
      })
      // Бонус за комбо
      const comboBonus = Math.min(combo, 5) * 5
      setScore(prev => prev + 10 + comboBonus)
    } else {
      playSound('error')
      setCombo(0)
    }
    
    setTimeout(() => {
      setShowFeedback(false)
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1)
      } else {
        setIsFinished(true)
        setIsRunning(false)
      }
    }, 300)
  }

  // Начать
  const handleStart = () => {
    setIsRunning(true)
    setCurrentIndex(0)
    setScore(0)
    setCorrect(0)
    setTimeLeft(30)
    setIsFinished(false)
    setCombo(0)
    setMaxCombo(0)
  }

  // Завершение
  useEffect(() => {
    if (isFinished && score > 0) {
      addExperience(score)
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 2000)
      onComplete?.(score, correct, questions.length)
    }
  }, [isFinished, score, correct, questions.length, addExperience, setShowConfetti, onComplete])

  const progress = ((currentIndex + 1) / questions.length) * 100

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardContent className="py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Спринт-режим</h3>
              <p className="text-xs text-slate-400">Быстрые вычисления на время!</p>
            </div>
          </div>
          {combo > 0 && (
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
              🔥 x{combo} комбо
            </Badge>
          )}
        </div>

        {!isRunning && !isFinished ? (
          // Экран начала
          <div className="text-center py-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-2">Математический спринт</h4>
            <p className="text-slate-400 text-sm mb-4">
              Реши максимум примеров за 30 секунд!<br/>
              Правильно ли равенство? Жми ✓ или ✗
            </p>
            <div className="flex justify-center gap-4 text-sm text-slate-400 mb-6">
              <div>10 вопросов</div>
              <div>30 секунд</div>
            </div>
            <Button onClick={handleStart} className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              <Play className="w-4 h-4 mr-2" />
              Начать спринт
            </Button>
          </div>
        ) : isFinished ? (
          // Экран результатов
          <div className="text-center py-6">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h4 className="text-2xl font-bold mb-2">Спринт завершён!</h4>
            <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto mb-4">
              <div className="p-3 bg-slate-700/50 rounded-lg">
                <p className="text-2xl font-bold text-yellow-400">{score}</p>
                <p className="text-xs text-slate-400">очков</p>
              </div>
              <div className="p-3 bg-slate-700/50 rounded-lg">
                <p className="text-2xl font-bold text-green-400">{correct}</p>
                <p className="text-xs text-slate-400">правильно</p>
              </div>
              <div className="p-3 bg-slate-700/50 rounded-lg">
                <p className="text-2xl font-bold text-orange-400">{maxCombo}</p>
                <p className="text-xs text-slate-400">макс. комбо</p>
              </div>
            </div>
            <Button onClick={handleStart} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Ещё раз
            </Button>
          </div>
        ) : (
          // Игровой экран
          <div>
            {/* Таймер и прогресс */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-400" />
                <span className={`text-xl font-mono font-bold ${timeLeft <= 10 ? 'text-red-400 animate-pulse' : ''}`}>
                  {timeLeft}с
                </span>
              </div>
              <Badge variant="outline">
                {currentIndex + 1}/{questions.length}
              </Badge>
            </div>
            
            <Progress value={progress} className="h-2 mb-4" />

            {/* Вопрос */}
            <div className="text-center py-6">
              <p className="text-3xl font-bold mb-2">{questions[currentIndex]?.question}</p>
              <p className="text-slate-400 text-sm mb-6">Правильно?</p>

              {/* Кнопки ответа */}
              <div className="flex justify-center gap-4">
                <Button
                  size="lg"
                  className={`w-24 h-16 text-2xl ${
                    showFeedback && questions[currentIndex]?.correctAnswer === true
                      ? 'bg-green-600'
                      : showFeedback && answer === true
                        ? 'bg-red-600'
                        : 'bg-green-600 hover:bg-green-700'
                  }`}
                  onClick={() => handleAnswer(true)}
                  disabled={showFeedback}
                >
                  ✓
                </Button>
                <Button
                  size="lg"
                  className={`w-24 h-16 text-2xl ${
                    showFeedback && questions[currentIndex]?.correctAnswer === false
                      ? 'bg-green-600'
                      : showFeedback && answer === false
                        ? 'bg-red-600'
                        : 'bg-red-600 hover:bg-red-700'
                  }`}
                  onClick={() => handleAnswer(false)}
                  disabled={showFeedback}
                >
                  ✗
                </Button>
              </div>

              {/* Очки */}
              <div className="mt-4">
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-lg px-4 py-1">
                  <Star className="w-4 h-4 mr-1" />
                  {score} очков
                </Badge>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
