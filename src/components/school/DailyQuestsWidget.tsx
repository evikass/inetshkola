'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Gift, Star, Zap, Target, CheckCircle, Clock, 
  Flame, Trophy, Sparkles, ChevronRight, Lock
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

interface DailyQuest {
  id: string
  title: string
  description: string
  type: 'topics' | 'quizzes' | 'games' | 'streak' | 'time' | 'perfect'
  target: number
  progress: number
  reward: number
  icon: string
  completed: boolean
  claimed: boolean
  difficulty: 'easy' | 'medium' | 'hard'
}

interface Props {
  completedTopics: number
  quizzesCompleted: number
  gamesPlayed: number
  studyTime: number
  perfectQuizzes: number
  streak: number
  onClaim?: (xp: number) => void
  onNavigate?: (tab: string) => void
}

// Генерация квестов на день на основе даты
const generateDailyQuests = (dateSeed: number): DailyQuest[] => {
  const baseQuests: Omit<DailyQuest, 'progress' | 'completed' | 'claimed'>[] = [
    {
      id: 'quest-1',
      title: 'Первые шаги',
      description: 'Изучи 1 тему',
      type: 'topics',
      target: 1,
      reward: 20,
      icon: '📚',
      difficulty: 'easy'
    },
    {
      id: 'quest-2', 
      title: 'Любознательный ученик',
      description: 'Изучи 3 темы',
      type: 'topics',
      target: 3,
      reward: 50,
      icon: '📖',
      difficulty: 'medium'
    },
    {
      id: 'quest-3',
      title: 'Мастер тестов',
      description: 'Пройди 2 теста',
      type: 'quizzes',
      target: 2,
      reward: 30,
      icon: '✅',
      difficulty: 'easy'
    },
    {
      id: 'quest-4',
      title: 'Идеальный счёт',
      description: 'Пройди тест без ошибок',
      type: 'perfect',
      target: 1,
      reward: 40,
      icon: '⭐',
      difficulty: 'medium'
    },
    {
      id: 'quest-5',
      title: 'Игроман',
      description: 'Сыграй в 3 игры',
      type: 'games',
      target: 3,
      reward: 25,
      icon: '🎮',
      difficulty: 'easy'
    },
    {
      id: 'quest-6',
      title: 'Усидчивый ученик',
      description: 'Учись 30 минут',
      type: 'time',
      target: 30,
      reward: 35,
      icon: '⏱️',
      difficulty: 'medium'
    },
    {
      id: 'quest-7',
      title: 'День за днём',
      description: 'Поддержи серию посещений',
      type: 'streak',
      target: 1,
      reward: 15,
      icon: '🔥',
      difficulty: 'easy'
    },
    {
      id: 'quest-8',
      title: 'Знаток',
      description: 'Пройди 5 тестов',
      type: 'quizzes',
      target: 5,
      reward: 75,
      icon: '🏆',
      difficulty: 'hard'
    },
    {
      id: 'quest-9',
      title: 'Марафонец',
      description: 'Учись 1 час',
      type: 'time',
      target: 60,
      reward: 60,
      icon: '⏰',
      difficulty: 'hard'
    },
    {
      id: 'quest-10',
      title: 'Чемпион',
      description: 'Сыграй в 5 игр',
      type: 'games',
      target: 5,
      reward: 45,
      icon: '🎯',
      difficulty: 'medium'
    }
  ]
  
  // Выбираем 5 случайных квестов на основе даты
  const shuffled = [...baseQuests].sort((a, b) => {
    const hashA = (dateSeed + a.id.charCodeAt(5)) % 100
    const hashB = (dateSeed + b.id.charCodeAt(5)) % 100
    return hashA - hashB
  })
  
  return shuffled.slice(0, 5).map(quest => ({
    ...quest,
    progress: 0,
    completed: false,
    claimed: false
  }))
}

export default function DailyQuestsWidget({
  completedTopics,
  quizzesCompleted,
  gamesPlayed,
  studyTime,
  perfectQuizzes,
  streak,
  onClaim,
  onNavigate
}: Props) {
  const [quests, setQuests] = useState<DailyQuest[]>([])
  const [lastResetDate, setLastResetDate] = useState('')
  const [showClaimed, setShowClaimed] = useState(false)
  const [claimedQuest, setClaimedQuest] = useState<DailyQuest | null>(null)
  
  // Получаем текущую дату как число для сидинга
  const today = new Date().toISOString().split('T')[0]
  const dateSeed = new Date().getDate() + new Date().getMonth() * 31
  
  // Загрузка из localStorage
  useEffect(() => {
    const saved = localStorage.getItem('school-daily-quests')
    const savedDate = localStorage.getItem('school-quests-date')
    
    if (saved && savedDate === today) {
      const parsed = JSON.parse(saved)
      setQuests(parsed)
      setLastResetDate(savedDate || today)
    } else {
      // Новый день - генерируем новые квесты
      const newQuests = generateDailyQuests(dateSeed)
      setQuests(newQuests)
      setLastResetDate(today)
      localStorage.setItem('school-daily-quests', JSON.stringify(newQuests))
      localStorage.setItem('school-quests-date', today)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [today])
  
  // Обновление прогресса
  useEffect(() => {
    if (quests.length === 0) return
    
    setQuests(prev => {
      const updated = prev.map(quest => {
        let progress = 0
        
        switch (quest.type) {
          case 'topics':
            progress = completedTopics
            break
          case 'quizzes':
            progress = quizzesCompleted
            break
          case 'games':
            progress = gamesPlayed
            break
          case 'time':
            progress = studyTime
            break
          case 'perfect':
            progress = perfectQuizzes
            break
          case 'streak':
            progress = streak > 0 ? 1 : 0
            break
        }
        
        const completed = progress >= quest.target
        
        return {
          ...quest,
          progress: Math.min(progress, quest.target),
          completed
        }
      })
      
      localStorage.setItem('school-daily-quests', JSON.stringify(updated))
      return updated
    })
  }, [completedTopics, quizzesCompleted, gamesPlayed, studyTime, perfectQuizzes, streak])
  
  const handleClaim = (quest: DailyQuest) => {
    if (quest.claimed || !quest.completed) return
    
    setQuests(prev => prev.map(q => 
      q.id === quest.id ? { ...q, claimed: true } : q
    ))
    
    setClaimedQuest(quest)
    setShowClaimed(true)
    onClaim?.(quest.reward)
    
    setTimeout(() => setShowClaimed(false), 2000)
  }
  
  const completedCount = quests.filter(q => q.completed).length
  const totalReward = quests.filter(q => q.completed && q.claimed).reduce((sum, q) => sum + q.reward, 0)
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-400'
      case 'medium': return 'text-yellow-400'
      case 'hard': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }
  
  return (
    <Card className="p-4 bg-gradient-to-br from-indigo-900/80 to-purple-900/80 border-indigo-500/30 backdrop-blur">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-400" />
            <h3 className="font-bold text-white">Ежедневные квесты</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-indigo-300">{completedCount}/5</span>
            <Progress value={(completedCount / 5) * 100} className="w-16 h-2" />
          </div>
        </div>
        
        {/* Quests list */}
        <div className="space-y-2">
          {quests.map((quest, index) => (
            <motion.div
              key={quest.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-3 rounded-xl border transition-all ${
                quest.claimed 
                  ? 'bg-green-500/10 border-green-500/20 opacity-60'
                  : quest.completed 
                    ? 'bg-yellow-500/10 border-yellow-500/30'
                    : 'bg-white/5 border-white/10'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{quest.icon}</span>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-white text-sm truncate">{quest.title}</h4>
                    <span className={`text-xs ${getDifficultyColor(quest.difficulty)}`}>
                      {quest.difficulty === 'easy' ? '●' : quest.difficulty === 'medium' ? '●●' : '●●●'}
                    </span>
                  </div>
                  <p className="text-white/50 text-xs">{quest.description}</p>
                  
                  {/* Progress bar */}
                  <div className="flex items-center gap-2 mt-1">
                    <Progress 
                      value={(quest.progress / quest.target) * 100} 
                      className="h-1.5 flex-1"
                    />
                    <span className="text-xs text-white/60">
                      {quest.progress}/{quest.target}
                    </span>
                  </div>
                </div>
                
                {/* Reward / Claim button */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 font-bold text-sm">{quest.reward}</span>
                  </div>
                  
                  {quest.claimed ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : quest.completed ? (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleClaim(quest)}
                      className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-black"
                    >
                      Забрать
                    </motion.button>
                  ) : (
                    <Lock className="w-4 h-4 text-white/30" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Total stats */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span>Получено: {totalReward} XP</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigate?.('learn')}
            className="text-indigo-300 hover:text-indigo-200 hover:bg-white/5"
          >
            Учиться <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        
        {/* Claim celebration */}
        <AnimatePresence>
          {showClaimed && claimedQuest && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: -50 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
            >
              <Card className="p-6 bg-gradient-to-br from-yellow-500 to-orange-500 border-0 text-center">
                <motion.div
                  animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Sparkles className="w-12 h-12 text-white mx-auto mb-3" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">Квест выполнен!</h3>
                <p className="text-white/80 mb-2">{claimedQuest.title}</p>
                <div className="flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-200" />
                  <span className="text-2xl font-bold text-white">+{claimedQuest.reward} XP</span>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  )
}
