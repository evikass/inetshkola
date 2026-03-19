// ==================== ЕЖЕДНЕВНЫЕ ЗАДАНИЯ ====================

import type { DailyTask } from './types'

export const dailyTasksData: DailyTask[] = [
  { 
    id: 'daily_topics', 
    title: 'Изучить темы', 
    description: 'Изучите 3 темы сегодня', 
    target: 3, 
    progress: 0, 
    reward: 30, 
    completed: false, 
    type: 'topics' 
  },
  { 
    id: 'daily_quiz', 
    title: 'Пройти тест', 
    description: 'Пройдите 1 квиз сегодня', 
    target: 1, 
    progress: 0, 
    reward: 25, 
    completed: false, 
    type: 'quizzes' 
  },
  { 
    id: 'daily_points', 
    title: 'Набрать очки', 
    description: 'Наберите 50 очков сегодня', 
    target: 50, 
    progress: 0, 
    reward: 20, 
    completed: false, 
    type: 'points' 
  },
  { 
    id: 'daily_streak', 
    title: 'Поддержать серию', 
    description: 'Занимайтесь без перерыва', 
    target: 1, 
    progress: 0, 
    reward: 15, 
    completed: false, 
    type: 'topics' 
  },
  { 
    id: 'daily_perfect', 
    title: 'Идеальный тест', 
    description: 'Получите 100% в квизе', 
    target: 1, 
    progress: 0, 
    reward: 50, 
    completed: false, 
    type: 'quizzes' 
  }
]

// Функция для генерации случайных ежедневных заданий
export function generateDailyTasks(): DailyTask[] {
  const allTasks = [...dailyTasksData]
  const shuffled = allTasks.sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 3).map(task => ({
    ...task,
    progress: 0,
    completed: false
  }))
}
