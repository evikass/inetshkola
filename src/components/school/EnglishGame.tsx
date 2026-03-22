'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Volume2, ArrowLeft, Star, Trophy, Zap, Heart, 
  BookOpen, Clock, Target, Check, X, Sparkles, Flag
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

interface EnglishGameProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

// Категории слов
type WordCategory = 'animals' | 'colors' | 'numbers' | 'family' | 'food' | 'nature'

interface Word {
  english: string
  russian: string
  category: WordCategory
  difficulty: 1 | 2 | 3
  transcription?: string
  example?: string
}

// База слов
const words: Word[] = [
  // Животные (difficulty 1)
  { english: 'cat', russian: 'кот', category: 'animals', difficulty: 1, transcription: '[kæt]', example: 'I have a cat.' },
  { english: 'dog', russian: 'собака', category: 'animals', difficulty: 1, transcription: '[dɒɡ]', example: 'The dog is big.' },
  { english: 'bird', russian: 'птица', category: 'animals', difficulty: 1, transcription: '[bɜːd]', example: 'A bird can fly.' },
  { english: 'fish', russian: 'рыба', category: 'animals', difficulty: 1, transcription: '[fɪʃ]', example: 'Fish swim in water.' },
  { english: 'bear', russian: 'медведь', category: 'animals', difficulty: 1, transcription: '[beə]', example: 'The bear is brown.' },
  
  // Животные (difficulty 2)
  { english: 'elephant', russian: 'слон', category: 'animals', difficulty: 2, transcription: '[ˈelɪfənt]', example: 'An elephant is big.' },
  { english: 'giraffe', russian: 'жираф', category: 'animals', difficulty: 2, transcription: '[dʒɪˈrɑːf]', example: 'A giraffe has a long neck.' },
  { english: 'dolphin', russian: 'дельфин', category: 'animals', difficulty: 2, transcription: '[ˈdɒlfɪn]', example: 'Dolphins are smart.' },
  { english: 'rabbit', russian: 'кролик', category: 'animals', difficulty: 2, transcription: '[ˈræbɪt]', example: 'The rabbit is white.' },
  
  // Животные (difficulty 3)
  { english: 'butterfly', russian: 'бабочка', category: 'animals', difficulty: 3, transcription: '[ˈbʌtəflaɪ]', example: 'A butterfly is beautiful.' },
  { english: 'squirrel', russian: 'белка', category: 'animals', difficulty: 3, transcription: '[ˈskwɪrəl]', example: 'Squirrels like nuts.' },
  { english: 'crocodile', russian: 'крокодил', category: 'animals', difficulty: 3, transcription: '[ˈkrɒkədaɪl]', example: 'Crocodiles have big teeth.' },
  
  // Цвета (difficulty 1)
  { english: 'red', russian: 'красный', category: 'colors', difficulty: 1, example: 'The apple is red.' },
  { english: 'blue', russian: 'синий', category: 'colors', difficulty: 1, example: 'The sky is blue.' },
  { english: 'green', russian: 'зелёный', category: 'colors', difficulty: 1, example: 'Grass is green.' },
  { english: 'yellow', russian: 'жёлтый', category: 'colors', difficulty: 1, example: 'The sun is yellow.' },
  { english: 'white', russian: 'белый', category: 'colors', difficulty: 1, example: 'Snow is white.' },
  { english: 'black', russian: 'чёрный', category: 'colors', difficulty: 1, example: 'The cat is black.' },
  
  // Цвета (difficulty 2)
  { english: 'orange', russian: 'оранжевый', category: 'colors', difficulty: 2, example: 'Oranges are orange.' },
  { english: 'purple', russian: 'фиолетовый', category: 'colors', difficulty: 2, example: 'Grapes can be purple.' },
  { english: 'pink', russian: 'розовый', category: 'colors', difficulty: 2, example: 'The flower is pink.' },
  { english: 'brown', russian: 'коричневый', category: 'colors', difficulty: 2, example: 'The bear is brown.' },
  
  // Числа (difficulty 1)
  { english: 'one', russian: 'один', category: 'numbers', difficulty: 1, transcription: '[wʌn]' },
  { english: 'two', russian: 'два', category: 'numbers', difficulty: 1, transcription: '[tuː]' },
  { english: 'three', russian: 'три', category: 'numbers', difficulty: 1, transcription: '[θriː]' },
  { english: 'four', russian: 'четыре', category: 'numbers', difficulty: 1, transcription: '[fɔː]' },
  { english: 'five', russian: 'пять', category: 'numbers', difficulty: 1, transcription: '[faɪv]' },
  
  // Числа (difficulty 2)
  { english: 'six', russian: 'шесть', category: 'numbers', difficulty: 2, transcription: '[sɪks]' },
  { english: 'seven', russian: 'семь', category: 'numbers', difficulty: 2, transcription: '[ˈsevn]' },
  { english: 'eight', russian: 'восемь', category: 'numbers', difficulty: 2, transcription: '[eɪt]' },
  { english: 'nine', russian: 'девять', category: 'numbers', difficulty: 2, transcription: '[naɪn]' },
  { english: 'ten', russian: 'десять', category: 'numbers', difficulty: 2, transcription: '[ten]' },
  
  // Числа (difficulty 3)
  { english: 'eleven', russian: 'одиннадцать', category: 'numbers', difficulty: 3, transcription: '[ɪˈlevn]' },
  { english: 'twelve', russian: 'двенадцать', category: 'numbers', difficulty: 3, transcription: '[twelv]' },
  { english: 'twenty', russian: 'двадцать', category: 'numbers', difficulty: 3, transcription: '[ˈtwenti]' },
  { english: 'hundred', russian: 'сто', category: 'numbers', difficulty: 3, transcription: '[ˈhʌndrəd]' },
  
  // Семья (difficulty 1)
  { english: 'mom', russian: 'мама', category: 'family', difficulty: 1, transcription: '[mɒm]' },
  { english: 'dad', russian: 'папа', category: 'family', difficulty: 1, transcription: '[dæd]' },
  { english: 'sister', russian: 'сестра', category: 'family', difficulty: 1, transcription: '[ˈsɪstə]' },
  { english: 'brother', russian: 'брат', category: 'family', difficulty: 1, transcription: '[ˈbrʌðə]' },
  
  // Семья (difficulty 2)
  { english: 'grandma', russian: 'бабушка', category: 'family', difficulty: 2, transcription: '[ˈɡrænmɑː]' },
  { english: 'grandpa', russian: 'дедушка', category: 'family', difficulty: 2, transcription: '[ˈɡrænpɑː]' },
  { english: 'family', russian: 'семья', category: 'family', difficulty: 2, transcription: '[ˈfæmɪli]' },
  { english: 'mother', russian: 'мать', category: 'family', difficulty: 2, transcription: '[ˈmʌðə]' },
  { english: 'father', russian: 'отец', category: 'family', difficulty: 2, transcription: '[ˈfɑːðə]' },
  
  // Еда (difficulty 1)
  { english: 'apple', russian: 'яблоко', category: 'food', difficulty: 1, transcription: '[ˈæpl]' },
  { english: 'milk', russian: 'молоко', category: 'food', difficulty: 1, transcription: '[mɪlk]' },
  { english: 'bread', russian: 'хлеб', category: 'food', difficulty: 1, transcription: '[bred]' },
  { english: 'water', russian: 'вода', category: 'food', difficulty: 1, transcription: '[ˈwɔːtə]' },
  
  // Еда (difficulty 2)
  { english: 'banana', russian: 'банан', category: 'food', difficulty: 2, transcription: '[bəˈnɑːnə]' },
  { english: 'orange', russian: 'апельсин', category: 'food', difficulty: 2, transcription: '[ˈɒrɪndʒ]' },
  { english: 'cheese', russian: 'сыр', category: 'food', difficulty: 2, transcription: '[tʃiːz]' },
  { english: 'chicken', russian: 'курица', category: 'food', difficulty: 2, transcription: '[ˈtʃɪkɪn]' },
  { english: 'potato', russian: 'картошка', category: 'food', difficulty: 2, transcription: '[pəˈteɪtəʊ]' },
  
  // Природа (difficulty 1)
  { english: 'sun', russian: 'солнце', category: 'nature', difficulty: 1, transcription: '[sʌn]' },
  { english: 'moon', russian: 'луна', category: 'nature', difficulty: 1, transcription: '[muːn]' },
  { english: 'tree', russian: 'дерево', category: 'nature', difficulty: 1, transcription: '[triː]' },
  { english: 'flower', russian: 'цветок', category: 'nature', difficulty: 1, transcription: '[ˈflaʊə]' },
  
  // Природа (difficulty 2)
  { english: 'mountain', russian: 'гора', category: 'nature', difficulty: 2, transcription: '[ˈmaʊntɪn]' },
  { english: 'river', russian: 'река', category: 'nature', difficulty: 2, transcription: '[ˈrɪvə]' },
  { english: 'forest', russian: 'лес', category: 'nature', difficulty: 2, transcription: '[ˈfɒrɪst]' },
  { english: 'rain', russian: 'дождь', category: 'nature', difficulty: 2, transcription: '[reɪn]' },
  
  // Природа (difficulty 3)
  { english: 'weather', russian: 'погода', category: 'nature', difficulty: 3, transcription: '[ˈweðə]' },
  { english: 'rainbow', russian: 'радуга', category: 'nature', difficulty: 3, transcription: '[ˈreɪnbəʊ]' },
  { english: 'snowflake', russian: 'снежинка', category: 'nature', difficulty: 3, transcription: '[ˈsnəʊfleɪk]' },
]

// Настройки сложности
const difficultySettings = {
  0: { name: 'Базовый', count: 8, time: 0, diffLevel: 1, xp: 60 },
  1: { name: 'Средний', count: 12, time: 15, diffLevel: 2, xp: 90 },
  2: { name: 'Продвинутый', count: 15, time: 10, diffLevel: 3, xp: 120 }
}

// Настройки категорий
const categorySettings = {
  animals: { name: 'Животные', icon: '🐾', color: 'from-amber-400 to-orange-500' },
  colors: { name: 'Цвета', icon: '🎨', color: 'from-pink-400 to-rose-500' },
  numbers: { name: 'Числа', icon: '🔢', color: 'from-blue-400 to-cyan-500' },
  family: { name: 'Семья', icon: '👨‍👩‍👧‍👦', color: 'from-purple-400 to-violet-500' },
  food: { name: 'Еда', icon: '🍎', color: 'from-green-400 to-emerald-500' },
  nature: { name: 'Природа', icon: '🌿', color: 'from-teal-400 to-cyan-500' }
}

type GameMode = 'translate_en_ru' | 'translate_ru_en' | 'spell'

export default function EnglishGame({ gradeId = 0, onExperience }: EnglishGameProps) {
  const { playSuccess, playError, playWin, playLevelUp, muted, setMuted } = useSound()
  
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'result'>('setup')
  const [difficulty, setDifficulty] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<WordCategory | 'all'>('all')
  const [gameMode, setGameMode] = useState<GameMode>('translate_en_ru')
  
  const [currentWords, setCurrentWords] = useState<Word[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [hearts, setHearts] = useState(3)
  const [timeLeft, setTimeLeft] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [usedHint, setUsedHint] = useState(false)
  
  const currentWord = currentWords[currentIndex]
  const settings = difficultySettings[difficulty]
  
  // Инициализация игры
  const startGame = useCallback(() => {
    const settings = difficultySettings[difficulty]
    
    // Фильтруем слова по категории и сложности
    let filteredWords = words.filter(word => {
      const diffMatch = word.difficulty <= settings.diffLevel
      const catMatch = selectedCategory === 'all' || word.category === selectedCategory
      return diffMatch && catMatch
    })
    
    // Перемешиваем
    filteredWords = [...filteredWords].sort(() => Math.random() - 0.5)
    
    // Берём нужное количество
    const gameWords = filteredWords.slice(0, settings.count)
    
    setCurrentWords(gameWords)
    setCurrentIndex(0)
    setScore(0)
    setStreak(0)
    setMaxStreak(0)
    setHearts(3)
    setTimeLeft(settings.time)
    setAnswered(false)
    setSelectedAnswer(null)
    setShowHint(false)
    setUsedHint(false)
    setGameState('playing')
  }, [difficulty, selectedCategory])
  
  // Генерация вариантов ответа (используем useMemo вместо useEffect)
  const options = useMemo(() => {
    if (gameState !== 'playing' || !currentWord) return []
    
    const correctAnswer = gameMode === 'translate_en_ru' 
      ? currentWord.russian 
      : currentWord.english
    
    // Получаем все возможные ответы
    const allAnswers = words
      .filter(w => {
        if (gameMode === 'translate_en_ru') {
          return w.russian !== correctAnswer
        } else {
          return w.english !== correctAnswer
        }
      })
      .map(w => gameMode === 'translate_en_ru' ? w.russian : w.english)
    
    // Выбираем 3 случайных неправильных ответа
    const wrongAnswers = [...new Set(allAnswers)]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
    
    // Добавляем правильный ответ и перемешиваем
    return [...wrongAnswers, correctAnswer].sort(() => Math.random() - 0.5)
  }, [currentIndex, gameState, currentWord, gameMode])
  
  // Обработка таймаута
  const handleTimeout = useCallback(() => {
    if (!answered) {
      playError()
      setAnswered(true)
      setStreak(0)
      setHearts(prev => prev - 1)
    }
  }, [answered, playError])
  
  // Завершение игры
  const endGame = useCallback(() => {
    playWin()
    const earnedXP = Math.round((score / (settings.count * 10)) * settings.xp)
    onExperience?.(earnedXP)
    setGameState('result')
  }, [playWin, score, settings, onExperience])
  
  // Следующий вопрос
  const nextQuestion = useCallback(() => {
    if (currentIndex < currentWords.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setTimeLeft(settings.time)
      setAnswered(false)
      setSelectedAnswer(null)
      setShowHint(false)
      setUsedHint(false)
    } else {
      endGame()
    }
  }, [currentIndex, currentWords.length, settings.time, endGame])
  
  // Таймер
  useEffect(() => {
    if (gameState === 'playing' && settings.time > 0 && !answered) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleTimeout()
            return settings.time
          }
          return prev - 1
        })
      }, 1000)
      
      return () => clearInterval(timer)
    }
  }, [gameState, answered, settings.time, handleTimeout])
  
  // Автопереход после таймаута
  useEffect(() => {
    if (answered && hearts <= 0) {
      const timer = setTimeout(() => {
        endGame()
      }, 1500)
      return () => clearTimeout(timer)
    } else if (answered) {
      const timer = setTimeout(() => {
        nextQuestion()
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [answered, hearts, endGame, nextQuestion])
  
  // Обработка ответа
  const handleAnswer = (index: number) => {
    if (answered) return
    
    const answer = options[index]
    const correctAnswer = gameMode === 'translate_en_ru' 
      ? currentWord.russian 
      : currentWord.english
    
    const isCorrect = answer === correctAnswer
    setSelectedAnswer(index)
    setAnswered(true)
    
    if (isCorrect) {
      playSuccess()
      const bonus = usedHint ? 0.5 : 1
      const streakBonus = Math.min(streak * 2, 10)
      setScore(prev => prev + Math.round(10 * bonus + streakBonus))
      setStreak(prev => {
        const newStreak = prev + 1
        if (newStreak > maxStreak) setMaxStreak(newStreak)
        if (newStreak === 5) playLevelUp()
        return newStreak
      })
    } else {
      playError()
      setStreak(0)
      setHearts(prev => prev - 1)
    }
  }
  
  // Подсказка
  const handleHint = () => {
    setShowHint(true)
    setUsedHint(true)
  }
  
  // Рендер экрана настройки
  if (gameState === 'setup') {
    return (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
            <span className="text-3xl">🇬🇧</span>
            Английский язык
            <span className="text-3xl">📚</span>
          </h2>
          <p className="text-gray-400">Изучи английские слова!</p>
        </motion.div>
        
        {/* Выбор режима */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="w-5 h-5 text-cyan-400" />
              Режим игры
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { id: 'translate_en_ru', name: 'En → Ru', desc: 'Английский в русский' },
              { id: 'translate_ru_en', name: 'Ru → En', desc: 'Русский в английский' },
              { id: 'spell', name: 'Правописание', desc: 'Напиши слово' }
            ].map((mode) => (
              <motion.button
                key={mode.id}
                onClick={() => setGameMode(mode.id as GameMode)}
                className={`p-3 rounded-xl border-2 transition-all ${
                  gameMode === mode.id
                    ? 'border-cyan-400 bg-cyan-400/20'
                    : 'border-white/20 hover:border-white/40'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="font-bold">{mode.name}</div>
                <div className="text-xs text-gray-400">{mode.desc}</div>
              </motion.button>
            ))}
          </CardContent>
        </Card>
        
        {/* Выбор категории */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              Категория слов
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <motion.button
              onClick={() => setSelectedCategory('all')}
              className={`p-3 rounded-xl border-2 transition-all ${
                selectedCategory === 'all'
                  ? 'border-purple-400 bg-purple-400/20'
                  : 'border-white/20 hover:border-white/40'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl">📝</span>
              <div className="font-bold mt-1">Все слова</div>
            </motion.button>
            
            {Object.entries(categorySettings).map(([key, value]) => (
              <motion.button
                key={key}
                onClick={() => setSelectedCategory(key as WordCategory)}
                className={`p-3 rounded-xl border-2 transition-all ${
                  selectedCategory === key
                    ? `bg-gradient-to-br ${value.color} border-transparent`
                    : 'border-white/20 hover:border-white/40'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-2xl">{value.icon}</span>
                <div className="font-bold mt-1">{value.name}</div>
              </motion.button>
            ))}
          </CardContent>
        </Card>
        
        {/* Выбор сложности */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Сложность
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-2">
            {Object.entries(difficultySettings).map(([key, value]) => (
              <motion.button
                key={key}
                onClick={() => setDifficulty(Number(key))}
                className={`p-3 rounded-xl border-2 transition-all ${
                  difficulty === Number(key)
                    ? 'border-yellow-400 bg-yellow-400/20'
                    : 'border-white/20 hover:border-white/40'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="font-bold">{value.name}</div>
                <div className="text-xs text-gray-400">
                  {value.count} слов
                  {value.time > 0 && ` • ${value.time}сек`}
                </div>
                <div className="text-xs text-yellow-400 mt-1">+{value.xp} XP</div>
              </motion.button>
            ))}
          </CardContent>
        </Card>
        
        {/* Кнопка старта */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            onClick={startGame}
            className="w-full py-6 text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-2xl"
          >
            <Flag className="w-6 h-6 mr-2" />
            Начать игру
          </Button>
        </motion.div>
      </div>
    )
  }
  
  // Рендер результатов
  if (gameState === 'result') {
    const earnedXP = Math.round((score / (settings.count * 10)) * settings.xp)
    const accuracy = Math.round((score / (settings.count * 10)) * 100)
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6"
      >
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-2xl sm:text-3xl font-bold">Отлично!</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-4">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{score}</div>
              <div className="text-xs text-gray-400">Очков</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-4">
              <Zap className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{earnedXP}</div>
              <div className="text-xs text-gray-400">XP</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-4">
              <Target className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{accuracy}%</div>
              <div className="text-xs text-gray-400">Точность</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-4">
              <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{maxStreak}</div>
              <div className="text-xs text-gray-400">Макс. серия</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex gap-4">
          <Button
            onClick={() => setGameState('setup')}
            variant="outline"
            className="flex-1"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            К настройкам
          </Button>
          <Button
            onClick={startGame}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600"
          >
            <Trophy className="w-5 h-5 mr-2" />
            Играть снова
          </Button>
        </div>
      </motion.div>
    )
  }
  
  // Рендер игры
  return (
    <div className="space-y-4">
      {/* Прогресс */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {[...Array(3)].map((_, i) => (
            <Heart
              key={i}
              className={`w-6 h-6 ${i < hearts ? 'text-red-400 fill-red-400' : 'text-gray-600'}`}
            />
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="font-bold">{score}</span>
          </div>
          
          {streak >= 3 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 text-orange-400"
            >
              <Zap className="w-5 h-5" />
              <span className="font-bold">x{streak}</span>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Прогресс бар */}
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / currentWords.length) * 100}%` }}
        />
      </div>
      
      {/* Таймер */}
      {settings.time > 0 && (
        <div className="flex items-center justify-center gap-2">
          <Clock className={`w-5 h-5 ${timeLeft <= 5 ? 'text-red-400' : 'text-gray-400'}`} />
          <span className={`font-mono text-lg ${timeLeft <= 5 ? 'text-red-400' : ''}`}>
            {timeLeft}с
          </span>
        </div>
      )}
      
      {/* Карточка слова */}
      {currentWord && (
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <Card className={`bg-gradient-to-br ${categorySettings[currentWord.category].color} border-0`}>
            <CardContent className="pt-6 pb-6">
              <div className="text-center">
                <div className="text-sm text-white/70 mb-2">
                  {categorySettings[currentWord.category].icon} {categorySettings[currentWord.category].name}
                </div>
                
                <div className="text-4xl sm:text-5xl font-bold mb-2">
                  {gameMode === 'translate_en_ru' ? currentWord.english : currentWord.russian}
                </div>
                
                {gameMode === 'translate_en_ru' && currentWord.transcription && (
                  <div className="text-white/70 text-lg">
                    {currentWord.transcription}
                  </div>
                )}
                
                {showHint && currentWord.example && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-white/20 rounded-xl"
                  >
                    <div className="text-sm italic">"{currentWord.example}"</div>
                  </motion.div>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Варианты ответа */}
          <div className="grid grid-cols-2 gap-3">
            {options.map((option, index) => {
              const correctAnswer = gameMode === 'translate_en_ru' 
                ? currentWord.russian 
                : currentWord.english
              const isCorrect = option === correctAnswer
              const isSelected = selectedAnswer === index
              
              return (
                <motion.button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={answered}
                  className={`p-4 rounded-xl border-2 font-medium text-lg transition-all ${
                    answered
                      ? isCorrect
                        ? 'border-green-400 bg-green-400/20 text-green-300'
                        : isSelected
                          ? 'border-red-400 bg-red-400/20 text-red-300'
                          : 'border-white/10 text-gray-500'
                      : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                  }`}
                  whileHover={!answered ? { scale: 1.02 } : {}}
                  whileTap={!answered ? { scale: 0.98 } : {}}
                >
                  <div className="flex items-center justify-center gap-2">
                    {answered && isCorrect && <Check className="w-5 h-5" />}
                    {answered && isSelected && !isCorrect && <X className="w-5 h-5" />}
                    {option}
                  </div>
                </motion.button>
              )
            })}
          </div>
          
          {/* Подсказка */}
          {!answered && currentWord.example && !showHint && (
            <Button
              onClick={handleHint}
              variant="ghost"
              className="w-full text-gray-400"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Показать пример (−50% очков)
            </Button>
          )}
        </motion.div>
      )}
      
      {/* Счётчик вопросов */}
      <div className="text-center text-gray-400">
        {currentIndex + 1} / {currentWords.length}
      </div>
    </div>
  )
}
