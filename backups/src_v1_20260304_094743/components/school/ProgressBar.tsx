'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProgressBarProps {
  value: number // 0-100
  max?: number
  showValue?: boolean
  valuePrefix?: string
  valueSuffix?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'gradient' | 'animated' | 'segments'
  color?: 'purple' | 'blue' | 'green' | 'orange' | 'pink' | 'rainbow'
  animated?: boolean
  segments?: number // для variant='segments'
  className?: string
  label?: string
  sublabel?: string
}

// Конфигурация градиентов
const gradientColors = {
  purple: 'from-purple-500 to-violet-600',
  blue: 'from-blue-500 to-cyan-600',
  green: 'from-green-500 to-emerald-600',
  orange: 'from-orange-500 to-amber-600',
  pink: 'from-pink-500 to-rose-600',
  rainbow: 'from-red-500 via-yellow-500 to-green-500'
}

// Размеры
const sizeClasses = {
  sm: { bar: 'h-1.5', text: 'text-xs' },
  md: { bar: 'h-2.5', text: 'text-sm' },
  lg: { bar: 'h-4', text: 'text-base' }
}

// Основной компонент
function ProgressBarComponent({
  value,
  max = 100,
  showValue = false,
  valuePrefix = '',
  valueSuffix = '%',
  size = 'md',
  variant = 'default',
  color = 'purple',
  animated = true,
  segments,
  className,
  label,
  sublabel
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))
  const sizes = sizeClasses[size]
  
  return (
    <div className={cn('w-full', className)}>
      {/* Лейбл */}
      {(label || showValue) && (
        <div className="flex items-center justify-between mb-1.5">
          {label && (
            <span className={cn('text-white/70', sizes.text)}>
              {label}
            </span>
          )}
          {showValue && (
            <motion.span
              className={cn('font-medium text-white', sizes.text)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={value}
            >
              {valuePrefix}{Math.round(percentage)}{valueSuffix}
            </motion.span>
          )}
        </div>
      )}
      
      {/* Трек */}
      <div className={cn(
        'relative w-full bg-white/10 rounded-full overflow-hidden',
        sizes.bar
      )}>
        {/* Сегменты */}
        {variant === 'segments' && segments && (
          <div className="absolute inset-0 flex gap-0.5 px-0.5">
            {[...Array(segments)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  'flex-1 rounded-sm transition-colors duration-300',
                  i < (percentage / 100) * segments
                    ? 'bg-white/30'
                    : 'bg-transparent'
                )}
              />
            ))}
          </div>
        )}
        
        {/* Полоса прогресса */}
        <motion.div
          className={cn(
            'h-full rounded-full relative overflow-hidden',
            variant === 'gradient' || variant === 'animated'
              ? `bg-gradient-to-r ${gradientColors[color]}`
              : variant === 'segments'
                ? 'bg-white/80'
                : color === 'rainbow'
                  ? `bg-gradient-to-r ${gradientColors.rainbow}`
                  : `bg-${color}-500`
          )}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Анимация блеска */}
          {animated && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatDelay: 2,
                ease: 'easeInOut'
              }}
            />
          )}
        </motion.div>
        
        {/* Пульсация на 100% */}
        {percentage >= 100 && animated && (
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            animate={{ scale: [1, 1.02, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </div>
      
      {/* Подпись */}
      {sublabel && (
        <p className="text-xs text-white/50 mt-1">{sublabel}</p>
      )}
    </div>
  )
}

// Круговой прогресс
export function CircularProgress({
  value,
  max = 100,
  size = 120,
  strokeWidth = 8,
  color = 'purple',
  showValue = true,
  label,
  className
}: {
  value: number
  max?: number
  size?: number
  strokeWidth?: number
  color?: 'purple' | 'blue' | 'green' | 'orange' | 'pink'
  showValue?: boolean
  label?: string
  className?: string
}) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (percentage / 100) * circumference
  
  const colorClasses = {
    purple: 'stroke-purple-500',
    blue: 'stroke-blue-500',
    green: 'stroke-green-500',
    orange: 'stroke-orange-500',
    pink: 'stroke-pink-500'
  }
  
  return (
    <div className={cn('relative inline-flex flex-col items-center', className)}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Фоновый круг */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={strokeWidth}
        />
        
        {/* Прогресс */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className={colorClasses[color]}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset
          }}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </svg>
      
      {/* Значение в центре */}
      {showValue && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            {Math.round(percentage)}%
          </motion.span>
          {label && (
            <span className="text-xs text-white/60">{label}</span>
          )}
        </div>
      )}
    </div>
  )
}

// Полукруговой прогресс
export function SemiCircularProgress({
  value,
  max = 100,
  size = 160,
  strokeWidth = 12,
  color = 'purple',
  showValue = true,
  label,
  className
}: {
  value: number
  max?: number
  size?: number
  strokeWidth?: number
  color?: 'purple' | 'blue' | 'green' | 'orange' | 'pink'
  showValue?: boolean
  label?: string
  className?: string
}) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))
  const radius = (size - strokeWidth) / 2
  const circumference = radius * Math.PI
  const offset = circumference - (percentage / 100) * circumference
  
  const colorClasses = {
    purple: 'stroke-purple-500',
    blue: 'stroke-blue-500',
    green: 'stroke-green-500',
    orange: 'stroke-orange-500',
    pink: 'stroke-pink-500'
  }
  
  return (
    <div className={cn('relative inline-flex flex-col items-center', className)}>
      <svg
        width={size}
        height={size / 2 + 10}
        className="overflow-visible"
      >
        {/* Фоновая дуга */}
        <path
          d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        
        {/* Прогресс */}
        <motion.path
          d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className={colorClasses[color]}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset
          }}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </svg>
      
      {/* Значение внизу */}
      {showValue && (
        <div className="absolute bottom-0 flex flex-col items-center">
          <motion.span
            className="text-xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {Math.round(percentage)}%
          </motion.span>
          {label && (
            <span className="text-xs text-white/60">{label}</span>
          )}
        </div>
      )}
    </div>
  )
}

// Многосегментный прогресс (для нескольких значений)
export function MultiProgress({
  segments,
  size = 'md',
  className
}: {
  segments: Array<{
    value: number
    color: string
    label?: string
  }>
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const total = segments.reduce((sum, seg) => sum + seg.value, 0)
  
  return (
    <div className={cn('w-full', className)}>
      <div className={cn(
        'flex w-full rounded-full overflow-hidden bg-white/10',
        sizeClasses[size].bar
      )}>
        {segments.map((segment, index) => {
          const width = (segment.value / total) * 100
          
          return (
            <motion.div
              key={index}
              className={cn('h-full', `bg-${segment.color}-500`)}
              initial={{ width: 0 }}
              animate={{ width: `${width}%` }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            />
          )
        })}
      </div>
      
      {/* Легенда */}
      <div className="flex flex-wrap gap-3 mt-2">
        {segments.map((segment, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <div className={cn(
              'w-2.5 h-2.5 rounded-full',
              `bg-${segment.color}-500`
            )} />
            <span className="text-xs text-white/70">
              {segment.label || `Сегмент ${index + 1}`}: {segment.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Шаговый прогресс (Stepper)
export function StepProgress({
  currentStep,
  totalSteps,
  size = 'md',
  color = 'purple',
  showLabels,
  labels,
  className
}: {
  currentStep: number
  totalSteps: number
  size?: 'sm' | 'md' | 'lg'
  color?: 'purple' | 'blue' | 'green' | 'orange' | 'pink'
  showLabels?: boolean
  labels?: string[]
  className?: string
}) {
  const sizes = {
    sm: { dot: 'w-2 h-2', line: 'h-0.5' },
    md: { dot: 'w-3 h-3', line: 'h-1' },
    lg: { dot: 'w-4 h-4', line: 'h-1.5' }
  }
  
  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-center justify-between">
        {[...Array(totalSteps)].map((_, index) => {
          const isCompleted = index < currentStep
          const isCurrent = index === currentStep - 1
          
          return (
            <div key={index} className="flex-1 flex items-center">
              {/* Точка */}
              <motion.div
                className={cn(
                  'rounded-full flex items-center justify-center',
                  sizes[size].dot,
                  isCompleted || isCurrent
                    ? `bg-${color}-500`
                    : 'bg-white/20'
                )}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {isCompleted && (
                  <motion.svg
                    className="w-2 h-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </motion.svg>
                )}
              </motion.div>
              
              {/* Линия */}
              {index < totalSteps - 1 && (
                <div className={cn(
                  'flex-1 mx-1 rounded-full',
                  sizes[size].line,
                  index < currentStep - 1 ? `bg-${color}-500` : 'bg-white/20'
                )} />
              )}
            </div>
          )
        })}
      </div>
      
      {/* Лейблы */}
      {showLabels && labels && (
        <div className="flex justify-between mt-2">
          {labels.map((label, index) => (
            <span
              key={index}
              className={cn(
                'text-xs',
                index < currentStep ? 'text-white/70' : 'text-white/30'
              )}
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

// Мемоизированный экспорт
const ProgressBar = memo(ProgressBarComponent)

export default ProgressBar
