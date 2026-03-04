'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { 
  Star, Trophy, RefreshCw, Sparkles, Heart, 
  Volume2, BookOpen, Target, Zap, VolumeX
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

// Типы
type GameMode = 'findLetter' | 'findFirstLetter' | 'completeWord'
type Difficulty = 'easy' | 'medium' | 'hard'

interface LetterProblem {
  targetLetter: string
  options: string[]
  word?: string
  image?: string
  hint?: string
}

interface GameState {
  score: number
  lives: number
  streak: number
  level: number
  problemsSolved: number
  highScore: number
  correctAnswers: number
}

// Русский алфавит
const russianAlphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('')

// Слова для каждого режима
const wordsByFirstLetter: Record<string, string[]> = {
  'А': ['АРБУЗ', 'АНАНАС', 'АПЕЛЬСИН', 'АНГЕЛ', 'АВТОБУС'],
  'Б': ['БАНАН', 'БЕЛКА', 'БАБОЧКА', 'БАЛКОН', 'БУСЫ'],
  'В': ['ВАЗА', 'ВОЛК', 'ВОРОНА', 'ВАРЕНЬЕ', 'ВЕЛОСИПЕД'],
  'Г': ['ГРУША', 'ГОРА', 'ГОЛУБЬ', 'ГРИБ', 'ГНОМ'],
  'Д': ['ДОМ', 'ДЕРЕВО', 'ДЫНЯ', 'ДОЖДЬ', 'ДРУГ'],
  'Е': ['ЕЖ', 'ЕЛЬ', 'ЕНОТ', 'ЕДА', 'ЕРШ'],
  'Ё': ['ЁЖИК', 'ЁЛКА', 'ЁЛКА'],
  'Ж': ['ЖИРАФ', 'ЖУК', 'ЖАБА', 'ЖУРАВЛЬ', 'ЖЕЛЕ'],
  'З': ['ЗАЯЦ', 'ЗВЕЗДА', 'ЗОНТ', 'ЗМЕЯ', 'ЗАМОК'],
  'И': ['ИГРУШКА', 'ИГОЛКА', 'ИВА', 'ИНДЮК', 'ИСКРА'],
  'К': ['КОТ', 'КЛЮКВА', 'КОШКА', 'КРАН', 'КРОТ'],
  'Л': ['ЛИСА', 'ЛЕВ', 'ЛУК', 'ЛИМОН', 'ЛЕД'],
  'М': ['МЕДВЕДЬ', 'МОЛОКО', 'МАШИНА', 'МЯЧ', 'МОСТ'],
  'Н': ['НОЖ', 'НОС', 'НЕБО', 'НОЧЬ', 'НОВОСТИ'],
  'О': ['ОЛЕНЬ', 'ОГУРЕЦ', 'ОБЛАКО', 'ОСЕЛ', 'ОКНО'],
  'П': ['ПОМИДОР', 'ПЕТУХ', 'ПИЦЦА', 'ПАРК', 'ПТИЦА'],
  'Р': ['РЫБА', 'РЕКА', 'РОЗА', 'РУЧКА', 'РАДУГА'],
  'С': ['СОЛНЦЕ', 'СНЕГ', 'СЫР', 'СОВА', 'СЛОН'],
  'Т': ['ТЫКВА', 'ТИГР', 'ТОРТ', 'ТЕЛЕФОН', 'ТРАКТОР'],
  'У': ['УТКА', 'УЛИТКА', 'УЧИТЕЛЬ', 'УТЮГ', 'УШИ'],
  'Ф': ['ФЛАГ', 'ФОТО', 'ФРУКТ', 'ФИАЛКА', 'ФОНТАН'],
  'Х': ['ХЛЕБ', 'ХОМЯК', 'ХОЛОД', 'ХРЯЩ', 'ХИТРОСТЬ'],
  'Ц': ['ЦВЕТЫ', 'ЦЫПЛЁНОК', 'ЦАРЬ', 'ЦИРК', 'ЦВЕТ'],
  'Ч': ['ЧАСЫ', 'ЧЕЛОВЕК', 'ЧЕШУЯ', 'ЧАШКА', 'ЧАЙ'],
  'Ш': ['ШАР', 'ШИШКА', 'ШАПКА', 'ШКОЛА', 'ШОКОЛАД'],
  'Щ': ['ЩУКА', 'ЩЕНОК', 'ЩИ', 'ЩЁТКА', 'ЩЕЛЬ'],
  'Э': ['ЭКРАН', 'ЭСКИМО', 'ЭЛЕКТРИК', 'ЭМБЛЕМА', 'ЭКРАН'],
  'Ю': ['ЮЛА', 'ЮБКА', 'ЮГ', 'ЮМОР', 'ЮНОША'],
  'Я': ['ЯБЛОКО', 'ЯГОДА', 'ЯЩЕРИЦА', 'ЯКОРЬ', 'ЯЗЫК']
}

// Эмодзи для слов
const wordEmojis: Record<string, string> = {
  'АРБУЗ': '🍉', 'АНАНАС': '🍍', 'АПЕЛЬСИН': '🍊', 'АНГЕЛ': '👼', 'АВТОБУС': '🚌',
  'БАНАН': '🍌', 'БЕЛКА': '🐿️', 'БАБОЧКА': '🦋', 'БАЛКОН': '🏠', 'БУСЫ': '📿',
  'ВАЗА': '🏺', 'ВОЛК': '🐺', 'ВОРОНА': '🐦', 'ВАРЕНЬЕ': '🍯', 'ВЕЛОСИПЕД': '🚲',
  'ГРУША': '🍐', 'ГОРА': '⛰️', 'ГОЛУБЬ': '🕊️', 'ГРИБ': '🍄', 'ГНОМ': '🧙',
  'ДОМ': '🏠', 'ДЕРЕВО': '🌳', 'ДЫНЯ': '🍈', 'ДОЖДЬ': '🌧️', 'ДРУГ': '👫',
  'ЕЖ': '🦔', 'ЕЛЬ': '🌲', 'ЕНОТ': '🦝', 'ЕДА': '🍽️', 'ЕРШ': '🐟',
  'ЁЖИК': '🦔', 'ЁЛКА': '🎄',
  'ЖИРАФ': '🦒', 'ЖУК': '🪲', 'ЖАБА': '🐸', 'ЖУРАВЛЬ': '🦢', 'ЖЕЛЕ': '🍮',
  'ЗАЯЦ': '🐰', 'ЗВЕЗДА': '⭐', 'ЗОНТ': '☂️', 'ЗМЕЯ': '🐍', 'ЗАМОК': '🏰',
  'ИГРУШКА': '🧸', 'ИГОЛКА': '🪡', 'ИВА': '🌳', 'ИНДЮК': '🦃', 'ИСКРА': '✨',
  'КОТ': '🐱', 'КЛЮКВА': '🫐', 'КОШКА': '🐱', 'КРАН': '🚰', 'КРОТ': '🦔',
  'ЛИСА': '🦊', 'ЛЕВ': '🦁', 'ЛУК': '🧅', 'ЛИМОН': '🍋', 'ЛЕД': '🧊',
  'МЕДВЕДЬ': '🐻', 'МОЛОКО': '🥛', 'МАШИНА': '🚗', 'МЯЧ': '⚽', 'МОСТ': '🌉',
  'НОЖ': '🔪', 'НОС': '👃', 'НЕБО': '🌌', 'НОЧЬ': '🌙', 'НОВОСТИ': '📰',
  'ОЛЕНЬ': '🦌', 'ОГУРЕЦ': '🥒', 'ОБЛАКО': '☁️', 'ОСЕЛ': '🫏', 'ОКНО': '🪟',
  'ПОМИДОР': '🍅', 'ПЕТУХ': '🐓', 'ПИЦЦА': '🍕', 'ПАРК': '🌳', 'ПТИЦА': '🐦',
  'РЫБА': '🐟', 'РЕКА': '🌊', 'РОЗА': '🌹', 'РУЧКА': '🖊️', 'РАДУГА': '🌧️',
  'СОЛНЦЕ': '☀️', 'СНЕГ': '❄️', 'СЫР': '🧀', 'СОВА': '🦉', 'СЛОН': '🐘',
  'ТЫКВА': '🎃', 'ТИГР': '🐯', 'ТОРТ': '🎂', 'ТЕЛЕФОН': '📱', 'ТРАКТОР': '🚜',
  'УТКА': '🦆', 'УЛИТКА': '🐌', 'УЧИТЕЛЬ': '👨‍🏫', 'УТЮГ': '🫖', 'УШИ': '👂',
  'ФЛАГ': '🚩', 'ФОТО': '📸', 'ФРУКТ': '🍎', 'ФИАЛКА': '🌸', 'ФОНТАН': '⛲',
  'ХЛЕБ': '🍞', 'ХОМЯК': '🐹', 'ХОЛОД': '🥶', 'ХРЯЩ': '🦈', 'ХИТРОСТЬ': '🧠',
  'ЦВЕТЫ': '💐', 'ЦЫПЛЁНОК': '🐣', 'ЦАРЬ': '👑', 'ЦИРК': '🎪', 'ЦВЕТ': '🎨',
  'ЧАСЫ': '⏰', 'ЧЕЛОВЕК': '👤', 'ЧЕШУЯ': '🐟', 'ЧАШКА': '☕', 'ЧАЙ': '🍵',
  'ШАР': '🎈', 'ШИШКА': '🌲', 'ШАПКА': '🧢', 'ШКОЛА': '🏫', 'ШОКОЛАД': '🍫',
  'ЩУКА': '🐟', 'ЩЕНОК': '🐶', 'ЩИ': '🍲', 'ЩЁТКА': '🪥', 'ЩЕЛЬ': '🚪',
  'ЭКРАН': '📺', 'ЭСКИМО': '🍦', 'ЭЛЕКТРИК': '⚡', 'ЭМБЛЕМА': '🏆',
  'ЮЛА': '🪀', 'ЮБКА': '👗', 'ЮГ': '🌴', 'ЮМОР': '😂', 'ЮНОША': '👦',
  'ЯБЛОКО': '🍎', 'ЯГОДА': '🫐', 'ЯЩЕРИЦА': '🦎', 'ЯКОРЬ': '⚓', 'ЯЗЫК': '👅'
}

// Настройки сложности
const difficultySettings = {
  easy: {
    optionCount: 4,
    pointsMultiplier: 1,
    letterPool: 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ'.split('')
  },
  medium: {
    optionCount: 6,
    pointsMultiplier: 2,
    letterPool: russianAlphabet
  },
  hard: {
    optionCount: 8,
    pointsMultiplier: 3,
    letterPool: russianAlphabet
  }
}

// Генерация задачи "Найди букву"
const generateFindLetterProblem = (difficulty: Difficulty): LetterProblem => {
  const settings = difficultySettings[difficulty]
  const targetLetter = settings.letterPool[Math.floor(Math.random() * settings.letterPool.length)]
  
  const options: Set<string> = new Set([targetLetter])
  while (options.size < settings.optionCount) {
    const randomLetter = settings.letterPool[Math.floor(Math.random() * settings.letterPool.length)]
    options.add(randomLetter)
  }
  
  return {
    targetLetter,
    options: Array.from(options).sort(() => Math.random() - 0.5)
  }
}

// Генерация задачи "Первая буква слова"
const generateFirstLetterProblem = (difficulty: Difficulty): LetterProblem => {
  const settings = difficultySettings[difficulty]
  
  // Выбираем случайную букву, для которой есть слова
  const lettersWithWords = Object.keys(wordsByFirstLetter).filter(l => wordsByFirstLetter[l]?.length > 0)
  const targetLetter = lettersWithWords[Math.floor(Math.random() * lettersWithWords.length)]
  
  // Выбираем слово
  const words = wordsByFirstLetter[targetLetter]
  const word = words[Math.floor(Math.random() * words.length)]
  
  const options: Set<string> = new Set([targetLetter])
  while (options.size < settings.optionCount) {
    const randomLetter = settings.letterPool[Math.floor(Math.random() * settings.letterPool.length)]
    if (randomLetter !== targetLetter) {
      options.add(randomLetter)
    }
  }
  
  return {
    targetLetter,
    word,
    image: wordEmojis[word] || '📚',
    options: Array.from(options).sort(() => Math.random() - 0.5)
  }
}

// Анимации
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
}

const letterVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  },
  hover: {
    scale: 1.15,
    y: -5,
    transition: { type: 'spring', stiffness: 400 }
  },
  tap: { scale: 0.95 }
}

// Компонент карточки с буквой
const LetterCard = ({ 
  letter, 
  onClick, 
  disabled,
  index,
  isSelected,
  isCorrect
}: { 
  letter: string
  onClick: () => void
  disabled: boolean
  index: number
  isSelected?: boolean
  isCorrect?: boolean
}) => {
  const colors = [
    'from-pink-400 to-rose-500',
    'from-blue-400 to-cyan-500',
    'from-green-400 to-emerald-500',
    'from-purple-400 to-violet-500',
    'from-yellow-400 to-orange-500',
    'from-red-400 to-pink-500',
    'from-teal-400 to-cyan-500',
    'from-indigo-400 to-purple-500'
  ]
  
  const bgColor = isCorrect 
    ? 'from-green-400 to-emerald-500' 
    : isSelected && !isCorrect 
      ? 'from-red-400 to-pink-500' 
      : colors[index % colors.length]
  
  return (
    <motion.button
      variants={letterVariants}
      initial="hidden"
      animate="visible"
      whileHover={!disabled ? "hover" : undefined}
      whileTap={!disabled ? "tap" : undefined}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-16 h-16 sm:w-20 sm:h-20
        bg-gradient-to-br ${bgColor}
        rounded-2xl
        flex items-center justify-center
        text-3xl sm:text-4xl font-bold text-white
        shadow-lg
        disabled:opacity-70 disabled:cursor-not-allowed
        border-4 border-white/30
        ${isSelected ? 'ring-4 ring-white/50' : ''}
      `}
    >
      {letter}
    </motion.button>
  )
}

// Компонент звёзд
const StarProgress = ({ count, total = 10 }: { count: number; total?: number }) => (
  <div className="flex gap-1 flex-wrap justify-center">
    {[...Array(total)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0 }}
        animate={{ scale: i < count ? 1 : 0.5 }}
        transition={{ delay: i * 0.05 }}
      >
        <Star 
          className={`w-5 h-5 sm:w-6 sm:h-6 ${i < count ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
        />
      </motion.div>
    ))}
  </div>
)

// Главный компонент
interface ReadingGameProps {
  onComplete?: (score: number) => void
  initialMode?: GameMode
  initialDifficulty?: Difficulty
}

export default function ReadingGame({ 
  onComplete,
  initialMode = 'findLetter',
  initialDifficulty = 'easy'
}: ReadingGameProps) {
  const [mode, setMode] = useState<GameMode>(initialMode)
  const [difficulty, setDifficulty] = useState<Difficulty>(initialDifficulty)
  const [problem, setProblem] = useState<LetterProblem | null>(null)
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    lives: 3,
    streak: 0,
    level: 1,
    problemsSolved: 0,
    highScore: 0,
    correctAnswers: 0
  })
  const [isPlaying, setIsPlaying] = useState(false)
  const [showResult, setShowResult] = useState<'correct' | 'wrong' | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [encouragement, setEncouragement] = useState('')
  
  // Sound effects hook
  const { playSuccess, playError, playWin, isMuted, toggleMute } = useSound({ volume: 0.25 })

  // Поощрительные фразы
  const encouragements = {
    correct: ['Молодец! 🎉', 'Умница! ⭐', 'Правильно! ✨', 'Супер! 🌟', 'Так держать! 💪', 'Отлично! 🌸', 'Браво! 👏'],
    wrong: ['Попробуй ещё! 💪', 'Не расстраивайся! 🌟', 'Внимательнее! 👀', 'Ты сможешь! 💫']
  }

  // Генерация новой задачи
  const generateProblem = useCallback(() => {
    if (mode === 'findLetter') {
      return generateFindLetterProblem(difficulty)
    } else {
      return generateFirstLetterProblem(difficulty)
    }
  }, [mode, difficulty])

  // Начало игры
  const startGame = useCallback(() => {
    setIsPlaying(true)
    setGameState(prev => ({
      score: 0,
      lives: 3,
      streak: 0,
      level: 1,
      problemsSolved: 0,
      highScore: prev.highScore,
      correctAnswers: 0
    }))
    setProblem(generateProblem())
    setShowResult(null)
    setSelectedAnswer(null)
  }, [generateProblem])

  // Следующая задача
  const nextProblem = useCallback(() => {
    setTimeout(() => {
      setProblem(generateProblem())
      setShowResult(null)
      setSelectedAnswer(null)
    }, 1200)
  }, [generateProblem])

  // Обработка ответа
  const handleAnswer = useCallback((answer: string) => {
    if (!problem || showResult) return
    
    setSelectedAnswer(answer)
    const isCorrect = answer === problem.targetLetter
    
    if (isCorrect) {
      const points = 10 * difficultySettings[difficulty].pointsMultiplier
      const streakBonus = gameState.streak >= 3 ? 5 : 0
      
      setGameState(prev => ({
        ...prev,
        score: prev.score + points + streakBonus,
        streak: prev.streak + 1,
        level: Math.floor((prev.score + points) / 50) + 1,
        problemsSolved: prev.problemsSolved + 1,
        highScore: Math.max(prev.highScore, prev.score + points + streakBonus),
        correctAnswers: prev.correctAnswers + 1
      }))
      
      setShowResult('correct')
      setEncouragement(encouragements.correct[Math.floor(Math.random() * encouragements.correct.length)])
      playSuccess() // Play success sound
      
      nextProblem()
    } else {
      setGameState(prev => ({
        ...prev,
        lives: prev.lives - 1,
        streak: 0
      }))
      
      setShowResult('wrong')
      setEncouragement(encouragements.wrong[Math.floor(Math.random() * encouragements.wrong.length)])
      playError() // Play error sound
      
      if (gameState.lives <= 1) {
        setTimeout(() => {
          setIsPlaying(false)
          playWin() // Play win sound on game end
          onComplete?.(gameState.score)
        }, 1500)
      } else {
        nextProblem()
      }
    }
  }, [problem, showResult, difficulty, gameState, nextProblem, onComplete, playSuccess, playError, playWin])

  // Экран начала игры
  if (!isPlaying) {
    return (
      <Card className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border-blue-500/30 rounded-3xl p-6 sm:p-8">
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl"
          >
            📖
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Игра с буквами!
          </h2>
          
          <p className="text-white/80">
            Найди правильную букву!
          </p>

          {/* Выбор режима */}
          <div className="space-y-3">
            <p className="text-white/60 text-sm">Выбери режим:</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              {[
                { id: 'findLetter', label: '🔤 Найди букву', desc: 'Найди нужную букву' },
                { id: 'findFirstLetter', label: '🔤🔤 Первая буква', desc: 'Какая буква первая?' }
              ].map((m) => (
                <motion.button
                  key={m.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMode(m.id as GameMode)}
                  className={`
                    px-4 py-3 rounded-xl font-bold transition-all text-left
                    ${mode === m.id 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white scale-105' 
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }
                  `}
                >
                  <div className="font-bold">{m.label}</div>
                  <div className="text-xs opacity-70">{m.desc}</div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Выбор сложности */}
          <div className="space-y-3">
            <p className="text-white/60 text-sm">Сложность:</p>
            <div className="flex justify-center gap-3">
              {([
                { id: 'easy', label: '😊 Легко', desc: '4 буквы' },
                { id: 'medium', label: '🤔 Средне', desc: '6 букв' },
                { id: 'hard', label: '🔥 Сложно', desc: '8 букв' }
              ] as const).map((diff) => (
                <motion.button
                  key={diff.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDifficulty(diff.id)}
                  className={`
                    px-4 py-2 rounded-xl font-bold transition-all
                    ${difficulty === diff.id 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white scale-110' 
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }
                  `}
                >
                  <div>{diff.label}</div>
                  <div className="text-xs opacity-70">{diff.desc}</div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Лучший результат */}
          {gameState.highScore > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center gap-2 text-yellow-400"
            >
              <Trophy className="w-5 h-5" />
              <span>Лучший результат: {gameState.highScore}</span>
            </motion.div>
          )}

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
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl text-white font-bold text-xl shadow-lg shadow-cyan-500/30"
            >
              <BookOpen className="w-6 h-6 inline mr-2" />
              Начать игру!
            </motion.button>
          </div>
        </motion.div>
      </Card>
    )
  }

  // Игровой экран
  return (
    <Card className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-cyan-500/30 rounded-3xl overflow-hidden">
      {/* Верхняя панель */}
      <div className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30 p-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Очки */}
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="text-2xl"
            >
              ⭐
            </motion.div>
            <span className="text-2xl font-bold text-white">{gameState.score}</span>
          </div>

          {/* Уровень */}
          <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
            <Target className="w-4 h-4 text-cyan-400" />
            <span className="text-white font-bold">Уровень {gameState.level}</span>
          </div>

          {/* Жизни */}
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={i < gameState.lives ? { scale: 1 } : { scale: 0 }}
                transition={{ type: 'spring' }}
              >
                <Heart 
                  className={`w-6 h-6 ${i < gameState.lives ? 'text-red-500 fill-red-500' : 'text-gray-400'}`}
                />
              </motion.div>
            ))}
          </div>

          {/* Серия */}
          {gameState.streak >= 3 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 bg-orange-500/30 px-3 py-1 rounded-full"
            >
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 font-bold">x{gameState.streak}</span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Прогресс-бар */}
      <div className="px-4 py-2 bg-white/5">
        <div className="flex items-center gap-2">
          <span className="text-white/60 text-xs">Прогресс:</span>
          <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
              animate={{ width: `${(gameState.correctAnswers % 10) * 10}%` }}
            />
          </div>
          <span className="text-white/60 text-xs">{gameState.correctAnswers}/10</span>
        </div>
      </div>

      {/* Основной контент */}
      <div className="p-6 sm:p-8">
        {/* Поощрение */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className={`
                text-center text-3xl sm:text-4xl font-bold mb-6
                ${showResult === 'correct' ? 'text-green-400' : 'text-red-400'}
              `}
            >
              {encouragement}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Задача */}
        {problem && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Задание */}
            <motion.div
              variants={letterVariants}
              className="text-center"
            >
              {mode === 'findFirstLetter' && problem.word ? (
                // Режим "Первая буква слова"
                <div className="space-y-4">
                  <div className="text-white/60 text-lg">
                    С какой буквы начинается слово?
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-3xl px-8 py-6 inline-block">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-6xl sm:text-7xl mb-2"
                    >
                      {problem.image}
                    </motion.div>
                    <div className="text-3xl sm:text-4xl font-bold text-white tracking-wider">
                      {problem.word.split('').map((letter, i) => (
                        <motion.span
                          key={i}
                          animate={i === 0 ? { 
                            color: ['#fff', '#fbbf24', '#fff'],
                            scale: [1, 1.2, 1] 
                          } : {}}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="inline-block"
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                // Режим "Найди букву"
                <div className="space-y-4">
                  <div className="text-white/60 text-lg">
                    Найди эту букву:
                  </div>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-block bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl px-10 py-6 shadow-xl"
                  >
                    <span className="text-6xl sm:text-7xl font-bold text-white">
                      {problem.targetLetter}
                    </span>
                  </motion.div>
                  <div className="text-white/40 text-sm">
                    💡 Найди такую же букву внизу
                  </div>
                </div>
              )}
            </motion.div>

            {/* Варианты ответов */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 sm:gap-4"
              variants={containerVariants}
            >
              {problem.options.map((option, index) => (
                <LetterCard
                  key={option}
                  letter={option}
                  index={index}
                  disabled={showResult !== null}
                  isSelected={selectedAnswer === option}
                  isCorrect={showResult === 'correct' && option === problem.targetLetter}
                  onClick={() => handleAnswer(option)}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Звёзды прогресса */}
      <div className="px-6 pb-4">
        <StarProgress count={gameState.correctAnswers % 10} total={10} />
        <p className="text-center text-white/60 text-xs mt-2">
          Правильных ответов: {gameState.correctAnswers}
        </p>
      </div>
    </Card>
  )
}
