'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Trophy, Star, Flame, Target, Zap, Medal, Crown,
  Lock, Sparkles, Award, Gift, CheckCircle
} from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'

const RARITY_COLORS = {
  common: 'from-gray-500 to-gray-600',
  rare: 'from-blue-500 to-cyan-500',
  epic: 'from-purple-500 to-pink-500',
  legendary: 'from-amber-500 to-orange-500'
}

const RARITY_LABELS = {
  common: 'Обычное',
  rare: 'Редкое',
  epic: 'Эпическое',
  legendary: 'Легендарное'
}

export default function AchievementsTab() {
  const { achievements, userStats } = useSchool()
  
  const unlockedAchievements = achievements.filter(a => a.unlocked)
  const lockedAchievements = achievements.filter(a => !a.unlocked)
  
  const stats = {
    total: achievements.length,
    unlocked: unlockedAchievements.length,
    points: unlockedAchievements.reduce((sum, a) => sum + a.points, 0),
    byRarity: {
      legendary: achievements.filter(a => a.rarity === 'legendary' && a.unlocked).length,
      epic: achievements.filter(a => a.rarity === 'epic' && a.unlocked).length,
      rare: achievements.filter(a => a.rarity === 'rare' && a.unlocked).length,
      common: achievements.filter(a => a.rarity === 'common' && a.unlocked).length,
    }
  }

  return (
    <div className="space-y-6">
      {/* Заголовок */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Trophy className="w-6 h-6 text-amber-400" />
            Достижения
          </h2>
          <p className="text-gray-400">Зарабатывай награды за успехи в обучении</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-amber-400">{stats.unlocked}/{stats.total}</p>
          <p className="text-sm text-gray-400">открыто</p>
        </div>
      </div>

      {/* Статистика достижений */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-amber-500/30">
          <CardContent className="p-4 text-center">
            <Trophy className="w-8 h-8 mx-auto mb-2 text-amber-400" />
            <p className="text-2xl font-bold">{stats.unlocked}</p>
            <p className="text-sm text-gray-400">Открыто</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30">
          <CardContent className="p-4 text-center">
            <Sparkles className="w-8 h-8 mx-auto mb-2 text-purple-400" />
            <p className="text-2xl font-bold">{stats.points}</p>
            <p className="text-sm text-gray-400">Очков</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30">
          <CardContent className="p-4 text-center">
            <Medal className="w-8 h-8 mx-auto mb-2 text-blue-400" />
            <p className="text-2xl font-bold">{stats.byRarity.rare + stats.byRarity.epic + stats.byRarity.legendary}</p>
            <p className="text-sm text-gray-400">Редких+</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-gray-500/20 to-gray-600/20 border-gray-500/30">
          <CardContent className="p-4 text-center">
            <Lock className="w-8 h-8 mx-auto mb-2 text-gray-400" />
            <p className="text-2xl font-bold">{stats.total - stats.unlocked}</p>
            <p className="text-sm text-gray-400">Закрыто</p>
          </CardContent>
        </Card>
      </div>

      {/* Прогресс-бар */}
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Прогресс достижений</span>
            <span>{Math.round((stats.unlocked / stats.total) * 100)}%</span>
          </div>
          <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500"
              style={{ width: `${(stats.unlocked / stats.total) * 100}%` }}
            />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="unlocked" className="space-y-4">
        <TabsList className="bg-white/5 border border-white/10">
          <TabsTrigger value="unlocked">
            <CheckCircle className="w-4 h-4 mr-1" />
            Открытые ({stats.unlocked})
          </TabsTrigger>
          <TabsTrigger value="locked">
            <Lock className="w-4 h-4 mr-1" />
            Закрытые ({stats.total - stats.unlocked})
          </TabsTrigger>
          <TabsTrigger value="all">
            <Award className="w-4 h-4 mr-1" />
            Все
          </TabsTrigger>
        </TabsList>

        {/* Открытые */}
        <TabsContent value="unlocked">
          {unlockedAchievements.length === 0 ? (
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8 text-center">
                <Lock className="w-12 h-12 mx-auto mb-3 text-gray-500" />
                <p className="text-gray-400">Пока нет открытых достижений</p>
                <p className="text-sm text-gray-500 mt-1">Начни учиться, чтобы заработать первые награды!</p>
              </CardContent>
            </Card>
          ) : (
            <ScrollArea className="h-[500px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pr-2">
                {unlockedAchievements.map((achievement) => (
                  <Card 
                    key={achievement.id}
                    className={`bg-gradient-to-br ${RARITY_COLORS[achievement.rarity]} bg-opacity-20 border-white/20`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-3xl">{achievement.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold">{achievement.title}</h4>
                            <Badge className={`bg-gradient-to-r ${RARITY_COLORS[achievement.rarity]}`}>
                              {RARITY_LABELS[achievement.rarity]}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-300 mt-1">{achievement.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline" className="text-amber-400 border-amber-500/30">
                              +{achievement.points} очков
                            </Badge>
                            {achievement.unlockedAt && (
                              <span className="text-xs text-gray-400">
                                {new Date(achievement.unlockedAt).toLocaleDateString('ru-RU')}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          )}
        </TabsContent>

        {/* Закрытые */}
        <TabsContent value="locked">
          <ScrollArea className="h-[500px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pr-2">
              {lockedAchievements.map((achievement) => (
                <Card 
                  key={achievement.id}
                  className="bg-gray-800/50 border-gray-700 opacity-75"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl opacity-50">🔒</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-400">{achievement.title}</h4>
                        <p className="text-sm text-gray-500 mt-1">{achievement.condition}</p>
                        <Badge variant="outline" className="mt-2 border-gray-600 text-gray-400">
                          {RARITY_LABELS[achievement.rarity]}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        {/* Все */}
        <TabsContent value="all">
          <ScrollArea className="h-[500px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pr-2">
              {achievements.map((achievement) => (
                <Card 
                  key={achievement.id}
                  className={`${
                    achievement.unlocked 
                      ? `bg-gradient-to-br ${RARITY_COLORS[achievement.rarity]} bg-opacity-20 border-white/20`
                      : 'bg-gray-800/50 border-gray-700 opacity-75'
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{achievement.unlocked ? achievement.icon : '🔒'}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className={`font-bold ${achievement.unlocked ? '' : 'text-gray-400'}`}>
                            {achievement.title}
                          </h4>
                          {achievement.unlocked && (
                            <Badge className={`bg-gradient-to-r ${RARITY_COLORS[achievement.rarity]}`}>
                              {RARITY_LABELS[achievement.rarity]}
                            </Badge>
                          )}
                        </div>
                        <p className={`text-sm mt-1 ${achievement.unlocked ? 'text-gray-300' : 'text-gray-500'}`}>
                          {achievement.unlocked ? achievement.description : achievement.condition}
                        </p>
                        {achievement.unlocked && (
                          <Badge variant="outline" className="mt-2 text-amber-400 border-amber-500/30">
                            +{achievement.points} очков
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  )
}
