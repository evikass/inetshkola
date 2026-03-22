'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
  Trophy, ChevronDown, ChevronRight, BookOpen,
  CheckCircle, Clock, Star, Zap, Lock
} from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'
import type { Subject, Topic } from '@/data'

interface SubjectCardProps {
  subject: Subject
}

// Маппинг ID предметов на файлы изображений
const SUBJECT_IMAGES: Record<string, string> = {
  '1-math': '/images/subjects/math/hero.png',
  '1-russian': '/images/subjects/russian/hero.png',
  '1-literature': '/images/subjects/literature/hero.png',
  '1-english': '/images/subjects/english/hero.png',
  '1-science': '/images/subjects/science/hero.png',
  '1-art': '/images/subjects/art/hero.png',
  '1-music': '/images/subjects/music/hero.png',
}

export function SubjectCard({ subject }: SubjectCardProps) {
  const {
    expandedSubject,
    setExpandedSubject,
    progress,
    getSubjectProgress,
    toggleTopic,
    setSelectedTopic,
    setSelectedSubjectForTopic,
    setTopicDialogOpen,
    setCurrentQuiz,
    setCurrentQuizSubject,
    setCurrentQuestionIndex,
    setSelectedAnswer,
    setShowResult,
    setQuizScore,
    setQuizDialogOpen
  } = useSchool()

  const [imageError, setImageError] = useState(false)
  const isExpanded = expandedSubject === subject.id
  const subjectProgress = getSubjectProgress(subject)
  const hasImage = SUBJECT_IMAGES[subject.id] && !imageError

  // Подсчёт завершённых тем
  const getTotalTopics = () => {
    if (subject.sections) {
      return subject.sections.reduce((sum, s) => sum + s.topics.length, 0)
    }
    if (subject.topics) {
      return subject.topics.length
    }
    return 0
  }

  const getCompletedTopics = () => {
    let completed = 0
    if (subject.sections) {
      subject.sections.forEach(section => {
        section.topics.forEach(topic => {
          if (progress[subject.id]?.[topic.lessons[0]?.id || topic.id]) {
            completed++
          }
        })
      })
    }
    if (subject.topics) {
      subject.topics.forEach(topic => {
        if (progress[subject.id]?.[topic.id]) {
          completed++
        }
      })
    }
    return completed
  }

  const totalTopics = getTotalTopics()
  const completedTopics = getCompletedTopics()

  const handleTopicClick = (topic: Topic, e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedTopic(topic)
    setSelectedSubjectForTopic(subject)
    setTopicDialogOpen(true)
  }

  const handleStartQuiz = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (subject.quiz) {
      setCurrentQuiz(subject.quiz)
      setCurrentQuizSubject(subject.title)
      setCurrentQuestionIndex(0)
      setSelectedAnswer(null)
      setShowResult(false)
      setQuizScore(0)
      setQuizDialogOpen(true)
    }
  }

  // Определение цвета прогресса
  const getProgressColor = () => {
    if (subjectProgress >= 100) return 'from-green-500 to-emerald-500'
    if (subjectProgress >= 50) return 'from-blue-500 to-purple-500'
    return 'from-slate-500 to-slate-400'
  }

  return (
    <Card
      className={`bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 cursor-pointer overflow-hidden group ${
        isExpanded ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-900' : ''
      }`}
      onClick={() => setExpandedSubject(isExpanded ? null : subject.id)}
    >
      {/* Изображение предмета */}
      {hasImage && !isExpanded && (
        <div className="relative h-32 overflow-hidden">
          <Image
            src={SUBJECT_IMAGES[subject.id]}
            alt={subject.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          <div className="absolute bottom-2 left-3 right-3">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${subject.gradient} flex items-center justify-center shadow-lg`}>
                {subject.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white text-sm">{subject.title}</h3>
                <p className="text-xs text-slate-300 truncate">{subject.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <CardHeader className={`pb-2 ${hasImage && !isExpanded ? 'pt-2' : ''}`}>
        {/* Заголовок без изображения */}
        {(!hasImage || isExpanded) && (
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${subject.gradient} flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'scale-110' : ''}`}>
              {subject.icon}
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg flex items-center gap-2">
                {subject.title}
                {subjectProgress >= 100 && (
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Завершено
                  </Badge>
                )}
              </CardTitle>
              <CardDescription className="text-xs">{subject.description}</CardDescription>
            </div>
            <ChevronRight
              className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                isExpanded ? 'rotate-90' : ''
              }`}
            />
          </div>
        )}
      </CardHeader>

      <CardContent className="pb-3">
        {/* Прогресс */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Прогресс</span>
              <Badge variant="outline" className="text-xs">
                {completedTopics}/{totalTopics}
              </Badge>
            </div>
            <span className="text-xs font-medium text-blue-400">{subjectProgress}%</span>
          </div>
          <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
            <div
              className={`absolute inset-y-0 left-0 bg-gradient-to-r ${getProgressColor()} rounded-full transition-all duration-500`}
              style={{ width: `${subjectProgress}%` }}
            />
          </div>
        </div>

        {/* Развёрнутый контент */}
        {isExpanded && (
          <div className="mt-4 space-y-3 animate-slide-up">
            {/* Статистика */}
            <div className="flex items-center gap-4 text-xs text-slate-400 py-2 border-b border-slate-700/50">
              <div className="flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                <span>{totalTopics} тем</span>
              </div>
              {subject.quiz && (
                <div className="flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  <span>{subject.quiz.length} вопросов</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                <span>до {totalTopics * 30} XP</span>
              </div>
            </div>

            {/* Новая структура с sections */}
            {subject.sections && subject.sections.length > 0 && (
              <Accordion type="single" collapsible className="w-full">
                {subject.sections.map((section, sectionIndex) => {
                  const sectionTopicsCompleted = section.topics.filter(
                    t => progress[subject.id]?.[t.lessons[0]?.id || t.id]
                  ).length

                  return (
                    <AccordionItem key={section.id} value={section.id} className="border-slate-700/50">
                      <AccordionTrigger className="text-sm py-3 hover:no-underline">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center text-xs text-blue-400">
                            {sectionIndex + 1}
                          </div>
                          <span>{section.title}</span>
                          <Badge variant="outline" className="text-xs ml-2">
                            {sectionTopicsCompleted}/{section.topics.length}
                          </Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pl-2">
                          {section.topics.map((topic, topicIndex) => {
                            const isCompleted = progress[subject.id]?.[topic.lessons[0]?.id || topic.id]
                            return (
                              <div
                                key={topic.id}
                                className={`flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer ${
                                  isCompleted
                                    ? 'bg-green-500/10 border border-green-500/20'
                                    : 'bg-slate-700/30 hover:bg-slate-700/50 border border-transparent'
                                }`}
                                onClick={(e) => handleTopicClick(topic, e)}
                              >
                                <div className="flex items-center gap-2">
                                  <div className={`w-5 h-5 rounded flex items-center justify-center text-xs ${
                                    isCompleted
                                      ? 'bg-green-500 text-white'
                                      : 'bg-slate-600 text-slate-400'
                                  }`}>
                                    {isCompleted ? '✓' : topicIndex + 1}
                                  </div>
                                  <Checkbox
                                    checked={isCompleted || false}
                                    onCheckedChange={() => toggleTopic(subject.id, topic)}
                                    onClick={(e) => e.stopPropagation()}
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium truncate">{topic.title}</p>
                                  <p className="text-xs text-slate-400 truncate">{topic.description}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge variant="outline" className="text-xs flex items-center gap-1">
                                    <BookOpen className="w-3 h-3" />
                                    {topic.lessons.length}
                                  </Badge>
                                  <div className="flex items-center gap-1 text-xs text-yellow-400">
                                    <Zap className="w-3 h-3" />
                                    {topic.lessons[0]?.difficulty === 'easy' ? 15 : topic.lessons[0]?.difficulty === 'medium' ? 25 : 40}
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            )}

            {/* Старая структура с topics */}
            {subject.topics && subject.topics.length > 0 && (
              <div className="space-y-2">
                {subject.topics.map((topic, index) => {
                  const isCompleted = progress[subject.id]?.[topic.id]
                  return (
                    <div
                      key={topic.id}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer ${
                        isCompleted
                          ? 'bg-green-500/10 border border-green-500/20'
                          : 'bg-slate-700/30 hover:bg-slate-700/50 border border-transparent'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        const virtualTopic: Topic = {
                          id: topic.id,
                          title: topic.title,
                          description: topic.description,
                          lessons: [topic]
                        }
                        setSelectedTopic(virtualTopic)
                        setSelectedSubjectForTopic(subject)
                        setTopicDialogOpen(true)
                      }}
                    >
                      <div className={`w-5 h-5 rounded flex items-center justify-center text-xs ${
                        isCompleted
                          ? 'bg-green-500 text-white'
                          : 'bg-slate-600 text-slate-400'
                      }`}>
                        {isCompleted ? '✓' : index + 1}
                      </div>
                      <Checkbox
                        checked={isCompleted || false}
                        onCheckedChange={() => {
                          const virtualTopic: Topic = {
                            id: topic.id,
                            title: topic.title,
                            description: topic.description,
                            lessons: [topic]
                          }
                          toggleTopic(subject.id, virtualTopic)
                        }}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{topic.title}</p>
                        <p className="text-xs text-slate-400 truncate">{topic.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Quiz button */}
            {subject.quiz && subject.quiz.length > 0 && (
              <Button
                className="w-full mt-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-medium"
                onClick={handleStartQuiz}
              >
                <Trophy className="w-4 h-4 mr-2" />
                Пройти тест ({subject.quiz.length} вопросов)
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
