'use client'

import { useState, useMemo } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { 
  BookOpen, CheckCircle, ChevronRight, Zap,
  Star, PartyPopper, Video, BookMarked, X
} from 'lucide-react'
import type { Topic, Subject, QuizQuestion } from '@/data/types'
import InteractiveLesson from './InteractiveLesson'
import { sampleLessons } from '@/data/sample-lessons'
import { getFolkloreText, type FolkloreText } from '@/data/folklore-texts'
import { findFolkloreMentions } from '@/lib/folklore-links'
import MoleculeModal from './MoleculeModal'

// Иконки для типов произведений
const folkloreTypeIcons: Record<string, string> = {
  fairy_tale: '📖',
  bylina: '⚔️',
  fable: '🦊',
  poem: '📝',
  story: '📚'
}

const folkloreTypeLabels: Record<string, string> = {
  fairy_tale: 'Русская народная сказка',
  bylina: 'Былина',
  fable: 'Басня',
  poem: 'Стихотворение',
  story: 'Рассказ'
}

// Паттерны для распознавания химических формул
// ВАЖНО: Более длинные формулы должны быть ПЕРЕД более короткими!
// НЕ добавляйте H₂, O₂, N₂ отдельно - они конфликтуют с другими формулами!
const MOLECULE_PATTERNS = [
  // Серная кислота - ДО H₂O и H₂O₂
  { pattern: /H₂SO₄/g, key: 'H2SO4', display: 'H₂SO₄' },
  { pattern: /H2SO4/g, key: 'H2SO4', display: 'H₂SO₄' },
  // Перекись водорода - ДО H₂O
  { pattern: /H₂O₂/g, key: 'H2O2', display: 'H₂O₂' },
  { pattern: /H2O2/g, key: 'H2O2', display: 'H₂O₂' },
  // Вода
  { pattern: /H₂O/g, key: 'H2O', display: 'H₂O' },
  { pattern: /H2O/g, key: 'H2O', display: 'H₂O' },
  // Углекислый газ
  { pattern: /CO₂/g, key: 'CO2', display: 'CO₂' },
  { pattern: /CO2/g, key: 'CO2', display: 'CO₂' },
  // Метан
  { pattern: /CH₄/g, key: 'CH4', display: 'CH₄' },
  { pattern: /CH4/g, key: 'CH4', display: 'CH₄' },
  // Аммиак
  { pattern: /NH₃/g, key: 'NH3', display: 'NH₃' },
  { pattern: /NH3/g, key: 'NH3', display: 'NH₃' },
  // Поваренная соль
  { pattern: /NaCl/g, key: 'NaCl', display: 'NaCl' },
  // Озон
  { pattern: /O₃/g, key: 'O3', display: 'O₃' },
  { pattern: /O3/g, key: 'O3', display: 'O₃' },
]

// Паттерны для поиска названий произведений
const folklorePatterns: { id: string; patterns: { pattern: RegExp; replacement: string }[] }[] = [
  { id: 'kolobok', patterns: [
    { pattern: /\bКолобок\b/g, replacement: '%%KOL0B0K%%' },
  ]},
  { id: 'teremok', patterns: [
    { pattern: /\bТеремок\b/g, replacement: '%%TEREM0K%%' },
  ]},
  { id: 'repka', patterns: [
    { pattern: /\bРепка\b/g, replacement: '%%REPKA%%' },
  ]},
  { id: 'gusi-lebedi', patterns: [
    { pattern: /\bГуси-лебеди\b/g, replacement: '%%GUSI%%' },
    { pattern: /\bГуси лебеди\b/g, replacement: '%%GUSI%%' },
  ]},
  { id: 'morozko', patterns: [
    { pattern: /\bМорозко\b/g, replacement: '%%MOROZKO%%' },
  ]},
  { id: 'aibolit', patterns: [
    { pattern: /\bАйболит\b/g, replacement: '%%AIBOLIT%%' },
    { pattern: /\bДоктор Айболит\b/g, replacement: '%%AIBOLIT%%' },
  ]},
  { id: 'moydodyr', patterns: [
    { pattern: /\bМойдодыр\b/g, replacement: '%%MOYDODYR%%' },
  ]},
  { id: 'ilya-muromets', patterns: [
    { pattern: /\bИлья Муромец\b/g, replacement: '%%ILYA%%' },
    { pattern: /\bСоловей-разбойник\b/g, replacement: '%%SOLOVEY%%' },
  ]},
]

// Компонент для обработки контента с кликабельными ссылками
function ProcessedContent({ 
  html, 
  onFolkloreClick,
  onMoleculeClick
}: { 
  html: string
  onFolkloreClick: (id: string) => void
  onMoleculeClick?: (key: string) => void
}) {
  // Обрабатываем HTML и заменяем названия на span элементы и химические формулы на кнопки
  const processedHtml = useMemo(() => {
    let result = html
    
    // Сначала заменяем молекулы (чтобы не было конфликтов с другими заменами)
    if (onMoleculeClick) {
      for (const { pattern, key } of MOLECULE_PATTERNS) {
        result = result.replace(pattern, (match) => {
          return `##MOLECULE_${key}##`
        })
      }
    }
    
    // Заменяем названия произведений
    for (const { id, patterns } of folklorePatterns) {
      for (const { pattern, replacement } of patterns) {
        result = result.replace(pattern, (match) => {
          return `<span class="folklore-link" data-folklore-id="${id}" title="Нажмите, чтобы прочитать полный текст">${match}</span>`
        })
      }
    }
    
    return result
  }, [html, onMoleculeClick])

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    const link = target.closest('.folklore-link')
    if (link) {
      const id = link.getAttribute('data-folklore-id')
      if (id) {
        e.preventDefault()
        e.stopPropagation()
        onFolkloreClick(id)
        return
      }
    }
  }

  // Разбираем контент на части
  const parts = useMemo(() => {
    if (!onMoleculeClick) {
      return [{ type: 'html' as const, content: processedHtml }]
    }
    
    const parts: Array<{ type: 'html' | 'molecule', content: string, key?: string }> = []
    const tokenRegex = /##MOLECULE_([^#]+)##/g
    let match
    let lastIndex = 0
    
    while ((match = tokenRegex.exec(processedHtml)) !== null) {
      // Добавляем HTML до маркера
      if (match.index > lastIndex) {
        parts.push({ type: 'html', content: processedHtml.slice(lastIndex, match.index) })
      }
      // Добавляем молекулу
      parts.push({ type: 'molecule', content: '🧪', key: match[1] })
      lastIndex = match.index + match[0].length
    }
    
    // Добавляем оставшийся HTML
    if (lastIndex < processedHtml.length) {
      parts.push({ type: 'html', content: processedHtml.slice(lastIndex) })
    }
    
    return parts.length > 0 ? parts : [{ type: 'html', content: processedHtml }]
  }, [processedHtml, onMoleculeClick])

  return (
    <div onClick={handleClick}>
      {parts.map((part, index) => {
        if (part.type === 'html') {
          return <span key={index} dangerouslySetInnerHTML={{ __html: part.content }} />
        } else {
          return (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation()
                if (part.key && onMoleculeClick) onMoleculeClick(part.key)
              }}
              className="inline-flex items-center gap-0.5 px-1.5 py-0.5 mx-0.5 rounded bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 hover:text-purple-200 cursor-pointer transition-colors text-inherit font-normal border border-purple-500/30 hover:border-purple-400/50"
              title="Нажмите для просмотра 3D модели"
            >
              <span className="text-sm">🧪</span>
              <span>{part.key}</span>
            </button>
          )
        }
      })}
    </div>
  )
}

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
    if (correct) setScore(prev => prev + 1)
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
        <p className="text-lg text-white/80">{score} из {questions.length}</p>
        <div className="flex justify-center gap-2">
          {[...Array(Math.min(score, 5))].map((_, i) => (
            <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <Button onClick={onComplete} className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl px-8 py-4 text-lg font-bold">
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
            const showCorrect = selectedAnswer !== null && index === question.correctAnswer
            return (
              <Button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={`w-full rounded-xl py-4 text-left transition-all ${
                  showCorrect ? 'bg-green-500 text-white' :
                  isSelected && !isCorrect ? 'bg-red-500 text-white' :
                  isSelected ? 'bg-purple-500 text-white' :
                  'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {showCorrect ? '✅ ' : isSelected && !isCorrect ? '❌ ' : ''}{option}
              </Button>
            )
          })}
        </div>
        {selectedAnswer !== null && (
          <div className="mt-4">
            <p className="text-sm text-white/80 mb-3">{question.explanation}</p>
            <Button onClick={nextQuestion} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl py-3">
              {isLastQuestion ? 'Результаты' : 'Дальше'}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function TopicDialog({ 
  open, onOpenChange, topic, subject, onComplete, onOpenQuiz, gradeId = 0, hasVideoLesson = false
}: TopicDialogProps) {
  const [showQuiz, setShowQuiz] = useState(false)
  const [showVideoLesson, setShowVideoLesson] = useState(false)
  const [folkloreTextId, setFolkloreTextId] = useState<string | null>(null)
  const [moleculeKey, setMoleculeKey] = useState<string | null>(null)

  // Получаем текст сказки/былины
  const selectedFolkloreText = folkloreTextId ? (getFolkloreText(folkloreTextId) || null) : null

  // Находим все упоминания произведений в контенте
  const folkloreMentions = useMemo(() => {
    if (!topic) return []
    const allContent = [topic.theory, ...(topic.lessons?.map(l => l.content) || [])].join(' ')
    return findFolkloreMentions(allContent)
  }, [topic])

  // Все произведения для этого урока
  const allFolkloreTexts = useMemo(() => {
    if (!topic) return []
    const ids = new Set<string>()
    
    // Из уроков
    topic.lessons?.filter(l => l.folkloreTextId).forEach(l => ids.add(l.folkloreTextId!))
    // Из темы
    if (topic.folkloreTextId) ids.add(topic.folkloreTextId)
    // Из упоминаний
    folkloreMentions.forEach(f => ids.add(f.id))
    
    return Array.from(ids).map(id => getFolkloreText(id)).filter((f): f is FolkloreText => !!f)
  }, [topic, folkloreMentions])

  // Find matching video lesson
  const videoLesson = useMemo(() => {
    if (!hasVideoLesson || !topic) return null
    return sampleLessons.find(lesson => 
      topic.title.toLowerCase().includes(lesson.title.toLowerCase()) ||
      lesson.title.toLowerCase().includes(topic.title.toLowerCase())
    )
  }, [hasVideoLesson, topic])

  if (!topic) return null

  const useKidMode = gradeId <= 2
  const hasTopicQuiz = topic.quiz && topic.quiz.length > 0
  const hasSubjectQuiz = subject?.quiz && subject.quiz.length > 0
  const hasFolklore = allFolkloreTexts.length > 0

  const handleComplete = () => {
    onComplete()
    onOpenChange(false)
    setShowQuiz(false)
  }

  // Video Lesson View
  if (showVideoLesson && videoLesson) {
    return (
      <Dialog open={true} onOpenChange={() => setShowVideoLesson(false)}>
        <DialogContent className="bg-slate-900 border-white/10 text-white max-w-5xl max-h-[90vh] p-0 overflow-hidden">
          <InteractiveLesson
            lesson={videoLesson}
            onComplete={handleComplete}
            onProgress={() => {}}
            onClose={() => setShowVideoLesson(false)}
          />
        </DialogContent>
      </Dialog>
    )
  }

  // Folklore Text Modal
  if (folkloreTextId && selectedFolkloreText) {
    return (
      <>
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent className="bg-slate-900 border-white/10 text-white max-w-2xl max-h-[80vh] overflow-hidden">
            <DialogHeader>
              <DialogTitle>{topic.title}</DialogTitle>
            </DialogHeader>
            <ScrollArea className="h-[50vh]">
              <div className="p-4 text-white/80">Урок загружен...</div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
        <Dialog open={true} onOpenChange={() => setFolkloreTextId(null)}>
          <DialogContent className="bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 border-amber-500/30 text-white max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-2xl">
                  {folkloreTypeIcons[selectedFolkloreText.type]}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-amber-200">{selectedFolkloreText.title}</h2>
                  <p className="text-sm text-amber-300/70">
                    {selectedFolkloreText.type === 'fairy_tale' ? 'Русская народная сказка' : 
                     selectedFolkloreText.type === 'poem' ? 'Стихотворение' :
                     selectedFolkloreText.type === 'bylina' ? 'Былина' :
                     selectedFolkloreText.type === 'fable' ? 'Басня' : 'Произведение'}
                    {selectedFolkloreText.author && ` • ${selectedFolkloreText.author}`}
                  </p>
                </div>
              </div>
              <Button variant="ghost" onClick={() => setFolkloreTextId(null)} className="text-amber-300 hover:text-amber-100">
                <X className="w-6 h-6" />
              </Button>
            </div>
            <ScrollArea className="h-[60vh] mt-4">
              <div 
                className="folktale-content prose prose-invert prose-lg max-w-none px-4"
                dangerouslySetInnerHTML={{ __html: selectedFolkloreText.content }}
              />
            </ScrollArea>
            <div className="border-t border-amber-500/20 pt-4 mt-4 flex justify-end">
              <Button onClick={() => setFolkloreTextId(null)} className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                <BookOpen className="w-4 h-4 mr-2" />
                Вернуться к уроку
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  // Детский режим
  if (useKidMode) {
    return (
      <>
        <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 border-white/20 text-white max-w-2xl max-h-[85vh] overflow-hidden rounded-3xl">
          {/* Шапка */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse" />
              <span className="font-bold text-lg">{topic.title}</span>
            </div>
            <Button variant="ghost" onClick={() => onOpenChange(false)} className="text-white/60 hover:text-white text-xl">✕</Button>
          </div>

          {/* Контент */}
          <ScrollArea className="h-[45vh]">
            <div className="p-4">
              {showQuiz && hasTopicQuiz ? (
                <MiniQuiz questions={topic.quiz!} onComplete={handleComplete} />
              ) : (
                <div className="space-y-4">
                  {/* Уроки */}
                  {topic.lessons && topic.lessons.length > 0 ? (
                    <div className="space-y-6">
                      {topic.lessons.map((lesson, index) => (
                        <div key={lesson.id || index} className="kid-lesson">
                          <ProcessedContent html={lesson.content} onFolkloreClick={setFolkloreTextId} onMoleculeClick={setMoleculeKey} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="kid-lesson">
                      <ProcessedContent html={topic.theory} onFolkloreClick={setFolkloreTextId} onMoleculeClick={setMoleculeKey} />
                    </div>
                  )}
                  
                  {/* Блок с полными текстами */}
                  {hasFolklore && (
                    <div className="bg-gradient-to-r from-amber-600/30 to-orange-600/30 border-2 border-amber-400/50 rounded-2xl p-4 mt-6">
                      <h4 className="text-lg font-bold text-amber-200 mb-3">📚 Полные тексты произведений:</h4>
                      <div className="space-y-2">
                        {allFolkloreTexts.map((folklore) => (
                          <button
                            key={folklore.id}
                            onClick={() => setFolkloreTextId(folklore.id)}
                            className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-amber-500/40 transition-all text-left group"
                          >
                            <span className="text-2xl">{folkloreTypeIcons[folklore.type]}</span>
                            <div className="flex-1">
                              <div className="font-semibold text-white group-hover:text-amber-100 text-lg">{folklore.title}</div>
                              <div className="text-sm text-white/70">
                                {folklore.author || (folklore.type === 'fairy_tale' ? 'Русская народная сказка' : '')}
                              </div>
                            </div>
                            <span className="text-amber-300 group-hover:text-amber-100 text-lg">→</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Примеры */}
                  {topic.examples.length > 0 && (
                    <div className="bg-white/10 rounded-2xl p-4">
                      <h4 className="text-lg font-bold text-yellow-300 mb-2">💡 Примеры:</h4>
                      <ul className="space-y-2">
                        {topic.examples.map((example, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/90">
                            <ChevronRight className="w-5 h-5 text-pink-400 mt-0.5 shrink-0" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </ScrollArea>
          
          {/* Кнопки */}
          {!showQuiz && (
            <div className="p-4 border-t border-white/10 space-y-2">
              {hasFolklore && allFolkloreTexts.length === 1 && (
                <Button
                  onClick={() => setFolkloreTextId(allFolkloreTexts[0].id)}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-2xl py-4 text-lg font-bold"
                >
                  <BookMarked className="w-5 h-5 mr-2" />
                  📖 Читать полный текст
                </Button>
              )}
              {hasTopicQuiz && (
                <Button onClick={() => setShowQuiz(true)} className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-2xl py-4 text-lg font-bold">
                  <Zap className="w-5 h-5 mr-2" />
                  Тест 🎯
                </Button>
              )}
              <Button onClick={handleComplete} className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl py-4 text-lg font-bold">
                <CheckCircle className="w-5 h-5 mr-2" />
                Завершить урок ⭐
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <MoleculeModal open={!!moleculeKey} onOpenChange={() => setMoleculeKey(null)} moleculeKey={moleculeKey} />
    </>
  )
  }

  // Обычный режим
  return (
    <>
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-900 border-white/10 text-white max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-400" />
            {topic.title}
          </DialogTitle>
          <DialogDescription className="text-gray-400">{topic.description}</DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[45vh]">
          <div className="space-y-4 pr-4">
            {topic.lessons && topic.lessons.length > 0 ? (
              <div className="space-y-6">
                {topic.lessons.map((lesson, index) => (
                  <div key={lesson.id || index} className="lesson-content prose prose-invert prose-sm max-w-none">
                    <ProcessedContent html={lesson.content} onFolkloreClick={setFolkloreTextId} onMoleculeClick={setMoleculeKey} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="lesson-content prose prose-invert prose-sm max-w-none">
                <ProcessedContent html={topic.theory} onFolkloreClick={setFolkloreTextId} onMoleculeClick={setMoleculeKey} />
              </div>
            )}
            
            {/* Блок с полными текстами */}
            {hasFolklore && (
              <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-500/40 rounded-xl p-4 mt-4">
                <h4 className="text-lg font-bold text-amber-300 mb-3 flex items-center gap-2">
                  <BookMarked className="w-5 h-5" />
                  📚 Полные тексты:
                </h4>
                <div className="space-y-2">
                  {allFolkloreTexts.map((folklore) => (
                    <button
                      key={folklore.id}
                      onClick={() => setFolkloreTextId(folklore.id)}
                      className="w-full flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-amber-500/20 transition-colors text-left group"
                    >
                      <span className="text-xl">{folkloreTypeIcons[folklore.type]}</span>
                      <div className="flex-1">
                        <div className="font-medium text-white group-hover:text-amber-200">{folklore.title}</div>
                        <div className="text-sm text-white/60">
                          {folklore.author || (folklore.type === 'fairy_tale' ? 'Русская народная сказка' : '')}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-amber-400" />
                    </button>
                  ))}
                </div>
              </div>
            )}
            
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
          {hasFolklore && allFolkloreTexts.length === 1 && (
            <Button onClick={() => setFolkloreTextId(allFolkloreTexts[0].id)} className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
              <BookMarked className="w-4 h-4 mr-2" />
              Читать полный текст
            </Button>
          )}
          {videoLesson && (
            <Button onClick={() => setShowVideoLesson(true)} className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
              <Video className="w-4 h-4 mr-2" />
              Видеоурок
            </Button>
          )}
          {hasTopicQuiz && (
            <Button onClick={() => setShowQuiz(true)} className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
              <Zap className="w-4 h-4 mr-2" />
              Тест ({topic.quiz?.length})
            </Button>
          )}
          {!hasTopicQuiz && hasSubjectQuiz && onOpenQuiz && (
            <Button onClick={() => { onOpenChange(false); onOpenQuiz(); }} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
              <Zap className="w-4 h-4 mr-2" />
              Тест
            </Button>
          )}
          <Button onClick={handleComplete} className="bg-gradient-to-r from-green-600 to-emerald-600">
            <CheckCircle className="w-4 h-4 mr-2" />
            Изучено
          </Button>
        </div>

        {showQuiz && hasTopicQuiz && (
          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center p-4 z-10">
            <MiniQuiz questions={topic.quiz!} onComplete={handleComplete} />
          </div>
        )}
      </DialogContent>
    </Dialog>
    <MoleculeModal open={!!moleculeKey} onOpenChange={() => setMoleculeKey(null)} moleculeKey={moleculeKey} />
  </>
  )
}
