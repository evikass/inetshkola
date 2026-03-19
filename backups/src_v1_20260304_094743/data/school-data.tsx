// Данные школьной программы
import { Calculator, Book, Leaf, Globe, Target, FlaskConical, Atom, BookOpen } from 'lucide-react'
import type { Grade } from './types'
import { preparatoryClassSubjects } from './preparatory-class'
import { grade1Subjects } from './grade1-class'
import { grade2Subjects } from './grade2-class'
import { grade3Subjects } from './grade3-class'
import { grade4Subjects } from './grade4-class'
import { grade5Subjects } from './grade5-class'
import { grade6Subjects } from './grade6-class'
import { grade7Subjects } from './grade7-class'
import { grade8Subjects } from './grade8-class'
import { grade9Subjects } from './grade9-class'
import { grade10Subjects } from './grade10-class'
import { grade11Subjects } from './grade11-class'

export const schoolData: Grade[] = [
  // ==================== ПОДГОТОВИТЕЛЬНЫЙ КЛАСС ====================
  {
    id: 0,
    name: 'Подготовительный класс',
    shortName: 'Подг.',
    subjects: preparatoryClassSubjects
  },
  
  // ==================== 1 КЛАСС ====================
  {
    id: 1,
    name: '1 класс',
    shortName: '1 кл.',
    subjects: grade1Subjects
  },
  
  // ==================== 2 КЛАСС ====================
  {
    id: 2,
    name: '2 класс',
    shortName: '2 кл.',
    subjects: grade2Subjects
  },
  
  // ==================== 3 КЛАСС ====================
  {
    id: 3,
    name: '3 класс',
    shortName: '3 кл.',
    subjects: grade3Subjects
  },
  
  // ==================== 4 КЛАСС ====================
  {
    id: 4,
    name: '4 класс',
    shortName: '4 кл.',
    subjects: grade4Subjects
  },
  
  // ==================== 5 КЛАСС ====================
  {
    id: 5,
    name: '5 класс',
    shortName: '5 кл.',
    subjects: grade5Subjects
  },
  
  // ==================== 6 КЛАСС ====================
  {
    id: 6,
    name: '6 класс',
    shortName: '6 кл.',
    subjects: grade6Subjects
  },
  
  // ==================== 7 КЛАСС ====================
  {
    id: 7,
    name: '7 класс',
    shortName: '7 кл.',
    subjects: grade7Subjects
  },
  
  // ==================== 8 КЛАСС ====================
  {
    id: 8,
    name: '8 класс',
    shortName: '8 кл.',
    subjects: grade8Subjects
  },
  
  // ==================== 9 КЛАСС ====================
  {
    id: 9,
    name: '9 класс',
    shortName: '9 кл.',
    subjects: grade9Subjects
  },
  
  // ==================== 10 КЛАСС ====================
  {
    id: 10,
    name: '10 класс',
    shortName: '10 кл.',
    subjects: grade10Subjects
  },
  
  // ==================== 11 КЛАСС ====================
  {
    id: 11,
    name: '11 класс',
    shortName: '11 кл.',
    subjects: grade11Subjects
  }
]
