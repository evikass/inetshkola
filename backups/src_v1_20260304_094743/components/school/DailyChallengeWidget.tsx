'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Zap, Clock, Check, Gift } from 'lucide-react'

interface DailyChallengeWidgetProps {
  completedTopics: number
  quizzesCompleted: number
  gamesPlayed: number
  studyTime: number
  perfectQuizzes: number
  onNavigate?: () => void
  onClaim?: (xp: number) => void
}

const CHALLENGES = [
  { id: 'topics-3', title: 'Изучи 3 темы', target: 3, xp: 75, type: 'topics', icon: '📚' },
  { id: 'quizzes-2', title: 'Пройди 2 теста', target: 2, xp: 60, type: 'quizzes', icon: '🎯' },
  { id: 'games-3', title: 'Сыграй 3 игры', target: 3, xp: 50, type: 'games', icon: '🎮' },
  { id: 'perfect-1', title: 'Идеальный тест', target: 1, xp: 100, type: 'perfect', icon: '⭐' },
  { id: 'time-30', title: '30 мин учёбы', target: 30, xp: 80, type: 'time', icon: '⏱️' },
]

export default function DailyChallengeWidget({
  completedTopics,
  quizzesCompleted,
  gamesPlayed,
  studyTime,
  perfectQuizzes,
  onClaim
}: DailyChallengeWidgetProps) {
  const [claimed, setClaimed] = useState(false)
  const [ready, setReady] = useState(false)

  // Выбор вызова дня
  const challenge = useMemo(() => {
    const today = new Date()
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)
    return CHALLENGES[dayOfYear % CHALLENGES.length]
  }, [])

  // Прогресс
  const progress = useMemo(() => {
    switch (challenge.type) {
      case 'topics': return Math.min(completedTopics, challenge.target)
      case 'quizzes': return Math.min(quizzesCompleted, challenge.target)
      case 'games': return Math.min(gamesPlayed, challenge.target)
      case 'time': return Math.min(studyTime, challenge.target)
      case 'perfect': return Math.min(perfectQuizzes, challenge.target)
      default: return 0
    }
  }, [challenge, completedTopics, quizzesCompleted, gamesPlayed, studyTime, perfectQuizzes])

  const isCompleted = progress >= challenge.target
  const pct = (progress / challenge.target) * 100

  // Загрузка состояния
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]
    const saved = localStorage.getItem(`dc-${today}`)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved === 'claimed') setClaimed(true)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReady(true)
  }, [])

  const handleClaim = () => {
    if (isCompleted && !claimed) {
      setClaimed(true)
      const today = new Date().toISOString().split('T')[0]
      localStorage.setItem(`dc-${today}`, 'claimed')
      onClaim?.(challenge.xp)
    }
  }

  if (!ready) return null

  return (
    <Card className="p-3 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer"
          onClick={!claimed && isCompleted ? handleClaim : undefined}>
      <div className="flex items-center gap-3">
        {/* Иконка */}
        <div className="text-2xl">{challenge.icon}</div>
        
        {/* Контент */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium text-white truncate">{challenge.title}</span>
            {claimed ? (
              <span className="text-xs text-green-400 flex items-center gap-1">
                <Check className="w-3 h-3" />
              </span>
            ) : isCompleted ? (
              <motion.span 
                className="text-xs text-yellow-400 flex items-center gap-1"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Gift className="w-3 h-3" />
                +{challenge.xp}
              </motion.span>
            ) : (
              <span className="text-xs text-gray-400">{progress}/{challenge.target}</span>
            )}
          </div>
          
          {/* Прогресс бар */}
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${claimed ? 'bg-green-500' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
