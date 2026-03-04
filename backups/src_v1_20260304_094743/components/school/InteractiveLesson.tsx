'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { 
  ChevronLeft, ChevronRight, Play, Pause, RotateCcw,
  CheckCircle, HelpCircle, Clock, BookOpen, X
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

interface LessonSlide {
  id: string
  type: 'content' | 'quiz' | 'activity'
  title: string
  content: string
  image?: string
  duration: number
  checkpoint?: {
    type: 'quiz' | 'think'
    question: string
    options?: string[]
    correctAnswer?: number
  }
}

interface InteractiveLessonProps {
  lesson: {
    id: string
    title: string
    subject: string
    icon: string
    slides: LessonSlide[]
  }
  onComplete?: () => void
  onClose?: () => void
}

// Примеры уроков
export const sampleLessons = {
  fractions: {
    id: 'fractions-intro',
    title: 'Введение в дроби',
    subject: 'Математика',
    icon: '🔢',
    slides: [
      {
        id: 's1',
        type: 'content',
        title: 'Что такое дробь?',
        content: `
          <h3>🍰 Дробь — это часть целого</h3>
          <p>Представь пиццу, разрезанную на равные части. Если взять один кусок из четырёх, это будет <strong>1/4</strong> (одна четвёртая).</p>
          <div class="example">
            <p>📍 Числитель (верх) — сколько частей взяли</p>
            <p>📍 Знаменатель (низ) — на сколько частей разделили</p>
          </div>
        `,
        duration: 30
      },
      {
        id: 's2',
        type: 'content',
        title: 'Примеры дробей',
        content: `
          <h3>📊 Примеры из жизни</h3>
          <ul>
            <li>🕐 Полчаса = 1/2 часа</li>
            <li>📐 Половина пирога = 1/2</li>
            <li>⚾ Четверть игры = 1/4</li>
            <li>🥧 Треть пиццы = 1/3</li>
          </ul>
          <p class="tip">💡 Дроби окружают нас повсюду!</p>
        `,
        duration: 25,
        checkpoint: {
          type: 'think',
          question: 'Какую часть недели составляют выходные (2 дня)?'
        }
      },
      {
        id: 's3',
        type: 'quiz',
        title: 'Проверка знаний',
        content: 'Давай проверим, как ты понял тему!',
        duration: 20,
        checkpoint: {
          type: 'quiz',
          question: 'Что показывает числитель дроби?',
          options: [
            'На сколько частей разделили',
            'Сколько частей взяли',
            'Какая это дробь',
            'Сколько всего частей'
          ],
          correctAnswer: 1
        }
      },
      {
        id: 's4',
        type: 'content',
        title: 'Правильные и неправильные дроби',
        content: `
          <h3>✅ Виды дробей</h3>
          <div class="fraction-types">
            <p><strong>Правильная дробь:</strong> числитель МЕНЬШЕ знаменателя</p>
            <p class="example">1/2, 2/5, 3/4 ✓</p>
            
            <p><strong>Неправильная дробь:</strong> числитель БОЛЬШЕ или РАВЕН знаменателю</p>
            <p class="example">5/4, 7/3, 4/4 ✓</p>
          </div>
        `,
        duration: 30
      },
      {
        id: 's5',
        type: 'quiz',
        title: 'Финальный тест',
        content: 'Последний вопрос!',
        duration: 15,
        checkpoint: {
          type: 'quiz',
          question: 'Какая дробь правильная?',
          options: ['7/5', '3/3', '2/5', '8/4'],
          correctAnswer: 2
        }
      }
    ]
  },
  partsOfSpeech: {
    id: 'parts-of-speech',
    title: 'Части речи',
    subject: 'Русский язык',
    icon: '📖',
    slides: [
      {
        id: 's1',
        type: 'content',
        title: 'Что такое части речи?',
        content: `
          <h3>📝 Части речи — группы слов</h3>
          <p>Слова объединяются в группы по общим признакам. В русском языке есть самостоятельные и служебные части речи.</p>
          <div class="types">
            <p>⭐ Самостоятельные: существительное, глагол, прилагательное...</p>
            <p>🔧 Служебные: предлог, союз, частица</p>
          </div>
        `,
        duration: 30
      },
      {
        id: 's2',
        type: 'content',
        title: 'Существительное',
        content: `
          <h3>🐱 Существительное</h3>
          <p><strong>Обозначает:</strong> предметы, существ, явления природы</p>
          <p><strong>Вопросы:</strong> кто? что?</p>
          <div class="examples">
            <p>🏫 Школа, 🐕 собака, ☀️ солнце, 🌧️ дождь</p>
          </div>
          <p class="tip">💡 Существительные бывают одушевлённые и неодушевлённые!</p>
        `,
        duration: 25
      },
      {
        id: 's3',
        type: 'quiz',
        title: 'Найди существительное',
        content: 'Проверим знания!',
        duration: 20,
        checkpoint: {
          type: 'quiz',
          question: 'Какое слово является существительным?',
          options: ['Бежать', 'Красивый', 'Стол', 'Быстро'],
          correctAnswer: 2
        }
      },
      {
        id: 's4',
        type: 'content',
        title: 'Глагол',
        content: `
          <h3>🏃 Глагол</h3>
          <p><strong>Обозначает:</strong> действие предмета</p>
          <p><strong>Вопросы:</strong> что делать? что сделать?</p>
          <div class="examples">
            <p>✏️ Писать, 📖 читать, 🏃 бежать, 🎨 рисовать</p>
          </div>
          <p class="tip">💡 Глаголы изменяются по временам: прошедшее, настоящее, будущее!</p>
        `,
        duration: 25
      },
      {
        id: 's5',
        type: 'quiz',
        title: 'Финальный тест',
        content: 'Последний вопрос!',
        duration: 15,
        checkpoint: {
          type: 'quiz',
          question: 'Какое слово является глаголом?',
          options: ['Книга', 'Интересный', 'Читать', 'Вчера'],
          correctAnswer: 2
        }
      }
    ]
  }
}

export default function InteractiveLesson({
  lesson,
  onComplete,
  onClose
}: InteractiveLessonProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [timeLeft, setTimeLeft] = useState(lesson.slides[0]?.duration || 30)
  const [showCheckpoint, setShowCheckpoint] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [completedSlides, setCompletedSlides] = useState<Set<string>>(new Set())
  const [notes, setNotes] = useState('')
  const [showNotes, setShowNotes] = useState(false)
  
  const { playSuccess, playError, playClick } = useSound()
  
  const currentSlide = lesson.slides[currentSlideIndex]
  const totalSlides = lesson.slides.length
  const progress = ((currentSlideIndex + 1) / totalSlides) * 100

  // Автопрокрутка
  useEffect(() => {
    if (!isPlaying || showCheckpoint) return
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          if (currentSlide.checkpoint) {
            setShowCheckpoint(true)
            setIsPlaying(false)
            return 0
          } else {
            // Inline auto-advance logic
            if (currentSlideIndex < totalSlides - 1) {
              setCompletedSlides(p => new Set(p).add(currentSlide.id))
              setCurrentSlideIndex(currentSlideIndex + 1)
              setShowCheckpoint(false)
              setSelectedAnswer(null)
              setIsCorrect(null)
            }
            return lesson.slides[currentSlideIndex + 1]?.duration || 30
          }
        }
        return prev - 1
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [isPlaying, showCheckpoint, currentSlideIndex, currentSlide, totalSlides, lesson.slides])

  // Переход к следующему слайду
  const goToNext = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      setCompletedSlides(prev => new Set(prev).add(currentSlide.id))
      setCurrentSlideIndex(prev => prev + 1)
      setTimeLeft(lesson.slides[currentSlideIndex + 1]?.duration || 30)
      setShowCheckpoint(false)
      setSelectedAnswer(null)
      setIsCorrect(null)
      playClick?.()
    } else {
      // Урок завершён
      setCompletedSlides(prev => new Set(prev).add(currentSlide.id))
      onComplete?.()
    }
  }, [currentSlideIndex, totalSlides, lesson.slides, currentSlide, onComplete, playClick])

  // Переход к предыдущему слайду
  const goToPrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1)
      setTimeLeft(lesson.slides[currentSlideIndex - 1]?.duration || 30)
      setShowCheckpoint(false)
      setSelectedAnswer(null)
      setIsCorrect(null)
    }
  }, [currentSlideIndex, lesson.slides])

  // Ответ на вопрос
  const handleAnswer = useCallback((answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    
    if (currentSlide.checkpoint?.correctAnswer === answerIndex) {
      setIsCorrect(true)
      playSuccess?.()
    } else {
      setIsCorrect(false)
      playError?.()
    }
    
    // Advance after delay
    setTimeout(() => {
      if (currentSlideIndex < totalSlides - 1) {
        setCompletedSlides(p => new Set(p).add(currentSlide.id))
        setCurrentSlideIndex(currentSlideIndex + 1)
        setTimeLeft(lesson.slides[currentSlideIndex + 1]?.duration || 30)
        setShowCheckpoint(false)
        setSelectedAnswer(null)
        setIsCorrect(null)
        playClick?.()
      } else {
        setCompletedSlides(p => new Set(p).add(currentSlide.id))
        onComplete?.()
      }
    }, 1500)
  }, [currentSlide, currentSlideIndex, totalSlides, lesson.slides, playSuccess, playError, playClick, onComplete])

  // Рендер контента слайда
  const renderSlideContent = () => (
    <div className="prose prose-invert max-w-none">
      <div 
        className="text-white"
        dangerouslySetInnerHTML={{ __html: currentSlide.content }}
      />
    </div>
  )

  // Рендер checkpoint
  const renderCheckpoint = () => {
    if (!currentSlide.checkpoint) return null
    
    const checkpoint = currentSlide.checkpoint
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 p-4 bg-white/10 rounded-xl"
      >
        {checkpoint.type === 'think' ? (
          <div className="text-center">
            <HelpCircle className="w-10 h-10 mx-auto text-yellow-400 mb-3" />
            <p className="text-lg font-medium text-white mb-4">{checkpoint.question}</p>
            <p className="text-purple-300 text-sm">Подумай над этим вопросом...</p>
            <Button
              onClick={goToNext}
              className="mt-4 bg-gradient-to-r from-green-500 to-emerald-500"
            >
              Понял! Продолжить
            </Button>
          </div>
        ) : (
          <div>
            <p className="text-lg font-medium text-white mb-4">{checkpoint.question}</p>
            <div className="grid gap-2">
              {checkpoint.options?.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => selectedAnswer === null && handleAnswer(index)}
                  className={`p-3 rounded-lg text-left transition-all ${
                    selectedAnswer === null
                      ? 'bg-white/10 hover:bg-white/20 text-white'
                      : selectedAnswer === index
                        ? isCorrect
                          ? 'bg-green-500/30 border-2 border-green-500 text-white'
                          : 'bg-red-500/30 border-2 border-red-500 text-white'
                        : checkpoint.correctAnswer === index
                          ? 'bg-green-500/20 border-2 border-green-500/50 text-green-300'
                          : 'bg-white/5 text-gray-400'
                  }`}
                  whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                  whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    )
  }

  return (
    <Card className="w-full max-w-3xl mx-auto bg-gradient-to-b from-slate-900 to-purple-900 border-purple-500/30 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-purple-500/30 bg-black/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{lesson.icon}</span>
            <div>
              <h2 className="font-bold text-white">{lesson.title}</h2>
              <p className="text-sm text-purple-300">{lesson.subject} • Слайд {currentSlideIndex + 1}/{totalSlides}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-purple-300 hover:text-white">
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        {/* Progress bar */}
        <div className="mt-4">
          <Progress value={progress} className="h-2 bg-purple-900/50" />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Slide header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{currentSlide.title}</h3>
              {currentSlide.type === 'quiz' && (
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm flex items-center gap-1">
                  <HelpCircle className="w-4 h-4" />
                  Тест
                </span>
              )}
            </div>
            
            {/* Slide content */}
            {renderSlideContent()}
            
            {/* Checkpoint */}
            {showCheckpoint && renderCheckpoint()}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Footer controls */}
      <div className="p-4 border-t border-purple-500/30 bg-black/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrev}
              disabled={currentSlideIndex === 0}
              className="text-purple-300 hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-purple-300 hover:text-white"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setCurrentSlideIndex(0)
                setTimeLeft(lesson.slides[0]?.duration || 30)
                setShowCheckpoint(false)
              }}
              className="text-purple-300 hover:text-white"
            >
              <RotateCcw className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-1 text-purple-300 text-sm ml-2">
              <Clock className="w-4 h-4" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowNotes(!showNotes)}
              className="text-purple-300 hover:text-white"
            >
              <BookOpen className="w-4 h-4 mr-1" />
              Заметки
            </Button>
            
            <Button
              onClick={goToNext}
              disabled={currentSlideIndex === totalSlides - 1 && !showCheckpoint}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              {currentSlideIndex === totalSlides - 1 ? 'Завершить' : 'Далее'}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
        
        {/* Notes panel */}
        {showNotes && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4"
          >
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Делай заметки во время урока..."
              className="w-full h-24 p-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder:text-purple-300/50 resize-none"
            />
          </motion.div>
        )}
      </div>
      
      {/* Slide indicators */}
      <div className="px-4 pb-4 flex justify-center gap-1">
        {lesson.slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`w-2 h-2 rounded-full ${
              index === currentSlideIndex
                ? 'bg-purple-500'
                : completedSlides.has(slide.id)
                  ? 'bg-green-500'
                  : 'bg-white/20'
            }`}
            whileHover={{ scale: 1.5 }}
            onClick={() => {
              setCurrentSlideIndex(index)
              setTimeLeft(slide.duration)
              setShowCheckpoint(false)
            }}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </Card>
  )
}
