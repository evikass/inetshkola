'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Timer, CheckCircle, XCircle, Trophy, BarChart3, 
  Clock, BookOpen, Target, ArrowRight, RotateCcw,
  TrendingUp, Award, AlertCircle
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface ExamQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  subject: string
  difficulty: 'basic' | 'advanced' | 'expert'
  topic: string
}

interface ExamResult {
  id: string
  date: string
  subject: string
  score: number
  total: number
  timeSpent: number
  type: 'oge' | 'ege'
}

// Примеры вопросов для ОГЭ/ЕГЭ
const OGE_QUESTIONS: ExamQuestion[] = [
  // Математика ОГЭ
  {
    id: 'oge-math-1',
    question: 'Найдите значение выражения: (3,6 - 1,2) : 0,6',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    explanation: '(3,6 - 1,2) : 0,6 = 2,4 : 0,6 = 4',
    subject: 'Математика',
    difficulty: 'basic',
    topic: 'Вычисления'
  },
  {
    id: 'oge-math-2',
    question: 'Решите уравнение: 2x + 5 = 17',
    options: ['4', '6', '8', '11'],
    correctAnswer: 1,
    explanation: '2x + 5 = 17 → 2x = 12 → x = 6',
    subject: 'Математика',
    difficulty: 'basic',
    topic: 'Уравнения'
  },
  {
    id: 'oge-math-3',
    question: 'Найдите площадь прямоугольника со сторонами 5 см и 8 см',
    options: ['13 см²', '26 см²', '40 см²', '45 см²'],
    correctAnswer: 2,
    explanation: 'S = a × b = 5 × 8 = 40 см²',
    subject: 'Математика',
    difficulty: 'basic',
    topic: 'Геометрия'
  },
  // Русский язык ОГЭ
  {
    id: 'oge-rus-1',
    question: 'В каком слове ударение падает на первый слог?',
    options: ['звони́т', 'по́звонит', 'позвони́т', 'звони́шь'],
    correctAnswer: 1,
    explanation: 'Правильное ударение: по́звонит. Ударение падает на первый слог.',
    subject: 'Русский язык',
    difficulty: 'basic',
    topic: 'Орфоэпия'
  },
  {
    id: 'oge-rus-2',
    question: 'В каком ряду во всех словах пропущена одна и та же буква?',
    options: ['пр..красный, пр..бежать, пр..морский', 'и..пользовать, и..бежать, бе..шумный', 'п..дписать, п..дбежать, пр..брежный', 'ра..смотреть, ра..бить, бе..покойный'],
    correctAnswer: 0,
    explanation: 'Во всех словах первого ряда пропущена буква "и": прекрасный, прибежать, приморский',
    subject: 'Русский язык',
    difficulty: 'advanced',
    topic: 'Орфография'
  },
  // История ОГЭ
  {
    id: 'oge-hist-1',
    question: 'В каком году было отменено крепостное право в России?',
    options: ['1855', '1861', '1865', '1870'],
    correctAnswer: 1,
    explanation: 'Крепостное право в России было отменено в 1861 году Александром II.',
    subject: 'История',
    difficulty: 'basic',
    topic: 'XIX век'
  },
]

const EGE_QUESTIONS: ExamQuestion[] = [
  // Математика ЕГЭ
  {
    id: 'ege-math-1',
    question: 'Найдите производную функции f(x) = x³ - 2x² + 5x - 1',
    options: ['3x² - 4x + 5', '3x² - 4x - 1', 'x⁴ - 2x³ + 5x²', 'x² - 2x + 5'],
    correctAnswer: 0,
    explanation: 'f\'(x) = (x³)\' - (2x²)\' + (5x)\' - (1)\' = 3x² - 4x + 5',
    subject: 'Математика',
    difficulty: 'advanced',
    topic: 'Производные'
  },
  {
    id: 'ege-math-2',
    question: 'Вычислите: log₂(8) + log₃(9)',
    options: ['5', '6', '7', '8'],
    correctAnswer: 0,
    explanation: 'log₂(8) = 3 (так как 2³ = 8), log₃(9) = 2 (так как 3² = 9). 3 + 2 = 5',
    subject: 'Математика',
    difficulty: 'advanced',
    topic: 'Логарифмы'
  },
  // Физика ЕГЭ
  {
    id: 'ege-phys-1',
    question: 'Тело массой 2 кг движется со скоростью 3 м/с. Чему равна его кинетическая энергия?',
    options: ['3 Дж', '6 Дж', '9 Дж', '18 Дж'],
    correctAnswer: 2,
    explanation: 'E_k = mv²/2 = 2 × 3² / 2 = 9 Дж',
    subject: 'Физика',
    difficulty: 'basic',
    topic: 'Механика'
  },
  {
    id: 'ege-phys-2',
    question: 'При изохорном процессе газу передано 500 Дж теплоты. Чему равно изменение внутренней энергии газа?',
    options: ['0 Дж', '250 Дж', '500 Дж', '1000 Дж'],
    correctAnswer: 2,
    explanation: 'При изохорном процессе V = const, работа не совершается (A = 0), поэтому Q = ΔU = 500 Дж',
    subject: 'Физика',
    difficulty: 'advanced',
    topic: 'Термодинамика'
  },
  // Информатика ЕГЭ
  {
    id: 'ege-inf-1',
    question: 'Сколько единиц в двоичной записи числа 15?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    explanation: '15₁₀ = 1111₂ - четыре единицы',
    subject: 'Информатика',
    difficulty: 'basic',
    topic: 'Системы счисления'
  },
]

interface Props {
  onScore?: (points: number) => void
  gradeId?: number
}

export default function ExamPrep({ onScore, gradeId = 9 }: Props) {
  const [examType, setExamType] = useState<'oge' | 'ege'>('oge')
  const [selectedSubject, setSelectedSubject] = useState<string>('all')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResult, setShowResult] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [testStarted, setTestStarted] = useState(false)
  const [results, setResults] = useState<ExamResult[]>([])
  const [showExplanation, setShowExplanation] = useState(false)
  
  const questions = examType === 'oge' ? OGE_QUESTIONS : EGE_QUESTIONS
  const filteredQuestions = selectedSubject === 'all' 
    ? questions 
    : questions.filter(q => q.subject === selectedSubject)
  
  // Загрузка результатов из localStorage
  useEffect(() => {
    const saved = localStorage.getItem('school-exam-results')
    if (saved) {
      const parsed = JSON.parse(saved)
      setResults(parsed)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  // Таймер
  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsRunning(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    
    return () => clearInterval(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning])
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }
  
  const startTest = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResult(false)
    setTimeLeft(filteredQuestions.length * 60) // 1 минута на вопрос
    setIsRunning(true)
    setTestStarted(true)
    setShowExplanation(false)
  }
  
  const handleAnswer = (answerIndex: number) => {
    const question = filteredQuestions[currentQuestion]
    setAnswers(prev => ({
      ...prev,
      [question.id]: answerIndex
    }))
    setShowExplanation(true)
  }
  
  const nextQuestion = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setShowExplanation(false)
    } else {
      handleFinishTest()
    }
  }
  
  const handleFinishTest = useCallback(() => {
    setIsRunning(false)
    setShowResult(true)
    
    const correctCount = filteredQuestions.filter(q => answers[q.id] === q.correctAnswer).length
    const totalTime = filteredQuestions.length * 60 - timeLeft
    
    const result: ExamResult = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      subject: selectedSubject,
      score: correctCount,
      total: filteredQuestions.length,
      timeSpent: totalTime,
      type: examType
    }
    
    const newResults = [...results, result]
    setResults(newResults)
    localStorage.setItem('school-exam-results', JSON.stringify(newResults))
    
    const xp = correctCount * 15
    onScore?.(xp)
  }, [filteredQuestions, answers, timeLeft, selectedSubject, examType, results, onScore])
  
  const getSubjectColor = (subject: string) => {
    const colors: Record<string, string> = {
      'Математика': 'from-blue-500 to-cyan-500',
      'Русский язык': 'from-red-500 to-pink-500',
      'История': 'from-amber-500 to-orange-500',
      'Физика': 'from-purple-500 to-violet-500',
      'Информатика': 'from-green-500 to-emerald-500'
    }
    return colors[subject] || 'from-gray-500 to-slate-500'
  }
  
  // Статистика
  const avgScore = results.length > 0 
    ? Math.round(results.reduce((sum, r) => sum + (r.score / r.total) * 100, 0) / results.length)
    : 0
  
  const totalTests = results.length
  
  if (!testStarted) {
    return (
      <Card className="p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-slate-500/30 backdrop-blur">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
              <Target className="w-6 h-6 text-yellow-400" />
              Подготовка к экзаменам
            </h2>
            <p className="text-slate-400 mt-1">ОГЭ и ЕГЭ — практические задания</p>
          </div>
          
          {/* Exam type selector */}
          <div className="flex justify-center gap-2">
            <Button
              variant={examType === 'oge' ? 'default' : 'outline'}
              onClick={() => setExamType('oge')}
              className={examType === 'oge' 
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' 
                : 'border-white/20 text-white hover:bg-white/10'
              }
            >
              ОГЭ (9 класс)
            </Button>
            <Button
              variant={examType === 'ege' ? 'default' : 'outline'}
              onClick={() => setExamType('ege')}
              className={examType === 'ege' 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                : 'border-white/20 text-white hover:bg-white/10'
              }
            >
              ЕГЭ (11 класс)
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 bg-white/5 rounded-xl text-center">
              <BarChart3 className="w-5 h-5 text-blue-400 mx-auto mb-1" />
              <div className="text-2xl font-bold text-white">{avgScore}%</div>
              <div className="text-xs text-slate-400">Средний балл</div>
            </div>
            <div className="p-3 bg-white/5 rounded-xl text-center">
              <Trophy className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
              <div className="text-2xl font-bold text-white">{totalTests}</div>
              <div className="text-xs text-slate-400">Тестов пройдено</div>
            </div>
            <div className="p-3 bg-white/5 rounded-xl text-center">
              <TrendingUp className="w-5 h-5 text-green-400 mx-auto mb-1" />
              <div className="text-2xl font-bold text-white">{results.filter(r => r.type === examType).length}</div>
              <div className="text-xs text-slate-400">{examType.toUpperCase()} тестов</div>
            </div>
          </div>
          
          {/* Subject selector */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-slate-300">Выберите предмет:</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant={selectedSubject === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedSubject('all')}
                className={selectedSubject === 'all' 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white' 
                  : 'border-white/20 text-white hover:bg-white/10'
                }
              >
                Все предметы
              </Button>
              {Array.from(new Set(questions.map(q => q.subject))).map(subject => (
                <Button
                  key={subject}
                  size="sm"
                  variant={selectedSubject === subject ? 'default' : 'outline'}
                  onClick={() => setSelectedSubject(subject)}
                  className={selectedSubject === subject 
                    ? `bg-gradient-to-r ${getSubjectColor(subject)} text-white` 
                    : 'border-white/20 text-white hover:bg-white/10'
                  }
                >
                  {subject}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Start button */}
          <div className="text-center">
            <Button
              onClick={startTest}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Начать тест ({filteredQuestions.length} вопросов)
            </Button>
          </div>
          
          {/* Recent results */}
          {results.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-slate-300">Последние результаты:</h3>
              {results.slice(-3).reverse().map(result => (
                <div key={result.id} className="p-3 bg-white/5 rounded-xl flex items-center justify-between">
                  <div>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                      result.type === 'oge' ? 'bg-blue-500/20 text-blue-300' : 'bg-purple-500/20 text-purple-300'
                    }`}>
                      {result.type.toUpperCase()}
                    </span>
                    <span className="ml-2 text-white">{result.subject === 'all' ? 'Все предметы' : result.subject}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white font-bold">{result.score}/{result.total}</span>
                    <span className="text-xs text-slate-400">{formatTime(result.timeSpent)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    )
  }
  
  if (showResult) {
    const correctCount = filteredQuestions.filter(q => answers[q.id] === q.correctAnswer).length
    const percentage = Math.round((correctCount / filteredQuestions.length) * 100)
    
    return (
      <Card className="p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-slate-500/30 backdrop-blur">
        <div className="space-y-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring' }}
          >
            {percentage >= 80 ? (
              <Trophy className="w-20 h-20 text-yellow-400 mx-auto" />
            ) : percentage >= 60 ? (
              <Award className="w-20 h-20 text-blue-400 mx-auto" />
            ) : (
              <AlertCircle className="w-20 h-20 text-orange-400 mx-auto" />
            )}
          </motion.div>
          
          <div>
            <h2 className="text-3xl font-bold text-white">
              {percentage >= 80 ? 'Отлично!' : percentage >= 60 ? 'Хорошо!' : 'Нужно повторить'}
            </h2>
            <p className="text-slate-400 mt-1">
              {examType.toUpperCase()} • {selectedSubject === 'all' ? 'Все предметы' : selectedSubject}
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-white/5 rounded-xl">
              <div className="text-3xl font-bold text-white">{correctCount}</div>
              <div className="text-sm text-slate-400">Правильных</div>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <div className="text-3xl font-bold text-white">{percentage}%</div>
              <div className="text-sm text-slate-400">Результат</div>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <div className="text-3xl font-bold text-white">{formatTime(filteredQuestions.length * 60 - timeLeft)}</div>
              <div className="text-sm text-slate-400">Время</div>
            </div>
          </div>
          
          {/* XP earned */}
          <div className="p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl">
            <div className="flex items-center justify-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-400" />
              <span className="text-xl font-bold text-yellow-400">+{correctCount * 15} XP</span>
            </div>
          </div>
          
          <div className="flex gap-2 justify-center">
            <Button
              variant="outline"
              onClick={() => {
                setTestStarted(false)
                setShowResult(false)
              }}
              className="border-white/20 text-white hover:bg-white/10"
            >
              К выбору теста
            </Button>
            <Button
              onClick={startTest}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Пройти ещё раз
            </Button>
          </div>
        </div>
      </Card>
    )
  }
  
  const question = filteredQuestions[currentQuestion]
  const selectedAnswer = answers[question?.id]
  const isCorrect = selectedAnswer === question?.correctAnswer
  
  return (
    <Card className="p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-slate-500/30 backdrop-blur">
      <div className="space-y-4">
        {/* Header with timer and progress */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 rounded text-xs font-bold ${
              examType === 'oge' ? 'bg-blue-500/20 text-blue-300' : 'bg-purple-500/20 text-purple-300'
            }`}>
              {examType.toUpperCase()}
            </span>
            <span className="text-sm text-slate-400">
              {question?.subject}
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-400" />
              <span className={`font-mono font-bold ${timeLeft < 60 ? 'text-red-400' : 'text-white'}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
        </div>
        
        {/* Progress */}
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Вопрос {currentQuestion + 1} из {filteredQuestions.length}</span>
            <span className="text-slate-400">{question?.topic}</span>
          </div>
          <Progress value={((currentQuestion + 1) / filteredQuestions.length) * 100} className="h-2" />
        </div>
        
        {/* Question */}
        <motion.div
          key={question?.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-4 bg-white/5 rounded-xl"
        >
          <p className="text-lg text-white font-medium">{question?.question}</p>
        </motion.div>
        
        {/* Options */}
        <div className="space-y-2">
          {question?.options.map((option, index) => {
            const isSelected = selectedAnswer === index
            const isCorrectOption = index === question.correctAnswer
            const showCorrectness = showExplanation
            
            return (
              <motion.button
                key={index}
                onClick={() => !showExplanation && handleAnswer(index)}
                disabled={showExplanation}
                className={`w-full p-4 rounded-xl text-left transition-all ${
                  showCorrectness
                    ? isCorrectOption
                      ? 'bg-green-500/20 border-2 border-green-500 text-green-300'
                      : isSelected
                        ? 'bg-red-500/20 border-2 border-red-500 text-red-300'
                        : 'bg-white/5 text-white/50'
                    : isSelected
                      ? 'bg-indigo-500/20 border-2 border-indigo-500 text-white'
                      : 'bg-white/5 border-2 border-white/10 text-white hover:bg-white/10'
                }`}
                whileHover={!showExplanation ? { scale: 1.02 } : {}}
                whileTap={!showExplanation ? { scale: 0.98 } : {}}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    showCorrectness && isCorrectOption
                      ? 'bg-green-500 text-white'
                      : showCorrectness && isSelected && !isCorrectOption
                        ? 'bg-red-500 text-white'
                        : 'bg-white/10 text-white'
                  }`}>
                    {showCorrectness && isCorrectOption ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : showCorrectness && isSelected && !isCorrectOption ? (
                      <XCircle className="w-5 h-5" />
                    ) : (
                      String.fromCharCode(65 + index)
                    )}
                  </span>
                  <span>{option}</span>
                </div>
              </motion.button>
            )
          })}
        </div>
        
        {/* Explanation */}
        <AnimatePresence>
          {showExplanation && question && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`p-4 rounded-xl ${
                isCorrect ? 'bg-green-500/10 border border-green-500/30' : 'bg-orange-500/10 border border-orange-500/30'
              }`}
            >
              <p className={`font-medium mb-1 ${isCorrect ? 'text-green-300' : 'text-orange-300'}`}>
                {isCorrect ? '✓ Правильно!' : '✗ Неправильно'}
              </p>
              <p className="text-white/70 text-sm">{question.explanation}</p>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Navigation */}
        <div className="flex justify-between pt-2">
          <Button
            variant="ghost"
            onClick={() => {
              setTestStarted(false)
              setIsRunning(false)
            }}
            className="text-slate-400 hover:text-white hover:bg-white/10"
          >
            Завершить
          </Button>
          
          {showExplanation && (
            <Button
              onClick={nextQuestion}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
            >
              {currentQuestion < filteredQuestions.length - 1 ? (
                <>Далее <ArrowRight className="w-4 h-4 ml-1" /></>
              ) : (
                <>Завершить тест</>
              )}
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}
