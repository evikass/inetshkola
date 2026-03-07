'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { GraduationCap, Sparkles, BookOpen } from 'lucide-react'

// Версия приложения
const APP_VERSION = 'v20260305.8'

interface SiteHeaderProps {
  className?: string
  compact?: boolean
}

// Анимированная буква
function AnimatedLetter({ letter, delay, isSpecial }: { letter: string; delay: number; isSpecial?: boolean }) {
  return (
    <motion.span
      className={cn(
        'inline-block',
        isSpecial && 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400'
      )}
      initial={{ opacity: 0, y: 20, rotateX: -90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        delay,
        duration: 0.5,
        type: 'spring',
        stiffness: 200,
        damping: 15
      }}
      whileHover={{
        scale: 1.2,
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      {letter}
    </motion.span>
  )
}

// Анимированная иконка книги
function FloatingBook({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        delay,
        duration: 0.8,
        type: 'spring',
        stiffness: 200
      }}
      whileHover={{
        scale: 1.2,
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.3 }
      }}
    >
      <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-purple-300" />
    </motion.div>
  )
}

// Компонент заголовка сайта
function SiteHeaderComponent({ className, compact = false }: SiteHeaderProps) {
  const title = 'ИНЕТШКОЛА'
  const letters = title.split('')

  return (
    <motion.header
      className={cn('relative', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center justify-center py-4 sm:py-6">
        {/* Основной заголовок */}
        <motion.div
          className="flex items-center justify-center gap-2 sm:gap-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Левая иконка */}
          <FloatingBook delay={0.1} />

          {/* Название */}
          <motion.h1
            className={cn(
              'font-bold text-transparent bg-clip-text bg-gradient-to-r',
              'from-purple-300 via-pink-300 to-blue-300',
              'tracking-wider select-none',
              compact ? 'text-2xl sm:text-3xl' : 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl'
            )}
            style={{
              textShadow: '0 0 40px rgba(168, 85, 247, 0.5)',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            {letters.map((letter, index) => (
              <AnimatedLetter
                key={index}
                letter={letter}
                delay={0.1 + index * 0.05}
                isSpecial={index === 0 || index === letters.length - 1}
              />
            ))}
          </motion.h1>

          {/* Правая иконка */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              type: 'spring',
              stiffness: 200
            }}
            whileHover={{
              scale: 1.2,
              rotate: [0, 10, -10, 0],
              transition: { duration: 0.3 }
            }}
          >
            <GraduationCap className={cn(
              'text-purple-300',
              compact ? 'w-6 h-6 sm:w-8 sm:h-8' : 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'
            )} />
          </motion.div>
        </motion.div>

        {/* Подзаголовок */}
        {!compact && (
          <motion.div
            className="flex items-center gap-2 mt-2 sm:mt-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
            <p className="text-xs sm:text-sm md:text-base text-white/60 text-center">
              Интерактивная школа для детей 6-17 лет
            </p>
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
          </motion.div>
        )}

        {/* Версия */}
        <motion.div
          className="mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <span className="text-xs text-white/30 font-mono">
            {APP_VERSION}
          </span>
        </motion.div>

        {/* Декоративная линия */}
        <motion.div
          className="mt-3 sm:mt-4 h-0.5 sm:h-1 rounded-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: '60%' }}
          transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
        />

        {/* Декоративные звёзды */}
        <motion.div
          className="absolute -top-2 left-1/4"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            y: [-5, -15, -5]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          <span className="text-lg sm:text-xl">✨</span>
        </motion.div>
        <motion.div
          className="absolute -top-1 right-1/4"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            y: [-5, -20, -5]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        >
          <span className="text-base sm:text-lg">⭐</span>
        </motion.div>
        <motion.div
          className="absolute top-1/2 -left-2 sm:-left-4"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            x: [-5, -15, -5]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        >
          <span className="text-sm sm:text-base">🌟</span>
        </motion.div>
        <motion.div
          className="absolute top-1/2 -right-2 sm:-right-4"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            x: [5, 15, 5]
          }}
          transition={{ duration: 2.8, repeat: Infinity, delay: 2 }}
        >
          <span className="text-sm sm:text-base">💫</span>
        </motion.div>
      </div>
    </motion.header>
  )
}

// Мемоизированный экспорт
const SiteHeader = memo(SiteHeaderComponent)
export default SiteHeader
