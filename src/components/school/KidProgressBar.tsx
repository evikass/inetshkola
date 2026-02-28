'use client'

import { useMemo } from 'react'
import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

interface KidProgressBarProps {
  current: number
  total: number
  label?: string
  showStars?: boolean
  size?: 'sm' | 'md' | 'lg'
}

// Персонажи для разных уровней прогресса
const progressCharacters = [
  { threshold: 0, emoji: '🐣', message: 'Начинаем!' },
  { threshold: 25, emoji: '🐥', message: 'Хорошо!' },
  { threshold: 50, emoji: '🐤', message: 'Отлично!' },
  { threshold: 75, emoji: '🐔', message: 'Супер!' },
  { threshold: 100, emoji: '🦅', message: 'Великолепно!' }
]

// Цвета для прогресс-бара
const progressColors = [
  { threshold: 0, from: 'from-gray-400', to: 'to-gray-500' },
  { threshold: 25, from: 'from-blue-400', to: 'to-blue-500' },
  { threshold: 50, from: 'from-green-400', to: 'to-emerald-500' },
  { threshold: 75, from: 'from-yellow-400', to: 'to-orange-500' },
  { threshold: 100, from: 'from-purple-400', to: 'to-pink-500' }
]

export default function KidProgressBar({
  current,
  total,
  label,
  showStars = true,
  size = 'md'
}: KidProgressBarProps) {
  const progress = total > 0 ? Math.round((current / total) * 100) : 0

  // Получить персонажа для текущего прогресса
  const character = useMemo(() => {
    for (let i = progressCharacters.length - 1; i >= 0; i--) {
      if (progress >= progressCharacters[i].threshold) {
        return progressCharacters[i]
      }
    }
    return progressCharacters[0]
  }, [progress])

  // Получить цвет прогресс-бара
  const color = useMemo(() => {
    for (let i = progressColors.length - 1; i >= 0; i--) {
      if (progress >= progressColors[i].threshold) {
        return progressColors[i]
      }
    }
    return progressColors[0]
  }, [progress])

  // Размеры
  const sizes = {
    sm: { bar: 'h-3', text: 'text-sm', emoji: 'text-2xl', star: 'w-4 h-4' },
    md: { bar: 'h-4', text: 'text-base', emoji: 'text-3xl', star: 'w-5 h-5' },
    lg: { bar: 'h-6', text: 'text-lg', emoji: 'text-4xl', star: 'w-6 h-6' }
  }

  const sizeStyles = sizes[size]

  return (
    <Card className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border-white/20">
      {/* Заголовок и персонаж */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`${sizeStyles.emoji} animate-bounce-slow`}>
            {character.emoji}
          </div>
          <div>
            {label && (
              <p className={`text-white font-medium ${sizeStyles.text}`}>
                {label}
              </p>
            )}
            <p className="text-white/70 text-sm">
              {character.message}
            </p>
          </div>
        </div>

        {/* Счёт */}
        <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-1">
          {showStars && (
            <Star className={`${sizeStyles.star} text-yellow-400 fill-yellow-400`} />
          )}
          <span className={`text-white font-bold ${sizeStyles.text}`}>
            {current}/{total}
          </span>
        </div>
      </div>

      {/* Прогресс-бар */}
      <div className="relative">
        <div className="bg-white/20 rounded-full overflow-hidden">
          <div
            className={`
              bg-gradient-to-r ${color.from} ${color.to}
              ${sizeStyles.bar} rounded-full
              transition-all duration-500 ease-out
              flex items-center justify-end pr-2
            `}
            style={{ width: `${progress}%` }}
          >
            {progress > 15 && (
              <span className="text-white text-xs font-bold">
                {progress}%
              </span>
            )}
          </div>
        </div>

        {/* Звёзды прогресса */}
        {showStars && (
          <div className="flex justify-between mt-2 px-1">
            {[...Array(5)].map((_, i) => {
              const threshold = (i + 1) * 20
              const isReached = progress >= threshold
              
              return (
                <div
                  key={i}
                  className={`
                    ${sizeStyles.star} flex items-center justify-center
                    transition-all duration-300
                    ${isReached 
                      ? 'text-yellow-400 scale-110' 
                      : 'text-white/30'
                    }
                  `}
                >
                  <Star className={`w-3 h-3 ${isReached ? 'fill-yellow-400' : ''}`} />
                </div>
              )
            })}
          </div>
        )}

        {/* Индикатор текущей позиции */}
        <div
          className="absolute -top-1 transition-all duration-500 ease-out"
          style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
        >
          <div className="text-xl animate-bounce">
            🚀
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow { animation: bounce-slow 1.5s ease-in-out infinite; }
      `}</style>
    </Card>
  )
}

// Компонент общего прогресса по предмету
interface KidSubjectProgressProps {
  subjectName: string
  subjectEmoji: string
  completedTopics: number
  totalTopics: number
  completedLessons: number
  totalLessons: number
}

export function KidSubjectProgress({
  subjectName,
  subjectEmoji,
  completedTopics,
  totalTopics,
  completedLessons,
  totalLessons
}: KidSubjectProgressProps) {
  const topicProgress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0
  const lessonProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0

  return (
    <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-5 border-0 shadow-xl">
      {/* Заголовок */}
      <div className="flex items-center gap-3 mb-4">
        <div className="text-5xl animate-bounce-slow">{subjectEmoji}</div>
        <div>
          <h3 className="text-xl font-bold text-white">{subjectName}</h3>
          <p className="text-white/70 text-sm">
            {topicProgress}% пройдено
          </p>
        </div>
      </div>

      {/* Прогресс тем */}
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm text-white/80 mb-1">
            <span>📚 Темы</span>
            <span>{completedTopics}/{totalTopics}</span>
          </div>
          <div className="bg-white/20 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-green-400 to-emerald-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${topicProgress}%` }}
            />
          </div>
        </div>

        {/* Прогресс уроков */}
        <div>
          <div className="flex justify-between text-sm text-white/80 mb-1">
            <span>📝 Уроки</span>
            <span>{completedLessons}/{totalLessons}</span>
          </div>
          <div className="bg-white/20 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${lessonProgress}%` }}
            />
          </div>
        </div>

        {/* Звёзды */}
        <div className="flex justify-center gap-2 pt-2">
          {[...Array(5)].map((_, i) => {
            const threshold = (i + 1) * 20
            const isReached = topicProgress >= threshold
            
            return (
              <Star
                key={i}
                className={`w-6 h-6 transition-all duration-300 ${
                  isReached 
                    ? 'text-yellow-400 fill-yellow-400 scale-110' 
                    : 'text-white/30'
                }`}
              />
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
      `}</style>
    </Card>
  )
}

// Компонент общего прогресса ученика
interface KidOverallProgressProps {
  level: number
  experience: number
  experienceToNext: number
  streak: number
  totalStars: number
}

export function KidOverallProgress({
  level,
  experience,
  experienceToNext,
  streak,
  totalStars
}: KidOverallProgressProps) {
  const expProgress = experienceToNext > 0 ? Math.round((experience / experienceToNext) * 100) : 0

  // Определяем титул по уровню
  const titleInfo = useMemo(() => {
    if (level < 5) return { title: 'Новичок', emoji: '🐣' }
    if (level < 10) return { title: 'Ученик', emoji: '🐥' }
    if (level < 20) return { title: 'Знаток', emoji: '🐤' }
    if (level < 30) return { title: 'Мастер', emoji: '🐔' }
    return { title: 'Легенда', emoji: '🦅' }
  }, [level])

  return (
    <Card className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-3xl p-5 border-0 shadow-xl overflow-hidden relative">
      {/* Декоративные элементы */}
      <div className="absolute top-2 right-2 text-4xl opacity-20 animate-pulse">
        ✨
      </div>

      {/* Заголовок */}
      <div className="flex items-center gap-3 mb-4">
        <div className="text-5xl">{titleInfo.emoji}</div>
        <div>
          <h3 className="text-xl font-bold text-white">
            {titleInfo.title}
          </h3>
          <p className="text-white/80 text-sm">
            Уровень {level}
          </p>
        </div>
      </div>

      {/* Опыт */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-white/80 mb-1">
          <span>⚡ Опыт</span>
          <span>{experience}/{experienceToNext}</span>
        </div>
        <div className="bg-white/20 rounded-full h-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full rounded-full transition-all duration-500 flex items-center justify-end pr-2"
            style={{ width: `${expProgress}%` }}
          >
            {expProgress > 20 && (
              <span className="text-white text-xs font-bold">{expProgress}%</span>
            )}
          </div>
        </div>
      </div>

      {/* Статистика */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white/10 rounded-2xl p-3 text-center">
          <div className="text-2xl mb-1">🔥</div>
          <div className="text-white font-bold">{streak}</div>
          <div className="text-white/60 text-xs">дней</div>
        </div>

        <div className="bg-white/10 rounded-2xl p-3 text-center">
          <div className="text-2xl mb-1">⭐</div>
          <div className="text-white font-bold">{totalStars}</div>
          <div className="text-white/60 text-xs">звёзд</div>
        </div>

        <div className="bg-white/10 rounded-2xl p-3 text-center">
          <div className="text-2xl mb-1">🏆</div>
          <div className="text-white font-bold">{level}</div>
          <div className="text-white/60 text-xs">уровень</div>
        </div>
      </div>
    </Card>
  )
}
