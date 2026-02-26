// ==================== КОНСТАНТЫ ====================

import type { Rank } from './types'

// Ранги пользователя
export const RANKS: Rank[] = [
  { name: 'Новичок', minLevel: 1, icon: '🌱', color: 'text-gray-400', gradient: 'from-gray-500 to-gray-600' },
  { name: 'Ученик', minLevel: 5, icon: '📚', color: 'text-green-400', gradient: 'from-green-500 to-emerald-600' },
  { name: 'Отличник', minLevel: 10, icon: '⭐', color: 'text-blue-400', gradient: 'from-blue-500 to-indigo-600' },
  { name: 'Знаток', minLevel: 20, icon: '🎓', color: 'text-purple-400', gradient: 'from-purple-500 to-violet-600' },
  { name: 'Мастер', minLevel: 35, icon: '🏆', color: 'text-amber-400', gradient: 'from-amber-500 to-orange-600' },
  { name: 'Эксперт', minLevel: 50, icon: '👑', color: 'text-yellow-400', gradient: 'from-yellow-500 to-amber-600' },
  { name: 'Гений', minLevel: 75, icon: '💎', color: 'text-cyan-400', gradient: 'from-cyan-500 to-teal-600' },
  { name: 'Легенда', minLevel: 100, icon: '🌟', color: 'text-pink-400', gradient: 'from-pink-500 to-rose-600' }
]

// Опыт за уровень
export const XP_PER_LEVEL = 100

// Бонус за серию дней
export const STREAK_BONUS = 1.5

// Бонус за сложность
export const DIFFICULTY_MULTIPLIER = {
  easy: 1,
  medium: 1.5,
  hard: 2
}

// Очки за действия
export const POINTS = {
  TOPIC_COMPLETE: 10,
  QUIZ_QUESTION: 5,
  PERFECT_QUIZ: 50,
  DAILY_TASK: 25,
  ACHIEVEMENT: 100,
  STREAK_BONUS: 5
}

// Время до следующего дня (для сброса ежедневных заданий)
export const DAILY_RESET_HOUR = 0 // полночь

// Максимальная серия дней
export const MAX_STREAK = 365
