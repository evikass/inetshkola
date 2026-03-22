'use client'

import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Brain, Clock, AlertCircle, CheckCircle, X, ChevronRight,
  Calendar, Sparkles, Target, Zap, RotateCcw, BookOpen
} from 'lucide-react'

// Типы
interface ReviewCard {
  id: string
  front: string
  back: string
  subject: string
  topic: string
  difficulty: 'easy' | 'medium' | 'hard'
  nextReview: string // ISO date
  interval: number // days
  easeFactor: number
  repetitions: number
}

interface SpacedRepetitionProps {
  onReview?: (cardId: string, quality: number) => void
  onExperience?: (xp: number) => void
}

// Демо карточки для повторения
const DEMO_CARDS: ReviewCard[] = [
  {
    id: '1',
    front: 'Чему равно число π (пи)?',
    back: 'π ≈ 3.14159...\n\nОтношение длины окружности к её диаметру.',
    subject: 'Математика',
    topic: 'Геометрия',
    difficulty: 'easy',
    nextReview: new Date().toISOString(),
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: '2',
    front: 'Что такое photosynthesis?',
    back: 'Фотосинтез — процесс преобразования света в энергию химических связей органических веществ.\n\n6CO₂ + 6H₂O + свет → C₆H₁₂O₆ + 6O₂',
    subject: 'Биология',
    topic: 'Растения',
    difficulty: 'medium',
    nextReview: new Date().toISOString(),
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: '3',
    front: 'Правило правой руки для магнитного поля',
    back: 'Если обхватить проводник правой рукой так, чтобы большой палец указывал направление тока, то согнутые пальцы покажут направление линий магнитного поля.',
    subject: 'Физика',
    topic: 'Электромагнетизм',
    difficulty: 'hard',
    nextReview: new Date().toISOString(),
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: '4',
    front: 'Формула дискриминанта',
    back: 'D = b² - 4ac\n\nЕсли D > 0: два корня\nЕсли D = 0: один корень\nЕсли D < 0: нет корней',
    subject: 'Алгебра',
    topic: 'Квадратные уравнения',
    difficulty: 'easy',
    nextReview: new Date().toISOString(),
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: '5',
    front: 'Что такое митоз?',
    back: 'Митоз — непрямое деление клетки, при котором из одной материнской клетки образуются две дочерние с одинаковым набором хромосом.\n\nФазы: профаза, метафаза, анафаза, телофаза',
    subject: 'Биология',
    topic: 'Клетка',
    difficulty: 'medium',
    nextReview: new Date().toISOString(),
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0
  }
]

// Качество ответа по SM-2 алгоритму
const QUALITY_BUTTONS = [
  { quality: 0, label: 'Забыл', color: 'bg-red-500 hover:bg-red-400', icon: X },
  { quality: 3, label: 'С трудом', color: 'bg-orange-500 hover:bg-orange-400', icon: AlertCircle },
  { quality: 5, label: 'Легко', color: 'bg-green-500 hover:bg-green-400', icon: CheckCircle }
]

// SM-2 алгоритм для интервального повторения
function calculateNextReview(card: ReviewCard, quality: number): { interval: number; easeFactor: number; nextReview: Date } {
  let { interval, easeFactor, repetitions } = card

  if (quality >= 3) {
    // Успешный ответ
    if (repetitions === 0) {
      interval = 1
    } else if (repetitions === 1) {
      interval = 6
    } else {
      interval = Math.round(interval * easeFactor)
    }
    repetitions++
  } else {
    // Неуспешный ответ
    repetitions = 0
    interval = 1
  }

  // Обновляем factor сложности
  easeFactor = Math.max(1.3, easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)))

  const nextReview = new Date()
  nextReview.setDate(nextReview.getDate() + interval)

  return { interval, easeFactor, nextReview }
}

// Цвета сложности
const DIFFICULTY_COLORS = {
  easy: 'text-green-400 bg-green-500/20',
  medium: 'text-yellow-400 bg-yellow-500/20',
  hard: 'text-red-400 bg-red-500/20'
}

export default function SpacedRepetition({ onReview, onExperience }: SpacedRepetitionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [sessionStats, setSessionStats] = useState({ reviewed: 0, correct: 0, xp: 0 })
  const [isComplete, setIsComplete] = useState(false)

  // Инициализация карточек - всегда начинаем с DEMO_CARDS для одинакового SSR
  const [cards, setCards] = useState<ReviewCard[]>(() => DEMO_CARDS)

  // Загружаем карточки после монтирования на клиенте
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]
    const savedCards = localStorage.getItem('review-cards')

    if (savedCards) {
      try {
        const parsed = JSON.parse(savedCards)
        // Фильтруем карточки, которые нужно повторить сегодня
        const dueCards = parsed.filter((c: ReviewCard) => c.nextReview.split('T')[0] <= today)
        if (dueCards.length > 0) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setCards(dueCards)
        }
      } catch (e) {
        console.error('Error loading cards:', e)
      }
    }
  }, [])

  // Текущая карточка
  const currentCard = cards[currentIndex]

  // Оставшиеся карточки
  const remaining = cards.length - currentIndex

  // Показать ответ
  const handleShowAnswer = () => {
    setIsFlipped(true)
  }

  // Оценить ответ
  const handleQuality = (quality: number) => {
    if (!currentCard) return

    const { interval, easeFactor, nextReview } = calculateNextReview(currentCard, quality)

    // Обновляем карточку
    const updatedCard = {
      ...currentCard,
      interval,
      easeFactor,
      nextReview: nextReview.toISOString(),
      repetitions: quality >= 3 ? currentCard.repetitions + 1 : 0
    }

    // Сохраняем обновлённую карточку
    const updatedCards = cards.map(c => c.id === currentCard.id ? updatedCard : c)
    localStorage.setItem('review-cards', JSON.stringify(updatedCards))

    // Обновляем статистику сессии
    const xpEarned = quality === 5 ? 15 : quality === 3 ? 10 : 5
    setSessionStats(prev => ({
      reviewed: prev.reviewed + 1,
      correct: quality >= 3 ? prev.correct + 1 : prev.correct,
      xp: prev.xp + xpEarned
    }))

    onExperience?.(xpEarned)
    onReview?.(currentCard.id, quality)

    // Переходим к следующей карточке
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setIsFlipped(false)
    } else {
      setIsComplete(true)
    }
  }

  // Начать заново
  const handleRestart = () => {
    setCurrentIndex(0)
    setIsFlipped(false)
    setIsComplete(false)
    setSessionStats({ reviewed: 0, correct: 0, xp: 0 })
  }

  // Завершено
  if (isComplete) {
    const percentage = Math.round((sessionStats.correct / sessionStats.reviewed) * 100)

    return (
      <Card className="relative overflow-hidden border-2 border-white/10 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <CardContent className="pt-8 pb-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mx-auto w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4"
          >
            <Sparkles className="w-12 h-12 text-white" />
          </motion.div>

          <h2 className="text-2xl font-bold text-white mb-2">Отличная работа!</h2>
          <p className="text-gray-400 mb-6">Сессия повторения завершена</p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="p-3 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-white">{sessionStats.reviewed}</div>
              <div className="text-xs text-gray-400">Повторено</div>
            </div>
            <div className="p-3 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-green-400">{percentage}%</div>
              <div className="text-xs text-gray-400">Правильно</div>
            </div>
            <div className="p-3 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-yellow-400">+{sessionStats.xp}</div>
              <div className="text-xs text-gray-400">XP</div>
            </div>
          </div>

          <Button onClick={handleRestart} className="bg-gradient-to-r from-purple-500 to-pink-500">
            <RotateCcw className="w-4 h-4 mr-2" />
            Начать заново
          </Button>
        </CardContent>
      </Card>
    )
  }

  // Нет карточек
  if (!currentCard) {
    return (
      <Card className="border-2 border-white/10 bg-gradient-to-br from-slate-800/80 to-slate-900/80">
        <CardContent className="pt-8 pb-8 text-center">
          <Brain className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-white mb-2">Нет карточек для повторения</h3>
          <p className="text-gray-400 text-sm">Все карточки повторены на сегодня!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="relative overflow-hidden border-2 border-white/10 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm">
      {/* Декоративный градиент */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <motion.div
              className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Brain className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-white">Интервальное повторение</span>
          </CardTitle>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>{remaining} осталось</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Прогресс */}
        <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
          />
        </div>

        {/* Статистика сессии */}
        <div className="flex justify-between text-xs text-gray-400">
          <span>Повторено: {sessionStats.reviewed}</span>
          <span>Правильно: {sessionStats.correct}</span>
          <span>XP: +{sessionStats.xp}</span>
        </div>

        {/* Карточка */}
        <div className="perspective-1000">
          <motion.div
            className={`relative min-h-[200px] cursor-pointer`}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: 'preserve-3d' }}
            onClick={() => !isFlipped && handleShowAnswer()}
          >
            {/* Передняя сторона */}
            <div
              className={`absolute inset-0 p-6 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl border border-white/10 flex flex-col ${isFlipped ? 'invisible' : ''}`}
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs px-2 py-1 rounded-full ${DIFFICULTY_COLORS[currentCard.difficulty]}`}>
                  {currentCard.difficulty === 'easy' ? 'Лёгкая' : currentCard.difficulty === 'medium' ? 'Средняя' : 'Сложная'}
                </span>
                <span className="text-xs text-gray-500">{currentCard.subject}</span>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-xl text-center text-white font-medium">
                  {currentCard.front}
                </p>
              </div>
              <div className="text-center text-sm text-gray-400 mt-3">
                Нажмите, чтобы увидеть ответ
              </div>
            </div>

            {/* Задняя сторона */}
            <div
              className={`absolute inset-0 p-6 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl border border-blue-500/30 ${!isFlipped ? 'invisible' : ''}`}
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-blue-400">{currentCard.topic}</span>
              </div>
              <div className="flex-1 flex items-center justify-center overflow-auto">
                <p className="text-lg text-center text-white whitespace-pre-line">
                  {currentCard.back}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Кнопки */}
        <AnimatePresence>
          {!isFlipped ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Button
                onClick={handleShowAnswer}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400"
              >
                Показать ответ
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-2"
            >
              <p className="text-center text-sm text-gray-400 mb-2">Насколько легко было вспомнить?</p>
              <div className="grid grid-cols-3 gap-2">
                {QUALITY_BUTTONS.map(({ quality, label, color, icon: Icon }) => (
                  <Button
                    key={quality}
                    onClick={() => handleQuality(quality)}
                    className={`${color} text-white`}
                  >
                    <Icon className="w-4 h-4 mr-1" />
                    {label}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Информация о следующем повторении */}
        {isFlipped && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-2 border-t border-white/10"
          >
            <Clock className="w-3 h-3" />
            <span>Следующее повторение зависит от вашей оценки</span>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}

// Мини-версия для дашборда
export function SpacedRepetitionMini({ cardsToReview }: { cardsToReview: number }) {
  return (
    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium">Повторение</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">Карточек на сегодня</span>
        <span className={`text-sm font-bold ${cardsToReview > 0 ? 'text-yellow-400' : 'text-green-400'}`}>
          {cardsToReview > 0 ? cardsToReview : '✓'}
        </span>
      </div>
    </div>
  )
}

export { DEMO_CARDS }
