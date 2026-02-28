'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  BookOpen, Gamepad2, TrendingUp, Trophy, Zap, 
  Star, Target, Settings, User, Home
} from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'
import { useState } from 'react'

interface FloatingNavProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  selectedGrade?: number
}

export default function FloatingNav({ activeTab, setActiveTab, selectedGrade = 0 }: FloatingNavProps) {
  const { userStats, getRank } = useSchool()
  const rank = getRank()
  const [expanded, setExpanded] = useState(false)
  
  // Детский режим для младших классов
  const isKidMode = selectedGrade <= 2

  // Навигационные пункты
  const navItems = isKidMode ? [
    { id: 'learn', label: 'Уроки', icon: BookOpen, emoji: '📚', color: 'from-pink-500 to-rose-600' },
    { id: 'games', label: 'Игры', icon: Gamepad2, emoji: '🎮', color: 'from-purple-500 to-pink-600' },
    { id: 'progress', label: 'Прогресс', icon: Star, emoji: '⭐', color: 'from-yellow-500 to-orange-600' },
    { id: 'achievements', label: 'Награды', icon: Trophy, emoji: '🏆', color: 'from-amber-500 to-yellow-600' },
  ] : [
    { id: 'learn', label: 'Обучение', icon: Target, color: 'from-blue-500 to-cyan-600' },
    { id: 'games', label: 'Игры', icon: Gamepad2, color: 'from-purple-500 to-pink-600' },
    { id: 'progress', label: 'Прогресс', icon: TrendingUp, color: 'from-green-500 to-emerald-600' },
    { id: 'achievements', label: 'Достижения', icon: Trophy, color: 'from-amber-500 to-yellow-600' },
    { id: 'tools', label: 'Инструменты', icon: Zap, color: 'from-orange-500 to-red-600' },
  ]

  return (
    <>
      {/* Основная плавающая навигация слева */}
      <motion.div 
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Профиль / Уровень */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            className={`w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 
              flex items-center justify-center shadow-lg shadow-purple-500/30
              border-2 border-white/20 backdrop-blur-sm
              ${isKidMode ? 'ring-4 ring-pink-400/50' : ''}`}
            onClick={() => setExpanded(!expanded)}
          >
            <motion.span 
              className="text-2xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              {rank.icon}
            </motion.span>
          </button>
          
          {/* Уровень */}
          <motion.div
            className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full 
              bg-gradient-to-r from-yellow-400 to-orange-500 
              flex items-center justify-center text-xs font-bold text-white
              border-2 border-white shadow-md"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            {userStats.level}
          </motion.div>
        </motion.div>

        {/* Разделитель */}
        <div className="w-8 h-0.5 bg-white/20 rounded-full mx-auto" />

        {/* Навигационные кнопки */}
        {navItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * (index + 1) }}
            whileHover={{ x: 5 }}
          >
            <motion.button
              className={`w-12 h-12 rounded-full flex items-center justify-center
                transition-all duration-300 relative group
                ${activeTab === item.id 
                  ? `bg-gradient-to-br ${item.color} shadow-lg scale-110` 
                  : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'
                }
                ${isKidMode ? 'border-2 border-white/30' : 'border border-white/10'}
              `}
              onClick={() => setActiveTab(item.id)}
              whileHover={{ scale: activeTab === item.id ? 1.1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {'emoji' in item ? (
                <span className="text-xl">{item.emoji}</span>
              ) : (
                <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-white' : 'text-gray-300'}`} />
              )}
              
              {/* Подсказка */}
              <motion.div
                className="absolute left-full ml-3 px-3 py-1.5 rounded-lg
                  bg-gray-900/95 backdrop-blur-sm text-white text-sm font-medium
                  whitespace-nowrap opacity-0 group-hover:opacity-100
                  pointer-events-none shadow-xl border border-white/10
                  transition-opacity"
                initial={{ x: -10 }}
                whileInView={{ x: 0 }}
              >
                {item.label}
                {/* Стрелка */}
                <div className="absolute right-full top-1/2 -translate-y-1/2 
                  border-8 border-transparent border-r-gray-900/95" />
              </motion.div>

              {/* Индикатор активности */}
              {activeTab === item.id && (
                <motion.div
                  className="absolute -right-1 w-2 h-2 rounded-full bg-white"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          </motion.div>
        ))}

        {/* Разделитель */}
        <div className="w-8 h-0.5 bg-white/20 rounded-full mx-auto" />

        {/* Статистика */}
        <motion.div
          className="flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20
              flex items-center justify-center border border-yellow-500/30"
            whileHover={{ scale: 1.1 }}
          >
            <Star className="w-5 h-5 text-yellow-400" />
          </motion.div>
          <span className="text-xs text-yellow-400 font-bold">{userStats.totalPoints}</span>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20
              flex items-center justify-center border border-orange-500/30"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-lg">🔥</span>
          </motion.div>
          <span className="text-xs text-orange-400 font-bold">{userStats.streak}</span>
        </motion.div>
      </motion.div>

      {/* Расширенная панель профиля */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="fixed left-20 top-1/2 -translate-y-1/2 z-50
              bg-gradient-to-br from-purple-900/95 to-blue-900/95 
              backdrop-blur-xl rounded-2xl p-4 border border-white/20
              shadow-2xl shadow-purple-500/20"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-center mb-4">
              <motion.div 
                className="text-5xl mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {rank.icon}
              </motion.div>
              <h3 className="font-bold text-lg text-white">{userStats.rank}</h3>
              <p className="text-sm text-gray-400">Уровень {userStats.level}</p>
            </div>
            
            {/* Прогресс опыта */}
            <div className="mb-4">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">Опыт</span>
                <span className="text-yellow-400 font-bold">{userStats.experience}/100 XP</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${userStats.experience}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded-xl bg-yellow-500/20">
                <p className="text-xl font-bold text-yellow-400">{userStats.totalPoints}</p>
                <p className="text-xs text-gray-400">Очков</p>
              </div>
              <div className="p-2 rounded-xl bg-orange-500/20">
                <p className="text-xl font-bold text-orange-400">{userStats.streak}</p>
                <p className="text-xs text-gray-400">Серия</p>
              </div>
              <div className="p-2 rounded-xl bg-green-500/20">
                <p className="text-xl font-bold text-green-400">{userStats.topicsCompleted}</p>
                <p className="text-xs text-gray-400">Тем</p>
              </div>
            </div>

            {/* Кнопка закрытия */}
            <button
              className="mt-4 w-full py-2 rounded-xl bg-white/10 hover:bg-white/20
                text-white text-sm font-medium transition-colors"
              onClick={() => setExpanded(false)}
            >
              Закрыть
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Мобильная навигация снизу */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden
          bg-gradient-to-t from-slate-900/95 to-slate-900/80 backdrop-blur-xl
          border-t border-white/10 px-2 py-2"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex justify-around items-center gap-1">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl
                transition-all duration-300
                ${activeTab === item.id 
                  ? `bg-gradient-to-br ${item.color}` 
                  : 'hover:bg-white/10'
                }`}
              onClick={() => setActiveTab(item.id)}
              whileTap={{ scale: 0.95 }}
            >
              {'emoji' in item ? (
                <span className="text-xl">{item.emoji}</span>
              ) : (
                <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-white' : 'text-gray-400'}`} />
              )}
              <span className={`text-xs ${activeTab === item.id ? 'text-white font-bold' : 'text-gray-400'}`}>
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  )
}
