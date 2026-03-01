'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight, Star, Clock, Play, CheckCircle, BookOpen, Zap } from 'lucide-react'
import type { Topic, QuizQuestion } from '@/data/types'
import KidLessonViewer from './KidLessonViewer'

interface KidTopicCardProps {
  topic: Topic
  isCompleted: boolean
  onOpenTopic: () => void
  onCompleteTopic: () => void
  onStartQuiz?: (quiz: QuizQuestion[], title: string) => void
}

export default function KidTopicCard({
  topic,
  isCompleted,
  onOpenTopic,
  onCompleteTopic,
  onStartQuiz
}: KidTopicCardProps) {
  const [showLessons, setShowLessons] = useState(false)

  const hasLessons = topic.lessons && topic.lessons.length > 0
  const totalLessons = hasLessons ? topic.lessons!.length : 0
  const hasQuiz = topic.quiz && topic.quiz.length > 0

  // Определяем эмодзи по теме
  const getEmoji = () => {
    if (topic.id.includes('writing')) return '✏️'
    if (topic.id.includes('math')) return '🔢'
    if (topic.id.includes('world')) return '🌍'
    if (topic.id.includes('reading')) return '📖'
    if (topic.id.includes('art')) return '🎨'
    if (topic.id.includes('music')) return '🎵'
    if (topic.id.includes('pe')) return '⚽'
    return '📚'
  }

  // Определяем цвет по сложности
  const getDifficultyColor = () => {
    switch (topic.difficulty) {
      case 'easy': return 'from-green-400 to-emerald-500'
      case 'medium': return 'from-yellow-400 to-orange-500'
      case 'hard': return 'from-red-400 to-pink-500'
      default: return 'from-blue-400 to-purple-500'
    }
  }

  // Открыть уроки
  const handleOpenLessons = () => {
    if (hasLessons) {
      setShowLessons(true)
    } else {
      onOpenTopic()
    }
  }

  // Закрыть уроки
  const handleCloseLessons = () => {
    setShowLessons(false)
  }

  // Завершить тему
  const handleCompleteTopic = () => {
    setShowLessons(false)
    onCompleteTopic()
  }

  // Начать тест
  const handleStartQuiz = () => {
    if (hasQuiz && onStartQuiz) {
      setShowLessons(false)
      onStartQuiz(topic.quiz!, topic.title)
    }
  }

  // Если открыты уроки
  if (showLessons && hasLessons) {
    return (
      <KidLessonViewer
        lessons={topic.lessons!}
        topicTitle={topic.title}
        topicQuiz={topic.quiz}
        onComplete={handleCompleteTopic}
        onBack={handleCloseLessons}
        onStartQuiz={hasQuiz ? handleStartQuiz : undefined}
      />
    )
  }

  return (
    <Card
      className={`
        relative overflow-hidden cursor-pointer transition-all duration-300
        ${isCompleted 
          ? 'bg-gradient-to-br from-green-500 to-emerald-500 ring-2 ring-green-300' 
          : `bg-gradient-to-br ${getDifficultyColor()}`
        }
        rounded-2xl sm:rounded-3xl p-4 sm:p-5
        hover:scale-102 hover:shadow-xl
      `}
      onClick={handleOpenLessons}
    >
      {/* Декоративные элементы */}
      <div className="absolute top-2 right-2 text-2xl opacity-20 animate-pulse">
        ✨
      </div>

      {/* Верхняя часть */}
      <div className="flex items-start gap-3 mb-3">
        {/* Эмодзи */}
        <div className="text-3xl sm:text-4xl animate-bounce-slow">
          {getEmoji()}
        </div>

        {/* Информация */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-white line-clamp-2">
            {topic.title}
          </h3>
          <p className="text-xs sm:text-sm text-white/80 line-clamp-1">
            {topic.description}
          </p>
        </div>
      </div>

      {/* Мета-информация */}
      <div className="flex items-center gap-3 text-white/70 text-xs sm:text-sm mb-3">
        {/* Время */}
        {topic.estimatedTime && (
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{topic.estimatedTime} мин</span>
          </div>
        )}

        {/* Количество уроков */}
        {hasLessons && (
          <div className="flex items-center gap-1">
            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{totalLessons} уроков</span>
          </div>
        )}

        {/* Есть тест */}
        {hasQuiz && (
          <div className="flex items-center gap-1">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Тест</span>
          </div>
        )}
      </div>

      {/* Прогресс уроков */}
      {hasLessons && (
        <div className="mb-3">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div
              className="bg-white h-full rounded-full transition-all duration-500"
              style={{ width: isCompleted ? '100%' : '0%' }}
            />
          </div>
          <div className="flex justify-between mt-1 text-xs text-white/60">
            <span>Прогресс</span>
            <span>{isCompleted ? `${totalLessons}/${totalLessons}` : `0/${totalLessons}`}</span>
          </div>
        </div>
      )}

      {/* Кнопка действия */}
      <Button
        className={`
          w-full rounded-xl py-3 sm:py-4 text-sm sm:text-base font-bold
          ${isCompleted
            ? 'bg-white/20 hover:bg-white/30 text-white'
            : 'bg-white/90 hover:bg-white text-gray-800'
          }
        `}
      >
        {isCompleted ? (
          <>
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Пройдено! Повторить
          </>
        ) : hasLessons ? (
          <>
            <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Начать обучение
          </>
        ) : (
          <>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Изучить тему
          </>
        )}
      </Button>

      {/* Индикатор завершения */}
      {isCompleted && (
        <div className="absolute bottom-2 right-2 bg-white rounded-full p-1">
          <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 fill-yellow-500" />
        </div>
      )}

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .hover\:scale-102:hover { transform: scale(1.02); }
      `}</style>
    </Card>
  )
}
