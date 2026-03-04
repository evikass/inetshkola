'use client'

import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Star, Trophy, RotateCcw, ArrowLeft, Zap, Timer } from 'lucide-react'

interface MultiplicationGameProps {
  onBack: () => void
  onComplete: (stars: number) => void
}

// Игра "Таблица умножения"
export function MultiplicationGame({ onBack, onComplete }: MultiplicationGameProps) {
  const [mode, setMode] = useState<'select' | 'practice' | 'challenge'>('select')
  const [selectedTable, setSelectedTable] = useState<number | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState({ a: 0, b: 0, answer: 0 })
  const [options, setOptions] = useState<number[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [stars, setStars] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)
  const [timer, setTimer] = useState(0)
  const [isChallenge, setIsChallenge] = useState(false)

  // Генерация нового вопроса
  const generateQuestion = useCallback((table?: number) => {
    const a = table || Math.floor(Math.random() * 9) + 2
    const b = Math.floor(Math.random() * 10) + 1
    const answer = a * b

    setCurrentQuestion({ a, b, answer })

    // Генерируем варианты ответов
    const opts = new Set<number>([answer])
    while (opts.size < 4) {
      const opt = Math.max(1, answer + Math.floor(Math.random() * 20) - 10)
      opts.add(opt)
    }
    setOptions(Array.from(opts).sort(() => Math.random() - 0.5))
    setSelectedAnswer(null)
    setIsCorrect(null)
  }, [])

  // Начать практику с выбранной таблицей
  const startPractice = (table: number) => {
    setSelectedTable(table)
    setMode('practice')
    setScore(0)
    setStars(0)
    setRound(1)
    setGameComplete(false)
    setTimer(0)
    setIsChallenge(false)
    generateQuestion(table)
  }

  // Начать челлендж (все таблицы)
  const startChallenge = () => {
    setSelectedTable(null)
    setMode('challenge')
    setScore(0)
    setStars(0)
    setRound(1)
    setGameComplete(false)
    setTimer(60)
    setIsChallenge(true)
    generateQuestion()
  }

  // Обработка выбора
  const handleSelect = (answer: number) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(answer)
    const correct = answer === currentQuestion.answer
    setIsCorrect(correct)

    if (correct) {
      setScore(prev => prev + 1)
      setStars(prev => prev + 1)

      if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100])
      }

      setTimeout(() => {
        if (!isChallenge && round >= 10) {
          setGameComplete(true)
        } else {
          setRound(prev => prev + 1)
          generateQuestion(selectedTable || undefined)
        }
      }, 1000)
    } else {
      if (navigator.vibrate) {
        navigator.vibrate(200)
      }
    }
  }

  // Завершение игры
  const finishGame = () => {
    onComplete(stars)
  }

  // Перезапуск
  const restartGame = () => {
    if (isChallenge) {
      startChallenge()
    } else {
      startPractice(selectedTable!)
    }
  }

  // Выбор таблицы
  if (mode === 'select') {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 z-50 overflow-hidden">
        {/* Шапка */}
        <div className="relative z-10 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <Button
              onClick={onBack}
              className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 rounded-2xl px-4 sm:px-6 py-3 text-base font-bold"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Выход
            </Button>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              ✖️ Таблица умножения
            </h2>
          </div>
        </div>

        {/* Выбор таблицы */}
        <div className="relative z-10 flex-1 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl bg-white/95 rounded-3xl shadow-2xl overflow-hidden p-6">
            <h3 className="text-xl font-bold text-gray-800 text-center mb-6">
              Выбери таблицу для изучения
            </h3>

            <div className="grid grid-cols-5 gap-3 mb-6">
              {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <Button
                  key={num}
                  onClick={() => startPractice(num)}
                  className="bg-gradient-to-br from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white rounded-2xl py-4 text-xl font-bold"
                >
                  ×{num}
                </Button>
              ))}
            </div>

            <div className="border-t pt-6">
              <Button
                onClick={startChallenge}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-2xl py-6 text-xl font-bold"
              >
                <Zap className="w-6 h-6 mr-2" />
                Челлендж: все таблицы!
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  // Экран завершения
  if (gameComplete) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md bg-white/95 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="text-7xl animate-bounce">🏆</div>
            <h2 className="text-3xl font-bold text-gray-800">
              {isChallenge ? 'ВРЕМЯ ВЫШЛО!' : 'ОТЛИЧНО!'}
            </h2>
            <p className="text-gray-600">
              Правильных ответов: {score}
            </p>
            
            <div className="flex justify-center gap-2">
              {[...Array(Math.min(stars, 5))].map((_, i) => (
                <Star
                  key={i}
                  className="w-10 h-10 text-yellow-400 fill-yellow-400 animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>

            <div className="text-2xl font-bold text-purple-600">
              +{stars} звёзд!
            </div>

            <div className="flex flex-col gap-3">
              <Button
                onClick={restartGame}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl py-5 text-lg font-bold"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Играть снова
              </Button>

              <Button
                onClick={finishGame}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl py-5 text-lg font-bold"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Забрать награду
              </Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  // Игровой экран
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 z-50 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['✖️', '🔢', '➕', '➗', '🧮'].map((emoji, i) => (
          <div
            key={i}
            className="absolute animate-float text-3xl opacity-20"
            style={{
              left: `${10 + i * 20}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Шапка */}
      <div className="relative z-10 p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <Button
            onClick={onBack}
            className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 rounded-2xl px-4 sm:px-6 py-3 text-base font-bold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Выход
          </Button>

          <div className="flex items-center gap-4">
            {isChallenge && (
              <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold flex items-center gap-2">
                <Timer className="w-5 h-5" />
                {timer}с
              </div>
            )}
            <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">
              {isChallenge ? `Счёт: ${score}` : `Раунд ${round}/10`}
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-2xl px-4 py-2">
              <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
              <span className="text-white text-xl font-bold">{stars}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-8">
        <Card className="w-full max-w-lg bg-white/95 rounded-3xl shadow-2xl overflow-hidden">
          {/* Заголовок */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 sm:p-6 text-center">
            {selectedTable && (
              <p className="text-white/80 text-sm mb-2">
                Таблица на {selectedTable}
              </p>
            )}
            <div className="text-5xl sm:text-6xl font-bold text-white">
              {currentQuestion.a} × {currentQuestion.b} = ?
            </div>
          </div>

          {/* Варианты ответов */}
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {options.map((option) => {
                const isSelected = selectedAnswer === option
                const isTheCorrectAnswer = option === currentQuestion.answer
                const showCorrect = selectedAnswer !== null && isTheCorrectAnswer
                const showWrong = isSelected && !isCorrect

                return (
                  <Button
                    key={option}
                    onClick={() => handleSelect(option)}
                    disabled={selectedAnswer !== null}
                    className={`
                      rounded-2xl py-6 sm:py-8 text-2xl sm:text-3xl font-bold
                      transition-all duration-300
                      ${showCorrect
                        ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white ring-4 ring-green-300 scale-110'
                        : showWrong
                          ? 'bg-gradient-to-r from-red-400 to-pink-500 text-white ring-4 ring-red-300 animate-shake'
                          : 'bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white'
                      }
                    `}
                  >
                    {option}
                  </Button>
                )
              })}
            </div>

            {/* Подсказка */}
            {selectedAnswer !== null && !isCorrect && (
              <div className="mt-4 p-4 bg-orange-100 rounded-2xl text-center">
                <p className="text-orange-700 font-medium">
                  Правильный ответ: {currentQuestion.answer}
                </p>
                <p className="text-orange-600 text-sm mt-1">
                  💡 {currentQuestion.a} × {currentQuestion.b} = {currentQuestion.answer}
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-shake { animation: shake 0.3s ease-in-out; }
      `}</style>
    </div>
  )
}
