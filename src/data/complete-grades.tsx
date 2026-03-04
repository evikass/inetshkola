// Объединённые данные для всех классов с дополнительными предметами
// Используйте этот файл для получения полного набора данных

import type { Subject } from './types'

// Импорт основных данных классов
import { grade1Subjects as baseGrade1 } from './grade1-class'
import { grade2Subjects as baseGrade2 } from './grade2-class'
import { grade3Subjects as baseGrade3 } from './grade3-class'
import { grade4Subjects as baseGrade4 } from './grade4-class'

// Импорт дополнительных предметов
import {
  additionalGrade1Subjects,
  additionalGrade2Subjects,
  additionalGrade3Subjects,
  additionalGrade4Subjects,
  literatureGrade1,
  technologyGrade1,
  artGrade1,
  musicGrade1,
  peGrade1,
  englishGrade1
} from './additional-subjects'

// Импорт расширенного контента
import {
  mathGrade1AdditionalSections,
  mathGrade1AdditionalQuiz,
  russianGrade1AdditionalSections,
  worldGrade1AdditionalSections,
  mergeAdditionalSections,
  mergeAdditionalQuiz
} from './expanded-content'

// ==================== ФУНКЦИИ ОБЪЕДИНЕНИЯ ====================

/**
 * Добавляет дополнительные разделы к предмету
 */
function addSections(subject: Subject, newSections: any[]): Subject {
  return {
    ...subject,
    sections: [...(subject.sections || []), ...newSections]
  }
}

/**
 * Добавляет тесты к предмету
 */
function addQuiz(subject: Subject, newQuiz: any[]): Subject {
  return {
    ...subject,
    quiz: [...(subject.quiz || []), ...newQuiz]
  }
}

// ==================== ОБЪЕДИНЁННЫЕ ДАННЫЕ ====================

// 1 класс — полный набор
export const grade1Complete: Subject[] = [
  // Расширяем существующие предметы
  ...baseGrade1.map(subject => {
    switch (subject.id) {
      case 'math1':
        return addSections(addQuiz(subject, mathGrade1AdditionalQuiz), mathGrade1AdditionalSections)
      case 'russian1':
        return addSections(subject, russianGrade1AdditionalSections)
      case 'world1':
        return addSections(subject, worldGrade1AdditionalSections)
      default:
        return subject
    }
  }),
  // Добавляем новые предметы
  ...additionalGrade1Subjects
]

// 2 класс
export const grade2Complete: Subject[] = [
  ...baseGrade2,
  ...additionalGrade2Subjects
]

// 3 класс
export const grade3Complete: Subject[] = [
  ...baseGrade3,
  ...additionalGrade3Subjects
]

// 4 класс
export const grade4Complete: Subject[] = [
  ...baseGrade4,
  ...additionalGrade4Subjects
]

// ==================== ОТДЕЛЬНЫЕ ПРЕДМЕТЫ ====================

// Экспорт отдельных предметов для гибкого использования
export {
  literatureGrade1,
  technologyGrade1,
  artGrade1,
  musicGrade1,
  peGrade1,
  englishGrade1
}

// ==================== МЕТАДАННЫЕ ====================

// Информация о количестве контента
export const contentStats = {
  grade1: {
    subjects: grade1Complete.length,
    topics: grade1Complete.reduce((acc, s) => acc + (s.sections?.flatMap(sec => sec.topics).length || 0), 0),
    lessons: grade1Complete.reduce((acc, s) => {
      const topics = s.sections?.flatMap(sec => sec.topics) || []
      return acc + topics.reduce((a, t) => a + (t.lessons?.length || 0), 0)
    }, 0),
    quizQuestions: grade1Complete.reduce((acc, s) => acc + (s.quiz?.length || 0), 0)
  },
  grade2: {
    subjects: grade2Complete.length,
    topics: grade2Complete.reduce((acc, s) => acc + (s.sections?.flatMap(sec => sec.topics).length || 0), 0)
  },
  grade3: {
    subjects: grade3Complete.length,
    topics: grade3Complete.reduce((acc, s) => acc + (s.sections?.flatMap(sec => sec.topics).length || 0), 0)
  },
  grade4: {
    subjects: grade4Complete.length,
    topics: grade4Complete.reduce((acc, s) => acc + (s.sections?.flatMap(sec => sec.topics).length || 0), 0)
  }
}

// Список всех новых предметов
export const newSubjectNames = [
  'Литературное чтение',
  'Технология',
  'ИЗО',
  'Музыка',
  'Физкультура',
  'Английский язык'
]
