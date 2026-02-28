'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Sparkles, Star, Zap, ChevronRight } from 'lucide-react'
import type { Subject } from '@/data/types'
import { getAllTopics } from '@/data/types'

interface SubjectGridProps {
  subjects: Subject[]
  completedTopics: string[]
  onSelectSubject: (subject: Subject) => void
  onStartQuiz: (subject: Subject) => void
  gradeId?: number
}

// Эмодзи для предметов
const subjectEmojis: Record<string, string> = {
  'prep-writing': '✏️',
  'prep-math': '🔢',
  'prep-world': '🌍',
  'math': '🧮',
  'russian': '📖',
  'literature': '📚',
  'world': '🌿',
  'science': '🔬',
  'history': '🏛️',
  'geography': '🗺️',
  'art': '🎨',
  'music': '🎵',
  'pe': '⚽',
  'english': '🇬🇧',
  'default': '📚'
}

const getSubjectEmoji = (subjectId: string): string => {
  for (const [key, emoji] of Object.entries(subjectEmojis)) {
    if (subjectId.includes(key)) return emoji
  }
  return subjectEmojis.default
}

// Детский режим: Карточка предмета (только кнопка)
function KidSubjectCard({
  subject,
  completedTopics,
  onSelect,
  onStartQuiz
}: {
  subject: Subject
  completedTopics: string[]
  onSelect: () => void
  onStartQuiz: () => void
}) {
  const allTopics = getAllTopics(subject)
  const completedCount = allTopics.filter(t => completedTopics.includes(t.id)).length
  const progress = allTopics.length > 0 ? (completedCount / allTopics.length) * 100 : 0
  const emoji = getSubjectEmoji(subject.id)

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -3 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card
        onClick={onSelect}
        className={`
          relative overflow-hidden cursor-pointer transition-all duration-300
          bg-gradient-to-br ${subject.gradient || 'from-purple-500 to-pink-500'}
          rounded-3xl p-5 sm:p-6 border-0 shadow-xl
          hover:shadow-2xl hover:shadow-purple-500/30
        `}
      >
        {/* Декоративный фон */}
        <div className="absolute inset-0 bg-white/10 rounded-3xl" />
        
        {/* Основной эмодзи */}
        <motion.div 
          className="text-5xl sm:text-6xl mb-3 relative z-10"
          animate={{ y: [-3, 0, -3], rotate: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {emoji}
        </motion.div>

        {/* Название предмета */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 relative z-10">
          {subject.title}
        </h3>

        {/* Прогресс */}
        <div className="mt-3 relative z-10">
          <div className="flex items-center justify-between text-sm text-white/80 mb-1">
            <span>{completedCount} из {allTopics.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="bg-white/30 rounded-full h-2.5 overflow-hidden">
            <motion.div
              className="bg-white h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
        </div>

        {/* Звёзды прогресса */}
        <div className="flex gap-1 mt-3 relative z-10">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 sm:w-5 sm:h-5 transition-all ${
                i < Math.floor(progress / 20)
                  ? 'text-yellow-300 fill-yellow-300'
                  : 'text-white/30'
              }`}
            />
          ))}
        </div>

        {/* Кнопка теста */}
        {subject.quiz && subject.quiz.length > 0 && (
          <motion.button
            onClick={(e) => {
              e.stopPropagation()
              onStartQuiz()
            }}
            className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 
              text-white rounded-xl px-3 py-1.5 text-sm font-bold
              backdrop-blur-sm transition-all z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-4 h-4 inline mr-1" />
            Тест
          </motion.button>
        )}

        {/* Стрелочка */}
        <div className="absolute bottom-3 right-3 text-white/60 z-10">
          <ChevronRight className="w-6 h-6" />
        </div>
      </Card>
    </motion.div>
  )
}

// Обычный режим: Карточка предмета (компактная)
function StandardSubjectCard({
  subject,
  completedTopics,
  onSelect,
  onStartQuiz
}: {
  subject: Subject
  completedTopics: string[]
  onSelect: () => void
  onStartQuiz: () => void
}) {
  const allTopics = getAllTopics(subject)
  const completedCount = allTopics.filter(t => completedTopics.includes(t.id)).length
  const progress = allTopics.length > 0 ? (completedCount / allTopics.length) * 100 : 0

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card
        onClick={onSelect}
        className={`
          bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden
          rounded-2xl cursor-pointer hover:bg-white/15 transition-all
          group
        `}
      >
        <div className="p-4 sm:p-5">
          <div className="flex items-center gap-4">
            {/* Иконка */}
            <div className={`p-3 rounded-xl bg-gradient-to-br ${subject.gradient || 'from-purple-500 to-pink-500'}`}>
              <div className="text-white text-2xl">
                {subject.icon || getSubjectEmoji(subject.id)}
              </div>
            </div>

            {/* Информация */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-white truncate">{subject.title}</h3>
              <p className="text-sm text-white/60 truncate">{subject.description}</p>
              
              {/* Прогресс */}
              <div className="mt-2">
                <div className="flex items-center justify-between text-xs text-white/60 mb-1">
                  <span>{completedCount}/{allTopics.length} тем</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-1.5" />
              </div>
            </div>

            {/* Кнопка теста */}
            {subject.quiz && subject.quiz.length > 0 && (
              <motion.button
                onClick={(e) => {
                  e.stopPropagation()
                  onStartQuiz()
                }}
                className="bg-purple-500/30 hover:bg-purple-500/50 text-white 
                  rounded-xl px-3 py-2 text-sm font-medium transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-4 h-4" />
              </motion.button>
            )}

            {/* Стрелочка */}
            <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" />
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default function SubjectGrid({
  subjects,
  completedTopics,
  onSelectSubject,
  onStartQuiz,
  gradeId = 0
}: SubjectGridProps) {
  const useKidMode = gradeId <= 2

  if (useKidMode) {
    return (
      <div className="space-y-4">
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-7 h-7 text-yellow-400" />
          </motion.div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Выбери предмет!</h2>
          <motion.span
            className="text-2xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            📚
          </motion.span>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.08, type: 'spring', stiffness: 300 }}
            >
              <KidSubjectCard
                subject={subject}
                completedTopics={completedTopics}
                onSelect={() => onSelectSubject(subject)}
                onStartQuiz={() => onStartQuiz(subject)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  // Старшие классы
  return (
    <div className="space-y-4">
      <motion.div 
        className="flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-7 h-7 text-purple-400" />
        </motion.div>
        <h2 className="text-xl sm:text-2xl font-bold text-white">Предметы</h2>
      </motion.div>

      <div className="grid gap-3 sm:gap-4">
        {subjects.map((subject, index) => (
          <motion.div
            key={subject.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <StandardSubjectCard
              subject={subject}
              completedTopics={completedTopics}
              onSelect={() => onSelectSubject(subject)}
              onStartQuiz={() => onStartQuiz(subject)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
