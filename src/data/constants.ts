// ==================== КОНСТАНТЫ ====================

import type { Rank } from './types'

// Ранги пользователя
export const RANKS: Rank[] = [
  { name: 'Новичок', minLevel: 1, icon: '🌱', color: 'text-gray-400' },
  { name: 'Ученик', minLevel: 5, icon: '📚', color: 'text-green-400' },
  { name: 'Отличник', minLevel: 10, icon: '⭐', color: 'text-blue-400' },
  { name: 'Знаток', minLevel: 20, icon: '🎓', color: 'text-purple-400' },
  { name: 'Мастер', minLevel: 35, icon: '🏆', color: 'text-amber-400' },
  { name: 'Эксперт', minLevel: 50, icon: '👑', color: 'text-yellow-400' },
  { name: 'Гений', minLevel: 75, icon: '💎', color: 'text-cyan-400' },
  { name: 'Легенда', minLevel: 100, icon: '🌟', color: 'text-pink-400' }
]

// Опыт за уровень
export const XP_PER_LEVEL = 100

// Бонус за серию дней
export const STREAK_BONUS = 1.5
