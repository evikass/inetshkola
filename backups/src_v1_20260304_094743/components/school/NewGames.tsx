'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Star, Trophy, RefreshCw, Zap, Brain, Palette, HelpCircle, Volume2, VolumeX } from 'lucide-react'
import { useSound } from '@/hooks/useSound'

// ==================== ЭКСПОРТЫ ====================
export { WordBuilder, NumberSequence, ColorMatch, PictureQuiz }

// Селектор новых игр для интеграции
interface NewGamesSelectorProps {
  onSelectWordBuilder: () => void
  onSelectNumberSequence: () => void
  onSelectColorMatch: () => void
  onSelectPictureQuiz: () => void
  onBack: () => void
}

export function NewGamesSelector({ 
  onSelectWordBuilder, 
  onSelectNumberSequence, 
  onSelectColorMatch, 
  onSelectPictureQuiz 
}: NewGamesSelectorProps) {
  const newGames = [
    { id: 'word', title: 'Собери слово', icon: '🔤', color: 'from-purple-500 to-pink-500', onClick: onSelectWordBuilder },
    { id: 'sequence', title: 'Последовательность', icon: '🔢', color: 'from-blue-500 to-cyan-500', onClick: onSelectNumberSequence },
    { id: 'color', title: 'Цвет и слово', icon: '🎨', color: 'from-orange-500 to-red-500', onClick: onSelectColorMatch },
    { id: 'picture', title: 'Угадай картинку', icon: '🎯', color: 'from-green-500 to-teal-500', onClick: onSelectPictureQuiz },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {newGames.map((game) => (
        <motion.button
          key={game.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={game.onClick}
          className={`p-4 rounded-xl bg-gradient-to-r ${game.color} flex flex-col items-center gap-2`}
        >
          <span className="text-4xl">{game.icon}</span>
          <span className="font-bold text-sm">{game.title}</span>
        </motion.button>
      ))}
    </div>
  )
}

// ==================== ИГРА "СОБЕРИ СЛОВО" ====================
interface WordBuilderProps {
  onBack: () => void
  onComplete: (stars: number, xp?: number) => void
  difficulty?: number
}

const WORDS = {
  easy: ['КОТ', 'ДОМ', 'РАК', 'ЛУК', 'СЫР', 'СУП', 'РОТ', 'НОС'],
  medium: ['КНИГА', 'ШКОЛА', 'ПАРТА', 'МЕЛ', 'СЛОВО', 'ЗВУК', 'КЛАСС', 'УРОК'],
  hard: ['УЧЕНИК', 'ТЕТРАДЬ', 'КАРАНДАШ', 'РУЧКА', 'ПЕНАЛ', 'ДОСКА', 'УЧИТЕЛЬ', 'ПЕРЕМЕНА']
}

export function WordBuilder({ onBack, onComplete, difficulty = 0 }: WordBuilderProps) {
  // Sound effects
  const { playSuccess, playError, playWin } = useSound({ volume: 0.25 })
  
  const levels = ['easy', 'medium', 'hard'] as const
  
  // Инициализация первого слова
  const getInitialWord = () => {
    const level = levels[0]
    const words = WORDS[level]
    return words[Math.floor(Math.random() * words.length)]
  }
  
  const [currentWord, setCurrentWord] = useState(getInitialWord)
  const [shuffledLetters, setShuffledLetters] = useState<string[]>(() => 
    getInitialWord().split('').sort(() => Math.random() - 0.5)
  )
  const [selectedLetters, setSelectedLetters] = useState<string[]>([])
  const [usedIndices, setUsedIndices] = useState<number[]>([])
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [showResult, setShowResult] = useState<'correct' | 'wrong' | null>(null)
  const totalRounds = 5

  const startNewRound = useCallback(() => {
    const level = levels[difficulty]
    const words = WORDS[level]
    const word = words[Math.floor(Math.random() * words.length)]
    setCurrentWord(word)
    const letters = word.split('').sort(() => Math.random() - 0.5)
    setShuffledLetters(letters)
    setSelectedLetters([])
    setUsedIndices([])
    setShowResult(null)
  }, [difficulty])

  const handleLetterClick = (letter: string, index: number) => {
    if (usedIndices.includes(index)) return
    setSelectedLetters([...selectedLetters, letter])
    setUsedIndices([...usedIndices, index])
  }

  const handleUndo = () => {
    if (selectedLetters.length === 0) return
    const newSelected = [...selectedLetters]
    newSelected.pop()
    setSelectedLetters(newSelected)
    const newUsed = [...usedIndices]
    newUsed.pop()
    setUsedIndices(newUsed)
  }

  const checkWord = () => {
    const formedWord = selectedLetters.join('')
    if (formedWord === currentWord) {
      setShowResult('correct')
      playSuccess()
      setScore(prev => prev + 10)
      setTimeout(() => {
        if (round >= totalRounds) {
          playWin()
          const stars = Math.min(3, Math.floor(score / 15) + 1)
          onComplete(stars, stars * 15)
        } else {
          setRound(prev => prev + 1)
          startNewRound()
        }
      }, 1000)
    } else {
      setShowResult('wrong')
      playError()
      setTimeout(() => {
        setSelectedLetters([])
        setUsedIndices([])
        setShowResult(null)
      }, 1000)
    }
  }

  return (
    <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>
          <div className="flex items-center gap-4">
            <span className="text-purple-400">Раунд {round}/{totalRounds}</span>
            <span className="flex items-center gap-1 text-yellow-400">
              <Star className="w-4 h-4" /> {score}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Собери слово!</h3>
          <p className="text-gray-400">Нажми на буквы в правильном порядке</p>
        </div>

        {/* Собранное слово */}
        <div className="flex justify-center gap-2 min-h-[48px]">
          <AnimatePresence mode="popLayout">
            {selectedLetters.map((letter, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0 }}
                className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold ${
                  showResult === 'correct' ? 'bg-green-500' :
                  showResult === 'wrong' ? 'bg-red-500' : 'bg-purple-500'
                }`}
              >
                {letter}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Буквы для выбора */}
        <div className="flex justify-center gap-2 flex-wrap">
          {shuffledLetters.map((letter, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: usedIndices.includes(index) ? 1 : 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLetterClick(letter, index)}
              disabled={usedIndices.includes(index)}
              className={`w-14 h-14 rounded-xl text-2xl font-bold transition-all ${
                usedIndices.includes(index)
                  ? 'bg-gray-700 opacity-50 cursor-not-allowed'
                  : 'bg-gradient-to-br from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/30'
              }`}
            >
              {letter}
            </motion.button>
          ))}
        </div>

        {/* Кнопки */}
        <div className="flex justify-center gap-4">
          <Button variant="outline" onClick={handleUndo} disabled={selectedLetters.length === 0}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Отменить
          </Button>
          <Button 
            onClick={checkWord} 
            disabled={selectedLetters.length !== currentWord.length}
            className="bg-gradient-to-r from-green-500 to-emerald-500"
          >
            <Zap className="w-4 h-4 mr-2" />
            Проверить
          </Button>
        </div>

        {/* Результат */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className={`text-center text-2xl font-bold ${
                showResult === 'correct' ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {showResult === 'correct' ? '✓ Правильно!' : '✗ Попробуй ещё раз!'}
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

// ==================== ИГРА "ЧИСЛОВАЯ ПОСЛЕДОВАТЕЛЬНОСТЬ" ====================
interface NumberSequenceProps {
  onBack: () => void
  onComplete: (stars: number, xp?: number) => void
  difficulty?: number
}

const SEQUENCES = {
  easy: [
    { seq: [1, 2, 3, '?', 5], answer: 4, hint: '+1' },
    { seq: [2, 4, '?', 8, 10], answer: 6, hint: '+2' },
    { seq: [5, '?', 15, 20, 25], answer: 10, hint: '+5' },
    { seq: [10, '?', 8, 7, 6], answer: 9, hint: '-1' },
    { seq: ['?', 4, 6, 8, 10], answer: 2, hint: '+2' },
    { seq: [1, 3, 5, '?', 9], answer: 7, hint: '+2' },
  ],
  medium: [
    { seq: [3, 6, '?', 12, 15], answer: 9, hint: '+3' },
    { seq: [20, '?', 12, 8, 4], answer: 16, hint: '-4' },
    { seq: [1, 4, 9, '?', 25], answer: 16, hint: 'квадраты' },
    { seq: [2, 6, 18, '?', 162], answer: 54, hint: '×3' },
    { seq: [100, 50, '?', 12.5, 6.25], answer: 25, hint: '÷2' },
    { seq: ['?', 15, 21, 27, 33], answer: 9, hint: '+6' },
  ],
  hard: [
    { seq: [1, 1, 2, 3, '?', 8], answer: 5, hint: 'Фибоначчи' },
    { seq: [2, 6, 12, 20, '?'], answer: 30, hint: 'n×(n+1)' },
    { seq: [1, 2, 4, 7, 11, '?'], answer: 16, hint: '+1, +2, +3...' },
    { seq: [1, 8, 27, '?', 125], answer: 64, hint: 'кубы' },
    { seq: [2, 3, 5, 7, '?', 13], answer: 11, hint: 'простые' },
    { seq: [1, 4, 9, 16, '?'], answer: 25, hint: 'квадраты' },
  ]
}

export function NumberSequence({ onBack, onComplete, difficulty = 0 }: NumberSequenceProps) {
  // Sound effects
  const { playSuccess, playError, playWin } = useSound({ volume: 0.25 })
  
  const levels = ['easy', 'medium', 'hard'] as const
  
  // Инициализация первой последовательности
  const getInitialSeq = () => {
    const sequences = SEQUENCES.easy
    return sequences[Math.floor(Math.random() * sequences.length)]
  }
  
  const [currentSeq, setCurrentSeq] = useState<typeof SEQUENCES.easy[0] | null>(getInitialSeq)
  const [options, setOptions] = useState<number[]>(() => {
    const seq = getInitialSeq()
    const correctAnswer = seq.answer
    const wrongAnswers = [correctAnswer + 1, correctAnswer - 1, correctAnswer + 2].filter(a => a > 0)
    return [correctAnswer, ...wrongAnswers.slice(0, 3)].sort(() => Math.random() - 0.5)
  })
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [showResult, setShowResult] = useState<'correct' | 'wrong' | null>(null)
  const totalRounds = 6

  const startNewRound = useCallback(() => {
    const level = levels[difficulty]
    const sequences = SEQUENCES[level]
    const seq = sequences[Math.floor(Math.random() * sequences.length)]
    setCurrentSeq(seq)
    
    // Генерируем варианты ответов
    const correctAnswer = seq.answer
    const wrongAnswers = [
      correctAnswer + 1,
      correctAnswer - 1,
      correctAnswer + 2,
    ].filter(a => a > 0)
    const allOptions = [correctAnswer, ...wrongAnswers.slice(0, 3)]
    setOptions(allOptions.sort(() => Math.random() - 0.5))
    setShowResult(null)
  }, [difficulty])

  const handleAnswer = (answer: number) => {
    if (answer === currentSeq?.answer) {
      setShowResult('correct')
      playSuccess()
      setScore(prev => prev + 15)
      setTimeout(() => {
        if (round >= totalRounds) {
          playWin()
          const stars = Math.min(3, Math.floor(score / 20) + 1)
          onComplete(stars)
        } else {
          setRound(prev => prev + 1)
          startNewRound()
        }
      }, 1000)
    } else {
      setShowResult('wrong')
      playError()
    }
  }

  if (!currentSeq) return null

  return (
    <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>
          <div className="flex items-center gap-4">
            <span className="text-blue-400">Раунд {round}/{totalRounds}</span>
            <span className="flex items-center gap-1 text-yellow-400">
              <Star className="w-4 h-4" /> {score}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Найди пропущенное число!</h3>
          <p className="text-gray-400">Подсказка: {currentSeq.hint}</p>
        </div>

        {/* Последовательность */}
        <div className="flex justify-center gap-3 flex-wrap">
          {currentSeq.seq.map((num, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold ${
                num === '?'
                  ? 'bg-gradient-to-br from-yellow-500 to-orange-500 animate-pulse'
                  : 'bg-blue-500/50'
              }`}
            >
              {num}
            </motion.div>
          ))}
        </div>

        {/* Варианты ответов */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {options.map((opt, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAnswer(opt)}
              disabled={showResult !== null}
              className={`h-16 rounded-xl text-2xl font-bold transition-all ${
                showResult === 'correct' && opt === currentSeq.answer
                  ? 'bg-green-500'
                  : showResult === 'wrong' && opt !== currentSeq.answer
                  ? 'bg-red-500/50'
                  : 'bg-gradient-to-br from-blue-500 to-cyan-500 hover:shadow-lg'
              }`}
            >
              {opt}
            </motion.button>
          ))}
        </div>

        {/* Результат */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className={`text-center text-2xl font-bold ${
                showResult === 'correct' ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {showResult === 'correct' ? '✓ Правильно!' : `✗ Правильный ответ: ${currentSeq.answer}`}
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

// ==================== ИГРА "ЦВЕТ И СЛОВО" ====================
interface ColorMatchProps {
  onBack: () => void
  onComplete: (stars: number, xp?: number) => void
}

const COLORS = [
  { name: 'КРАСНЫЙ', color: 'text-red-500' },
  { name: 'СИНИЙ', color: 'text-blue-500' },
  { name: 'ЗЕЛЁНЫЙ', color: 'text-green-500' },
  { name: 'ЖЁЛТЫЙ', color: 'text-yellow-500' },
  { name: 'РОЗОВЫЙ', color: 'text-pink-500' },
  { name: 'ОРАНЖЕВЫЙ', color: 'text-orange-500' },
]

export function ColorMatch({ onBack, onComplete }: ColorMatchProps) {
  // Sound effects
  const { playSuccess, playError, playWin } = useSound({ volume: 0.25 })
  
  // Инициализация первого слова
  const getInitialState = () => {
    const wordColor = COLORS[Math.floor(Math.random() * COLORS.length)]
    const textColor = COLORS[Math.floor(Math.random() * COLORS.length)]
    const correctColorName = COLORS.find(c => c.color === textColor.color)?.name || ''
    const wrongOptions = COLORS.filter(c => c.name !== correctColorName)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(c => c.name)
    const allOptions = [correctColorName, ...wrongOptions].sort(() => Math.random() - 0.5)
    return {
      word: { name: wordColor.name, color: textColor.color },
      actualColor: textColor.color,
      options: allOptions
    }
  }
  
  const initialState = getInitialState()
  const [currentWord, setCurrentWord] = useState(initialState.word)
  const [actualColor, setActualColor] = useState(initialState.actualColor)
  const [options, setOptions] = useState<string[]>(initialState.options)
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [showResult, setShowResult] = useState<'correct' | 'wrong' | null>(null)
  const totalRounds = 8

  const startNewRound = useCallback(() => {
    const wordColor = COLORS[Math.floor(Math.random() * COLORS.length)]
    const textColor = COLORS[Math.floor(Math.random() * COLORS.length)]
    setCurrentWord({ name: wordColor.name, color: textColor.color })
    setActualColor(textColor.color)

    // Генерируем варианты
    const correctColorName = COLORS.find(c => c.color === textColor.color)?.name || ''
    const wrongOptions = COLORS.filter(c => c.name !== correctColorName)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(c => c.name)
    
    const allOptions = [correctColorName, ...wrongOptions].sort(() => Math.random() - 0.5)
    setOptions(allOptions)
    setShowResult(null)
  }, [])

  const handleAnswer = (answer: string) => {
    const correctColorName = COLORS.find(c => c.color === actualColor)?.name || ''
    if (answer === correctColorName) {
      setShowResult('correct')
      playSuccess()
      setScore(prev => prev + 12)
      setTimeout(() => {
        if (round >= totalRounds) {
          playWin()
          const stars = Math.min(3, Math.floor(score / 25) + 1)
          onComplete(stars)
        } else {
          setRound(prev => prev + 1)
          startNewRound()
        }
      }, 800)
    } else {
      setShowResult('wrong')
      playError()
    }
  }

  return (
    <Card className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>
          <div className="flex items-center gap-4">
            <span className="text-orange-400">Раунд {round}/{totalRounds}</span>
            <span className="flex items-center gap-1 text-yellow-400">
              <Star className="w-4 h-4" /> {score}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Какой ЦВЕТ у слова?</h3>
          <p className="text-gray-400">Не читай слово, смотри на цвет!</p>
        </div>

        {/* Слово */}
        <motion.div
          key={round}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-8"
        >
          <span className={`text-6xl font-black ${currentWord.color}`}>
            {currentWord.name}
          </span>
        </motion.div>

        {/* Варианты */}
        <div className="grid grid-cols-2 gap-3">
          {options.map((opt, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAnswer(opt)}
              disabled={showResult !== null}
              className="h-14 rounded-xl text-lg font-bold bg-white/10 hover:bg-white/20 transition-all"
            >
              {opt}
            </motion.button>
          ))}
        </div>

        {/* Результат */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className={`text-center text-xl font-bold ${
                showResult === 'correct' ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {showResult === 'correct' ? '✓ Молодец!' : '✗ Будь внимательнее!'}
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

// ==================== ИГРА "ВИКТОРИНА С КАРТИНКАМИ" ====================
interface PictureQuizProps {
  onBack: () => void
  onComplete: (stars: number, xp?: number) => void
}

const PICTURE_QUESTIONS = [
  { emoji: '🐱', question: 'Что это за животное?', options: ['Собака', 'Кошка', 'Мышь', 'Кролик'], answer: 1 },
  { emoji: '🌻', question: 'Что это за растение?', options: ['Ромашка', 'Роза', 'Подсолнух', 'Тюльпан'], answer: 2 },
  { emoji: '🌧️', question: 'Какое это явление природы?', options: ['Снег', 'Дождь', 'Туман', 'Град'], answer: 1 },
  { emoji: '🚗', question: 'Что это за транспорт?', options: ['Автобус', 'Грузовик', 'Машина', 'Такси'], answer: 2 },
  { emoji: '🍎', question: 'Что это за фрукт?', options: ['Груша', 'Яблоко', 'Персик', 'Апельсин'], answer: 1 },
  { emoji: '🏠', question: 'Что это?', options: ['Дом', 'Школа', 'Магазин', 'Больница'], answer: 0 },
  { emoji: '🦋', question: 'Кто это?', options: ['Муха', 'Пчела', 'Бабочка', 'Жук'], answer: 2 },
  { emoji: '🌈', question: 'Что это за явление?', options: ['Молния', 'Радуга', 'Северное сияние', 'Закат'], answer: 1 },
  { emoji: '⚽', question: 'В какой игре нужен этот мяч?', options: ['Баскетбол', 'Волейбол', 'Футбол', 'Теннис'], answer: 2 },
  { emoji: '📚', question: 'Что это?', options: ['Журналы', 'Книги', 'Тетради', 'Газеты'], answer: 1 },
]

export function PictureQuiz({ onBack, onComplete }: PictureQuizProps) {
  // Sound effects
  const { playSuccess, playError, playWin } = useSound({ volume: 0.25 })
  
  // Инициализация первого вопроса
  const getInitialQuestion = () => {
    const randomIndex = Math.floor(Math.random() * PICTURE_QUESTIONS.length)
    return { question: PICTURE_QUESTIONS[randomIndex], index: randomIndex }
  }
  
  const initial = getInitialQuestion()
  const [currentQuestion, setCurrentQuestion] = useState<typeof PICTURE_QUESTIONS[0]>(initial.question)
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [showResult, setShowResult] = useState<'correct' | 'wrong' | null>(null)
  const totalRounds = 5
  const [usedQuestions, setUsedQuestions] = useState<number[]>([initial.index])

  const startNewRound = useCallback(() => {
    const availableIndices = PICTURE_QUESTIONS.map((_, i) => i).filter(i => !usedQuestions.includes(i))
    if (availableIndices.length === 0) {
      setUsedQuestions([])
      const randomIndex = Math.floor(Math.random() * PICTURE_QUESTIONS.length)
      setCurrentQuestion(PICTURE_QUESTIONS[randomIndex])
      setUsedQuestions([randomIndex])
      setShowResult(null)
      return
    }
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)]
    setCurrentQuestion(PICTURE_QUESTIONS[randomIndex])
    setUsedQuestions(prev => [...prev, randomIndex])
    setShowResult(null)
  }, [usedQuestions])

  const handleAnswer = (index: number) => {
    if (index === currentQuestion?.answer) {
      setShowResult('correct')
      playSuccess()
      setScore(prev => prev + 10)
      setTimeout(() => {
        if (round >= totalRounds) {
          playWin()
          const stars = Math.min(3, Math.floor(score / 15) + 1)
          onComplete(stars)
        } else {
          setRound(prev => prev + 1)
        }
      }, 800)
    } else {
      setShowResult('wrong')
      playError()
    }
  }

  if (!currentQuestion) return null

  return (
    <Card className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border-green-500/30">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>
          <div className="flex items-center gap-4">
            <span className="text-green-400">Раунд {round}/{totalRounds}</span>
            <span className="flex items-center gap-1 text-yellow-400">
              <Star className="w-4 h-4" /> {score}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Угадай по картинке!</h3>
        </div>

        {/* Картинка */}
        <motion.div
          key={round}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          className="text-center py-4"
        >
          <span className="text-8xl">{currentQuestion.emoji}</span>
          <p className="text-xl mt-4">{currentQuestion.question}</p>
        </motion.div>

        {/* Варианты */}
        <div className="grid grid-cols-2 gap-3">
          {currentQuestion.options.map((opt, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAnswer(i)}
              disabled={showResult !== null}
              className={`h-14 rounded-xl text-lg font-bold transition-all ${
                showResult === 'correct' && i === currentQuestion.answer
                  ? 'bg-green-500'
                  : showResult === 'wrong' && i === currentQuestion.answer
                  ? 'bg-green-500/50'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {opt}
            </motion.button>
          ))}
        </div>

        {/* Результат */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className={`text-center text-xl font-bold ${
                showResult === 'correct' ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {showResult === 'correct' ? '✓ Верно!' : `✗ Правильный ответ: ${currentQuestion.options[currentQuestion.answer]}`}
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

// ==================== ЭКСПОРТ ГЛАВНОГО КОМПОНЕНТА ====================
interface NewGamesProps {
  onBack: () => void
  onComplete: (stars: number) => void
}

type GameType = 'menu' | 'word' | 'sequence' | 'color' | 'picture'

export default function NewGames({ onBack, onComplete }: NewGamesProps) {
  const [currentGame, setCurrentGame] = useState<GameType>('menu')
  const [difficulty, setDifficulty] = useState(0)

  const games = [
    { id: 'word', title: 'Собери слово', icon: '🔤', color: 'from-purple-500 to-pink-500', component: WordBuilder },
    { id: 'sequence', title: 'Числовая последовательность', icon: '🔢', color: 'from-blue-500 to-cyan-500', component: NumberSequence },
    { id: 'color', title: 'Цвет и слово', icon: '🎨', color: 'from-orange-500 to-red-500', component: ColorMatch },
    { id: 'picture', title: 'Викторина с картинками', icon: '🖼️', color: 'from-green-500 to-teal-500', component: PictureQuiz },
  ]

  if (currentGame === 'menu') {
    return (
      <Card className="bg-slate-900/50 border-white/10">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад к играм
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Новые игры</h2>
            <p className="text-gray-400">Развивай навыки играя!</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`cursor-pointer overflow-hidden hover:border-white/30 transition-all`}
                  onClick={() => setCurrentGame(game.id as GameType)}
                >
                  <div className={`h-20 bg-gradient-to-r ${game.color} flex items-center justify-center`}>
                    <span className="text-5xl">{game.icon}</span>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg">{game.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-yellow-400">До 30 XP</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  const GameComponent = games.find(g => g.id === currentGame)?.component

  if (GameComponent) {
    return (
      <GameComponent
        onBack={() => setCurrentGame('menu')}
        onComplete={onComplete}
        difficulty={difficulty}
      />
    )
  }

  return null
}
