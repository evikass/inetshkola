'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Target, Check, Gift, Zap } from 'lucide-react'

interface WeeklyGoalsWidgetProps {
  completedTopics: number
  quizzesCompleted: number
  gamesPlayed: number
  studyTime: number
  perfectQuizzes: number
  streak: number
  onClaim?: (xp: number) => void
}

const GOALS = [
  { id: 'g1', title: '5 тем', target: 5, xp: 100, type: 'topics' },
  { id: 'g2', title: '3 теста', target: 3, xp: 80, type: 'quizzes' },
  { id: 'g3', title: '5 игр', target: 5, xp: 100, type: 'games' },
  { id: 'g4', title: '60 мин', target: 60, xp: 120, type: 'time' },
]

export default function WeeklyGoalsWidget({
  completedTopics,
  quizzesCompleted,
  gamesPlayed,
  studyTime,
  onClaim
}: WeeklyGoalsWidgetProps) {
  const [claimedGoals, setClaimedGoals] = useState<string[]>([])
  const [ready, setReady] = useState(false)

  // Вычисляем прогресс для каждой цели
  const goalsProgress = useMemo(() => {
    return GOALS.map(g => {
      let progress = 0
      if (g.type === 'topics') progress = completedTopics
      if (g.type === 'quizzes') progress = quizzesCompleted
      if (g.type === 'games') progress = gamesPlayed
      if (g.type === 'time') progress = studyTime
      return { ...g, progress: Math.min(progress, g.target), completed: progress >= g.target }
    })
  }, [completedTopics, quizzesCompleted, gamesPlayed, studyTime])

  const completedCount = goalsProgress.filter(g => g.completed).length
  const totalXP = goalsProgress.filter(g => g.completed && claimedGoals.includes(g.id))
    .reduce((sum, g) => sum + g.xp, 0)

  // Загрузка состояния
  useEffect(() => {
    const now = new Date()
    const day = now.getDay()
    const diff = now.getDate() - day + (day === 0 ? -6 : 1)
    const monday = new Date(now.setDate(diff))
    const weekKey = monday.toISOString().split('T')[0]
    
    try {
      const saved = localStorage.getItem(`wg-${weekKey}`)
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved) setClaimedGoals(JSON.parse(saved))
    } catch { }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReady(true)
  }, [])

  const handleClaim = (goalId: string, xp: number) => {
    if (claimedGoals.includes(goalId)) return
    const next = [...claimedGoals, goalId]
    setClaimedGoals(next)
    
    const now = new Date()
    const day = now.getDay()
    const diff = now.getDate() - day + (day === 0 ? -6 : 1)
    const monday = new Date(now.setDate(diff))
    const weekKey = monday.toISOString().split('T')[0]
    localStorage.setItem(`wg-${weekKey}`, JSON.stringify(next))
    
    onClaim?.(xp)
  }

  const totalProgress = goalsProgress.reduce((sum, g) => sum + g.progress, 0)
  const totalTarget = goalsProgress.reduce((sum, g) => sum + g.target, 0)
  const overallPct = (totalProgress / totalTarget) * 100

  if (!ready) return null

  return (
    <Card className="p-3 bg-white/5 border-white/10 backdrop-blur-sm">
      {/* Заголовок */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-white">Цели недели</span>
        </div>
        <span className="text-xs text-purple-400">{completedCount}/{GOALS.length}</span>
      </div>

      {/* Общий прогресс */}
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mb-3">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          animate={{ width: `${Math.min(overallPct, 100)}%` }}
        />
      </div>

      {/* Мини-цели */}
      <div className="grid grid-cols-2 gap-2">
        {goalsProgress.map(g => {
          const isClaimed = claimedGoals.includes(g.id)
          const canClaim = g.completed && !isClaimed
          const pct = (g.progress / g.target) * 100

          return (
            <div
              key={g.id}
              className={`p-2 rounded-lg text-xs ${
                isClaimed ? 'bg-green-500/10 border border-green-500/20' :
                g.completed ? 'bg-yellow-500/10 border border-yellow-500/20 cursor-pointer' :
                'bg-white/5'
              }`}
              onClick={() => canClaim && handleClaim(g.id, g.xp)}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={isClaimed ? 'text-green-400' : 'text-gray-300'}>{g.title}</span>
                {isClaimed ? (
                  <Check className="w-3 h-3 text-green-400" />
                ) : g.completed ? (
                  <motion.div
                    className="flex items-center gap-0.5 text-yellow-400"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    <Gift className="w-3 h-3" />
                  </motion.div>
                ) : (
                  <span className="text-gray-500">{g.progress}/{g.target}</span>
                )}
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${isClaimed ? 'bg-green-500' : 'bg-purple-500'}`}
                  animate={{ width: `${pct}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* XP */}
      <div className="flex items-center justify-center gap-1 mt-2 text-xs text-gray-400">
        <Zap className="w-3 h-3 text-yellow-400" />
        <span>Получено: {totalXP} XP</span>
      </div>
    </Card>
  )
}
