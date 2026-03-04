'use client'

import { useState, useMemo } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { 
  BookOpen, CheckCircle, ChevronRight, ChevronLeft, Zap,
  Star, PartyPopper, Lightbulb, Play, Video
} from 'lucide-react'
import type { Topic, Subject, QuizQuestion } from '@/data/types'
import KidFriendlyQuiz from './KidFriendlyQuiz'
import InteractiveLesson from './InteractiveLesson'
import { sampleLessons } from '@/data/sample-lessons'

interface TopicDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  topic: Topic | null
  subject?: Subject | null
  onComplete: () => void
  onOpenQuiz?: () => void
  gradeId?: number
  hasVideoLesson?: boolean
}

// Эмодзи для разных типов контента
const contentEmojis: Record<string, string[]> = {
  math: ['🔢', '➕', '➖', '✖️', '➗', '🧮', '📐', '📏'],
  russian: ['🔤', '📖', '✏️', '📝', '📚', '🖋️'],
  world: ['🌍', '🌳', '🌸', '🐕', '🐈', '🦋', '🌺'],
  default: ['⭐', '🌟', '✨', '💫', '🎉', '🎈', '🏆']
}

function getEmojis(topicId: string): string[] {
  if (topicId.includes('math') || topicId.includes('счёт')) return contentEmojis.math
  if (topicId.includes('rus') || topicId.includes('writing') || topicId.includes('письм')) return contentEmojis.russian
  if (topicId.includes('world') || topicId.includes('окруж')) return contentEmojis.world
  return contentEmojis.default
}

// Парсинг контента в шаги
interface LessonStep {
  type: 'intro' | 'item' | 'example' | 'complete'
  title: string
  content: string
  emoji: string
}

function parseContentToSteps(theory: string, examples: string[], topicTitle?: string, lessons?: import('@/data/types').Lesson[]): LessonStep[] {
  const steps: LessonStep[] = []

  // Добавляем введение
  steps.push({
    type: 'intro',
    title: topicTitle || 'Урок',
    content: 'Нажми на стрелочку, чтобы продолжить! →',
    emoji: '👋'
  })

  // Если есть уроки, парсим их
  if (lessons && lessons.length > 0) {
    lessons.forEach((lesson, index) => {
      // Парсим контент урока
      if (typeof document !== 'undefined') {
        const tempDiv = document.createElement('div')
        tempDiv.innerHTML = lesson.content

        // Заголовки как подсказки
        const headings = tempDiv.querySelectorAll('h3, h4')
        headings.forEach((heading, hIndex) => {
          const text = heading.textContent || ''
          if (text.length > 2) {
            steps.push({
              type: 'item',
              title: lesson.title,
              content: text,
              emoji: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'][(index + hIndex) % 10] || '•'
            })
          }
        })

        // Пункты списка
        const lists = tempDiv.querySelectorAll('ul li, ol li')
        lists.forEach((item, lIndex) => {
          const text = item.textContent || ''
          if (text.length > 2 && text.length < 200) {
            steps.push({
              type: 'item',
              title: 'Важно!',
              content: text,
              emoji: ['🌟', '✨', '⭐', '💫', '🎈'][lIndex % 5] || '⭐'
            })
          }
        })

        // Если из урока ничего не извлекли, добавляем сокращённый контент
        if (tempDiv.querySelectorAll('h3, h4, ul li, ol li').length === 0) {
          const plainText = lesson.content.replace(/<[^>]*>/g, ' ').trim().substring(0, 150)
          if (plainText.length > 10) {
            steps.push({
              type: 'item',
              title: lesson.title,
              content: plainText,
              emoji: '📖'
            })
          }
        }
      }
    })
  } else {
    // Парсим HTML теории и создаём простые шаги
    if (typeof document !== 'undefined') {
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = theory

      // Заголовки как подсказки
      const headings = tempDiv.querySelectorAll('h3, h4')
      headings.forEach((heading, index) => {
        const text = heading.textContent || ''
        if (text.length > 2) {
          steps.push({
            type: 'item',
            title: 'Запомни!',
            content: text,
            emoji: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'][index] || '•'
          })
        }
      })

      // Пункты списка
      const lists = tempDiv.querySelectorAll('ul li, ol li')
      lists.forEach((item, index) => {
        const text = item.textContent || ''
        if (text.length > 2 && text.length < 200) {
          steps.push({
            type: 'item',
            title: 'Важно!',
            content: text,
            emoji: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'][index % 10] || '•'
          })
        }
      })
    }

    // Если шагов мало, добавляем базовые
    if (steps.length < 3) {
      steps.push({
        type: 'item',
        title: 'Важно!',
        content: theory.replace(/<[^>]*>/g, ' ').substring(0, 150),
        emoji: '⭐'
      })
    }
  }

  // Добавляем примеры
  examples.forEach((example, index) => {
    steps.push({
      type: 'example',
      title: `Пример ${index + 1}`,
      content: example,
      emoji: '💡'
    })
  })

  // Добавляем финальный шаг
  steps.push({
    type: 'complete',
    title: 'Отлично! 🎉',
    content: 'Ты прошёл весь урок! Нажми кнопку, чтобы получить звезду!',
    emoji: '🏆'
  })

  return steps
}

// Мини-тест внутри урока
function MiniQuiz({
  questions,
  onComplete
}: {
  questions: QuizQuestion[]
  onComplete: () => void
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)

  const question = questions[currentQuestion]
  const isLastQuestion = currentQuestion === questions.length - 1
  const isFinished = currentQuestion >= questions.length

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(index)
    const correct = index === question.correctAnswer
    setIsCorrect(correct)

    if (correct) {
      setScore(prev => prev + 1)
    }
  }

  const nextQuestion = () => {
    if (isLastQuestion) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setIsCorrect(null)
    }
  }

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100)
    const isPerfect = score === questions.length

    return (
      <div className="text-center space-y-4 py-6">
        <div className="text-6xl animate-bounce">
          {isPerfect ? '🏆' : percentage >= 70 ? '🎉' : '💪'}
        </div>
        <h3 className="text-2xl font-bold text-white">
          {isPerfect ? 'Идеально!' : percentage >= 70 ? 'Отлично!' : 'Хорошая попытка!'}
        </h3>
        <p className="text-lg text-white/80">
          {score} из {questions.length} правильных ответов
        </p>
        <div className="flex justify-center gap-2">
          {[...Array(Math.min(score, 5))].map((_, i) => (
            <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <Button
          onClick={onComplete}
          className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl px-8 py-4 text-lg font-bold"
        >
          <PartyPopper className="w-5 h-5 mr-2" />
          Завершить
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-white/60">Вопрос {currentQuestion + 1} из {questions.length}</span>
        <div className="flex items-center gap-1">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <span className="font-bold text-white">{score}</span>
        </div>
      </div>

      <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />

      <div className="bg-white/10 rounded-2xl p-4">
        <h4 className="text-lg font-medium text-white mb-4">{question.question}</h4>
        
        <div className="space-y-2">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index
            const isTheCorrectAnswer = index === question.correctAnswer
            const showCorrect = selectedAnswer !== null && isTheCorrectAnswer

            return (
              <Button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={`w-full rounded-xl py-4 text-left transition-all ${
                  showCorrect
                    ? 'bg-green-500 text-white'
                    : isSelected && !isCorrect
                      ? 'bg-red-500 text-white'
                      : isSelected
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {showCorrect ? '✅ ' : isSelected && !isCorrect ? '❌ ' : ''}
                {option}
              </Button>
            )
          })}
        </div>

        {selectedAnswer !== null && (
          <div className="mt-4">
            <p className="text-sm text-white/80 mb-3">{question.explanation}</p>
            <Button
              onClick={nextQuestion}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl py-3"
            >
              {isLastQuestion ? 'Результаты' : 'Дальше'}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function TopicDialog({ 
  open, 
  onOpenChange, 
  topic, 
  subject,
  onComplete,
  onOpenQuiz,
  gradeId = 0,
  hasVideoLesson = false
}: TopicDialogProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [starsEarned, setStarsEarned] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [showVideoLesson, setShowVideoLesson] = useState(false)

  // Вычисляем шаги при изменении темы
  const steps = useMemo(() => {
    if (!topic) return []
    return parseContentToSteps(topic.theory, topic.examples, topic.title, topic.lessons)
  }, [topic])

  // Find matching video lesson - must be before any early returns
  const videoLesson = useMemo(() => {
    if (!hasVideoLesson || !topic) return null
    // Try to find a lesson matching the topic
    const matchingLesson = sampleLessons.find(lesson => 
      topic.title.toLowerCase().includes(lesson.title.toLowerCase()) ||
      lesson.title.toLowerCase().includes(topic.title.toLowerCase())
    )
    return matchingLesson
  }, [hasVideoLesson, topic])

  // Сброс при закрытии
  const handleClose = () => {
    setCurrentStep(0)
    setStarsEarned(0)
    setShowQuiz(false)
    onOpenChange(false)
  }

  // Early return after all hooks
  if (!topic) return null

  const useKidMode = gradeId <= 2
  const hasTopicQuiz = topic.quiz && topic.quiz.length > 0
  const hasSubjectQuiz = subject?.quiz && subject.quiz.length > 0
  
  const progress = steps.length > 0 ? ((currentStep + 1) / steps.length) * 100 : 0
  const currentStepData = steps[currentStep]
  const emojis = getEmojis(topic.id)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
      setStarsEarned(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleComplete = () => {
    onComplete()
    onOpenChange(false)
    // Сброс
    setCurrentStep(0)
    setStarsEarned(0)
    setShowQuiz(false)
  }

  const handleStartTopicQuiz = () => {
    setShowQuiz(true)
  }

  // Handle video lesson progress
  const handleVideoProgress = (progress: number) => {
    console.log('Video lesson progress:', progress)
  }

  const handleVideoComplete = () => {
    setShowVideoLesson(false)
    onComplete()
  }

  // Video Lesson View
  if (showVideoLesson && videoLesson) {
    return (
      <Dialog open={true} onOpenChange={() => setShowVideoLesson(false)}>
        <DialogContent className="bg-slate-900 border-white/10 text-white max-w-5xl max-h-[90vh] p-0 overflow-hidden">
          <InteractiveLesson
            lesson={videoLesson}
            onComplete={handleVideoComplete}
            onProgress={handleVideoProgress}
            onClose={() => setShowVideoLesson(false)}
          />
        </DialogContent>
      </Dialog>
    )
  }

  // Детский режим - модальное окно с шагами
  if (useKidMode) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 border-white/20 text-white max-w-lg overflow-hidden rounded-3xl">
          {/* Шапка с прогрессом */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse" />
              <span className="font-bold text-lg">{starsEarned}</span>
            </div>
            <div className="flex-1 mx-4">
              <Progress value={showQuiz ? 100 : progress} className="h-2" />
            </div>
            <Button
              variant="ghost"
              onClick={() => onOpenChange(false)}
              className="text-white/60 hover:text-white"
            >
              ✕
            </Button>
          </div>

          {/* Контент */}
          <div className="p-4 min-h-[300px]">
            {showQuiz && hasTopicQuiz ? (
              <MiniQuiz
                questions={topic.quiz!}
                onComplete={handleComplete}
              />
            ) : showQuiz && hasSubjectQuiz && onOpenQuiz ? (
              <div className="text-center space-y-4 py-6">
                <p className="text-white/80">Тест по предмету</p>
                <Button
                  onClick={() => {
                    onOpenChange(false)
                    onOpenQuiz()
                  }}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-2xl px-8 py-4 text-lg font-bold"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Начать тест
                </Button>
              </div>
            ) : currentStepData ? (
              <div className="space-y-6">
                {/* Эмодзи */}
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-bounce-slow">
                    {currentStepData.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {currentStepData.title}
                  </h3>
                </div>

                {/* Контент шага */}
                {currentStepData.type === 'complete' ? (
                  <div className="text-center space-y-4">
                    <p className="text-lg text-white/80">{currentStepData.content}</p>
                    <div className="flex justify-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-8 h-8 text-yellow-400 fill-yellow-400 animate-bounce"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>

                    {/* Кнопки */}
                    <div className="space-y-2 pt-4">
                      {/* Кнопка теста */}
                      {(hasTopicQuiz || hasSubjectQuiz) && (
                        <Button
                          onClick={handleStartTopicQuiz}
                          className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-2xl py-4 text-lg font-bold"
                        >
                          <Zap className="w-5 h-5 mr-2" />
                          Тест
                        </Button>
                      )}
                      
                      <Button
                        onClick={handleComplete}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl py-4 text-lg font-bold"
                      >
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Завершить урок
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-lg text-white/90 text-center">
                      {currentStepData.content}
                    </p>

                    {currentStepData.type === 'example' && (
                      <div className="bg-white/10 rounded-2xl p-4 text-center">
                        <Lightbulb className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                        <p className="text-white/80">Попробуй сам!</p>
                      </div>
                    )}

                    {/* Навигация */}
                    <div className="flex gap-2 pt-4">
                      <Button
                        onClick={handlePrev}
                        disabled={currentStep === 0}
                        className="flex-1 bg-white/10 hover:bg-white/20 disabled:opacity-50 text-white rounded-xl py-3"
                      >
                        <ChevronLeft className="w-5 h-5 mr-1" />
                        Назад
                      </Button>
                      <Button
                        onClick={handleNext}
                        className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl py-3"
                      >
                        Дальше
                        <ChevronRight className="w-5 h-5 ml-1" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-white/60">
                Загрузка...
              </div>
            )}
          </div>

          <style jsx>{`
            @keyframes bounce-slow {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
          `}</style>
        </DialogContent>
      </Dialog>
    )
  }

  // Обычный режим для старших классов
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-900 border-white/10 text-white max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-400" />
            {topic.title}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {topic.description}
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[50vh]">
          <div className="space-y-4 pr-4">
            <div 
              className="prose prose-invert prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: topic.theory }}
            />
            
            {topic.examples.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-white font-medium">Примеры:</h4>
                <ul className="space-y-1">
                  {topic.examples.map((example, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <ChevronRight className="w-4 h-4 text-purple-400" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </ScrollArea>
        
        <div className="flex flex-col sm:flex-row gap-2 p-4 border-t border-white/10">
          {/* Кнопка Видеоурок */}
          {videoLesson && (
            <Button
              onClick={() => setShowVideoLesson(true)}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
            >
              <Video className="w-4 h-4 mr-2" />
              Видеоурок
            </Button>
          )}
          
          {/* Кнопка Тест по теме */}
          {hasTopicQuiz && (
            <Button
              onClick={() => setShowQuiz(true)}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
            >
              <Zap className="w-4 h-4 mr-2" />
              Тест по уроку ({topic.quiz?.length})
            </Button>
          )}
          
          {/* Кнопка Тест по предмету */}
          {!hasTopicQuiz && hasSubjectQuiz && onOpenQuiz && (
            <Button
              onClick={() => {
                onOpenChange(false)
                onOpenQuiz()
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            >
              <Zap className="w-4 h-4 mr-2" />
              Тест
            </Button>
          )}
          
          <Button
            onClick={handleComplete}
            className="bg-gradient-to-r from-green-600 to-emerald-600"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Отметить как изученное
          </Button>
        </div>

        {/* Мини-тест внутри диалога */}
        {showQuiz && hasTopicQuiz && (
          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center p-4 z-10">
            <MiniQuiz
              questions={topic.quiz!}
              onComplete={handleComplete}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
