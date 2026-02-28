'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
  ChevronLeft, ChevronRight, Star, CheckCircle, PartyPopper,
  BookOpen, Lightbulb, Target, Sparkles, Heart, Rocket
} from 'lucide-react'
import type { Topic, Lesson } from '@/data/types'

interface KidFriendlyLessonViewerProps {
  topic: Topic
  onComplete: () => void
  onBack: () => void
}

// Эмодзи для разных типов контента
const contentEmojis: Record<string, string[]> = {
  math: ['🔢', '➕', '➖', '✖️', '➗', '🧮', '📐', '📏'],
  russian: ['🔤', '📖', '✏️', '📝', '📚', '🖋️'],
  world: ['🌍', '🌳', '🌸', '🐕', '🐈', '🦋', '🌈'],
  default: ['⭐', '🌟', '✨', '💫', '🎉', '🎈', '🏆']
}

// Получить эмодзи для предмета
function getEmojis(topicId: string): string[] {
  if (topicId.includes('math')) return contentEmojis.math
  if (topicId.includes('rus') || topicId.includes('writing')) return contentEmojis.russian
  if (topicId.includes('world')) return contentEmojis.world
  return contentEmojis.default
}

// Разбить контент на простые шаги
function parseContentToSteps(theory: string, examples: string[], topicTitle?: string): LessonStep[] {
  const steps: LessonStep[] = []

  // Парсим HTML и создаём простые шаги
  const tempDiv = typeof document !== 'undefined' ? document.createElement('div') : null
  if (tempDiv) {
    tempDiv.innerHTML = theory

    // Заголовки как отдельные шаги
    const headings = tempDiv.querySelectorAll('h3, h4')
    const paragraphs = tempDiv.querySelectorAll('p')
    const lists = tempDiv.querySelectorAll('ul, ol')

    // Добавляем введение
    if (headings.length > 0) {
      const firstHeading = headings[0]?.textContent || 'Давай учиться!'
      steps.push({
        type: 'intro',
        title: firstHeading,
        content: 'Нажми на стрелочку, чтобы продолжить! →',
        emoji: '👋'
      })
    }

    // Добавляем пункты из списков как отдельные шаги
    lists.forEach(list => {
      const items = list.querySelectorAll('li')
      items.forEach((item, index) => {
        const text = item.textContent || ''
        if (text.length > 2) {
          steps.push({
            type: 'item',
            title: `Запомни!`,
            content: text,
            emoji: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'][index] || '•'
          })
        }
      })
    })

    // Добавляем примеры
    examples.forEach((example, index) => {
      steps.push({
        type: 'example',
        title: `Пример ${index + 1}`,
        content: example,
        emoji: '💡'
      })
    })
  }

  // Если шагов мало, добавляем базовые
  if (steps.length < 3) {
    steps.push({
      type: 'intro',
      title: topicTitle || 'Урок',
      content: 'Давай узнаем что-то новое!',
      emoji: '🎉'
    })
    steps.push({
      type: 'item',
      title: 'Важно!',
      content: theory.replace(/<[^>]*>/g, ' ').substring(0, 150),
      emoji: '⭐'
    })
  }

  // Добавляем финальный шаг
  steps.push({
    type: 'complete',
    title: 'Отлично! 🎉',
    content: 'Ты прошёл весь урок! Нажми кнопку, чтобы получить звезду!',
    emoji: '🏆'
  })

  return steps
}

interface LessonStep {
  type: 'intro' | 'item' | 'example' | 'complete'
  title: string
  content: string
  emoji: string
}

export default function KidFriendlyLessonViewer({
  topic,
  onComplete,
  onBack
}: KidFriendlyLessonViewerProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [steps, setSteps] = useState<LessonStep[]>([])
  const [starsEarned, setStarsEarned] = useState(0)
  const [showCelebration, setShowCelebration] = useState(false)

  useEffect(() => {
    const parsedSteps = parseContentToSteps(topic.theory, topic.examples, topic.title)
    setSteps(parsedSteps)
  }, [topic])

  const progress = steps.length > 0 ? ((currentStep + 1) / steps.length) * 100 : 0
  const currentStepData = steps[currentStep]
  const emojis = getEmojis(topic.id)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
      // Добавляем звезду за каждый шаг
      setStarsEarned(prev => prev + 1)

      // Звуковой эффект (вибрация на мобильных)
      if (navigator.vibrate) {
        navigator.vibrate(50)
      }
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleComplete = () => {
    setShowCelebration(true)
    setStarsEarned(prev => prev + 5) // Бонус за завершение

    // Звуковой эффект завершения
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100, 50, 200])
    }

    setTimeout(() => {
      onComplete()
    }, 2000)
  }

  if (steps.length === 0) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center z-50">
        <div className="text-white text-2xl animate-pulse">
          Загружаем урок... ⏳
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 z-50 overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <span className="text-4xl opacity-20">
              {emojis[Math.floor(Math.random() * emojis.length)]}
            </span>
          </div>
        ))}
      </div>

      {/* Шапка с прогрессом */}
      <div className="relative z-10 p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          {/* Кнопка назад */}
          <Button
            onClick={onBack}
            className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-bold"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 mr-1 sm:mr-2" />
            Назад
          </Button>

          {/* Звёзды */}
          <div className="flex items-center gap-2 bg-white/20 rounded-2xl px-4 sm:px-6 py-2 sm:py-3">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 fill-yellow-300 animate-pulse" />
            <span className="text-white text-xl sm:text-2xl font-bold">{starsEarned}</span>
          </div>
        </div>

        {/* Прогресс-бар */}
        <div className="relative">
          <div className="bg-white/30 rounded-full h-4 sm:h-6 overflow-hidden">
            <div
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-2"
              style={{ width: `${progress}%` }}
            >
              {progress > 20 && (
                <span className="text-white text-xs sm:text-sm font-bold">
                  {Math.round(progress)}%
                </span>
              )}
            </div>
          </div>
          {/* Шаги в виде точек */}
          <div className="flex justify-between mt-2 px-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  index <= currentStep
                    ? 'bg-yellow-400 scale-110'
                    : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-8">
        <Card className="w-full max-w-2xl bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
          {/* Заголовок шага */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 sm:p-6 text-center">
            <div className="text-5xl sm:text-6xl mb-2 animate-bounce-slow">
              {currentStepData.emoji}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {currentStepData.title}
            </h2>
          </div>

          {/* Контент шага */}
          <div className="p-6 sm:p-10 text-center min-h-[200px] flex flex-col items-center justify-center">
            {currentStepData.type === 'complete' ? (
              <div className="space-y-6">
                <div className="text-6xl sm:text-8xl animate-bounce">🏆</div>
                <p className="text-xl sm:text-2xl text-gray-700 font-medium">
                  {currentStepData.content}
                </p>
                <div className="flex justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 fill-yellow-400 animate-star-pop"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            ) : currentStepData.type === 'intro' ? (
              <div className="space-y-4">
                <div className="text-4xl sm:text-5xl">{currentStepData.emoji}</div>
                <p className="text-lg sm:text-xl text-gray-600">
                  {currentStepData.content}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xl sm:text-2xl text-gray-800 font-medium leading-relaxed">
                  {currentStepData.content}
                </p>
                {currentStepData.type === 'example' && (
                  <div className="mt-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-4 sm:p-6">
                    <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500 mx-auto mb-2" />
                    <p className="text-base sm:text-lg text-gray-600">
                      Попробуй сам!
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Кнопки навигации */}
          <div className="p-4 sm:p-6 bg-gray-50 flex justify-between items-center gap-4">
            <Button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="flex-1 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 disabled:opacity-50 text-white rounded-2xl py-4 sm:py-6 text-base sm:text-lg font-bold shadow-lg disabled:shadow-none transition-all"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 mr-1 sm:mr-2" />
              Назад
            </Button>

            {currentStepData.type === 'complete' ? (
              <Button
                onClick={handleComplete}
                className="flex-[2] bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl py-4 sm:py-6 text-base sm:text-lg font-bold shadow-lg transition-all animate-pulse-slow"
              >
                <PartyPopper className="w-5 h-5 sm:w-6 sm:h-6 mr-1 sm:mr-2" />
                Получить звезду!
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                className="flex-[2] bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-2xl py-4 sm:py-6 text-base sm:text-lg font-bold shadow-lg transition-all"
              >
                Дальше
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 ml-1 sm:ml-2" />
              </Button>
            )}
          </div>
        </Card>
      </div>

      {/* Празднование завершения */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="text-center animate-celebration">
            <div className="text-8xl sm:text-9xl mb-4">🎉</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              МОЛОДЕЦ!
            </h2>
            <p className="text-xl text-white/80">
              Ты получил +5 звёзд!
            </p>
            <div className="flex justify-center gap-2 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 fill-yellow-400 animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CSS для анимаций */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes star-pop {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        @keyframes celebration {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-star-pop { animation: star-pop 0.5s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
        .animate-celebration { animation: celebration 0.5s ease-out forwards; }
      `}</style>
    </div>
  )
}
