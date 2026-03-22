'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X, Award, Star, Sparkles } from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'

// Компонент для показа уведомления о достижении
export function AchievementNotification() {
  const { achievements, showConfetti } = useSchool()
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(new Set())

  // Находим последнее разблокированное достижение
  const latestAchievement = achievements
    .filter(a => a.unlocked && a.unlockedAt && !dismissedIds.has(a.id))
    .sort((a, b) => new Date(b.unlockedAt!).getTime() - new Date(a.unlockedAt!).getTime())[0]

  // Показываем только если есть достижение, showConfetti true и не было закрыто
  const isVisible = !!(latestAchievement && showConfetti)

  const handleDismiss = () => {
    if (latestAchievement) {
      setDismissedIds(prev => new Set([...prev, latestAchievement.id]))
    }
  }

  if (!isVisible || !latestAchievement) return null

  return (
    <div className="fixed top-20 right-4 z-50 animate-slide-down">
      <Card className="bg-gradient-to-r from-yellow-900/90 to-orange-900/90 border-yellow-500/30 shadow-xl max-w-sm">
        <CardContent className="py-3 px-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0 animate-bounce-in">
              {latestAchievement.icon || <Award className="w-5 h-5 text-yellow-400" />}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-yellow-400 flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                Достижение разблокировано!
              </h4>
              <p className="text-sm text-slate-200">{latestAchievement.title}</p>
              <p className="text-xs text-yellow-400 mt-1 flex items-center gap-1">
                <Star className="w-3 h-3" />
                +{latestAchievement.points} XP
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="w-6 h-6 text-slate-400 hover:text-white"
              onClick={handleDismiss}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Компонент для показа списка недавних достижений
export function RecentAchievements() {
  const { achievements } = useSchool()

  const recentUnlocked = achievements
    .filter(a => a.unlocked && a.unlockedAt)
    .sort((a, b) => new Date(b.unlockedAt!).getTime() - new Date(a.unlockedAt!).getTime())
    .slice(0, 3)

  if (recentUnlocked.length === 0) return null

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardContent className="py-4">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Award className="w-4 h-4 text-yellow-400" />
          Недавние достижения
        </h3>
        <div className="space-y-2">
          {recentUnlocked.map(achievement => (
            <div
              key={achievement.id}
              className="flex items-center gap-3 p-2 rounded-lg bg-slate-700/30"
            >
              <div className="w-8 h-8 rounded bg-yellow-500/20 flex items-center justify-center">
                {achievement.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{achievement.title}</p>
                <p className="text-xs text-slate-400">{achievement.description}</p>
              </div>
              <span className="text-xs text-yellow-400">+{achievement.points} XP</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
