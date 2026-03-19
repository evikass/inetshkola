'use client'

import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Flame, Calendar, ChevronLeft, ChevronRight, Star, Zap,
  Target, Trophy, Clock
} from 'lucide-react'

// Тип для записи активности дня
interface DayActivity {
  date: string
  topicsCompleted: number
  quizzesCompleted: number
  gamesPlayed: number
  studyTime: number
  xpEarned: number
}

interface LearningStreakCalendarProps {
  streak: number
  maxStreak: number
  activities: DayActivity[]
  onDayClick?: (date: string) => void
}

// Дни недели
const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
const MONTHS = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
]

// Генерация активностей за последние 3 месяца (для демо)
function generateDemoActivities(): DayActivity[] {
  const activities: DayActivity[] = []
  const today = new Date()

  for (let i = 0; i < 90; i++) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)

    // Случайная активность (более вероятно для недавних дней)
    const activityChance = Math.random() - (i / 200)

    if (activityChance > 0.3) {
      activities.push({
        date: date.toISOString().split('T')[0],
        topicsCompleted: Math.floor(Math.random() * 5),
        quizzesCompleted: Math.floor(Math.random() * 3),
        gamesPlayed: Math.floor(Math.random() * 4),
        studyTime: Math.floor(Math.random() * 60) + 5,
        xpEarned: Math.floor(Math.random() * 150) + 20
      })
    }
  }

  return activities
}

// Получить цвет ячейки на основе активности
function getActivityColor(activity: DayActivity | undefined): string {
  if (!activity) return 'bg-white/5'

  const totalActivity = activity.topicsCompleted + activity.quizzesCompleted + activity.gamesPlayed

  if (totalActivity === 0 && activity.studyTime === 0) return 'bg-white/5'
  if (totalActivity <= 1 || activity.xpEarned < 30) return 'bg-green-900/40'
  if (totalActivity <= 3 || activity.xpEarned < 80) return 'bg-green-700/50'
  if (totalActivity <= 5 || activity.xpEarned < 150) return 'bg-green-500/60'
  return 'bg-green-400/70'
}

// Получить эмодзи за особую активность
function getActivityEmoji(activity: DayActivity | undefined): string {
  if (!activity) return ''

  if (activity.xpEarned >= 200) return '🔥'
  if (activity.quizzesCompleted >= 3) return '📝'
  if (activity.gamesPlayed >= 5) return '🎮'
  if (activity.topicsCompleted >= 5) return '📚'
  return ''
}

export default function LearningStreakCalendar({
  streak,
  maxStreak,
  activities,
  onDayClick
}: LearningStreakCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDay, setSelectedDay] = useState<DayActivity | null>(null)
  const [hoveredDay, setHoveredDay] = useState<string | null>(null)

  // Генерируем демо-активности при необходимости
  const demoActivities = useMemo(() => generateDemoActivities(), [])
  const displayActivities = activities.length > 0 ? activities : demoActivities

  // Генерация дней месяца
  const monthDays = useMemo(() => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)

    const days: { date: Date; isCurrentMonth: boolean; activity?: DayActivity }[] = []

    // Дни предыдущего месяца
    const firstDayWeekday = (firstDay.getDay() + 6) % 7 // Понедельник = 0
    for (let i = firstDayWeekday - 1; i >= 0; i--) {
      const date = new Date(year, month, -i)
      days.push({
        date,
        isCurrentMonth: false,
        activity: displayActivities.find(a => a.date === date.toISOString().split('T')[0])
      })
    }

    // Дни текущего месяца
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(year, month, i)
      days.push({
        date,
        isCurrentMonth: true,
        activity: displayActivities.find(a => a.date === date.toISOString().split('T')[0])
      })
    }

    // Дни следующего месяца
    const remaining = 42 - days.length // 6 недель
    for (let i = 1; i <= remaining; i++) {
      const date = new Date(year, month + 1, i)
      days.push({
        date,
        isCurrentMonth: false,
        activity: displayActivities.find(a => a.date === date.toISOString().split('T')[0])
      })
    }

    return days
  }, [currentMonth, displayActivities])

  // Навигация по месяцам
  const goToPrevMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
  }

  const goToToday = () => {
    setCurrentMonth(new Date())
  }

  // Проверка, является ли день сегодняшним
  const isToday = (date: Date) => {
    const today = new Date()
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear()
  }

  // Обработчик клика по дню
  const handleDayClick = (date: Date, activity?: DayActivity) => {
    if (activity) {
      setSelectedDay(activity)
      onDayClick?.(activity.date)
    }
  }

  // Статистика за выбранный месяц
  const monthStats = useMemo(() => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    const monthActivities = displayActivities.filter(a => {
      const date = new Date(a.date)
      return date.getMonth() === month && date.getFullYear() === year
    })

    return {
      activeDays: monthActivities.length,
      totalXP: monthActivities.reduce((sum, a) => sum + a.xpEarned, 0),
      totalTopics: monthActivities.reduce((sum, a) => sum + a.topicsCompleted, 0),
      totalQuizzes: monthActivities.reduce((sum, a) => sum + a.quizzesCompleted, 0),
      totalGames: monthActivities.reduce((sum, a) => sum + a.gamesPlayed, 0)
    }
  }, [currentMonth, displayActivities])

  return (
    <Card className="relative overflow-hidden border-2 border-white/10 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm">
      {/* Декоративный градиент */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <motion.div
              className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Calendar className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-white">Календарь активности</span>
          </CardTitle>

          {/* Стрик */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-500/20 rounded-full border border-orange-500/30">
              <Flame className="w-4 h-4 text-orange-400" />
              <span className="font-bold text-orange-400">{streak}</span>
              <span className="text-xs text-gray-400">дней</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-purple-500/20 rounded-full border border-purple-500/30">
              <Trophy className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Рекорд: {maxStreak}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Навигация по месяцам */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.button
              onClick={goToPrevMonth}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="text-center min-w-[150px]">
              <h3 className="font-bold text-lg">
                {MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h3>
            </div>

            <motion.button
              onClick={goToNextMonth}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={goToToday}
            className="text-sm text-gray-400 hover:text-white"
          >
            Сегодня
          </Button>
        </div>

        {/* Дни недели */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {WEEKDAYS.map(day => (
            <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
              {day}
            </div>
          ))}
        </div>

        {/* Сетка календаря */}
        <div className="grid grid-cols-7 gap-1">
          {monthDays.map((day, index) => {
            const dateStr = day.date.toISOString().split('T')[0]
            const colorClass = getActivityColor(day.activity)
            const emoji = getActivityEmoji(day.activity)
            const today = isToday(day.date)

            return (
              <motion.div
                key={index}
                className={`
                  relative aspect-square rounded-lg flex flex-col items-center justify-center
                  cursor-pointer transition-all duration-200
                  ${day.isCurrentMonth ? 'text-white' : 'text-gray-600'}
                  ${colorClass}
                  ${today ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-slate-900' : ''}
                  hover:ring-2 hover:ring-white/30
                `}
                onClick={() => handleDayClick(day.date, day.activity)}
                onMouseEnter={() => setHoveredDay(dateStr)}
                onMouseLeave={() => setHoveredDay(null)}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.01 }}
              >
                <span className="text-sm font-medium">{day.date.getDate()}</span>
                {emoji && <span className="text-xs absolute bottom-0.5">{emoji}</span>}

                {/* Подсказка при наведении */}
                <AnimatePresence>
                  {hoveredDay === dateStr && day.activity && (
                    <motion.div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 p-2 bg-slate-700 rounded-lg shadow-xl text-xs whitespace-nowrap"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="w-3 h-3 text-yellow-400" />
                        <span>+{day.activity.xpEarned} XP</span>
                      </div>
                      <div className="text-gray-400">
                        📚 {day.activity.topicsCompleted} · 📝 {day.activity.quizzesCompleted} · 🎮 {day.activity.gamesPlayed}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Легенда */}
        <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-2 border-t border-white/10">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded bg-white/5" />
            <span>Нет</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded bg-green-900/40" />
            <span>Мало</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded bg-green-700/50" />
            <span>Норма</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded bg-green-500/60" />
            <span>Хорошо</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded bg-green-400/70" />
            <span>Отлично</span>
          </div>
        </div>

        {/* Статистика месяца */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/10">
          <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
            <Calendar className="w-4 h-4 text-green-400" />
            <div>
              <div className="text-xs text-gray-400">Активных дней</div>
              <div className="font-bold text-green-400">{monthStats.activeDays}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
            <Zap className="w-4 h-4 text-yellow-400" />
            <div>
              <div className="text-xs text-gray-400">XP за месяц</div>
              <div className="font-bold text-yellow-400">{monthStats.totalXP}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
            <Target className="w-4 h-4 text-blue-400" />
            <div>
              <div className="text-xs text-gray-400">Тем изучено</div>
              <div className="font-bold text-blue-400">{monthStats.totalTopics}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
            <Star className="w-4 h-4 text-purple-400" />
            <div>
              <div className="text-xs text-gray-400">Тестов пройдено</div>
              <div className="font-bold text-purple-400">{monthStats.totalQuizzes}</div>
            </div>
          </div>
        </div>

        {/* Выбранный день */}
        <AnimatePresence>
          {selectedDay && (
            <motion.div
              className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-green-400">
                  {new Date(selectedDay.date).toLocaleDateString('ru-RU', { 
                    weekday: 'long', 
                    day: 'numeric', 
                    month: 'long' 
                  })}
                </h4>
                <button
                  onClick={() => setSelectedDay(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-5 gap-4 text-center">
                <div>
                  <div className="text-2xl">📚</div>
                  <div className="font-bold">{selectedDay.topicsCompleted}</div>
                  <div className="text-xs text-gray-400">Тем</div>
                </div>
                <div>
                  <div className="text-2xl">📝</div>
                  <div className="font-bold">{selectedDay.quizzesCompleted}</div>
                  <div className="text-xs text-gray-400">Тестов</div>
                </div>
                <div>
                  <div className="text-2xl">🎮</div>
                  <div className="font-bold">{selectedDay.gamesPlayed}</div>
                  <div className="text-xs text-gray-400">Игр</div>
                </div>
                <div>
                  <div className="text-2xl">⏱️</div>
                  <div className="font-bold">{selectedDay.studyTime}</div>
                  <div className="text-xs text-gray-400">Минут</div>
                </div>
                <div>
                  <div className="text-2xl">⚡</div>
                  <div className="font-bold text-yellow-400">{selectedDay.xpEarned}</div>
                  <div className="text-xs text-gray-400">XP</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

// Мини-версия для сайдбара
export function LearningStreakMini({ streak, activities }: { streak: number; activities: DayActivity[] }) {
  // Последние 7 дней
  const last7Days = useMemo(() => {
    const days = []
    const today = new Date()

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      const dateStr = date.toISOString().split('T')[0]
      const activity = activities.find(a => a.date === dateStr)

      days.push({
        date: dateStr,
        dayName: date.toLocaleDateString('ru-RU', { weekday: 'short' }),
        activity
      })
    }

    return days
  }, [activities])

  return (
    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-orange-400" />
          <span className="text-sm font-medium">Серия: {streak} дней</span>
        </div>
      </div>

      <div className="flex justify-between">
        {last7Days.map((day, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <span className="text-xs text-gray-500">{day.dayName}</span>
            <motion.div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs
                ${day.activity ? 'bg-green-500/50' : 'bg-white/10'}
              `}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              {day.activity ? '✓' : ''}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { type DayActivity }
