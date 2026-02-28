'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import {
  ArrowLeft, Layers, BookOpen, Clock, CheckCircle, Sparkles,
  ChevronDown, Star, Zap
} from 'lucide-react'
import type { Subject, Topic, Section } from '@/data/types'
import { getAllTopics, hasNewStructure } from '@/data/types'
import KidTopicCard from './KidTopicCard'

interface SectionListProps {
  subject: Subject
  completedTopics: string[]
  onOpenTopic: (topic: Topic) => void
  onBack: () => void
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

// Детский режим: Карточка раздела
function KidSectionCard({
  section,
  completedTopics,
  onOpenTopic,
  isExpanded,
  onToggle
}: {
  section: Section
  completedTopics: string[]
  onOpenTopic: (topic: Topic) => void
  isExpanded: boolean
  onToggle: () => void
}) {
  const completedCount = section.topics.filter(t => completedTopics.includes(t.id)).length
  const progress = section.topics.length > 0 ? (completedCount / section.topics.length) * 100 : 0

  return (
    <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl overflow-hidden">
      <div
        className="p-4 cursor-pointer hover:bg-white/5 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{section.title}</h3>
              <p className="text-sm text-white/60">
                {completedCount}/{section.topics.length} тем
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <ChevronDown className={`w-5 h-5 text-white/60 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div 
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="p-4 pt-0 space-y-3">
              {section.topics.map((topic) => (
                <KidTopicCard
                  key={topic.id}
                  topic={topic}
                  isCompleted={completedTopics.includes(topic.id)}
                  onOpenTopic={() => onOpenTopic(topic)}
                  onCompleteTopic={() => {}}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}

// Обычный режим: Карточка раздела
function StandardSectionCard({
  section,
  completedTopics,
  onOpenTopic,
  isExpanded,
  onToggle
}: {
  section: Section
  completedTopics: string[]
  onOpenTopic: (topic: Topic) => void
  isExpanded: boolean
  onToggle: () => void
}) {
  const completedCount = section.topics.filter(t => completedTopics.includes(t.id)).length
  const progress = section.topics.length > 0 ? (completedCount / section.topics.length) * 100 : 0

  return (
    <Card className="bg-white/5 border-white/10 overflow-hidden rounded-xl">
      <div
        className="p-4 cursor-pointer hover:bg-white/5 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/30 flex items-center justify-center">
              <Layers className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white">{section.title}</h3>
              <p className="text-xs text-white/60">{completedCount}/{section.topics.length} тем</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-20 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <ChevronDown className={`w-4 h-4 text-white/60 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div 
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-4 pb-4 space-y-2">
              {section.topics.map((topic) => {
                const isCompleted = completedTopics.includes(topic.id)
                
                return (
                  <button
                    key={topic.id}
                    onClick={() => onOpenTopic(topic)}
                    className={`w-full p-3 rounded-lg border text-left transition-all ${
                      isCompleted
                        ? 'bg-green-500/10 border-green-500/30'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {isCompleted ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-gray-500" />
                        )}
                        <span className="font-medium text-sm text-white">{topic.title}</span>
                      </div>
                      {topic.estimatedTime && (
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {topic.estimatedTime} мин
                        </span>
                      )}
                    </div>
                    {topic.lessons && topic.lessons.length > 0 && (
                      <div className="flex items-center gap-1 mt-1 ml-6 text-xs text-gray-500">
                        <BookOpen className="w-3 h-3" />
                        <span>{topic.lessons.length} уроков</span>
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}

export default function SectionList({
  subject,
  completedTopics,
  onOpenTopic,
  onBack,
  onStartQuiz,
  gradeId = 0
}: SectionListProps) {
  const useKidMode = gradeId <= 2
  const useSections = hasNewStructure(subject)
  const allTopics = getAllTopics(subject)
  const sections = subject.sections || []
  const emoji = getSubjectEmoji(subject.id)

  const completedCount = allTopics.filter(t => completedTopics.includes(t.id)).length
  const progress = allTopics.length > 0 ? (completedCount / allTopics.length) * 100 : 0

  // Состояние для раскрытого раздела (только один может быть открыт)
  const [expandedSectionId, setExpandedSectionId] = useState<string | null>(null)

  const handleToggleSection = (sectionId: string) => {
    // Если кликнули на уже открытый - закрываем, иначе открываем новый (и закрываем старый)
    setExpandedSectionId(prev => prev === sectionId ? null : sectionId)
  }

  if (useKidMode) {
    return (
      <div className="space-y-4">
        {/* Кнопка Назад */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-xl
              bg-white/10 hover:bg-white/20 text-white transition-all
              border border-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Все предметы</span>
          </Button>
        </motion.div>

        {/* Заголовок предмета */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <Card className={`bg-gradient-to-r ${subject.gradient || 'from-purple-500 to-pink-500'} rounded-3xl overflow-hidden`}>
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="text-5xl sm:text-6xl"
                    animate={{ y: [-3, 0, -3], rotate: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {emoji}
                  </motion.div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">{subject.title}</h2>
                    <p className="text-white/80">{completedCount} из {allTopics.length} тем</p>
                  </div>
                </div>
                
                {subject.quiz && subject.quiz.length > 0 && (
                  <Button
                    onClick={() => onStartQuiz(subject)}
                    className="bg-white/20 hover:bg-white/30 text-white rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-bold"
                  >
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Тест!
                  </Button>
                )}
              </div>

              {/* Прогресс */}
              <div className="mt-4">
                <div className="bg-white/30 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="bg-white h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 sm:w-6 sm:h-6 transition-all ${
                        i < Math.floor(progress / 20)
                          ? 'text-yellow-300 fill-yellow-300'
                          : 'text-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Разделы */}
        <div className="space-y-3">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold text-white">Темы</h3>
          </motion.div>

          {useSections && sections.length > 0 ? (
            sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <KidSectionCard
                  section={section}
                  completedTopics={completedTopics}
                  onOpenTopic={onOpenTopic}
                  isExpanded={expandedSectionId === section.id}
                  onToggle={() => handleToggleSection(section.id)}
                />
              </motion.div>
            ))
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {allTopics.map((topic, index) => (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <KidTopicCard
                    topic={topic}
                    isCompleted={completedTopics.includes(topic.id)}
                    onOpenTopic={() => onOpenTopic(topic)}
                    onCompleteTopic={() => {}}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  // Старшие классы
  return (
    <div className="space-y-4">
      {/* Кнопка Назад */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Button
          onClick={onBack}
          variant="ghost"
          className="text-white/60 hover:text-white hover:bg-white/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Все предметы
        </Button>
      </motion.div>

      {/* Заголовок предмета */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl overflow-hidden">
          <div className={`bg-gradient-to-r ${subject.gradient || 'from-purple-500 to-pink-500'} p-4`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-4xl">{emoji}</div>
                <div>
                  <h2 className="text-xl font-bold text-white">{subject.title}</h2>
                  <p className="text-sm text-white/80">{subject.description}</p>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-2xl font-bold text-white">{completedCount}/{allTopics.length}</div>
                <p className="text-xs text-white/60">тем пройдено</p>
              </div>
            </div>

            <div className="mt-3">
              <Progress value={progress} className="h-2" />
            </div>

            {subject.quiz && subject.quiz.length > 0 && (
              <Button
                onClick={() => onStartQuiz(subject)}
                className="mt-3 bg-white/20 hover:bg-white/30 text-white"
                size="sm"
              >
                <Zap className="w-4 h-4 mr-2" />
                Тест ({subject.quiz.length})
              </Button>
            )}
          </div>
        </Card>
      </motion.div>

      {/* Разделы */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg font-semibold text-white">Разделы</h3>
          <Badge variant="outline" className="border-white/20 text-white/60">
            {useSections && sections.length > 0 ? sections.length : allTopics.length}
          </Badge>
        </div>

        {useSections && sections.length > 0 ? (
          sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <StandardSectionCard
                section={section}
                completedTopics={completedTopics}
                onOpenTopic={onOpenTopic}
                isExpanded={expandedSectionId === section.id}
                onToggle={() => handleToggleSection(section.id)}
              />
            </motion.div>
          ))
        ) : (
          <Card className="bg-white/5 border-white/10">
            <div className="p-4 space-y-2">
              {allTopics.map((topic) => {
                const isCompleted = completedTopics.includes(topic.id)
                
                return (
                  <button
                    key={topic.id}
                    onClick={() => onOpenTopic(topic)}
                    className={`w-full p-3 rounded-lg border text-left transition-all ${
                      isCompleted
                        ? 'bg-green-500/10 border-green-500/30'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {isCompleted ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-gray-500" />
                        )}
                        <span className="font-medium text-sm text-white">{topic.title}</span>
                      </div>
                      {topic.estimatedTime && (
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {topic.estimatedTime} мин
                        </span>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
