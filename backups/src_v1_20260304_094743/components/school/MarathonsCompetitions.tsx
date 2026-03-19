'use client'

import { useState, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  Trophy, Users, Clock, Flame, Star, Crown, Target, 
  ChevronRight, Play, CheckCircle, Lock, Zap, Medal
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

// Типы
interface MarathonChallenge {
  id: string
  title: string
  description: string
  type: 'daily' | 'weekly' | 'monthly' | 'special'
  subject?: string
  icon: string
  startDate: string
  endDate: string
  goal: number
  reward: {
    xp: number
    badge?: string
  }
  participants: number
  progress: number
  isJoined: boolean
  isCompleted: boolean
}

interface Competition {
  id: string
  title: string
  description: string
  type: 'duel' | 'tournament' | 'team'
  subject: string
  icon: string
  startTime: string
  duration: number // minutes
  participants: {
    id: string
    name: string
    avatar: string
    score: number
  }[]
  maxParticipants: number
  entryFee?: number
  rewards: {
    first: number
    second: number
    third: number
  }
  status: 'upcoming' | 'live' | 'finished'
  isRegistered: boolean
}

// Мок данные
const mockMarathons: MarathonChallenge[] = [
  {
    id: 'm1',
    title: 'Марафон математики',
    description: 'Реши 50 задач по математике за неделю',
    type: 'weekly',
    subject: 'Математика',
    icon: '🔢',
    startDate: '2024-01-15',
    endDate: '2024-01-22',
    goal: 50,
    reward: { xp: 500, badge: '🏆 Математический марафонец' },
    participants: 234,
    progress: 25,
    isJoined: true,
    isCompleted: false
  },
  {
    id: 'm2',
    title: 'Неделя русского языка',
    description: 'Изучи 20 правил русского языка',
    type: 'weekly',
    subject: 'Русский язык',
    icon: '📖',
    startDate: '2024-01-15',
    endDate: '2024-01-22',
    goal: 20,
    reward: { xp: 400 },
    participants: 189,
    progress: 0,
    isJoined: false,
    isCompleted: false
  },
  {
    id: 'm3',
    title: 'Ежедневный челлендж',
    description: 'Пройди 3 теста сегодня',
    type: 'daily',
    icon: '⚡',
    startDate: '2024-01-18',
    endDate: '2024-01-18',
    goal: 3,
    reward: { xp: 100, badge: '⭐ Достигатор' },
    participants: 567,
    progress: 1,
    isJoined: true,
    isCompleted: false
  },
  {
    id: 'm4',
    title: 'Месяц знаний',
    description: 'Занимайся 30 дней подряд',
    type: 'monthly',
    icon: '🔥',
    startDate: '2024-01-01',
    endDate: '2024-01-31',
    goal: 30,
    reward: { xp: 2000, badge: '👑 Легенда' },
    participants: 1023,
    progress: 18,
    isJoined: true,
    isCompleted: false
  }
]

const mockCompetitions: Competition[] = [
  {
    id: 'c1',
    title: 'Кубок по математике',
    description: 'Турнир по решению математических задач',
    type: 'tournament',
    subject: 'Математика',
    icon: '🏆',
    startTime: '2024-01-20T15:00:00',
    duration: 30,
    participants: [
      { id: '1', name: 'Алексей', avatar: '🧑‍🎓', score: 0 },
      { id: '2', name: 'Мария', avatar: '👩‍🎓', score: 0 },
      { id: '3', name: 'Дмитрий', avatar: '🧑‍💻', score: 0 }
    ],
    maxParticipants: 16,
    rewards: { first: 500, second: 250, third: 100 },
    status: 'upcoming',
    isRegistered: false
  },
  {
    id: 'c2',
    title: 'Дуэль: Русский язык',
    description: '1 на 1 соревнование по русскому языку',
    type: 'duel',
    subject: 'Русский язык',
    icon: '⚔️',
    startTime: '2024-01-18T16:00:00',
    duration: 15,
    participants: [
      { id: '1', name: 'Ты', avatar: '😊', score: 8 },
      { id: '2', name: 'Оппонент', avatar: '🤔', score: 6 }
    ],
    maxParticipants: 2,
    rewards: { first: 150, second: 50, third: 0 },
    status: 'live',
    isRegistered: true
  },
  {
    id: 'c3',
    title: 'Командная битва',
    description: 'Соревнование команд 3 на 3',
    type: 'team',
    subject: 'Все предметы',
    icon: '👥',
    startTime: '2024-01-19T14:00:00',
    duration: 45,
    participants: [],
    maxParticipants: 6,
    rewards: { first: 800, second: 400, third: 200 },
    status: 'upcoming',
    isRegistered: false
  }
]

const typeColors = {
  daily: 'from-yellow-500 to-orange-500',
  weekly: 'from-blue-500 to-cyan-500',
  monthly: 'from-purple-500 to-pink-500',
  special: 'from-amber-500 to-red-500'
}

const typeLabels = {
  daily: 'Ежедневный',
  weekly: 'Недельный',
  monthly: 'Месячный',
  special: 'Особый'
}

export default function MarathonsCompetitions() {
  const [activeTab, setActiveTab] = useState<'marathons' | 'competitions'>('marathons')
  const [marathons, setMarathons] = useState(mockMarathons)
  const [competitions, setCompetitions] = useState(mockCompetitions)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const { playClick, playSuccess } = useSound()

  // Присоединиться к марафону
  const joinMarathon = useCallback((id: string) => {
    playClick?.()
    setMarathons(prev => prev.map(m => 
      m.id === id ? { ...m, isJoined: true, participants: m.participants + 1 } : m
    ))
    playSuccess?.()
  }, [playClick, playSuccess])

  // Регистрация на соревнование
  const registerCompetition = useCallback((id: string) => {
    playClick?.()
    setCompetitions(prev => prev.map(c => 
      c.id === id ? { ...c, isRegistered: true } : c
    ))
    playSuccess?.()
  }, [playClick, playSuccess])

  // Получить время до начала
  const getTimeUntil = useCallback((dateStr: string) => {
    const diff = new Date(dateStr).getTime() - Date.now()
    if (diff <= 0) return 'Уже началось!'
    
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    
    if (hours > 24) {
      const days = Math.floor(hours / 24)
      return `${days} дн.`
    }
    return `${hours}ч ${minutes}мин`
  }, [])

  // Статистика
  const stats = useMemo(() => ({
    activeMarathons: marathons.filter(m => m.isJoined && !m.isCompleted).length,
    completedMarathons: marathons.filter(m => m.isCompleted).length,
    upcomingCompetitions: competitions.filter(c => c.status === 'upcoming' && c.isRegistered).length
  }), [marathons, competitions])

  return (
    <div className="space-y-6">
      {/* Заголовок */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
          <Flame className="w-7 h-7 text-orange-400" />
          Марафоны и Соревнования
        </h2>
        <p className="text-gray-400">Участвуй, соревнуйся, побеждай!</p>
      </motion.div>

      {/* Статистика */}
      <div className="grid grid-cols-3 gap-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30">
            <CardContent className="p-3 text-center">
              <Flame className="w-6 h-6 text-orange-400 mx-auto mb-1" />
              <p className="text-2xl font-bold text-white">{stats.activeMarathons}</p>
              <p className="text-xs text-gray-400">Активных</p>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30">
            <CardContent className="p-3 text-center">
              <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-1" />
              <p className="text-2xl font-bold text-white">{stats.completedMarathons}</p>
              <p className="text-xs text-gray-400">Завершено</p>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30">
            <CardContent className="p-3 text-center">
              <Trophy className="w-6 h-6 text-blue-400 mx-auto mb-1" />
              <p className="text-2xl font-bold text-white">{stats.upcomingCompetitions}</p>
              <p className="text-xs text-gray-400">Соревнований</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Табы */}
      <div className="flex gap-2 justify-center">
        <Button
          variant={activeTab === 'marathons' ? 'default' : 'ghost'}
          onClick={() => { setActiveTab('marathons'); playClick?.() }}
          className={activeTab === 'marathons' ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'text-white'}
        >
          <Target className="w-4 h-4 mr-2" />
          Марафоны
        </Button>
        <Button
          variant={activeTab === 'competitions' ? 'default' : 'ghost'}
          onClick={() => { setActiveTab('competitions'); playClick?.() }}
          className={activeTab === 'competitions' ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'text-white'}
        >
          <Trophy className="w-4 h-4 mr-2" />
          Соревнования
        </Button>
      </div>

      {/* Контент */}
      <AnimatePresence mode="wait">
        {activeTab === 'marathons' ? (
          <motion.div
            key="marathons"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            {marathons.map((marathon, index) => (
              <motion.div
                key={marathon.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`overflow-hidden ${
                  marathon.isJoined 
                    ? 'bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/30'
                    : 'bg-white/5 border-white/10'
                }`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      {/* Иконка */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${typeColors[marathon.type]} flex items-center justify-center text-2xl`}>
                        {marathon.icon}
                      </div>
                      
                      {/* Контент */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-300">
                            {typeLabels[marathon.type]}
                          </span>
                          {marathon.subject && (
                            <span className="text-xs text-gray-400">{marathon.subject}</span>
                          )}
                        </div>
                        
                        <h3 className="font-bold text-white mb-1">{marathon.title}</h3>
                        <p className="text-sm text-gray-400 mb-3">{marathon.description}</p>
                        
                        {/* Прогресс */}
                        {marathon.isJoined && (
                          <div className="mb-3">
                            <div className="flex justify-between text-xs text-gray-400 mb-1">
                              <span>Прогресс</span>
                              <span>{marathon.progress}/{marathon.goal}</span>
                            </div>
                            <Progress 
                              value={(marathon.progress / marathon.goal) * 100} 
                              className="h-2"
                            />
                          </div>
                        )}
                        
                        {/* Награда и участники */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 text-yellow-400">
                              <Star className="w-4 h-4" />
                              <span className="text-sm">+{marathon.reward.xp} XP</span>
                            </div>
                            {marathon.reward.badge && (
                              <span className="text-sm">{marathon.reward.badge}</span>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-1 text-gray-400">
                            <Users className="w-4 h-4" />
                            <span className="text-sm">{marathon.participants}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Кнопка */}
                      <div>
                        {marathon.isCompleted ? (
                          <CheckCircle className="w-8 h-8 text-green-400" />
                        ) : marathon.isJoined ? (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-orange-400"
                            onClick={() => setSelectedItem(marathon.id)}
                          >
                            <ChevronRight className="w-5 h-5" />
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            onClick={() => joinMarathon(marathon.id)}
                            className="bg-gradient-to-r from-orange-500 to-red-500"
                          >
                            <Play className="w-4 h-4 mr-1" />
                            Участвовать
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="competitions"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            {competitions.map((competition, index) => (
              <motion.div
                key={competition.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`overflow-hidden ${
                  competition.status === 'live' 
                    ? 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30'
                    : competition.isRegistered
                      ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30'
                      : 'bg-white/5 border-white/10'
                }`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      {/* Иконка */}
                      <div className={`w-14 h-14 rounded-xl ${
                        competition.status === 'live' 
                          ? 'bg-gradient-to-br from-green-500 to-emerald-500 animate-pulse'
                          : 'bg-gradient-to-br from-blue-500 to-purple-500'
                      } flex items-center justify-center text-2xl`}>
                        {competition.icon}
                      </div>
                      
                      {/* Контент */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {competition.status === 'live' && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-green-500 text-white animate-pulse">
                              🔴 LIVE
                            </span>
                          )}
                          {competition.status === 'upcoming' && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/30 text-blue-300">
                              Скоро
                            </span>
                          )}
                          {competition.status === 'finished' && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-500/30 text-gray-300">
                              Завершено
                            </span>
                          )}
                          <span className="text-xs text-gray-400">
                            {competition.type === 'duel' ? '⚔️ Дуэль' : 
                             competition.type === 'tournament' ? '🏆 Турнир' : '👥 Команда'}
                          </span>
                        </div>
                        
                        <h3 className="font-bold text-white mb-1">{competition.title}</h3>
                        <p className="text-sm text-gray-400 mb-2">{competition.description}</p>
                        
                        {/* Время и участники */}
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1 text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span>
                              {competition.status === 'live' 
                                ? 'Идёт сейчас' 
                                : getTimeUntil(competition.startTime)}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-400">
                            <Users className="w-4 h-4" />
                            <span>{competition.participants.length}/{competition.maxParticipants}</span>
                          </div>
                        </div>
                        
                        {/* Участники (если duel и live) */}
                        {competition.status === 'live' && competition.type === 'duel' && (
                          <div className="mt-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{competition.participants[0]?.avatar}</span>
                              <span className="text-white font-bold">{competition.participants[0]?.score}</span>
                            </div>
                            <span className="text-gray-400">VS</span>
                            <div className="flex items-center gap-2">
                              <span className="text-white font-bold">{competition.participants[1]?.score}</span>
                              <span className="text-lg">{competition.participants[1]?.avatar}</span>
                            </div>
                          </div>
                        )}
                        
                        {/* Награды */}
                        <div className="mt-2 flex items-center gap-2">
                          <Crown className="w-4 h-4 text-yellow-400" />
                          <span className="text-xs text-gray-400">
                            1-е: {competition.rewards.first} XP
                          </span>
                          <Medal className="w-4 h-4 text-gray-400" />
                          <span className="text-xs text-gray-400">
                            2-е: {competition.rewards.second} XP
                          </span>
                        </div>
                      </div>
                      
                      {/* Кнопка */}
                      <div>
                        {competition.status === 'live' ? (
                          competition.isRegistered ? (
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse"
                            >
                              <Zap className="w-4 h-4 mr-1" />
                              Играть!
                            </Button>
                          ) : (
                            <Lock className="w-6 h-6 text-gray-500" />
                          )
                        ) : competition.isRegistered ? (
                          <CheckCircle className="w-6 h-6 text-blue-400" />
                        ) : (
                          <Button
                            size="sm"
                            onClick={() => registerCompetition(competition.id)}
                            className="bg-gradient-to-r from-blue-500 to-purple-500"
                          >
                            Регистрация
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
