'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Sparkles, Star, Gamepad2, BookOpen, Trophy } from 'lucide-react'
import { useState } from 'react'

interface WelcomeScreenProps {
  userName?: string
  gradeName?: string
  onClose: () => void
}

export default function WelcomeScreen({ 
  userName = 'Ученик', 
  gradeName = '1 класс',
  onClose 
}: WelcomeScreenProps) {
  const [step, setStep] = useState(0)

  const greetings = [
    { emoji: '👋', text: 'Привет!' },
    { emoji: '😊', text: 'Рад тебя видеть!' },
    { emoji: '🌟', text: 'Сегодня отличный день для учёбы!' }
  ]

  const features = [
    { icon: BookOpen, emoji: '📚', label: 'Уроки', color: 'from-blue-500 to-cyan-500' },
    { icon: Gamepad2, emoji: '🎮', label: 'Игры', color: 'from-purple-500 to-pink-500' },
    { icon: Trophy, emoji: '🏆', label: 'Награды', color: 'from-yellow-500 to-orange-500' }
  ]

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-pink-900/95 backdrop-blur-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Декоративные элементы */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              {['⭐', '✨', '🌟', '💫', '🎈'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="w-full max-w-md"
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl overflow-hidden">
            {/* Анимированная шапка */}
            <motion.div
              className="relative h-40 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center overflow-hidden"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              {/* Декоративные круги */}
              <motion.div
                className="absolute w-64 h-64 bg-white/10 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute w-48 h-48 bg-white/20 rounded-full"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />

              {/* Главный эмодзи */}
              <motion.div
                className="text-8xl relative z-10"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎓
              </motion.div>

              {/* Sparkles вокруг */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl"
                  style={{
                    left: `${20 + i * 12}%`,
                    top: `${20 + (i % 3) * 30}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                >
                  ✨
                </motion.div>
              ))}
            </motion.div>

            <div className="p-6 text-center">
              {/* Приветствие */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.h1
                  className="text-3xl font-bold text-white mb-2"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {greetings[step].emoji} {greetings[step].text}
                </motion.h1>
                
                <motion.p
                  className="text-xl text-purple-200 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="font-bold text-white">{userName}</span>
                  {' '}из{' '}
                  <span className="font-bold text-yellow-300">{gradeName}</span>!
                </motion.p>
              </motion.div>

              {/* Возможности */}
              <motion.div
                className="grid grid-cols-3 gap-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="text-2xl mb-1">{feature.emoji}</div>
                    <div className="text-xs font-bold">{feature.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Мотивационное сообщение */}
              <motion.div
                className="flex items-center gap-2 mb-6 p-3 rounded-xl bg-white/5 border border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                </motion.div>
                <p className="text-sm text-white/80 italic">
                  "Образование — это сокровище, которое следует за своим владельцем повсюду"
                </p>
              </motion.div>

              {/* Кнопки */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <Button
                  onClick={onClose}
                  className="w-full py-6 text-xl font-bold rounded-2xl
                    bg-gradient-to-r from-purple-600 to-pink-600 
                    hover:from-purple-700 hover:to-pink-700
                    text-white shadow-lg shadow-purple-500/30
                    transition-all duration-300"
                >
                  <motion.span
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Star className="w-6 h-6" />
                    Начать учиться!
                    <Star className="w-6 h-6" />
                  </motion.span>
                </Button>

                <motion.div
                  className="flex items-center justify-center gap-4 text-sm text-white/60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  <span className="flex items-center gap-1">
                    🎯 12 классов
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    🎮 10+ игр
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    🏆 50+ наград
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
