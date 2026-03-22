'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Trophy, Star, Lock, Unlock, Sparkles, Crown, Medal,
  Flame, Zap, Target, BookOpen, Gamepad2, Heart, Clock,
  Filter, Grid, List, ChevronDown, ChevronUp
} from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'

// Все возможные достижения
const ALL_ACHIEVEMENTS = [
  // === НАЧАЛО ПУТИ ===
  {
    id: 'first-login',
    title: 'Первые шаги',
    description: 'Добро пожаловать в ИНЕТШКОЛА!',
    icon: '👋',
    category: 'start',
    xp: 10,
    rarity: 'common',
    requirement: 'Войти в приложение'
  },
  {
    id: 'first-lesson',
    title: 'Ученик',
    description: 'Завершить первый урок',
    icon: '📖',
    category: 'start',
    xp: 25,
    rarity: 'common',
    requirement: 'Завершить 1 урок'
  },
  {
    id: 'first-quiz',
    title: 'Испытатель',
    description: 'Пройти первый тест',
    icon: '✅',
    category: 'start',
    xp: 30,
    rarity: 'common',
    requirement: 'Пройти 1 тест'
  },

  // === УСПЕХИ В УЧЁБЕ ===
  {
    id: 'lessons-10',
    title: 'Любознательный',
    description: 'Завершить 10 уроков',
    icon: '📚',
    category: 'learning',
    xp: 50,
    rarity: 'common',
    requirement: 'Завершить 10 уроков'
  },
  {
    id: 'lessons-50',
    title: 'Эрудит',
    description: 'Завершить 50 уроков',
    icon: '🎓',
    category: 'learning',
    xp: 150,
    rarity: 'rare',
    requirement: 'Завершить 50 уроков'
  },
  {
    id: 'lessons-100',
    title: 'Знаток',
    description: 'Завершить 100 уроков',
    icon: '🏆',
    category: 'learning',
    xp: 300,
    rarity: 'epic',
    requirement: 'Завершить 100 уроков'
  },
  {
    id: 'perfect-quiz',
    title: 'Идеальный ответ',
    description: 'Пройти тест без ошибок',
    icon: '⭐',
    category: 'learning',
    xp: 50,
    rarity: 'rare',
    requirement: 'Пройти тест на 100%'
  },
  {
    id: 'perfect-streak',
    title: 'Безупречность',
    description: 'Пройти 5 тестов подряд без ошибок',
    icon: '💎',
    category: 'learning',
    xp: 200,
    rarity: 'epic',
    requirement: '5 тестов на 100% подряд'
  },

  // === СЕРИИ ===
  {
    id: 'streak-3',
    title: 'Начинающий',
    description: 'Учиться 3 дня подряд',
    icon: '🔥',
    category: 'streak',
    xp: 30,
    rarity: 'common',
    requirement: 'Серия 3 дня'
  },
  {
    id: 'streak-7',
    title: 'Упорный',
    description: 'Учиться 7 дней подряд',
    icon: '🌟',
    category: 'streak',
    xp: 75,
    rarity: 'rare',
    requirement: 'Серия 7 дней'
  },
  {
    id: 'streak-30',
    title: 'Настойчивый',
    description: 'Учиться 30 дней подряд',
    icon: '👑',
    category: 'streak',
    xp: 500,
    rarity: 'legendary',
    requirement: 'Серия 30 дней'
  },

  // === XP И УРОВНИ ===
  {
    id: 'level-5',
    title: 'Развивающийся',
    description: 'Достичь 5 уровня',
    icon: '📈',
    category: 'progress',
    xp: 50,
    rarity: 'common',
    requirement: 'Достичь 5 уровня'
  },
  {
    id: 'level-10',
    title: 'Продвинутый',
    description: 'Достичь 10 уровня',
    icon: '🚀',
    category: 'progress',
    xp: 200,
    rarity: 'rare',
    requirement: 'Достичь 10 уровня'
  },
  {
    id: 'level-25',
    title: 'Эксперт',
    description: 'Достичь 25 уровня',
    icon: '💫',
    category: 'progress',
    xp: 500,
    rarity: 'epic',
    requirement: 'Достичь 25 уровня'
  },
  {
    id: 'xp-1000',
    title: 'Коллекционер XP',
    description: 'Набрать 1000 XP',
    icon: '💰',
    category: 'progress',
    xp: 100,
    rarity: 'common',
    requirement: 'Набрать 1000 XP'
  },

  // === ИГРЫ И ПРАКТИКА ===
  {
    id: 'first-game',
    title: 'Игрок',
    description: 'Сыграть в первую мини-игру',
    icon: '🎮',
    category: 'games',
    xp: 25,
    rarity: 'common',
    requirement: 'Сыграть в 1 игру'
  },
  {
    id: 'memory-master',
    title: 'Мастер памяти',
    description: 'Выиграть в Memory Game за 10 ходов',
    icon: '🧠',
    category: 'games',
    xp: 100,
    rarity: 'rare',
    requirement: 'Memory за ≤10 ходов'
  },
  {
    id: 'sprint-champion',
    title: 'Спринтер',
    description: 'Набрать 100+ очков в спринте',
    icon: '⚡',
    category: 'games',
    xp: 75,
    rarity: 'rare',
    requirement: '100+ очков в спринте'
  },
  {
    id: 'word-master',
    title: 'Словесный гений',
    description: 'Разгадать 20 слов подряд',
    icon: '📝',
    category: 'games',
    xp: 150,
    rarity: 'epic',
    requirement: '20 слов подряд'
  },

  // === СОЦИАЛЬНЫЕ ===
  {
    id: 'night-owl',
    title: 'Ночная сова',
    description: 'Учиться после полуночи',
    icon: '🦉',
    category: 'special',
    xp: 50,
    rarity: 'rare',
    requirement: 'Учиться после 00:00'
  },
  {
    id: 'early-bird',
    title: 'Ранняя пташка',
    description: 'Учиться до 7 утра',
    icon: '🐦',
    category: 'special',
    xp: 50,
    rarity: 'rare',
    requirement: 'Учиться до 7:00'
  },
  {
    id: 'weekend-warrior',
    title: 'Воин выходного дня',
    description: 'Учиться в выходные 5 дней подряд',
    icon: '📅',
    category: 'special',
    xp: 100,
    rarity: 'rare',
    requirement: '5 выходных подряд'
  },

  // === ПРЕДМЕТЫ ===
  {
    id: 'math-enthusiast',
    title: 'Математик',
    description: 'Завершить 20 уроков математики',
    icon: '🔢',
    category: 'subjects',
    xp: 100,
    rarity: 'rare',
    requirement: '20 уроков математики'
  },
  {
    id: 'russian-master',
    title: 'Грамотей',
    description: 'Завершить 20 уроков русского языка',
    icon: '📝',
    category: 'subjects',
    xp: 100,
    rarity: 'rare',
    requirement: '20 уроков русского'
  },
  {
    id: 'english-speaker',
    title: 'English Speaker',
    description: 'Завершить 20 уроков английского',
    icon: '🇬🇧',
    category: 'subjects',
    xp: 100,
    rarity: 'rare',
    requirement: '20 уроков английского'
  },
  {
    id: 'all-subjects',
    title: 'Универсал',
    description: 'Завершить уроки по всем предметам',
    icon: '🌟',
    category: 'subjects',
    xp: 300,
    rarity: 'legendary',
    requirement: 'Уроки по всем предметам'
  },
]

// Категории
const CATEGORIES = [
  { id: 'all', label: 'Все', icon: Sparkles },
  { id: 'start', label: 'Начало пути', icon: Star },
  { id: 'learning', label: 'Успехи в учёбе', icon: BookOpen },
  { id: 'streak', label: 'Серии', icon: Flame },
  { id: 'progress', label: 'Прогресс', icon: Target },
  { id: 'games', label: 'Игры', icon: Gamepad2 },
  { id: 'subjects', label: 'Предметы', icon: Trophy },
  { id: 'special', label: 'Особые', icon: Crown },
]

// Редкость
const RARITY_COLORS = {
  common: { bg: 'bg-slate-500/20', border: 'border-slate-500/30', text: 'text-slate-300', badge: 'bg-slate-500/30' },
  rare: { bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-300', badge: 'bg-blue-500/30' },
  epic: { bg: 'bg-purple-500/20', border: 'border-purple-500/30', text: 'text-purple-300', badge: 'bg-purple-500/30' },
  legendary: { bg: 'bg-yellow-500/20', border: 'border-yellow-500/30', text: 'text-yellow-300', badge: 'bg-yellow-500/30' },
}

const RARITY_LABELS = {
  common: 'Обычное',
  rare: 'Редкое',
  epic: 'Эпическое',
  legendary: 'Легендарное',
}

// Компонент карточки достижения
function AchievementCard({
  achievement,
  isUnlocked,
  progress,
  onClick
}: {
  achievement: typeof ALL_ACHIEVEMENTS[0]
  isUnlocked: boolean
  progress?: number
  onClick?: () => void
}) {
  const rarity = RARITY_COLORS[achievement.rarity]
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`
        relative p-4 rounded-xl border-2 transition-all cursor-pointer
        ${isUnlocked
          ? `${rarity.bg} ${rarity.border}`
          : 'bg-slate-800/30 border-slate-700/50'
        }
        hover:scale-105 hover:shadow-lg
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Иконка */}
      <div className="text-center mb-2">
        <div className={`
          w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl
          ${isUnlocked
            ? 'bg-gradient-to-br from-white/10 to-transparent'
            : 'bg-slate-700/50 grayscale opacity-50'
          }
        `}>
          {isUnlocked ? achievement.icon : <Lock className="w-6 h-6 text-slate-500" />}
        </div>
      </div>

      {/* Название и описание */}
      <div className="text-center">
        <p className={`font-semibold text-sm mb-1 ${isUnlocked ? rarity.text : 'text-slate-500'}`}>
          {achievement.title}
        </p>
        <p className="text-xs text-slate-400 line-clamp-2">
          {achievement.description}
        </p>
      </div>

      {/* XP */}
      {isUnlocked && (
        <div className="mt-2 text-center">
          <Badge className={`${rarity.badge} text-xs`}>
            +{achievement.xp} XP
          </Badge>
        </div>
      )}

      {/* Прогресс для заблокированных */}
      {!isUnlocked && progress !== undefined && progress > 0 && (
        <div className="mt-2">
          <Progress value={progress} className="h-1" />
          <p className="text-xs text-slate-500 text-center mt-1">{Math.round(progress)}%</p>
        </div>
      )}

      {/* Тултип при наведении */}
      {isHovered && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-900 border border-slate-700 rounded-lg shadow-xl z-10">
          <p className="text-xs text-slate-300 text-center mb-1">{achievement.requirement}</p>
          <Badge className={`${rarity.badge} text-xs w-full justify-center`}>
            {RARITY_LABELS[achievement.rarity]}
          </Badge>
        </div>
      )}

      {/* Блеск для легендарных */}
      {isUnlocked && achievement.rarity === 'legendary' && (
        <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
        </div>
      )}
    </div>
  )
}

// Основной компонент
export function AchievementGallery() {
  const { achievements, userStats } = useSchool()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'recent' | 'rarity' | 'name'>('recent')
  const [expandedAchievement, setExpandedAchievement] = useState<string | null>(null)

  // Фильтрация достижений
  const filteredAchievements = useMemo(() => {
    let filtered = ALL_ACHIEVEMENTS

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(a => a.category === selectedCategory)
    }

    // Сортировка
    const unlockedIds = achievements.map(a => a.id)
    switch (sortBy) {
      case 'recent':
        // Разблокированные сначала
        filtered = [...filtered].sort((a, b) => {
          const aUnlocked = unlockedIds.includes(a.id)
          const bUnlocked = unlockedIds.includes(b.id)
          if (aUnlocked && !bUnlocked) return -1
          if (!aUnlocked && bUnlocked) return 1
          return 0
        })
        break
      case 'rarity':
        const rarityOrder = { legendary: 0, epic: 1, rare: 2, common: 3 }
        filtered = [...filtered].sort((a, b) => rarityOrder[a.rarity] - rarityOrder[b.rarity])
        break
      case 'name':
        filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title, 'ru'))
        break
    }

    return filtered
  }, [selectedCategory, sortBy, achievements])

  // Статистика
  const stats = useMemo(() => {
    const unlocked = achievements.length
    const total = ALL_ACHIEVEMENTS.length
    const totalXP = achievements.reduce((sum, a) => {
      const achievement = ALL_ACHIEVEMENTS.find(aa => aa.id === a.id)
      return sum + (achievement?.xp || 0)
    }, 0)

    const byRarity = {
      common: { unlocked: 0, total: 0 },
      rare: { unlocked: 0, total: 0 },
      epic: { unlocked: 0, total: 0 },
      legendary: { unlocked: 0, total: 0 },
    }

    ALL_ACHIEVEMENTS.forEach(a => {
      byRarity[a.rarity].total++
      if (achievements.some(ua => ua.id === a.id)) {
        byRarity[a.rarity].unlocked++
      }
    })

    return { unlocked, total, totalXP, byRarity }
  }, [achievements])

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardContent className="py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Галерея достижений</h3>
              <p className="text-xs text-slate-400">{stats.unlocked}/{stats.total} открыто</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className={viewMode === 'grid' ? 'bg-blue-600' : ''}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className={viewMode === 'list' ? 'bg-blue-600' : ''}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Статистика по редкости */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {(['common', 'rare', 'epic', 'legendary'] as const).map(rarity => {
            const colors = RARITY_COLORS[rarity]
            const data = stats.byRarity[rarity]
            return (
              <div
                key={rarity}
                className={`p-2 rounded-lg ${colors.bg} ${colors.border} border text-center`}
              >
                <p className={`text-lg font-bold ${colors.text}`}>
                  {data.unlocked}/{data.total}
                </p>
                <p className="text-xs text-slate-400">{RARITY_LABELS[rarity]}</p>
              </div>
            )
          })}
        </div>

        {/* Фильтры по категориям */}
        <div className="flex flex-wrap gap-1 mb-4">
          {CATEGORIES.map(cat => {
            const Icon = cat.icon
            return (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setSelectedCategory(cat.id)}
                className={selectedCategory === cat.id ? 'bg-blue-600' : ''}
              >
                <Icon className="w-3 h-3 mr-1" />
                {cat.label}
              </Button>
            )
          })}
        </div>

        {/* Сортировка */}
        <div className="flex items-center gap-2 mb-4 text-sm">
          <span className="text-slate-400">Сортировка:</span>
          <Button
            variant={sortBy === 'recent' ? 'outline' : 'ghost'}
            size="sm"
            onClick={() => setSortBy('recent')}
          >
            Недавние
          </Button>
          <Button
            variant={sortBy === 'rarity' ? 'outline' : 'ghost'}
            size="sm"
            onClick={() => setSortBy('rarity')}
          >
            По редкости
          </Button>
          <Button
            variant={sortBy === 'name' ? 'outline' : 'ghost'}
            size="sm"
            onClick={() => setSortBy('name')}
          >
            По имени
          </Button>
        </div>

        {/* Галерея */}
        <div className={viewMode === 'grid'
          ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'
          : 'space-y-2'
        }>
          {filteredAchievements.map(achievement => {
            const isUnlocked = achievements.some(a => a.id === achievement.id)
            const progress = undefined // Можно добавить логику прогресса

            if (viewMode === 'list') {
              return (
                <div
                  key={achievement.id}
                  className={`
                    flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer
                    ${isUnlocked
                      ? `${RARITY_COLORS[achievement.rarity].bg} ${RARITY_COLORS[achievement.rarity].border}`
                      : 'bg-slate-800/30 border-slate-700/50'
                    }
                  `}
                  onClick={() => setExpandedAchievement(
                    expandedAchievement === achievement.id ? null : achievement.id
                  )}
                >
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-xl
                    ${isUnlocked ? '' : 'grayscale opacity-50'}
                  `}>
                    {isUnlocked ? achievement.icon : '🔒'}
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium text-sm ${isUnlocked ? RARITY_COLORS[achievement.rarity].text : 'text-slate-500'}`}>
                      {achievement.title}
                    </p>
                    <p className="text-xs text-slate-400">{achievement.requirement}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={`${RARITY_COLORS[achievement.rarity].badge} text-xs`}>
                      +{achievement.xp} XP
                    </Badge>
                    {expandedAchievement === achievement.id ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </div>
              )
            }

            return (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                isUnlocked={isUnlocked}
                progress={progress}
              />
            )
          })}
        </div>

        {/* Прогресс */}
        <div className="mt-4 pt-4 border-t border-slate-700">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-slate-400">Общий прогресс</span>
            <span className="text-yellow-400">+{stats.totalXP} XP получено</span>
          </div>
          <Progress value={(stats.unlocked / stats.total) * 100} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}

// Мини-версия для сайдбара
export function AchievementGalleryMini() {
  const { achievements } = useSchool()

  const recentAchievements = useMemo(() => {
    return achievements.slice(-4).reverse()
  }, [achievements])

  const total = ALL_ACHIEVEMENTS.length
  const unlocked = achievements.length

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardContent className="py-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">Достижения</span>
          </div>
          <Badge variant="outline" className="text-xs">
            {unlocked}/{total}
          </Badge>
        </div>

        <div className="flex gap-2">
          {recentAchievements.map(a => {
            const achievement = ALL_ACHIEVEMENTS.find(aa => aa.id === a.id)
            return (
              <div
                key={a.id}
                className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center text-xl"
                title={achievement?.title}
              >
                {achievement?.icon || '🏆'}
              </div>
            )
          })}
          {Array.from({ length: Math.max(0, 4 - recentAchievements.length) }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="w-10 h-10 rounded-lg bg-slate-700/30 border border-dashed border-slate-600 flex items-center justify-center"
            >
              <Lock className="w-4 h-4 text-slate-600" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
