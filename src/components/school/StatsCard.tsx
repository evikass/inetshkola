'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { 
  TrendingUp, TrendingDown, Minus,
  Star, Zap, Clock, Target, Trophy, 
  Flame, Award, BookOpen, CheckCircle,
  type LucideIcon
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatsCardProps {
  title: string
  value: number | string
  subtitle?: string
  icon?: LucideIcon
  iconColor?: string
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
  progress?: number // 0-100
  variant?: 'default' | 'gradient' | 'glow' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  delay?: number
  animateValue?: boolean
}

// Конфигурация цветов для иконок
const iconColorClasses: Record<string, { bg: string; icon: string }> = {
  purple: { bg: 'bg-purple-500/20', icon: 'text-purple-400' },
  blue: { bg: 'bg-blue-500/20', icon: 'text-blue-400' },
  green: { bg: 'bg-green-500/20', icon: 'text-green-400' },
  orange: { bg: 'bg-orange-500/20', icon: 'text-orange-400' },
  pink: { bg: 'bg-pink-500/20', icon: 'text-pink-400' },
  yellow: { bg: 'bg-yellow-500/20', icon: 'text-yellow-400' },
  cyan: { bg: 'bg-cyan-500/20', icon: 'text-cyan-400' },
  red: { bg: 'bg-red-500/20', icon: 'text-red-400' }
}

// Компонент анимированного числа
function AnimatedNumber({ 
  value, 
  duration = 1 
}: { 
  value: number
  duration?: number 
}) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      key={value}
    >
      <motion.span
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: duration * 0.5 }}
      >
        {value.toLocaleString()}
      </motion.span>
    </motion.span>
  )
}

// Основной компонент
function StatsCardComponent({
  title,
  value,
  subtitle,
  icon: Icon,
  iconColor = 'purple',
  trend,
  trendValue,
  progress,
  variant = 'default',
  size = 'md',
  className,
  delay = 0,
  animateValue = true
}: StatsCardProps) {
  const colors = iconColorClasses[iconColor] || iconColorClasses.purple
  const isNumber = typeof value === 'number'
  
  const sizeClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  }
  
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  }
  
  const valueSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ y: -2 }}
      className={cn('relative', className)}
    >
      <Card className={cn(
        'relative overflow-hidden transition-all duration-300',
        sizeClasses[size],
        variant === 'default' && 'bg-white/10 backdrop-blur-lg border-white/20 hover:border-white/40',
        variant === 'gradient' && 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30',
        variant === 'glow' && 'bg-white/10 backdrop-blur-lg border-purple-500/30 shadow-lg shadow-purple-500/20',
        variant === 'minimal' && 'bg-white/5 border-white/10'
      )}>
        <div className="flex items-start justify-between">
          {/* Иконка */}
          {Icon && (
            <motion.div
              className={cn(
                'rounded-xl flex items-center justify-center',
                colors.bg,
                size === 'sm' ? 'w-10 h-10' : size === 'md' ? 'w-12 h-12' : 'w-14 h-14'
              )}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Icon className={cn(iconSizes[size], colors.icon)} />
            </motion.div>
          )}
          
          {/* Тренд */}
          {trend && trendValue && (
            <motion.div
              className={cn(
                'flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium',
                trend === 'up' && 'bg-green-500/20 text-green-400',
                trend === 'down' && 'bg-red-500/20 text-red-400',
                trend === 'neutral' && 'bg-gray-500/20 text-gray-400'
              )}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 0.2 }}
            >
              {trend === 'up' && <TrendingUp className="w-3 h-3" />}
              {trend === 'down' && <TrendingDown className="w-3 h-3" />}
              {trend === 'neutral' && <Minus className="w-3 h-3" />}
              {trendValue}
            </motion.div>
          )}
        </div>
        
        {/* Значение */}
        <div className="mt-3">
          <motion.p 
            className={cn(
              'font-bold text-white',
              valueSizes[size]
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.1 }}
          >
            {isNumber && animateValue ? (
              <AnimatedNumber value={value} />
            ) : (
              value
            )}
          </motion.p>
          
          <p className="text-sm text-white/60 mt-1">{title}</p>
          {subtitle && (
            <p className="text-xs text-white/40 mt-0.5">{subtitle}</p>
          )}
        </div>
        
        {/* Прогресс бар */}
        {progress !== undefined && (
          <motion.div
            className="mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.2 }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-white/50">Прогресс</span>
              <span className="text-xs text-white/70">{progress}%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className={cn(
                  'h-full rounded-full',
                  progress >= 100 ? 'bg-green-400' :
                  progress >= 50 ? 'bg-yellow-400' :
                  'bg-purple-400'
                )}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ delay: delay + 0.3, duration: 0.8, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        )}
        
        {/* Декоративный градиент */}
        {variant === 'gradient' && (
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl" />
        )}
      </Card>
    </motion.div>
  )
}

// Группа статистических карточек
export function StatsGrid({ 
  children,
  columns = 4,
  className 
}: { 
  children: React.ReactNode
  columns?: 2 | 3 | 4
  className?: string
}) {
  const gridClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  }
  
  return (
    <div className={cn('grid gap-4', gridClasses[columns], className)}>
      {children}
    </div>
  )
}

// Предустановленные карточки статистики
export function XPStatsCard({ 
  xp, 
  trend, 
  trendValue,
  delay = 0 
}: { 
  xp: number
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
  delay?: number
}) {
  return (
    <StatsCard
      title="Опыт (XP)"
      value={xp}
      icon={Zap}
      iconColor="yellow"
      trend={trend}
      trendValue={trendValue}
      variant="gradient"
      delay={delay}
    />
  )
}

export function StreakStatsCard({ 
  streak,
  delay = 0 
}: { 
  streak: number
  delay?: number
}) {
  return (
    <StatsCard
      title="Серия дней"
      value={streak}
      subtitle={streak >= 7 ? 'Отлично!' : `${7 - streak} дней до награды`}
      icon={Flame}
      iconColor="orange"
      trend={streak >= 7 ? 'up' : 'neutral'}
      trendValue={streak >= 7 ? '🔥' : undefined}
      variant={streak >= 7 ? 'glow' : 'default'}
      delay={delay}
    />
  )
}

export function TopicsStatsCard({ 
  completed, 
  total,
  delay = 0 
}: { 
  completed: number
  total: number
  delay?: number
}) {
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0
  
  return (
    <StatsCard
      title="Изучено тем"
      value={`${completed}/${total}`}
      icon={BookOpen}
      iconColor="blue"
      progress={progress}
      delay={delay}
    />
  )
}

export function LevelStatsCard({ 
  level,
  xp,
  xpToNext,
  delay = 0 
}: { 
  level: number
  xp: number
  xpToNext: number
  delay?: number
}) {
  const progress = xpToNext > 0 ? Math.round((xp / xpToNext) * 100) : 0
  
  return (
    <StatsCard
      title="Уровень"
      value={level}
      subtitle={`${xp}/${xpToNext} XP`}
      icon={Trophy}
      iconColor="purple"
      progress={progress}
      variant="gradient"
      delay={delay}
    />
  )
}

export function TimeStatsCard({ 
  minutes,
  delay = 0 
}: { 
  minutes: number
  delay?: number
}) {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  const display = hours > 0 ? `${hours}ч ${mins}м` : `${mins}м`
  
  return (
    <StatsCard
      title="Время учёбы"
      value={display}
      icon={Clock}
      iconColor="cyan"
      delay={delay}
    />
  )
}

export function QuizStatsCard({ 
  correct,
  total,
  delay = 0 
}: { 
  correct: number
  total: number
  delay?: number
}) {
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
  
  return (
    <StatsCard
      title="Правильных ответов"
      value={`${percentage}%`}
      subtitle={`${correct} из ${total}`}
      icon={CheckCircle}
      iconColor="green"
      trend={percentage >= 80 ? 'up' : percentage >= 50 ? 'neutral' : 'down'}
      trendValue={percentage >= 80 ? 'Отлично!' : percentage >= 50 ? 'Нормально' : 'Нужна практика'}
      delay={delay}
    />
  )
}

export function AchievementStatsCard({ 
  count,
  total,
  delay = 0 
}: { 
  count: number
  total: number
  delay?: number
}) {
  return (
    <StatsCard
      title="Достижений"
      value={count}
      subtitle={`из ${total} возможных`}
      icon={Award}
      iconColor="pink"
      progress={(count / total) * 100}
      delay={delay}
    />
  )
}

// Мемоизированный экспорт
const StatsCard = memo(StatsCardComponent)

export default StatsCard
