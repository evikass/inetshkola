'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  CheckCircle, XCircle, RefreshCw, ChevronRight,
  Star, Zap, Trophy, Lightbulb
} from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'

// Типы упражнений
type ExerciseType = 'choice' | 'input' | 'match' | 'order'

interface Exercise {
  id: string
  type: ExerciseType
  question: string
  options?: string[]
  correctAnswer: string | number
  hint?: string
  points: number
}

interface InteractiveExerciseProps {
  exercises: Exercise[]
  title: string
  onComplete?: (score: number) => void
}

export function InteractiveExercise({ exercises, title, onComplete }: InteractiveExerciseProps) {
  const { addExperience, playSound } = useSchool()
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const currentExercise = exercises[currentIndex]
  const isLastExercise = currentIndex === exercises.length - 1
  const progress = ((currentIndex + 1) / exercises.length) * 100

  const handleAnswer = (answer: string | number) => {
    setSelectedAnswer(answer)
  }

  const handleCheck = () => {
    const isCorrect = selectedAnswer === currentExercise.correctAnswer
    
    if (isCorrect) {
      playSound('success')
      setScore(prev => prev + currentExercise.points)
    } else {
      playSound('error')
    }
    
    setShowResult(true)
  }

  const handleNext = () => {
    if (isLastExercise) {
      setCompleted(true)
      addExperience(score)
      onComplete?.(score)
    } else {
      setCurrentIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setShowHint(false)
    }
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setCompleted(false)
    setShowHint(false)
  }

  // Экран завершения
  if (completed) {
    const percentage = Math.round((score / exercises.reduce((sum, e) => sum + e.points, 0)) * 100)
    const maxScore = exercises.reduce((sum, e) => sum + e.points, 0)
    
    return (
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="py-8">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Упражнение завершено!</h2>
            <p className="text-slate-400 mb-4">{title}</p>
            
            <div className="flex justify-center gap-4 mb-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-400">{score}</p>
                <p className="text-xs text-slate-400">из {maxScore} XP</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-400">{percentage}%</p>
                <p className="text-xs text-slate-400">правильных</p>
              </div>
            </div>

            <div className="flex justify-center gap-2">
              <Button variant="outline" onClick={handleRestart}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Ещё раз
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-400" />
            {title}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-yellow-400" />
              {score} XP
            </Badge>
            <Badge variant="outline">
              {currentIndex + 1}/{exercises.length}
            </Badge>
          </div>
        </div>
        <Progress value={progress} className="h-2 mt-2" />
      </CardHeader>
      
      <CardContent className="py-4">
        {/* Вопрос */}
        <div className="mb-6">
          <p className="text-lg font-medium mb-4">{currentExercise.question}</p>
          
          {/* Варианты ответов */}
          {currentExercise.type === 'choice' && currentExercise.options && (
            <div className="grid gap-2">
              {currentExercise.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = index === currentExercise.correctAnswer
                const showCorrect = showResult && isCorrect
                const showWrong = showResult && isSelected && !isCorrect
                
                return (
                  <button
                    key={index}
                    onClick={() => !showResult && handleAnswer(index)}
                    disabled={showResult}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      showCorrect
                        ? 'bg-green-500/20 border-green-500/50 text-green-300'
                        : showWrong
                          ? 'bg-red-500/20 border-red-500/50 text-red-300'
                          : isSelected
                            ? 'bg-blue-500/20 border-blue-500/50'
                            : 'bg-slate-700/30 border-slate-600 hover:bg-slate-700/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                        showCorrect ? 'bg-green-500 text-white' :
                        showWrong ? 'bg-red-500 text-white' :
                        isSelected ? 'bg-blue-500 text-white' : 'bg-slate-600'
                      }`}>
                        {showCorrect ? <CheckCircle className="w-4 h-4" /> :
                         showWrong ? <XCircle className="w-4 h-4" /> :
                         String.fromCharCode(65 + index)}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* Подсказка */}
        {currentExercise.hint && !showResult && (
          <div className="mb-4">
            {showHint ? (
              <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-sm text-blue-300">💡 {currentExercise.hint}</p>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHint(true)}
                className="text-slate-400"
              >
                <Lightbulb className="w-4 h-4 mr-2" />
                Показать подсказку
              </Button>
            )}
          </div>
        )}

        {/* Результат */}
        {showResult && (
          <div className={`p-3 rounded-lg mb-4 ${
            selectedAnswer === currentExercise.correctAnswer
              ? 'bg-green-500/10 border border-green-500/30'
              : 'bg-red-500/10 border border-red-500/30'
          }`}>
            <div className="flex items-center gap-2">
              {selectedAnswer === currentExercise.correctAnswer ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Правильно! +{currentExercise.points} XP</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-300">Неправильно. Правильный ответ: {currentExercise.options?.[currentExercise.correctAnswer as number]}</span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Действия */}
        <div className="flex justify-end gap-2">
          {!showResult ? (
            <Button
              onClick={handleCheck}
              disabled={selectedAnswer === null}
              className="bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Проверить
            </Button>
          ) : (
            <Button onClick={handleNext}>
              {isLastExercise ? 'Завершить' : 'Далее'}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// Предустановленные упражнения для математики
export function MathCountingExercise() {
  const exercises: Exercise[] = [
    {
      id: 'm1',
      type: 'choice',
      question: 'Сколько яблок: 🍎🍎🍎🍎🍎?',
      options: ['3', '4', '5', '6'],
      correctAnswer: 2,
      hint: 'Посчитай каждое яблоко',
      points: 10
    },
    {
      id: 'm2',
      type: 'choice',
      question: 'Чему равно 3 + 2?',
      options: ['4', '5', '6', '7'],
      correctAnswer: 1,
      hint: 'Можно посчитать на пальцах',
      points: 10
    },
    {
      id: 'm3',
      type: 'choice',
      question: 'Чему равно 7 - 3?',
      options: ['3', '4', '5', '6'],
      correctAnswer: 1,
      hint: 'Было 7, убрали 3',
      points: 10
    },
    {
      id: 'm4',
      type: 'choice',
      question: 'Какое число больше: 6 или 4?',
      options: ['6', '4', 'Они равны', 'Не знаю'],
      correctAnswer: 0,
      hint: '6 идёт после 4',
      points: 10
    },
    {
      id: 'm5',
      type: 'choice',
      question: 'Сколько углов у треугольника?',
      options: ['2', '3', '4', '5'],
      correctAnswer: 1,
      hint: 'Три-угольник = три угла',
      points: 15
    }
  ]

  return (
    <InteractiveExercise
      exercises={exercises}
      title="Практика: Счёт и числа"
    />
  )
}

// Упражнение для русского языка
export function RussianVowelsExercise() {
  const exercises: Exercise[] = [
    {
      id: 'r1',
      type: 'choice',
      question: 'Какая буква гласная?',
      options: ['Б', 'М', 'О', 'К'],
      correctAnswer: 2,
      hint: 'Гласные можно пропеть',
      points: 10
    },
    {
      id: 'r2',
      type: 'choice',
      question: 'Сколько слогов в слове "мама"?',
      options: ['1', '2', '3', '4'],
      correctAnswer: 1,
      hint: 'Сколько гласных — столько слогов',
      points: 10
    },
    {
      id: 'r3',
      type: 'choice',
      question: 'Какая буква согласная?',
      options: ['А', 'О', 'И', 'Н'],
      correctAnswer: 3,
      hint: 'Согласные произносятся с преградой',
      points: 10
    },
    {
      id: 'r4',
      type: 'choice',
      question: 'Сколько букв в русском алфавите?',
      options: ['30', '31', '33', '34'],
      correctAnswer: 2,
      hint: 'Вспомни азбуку',
      points: 15
    }
  ]

  return (
    <InteractiveExercise
      exercises={exercises}
      title="Практика: Буквы и звуки"
    />
  )
}

// Упражнение для английского
export function EnglishColorsExercise() {
  const exercises: Exercise[] = [
    {
      id: 'e1',
      type: 'choice',
      question: 'Как будет "красный" по-английски?',
      options: ['blue', 'green', 'red', 'yellow'],
      correctAnswer: 2,
      points: 10
    },
    {
      id: 'e2',
      type: 'choice',
      question: 'What colour is "синий"?',
      options: ['red', 'blue', 'green', 'black'],
      correctAnswer: 1,
      points: 10
    },
    {
      id: 'e3',
      type: 'choice',
      question: 'Как сказать "Привет"?',
      options: ['Bye', 'Hello', 'Sorry', 'Thanks'],
      correctAnswer: 1,
      points: 10
    },
    {
      id: 'e4',
      type: 'choice',
      question: 'Число 5 по-английски?',
      options: ['four', 'five', 'six', 'seven'],
      correctAnswer: 1,
      points: 10
    }
  ]

  return (
    <InteractiveExercise
      exercises={exercises}
      title="Practice: English Basics"
    />
  )
}
