'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Gamepad2, Brain, Sparkles, Trophy, RotateCcw,
  Check, X, Clock, Star, Zap, Shuffle, Eye, EyeOff
} from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'

// ===============================
// MEMORY GAME (Найди пару)
// ===============================

interface MemoryCard {
  id: number
  value: string
  isFlipped: boolean
  isMatched: boolean
}

interface MemoryGameProps {
  pairs?: number
  theme?: 'numbers' | 'letters' | 'words' | 'emoji'
  onComplete?: (moves: number, time: number) => void
}

const MEMORY_THEMES = {
  numbers: ['1', '2', '3', '4', '5', '6', '7', '8'],
  letters: ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж'],
  words: ['кот', 'дом', 'сок', 'лес', 'мак', 'сыр', 'чай', 'мёд'],
  emoji: ['🍎', '🍊', '🍋', '🍇', '🍓', '🍒', '🥝', '🍑']
}

export function MemoryGame({ pairs = 6, theme = 'emoji', onComplete }: MemoryGameProps) {
  const { addExperience, playSound, setShowConfetti } = useSchool()

  const [cards, setCards] = useState<MemoryCard[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [matches, setMatches] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [showAll, setShowAll] = useState(false)

  // Инициализация игры
  const initGame = useCallback(() => {
    const themeItems = MEMORY_THEMES[theme]
    const selectedItems = themeItems.slice(0, pairs)
    const gameCards: MemoryCard[] = []

    selectedItems.forEach((item, i) => {
      gameCards.push({ id: i * 2, value: item, isFlipped: false, isMatched: false })
      gameCards.push({ id: i * 2 + 1, value: item, isFlipped: false, isMatched: false })
    })

    // Перемешивание
    for (let i = gameCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gameCards[i], gameCards[j]] = [gameCards[j], gameCards[i]]
      // Обновляем id после перемешивания
      gameCards[i].id = i
      gameCards[j].id = j
    }

    setCards(gameCards)
    setFlippedCards([])
    setMoves(0)
    setMatches(0)
    setTime(0)
    setIsPlaying(true)
    setIsFinished(false)
    setShowAll(false)
  }, [pairs, theme])

  // Таймер
  useEffect(() => {
    if (isPlaying && !isFinished) {
      const timer = setInterval(() => setTime(t => t + 1), 1000)
      return () => clearInterval(timer)
    }
  }, [isPlaying, isFinished])

  // Обработка победы
  const handleWin = useCallback(() => {
    setIsFinished(true)
    setIsPlaying(false)
    playSound('achievement')
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)

    // Расчет XP
    const baseXP = pairs * 10
    const timeBonus = Math.max(0, 60 - time) * 2
    const movesBonus = Math.max(0, pairs * 3 - moves) * 3
    addExperience(baseXP + timeBonus + movesBonus)

    onComplete?.(moves, time)
  }, [pairs, time, moves, playSound, setShowConfetti, addExperience, onComplete])

  // Показать все карты на 3 секунды
  const handleShowAll = () => {
    if (showAll) return
    setShowAll(true)
    setCards(prev => prev.map(c => ({ ...c, isFlipped: true })))
    setTimeout(() => {
      setCards(prev => prev.map(c => ({ ...c, isFlipped: c.isMatched })))
      setShowAll(false)
    }, 2000)
  }

  // Переворот карты
  const handleCardClick = (cardId: number) => {
    if (!isPlaying || isFinished) return
    if (showAll) return
    if (flippedCards.length >= 2) return

    const card = cards.find(c => c.id === cardId)
    if (!card || card.isFlipped || card.isMatched) return

    playSound('click')

    const newCards = cards.map(c =>
      c.id === cardId ? { ...c, isFlipped: true } : c
    )
    setCards(newCards)

    const newFlipped = [...flippedCards, cardId]
    setFlippedCards(newFlipped)

    if (newFlipped.length === 2) {
      setMoves(m => m + 1)

      const [first, second] = newFlipped
      const firstCard = newCards.find(c => c.id === first)
      const secondCard = newCards.find(c => c.id === second)

      if (firstCard?.value === secondCard?.value) {
        // Совпадение!
        setTimeout(() => {
          playSound('success')
          setCards(prev => prev.map(c =>
            c.id === first || c.id === second ? { ...c, isMatched: true } : c
          ))
          setMatches(m => {
            const newMatches = m + 1
            // Проверка победы напрямую в callback
            if (newMatches === pairs) {
              setTimeout(() => handleWin(), 100)
            }
            return newMatches
          })
          setFlippedCards([])
        }, 300)
      } else {
        // Не совпало
        setTimeout(() => {
          setCards(prev => prev.map(c =>
            c.id === first || c.id === second ? { ...c, isFlipped: false } : c
          ))
          setFlippedCards([])
        }, 800)
      }
    }
  }

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardContent className="py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Найди пару</h3>
              <p className="text-xs text-slate-400">Тренируй память!</p>
            </div>
          </div>
          {isPlaying && !isFinished && (
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {formatTime(time)}
              </Badge>
              <Badge className="bg-purple-500/20 text-purple-400">
                {matches}/{pairs}
              </Badge>
            </div>
          )}
        </div>

        {!isPlaying ? (
          <div className="text-center py-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-lg font-bold mb-2">Memory Game</h4>
            <p className="text-slate-400 text-sm mb-4">
              Найди все пары карточек!<br/>
              Чем меньше ходов - тем больше очков!
            </p>
            <Button onClick={initGame} className="bg-gradient-to-r from-purple-500 to-pink-500">
              <Gamepad2 className="w-4 h-4 mr-2" />
              Начать игру
            </Button>
          </div>
        ) : isFinished ? (
          <div className="text-center py-6">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h4 className="text-xl font-bold mb-2">Победа!</h4>
            <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto mb-4">
              <div className="p-3 bg-slate-700/50 rounded-lg">
                <p className="text-2xl font-bold text-yellow-400">{moves}</p>
                <p className="text-xs text-slate-400">ходов</p>
              </div>
              <div className="p-3 bg-slate-700/50 rounded-lg">
                <p className="text-2xl font-bold text-blue-400">{formatTime(time)}</p>
                <p className="text-xs text-slate-400">время</p>
              </div>
              <div className="p-3 bg-slate-700/50 rounded-lg">
                <p className="text-2xl font-bold text-green-400">+{pairs * 10 + Math.max(0, 60 - time) * 2}</p>
                <p className="text-xs text-slate-400">XP</p>
              </div>
            </div>
            <Button onClick={initGame} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Играть снова
            </Button>
          </div>
        ) : (
          <div>
            {/* Поле игры */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {cards.map(card => (
                <button
                  key={card.id}
                  className={`
                    aspect-square rounded-lg text-2xl font-bold transition-all duration-300
                    ${card.isFlipped || card.isMatched
                      ? 'bg-gradient-to-br from-purple-500/50 to-pink-500/50 border-purple-400'
                      : 'bg-slate-700 border-slate-600 hover:border-purple-500/50'
                    }
                    ${card.isMatched ? 'opacity-50' : ''}
                    border-2
                  `}
                  onClick={() => handleCardClick(card.id)}
                  disabled={card.isMatched || card.isFlipped || showAll}
                >
                  {(card.isFlipped || card.isMatched) ? card.value : '?'}
                </button>
              ))}
            </div>

            {/* Подсказка */}
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-400">
                Ходов: {moves}
              </p>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleShowAll}
                disabled={showAll}
                className="text-slate-400"
              >
                {showAll ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
                Подсказка
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// ===============================
// WORD SCRAMBLE (Собери слово)
// ===============================

interface WordScrambleProps {
  words?: string[]
  onComplete?: (score: number, correct: number) => void
}

const DEFAULT_WORDS = [
  { word: 'КОСМОС', hint: 'Где находятся планеты' },
  { word: 'ШКОЛА', hint: 'Место для учёбы' },
  { word: 'КНИГА', hint: 'Источник знаний' },
  { word: 'УЧЕНИК', hint: 'Тот, кто учится' },
  { word: 'УРОК', hint: 'Занятие в школе' },
  { word: 'ПЕНАЛ', hint: 'Хранилище ручек' },
  { word: 'МЕЛ', hint: 'Пишет на доске' },
  { word: 'ЗВОНОК', hint: 'Сигнал на перемену' },
]

export function WordScramble({ words: customWords, onComplete }: WordScrambleProps) {
  const { addExperience, playSound, setShowConfetti } = useSchool()

  const wordsData = customWords
    ? customWords.map(w => typeof w === 'string' ? { word: w, hint: '' } : w)
    : DEFAULT_WORDS

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedLetters, setSelectedLetters] = useState<string[]>([])
  const [usedIndices, setUsedIndices] = useState<number[]>([])
  const [score, setScore] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [shake, setShake] = useState(false)

  const currentWord = wordsData[currentIndex]

  // Перемешивание букв
  const shuffleWord = useCallback((word: string) => {
    const letters = word.split('')
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]]
    }
    return letters
  }, [])

  // Вычисляем перемешанные буквы напрямую
  const shuffledLetters = useMemo(() => {
    if (currentWord) {
      return shuffleWord(currentWord.word)
    }
    return []
  }, [currentIndex, currentWord, shuffleWord])

  // Сброс выбранных букв при смене слова
  const resetForNewWord = useCallback(() => {
    setSelectedLetters([])
    setUsedIndices([])
    setShowHint(false)
  }, [])

  // Выбор буквы
  const handleLetterClick = (index: number) => {
    if (usedIndices.includes(index)) return

    playSound('click')
    setSelectedLetters(prev => [...prev, shuffledLetters[index]])
    setUsedIndices(prev => [...prev, index])
  }

  // Удаление последней буквы
  const handleRemoveLast = () => {
    if (selectedLetters.length === 0) return

    setSelectedLetters(prev => prev.slice(0, -1))
    setUsedIndices(prev => prev.slice(0, -1))
  }

  // Проверка слова
  const handleCheck = () => {
    const guessed = selectedLetters.join('')

    if (guessed === currentWord.word) {
      // Правильно!
      playSound('success')
      const wordScore = currentWord.word.length * 5 + (showHint ? 0 : 10)
      setScore(prev => prev + wordScore)
      setCorrect(prev => prev + 1)

      setTimeout(() => {
        if (currentIndex < wordsData.length - 1) {
          resetForNewWord()
          setCurrentIndex(prev => prev + 1)
        } else {
          // Игра окончена
          setIsFinished(true)
          setShowConfetti(true)
          setTimeout(() => setShowConfetti(false), 2000)
          addExperience(score + wordScore)
          onComplete?.(score + wordScore, correct + 1)
        }
      }, 500)
    } else {
      // Неправильно
      playSound('error')
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  // Пропустить слово
  const handleSkip = () => {
    if (currentIndex < wordsData.length - 1) {
      resetForNewWord()
      setCurrentIndex(prev => prev + 1)
    } else {
      setIsFinished(true)
      addExperience(score)
      onComplete?.(score, correct)
    }
  }

  // Начать заново
  const handleRestart = () => {
    setCurrentIndex(0)
    setScore(0)
    setCorrect(0)
    setIsFinished(false)
  }

  const progress = ((currentIndex + 1) / wordsData.length) * 100

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardContent className="py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
              <Shuffle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Собери слово</h3>
              <p className="text-xs text-slate-400">Раскрой тайну букв!</p>
            </div>
          </div>
          {!isFinished && (
            <Badge className="bg-green-500/20 text-green-400">
              {currentIndex + 1}/{wordsData.length}
            </Badge>
          )}
        </div>

        {!isFinished ? (
          <div>
            {/* Прогресс */}
            <Progress value={progress} className="h-1 mb-4" />

            {/* Подсказка */}
            {showHint && (
              <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-sm text-green-400">💡 {currentWord.hint}</p>
              </div>
            )}

            {/* Собранное слово */}
            <div className={`flex justify-center gap-2 mb-6 ${shake ? 'animate-shake' : ''}`}>
              {selectedLetters.map((letter, i) => (
                <div
                  key={i}
                  className="w-10 h-12 bg-green-500/20 border-2 border-green-500/50 rounded-lg flex items-center justify-center text-xl font-bold text-green-400 cursor-pointer hover:bg-green-500/30 transition-all"
                  onClick={handleRemoveLast}
                >
                  {letter}
                </div>
              ))}
              {/* Пустые слоты */}
              {Array.from({ length: currentWord.word.length - selectedLetters.length }).map((_, i) => (
                <div
                  key={`empty-${i}`}
                  className="w-10 h-12 bg-slate-700/50 border-2 border-dashed border-slate-600 rounded-lg"
                />
              ))}
            </div>

            {/* Перемешанные буквы */}
            <div className="flex justify-center gap-2 mb-4 flex-wrap">
              {shuffledLetters.map((letter, i) => (
                <button
                  key={i}
                  onClick={() => handleLetterClick(i)}
                  disabled={usedIndices.includes(i)}
                  className={`
                    w-12 h-14 rounded-lg text-xl font-bold transition-all
                    ${usedIndices.includes(i)
                      ? 'bg-slate-700/30 text-slate-600 cursor-not-allowed'
                      : 'bg-slate-700 border-2 border-slate-600 hover:border-green-500/50 hover:bg-slate-600 cursor-pointer'
                    }
                  `}
                >
                  {letter}
                </button>
              ))}
            </div>

            {/* Кнопки */}
            <div className="flex justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowHint(true)}
                disabled={showHint}
              >
                💡 Подсказка
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSkip}
              >
                Пропустить
              </Button>
              <Button
                size="sm"
                onClick={handleCheck}
                disabled={selectedLetters.length !== currentWord.word.length}
                className="bg-green-600 hover:bg-green-700"
              >
                <Check className="w-4 h-4 mr-1" />
                Проверить
              </Button>
            </div>

            {/* Счёт */}
            <div className="mt-4 text-center">
              <Badge className="bg-yellow-500/20 text-yellow-400">
                <Star className="w-3 h-3 mr-1" />
                {score} очков
              </Badge>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h4 className="text-xl font-bold mb-2">Игра окончена!</h4>
            <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mb-4">
              <div className="p-3 bg-slate-700/50 rounded-lg">
                <p className="text-2xl font-bold text-yellow-400">{score}</p>
                <p className="text-xs text-slate-400">очков</p>
              </div>
              <div className="p-3 bg-slate-700/50 rounded-lg">
                <p className="text-2xl font-bold text-green-400">{correct}</p>
                <p className="text-xs text-slate-400">правильно</p>
              </div>
            </div>
            <Button onClick={handleRestart} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Играть снова
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// ===============================
// NUMBER RACE (Гонка чисел)
// ===============================

export function NumberRace() {
  const { addExperience, playSound } = useSchool()

  const [targetNumber, setTargetNumber] = useState(0)
  const [currentSum, setCurrentSum] = useState(0)
  const [availableNumbers, setAvailableNumbers] = useState<number[]>([])
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [round, setRound] = useState(0)

  // Генерация нового раунда
  const generateRound = useCallback(() => {
    const target = Math.floor(Math.random() * 20) + 10 // 10-30
    const numbers: number[] = []

    // Генерируем числа, которые могут составить target
    let remaining = target
    while (remaining > 0) {
      const num = Math.min(Math.floor(Math.random() * 9) + 1, remaining)
      numbers.push(num)
      remaining -= num
    }

    // Добавляем случайные числа-дистракторы
    for (let i = 0; i < 3; i++) {
      numbers.push(Math.floor(Math.random() * 9) + 1)
    }

    // Перемешиваем
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]]
    }

    setTargetNumber(target)
    setAvailableNumbers(numbers)
    setCurrentSum(0)
  }, [])

  // Таймер
  useEffect(() => {
    if (isPlaying && timeLeft > 0 && !isFinished) {
      const timer = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            setIsFinished(true)
            setIsPlaying(false)
            return 0
          }
          return t - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isPlaying, timeLeft, isFinished])

  // Начать игру
  const handleStart = () => {
    setIsPlaying(true)
    setIsFinished(false)
    setScore(0)
    setTimeLeft(30)
    setRound(0)
    generateRound()
  }

  // Выбор числа
  const handleNumberClick = (num: number, index: number) => {
    if (!isPlaying) return

    playSound('click')
    const newSum = currentSum + num
    setCurrentSum(newSum)
    setAvailableNumbers(prev => prev.filter((_, i) => i !== index))

    if (newSum === targetNumber) {
      // Правильно!
      playSound('success')
      setScore(prev => prev + 10)
      setRound(r => r + 1)
      setTimeout(generateRound, 500)
    } else if (newSum > targetNumber) {
      // Перебор
      playSound('error')
      setTimeout(generateRound, 500)
    }
  }

  // Завершение
  useEffect(() => {
    if (isFinished && score > 0) {
      addExperience(score)
    }
  }, [isFinished, score, addExperience])

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardContent className="py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Гонка чисел</h3>
              <p className="text-xs text-slate-400">Сложи числа до цели!</p>
            </div>
          </div>
          {isPlaying && !isFinished && (
            <div className="flex items-center gap-2">
              <Badge variant="outline" className={`flex items-center gap-1 ${timeLeft <= 10 ? 'text-red-400' : ''}`}>
                <Clock className="w-3 h-3" />
                {timeLeft}с
              </Badge>
              <Badge className="bg-orange-500/20 text-orange-400">
                Раунд {round}
              </Badge>
            </div>
          )}
        </div>

        {!isPlaying ? (
          <div className="text-center py-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-lg font-bold mb-2">Number Race</h4>
            <p className="text-slate-400 text-sm mb-4">
              Сложи числа, чтобы получить<br/>заданную сумму за 30 секунд!
            </p>
            <Button onClick={handleStart} className="bg-gradient-to-r from-orange-500 to-red-500">
              <Gamepad2 className="w-4 h-4 mr-2" />
              Начать гонку
            </Button>
          </div>
        ) : isFinished ? (
          <div className="text-center py-6">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h4 className="text-xl font-bold mb-2">Время вышло!</h4>
            <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mb-4">
              <div className="p-3 bg-slate-700/50 rounded-lg">
                <p className="text-2xl font-bold text-yellow-400">{score}</p>
                <p className="text-xs text-slate-400">очков</p>
              </div>
              <div className="p-3 bg-slate-700/50 rounded-lg">
                <p className="text-2xl font-bold text-green-400">{round}</p>
                <p className="text-xs text-slate-400">раундов</p>
              </div>
            </div>
            <Button onClick={handleStart} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Играть снова
            </Button>
          </div>
        ) : (
          <div>
            {/* Цель */}
            <div className="text-center mb-4">
              <p className="text-sm text-slate-400 mb-1">Набери сумму:</p>
              <p className="text-4xl font-bold text-orange-400">{targetNumber}</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <p className="text-sm text-slate-400">Текущая сумма:</p>
                <p className={`text-xl font-bold ${currentSum > targetNumber ? 'text-red-400' : currentSum === targetNumber ? 'text-green-400' : 'text-blue-400'}`}>
                  {currentSum}
                </p>
              </div>
            </div>

            {/* Доступные числа */}
            <div className="flex justify-center gap-2 flex-wrap mb-4">
              {availableNumbers.map((num, i) => (
                <button
                  key={i}
                  onClick={() => handleNumberClick(num, i)}
                  className="w-12 h-12 bg-slate-700 border-2 border-slate-600 rounded-lg text-xl font-bold hover:border-orange-500/50 hover:bg-slate-600 transition-all"
                >
                  {num}
                </button>
              ))}
            </div>

            {/* Прогресс */}
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all"
                style={{ width: `${(currentSum / targetNumber) * 100}%` }}
              />
            </div>

            {/* Счёт */}
            <div className="mt-4 text-center">
              <Badge className="bg-yellow-500/20 text-yellow-400">
                <Star className="w-3 h-3 mr-1" />
                {score} очков
              </Badge>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
