'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { 
  BookOpen, Calculator, Pen, Clock, Calendar, Trophy,
  Brain, Sparkles, Gamepad2, Target, Star, Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface QuickAction {
  id: string
  title: string
  description: string
  icon: React.ElementType
  color: string
  gradient: string
  xp?: number
  badge?: string
}

const quickActions: QuickAction[] = [
  {
    id: 'daily-quiz',
    title: 'Ежедневный тест',
    description: 'Проверь свои знания',
    icon: Target,
    color: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    xp: 25,
    badge: 'Ежедневно'
  },
  {
    id: 'math-practice',
    title: 'Практика математики',
    description: 'Реши 5 примеров',
    icon: Calculator,
    color: 'text-blue-400',
    gradient: 'from-blue-500 to-cyan-500',
    xp: 15
  },
  {
    id: 'reading',
    title: 'Чтение',
    description: 'Прочитай текст',
    icon: BookOpen,
    color: 'text-green-400',
    gradient: 'from-green-500 to-emerald-500',
    xp: 20
  },
  {
    id: 'writing',
    title: 'Письмо',
    description: 'Напиши диктант',
    icon: Pen,
    color: 'text-orange-400',
    gradient: 'from-orange-500 to-red-500',
    xp: 20
  },
  {
    id: 'timer',
    title: 'Таймер учёбы',
    description: 'Начни сессию',
    icon: Clock,
    color: 'text-cyan-400',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'schedule',
    title: 'Расписание',
    description: 'Планируй уроки',
    icon: Calendar,
    color: 'text-indigo-400',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'achievements',
    title: 'Достижения',
    description: 'Твои награды',
    icon: Trophy,
    color: 'text-yellow-400',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'games',
    title: 'Игры',
    description: 'Учись играя',
    icon: Gamepad2,
    color: 'text-pink-400',
    gradient: 'from-pink-500 to-rose-500'
  }
]

interface QuickActionsProps {
  onAction?: (actionId: string) => void
  className?: string
  compact?: boolean
}

function QuickActionsComponent({ onAction, className, compact = false }: QuickActionsProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {!compact && (
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          <h3 className="text-lg font-bold text-white">Быстрые действия</h3>
        </div>
      )}
      
      <div className={cn(
        'grid gap-3',
        compact ? 'grid-cols-4' : 'grid-cols-2 sm:grid-cols-4'
      )}>
        {quickActions.map((action, index) => (
          <motion.div
            key={action.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card 
              className={cn(
                'cursor-pointer overflow-hidden transition-all duration-300 group',
                compact 
                  ? 'p-3 bg-white/5 border-white/10 hover:border-white/30'
                  : 'p-4 bg-white/10 backdrop-blur-lg border-white/20 hover:border-white/40'
              )}
              onClick={() => onAction?.(action.id)}
            >
              {/* Градиентный фон при наведении */}
              <motion.div
                className={cn(
                  'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity',
                  action.gradient
                )}
              />
              
              <div className="relative z-10">
                {/* Иконка */}
                <motion.div
                  className={cn(
                    'rounded-xl flex items-center justify-center mb-2 bg-gradient-to-br',
                    action.gradient,
                    compact ? 'w-10 h-10' : 'w-12 h-12'
                  )}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <action.icon className={cn(
                    'text-white',
                    compact ? 'w-5 h-5' : 'w-6 h-6'
                  )} />
                </motion.div>
                
                {/* Название */}
                <h4 className={cn(
                  'font-bold text-white',
                  compact ? 'text-xs' : 'text-sm'
                )}>
                  {action.title}
                </h4>
                
                {!compact && (
                  <>
                    <p className="text-xs text-white/60 mt-1">
                      {action.description}
                    </p>
                    
                    {/* XP или бейдж */}
                    <div className="mt-2 flex items-center gap-2">
                      {action.xp && (
                        <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          +{action.xp} XP
                        </span>
                      )}
                      {action.badge && (
                        <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full">
                          {action.badge}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Мини-версия для сайдбара
function QuickActionsMini({ onAction, className }: { onAction?: (actionId: string) => void; className?: string }) {
  const mainActions = quickActions.slice(0, 4)
  
  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-4 h-4 text-purple-400" />
        <span className="text-sm font-medium text-white/80">Быстрый старт</span>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        {mainActions.map((action, index) => (
          <motion.button
            key={action.id}
            onClick={() => onAction?.(action.id)}
            className={cn(
              'flex items-center gap-2 p-2 rounded-lg transition-all',
              'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20'
            )}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={cn(
              'w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br',
              action.gradient
            )}>
              <action.icon className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs text-white/80 text-left">{action.title}</span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

const QuickActions = memo(QuickActionsComponent)

export { QuickActions, QuickActionsMini, quickActions }
export default QuickActions
