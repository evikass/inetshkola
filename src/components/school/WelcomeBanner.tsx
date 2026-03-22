'use client'

import { memo, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Sparkles, Star, BookOpen, Trophy, Zap, TrendingUp, Clock, Target } from 'lucide-react'
import { cn } from '@/lib/utils'

interface WelcomeBannerProps {
  userName?: string
  userLevel?: number
  totalXP?: number
  streak?: number
  completedTopics?: number
  dailyProgress?: number // 0-100
  greeting?: string
  className?: string
  compact?: boolean
}

// Время суток для приветствия
function getTimeGreeting(): { text: string; emoji: string } {
  const hour = new Date().getHours()
  
  if (hour >= 5 && hour < 12) {
    return { text: 'Доброе утро', emoji: '🌅' }
  } else if (hour >= 12 && hour < 17) {
    return { text: 'Добрый день', emoji: '☀️' }
  } else if (hour >= 17 && hour < 22) {
    return { text: 'Добрый вечер', emoji: '🌆' }
  } else {
    return { text: 'Доброй ночи', emoji: '🌙' }
  }
}

// Мотивационные сообщения
const motivationalMessages = [
  'Готов к новым знаниям? 📚',
  'Сегодня отличный день для учёбы! ✨',
  'Каждый урок — шаг к успеху! 🎯',
  'Знания — твоя суперсила! 💪',
  'Вперёд к новым достижениям! 🏆',
  'Учись с удовольствием! 🌟',
  'Ты справишься! 💫',
  'Сегодня ты узнаешь что-то новое! 🎉'
]

// Анимированные эмодзи
function AnimatedEmoji({ emoji, delay = 0 }: { emoji: string; delay?: number }) {
  return (
    <motion.span
      className="inline-block"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay, 
        type: 'spring', 
        stiffness: 300, 
        damping: 15 
      }}
      whileHover={{ 
        scale: 1.3, 
        rotate: [0, -15, 15, 0],
        transition: { duration: 0.3 }
      }}
    >
      {emoji}
    </motion.span>
  )
}

// Анимированная звезда
function FloatingStar({ delay = 0, className }: { delay?: number; className?: string }) {
  return (
    <motion.div
      className={cn('absolute', className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        y: [20, -10, -20, -30]
      }}
      transition={{ 
        delay,
        duration: 3,
        repeat: Infinity,
        repeatDelay: Math.random() * 2
      }}
    >
      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
    </motion.div>
  )
}

// Компонент статистики
function StatItem({ 
  icon: Icon, 
  value, 
  label, 
  color,
  delay 
}: { 
  icon: React.ElementType
  value: number | string
  label: string
  color: string
  delay: number
}) {
  return (
    <motion.div
      className="flex items-center gap-1.5 sm:gap-2"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      <div className={cn(
        'w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center',
        color
      )}>
        <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
      </div>
      <div>
        <div className="text-sm sm:text-lg font-bold text-white">{value}</div>
        <div className="text-[8px] sm:text-xs text-white/60">{label}</div>
      </div>
    </motion.div>
  )
}

// Основной компонент баннера
function WelcomeBannerComponent({
  userName,
  userLevel = 1,
  totalXP = 0,
  streak = 0,
  completedTopics = 0,
  dailyProgress = 0,
  greeting,
  className,
  compact = false
}: WelcomeBannerProps) {
  const timeGreeting = getTimeGreeting()
  const motivation = useMemo(() => 
    motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)],
    []
  )
  
  const displayGreeting = greeting || timeGreeting.text
  const displayEmoji = greeting ? '👋' : timeGreeting.emoji
  
  if (compact) {
    return (
      <motion.div
        className={cn('relative', className)}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 
          backdrop-blur-lg border-white/20 overflow-hidden">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AnimatedEmoji emoji={displayEmoji} />
              <div>
                <h2 className="text-lg font-bold text-white">
                  {displayGreeting}{userName ? `, ${userName}` : '!'}
                </h2>
                <p className="text-sm text-white/70">{motivation}</p>
              </div>
            </div>
            
            {streak > 0 && (
              <motion.div
                className="flex items-center gap-1 bg-orange-500/20 px-3 py-1 rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-lg">🔥</span>
                <span className="text-orange-300 font-bold">{streak}</span>
              </motion.div>
            )}
          </div>
        </Card>
      </motion.div>
    )
  }
  
  return (
    <motion.div
      className={cn('relative', className)}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Декоративные звёзды */}
      <FloatingStar delay={0.5} className="top-4 left-[10%]" />
      <FloatingStar delay={1} className="top-8 left-[30%]" />
      <FloatingStar delay={1.5} className="top-2 right-[20%]" />
      <FloatingStar delay={2} className="top-6 right-[35%]" />
      
      <Card className="relative overflow-hidden bg-gradient-to-br from-purple-600/30 via-pink-500/20 
        to-orange-500/30 backdrop-blur-xl border-white/20">
        {/* Анимированный градиентный фон */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-white/10 to-purple-500/0"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
        />
        
        <div className="p-3 sm:p-4 md:p-6 relative z-10">
          {/* Верхняя часть - приветствие */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-4">
              <motion.div
                className="text-3xl sm:text-4xl md:text-5xl"
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {displayEmoji}
              </motion.div>
              
              <div>
                <motion.h1 
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {displayGreeting}{userName ? `, ${userName}` : '!'}
                </motion.h1>
                
                <motion.p 
                  className="text-white/70 mt-0.5 sm:mt-1 text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {motivation}
                </motion.p>
              </div>
            </div>
            
            {/* Уровень и XP */}
            <motion.div
              className="flex items-center gap-2 sm:gap-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-right">
                <div className="text-[10px] sm:text-sm text-white/60">Уровень</div>
                <div className="text-lg sm:text-2xl font-bold text-white flex items-center gap-1 sm:gap-2">
                  <span className="text-purple-300">Lv.</span>
                  {userLevel}
                </div>
              </div>
              
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 
                flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </motion.div>
          </div>
          
          {/* Прогресс дня */}
          {dailyProgress > 0 && (
            <motion.div
              className="mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center justify-between mb-1 sm:mb-2">
                <span className="text-[10px] sm:text-sm text-white/70 flex items-center gap-1 sm:gap-2">
                  <Target className="w-3 h-3 sm:w-4 sm:h-4" />
                  Прогресс дня
                </span>
                <span className="text-[10px] sm:text-sm font-medium text-white">{dailyProgress}%</span>
              </div>
              <div className="h-1.5 sm:h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${dailyProgress}%` }}
                  transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          )}
          
          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            <StatItem
              icon={Zap}
              value={totalXP}
              label="Опыт (XP)"
              color="bg-gradient-to-br from-yellow-400 to-orange-500"
              delay={0.6}
            />
            <StatItem
              icon={TrendingUp}
              value={streak}
              label="Серия дней"
              color="bg-gradient-to-br from-orange-400 to-red-500"
              delay={0.7}
            />
            <StatItem
              icon={BookOpen}
              value={completedTopics}
              label="Изучено тем"
              color="bg-gradient-to-br from-blue-400 to-cyan-500"
              delay={0.8}
            />
            <StatItem
              icon={Trophy}
              value={userLevel}
              label="Достигнутый уровень"
              color="bg-gradient-to-br from-purple-400 to-pink-500"
              delay={0.9}
            />
          </div>
        </div>
        
        {/* Декоративные элементы */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl" />
      </Card>
    </motion.div>
  )
}

// Мемоизированный экспорт
const WelcomeBanner = memo(WelcomeBannerComponent)

export default WelcomeBanner
