'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Flame, Gift, Snowflake, Zap } from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'

export function DailyStreak() {
  const { userStats, streakFreeze } = useSchool()

  // Дни недели
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
  const today = new Date().getDay()
  const adjustedToday = today === 0 ? 6 : today - 1 // Понедельник = 0

  // Вычисляем какие дни активны (последние 7 дней)
  const getActiveDays = () => {
    const activeDays = []
    for (let i = 0; i < 7; i++) {
      // Если текущий день или если streak охватывает предыдущие дни
      const isActive = i <= adjustedToday && userStats.streak > (adjustedToday - i)
      activeDays.push(isActive)
    }
    return activeDays
  }

  const activeDays = getActiveDays()

  // Награды за серию
  const streakRewards = [
    { days: 3, reward: 50, icon: Flame },
    { days: 7, reward: 150, icon: Gift },
    { days: 14, reward: 300, icon: Zap },
    { days: 30, reward: 1000, icon: Gift },
  ]

  const nextReward = streakRewards.find(r => userStats.streak < r.days)

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardContent className="py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Flame className={`w-6 h-6 ${
                userStats.streak >= 7 ? 'text-orange-500' :
                userStats.streak >= 3 ? 'text-orange-400' : 'text-slate-400'
              }`} />
              {userStats.streak >= 3 && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-ping" />
              )}
            </div>
            <div>
              <h3 className="font-semibold">Серия дня</h3>
              <p className="text-xs text-slate-400">Учись каждый день</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-orange-400">{userStats.streak}</p>
            <p className="text-xs text-slate-400">дней подряд</p>
          </div>
        </div>

        {/* Дни недели */}
        <div className="grid grid-cols-7 gap-1 mb-4">
          {days.map((day, index) => {
            const isActive = activeDays[index]
            const isToday = index === adjustedToday
            const isFuture = index > adjustedToday

            return (
              <div
                key={day}
                className={`
                  flex flex-col items-center p-2 rounded-lg transition-all
                  ${isActive ? 'bg-orange-500/20 border border-orange-500/30' : 'bg-slate-700/30'}
                  ${isToday ? 'ring-2 ring-orange-400 ring-offset-2 ring-offset-slate-900' : ''}
                  ${isFuture ? 'opacity-50' : ''}
                `}
              >
                <span className="text-xs text-slate-400">{day}</span>
                <div className={`w-4 h-4 rounded-full mt-1 flex items-center justify-center ${
                  isActive
                    ? 'bg-orange-500 text-white'
                    : 'bg-slate-600'
                }`}>
                  {isActive && (
                    <Flame className="w-3 h-3" />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Следующая награда */}
        {nextReward && (
          <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
            <div className="flex items-center gap-2">
              <nextReward.icon className="w-5 h-5 text-yellow-400" />
              <div>
                <p className="text-sm font-medium">Следующая награда</p>
                <p className="text-xs text-slate-400">
                  Через {nextReward.days - userStats.streak} дней
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-yellow-400">+{nextReward.reward}</p>
              <p className="text-xs text-slate-400">XP</p>
            </div>
          </div>
        )}

        {/* Streak Freeze */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-700/50">
          <div className="flex items-center gap-2">
            <Snowflake className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-slate-400">Заморозка серии</span>
          </div>
          <span className="text-xs font-medium text-blue-400">{streakFreeze} доступно</span>
        </div>

        {/* Рекорд */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-slate-400">Твой рекорд</span>
          <span className="text-xs font-medium text-purple-400">{userStats.maxStreak} дней</span>
        </div>
      </CardContent>
    </Card>
  )
}
