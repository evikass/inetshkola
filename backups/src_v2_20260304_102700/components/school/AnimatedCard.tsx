'use client'

import { memo } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface AnimatedCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'glow' | 'gradient' | 'glass'
  hoverScale?: number
  hoverRotate?: number
  glowColor?: string
  gradientFrom?: string
  gradientTo?: string
  delay?: number
}

// Варианты анимации
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  },
  hover: {
    y: -5,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 15
    }
  }
}

// Компонент свечения при наведении
function GlowEffect({ 
  isActive, 
  color = 'rgba(168, 85, 247, 0.4)' 
}: { 
  isActive: boolean
  color?: string 
}) {
  return (
    <motion.div
      className="absolute inset-0 rounded-inherit pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      style={{
        background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
        filter: 'blur(20px)',
        transform: 'scale(1.1)'
      }}
    />
  )
}

// Основной компонент анимированной карточки
function AnimatedCardComponent({
  children,
  className,
  variant = 'default',
  hoverScale = 1.02,
  hoverRotate = 0,
  glowColor = 'rgba(168, 85, 247, 0.4)',
  gradientFrom,
  gradientTo,
  delay = 0,
  ...props
}: AnimatedCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ delay }}
      {...props}
      className="relative"
    >
      <motion.div
        whileHover={{ 
          scale: hoverScale, 
          rotate: hoverRotate 
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ 
          type: 'spring', 
          stiffness: 400, 
          damping: 17 
        }}
      >
        {variant === 'glow' && (
          <GlowEffect isActive={true} color={glowColor} />
        )}
        
        <Card
          className={cn(
            'relative overflow-hidden transition-all duration-300',
            // Вариант по умолчанию
            variant === 'default' && 'bg-white/10 backdrop-blur-lg border-white/20',
            // Вариант с градиентом
            variant === 'gradient' && [
              'border-0',
              gradientFrom && gradientTo 
                ? `bg-gradient-to-br ${gradientFrom} ${gradientTo}`
                : 'bg-gradient-to-br from-purple-500/20 to-pink-500/20'
            ],
            // Вариант с эффектом стекла
            variant === 'glass' && 'bg-white/5 backdrop-blur-xl border-white/10',
            // Вариант со свечением
            variant === 'glow' && 'bg-white/10 backdrop-blur-lg border-purple-500/30',
            className
          )}
        >
          {/* Анимированная полоска сверху */}
          {variant === 'gradient' && (
            <motion.div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
          
          {/* Эффект наведения - градиент сверху */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 opacity-0 pointer-events-none"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Контент */}
          <div className="relative z-10">
            {children}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  )
}

// Компонент для группы карточек с последовательной анимацией
export function AnimatedCardGrid({ 
  children,
  staggerDelay = 0.1,
  className
}: { 
  children: React.ReactNode
  staggerDelay?: number
  className?: string
}) {
  return (
    <motion.div
      className={cn('grid gap-4', className)}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

// Компонент с эффектом "магнита" - следует за курсором
export function MagneticCard({
  children,
  className,
  strength = 0.3,
  ...props
}: AnimatedCardProps & { strength?: number }) {
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <Card className={cn(
        'bg-white/10 backdrop-blur-lg border-white/20 transition-all duration-300',
        'hover:shadow-xl hover:shadow-purple-500/20',
        className
      )}>
        {children}
      </Card>
    </motion.div>
  )
}

// Компонент с эффектом "flip" - переворот
export function FlipCard({
  frontContent,
  backContent,
  className,
  flipOn = 'hover'
}: {
  frontContent: React.ReactNode
  backContent: React.ReactNode
  className?: string
  flipOn?: 'hover' | 'click'
}) {
  return (
    <motion.div
      className={cn('relative cursor-pointer perspective-1000', className)}
      whileHover={flipOn === 'hover' ? { rotateY: 180 } : undefined}
      whileTap={flipOn === 'click' ? { rotateY: 180 } : undefined}
      transition={{ duration: 0.6, type: 'spring' }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Front */}
      <div 
        className="absolute inset-0 backface-hidden"
        style={{ backfaceVisibility: 'hidden' }}
      >
        <Card className="h-full bg-white/10 backdrop-blur-lg border-white/20">
          {frontContent}
        </Card>
      </div>
      
      {/* Back */}
      <div 
        className="absolute inset-0"
        style={{ 
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)'
        }}
      >
        <Card className="h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30">
          {backContent}
        </Card>
      </div>
    </motion.div>
  )
}

// Компонент с пульсирующей анимацией
export function PulseCard({
  children,
  className,
  pulseColor = 'purple',
  ...props
}: AnimatedCardProps & { pulseColor?: string }) {
  const pulseColors: Record<string, string> = {
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500'
  }
  
  return (
    <motion.div
      className="relative"
      {...props}
    >
      {/* Пульсирующий фон */}
      <motion.div
        className={cn(
          'absolute inset-0 rounded-xl opacity-30',
          pulseColors[pulseColor] || pulseColors.purple
        )}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      <Card className={cn(
        'relative bg-white/10 backdrop-blur-lg border-white/20',
        className
      )}>
        {children}
      </Card>
    </motion.div>
  )
}

// Мемоизированный экспорт
const AnimatedCard = memo(AnimatedCardComponent)

export default AnimatedCard
