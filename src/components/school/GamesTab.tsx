'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Gamepad2, Calculator, BookOpen, Puzzle, Sparkles,
  ArrowLeft, Star, Trophy, Zap, Brain, Palette, Image,
  Filter, Landmark, Atom, Languages, Leaf
} from 'lucide-react'
import MathGame from './MathGame'
import ReadingGame from './ReadingGame'
import { CountingGame, AlphabetGame, MemoryGame, ShapeGame } from './KidMiniGames'
import { 
  WordBuilder, 
  NumberSequence, 
  ColorMatch, 
  PictureQuiz, 
  NewGamesSelector 
} from './NewGames'
import MultiplicationTableGame from './MultiplicationTableGame'
import AdditionSubtractionGame from './AdditionSubtractionGame'
import GeographyQuiz from './GeographyQuiz'
import ScienceExperiments from './ScienceExperiments'
import SpellingGame from './SpellingGame'
import PunctuationGame from './PunctuationGame'
import HistoryGame from './HistoryGame'
import ChemistryGame from './ChemistryGame'
import EnglishGame from './EnglishGame'
import BiologyGame from './BiologyGame'

interface GamesTabProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

type GameType = 'menu' | 'math' | 'reading' | 'memory' | 'counting' | 'alphabet' | 'shapes' | 
  'wordbuilder' | 'numbersequence' | 'colormatch' | 'picturequiz' | 'newgames' | 
  'multiplication' | 'addition' | 'geography' | 'science' | 'spelling' | 'punctuation' | 'history' | 'chemistry' | 'english' | 'biology'

type GameCategory = 'all' | 'math' | 'russian' | 'development'

// Конфигурация игр с категориями
const games = [
  // Математика
  {
    id: 'math',
    title: 'Математика',
    description: 'Решай примеры и зарабатывай звёзды!',
    icon: '🧮',
    color: 'from-blue-400 to-cyan-500',
    difficulty: ['Лёгкий', 'Средний', 'Сложный'],
    age: '6+',
    xp: 50,
    category: 'math' as GameCategory,
    categoryLabel: 'Математика',
    categoryIcon: Calculator
  },
  {
    id: 'multiplication',
    title: 'Таблица умножения',
    description: 'Практикуй умножение чисел!',
    icon: '✖️',
    color: 'from-cyan-500 to-teal-600',
    difficulty: ['1-5', '1-10', '1-12'],
    age: '7+',
    xp: 60,
    category: 'math' as GameCategory,
    categoryLabel: 'Математика',
    categoryIcon: Calculator
  },
  {
    id: 'addition',
    title: 'Сложение и вычитание',
    description: 'Практикуй сложение и вычитание!',
    icon: '➕➖',
    color: 'from-violet-500 to-purple-600',
    difficulty: ['1-20', '1-100', '1-1000'],
    age: '6+',
    xp: 55,
    category: 'math' as GameCategory,
    categoryLabel: 'Математика',
    categoryIcon: Calculator
  },
  {
    id: 'numbersequence',
    title: 'Последовательность',
    description: 'Найди пропущенное число!',
    icon: '🔢',
    color: 'from-blue-500 to-cyan-600',
    difficulty: ['До 10', 'До 50', 'До 100'],
    age: '6+',
    xp: 40,
    category: 'math' as GameCategory,
    categoryLabel: 'Математика',
    categoryIcon: Brain
  },
  
  // Русский язык
  {
    id: 'reading',
    title: 'Чтение',
    description: 'Найди правильную букву!',
    icon: '📖',
    color: 'from-pink-400 to-rose-500',
    difficulty: ['Лёгкий', 'Средний', 'Сложный'],
    age: '5+',
    xp: 40,
    category: 'russian' as GameCategory,
    categoryLabel: 'Русский язык',
    categoryIcon: BookOpen
  },
  {
    id: 'wordbuilder',
    title: 'Собери слово',
    description: 'Составь слово из букв!',
    icon: '🔤',
    color: 'from-purple-500 to-indigo-600',
    difficulty: ['3 буквы', '5 букв', '7 букв'],
    age: '6+',
    xp: 45,
    category: 'russian' as GameCategory,
    categoryLabel: 'Русский язык',
    categoryIcon: Puzzle
  },
  {
    id: 'spelling',
    title: 'Орфография',
    description: 'Изучи правила правописания!',
    icon: '✏️',
    color: 'from-rose-500 to-pink-600',
    difficulty: ['Лёгкий', 'Средний', 'Сложный'],
    age: '7+',
    xp: 75,
    category: 'russian' as GameCategory,
    categoryLabel: 'Русский язык',
    categoryIcon: BookOpen
  },
  {
    id: 'punctuation',
    title: 'Пунктуация',
    description: 'Расставь знаки препинания!',
    icon: '📝',
    color: 'from-indigo-500 to-violet-600',
    difficulty: ['Лёгкий', 'Средний', 'Сложный'],
    age: '8+',
    xp: 80,
    category: 'russian' as GameCategory,
    categoryLabel: 'Русский язык',
    categoryIcon: BookOpen
  },
  
  // Развитие
  {
    id: 'memory',
    title: 'Память',
    description: 'Найди пары одинаковых карточек!',
    icon: '🧠',
    color: 'from-purple-400 to-violet-500',
    difficulty: ['3x4', '4x4', '4x5'],
    age: '4+',
    xp: 30,
    category: 'development' as GameCategory,
    categoryLabel: 'Развитие',
    categoryIcon: Brain
  },
  {
    id: 'counting',
    title: 'Счёт',
    description: 'Посчитай предметы на картинке!',
    icon: '🔢',
    color: 'from-green-400 to-emerald-500',
    difficulty: ['До 5', 'До 10', 'До 20'],
    age: '4+',
    xp: 35,
    category: 'math' as GameCategory,
    categoryLabel: 'Математика',
    categoryIcon: Calculator
  },
  {
    id: 'alphabet',
    title: 'Алфавит',
    description: 'Изучи буквы русского алфавита!',
    icon: '🔤',
    color: 'from-yellow-400 to-orange-500',
    difficulty: ['Гласные', 'Согласные', 'Весь'],
    age: '4+',
    xp: 25,
    category: 'russian' as GameCategory,
    categoryLabel: 'Русский язык',
    categoryIcon: BookOpen
  },
  {
    id: 'shapes',
    title: 'Фигуры',
    description: 'Узнай геометрические фигуры!',
    icon: '🔷',
    color: 'from-teal-400 to-cyan-500',
    difficulty: ['Простые', 'Сложные', '3D'],
    age: '4+',
    xp: 30,
    category: 'development' as GameCategory,
    categoryLabel: 'Развитие',
    categoryIcon: Puzzle
  },
  {
    id: 'colormatch',
    title: 'Цвет и слово',
    description: 'Тренируй внимание!',
    icon: '🎨',
    color: 'from-pink-500 to-rose-600',
    difficulty: ['Таймер', 'Без таймера'],
    age: '6+',
    xp: 50,
    category: 'development' as GameCategory,
    categoryLabel: 'Развитие',
    categoryIcon: Palette
  },
  {
    id: 'picturequiz',
    title: 'Угадай картинку',
    description: 'Викторина с эмодзи!',
    icon: '🎯',
    color: 'from-amber-500 to-orange-600',
    difficulty: ['Животные', 'Всё'],
    age: '5+',
    xp: 40,
    category: 'development' as GameCategory,
    categoryLabel: 'Развитие',
    categoryIcon: Image
  },
  {
    id: 'geography',
    title: 'География',
    description: 'Проверь знания о мире!',
    icon: '🌍',
    color: 'from-teal-400 to-cyan-500',
    difficulty: ['Лёгкий', 'Сложный'],
    age: '7+',
    xp: 70,
    category: 'development' as GameCategory,
    categoryLabel: 'Развитие',
    categoryIcon: Brain
  },
  {
    id: 'history',
    title: 'История России',
    description: 'Даты и события истории!',
    icon: '🏛️',
    color: 'from-amber-500 to-orange-600',
    difficulty: ['Лёгкий', 'Средний', 'Сложный'],
    age: '9+',
    xp: 85,
    category: 'development' as GameCategory,
    categoryLabel: 'Развитие',
    categoryIcon: Landmark
  },
  {
    id: 'chemistry',
    title: 'Периодическая таблица',
    description: 'Изучи химические элементы!',
    icon: '⚗️',
    color: 'from-emerald-500 to-teal-600',
    difficulty: ['Лёгкий', 'Средний', 'Сложный'],
    age: '10+',
    xp: 90,
    category: 'development' as GameCategory,
    categoryLabel: 'Развитие',
    categoryIcon: Atom
  },
  {
    id: 'science',
    title: 'Опыты',
    description: 'Виртуальная лаборатория!',
    icon: '🔬',
    color: 'from-green-400 to-emerald-500',
    difficulty: ['Химия', 'Физика', 'Биология'],
    age: '6+',
    xp: 60,
    category: 'development' as GameCategory,
    categoryLabel: 'Развитие',
    categoryIcon: Brain
  },
  {
    id: 'english',
    title: 'Английский язык',
    description: 'Изучи английские слова!',
    icon: '🇬🇧',
    color: 'from-cyan-400 to-blue-500',
    difficulty: ['Базовый', 'Средний', 'Продвинутый'],
    age: '6+',
    xp: 90,
    category: 'development' as GameCategory,
    categoryLabel: 'Развитие',
    categoryIcon: Languages
  },
  {
    id: 'biology',
    title: 'Биология',
    description: 'Проверь знания о живой природе!',
    icon: '🧬',
    color: 'from-green-400 to-emerald-500',
    difficulty: ['Лёгкий', 'Средний', 'Сложный'],
    age: '7+',
    xp: 100,
    category: 'development' as GameCategory,
    categoryLabel: 'Развитие',
    categoryIcon: Leaf
  }
]

// Категории для фильтрации
const categories = [
  { id: 'all' as GameCategory, label: 'Все игры', icon: Gamepad2, color: 'from-gray-400 to-gray-500' },
  { id: 'math' as GameCategory, label: 'Математика', icon: Calculator, color: 'from-blue-400 to-cyan-500' },
  { id: 'russian' as GameCategory, label: 'Русский язык', icon: BookOpen, color: 'from-pink-400 to-rose-500' },
  { id: 'development' as GameCategory, label: 'Развитие', icon: Brain, color: 'from-purple-400 to-violet-500' }
]

export default function GamesTab({ gradeId = 0, onExperience }: GamesTabProps) {
  const [currentGame, setCurrentGame] = useState<GameType>('menu')
  const [selectedDifficulty, setSelectedDifficulty] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<GameCategory>('all')
  
  const isKidMode = gradeId <= 2

  // Фильтрация игр по категории
  const filteredGames = selectedCategory === 'all' 
    ? games 
    : games.filter(game => game.category === selectedCategory)

  // Обработчик завершения игры
  const handleGameComplete = (xp: number, gameScore: number) => {
    setScore(prev => prev + gameScore)
    onExperience?.(xp)
    setCurrentGame('menu')
  }

  // Рендер меню игр
  const renderMenu = () => (
    <div className="space-y-4 sm:space-y-6 p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-purple-200 via-violet-300 to-fuchsia-200 dark:from-purple-800/40 dark:via-violet-800/40 dark:to-fuchsia-800/40">
      {/* Заголовок */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className={`font-bold mb-1 sm:mb-2 ${isKidMode ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
          {isKidMode ? (
            <>
              <span className="text-3xl sm:text-4xl mr-2">🎮</span>
              Игровой центр
              <span className="text-3xl sm:text-4xl ml-2">🎮</span>
            </>
          ) : (
            <>
              <Gamepad2 className="w-6 h-6 sm:w-8 sm:h-8 inline mr-2" />
              Образовательные игры
            </>
          )}
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          {isKidMode ? 'Выбери игру и получай звёзды! ⭐' : 'Учись играя! Выбери игру ниже'}
        </p>
      </motion.div>

      {/* Счёт */}
      {score > 0 && (
        <motion.div 
          className="flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <Card className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30 px-6 py-3">
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-yellow-400" />
              <span className="text-xl font-bold text-yellow-400">Всего очков: {score}</span>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Категории */}
      <motion.div 
        className="flex flex-wrap justify-center gap-1.5 sm:gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {categories.map((category) => {
          const isSelected = selectedCategory === category.id
          return (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all touch-manipulation ${
                isSelected
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-purple-800/40 text-purple-200 hover:bg-purple-700/50 border border-purple-500/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">{category.label}</span>
              <span className="sm:hidden">{category.label.split(' ')[0]}</span>
            </motion.button>
          )
        })}
      </motion.div>

      {/* Сетка игр */}
      <div className={`grid gap-2 sm:gap-4 ${isKidMode ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2 lg:grid-cols-3'}`}>
        {filteredGames.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card
              className={`cursor-pointer overflow-hidden group touch-manipulation bg-purple-900/40 backdrop-blur-sm ${
                isKidMode
                  ? 'border-2 border-purple-400/30 hover:border-purple-400/60'
                  : 'border-purple-500/20 hover:border-purple-500/40'
              } transition-all duration-300 hover:shadow-xl`}
              onClick={() => setCurrentGame(game.id as GameType)}
            >
              <div className={`h-16 sm:h-24 bg-gradient-to-r ${game.color} flex items-center justify-center relative overflow-hidden`}>
                {/* Анимированный фон */}
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                
                <motion.span 
                  className="text-3xl sm:text-5xl relative z-10"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {game.icon}
                </motion.span>
              </div>
              
              <CardContent className="p-2 sm:p-4">
                <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                  <game.categoryIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-300" />
                  <span className="text-[10px] sm:text-xs text-purple-300">{game.categoryLabel}</span>
                </div>
                <h3 className={`font-bold mb-0.5 sm:mb-1 text-sm sm:text-base text-white ${isKidMode ? 'sm:text-xl' : ''}`}>
                  {game.title}
                </h3>
                <p className="text-purple-200/70 text-xs sm:text-sm mb-1.5 sm:mb-3 line-clamp-1">{game.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                    <span className="text-[10px] sm:text-sm text-yellow-400">+{game.xp} XP</span>
                  </div>
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    <span className="text-[10px] sm:text-xs bg-purple-700/50 text-purple-200 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                      {game.age}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Мини-игры для малышей */}
      {isKidMode && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-2 border-pink-300/30">
            <CardHeader className="p-3 sm:p-6">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <span className="text-xl sm:text-2xl">🎈</span>
                Игры для малышей
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-2 sm:gap-4 p-3 sm:p-6 pt-0 sm:pt-0">
              <Button
                onClick={() => setCurrentGame('counting')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl py-6 sm:py-8 text-base sm:text-lg font-bold flex flex-col gap-1 sm:gap-2 h-auto touch-manipulation"
              >
                <span className="text-3xl sm:text-4xl">🔢</span>
                Учим цифры
              </Button>
              <Button
                onClick={() => setCurrentGame('alphabet')}
                className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl sm:rounded-2xl py-6 sm:py-8 text-base sm:text-lg font-bold flex flex-col gap-1 sm:gap-2 h-auto touch-manipulation"
              >
                <span className="text-3xl sm:text-4xl">🔤</span>
                Учим буквы
              </Button>
              <Button
                onClick={() => setCurrentGame('memory')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl sm:rounded-2xl py-6 sm:py-8 text-base sm:text-lg font-bold flex flex-col gap-1 sm:gap-2 h-auto touch-manipulation"
              >
                <span className="text-3xl sm:text-4xl">🃏</span>
                Найди пару
              </Button>
              <Button
                onClick={() => setCurrentGame('shapes')}
                className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl sm:rounded-2xl py-6 sm:py-8 text-base sm:text-lg font-bold flex flex-col gap-1 sm:gap-2 h-auto touch-manipulation"
              >
                <span className="text-3xl sm:text-4xl">🔷</span>
                Учим фигуры
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Новые игры - только для старших классов */}
      {!isKidMode && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-2 border-indigo-300/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                Новые игры
                <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 py-1 rounded-full ml-2">
                  NEW
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <NewGamesSelector
                onSelectWordBuilder={() => setCurrentGame('wordbuilder')}
                onSelectNumberSequence={() => setCurrentGame('numbersequence')}
                onSelectColorMatch={() => setCurrentGame('colormatch')}
                onSelectPictureQuiz={() => setCurrentGame('picturequiz')}
                onBack={() => {}}
              />
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )

  // Рендер конкретной игры
  const renderGame = () => {
    const gameConfig = games.find(g => g.id === currentGame)
    
    const GameHeader = () => (
      <motion.div 
        className="flex items-center justify-between mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Button
          variant="ghost"
          onClick={() => setCurrentGame('menu')}
          className={`${isKidMode ? 'text-lg' : ''}`}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Назад к играм
        </Button>
        
        {gameConfig && (
          <div className="flex items-center gap-2">
            <span className="text-2xl">{gameConfig.icon}</span>
            <span className={`font-bold ${isKidMode ? 'text-xl' : ''}`}>{gameConfig.title}</span>
          </div>
        )}
      </motion.div>
    )

    switch (currentGame) {
      case 'math':
        return (
          <div>
            <GameHeader />
            <MathGame 
              difficulty={selectedDifficulty}
              onComplete={(score, total) => {
                const xp = Math.round((score / total) * 50)
                handleGameComplete(xp, score * 10)
              }}
            />
          </div>
        )
      
      case 'reading':
        return (
          <div>
            <GameHeader />
            <ReadingGame 
              difficulty={selectedDifficulty}
              onComplete={(score, total) => {
                const xp = Math.round((score / total) * 40)
                handleGameComplete(xp, score * 10)
              }}
            />
          </div>
        )
      
      case 'memory':
        return (
          <MemoryGame 
            onBack={() => setCurrentGame('menu')}
            onComplete={(stars) => handleGameComplete(stars * 10, stars)}
          />
        )
      
      case 'counting':
        return (
          <CountingGame 
            onBack={() => setCurrentGame('menu')}
            onComplete={(stars) => handleGameComplete(stars * 10, stars)}
          />
        )
      
      case 'alphabet':
        return (
          <AlphabetGame 
            onBack={() => setCurrentGame('menu')}
            onComplete={(stars) => handleGameComplete(stars * 10, stars)}
          />
        )
      
      case 'shapes':
        return (
          <ShapeGame 
            onBack={() => setCurrentGame('menu')}
            onComplete={(stars) => handleGameComplete(stars * 10, stars)}
          />
        )
      
      case 'wordbuilder':
        return (
          <WordBuilder 
            onBack={() => setCurrentGame('menu')}
            onComplete={(stars, xp) => handleGameComplete(xp, stars * 10)}
          />
        )
      
      case 'numbersequence':
        return (
          <NumberSequence 
            onBack={() => setCurrentGame('menu')}
            onComplete={(stars, xp) => handleGameComplete(xp, stars * 10)}
          />
        )
      
      case 'colormatch':
        return (
          <ColorMatch 
            onBack={() => setCurrentGame('menu')}
            onComplete={(stars, xp) => handleGameComplete(xp, stars * 10)}
          />
        )
      
      case 'picturequiz':
        return (
          <PictureQuiz 
            onBack={() => setCurrentGame('menu')}
            onComplete={(stars, xp) => handleGameComplete(xp, stars * 10)}
          />
        )
      
      case 'multiplication':
        return (
          <MultiplicationTableGame 
            onBack={() => setCurrentGame('menu')}
            onComplete={(stars, xp) => handleGameComplete(xp, stars * 10)}
          />
        )
      
      case 'addition':
        return (
          <AdditionSubtractionGame 
            onBack={() => setCurrentGame('menu')}
            onComplete={(stars, xp) => handleGameComplete(xp, stars * 10)}
          />
        )
      
      case 'geography':
        return (
          <GeographyQuiz 
            onBack={() => setCurrentGame('menu')}
            onComplete={(stars, xp) => handleGameComplete(xp, stars * 10)}
          />
        )
      
      case 'science':
        return (
          <ScienceExperiments 
            onBack={() => setCurrentGame('menu')}
            onComplete={(stars, xp) => handleGameComplete(xp, stars * 10)}
          />
        )
      
      case 'spelling':
        return (
          <div>
            <GameHeader />
            <SpellingGame 
              gradeId={gradeId}
              onExperience={(xp) => handleGameComplete(xp, 0)}
            />
          </div>
        )
      
      case 'punctuation':
        return (
          <div>
            <GameHeader />
            <PunctuationGame 
              gradeId={gradeId}
              onExperience={(xp) => handleGameComplete(xp, 0)}
            />
          </div>
        )
      
      case 'history':
        return (
          <div>
            <GameHeader />
            <HistoryGame 
              gradeId={gradeId}
              onExperience={(xp) => handleGameComplete(xp, 0)}
            />
          </div>
        )
      
      case 'chemistry':
        return (
          <div>
            <GameHeader />
            <ChemistryGame 
              gradeId={gradeId}
              onExperience={(xp) => handleGameComplete(xp, 0)}
            />
          </div>
        )
      
      case 'english':
        return (
          <div>
            <GameHeader />
            <EnglishGame 
              gradeId={gradeId}
              onExperience={(xp) => handleGameComplete(xp, 0)}
            />
          </div>
        )
      
      case 'biology':
        return (
          <div>
            <GameHeader />
            <BiologyGame 
              gradeId={gradeId}
              onExperience={(xp) => handleGameComplete(xp, 0)}
            />
          </div>
        )
      
      default:
        return renderMenu()
    }
  }

  return (
    <div className="p-2 sm:p-4 rounded-2xl bg-gradient-to-br from-purple-200 via-violet-300 to-fuchsia-200 dark:from-purple-800/40 dark:via-violet-800/40 dark:to-fuchsia-800/40 min-h-[60vh]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentGame}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentGame === 'menu' ? renderMenu() : renderGame()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
