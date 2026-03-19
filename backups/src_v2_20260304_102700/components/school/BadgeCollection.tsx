'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import {
  Trophy, Lock, Sparkles, Star, Crown, Zap,
  CheckCircle, Gift, ChevronRight, X, Volume2, VolumeX
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'
import {
  Badge as BadgeType,
  initialBadges,
  RARITY_COLORS,
  RARITY_LABELS,
  CATEGORY_LABELS,
} from '@/data/badges'
import { cn } from '@/lib/utils'

interface BadgeCollectionProps {
  onBadgeUnlock?: (badge: BadgeType) => void
}

// Confetti animation component
function Confetti() {
  const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#A855F7', '#3B82F6']
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            rotate: 0,
            opacity: 1
          }}
          animate={{
            y: window.innerHeight + 20,
            rotate: Math.random() * 360 * (Math.random() > 0.5 ? 1 : -1),
            opacity: [1, 1, 0]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 0.5,
            ease: 'easeIn'
          }}
          className="absolute w-3 h-3"
          style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            borderRadius: Math.random() > 0.5 ? '50%' : '0%'
          }}
        />
      ))}
    </div>
  )
}

// Single Badge Card Component
interface BadgeCardProps {
  badge: BadgeType
  onClick: () => void
  isRevealing?: boolean
}

function BadgeCard({ badge, onClick, isRevealing }: BadgeCardProps) {
  const rarityStyle = RARITY_COLORS[badge.rarity]
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: isRevealing ? [0.8, 1.1, 1] : 1 
      }}
      whileHover={{ scale: badge.unlocked ? 1.05 : 1 }}
      whileTap={{ scale: badge.unlocked ? 0.95 : 1 }}
      onClick={badge.unlocked ? onClick : undefined}
      className={cn(
        'relative cursor-pointer rounded-xl border-2 p-4 transition-all duration-300',
        badge.unlocked
          ? `bg-gradient-to-br ${rarityStyle.bg} ${rarityStyle.border} ${rarityStyle.glow} shadow-lg`
          : 'bg-gray-800/50 border-gray-700 opacity-60'
      )}
    >
      {/* Glow effect for legendary badges */}
      {badge.unlocked && badge.rarity === 'legendary' && (
        <motion.div
          animate={{
            boxShadow: [
              '0 0 20px rgba(251, 191, 36, 0.3)',
              '0 0 40px rgba(251, 191, 36, 0.5)',
              '0 0 20px rgba(251, 191, 36, 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-xl"
        />
      )}

      {/* Badge icon */}
      <div className="text-center">
        <motion.div
          animate={badge.unlocked && badge.rarity === 'legendary' ? {
            rotate: [0, 5, -5, 0]
          } : {}}
          transition={{ duration: 4, repeat: Infinity }}
          className={cn(
            'text-5xl mb-2',
            !badge.unlocked && 'grayscale opacity-50'
          )}
        >
          {badge.unlocked ? badge.icon : '🔒'}
        </motion.div>

        {/* Badge name */}
        <h4 className={cn(
          'font-bold text-sm mb-1 truncate',
          badge.unlocked ? rarityStyle.text : 'text-gray-500'
        )}>
          {badge.name}
        </h4>

        {/* Rarity indicator */}
        <Badge 
          className={cn(
            'text-xs',
            badge.unlocked 
              ? `bg-gradient-to-r ${rarityStyle.gradient}`
              : 'bg-gray-700 text-gray-400'
          )}
        >
          {RARITY_LABELS[badge.rarity]}
        </Badge>

        {/* Unlock animation overlay */}
        <AnimatePresence>
          {isRevealing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1] }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="w-12 h-12 text-yellow-400" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* XP reward badge */}
      {badge.unlocked && (
        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
          <Zap className="w-3 h-3" />
          {badge.xpReward}
        </div>
      )}
    </motion.div>
  )
}

// Badge Detail Modal
interface BadgeDetailModalProps {
  badge: BadgeType | null
  onClose: () => void
}

function BadgeDetailModal({ badge, onClose }: BadgeDetailModalProps) {
  if (!badge) return null

  const rarityStyle = RARITY_COLORS[badge.rarity]
  
  return (
    <Dialog open={!!badge} onOpenChange={() => onClose()}>
      <DialogContent className="bg-gray-900 border-white/20 max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Информация о значке
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Badge display */}
          <div className={cn(
            'text-center p-6 rounded-xl bg-gradient-to-br',
            rarityStyle.bg
          )}>
            <motion.div
              animate={badge.rarity === 'legendary' ? {
                rotate: [0, 5, -5, 0]
              } : {}}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-7xl mb-3"
            >
              {badge.icon}
            </motion.div>
            <h3 className="text-xl font-bold">{badge.name}</h3>
            <Badge className={cn('mt-2 bg-gradient-to-r', rarityStyle.gradient)}>
              {RARITY_LABELS[badge.rarity]}
            </Badge>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-400">
              <Sparkles className="w-4 h-4" />
              <span className="font-medium">Описание</span>
            </div>
            <p className="text-gray-300">{badge.description}</p>
          </div>

          {/* Condition */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-400">
              <Star className="w-4 h-4" />
              <span className="font-medium">Как получить</span>
            </div>
            <p className="text-gray-300">{badge.condition}</p>
          </div>

          {/* XP Reward */}
          <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg border border-green-500/30">
            <span className="text-green-400">Награда за получение</span>
            <div className="flex items-center gap-1 text-green-400 font-bold">
              <Zap className="w-4 h-4" />
              +{badge.xpReward} XP
            </div>
          </div>

          {/* Unlock date */}
          {badge.unlocked && badge.unlockedAt && (
            <div className="flex items-center justify-between p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
              <span className="text-blue-400">Получен</span>
              <span className="text-blue-400">
                {new Date(badge.unlockedAt).toLocaleDateString('ru-RU', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
            </div>
          )}

          {/* Category */}
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Категория</span>
            <Badge className={cn(
              'bg-gradient-to-r',
              CATEGORY_LABELS[badge.category].color
            )}>
              {CATEGORY_LABELS[badge.category].icon} {CATEGORY_LABELS[badge.category].name}
            </Badge>
          </div>
        </div>

        <Button onClick={onClose} className="w-full mt-4">
          Закрыть
        </Button>
      </DialogContent>
    </Dialog>
  )
}

// Category Filter Tabs
interface CategoryTabsProps {
  activeCategory: string
  onChange: (category: string) => void
  badges: BadgeType[]
}

function CategoryTabs({ activeCategory, onChange, badges }: CategoryTabsProps) {
  const categories = ['all', 'learning', 'gaming', 'streak', 'special'] as const
  
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const count = cat === 'all' 
          ? badges.length 
          : badges.filter(b => b.category === cat).length
        const unlockedCount = cat === 'all'
          ? badges.filter(b => b.unlocked).length
          : badges.filter(b => b.category === cat && b.unlocked).length
        
        return (
          <Button
            key={cat}
            variant={activeCategory === cat ? 'default' : 'outline'}
            onClick={() => onChange(cat)}
            className={cn(
              'transition-all',
              activeCategory === cat && 'bg-primary text-white'
            )}
          >
            {cat === 'all' ? '🏆' : CATEGORY_LABELS[cat].icon} 
            {cat === 'all' ? 'Все' : CATEGORY_LABELS[cat].name}
            <span className="ml-2 text-xs opacity-70">
              {unlockedCount}/{count}
            </span>
          </Button>
        )
      })}
    </div>
  )
}

// Helper function to load badges from localStorage
function loadBadgesFromStorage(): BadgeType[] {
  if (typeof window === 'undefined') return initialBadges
  
  const saved = localStorage.getItem('inetshkola-badges')
  if (saved) {
    try {
      const savedBadges = JSON.parse(saved) as BadgeType[]
      // Merge with initial badges to ensure all badges exist
      return initialBadges.map(initial => {
        const found = savedBadges.find(b => b.id === initial.id)
        return found || initial
      })
    } catch {
      return initialBadges
    }
  }
  return initialBadges
}

// Main Badge Collection Component
export default function BadgeCollection({ onBadgeUnlock }: BadgeCollectionProps) {
  // Use lazy initializer to load from localStorage on first render
  const [badges, setBadges] = useState<BadgeType[]>(() => loadBadgesFromStorage())
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedBadge, setSelectedBadge] = useState<BadgeType | null>(null)
  const [revealingBadgeId, setRevealingBadgeId] = useState<string | null>(null)
  const [showConfetti, setShowConfetti] = useState(false)
  const [newlyUnlocked, setNewlyUnlocked] = useState<BadgeType | null>(null)
  
  const { playLevelUp, isMuted, toggleMute } = useSound()

  // Save badges to localStorage
  useEffect(() => {
    if (badges.length > 0) {
      localStorage.setItem('inetshkola-badges', JSON.stringify(badges))
    }
  }, [badges])

  // Unlock a badge
  const unlockBadge = useCallback((badgeId: string) => {
    setBadges(prev => prev.map(badge => {
      if (badge.id === badgeId && !badge.unlocked) {
        return {
          ...badge,
          unlocked: true,
          unlockedAt: new Date().toISOString()
        }
      }
      return badge
    }))

    // Show reveal animation
    setRevealingBadgeId(badgeId)
    setShowConfetti(true)
    playLevelUp()

    const badge = badges.find(b => b.id === badgeId)
    if (badge) {
      setNewlyUnlocked(badge)
      onBadgeUnlock?.(badge)
    }

    setTimeout(() => {
      setRevealingBadgeId(null)
      setShowConfetti(false)
    }, 2000)
  }, [badges, onBadgeUnlock, playLevelUp])

  // Filter badges by category
  const filteredBadges = activeCategory === 'all'
    ? badges
    : badges.filter(b => b.category === activeCategory)

  // Calculate stats
  const stats = {
    total: badges.length,
    unlocked: badges.filter(b => b.unlocked).length,
    totalXP: badges.filter(b => b.unlocked).reduce((sum, b) => sum + b.xpReward, 0),
    byRarity: {
      legendary: badges.filter(b => b.rarity === 'legendary' && b.unlocked).length,
      epic: badges.filter(b => b.rarity === 'epic' && b.unlocked).length,
      rare: badges.filter(b => b.rarity === 'rare' && b.unlocked).length,
      common: badges.filter(b => b.rarity === 'common' && b.unlocked).length,
    },
    byCategory: {
      learning: badges.filter(b => b.category === 'learning' && b.unlocked).length,
      gaming: badges.filter(b => b.category === 'gaming' && b.unlocked).length,
      streak: badges.filter(b => b.category === 'streak' && b.unlocked).length,
      special: badges.filter(b => b.category === 'special' && b.unlocked).length,
    }
  }

  // Next badge to unlock
  const nextBadge = badges.find(b => !b.unlocked)

  return (
    <div className="space-y-6">
      {/* Confetti animation */}
      <AnimatePresence>
        {showConfetti && <Confetti />}
      </AnimatePresence>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Crown className="w-6 h-6 text-yellow-500" />
            Коллекция значков
          </h2>
          <p className="text-gray-400">Собирай значки за достижения!</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMute}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30">
          <CardContent className="p-4 text-center">
            <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
            <p className="text-2xl font-bold">{stats.unlocked}/{stats.total}</p>
            <p className="text-sm text-gray-400">Собрано</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30">
          <CardContent className="p-4 text-center">
            <Sparkles className="w-8 h-8 mx-auto mb-2 text-purple-400" />
            <p className="text-2xl font-bold">{stats.totalXP}</p>
            <p className="text-sm text-gray-400">XP получено</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border-amber-500/30">
          <CardContent className="p-4 text-center">
            <Crown className="w-8 h-8 mx-auto mb-2 text-amber-400" />
            <p className="text-2xl font-bold">{stats.byRarity.legendary}</p>
            <p className="text-sm text-gray-400">Легендарных</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30">
          <CardContent className="p-4 text-center">
            <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-400" />
            <p className="text-2xl font-bold">{stats.byRarity.epic + stats.byRarity.rare}</p>
            <p className="text-sm text-gray-400">Редких+</p>
          </CardContent>
        </Card>
      </div>

      {/* Progress Bar */}
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Прогресс коллекции</span>
            <span>{Math.round((stats.unlocked / stats.total) * 100)}%</span>
          </div>
          <Progress value={(stats.unlocked / stats.total) * 100} className="h-3" />
          
          {/* Next badge hint */}
          {nextBadge && (
            <div className="flex items-center gap-2 mt-3 text-sm text-gray-400">
              <Gift className="w-4 h-4" />
              <span>Следующий: </span>
              <span className="text-white font-medium">{nextBadge.name}</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-500">{nextBadge.condition}</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Category Filter */}
      <CategoryTabs
        activeCategory={activeCategory}
        onChange={setActiveCategory}
        badges={badges}
      />

      {/* Badge Grid */}
      <ScrollArea className="h-[500px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pr-2">
          <AnimatePresence>
            {filteredBadges.map((badge) => (
              <BadgeCard
                key={badge.id}
                badge={badge}
                onClick={() => setSelectedBadge(badge)}
                isRevealing={revealingBadgeId === badge.id}
              />
            ))}
          </AnimatePresence>
        </div>
      </ScrollArea>

      {/* New Badge Notification */}
      <AnimatePresence>
        {newlyUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50"
          >
            <Card className="bg-gradient-to-r from-yellow-500 to-orange-500 border-0 shadow-2xl">
              <CardContent className="p-4 flex items-center gap-4">
                <span className="text-4xl">{newlyUnlocked.icon}</span>
                <div>
                  <p className="font-bold text-white">Новый значок!</p>
                  <p className="text-white/80">{newlyUnlocked.name}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setNewlyUnlocked(null)}
                  className="text-white"
                >
                  <X className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Badge Detail Modal */}
      <BadgeDetailModal
        badge={selectedBadge}
        onClose={() => setSelectedBadge(null)}
      />
    </div>
  )
}

// Export utility function to unlock badges from other components
export function unlockBadgeById(badgeId: string): void {
  const saved = localStorage.getItem('inetshkola-badges')
  if (saved) {
    try {
      const badges = JSON.parse(saved) as BadgeType[]
      const updatedBadges = badges.map(badge => {
        if (badge.id === badgeId && !badge.unlocked) {
          return {
            ...badge,
            unlocked: true,
            unlockedAt: new Date().toISOString()
          }
        }
        return badge
      })
      localStorage.setItem('inetshkola-badges', JSON.stringify(updatedBadges))
      
      // Dispatch custom event for real-time updates
      window.dispatchEvent(new CustomEvent('badge-unlocked', { 
        detail: { badgeId } 
      }))
    } catch (error) {
      console.error('Failed to unlock badge:', error)
    }
  }
}

// Export hook for badge management
export function useBadgeManager() {
  // Use lazy initializer to load from localStorage on first render
  const [badges, setBadges] = useState<BadgeType[]>(() => loadBadgesFromStorage())

  useEffect(() => {
    // Listen for badge unlock events
    const handleBadgeUnlock = () => {
      const freshBadges = loadBadgesFromStorage()
      setBadges(freshBadges)
    }

    window.addEventListener('badge-unlocked', handleBadgeUnlock)
    return () => window.removeEventListener('badge-unlocked', handleBadgeUnlock)
  }, [])

  const unlockBadge = useCallback((badgeId: string) => {
    unlockBadgeById(badgeId)
  }, [])

  const getBadge = useCallback((badgeId: string) => {
    return badges.find(b => b.id === badgeId)
  }, [badges])

  const getUnlockedBadges = useCallback(() => {
    return badges.filter(b => b.unlocked)
  }, [badges])

  const getBadgesByCategory = useCallback((category: BadgeType['category']) => {
    return badges.filter(b => b.category === category)
  }, [badges])

  return {
    badges,
    unlockBadge,
    getBadge,
    getUnlockedBadges,
    getBadgesByCategory,
    stats: {
      total: badges.length,
      unlocked: badges.filter(b => b.unlocked).length,
      totalXP: badges.filter(b => b.unlocked).reduce((sum, b) => sum + b.xpReward, 0)
    }
  }
}
