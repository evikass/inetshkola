'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Gift, Star, Flame, Check, Lock, Sparkles,
  Calendar, Coins, Zap, Crown
} from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'

// Награды на 7 дней
const DAILY_REWARDS = [
  { day: 1, xp: 50, coins: 10, icon: '⭐' },
  { day: 2, xp: 75, coins: 15, icon: '🌟' },
  { day: 3, xp: 100, coins: 20, icon: '💫' },
  { day: 4, xp: 125, coins: 25, icon: '✨' },
  { day: 5, xp: 150, coins: 30, icon: '🔥' },
  { day: 6, xp: 200, coins: 40, icon: '💎' },
  { day: 7, xp: 300, coins: 50, icon: '👑', special: true },
]

// Хелпер для чтения данных из localStorage
function loadRewardsData() {
  if (typeof window === 'undefined') return { claimedDays: [], lastClaimDate: '' }
  try {
    const saved = localStorage.getItem('dailyRewards_v2')
    if (saved) {
      return JSON.parse(saved)
    }
  } catch { /* ignore */ }
  return { claimedDays: [], lastClaimDate: '' }
}

export function DailyRewards() {
  const { addExperience, playSound, setShowConfetti } = useSchool()
  
  const initialData = useMemo(() => loadRewardsData(), [])
  const [claimedDays, setClaimedDays] = useState<number[]>(initialData.claimedDays)
  const [lastClaimDate, setLastClaimDate] = useState<string>(initialData.lastClaimDate)
  const [showClaimAnimation, setShowClaimAnimation] = useState<number | null>(null)

  // Сохранение данных
  useEffect(() => {
    localStorage.setItem('dailyRewards_v2', JSON.stringify({
      claimedDays,
      lastClaimDate
    }))
  }, [claimedDays, lastClaimDate])

  // Определение текущего дня
  const currentDay = useMemo(() => {
    // Если нет заявленных дней, это день 1
    if (claimedDays.length === 0) return 1
    // Иначе следующий день после последнего заявленного
    const maxClaimed = Math.max(...claimedDays)
    return maxClaimed >= 7 ? 1 : maxClaimed + 1 // Сброс после 7 дня
  }, [claimedDays])

  // Проверка, можно ли получить награду сегодня
  const canClaimToday = useMemo(() => {
    const today = new Date().toDateString()
    if (lastClaimDate === today) return false
    return true
  }, [lastClaimDate])

  // Проверка, прервана ли серия
  const isStreakBroken = useMemo(() => {
    if (claimedDays.length === 0) return false
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const lastClaim = new Date(lastClaimDate)
    
    // Если последний claim был не вчера и не сегодня
    if (lastClaim.toDateString() !== yesterday.toDateString() && 
        lastClaim.toDateString() !== new Date().toDateString()) {
      return true
    }
    return false
  }, [claimedDays, lastClaimDate])

  // Получить награду
  const handleClaim = (day: number) => {
    if (!canClaimToday) return
    if (claimedDays.includes(day)) return
    
    const reward = DAILY_REWARDS[day - 1]
    
    playSound('achievement')
    setShowClaimAnimation(day)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
    
    addExperience(reward.xp)
    setClaimedDays(prev => [...prev, day])
    setLastClaimDate(new Date().toDateString())
    
    setTimeout(() => setShowClaimAnimation(null), 1500)
  }

  // Сбросить прогресс наград
  const resetRewards = () => {
    setClaimedDays([])
    setLastClaimDate('')
    localStorage.removeItem('dailyRewards_v2')
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardContent className="py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
              <Gift className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Ежедневные награды</h3>
              <p className="text-xs text-slate-400">
                {isStreakBroken 
                  ? 'Серия прервана! Начни сначала' 
                  : canClaimToday 
                    ? 'Награда доступна!' 
                    : 'Приходи завтра'}
              </p>
            </div>
          </div>
          {canClaimToday && (
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 animate-pulse">
              Доступно
            </Badge>
          )}
        </div>

        {/* Дни недели */}
        <div className="grid grid-cols-7 gap-1 mb-4">
          {DAILY_REWARDS.map((reward, index) => {
            const dayNum = index + 1
            const isClaimed = claimedDays.includes(dayNum)
            const isCurrent = dayNum === currentDay
            const canClaim = isCurrent && canClaimToday && !isStreakBroken
            const showAnimation = showClaimAnimation === dayNum

            return (
              <div
                key={dayNum}
                className={`
                  relative flex flex-col items-center p-2 rounded-lg transition-all cursor-pointer
                  ${isClaimed 
                    ? 'bg-green-500/20 border border-green-500/30' 
                    : canClaim
                      ? 'bg-yellow-500/20 border border-yellow-500/30 hover:bg-yellow-500/30'
                      : 'bg-slate-700/30 border border-slate-600'}
                  ${showAnimation ? 'animate-bounce-in' : ''}
                `}
                onClick={() => canClaim && handleClaim(dayNum)}
              >
                {/* Номер дня */}
                <span className={`text-xs mb-1 ${isClaimed ? 'text-green-400' : canClaim ? 'text-yellow-400' : 'text-slate-400'}`}>
                  День {dayNum}
                </span>
                
                {/* Иконка */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg ${
                  isClaimed
                    ? 'bg-green-500/30'
                    : canClaim
                      ? 'bg-yellow-500/30'
                      : 'bg-slate-600/50'
                }`}>
                  {isClaimed ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : reward.special ? (
                    <Crown className="w-4 h-4 text-yellow-400" />
                  ) : (
                    reward.icon
                  )}
                </div>

                {/* XP */}
                <span className={`text-xs mt-1 ${isClaimed ? 'text-green-400' : 'text-yellow-400'}`}>
                  +{reward.xp}
                </span>

                {/* Специальная награда */}
                {reward.special && !isClaimed && (
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                  </div>
                )}

                {/* Замок для недоступных дней */}
                {!isClaimed && !canClaim && (
                  <Lock className="absolute inset-0 m-auto w-4 h-4 text-slate-500 opacity-50" />
                )}
              </div>
            )
          })}
        </div>

        {/* Прогресс недели */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">Прогресс недели</span>
            <span className="text-yellow-400">{claimedDays.length}/7 дней</span>
          </div>
          <Progress value={(claimedDays.length / 7) * 100} className="h-2" />
        </div>

        {/* Текущая награда */}
        {canClaimToday && !isStreakBroken && (
          <div className="mt-4 p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{DAILY_REWARDS[currentDay - 1]?.icon}</span>
                <div>
                  <p className="font-medium text-yellow-400">
                    Награда дня {currentDay}
                  </p>
                  <p className="text-xs text-slate-300">
                    +{DAILY_REWARDS[currentDay - 1]?.xp} XP • +{DAILY_REWARDS[currentDay - 1]?.coins} монет
                  </p>
                </div>
              </div>
              <Button
                size="sm"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black"
                onClick={() => handleClaim(currentDay)}
              >
                <Gift className="w-4 h-4 mr-1" />
                Забрать
              </Button>
            </div>
          </div>
        )}

        {/* Серия прервана */}
        {isStreakBroken && (
          <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-red-400" />
                <div>
                  <p className="font-medium text-red-400">Серия прервана!</p>
                  <p className="text-xs text-slate-400">Начни заново с дня 1</p>
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="border-red-500/50 text-red-400"
                onClick={resetRewards}
              >
                Начать заново
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// Компонент для показа маленькой версии наград в сайдбаре
export function DailyRewardsMini() {
  const { playSound, addExperience, setShowConfetti } = useSchool()
  
  const initialData = useMemo(() => loadRewardsData(), [])
  const [claimedDays, setClaimedDays] = useState<number[]>(initialData.claimedDays)
  const [lastClaimDate, setLastClaimDate] = useState<string>(initialData.lastClaimDate)

  const currentDay = claimedDays.length === 0 ? 1 : Math.min(Math.max(...claimedDays) + 1, 7)
  const today = new Date().toDateString()
  const canClaim = lastClaimDate !== today && claimedDays.length < 7

  const handleClaim = useCallback(() => {
    if (!canClaim) return
    
    const reward = DAILY_REWARDS[currentDay - 1]
    playSound('achievement')
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 2000)
    addExperience(reward.xp)
    setClaimedDays(prev => [...prev, currentDay])
    setLastClaimDate(today)
    localStorage.setItem('dailyRewards_v2', JSON.stringify({
      claimedDays: [...claimedDays, currentDay],
      lastClaimDate: today
    }))
  }, [canClaim, currentDay, claimedDays, today, playSound, setShowConfetti, addExperience])

  // Сохранение данных
  useEffect(() => {
    localStorage.setItem('dailyRewards_v2', JSON.stringify({
      claimedDays,
      lastClaimDate
    }))
  }, [claimedDays, lastClaimDate])

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardContent className="py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-yellow-400" />
            <div>
              <p className="text-sm font-medium">Награда дня</p>
              <p className="text-xs text-slate-400">День {currentDay} из 7</p>
            </div>
          </div>
          {canClaim ? (
            <Button size="sm" onClick={handleClaim}>
              Забрать
            </Button>
          ) : (
            <Badge variant="outline" className="text-slate-400">
              Завтра
            </Badge>
          )}
        </div>
        <div className="mt-2 flex gap-1">
          {[1, 2, 3, 4, 5, 6, 7].map(day => (
            <div
              key={day}
              className={`flex-1 h-1 rounded-full ${
                claimedDays.includes(day) ? 'bg-yellow-500' : 'bg-slate-700'
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
