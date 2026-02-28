'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Gamepad2, Calculator, BookOpen, Puzzle, Sparkles,
  ArrowLeft, Star, Heart, Trophy, Zap
} from 'lucide-react'
import MathGame from './MathGame'
import ReadingGame from './ReadingGame'
import { CountingGame, AlphabetGame, MemoryGame, ShapeGame } from './KidMiniGames'

interface GamesTabProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

type GameType = 'menu' | 'math' | 'reading' | 'memory' | 'counting' | 'alphabet' | 'shapes'

// Конфигурация игр
const games = [
  {
    id: 'math',
    title: 'Математика',
    description: 'Решай примеры и зарабатывай звёзды!',
    icon: '🧮',
    color: 'from-blue-400 to-cyan-500',
    difficulty: ['Лёгкий', 'Средний', 'Сложный'],
    age: '6+',
    xp: 50
  },
  {
    id: 'reading',
    title: 'Чтение',
    description: 'Найди правильную букву!',
    icon: '📖',
    color: 'from-pink-400 to-rose-500',
    difficulty: ['Лёгкий', 'Средний', 'Сложный'],
    age: '5+',
    xp: 40
  },
  {
    id: 'memory',
    title: 'Память',
    description: 'Найди пары одинаковых карточек!',
    icon: '🧠',
    color: 'from-purple-400 to-violet-500',
    difficulty: ['3x4', '4x4', '4x5'],
    age: '4+',
    xp: 30
  },
  {
    id: 'counting',
    title: 'Счёт',
    description: 'Посчитай предметы на картинке!',
    icon: '🔢',
    color: 'from-green-400 to-emerald-500',
    difficulty: ['До 5', 'До 10', 'До 20'],
    age: '4+',
    xp: 35
  },
  {
    id: 'alphabet',
    title: 'Алфавит',
    description: 'Изучи буквы русского алфавита!',
    icon: '🔤',
    color: 'from-yellow-400 to-orange-500',
    difficulty: ['Гласные', 'Согласные', 'Весь'],
    age: '4+',
    xp: 25
  },
  {
    id: 'shapes',
    title: 'Фигуры',
    description: 'Узнай геометрические фигуры!',
    icon: '🔷',
    color: 'from-teal-400 to-cyan-500',
    difficulty: ['Простые', 'Сложные', '3D'],
    age: '4+',
    xp: 30
  }
]

export default function GamesTab({ gradeId = 0, onExperience }: GamesTabProps) {
  const [currentGame, setCurrentGame] = useState<GameType>('menu')
  const [selectedDifficulty, setSelectedDifficulty] = useState(0)
  const [score, setScore] = useState(0)
  
  const isKidMode = gradeId <= 2

  // Обработчик завершения игры
  const handleGameComplete = (xp: number, gameScore: number) => {
    setScore(prev => prev + gameScore)
    onExperience?.(xp)
    setCurrentGame('menu')
  }

  // Рендер меню игр
  const renderMenu = () => (
    <div className="space-y-6">
      {/* Заголовок */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className={`font-bold mb-2 ${isKidMode ? 'text-3xl' : 'text-2xl'}`}>
          {isKidMode ? (
            <>
              <span className="text-4xl mr-2">🎮</span>
              Игровой центр
              <span className="text-4xl ml-2">🎮</span>
            </>
          ) : (
            <>
              <Gamepad2 className="w-8 h-8 inline mr-2" />
              Образовательные игры
            </>
          )}
        </h2>
        <p className="text-gray-400">
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

      {/* Сетка игр */}
      <div className={`grid gap-4 ${isKidMode ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2 lg:grid-cols-3'}`}>
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card 
              className={`cursor-pointer overflow-hidden group ${
                isKidMode 
                  ? 'border-2 border-white/20 hover:border-white/50' 
                  : 'border-white/10 hover:border-white/30'
              } transition-all duration-300 hover:shadow-xl`}
              onClick={() => setCurrentGame(game.id as GameType)}
            >
              <div className={`h-24 bg-gradient-to-r ${game.color} flex items-center justify-center relative overflow-hidden`}>
                {/* Анимированный фон */}
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                
                <motion.span 
                  className="text-5xl relative z-10"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {game.icon}
                </motion.span>
              </div>
              
              <CardContent className="p-4">
                <h3 className={`font-bold mb-1 ${isKidMode ? 'text-xl' : 'text-lg'}`}>
                  {game.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{game.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-yellow-400">+{game.xp} XP</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
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
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎈</span>
                Игры для малышей
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <Button
                onClick={() => setCurrentGame('counting')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl py-8 text-lg font-bold flex flex-col gap-2"
              >
                <span className="text-4xl">🔢</span>
                Учим цифры
              </Button>
              <Button
                onClick={() => setCurrentGame('alphabet')}
                className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl py-8 text-lg font-bold flex flex-col gap-2"
              >
                <span className="text-4xl">🔤</span>
                Учим буквы
              </Button>
              <Button
                onClick={() => setCurrentGame('memory')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl py-8 text-lg font-bold flex flex-col gap-2"
              >
                <span className="text-4xl">🃏</span>
                Найди пару
              </Button>
              <Button
                onClick={() => setCurrentGame('shapes')}
                className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl py-8 text-lg font-bold flex flex-col gap-2"
              >
                <span className="text-4xl">🔷</span>
                Учим фигуры
              </Button>
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
      
      default:
        return renderMenu()
    }
  }

  return (
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
  )
}
