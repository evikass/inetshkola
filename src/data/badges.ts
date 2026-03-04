export interface Badge {
  id: string
  name: string
  description: string
  icon: string // emoji
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  category: 'learning' | 'gaming' | 'streak' | 'special'
  unlocked: boolean
  unlockedAt?: string
  condition: string
  xpReward: number
}

export const initialBadges: Badge[] = [
  // === УЧЕБНЫЕ (Learning) - 6 badges ===
  {
    id: 'first-steps',
    name: 'Первые шаги',
    description: 'Начал своё путешествие в мире знаний!',
    icon: '🌱',
    rarity: 'common',
    category: 'learning',
    unlocked: false,
    condition: 'Завершить первый урок',
    xpReward: 10
  },
  {
    id: 'curious',
    name: 'Любознательный',
    description: 'Твоя жажда знаний вдохновляет!',
    icon: '🔍',
    rarity: 'common',
    category: 'learning',
    unlocked: false,
    condition: 'Изучить 10 тем',
    xpReward: 25
  },
  {
    id: 'erudite',
    name: 'Эрудит',
    description: 'Твои знания охватывают множество предметов!',
    icon: '📚',
    rarity: 'rare',
    category: 'learning',
    unlocked: false,
    condition: 'Изучить темы в 5 разных предметах',
    xpReward: 50
  },
  {
    id: 'expert',
    name: 'Знаток',
    description: 'Ты отлично разбираешься в своём деле!',
    icon: '🎯',
    rarity: 'rare',
    category: 'learning',
    unlocked: false,
    condition: 'Завершить 50 уроков',
    xpReward: 75
  },
  {
    id: 'scientist',
    name: 'Учёный',
    description: 'Научный подход - твой путь к успеху!',
    icon: '🔬',
    rarity: 'epic',
    category: 'learning',
    unlocked: false,
    condition: 'Завершить 100 уроков',
    xpReward: 150
  },
  {
    id: 'academic',
    name: 'Академик',
    description: 'Высшая степень мастерства в обучении!',
    icon: '🎓',
    rarity: 'legendary',
    category: 'learning',
    unlocked: false,
    condition: 'Завершить все темы одного предмета',
    xpReward: 300
  },

  // === ИГРОВЫЕ (Gaming) - 6 badges ===
  {
    id: 'player',
    name: 'Игрок',
    description: 'Добро пожаловать в мир игр!',
    icon: '🎮',
    rarity: 'common',
    category: 'gaming',
    unlocked: false,
    condition: 'Сыграть первую игру',
    xpReward: 10
  },
  {
    id: 'winner',
    name: 'Победитель',
    description: 'Победа за тобой!',
    icon: '🏆',
    rarity: 'common',
    category: 'gaming',
    unlocked: false,
    condition: 'Выиграть 10 игр',
    xpReward: 30
  },
  {
    id: 'champion',
    name: 'Чемпион',
    description: 'Ты настоящий чемпион!',
    icon: '🥇',
    rarity: 'rare',
    category: 'gaming',
    unlocked: false,
    condition: 'Выиграть 50 игр',
    xpReward: 75
  },
  {
    id: 'master',
    name: 'Мастер',
    description: 'Мастерство не знает границ!',
    icon: '⚔️',
    rarity: 'epic',
    category: 'gaming',
    unlocked: false,
    condition: 'Выиграть 100 игр',
    xpReward: 150
  },
  {
    id: 'game-legend',
    name: 'Легенда игр',
    description: 'Ты стал легендой игрового мира!',
    icon: '👑',
    rarity: 'legendary',
    category: 'gaming',
    unlocked: false,
    condition: 'Выиграть 250 игр',
    xpReward: 300
  },
  {
    id: 'speedy',
    name: 'Скоростной',
    description: 'Скорость - твой главный козырь!',
    icon: '⚡',
    rarity: 'rare',
    category: 'gaming',
    unlocked: false,
    condition: 'Завершить игру за 30 секунд',
    xpReward: 50
  },

  // === СЕРИЯ (Streak) - 6 badges ===
  {
    id: 'streak-start',
    name: 'Начало',
    description: 'Первый шаг к постоянству!',
    icon: '🔥',
    rarity: 'common',
    category: 'streak',
    unlocked: false,
    condition: 'Учиться 3 дня подряд',
    xpReward: 15
  },
  {
    id: 'streak-week',
    name: 'Неделя',
    description: 'Целая неделя упорных занятий!',
    icon: '📅',
    rarity: 'common',
    category: 'streak',
    unlocked: false,
    condition: 'Учиться 7 дней подряд',
    xpReward: 30
  },
  {
    id: 'streak-month',
    name: 'Месяц',
    description: 'Месяц постоянства - это заслуживает уважения!',
    icon: '🗓️',
    rarity: 'rare',
    category: 'streak',
    unlocked: false,
    condition: 'Учиться 30 дней подряд',
    xpReward: 100
  },
  {
    id: 'streak-quarter',
    name: 'Квартал',
    description: 'Три месяца без перерыва - невероятно!',
    icon: '📈',
    rarity: 'epic',
    category: 'streak',
    unlocked: false,
    condition: 'Учиться 90 дней подряд',
    xpReward: 200
  },
  {
    id: 'streak-halfyear',
    name: 'Полгода',
    description: 'Полгода постоянных занятий!',
    icon: '💎',
    rarity: 'epic',
    category: 'streak',
    unlocked: false,
    condition: 'Учиться 180 дней подряд',
    xpReward: 300
  },
  {
    id: 'streak-year',
    name: 'Год',
    description: 'Целый год! Ты настоящий герой!',
    icon: '🌟',
    rarity: 'legendary',
    category: 'streak',
    unlocked: false,
    condition: 'Учиться 365 дней подряд',
    xpReward: 500
  },

  // === ОСОБЫЕ (Special) - 6 badges ===
  {
    id: 'secret',
    name: 'Секретный',
    description: 'Ты нашёл секретный значок! Шшш...',
    icon: '🤫',
    rarity: 'rare',
    category: 'special',
    unlocked: false,
    condition: 'Секретное условие',
    xpReward: 50
  },
  {
    id: 'holiday',
    name: 'Праздничный',
    description: 'В праздник учиться веселее!',
    icon: '🎉',
    rarity: 'rare',
    category: 'special',
    unlocked: false,
    condition: 'Зайти в праздничный день',
    xpReward: 75
  },
  {
    id: 'rare-find',
    name: 'Редкая находка',
    description: 'Ты нашёл то, что трудно найти!',
    icon: '🍀',
    rarity: 'epic',
    category: 'special',
    unlocked: false,
    condition: 'Найти скрытую функцию',
    xpReward: 100
  },
  {
    id: 'discoverer',
    name: 'Первооткрыватель',
    description: 'Ты первопроходец платформы!',
    icon: '🚀',
    rarity: 'epic',
    category: 'special',
    unlocked: false,
    condition: 'Быть одним из первых 100 пользователей',
    xpReward: 150
  },
  {
    id: 'collector',
    name: 'Коллекционер',
    description: 'Ты собрал впечатляющую коллекцию!',
    icon: '🏅',
    rarity: 'legendary',
    category: 'special',
    unlocked: false,
    condition: 'Собрать все значки одной категории',
    xpReward: 250
  },
  {
    id: 'legend',
    name: 'Легенда',
    description: 'Твоё имя войдёт в историю ИНЕТШКОЛА!',
    icon: '⭐',
    rarity: 'legendary',
    category: 'special',
    unlocked: false,
    condition: 'Достичь максимального уровня',
    xpReward: 500
  }
]

// Badge rarity colors for styling
export const RARITY_COLORS = {
  common: {
    bg: 'from-gray-500/20 to-gray-600/20',
    border: 'border-gray-500/40',
    text: 'text-gray-300',
    glow: 'shadow-gray-500/20',
    gradient: 'from-gray-400 to-gray-500'
  },
  rare: {
    bg: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/40',
    text: 'text-blue-300',
    glow: 'shadow-blue-500/30',
    gradient: 'from-blue-400 to-cyan-400'
  },
  epic: {
    bg: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/40',
    text: 'text-purple-300',
    glow: 'shadow-purple-500/30',
    gradient: 'from-purple-400 to-pink-400'
  },
  legendary: {
    bg: 'from-amber-500/20 to-orange-500/20',
    border: 'border-amber-500/40',
    text: 'text-amber-300',
    glow: 'shadow-amber-500/40',
    gradient: 'from-amber-400 to-orange-400'
  }
}

export const RARITY_LABELS = {
  common: 'Обычный',
  rare: 'Редкий',
  epic: 'Эпический',
  legendary: 'Легендарный'
}

export const CATEGORY_LABELS = {
  learning: { name: 'Учебные', icon: '📖', color: 'from-green-500 to-emerald-500' },
  gaming: { name: 'Игровые', icon: '🎮', color: 'from-blue-500 to-purple-500' },
  streak: { name: 'Серия', icon: '🔥', color: 'from-orange-500 to-red-500' },
  special: { name: 'Особые', icon: '⭐', color: 'from-amber-500 to-yellow-500' }
}

// Helper function to get badge by ID
export function getBadgeById(id: string): Badge | undefined {
  return initialBadges.find(badge => badge.id === id)
}

// Helper function to get badges by category
export function getBadgesByCategory(category: Badge['category']): Badge[] {
  return initialBadges.filter(badge => badge.category === category)
}

// Helper function to get badges by rarity
export function getBadgesByRarity(rarity: Badge['rarity']): Badge[] {
  return initialBadges.filter(badge => badge.rarity === rarity)
}
