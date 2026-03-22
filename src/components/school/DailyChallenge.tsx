'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import {
  Zap, Clock, ChevronRight, Check, Star, Gift,
  Target, Brain, BookOpen, Calculator, Trophy, Sparkles
} from 'lucide-react'

// Типы ежедневных вызовов
interface ChallengeType {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  xpReward: number
  target: number
  type: 'topics' | 'quizzes' | 'games' | 'time' | 'streak' | 'perfect'
  category: 'learn' | 'games' | 'practice'
}

// База ежедневных вызовов
const CHALLENGES: ChallengeType[] = [
  {
    id: 'complete-topics-3',
    title: 'Изучи 3 темы',
    description: 'Открой и изучи три новых урока',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'from-blue-400 to-cyan-500',
    xpReward: 75,
    target: 3,
    type: 'topics',
    category: 'learn'
  },
  {
    id: 'pass-quizzes-2',
    title: 'Пройди 2 теста',
    description: 'Заверши любые два теста по предметам',
    icon: <Target className="w-5 h-5" />,
    color: 'from-purple-400 to-pink-500',
    xpReward: 60,
    target: 2,
    type: 'quizzes',
    category: 'learn'
  },
  {
    id: 'play-games-3',
    title: 'Сыграй 3 игры',
    description: 'Заверши три образовательные игры',
    icon: <Sparkles className="w-5 h-5" />,
    color: 'from-green-400 to-emerald-500',
    xpReward: 50,
    target: 3,
    type: 'games',
    category: 'games'
  },
  {
    id: 'perfect-quiz',
    title: 'Идеальный тест',
    description: 'Пройди тест без ошибок',
    icon: <Star className="w-5 h-5" />,
    color: 'from-yellow-400 to-orange-500',
    xpReward: 100,
    target: 1,
    type: 'perfect',
    category: 'practice'
  },
  {
    id: 'study-time-30',
    title: '30 минут учёбы',
    description: 'Проводи за занятиями 30 минут',
    icon: <Clock className="w-5 h-5" />,
    color: 'from-indigo-400 to-purple-500',
    xpReward: 80,
    target: 30,
    type: 'time',
    category: 'learn'
  },
  {
    id: 'math-practice',
    title: 'Математический марафон',
    description: 'Реши 10 примеров в игре "Математика"',
    icon: <Calculator className="w-5 h-5" />,
    color: 'from-cyan-400 to-blue-500',
    xpReward: 90,
    target: 10,
    type: 'games',
    category: 'games'
  },
  {
    id: 'complete-topics-5',
    title: 'Марафон знаний',
    description: 'Изучи 5 тем за день',
    icon: <Brain className="w-5 h-5" />,
    color: 'from-rose-400 to-pink-500',
    xpReward: 120,
    target: 5,
    type: 'topics',
    category: 'learn'
  },
  {
    id: 'play-games-5',
    title: 'Игровой чемпион',
    description: 'Сыграй 5 разных игр',
    icon: <Trophy className="w-5 h-5" />,
    color: 'from-amber-400 to-yellow-500',
    xpReward: 100,
    target: 5,
    type: 'games',
    category: 'games'
  }
]

interface DailyChallengeProps {
  completedTopics: number
  quizzesCompleted: number
  gamesPlayed: number
  studyTime: number
  perfectQuizzes: number
  onNavigate?: (tab: string) => void
  onClaim?: (xp: number) => void
}

export default function DailyChallenge({
  completedTopics,
  quizzesCompleted,
  gamesPlayed,
  studyTime,
  perfectQuizzes,
  onNavigate,
  onClaim
}: DailyChallengeProps) {
  const [claimed, setClaimed] = useState(false)

  // Определяем вызов дня на основе даты
  const todayChallenge = useMemo(() => {
    const today = new Date()
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24))
    return CHALLENGES[dayOfYear % CHALLENGES.length]
  }, [])

  // Вычисляем прогресс
  const progress = useMemo(() => {
    switch (todayChallenge.type) {
      case 'topics':
        return Math.min(completedTopics, todayChallenge.target)
      case 'quizzes':
        return Math.min(quizzesCompleted, todayChallenge.target)
      case 'games':
        return Math.min(gamesPlayed, todayChallenge.target)
      case 'time':
        return Math.min(studyTime, todayChallenge.target)
      case 'perfect':
        return Math.min(perfectQuizzes, todayChallenge.target)
      default:
        return 0
    }
  }, [todayChallenge, completedTopics, quizzesCompleted, gamesPlayed, studyTime, perfectQuizzes])

  const isCompleted = progress >= todayChallenge.target
  const progressPercent = (progress / todayChallenge.target) * 100

  // Загружаем состояние claim из localStorage
  useEffect(() => {
    const savedClaim = localStorage.getItem(`challenge-claimed-${todayChallenge.id}-${new Date().toISOString().split('T')[0]}`)
    if (savedClaim === 'true') {
      setClaimed(true)
    }
  }, [todayChallenge.id])

  // Обработчик получения награды
  const handleClaim = () => {
    if (isCompleted && !claimed) {
      setClaimed(true)
      localStorage.setItem(`challenge-claimed-${todayChallenge.id}-${new Date().toISOString().split('T')[0]}`, 'true')
      onClaim?.(todayChallenge.xpReward)
    }
  }

  // Навигация к нужному разделу
  const handleAction = () => {
    if (onNavigate) {
      if (todayChallenge.category === 'games') {
        onNavigate('games')
      } else {
        onNavigate('learn')
      }
    }
  }

  // Время до сброса
  const timeUntilReset = useMemo(() => {
    const now = new Date()
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)
    const diff = endOfDay.getTime() - now.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    return `${hours}ч ${minutes}мин`
  }, [])

  return (
    <Card className="relative overflow-hidden border-2 border-white/10 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm">
      {/* Фоновый градиент */}
      <div className={`absolute inset-0 bg-gradient-to-r ${todayChallenge.color} opacity-10`} />

      {/* Анимированные частицы при завершении */}
      <AnimatePresence>
        {isCompleted && !claimed && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                initial={{
                  x: '50%',
                  y: '50%',
                  scale: 0
                }}
                animate={{
                  x: `${20 + Math.random() * 60}%`,
                  y: `${20 + Math.random() * 60}%`,
                  scale: [0, 1.5, 0],
                  opacity: [1, 1, 0]
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <CardHeader className="pb-2 relative">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <motion.div
              className={`p-2 rounded-lg bg-gradient-to-r ${todayChallenge.color}`}
              animate={isCompleted ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5, repeat: isCompleted ? Infinity : 0, repeatDelay: 2 }}
            >
              {todayChallenge.icon}
            </motion.div>
            <span className="text-white">Вызов дня</span>
          </CardTitle>

          {/* Таймер */}
          <div className="flex items-center gap-1 text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full">
            <Clock className="w-3 h-3" />
            <span>{timeUntilReset}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 relative">
        {/* Название и описание */}
        <div>
          <h3 className={`font-bold text-xl bg-gradient-to-r ${todayChallenge.color} bg-clip-text text-transparent`}>
            {todayChallenge.title}
          </h3>
          <p className="text-gray-400 text-sm mt-1">{todayChallenge.description}</p>
        </div>

        {/* Прогресс бар */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Прогресс</span>
            <span className="font-medium text-white">
              {progress} / {todayChallenge.target}
            </span>
          </div>
          <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className={`absolute inset-y-0 left-0 bg-gradient-to-r ${todayChallenge.color} rounded-full`}
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
            {/* Блики на прогресс баре */}
            {progressPercent > 0 && (
              <motion.div
                className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '400%'] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
              />
            )}
          </div>
        </div>

        {/* Награда */}
        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-purple-400" />
            <span className="text-sm text-gray-300">Награда</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="font-bold text-yellow-400">+{todayChallenge.xpReward} XP</span>
          </div>
        </div>

        {/* Кнопка действия */}
        {claimed ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center justify-center gap-2 p-3 bg-green-500/20 rounded-lg border border-green-500/30"
          >
            <Check className="w-5 h-5 text-green-400" />
            <span className="font-medium text-green-400">Награда получена!</span>
          </motion.div>
        ) : isCompleted ? (
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={handleClaim}
              className={`w-full bg-gradient-to-r ${todayChallenge.color} hover:opacity-90 text-white font-bold py-6`}
            >
              <Gift className="w-5 h-5 mr-2" />
              Забрать награду
            </Button>
          </motion.div>
        ) : (
          <Button
            onClick={handleAction}
            variant="outline"
            className="w-full border-white/20 hover:bg-white/10 text-white"
          >
            {todayChallenge.category === 'games' ? 'Играть сейчас' : 'Начать учиться'}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

// Мини-версия для отображения в sidebar
export function DailyChallengeMini({
  completedTopics,
  quizzesCompleted,
  gamesPlayed,
  studyTime,
  perfectQuizzes
}: DailyChallengeProps) {
  // Определяем вызов дня на основе даты
  const todayChallenge = useMemo(() => {
    const today = new Date()
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24))
    return CHALLENGES[dayOfYear % CHALLENGES.length]
  }, [])

  // Вычисляем прогресс
  const progress = useMemo(() => {
    switch (todayChallenge.type) {
      case 'topics':
        return Math.min(completedTopics, todayChallenge.target)
      case 'quizzes':
        return Math.min(quizzesCompleted, todayChallenge.target)
      case 'games':
        return Math.min(gamesPlayed, todayChallenge.target)
      case 'time':
        return Math.min(studyTime, todayChallenge.target)
      case 'perfect':
        return Math.min(perfectQuizzes, todayChallenge.target)
      default:
        return 0
    }
  }, [todayChallenge, completedTopics, quizzesCompleted, gamesPlayed, studyTime, perfectQuizzes])

  const isCompleted = progress >= todayChallenge.target
  const progressPercent = (progress / todayChallenge.target) * 100

  return (
    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
      <div className="flex items-center gap-2 mb-2">
        <div className={`p-1.5 rounded bg-gradient-to-r ${todayChallenge.color}`}>
          {todayChallenge.icon}
        </div>
        <span className="text-sm font-medium text-white truncate">{todayChallenge.title}</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${todayChallenge.color} rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="text-xs text-gray-400">{progress}/{todayChallenge.target}</span>
      </div>

      {isCompleted && (
        <div className="mt-2 flex items-center gap-1 text-xs text-green-400">
          <Check className="w-3 h-3" />
          Выполнено!
        </div>
      )}
    </div>
  )
}

export { CHALLENGES }
