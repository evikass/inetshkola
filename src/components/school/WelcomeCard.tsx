'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Sparkles, Flame, Trophy, Star, Target,
  BookOpen, Zap, ChevronRight, Sun, Moon
} from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'

export function WelcomeCard() {
  const {
    userStats,
    dailyStats,
    overallProgress,
    totalTopicsCompleted,
    setActiveTab
  } = useSchool()

  // Определение времени суток
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour >= 5 && hour < 12) return { text: 'Доброе утро!', icon: Sun, color: 'text-yellow-400' }
    if (hour >= 12 && hour < 17) return { text: 'Добрый день!', icon: Sun, color: 'text-orange-400' }
    if (hour >= 17 && hour < 22) return { text: 'Добрый вечер!', icon: Sun, color: 'text-purple-400' }
    return { text: 'Доброй ночи!', icon: Moon, color: 'text-blue-400' }
  }

  const greeting = getGreeting()
  const GreetingIcon = greeting.icon

  // Определение мотивационного сообщения
  const getMotivation = () => {
    if (userStats.streak >= 7) return '🔥 Невероятная серия! Продолжай в том же духе!'
    if (userStats.streak >= 3) return '💪 Отличная серия! Не останавливайся!'
    if (dailyStats.topicsToday > 0) return '✨ Хороший старт! Продолжай учиться!'
    if (userStats.level >= 10) return '🎓 Ты уже много знаешь! Иди дальше!'
    return '🌟 Начни своё путешествие в мир знаний!'
  }

  // Рекомендуемое действие
  const getSuggestedAction = () => {
    if (dailyStats.topicsToday === 0) {
      return { text: 'Начать обучение', tab: 'subjects', icon: BookOpen }
    }
    if (dailyStats.quizzesToday === 0) {
      return { text: 'Пройти тест', tab: 'subjects', icon: Target }
    }
    return { text: 'Продолжить', tab: 'subjects', icon: ChevronRight }
  }

  const suggestedAction = getSuggestedAction()
  const ActionIcon = suggestedAction.icon

  return (
    <Card className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-blue-900/30 border-blue-500/20 overflow-hidden relative">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />

      <CardContent className="py-4 relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Приветствие */}
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center ${greeting.color}`}>
              <GreetingIcon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold flex items-center gap-2">
                {greeting.text}
                {userStats.streak >= 3 && (
                  <Flame className="w-5 h-5 text-orange-400 animate-pulse" />
                )}
              </h2>
              <p className="text-sm text-slate-300 mt-1">{getMotivation()}</p>

              {/* Быстрая статистика */}
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400" />
                  {userStats.totalPoints} очков
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Trophy className="w-3 h-3 text-blue-400" />
                  Уровень {userStats.level}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Flame className="w-3 h-3 text-orange-400" />
                  {userStats.streak} дней
                </Badge>
              </div>
            </div>
          </div>

          {/* Статистика за сегодня */}
          <div className="flex items-center gap-3">
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardContent className="py-2 px-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-400">{dailyStats.topicsToday}</p>
                  <p className="text-xs text-slate-400">тем сегодня</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardContent className="py-2 px-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-400">{dailyStats.pointsToday}</p>
                  <p className="text-xs text-slate-400">XP сегодня</p>
                </div>
              </CardContent>
            </Card>

            {/* Кнопка действия */}
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => setActiveTab(suggestedAction.tab)}
            >
              <ActionIcon className="w-4 h-4 mr-2" />
              {suggestedAction.text}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
