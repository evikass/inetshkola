'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Checkbox } from '@/components/ui/checkbox'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  Calculator, BookOpen, Globe, Palette, Music, Dumbbell, FlaskConical, Atom, 
  Map, Users, Shield, Cpu, Lightbulb, GraduationCap, Trophy, Star, Target,
  CheckCircle, XCircle, Zap, Award, Brain, Heart, Leaf, Telescope, Briefcase,
  Wallet, Smartphone, Code, Languages, Search, ChevronRight, RotateCcw,
  Bookmark, Clock, TrendingUp, Medal, Crown, Sparkles, Book, Pencil, Ruler,
  Flame, Gift, Calendar, Settings, Play, Pause, Volume2, VolumeX, Home,
  Layers, FileText, Pen, LucideIcon, ChevronDown, X, RefreshCw, Send,
  BarChart3, PieChart, Activity, Timer, CreditCard, Sticker, Sun, Moon,
  Download, Upload
} from 'lucide-react'

// ==================== ИМПОРТ ТИПОВ И КОНСТАНТ ====================
import type { Topic, QuizQuestion, Subject, Grade, Achievement, DailyTask, UserStats, Rank } from '@/data/types'
import { RANKS, XP_PER_LEVEL, STREAK_BONUS } from '@/data/constants'

// ==================== ИМПОРТ ДАННЫХ КЛАССОВ ====================
import { gradesData as schoolData } from '@/data/classes'

// Достижения
const achievementsData: Achievement[] = [
  { id: 'first_step', title: 'Первый шаг', description: 'Изучите первую тему', icon: <Star className="w-6 h-6" />, unlocked: false, condition: 'complete_1_topic', points: 50, rarity: 'common' },
  { id: 'explorer', title: 'Исследователь', description: 'Изучите 10 тем', icon: <Target className="w-6 h-6" />, unlocked: false, condition: 'complete_10_topics', points: 100, rarity: 'common' },
  { id: 'scholar', title: 'Учёный', description: 'Изучите 50 тем', icon: <BookOpen className="w-6 h-6" />, unlocked: false, condition: 'complete_50_topics', points: 300, rarity: 'rare' },
  { id: 'expert', title: 'Эксперт', description: 'Изучите 100 тем', icon: <GraduationCap className="w-6 h-6" />, unlocked: false, condition: 'complete_100_topics', points: 500, rarity: 'rare' },
  { id: 'master_200', title: 'Мастер знаний', description: 'Изучите 200 тем', icon: <Brain className="w-6 h-6" />, unlocked: false, condition: 'complete_200_topics', points: 750, rarity: 'epic' },
  { id: 'quiz_master', title: 'Мастер тестов', description: 'Пройдите 5 квизов', icon: <Trophy className="w-6 h-6" />, unlocked: false, condition: 'complete_5_quizzes', points: 150, rarity: 'common' },
  { id: 'quiz_pro', title: 'Профи тестов', description: 'Пройдите 20 квизов', icon: <Award className="w-6 h-6" />, unlocked: false, condition: 'complete_20_quizzes', points: 400, rarity: 'rare' },
  { id: 'quiz_champion', title: 'Чемпион тестов', description: 'Пройдите 50 квизов', icon: <Crown className="w-6 h-6" />, unlocked: false, condition: 'complete_50_quizzes', points: 700, rarity: 'epic' },
  { id: 'perfect_score', title: 'Идеальный результат', description: 'Получите 100% в квизе', icon: <Medal className="w-6 h-6" />, unlocked: false, condition: 'perfect_quiz', points: 200, rarity: 'rare' },
  { id: 'perfect_5', title: '5 идеальных', description: 'Получите 100% в 5 квизах', icon: <Sparkles className="w-6 h-6" />, unlocked: false, condition: '5_perfect_quizzes', points: 500, rarity: 'epic' },
  { id: 'perfect_10', title: 'Совершенство', description: 'Получите 100% в 10 квизах', icon: <Sun className="w-6 h-6" />, unlocked: false, condition: '10_perfect_quizzes', points: 900, rarity: 'legendary' },
  { id: 'streak_3', title: '3 дня подряд', description: 'Занимайтесь 3 дня подряд', icon: <Flame className="w-6 h-6" />, unlocked: false, condition: '3_day_streak', points: 100, rarity: 'common' },
  { id: 'streak_7', title: 'Неделя знаний', description: 'Занимайтесь 7 дней подряд', icon: <Zap className="w-6 h-6" />, unlocked: false, condition: '7_day_streak', points: 300, rarity: 'rare' },
  { id: 'streak_14', title: 'Две недели', description: 'Занимайтесь 14 дней подряд', icon: <Heart className="w-6 h-6" />, unlocked: false, condition: '14_day_streak', points: 500, rarity: 'rare' },
  { id: 'streak_30', title: 'Месяц упорства', description: 'Занимайтесь 30 дней подряд', icon: <Crown className="w-6 h-6" />, unlocked: false, condition: '30_day_streak', points: 800, rarity: 'epic' },
  { id: 'streak_100', title: 'Сотня дней', description: 'Занимайтесь 100 дней подряд', icon: <Gift className="w-6 h-6" />, unlocked: false, condition: '100_day_streak', points: 1500, rarity: 'legendary' },
  { id: 'all_classes', title: 'Все классы', description: 'Откройте все классы', icon: <Layers className="w-6 h-6" />, unlocked: false, condition: 'visit_all_classes', points: 250, rarity: 'epic' },
  { id: 'math_master', title: 'Математик', description: 'Изучите все темы по математике в одном классе', icon: <Calculator className="w-6 h-6" />, unlocked: false, condition: 'complete_math_subject', points: 400, rarity: 'rare' },
  { id: 'russian_master', title: 'Филолог', description: 'Изучите все темы по русскому языку в одном классе', icon: <Book className="w-6 h-6" />, unlocked: false, condition: 'complete_russian_subject', points: 400, rarity: 'rare' },
  { id: 'english_master', title: 'Полиглот', description: 'Изучите все темы по английскому языку в одном классе', icon: <Languages className="w-6 h-6" />, unlocked: false, condition: 'complete_english_subject', points: 400, rarity: 'rare' },
  { id: 'level_5', title: 'Уровень 5', description: 'Достигните 5 уровня', icon: <TrendingUp className="w-6 h-6" />, unlocked: false, condition: 'level_5', points: 150, rarity: 'common' },
  { id: 'level_10', title: 'Уровень 10', description: 'Достигните 10 уровня', icon: <TrendingUp className="w-6 h-6" />, unlocked: false, condition: 'level_10', points: 300, rarity: 'rare' },
  { id: 'level_25', title: 'Уровень 25', description: 'Достигните 25 уровня', icon: <Heart className="w-6 h-6" />, unlocked: false, condition: 'level_25', points: 600, rarity: 'epic' },
  { id: 'level_50', title: 'Уровень 50', description: 'Достигните 50 уровня', icon: <Crown className="w-6 h-6" />, unlocked: false, condition: 'level_50', points: 1200, rarity: 'legendary' },
  { id: 'speed_learner', title: 'Быстрый ученик', description: 'Изучите 5 тем за один день', icon: <Zap className="w-6 h-6" />, unlocked: false, condition: '5_topics_one_day', points: 250, rarity: 'rare' },
  { id: 'night_owl', title: 'Ночная сова', description: 'Занимайтесь после полуночи', icon: <Moon className="w-6 h-6" />, unlocked: false, condition: 'study_at_night', points: 100, rarity: 'common' },
  { id: 'early_bird', title: 'Ранняя пташка', description: 'Занимайтесь до 7 утра', icon: <Sun className="w-6 h-6" />, unlocked: false, condition: 'study_early', points: 100, rarity: 'common' },
  { id: 'genius', title: 'Гений', description: 'Изучите все темы', icon: <Sparkles className="w-6 h-6" />, unlocked: false, condition: 'complete_all', points: 2000, rarity: 'legendary' }
]

// Ежедневные задания
const dailyTasksData: DailyTask[] = [
  { id: 'daily_topics', title: 'Изучить темы', description: 'Изучите 3 темы сегодня', target: 3, progress: 0, reward: 30, completed: false, type: 'topics' },
  { id: 'daily_quiz', title: 'Пройти тест', description: 'Пройдите 1 квиз сегодня', target: 1, progress: 0, reward: 25, completed: false, type: 'quizzes' },
  { id: 'daily_points', title: 'Набрать очки', description: 'Наберите 50 очков сегодня', target: 50, progress: 0, reward: 20, completed: false, type: 'points' },
  { id: 'daily_perfect', title: 'Идеальный тест', description: 'Получите 100% в квизе', target: 1, progress: 0, reward: 50, completed: false, type: 'perfect' },
  { id: 'daily_subjects', title: 'Разнообразие', description: 'Изучите темы из 2 разных предметов', target: 2, progress: 0, reward: 35, completed: false, type: 'subjects' },
  { id: 'daily_time', title: 'Усердие', description: 'Занимайтесь 15 минут', target: 15, progress: 0, reward: 40, completed: false, type: 'time' }
]

// ==================== ГЛАВНЫЙ КОМПОНЕНТ ====================
export default function SchoolApp() {
  // Состояния
  const [selectedGrade, setSelectedGrade] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [progress, setProgress] = useState<Record<string, Record<string, boolean>>>({})
  const [userStats, setUserStats] = useState<UserStats>({
    level: 1,
    experience: 0,
    totalPoints: 0,
    topicsCompleted: 0,
    quizzesCompleted: 0,
    perfectQuizzes: 0,
    streak: 0,
    maxStreak: 0,
    lastActiveDate: '',
    totalStudyTime: 0,
    rank: 'Новичок'
  })
  const [achievements, setAchievements] = useState<Achievement[]>(achievementsData)
  const [dailyTasks, setDailyTasks] = useState<DailyTask[]>(dailyTasksData)
  const [quizDialogOpen, setQuizDialogOpen] = useState(false)
  const [currentQuiz, setCurrentQuiz] = useState<QuizQuestion[]>([])
  const [currentQuizSubject, setCurrentQuizSubject] = useState<string>('')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [quizScore, setQuizScore] = useState(0)
  const [activeTab, setActiveTab] = useState('subjects')
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null)
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)
  const [topicDialogOpen, setTopicDialogOpen] = useState(false)
  const [visitedClasses, setVisitedClasses] = useState<Set<number>>(new Set([1]))
  const [showConfetti, setShowConfetti] = useState(false)
  
  // Таймер обучения
  const [timerActive, setTimerActive] = useState(false)
  const [timerSeconds, setTimerSeconds] = useState(0)
  const [showExportDialog, setShowExportDialog] = useState(false)

  // Загрузка данных из localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('schoolProgress_v2')
    const savedStats = localStorage.getItem('schoolStats_v2')
    const savedAchievements = localStorage.getItem('schoolAchievements_v2')
    const savedVisited = localStorage.getItem('visitedClasses_v2')
    const savedTasks = localStorage.getItem('dailyTasks_v2')
    const savedLastDate = localStorage.getItem('lastActiveDate_v2')
    
    if (savedProgress) setProgress(JSON.parse(savedProgress))
    if (savedStats) setUserStats(JSON.parse(savedStats))
    if (savedAchievements) setAchievements(JSON.parse(savedAchievements))
    if (savedVisited) setVisitedClasses(new Set(JSON.parse(savedVisited)))
    if (savedTasks) setDailyTasks(JSON.parse(savedTasks))
    
    // Проверка стрика
    const today = new Date().toDateString()
    const lastDate = savedLastDate || ''
    
    if (lastDate !== today) {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      
      if (lastDate === yesterday.toDateString()) {
        // Продолжение стрика
        setUserStats(prev => ({
          ...prev,
          streak: prev.streak + 1,
          maxStreak: Math.max(prev.maxStreak, prev.streak + 1),
          lastActiveDate: today
        }))
      } else if (lastDate !== '') {
        // Сброс стрика
        setUserStats(prev => ({
          ...prev,
          streak: 1,
          lastActiveDate: today
        }))
        setDailyTasks(dailyTasksData) // Сброс ежедневных заданий
      } else {
        setUserStats(prev => ({ ...prev, lastActiveDate: today }))
      }
      
      localStorage.setItem('lastActiveDate_v2', today)
    }
  }, [])

  // Сохранение данных
  useEffect(() => {
    localStorage.setItem('schoolProgress_v2', JSON.stringify(progress))
    localStorage.setItem('schoolStats_v2', JSON.stringify(userStats))
    localStorage.setItem('schoolAchievements_v2', JSON.stringify(achievements))
    localStorage.setItem('visitedClasses_v2', JSON.stringify([...visitedClasses]))
    localStorage.setItem('dailyTasks_v2', JSON.stringify(dailyTasks))
  }, [progress, userStats, achievements, visitedClasses, dailyTasks])

  // Таймер обучения
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (timerActive) {
      interval = setInterval(() => {
        setTimerSeconds(s => s + 1)
      }, 1000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [timerActive])

  // Форматирование времени
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  // Экспорт прогресса
  const exportProgress = useCallback(() => {
    const data = {
      progress,
      userStats,
      achievements,
      visitedClasses: [...visitedClasses],
      dailyTasks,
      exportDate: new Date().toISOString()
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `inetshkola-progress-${new Date().toLocaleDateString('ru-RU')}.json`
    a.click()
    URL.revokeObjectURL(url)
  }, [progress, userStats, achievements, visitedClasses, dailyTasks])

  // Импорт прогресса
  const importProgress = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string)
        if (data.progress) setProgress(data.progress)
        if (data.userStats) setUserStats(data.userStats)
        if (data.achievements) setAchievements(data.achievements)
        if (data.visitedClasses) setVisitedClasses(new Set(data.visitedClasses))
        if (data.dailyTasks) setDailyTasks(data.dailyTasks)
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 3000)
      } catch (err) {
        alert('Ошибка при импорте файла')
      }
    }
    reader.readAsText(file)
  }, [])

  // Подсчёт общего прогресса
  const overallProgress = useMemo(() => {
    let total = 0
    let completed = 0
    schoolData.forEach(grade => {
      grade.subjects.forEach(subject => {
        total += subject.topics.length
        subject.topics.forEach(topic => {
          if (progress[subject.id]?.[topic.id]) completed++
        })
      })
    })
    return total > 0 ? Math.round((completed / total) * 100) : 0
  }, [progress])

  // Подсчёт тем
  const totalTopicsCompleted = useMemo(() => {
    let completed = 0
    schoolData.forEach(grade => {
      grade.subjects.forEach(subject => {
        subject.topics.forEach(topic => {
          if (progress[subject.id]?.[topic.id]) completed++
        })
      })
    })
    return completed
  }, [progress])

  // Определение ранга
  const getCurrentRank = useCallback((level: number) => {
    let currentRank = RANKS[0]
    for (const rank of RANKS) {
      if (level >= rank.minLevel) currentRank = rank
    }
    return currentRank
  }, [])

  // Определение следующего ранга
  const getNextRank = useCallback((level: number) => {
    const currentIndex = RANKS.findIndex(rank => rank.minLevel > level)
    return currentIndex !== -1 ? RANKS[currentIndex] : null
  }, [])

  // Прогресс до следующего ранга
  const getRankProgress = useCallback((level: number) => {
    const currentRankIndex = RANKS.findIndex(rank => rank.minLevel > level) - 1
    if (currentRankIndex === RANKS.length - 2 || currentRankIndex === -1) return 100
    const currentMinLevel = RANKS[Math.max(0, currentRankIndex)].minLevel
    const nextRank = RANKS[currentRankIndex + 1]
    if (!nextRank) return 100
    const progress = ((level - currentMinLevel) / (nextRank.minLevel - currentMinLevel)) * 100
    return Math.min(100, Math.max(0, progress))
  }, [])

  // Добавление опыта
  const addExperience = useCallback((amount: number) => {
    setUserStats(prev => {
      let newExp = prev.experience + amount
      let newLevel = prev.level
      let newPoints = prev.totalPoints + amount
      
      // Уровни
      while (newExp >= XP_PER_LEVEL) {
        newExp -= XP_PER_LEVEL
        newLevel++
      }
      
      const rank = getCurrentRank(newLevel)
      
      return {
        ...prev,
        experience: newExp,
        level: newLevel,
        totalPoints: newPoints,
        rank: rank.name
      }
    })
  }, [getCurrentRank])

  // Переключение темы
  const toggleTopic = useCallback((subjectId: string, topic: Topic) => {
    const wasCompleted = progress[subjectId]?.[topic.id]
    
    setProgress(prev => {
      const newProgress = { ...prev }
      if (!newProgress[subjectId]) newProgress[subjectId] = {}
      newProgress[subjectId][topic.id] = !wasCompleted
      return newProgress
    })
    
    if (!wasCompleted) {
      const points = topic.difficulty === 'easy' ? 15 : topic.difficulty === 'medium' ? 25 : 40
      addExperience(points)
      
      // Обновление ежедневных заданий
      setDailyTasks(prev => prev.map(task => {
        if (task.type === 'topics' && !task.completed) {
          const newProgress = task.progress + 1
          return {
            ...task,
            progress: newProgress,
            completed: newProgress >= task.target
          }
        }
        if (task.type === 'points' && !task.completed) {
          const newProgress = task.progress + points
          return {
            ...task,
            progress: newProgress,
            completed: newProgress >= task.target
          }
        }
        return task
      }))
    }
    
    setUserStats(prev => ({
      ...prev,
      topicsCompleted: wasCompleted ? prev.topicsCompleted - 1 : prev.topicsCompleted + 1
    }))
  }, [progress, addExperience])

  // Проверка достижений
  useEffect(() => {
    const newAchievements = [...achievements]
    let changed = false
    
    const updateAchievement = (id: string, condition: boolean) => {
      const idx = newAchievements.findIndex(a => a.id === id)
      if (idx !== -1 && !newAchievements[idx].unlocked && condition) {
        newAchievements[idx].unlocked = true
        newAchievements[idx].unlockedAt = new Date().toISOString()
        changed = true
        addExperience(newAchievements[idx].points)
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 3000)
      }
    }
    
    updateAchievement('first_step', totalTopicsCompleted >= 1)
    updateAchievement('explorer', totalTopicsCompleted >= 10)
    updateAchievement('scholar', totalTopicsCompleted >= 50)
    updateAchievement('expert', totalTopicsCompleted >= 100)
    updateAchievement('master_200', totalTopicsCompleted >= 200)
    updateAchievement('quiz_master', userStats.quizzesCompleted >= 5)
    updateAchievement('quiz_pro', userStats.quizzesCompleted >= 20)
    updateAchievement('perfect_score', userStats.perfectQuizzes >= 1)
    updateAchievement('perfect_5', userStats.perfectQuizzes >= 5)
    updateAchievement('streak_3', userStats.streak >= 3)
    updateAchievement('streak_7', userStats.streak >= 7)
    updateAchievement('streak_30', userStats.streak >= 30)
    updateAchievement('all_classes', visitedClasses.size >= 12)
    updateAchievement('level_10', userStats.level >= 10)
    updateAchievement('level_25', userStats.level >= 25)
    updateAchievement('genius', totalTopicsCompleted >= 500)
    
    if (changed) setAchievements(newAchievements)
  }, [totalTopicsCompleted, userStats.quizzesCompleted, userStats.streak, visitedClasses.size, achievements, addExperience])

  // Прогресс по предмету
  const getSubjectProgress = useCallback((subject: Subject) => {
    const completed = subject.topics.filter(t => progress[subject.id]?.[t.id]).length
    return Math.round((completed / subject.topics.length) * 100)
  }, [progress])

  // Начать квиз
  const startQuiz = useCallback((subject: Subject) => {
    if (subject.quiz && subject.quiz.length > 0) {
      setCurrentQuiz(subject.quiz)
      setCurrentQuizSubject(subject.title)
      setCurrentQuestionIndex(0)
      setSelectedAnswer(null)
      setShowResult(false)
      setQuizScore(0)
      setQuizDialogOpen(true)
    }
  }, [])

  // Ответить на вопрос
  const answerQuestion = useCallback((answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
    setShowResult(true)
    
    if (answerIndex === currentQuiz[currentQuestionIndex].correctAnswer) {
      setQuizScore(s => s + 1)
    }
  }, [showResult, currentQuiz, currentQuestionIndex])

  // Следующий вопрос
  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < currentQuiz.length - 1) {
      setCurrentQuestionIndex(i => i + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      const finalScore = quizScore + (selectedAnswer === currentQuiz[currentQuestionIndex].correctAnswer ? 1 : 0)
      const isPerfect = finalScore === currentQuiz.length
      
      if (isPerfect) {
        const idx = achievements.findIndex(a => a.id === 'perfect_score')
        if (idx !== -1 && !achievements[idx].unlocked) {
          const newAchievements = [...achievements]
          newAchievements[idx].unlocked = true
          newAchievements[idx].unlockedAt = new Date().toISOString()
          setAchievements(newAchievements)
          addExperience(newAchievements[idx].points)
          setUserStats(prev => ({ ...prev, perfectQuizzes: prev.perfectQuizzes + 1 }))
        }
      }
      
      // Начисление очков
      const totalPoints = currentQuiz.reduce((sum, q) => sum + q.points, 0)
      const earnedPoints = currentQuiz.slice(0, currentQuestionIndex + 1).reduce((sum, q, i) => {
        // Простая логика: за правильные ответы
        return sum + (i < currentQuestionIndex && i < quizScore ? q.points : 0)
      }, 0) + (selectedAnswer === currentQuiz[currentQuestionIndex].correctAnswer ? currentQuiz[currentQuestionIndex].points : 0)
      
      addExperience(earnedPoints)
      
      setUserStats(prev => ({
        ...prev,
        quizzesCompleted: prev.quizzesCompleted + 1
      }))
      
      // Обновление ежедневных заданий
      setDailyTasks(prev => prev.map(task => {
        if (task.type === 'quizzes' && !task.completed) {
          return { ...task, progress: task.progress + 1, completed: true }
        }
        if (task.type === 'points' && !task.completed) {
          const newProgress = task.progress + earnedPoints
          return { ...task, progress: newProgress, completed: newProgress >= task.target }
        }
        return task
      }))
      
      setQuizDialogOpen(false)
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
    }
  }, [currentQuestionIndex, currentQuiz, selectedAnswer, quizScore, achievements, addExperience])

  // Выбор класса
  const selectGrade = useCallback((gradeId: number) => {
    setSelectedGrade(gradeId)
    setVisitedClasses(prev => new Set([...prev, gradeId]))
    setExpandedSubject(null)
  }, [])

  // Фильтрация предметов
  const filteredSubjects = useMemo(() => {
    const grade = schoolData.find(g => g.id === selectedGrade)
    if (!grade) return []
    
    if (!searchQuery) return grade.subjects
    
    return grade.subjects.filter(subject => 
      subject.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subject.topics.some(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  }, [selectedGrade, searchQuery])

  const currentGrade = schoolData.find(g => g.id === selectedGrade)
  const currentRank = getCurrentRank(userStats.level)
  const nextRank = getNextRank(userStats.level)
  const rankProgress = getRankProgress(userStats.level)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Конфетти */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              <span className="text-2xl">
                {['🎉', '⭐', '🏆', '✨', '🌟', '💫', '🎊'][Math.floor(Math.random() * 7)]}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Шапка */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg shadow-purple-500/30">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">ИНЕТШКОЛА</h1>
                <div className="flex items-center gap-2 text-sm text-purple-300">
                  <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r ${currentRank.gradient || 'from-gray-500 to-gray-600'} bg-opacity-20 border border-white/10`}>
                    <span className="text-base">{currentRank.icon}</span>
                    <span className="font-medium">{currentRank.name}</span>
                  </span>
                  <span className="text-white/30">•</span>
                  <span>Уровень {userStats.level}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Стрик */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30">
                <Flame className="w-4 h-4 text-orange-400" />
                <span className="font-bold text-orange-400">{userStats.streak}</span>
              </div>
              
              {/* Уровень */}
              <div className="hidden sm:flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
                      style={{ width: `${(userStats.experience / XP_PER_LEVEL) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-400">{userStats.experience}/{XP_PER_LEVEL} XP</span>
                </div>
                {nextRank && (
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${currentRank.gradient || 'from-gray-500 to-gray-600'} transition-all duration-300`}
                        style={{ width: `${rankProgress}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500">{currentRank.icon}→{nextRank.icon}</span>
                  </div>
                )}
              </div>
              
              {/* Очки */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="font-bold text-yellow-400">{userStats.totalPoints}</span>
              </div>
              
              {/* Поиск */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Поиск..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 w-48 h-9 bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Прогресс */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <Card className="bg-white/5 border-white/10 backdrop-blur overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Общий прогресс</span>
              </div>
              <div className="flex items-center gap-4 text-sm flex-wrap">
                {/* Таймер обучения */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                  <Timer className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-cyan-400">{formatTime(timerSeconds)}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      if (timerActive) {
                        setTimerActive(false)
                        setUserStats(prev => ({ ...prev, totalStudyTime: prev.totalStudyTime + timerSeconds }))
                      } else {
                        setTimerActive(true)
                      }
                    }}
                    className="h-6 w-6 p-0"
                  >
                    {timerActive ? <Pause className="w-3 h-3 text-white" /> : <Play className="w-3 h-3 text-white" />}
                  </Button>
                </div>
                <span className="text-gray-400">{totalTopicsCompleted} тем</span>
                <span className="text-green-400 font-bold">{overallProgress}%</span>
              </div>
            </div>
            <Progress value={overallProgress} className="h-2" />
            
            {/* Кнопки экспорта/импорта */}
            <div className="flex gap-2 mt-3 pt-3 border-t border-white/10">
              <Button
                size="sm"
                variant="outline"
                onClick={exportProgress}
                className="h-7 text-xs bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
              >
                <Download className="w-3 h-3 mr-1" />
                Экспорт прогресса
              </Button>
              <label className="cursor-pointer">
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="h-7 text-xs bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
                >
                  <span>
                    <Upload className="w-3 h-3 mr-1" />
                    Импорт прогресса
                  </span>
                </Button>
                <input
                  type="file"
                  accept=".json"
                  onChange={importProgress}
                  className="hidden"
                />
              </label>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Кнопки классов */}
      <div className="max-w-7xl mx-auto px-4 pb-3">
        <ScrollArea className="w-full">
          <div className="flex gap-2 pb-2">
            {schoolData.map(grade => (
              <Button
                key={grade.id}
                onClick={() => selectGrade(grade.id)}
                variant={selectedGrade === grade.id ? "default" : "outline"}
                className={`shrink-0 h-9 ${
                  selectedGrade === grade.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                    : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {grade.shortName}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Основной контент */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-white/5 border border-white/10 mb-4 h-10">
            <TabsTrigger value="subjects" className="data-[state=active]:bg-purple-600 h-8 text-sm">
              <Book className="w-4 h-4 mr-1.5" />
              Предметы
            </TabsTrigger>
            <TabsTrigger value="tasks" className="data-[state=active]:bg-purple-600 h-8 text-sm">
              <Calendar className="w-4 h-4 mr-1.5" />
              Задания
              {dailyTasks.some(t => t.completed) && (
                <Badge className="ml-1.5 h-5 px-1.5 bg-green-500/20 text-green-300 text-xs">
                  {dailyTasks.filter(t => t.completed).length}/{dailyTasks.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-purple-600 h-8 text-sm">
              <Trophy className="w-4 h-4 mr-1.5" />
              Достижения
            </TabsTrigger>
            <TabsTrigger value="stats" className="data-[state=active]:bg-purple-600 h-8 text-sm">
              <BarChart3 className="w-4 h-4 mr-1.5" />
              Статистика
            </TabsTrigger>
          </TabsList>

          {/* Таб предметов */}
          <TabsContent value="subjects" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredSubjects.map(subject => {
                const subjectProgress = getSubjectProgress(subject)
                const isExpanded = expandedSubject === subject.id
                
                return (
                  <Card 
                    key={subject.id}
                    className={`bg-gradient-to-br ${subject.gradient} bg-opacity-10 border-white/10 backdrop-blur overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'md:col-span-2' : ''
                    }`}
                  >
                    <CardHeader className="pb-2 cursor-pointer" onClick={() => setExpandedSubject(isExpanded ? null : subject.id)}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-white/10 ${subject.color}`}>
                            {subject.icon}
                          </div>
                          <div>
                            <CardTitle className="text-white text-lg">{subject.title}</CardTitle>
                            <CardDescription className="text-white/60">
                              {subject.description}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {subject.quiz.length > 0 && (
                            <Button
                              size="sm"
                              onClick={(e) => { e.stopPropagation(); startQuiz(subject); }}
                              className="bg-white/20 hover:bg-white/30 text-white h-8"
                            >
                              <Zap className="w-4 h-4 mr-1" />
                              Тест
                            </Button>
                          )}
                          <div className="text-right">
                            <div className="text-white/60 text-sm">{subjectProgress}%</div>
                            <ChevronRight className={`w-4 h-4 text-white/40 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Progress value={subjectProgress} className="h-1.5 mb-3" />
                      
                      {isExpanded && (
                        <div className="space-y-3 mt-4">
                          <Separator className="bg-white/10" />
                          <div className="space-y-2">
                            {subject.topics.map(topic => (
                              <div
                                key={topic.id}
                                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                                  progress[subject.id]?.[topic.id]
                                    ? 'bg-green-500/10 border border-green-500/20'
                                    : 'bg-white/5 hover:bg-white/10 border border-transparent'
                                }`}
                                onClick={() => {
                                  toggleTopic(subject.id, topic)
                                }}
                              >
                                <Checkbox
                                  checked={progress[subject.id]?.[topic.id] || false}
                                  className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                                  onCheckedChange={() => {}}
                                />
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className={`truncate ${progress[subject.id]?.[topic.id] ? 'text-green-300 line-through' : 'text-white'}`}>
                                      {topic.title}
                                    </span>
                                    <Badge className={`text-xs px-1.5 h-5 ${
                                      topic.difficulty === 'easy' ? 'bg-green-500/20 text-green-300' :
                                      topic.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                                      'bg-red-500/20 text-red-300'
                                    }`}>
                                      {topic.difficulty === 'easy' ? 'Легко' : topic.difficulty === 'medium' ? 'Средне' : 'Сложно'}
                                    </Badge>
                                  </div>
                                  <p className="text-xs text-gray-400 truncate">{topic.description}</p>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-gray-400">
                                  <Clock className="w-3 h-3" />
                                  {topic.estimatedTime} мин
                                </div>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setSelectedTopic(topic)
                                    setTopicDialogOpen(true)
                                  }}
                                  className="h-7 w-7 p-0 text-white/40 hover:text-white"
                                >
                                  <BookOpen className="w-3.5 h-3.5" />
                                </Button>
                              </div>
                            ))}
                          </div>
                          
                          {subject.quiz.length > 0 && (
                            <>
                              <Separator className="bg-white/10" />
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-white/60">
                                  <Brain className="w-4 h-4" />
                                  <span className="text-sm">Тест: {subject.quiz.length} вопросов</span>
                                </div>
                                <Button
                                  size="sm"
                                  onClick={() => startQuiz(subject)}
                                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                                >
                                  <Play className="w-4 h-4 mr-1.5" />
                                  Начать тест
                                </Button>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          {/* Таб ежедневных заданий */}
          <TabsContent value="tasks" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {dailyTasks.map(task => (
                <Card
                  key={task.id}
                  className={`${
                    task.completed
                      ? 'bg-green-500/10 border-green-500/30'
                      : 'bg-white/5 border-white/10'
                  } backdrop-blur`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${task.completed ? 'bg-green-500/20' : 'bg-white/10'}`}>
                        {task.type === 'topics' && <Book className={`w-5 h-5 ${task.completed ? 'text-green-400' : 'text-white/60'}`} />}
                        {task.type === 'quizzes' && <Zap className={`w-5 h-5 ${task.completed ? 'text-green-400' : 'text-white/60'}`} />}
                        {task.type === 'points' && <Star className={`w-5 h-5 ${task.completed ? 'text-green-400' : 'text-white/60'}`} />}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-white">{task.title}</h3>
                        <p className="text-sm text-gray-400">{task.description}</p>
                        <div className="mt-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-400">{task.progress}/{task.target}</span>
                            <span className="text-amber-400">+{task.reward} XP</span>
                          </div>
                          <Progress value={(task.progress / task.target) * 100} className="h-1.5" />
                        </div>
                      </div>
                      {task.completed && (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Таб достижений */}
          <TabsContent value="achievements" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {achievements.map(achievement => {
                const rarityColors = {
                  common: 'from-gray-500/20 to-gray-600/20 border-gray-500/30',
                  rare: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
                  epic: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
                  legendary: 'from-amber-500/20 to-yellow-500/20 border-amber-500/30'
                }
                const rarityBadge = {
                  common: 'bg-gray-500/20 text-gray-300',
                  rare: 'bg-blue-500/20 text-blue-300',
                  epic: 'bg-purple-500/20 text-purple-300',
                  legendary: 'bg-amber-500/20 text-amber-300'
                }
                
                return (
                  <Card
                    key={achievement.id}
                    className={`${
                      achievement.unlocked
                        ? `bg-gradient-to-br ${rarityColors[achievement.rarity]}`
                        : 'bg-white/5 border-white/10 opacity-50'
                    } backdrop-blur transition-all hover:scale-[1.02]`}
                  >
                    <CardContent className="p-4 text-center">
                      <div className={`mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-3 ${
                        achievement.unlocked ? `bg-gradient-to-br ${rarityColors[achievement.rarity]}` : 'bg-gray-700'
                      }`}>
                        <div className={achievement.unlocked ? 'text-white' : 'text-gray-500'}>
                          {achievement.icon}
                        </div>
                      </div>
                      <h3 className="font-bold text-white mb-1">{achievement.title}</h3>
                      <p className="text-xs text-gray-400 mb-2">{achievement.description}</p>
                      <div className="flex items-center justify-center gap-2">
                        <Badge className={`text-xs ${rarityBadge[achievement.rarity]}`}>
                          {achievement.rarity === 'common' ? 'Обычное' :
                           achievement.rarity === 'rare' ? 'Редкое' :
                           achievement.rarity === 'epic' ? 'Эпическое' : 'Легендарное'}
                        </Badge>
                        <span className="text-xs text-amber-400">+{achievement.points} XP</span>
                      </div>
                      {achievement.unlocked && (
                        <Badge className="mt-2 bg-green-500/20 text-green-300 border-green-500/30">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Получено
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          {/* Таб статистики */}
          <TabsContent value="stats" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/30">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-500/20">
                      <Book className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Изучено тем</p>
                      <p className="text-2xl font-bold text-white">{userStats.topicsCompleted}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-green-500/20">
                      <Target className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Пройдено тестов</p>
                      <p className="text-2xl font-bold text-white">{userStats.quizzesCompleted}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border-amber-500/30">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-500/20">
                      <Star className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Всего очков</p>
                      <p className="text-2xl font-bold text-white">{userStats.totalPoints}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-orange-500/20">
                      <Flame className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Серия дней</p>
                      <p className="text-2xl font-bold text-white">{userStats.streak}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Таймер обучения */}
            <Card className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/30">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-cyan-500/20">
                      <Timer className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Время обучения сегодня</p>
                      <p className="text-2xl font-bold text-white font-mono">{formatTime(timerSeconds)}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant={timerActive ? "destructive" : "default"}
                      onClick={() => setTimerActive(!timerActive)}
                      className={timerActive 
                        ? "bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30"
                        : "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30"
                      }
                    >
                      {timerActive ? <Pause className="w-4 h-4 mr-1" /> : <Play className="w-4 h-4 mr-1" />}
                      {timerActive ? 'Пауза' : 'Старт'}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => { setTimerActive(false); setTimerSeconds(0); }}
                      className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ранги */}
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg flex items-center gap-2">
                  <Crown className="w-5 h-5 text-amber-400" />
                  Система рангов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {RANKS.map((rank, index) => {
                    const isCurrent = rank.name === currentRank.name
                    const isUnlocked = userStats.level >= rank.minLevel
                    return (
                      <div 
                        key={rank.name}
                        className={`p-3 rounded-xl border transition-all ${
                          isCurrent 
                            ? `bg-gradient-to-br ${rank.gradient || 'from-gray-500 to-gray-600'} border-white/30 shadow-lg` 
                            : isUnlocked 
                              ? 'bg-white/5 border-white/20 opacity-80' 
                              : 'bg-white/5 border-white/10 opacity-40'
                        }`}
                      >
                        <div className="text-center">
                          <span className="text-2xl">{rank.icon}</span>
                          <p className={`text-sm font-medium mt-1 ${isCurrent ? 'text-white' : 'text-gray-300'}`}>
                            {rank.name}
                          </p>
                          <p className="text-xs text-gray-500">Ур. {rank.minLevel}+</p>
                          {isCurrent && (
                            <Badge className="mt-2 bg-white/20 text-white text-xs">Текущий</Badge>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Прогресс по классам */}
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg">Прогресс по классам</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {schoolData.map(grade => {
                    let total = 0
                    let completed = 0
                    grade.subjects.forEach(subject => {
                      total += subject.topics.length
                      subject.topics.forEach(topic => {
                        if (progress[subject.id]?.[topic.id]) completed++
                      })
                    })
                    const percent = total > 0 ? Math.round((completed / total) * 100) : 0
                    
                    return (
                      <div key={grade.id} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-white">{grade.name}</span>
                          <span className="text-gray-400">{completed}/{total} ({percent}%)</span>
                        </div>
                        <Progress value={percent} className="h-1.5" />
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Диалог квиза */}
      <Dialog open={quizDialogOpen} onOpenChange={setQuizDialogOpen}>
        <DialogContent className="bg-slate-900 border-white/10 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-lg">
              <Zap className="w-5 h-5 text-yellow-400" />
              Тест: {currentQuizSubject}
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Вопрос {currentQuestionIndex + 1} из {currentQuiz.length}
            </DialogDescription>
          </DialogHeader>
          
          {currentQuiz.length > 0 && (
            <div className="space-y-4">
              {/* Прогресс квиза */}
              <div className="flex gap-1">
                {currentQuiz.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full ${
                      i < currentQuestionIndex ? 'bg-green-500' :
                      i === currentQuestionIndex ? 'bg-purple-500' : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
              
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-lg font-medium text-white">
                  {currentQuiz[currentQuestionIndex].question}
                </p>
              </div>
              
              <div className="space-y-2">
                {currentQuiz[currentQuestionIndex].options.map((option, index) => {
                  const isSelected = selectedAnswer === index
                  const isCorrect = index === currentQuiz[currentQuestionIndex].correctAnswer
                  let bgClass = 'bg-white/5 hover:bg-white/10 border-white/10'
                  
                  if (showResult) {
                    if (isCorrect) bgClass = 'bg-green-500/20 border-green-500/30'
                    else if (isSelected && !isCorrect) bgClass = 'bg-red-500/20 border-red-500/30'
                  }
                  
                  return (
                    <button
                      key={index}
                      onClick={() => answerQuestion(index)}
                      disabled={showResult}
                      className={`w-full p-3 rounded-xl border text-left transition-all ${bgClass}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium shrink-0">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="text-white">{option}</span>
                        {showResult && isCorrect && (
                          <CheckCircle className="w-5 h-5 text-green-400 ml-auto" />
                        )}
                        {showResult && isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-red-400 ml-auto" />
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
              
              {showResult && (
                <div className={`p-3 rounded-xl text-sm ${
                  selectedAnswer === currentQuiz[currentQuestionIndex].correctAnswer
                    ? 'bg-green-500/10 border border-green-500/20'
                    : 'bg-red-500/10 border border-red-500/20'
                }`}>
                  <p className="font-medium mb-1">
                    {selectedAnswer === currentQuiz[currentQuestionIndex].correctAnswer
                      ? '✓ Правильно!'
                      : '✗ Неправильно'}
                  </p>
                  <p className="text-gray-400">{currentQuiz[currentQuestionIndex].explanation}</p>
                </div>
              )}
              
              {showResult && (
                <Button
                  onClick={nextQuestion}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  {currentQuestionIndex < currentQuiz.length - 1 ? 'Следующий вопрос' : 'Завершить тест'}
                </Button>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Диалог теории */}
      <Dialog open={topicDialogOpen} onOpenChange={setTopicDialogOpen}>
        <DialogContent className="bg-slate-900 border-white/10 text-white max-w-2xl max-h-[80vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              {selectedTopic?.title}
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              {selectedTopic?.description}
            </DialogDescription>
          </DialogHeader>
          
          <ScrollArea className="h-[50vh]">
            {selectedTopic && (
              <div className="space-y-4 pr-4">
                <div 
                  className="prose prose-invert prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedTopic.theory }}
                />
                
                {selectedTopic.examples.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-white font-medium">Примеры:</h4>
                    <ul className="space-y-1">
                      {selectedTopic.examples.map((example, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300">
                          <ChevronRight className="w-4 h-4 text-purple-400" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </ScrollArea>
          
          <DialogFooter>
            <Button
              onClick={() => {
                if (selectedTopic) {
                  // Находим subject_id для этой темы
                  for (const grade of schoolData) {
                    for (const subject of grade.subjects) {
                      if (subject.topics.find(t => t.id === selectedTopic.id)) {
                        toggleTopic(subject.id, selectedTopic)
                        break
                      }
                    }
                  }
                }
                setTopicDialogOpen(false)
              }}
              className="bg-gradient-to-r from-green-600 to-emerald-600"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Отметить как изученное
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Стили для анимации конфетти */}
      <style jsx global>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear forwards;
        }
        
        .prose h3 {
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }
        .prose h4 {
          color: rgba(255,255,255,0.9);
          font-size: 1rem;
          font-weight: 500;
          margin-top: 0.75rem;
          margin-bottom: 0.25rem;
        }
        .prose p {
          color: rgba(255,255,255,0.8);
          line-height: 1.6;
        }
        .prose ul, .prose ol {
          color: rgba(255,255,255,0.8);
          padding-left: 1.5rem;
        }
        .prose li {
          margin: 0.25rem 0;
        }
        .prose pre {
          background: rgba(255,255,255,0.05);
          padding: 0.5rem;
          border-radius: 0.5rem;
          font-family: monospace;
        }
      `}</style>
    </div>
  )
}
