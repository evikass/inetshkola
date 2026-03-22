'use client'

import { Card } from '@/components/ui/card'
import { Star, Clock, CheckCircle, BookOpen, Zap } from 'lucide-react'
import type { Topic, QuizQuestion } from '@/data/types'

interface KidTopicCardProps {
  topic: Topic
  isCompleted: boolean
  onOpenTopic: () => void
  onCompleteTopic: () => void
  onStartQuiz?: (quiz: QuizQuestion[], title: string) => void
}

// Изображения для тем
const topicImages: Record<string, string> = {
  'prep-writing-t1': '/inetshkola/images/topics/prep-writing/t1.svg',
  'prep-writing-t2': '/inetshkola/images/topics/prep-writing/t2.svg',
  'prep-writing-t3': '/inetshkola/images/topics/prep-writing/t3.svg',
  'prep-writing-t4': '/inetshkola/images/topics/prep-writing/t4.svg',
  'prep-math-t1': '/inetshkola/images/topics/prep-math/t1.svg',
  'prep-math-t2': '/inetshkola/images/topics/prep-math/t2.svg',
  'prep-math-t3': '/inetshkola/images/topics/prep-math/t3.svg',
  'prep-math-t4': '/inetshkola/images/topics/prep-math/t4.svg',
  'prep-world-t1': '/inetshkola/images/topics/prep-world/t1.svg',
  'prep-world-t2': '/inetshkola/images/topics/prep-world/t2.svg',
  // История - Древний мир (5 класс)
  'hist5-s1-t1': '/inetshkola/images/topics/history/t1.svg',
  'hist5-s1-t2': '/inetshkola/images/topics/history/t2.svg',
  // История - Россия (6 класс)
  'hist6-s1-t1': '/inetshkola/images/topics/history/t5.svg',
  'hist6-s1-t2': '/inetshkola/images/topics/history/t6.svg',
  // История - Россия (7 класс)
  'hist7-s1-t1': '/inetshkola/images/topics/history/t7.svg',
  'hist7-s1-t2': '/inetshkola/images/topics/history/t8.svg',
  // История - Россия (8 класс)
  'hist8-s1-t1': '/inetshkola/images/topics/history/t9.svg',
  'hist8-s2-t1': '/inetshkola/images/topics/history/t10.svg',
  // История - Россия (9 класс)
  'hist9-s1-t1': '/inetshkola/images/topics/history/t11.svg',
  'hist9-s1-t2': '/inetshkola/images/topics/history/t12.svg',
  // История - по ключевым словам
  'egypt': '/inetshkola/images/topics/history/t1.svg',
  'greece': '/inetshkola/images/topics/history/t2.svg',
  'rome': '/inetshkola/images/topics/history/t3.svg',
  'medieval': '/inetshkola/images/topics/history/t4.svg',
  'rus': '/inetshkola/images/topics/history/t5.svg',
  'mongol': '/inetshkola/images/topics/history/t6.svg',
  'ivan': '/inetshkola/images/topics/history/t7.svg',
  'smuta': '/inetshkola/images/topics/history/t8.svg',
  'peter': '/inetshkola/images/topics/history/t9.svg',
  'catherine': '/inetshkola/images/topics/history/t10.svg',
  'napoleon': '/inetshkola/images/topics/history/t11.svg',
  'decembrist': '/inetshkola/images/topics/history/t12.svg',
}

const getTopicImage = (topicId: string): string | null => {
  // Сначала ищем точное совпадение
  if (topicImages[topicId]) {
    return topicImages[topicId]
  }
  // Затем ищем частичное совпадение
  for (const [key, image] of Object.entries(topicImages)) {
    if (topicId.includes(key) || key.includes(topicId)) {
      return image
    }
  }
  return null
}

export default function KidTopicCard({
  topic,
  isCompleted,
  onOpenTopic,
  onCompleteTopic,
  onStartQuiz
}: KidTopicCardProps) {
  const hasLessons = topic.lessons && topic.lessons.length > 0
  const totalLessons = hasLessons ? topic.lessons!.length : 0
  const hasQuiz = topic.quiz && topic.quiz.length > 0
  const topicImage = getTopicImage(topic.id)

  // Определяем эмодзи по теме
  const getEmoji = () => {
    if (topic.id.includes('writing')) return '✏️'
    if (topic.id.includes('math')) return '🔢'
    if (topic.id.includes('world')) return '🌍'
    if (topic.id.includes('reading')) return '📖'
    if (topic.id.includes('art')) return '🎨'
    if (topic.id.includes('music')) return '🎵'
    if (topic.id.includes('pe')) return '⚽'
    if (topic.id.includes('hist')) return '🏛️'
    if (topic.id.includes('egypt') || topic.id.includes('Египет')) return '🏛️'
    if (topic.id.includes('greece') || topic.id.includes('Греци')) return '🏛️'
    if (topic.id.includes('rome') || topic.id.includes('Рим')) return '🏛️'
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

  // Клик по карточке - открываем модальное окно TopicDialog
  const handleClick = () => {
    onOpenTopic()
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
        hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]
      `}
      onClick={handleClick}
    >
      {/* Декоративные элементы */}
      <div className="absolute top-2 right-2 text-2xl opacity-20 animate-pulse">
        ✨
      </div>

      {/* Верхняя часть */}
      <div className="flex items-start gap-3 mb-3">
        {/* Иконка темы или эмодзи */}
        {topicImage ? (
          <div className="w-16 h-12 sm:w-20 sm:h-15 rounded-lg overflow-hidden flex-shrink-0">
            <img 
              src={topicImage} 
              alt={topic.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="text-3xl sm:text-4xl animate-bounce-slow">
            {getEmoji()}
          </div>
        )}

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

      {/* Индикатор статуса */}
      <div className={`
        flex items-center justify-center gap-2 py-2 sm:py-3 rounded-xl
        ${isCompleted 
          ? 'bg-white/20 text-white' 
          : 'bg-white/90 text-gray-800'
        }
        text-sm sm:text-base font-bold
      `}>
        {isCompleted ? (
          <>
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            Пройдено! Повторить
          </>
        ) : hasLessons ? (
          <>
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
            {totalLessons} уроков
          </>
        ) : (
          <>
            <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
            Изучить тему
          </>
        )}
      </div>

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
      `}</style>
    </Card>
  )
}
