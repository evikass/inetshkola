'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
  Flame, Trophy, Star, Target, CheckCircle, Clock,
  TrendingUp, Award, Brain, Medal
} from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'
import { ProgressChart, Leaderboard } from '@/components/school'

export function StatsTab() {
  const {
    userStats,
    dailyStats,
    overallProgress,
    totalTopicsCompleted,
    studyTime,
    maxCombo,
    perfectQuizzesCount,
    activityLog
  } = useSchool()

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    if (hours > 0) return `${hours}ч ${minutes}м`
    return `${minutes}м`
  }

  const xpProgress = (userStats.experience / 100) * 100
  const xpToNextLevel = 100 - userStats.experience

  return (
    <div className="space-y-4">
      {/* Основная статистика */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="py-4 text-center">
            <Flame className="w-6 h-6 mx-auto text-orange-400 mb-2" />
            <p className="text-2xl font-bold">{userStats.streak}</p>
            <p className="text-xs text-slate-400">Дней подряд</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="py-4 text-center">
            <Star className="w-6 h-6 mx-auto text-yellow-400 mb-2" />
            <p className="text-2xl font-bold">{userStats.totalPoints}</p>
            <p className="text-xs text-slate-400">Очков</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="py-4 text-center">
            <Trophy className="w-6 h-6 mx-auto text-blue-400 mb-2" />
            <p className="text-2xl font-bold">{userStats.level}</p>
            <p className="text-xs text-slate-400">Уровень</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="py-4 text-center">
            <Target className="w-6 h-6 mx-auto text-green-400 mb-2" />
            <p className="text-2xl font-bold">{overallProgress}%</p>
            <p className="text-xs text-slate-400">Прогресс</p>
          </CardContent>
        </Card>
      </div>

      {/* Прогресс уровня */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">До следующего уровня</span>
            <span className="text-xs text-slate-400">{xpToNextLevel} XP</span>
          </div>
          <Progress value={xpProgress} className="h-2" />
        </CardContent>
      </Card>

      {/* Дополнительная статистика */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="py-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <div>
                <p className="text-sm font-medium">{totalTopicsCompleted}</p>
                <p className="text-xs text-slate-400">Тем пройдено</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="py-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400" />
              <div>
                <p className="text-sm font-medium">{formatTime(studyTime)}</p>
                <p className="text-xs text-slate-400">Время обучения</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="py-3">
            <div className="flex items-center gap-2">
              <Medal className="w-4 h-4 text-purple-400" />
              <div>
                <p className="text-sm font-medium">{perfectQuizzesCount}</p>
                <p className="text-xs text-slate-400">Идеальных тестов</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="py-3">
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-yellow-400" />
              <div>
                <p className="text-sm font-medium">{maxCombo}</p>
                <p className="text-xs text-slate-400">Макс. комбо</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Статистика за сегодня */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="py-4">
          <h3 className="font-medium mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-400" />
            Статистика за сегодня
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-xl font-bold text-blue-400">{dailyStats.topicsToday}</p>
              <p className="text-xs text-slate-400">Тем</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-green-400">{dailyStats.quizzesToday}</p>
              <p className="text-xs text-slate-400">Тестов</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-yellow-400">{dailyStats.pointsToday}</p>
              <p className="text-xs text-slate-400">Очков</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-purple-400">{formatTime(dailyStats.timeToday * 60)}</p>
              <p className="text-xs text-slate-400">Времени</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Последняя активность */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="py-4">
          <h3 className="font-medium mb-3 flex items-center gap-2">
            <Award className="w-4 h-4 text-purple-400" />
            Последняя активность
          </h3>
          <div className="space-y-2">
            {activityLog.slice(0, 5).map((item) => (
              <div key={item.id} className="flex items-center justify-between py-2 border-b border-slate-700/50 last:border-0">
                <div className="flex items-center gap-2">
                  {item.type === 'topic' && <CheckCircle className="w-4 h-4 text-green-400" />}
                  {item.type === 'quiz' && <Trophy className="w-4 h-4 text-blue-400" />}
                  {item.type === 'achievement' && <Award className="w-4 h-4 text-purple-400" />}
                  <span className="text-sm">{item.title}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-yellow-400">+{item.points} XP</span>
                </div>
              </div>
            ))}
            {activityLog.length === 0 && (
              <p className="text-sm text-slate-400 text-center py-4">
                Активность пока отсутствует
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Прогресс и лидерборд */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ProgressChart />
        <Leaderboard />
      </div>
    </div>
  )
}
