'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import {
  Plus, Trash2, GripVertical, Save, Eye, Copy, Printer,
  Settings, ChevronDown, ChevronUp, Check, X, Award, Clock,
  BookOpen, GraduationCap, Shuffle, Lightbulb
} from 'lucide-react'
import { motion, AnimatePresence, Reorder } from 'framer-motion'

// Types
interface QuizQuestion {
  id: string
  type: 'multiple' | 'truefalse' | 'fillblank' | 'matching'
  question: string
  options?: string[]
  correctAnswer: number | string
  explanation?: string
  points: number
}

interface CustomQuiz {
  id: string
  title: string
  description: string
  subject: string
  gradeLevel: number
  timeLimit?: number
  randomizeOrder: boolean
  showAnswersAfter: boolean
  questions: QuizQuestion[]
  createdAt: string
}

interface QuizBuilderProps {
  onSave?: (quiz: CustomQuiz) => void
}

const SUBJECTS = [
  'Математика', 'Русский язык', 'Литература', 'История',
  'Биология', 'География', 'Физика', 'Химия',
  'Информатика', 'Английский язык', 'Обществознание'
]

const GRADE_LEVELS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const TIME_OPTIONS = [
  { value: 0, label: 'Без ограничений' },
  { value: 5, label: '5 минут' },
  { value: 10, label: '10 минут' },
  { value: 15, label: '15 минут' },
  { value: 20, label: '20 минут' },
  { value: 30, label: '30 минут' },
  { value: 45, label: '45 минут' },
  { value: 60, label: '60 минут' },
]

const QUESTION_TYPE_LABELS = {
  multiple: { label: 'Множественный выбор', icon: '📝' },
  truefalse: { label: 'Верно/Неверно', icon: '✅' },
  fillblank: { label: 'Заполнить пропуск', icon: '🔤' },
  matching: { label: 'Соответствие', icon: '🔗' }
}

// Generate unique ID
const generateId = () => Math.random().toString(36).substr(2, 9)

// Create empty question
const createEmptyQuestion = (type: QuizQuestion['type']): QuizQuestion => ({
  id: generateId(),
  type,
  question: '',
  options: type === 'multiple' ? ['', '', '', ''] : type === 'matching' ? ['', ''] : undefined,
  correctAnswer: type === 'truefalse' ? 1 : type === 'matching' ? '' : 0,
  explanation: '',
  points: 1
})

// Initialize state from localStorage
function getInitialSavedQuizzes(): CustomQuiz[] {
  if (typeof window === 'undefined') return []
  const saved = localStorage.getItem('customQuizzes')
  return saved ? JSON.parse(saved) : []
}

export default function QuizBuilder({ onSave }: QuizBuilderProps) {
  const [quiz, setQuiz] = useState<CustomQuiz>({
    id: generateId(),
    title: '',
    description: '',
    subject: 'Математика',
    gradeLevel: 5,
    timeLimit: 0,
    randomizeOrder: false,
    showAnswersAfter: true,
    questions: [],
    createdAt: new Date().toISOString()
  })
  
  const [savedQuizzes, setSavedQuizzes] = useState<CustomQuiz[]>(getInitialSavedQuizzes)
  const [showPreview, setShowPreview] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null)
  const [previewAnswers, setPreviewAnswers] = useState<Record<string, number | string>>({})
  const [copiedCode, setCopiedCode] = useState(false)
  
  // Save quiz to localStorage
  const saveQuiz = () => {
    const updatedQuiz = { ...quiz, createdAt: new Date().toISOString() }
    const existingIndex = savedQuizzes.findIndex(q => q.id === quiz.id)
    
    let updated: CustomQuiz[]
    if (existingIndex >= 0) {
      updated = [...savedQuizzes]
      updated[existingIndex] = updatedQuiz
    } else {
      updated = [...savedQuizzes, updatedQuiz]
    }
    
    setSavedQuizzes(updated)
    localStorage.setItem('customQuizzes', JSON.stringify(updated))
    onSave?.(updatedQuiz)
  }
  
  // Add question
  const addQuestion = (type: QuizQuestion['type']) => {
    const newQuestion = createEmptyQuestion(type)
    setQuiz(prev => ({
      ...prev,
      questions: [...prev.questions, newQuestion]
    }))
    setActiveQuestionId(newQuestion.id)
  }
  
  // Update question
  const updateQuestion = (id: string, updates: Partial<QuizQuestion>) => {
    setQuiz(prev => ({
      ...prev,
      questions: prev.questions.map(q => 
        q.id === id ? { ...q, ...updates } : q
      )
    }))
  }
  
  // Delete question
  const deleteQuestion = (id: string) => {
    setQuiz(prev => ({
      ...prev,
      questions: prev.questions.filter(q => q.id !== id)
    }))
  }
  
  // Reorder questions
  const reorderQuestions = (newOrder: QuizQuestion[]) => {
    setQuiz(prev => ({ ...prev, questions: newOrder }))
  }
  
  // Copy quiz code
  const copyQuizCode = () => {
    const code = `QUIZ_${quiz.id.toUpperCase()}`
    navigator.clipboard.writeText(code)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }
  
  // Print quiz
  const printQuiz = () => {
    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${quiz.title}</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              h1 { color: #333; }
              .question { margin: 20px 0; padding: 10px; border-bottom: 1px solid #eee; }
              .options { margin-left: 20px; }
              .correct { color: green; font-weight: bold; }
            </style>
          </head>
          <body>
            <h1>${quiz.title}</h1>
            <p><strong>Предмет:</strong> ${quiz.subject} | <strong>Класс:</strong> ${quiz.gradeLevel}</p>
            ${quiz.description ? `<p>${quiz.description}</p>` : ''}
            ${quiz.questions.map((q, i) => `
              <div class="question">
                <p><strong>${i + 1}. ${q.question}</strong> (${q.points} б.)</p>
                ${q.type === 'multiple' && q.options ? `
                  <div class="options">
                    ${q.options.map((opt, j) => `
                      <p>${String.fromCharCode(65 + j)}) ${opt} ${q.correctAnswer === j ? '<span class="correct">✓</span>' : ''}</p>
                    `).join('')}
                  </div>
                ` : ''}
                ${q.type === 'truefalse' ? `
                  <p class="options">
                    Верно ${q.correctAnswer === 1 ? '<span class="correct">✓</span>' : ''} | 
                    Неверно ${q.correctAnswer === 0 ? '<span class="correct">✓</span>' : ''}
                  </p>
                ` : ''}
                ${q.type === 'fillblank' ? `
                  <p class="options">Ответ: <span class="correct">${q.correctAnswer}</span></p>
                ` : ''}
                ${q.explanation ? `<p><em>Объяснение: ${q.explanation}</em></p>` : ''}
              </div>
            `).join('')}
          </body>
        </html>
      `)
      printWindow.document.close()
      printWindow.print()
    }
  }
  
  // Calculate total points
  const totalPoints = useMemo(() => 
    quiz.questions.reduce((sum, q) => sum + q.points, 0),
    [quiz.questions]
  )
  
  // Preview component
  if (showPreview) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Предпросмотр: {quiz.title || 'Без названия'}</h2>
          <Button variant="ghost" onClick={() => setShowPreview(false)}>
            <X className="w-4 h-4 mr-1" /> Закрыть
          </Button>
        </div>
        
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-4">
            <div className="flex gap-2 mb-4 flex-wrap">
              <Badge>{quiz.subject}</Badge>
              <Badge variant="outline">{quiz.gradeLevel} класс</Badge>
              {quiz.timeLimit > 0 && (
                <Badge variant="outline"><Clock className="w-3 h-3 mr-1" />{quiz.timeLimit} мин</Badge>
              )}
              <Badge variant="outline">{quiz.questions.length} вопросов</Badge>
              <Badge variant="outline">{totalPoints} баллов</Badge>
            </div>
            {quiz.description && <p className="text-white/70 mb-4">{quiz.description}</p>}
          </CardContent>
        </Card>
        
        <ScrollArea className="h-[500px]">
          <div className="space-y-4 pr-4">
            {quiz.questions.map((q, i) => (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-2 mb-3">
                      <Badge variant="outline">{i + 1}</Badge>
                      <span className="text-sm">{QUESTION_TYPE_LABELS[q.type].icon}</span>
                      <span className="text-white">{q.question}</span>
                      <Badge variant="secondary" className="ml-auto">{q.points} б.</Badge>
                    </div>
                    
                    {q.type === 'multiple' && q.options && (
                      <div className="space-y-2 ml-6">
                        {q.options.map((opt, j) => (
                          <button
                            key={j}
                            onClick={() => setPreviewAnswers(prev => ({ ...prev, [q.id]: j }))}
                            className={`
                              w-full text-left p-2 rounded-lg transition-all
                              ${previewAnswers[q.id] === j 
                                ? 'bg-purple-500/30 border-purple-400' 
                                : 'bg-white/5 hover:bg-white/10'}
                              border border-white/10
                            `}
                          >
                            {String.fromCharCode(65 + j)}) {opt}
                          </button>
                        ))}
                      </div>
                    )}
                    
                    {q.type === 'truefalse' && (
                      <div className="flex gap-2 ml-6">
                        {['Неверно', 'Верно'].map((label, j) => (
                          <button
                            key={j}
                            onClick={() => setPreviewAnswers(prev => ({ ...prev, [q.id]: j }))}
                            className={`
                              flex-1 p-2 rounded-lg transition-all
                              ${previewAnswers[q.id] === j 
                                ? 'bg-purple-500/30 border-purple-400' 
                                : 'bg-white/5 hover:bg-white/10'}
                              border border-white/10
                            `}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    )}
                    
                    {q.type === 'fillblank' && (
                      <div className="ml-6">
                        <Input
                          placeholder="Введите ответ..."
                          value={previewAnswers[q.id]?.toString() || ''}
                          onChange={e => setPreviewAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                          className="bg-white/5 border-white/20"
                        />
                      </div>
                    )}
                    
                    {q.explanation && (
                      <div className="mt-3 p-2 bg-yellow-500/10 rounded text-sm text-yellow-200">
                        <Lightbulb className="w-4 h-4 inline mr-1" />
                        {q.explanation}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </div>
    )
  }
  
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl font-bold text-white">Конструктор тестов</h2>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setShowSettings(!showSettings)}>
            <Settings className="w-4 h-4 mr-1" />
            Настройки
          </Button>
          <Button variant="outline" size="sm" onClick={() => setShowPreview(true)} disabled={quiz.questions.length === 0}>
            <Eye className="w-4 h-4 mr-1" />
            Предпросмотр
          </Button>
          <Button size="sm" onClick={saveQuiz} disabled={!quiz.title || quiz.questions.length === 0}>
            <Save className="w-4 h-4 mr-1" />
            Сохранить
          </Button>
        </div>
      </div>
      
      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm text-white/70 mb-1 block">Предмет</label>
                    <select
                      value={quiz.subject}
                      onChange={e => setQuiz(prev => ({ ...prev, subject: e.target.value }))}
                      className="w-full p-2 rounded bg-white/5 border border-white/20 text-white"
                    >
                      {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-white/70 mb-1 block">Класс</label>
                    <select
                      value={quiz.gradeLevel}
                      onChange={e => setQuiz(prev => ({ ...prev, gradeLevel: Number(e.target.value) }))}
                      className="w-full p-2 rounded bg-white/5 border border-white/20 text-white"
                    >
                      {GRADE_LEVELS.map(g => <option key={g} value={g}>{g} класс</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-white/70 mb-1 block">Время</label>
                    <select
                      value={quiz.timeLimit}
                      onChange={e => setQuiz(prev => ({ ...prev, timeLimit: Number(e.target.value) }))}
                      className="w-full p-2 rounded bg-white/5 border border-white/20 text-white"
                    >
                      {TIME_OPTIONS.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <label className="flex items-center gap-2 text-sm text-white/70 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={quiz.randomizeOrder}
                      onChange={e => setQuiz(prev => ({ ...prev, randomizeOrder: e.target.checked }))}
                      className="rounded"
                    />
                    <Shuffle className="w-4 h-4" />
                    Случайный порядок
                  </label>
                  <label className="flex items-center gap-2 text-sm text-white/70 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={quiz.showAnswersAfter}
                      onChange={e => setQuiz(prev => ({ ...prev, showAnswersAfter: e.target.checked }))}
                      className="rounded"
                    />
                    <Check className="w-4 h-4" />
                    Показать ответы после
                  </label>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Quiz Info */}
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-4 space-y-3">
          <Input
            placeholder="Название теста..."
            value={quiz.title}
            onChange={e => setQuiz(prev => ({ ...prev, title: e.target.value }))}
            className="text-lg font-bold bg-transparent border-none p-0 focus-visible:ring-0"
          />
          <Textarea
            placeholder="Описание теста (необязательно)..."
            value={quiz.description}
            onChange={e => setQuiz(prev => ({ ...prev, description: e.target.value }))}
            className="bg-white/5 border-white/20 min-h-[60px]"
          />
          <div className="flex gap-2 items-center text-sm text-white/50">
            <BookOpen className="w-4 h-4" />
            {quiz.subject} • {quiz.gradeLevel} класс
            {quiz.timeLimit > 0 && ` • ${quiz.timeLimit} мин`}
            <Badge variant="outline" className="ml-auto">{quiz.questions.length} вопросов • {totalPoints} баллов</Badge>
          </div>
        </CardContent>
      </Card>
      
      {/* Add Question Buttons */}
      <div className="flex gap-2 flex-wrap">
        {(Object.keys(QUESTION_TYPE_LABELS) as QuizQuestion['type'][]).map(type => (
          <Button
            key={type}
            variant="outline"
            size="sm"
            onClick={() => addQuestion(type)}
            className="border-white/20"
          >
            <Plus className="w-4 h-4 mr-1" />
            {QUESTION_TYPE_LABELS[type].icon} {QUESTION_TYPE_LABELS[type].label}
          </Button>
        ))}
      </div>
      
      {/* Questions List */}
      <Reorder.Group
        axis="y"
        values={quiz.questions}
        onReorder={reorderQuestions}
        className="space-y-3"
      >
        <AnimatePresence>
          {quiz.questions.map((q, i) => (
            <Reorder.Item
              key={q.id}
              value={q}
              className="cursor-grab active:cursor-grabbing"
            >
              <Card className={`
                bg-white/5 border-white/10 transition-all
                ${activeQuestionId === q.id ? 'ring-2 ring-purple-400' : ''}
              `}>
                <CardContent className="p-4">
                  {/* Question Header */}
                  <div className="flex items-center gap-2 mb-3">
                    <GripVertical className="w-4 h-4 text-white/30" />
                    <Badge variant="outline">{i + 1}</Badge>
                    <span className="text-sm">{QUESTION_TYPE_LABELS[q.type].icon}</span>
                    <Input
                      placeholder="Введите вопрос..."
                      value={q.question}
                      onChange={e => updateQuestion(q.id, { question: e.target.value })}
                      className="flex-1 bg-transparent border-none focus-visible:ring-0"
                    />
                    <Input
                      type="number"
                      min={1}
                      max={10}
                      value={q.points}
                      onChange={e => updateQuestion(q.id, { points: Number(e.target.value) })}
                      className="w-16 bg-white/5 border-white/20 text-center"
                    />
                    <span className="text-sm text-white/50">баллов</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setActiveQuestionId(activeQuestionId === q.id ? null : q.id)}
                      className="h-8 w-8"
                    >
                      {activeQuestionId === q.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteQuestion(q.id)}
                      className="h-8 w-8 text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Expanded Question Editor */}
                  <AnimatePresence>
                    {activeQuestionId === q.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-6 space-y-3"
                      >
                        {/* Multiple Choice Options */}
                        {q.type === 'multiple' && q.options && (
                          <div className="space-y-2">
                            <label className="text-sm text-white/70">Варианты ответа:</label>
                            {q.options.map((opt, j) => (
                              <div key={j} className="flex items-center gap-2">
                                <button
                                  onClick={() => updateQuestion(q.id, { correctAnswer: j })}
                                  className={`
                                    w-6 h-6 rounded-full flex items-center justify-center
                                    ${q.correctAnswer === j ? 'bg-green-500' : 'bg-white/10'}
                                  `}
                                >
                                  {q.correctAnswer === j && <Check className="w-4 h-4" />}
                                </button>
                                <Input
                                  placeholder={`Вариант ${String.fromCharCode(65 + j)}`}
                                  value={opt}
                                  onChange={e => {
                                    const newOptions = [...q.options!]
                                    newOptions[j] = e.target.value
                                    updateQuestion(q.id, { options: newOptions })
                                  }}
                                  className="flex-1 bg-white/5 border-white/20"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {/* True/False */}
                        {q.type === 'truefalse' && (
                          <div className="flex gap-4">
                            <button
                              onClick={() => updateQuestion(q.id, { correctAnswer: 0 })}
                              className={`
                                px-4 py-2 rounded-lg transition-all
                                ${q.correctAnswer === 0 
                                  ? 'bg-red-500/30 border-red-400' 
                                  : 'bg-white/5 border-white/20'}
                                border
                              `}
                            >
                              <X className="w-4 h-4 inline mr-1" /> Неверно
                            </button>
                            <button
                              onClick={() => updateQuestion(q.id, { correctAnswer: 1 })}
                              className={`
                                px-4 py-2 rounded-lg transition-all
                                ${q.correctAnswer === 1 
                                  ? 'bg-green-500/30 border-green-400' 
                                  : 'bg-white/5 border-white/20'}
                                border
                              `}
                            >
                              <Check className="w-4 h-4 inline mr-1" /> Верно
                            </button>
                          </div>
                        )}
                        
                        {/* Fill in the blank */}
                        {q.type === 'fillblank' && (
                          <div>
                            <label className="text-sm text-white/70 mb-1 block">Правильный ответ:</label>
                            <Input
                              placeholder="Введите правильный ответ..."
                              value={q.correctAnswer.toString()}
                              onChange={e => updateQuestion(q.id, { correctAnswer: e.target.value })}
                              className="bg-white/5 border-white/20"
                            />
                          </div>
                        )}
                        
                        {/* Matching */}
                        {q.type === 'matching' && q.options && (
                          <div className="space-y-2">
                            <label className="text-sm text-white/70">Пары для соответствия:</label>
                            <div className="grid grid-cols-2 gap-2">
                              <Input
                                placeholder="Термин 1"
                                value={q.options[0]}
                                onChange={e => updateQuestion(q.id, { options: [e.target.value, q.options![1]] })}
                                className="bg-white/5 border-white/20"
                              />
                              <Input
                                placeholder="Определение 1"
                                value={q.correctAnswer.toString()}
                                onChange={e => updateQuestion(q.id, { correctAnswer: e.target.value })}
                                className="bg-white/5 border-white/20"
                              />
                            </div>
                          </div>
                        )}
                        
                        {/* Explanation */}
                        <div>
                          <label className="text-sm text-white/70 mb-1 block">
                            <Lightbulb className="w-4 h-4 inline mr-1" />
                            Объяснение (необязательно):
                          </label>
                          <Textarea
                            placeholder="Объяснение правильного ответа..."
                            value={q.explanation || ''}
                            onChange={e => updateQuestion(q.id, { explanation: e.target.value })}
                            className="bg-white/5 border-white/20 min-h-[60px]"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </Reorder.Item>
          ))}
        </AnimatePresence>
      </Reorder.Group>
      
      {/* Empty State */}
      {quiz.questions.length === 0 && (
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-8 text-center">
            <Award className="w-12 h-12 mx-auto mb-4 text-white/30" />
            <h3 className="text-lg font-medium text-white/70 mb-2">Нет вопросов</h3>
            <p className="text-sm text-white/50 mb-4">Добавьте вопросы, используя кнопки выше</p>
          </CardContent>
        </Card>
      )}
      
      {/* Actions */}
      {quiz.questions.length > 0 && (
        <div className="flex gap-2 justify-end">
          <Button variant="outline" size="sm" onClick={copyQuizCode}>
            {copiedCode ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
            {copiedCode ? 'Скопировано!' : 'Код теста'}
          </Button>
          <Button variant="outline" size="sm" onClick={printQuiz}>
            <Printer className="w-4 h-4 mr-1" />
            Печать
          </Button>
        </div>
      )}
    </div>
  )
}
