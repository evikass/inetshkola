'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { 
  ChevronLeft, ChevronRight, Star, CheckCircle, ArrowLeft, Zap
} from 'lucide-react'
import type { Lesson, QuizQuestion } from '@/data/types'

interface KidLessonViewerProps {
  lessons: Lesson[]
  topicTitle: string
  topicQuiz?: QuizQuestion[]
  onComplete: () => void
  onBack: () => void
  onStartQuiz?: () => void
}

// Эмодзи для разных типов уроков
const lessonEmojis = ['📚', '✏️', '🎨', '🔢', '🔤', '🌍', '🔬', '🎵']

export default function KidLessonViewer({
  lessons,
  topicTitle,
  topicQuiz,
  onComplete,
  onBack,
  onStartQuiz
}: KidLessonViewerProps) {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set())
  const [showCelebration, setShowCelebration] = useState(false)
  const [allCompleted, setAllCompleted] = useState(false)

  const currentLesson = lessons[currentLessonIndex]
  const totalLessons = lessons.length
  const completedCount = completedLessons.size
  const hasQuiz = topicQuiz && topicQuiz.length > 0

  // Перейти к следующему уроку
  const nextLesson = () => {
    if (currentLessonIndex < totalLessons - 1) {
      setCurrentLessonIndex(prev => prev + 1)
    }
  }

  // Перейти к предыдущему уроку
  const prevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(prev => prev - 1)
    }
  }

  // Завершить урок
  const completeLesson = () => {
    if (currentLesson) {
      const newCompleted = new Set([...completedLessons, currentLesson.id])
      setCompletedLessons(newCompleted)

      // Вибрация
      if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100])
      }

      // Проверяем, все ли уроки пройдены
      if (newCompleted.size === totalLessons) {
        setAllCompleted(true)
        setShowCelebration(true)
        setTimeout(() => {
          setShowCelebration(false)
        }, 2000)
      } else {
        // Автопереход к следующему
        setTimeout(() => {
          nextLesson()
        }, 800)
      }
    }
  }

  // Выбрать урок по индексу
  const selectLesson = (index: number) => {
    setCurrentLessonIndex(index)
  }

  // Начать тест
  const handleStartQuiz = () => {
    if (onStartQuiz) {
      onStartQuiz()
    }
  }

  // Завершить тему
  const handleComplete = () => {
    onComplete()
  }

  if (!currentLesson) return null

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 z-50 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float text-2xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {lessonEmojis[Math.floor(Math.random() * lessonEmojis.length)]}
          </div>
        ))}
      </div>

      {/* Шапка */}
      <div className="relative z-10 p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          {/* Кнопка назад */}
          <Button
            onClick={onBack}
            className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 rounded-2xl px-4 sm:px-6 py-3 text-base font-bold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Назад
          </Button>

          {/* Прогресс */}
          <div className="flex items-center gap-2 bg-white/20 rounded-2xl px-4 py-2">
            <span className="text-white font-bold">
              {completedCount}/{totalLessons}
            </span>
            <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
          </div>
        </div>

        {/* Тема */}
        <div className="text-center mb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {topicTitle}
          </h2>
        </div>

        {/* Индикаторы уроков */}
        <div className="flex justify-center gap-2 flex-wrap">
          {lessons.map((lesson, index) => {
            const isCompleted = completedLessons.has(lesson.id)
            const isCurrent = index === currentLessonIndex

            return (
              <button
                key={lesson.id}
                onClick={() => selectLesson(index)}
                className={`
                  w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
                  transition-all duration-300 text-sm sm:text-base font-bold
                  ${isCompleted
                    ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white scale-110'
                    : isCurrent
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white ring-4 ring-white/50 scale-110'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }
                `}
              >
                {isCompleted ? '✓' : index + 1}
              </button>
            )
          })}
        </div>
      </div>

      {/* Контент урока */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-8">
        <Card className="w-full max-w-2xl bg-white/95 rounded-3xl shadow-2xl overflow-hidden">
          {/* Заголовок урока */}
          <div className={`p-4 sm:p-6 text-center ${
            completedLessons.has(currentLesson.id)
              ? 'bg-gradient-to-r from-green-400 to-emerald-500'
              : 'bg-gradient-to-r from-purple-500 to-pink-500'
          }`}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-3xl sm:text-4xl">
                {lessonEmojis[currentLessonIndex % lessonEmojis.length]}
              </span>
              <span className="text-white/80 text-sm">
                Урок {currentLessonIndex + 1}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {currentLesson.title}
            </h2>
          </div>

          {/* Содержимое урока */}
          <div className="p-6 sm:p-8">
            <div 
              className="prose prose-sm max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: currentLesson.content }}
            />

            {/* Кнопка завершения урока */}
            {!completedLessons.has(currentLesson.id) ? (
              <Button
                onClick={completeLesson}
                className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl py-5 sm:py-6 text-lg font-bold shadow-xl"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Я понял! Далее →
              </Button>
            ) : (
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-6 py-3">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-bold">Урок пройден! ⭐</span>
                </div>
              </div>
            )}

            {/* Кнопки после завершения всех уроков */}
            {allCompleted && (
              <div className="mt-6 space-y-3">
                {/* Кнопка теста */}
                {hasQuiz && (
                  <Button
                    onClick={handleStartQuiz}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-2xl py-5 sm:py-6 text-lg font-bold shadow-xl"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Тест по теме ({topicQuiz?.length} вопросов)
                  </Button>
                )}
                
                {/* Кнопка завершения */}
                <Button
                  onClick={handleComplete}
                  className={`w-full rounded-2xl py-5 sm:py-6 text-lg font-bold shadow-xl ${
                    hasQuiz 
                      ? 'bg-white/50 hover:bg-white/70 text-gray-700 border border-gray-200'
                      : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white'
                  }`}
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  {hasQuiz ? 'Пропустить тест' : 'Завершить тему'}
                </Button>
              </div>
            )}

            {/* Навигация */}
            {!allCompleted && (
              <div className="flex justify-between mt-6">
                <Button
                  onClick={prevLesson}
                  disabled={currentLessonIndex === 0}
                  className="bg-white/50 hover:bg-white/70 disabled:opacity-30 text-gray-700 rounded-2xl px-6 py-3"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Назад
                </Button>

                <Button
                  onClick={nextLesson}
                  disabled={currentLessonIndex === totalLessons - 1}
                  className="bg-white/50 hover:bg-white/70 disabled:opacity-30 text-gray-700 rounded-2xl px-6 py-3"
                >
                  Дальше
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Празднование */}
      {showCelebration && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="text-center animate-celebration">
            <div className="text-8xl sm:text-9xl mb-4 animate-bounce">🏆</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg">
              ВСЕ УРОКИ ПРОЙДЕНЫ!
            </h2>
            <p className="text-xl text-white/80">
              {hasQuiz 
                ? 'Теперь пройди тест по теме!'
                : `Ты получил +${totalLessons * 2} звёзд!`
              }
            </p>
            <div className="flex justify-center gap-2 mt-4">
              {[...Array(Math.min(totalLessons, 5))].map((_, i) => (
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

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes celebration {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-celebration { animation: celebration 0.5s ease-out forwards; }
      `}</style>
    </div>
  )
}
