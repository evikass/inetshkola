// ==================== ЭКСПОРТ ДАННЫХ ====================

// Типы
export type { 
  Grade, 
  Subject, 
  Topic, 
  QuizQuestion, 
  Achievement, 
  DailyTask, 
  UserStats, 
  Rank 
} from './types'

// Константы
export { RANKS, XP_PER_LEVEL, STREAK_BONUS } from './constants'

// Достижения
export { achievementsData } from './achievements'

// Ежедневные задания
export { dailyTasksData } from './daily-tasks'

// Классы
export { 
  gradesData, 
  getGradeById, 
  getSubjectById, 
  getTopicById,
  grade0, 
  grade1, 
  grade2, 
  grade3, 
  grade4, 
  grade5, 
  grade6, 
  grade7, 
  grade8, 
  grade9, 
  grade10, 
  grade11 
} from './classes'
