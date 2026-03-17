'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Star, Trophy, RotateCcw, ArrowLeft, Sparkles } from 'lucide-react'

interface KidMiniGameProps {
  onBack: () => void
  onComplete: (stars: number) => void
}

// Генерация случайных предметов для счёта
const countItems = ['🍎', '🍊', '🍋', '🍇', '🍓', '🌟', '🎈', '🦋', '🌸', '🍪']

// Игра "Учим цифры"
export function CountingGame({ onBack, onComplete }: KidMiniGameProps) {
  const [level, setLevel] = useState(1)
  const [items, setItems] = useState<string[]>([])
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const [options, setOptions] = useState<number[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [stars, setStars] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)

  // Генерация нового задания
  const generateQuestion = useCallback(() => {
    const itemCount = Math.min(level + 1, 10) // 2-10 предметов
    const randomItem = countItems[Math.floor(Math.random() * countItems.length)]
    
    // Создаём массив предметов
    const newItems = Array(itemCount).fill(randomItem)
    setItems(newItems)
    setCorrectAnswer(itemCount)

    // Генерируем варианты ответов
    const opts = new Set<number>([itemCount])
    while (opts.size < 4) {
      const opt = Math.max(1, Math.min(10, itemCount + Math.floor(Math.random() * 5) - 2))
      opts.add(opt)
    }
    setOptions(Array.from(opts).sort(() => Math.random() - 0.5))
    setSelectedAnswer(null)
    setIsCorrect(null)
  }, [level])

  useEffect(() => {
    generateQuestion()
  }, [generateQuestion])

  // Обработка выбора
  const handleSelect = (answer: number) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(answer)
    const correct = answer === correctAnswer
    setIsCorrect(correct)

    if (correct) {
      setScore(prev => prev + 1)
      setStars(prev => prev + 1)

      // Вибрация успеха
      if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100])
      }

      // Переход на следующий уровень
      setTimeout(() => {
        if (level >= 5) {
          setGameComplete(true)
        } else {
          setLevel(prev => prev + 1)
        }
      }, 1500)
    } else {
      // Вибрация ошибки
      if (navigator.vibrate) {
        navigator.vibrate(200)
      }
    }
  }

  // Перезапуск игры
  const restartGame = () => {
    setLevel(1)
    setScore(0)
    setStars(0)
    setGameComplete(false)
    generateQuestion()
  }

  // Завершение игры
  const finishGame = () => {
    onComplete(stars)
  }

  // Экран завершения
  if (gameComplete) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md bg-white/95 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="text-7xl animate-bounce">🏆</div>
            <h2 className="text-3xl font-bold text-gray-800">
              МОЛОДЕЦ!
            </h2>
            <p className="text-gray-600">
              Ты прошёл все уровни!
            </p>
            
            {/* Звёзды */}
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
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl py-5 text-lg font-bold"
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

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-500 to-purple-600 z-50 overflow-auto flex flex-col">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float text-3xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {countItems[Math.floor(Math.random() * countItems.length)]}
          </div>
        ))}
      </div>

      {/* Шапка */}
      <div className="relative z-10 p-4 sm:p-6 shrink-0">
        <div className="flex items-center justify-between mb-4">
          <Button
            onClick={onBack}
            className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 rounded-2xl px-4 sm:px-6 py-3 text-base font-bold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Выход
          </Button>

          <div className="flex items-center gap-4">
            <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">
              Уровень {level}/5
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-2xl px-4 py-2">
              <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
              <span className="text-white text-xl font-bold">{stars}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-8 pb-24">
        <Card className="w-full max-w-lg bg-white/95 rounded-3xl shadow-2xl overflow-hidden">
          {/* Заголовок */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 sm:p-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Сосчитай предметы!
            </h2>
          </div>

          {/* Предметы для счёта */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              {items.map((item, index) => (
                <span
                  key={index}
                  className="text-4xl sm:text-5xl animate-pop"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Варианты ответов */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {options.map((option, index) => {
                const isSelected = selectedAnswer === option
                const isTheCorrectAnswer = option === correctAnswer
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
                  Попробуй ещё раз! Правильный ответ: {correctAnswer}
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes pop {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-pop { animation: pop 0.3s ease-out forwards; }
        .animate-shake { animation: shake 0.3s ease-in-out; }
      `}</style>
    </div>
  )
}

// Игра "Учим буквы"
export function AlphabetGame({ onBack, onComplete }: KidMiniGameProps) {
  const [currentLetter, setCurrentLetter] = useState('')
  const [correctWord, setCorrectWord] = useState('')
  const [options, setOptions] = useState<string[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [stars, setStars] = useState(0)
  const [round, setRound] = useState(1)
  const [gameComplete, setGameComplete] = useState(false)

  // Буквы и слова
  const letterWords: Record<string, string[]> = {
    'А': ['Арбуз', 'Ананас', 'Апельсин'],
    'Б': ['Банан', 'Бегемот', 'Бабочка'],
    'В': ['Вишня', 'Ворона', 'Волк'],
    'Г': ['Груша', 'Гриб', 'Гусь'],
    'Д': ['Дом', 'Дерево', 'Дельфин'],
    'Е': ['Ель', 'Ежик', 'Енот'],
    'Ж': ['Жираф', 'Жук', 'Желудь'],
    'З': ['Заяц', 'Зебра', 'Звезда'],
    'И': ['Игрушка', 'Индюк', 'Ива'],
    'К': ['Кот', 'Клубника', 'Крокодил'],
    'Л': ['Лев', 'Лимон', 'Лиса'],
    'М': ['Мишка', 'Малина', 'Море'],
    'Н': ['Ночь', 'Небо', 'Нога'],
    'О': ['Облако', 'Огурец', 'Олень'],
    'П': ['Пингвин', 'Пирог', 'Попугай'],
    'Р': ['Ракета', 'Ромашка', 'Рыба'],
    'С': ['Солнце', 'Собака', 'Слива'],
    'Т': ['Торт', 'Тигр', 'Телефон'],
    'У': ['Улитка', 'Утка', 'Улитка'],
    'Ф': ['Флаг', 'Фрукт', 'Фонарь'],
    'Х': ['Хлеб', 'Хвост', 'Хомяк'],
    'Ц': ['Цветок', 'Цыплёнок', 'Цирк'],
    'Ч': ['Часы', 'Черепаха', 'Чашка'],
    'Ш': ['Шар', 'Школа', 'Шоколад'],
    'Щ': ['Щенок', 'Щука', 'Щётка'],
    'Э': ['Эскимо', 'Этаж', 'Эму'],
    'Ю': ['Юла', 'Юбка', 'Юга'],
    'Я': ['Яблоко', 'Ягоды', 'Ястреб']
  }

  // Генерация нового задания
  const generateQuestion = useCallback(() => {
    const letters = Object.keys(letterWords)
    const letter = letters[Math.floor(Math.random() * letters.length)]
    setCurrentLetter(letter)

    const words = letterWords[letter]
    const correct = words[Math.floor(Math.random() * words.length)]
    setCorrectWord(correct)

    // Генерируем неправильные варианты
    const wrongOptions: string[] = []
    const allWords = Object.values(letterWords).flat()
    
    while (wrongOptions.length < 3) {
      const wrong = allWords[Math.floor(Math.random() * allWords.length)]
      if (wrong !== correct && !wrongOptions.includes(wrong)) {
        wrongOptions.push(wrong)
      }
    }

    setOptions([...wrongOptions, correct].sort(() => Math.random() - 0.5))
    setSelectedAnswer(null)
    setIsCorrect(null)
  }, [])

  useEffect(() => {
    generateQuestion()
  }, [generateQuestion])

  // Обработка выбора
  const handleSelect = (answer: string) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(answer)
    const correct = answer === correctWord
    setIsCorrect(correct)

    if (correct) {
      setScore(prev => prev + 1)
      setStars(prev => prev + 1)

      if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100])
      }

      setTimeout(() => {
        if (round >= 5) {
          setGameComplete(true)
        } else {
          setRound(prev => prev + 1)
          generateQuestion()
        }
      }, 1500)
    } else {
      if (navigator.vibrate) {
        navigator.vibrate(200)
      }
    }
  }

  // Перезапуск
  const restartGame = () => {
    setRound(1)
    setScore(0)
    setStars(0)
    setGameComplete(false)
    generateQuestion()
  }

  // Завершение
  const finishGame = () => {
    onComplete(stars)
  }

  // Экран завершения
  if (gameComplete) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md bg-white/95 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="text-7xl animate-bounce">🏆</div>
            <h2 className="text-3xl font-bold text-gray-800">
              ОТЛИЧНО!
            </h2>
            <p className="text-gray-600">
              Ты отлично знаешь буквы!
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
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl py-5 text-lg font-bold"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Играть снова
              </Button>

              <Button
                onClick={finishGame}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl py-5 text-lg font-bold"
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

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-500 to-purple-600 z-50 overflow-auto flex flex-col">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['🔤', '📖', '✏️', '📝', '📚'].map((emoji, i) => (
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
      <div className="relative z-10 p-4 sm:p-6 shrink-0">
        <div className="flex items-center justify-between mb-4">
          <Button
            onClick={onBack}
            className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 rounded-2xl px-4 sm:px-6 py-3 text-base font-bold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Выход
          </Button>

          <div className="flex items-center gap-4">
            <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">
              Раунд {round}/5
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-2xl px-4 py-2">
              <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
              <span className="text-white text-xl font-bold">{stars}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-8 pb-24">
        <Card className="w-full max-w-lg bg-white/95 rounded-3xl shadow-2xl overflow-hidden">
          {/* Буква */}
          <div className="bg-gradient-to-r from-pink-400 to-purple-500 p-6 sm:p-8 text-center">
            <p className="text-white text-lg mb-2">Найди слово на букву</p>
            <div className="text-7xl sm:text-8xl font-bold text-white animate-bounce-slow">
              {currentLetter}
            </div>
          </div>

          {/* Варианты ответов */}
          <div className="p-4 sm:p-6 space-y-3">
            {options.map((option, index) => {
              const isSelected = selectedAnswer === option
              const isTheCorrectAnswer = option === correctWord
              const showCorrect = selectedAnswer !== null && isTheCorrectAnswer
              const showWrong = isSelected && !isCorrect

              return (
                <Button
                  key={option}
                  onClick={() => handleSelect(option)}
                  disabled={selectedAnswer !== null}
                  className={`
                    w-full rounded-2xl py-5 sm:py-6 text-lg sm:text-xl font-bold
                    transition-all duration-300
                    ${showCorrect
                      ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white ring-4 ring-green-300 scale-105'
                      : showWrong
                        ? 'bg-gradient-to-r from-red-400 to-pink-500 text-white ring-4 ring-red-300 animate-shake'
                        : 'bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white'
                    }
                  `}
                >
                  {option}
                </Button>
              )
            })}

            {/* Подсказка */}
            {selectedAnswer !== null && !isCorrect && (
              <div className="mt-4 p-4 bg-orange-100 rounded-2xl text-center">
                <p className="text-orange-700 font-medium">
                  Правильный ответ: {correctWord}
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
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-shake { animation: shake 0.3s ease-in-out; }
      `}</style>
    </div>
  )
}

// Игра "Найди пару" (Memory Game)
export function MemoryGame({ onBack, onComplete }: KidMiniGameProps) {
  const emojis = ['🍎', '🍊', '🍋', '🍇', '🍓', '🌟', '🎈', '🦋']

  // Инициализация игры через useState с функцией
  const createInitialCards = () => {
    return [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        flipped: false,
        matched: false
      }))
  }

  const [cards, setCards] = useState(createInitialCards)
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [stars, setStars] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)

  // Перезапуск игры
  const initGame = useCallback(() => {
    setCards(createInitialCards())
    setFlippedCards([])
    setMoves(0)
    setStars(0)
    setGameComplete(false)
  }, [])

  // Обработка клика по карточке
  const handleCardClick = (cardId: number) => {
    if (flippedCards.length === 2) return
    if (cards[cardId].flipped || cards[cardId].matched) return

    const newCards = [...cards]
    newCards[cardId].flipped = true
    setCards(newCards)

    const newFlipped = [...flippedCards, cardId]
    setFlippedCards(newFlipped)

    if (newFlipped.length === 2) {
      setMoves(prev => prev + 1)
      
      const [first, second] = newFlipped
      if (cards[first].emoji === cards[second].emoji) {
        // Найдена пара!
        setTimeout(() => {
          const matchedCards = [...cards]
          matchedCards[first].matched = true
          matchedCards[second].matched = true
          matchedCards[first].flipped = false
          matchedCards[second].flipped = false
          setCards(matchedCards)
          setFlippedCards([])
          setStars(prev => prev + 1)

          if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100])
          }

          // Проверяем завершение
          if (matchedCards.every(c => c.matched)) {
            setTimeout(() => setGameComplete(true), 500)
          }
        }, 500)
      } else {
        // Не совпали
        setTimeout(() => {
          const resetCards = [...cards]
          resetCards[first].flipped = false
          resetCards[second].flipped = false
          setCards(resetCards)
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  // Завершение
  const finishGame = () => {
    const earnedStars = Math.max(1, Math.min(5, 8 - Math.floor(moves / 4)))
    onComplete(earnedStars)
  }

  if (gameComplete) {
    const earnedStars = Math.max(1, Math.min(5, 8 - Math.floor(moves / 4)))
    
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md bg-white/95 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="text-7xl animate-bounce">🎉</div>
            <h2 className="text-3xl font-bold text-gray-800">
              ВСЕ ПАРЫ НАЙДЕНЫ!
            </h2>
            <p className="text-gray-600">
              Ты нашёл все пары за {moves} ходов!
            </p>
            
            <div className="flex justify-center gap-2">
              {[...Array(earnedStars)].map((_, i) => (
                <Star
                  key={i}
                  className="w-10 h-10 text-yellow-400 fill-yellow-400 animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>

            <div className="text-2xl font-bold text-cyan-600">
              +{earnedStars} звёзд!
            </div>

            <div className="flex flex-col gap-3">
              <Button
                onClick={initGame}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl py-5 text-lg font-bold"
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

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 z-50 overflow-auto flex flex-col">
      {/* Шапка */}
      <div className="relative z-10 p-4 sm:p-6 shrink-0">
        <div className="flex items-center justify-between mb-4">
          <Button
            onClick={onBack}
            className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 rounded-2xl px-4 sm:px-6 py-3 text-base font-bold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Выход
          </Button>

          <div className="flex items-center gap-4">
            <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">
              Ходы: {moves}
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-2xl px-4 py-2">
              <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
              <span className="text-white text-xl font-bold">{stars}/8</span>
            </div>
          </div>
        </div>
      </div>

      {/* Игровое поле */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-4 pb-24">
        <Card className="w-full max-w-md bg-white/95 rounded-3xl shadow-2xl overflow-hidden p-4 sm:p-6">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              🃏 Найди пару!
            </h2>
            <p className="text-gray-600 text-sm">
              Открывай карточки и находи одинаковые картинки
            </p>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {cards.map((card) => (
              <button
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`
                  aspect-square rounded-xl sm:rounded-2xl text-2xl sm:text-3xl
                  transition-all duration-300 transform
                  ${card.matched
                    ? 'bg-green-200 scale-90 opacity-50'
                    : card.flipped
                      ? 'bg-gradient-to-br from-yellow-200 to-orange-200 rotate-0'
                      : 'bg-gradient-to-br from-purple-400 to-pink-500 hover:scale-105'
                  }
                `}
              >
                {card.flipped || card.matched ? card.emoji : '❓'}
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

// Игра "Геометрические фигуры"
export function ShapeGame({ onBack, onComplete }: KidMiniGameProps) {
  const allShapes = [
    { emoji: '⚪', name: 'Круг' },
    { emoji: '⬜', name: 'Квадрат' },
    { emoji: '🔺', name: 'Треугольник' },
    { emoji: '▭', name: 'Прямоугольник' },
    { emoji: '💎', name: 'Ромб' },
    { emoji: '⭐', name: 'Звезда' },
    { emoji: '❤️', name: 'Сердце' },
    { emoji: '🔵', name: 'Овал' }
  ]

  // Инициализация первого вопроса
  const createInitialQuestion = () => {
    const target = allShapes[Math.floor(Math.random() * allShapes.length)]
    const shuffled = [...allShapes].sort(() => Math.random() - 0.5)
    const options = shuffled.slice(0, 4)
    if (!options.find(s => s.name === target.name)) {
      options[0] = target
      options.sort(() => Math.random() - 0.5)
    }
    return { target: target.name, options }
  }

  const initial = createInitialQuestion()
  const [targetShape, setTargetShape] = useState(initial.target)
  const [shapes, setShapes] = useState(initial.options)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [round, setRound] = useState(1)
  const [stars, setStars] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)

  // Генерация нового задания
  const generateQuestion = useCallback(() => {
    const target = allShapes[Math.floor(Math.random() * allShapes.length)]
    setTargetShape(target.name)

    // Выбираем 4 случайные фигуры включая правильную
    const shuffled = [...allShapes].sort(() => Math.random() - 0.5)
    const options = shuffled.slice(0, 4)
    if (!options.find(s => s.name === target.name)) {
      options[0] = target
      options.sort(() => Math.random() - 0.5)
    }
    setShapes(options)
    setSelectedAnswer(null)
    setIsCorrect(null)
  }, [])

  // Обработка выбора
  const handleSelect = (shapeName: string) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(shapeName)
    const correct = shapeName === targetShape
    setIsCorrect(correct)

    if (correct) {
      setStars(prev => prev + 1)

      if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100])
      }

      setTimeout(() => {
        if (round >= 5) {
          setGameComplete(true)
        } else {
          setRound(prev => prev + 1)
          generateQuestion()
        }
      }, 1500)
    } else {
      if (navigator.vibrate) {
        navigator.vibrate(200)
      }
    }
  }

  // Перезапуск
  const restartGame = () => {
    setRound(1)
    setStars(0)
    setGameComplete(false)
    generateQuestion()
  }

  // Завершение
  const finishGame = () => {
    onComplete(stars)
  }

  if (gameComplete) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md bg-white/95 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="text-7xl animate-bounce">🏆</div>
            <h2 className="text-3xl font-bold text-gray-800">
              ОТЛИЧНО!
            </h2>
            <p className="text-gray-600">
              Ты хорошо знаешь геометрические фигуры!
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

            <div className="text-2xl font-bold text-orange-600">
              +{stars} звёзд!
            </div>

            <div className="flex flex-col gap-3">
              <Button
                onClick={restartGame}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl py-5 text-lg font-bold"
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

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-500 to-red-600 z-50 overflow-auto flex flex-col">
      {/* Шапка */}
      <div className="relative z-10 p-4 sm:p-6 shrink-0">
        <div className="flex items-center justify-between mb-4">
          <Button
            onClick={onBack}
            className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 rounded-2xl px-4 sm:px-6 py-3 text-base font-bold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Выход
          </Button>

          <div className="flex items-center gap-4">
            <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">
              Раунд {round}/5
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-2xl px-4 py-2">
              <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
              <span className="text-white text-xl font-bold">{stars}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-8 pb-24">
        <Card className="w-full max-w-lg bg-white/95 rounded-3xl shadow-2xl overflow-hidden">
          {/* Задание */}
          <div className="bg-gradient-to-r from-orange-400 to-red-500 p-4 sm:p-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Найди {targetShape}!
            </h2>
          </div>

          {/* Фигуры */}
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {shapes.map((shape) => {
                const isSelected = selectedAnswer === shape.name
                const isTheCorrectAnswer = shape.name === targetShape
                const showCorrect = selectedAnswer !== null && isTheCorrectAnswer
                const showWrong = isSelected && !isCorrect

                return (
                  <Button
                    key={shape.name}
                    onClick={() => handleSelect(shape.name)}
                    disabled={selectedAnswer !== null}
                    className={`
                      flex flex-col items-center gap-2
                      rounded-2xl py-6 sm:py-8
                      transition-all duration-300
                      ${showCorrect
                        ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white ring-4 ring-green-300 scale-110'
                        : showWrong
                          ? 'bg-gradient-to-r from-red-400 to-pink-500 text-white ring-4 ring-red-300 animate-shake'
                          : 'bg-gradient-to-r from-orange-100 to-yellow-100 hover:from-orange-200 hover:to-yellow-200 text-gray-800'
                      }
                    `}
                  >
                    <span className="text-4xl sm:text-5xl">{shape.emoji}</span>
                    <span className="text-sm sm:text-base font-bold">{shape.name}</span>
                  </Button>
                )
              })}
            </div>

            {/* Подсказка */}
            {selectedAnswer !== null && !isCorrect && (
              <div className="mt-4 p-4 bg-orange-100 rounded-2xl text-center">
                <p className="text-orange-700 font-medium">
                  Попробуй ещё раз! Это был {targetShape}
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

// Компонент выбора мини-игры
interface MiniGameSelectorProps {
  onSelectCounting: () => void
  onSelectAlphabet: () => void
  onSelectMemory: () => void
  onSelectShapes: () => void
  onBack: () => void
}

export function MiniGameSelector({ 
  onSelectCounting, 
  onSelectAlphabet, 
  onSelectMemory,
  onSelectShapes,
  onBack 
}: MiniGameSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-yellow-400" />
          Мини-игры
        </h3>
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-white/60 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Игра "Счёт" */}
        <Card
          onClick={onSelectCounting}
          className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 cursor-pointer hover:scale-105 transition-all shadow-xl"
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🔢</div>
            <h4 className="text-xl font-bold text-white mb-2">
              Учим цифры
            </h4>
            <p className="text-white/80 text-sm">
              Считай предметы и выбирай правильный ответ
            </p>
          </div>
        </Card>

        {/* Игра "Буквы" */}
        <Card
          onClick={onSelectAlphabet}
          className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-6 cursor-pointer hover:scale-105 transition-all shadow-xl"
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🔤</div>
            <h4 className="text-xl font-bold text-white mb-2">
              Учим буквы
            </h4>
            <p className="text-white/80 text-sm">
              Найди слово, которое начинается с буквы
            </p>
          </div>
        </Card>

        {/* Игра "Память" */}
        <Card
          onClick={onSelectMemory}
          className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-6 cursor-pointer hover:scale-105 transition-all shadow-xl"
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🃏</div>
            <h4 className="text-xl font-bold text-white mb-2">
              Найди пару
            </h4>
            <p className="text-white/80 text-sm">
              Запоминай и находи одинаковые картинки
            </p>
          </div>
        </Card>

        {/* Игра "Фигуры" */}
        <Card
          onClick={onSelectShapes}
          className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-6 cursor-pointer hover:scale-105 transition-all shadow-xl"
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🔷</div>
            <h4 className="text-xl font-bold text-white mb-2">
              Учим фигуры
            </h4>
            <p className="text-white/80 text-sm">
              Узнавай геометрические фигуры
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
