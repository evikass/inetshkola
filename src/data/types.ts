// ==================== ТИПЫ ДАННЫХ ====================

import { LucideIcon } from 'lucide-react'

export interface Topic {
  id: string
  title: string
  description: string
  theory: string
  examples: string[]
  completed: boolean
  difficulty: 'easy' | 'medium' | 'hard'
  estimatedTime: number // в минутах
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  points: number
}

export interface Subject {
  id: string
  title: string
  icon: React.ReactNode
  color: string
  gradient: string
  description: string
  topics: Topic[]
  quiz: QuizQuestion[]
}

export interface Grade {
  id: number
  name: string
  shortName: string
  subjects: Subject[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  unlocked: boolean
  unlockedAt?: string
  condition: string
  points: number
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

export interface DailyTask {
  id: string
  title: string
  description: string
  target: number
  progress: number
  reward: number
  completed: boolean
  type: 'topics' | 'quizzes' | 'points'
}

export interface UserStats {
  level: number
  experience: number
  totalPoints: number
  topicsCompleted: number
  quizzesCompleted: number
  perfectQuizzes: number
  streak: number
  maxStreak: number
  lastActiveDate: string
  totalStudyTime: number
  rank: string
}

export interface Rank {
  name: string
  minLevel: number
  icon: string
  color: string
}
