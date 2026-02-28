'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Trophy, Star, Flame, Target, Award, Crown, Sparkles, 
  Medal, Zap, CheckCircle, Clock, TrendingUp, Gift,
  Gamepad2, BookOpen, GraduationCap, Puzzle
} from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  selectedGrade?: number
}

export default function Sidebar({ activeTab, setActiveTab, selectedGrade = 0 }: SidebarProps) {
  const { userStats, achievements, dailyTasks, getRank } = useSchool()
  const rank = getRank()
  const unlockedAchievements = achievements.filter(a => a.unlocked)

  const xpProgress = (userStats.experience / 100) * 100

  // Детский режим для младших классов
  const isKidMode = selectedGrade <= 2

  // Навигационные пункты
  const navItems = isKidMode ? [
    { id: 'learn', label: 'Уроки', icon: BookOpen, color: 'from-pink-400 to-rose-500', emoji: '📚' },
    { id: 'games', label: 'Игры', icon: Gamepad2, color: 'from-purple-400 to-pink-500', emoji: '🎮' },
    { id: 'progress', label: 'Мой прогресс', icon: Star, color: 'from-yellow-400 to-orange-500', emoji: '⭐' },
    { id: 'achievements', label: 'Награды', icon: Trophy, color: 'from-amber-400 to-yellow-500', emoji: '🏆' },
  ] : [
    { id: 'learn', label: 'Обучение', icon: Target, color: 'from-blue-400 to-cyan-500' },
    { id: 'games', label: 'Игры', icon: Gamepad2, color: 'from-purple-400 to-pink-500' },
    { id: 'progress', label: 'Прогресс', icon: TrendingUp, color: 'from-green-400 to-emerald-500' },
    { id: 'achievements', label: 'Достижения', icon: Trophy, color: 'from-amber-400 to-yellow-500' },
    { id: 'tools', label: 'Инструменты', icon: Zap, color: 'from-orange-400 to-red-500' },
  ]

  return (
    <div className="w-80 flex-shrink-0 space-y-4">
      {/* Profile Card - Детский дизайн */}
      <Card className={`relative overflow-hidden ${
        isKidMode 
          ? 'bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-blue-500/30 border-2 border-pink-300/50' 
          : 'bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-purple-500/30'
      }`}>
        {/* Декоративные звёздочки для детей */}
        {isKidMode && (
          <>
            <motion.div
              className="absolute top-2 left-2 text-2xl"
              animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✨
            </motion.div>
            <motion.div
              className="absolute top-2 right-2 text-2xl"
              animate={{ rotate: [0, -20, 20, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            >
              🌟
            </motion.div>
          </>
        )}
        
        <CardContent className="p-4">
          <div className="text-center mb-4">
            <motion.div 
              className="text-5xl mb-2"
              animate={isKidMode ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {rank.icon}
            </motion.div>
            <h3 className={`font-bold text-lg ${isKidMode ? 'text-white' : ''}`}>{userStats.rank}</h3>
            <p className="text-sm text-gray-400">Уровень {userStats.level}</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Опыт</span>
              <span className="font-bold">{userStats.experience}/100 XP</span>
            </div>
            <div className="relative h-3 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${xpProgress}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-white drop-shadow">
                  {Math.round(xpProgress)}%
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mt-4 text-center">
            <motion.div 
              className="p-2 rounded-xl bg-yellow-500/20"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-2xl font-bold text-yellow-400">{userStats.totalPoints}</p>
              <p className="text-xs text-gray-400">Очков</p>
            </motion.div>
            <motion.div 
              className="p-2 rounded-xl bg-orange-500/20"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-2xl font-bold text-orange-400">{userStats.streak}</p>
              <p className="text-xs text-gray-400">Серия</p>
            </motion.div>
            <motion.div 
              className="p-2 rounded-xl bg-green-500/20"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-2xl font-bold text-green-400">{userStats.topicsCompleted}</p>
              <p className="text-xs text-gray-400">Тем</p>
            </motion.div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation - Детские кнопки */}
      <Card className={`${
        isKidMode 
          ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-300/50' 
          : 'bg-white/5 border-white/10'
      }`}>
        <CardContent className="p-3">
          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant="ghost"
                  className={`w-full justify-start h-12 ${
                    activeTab === item.id 
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg` 
                      : 'hover:bg-white/10'
                  } ${isKidMode ? 'rounded-xl text-lg' : 'rounded-lg'}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  {isKidMode && 'emoji' in item ? (
                    <>
                      <span className="text-2xl mr-3">{item.emoji}</span>
                      <span className="font-bold">{item.label}</span>
                    </>
                  ) : (
                    <>
                      <item.icon className="w-5 h-5 mr-2" />
                      {item.label}
                    </>
                  )}
                </Button>
              </motion.div>
            ))}
          </nav>
        </CardContent>
      </Card>

      {/* Daily Tasks - Детский дизайн */}
      <Card className={`${
        isKidMode 
          ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-300/50' 
          : 'bg-white/5 border-white/10'
      }`}>
        <CardHeader className="pb-2">
          <CardTitle className={`text-sm flex items-center gap-2 ${isKidMode ? 'text-lg' : ''}`}>
            {isKidMode ? (
              <>
                <span className="text-xl">🎯</span>
                <span className="font-bold">Задания на сегодня</span>
              </>
            ) : (
              <>
                <Target className="w-4 h-4 text-blue-400" />
                Задания на день
              </>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {dailyTasks.slice(0, 3).map((task, index) => (
            <motion.div 
              key={task.id} 
              className="flex items-center gap-3 p-2 rounded-xl bg-white/5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div 
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  task.completed 
                    ? 'bg-green-500/30 text-green-400' 
                    : 'bg-white/10'
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {task.completed ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-xl"
                  >
                    ✅
                  </motion.span>
                ) : task.type === 'topics' ? (
                  <span className="text-lg">📖</span>
                ) : task.type === 'quizzes' ? (
                  <span className="text-lg">⚡</span>
                ) : (
                  <span className="text-lg">⭐</span>
                )}
              </motion.div>
              <div className="flex-1 min-w-0">
                <p className={`truncate ${isKidMode ? 'font-medium' : 'text-sm'}`}>{task.title}</p>
                <Progress 
                  value={(task.progress / task.target) * 100} 
                  className={`h-2 mt-1 ${task.completed ? 'bg-green-500/20' : ''}`}
                />
              </div>
              <Badge 
                className={`${
                  task.completed 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                }`}
              >
                +{task.reward}
              </Badge>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Achievements - Детский дизайн */}
      {unlockedAchievements.length > 0 && (
        <Card className={`${
          isKidMode 
            ? 'bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border-2 border-amber-300/50' 
            : 'bg-white/5 border-white/10'
        }`}>
          <CardHeader className="pb-2">
            <CardTitle className={`text-sm flex items-center gap-2 ${isKidMode ? 'text-lg' : ''}`}>
              {isKidMode ? (
                <>
                  <span className="text-xl">🏆</span>
                  <span className="font-bold">Мои награды</span>
                </>
              ) : (
                <>
                  <Award className="w-4 h-4 text-amber-400" />
                  Недавние достижения
                </>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {unlockedAchievements.slice(0, 5).map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                >
                  <Badge 
                    className={`${
                      achievement.rarity === 'legendary' ? 'bg-gradient-to-r from-amber-500 to-orange-500 animate-pulse' :
                      achievement.rarity === 'epic' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                      achievement.rarity === 'rare' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 
                      'bg-gradient-to-r from-gray-400 to-gray-500'
                    } ${isKidMode ? 'text-sm py-1 px-3' : ''}`}
                  >
                    {achievement.title}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
