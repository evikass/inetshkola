'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { 
  Shield, TrendingUp, Clock, Award, BookOpen, Target, Calendar,
  BarChart3, Activity, Star, CheckCircle, XCircle,
  AlertTriangle, Bell, Settings, Eye, Lock, User, ChevronRight,
  Flame, Medal, Trophy, Brain, Heart, Printer, Download,
  Zap, Users, CalendarDays, TrendingDown, Minus, Sparkles,
  MessageSquare, Lightbulb, ArrowUp, ArrowDown, RefreshCw
} from 'lucide-react'
import WeeklyProgressChart, { CircularProgress } from './WeeklyProgressChart'
import DonateSection from './DonateSection'

// Типы данных
interface SubjectProgress {
  name: string
  timeSpent: number
  topicsCompleted: number
  score: number
  progress: number
  lastActive: string
  trend: 'up' | 'down' | 'stable'
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlockedAt: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

interface StudySession {
  date: string
  duration: number
  subject: string
  topicsCompleted: number
}

interface ParentReport {
  weekStart: string
  weekEnd: string
  totalStudyTime: number
  topicsCompleted: number
  quizzesTaken: number
  averageScore: number
  subjects: SubjectProgress[]
  achievements: Achievement[]
  streak: number
  recommendations: string[]
  studySessions: StudySession[]
}

interface ParentSettings {
  dailyLimit: number
  weeklyGoal: number
  notifications: boolean
  restrictContent: boolean
  pinCode: string
  emailReports: boolean
  reportFrequency: 'daily' | 'weekly' | 'monthly'
}

// Демо-данные
const DEMO_SUBJECTS: SubjectProgress[] = [
  { name: 'Математика', timeSpent: 145, topicsCompleted: 12, score: 87, progress: 45, lastActive: 'сегодня', trend: 'up' },
  { name: 'Русский язык', timeSpent: 98, topicsCompleted: 8, score: 92, progress: 38, lastActive: 'вчера', trend: 'up' },
  { name: 'Окружающий мир', timeSpent: 67, topicsCompleted: 5, score: 78, progress: 25, lastActive: '2 дня назад', trend: 'stable' },
  { name: 'Литература', timeSpent: 45, topicsCompleted: 4, score: 85, progress: 20, lastActive: '3 дня назад', trend: 'up' },
  { name: 'Английский язык', timeSpent: 32, topicsCompleted: 3, score: 72, progress: 15, lastActive: 'недавно', trend: 'down' },
]

const DEMO_ACHIEVEMENTS: Achievement[] = [
  { id: '1', title: 'Первые шаги', description: 'Завершите первую тему', icon: '🌱', unlockedAt: '2 дня назад', rarity: 'common' },
  { id: '2', title: 'Любознательный', description: 'Изучите 10 тем', icon: '🔍', unlockedAt: 'вчера', rarity: 'rare' },
  { id: '3', title: 'Неделя ударно', description: '7 дней подряд', icon: '🔥', unlockedAt: 'сегодня', rarity: 'epic' },
]

const DEMO_RECOMMENDATIONS = [
  'Отличный прогресс в Математике! Продолжайте в том же духе 🌟',
  'Рекомендуется уделить больше внимания Английскому языку - результат ниже среднего',
  'Попробуйте заниматься в одно и то же время для выработки привычки',
  'Цель на неделю: завершить 3 темы по Окружающему миру',
  'Серия 7 дней - это отлично! Постарайтесь не прерывать её 🎯',
]

const RARITY_COLORS: Record<string, string> = {
  common: 'bg-gray-500/20 border-gray-500/50',
  rare: 'bg-blue-500/20 border-blue-500/50',
  epic: 'bg-purple-500/20 border-purple-500/50',
  legendary: 'bg-amber-500/20 border-amber-500/50'
}

const RARITY_TEXT_COLORS: Record<string, string> = {
  common: 'text-gray-400',
  rare: 'text-blue-400',
  epic: 'text-purple-400',
  legendary: 'text-amber-400'
}

// Функции инициализации
const initializeReport = (): ParentReport => {
  if (typeof window === 'undefined') {
    return {
      weekStart: new Date().toISOString(),
      weekEnd: new Date().toISOString(),
      totalStudyTime: 387,
      topicsCompleted: 32,
      quizzesTaken: 12,
      averageScore: 83,
      subjects: DEMO_SUBJECTS,
      achievements: DEMO_ACHIEVEMENTS,
      streak: 7,
      recommendations: DEMO_RECOMMENDATIONS,
      studySessions: []
    }
  }
  
  const saved = localStorage.getItem('school-parent-report')
  if (!saved) {
    return {
      weekStart: new Date().toISOString(),
      weekEnd: new Date().toISOString(),
      totalStudyTime: 387,
      topicsCompleted: 32,
      quizzesTaken: 12,
      averageScore: 83,
      subjects: DEMO_SUBJECTS,
      achievements: DEMO_ACHIEVEMENTS,
      streak: 7,
      recommendations: DEMO_RECOMMENDATIONS,
      studySessions: []
    }
  }
  
  try {
    return JSON.parse(saved)
  } catch {
    return {
      weekStart: new Date().toISOString(),
      weekEnd: new Date().toISOString(),
      totalStudyTime: 387,
      topicsCompleted: 32,
      quizzesTaken: 12,
      averageScore: 83,
      subjects: DEMO_SUBJECTS,
      achievements: DEMO_ACHIEVEMENTS,
      streak: 7,
      recommendations: DEMO_RECOMMENDATIONS,
      studySessions: []
    }
  }
}

const initializeSettings = (): ParentSettings => {
  if (typeof window === 'undefined') {
    return {
      dailyLimit: 120,
      weeklyGoal: 100,
      notifications: true,
      restrictContent: false,
      pinCode: '',
      emailReports: true,
      reportFrequency: 'weekly'
    }
  }
  
  const saved = localStorage.getItem('school-parent-settings')
  if (!saved) {
    return {
      dailyLimit: 120,
      weeklyGoal: 100,
      notifications: true,
      restrictContent: false,
      pinCode: '',
      emailReports: true,
      reportFrequency: 'weekly'
    }
  }
  
  try {
    return JSON.parse(saved)
  } catch {
    return {
      dailyLimit: 120,
      weeklyGoal: 100,
      notifications: true,
      restrictContent: false,
      pinCode: '',
      emailReports: true,
      reportFrequency: 'weekly'
    }
  }
}

export default function ParentDashboard() {
  const [report, setReport] = useState<ParentReport>(initializeReport)
  const [settings, setSettings] = useState<ParentSettings>(initializeSettings)
  const [activeTab, setActiveTab] = useState('overview')
  const [isPrinting, setIsPrinting] = useState(false)
  const printRef = useRef<HTMLDivElement>(null)
  
  // Сохранение настроек
  useEffect(() => {
    localStorage.setItem('school-parent-settings', JSON.stringify(settings))
  }, [settings])
  
  useEffect(() => {
    localStorage.setItem('school-parent-report', JSON.stringify(report))
  }, [report])
  
  // Форматирование времени
  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes} мин`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return mins > 0 ? `${hours} ч ${mins} мин` : `${hours} ч`
  }
  
  // Оценка успеваемости
  const getPerformanceLevel = () => {
    const avg = report.averageScore
    if (avg >= 90) return { label: 'Отлично', color: 'text-green-400', emoji: '🏆', bg: 'bg-green-500/20' }
    if (avg >= 75) return { label: 'Хорошо', color: 'text-blue-400', emoji: '👍', bg: 'bg-blue-500/20' }
    if (avg >= 60) return { label: 'Удовлетворительно', color: 'text-yellow-400', emoji: '📚', bg: 'bg-yellow-500/20' }
    return { label: 'Требует внимания', color: 'text-red-400', emoji: '⚠️', bg: 'bg-red-500/20' }
  }
  
  // Вычисление привычек обучения
  const getStudyHabits = () => {
    const avgSessionDuration = Math.round(report.totalStudyTime / Math.max(report.studySessions.length || 5, 1))
    const bestStudyTime = '15:00 - 17:00' // Демо-данные
    const consistencyScore = Math.min(100, report.streak * 14 + 30) // ~100% за 5 дней подряд
    
    return {
      avgSessionDuration,
      bestStudyTime,
      consistencyScore,
      totalSessions: report.studySessions.length || 12,
      mostProductiveDay: 'Вторник',
      weeklyTrend: report.averageScore > 80 ? 'up' : report.averageScore > 60 ? 'stable' : 'down'
    }
  }
  
  // Получение сильных и слабых сторон
  const getStrengthsAndWeaknesses = () => {
    const sorted = [...report.subjects].sort((a, b) => b.score - a.score)
    return {
      strengths: sorted.slice(0, 2).map(s => s.name),
      weaknesses: sorted.slice(-2).reverse().map(s => s.name)
    }
  }
  
  // Печать отчёта
  const handlePrint = () => {
    setIsPrinting(true)
    setTimeout(() => {
      window.print()
      setIsPrinting(false)
    }, 100)
  }
  
  // Экспорт в PDF (простая реализация - создание текстового файла)
  const handleExportPDF = () => {
    const content = `
ИНЕТШКОЛА - Отчёт о прогрессе
================================

Период: ${new Date(report.weekStart).toLocaleDateString('ru-RU')} - ${new Date(report.weekEnd).toLocaleDateString('ru-RU')}

ОБЩАЯ СТАТИСТИКА
----------------
Общее время обучения: ${formatTime(report.totalStudyTime)}
Изучено тем: ${report.topicsCompleted}
Пройдено тестов: ${report.quizzesTaken}
Средний балл: ${report.averageScore}%
Серия: ${report.streak} дней

ПРОГРЕСС ПО ПРЕДМЕТАМ
--------------------
${report.subjects.map(s => `${s.name}: ${s.progress}% пройдено, оценка ${s.score}%`).join('\n')}

ДОСТИЖЕНИЯ
----------
${report.achievements.map(a => `${a.icon} ${a.title}: ${a.description}`).join('\n')}

РЕКОМЕНДАЦИИ
------------
${report.recommendations.join('\n')}

---
Отчёт создан: ${new Date().toLocaleString('ru-RU')}
    `
    
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `inetshkola-report-${new Date().toISOString().split('T')[0]}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
  
  // Обновление рекомендаций
  const refreshRecommendations = () => {
    const newRecs = [
      'Попробуйте интерактивные упражнения для закрепления материала 🎮',
      'Рекомендуется повторить пройденные темы перед тестом',
      'Отличная серия! Продолжайте заниматься каждый день 🌟',
      'Фокус на этой неделе: улучшить результаты по слабым предметам',
      'Используйте таймер Помодоро для эффективного обучения ⏰',
    ]
    setReport(prev => ({
      ...prev,
      recommendations: [...newRecs.sort(() => Math.random() - 0.5).slice(0, 3), ...prev.recommendations.slice(2)]
    }))
  }
  
  const performance = getPerformanceLevel()
  const habits = getStudyHabits()
  const { strengths, weaknesses } = getStrengthsAndWeaknesses()
  
  return (
    <div ref={printRef} className="space-y-4">
      {/* Стили для печати */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-content, .print-content * {
            visibility: visible;
          }
          .print-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            color: black !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
      
      {/* Заголовок */}
      <Card className={`bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border-purple-500/30 print-content ${isPrinting ? 'print-mode' : ''}`}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/30 rounded-lg">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Родительская панель</h2>
                <p className="text-sm text-gray-400">Мониторинг прогресса и отчёты</p>
              </div>
            </div>
            <div className="flex items-center gap-2 no-print">
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Printer className="w-4 h-4 mr-1" />
                Печать
              </Button>
              <Button variant="outline" size="sm" onClick={handleExportPDF}>
                <Download className="w-4 h-4 mr-1" />
                Экспорт
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-5 lg:grid-cols-6 h-auto no-print">
          <TabsTrigger value="overview" className="text-xs sm:text-sm">📊 Обзор</TabsTrigger>
          <TabsTrigger value="weekly" className="text-xs sm:text-sm">📈 Неделя</TabsTrigger>
          <TabsTrigger value="subjects" className="text-xs sm:text-sm">📚 Предметы</TabsTrigger>
          <TabsTrigger value="achievements" className="text-xs sm:text-sm">🏆 Награды</TabsTrigger>
          <TabsTrigger value="settings" className="text-xs sm:text-sm hidden lg:flex">⚙️ Настройки</TabsTrigger>
          <TabsTrigger value="donate" className="text-xs sm:text-sm">💖 Поддержка</TabsTrigger>
        </TabsList>

        {/* Обзор */}
        <TabsContent value="overview" className="space-y-4 print-content">
          {/* Общая статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-3 text-center">
                <Clock className="w-6 h-6 mx-auto mb-1 text-blue-400" />
                <p className="text-xl sm:text-2xl font-bold">{formatTime(report.totalStudyTime)}</p>
                <p className="text-xs text-gray-400">Время обучения</p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-3 text-center">
                <BookOpen className="w-6 h-6 mx-auto mb-1 text-green-400" />
                <p className="text-xl sm:text-2xl font-bold">{report.topicsCompleted}</p>
                <p className="text-xs text-gray-400">Тем изучено</p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-3 text-center">
                <Target className="w-6 h-6 mx-auto mb-1 text-purple-400" />
                <p className="text-xl sm:text-2xl font-bold">{report.quizzesTaken}</p>
                <p className="text-xs text-gray-400">Тестов пройдено</p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-3 text-center">
                <Flame className="w-6 h-6 mx-auto mb-1 text-orange-400" />
                <p className="text-xl sm:text-2xl font-bold">{report.streak}</p>
                <p className="text-xs text-gray-400">Дней подряд</p>
              </CardContent>
            </Card>
          </div>

          {/* Общая оценка и серия */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Общая успеваемость</p>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{performance.emoji}</span>
                      <div>
                        <p className={`text-xl font-bold ${performance.color}`}>{performance.label}</p>
                        <p className="text-sm text-gray-400">Средний балл: {report.averageScore}%</p>
                      </div>
                    </div>
                  </div>
                  <CircularProgress 
                    value={report.averageScore} 
                    maxValue={100} 
                    size={70} 
                    strokeWidth={6}
                    color={report.averageScore >= 80 ? 'green' : report.averageScore >= 60 ? 'yellow' : 'red'}
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Серия занятий</p>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">🔥</span>
                      <div>
                        <p className="text-xl font-bold text-orange-400">{report.streak} дней</p>
                        <p className="text-sm text-gray-400">Лучший результат: 14 дней</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50">
                      <Zap className="w-3 h-3 mr-1" />
                      Отлично!
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Сильные и слабые стороны */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-green-500/10 border-green-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-green-400 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Сильные стороны
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {strengths.map((subject, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-green-400" />
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-yellow-500/10 border-yellow-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-yellow-400 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Требует внимания
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {weaknesses.map((subject, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Привычки обучения */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-white flex items-center gap-2">
                <Brain className="w-4 h-4 text-purple-400" />
                Привычки обучения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <Clock className="w-5 h-5 mx-auto mb-1 text-blue-400" />
                  <p className="text-lg font-bold">{formatTime(habits.avgSessionDuration)}</p>
                  <p className="text-xs text-gray-400">Средняя сессия</p>
                </div>
                <div className="text-center">
                  <CalendarDays className="w-5 h-5 mx-auto mb-1 text-purple-400" />
                  <p className="text-lg font-bold">{habits.bestStudyTime}</p>
                  <p className="text-xs text-gray-400">Лучшее время</p>
                </div>
                <div className="text-center">
                  <Activity className="w-5 h-5 mx-auto mb-1 text-green-400" />
                  <p className="text-lg font-bold">{habits.consistencyScore}%</p>
                  <p className="text-xs text-gray-400">Регулярность</p>
                </div>
                <div className="text-center">
                  <Zap className="w-5 h-5 mx-auto mb-1 text-yellow-400" />
                  <p className="text-lg font-bold">{habits.mostProductiveDay}</p>
                  <p className="text-xs text-gray-400">Продуктивный день</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Рекомендации */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm text-white flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-400" />
                  Рекомендации
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={refreshRecommendations} className="no-print">
                  <RefreshCw className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {report.recommendations.slice(0, 3).map((rec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                  >
                    <MessageSquare className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{rec}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Недельная активность */}
        <TabsContent value="weekly" className="space-y-4 print-content">
          <WeeklyProgressChart />
          
          {/* Сравнение с предыдущей неделей */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                Сравнение с прошлой неделей
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                  <ArrowUp className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-sm font-semibold">Время обучения</p>
                    <p className="text-xs text-green-400">+23% больше</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                  <ArrowUp className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-sm font-semibold">Тем изучено</p>
                    <p className="text-xs text-green-400">+15% больше</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                  <Minus className="w-5 h-5 text-yellow-400" />
                  <div>
                    <p className="text-sm font-semibold">Средний балл</p>
                    <p className="text-xs text-yellow-400">Без изменений</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Предметы */}
        <TabsContent value="subjects" className="space-y-4 print-content">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-lg text-white">Прогресс по предметам</CardTitle>
              <CardDescription className="text-gray-400">Детальная статистика по каждому предмету</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-4">
                  {report.subjects.map((subject, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 rounded-lg border border-white/10 bg-white/5"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{subject.name}</h4>
                          {subject.trend === 'up' && <ArrowUp className="w-4 h-4 text-green-400" />}
                          {subject.trend === 'down' && <ArrowDown className="w-4 h-4 text-red-400" />}
                          {subject.trend === 'stable' && <Minus className="w-4 h-4 text-yellow-400" />}
                        </div>
                        <Badge className={
                          subject.score >= 90 ? 'bg-green-500' :
                          subject.score >= 75 ? 'bg-blue-500' :
                          subject.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }>
                          {subject.score}%
                        </Badge>
                      </div>
                      
                      <Progress value={subject.progress} className="mb-3 h-2" />
                      
                      <div className="grid grid-cols-3 gap-2 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          {subject.progress}% пройдено
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatTime(subject.timeSpent)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          {subject.topicsCompleted} тем
                        </span>
                      </div>
                      
                      <p className="text-xs text-gray-500 mt-2">
                        Последняя активность: {subject.lastActive}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Достижения */}
        <TabsContent value="achievements" className="space-y-4 print-content">
          {/* Последние достижения */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                Недавно полученные
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {report.achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-xl border ${RARITY_COLORS[achievement.rarity]}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{achievement.icon}</span>
                      <div>
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-xs text-gray-400">{achievement.description}</p>
                        <p className={`text-xs mt-1 ${RARITY_TEXT_COLORS[achievement.rarity]}`}>
                          {achievement.rarity === 'legendary' ? '★ Легендарный' :
                           achievement.rarity === 'epic' ? '◆ Эпический' :
                           achievement.rarity === 'rare' ? '◆ Редкий' : '○ Обычный'}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Получено: {achievement.unlockedAt}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Следующие цели */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-400" />
                Следующие цели
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { title: 'Эрудит', description: 'Изучить 25 тем', progress: 32, max: 25, icon: '📚', reward: '100 XP' },
                  { title: 'Месяц упорства', description: '30 дней подряд', progress: 7, max: 30, icon: '🔥', reward: '500 XP' },
                  { title: 'Отличник', description: 'Получить 90%+ в 10 тестах', progress: 5, max: 10, icon: '⭐', reward: '250 XP' },
                ].map((goal, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-2xl">{goal.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{goal.title}</h4>
                        <Badge variant="outline" className="text-xs">{goal.reward}</Badge>
                      </div>
                      <p className="text-xs text-gray-400">{goal.description}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <Progress value={(goal.progress / goal.max) * 100} className="h-1.5 flex-1" />
                        <span className="text-xs text-gray-400">{goal.progress}/{goal.max}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Коллекция бейджей */}
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Всего достижений</h4>
                  <p className="text-sm text-gray-400">Разблокировано: {report.achievements.length} из 24</p>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={(report.achievements.length / 24) * 100} className="w-24 h-2" />
                  <span className="text-sm font-medium">{Math.round((report.achievements.length / 24) * 100)}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Настройки */}
        <TabsContent value="settings" className="space-y-4 no-print">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-lg text-white">Родительский контроль</CardTitle>
              <CardDescription className="text-gray-400">Настройки ограничений и уведомлений</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Дневной лимит */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="font-medium">Дневной лимит времени</p>
                    <p className="text-sm text-gray-400">Максимальное время занятий в день</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSettings(prev => ({ 
                      ...prev, 
                      dailyLimit: Math.max(30, prev.dailyLimit - 30) 
                    }))}
                  >
                    -
                  </Button>
                  <span className="w-16 text-center font-mono">{formatTime(settings.dailyLimit)}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSettings(prev => ({ 
                      ...prev, 
                      dailyLimit: Math.min(300, prev.dailyLimit + 30) 
                    }))}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Недельная цель */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="font-medium">Недельная цель (очки)</p>
                    <p className="text-sm text-gray-400">Целевое количество очков в неделю</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSettings(prev => ({ 
                      ...prev, 
                      weeklyGoal: Math.max(50, prev.weeklyGoal - 25) 
                    }))}
                  >
                    -
                  </Button>
                  <span className="w-16 text-center font-mono">{settings.weeklyGoal}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSettings(prev => ({ 
                      ...prev, 
                      weeklyGoal: Math.min(500, prev.weeklyGoal + 25) 
                    }))}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Уведомления */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="font-medium">Push-уведомления</p>
                    <p className="text-sm text-gray-400">Получать напоминания о занятиях</p>
                  </div>
                </div>
                <Button
                  variant={settings.notifications ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSettings(prev => ({ 
                    ...prev, 
                    notifications: !prev.notifications 
                  }))}
                >
                  {settings.notifications ? 'Включены' : 'Выключены'}
                </Button>
              </div>

              {/* Email отчёты */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-indigo-400" />
                  <div>
                    <p className="font-medium">Email-отчёты</p>
                    <p className="text-sm text-gray-400">Регулярные отчёты о прогрессе</p>
                  </div>
                </div>
                <Button
                  variant={settings.emailReports ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSettings(prev => ({ 
                    ...prev, 
                    emailReports: !prev.emailReports 
                  }))}
                >
                  {settings.emailReports ? 'Включены' : 'Выключены'}
                </Button>
              </div>

              {/* Безопасный режим */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-red-400" />
                  <div>
                    <p className="font-medium">Безопасный режим</p>
                    <p className="text-sm text-gray-400">Ограничить доступ к некоторым функциям</p>
                  </div>
                </div>
                <Button
                  variant={settings.restrictContent ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSettings(prev => ({ 
                    ...prev, 
                    restrictContent: !prev.restrictContent 
                  }))}
                >
                  {settings.restrictContent ? 'Включён' : 'Выключен'}
                </Button>
              </div>

              <Separator />

              {/* PIN-код */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-amber-400" />
                  <div>
                    <p className="font-medium">PIN-код</p>
                    <p className="text-sm text-gray-400">Защита настроек паролем</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  {settings.pinCode ? 'Изменить' : 'Установить'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Экспорт отчёта */}
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-indigo-400" />
                  <div>
                    <p className="font-medium">Экспорт отчёта</p>
                    <p className="text-sm text-gray-400">Скачать подробный отчёт о прогрессе</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handlePrint}>
                    <Printer className="w-4 h-4 mr-1" />
                    Печать
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleExportPDF}>
                    <Download className="w-4 h-4 mr-1" />
                    Скачать
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Поддержка проекта */}
        <TabsContent value="donate" className="space-y-4 no-print">
          <DonateSection />
        </TabsContent>
      </Tabs>
    </div>
  )
}
