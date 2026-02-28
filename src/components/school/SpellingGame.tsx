'use client'

import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Star, Trophy, RotateCcw, ArrowLeft, BookOpen } from 'lucide-react'

interface SpellingGameProps {
  onBack: () => void
  onComplete: (stars: number) => void
}

// Слова для игры
const spellingWords = {
  'ЖИ-ШИ': [
    { word: 'маш_на', answer: 'И', correct: 'машина' },
    { word: 'ж_знь', answer: 'И', correct: 'жизнь' },
    { word: 'ш_на', answer: 'И', correct: 'шина' },
    { word: 'лыж_', answer: 'И', correct: 'лыжи' },
    { word: 'еж_', answer: 'И', correct: 'ежи' },
    { word: 'ж_р', answer: 'И', correct: 'жир' },
    { word: 'ш_ть', answer: 'И', correct: 'шить' },
    { word: 'морж_', answer: 'И', correct: 'моржи' },
  ],
  'ЧА-ЩА': [
    { word: 'ч_шка', answer: 'А', correct: 'чашка' },
    { word: 'ча_', answer: 'А', correct: 'чая' },
    { word: 'д_ча', answer: 'А', correct: 'дача' },
    { word: 'щ_вель', answer: 'А', correct: 'щавель' },
    { word: 'рощ_', answer: 'А', correct: 'роща' },
    { word: 'площ_дка', answer: 'А', correct: 'площадка' },
    { word: 'зад_ча', answer: 'А', correct: 'задача' },
    { word: 'куч_', answer: 'А', correct: 'куча' },
  ],
  'ЧУ-ЩУ': [
    { word: 'ч_до', answer: 'У', correct: 'чудо' },
    { word: 'щ_ка', answer: 'У', correct: 'щука' },
    { word: 'ч_лок', answer: 'У', correct: 'чулок' },
    { word: 'ч_вство', answer: 'У', correct: 'чувство' },
    { word: 'щ_плый', answer: 'У', correct: 'щуплый' },
    { word: 'ч_тьё', answer: 'У', correct: 'чутьё' },
  ]
}

// Игра "Правописание"
export function SpellingGame({ onBack, onComplete }: SpellingGameProps) {
  const [mode, setMode] = useState<'select' | 'practice'>('select')
  const [selectedRule, setSelectedRule] = useState<string | null>(null)
  const [currentWord, setCurrentWord] = useState<{ word: string; answer: string; correct: string } | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [stars, setStars] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)
  const [usedWords, setUsedWords] = useState<Set<string>>(new Set())

  // Правила
  const rules = [
    { id: 'ЖИ-ШИ', title: 'ЖИ-ШИ', desc: 'Пишется И', color: 'from-purple-500 to-pink-500', emoji: '🔤' },
    { id: 'ЧА-ЩА', title: 'ЧА-ЩА', desc: 'Пишется А', color: 'from-orange-500 to-red-500', emoji: '📝' },
    { id: 'ЧУ-ЩУ', title: 'ЧУ-ЩУ', desc: 'Пишется У', color: 'from-blue-500 to-cyan-500', emoji: '✏️' },
  ]

  // Генерация нового слова
  const generateWord = useCallback((rule: string) => {
    const words = spellingWords[rule as keyof typeof spellingWords]
    const availableWords = words.filter(w => !usedWords.has(w.word))
    
    if (availableWords.length === 0) {
      setGameComplete(true)
      return
    }

    const word = availableWords[Math.floor(Math.random() * availableWords.length)]
    setCurrentWord(word)
    setUsedWords(prev => new Set([...prev, word.word]))
    setSelectedAnswer(null)
    setIsCorrect(null)
  }, [usedWords])

  // Начать практику
  const startPractice = (rule: string) => {
    setSelectedRule(rule)
    setMode('practice')
    setScore(0)
    setStars(0)
    setRound(1)
    setGameComplete(false)
    setUsedWords(new Set())
    generateWord(rule)
  }

  // Обработка выбора
  const handleSelect = (answer: string) => {
    if (selectedAnswer !== null || !currentWord) return

    setSelectedAnswer(answer)
    const correct = answer === currentWord.answer
    setIsCorrect(correct)

    if (correct) {
      setScore(prev => prev + 1)
      setStars(prev => prev + 1)

      if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100])
      }

      setTimeout(() => {
        setRound(prev => prev + 1)
        generateWord(selectedRule!)
      }, 1500)
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
    startPractice(selectedRule!)
  }

  // Выбор правила
  if (mode === 'select') {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-600 to-teal-700 z-50 overflow-hidden">
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
              📝 Правописание
            </h2>
          </div>
        </div>

        {/* Выбор правила */}
        <div className="relative z-10 flex-1 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl bg-white/95 rounded-3xl shadow-2xl overflow-hidden p-6">
            <h3 className="text-xl font-bold text-gray-800 text-center mb-6">
              Выбери правило для изучения
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {rules.map((rule) => (
                <Card
                  key={rule.id}
                  onClick={() => startPractice(rule.id)}
                  className={`bg-gradient-to-br ${rule.color} rounded-3xl p-6 cursor-pointer hover:scale-105 transition-all shadow-xl border-0`}
                >
                  <div className="text-center">
                    <div className="text-5xl mb-3">{rule.emoji}</div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {rule.title}
                    </h4>
                    <p className="text-white/80 text-sm">
                      {rule.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-gray-100 rounded-2xl p-4 text-center">
              <p className="text-gray-600 font-medium mb-2">📚 Правила:</p>
              <p className="text-gray-700">ЖИ-ШИ пиши с буквой И</p>
              <p className="text-gray-700">ЧА-ЩА пиши с буквой А</p>
              <p className="text-gray-700">ЧУ-ЩУ пиши с буквой У</p>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  // Экран завершения
  if (gameComplete) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md bg-white/95 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="text-7xl animate-bounce">🏆</div>
            <h2 className="text-3xl font-bold text-gray-800">
              ПРАВИЛО ОСВОЕНО!
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

            <div className="text-2xl font-bold text-emerald-600">
              +{stars} звёзд!
            </div>

            <div className="flex flex-col gap-3">
              <Button
                onClick={restartGame}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl py-5 text-lg font-bold"
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
  const currentRule = rules.find(r => r.id === selectedRule)

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-emerald-600 to-teal-700 z-50 overflow-hidden">
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
            <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              {currentRule?.title}
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
          <div className={`bg-gradient-to-r ${currentRule?.color} p-4 sm:p-6 text-center`}>
            <p className="text-white/80 text-sm mb-2">
              Вставь пропущенную букву
            </p>
            <div className="text-4xl sm:text-5xl font-bold text-white">
              {currentWord?.word.replace('_', '___')}
            </div>
            <p className="text-white/80 text-sm mt-2">
              Правило: {currentRule?.title} пиши с {currentRule?.id === 'ЖИ-ШИ' ? 'И' : currentRule?.id === 'ЧА-ЩА' ? 'А' : 'У'}
            </p>
          </div>

          {/* Варианты ответов */}
          <div className="p-4 sm:p-6">
            <div className="flex justify-center gap-4 mb-6">
              {['И', 'А', 'У', 'Ы'].map((letter) => {
                const isSelected = selectedAnswer === letter
                const isTheCorrectAnswer = currentWord && letter === currentWord.answer
                const showCorrect = selectedAnswer !== null && isTheCorrectAnswer
                const showWrong = isSelected && !isCorrect

                return (
                  <Button
                    key={letter}
                    onClick={() => handleSelect(letter)}
                    disabled={selectedAnswer !== null}
                    className={`
                      w-16 h-16 sm:w-20 sm:h-20 rounded-2xl text-2xl sm:text-3xl font-bold
                      transition-all duration-300
                      ${showCorrect
                        ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white ring-4 ring-green-300 scale-110'
                        : showWrong
                          ? 'bg-gradient-to-r from-red-400 to-pink-500 text-white ring-4 ring-red-300 animate-shake'
                          : 'bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800'
                      }
                    `}
                  >
                    {letter}
                  </Button>
                )
              })}
            </div>

            {/* Подсказка */}
            {selectedAnswer !== null && !isCorrect && currentWord && (
              <div className="p-4 bg-orange-100 rounded-2xl text-center">
                <p className="text-orange-700 font-medium">
                  Правильное слово: <strong>{currentWord.correct}</strong>
                </p>
                <p className="text-orange-600 text-sm mt-1">
                  💡 Запомни: {currentRule?.title} пиши с {currentWord.answer}!
                </p>
              </div>
            )}

            {/* Успех */}
            {selectedAnswer !== null && isCorrect && currentWord && (
              <div className="p-4 bg-green-100 rounded-2xl text-center">
                <p className="text-green-700 font-bold text-xl">
                  ✓ {currentWord.correct}
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake { animation: shake 0.3s ease-in-out; }
      `}</style>
    </div>
  )
}
