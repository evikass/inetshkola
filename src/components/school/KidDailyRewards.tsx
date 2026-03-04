'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Star, Gift, Trophy, Flame, Sparkles, Crown } from 'lucide-react'

interface KidDailyRewardsProps {
  onClaim: (stars: number) => void
}

// Награды по дням
const dailyRewards = [
  { day: 1, stars: 5, emoji: '⭐', name: '5 звёзд' },
  { day: 2, stars: 10, emoji: '🌟', name: '10 звёзд' },
  { day: 3, stars: 15, emoji: '💫', name: '15 звёзд' },
  { day: 4, stars: 20, emoji: '✨', name: '20 звёзд' },
  { day: 5, stars: 25, emoji: '🎁', name: '25 звёзд' },
  { day: 6, stars: 30, emoji: '🏆', name: '30 звёзд' },
  { day: 7, stars: 50, emoji: '👑', name: '50 звёзд + корона!' },
]

export default function KidDailyRewards({ onClaim }: KidDailyRewardsProps) {
  const [showDialog, setShowDialog] = useState(false)
  const [currentStreak, setCurrentStreak] = useState(0)
  const [lastClaimDate, setLastClaimDate] = useState('')
  const [todayClaimed, setTodayClaimed] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [claimedReward, setClaimedReward] = useState<typeof dailyRewards[0] | null>(null)

  // Загрузка данных из localStorage
  useEffect(() => {
    const savedStreak = localStorage.getItem('kid_daily_streak')
    const savedLastClaim = localStorage.getItem('kid_last_claim')
    
    const streak = savedStreak ? parseInt(savedStreak) : 0
    const lastClaim = savedLastClaim || ''
    const today = new Date().toDateString()
    
    setCurrentStreak(streak)
    setLastClaimDate(lastClaim)
    setTodayClaimed(lastClaim === today)

    // Показываем диалог если сегодня ещё не забирали награду
    if (lastClaim !== today) {
      // Проверяем, вчера ли была последняя активность
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      
      if (lastClaim === yesterday.toDateString()) {
        // Продолжаем стрик
        setShowDialog(true)
      } else if (lastClaim === '') {
        // Первый вход
        setShowDialog(true)
      } else {
        // Стрик прерван, начинаем заново
        setCurrentStreak(0)
        setShowDialog(true)
      }
    }
  }, [])

  // Забрать награду
  const claimReward = () => {
    const today = new Date().toDateString()
    const newStreak = (currentStreak % 7) + 1
    const reward = dailyRewards[newStreak - 1]
    
    setCurrentStreak(newStreak)
    setLastClaimDate(today)
    setTodayClaimed(true)
    setClaimedReward(reward)
    setShowCelebration(true)

    // Сохраняем в localStorage
    localStorage.setItem('kid_daily_streak', newStreak.toString())
    localStorage.setItem('kid_last_claim', today)

    // Вибрация
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100, 50, 200])
    }

    // Через 2 секунды закрываем празднование и даём награду
    setTimeout(() => {
      setShowCelebration(false)
      onClaim(reward.stars)
      setShowDialog(false)
    }, 2500)
  }

  // Закрыть диалог
  const closeDialog = () => {
    setShowDialog(false)
  }

  return (
    <>
      {/* Кнопка открытия наград */}
      <Card 
        className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-3xl p-4 cursor-pointer hover:scale-105 transition-all shadow-xl border-0"
        onClick={() => setShowDialog(true)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl animate-bounce">🎁</div>
            <div>
              <h3 className="text-lg font-bold text-white">Ежедневные награды</h3>
              <p className="text-white/80 text-sm">
                {todayClaimed 
                  ? `Забрано сегодня! 🔥 ${currentStreak} дней подряд`
                  : 'Забери свой подарок!'
                }
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-white/20 rounded-2xl px-3 py-2">
            <Flame className="w-5 h-5 text-orange-300" />
            <span className="text-white font-bold">{currentStreak}</span>
          </div>
        </div>
      </Card>

      {/* Диалог наград */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 border-0 rounded-3xl max-w-md p-0 overflow-hidden">
          {/* Шапка */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 text-center">
            <div className="text-6xl mb-2 animate-bounce">🎁</div>
            <h2 className="text-2xl font-bold text-white">
              {todayClaimed ? 'Награды' : 'Забери награду!'}
            </h2>
            <p className="text-white/80">
              {todayClaimed 
                ? `Ты заходишь ${currentStreak} дней подряд!`
                : 'Каждый день - новые подарки!'
              }
            </p>
          </div>

          {/* Календарь наград */}
          <div className="p-4 space-y-3">
            <div className="grid grid-cols-7 gap-2">
              {dailyRewards.map((reward, index) => {
                const isClaimed = index < currentStreak
                const isToday = index === currentStreak && !todayClaimed
                const isLocked = index > currentStreak

                return (
                  <div
                    key={reward.day}
                    className={`
                      aspect-square rounded-2xl flex flex-col items-center justify-center
                      transition-all duration-300 relative
                      ${isClaimed 
                        ? 'bg-gradient-to-br from-green-400 to-emerald-500 scale-95' 
                        : isToday
                          ? 'bg-gradient-to-br from-yellow-400 to-orange-500 ring-4 ring-white animate-pulse'
                          : 'bg-white/20'
                      }
                    `}
                  >
                    {/* День */}
                    <span className={`text-xs font-bold ${isLocked ? 'text-white/50' : 'text-white'}`}>
                      {reward.day}
                    </span>
                    
                    {/* Эмодзи */}
                    <span className={`text-lg ${isLocked ? 'opacity-30' : ''}`}>
                      {isLocked ? '🔒' : reward.emoji}
                    </span>

                    {/* Галочка */}
                    {isClaimed && (
                      <div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5">
                        <span className="text-xs">✅</span>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Сегодняшняя награда */}
            {!todayClaimed && currentStreak < 7 && (
              <Card className="bg-white/20 rounded-2xl p-4 text-center">
                <p className="text-white/80 text-sm mb-2">Сегодняшняя награда:</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-4xl">{dailyRewards[currentStreak].emoji}</span>
                  <div className="text-left">
                    <p className="text-white font-bold text-lg">
                      {dailyRewards[currentStreak].name}
                    </p>
                    <p className="text-white/70 text-sm">
                      {dailyRewards[currentStreak].stars} звёзд
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {/* Кнопка забрать */}
            {!todayClaimed ? (
              <Button
                onClick={claimReward}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl py-6 text-xl font-bold shadow-xl"
              >
                <Gift className="w-6 h-6 mr-2" />
                Забрать подарок!
              </Button>
            ) : (
              <div className="text-center py-4">
                <p className="text-white/80">
                  Приходи завтра за новой наградой! 🌟
                </p>
              </div>
            )}

            {/* Подсказка о стрике */}
            {currentStreak > 0 && (
              <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
                <Flame className="w-4 h-4 text-orange-400" />
                <span>{currentStreak} дней подряд!</span>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Празднование */}
      {showCelebration && claimedReward && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="text-center animate-celebration">
            <div className="text-9xl mb-4 animate-bounce">{claimedReward.emoji}</div>
            <div className="text-4xl font-bold text-white drop-shadow-lg mb-2">
              +{claimedReward.stars} ЗВЁЗД!
            </div>
            <div className="flex justify-center gap-2">
              {[...Array(7)].map((_, i) => (
                <Star
                  key={i}
                  className="w-8 h-8 text-yellow-400 fill-yellow-400 animate-star-pop"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>

          {/* Конфетти */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-confetti text-2xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '-20px',
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              >
                {['🎉', '⭐', '🌟', '✨', '🎊', '💫'][Math.floor(Math.random() * 6)]}
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes celebration {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes star-pop {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1.3) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); opacity: 1; }
        }
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-celebration { animation: celebration 0.5s ease-out forwards; }
        .animate-star-pop { animation: star-pop 0.6s ease-out forwards; }
        .animate-confetti { animation: confetti 3s ease-out forwards; }
      `}</style>
    </>
  )
}
