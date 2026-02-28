'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from '@/components/ui/accordion'
import {
  CheckCircle, Play, Zap, ChevronRight, Clock, Star, Sparkles,
  ChevronDown, BookOpen, Layers
} from 'lucide-react'
import type { Subject, Topic, Section } from '@/data/types'
import { getAllTopics, hasNewStructure } from '@/data/types'
import KidTopicCard from './KidTopicCard'

interface SubjectGridProps {
  subjects: Subject[]
  completedTopics: string[]
  onOpenTopic: (topic: Topic) => void
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
  'world': '🌿',
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
  onOpenTopic
}: {
  section: Section
  completedTopics: string[]
  onOpenTopic: (topic: Topic) => void
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const completedCount = section.topics.filter(t => completedTopics.includes(t.id)).length
  const progress = section.topics.length > 0 ? (completedCount / section.topics.length) * 100 : 0

  return (
    <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl overflow-hidden">
      <div
        className="p-4 cursor-pointer hover:bg-white/5 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
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
            <ChevronDown className={`w-5 h-5 text-white/60 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </div>
        </div>
      </div>

      {isExpanded && (
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
      )}
    </Card>
  )
}

// Детский режим: Карточка предмета с разделами
function KidSubjectCardWithSections({
  subject,
  completedTopics,
  onOpenTopic,
  onStartQuiz
}: {
  subject: Subject
  completedTopics: string[]
  onOpenTopic: (topic: Topic) => void
  onStartQuiz: (subject: Subject) => void
}) {
  const useSections = hasNewStructure(subject)
  const allTopics = getAllTopics(subject)
  const sections = subject.sections || []

  const completedCount = allTopics.filter(t => completedTopics.includes(t.id)).length
  const progress = allTopics.length > 0 ? (completedCount / allTopics.length) * 100 : 0
  const emoji = getSubjectEmoji(subject.id)

  return (
    <Card className="bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden rounded-3xl">
      <div className={`bg-gradient-to-r ${subject.gradient} p-4 sm:p-6`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl sm:text-5xl animate-bounce-slow">{emoji}</div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">{subject.title}</h2>
              <p className="text-sm text-white/80">{completedCount} из {allTopics.length} тем</p>
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

        <div className="mt-4">
          <div className="bg-white/30 rounded-full h-3 overflow-hidden">
            <div
              className="bg-white h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
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

      <CardContent className="p-4 sm:p-6">
        {useSections && sections.length > 0 ? (
          <div className="space-y-4">
            {sections.map((section) => (
              <KidSectionCard
                key={section.id}
                section={section}
                completedTopics={completedTopics}
                onOpenTopic={onOpenTopic}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {allTopics.map((topic) => (
              <KidTopicCard
                key={topic.id}
                topic={topic}
                isCompleted={completedTopics.includes(topic.id)}
                onOpenTopic={() => onOpenTopic(topic)}
                onCompleteTopic={() => {}}
              />
            ))}
          </div>
        )}
      </CardContent>

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

// Обычный режим: Карточка раздела
function StandardSectionCard({
  section,
  completedTopics,
  onOpenTopic
}: {
  section: Section
  completedTopics: string[]
  onOpenTopic: (topic: Topic) => void
}) {
  const completedCount = section.topics.filter(t => completedTopics.includes(t.id)).length

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'hard': return 'bg-red-500/20 text-red-400 border-red-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Легко'
      case 'medium': return 'Средне'
      case 'hard': return 'Сложно'
      default: return difficulty
    }
  }

  return (
    <AccordionItem value={section.id} className="border-white/10">
      <AccordionTrigger className="text-sm hover:no-underline py-3 px-2">
        <span className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-purple-400" />
          <span>{section.title}</span>
          <Badge variant="outline" className="text-xs">
            {completedCount}/{section.topics.length}
          </Badge>
        </span>
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-2 pt-2">
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
                    <span className="font-medium text-sm">{topic.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className={`text-xs ${getDifficultyColor(topic.difficulty)}`}
                    >
                      {getDifficultyLabel(topic.difficulty)}
                    </Badge>
                    {topic.estimatedTime && (
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {topic.estimatedTime} мин
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-1 ml-6">{topic.description}</p>
                {topic.lessons && topic.lessons.length > 0 && (
                  <div className="flex items-center gap-1 mt-2 ml-6 text-xs text-gray-500">
                    <BookOpen className="w-3 h-3" />
                    <span>{topic.lessons.length} уроков</span>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

// Обычный режим: Компактные карточки для старших классов
function StandardSubjectCard({
  subject,
  completedTopics,
  onOpenTopic,
  onStartQuiz
}: {
  subject: Subject
  completedTopics: string[]
  onOpenTopic: (topic: Topic) => void
  onStartQuiz: (subject: Subject) => void
}) {
  const useSections = hasNewStructure(subject)
  const allTopics = getAllTopics(subject)
  const sections = subject.sections || []

  const completedCount = allTopics.filter(t => completedTopics.includes(t.id)).length
  const progress = allTopics.length > 0 ? (completedCount / allTopics.length) * 100 : 0

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${subject.gradient}`}>
              <div className="text-white">{subject.icon}</div>
            </div>
            <div>
              <CardTitle className="text-lg">{subject.title}</CardTitle>
              <CardDescription className="text-gray-400 text-sm">{subject.description}</CardDescription>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{completedCount}/{allTopics.length}</div>
            <p className="text-xs text-gray-400">тем</p>
          </div>
        </div>
        <Progress value={progress} className="h-2 mt-3" />
      </CardHeader>

      <CardContent>
        {subject.quiz && subject.quiz.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            className="w-full mb-3 border-purple-500/30 hover:bg-purple-500/20"
            onClick={() => onStartQuiz(subject)}
          >
            <Zap className="w-4 h-4 mr-2 text-yellow-400" />
            Пройти тест ({subject.quiz.length} вопросов)
          </Button>
        )}

        <Accordion type="single" collapsible className="w-full">
          {useSections && sections.length > 0 ? (
            sections.map((section) => (
              <StandardSectionCard
                key={section.id}
                section={section}
                completedTopics={completedTopics}
                onOpenTopic={onOpenTopic}
              />
            ))
          ) : (
            <AccordionItem value="topics" className="border-white/10">
              <AccordionTrigger className="text-sm hover:no-underline py-2">
                <span className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Темы ({allTopics.length})
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pt-2">
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
                            <span className="font-medium text-sm">{topic.title}</span>
                          </div>
                          {topic.estimatedTime && (
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {topic.estimatedTime} мин
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 mt-1 ml-6">{topic.description}</p>
                      </button>
                    )
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </CardContent>
    </Card>
  )
}

export default function SubjectGrid({
  subjects,
  completedTopics,
  onOpenTopic,
  onStartQuiz,
  gradeId = 0
}: SubjectGridProps) {
  const useKidMode = gradeId <= 2

  if (useKidMode) {
    return (
      <div className="space-y-6">
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
          <h2 className="text-xl sm:text-2xl font-bold text-white">Выбери урок!</h2>
          <motion.span
            className="text-2xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            📚
          </motion.span>
        </motion.div>

        <div className="space-y-6">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <KidSubjectCardWithSections
                subject={subject}
                completedTopics={completedTopics}
                onOpenTopic={onOpenTopic}
                onStartQuiz={onStartQuiz}
              />
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  // Старшие классы - красивые карточки
  return (
    <div className="space-y-6">
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
        <Badge variant="outline" className="border-white/20 text-white/60">
          {subjects.length} предметов
        </Badge>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2">
        {subjects.map((subject, index) => (
          <motion.div
            key={subject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <StandardSubjectCard
              subject={subject}
              completedTopics={completedTopics}
              onOpenTopic={onOpenTopic}
              onStartQuiz={onStartQuiz}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
