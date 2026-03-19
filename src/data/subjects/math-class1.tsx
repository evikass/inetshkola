// Пример структуры данных для 1 класса - Математика
// Иерархия: Grade → Subject → Section → Topic → Lesson

import { Calculator, BookOpen, Target } from 'lucide-react'
import type { Grade, Subject, Section, Topic, Lesson } from './types'

// ==================== УРОКИ (Lessons) ====================
const lessonsNumbers1to10: Lesson[] = [
  {
    id: 'math1-s1-t1-l1',
    title: 'Знакомство с числами 1-5',
    content: `
      <h3>Числа 1, 2, 3, 4, 5</h3>
      <p>Числа помогают нам считать предметы. Давай познакомимся с первыми пятью числами!</p>
      <h4>🔢 Число 1</h4>
      <p>Один предмет: 🍎 (одно яблоко)</p>
      <h4>🔢 Число 2</h4>
      <p>Два предмета: 🍎🍎 (два яблока)</p>
      <h4>🔢 Число 3</h4>
      <p>Три предмета: 🍎🍎🍎</p>
    `,
    exercises: [
      {
        id: 'ex1',
        type: 'choice',
        question: 'Сколько яблок на картинке? 🍎🍎',
        options: ['1', '2', '3', '4'],
        correctAnswer: 1,
        explanation: 'На картинке 2 яблока!'
      }
    ],
    completed: false,
    order: 1,
    estimatedTime: 10
  },
  {
    id: 'math1-s1-t1-l2',
    title: 'Числа 6-10',
    content: `
      <h3>Числа 6, 7, 8, 9, 10</h3>
      <p>Продолжаем знакомство с числами!</p>
      <h4>🔢 Число 6</h4>
      <p>Шесть предметов: ✋👆 (пять пальцев + один)</p>
      <h4>🔢 Число 10</h4>
      <p>Десять предметов — это десять пальцев на двух руках!</p>
    `,
    exercises: [
      {
        id: 'ex2',
        type: 'choice',
        question: 'Сколько пальцев на двух руках?',
        options: ['5', '8', '10', '12'],
        correctAnswer: 2,
        explanation: 'На двух руках 10 пальцев: 5 + 5 = 10!'
      }
    ],
    completed: false,
    order: 2,
    estimatedTime: 10
  }
]

// ==================== ТЕМЫ (Topics) ====================
const topicNumbers1to10: Topic = {
  id: 'math1-s1-t1',
  title: 'Числа от 1 до 10',
  description: 'Знакомство с числами первого десятка',
  theory: `
    <h3>Первый десяток чисел</h3>
    <p>Числа от 1 до 10 — это основа всей математики. Каждое число обозначает количество предметов.</p>
    <h4>Числа и их названия:</h4>
    <ul>
      <li>1 — один</li>
      <li>2 — два</li>
      <li>3 — три</li>
      <li>4 — четыре</li>
      <li>5 — пять</li>
      <li>6 — шесть</li>
      <li>7 — семь</li>
      <li>8 — восемь</li>
      <li>9 — девять</li>
      <li>10 — десять</li>
    </ul>
  `,
  examples: [
    'Сколько яблок? 🍎🍎🍎 — Три!',
    'Сколько шариков? 🎈🎈 — Два!',
    'Посчитай пальчики на руке — Пять!'
  ],
  completed: false,
  difficulty: 'easy',
  estimatedTime: 20,
  lessons: lessonsNumbers1to10,
  image: '/images/topics/numbers-1-10.svg'
}

const topicAddition: Topic = {
  id: 'math1-s1-t2',
  title: 'Сложение',
  description: 'Учимся складывать числа',
  theory: `
    <h3>Что такое сложение?</h3>
    <p>Сложение — это объединение двух групп предметов в одну.</p>
    <h4>Знак сложения: + (плюс)</h4>
    <p>🍎🍎 + 🍎 = 🍎🍎🍎</p>
    <p>2 + 1 = 3</p>
    <h4>Правила:</h4>
    <ul>
      <li>От перестановки слагаемых сумма не меняется: 3 + 2 = 2 + 3 = 5</li>
      <li>При сложении с нулём число не меняется: 5 + 0 = 5</li>
    </ul>
  `,
  examples: [
    '3 + 2 = 5',
    '4 + 1 = 5',
    '5 + 5 = 10'
  ],
  completed: false,
  difficulty: 'easy',
  estimatedTime: 25,
  lessons: [],
  image: '/images/topics/addition.svg'
}

const topicSubtraction: Topic = {
  id: 'math1-s1-t3',
  title: 'Вычитание',
  description: 'Учимся вычитать числа',
  theory: `
    <h3>Что такое вычитание?</h3>
    <p>Вычитание — это удаление части предметов из группы.</p>
    <h4>Знак вычитания: − (минус)</h4>
    <p>🍎🍎🍎 − 🍎 = 🍎🍎</p>
    <p>3 − 1 = 2</p>
  `,
  examples: [
    '5 − 2 = 3',
    '10 − 5 = 5',
    '7 − 3 = 4'
  ],
  completed: false,
  difficulty: 'easy',
  estimatedTime: 25,
  lessons: [],
  image: '/images/topics/subtraction.svg'
}

// ==================== РАЗДЕЛЫ (Sections) ====================
const sectionNumbers: Section = {
  id: 'math1-s1',
  title: 'Натуральные числа',
  description: 'Знакомство с числами и действиями',
  order: 1,
  topics: [topicNumbers1to10, topicAddition, topicSubtraction],
  image: '/images/subjects/math/numbers-section.svg'
}

const sectionGeometry: Section = {
  id: 'math1-s2',
  title: 'Геометрические фигуры',
  description: 'Основные фигуры и их свойства',
  order: 2,
  topics: [
    {
      id: 'math1-s2-t1',
      title: 'Круг, квадрат, треугольник',
      description: 'Основные геометрические фигуры',
      theory: `
        <h3>Основные фигуры</h3>
        <h4>⚪ Круг</h4>
        <p>Фигура без углов, похож на солнышко или колесо</p>
        <h4>⬜ Квадрат</h4>
        <p>4 равные стороны и 4 угла</p>
        <h4>🔺 Треугольник</h4>
        <p>3 стороны и 3 угла</p>
      `,
      examples: ['Найди круги на картинке', 'Посчитай углы квадрата'],
      completed: false,
      difficulty: 'easy',
      estimatedTime: 20,
      lessons: []
    }
  ]
}

// ==================== ПРЕДМЕТ (Subject) ====================
export const subjectMath1: Subject = {
  id: 'math1',
  title: 'Математика',
  icon: <Calculator className="w-5 h-5" />,
  color: 'text-blue-400',
  gradient: 'from-blue-500 to-indigo-500',
  description: 'Основы математики: счёт, сложение, вычитание',
  sections: [sectionNumbers, sectionGeometry],
  quiz: [
    {
      id: 'math1-q1',
      question: 'Чему равно 3 + 2?',
      options: ['4', '5', '6', '7'],
      correctAnswer: 1,
      explanation: '3 + 2 = 5. Три предмета и ещё два — вместе пять!',
      difficulty: 'easy',
      points: 10
    },
    {
      id: 'math1-q2',
      question: 'Сколько углов у треугольника?',
      options: ['2', '3', '4', '5'],
      correctAnswer: 1,
      explanation: 'У треугольника 3 угла. Это видно даже из названия!',
      difficulty: 'easy',
      points: 10
    }
  ],
  image: '/images/subjects/math/icon.svg'
}

// ==================== ЭКСПОРТ ДЛЯ ДРУГИХ ФАЙЛОВ ====================
export { sectionNumbers, sectionGeometry }
export { topicNumbers1to10, topicAddition, topicSubtraction }
export { lessonsNumbers1to10 }
