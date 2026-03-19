'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'

interface ImageWithFallbackProps {
  src: string
  alt: string
  fallbackText?: string
  width?: number
  height?: number
  className?: string
  fill?: boolean
  priority?: boolean
}

// Генерация SVG placeholder на клиенте
function generatePlaceholder(text: string, width: number, height: number): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="20" fill="white" text-anchor="middle" dominant-baseline="middle">
        ${text}
      </text>
    </svg>
  `
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export function ImageWithFallback({
  src,
  alt,
  fallbackText = 'Изображение',
  width = 400,
  height = 300,
  className = '',
  fill = false,
  priority = false
}: ImageWithFallbackProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const placeholder = useMemo(() => generatePlaceholder(fallbackText, width, height), [fallbackText, width, height])

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  if (fill) {
    return (
      <div className={`relative ${className}`}>
        {isLoading && !hasError && (
          <div className="absolute inset-0 bg-slate-800 animate-pulse rounded-lg" />
        )}
        <Image
          src={hasError ? placeholder : src}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onError={handleError}
          onLoad={handleLoad}
          priority={priority}
        />
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && !hasError && (
        <div
          className="absolute inset-0 bg-slate-800 animate-pulse rounded-lg"
          style={{ width, height }}
        />
      )}
      <Image
        src={hasError ? placeholder : src}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover transition-opacity duration-300 rounded-lg ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onError={handleError}
        onLoad={handleLoad}
        priority={priority}
      />
    </div>
  )
}

// Компонент для иконки предмета
interface SubjectIconProps {
  subjectId: string
  title: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const SIZE_CLASSES = {
  sm: 'w-8 h-8 text-lg',
  md: 'w-10 h-10 text-xl',
  lg: 'w-12 h-12 text-2xl'
}

export function SubjectIcon({ subjectId, title, size = 'md', className = '' }: SubjectIconProps) {
  // Emoji для предметов
  const emojis: Record<string, string> = {
    'math': '🔢',
    'russian': '📝',
    'literature': '📚',
    'english': '🇬🇧',
    'science': '🔬',
    'history': '🏛️',
    'geography': '🌍',
    'biology': '🧬',
    'physics': '⚛️',
    'chemistry': '🧪',
    'informatics': '💻',
    'art': '🎨',
    'music': '🎵',
    'pe': '⚽',
    'obzh': '🛡️',
    'social': '👥',
  }

  const emoji = emojis[subjectId] || '📖'

  return (
    <div className={`${SIZE_CLASSES[size]} flex items-center justify-center ${className}`}>
      <span role="img" aria-label={title}>{emoji}</span>
    </div>
  )
}

// Компонент для иллюстрации урока
interface LessonIllustrationProps {
  lessonId: string
  title: string
  type?: 'theory' | 'practice' | 'video' | 'interactive'
  className?: string
}

export function LessonIllustration({ lessonId, title, type = 'theory', className = '' }: LessonIllustrationProps) {
  const typeEmojis: Record<string, string> = {
    theory: '📖',
    practice: '✏️',
    video: '🎬',
    interactive: '🎮'
  }

  const typeColors: Record<string, string> = {
    theory: 'from-blue-500/20 to-purple-500/20 border-blue-500/30',
    practice: 'from-green-500/20 to-teal-500/20 border-green-500/30',
    video: 'from-red-500/20 to-orange-500/20 border-red-500/30',
    interactive: 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
  }

  return (
    <div className={`relative aspect-video rounded-lg bg-gradient-to-br ${typeColors[type]} border flex items-center justify-center ${className}`}>
      <div className="text-center">
        <span className="text-4xl mb-2 block">{typeEmojis[type]}</span>
        <p className="text-sm text-slate-300 px-4">{title}</p>
      </div>
    </div>
  )
}

// Компонент для аватара с инициалами
interface AvatarProps {
  name: string
  image?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const AVATAR_SIZES = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base'
}

export function Avatar({ name, image, size = 'md', className = '' }: AvatarProps) {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  const colors = [
    'from-blue-500 to-purple-500',
    'from-green-500 to-teal-500',
    'from-orange-500 to-red-500',
    'from-pink-500 to-purple-500',
    'from-indigo-500 to-blue-500'
  ]

  const colorIndex = name.charCodeAt(0) % colors.length

  if (image) {
    return (
      <div className={`${AVATAR_SIZES[size]} rounded-full overflow-hidden ${className}`}>
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  return (
    <div className={`${AVATAR_SIZES[size]} rounded-full bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center font-medium text-white ${className}`}>
      {initials}
    </div>
  )
}
