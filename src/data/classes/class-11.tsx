// ==================== 11 КЛАСС ====================
// Класс содержит 12 предметов для подготовки к ЕГЭ

import { Calculator, Target, Book, BookOpen, Atom, FlaskConical, Leaf, Users, Cpu, Telescope, GraduationCap } from 'lucide-react'
import type { Grade } from '../types'

export const grade11: Grade = {
  id: 11,
  name: '11 класс',
  shortName: '11 кл.',
  subjects: [
    {
      id: 'algebra11',
      title: 'Алгебра и начала анализа',
      icon: <Calculator className="w-5 h-5" />,
      color: 'text-blue-400',
      gradient: 'from-blue-500 to-violet-500',
      description: 'Интегралы, уравнения, ЕГЭ',
      topics: [
        { 
          id: 't1', 
          title: 'Первообразная и интеграл', 
          description: 'Нахождение первообразных функций',
          theory: `<h3>Первообразная</h3>
          <p>Первообразная функции f(x) — это функция F(x), такая что F'(x) = f(x).</p>
          <h4>Таблица первообразных:</h4>
          <ul>
            <li>xⁿ → xⁿ⁺¹/(n+1)</li>
            <li>sin x → -cos x</li>
            <li>cos x → sin x</li>
            <li>eˣ → eˣ</li>
            <li>1/x → ln|x|</li>
          </ul>
          <h3>Определённый интеграл:</h3>
          <p>∫[a,b] f(x)dx = F(b) - F(a) — формула Ньютона-Лейбница</p>`,
          examples: ['Найди первообразную x³', 'Вычисли интеграл', 'Найди площадь под графиком'],
          completed: false,
          difficulty: 'hard',
          estimatedTime: 45
        },
        { 
          id: 't2', 
          title: 'Показательные уравнения', 
          description: 'Решение уравнений вида aˣ = b',
          theory: `<h3>Показательные уравнения</h3>
          <p>Уравнения вида aˣ = b, где a > 0, a ≠ 1.</p>
          <h4>Методы решения:</h4>
          <ul>
            <li>Приведение к одному основанию: 2ˣ = 8 → 2ˣ = 2³ → x = 3</li>
            <li>Логарифмирование: 3ˣ = 5 → x = log₃5</li>
          </ul>`,
          examples: ['Реши: 2ˣ = 16', 'Реши: 3ˣ = 1/9'],
          completed: false,
          difficulty: 'medium',
          estimatedTime: 35
        },
        { 
          id: 't3', 
          title: 'Логарифмические уравнения', 
          description: 'Решение логарифмических уравнений',
          theory: `<h3>Логарифмы</h3>
          <p>logₐb = c означает aᶜ = b</p>
          <h4>Свойства логарифмов:</h4>
          <ul>
            <li>logₐ(xy) = logₐx + logₐy</li>
            <li>logₐ(x/y) = logₐx - logₐy</li>
            <li>logₐxⁿ = n·logₐx</li>
          </ul>`,
          examples: ['Реши: log₂x = 5', 'Реши: lg(x+1) + lg(x-1) = lg3'],
          completed: false,
          difficulty: 'hard',
          estimatedTime: 40
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Чему равна первообразная функции x²?',
          options: ['x³', 'x³/3', '2x', 'x³/2'],
          correctAnswer: 1,
          explanation: 'Первообразная xⁿ = xⁿ⁺¹/(n+1). Для x²: x³/3',
          difficulty: 'medium',
          points: 15
        },
        {
          id: 'q2',
          question: 'Реши: 2ˣ = 8',
          options: ['2', '3', '4', '8'],
          correctAnswer: 1,
          explanation: '8 = 2³, значит 2ˣ = 2³, x = 3',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    {
      id: 'geometry11',
      title: 'Геометрия',
      icon: <Target className="w-5 h-5" />,
      color: 'text-purple-400',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Стереометрия, тела вращения',
      topics: [
        { 
          id: 't1', 
          title: 'Многогранники', 
          description: 'Призма, пирамида, площади и объёмы',
          theory: `<h3>Многогранники</h3>
          <h4>Призма:</h4>
          <p>V = S·h (площадь основания × высота)</p>
          <p>S_полн = S_бок + 2S_осн</p>
          <h4>Пирамида:</h4>
          <p>V = ⅓·S·h</p>
          <h4>Правильная пирамида:</h4>
          <p>S_бок = ½·P·a (периметр × апофема)</p>`,
          examples: ['Найди объём призмы', 'Вычисли площадь пирамиды', 'Правильная пирамида'],
          completed: false,
          difficulty: 'medium',
          estimatedTime: 35
        },
        { 
          id: 't2', 
          title: 'Тела вращения', 
          description: 'Цилиндр, конус, шар',
          theory: `<h3>Тела вращения</h3>
          <h4>Цилиндр:</h4>
          <p>V = πR²h, S_бок = 2πRh</p>
          <h4>Конус:</h4>
          <p>V = ⅓πR²h, S_бок = πRl</p>
          <h4>Шар:</h4>
          <p>V = ⁴⁄₃πR³, S = 4πR²</p>`,
          examples: ['Объём цилиндра', 'Площадь конуса', 'Объём шара'],
          completed: false,
          difficulty: 'medium',
          estimatedTime: 30
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Чему равен объём шара радиуса R?',
          options: ['πR³', '4πR²', '⁴⁄₃πR³', '2πR'],
          correctAnswer: 2,
          explanation: 'Объём шара V = ⁴⁄₃πR³',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    {
      id: 'russian11',
      title: 'Русский язык',
      icon: <Book className="w-5 h-5" />,
      color: 'text-red-400',
      gradient: 'from-red-500 to-orange-500',
      description: 'Подготовка к ЕГЭ',
      topics: [
        { 
          id: 't1', 
          title: 'Сочинение ЕГЭ', 
          description: 'Структура сочинения',
          theory: `<h3>Сочинение по тексту</h3>
          <h4>Структура:</h4>
          <ol>
            <li>Вступление (проблема)</li>
            <li>Комментарий к проблеме</li>
            <li>Позиция автора</li>
            <li>Своя позиция</li>
            <li>Аргументация</li>
            <li>Заключение</li>
          </ol>`,
          examples: ['Как сформулировать проблему?', 'Пример комментария', 'Как привести аргумент?'],
          completed: false,
          difficulty: 'hard',
          estimatedTime: 45
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Сколько абзацев минимум в сочинении ЕГЭ?',
          options: ['3', '5', '7', '10'],
          correctAnswer: 1,
          explanation: 'Минимум 5 абзацев: вступление, комментарий, позиция автора, своя позиция с аргументами, заключение',
          difficulty: 'easy',
          points: 10
        }
      ]
    }
  ]
}
