'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from '@/components/ui/dialog'
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
  Download, Upload, Shuffle, Eye, EyeOff, ThumbsUp, ThumbsDown, Repeat
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
  { id: 'genius', title: 'Гений', description: 'Изучите все темы', icon: <Sparkles className="w-6 h-6" />, unlocked: false, condition: 'complete_all', points: 2000, rarity: 'legendary' },
  // Новые достижения
  { id: 'flashcard_10', title: 'Карточник', description: 'Изучите 10 карточек за одну сессию', icon: <Brain className="w-6 h-6" />, unlocked: false, condition: 'flashcard_session_10', points: 150, rarity: 'common' },
  { id: 'flashcard_50', title: 'Супер память', description: 'Изучите 50 карточек за одну сессию', icon: <Brain className="w-6 h-6" />, unlocked: false, condition: 'flashcard_session_50', points: 400, rarity: 'rare' },
  { id: 'reviewer', title: 'Повторитель', description: 'Завершите сессию повторения', icon: <Repeat className="w-6 h-6" />, unlocked: false, condition: 'complete_review', points: 100, rarity: 'common' },
  { id: 'dedicated', title: 'Преданный ученик', description: 'Занимайтесь 1 час подряд', icon: <Clock className="w-6 h-6" />, unlocked: false, condition: 'study_1_hour', points: 200, rarity: 'rare' },
  { id: 'marathoner', title: 'Марафонец', description: 'Занимайтесь 3 часа подряд', icon: <Activity className="w-6 h-6" />, unlocked: false, condition: 'study_3_hours', points: 500, rarity: 'epic' }
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
  
  // Режим карточек (Flashcards)
  const [flashcardMode, setFlashcardMode] = useState(false)
  const [flashcards, setFlashcards] = useState<{topic: Topic, subjectId: string, subjectTitle: string}[]>([])
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0)
  const [showFlashcardAnswer, setShowFlashcardAnswer] = useState(false)
  const [flashcardsKnown, setFlashcardsKnown] = useState(0)
  const [flashcardsUnknown, setFlashcardsUnknown] = useState(0)
  
  // Режим повторения
  const [reviewMode, setReviewMode] = useState(false)
  const [reviewTopics, setReviewTopics] = useState<{topic: Topic, subjectId: string, subjectTitle: string}[]>([])
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  
  // Звуковые эффекты
  const [soundEnabled, setSoundEnabled] = useState(true)
  
  // Режим экзамена
  const [examMode, setExamMode] = useState(false)
  const [examQuestions, setExamQuestions] = useState<QuizQuestion[]>([])
  const [examGrade, setExamGrade] = useState<number | null>(null)
  const [examScore, setExamScore] = useState(0)
  const [examQuestionIndex, setExamQuestionIndex] = useState(0)
  const [examFinished, setExamFinished] = useState(false)
  const [examSelectedAnswer, setExamSelectedAnswer] = useState<number | null>(null)
  const [examShowResult, setExamShowResult] = useState(false)
  
  // Недельная активность
  const [weeklyActivity, setWeeklyActivity] = useState<number[]>([0, 0, 0, 0, 0, 0, 0])
  
  // Закладки
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set())
  
  // Заметки
  const [notes, setNotes] = useState<Record<string, string>>({})
  
  // Таймер сессии для достижений
  const [sessionStartTime, setSessionStartTime] = useState<number | null>(null)
  const [flashcardsStudiedThisSession, setFlashcardsStudiedThisSession] = useState(0)
  const [reviewCompleted, setReviewCompleted] = useState(false)
  
  // Ежедневный челлендж
  const [dailyChallenge, setDailyChallenge] = useState<{
    completed: boolean
    questions: QuizQuestion[]
    currentIndex: number
    score: number
    showResult: boolean
    selectedAnswer: number | null
  } | null>(null)
  
  // Цели обучения
  const [learningGoals, setLearningGoals] = useState<{
    dailyTopics: number
    weeklyTopics: number
    monthlyTopics: number
    dailyTarget: number
    weeklyTarget: number
    monthlyTarget: number
  }>({
    dailyTopics: 0,
    weeklyTopics: 0,
    monthlyTopics: 0,
    dailyTarget: 5,
    weeklyTarget: 25,
    monthlyTarget: 100
  })
  
  // Заморозка стрика
  const [streakFreeze, setStreakFreeze] = useState<number>(3) // 3 заморозки
  
  // Интервальное повторение (Spaced Repetition)
  const [spacedRepetition, setSpacedRepetition] = useState<Record<string, {
    lastReview: string
    nextReview: string
    interval: number // дни
    easeFactor: number
    repetitions: number
  }>>({})
  
  // Настройки приложения
  const [appSettings, setAppSettings] = useState({
    theme: 'dark' as 'dark' | 'light',
    soundVolume: 0.5,
    showNotifications: true,
    autoStartTimer: false
  })
  
  // Уведомления о достижениях
  const [achievementNotification, setAchievementNotification] = useState<Achievement | null>(null)
  
  // Локальная таблица лидеров (симулированная)
  const [leaderboard] = useState([
    { name: 'Вы', points: 0, rank: 1, isUser: true },
    { name: 'Алексей М.', points: 12500, rank: 1, isUser: false },
    { name: 'Мария К.', points: 11200, rank: 2, isUser: false },
    { name: 'Дмитрий С.', points: 9800, rank: 3, isUser: false },
    { name: 'Анна П.', points: 8500, rank: 4, isUser: false },
    { name: 'Иван В.', points: 7200, rank: 5, isUser: false },
  ])

  // Мотивационные цитаты
  const motivationalQuotes = [
    { text: "Обучение — это сокровище, которое следует за своим владельцем повсюду.", author: "Китайская пословица" },
    { text: "Знание — сила.", author: "Фрэнсис Бэкон" },
    { text: "Жизнь — это школа, и мы в ней всегда ученики.", author: "Оноре де Бальзак" },
    { text: "Учись так, словно тебе предстоит жить вечно.", author: "Махатма Ганди" },
    { text: "Кто хочет — ищет возможность, кто не хочет — ищет причину.", author: "Сократ" },
    { text: "Образование — это то, что остаётся, когда вы забыли всё, чему вас учили.", author: "Альберт Эйнштейн" },
    { text: "Единственный способ делать великую работу — любить то, что делаешь.", author: "Стив Джобс" },
    { text: "Чем больше ты знаешь, тем больше ты можешь.", author: "Жюль Верн" },
    { text: "Никогда не поздно стать тем, кем ты мог бы быть.", author: "Джордж Элиот" },
    { text: "Ошибка — это не провал, а урок.", author: "Неизвестный автор" }
  ]
  
  const [currentQuote] = useState(() => motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)])

  // Звуковые эффекты
  const playSound = useCallback((type: 'correct' | 'wrong' | 'complete' | 'levelup') => {
    if (!soundEnabled || typeof window === 'undefined') return
    
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    switch (type) {
      case 'correct':
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime) // C5
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1) // E5
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
        gainNode.gain.exponentialDecayTo = 0.01
        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.2)
        break
      case 'wrong':
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime)
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.3)
        break
      case 'complete':
        oscillator.frequency.setValueAtTime(392, audioContext.currentTime) // G4
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime + 0.15) // C5
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.3) // E5
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.5)
        break
      case 'levelup':
        oscillator.frequency.setValueAtTime(392, audioContext.currentTime)
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime + 0.1)
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.2)
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.3)
        gainNode.gain.setValueAtTime(0.4, audioContext.currentTime)
        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.6)
        break
    }
  }, [soundEnabled])

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
    
    // Загрузка активности
    const savedActivity = localStorage.getItem('weeklyActivity_v2')
    if (savedActivity) {
      const activity = JSON.parse(savedActivity)
      // Проверяем, нужно ли сбросить активность (прошла неделя)
      const lastActivityDate = localStorage.getItem('lastActivityDate_v2')
      if (lastActivityDate) {
        const lastDate = new Date(lastActivityDate)
        const now = new Date()
        const daysDiff = Math.floor((now.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24))
        if (daysDiff >= 7) {
          // Сброс активности
          setWeeklyActivity([0, 0, 0, 0, 0, 0, 0])
        } else {
          // Сдвигаем активность если нужно
          const shifted = [...activity]
          for (let i = 0; i < daysDiff; i++) {
            shifted.shift()
            shifted.push(0)
          }
          setWeeklyActivity(shifted)
        }
      } else {
        setWeeklyActivity(activity)
      }
    }
    
    // Загрузка закладок
    const savedBookmarks = localStorage.getItem('bookmarks_v2')
    if (savedBookmarks) setBookmarks(new Set(JSON.parse(savedBookmarks)))
    
    // Загрузка заметок
    const savedNotes = localStorage.getItem('notes_v2')
    if (savedNotes) setNotes(JSON.parse(savedNotes))
    
    // Загрузка целей обучения
    const savedGoals = localStorage.getItem('learningGoals_v2')
    if (savedGoals) setLearningGoals(JSON.parse(savedGoals))
    
    // Загрузка заморозок стрика
    const savedFreeze = localStorage.getItem('streakFreeze_v2')
    if (savedFreeze) setStreakFreeze(parseInt(savedFreeze))
    
    // Загрузка интервального повторения
    const savedSpacedRep = localStorage.getItem('spacedRepetition_v2')
    if (savedSpacedRep) setSpacedRepetition(JSON.parse(savedSpacedRep))
    
    // Загрузка настроек
    const savedSettings = localStorage.getItem('appSettings_v2')
    if (savedSettings) setAppSettings(JSON.parse(savedSettings))
    
    // Загрузка челленджа
    const savedChallenge = localStorage.getItem('dailyChallenge_v2')
    if (savedChallenge) {
      const challenge = JSON.parse(savedChallenge)
      // Проверяем, что челлендж сегодняшнего дня
      if (challenge.date === new Date().toDateString()) {
        setDailyChallenge(challenge)
      }
    }
    
    // Проверка стрика
    const today = new Date().toDateString()
    const lastDate = savedLastDate || ''
    
    if (lastDate !== today) {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      
      if (lastDate === yesterday.toDateString()) {
        // Продолжение стрика
        const savedStats = JSON.parse(localStorage.getItem('schoolStats_v2') || '{}')
        const newStreak = (savedStats.streak || 0) + 1
        
        // Награды за стрик
        let streakBonus = 0
        if (newStreak === 7) streakBonus = 50
        else if (newStreak === 14) streakBonus = 100
        else if (newStreak === 30) streakBonus = 200
        else if (newStreak === 50) streakBonus = 350
        else if (newStreak === 100) streakBonus = 500
        else if (newStreak % 100 === 0 && newStreak > 100) streakBonus = 500 + Math.floor(newStreak / 100) * 100
        
        if (streakBonus > 0) {
          // Показываем уведомление о награде
          setTimeout(() => {
            alert(`🎉 Поздравляем! ${newStreak} дней подряд! +${streakBonus} XP бонус!`)
          }, 1000)
        }
        
        setUserStats(prev => ({
          ...prev,
          streak: newStreak,
          maxStreak: Math.max(prev.maxStreak, newStreak),
          lastActiveDate: today,
          totalPoints: prev.totalPoints + streakBonus
        }))
      } else if (lastDate !== '') {
        // Проверяем заморозку стрика
        const savedFreezeCount = parseInt(localStorage.getItem('streakFreeze_v2') || '3')
        if (savedFreezeCount > 0) {
          // Используем заморозку
          setStreakFreeze(savedFreezeCount - 1)
          localStorage.setItem('streakFreeze_v2', String(savedFreezeCount - 1))
          // Стрик сохраняется
          setUserStats(prev => ({
            ...prev,
            lastActiveDate: today
          }))
        } else {
          // Сброс стрика
          setUserStats(prev => ({
            ...prev,
            streak: 1,
            lastActiveDate: today
          }))
          setDailyTasks(dailyTasksData) // Сброс ежедневных заданий
        }
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
    localStorage.setItem('weeklyActivity_v2', JSON.stringify(weeklyActivity))
    localStorage.setItem('lastActivityDate_v2', new Date().toISOString())
    localStorage.setItem('bookmarks_v2', JSON.stringify([...bookmarks]))
    localStorage.setItem('notes_v2', JSON.stringify(notes))
    localStorage.setItem('learningGoals_v2', JSON.stringify(learningGoals))
    localStorage.setItem('streakFreeze_v2', String(streakFreeze))
    localStorage.setItem('spacedRepetition_v2', JSON.stringify(spacedRepetition))
    localStorage.setItem('appSettings_v2', JSON.stringify(appSettings))
  }, [progress, userStats, achievements, visitedClasses, dailyTasks, weeklyActivity, bookmarks, notes, learningGoals, streakFreeze, spacedRepetition, appSettings])

  // Таймер обучения
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (timerActive) {
      if (!sessionStartTime) setSessionStartTime(Date.now())
      interval = setInterval(() => {
        setTimerSeconds(s => s + 1)
      }, 1000)
    } else if (sessionStartTime) {
      // Сохраняем время сессии при паузе/остановке
      const sessionTime = Math.floor((Date.now() - sessionStartTime) / 1000)
      if (sessionTime > 0) {
        // Обновляем недельную активность
        setWeeklyActivity(prev => {
          const updated = [...prev]
          const today = (new Date().getDay() + 6) % 7 // Пн=0, Вс=6
          updated[today] = updated[today] + sessionTime
          return updated
        })
        setUserStats(prev => ({ ...prev, totalStudyTime: prev.totalStudyTime + sessionTime }))
      }
      setSessionStartTime(null)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [timerActive, sessionStartTime])

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
      
      // Обновление целей обучения
      setLearningGoals(prev => ({
        ...prev,
        dailyTopics: prev.dailyTopics + 1,
        weeklyTopics: prev.weeklyTopics + 1,
        monthlyTopics: prev.monthlyTopics + 1
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
        // Показываем уведомление о достижении
        setAchievementNotification(newAchievements[idx])
        setTimeout(() => setAchievementNotification(null), 5000)
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
    updateAchievement('streak_14', userStats.streak >= 14)
    updateAchievement('streak_30', userStats.streak >= 30)
    updateAchievement('streak_100', userStats.streak >= 100)
    updateAchievement('all_classes', visitedClasses.size >= 12)
    updateAchievement('level_5', userStats.level >= 5)
    updateAchievement('level_10', userStats.level >= 10)
    updateAchievement('level_25', userStats.level >= 25)
    updateAchievement('level_50', userStats.level >= 50)
    updateAchievement('genius', totalTopicsCompleted >= 500)
    // Новые достижения
    updateAchievement('flashcard_10', flashcardsStudiedThisSession >= 10)
    updateAchievement('flashcard_50', flashcardsStudiedThisSession >= 50)
    updateAchievement('reviewer', reviewCompleted)
    updateAchievement('dedicated', userStats.totalStudyTime >= 3600) // 1 час
    updateAchievement('marathoner', userStats.totalStudyTime >= 10800) // 3 часа
    updateAchievement('night_owl', new Date().getHours() >= 0 && new Date().getHours() < 5)
    updateAchievement('early_bird', new Date().getHours() >= 5 && new Date().getHours() < 7)
    
    if (changed) setAchievements(newAchievements)
  }, [totalTopicsCompleted, userStats.quizzesCompleted, userStats.streak, visitedClasses.size, achievements, addExperience, flashcardsStudiedThisSession, reviewCompleted, userStats.totalStudyTime, userStats.level])

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

  // Начать режим карточек
  const startFlashcards = useCallback((mode: 'all' | 'completed' | 'uncompleted' = 'all') => {
    const grade = schoolData.find(g => g.id === selectedGrade)
    if (!grade) return
    
    const cards: {topic: Topic, subjectId: string, subjectTitle: string}[] = []
    grade.subjects.forEach(subject => {
      subject.topics.forEach(topic => {
        const isCompleted = progress[subject.id]?.[topic.id]
        if (mode === 'all' || (mode === 'completed' && isCompleted) || (mode === 'uncompleted' && !isCompleted)) {
          cards.push({ topic, subjectId: subject.id, subjectTitle: subject.title })
        }
      })
    })
    
    // Перемешиваем карточки
    const shuffled = cards.sort(() => Math.random() - 0.5)
    setFlashcards(shuffled)
    setCurrentFlashcardIndex(0)
    setShowFlashcardAnswer(false)
    setFlashcardsKnown(0)
    setFlashcardsUnknown(0)
    setFlashcardMode(true)
  }, [selectedGrade, progress])

  // Ответ на карточку
  const answerFlashcard = useCallback((known: boolean) => {
    // Увеличиваем счётчик изученных карточек
    setFlashcardsStudiedThisSession(prev => prev + 1)
    
    // Обновляем интервальное повторение
    const currentCard = flashcards[currentFlashcardIndex]
    if (currentCard) {
      const topicId = currentCard.topic.id
      const now = new Date()
      const currentData = spacedRepetition[topicId] || {
        lastReview: now.toISOString(),
        nextReview: now.toISOString(),
        interval: 1,
        easeFactor: 2.5,
        repetitions: 0
      }
      
      // SM-2 алгоритм (упрощённый)
      let newInterval: number
      let newEaseFactor: number
      let newRepetitions: number
      
      if (known) {
        // Если ответ правильный
        newRepetitions = currentData.repetitions + 1
        newEaseFactor = Math.max(1.3, currentData.easeFactor + 0.1)
        if (newRepetitions === 1) {
          newInterval = 1
        } else if (newRepetitions === 2) {
          newInterval = 6
        } else {
          newInterval = Math.round(currentData.interval * newEaseFactor)
        }
      } else {
        // Если ответ неправильный
        newRepetitions = 0
        newEaseFactor = Math.max(1.3, currentData.easeFactor - 0.2)
        newInterval = 1
      }
      
      const nextReview = new Date(now)
      nextReview.setDate(nextReview.getDate() + newInterval)
      
      setSpacedRepetition(prev => ({
        ...prev,
        [topicId]: {
          lastReview: now.toISOString(),
          nextReview: nextReview.toISOString(),
          interval: newInterval,
          easeFactor: newEaseFactor,
          repetitions: newRepetitions
        }
      }))
    }
    
    if (known) {
      setFlashcardsKnown(prev => prev + 1)
    } else {
      setFlashcardsUnknown(prev => prev + 1)
    }
    
    if (currentFlashcardIndex < flashcards.length - 1) {
      setCurrentFlashcardIndex(prev => prev + 1)
      setShowFlashcardAnswer(false)
    } else {
      // Конец сессии карточек
      setFlashcardMode(false)
      const total = flashcards.length
      const knownCount = known ? flashcardsKnown + 1 : flashcardsKnown
      const accuracy = Math.round((knownCount / total) * 100)
      if (accuracy >= 80) {
        addExperience(30)
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 3000)
      }
    }
  }, [currentFlashcardIndex, flashcards, flashcardsKnown, flashcardsUnknown, addExperience, spacedRepetition])

  // Начать режим повторения
  const startReview = useCallback(() => {
    const completed: {topic: Topic, subjectId: string, subjectTitle: string}[] = []
    
    schoolData.forEach(grade => {
      grade.subjects.forEach(subject => {
        subject.topics.forEach(topic => {
          if (progress[subject.id]?.[topic.id]) {
            completed.push({ topic, subjectId: subject.id, subjectTitle: subject.title })
          }
        })
      })
    })
    
    // Случайные 10 тем для повторения
    const shuffled = completed.sort(() => Math.random() - 0.5).slice(0, 10)
    setReviewTopics(shuffled)
    setCurrentReviewIndex(0)
    setReviewMode(true)
  }, [progress])

  // Начать ежедневный челлендж
  const startDailyChallenge = useCallback(() => {
    // Собираем все вопросы
    const allQuestions: QuizQuestion[] = []
    schoolData.forEach(grade => {
      grade.subjects.forEach(subject => {
        if (subject.quiz) {
          subject.quiz.forEach(q => allQuestions.push(q))
        }
      })
    })
    
    if (allQuestions.length === 0) return
    
    // Используем дату как seed для одинаковых вопросов в течение дня
    const today = new Date().toDateString()
    const seed = today.split('').reduce((a, b) => a + b.charCodeAt(0), 0)
    const shuffled = [...allQuestions].sort((a, b) => {
      return ((seed + a.question.length) % 2) - 0.5
    })
    
    const challengeQuestions = shuffled.slice(0, Math.min(10, shuffled.length))
    
    setDailyChallenge({
      completed: false,
      questions: challengeQuestions,
      currentIndex: 0,
      score: 0,
      showResult: false,
      selectedAnswer: null
    })
    
    // Сохраняем дату челленджа
    localStorage.setItem('dailyChallenge_v2', JSON.stringify({
      date: today,
      completed: false,
      questions: challengeQuestions
    }))
  }, [])
  
  // Ответ на вопрос челленджа
  const answerChallengeQuestion = useCallback((answerIndex: number) => {
    if (!dailyChallenge) return
    
    const isCorrect = answerIndex === dailyChallenge.questions[dailyChallenge.currentIndex].correctAnswer
    if (soundEnabled) {
      playSound(isCorrect ? 'correct' : 'wrong')
    }
    
    setDailyChallenge(prev => {
      if (!prev) return null
      return {
        ...prev,
        score: isCorrect ? prev.score + 1 : prev.score,
        showResult: true,
        selectedAnswer: answerIndex
      }
    })
  }, [dailyChallenge, soundEnabled, playSound])
  
  // Следующий вопрос челленджа
  const nextChallengeQuestion = useCallback(() => {
    if (!dailyChallenge) return
    
    if (dailyChallenge.currentIndex < dailyChallenge.questions.length - 1) {
      setDailyChallenge(prev => {
        if (!prev) return null
        return {
          ...prev,
          currentIndex: prev.currentIndex + 1,
          showResult: false,
          selectedAnswer: null
        }
      })
    } else {
      // Челлендж завершён
      const finalScore = dailyChallenge.score + (dailyChallenge.selectedAnswer === dailyChallenge.questions[dailyChallenge.currentIndex]?.correctAnswer ? 1 : 0)
      const percent = Math.round((finalScore / dailyChallenge.questions.length) * 100)
      
      // Бонус за челлендж
      if (percent === 100) {
        addExperience(100)
        if (soundEnabled) playSound('levelup')
      } else if (percent >= 80) {
        addExperience(70)
        if (soundEnabled) playSound('complete')
      } else if (percent >= 60) {
        addExperience(50)
        if (soundEnabled) playSound('complete')
      } else {
        addExperience(20)
      }
      
      setDailyChallenge(prev => {
        if (!prev) return null
        return { ...prev, completed: true }
      })
      
      // Обновляем ежедневные задания
      setDailyTasks(prev => prev.map(task => {
        if (task.type === 'quizzes' && !task.completed) {
          return { ...task, progress: task.progress + 1, completed: true }
        }
        return task
      }))
      
      // Сохраняем результат челленджа
      localStorage.setItem('dailyChallenge_v2', JSON.stringify({
        date: new Date().toDateString(),
        completed: true,
        score: finalScore,
        total: dailyChallenge.questions.length
      }))
      
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
    }
  }, [dailyChallenge, addExperience, soundEnabled, playSound])

  // Начать экзамен
  const startExam = useCallback((gradeId: number) => {
    const grade = schoolData.find(g => g.id === gradeId)
    if (!grade) return
    
    // Собираем все вопросы из всех предметов класса
    const allQuestions: QuizQuestion[] = []
    grade.subjects.forEach(subject => {
      if (subject.quiz) {
        subject.quiz.forEach(q => allQuestions.push(q))
      }
    })
    
    if (allQuestions.length === 0) return
    
    // Перемешиваем и берем до 20 вопросов
    const shuffled = allQuestions.sort(() => Math.random() - 0.5).slice(0, Math.min(20, allQuestions.length))
    setExamQuestions(shuffled)
    setExamGrade(gradeId)
    setExamScore(0)
    setExamQuestionIndex(0)
    setExamFinished(false)
    setExamMode(true)
  }, [])

  // Ответ на вопрос экзамена
  const answerExamQuestion = useCallback((answerIndex: number) => {
    const isCorrect = answerIndex === examQuestions[examQuestionIndex].correctAnswer
    if (isCorrect) {
      setExamScore(prev => prev + 1)
      if (soundEnabled) playSound('correct')
    } else {
      if (soundEnabled) playSound('wrong')
    }
    setExamSelectedAnswer(answerIndex)
    setExamShowResult(true)
  }, [examQuestions, examQuestionIndex, soundEnabled, playSound])

  // Следующий вопрос экзамена
  const nextExamQuestion = useCallback(() => {
    if (examQuestionIndex < examQuestions.length - 1) {
      setExamQuestionIndex(prev => prev + 1)
      setExamSelectedAnswer(null)
      setExamShowResult(false)
    } else {
      // Экзамен завершен
      setExamFinished(true)
      const finalScore = examScore + (examSelectedAnswer === examQuestions[examQuestionIndex]?.correctAnswer ? 1 : 0)
      const percent = Math.round((finalScore / examQuestions.length) * 100)
      if (percent >= 80) {
        if (soundEnabled) playSound('levelup')
        addExperience(100)
      } else if (percent >= 60) {
        if (soundEnabled) playSound('complete')
        addExperience(50)
      }
      setUserStats(prev => ({
        ...prev,
        quizzesCompleted: prev.quizzesCompleted + 1
      }))
    }
  }, [examQuestionIndex, examQuestions, examScore, examSelectedAnswer, soundEnabled, playSound, addExperience])

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

  // Переключение закладки
  const toggleBookmark = useCallback((topicId: string) => {
    setBookmarks(prev => {
      const newSet = new Set(prev)
      if (newSet.has(topicId)) {
        newSet.delete(topicId)
      } else {
        newSet.add(topicId)
      }
      return newSet
    })
  }, [])

  // Сохранение заметки
  const saveNote = useCallback((topicId: string, note: string) => {
    setNotes(prev => ({
      ...prev,
      [topicId]: note
    }))
  }, [])

  // Получение избранных тем
  const bookmarkedTopics = useMemo(() => {
    const result: {topic: Topic, subjectId: string, subjectTitle: string, gradeName: string}[] = []
    schoolData.forEach(grade => {
      grade.subjects.forEach(subject => {
        subject.topics.forEach(topic => {
          if (bookmarks.has(topic.id)) {
            result.push({ topic, subjectId: subject.id, subjectTitle: subject.title, gradeName: grade.name })
          }
        })
      })
    })
    return result
  }, [bookmarks])

  // Рекомендации тем (неизученные темы из начатых предметов)
  const recommendedTopics = useMemo(() => {
    const startedSubjects = new Set<string>()
    schoolData.forEach(grade => {
      grade.subjects.forEach(subject => {
        const hasProgress = subject.topics.some(t => progress[subject.id]?.[t.id])
        if (hasProgress) startedSubjects.add(subject.id)
      })
    })
    
    const result: {topic: Topic, subjectId: string, subjectTitle: string, gradeName: string}[] = []
    schoolData.forEach(grade => {
      grade.subjects.forEach(subject => {
        if (startedSubjects.has(subject.id)) {
          subject.topics.forEach(topic => {
            if (!progress[subject.id]?.[topic.id]) {
              result.push({ topic, subjectId: subject.id, subjectTitle: subject.title, gradeName: grade.name })
            }
          })
        }
      })
    })
    
    // Возвращаем топ-10 рекомендуемых тем
    return result.sort(() => Math.random() - 0.5).slice(0, 10)
  }, [progress])

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
      
      {/* Уведомление о достижении */}
      {achievementNotification && appSettings.showNotifications && (
        <div className="fixed top-20 right-4 z-50 animate-slide-in">
          <Card className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border-amber-500/30 shadow-xl max-w-sm">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-amber-500/20">
                  {achievementNotification.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span className="text-xs text-amber-400 font-medium">Достижение разблокировано!</span>
                  </div>
                  <h4 className="font-bold text-white mt-1">{achievementNotification.title}</h4>
                  <p className="text-sm text-gray-400">{achievementNotification.description}</p>
                  <p className="text-xs text-amber-300 mt-1">+{achievementNotification.points} XP</p>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setAchievementNotification(null)}
                  className="h-6 w-6 p-0 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
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
                {streakFreeze > 0 && (
                  <span className="text-xs text-cyan-400 ml-1" title="Заморозки стрика">
                    ❄️{streakFreeze}
                  </span>
                )}
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
              
              {/* Кнопка звука */}
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`h-9 w-9 p-0 ${soundEnabled ? 'text-cyan-400' : 'text-gray-500'}`}
                title={soundEnabled ? 'Выключить звук' : 'Включить звук'}
              >
                {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </Button>
              
              {/* Кнопка настроек */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-9 w-9 p-0 text-gray-400 hover:text-white"
                    title="Настройки"
                  >
                    <Settings className="w-5 h-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-slate-900 border-white/10 text-white max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Settings className="w-5 h-5 text-purple-400" />
                      Настройки
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Настройте приложение под себя
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6 py-4">
                    {/* Звук */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Volume2 className="w-5 h-5 text-cyan-400" />
                        <div>
                          <p className="font-medium">Звуковые эффекты</p>
                          <p className="text-sm text-gray-400">Звуки при правильных ответах</p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant={soundEnabled ? "default" : "outline"}
                        onClick={() => setSoundEnabled(!soundEnabled)}
                        className={soundEnabled 
                          ? "bg-cyan-600 hover:bg-cyan-700" 
                          : "bg-white/5 border-white/20"
                        }
                      >
                        {soundEnabled ? 'Вкл' : 'Выкл'}
                      </Button>
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    {/* Уведомления */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Sparkles className="w-5 h-5 text-amber-400" />
                        <div>
                          <p className="font-medium">Уведомления о достижениях</p>
                          <p className="text-sm text-gray-400">Показывать при получении</p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant={appSettings.showNotifications ? "default" : "outline"}
                        onClick={() => setAppSettings(prev => ({ ...prev, showNotifications: !prev.showNotifications }))}
                        className={appSettings.showNotifications 
                          ? "bg-amber-600 hover:bg-amber-700" 
                          : "bg-white/5 border-white/20"
                        }
                      >
                        {appSettings.showNotifications ? 'Вкл' : 'Выкл'}
                      </Button>
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    {/* Автостарт таймера */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Timer className="w-5 h-5 text-green-400" />
                        <div>
                          <p className="font-medium">Автозапуск таймера</p>
                          <p className="text-sm text-gray-400">Запускать при входе</p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant={appSettings.autoStartTimer ? "default" : "outline"}
                        onClick={() => setAppSettings(prev => ({ ...prev, autoStartTimer: !prev.autoStartTimer }))}
                        className={appSettings.autoStartTimer 
                          ? "bg-green-600 hover:bg-green-700" 
                          : "bg-white/5 border-white/20"
                        }
                      >
                        {appSettings.autoStartTimer ? 'Вкл' : 'Выкл'}
                      </Button>
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    {/* Информация о стрике */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Flame className="w-5 h-5 text-orange-400" />
                        <div>
                          <p className="font-medium">Заморозки стрика</p>
                          <p className="text-sm text-gray-400">Защищают от сброса</p>
                        </div>
                        <span className="ml-auto text-xl">❄️ {streakFreeze}</span>
                      </div>
                      <p className="text-xs text-gray-500">
                        Заморозки автоматически используются при пропуске дня. Зарабатывайте новые за достижения!
                      </p>
                    </div>
                  </div>
                  
                  <DialogFooter>
                    <p className="text-xs text-gray-500 text-center w-full">
                      Настройки сохраняются автоматически
                    </p>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              
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
        
        {/* Мотивационная цитата */}
        <Card className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 border-white/10 mt-3">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-yellow-400 shrink-0" />
              <div>
                <p className="text-white/90 text-sm italic">"{currentQuote.text}"</p>
                <p className="text-gray-400 text-xs mt-1">— {currentQuote.author}</p>
              </div>
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
          <TabsList className="bg-white/5 border border-white/10 mb-4 h-10 flex-wrap">
            <TabsTrigger value="subjects" className="data-[state=active]:bg-purple-600 h-8 text-sm">
              <Book className="w-4 h-4 mr-1.5" />
              Предметы
            </TabsTrigger>
            <TabsTrigger value="flashcards" className="data-[state=active]:bg-purple-600 h-8 text-sm">
              <Brain className="w-4 h-4 mr-1.5" />
              Карточки
            </TabsTrigger>
            <TabsTrigger value="exam" className="data-[state=active]:bg-purple-600 h-8 text-sm">
              <FileText className="w-4 h-4 mr-1.5" />
              Экзамен
            </TabsTrigger>
            <TabsTrigger value="challenge" className="data-[state=active]:bg-purple-600 h-8 text-sm">
              <Zap className="w-4 h-4 mr-1.5" />
              Челлендж
              {dailyChallenge?.completed && (
                <CheckCircle className="w-3.5 h-3.5 ml-1 text-green-400" />
              )}
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
            <TabsTrigger value="bookmarks" className="data-[state=active]:bg-purple-600 h-8 text-sm">
              <Bookmark className="w-4 h-4 mr-1.5" />
              Избранное
              {bookmarks.size > 0 && (
                <Badge className="ml-1.5 h-5 px-1.5 bg-amber-500/20 text-amber-300 text-xs">
                  {bookmarks.size}
                </Badge>
              )}
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
                                    toggleBookmark(topic.id)
                                  }}
                                  className={`h-7 w-7 p-0 ${bookmarks.has(topic.id) ? 'text-amber-400' : 'text-white/40 hover:text-amber-400'}`}
                                >
                                  <Bookmark className={`w-3.5 h-3.5 ${bookmarks.has(topic.id) ? 'fill-amber-400' : ''}`} />
                                </Button>
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

          {/* Таб карточек */}
          <TabsContent value="flashcards" className="space-y-4">
            {/* Режим изучения карточек */}
            {flashcardMode && flashcards.length > 0 ? (
              <div className="max-w-2xl mx-auto">
                {/* Прогресс */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">
                    Карточка {currentFlashcardIndex + 1} из {flashcards.length}
                  </span>
                  <div className="flex gap-3 text-sm">
                    <span className="text-green-400">✓ {flashcardsKnown}</span>
                    <span className="text-red-400">✗ {flashcardsUnknown}</span>
                  </div>
                </div>
                <Progress value={((currentFlashcardIndex + 1) / flashcards.length) * 100} className="h-2 mb-6" />
                
                {/* Карточка */}
                <Card className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/30 min-h-[400px]">
                  <CardContent className="p-6 flex flex-col items-center justify-center min-h-[400px]">
                    <Badge className="mb-4 bg-purple-500/20 text-purple-300">
                      {flashcards[currentFlashcardIndex].subjectTitle}
                    </Badge>
                    
                    <h3 className="text-2xl font-bold text-white text-center mb-6">
                      {flashcards[currentFlashcardIndex].topic.title}
                    </h3>
                    
                    {!showFlashcardAnswer ? (
                      <div className="text-center">
                        <p className="text-gray-400 mb-6">
                          {flashcards[currentFlashcardIndex].topic.description}
                        </p>
                        <Button
                          onClick={() => setShowFlashcardAnswer(true)}
                          className="bg-gradient-to-r from-purple-600 to-blue-600"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Показать ответ
                        </Button>
                      </div>
                    ) : (
                      <div className="w-full">
                        <div 
                          className="prose prose-invert prose-sm max-w-none mb-6 text-center"
                          dangerouslySetInnerHTML={{ __html: flashcards[currentFlashcardIndex].topic.theory }}
                        />
                        <div className="flex gap-4 justify-center">
                          <Button
                            onClick={() => answerFlashcard(false)}
                            variant="outline"
                            className="bg-red-500/20 border-red-500/30 text-red-300 hover:bg-red-500/30"
                          >
                            <ThumbsDown className="w-4 h-4 mr-2" />
                            Не помню
                          </Button>
                          <Button
                            onClick={() => answerFlashcard(true)}
                            className="bg-green-500/20 border-green-500/30 text-green-300 hover:bg-green-500/30"
                          >
                            <ThumbsUp className="w-4 h-4 mr-2" />
                            Помню
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Выбор режима */}
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Brain className="w-5 h-5 text-purple-400" />
                      Режим карточек
                    </CardTitle>
                    <CardDescription>
                      Запоминайте материал с помощью интервального повторения
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button
                        onClick={() => startFlashcards('all')}
                        className="h-24 flex-col bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      >
                        <Layers className="w-6 h-6 mb-2" />
                        Все темы
                        <span className="text-xs opacity-70 mt-1">
                          {currentGrade?.subjects.reduce((acc, s) => acc + s.topics.length, 0)} карточек
                        </span>
                      </Button>
                      <Button
                        onClick={() => startFlashcards('uncompleted')}
                        variant="outline"
                        className="h-24 flex-col bg-white/5 border-white/20 hover:bg-white/10"
                      >
                        <Target className="w-6 h-6 mb-2 text-amber-400" />
                        Неизученные
                        <span className="text-xs opacity-70 mt-1">
                          {currentGrade?.subjects.reduce((acc, s) => {
                            return acc + s.topics.filter(t => !progress[s.id]?.[t.id]).length
                          }, 0)} карточек
                        </span>
                      </Button>
                      <Button
                        onClick={() => startFlashcards('completed')}
                        variant="outline"
                        className="h-24 flex-col bg-white/5 border-white/20 hover:bg-white/10"
                      >
                        <CheckCircle className="w-6 h-6 mb-2 text-green-400" />
                        Повторить
                        <span className="text-xs opacity-70 mt-1">
                          {currentGrade?.subjects.reduce((acc, s) => {
                            return acc + s.topics.filter(t => progress[s.id]?.[t.id]).length
                          }, 0)} карточек
                        </span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Режим повторения */}
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Repeat className="w-5 h-5 text-cyan-400" />
                      Быстрое повторение
                    </CardTitle>
                    <CardDescription>
                      Повторите случайные 10 изученных тем из всех классов
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      onClick={startReview}
                      disabled={totalTopicsCompleted < 5}
                      className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:opacity-50"
                    >
                      <Shuffle className="w-4 h-4 mr-2" />
                      Начать повторение
                    </Button>
                    {totalTopicsCompleted < 5 && (
                      <p className="text-sm text-gray-400 mt-2">
                        Изучите хотя бы 5 тем для активации режима
                      </p>
                    )}
                  </CardContent>
                </Card>
                
                {/* Карточки для повторения (Spaced Repetition) */}
                {Object.keys(spacedRepetition).length > 0 && (
                  <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <Clock className="w-5 h-5 text-green-400" />
                        Повторить сегодня
                      </CardTitle>
                      <CardDescription>
                        Карточки, которые нужно повторить по алгоритму интервального повторения
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {(() => {
                        const now = new Date()
                        const dueCards = Object.entries(spacedRepetition)
                          .filter(([_, data]) => new Date(data.nextReview) <= now)
                          .sort((a, b) => new Date(a[1].nextReview).getTime() - new Date(b[1].nextReview).getTime())
                        
                        if (dueCards.length === 0) {
                          return (
                            <div className="text-center py-4 text-gray-400">
                              <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-400" />
                              <p>Все карточки повторены!</p>
                              <p className="text-sm">Новых карточек для сегодня нет</p>
                            </div>
                          )
                        }
                        
                        return (
                          <div className="space-y-3">
                            <p className="text-sm text-green-300 mb-3">
                              📚 {dueCards.length} карточек ждут повторения
                            </p>
                            <div className="max-h-40 overflow-y-auto space-y-2">
                              {dueCards.slice(0, 5).map(([topicId, data]) => {
                                // Find topic title
                                let topicTitle = ''
                                for (const grade of schoolData) {
                                  for (const subject of grade.subjects) {
                                    const topic = subject.topics.find(t => t.id === topicId)
                                    if (topic) {
                                      topicTitle = topic.title
                                      break
                                    }
                                  }
                                  if (topicTitle) break
                                }
                                
                                const daysSinceReview = Math.floor(
                                  (now.getTime() - new Date(data.lastReview).getTime()) / (1000 * 60 * 60 * 24)
                                )
                                
                                return (
                                  <div key={topicId} className="flex items-center gap-2 p-2 rounded bg-white/5 text-sm">
                                    <Clock className="w-4 h-4 text-amber-400" />
                                    <span className="text-white truncate flex-1">{topicTitle}</span>
                                    <span className="text-gray-400 text-xs">
                                      {daysSinceReview} дн. назад
                                    </span>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        )
                      })()}
                    </CardContent>
                  </Card>
                )}
                
                {/* Советы */}
                <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-amber-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white mb-1">Советы по запоминанию</h4>
                        <ul className="text-sm text-gray-400 space-y-1">
                          <li>• Повторяйте материал регулярно — лучше понемногу каждый день</li>
                          <li>• Отмечайте «Не помню», если сомневаетесь — система покажет тему ещё раз</li>
                          <li>• Используйте режим «Повторить» для закрепления изученного</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          {/* Таб экзамена */}
          <TabsContent value="exam" className="space-y-4">
            {examMode ? (
              <div className="max-w-2xl mx-auto">
                {!examFinished ? (
                  <>
                    {/* Прогресс экзамена */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400">
                        Вопрос {examQuestionIndex + 1} из {examQuestions.length}
                      </span>
                      <Badge className="bg-purple-500/20 text-purple-300">
                        Правильно: {examScore}
                      </Badge>
                    </div>
                    <Progress value={((examQuestionIndex + 1) / examQuestions.length) * 100} className="h-2 mb-6" />
                    
                    {/* Вопрос */}
                    <Card className="bg-gradient-to-br from-rose-500/20 to-orange-500/20 border-rose-500/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-white mb-6">
                          {examQuestions[examQuestionIndex]?.question}
                        </h3>
                        
                        <div className="space-y-3">
                          {examQuestions[examQuestionIndex]?.options.map((option: string, index: number) => {
                            const isSelected = examSelectedAnswer === index
                            const isCorrect = index === examQuestions[examQuestionIndex]?.correctAnswer
                            let bgClass = 'bg-white/5 hover:bg-white/10 border-white/10'
                            
                            if (examShowResult) {
                              if (isCorrect) bgClass = 'bg-green-500/20 border-green-500/30'
                              else if (isSelected && !isCorrect) bgClass = 'bg-red-500/20 border-red-500/30'
                            }
                            
                            return (
                              <button
                                key={index}
                                onClick={() => !examShowResult && answerExamQuestion(index)}
                                disabled={examShowResult}
                                className={`w-full p-4 rounded-xl border text-left transition-all ${bgClass}`}
                              >
                                <div className="flex items-center gap-3">
                                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium shrink-0">
                                    {String.fromCharCode(65 + index)}
                                  </span>
                                  <span className="text-white">{option}</span>
                                  {examShowResult && isCorrect && (
                                    <CheckCircle className="w-5 h-5 text-green-400 ml-auto" />
                                  )}
                                  {examShowResult && isSelected && !isCorrect && (
                                    <XCircle className="w-5 h-5 text-red-400 ml-auto" />
                                  )}
                                </div>
                              </button>
                            )
                          })}
                        </div>
                        
                        {examShowResult && (
                          <div className="mt-4">
                            <p className="text-sm text-gray-400 mb-4">
                              {examQuestions[examQuestionIndex]?.explanation}
                            </p>
                            <Button
                              onClick={nextExamQuestion}
                              className="w-full bg-gradient-to-r from-rose-600 to-orange-600"
                            >
                              {examQuestionIndex < examQuestions.length - 1 ? 'Следующий вопрос' : 'Завершить экзамен'}
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </>
                ) : (
                  /* Результаты экзамена */
                  <Card className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/30">
                    <CardContent className="p-8 text-center">
                      <div className="text-6xl mb-4">
                        {(examScore / examQuestions.length) >= 0.8 ? '🏆' : 
                         (examScore / examQuestions.length) >= 0.6 ? '⭐' : 
                         (examScore / examQuestions.length) >= 0.4 ? '📚' : '💪'}
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-2">
                        Экзамен завершён!
                      </h2>
                      <p className="text-gray-400 mb-4">
                        Вы ответили правильно на {examScore} из {examQuestions.length} вопросов
                      </p>
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
                        {Math.round((examScore / examQuestions.length) * 100)}%
                      </div>
                      <div className="flex gap-4 justify-center">
                        <Button
                          onClick={() => {
                            setExamMode(false)
                            setExamScore(0)
                            setExamQuestionIndex(0)
                            setExamFinished(false)
                          }}
                          variant="outline"
                          className="bg-white/5 border-white/20"
                        >
                          Вернуться к выбору
                        </Button>
                        <Button
                          onClick={() => startExam(examGrade!)}
                          className="bg-gradient-to-r from-purple-600 to-blue-600"
                        >
                          Попробовать снова
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            ) : (
              /* Выбор класса для экзамена */
              <div className="space-y-6">
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <FileText className="w-5 h-5 text-rose-400" />
                      Режим экзамена
                    </CardTitle>
                    <CardDescription>
                      Проверьте свои знания по всем предметам выбранного класса
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                      {schoolData.map(grade => {
                        const totalQuestions = grade.subjects.reduce((acc, s) => acc + (s.quiz?.length || 0), 0)
                        return (
                          <Button
                            key={grade.id}
                            onClick={() => startExam(grade.id)}
                            disabled={totalQuestions === 0}
                            className="h-24 flex-col bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700 disabled:opacity-50"
                          >
                            <GraduationCap className="w-6 h-6 mb-2" />
                            {grade.shortName}
                            <span className="text-xs opacity-70 mt-1">
                              {totalQuestions} вопросов
                            </span>
                          </Button>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Правила экзамена */}
                <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-amber-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white mb-2">Правила экзамена</h4>
                        <ul className="text-sm text-gray-400 space-y-1">
                          <li>• Экзамен состоит из 20 случайных вопросов по всем предметам класса</li>
                          <li>• За каждый правильный ответ начисляются очки опыта</li>
                          <li>• Результат 80%+ даёт бонус 100 XP, 60%+ — 50 XP</li>
                          <li>• После экзамена можно посмотреть объяснения к вопросам</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          {/* Таб челленджа */}
          <TabsContent value="challenge" className="space-y-4">
            {dailyChallenge && dailyChallenge.questions.length > 0 ? (
              dailyChallenge.completed ? (
                /* Результат челленджа */
                <Card className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border-amber-500/30">
                  <CardContent className="p-8 text-center">
                    <div className="text-6xl mb-4">🏆</div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Челлендж завершён!
                    </h2>
                    <p className="text-gray-400 mb-4">
                      Вы ответили правильно на {dailyChallenge.score} из {dailyChallenge.questions.length} вопросов
                    </p>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400 mb-6">
                      {Math.round((dailyChallenge.score / dailyChallenge.questions.length) * 100)}%
                    </div>
                    <Badge className="bg-amber-500/20 text-amber-300 text-lg px-4 py-2">
                      <Gift className="w-5 h-5 mr-2" />
                      Бонус получен!
                    </Badge>
                    <p className="text-sm text-gray-400 mt-4">
                      Приходите завтра за новым челленджем!
                    </p>
                  </CardContent>
                </Card>
              ) : (
                /* Активный челлендж */
                <div className="max-w-2xl mx-auto">
                  {/* Прогресс */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">
                      Вопрос {dailyChallenge.currentIndex + 1} из {dailyChallenge.questions.length}
                    </span>
                    <Badge className="bg-amber-500/20 text-amber-300">
                      <Zap className="w-3.5 h-3.5 mr-1" />
                      Ежедневный челлендж
                    </Badge>
                  </div>
                  <Progress value={((dailyChallenge.currentIndex + 1) / dailyChallenge.questions.length) * 100} className="h-2 mb-6" />
                  
                  {/* Вопрос */}
                  <Card className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-amber-500/30">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-6">
                        {dailyChallenge.questions[dailyChallenge.currentIndex]?.question}
                      </h3>
                      
                      <div className="space-y-3">
                        {dailyChallenge.questions[dailyChallenge.currentIndex]?.options.map((option: string, index: number) => {
                          const isSelected = dailyChallenge.selectedAnswer === index
                          const isCorrect = index === dailyChallenge.questions[dailyChallenge.currentIndex]?.correctAnswer
                          let bgClass = 'bg-white/5 hover:bg-white/10 border-white/10'
                          
                          if (dailyChallenge.showResult) {
                            if (isCorrect) bgClass = 'bg-green-500/20 border-green-500/30'
                            else if (isSelected && !isCorrect) bgClass = 'bg-red-500/20 border-red-500/30'
                          }
                          
                          return (
                            <button
                              key={index}
                              onClick={() => !dailyChallenge.showResult && answerChallengeQuestion(index)}
                              disabled={dailyChallenge.showResult}
                              className={`w-full p-4 rounded-xl border text-left transition-all ${bgClass}`}
                            >
                              <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium shrink-0">
                                  {String.fromCharCode(65 + index)}
                                </span>
                                <span className="text-white">{option}</span>
                                {dailyChallenge.showResult && isCorrect && (
                                  <CheckCircle className="w-5 h-5 text-green-400 ml-auto" />
                                )}
                                {dailyChallenge.showResult && isSelected && !isCorrect && (
                                  <XCircle className="w-5 h-5 text-red-400 ml-auto" />
                                )}
                              </div>
                            </button>
                          )
                        })}
                      </div>
                      
                      {dailyChallenge.showResult && (
                        <div className="mt-4">
                          <p className="text-sm text-gray-400 mb-4">
                            {dailyChallenge.questions[dailyChallenge.currentIndex]?.explanation}
                          </p>
                          <Button
                            onClick={nextChallengeQuestion}
                            className="w-full bg-gradient-to-r from-amber-600 to-orange-600"
                          >
                            {dailyChallenge.currentIndex < dailyChallenge.questions.length - 1 ? 'Следующий вопрос' : 'Завершить челлендж'}
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )
            ) : (
              /* Начало челленджа */
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Zap className="w-5 h-5 text-amber-400" />
                      Ежедневный челлендж
                    </CardTitle>
                    <CardDescription>
                      Проверьте свои знания в ежедневном тесте из 10 вопросов
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                        <p className="text-2xl font-bold text-amber-400">10</p>
                        <p className="text-xs text-gray-400">вопросов</p>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                        <p className="text-2xl font-bold text-green-400">100</p>
                        <p className="text-xs text-gray-400">XP за 100%</p>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                        <p className="text-2xl font-bold text-purple-400">1</p>
                        <p className="text-xs text-gray-400">попытка в день</p>
                      </div>
                    </div>
                    
                    <Button
                      onClick={startDailyChallenge}
                      className="w-full h-14 text-lg bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                    >
                      <Zap className="w-5 h-5 mr-2" />
                      Начать челлендж
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Правила челленджа */}
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Правила</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Каждый день новый набор вопросов
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Вопросы из всех предметов и классов
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        100% результат = 100 XP бонус
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        80%+ результат = 70 XP бонус
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        60%+ результат = 50 XP бонус
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}
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

          {/* Таб избранного */}
          <TabsContent value="bookmarks" className="space-y-4">
            {/* Рекомендации */}
            {recommendedTopics.length > 0 && (
              <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-cyan-400" />
                    Рекомендуется изучить
                  </CardTitle>
                  <CardDescription>
                    Темы из предметов, которые вы уже начали изучать
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {recommendedTopics.map(({ topic, subjectId, subjectTitle, gradeName }) => (
                      <div 
                        key={topic.id}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition-all"
                        onClick={() => {
                          toggleTopic(subjectId, topic)
                        }}
                      >
                        <Checkbox
                          checked={progress[subjectId]?.[topic.id] || false}
                          className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                          onCheckedChange={() => {}}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-white truncate">{topic.title}</span>
                          </div>
                          <p className="text-xs text-gray-400 truncate">{subjectTitle} • {gradeName}</p>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleBookmark(topic.id)
                          }}
                          className="h-7 w-7 p-0"
                        >
                          <Bookmark className={`w-4 h-4 ${bookmarks.has(topic.id) ? 'text-amber-400 fill-amber-400' : 'text-gray-400'}`} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Закладки */}
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Bookmark className="w-5 h-5 text-amber-400" />
                  Избранные темы
                </CardTitle>
                <CardDescription>
                  Темы, которые вы сохранили для быстрого доступа
                </CardDescription>
              </CardHeader>
              <CardContent>
                {bookmarkedTopics.length === 0 ? (
                  <div className="text-center py-8 text-gray-400">
                    <Bookmark className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>Нет избранных тем</p>
                    <p className="text-sm mt-1">Нажмите на иконку закладки рядом с темой, чтобы добавить её в избранное</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {bookmarkedTopics.map(({ topic, subjectId, subjectTitle, gradeName }) => (
                      <div 
                        key={topic.id}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className={`text-white truncate ${progress[subjectId]?.[topic.id] ? 'line-through text-green-300' : ''}`}>
                              {topic.title}
                            </span>
                            {progress[subjectId]?.[topic.id] && (
                              <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                            )}
                          </div>
                          <p className="text-xs text-gray-400 truncate">{subjectTitle} • {gradeName}</p>
                          {notes[topic.id] && (
                            <p className="text-xs text-amber-300 mt-1 truncate">
                              📝 {notes[topic.id]}
                            </p>
                          )}
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            setSelectedTopic(topic)
                            setTopicDialogOpen(true)
                          }}
                          className="h-7 w-7 p-0 text-gray-400 hover:text-white"
                        >
                          <BookOpen className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => toggleBookmark(topic.id)}
                          className="h-7 w-7 p-0 text-amber-400"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
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

            {/* Цели обучения */}
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-400" />
                  Цели обучения
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Дневная цель */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white">Дневная цель</span>
                    <span className="text-gray-400">{learningGoals.dailyTopics}/{learningGoals.dailyTarget} тем</span>
                  </div>
                  <Progress 
                    value={(learningGoals.dailyTopics / learningGoals.dailyTarget) * 100} 
                    className="h-2"
                  />
                </div>
                
                {/* Недельная цель */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white">Недельная цель</span>
                    <span className="text-gray-400">{learningGoals.weeklyTopics}/{learningGoals.weeklyTarget} тем</span>
                  </div>
                  <Progress 
                    value={(learningGoals.weeklyTopics / learningGoals.weeklyTarget) * 100} 
                    className="h-2"
                  />
                </div>
                
                {/* Месячная цель */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white">Месячная цель</span>
                    <span className="text-gray-400">{learningGoals.monthlyTopics}/{learningGoals.monthlyTarget} тем</span>
                  </div>
                  <Progress 
                    value={(learningGoals.monthlyTopics / learningGoals.monthlyTarget) * 100} 
                    className="h-2"
                  />
                </div>
                
                <div className="pt-3 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    <span>Настройте цели в зависимости от вашего темпа обучения</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Таблица лидеров */}
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-400" />
                  Таблица лидеров
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {leaderboard.map((player, index) => {
                    const isUser = player.isUser
                    const userPoints = userStats.totalPoints
                    const displayPoints = isUser ? userPoints : player.points
                    const maxPoints = Math.max(...leaderboard.map(p => isUser ? userPoints : p.points), userPoints)
                    
                    return (
                      <div 
                        key={index}
                        className={`flex items-center gap-3 p-3 rounded-lg ${
                          isUser 
                            ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30' 
                            : 'bg-white/5'
                        }`}
                      >
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          index === 0 ? 'bg-amber-500/20 text-amber-400' :
                          index === 1 ? 'bg-gray-400/20 text-gray-300' :
                          index === 2 ? 'bg-orange-500/20 text-orange-400' :
                          'bg-white/10 text-gray-400'
                        }`}>
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <p className={`font-medium ${isUser ? 'text-purple-300' : 'text-white'}`}>
                            {isUser ? 'Вы' : player.name}
                          </p>
                          <div className="h-1.5 bg-white/10 rounded-full mt-1 overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${isUser ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-white/30'}`}
                              style={{ width: `${(displayPoints / maxPoints) * 100}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-amber-400 font-medium">{displayPoints.toLocaleString()}</span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

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

            {/* Активность за неделю */}
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-400" />
                  Активность за неделю
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between gap-2 h-32">
                  {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, index) => {
                    // Используем реальные данные активности (в минутах)
                    const maxActivity = Math.max(...weeklyActivity, 3600) // Максимум за день - 1 час
                    const activityPercent = maxActivity > 0 ? (weeklyActivity[index] / maxActivity) * 100 : 0
                    const isToday = index === (new Date().getDay() + 6) % 7 // Пн=0, Вс=6
                    const hours = Math.floor(weeklyActivity[index] / 3600)
                    const minutes = Math.floor((weeklyActivity[index] % 3600) / 60)
                    const timeStr = hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`
                    
                    return (
                      <div key={day} className="flex-1 flex flex-col items-center gap-1 group relative">
                        {weeklyActivity[index] > 0 && (
                          <div className="absolute -top-8 bg-purple-600 rounded px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            {timeStr}
                          </div>
                        )}
                        <div 
                          className={`w-full rounded-t transition-all ${
                            isToday 
                              ? 'bg-gradient-to-t from-purple-500 to-blue-500' 
                              : 'bg-gradient-to-t from-purple-500/50 to-blue-500/50'
                          }`}
                          style={{ height: `${Math.max(activityPercent, 5)}%` }}
                        />
                        <span className={`text-xs ${isToday ? 'text-white font-bold' : 'text-gray-400'}`}>
                          {day}
                        </span>
                      </div>
                    )
                  })}
                </div>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Всего за неделю:</span>
                    <span className="text-white font-medium">
                      {Math.floor(weeklyActivity.reduce((a, b) => a + b, 0) / 3600)}ч {Math.floor((weeklyActivity.reduce((a, b) => a + b, 0) % 3600) / 60)}м
                    </span>
                  </div>
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
          
          {/* Заметки */}
          {selectedTopic && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Pencil className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Ваша заметка:</span>
              </div>
              <Input
                placeholder="Добавьте заметку к этой теме..."
                value={notes[selectedTopic.id] || ''}
                onChange={(e) => saveNote(selectedTopic.id, e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              />
            </div>
          )}
          
          <DialogFooter className="flex gap-2 flex-wrap sm:flex-nowrap">
            {selectedTopic && (
              <Button
                variant="outline"
                onClick={() => toggleBookmark(selectedTopic.id)}
                className={`bg-white/5 border-white/20 ${bookmarks.has(selectedTopic.id) ? 'text-amber-400' : 'text-gray-300'}`}
              >
                <Bookmark className={`w-4 h-4 mr-2 ${bookmarks.has(selectedTopic.id) ? 'fill-amber-400' : ''}`} />
                {bookmarks.has(selectedTopic.id) ? 'В избранном' : 'В избранное'}
              </Button>
            )}
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

      {/* Диалог режима повторения */}
      <Dialog open={reviewMode} onOpenChange={setReviewMode}>
        <DialogContent className="bg-slate-900 border-white/10 text-white max-w-2xl max-h-[80vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Repeat className="w-5 h-5 text-cyan-400" />
              Повторение материала
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Тема {currentReviewIndex + 1} из {reviewTopics.length}
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex gap-1 mb-4">
            {reviewTopics.map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full ${
                  i < currentReviewIndex ? 'bg-cyan-500' :
                  i === currentReviewIndex ? 'bg-purple-500' : 'bg-white/10'
                }`}
              />
            ))}
          </div>
          
          {reviewTopics.length > 0 && currentReviewIndex < reviewTopics.length && (
            <ScrollArea className="h-[50vh]">
              <div className="space-y-4 pr-4">
                <Badge className="bg-cyan-500/20 text-cyan-300">
                  {reviewTopics[currentReviewIndex].subjectTitle}
                </Badge>
                <h3 className="text-xl font-bold text-white">
                  {reviewTopics[currentReviewIndex].topic.title}
                </h3>
                <div 
                  className="prose prose-invert prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: reviewTopics[currentReviewIndex].topic.theory }}
                />
                
                {reviewTopics[currentReviewIndex].topic.examples.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-white font-medium">Примеры:</h4>
                    <ul className="space-y-1">
                      {reviewTopics[currentReviewIndex].topic.examples.map((example, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300">
                          <ChevronRight className="w-4 h-4 text-cyan-400" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </ScrollArea>
          )}
          
          <DialogFooter className="flex gap-2">
            <Button
              onClick={() => {
                if (currentReviewIndex > 0) {
                  setCurrentReviewIndex(prev => prev - 1)
                }
              }}
              disabled={currentReviewIndex === 0}
              variant="outline"
              className="bg-white/5 border-white/20"
            >
              Назад
            </Button>
            <Button
              onClick={() => {
                if (currentReviewIndex < reviewTopics.length - 1) {
                  setCurrentReviewIndex(prev => prev + 1)
                } else {
                  setReviewMode(false)
                  setReviewCompleted(true)
                  addExperience(20)
                  setShowConfetti(true)
                  setTimeout(() => setShowConfetti(false), 3000)
                }
              }}
              className="bg-gradient-to-r from-cyan-600 to-blue-600"
            >
              {currentReviewIndex < reviewTopics.length - 1 ? 'Далее' : 'Завершить'}
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
        
        @keyframes slide-in {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
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
