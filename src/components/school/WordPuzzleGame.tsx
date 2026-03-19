'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shuffle, RefreshCw, Trophy, Volume2, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface WordPuzzle {
  word: string
  hint: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  points: number
}

const PUZZLES: WordPuzzle[] = [
  // Легкие слова
  { word: 'КОТ', hint: 'Домашнее животное, которое мурлычет', category: 'Животные', difficulty: 'easy', points: 10 },
  { word: 'МАМА', hint: 'Самый родной человек', category: 'Семья', difficulty: 'easy', points: 10 },
  { word: 'СОЛНЦЕ', hint: 'Яркая звезда на небе', category: 'Природа', difficulty: 'easy', points: 10 },
  { word: 'ШКОЛА', hint: 'Место, где мы учимся', category: 'Образование', difficulty: 'easy', points: 10 },
  { word: 'КНИГА', hint: 'Источник знаний', category: 'Образование', difficulty: 'easy', points: 10 },
  { word: 'МОРЕ', hint: 'Большой водоём с солёной водой', category: 'Природа', difficulty: 'easy', points: 10 },
  { word: 'ДЕРЕВО', hint: 'Растение с стволом и ветками', category: 'Природа', difficulty: 'easy', points: 10 },
  { word: 'РУЧКА', hint: 'Принадлежность для письма', category: 'Школа', difficulty: 'easy', points: 10 },
  // Средние слова
  { word: 'КРАСОТА', hint: 'То, что восхищает глаз', category: 'Абстракции', difficulty: 'medium', points: 15 },
  { word: 'ДРУЖБА', hint: 'Отношения между друзьями', category: 'Отношения', difficulty: 'medium', points: 15 },
  { word: 'ПОБЕДА', hint: 'Результат победившего', category: 'Достижения', difficulty: 'medium', points: 15 },
  { word: 'ПРИРОДА', hint: 'Окружающий мир', category: 'Мир', difficulty: 'medium', points: 15 },
  { word: 'МОЛОКО', hint: 'Белый напиток от коровы', category: 'Еда', difficulty: 'medium', points: 15 },
  { word: 'ТЕТРАДЬ', hint: 'Для записей в школе', category: 'Школа', difficulty: 'medium', points: 15 },
  // Сложные слова
  { word: 'МАТЕМАТИКА', hint: 'Наука о числах и фигурах', category: 'Наука', difficulty: 'hard', points: 25 },
  { word: 'ГЕОГРАФИЯ', hint: 'Наука о Земле', category: 'Наука', difficulty: 'hard', points: 25 },
  { word: 'ЛИТЕРАТУРА', hint: 'Искусство слова', category: 'Искусство', difficulty: 'hard', points: 25 },
  { word: 'ЭНЦИКЛОПЕДИЯ', hint: 'Книга со знаниями обо всём', category: 'Книги', difficulty: 'hard', points: 30 },
]

// Helper to determine difficulty based on grade
const getDifficultyForGrade = (gradeId: number): 'easy' | 'medium' | 'hard' => {
  if (gradeId <= 2) return 'easy'
  if (gradeId <= 5) return 'medium'
  return 'hard'
}

interface Props {
  onScore?: (points: number) => void
  gradeId?: number
}

export default function WordPuzzleGame({ onScore, gradeId = 1 }: Props) {
  const [currentPuzzle, setCurrentPuzzle] = useState<WordPuzzle | null>(null)
  const [shuffledLetters, setShuffledLetters] = useState<string[]>([])
  const [selectedLetters, setSelectedLetters] = useState<string[]>([])
  const [usedIndices, setUsedIndices] = useState<number[]>([])
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  
  // Используем useMemo вместо useState + useEffect
  const difficulty = getDifficultyForGrade(gradeId)

  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  const startNewPuzzle = useCallback(() => {
    const filteredPuzzles = PUZZLES.filter(p => p.difficulty === difficulty)
    const randomPuzzle = filteredPuzzles[Math.floor(Math.random() * filteredPuzzles.length)]
    
    setCurrentPuzzle(randomPuzzle)
    setShuffledLetters(shuffleArray(randomPuzzle.word.split('')))
    setSelectedLetters([])
    setUsedIndices([])
    setShowHint(false)
    setIsCorrect(null)
  }, [difficulty])

  // Инициализация пазла при монтировании - используем ref для отслеживания
  const mountedRef = useState(false)
  
  useEffect(() => {
    if (!mountedRef[0]) {
      mountedRef[1](true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  // Запускаем новый пазл при изменении difficulty
  useEffect(() => {
    startNewPuzzle()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLetterClick = (letter: string, index: number) => {
    if (usedIndices.includes(index)) return
    
    setSelectedLetters(prev => [...prev, letter])
    setUsedIndices(prev => [...prev, index])
  }

  const handleUndo = () => {
    if (selectedLetters.length === 0) return
    
    setSelectedLetters(prev => prev.slice(0, -1))
    setUsedIndices(prev => prev.slice(0, -1))
  }

  const handleReset = () => {
    setSelectedLetters([])
    setUsedIndices([])
    setIsCorrect(null)
  }

  const checkAnswer = () => {
    if (!currentPuzzle) return
    
    const answer = selectedLetters.join('')
    const correct = answer === currentPuzzle.word
    
    setIsCorrect(correct)
    
    if (correct) {
      const points = currentPuzzle.points + (streak * 5)
      setScore(prev => prev + points)
      setStreak(prev => prev + 1)
      onScore?.(points)
      
      setTimeout(() => {
        startNewPuzzle()
      }, 1500)
    } else {
      setStreak(0)
    }
  }

  const handleSpeak = () => {
    if (!currentPuzzle) return
    const utterance = new SpeechSynthesisUtterance(currentPuzzle.word)
    utterance.lang = 'ru-RU'
    speechSynthesis.speak(utterance)
  }

  if (!currentPuzzle) return null

  return (
    <Card className="p-6 bg-gradient-to-br from-purple-900/80 to-indigo-900/80 border-purple-500/30 backdrop-blur">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">🧩 Словесная головоломка</h3>
            <p className="text-purple-300">Собери слово из разбросанных букв</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-purple-500/30 rounded-lg">
              <span className="text-purple-300 text-sm">Очки:</span>
              <span className="text-white font-bold ml-1">{score}</span>
            </div>
            <div className="px-4 py-2 bg-orange-500/30 rounded-lg">
              <span className="text-orange-300 text-sm">Серия:</span>
              <span className="text-white font-bold ml-1">{streak}🔥</span>
            </div>
          </div>
        </div>

        {/* Hint */}
        <div className="p-4 bg-white/5 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-blue-500/30 text-blue-300 text-xs rounded-full">
              {currentPuzzle.category}
            </span>
            <span className="px-2 py-1 bg-green-500/30 text-green-300 text-xs rounded-full">
              {currentPuzzle.points} очков
            </span>
          </div>
          <p className="text-white text-lg">💡 Подсказка: {currentPuzzle.hint}</p>
          {showHint && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-yellow-300 mt-2"
            >
              🔤 В слове {currentPuzzle.word.length} букв
            </motion.p>
          )}
        </div>

        {/* Answer area */}
        <div className="min-h-[60px] p-4 bg-white/10 rounded-xl flex items-center justify-center gap-2 flex-wrap">
          <AnimatePresence mode="popLayout">
            {selectedLetters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                className="w-10 h-12 flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg text-white font-bold text-xl shadow-lg"
              >
                {letter}
              </motion.span>
            ))}
          </AnimatePresence>
          {selectedLetters.length === 0 && (
            <span className="text-white/50">Нажми на буквы, чтобы собрать слово</span>
          )}
        </div>

        {/* Feedback */}
        <AnimatePresence>
          {isCorrect !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className={`p-4 rounded-xl text-center ${
                isCorrect ? 'bg-green-500/30' : 'bg-red-500/30'
              }`}
            >
              {isCorrect ? (
                <div className="flex items-center justify-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                  <span className="text-green-300 font-bold text-lg">Правильно! +{currentPuzzle.points + (streak - 1) * 5} очков!</span>
                </div>
              ) : (
                <span className="text-red-300 font-bold">Попробуй ещё раз!</span>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Letter buttons */}
        <div className="flex flex-wrap gap-2 justify-center">
          {shuffledLetters.map((letter, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLetterClick(letter, index)}
              disabled={usedIndices.includes(index)}
              className={`w-14 h-16 flex items-center justify-center rounded-xl font-bold text-xl transition-all ${
                usedIndices.includes(index)
                  ? 'bg-white/10 text-white/30 cursor-not-allowed'
                  : 'bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer'
              }`}
            >
              {letter}
            </motion.button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-2 justify-center">
          <Button
            variant="outline"
            size="sm"
            onClick={handleUndo}
            disabled={selectedLetters.length === 0}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            ↩ Отмена
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <RefreshCw className="w-4 h-4 mr-1" /> Сброс
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowHint(true)}
            className="bg-yellow-500/20 border-yellow-500/30 text-yellow-300 hover:bg-yellow-500/30"
          >
            <Lightbulb className="w-4 h-4 mr-1" /> Подсказка
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleSpeak}
            className="bg-blue-500/20 border-blue-500/30 text-blue-300 hover:bg-blue-500/30"
          >
            <Volume2 className="w-4 h-4 mr-1" /> Произнести
          </Button>
          <Button
            size="sm"
            onClick={checkAnswer}
            disabled={selectedLetters.length !== currentPuzzle.word.length}
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:opacity-90"
          >
            ✓ Проверить
          </Button>
        </div>
      </div>
    </Card>
  )
}
