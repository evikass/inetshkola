'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Gift, Star, Flame, Calendar, Lock, Check, Sparkles, 
  Crown, Zap, Snowflake, Award, TrendingUp
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

interface DailyReward {
  day: number
  xp: number
  badge?: string
  special?: string
  isWeekend?: boolean
}

interface DailyRewardsCalendarProps {
  onClaim?: (xp: number, badges?: string[]) => void
}

// Rewards configuration
const DAILY_REWARDS: DailyReward[] = [
  { day: 1, xp: 10 },
  { day: 2, xp: 20 },
  { day: 3, xp: 30, badge: '🌟' },
  { day: 4, xp: 40 },
  { day: 5, xp: 50, badge: '⭐' },
  { day: 6, xp: 60, isWeekend: true },
  { day: 7, xp: 100, badge: '🏆', special: '👑 Специальная награда!' }
]

// Weekend bonus multiplier
const WEEKEND_MULTIPLIER = 2

export default function DailyRewardsCalendar({ onClaim }: DailyRewardsCalendarProps) {
  const [currentStreak, setCurrentStreak] = useState(0)
  const [lastClaimDate, setLastClaimDate] = useState('')
  const [todayClaimed, setTodayClaimed] = useState(false)
  const [showRewardReveal, setShowRewardReveal] = useState(false)
  const [revealedReward, setRevealedReward] = useState<DailyReward | null>(null)
  const [streakFreezes, setStreakFreezes] = useState(3)
  const [monthlyProgress, setMonthlyProgress] = useState(0)
  const [claimedBadges, setClaimedBadges] = useState<string[]>([])
  
  const { playSuccess, playWin, playLevelUp } = useSound()

  // Load data from localStorage
  useEffect(() => {
    const savedStreak = localStorage.getItem('daily_rewards_streak')
    const savedLastClaim = localStorage.getItem('daily_rewards_last_claim')
    const savedFreezes = localStorage.getItem('daily_rewards_freezes')
    const savedMonthlyProgress = localStorage.getItem('daily_rewards_monthly')
    const savedBadges = localStorage.getItem('daily_rewards_badges')
    
    const streak = savedStreak ? parseInt(savedStreak) : 0
    const lastClaim = savedLastClaim || ''
    const today = new Date().toDateString()
    
    setCurrentStreak(streak)
    setLastClaimDate(lastClaim)
    setTodayClaimed(lastClaim === today)
    setStreakFreezes(savedFreezes ? parseInt(savedFreezes) : 3)
    setMonthlyProgress(savedMonthlyProgress ? parseInt(savedMonthlyProgress) : 0)
    setClaimedBadges(savedBadges ? JSON.parse(savedBadges) : [])
    
    // Check if streak should be reset
    if (lastClaim && lastClaim !== today) {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      
      if (lastClaim !== yesterday.toDateString() && streak > 0) {
        // Streak broken - check for freeze
        if (streakFreezes > 0) {
          setStreakFreezes(prev => prev - 1)
          localStorage.setItem('daily_rewards_freezes', String(streakFreezes - 1))
        } else {
          setCurrentStreak(0)
          localStorage.setItem('daily_rewards_streak', '0')
        }
      }
    }
  }, [])

  // Check if today is weekend
  const isWeekend = () => {
    const day = new Date().getDay()
    return day === 0 || day === 6
  }

  // Get current day in streak cycle (1-7)
  const getCurrentDay = () => {
    return (currentStreak % 7) + 1
  }

  // Calculate XP with weekend bonus
  const calculateXP = (reward: DailyReward) => {
    const baseXP = reward.xp
    if (isWeekend() || reward.isWeekend) {
      return baseXP * WEEKEND_MULTIPLIER
    }
    return baseXP
  }

  // Claim daily reward
  const claimReward = () => {
    if (todayClaimed) return
    
    const currentDay = getCurrentDay()
    const reward = DAILY_REWARDS[currentDay - 1]
    const xp = calculateXP(reward)
    const newStreak = currentStreak + 1
    const today = new Date().toDateString()
    
    // Update state
    setCurrentStreak(newStreak)
    setLastClaimDate(today)
    setTodayClaimed(true)
    setRevealedReward({ ...reward, xp })
    setShowRewardReveal(true)
    
    // Update monthly progress
    const newMonthlyProgress = monthlyProgress + 1
    setMonthlyProgress(newMonthlyProgress)
    
    // Add badge if applicable
    const newBadges = [...claimedBadges]
    if (reward.badge && !newBadges.includes(reward.badge)) {
      newBadges.push(reward.badge)
      setClaimedBadges(newBadges)
    }
    
    // Save to localStorage
    localStorage.setItem('daily_rewards_streak', newStreak.toString())
    localStorage.setItem('daily_rewards_last_claim', today)
    localStorage.setItem('daily_rewards_monthly', newMonthlyProgress.toString())
    localStorage.setItem('daily_rewards_badges', JSON.stringify(newBadges))
    
    // Play sounds
    if (reward.special) {
      playWin()
    } else {
      playLevelUp()
    }
    
    // Callback
    if (onClaim) {
      onClaim(xp, reward.badge ? [reward.badge] : undefined)
    }
    
    // Vibration
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100, 50, 200])
    }
    
    // Hide reveal after animation
    setTimeout(() => {
      setShowRewardReveal(false)
    }, 3000)
  }

  // Use streak freeze
  const useStreakFreeze = () => {
    if (streakFreezes > 0) {
      setStreakFreezes(prev => prev - 1)
      localStorage.setItem('daily_rewards_freezes', String(streakFreezes - 1))
      playSuccess()
    }
  }

  // Get day status
  const getDayStatus = (day: number): 'completed' | 'current' | 'locked' => {
    const currentDay = getCurrentDay()
    if (todayClaimed) {
      if (day <= currentDay) return 'completed'
      if (day === currentDay + 1) return 'current'
      return 'locked'
    }
    if (day < currentDay) return 'completed'
    if (day === currentDay) return 'current'
    return 'locked'
  }

  return (
    <div className="space-y-4">
      {/* Header with streak */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="w-6 h-6 text-blue-400" />
          <h2 className="text-xl font-bold text-white">Ежедневные награды</h2>
        </div>
        <div className="flex items-center gap-2">
          {/* Streak Freeze */}
          <Button
            variant="outline"
            size="sm"
            onClick={useStreakFreeze}
            disabled={streakFreezes === 0}
            className="border-cyan-500/30 text-cyan-400"
          >
            <Snowflake className="w-4 h-4 mr-1" />
            {streakFreezes}
          </Button>
          {/* Streak */}
          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1">
            <Flame className="w-4 h-4 mr-1" />
            {currentStreak} дней
          </Badge>
        </div>
      </div>

      {/* Streak progress */}
      <Card className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-500/30">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-white/70">Прогресс серии</span>
            <span className="text-sm font-bold text-white">
              {getCurrentDay()}/7 дней
            </span>
          </div>
          <Progress value={(getCurrentDay() / 7) * 100} className="h-2" />
          <div className="flex justify-between mt-2 text-xs text-white/50">
            <span>Начало цикла</span>
            <span className="text-yellow-400">👑 Большая награда!</span>
          </div>
        </CardContent>
      </Card>

      {/* Weekend Bonus Banner */}
      {isWeekend() && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-bold">
              🎉 Выходные бонус! x2 XP сегодня!
            </span>
          </div>
        </motion.div>
      )}

      {/* Calendar Grid */}
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-4">
          <div className="grid grid-cols-7 gap-2">
            {DAILY_REWARDS.map((reward, index) => {
              const status = getDayStatus(reward.day)
              const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
              
              return (
                <motion.div
                  key={reward.day}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className={`
                    relative aspect-square rounded-xl flex flex-col items-center justify-center
                    transition-all duration-300
                    ${status === 'completed' 
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
                      : status === 'current'
                        ? 'bg-gradient-to-br from-yellow-400 to-orange-500 ring-2 ring-white shadow-lg'
                        : 'bg-white/10'
                    }
                  `}
                >
                  {/* Day number */}
                  <span className={`
                    text-xs font-bold absolute top-1
                    ${status === 'locked' ? 'text-white/30' : 'text-white'}
                  `}>
                    {dayNames[index]}
                  </span>
                  
                  {/* XP or Badge */}
                  <div className="text-center">
                    {status === 'locked' ? (
                      <Lock className="w-4 h-4 text-white/30" />
                    ) : status === 'completed' ? (
                      <div className="flex flex-col items-center">
                        <Check className="w-5 h-5 text-white" />
                        <span className="text-xs text-white/80 mt-1">
                          {reward.badge || `${reward.xp}XP`}
                        </span>
                      </div>
                    ) : (
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="flex flex-col items-center"
                      >
                        {reward.badge ? (
                          <span className="text-2xl">{reward.badge}</span>
                        ) : (
                          <>
                            <Zap className="w-5 h-5 text-white" />
                            <span className="text-xs text-white font-bold">
                              {calculateXP(reward)}XP
                            </span>
                          </>
                        )}
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Special indicator */}
                  {reward.special && status !== 'locked' && (
                    <motion.div
                      className="absolute -top-1 -right-1"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    >
                      👑
                    </motion.div>
                  )}
                  
                  {/* Weekend indicator */}
                  {reward.isWeekend && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
                      <span className="text-xs">🔥</span>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Today's Reward Card */}
      <Card className={`
        ${todayClaimed 
          ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30' 
          : 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
        }
      `}>
        <CardContent className="p-4">
          {!todayClaimed ? (
            <>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-white font-bold">Награда за сегодня</p>
                  <p className="text-white/60 text-sm">
                    День {getCurrentDay()} из 7
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                  className="text-4xl"
                >
                  {DAILY_REWARDS[getCurrentDay() - 1]?.badge || '🎁'}
                </motion.div>
              </div>
              
              <Button
                onClick={claimReward}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-xl py-6 text-lg font-bold"
              >
                <Gift className="w-5 h-5 mr-2" />
                Забрать {calculateXP(DAILY_REWARDS[getCurrentDay() - 1])} XP!
                {isWeekend() && (
                  <Badge className="ml-2 bg-purple-500">x2</Badge>
                )}
              </Button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center"
              >
                <Check className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <p className="text-white font-bold">Награда получена!</p>
                <p className="text-white/60 text-sm">
                  Приходи завтра за новой наградой
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Collected Badges */}
      {claimedBadges.length > 0 && (
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-400" />
              Собранные значки
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              {claimedBadges.map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center text-2xl"
                >
                  {badge}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Monthly Progress */}
      <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">Месячный бонус</span>
            </div>
            <span className="text-white/70 text-sm">
              {monthlyProgress}/30 дней
            </span>
          </div>
          <Progress value={(monthlyProgress / 30) * 100} className="h-2" />
          {monthlyProgress >= 30 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-center text-yellow-400 font-bold"
            >
              🎉 Месячный бонус получен! +500 XP
            </motion.div>
          )}
        </CardContent>
      </Card>

      {/* Reward Reveal Animation */}
      <AnimatePresence>
        {showRewardReveal && revealedReward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              className="text-center"
            >
              {/* Stars background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ 
                      x: Math.random() * 400 - 200,
                      y: Math.random() * 400 - 200,
                      scale: 0,
                      opacity: 0
                    }}
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 1.5,
                      delay: Math.random() * 0.5,
                      repeat: Infinity
                    }}
                    className="absolute left-1/2 top-1/2 text-2xl"
                  >
                    ✨
                  </motion.div>
                ))}
              </div>
              
              {/* Reward */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <div className="text-8xl mb-4">
                  {revealedReward.badge || '🎁'}
                </div>
              </motion.div>
              
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-white mb-2"
              >
                +{revealedReward.xp} XP!
              </motion.h2>
              
              {revealedReward.special && (
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl text-yellow-400"
                >
                  {revealedReward.special}
                </motion.p>
              )}
              
              {isWeekend() && (
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg text-purple-300 mt-2"
                >
                  🎉 Выходные бонус x2!
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confetti on claim */}
      <AnimatePresence>
        {showRewardReveal && (
          <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  y: -20,
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 400),
                  rotate: 0
                }}
                animate={{ 
                  y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100,
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 400),
                  rotate: Math.random() * 720 - 360
                }}
                transition={{ 
                  duration: 2 + Math.random() * 2,
                  delay: Math.random() * 0.5
                }}
                className="absolute text-2xl"
              >
                {['🎉', '⭐', '🌟', '✨', '🎊', '💫', '🏆'][Math.floor(Math.random() * 7)]}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
