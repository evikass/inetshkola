'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  TrendingUp, Trophy, Star, Flame, Clock, Target, 
  CheckCircle, Zap, Calendar, BarChart3, Activity,
  Medal, Crown, Brain, Sparkles
} from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'
import { RANKS } from '@/data/constants'
import { KidDailyRewards, KidProgressBar, KidOverallProgress } from '@/components/school'

interface ProgressTabProps {
  gradeId?: number
}

export default function ProgressTab({ gradeId = 0 }: ProgressTabProps) {
  const { userStats, achievements, completedTopics, quizResults, getRank, addExperience } = useSchool()
  const rank = getRank()
  const unlockedAchievements = achievements.filter(a => a.unlocked)

  // Детский режим для классов 0-2
  const useKidMode = gradeId <= 2

  const xpProgress = (userStats.experience / 100) * 100
  const nextRank = RANKS.find(r => r.minLevel > userStats.level) || RANKS[RANKS.length - 1]
  const levelsToNextRank = nextRank.minLevel - userStats.level

  // Вычисление статистики
  const totalQuizzes = Object.keys(quizResults).length
  const avgQuizScore = totalQuizzes > 0 
    ? Math.round(Object.values(quizResults).reduce((sum, r) => sum + (r.correct / r.total) * 100, 0) / totalQuizzes)
    : 0

  // Данные для графика активности
  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
  const today = new Date().getDay()
  const adjustedToday = today === 0 ? 6 : today - 1

  // Обработчик наград
  const handleClaimReward = (stars: number) => {
    addExperience(stars * 10)
  }

  // Детский режим
  if (useKidMode) {
    return (
      <div className="space-y-6">
        {/* Заголовок */}
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-yellow-400" />
          <h2 className="text-xl font-bold text-white">
            Мой прогресс
          </h2>
        </div>

        {/* Ежедневные награды */}
        <KidDailyRewards onClaim={handleClaimReward} />

        {/* Общий прогресс */}
        <KidOverallProgress
          level={userStats.level}
          experience={userStats.experience}
          experienceToNext={100}
          streak={userStats.streak}
          totalStars={userStats.totalPoints}
        />

        {/* Метрики */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30 rounded-3xl">
            <CardContent className="p-4 text-center">
              <div className="text-4xl mb-2 animate-bounce-slow">📚</div>
              <p className="text-3xl font-bold text-white">{completedTopics.length}</p>
              <p className="text-sm text-white/70">уроков</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30 rounded-3xl">
            <CardContent className="p-4 text-center">
              <div className="text-4xl mb-2 animate-bounce-slow">🎯</div>
              <p className="text-3xl font-bold text-white">{userStats.quizzesCompleted}</p>
              <p className="text-sm text-white/70">тестов</p>
            </CardContent>
          </Card>
        </div>

        {/* Прогресс тем */}
        <KidProgressBar
          current={completedTopics.length}
          total={Math.max(completedTopics.length + 5, 10)}
          label="Пройдено уроков"
          size="lg"
        />

        {/* Достижения */}
        <Card className="bg-white/10 backdrop-blur-lg rounded-3xl border-white/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              Мои награды
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-3">
              {achievements.slice(0, 8).map((achievement) => (
                <div
                  key={achievement.id}
                  className={`
                    aspect-square rounded-2xl flex items-center justify-center
                    ${achievement.unlocked 
                      ? 'bg-gradient-to-br from-yellow-400 to-orange-500' 
                      : 'bg-white/10'
                    }
                  `}
                >
                  <span className="text-2xl">
                    {achievement.unlocked ? achievement.icon : '🔒'}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-white/60 text-sm mt-3">
              {unlockedAchievements.length} из {achievements.length} наград
            </p>
          </CardContent>
        </Card>

        <style jsx>{`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        `}</style>
      </div>
    )
  }

  // Обычный режим для старших классов
  return (
    <div className="space-y-6">
      {/* Заголовок */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-400" />
            Мой прогресс
          </h2>
          <p className="text-gray-400">Отслеживай свои достижения и статистику</p>
        </div>
        <Badge className="text-lg py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-500">
          {rank.icon} {rank.name}
        </Badge>
      </div>

      {/* Основные метрики */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30">
          <CardContent className="p-4 text-center">
            <Star className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
            <p className="text-3xl font-bold">{userStats.totalPoints}</p>
            <p className="text-sm text-gray-400">Очков</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30">
          <CardContent className="p-4 text-center">
            <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-400" />
            <p className="text-3xl font-bold">{userStats.topicsCompleted}</p>
            <p className="text-sm text-gray-400">Тем изучено</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30">
          <CardContent className="p-4 text-center">
            <Zap className="w-8 h-8 mx-auto mb-2 text-blue-400" />
            <p className="text-3xl font-bold">{userStats.quizzesCompleted}</p>
            <p className="text-sm text-gray-400">Тестов пройдено</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30">
          <CardContent className="p-4 text-center">
            <Flame className="w-8 h-8 mx-auto mb-2 text-orange-400" />
            <p className="text-3xl font-bold">{userStats.streak}</p>
            <p className="text-sm text-gray-400">Дней подряд</p>
          </CardContent>
        </Card>
      </div>

      {/* Прогресс уровня */}
      <Card className="bg-white/5 border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            Прогресс уровня
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">Уровень {userStats.level}</p>
              <p className="text-sm text-gray-400">
                До следующего ранга "{nextRank.name}": {levelsToNextRank} уровней
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg">{userStats.experience}/100 XP</p>
              <p className="text-xs text-gray-400">Опыт</p>
            </div>
          </div>
          <Progress value={xpProgress} className="h-3" />
          
          {/* Шкала рангов */}
          <div className="mt-4">
            <p className="text-sm text-gray-400 mb-2">Путь к мастерству:</p>
            <div className="flex gap-1">
              {RANKS.map((r, i) => (
                <div 
                  key={r.name}
                  className={`flex-1 h-2 rounded-full ${
                    userStats.level >= r.minLevel 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500' 
                      : 'bg-gray-700'
                  }`}
                  title={`${r.name} (ур. ${r.minLevel})`}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-500">
              <span>🌱</span>
              <span>📚</span>
              <span>⭐</span>
              <span>🎓</span>
              <span>🏆</span>
              <span>👑</span>
              <span>💎</span>
              <span>🌟</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="stats" className="space-y-4">
        <TabsList className="bg-white/5 border border-white/10">
          <TabsTrigger value="stats">Статистика</TabsTrigger>
          <TabsTrigger value="activity">Активность</TabsTrigger>
          <TabsTrigger value="achievements">Достижения</TabsTrigger>
        </TabsList>

        {/* Статистика */}
        <TabsContent value="stats">
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Общая статистика
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Всего тем:</span>
                  <span className="font-bold">{completedTopics.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Пройдено тестов:</span>
                  <span className="font-bold">{userStats.quizzesCompleted}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Идеальных тестов:</span>
                  <span className="font-bold text-green-400">{userStats.perfectQuizzes}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Средний результат:</span>
                  <span className="font-bold">{avgQuizScore}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Максимальная серия:</span>
                  <span className="font-bold text-orange-400">{userStats.maxStreak} дней</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Время обучения:</span>
                  <span className="font-bold">{Math.floor(userStats.totalStudyTime / 60)} ч</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Цели
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Тем в неделю (цель: 10)</span>
                    <span>{userStats.topicsCompleted}/10</span>
                  </div>
                  <Progress value={userStats.topicsCompleted * 10} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Тестов в неделю (цель: 5)</span>
                    <span>{userStats.quizzesCompleted}/5</span>
                  </div>
                  <Progress value={userStats.quizzesCompleted * 20} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Серия дней (цель: 30)</span>
                    <span>{userStats.streak}/30</span>
                  </div>
                  <Progress value={(userStats.streak / 30) * 100} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Активность */}
        <TabsContent value="activity">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Активность за неделю
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-end h-32 gap-2">
                {weekDays.map((day, i) => {
                  const isToday = i === adjustedToday
                  const hasActivity = i <= adjustedToday
                  const height = hasActivity ? Math.random() * 60 + 20 : 10
                  
                  return (
                    <div key={day} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className={`w-full rounded-t transition-all ${
                          isToday 
                            ? 'bg-gradient-to-t from-purple-500 to-blue-500' 
                            : hasActivity 
                              ? 'bg-purple-500/50' 
                              : 'bg-gray-700'
                        }`}
                        style={{ height: `${height}%` }}
                      />
                      <span className={`text-xs ${isToday ? 'text-white font-bold' : 'text-gray-400'}`}>
                        {day}
                      </span>
                    </div>
                  )
                })}
              </div>
              
              <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded bg-gradient-to-t from-purple-500 to-blue-500" />
                  Сегодня
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded bg-purple-500/50" />
                  Была активность
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded bg-gray-700" />
                  Нет данных
                </span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Достижения */}
        <TabsContent value="achievements">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Medal className="w-4 h-4" />
                  Достижения
                </CardTitle>
                <Badge variant="outline">
                  {unlockedAchievements.length}/{achievements.length}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {achievements.map((achievement) => (
                    <div 
                      key={achievement.id}
                      className={`p-3 rounded-lg border ${
                        achievement.unlocked 
                          ? 'bg-white/10 border-white/20' 
                          : 'bg-gray-800/50 border-gray-700 opacity-50'
                      }`}
                    >
                      <div className="text-2xl mb-1">{achievement.unlocked ? achievement.icon : '🔒'}</div>
                      <p className="font-medium text-sm">{achievement.title}</p>
                      <p className="text-xs text-gray-400 mt-1">{achievement.description}</p>
                      {achievement.unlocked && (
                        <Badge 
                          className={`mt-2 text-xs ${
                            achievement.rarity === 'legendary' ? 'bg-gradient-to-r from-amber-500 to-orange-500' :
                            achievement.rarity === 'epic' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                            achievement.rarity === 'rare' ? 'bg-blue-500' : 'bg-gray-500'
                          }`}
                        >
                          +{achievement.points} очков
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
