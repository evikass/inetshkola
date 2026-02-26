// ==================== 7 КЛАСС ====================

import { Calculator, Target } from 'lucide-react'
import type { Grade } from '../types'

export const grade7: Grade = {
  id: 7,
  name: '7 класс',
  shortName: '7 кл.',
  subjects: [
    {
      id: 'algebra7',
      title: 'Алгебра',
      icon: <Calculator className="w-5 h-5" />,
      color: 'text-blue-400',
      gradient: 'from-blue-500 to-violet-500',
      description: 'Уравнения, функции, формулы',
      topics: [
        { 
          id: 't1', 
          title: 'Линейные уравнения', 
          description: 'Решение уравнений вида ax + b = 0',
          theory: `<h3>Линейные уравнения</h3>
          <p>Линейное уравнение — уравнение вида ax + b = 0, где a и b — числа, x — неизвестное.</p>
          <h4>Алгоритм решения:</h4>
          <ol>
            <li>Перенеси слагаемые с x влево, без x — вправо</li>
            <li>Приведи подобные слагаемые</li>
            <li>Раздели обе части на коэффициент при x</li>
          </ol>
          <h4>Пример:</h4>
          <p>2x + 5 = 15<br/>
          2x = 15 - 5<br/>
          2x = 10<br/>
          x = 5</p>`,
          examples: ['Реши: 3x - 7 = 8', 'Найди x: 5x + 10 = 0', 'Решите: 2(x - 3) = 10'],
          completed: false,
          difficulty: 'medium',
          estimatedTime: 25
        },
        { 
          id: 't2', 
          title: 'Функции и графики', 
          description: 'Линейная функция y = kx + b',
          theory: `<h3>Линейная функция</h3>
          <p>Функция вида y = kx + b называется линейной.</p>
          <h4>График:</h4>
          <p>График линейной функции — прямая линия.</p>
          <h4>Коэффициенты:</h4>
          <ul>
            <li><strong>k</strong> — угловой коэффициент (наклон прямой)</li>
            <li><strong>b</strong> — точка пересечения с осью Y</li>
          </ul>
          <h4>Частные случаи:</h4>
          <p>y = kx (прямая пропорциональность) — проходит через начало координат</p>`,
          examples: ['Построй график y = 2x + 1', 'Найди k и b для y = -3x + 5', 'Что такое угловой коэффициент?'],
          completed: false,
          difficulty: 'medium',
          estimatedTime: 30
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Решите уравнение: 2x + 5 = 15',
          options: ['x = 5', 'x = 10', 'x = 7', 'x = 3'],
          correctAnswer: 0,
          explanation: '2x + 5 = 15 → 2x = 10 → x = 5. Переносим 5 вправо и делим на 2.',
          difficulty: 'medium',
          points: 15
        }
      ]
    },
    {
      id: 'geometry7',
      title: 'Геометрия',
      icon: <Target className="w-5 h-5" />,
      color: 'text-purple-400',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Треугольники, теоремы, площади',
      topics: [
        { 
          id: 't1', 
          title: 'Треугольники', 
          description: 'Виды треугольников и их свойства',
          theory: `<h3>Треугольник</h3>
          <p>Треугольник — фигура, состоящая из трёх точек, не лежащих на одной прямой, и трёх отрезков, их соединяющих.</p>
          <h4>Виды треугольников:</h4>
          <ul>
            <li><strong>Остроугольный</strong> — все углы острые (< 90°)</li>
            <li><strong>Прямоугольный</strong> — один угол 90°</li>
            <li><strong>Тупоугольный</strong> — один угол > 90°</li>
          </ul>
          <h4>По сторонам:</h4>
          <ul>
            <li>Равносторонний — все стороны равны</li>
            <li>Равнобедренный — две стороны равны</li>
            <li>Разносторонний — все стороны разные</li>
          </ul>`,
          examples: ['Определи вид треугольника', 'Найди периметр', 'Сумма углов треугольника?'],
          completed: false,
          difficulty: 'medium',
          estimatedTime: 25
        },
        { 
          id: 't2', 
          title: 'Теорема Пифагора', 
          description: 'a² + b² = c²',
          theory: `<h3>Теорема Пифагора</h3>
          <p>В прямоугольном треугольнике квадрат гипотенузы равен сумме квадратов катетов.</p>
          <h4>Формула:</h4>
          <p>a² + b² = c²</p>
          <p>где a, b — катеты, c — гипотенуза</p>
          <h4>Пример:</h4>
          <p>Катеты 3 и 4: c² = 9 + 16 = 25, c = 5</p>
          <p>Это "египетский треугольник" (3, 4, 5)</p>`,
          examples: ['Найди гипотенузу: a=6, b=8', 'Проверь: 5, 12, 13', 'Катет = ? если a=5, c=13'],
          completed: false,
          difficulty: 'medium',
          estimatedTime: 25
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Чему равна гипотенуза прямоугольного треугольника с катетами 3 и 4?',
          options: ['5', '6', '7', '8'],
          correctAnswer: 0,
          explanation: 'По теореме Пифагора: c² = 3² + 4² = 9 + 16 = 25, значит c = 5. Это знаменитый "египетский треугольник"!',
          difficulty: 'medium',
          points: 15
        }
      ]
    }
  ]
}
