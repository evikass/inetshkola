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
  }
]
