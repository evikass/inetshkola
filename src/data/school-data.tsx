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
    subjects: preparatoryClassSubjects,
    image: '/images/classes/class-0.jpg'
  },
  
  // ==================== 1 КЛАСС ====================
  {
    id: 1,
    name: '1 класс',
    shortName: '1 кл.',
    subjects: grade1Subjects,
    image: '/images/classes/class-1.jpg'
  },
  
  // ==================== 2 КЛАСС ====================
  {
    id: 2,
    name: '2 класс',
    shortName: '2 кл.',
    subjects: grade2Subjects,
    image: '/images/classes/class-2.jpg'
  },
  
  // ==================== 3 КЛАСС ====================
  {
    id: 3,
    name: '3 класс',
    shortName: '3 кл.',
    subjects: grade3Subjects,
    image: '/images/classes/class-3.jpg'
  },
  
  // ==================== 4 КЛАСС ====================
  {
    id: 4,
    name: '4 класс',
    shortName: '4 кл.',
    subjects: grade4Subjects,
    image: '/images/classes/class-4.jpg'
  },
  
  // ==================== 5 КЛАСС ====================
  {
    id: 5,
    name: '5 класс',
    shortName: '5 кл.',
    subjects: grade5Subjects,
    image: '/images/classes/class-5.jpg'
  },
  
  // ==================== 6 КЛАСС ====================
  {
    id: 6,
    name: '6 класс',
    shortName: '6 кл.',
    subjects: grade6Subjects,
    image: '/images/classes/class-6.jpg'
  },
  
  // ==================== 7 КЛАСС ====================
  {
    id: 7,
    name: '7 класс',
    shortName: '7 кл.',
    subjects: grade7Subjects,
    image: '/images/classes/class-7.jpg'
  },
  
  // ==================== 8 КЛАСС ====================
  {
    id: 8,
    name: '8 класс',
    shortName: '8 кл.',
    subjects: grade8Subjects,
    image: '/images/classes/class-8.jpg'
  },
  
  // ==================== 9 КЛАСС ====================
  {
    id: 9,
    name: '9 класс',
    shortName: '9 кл.',
    subjects: grade9Subjects,
    image: '/images/classes/class-9.jpg'
  },
  
  // ==================== 10 КЛАСС ====================
  {
    id: 10,
    name: '10 класс',
    shortName: '10 кл.',
    subjects: grade10Subjects,
    image: '/images/classes/class-10.jpg'
  },
  
  // ==================== 11 КЛАСС ====================
  {
    id: 11,
    name: '11 класс',
    shortName: '11 кл.',
    subjects: grade11Subjects,
    image: '/images/classes/class-11.jpg'
  }
]
