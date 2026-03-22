'use client'

import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Target, Trophy, Star, Zap, Check,
  Calendar, Clock, BookOpen, Gamepad2, Award, Gift
} from 'lucide-react'

// Типы
interface WeeklyGoal {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  iconName: string
  target: number
  progress: number
  xpReward: number
  type: 'topics' | 'quizzes' | 'games' | 'time' | 'streak' | 'perfect'
  category: 'learning' | 'practice' | 'fun'
  difficulty: 'easy' | 'medium' | 'hard'
  completed: boolean
}

interface WeeklyGoalsProps {
  completedTopics: number
  quizzesCompleted: number
  gamesPlayed: number
  studyTime: number
  perfectQuizzes: number
  streak: number
  onClaim?: (xp: number) => void
}

// Иконки
const getIcon = (name: string) => {
  const icons: Record<string, React.ReactNode> = {
    BookOpen: <BookOpen className="w-5 h-5" />,
    Target: <Target className="w-5 h-5" />,
    Star: <Star className="w-5 h-5" />,
    Clock: <Clock className="w-5 h-5" />,
    Gamepad2: <Gamepad2 className="w-5 h-5" />,
    Trophy: <Trophy className="w-5 h-5" />
  }
  return icons[name] || null
}

// Шаблоны целей
const GOALS_TEMPLATE = [
  { id: 'topics-5', title: 'Начинающий ученик', desc: 'Изучи 5 тем', icon: 'BookOpen', target: 5, xp: 100, type: 'topics', cat: 'learning', diff: 'easy' },
  { id: 'quizzes-3', title: 'Тестовый старт', desc: 'Пройди 3 теста', icon: 'Target', target: 3, xp: 80, type: 'quizzes', cat: 'learning', diff: 'easy' },
  { id: 'topics-10', title: 'Любознательный ум', desc: 'Изучи 10 тем', icon: 'BookOpen', target: 10, xp: 200, type: 'topics', cat: 'learning', diff: 'medium' },
  { id: 'quizzes-7', title: 'Мастер тестов', desc: 'Пройди 7 тестов', icon: 'Target', target: 7, xp: 180, type: 'quizzes', cat: 'learning', diff: 'medium' },
  { id: 'perfect-2', title: 'Идеальное начало', desc: '2 теста без ошибок', icon: 'Star', target: 2, xp: 150, type: 'perfect', cat: 'practice', diff: 'medium' },
  { id: 'time-60', title: 'Час знаний', desc: '60 минут учёбы', icon: 'Clock', target: 60, xp: 120, type: 'time', cat: 'practice', diff: 'easy' },
  { id: 'time-120', title: 'Двойной час', desc: '120 минут учёбы', icon: 'Clock', target: 120, xp: 250, type: 'time', cat: 'practice', diff: 'medium' },
  { id: 'games-5', title: 'Игрок выходного дня', desc: 'Сыграй 5 игр', icon: 'Gamepad2', target: 5, xp: 100, type: 'games', cat: 'fun', diff: 'easy' },
  { id: 'games-10', title: 'Игровой марафон', desc: 'Сыграй 10 игр', icon: 'Gamepad2', target: 10, xp: 200, type: 'games', cat: 'fun', diff: 'medium' }
]

const CAT_COLORS: Record<string, string> = {
  learning: 'from-blue-400 to-cyan-500',
  practice: 'from-purple-400 to-pink-500',
  fun: 'from-green-400 to-emerald-500'
}

const CAT_BG: Record<string, string> = {
  learning: 'bg-blue-500/20 border-blue-500/30',
  practice: 'bg-purple-500/20 border-purple-500/30',
  fun: 'bg-green-500/20 border-green-500/30'
}

const DIFF_COLORS: Record<string, string> = {
  easy: 'text-green-400',
  medium: 'text-yellow-400',
  hard: 'text-red-400'
}

export default function WeeklyGoals(props: WeeklyGoalsProps) {
  const [goals, setGoals] = useState<WeeklyGoal[]>([])
  const [claimed, setClaimed] = useState<string[]>([])
  const [daysLeft, setDaysLeft] = useState(7)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const now = new Date()
    const day = now.getDay()
    const diff = now.getDate() - day + (day === 0 ? -6 : 1)
    const monday = new Date(now.setDate(diff))
    const weekKey = monday.toISOString().split('T')[0]
    const seed = weekKey.split('-').reduce((a, v) => a + parseInt(v), 0)

    // Выбираем цели
    const selected = GOALS_TEMPLATE.slice(0, 6).map(g => ({
      id: g.id,
      title: g.title,
      description: g.desc,
      icon: getIcon(g.icon),
      iconName: g.icon,
      target: g.target,
      progress: 0,
      xpReward: g.xp,
      type: g.type as WeeklyGoal['type'],
      category: g.cat as WeeklyGoal['category'],
      difficulty: g.diff as WeeklyGoal['difficulty'],
      completed: false
    }))

    // Загружаем claimed из localStorage
    let savedClaimed: string[] = []
    try {
      const data = localStorage.getItem(`wg-claimed-${weekKey}`)
      if (data) savedClaimed = JSON.parse(data)
    } catch (e) { /* ignore */ }

    // Дни до конца недели
    const sunday = new Date(monday)
    sunday.setDate(monday.getDate() + 6)
    sunday.setHours(23, 59, 59, 999)
    const days = Math.ceil((sunday.getTime() - Date.now()) / 86400000)

    // Устанавливаем все стейты (используем batch для оптимизации)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setGoals(selected)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setClaimed(savedClaimed)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDaysLeft(days)
    setReady(true)
  }, [])

  // Вычисляем прогресс
  const goalsProgress = useMemo(() => goals.map(g => {
    let p = 0
    if (g.type === 'topics') p = props.completedTopics
    if (g.type === 'quizzes') p = props.quizzesCompleted
    if (g.type === 'games') p = props.gamesPlayed
    if (g.type === 'time') p = props.studyTime
    if (g.type === 'perfect') p = props.perfectQuizzes
    if (g.type === 'streak') p = props.streak
    return { ...g, progress: Math.min(p, g.target), completed: p >= g.target }
  }), [goals, props])

  const stats = useMemo(() => {
    const done = goalsProgress.filter(g => g.completed).length
    const total = goals.length
    const xp = goalsProgress.filter(g => g.completed && claimed.includes(g.id)).reduce((s, g) => s + g.xpReward, 0)
    return { done, total, xp, pct: total > 0 ? Math.round((done / total) * 100) : 0 }
  }, [goalsProgress, claimed, goals.length])

  const allDone = stats.done === stats.total && stats.total > 0
  const bonusGot = claimed.includes('bonus')

  const claim = (id: string, xp: number) => {
    if (claimed.includes(id)) return
    const next = [...claimed, id]
    setClaimed(next)
    try {
      const now = new Date()
      const day = now.getDay()
      const diff = now.getDate() - day + (day === 0 ? -6 : 1)
      const monday = new Date(now.setDate(diff))
      const weekKey = monday.toISOString().split('T')[0]
      localStorage.setItem(`wg-claimed-${weekKey}`, JSON.stringify(next))
    } catch (e) { /* ignore */ }
    props.onClaim?.(xp)
  }

  if (!ready) {
    return (
      <Card className="border-2 border-white/10 bg-gradient-to-br from-slate-800/80 to-slate-900/80">
        <CardContent className="p-6">
          <div className="animate-pulse space-y-3">
            <div className="h-5 bg-white/10 rounded w-1/3" />
            <div className="h-16 bg-white/10 rounded" />
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="relative overflow-hidden border-2 border-white/10 bg-gradient-to-br from-slate-800/80 to-slate-900/80">
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <motion.div
              className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Target className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-white">Цели недели</span>
          </CardTitle>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-sm">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span>{daysLeft === 0 ? 'Последний день!' : `${daysLeft} дн.`}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Прогресс */}
        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-400">Прогресс</span>
            <span className="font-bold text-purple-400">{stats.done}/{stats.total}</span>
          </div>
          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              animate={{ width: `${stats.pct}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>XP: {stats.xp}</span>
            {allDone && !bonusGot && <span className="text-yellow-400">🎉 Бонус!</span>}
          </div>
        </div>

        {/* Цели */}
        <div className="space-y-3">
          {goalsProgress.map((g, i) => {
            const isClaimed = claimed.includes(g.id)
            const canClaim = g.completed && !isClaimed
            const pct = g.target > 0 ? (g.progress / g.target) * 100 : 0

            return (
              <motion.div
                key={g.id}
                className={`p-3 rounded-lg border ${CAT_BG[g.category]}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${CAT_COLORS[g.category]}`}>{g.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-medium truncate">{g.title}</h4>
                      <span className={`text-xs ${DIFF_COLORS[g.difficulty]}`}>
                        {g.difficulty === 'easy' ? '⭐' : g.difficulty === 'medium' ? '⭐⭐' : '⭐⭐⭐'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{g.description}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div className={`h-full bg-gradient-to-r ${CAT_COLORS[g.category]} rounded-full`} animate={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-xs text-gray-400">{g.progress}/{g.target}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1 text-xs">
                      <Zap className="w-3 h-3 text-yellow-400" />
                      <span className="text-yellow-400">+{g.xpReward}</span>
                    </div>
                    {isClaimed ? (
                      <div className="flex items-center gap-1 text-xs text-green-400">
                        <Check className="w-3 h-3" /><span>Получено</span>
                      </div>
                    ) : canClaim ? (
                      <Button size="sm" onClick={() => claim(g.id, g.xpReward)} className="h-7 text-xs bg-gradient-to-r from-yellow-500 to-orange-500">
                        <Gift className="w-3 h-3 mr-1" />Забрать
                      </Button>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Бонус */}
        <AnimatePresence>
          {allDone && !bonusGot && (
            <motion.div
              className="p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-500/30"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div className="p-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                    <Award className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-yellow-400">Невероятная неделя!</h4>
                    <p className="text-xs text-gray-300">Бонус: +500 XP</p>
                  </div>
                </div>
                <Button onClick={() => claim('bonus', 500)} className="bg-gradient-to-r from-yellow-500 to-orange-500">
                  <Gift className="w-4 h-4 mr-2" />Забрать
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

export function WeeklyGoalsMini(p: WeeklyGoalsProps) {
  const pct = Math.min(((p.completedTopics + p.quizzesCompleted + p.gamesPlayed) / 20) * 100, 100)
  return (
    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium">Цели недели</span>
        </div>
        <span className="text-xs text-gray-400">{Math.round(pct)}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" animate={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

export { GOALS_TEMPLATE as WEEKLY_GOALS_TEMPLATE }
