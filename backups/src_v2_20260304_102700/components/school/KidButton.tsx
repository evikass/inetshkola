'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

// Предустановленные цветовые схемы
const colorSchemes = {
  pink: {
    gradient: 'from-pink-400 via-rose-400 to-fuchsia-400',
    shadow: 'shadow-pink-500/40',
    glow: 'rgba(244, 114, 182, 0.5)'
  },
  blue: {
    gradient: 'from-blue-400 via-cyan-400 to-sky-400',
    shadow: 'shadow-blue-500/40',
    glow: 'rgba(56, 189, 248, 0.5)'
  },
  yellow: {
    gradient: 'from-yellow-400 via-amber-400 to-orange-400',
    shadow: 'shadow-yellow-500/40',
    glow: 'rgba(251, 191, 36, 0.5)'
  },
  green: {
    gradient: 'from-green-400 via-emerald-400 to-teal-400',
    shadow: 'shadow-green-500/40',
    glow: 'rgba(52, 211, 153, 0.5)'
  },
  purple: {
    gradient: 'from-purple-400 via-violet-400 to-indigo-400',
    shadow: 'shadow-purple-500/40',
    glow: 'rgba(167, 139, 250, 0.5)'
  },
  red: {
    gradient: 'from-red-400 via-rose-400 to-pink-400',
    shadow: 'shadow-red-500/40',
    glow: 'rgba(251, 113, 133, 0.5)'
  },
  rainbow: {
    gradient: 'from-pink-400 via-purple-400 via-yellow-400 to-green-400',
    shadow: 'shadow-purple-500/40',
    glow: 'rgba(167, 139, 250, 0.5)'
  },
  ocean: {
    gradient: 'from-cyan-400 via-blue-400 to-indigo-400',
    shadow: 'shadow-cyan-500/40',
    glow: 'rgba(34, 211, 238, 0.5)'
  },
  sunset: {
    gradient: 'from-orange-400 via-red-400 to-pink-400',
    shadow: 'shadow-orange-500/40',
    glow: 'rgba(251, 146, 60, 0.5)'
  },
  forest: {
    gradient: 'from-lime-400 via-green-400 to-emerald-400',
    shadow: 'shadow-lime-500/40',
    glow: 'rgba(163, 230, 53, 0.5)'
  }
}

type ColorScheme = keyof typeof colorSchemes

interface Ripple {
  id: number
  x: number
  y: number
}

interface KidButtonProps {
  // Основные пропсы
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  
  // Размер и форма
  size?: 'sm' | 'md' | 'lg' | 'xl'
  rounded?: boolean
  
  // Цвета
  color?: ColorScheme
  customGradient?: string
  
  // Иконки и эмодзи
  icon?: LucideIcon
  emoji?: string
  iconPosition?: 'left' | 'right' | 'top'
  
  // Анимации
  bounceOnHover?: boolean
  pulseOnClick?: boolean
  glowEnabled?: boolean
  
  // Дополнительные стили
  className?: string
  
  // Звук (комментарий)
  sound?: 'pop' | 'ding' | 'success' | 'click'
}

// Анимации
const buttonVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 10 
    }
  },
  tap: { 
    scale: 0.95,
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 15 
    }
  },
  disabled: { 
    scale: 1,
    opacity: 0.5 
  }
}

const iconVariants = {
  initial: { rotate: 0, scale: 1 },
  hover: { 
    rotate: [0, -10, 10, -10, 0],
    scale: 1.1,
    transition: { duration: 0.5 }
  }
}

const rippleVariants = {
  initial: { scale: 0, opacity: 0.6 },
  animate: { 
    scale: 2.5, 
    opacity: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

// Размеры кнопки
const sizeClasses = {
  sm: 'w-16 h-16 text-2xl',
  md: 'w-20 h-20 text-3xl',
  lg: 'w-24 h-24 text-4xl',
  xl: 'w-32 h-32 text-5xl'
}

const paddingClasses = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-5',
  xl: 'p-6'
}

export default function KidButton({
  children,
  onClick,
  disabled = false,
  size = 'lg',
  rounded = true,
  color = 'purple',
  customGradient,
  icon: Icon,
  emoji,
  iconPosition = 'left',
  bounceOnHover = true,
  pulseOnClick = true,
  glowEnabled = true,
  className = '',
  sound = 'pop'
}: KidButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const buttonRef = useRef<HTMLButtonElement>(null)
  const rippleIdRef = useRef(0)

  const scheme = colorSchemes[color]
  const gradient = customGradient || scheme.gradient

  // Создание ripple эффекта
  const createRipple = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return
    
    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const newRipple: Ripple = {
      id: rippleIdRef.current++,
      x,
      y
    }

    setRipples(prev => [...prev, newRipple])

    // Удаляем ripple через 600ms
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id))
    }, 600)
  }, [disabled])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    createRipple(event)
    
    // 🎵 Звуковой эффект (комментарий для разработчиков)
    // switch(sound) {
    //   case 'pop': playPop(); break;
    //   case 'ding': playDing(); break;
    //   case 'success': playSuccess(); break;
    //   case 'click': playClick(); break;
    // }
    
    onClick?.()
  }

  return (
    <motion.button
      ref={buttonRef}
      onClick={handleClick}
      disabled={disabled}
      variants={buttonVariants}
      initial="initial"
      whileHover={disabled ? 'disabled' : (bounceOnHover ? 'hover' : undefined)}
      whileTap={disabled ? undefined : 'tap'}
      animate={disabled ? 'disabled' : 'initial'}
      className={`
        relative overflow-hidden
        ${rounded ? 'rounded-full' : 'rounded-2xl'}
        ${sizeClasses[size]}
        bg-gradient-to-br ${gradient}
        ${scheme.shadow} shadow-xl
        border-0
        cursor-pointer
        focus:outline-none focus:ring-4 focus:ring-white/30
        ${className}
      `}
      style={{
        boxShadow: glowEnabled ? `0 8px 32px ${scheme.glow}` : undefined
      }}
    >
      {/* Glow эффект при наведении */}
      {glowEnabled && (
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-inherit"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Shine эффект */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: 'easeInOut' }}
      />

      {/* Ripple эффекты */}
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.span
            key={ripple.id}
            variants={rippleVariants}
            initial="initial"
            animate="animate"
            className="absolute bg-white/40 rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 20,
              height: 20,
              marginLeft: -10,
              marginTop: -10
            }}
          />
        ))}
      </AnimatePresence>

      {/* Контент кнопки */}
      <span className={`
        relative z-10 flex items-center justify-center
        ${iconPosition === 'top' ? 'flex-col' : 'flex-row'}
        gap-1 sm:gap-2
        text-white font-bold
      `}>
        {/* Эмодзи или иконка */}
        {emoji && iconPosition !== 'right' && (
          <motion.span
            variants={iconVariants}
            className="drop-shadow-lg"
          >
            {emoji}
          </motion.span>
        )}
        
        {Icon && !emoji && iconPosition !== 'right' && (
          <motion.span variants={iconVariants}>
            <Icon className={`${size === 'sm' ? 'w-5 h-5' : size === 'md' ? 'w-6 h-6' : size === 'lg' ? 'w-8 h-8' : 'w-10 h-10'}`} />
          </motion.span>
        )}

        {/* Текст */}
        {children && (
          <span className={`
            ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : size === 'lg' ? 'text-base' : 'text-lg'}
            drop-shadow-lg
          `}>
            {children}
          </span>
        )}

        {/* Иконка справа */}
        {emoji && iconPosition === 'right' && (
          <motion.span variants={iconVariants} className="drop-shadow-lg">
            {emoji}
          </motion.span>
        )}
        
        {Icon && !emoji && iconPosition === 'right' && (
          <motion.span variants={iconVariants}>
            <Icon className={`${size === 'sm' ? 'w-5 h-5' : size === 'md' ? 'w-6 h-6' : size === 'lg' ? 'w-8 h-8' : 'w-10 h-10'}`} />
          </motion.span>
        )}
      </span>

      {/* Pulse эффект при клике */}
      {pulseOnClick && (
        <motion.div
          className="absolute inset-0 bg-white/30 rounded-inherit"
          initial={{ scale: 0, opacity: 0 }}
          whileTap={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.1 }}
        />
      )}
    </motion.button>
  )
}

// Экспорт готовых вариантов кнопок
export const KidButtonPink = (props: Omit<KidButtonProps, 'color'>) => (
  <KidButton color="pink" {...props} />
)

export const KidButtonBlue = (props: Omit<KidButtonProps, 'color'>) => (
  <KidButton color="blue" {...props} />
)

export const KidButtonYellow = (props: Omit<KidButtonProps, 'color'>) => (
  <KidButton color="yellow" {...props} />
)

export const KidButtonGreen = (props: Omit<KidButtonProps, 'color'>) => (
  <KidButton color="green" {...props} />
)

export const KidButtonRainbow = (props: Omit<KidButtonProps, 'color'>) => (
  <KidButton color="rainbow" {...props} />
)

// Компонент группы кнопок
interface KidButtonGroupProps {
  children: React.ReactNode
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

export function KidButtonGroup({ 
  children, 
  gap = 'md',
  className = '' 
}: KidButtonGroupProps) {
  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6'
  }

  return (
    <div className={`flex flex-wrap justify-center items-center ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  )
}

// Компонент для создания меню с детскими кнопками
interface KidMenuProps {
  items: Array<{
    emoji?: string
    icon?: LucideIcon
    label: string
    onClick: () => void
    color?: ColorScheme
  }>
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function KidMenu({ items, size = 'lg' }: KidMenuProps) {
  return (
    <KidButtonGroup gap="lg">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <KidButton
            emoji={item.emoji}
            icon={item.icon}
            color={item.color || Object.keys(colorSchemes)[index % Object.keys(colorSchemes).length] as ColorScheme}
            size={size}
            onClick={item.onClick}
          >
            <span className="hidden sm:inline">{item.label}</span>
          </KidButton>
          <p className="text-center text-white/80 text-sm mt-2 font-medium">
            {item.label}
          </p>
        </motion.div>
      ))}
    </KidButtonGroup>
  )
}
