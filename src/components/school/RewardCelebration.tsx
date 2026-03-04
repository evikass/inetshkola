'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Star, Trophy, Sparkles, X } from 'lucide-react'

interface RewardCelebrationProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
  stars: number
  xp?: number
  achievement?: {
    name: string
    icon: string
  }
}

// Компонент конфетти
const Confetti = () => {
  const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#A78BFA', '#F472B6', '#34D399']
  const confettiCount = 50

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {[...Array(confettiCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-20px',
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            rotate: Math.random() * 360,
          }}
          animate={{
            y: [0, window.innerHeight + 100],
            x: [0, (Math.random() - 0.5) * 200],
            rotate: [0, 720],
            opacity: [1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 0.5,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}

// Компонент фейерверка
const Firework = ({ x, color }: { x: number; color: string }) => {
  const particles = 12

  return (
    <div 
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: '30%' }}
    >
      {[...Array(particles)].map((_, i) => {
        const angle = (i / particles) * 360
        const distance = 100 + Math.random() * 50
        
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
            initial={{ x: 0, y: 0, scale: 1 }}
            animate={{
              x: Math.cos(angle * Math.PI / 180) * distance,
              y: Math.sin(angle * Math.PI / 180) * distance,
              scale: 0,
              opacity: 0
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        )
      })}
    </div>
  )
}

export default function RewardCelebration({
  isOpen,
  onClose,
  title,
  message,
  stars,
  xp = 0,
  achievement
}: RewardCelebrationProps) {
  // Конфетти показываем только когда модал открыт
  const showConfetti = isOpen

  const fireworkColors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#A78BFA']

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Конфетти */}
          {showConfetti && <Confetti />}
          
          {/* Фейерверки */}
          <div className="fixed inset-0 pointer-events-none z-40">
            {showConfetti && fireworkColors.map((color, i) => (
              <Firework key={i} x={20 + i * 20} color={color} />
            ))}
          </div>

          {/* Основной модал */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-md"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="relative overflow-hidden bg-gradient-to-br from-purple-900/95 via-pink-900/95 to-blue-900/95 border-white/20 shadow-2xl">
                {/* Закрыть */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Декоративный фон */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    className="absolute w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl -top-48 -right-48"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute w-64 h-64 bg-pink-500/20 rounded-full blur-3xl -bottom-32 -left-32"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />
                </div>

                <div className="relative p-8 text-center">
                  {/* Главный трофей */}
                  <motion.div
                    className="text-8xl mb-4"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  >
                    🎉
                  </motion.div>

                  {/* Заголовок */}
                  <motion.h2
                    className="text-3xl font-bold text-white mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {title}
                  </motion.h2>

                  {/* Сообщение */}
                  <motion.p
                    className="text-lg text-purple-200 mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {message}
                  </motion.p>

                  {/* Звёзды */}
                  <motion.div
                    className="flex justify-center gap-2 mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                      >
                        <Star
                          className={`w-10 h-10 ${
                            i < stars 
                              ? 'text-yellow-400 fill-yellow-400' 
                              : 'text-gray-500'
                          }`}
                        />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* XP */}
                  {xp > 0 && (
                    <motion.div
                      className="flex items-center justify-center gap-2 mb-4 p-3 rounded-xl bg-white/10"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Sparkles className="w-5 h-5 text-yellow-400" />
                      <span className="text-2xl font-bold text-yellow-400">+{xp} XP</span>
                    </motion.div>
                  )}

                  {/* Достижение */}
                  {achievement && (
                    <motion.div
                      className="p-4 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-yellow-500/30 mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7, type: "spring" }}
                    >
                      <p className="text-sm text-yellow-300 mb-2">🎯 Новое достижение!</p>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-3xl">{achievement.icon}</span>
                        <span className="text-lg font-bold text-white">{achievement.name}</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Кнопка */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Button
                      onClick={onClose}
                      className="px-8 py-6 text-lg font-bold rounded-2xl
                        bg-gradient-to-r from-yellow-500 to-orange-500 
                        hover:from-yellow-600 hover:to-orange-600
                        text-white shadow-lg"
                    >
                      <Trophy className="w-5 h-5 mr-2" />
                      Отлично!
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
