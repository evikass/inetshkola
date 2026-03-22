'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface MotivationalQuote {
  text: string
  author: string
  category: 'learning' | 'success' | 'perseverance' | 'wisdom'
}

const QUOTES: MotivationalQuote[] = [
  // Об учёбе
  { text: 'Ученье — свет, а неученье — тьма.', author: 'Народная мудрость', category: 'learning' },
  { text: 'Знание — сокровище, которое повсюду следует за тем, кто им обладает.', author: 'Китайская пословица', category: 'learning' },
  { text: 'Жизнь — это школа, где человек учится на своих ошибках.', author: 'Оноре де Бальзак', category: 'learning' },
  { text: 'Учиться, учиться и учиться!', author: 'В.И. Ленин', category: 'learning' },
  { text: 'Знания, которые не пополняются ежедневно, убывают каждый день.', author: 'Народная мудрость', category: 'learning' },
  { text: 'Кто хочет — тот добьётся, кто ищет — тот всегда найдёт!', author: 'Из песни', category: 'learning' },
  
  // Об успехе
  { text: 'Успех — это способность идти от неудачи к неудаче, не теряя энтузиазма.', author: 'Уинстон Черчилль', category: 'success' },
  { text: 'Единственный способ делать великую работу — любить то, что вы делаете.', author: 'Стив Джобс', category: 'success' },
  { text: 'Не бойтесь расти медленно, бойтесь оставаться неизменными.', author: 'Китайская мудрость', category: 'success' },
  { text: 'Каждый мастер когда-то был новичком.', author: 'Народная мудрость', category: 'success' },
  { text: 'Успех не приходит к тем, кто ждёт. Успех приходит к тем, кто действует.', author: 'Неизвестный автор', category: 'success' },
  
  // О настойчивости
  { text: 'Падай семь раз, вставай восемь.', author: 'Японская пословица', category: 'perseverance' },
  { text: 'Дорогу осилит идущий.', author: 'Народная мудрость', category: 'perseverance' },
  { text: 'Терпение и труд всё перетрут.', author: 'Народная мудрость', category: 'perseverance' },
  { text: 'Глаза боятся, а руки делают.', author: 'Народная мудрость', category: 'perseverance' },
  { text: 'Всё приходит во время для того, кто умеет ждать.', author: 'Оноре де Бальзак', category: 'perseverance' },
  { text: 'Начинать всегда стоит с того, что сеешь сомнения в собственных силах.', author: 'Михаил Пришвин', category: 'perseverance' },
  
  // Мудрость
  { text: 'Век живи — век учись.', author: 'Народная мудрость', category: 'wisdom' },
  { text: 'Мудр не тот, кто знает много, а тот, чьи знания полезны.', author: 'Эсхил', category: 'wisdom' },
  { text: 'Знать много языков — значит иметь много ключей к одному замку.', author: 'Вольтер', category: 'wisdom' },
  { text: 'Образование — это то, что остаётся, когда забывается всё, чему нас учили.', author: 'Альберт Эйнштейн', category: 'wisdom' },
  { text: 'Книги — это переплетённые люди.', author: 'А.П. Чехов', category: 'wisdom' },
  { text: 'Не стыдно не знать, стыдно не учиться.', author: 'Народная мудрость', category: 'wisdom' },
]

interface Props {
  compact?: boolean
  autoRotate?: boolean
  rotationInterval?: number
}

export default function MotivationalQuotes({ compact = false, autoRotate = true, rotationInterval = 10000 }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  // Получаем цитату дня на основе даты
  const getQuoteOfTheDay = useCallback(() => {
    const today = new Date()
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)
    return dayOfYear % QUOTES.length
  }, [])
  
  useEffect(() => {
    const quoteIndex = getQuoteOfTheDay()
    setCurrentIndex(quoteIndex)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  // Автоматическая смена цитат
  useEffect(() => {
    if (!autoRotate) return
    
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % QUOTES.length)
        setIsAnimating(false)
      }, 300)
    }, rotationInterval)
    
    return () => clearInterval(timer)
  }, [autoRotate, rotationInterval])
  
  const nextQuote = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % QUOTES.length)
      setIsAnimating(false)
    }, 200)
  }
  
  const prevQuote = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(prev => (prev - 1 + QUOTES.length) % QUOTES.length)
      setIsAnimating(false)
    }, 200)
  }
  
  const currentQuote = QUOTES[currentIndex]
  
  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case 'learning': return '📚'
      case 'success': return '🏆'
      case 'perseverance': return '💪'
      case 'wisdom': return '💡'
      default: return '✨'
    }
  }
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'learning': return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
      case 'success': return 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
      case 'perseverance': return 'from-red-500/20 to-pink-500/20 border-red-500/30'
      case 'wisdom': return 'from-purple-500/20 to-violet-500/20 border-purple-500/30'
      default: return 'from-gray-500/20 to-slate-500/20 border-gray-500/30'
    }
  }
  
  if (compact) {
    return (
      <Card className={`p-4 bg-gradient-to-br ${getCategoryColor(currentQuote.category)} backdrop-blur`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-2"
          >
            <div className="flex items-start gap-2">
              <span className="text-xl">{getCategoryEmoji(currentQuote.category)}</span>
              <p className="text-white text-sm italic flex-1">"{currentQuote.text}"</p>
            </div>
            <p className="text-white/60 text-xs text-right">— {currentQuote.author}</p>
          </motion.div>
        </AnimatePresence>
      </Card>
    )
  }
  
  return (
    <Card className={`p-6 bg-gradient-to-br ${getCategoryColor(currentQuote.category)} backdrop-blur`}>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <h3 className="font-bold text-white">Цитата дня</h3>
          </div>
          <span className="text-2xl">{getCategoryEmoji(currentQuote.category)}</span>
        </div>
        
        {/* Quote */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="relative">
              <Quote className="absolute -top-2 -left-1 w-8 h-8 text-white/20" />
              <p className="text-white text-lg md:text-xl italic pl-6 leading-relaxed">
                "{currentQuote.text}"
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <p className="text-white/70 font-medium">— {currentQuote.author}</p>
              <div className="flex items-center gap-1">
                {QUOTES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAnimating(true)
                      setTimeout(() => {
                        setCurrentIndex(index)
                        setIsAnimating(false)
                      }, 200)
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-white w-4' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <button
            onClick={prevQuote}
            className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <span className="text-white/40 text-sm">
              {currentIndex + 1} из {QUOTES.length}
            </span>
          </div>
          
          <button
            onClick={nextQuote}
            className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Card>
  )
}
