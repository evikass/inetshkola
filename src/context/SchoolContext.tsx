'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import type { UserStats, DailyTask, Achievement } from '@/data/types'
import { RANKS, XP_PER_LEVEL, STREAK_BONUS } from '@/data/constants'
import { achievementsData as ACHIEVEMENTS } from '@/data/achievements'
import { dailyTasksData as DAILY_TASKS } from '@/data/daily-tasks'

interface SchoolContextType {
  // User state
  userStats: UserStats
  setUserStats: (stats: UserStats) => void
  
  // Achievements
  achievements: Achievement[]
  setAchievements: (achievements: Achievement[]) => void
  
  // Daily tasks
  dailyTasks: DailyTask[]
  setDailyTasks: (tasks: DailyTask[]) => void
  
  // Completed topics
  completedTopics: string[]
  setCompletedTopics: (topics: string[]) => void
  
  // Quiz state
  quizResults: Record<string, { correct: number; total: number }>
  setQuizResults: (results: Record<string, { correct: number; total: number }>) => void
  
  // Actions
  addExperience: (xp: number) => void
  addPoints: (points: number) => void
  completeTopic: (topicId: string) => void
  completeQuiz: (subjectId: string, correct: number, total: number) => void
  checkAchievements: () => void
  resetDailyTasks: () => void
  getRank: () => { name: string; icon: string; color: string }
}

const DEFAULT_USER_STATS: UserStats = {
  level: 1,
  experience: 0,
  totalPoints: 0,
  topicsCompleted: 0,
  lessonsCompleted: 0,
  quizzesCompleted: 0,
  perfectQuizzes: 0,
  streak: 0,
  maxStreak: 0,
  lastActiveDate: new Date().toISOString().split('T')[0],
  totalStudyTime: 0,
  rank: 'Новичок'
}

const SchoolContext = createContext<SchoolContextType | undefined>(undefined)

export function SchoolProvider({ children }: { children: ReactNode }) {
  const [userStats, setUserStats] = useState<UserStats>(DEFAULT_USER_STATS)
  const [achievements, setAchievements] = useState<Achievement[]>(ACHIEVEMENTS)
  const [dailyTasks, setDailyTasks] = useState<DailyTask[]>(DAILY_TASKS)
  const [completedTopics, setCompletedTopics] = useState<string[]>([])
  const [quizResults, setQuizResults] = useState<Record<string, { correct: number; total: number }>>({})

  // Load from localStorage
  useEffect(() => {
    const savedStats = localStorage.getItem('school-user-stats')
    const savedAchievements = localStorage.getItem('school-achievements')
    const savedTasks = localStorage.getItem('school-daily-tasks')
    const savedTopics = localStorage.getItem('school-completed-topics')
    const savedQuizResults = localStorage.getItem('school-quiz-results')

    if (savedStats) {
      try {
        setUserStats(JSON.parse(savedStats))
      } catch (e) {
        console.error('Error loading user stats:', e)
      }
    }

    if (savedAchievements) {
      try {
        setAchievements(JSON.parse(savedAchievements))
      } catch (e) {
        console.error('Error loading achievements:', e)
      }
    }

    if (savedTasks) {
      try {
        setDailyTasks(JSON.parse(savedTasks))
      } catch (e) {
        console.error('Error loading daily tasks:', e)
      }
    }

    if (savedTopics) {
      try {
        setCompletedTopics(JSON.parse(savedTopics))
      } catch (e) {
        console.error('Error loading completed topics:', e)
      }
    }

    if (savedQuizResults) {
      try {
        setQuizResults(JSON.parse(savedQuizResults))
      } catch (e) {
        console.error('Error loading quiz results:', e)
      }
    }
  }, [])

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('school-user-stats', JSON.stringify(userStats))
  }, [userStats])

  useEffect(() => {
    localStorage.setItem('school-achievements', JSON.stringify(achievements))
  }, [achievements])

  useEffect(() => {
    localStorage.setItem('school-daily-tasks', JSON.stringify(dailyTasks))
  }, [dailyTasks])

  useEffect(() => {
    localStorage.setItem('school-completed-topics', JSON.stringify(completedTopics))
  }, [completedTopics])

  useEffect(() => {
    localStorage.setItem('school-quiz-results', JSON.stringify(quizResults))
  }, [quizResults])

  // Check streak on mount
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]
    const lastActive = userStats.lastActiveDate
    
    if (lastActive !== today) {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      const yesterdayStr = yesterday.toISOString().split('T')[0]
      
      if (lastActive === yesterdayStr) {
        setUserStats(prev => ({
          ...prev,
          streak: prev.streak + 1,
          maxStreak: Math.max(prev.maxStreak, prev.streak + 1),
          lastActiveDate: today
        }))
      } else if (lastActive !== today) {
        setUserStats(prev => ({
          ...prev,
          streak: 1,
          lastActiveDate: today
        }))
      }
    }
  }, [])

  const getRank = useCallback(() => {
    for (let i = RANKS.length - 1; i >= 0; i--) {
      if (userStats.level >= RANKS[i].minLevel) {
        return RANKS[i]
      }
    }
    return RANKS[0]
  }, [userStats.level])

  const addExperience = useCallback((xp: number) => {
    setUserStats(prev => {
      const bonusXp = prev.streak >= 3 ? Math.floor(xp * STREAK_BONUS) : xp
      let newExp = prev.experience + bonusXp
      let newLevel = prev.level
      
      while (newExp >= XP_PER_LEVEL) {
        newExp -= XP_PER_LEVEL
        newLevel++
      }
      
      return {
        ...prev,
        experience: newExp,
        level: newLevel,
        totalPoints: prev.totalPoints + bonusXp,
        rank: RANKS.find(r => r.minLevel <= newLevel)?.name || prev.rank
      }
    })
  }, [])

  const addPoints = useCallback((points: number) => {
    setUserStats(prev => ({
      ...prev,
      totalPoints: prev.totalPoints + points
    }))
  }, [])

  const completeTopic = useCallback((topicId: string) => {
    if (completedTopics.includes(topicId)) return
    
    setCompletedTopics(prev => [...prev, topicId])
    setUserStats(prev => ({
      ...prev,
      topicsCompleted: prev.topicsCompleted + 1
    }))
    
    setDailyTasks(prev => prev.map(task => {
      if (task.type === 'topics' && !task.completed) {
        const newProgress = task.progress + 1
        return {
          ...task,
          progress: newProgress,
          completed: newProgress >= task.target
        }
      }
      return task
    }))
    
    addExperience(15)
  }, [completedTopics, addExperience])

  const completeQuiz = useCallback((subjectId: string, correct: number, total: number) => {
    setQuizResults(prev => ({
      ...prev,
      [subjectId]: { correct, total }
    }))
    
    setUserStats(prev => ({
      ...prev,
      quizzesCompleted: prev.quizzesCompleted + 1,
      perfectQuizzes: correct === total ? prev.perfectQuizzes + 1 : prev.perfectQuizzes
    }))
    
    setDailyTasks(prev => prev.map(task => {
      if (task.type === 'quizzes' && !task.completed) {
        const newProgress = task.progress + 1
        return {
          ...task,
          progress: newProgress,
          completed: newProgress >= task.target
        }
      }
      return task
    }))
    
    const points = correct * 10
    addPoints(points)
    addExperience(points)
  }, [addPoints, addExperience])

  const checkAchievements = useCallback(() => {
    setAchievements(prev => prev.map(achievement => {
      if (achievement.unlocked) return achievement
      
      let unlocked = false
      
      switch (achievement.id) {
        case 'first-lesson':
          unlocked = completedTopics.length >= 1
          break
        case 'first-quiz':
          unlocked = userStats.quizzesCompleted >= 1
          break
        case 'streak-3':
          unlocked = userStats.streak >= 3
          break
        case 'streak-7':
          unlocked = userStats.streak >= 7
          break
        case 'streak-30':
          unlocked = userStats.streak >= 30
          break
        case 'level-5':
          unlocked = userStats.level >= 5
          break
        case 'level-10':
          unlocked = userStats.level >= 10
          break
        case 'level-25':
          unlocked = userStats.level >= 25
          break
        case 'level-50':
          unlocked = userStats.level >= 50
          break
        case 'topics-10':
          unlocked = userStats.topicsCompleted >= 10
          break
        case 'topics-50':
          unlocked = userStats.topicsCompleted >= 50
          break
        case 'topics-100':
          unlocked = userStats.topicsCompleted >= 100
          break
        case 'quizzes-10':
          unlocked = userStats.quizzesCompleted >= 10
          break
        case 'quizzes-50':
          unlocked = userStats.quizzesCompleted >= 50
          break
        case 'perfect-quiz':
          unlocked = userStats.perfectQuizzes >= 1
          break
        case 'perfect-5':
          unlocked = userStats.perfectQuizzes >= 5
          break
        case 'points-100':
          unlocked = userStats.totalPoints >= 100
          break
        case 'points-1000':
          unlocked = userStats.totalPoints >= 1000
          break
        case 'points-10000':
          unlocked = userStats.totalPoints >= 10000
          break
        default:
          break
      }
      
      if (unlocked && !achievement.unlocked) {
        addPoints(achievement.points)
        return {
          ...achievement,
          unlocked: true,
          unlockedAt: new Date().toISOString()
        }
      }
      
      return achievement
    }))
  }, [completedTopics.length, userStats, addPoints])

  useEffect(() => {
    checkAchievements()
  }, [checkAchievements])

  const resetDailyTasks = useCallback(() => {
    setDailyTasks(DAILY_TASKS.map(task => ({
      ...task,
      progress: 0,
      completed: false
    })))
  }, [])

  return (
    <SchoolContext.Provider value={{
      userStats,
      setUserStats,
      achievements,
      setAchievements,
      dailyTasks,
      setDailyTasks,
      completedTopics,
      setCompletedTopics,
      quizResults,
      setQuizResults,
      addExperience,
      addPoints,
      completeTopic,
      completeQuiz,
      checkAchievements,
      resetDailyTasks,
      getRank
    }}>
      {children}
    </SchoolContext.Provider>
  )
}

export function useSchool() {
  const context = useContext(SchoolContext)
  if (!context) {
    throw new Error('useSchool must be used within a SchoolProvider')
  }
  return context
}
