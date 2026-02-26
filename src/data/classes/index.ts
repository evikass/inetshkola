// ==================== ИНДЕКС КЛАССОВ ====================
// Основные данные классов находятся в /src/app/page.tsx (schoolData)
// Этот файл служит для будущей модульной структуры

import type { Grade } from '../types'

// Заглушки классов для модульной структуры
import { grade0 } from './class-0'
import { grade1 } from './class-1'
import { grade2 } from './class-2'
import { grade3 } from './class-3'
import { grade4 } from './class-4'
import { grade5 } from './class-5'
import { grade6 } from './class-6'
import { grade7 } from './class-7'
import { grade8 } from './class-8'
import { grade9 } from './class-9'
import { grade10 } from './class-10'
import { grade11 } from './class-11'

// Массив классов (заглушки - полные данные в page.tsx)
export const gradesData: Grade[] = [
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
]

// Функция для получения класса по ID
export function getGradeById(id: number): Grade | undefined {
  return gradesData.find(grade => grade.id === id)
}

// Функция для получения предмета по ID
export function getSubjectById(gradeId: number, subjectId: string) {
  const grade = getGradeById(gradeId)
  return grade?.subjects.find(subject => subject.id === subjectId)
}

// Функция для получения темы по ID
export function getTopicById(gradeId: number, subjectId: string, topicId: string) {
  const subject = getSubjectById(gradeId, subjectId)
  return subject?.topics.find(topic => topic.id === topicId)
}

// Экспорт отдельных классов
export { 
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
}
