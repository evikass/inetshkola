// ==================== ТИПЫ ДАННЫХ ====================
// Иерархия: Grade (Класс) → Subject (Предмет) → Section (Раздел) → Topic (Тема) → Lesson (Урок)
// 
// ПОДДЕРЖИВАЕТСЯ ДВЕ СТРУКТУРЫ:
// 1. Старая: Subject → topics[] (для обратной совместимости)
// 2. Новая: Subject → sections[] → topics[] → lessons[] (рекомендуемая)

import { LucideIcon } from 'lucide-react'

// ==================== УРОВЕНЬ 5: УРОК (Lesson) ====================
export interface Exercise {
  id: string
  type: 'choice' | 'input' | 'match' | 'order'
  question: string
  options?: string[]           // Для choice
  correctAnswer: string | number
  explanation?: string
}

export interface Lesson {
  id: string                   // Формат: math1-s1-t1-l1
  title: string
  content: string              // HTML контент урока
  videoUrl?: string            // Опциональная ссылка на видео
  exercises?: Exercise[]
  completed?: boolean
  order: number
  estimatedTime?: number       // Минуты
}

// ==================== УРОВЕНЬ 4: ТЕМА (Topic) ====================
export interface Topic {
  id: string                   // Формат: math1-t1 (старый) или math1-s1-t1 (новый)
  title: string
  description: string
  theory: string               // HTML контент теории
  examples: string[]
  completed: boolean
  difficulty: 'easy' | 'medium' | 'hard'
  estimatedTime: number        // Минуты
  lessons?: Lesson[]           // Новое: уроки внутри темы
  image?: string               // Путь к изображению
}

// ==================== УРОВЕНЬ 3: РАЗДЕЛ (Section) ====================
export interface Section {
  id: string                   // Формат: math1-s1
  title: string
  description?: string
  order: number
  topics: Topic[]
  image?: string               // Путь к изображению
}

// ==================== ТЕСТ (Quiz) ====================
export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number        // Индекс правильного ответа (0-based)
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  points: number
}

// ==================== УРОВЕНЬ 2: ПРЕДМЕТ (Subject) ====================
export interface Subject {
  id: string                   // Формат: math1
  title: string
  icon: React.ReactNode
  color: string                // Tailwind класс цвета
  gradient: string             // Tailwind градиент
  description: string
  
  // СТАРАЯ СТРУКТУРА (обратная совместимость):
  topics?: Topic[]
  quiz?: QuizQuestion[]
  
  // НОВАЯ СТРУКТУРА (рекомендуемая):
  sections?: Section[]
  
  image?: string               // Путь к изображению
}

// ==================== УРОВЕНЬ 1: КЛАСС (Grade) ====================
export interface Grade {
  id: number                   // 0-11
  name: string                 // "1 класс"
  shortName: string            // "1 кл."
  subjects: Subject[]
  image?: string               // Путь к изображению
}

// ==================== ДОСТИЖЕНИЯ И НАГРАДЫ ====================
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
  type: 'topics' | 'quizzes' | 'lessons' | 'points'
}

// ==================== СТАТИСТИКА ПОЛЬЗОВАТЕЛЯ ====================
export interface UserStats {
  level: number
  experience: number
  totalPoints: number
  topicsCompleted: number
  lessonsCompleted: number
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

// ==================== НАВИГАЦИЯ ====================
export interface BreadcrumbItem {
  label: string
  path: string
}

export type NavigationLevel = 'grade' | 'subject' | 'section' | 'topic' | 'lesson'

// ==================== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ====================

/**
 * Получить все темы из предмета (поддерживает обе структуры)
 */
export function getAllTopics(subject: Subject): Topic[] {
  if (subject.sections && subject.sections.length > 0) {
    // Новая структура: sections → topics
    return subject.sections.flatMap(section => section.topics)
  }
  // Старая структура: topics напрямую
  return subject.topics || []
}

/**
 * Получить все уроки из предмета
 */
export function getAllLessons(subject: Subject): Lesson[] {
  const topics = getAllTopics(subject)
  return topics.flatMap(topic => topic.lessons || [])
}

/**
 * Проверить, использует ли предмет новую структуру
 */
export function hasNewStructure(subject: Subject): boolean {
  return !!(subject.sections && subject.sections.length > 0)
}
