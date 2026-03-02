// Полные данные для 8 класса
// Иерархия: Предмет → Раздел → Тема → Урок

import { Calculator, Target, Atom, Scroll, Leaf, BookOpen, Languages, Dumbbell, Users, FlaskConical, MapPin, Shield, Globe, Pen, Cloud, Mountain, Scale, Gavel } from 'lucide-react'
import type { Subject } from './types'

// ==================== 8 КЛАСС ====================

export const grade8Subjects: Subject[] = [
  // ==================== АЛГЕБРА ====================
  {
    id: 'algebra8',
    title: 'Алгебра',
    icon: <Calculator className="w-5 h-5" />,
    color: 'text-blue-400',
    gradient: 'from-blue-500 to-violet-500',
    description: 'Квадратные уравнения, неравенства, корни',
    sections: [
      {
        id: 'alg8-s1',
        title: 'Квадратные корни',
        description: 'Арифметический квадратный корень',
        order: 1,
        topics: [
          {
            id: 'alg8-s1-t1',
            title: 'Квадратный корень',
            description: 'Понятие и свойства',
            theory: `<h3>Квадратный корень</h3>
            <p>Квадратным корнем из числа a называется число, квадрат которого равен a.</p>
            <h4>Обозначение:</h4>
            <p>√a — квадратный корень из a</p>
            <h4>Свойства:</h4>
            <ul>
              <li>√(a·b) = √a · √b</li>
              <li>√(a/b) = √a / √b (при b > 0)</li>
              <li>(√a)² = a</li>
              <li>√a² = |a|</li>
            </ul>
            <h4>Примеры:</h4>
            <p>√9 = 3 (так как 3² = 9)</p>
            <p>√16 = 4 (так как 4² = 16)</p>`,
            examples: ['Вычисли: √144', 'Упрости: √50'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'alg8-s1-t1-l1',
                title: 'Что такое квадратный корень',
                content: `<div class="lesson">
                  <h2>√ Квадратный корень</h2>
                  <p>√a — это число, которое при возведении в квадрат даёт a.</p>
                  <h3>Определение:</h3>
                  <p>√a = b ⟺ b² = a и b ≥ 0</p>
                  <h3>Примеры:</h3>
                  <p>√25 = 5 (так как 5² = 25)</p>
                  <p>√100 = 10 (так как 10² = 100)</p>
                  <p>√0 = 0</p>
                  <h3>Важно:</h3>
                  <p>Квадратный корень определён только для неотрицательных чисел!</p>
                  <div class="tip">💡 √a всегда даёт неотрицательное число!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              },
              {
                id: 'alg8-s1-t1-l2',
                title: 'Свойства корней',
                content: `<div class="lesson">
                  <h2>📊 Свойства квадратного корня</h2>
                  <h3>Корень из произведения:</h3>
                  <p>√(a·b) = √a · √b</p>
                  <p>√36 = √(4·9) = √4 · √9 = 2 · 3 = 6</p>
                  <h3>Корень из частного:</h3>
                  <p>√(a/b) = √a / √b</p>
                  <h3>Вынесение множителя:</h3>
                  <p>√50 = √(25·2) = 5√2</p>
                  <div class="tip">💡 Используй эти свойства для упрощения!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'alg8-s1-t1-q1',
                question: 'Вычисли: √144',
                options: ['11', '12', '13', '14'],
                correctAnswer: 1,
                explanation: '√144 = 12, так как 12² = 144!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'alg8-s1-t1-q2',
                question: 'Упрости: √50',
                options: ['25√2', '5√2', '10√5', '2√5'],
                correctAnswer: 1,
                explanation: '√50 = √(25·2) = 5√2!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'alg8-s1-t1-q3',
                question: 'Чему равен √0?',
                options: ['0', '1', 'Не существует', '-1'],
                correctAnswer: 0,
                explanation: '√0 = 0, так как 0² = 0!',
                difficulty: 'easy',
                points: 10
              }
            ]
          }
        ]
      },
      {
        id: 'alg8-s2',
        title: 'Квадратные уравнения',
        description: 'Решение квадратных уравнений',
        order: 2,
        topics: [
          {
            id: 'alg8-s2-t1',
            title: 'Формула корней',
            description: 'Дискриминант и корни',
            theory: `<h3>Квадратное уравнение</h3>
            <p>ax² + bx + c = 0, где a ≠ 0</p>
            <h4>Дискриминант:</h4>
            <p>D = b² - 4ac</p>
            <h4>Формула корней:</h4>
            <p>x = (-b ± √D) / (2a)</p>
            <h4>Количество корней:</h4>
            <ul>
              <li>D > 0 — два корня</li>
              <li>D = 0 — один корень</li>
              <li>D < 0 — нет корней</li>
            </ul>
            <h4>Пример:</h4>
            <p>x² - 5x + 6 = 0</p>
            <p>D = 25 - 24 = 1</p>
            <p>x₁ = (5 - 1)/2 = 2, x₂ = (5 + 1)/2 = 3</p>`,
            examples: ['Реши: x² - 4x + 3 = 0', 'Найди дискриминант: 2x² + 3x - 5 = 0'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 45,
            lessons: [
              {
                id: 'alg8-s2-t1-l1',
                title: 'Дискриминант',
                content: `<div class="lesson">
                  <h2>📐 Дискриминант</h2>
                  <p>D = b² - 4ac</p>
                  <h3>Что показывает:</h3>
                  <ul>
                    <li><b>D > 0</b> — два различных корня</li>
                    <li><b>D = 0</b> — один корень (два равных)</li>
                    <li><b>D < 0</b> — корней нет</li>
                  </ul>
                  <h3>Пример: x² - 7x + 12 = 0</h3>
                  <p>a = 1, b = -7, c = 12</p>
                  <p>D = (-7)² - 4·1·12 = 49 - 48 = 1 > 0</p>
                  <p>Два корня!</p>
                  <div class="tip">💡 Сначала найди D, потом решай!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              },
              {
                id: 'alg8-s2-t1-l2',
                title: 'Формула корней',
                content: `<div class="lesson">
                  <h2>📝 Формула корней</h2>
                  <p>x = (-b ± √D) / (2a)</p>
                  <h3>Алгоритм решения:</h3>
                  <ol>
                    <li>Запиши a, b, c</li>
                    <li>Найди D = b² - 4ac</li>
                    <li>Если D ≥ 0, найди корни</li>
                  </ol>
                  <h3>Пример: x² - 5x + 6 = 0</h3>
                  <p>D = 25 - 24 = 1</p>
                  <p>x₁ = (5 - 1)/2 = 2</p>
                  <p>x₂ = (5 + 1)/2 = 3</p>
                  <div class="tip">💡 Не забудь: -b меняет знак b!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 15
              },
              {
                id: 'alg8-s2-t1-l3',
                title: 'Теорема Виета',
                content: `<div class="lesson">
                  <h2>📊 Теорема Виета</h2>
                  <p>Для x² + px + q = 0:</p>
                  <h3>x₁ + x₂ = -p</h3>
                  <h3>x₁ · x₂ = q</h3>
                  <h3>Пример: x² - 7x + 12 = 0</h3>
                  <p>x₁ + x₂ = 7, x₁ · x₂ = 12</p>
                  <p>Подбираем: x₁ = 3, x₂ = 4</p>
                  <p>Проверка: 3 + 4 = 7 ✓, 3 · 4 = 12 ✓</p>
                  <div class="tip">💡 Теорема Виета работает только для приведённых уравнений!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'alg8-s2-t1-q1',
                question: 'Реши: x² - 4x + 3 = 0',
                options: ['x = 1 и x = 3', 'x = 2 и x = 4', 'x = -1 и x = -3', 'x = 0 и x = 4'],
                correctAnswer: 0,
                explanation: 'D = 16 - 12 = 4, x = (4 ± 2)/2, x₁ = 1, x₂ = 3!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'alg8-s2-t1-q2',
                question: 'Чему равен дискриминант уравнения x² - 5x + 6 = 0?',
                options: ['1', '25', '6', '11'],
                correctAnswer: 0,
                explanation: 'D = b² - 4ac = 25 - 24 = 1!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'alg8-s2-t1-q3',
                question: 'Сколько корней, если D < 0?',
                options: ['0', '1', '2', 'Бесконечно много'],
                correctAnswer: 0,
                explanation: 'Если D < 0, корней нет!',
                difficulty: 'easy',
                points: 10
              }
            ]
          }
        ]
      },
      {
        id: 'alg8-s3',
        title: 'Неравенства',
        description: 'Числовые неравенства',
        order: 3,
        topics: [
          {
            id: 'alg8-s3-t1',
            title: 'Решение неравенств',
            description: 'Линейные и квадратные неравенства',
            theory: `<h3>Линейные неравенства</h3>
            <p>ax + b > 0 (или <, ≥, ≤)</p>
            <h4>Правила:</h4>
            <ul>
              <li>Можно переносить слагаемые (менять знак)</li>
              <li>Можно умножать/делить на положительное число</li>
              <li>При умножении/делении на отрицательное — знак неравенства меняется!</li>
            </ul>
            <h4>Пример:</h4>
            <p>2x - 5 > 3</p>
            <p>2x > 8</p>
            <p>x > 4</p>
            <p>Ответ: (4; +∞)</p>`,
            examples: ['Реши: 3x + 2 > 8', 'Реши: -2x < 6'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'alg8-s3-t1-l1',
                title: 'Решение линейных неравенств',
                content: `<div class="lesson">
                  <h2>📝 Линейные неравенства</h2>
                  <h3>Правило знаков:</h3>
                  <p>При умножении/делении на отрицательное число — знак неравенства меняется!</p>
                  <h3>Пример 1: 3x + 5 > 14</h3>
                  <p>3x > 9</p>
                  <p>x > 3</p>
                  <p>Ответ: (3; +∞)</p>
                  <h3>Пример 2: -2x < 8</h3>
                  <p>x > -4 (знак изменился!)</p>
                  <p>Ответ: (-4; +∞)</p>
                  <div class="tip">💡 Минус → меняй знак неравенства!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'alg8-s3-t1-q1',
                question: 'Реши неравенство: -3x > 9',
                options: ['x > -3', 'x < -3', 'x > 3', 'x < 3'],
                correctAnswer: 1,
                explanation: 'При делении на -3 знак меняется: x < -3!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'alg8-s3-t1-q2',
                question: 'Реши: 2x - 4 > 0',
                options: ['x > 2', 'x < 2', 'x > 4', 'x < 4'],
                correctAnswer: 0,
                explanation: '2x > 4, x > 2!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'alg8-s3-t1-q3',
                question: 'Что происходит со знаком при делении на отрицательное?',
                options: ['Не меняется', 'Меняется на противоположный', 'Исчезает', 'Удваивается'],
                correctAnswer: 1,
                explanation: 'При умножении/делении на отрицательное — знак неравенства меняется!',
                difficulty: 'medium',
                points: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'alg8-q1',
        question: 'Чему равен √81?',
        options: ['7', '8', '9', '10'],
        correctAnswer: 2,
        explanation: '√81 = 9, так как 9² = 81.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg8-q2',
        question: 'Сколько корней имеет уравнение, если D = 0?',
        options: ['Нет корней', 'Один корень', 'Два корня', 'Бесконечно много'],
        correctAnswer: 1,
        explanation: 'При D = 0 квадратное уравнение имеет один корень (два равных корня).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'alg8-q3',
        question: 'Реши неравенство: -3x > 9',
        options: ['x > -3', 'x < -3', 'x > 3', 'x < 3'],
        correctAnswer: 1,
        explanation: '-3x > 9 → x < -3. При делении на отрицательное число знак неравенства меняется!',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'alg8-q4',
        question: 'Чему равен √144?',
        options: ['11', '12', '13', '14'],
        correctAnswer: 1,
        explanation: '12.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg8-q5',
        question: 'Реши: x² − 9 = 0',
        options: ['x = 3', 'x = −3', 'x = ±3', 'x = 9'],
        correctAnswer: 2,
        explanation: 'x = ±3.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg8-q6',
        question: 'D для x² − 6x + 9 = 0',
        options: ['0', '36', '−36', '18'],
        correctAnswer: 0,
        explanation: 'D = 0.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'alg8-q7',
        question: 'Реши: 2x − 4 > 0',
        options: ['x > 2', 'x < 2', 'x > 4', 'x < 4'],
        correctAnswer: 0,
        explanation: 'x > 2.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg8-q8',
        question: 'Сумма корней по Виету:',
        options: ['x₁ + x₂ = p', 'x₁ + x₂ = −p', 'x₁ + x₂ = q', 'x₁ + x₂ = −q'],
        correctAnswer: 1,
        explanation: '−p.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'alg8-q9',
        question: 'Упрости: √50',
        options: ['5√2', '2√5', '25', '10'],
        correctAnswer: 0,
        explanation: '5√2.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'alg8-q10',
        question: 'Сколько корней при D < 0?',
        options: ['0', '1', '2', 'Бесконечно'],
        correctAnswer: 0,
        explanation: '0.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg8-q11',
        question: 'Реши: x² − 5x + 6 = 0',
        options: ['2 и 3', '1 и 6', '−2 и −3', '2 и 4'],
        correctAnswer: 0,
        explanation: '2 и 3.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'alg8-q12',
        question: 'Реши: 5x + 10 ≤ 0',
        options: ['x ≤ 2', 'x ≤ −2', 'x ≥ −2', 'x ≥ 2'],
        correctAnswer: 1,
        explanation: 'x ≤ −2.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'alg8-q13',
        question: 'Произведение корней по Виету:',
        options: ['x₁·x₂ = p', 'x₁·x₂ = −p', 'x₁·x₂ = q', 'x₁·x₂ = −q'],
        correctAnswer: 2,
        explanation: 'q.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ГЕОМЕТРИЯ ====================
  {
    id: 'geometry8',
    title: 'Геометрия',
    icon: <Target className="w-5 h-5" />,
    color: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Четырёхугольники, подобие, окружность',
    sections: [
      {
        id: 'geom8-s1',
        title: 'Четырёхугольники',
        description: 'Параллелограмм, прямоугольник, ромб, трапеция',
        order: 1,
        topics: [
          {
            id: 'geom8-s1-t1',
            title: 'Параллелограмм',
            description: 'Свойства и признаки',
            theory: `<h3>Параллелограмм</h3>
            <p>Параллелограмм — это четырёхугольник, у которого противоположные стороны параллельны.</p>
            <h4>Свойства:</h4>
            <ul>
              <li>Противоположные стороны равны</li>
              <li>Противоположные углы равны</li>
              <li>Диагонали точкой пересечения делятся пополам</li>
              <li>Сумма углов, прилежащих к одной стороне = 180°</li>
            </ul>
            <h4>Признаки:</h4>
            <ul>
              <li>Если противоположные стороны равны</li>
              <li>Если две стороны равны и параллельны</li>
              <li>Если диагонали делятся точкой пересечения пополам</li>
            </ul>`,
            examples: ['Докажи, что ABCD — параллелограмм', 'Найди углы параллелограмма'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'geom8-s1-t1-l1',
                title: 'Свойства параллелограмма',
                content: `<div class="lesson">
                  <h2>⬜ Параллелограмм</h2>
                  <p>ABCD — параллелограмм, если AB || CD и AD || BC</p>
                  <h3>Свойства:</h3>
                  <ul>
                    <li>AB = CD, AD = BC (противоположные равны)</li>
                    <li>∠A = ∠C, ∠B = ∠D (противоположные равны)</li>
                    <li>AO = OC, BO = OD (диагонали делятся пополам)</li>
                  </ul>
                  <h3>Формулы:</h3>
                  <p>S = a · h (основание × высота)</p>
                  <div class="tip">💡 Параллелограмм — основа для всех четырёхугольников!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'geom8-s1-t1-q1',
                question: 'Какое свойство параллелограмма верно?',
                options: ['Все стороны равны', 'Диагонали равны', 'Диагонали делятся пополам', 'Все углы равны'],
                correctAnswer: 2,
                explanation: 'В параллелограмме диагонали точкой пересечения делятся пополам!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'geom8-s1-t1-q2',
                question: 'Противоположные стороны параллелограмма:',
                options: ['Перпендикулярны', 'Равны', 'Не равны', 'Параллельны две'],
                correctAnswer: 1,
                explanation: 'Противоположные стороны параллелограмма равны!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'geom8-s1-t1-q3',
                question: 'Сумма углов, прилежащих к одной стороне:',
                options: ['90°', '180°', '360°', '60°'],
                correctAnswer: 1,
                explanation: 'Сумма углов, прилежащих к одной стороне параллелограмма = 180°!',
                difficulty: 'medium',
                points: 15
              }
            ]
          },
          {
            id: 'geom8-s1-t2',
            title: 'Прямоугольник, ромб, квадрат',
            description: 'Частные случаи параллелограмма',
            theory: `<h3>Прямоугольник</h3>
            <p>Параллелограмм с прямыми углами (все углы = 90°)</p>
            <p>Диагонали равны</p>
            <h3>Ромб</h3>
            <p>Параллелограмм с равными сторонами (все стороны равны)</p>
            <p>Диагонали перпендикулярны и являются биссектрисами</p>
            <h3>Квадрат</h3>
            <p>Прямоугольник и ромб одновременно</p>
            <p>Все стороны равны, все углы = 90°, диагонали равны и перпендикулярны</p>`,
            examples: ['Чем квадрат отличается от ромба?', 'Найди площадь квадрата'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'geom8-s1-t2-l1',
                title: 'Прямоугольник и ромб',
                content: `<div class="lesson">
                  <h2>⬜ Прямоугольник и ромб</h2>
                  <h3>Прямоугольник:</h3>
                  <ul>
                    <li>Все углы = 90°</li>
                    <li>Диагонали равны</li>
                    <li>S = a · b</li>
                  </ul>
                  <h3>Ромб:</h3>
                  <ul>
                    <li>Все стороны равны</li>
                    <li>Диагонали ⊥ и делят углы пополам</li>
                    <li>S = ½ · d₁ · d₂</li>
                  </ul>
                  <div class="tip">💡 Квадрат = прямоугольник + ромб!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'geom8-s1-t2-q1',
                question: 'Какой четырёхугольник является и прямоугольником, и ромбом?',
                options: ['Параллелограмм', 'Трапеция', 'Квадрат', 'Прямоугольник'],
                correctAnswer: 2,
                explanation: 'Квадрат обладает свойствами и прямоугольника (прямые углы), и ромба (равные стороны)!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'geom8-s1-t2-q2',
                question: 'Диагонали ромба:',
                options: ['Равны', 'Перпендикулярны', 'Параллельны', 'Совпадают'],
                correctAnswer: 1,
                explanation: 'Диагонали ромба перпендикулярны!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'geom8-s1-t2-q3',
                question: 'Площадь квадрата со стороной a:',
                options: ['a', '2a', 'a²', '4a'],
                correctAnswer: 2,
                explanation: 'Площадь квадрата S = a²!',
                difficulty: 'easy',
                points: 10
              }
            ]
          },
          {
            id: 'geom8-s1-t3',
            title: 'Трапеция',
            description: 'Четырёхугольник с параллельными сторонами',
            theory: `<h3>Трапеция</h3>
            <p>Трапеция — четырёхугольник, у которого две стороны параллельны (основания), а две другие — нет (боковые стороны).</p>
            <h4>Виды:</h4>
            <ul>
              <li><b>Равнобедренная</b> — боковые стороны равны</li>
              <li><b>Прямоугольная</b> — один угол = 90°</li>
              <li><b>Произвольная</b></li>
            </ul>
            <h4>Площадь:</h4>
            <p>S = ½ · (a + b) · h, где a, b — основания, h — высота</p>
            <h4>Средняя линия:</h4>
            <p>m = ½ · (a + b) — параллельна основаниям и равна их полусумме</p>`,
            examples: ['Найди площадь трапеции', 'Что такое средняя линия?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'geom8-s1-t3-l1',
                title: 'Трапеция и её свойства',
                content: `<div class="lesson">
                  <h2>📐 Трапеция</h2>
                  <p>BC || AD — основания, AB и CD — боковые стороны</p>
                  <h3>Свойства:</h3>
                  <ul>
                    <li>Сумма углов при боковой стороне = 180°</li>
                    <li>Средняя линия параллельна основаниям</li>
                  </ul>
                  <h3>Площадь:</h3>
                  <p>S = ½ · (a + b) · h</p>
                  <p>Или S = m · h (средняя линия × высота)</p>
                  <div class="tip">💡 Средняя линия = полусумма оснований!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'geom8-s1-t3-q1',
                question: 'Как найти среднюю линию трапеции?',
                options: ['Сумма оснований', 'Полусумма оснований', 'Разность оснований', 'Произведение оснований'],
                correctAnswer: 1,
                explanation: 'Средняя линия трапеции равна полусумме оснований: m = (a + b)/2!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'geom8-s1-t3-q2',
                question: 'Трапеция — это...',
                options: ['Все стороны параллельны', 'Две стороны параллельны', 'Нет параллельных сторон', 'Все стороны равны'],
                correctAnswer: 1,
                explanation: 'Трапеция — четырёхугольник с двумя параллельными сторонами (основаниями)!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'geom8-s1-t3-q3',
                question: 'Площадь трапеции:',
                options: ['S = a · h', 'S = ½ · (a + b) · h', 'S = a · b', 'S = ½ · a · h'],
                correctAnswer: 1,
                explanation: 'S = ½ · (a + b) · h — полусумма оснований на высоту!',
                difficulty: 'medium',
                points: 15
              }
            ]
          }
        ]
      },
      {
        id: 'geom8-s2',
        title: 'Подобные треугольники',
        description: 'Признаки подобия',
        order: 2,
        topics: [
          {
            id: 'geom8-s2-t1',
            title: 'Признаки подобия',
            description: 'Подобие треугольников',
            theory: `<h3>Подобные треугольники</h3>
            <p>Два треугольника подобны, если их соответственные углы равны, а стороны пропорциональны.</p>
            <h4>Признаки подобия:</h4>
            <ul>
              <li><b>По двум углам</b> (если два угла одного равны двум углам другого)</li>
              <li><b>По двум пропорциональным сторонам и углу между ними</b></li>
              <li><b>По трём пропорциональным сторонам</b></li>
            </ul>
            <h4>Коэффициент подобия:</h4>
            <p>k = a₁/a₂ = b₁/b₂ = c₁/c₂</p>
            <p>S₁/S₂ = k²</p>`,
            examples: ['Докажи подобие треугольников', 'Найди коэффициент подобия'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 40,
            lessons: [
              {
                id: 'geom8-s2-t1-l1',
                title: 'Признаки подобия треугольников',
                content: `<div class="lesson">
                  <h2>📐 Подобие треугольников</h2>
                  <p>∆ABC ~ ∆A₁B₁C₁ — треугольники подобны</p>
                  <h3>Три признака:</h3>
                  <ol>
                    <li><b>По двум углам</b>: ∠A = ∠A₁, ∠B = ∠B₁</li>
                    <li><b>По двум сторонам и углу</b>: AB/A₁B₁ = AC/A₁C₁, ∠A = ∠A₁</li>
                    <li><b>По трём сторонам</b>: AB/A₁B₁ = AC/A₁C₁ = BC/B₁C₁</li>
                  </ol>
                  <h3>Отношение площадей:</h3>
                  <p>S₁/S₂ = k² (коэффициент подобия в квадрате)</p>
                  <div class="tip">💡 Подобие → одинаковая форма, разный размер!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'geom8-s2-t1-q1',
                question: 'Что означает подобие треугольников?',
                options: ['Равные стороны', 'Равные углы и пропорциональные стороны', 'Равные площади', 'Одинаковая высота'],
                correctAnswer: 1,
                explanation: 'Подобные треугольники имеют равные углы и пропорциональные стороны!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'geom8-s2-t1-q2',
                question: 'Первый признак подобия — по:',
                options: ['Трём сторонам', 'Двум сторонам', 'Двум углам', 'Трём углам'],
                correctAnswer: 2,
                explanation: 'Первый признак подобия — по двум углам!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'geom8-s2-t1-q3',
                question: 'Отношение площадей подобных треугольников равно:',
                options: ['k', 'k²', 'k³', '2k'],
                correctAnswer: 1,
                explanation: 'Отношение площадей подобных фигур равно квадрату коэффициента подобия (k²)!',
                difficulty: 'hard',
                points: 20
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'geom8-q1',
        question: 'Какое свойство параллелограмма верно?',
        options: ['Все стороны равны', 'Диагонали равны', 'Диагонали делятся пополам', 'Все углы равны'],
        correctAnswer: 2,
        explanation: 'В параллелограмме диагонали точкой пересечения делятся пополам.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geom8-q2',
        question: 'Какой четырёхугольник является и прямоугольником, и ромбом?',
        options: ['Параллелограмм', 'Трапеция', 'Квадрат', 'Прямоугольник'],
        correctAnswer: 2,
        explanation: 'Квадрат обладает свойствами и прямоугольника (прямые углы), и ромба (равные стороны).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom8-q3',
        question: 'Как найти среднюю линию трапеции?',
        options: ['Сумма оснований', 'Полусумма оснований', 'Разность оснований', 'Произведение оснований'],
        correctAnswer: 1,
        explanation: 'Средняя линия трапеции равна полусумме оснований: m = (a + b)/2.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geom8-q4',
        question: 'Противоположные стороны параллелограмма:',
        options: ['Перпендикулярны', 'Равны', 'Не равны', 'Параллельны две'],
        correctAnswer: 1,
        explanation: 'Равны.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom8-q5',
        question: 'Диагонали ромба:',
        options: ['Равны', 'Перпендикулярны', 'Параллельны', 'Совпадают'],
        correctAnswer: 1,
        explanation: 'Перпендикулярны.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geom8-q6',
        question: 'Площадь квадрата со стороной a:',
        options: ['a', '2a', 'a²', '4a'],
        correctAnswer: 2,
        explanation: 'a².',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom8-q7',
        question: 'Средняя линия трапеции:',
        options: ['Сумма оснований', 'Полусумма', 'Разность', 'Высота'],
        correctAnswer: 1,
        explanation: 'Полусумма.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geom8-q8',
        question: 'Диагонали прямоугольника:',
        options: ['Перпендикулярны', 'Равны', 'Не равны', 'Параллельны'],
        correctAnswer: 1,
        explanation: 'Равны.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom8-q9',
        question: 'Квадрат — это:',
        options: ['Только прямоугольник', 'Только ромб', 'И прямоугольник, и ромб', 'Параллелограмм'],
        correctAnswer: 2,
        explanation: 'Обладает свойствами обоих.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom8-q10',
        question: 'Подобные треугольники имеют:',
        options: ['Равные стороны', 'Равные углы', 'Пропорц. стороны и равные углы', 'Равные площади'],
        correctAnswer: 2,
        explanation: 'Равные углы, пропорц. стороны.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geom8-q11',
        question: 'Площадь трапеции:',
        options: ['S = a · h', 'S = (a+b) · h', 'S = (a+b)/2 · h', 'S = a · b'],
        correctAnswer: 2,
        explanation: '(a+b)/2 · h.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geom8-q12',
        question: 'Признак по двум углам:',
        options: ['Два угла равны', 'Две стороны равны', 'Три угла равны', 'Стороны пропорц.'],
        correctAnswer: 0,
        explanation: 'Если два угла равны.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geom8-q13',
        question: 'Параллелограмм — это:',
        options: ['Ромб', 'Прямоугольник', 'Четырёхугольник', 'Треугольник'],
        correctAnswer: 2,
        explanation: 'Четырёхугольник.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ФИЗИКА ====================
  {
    id: 'physics8',
    title: 'Физика',
    icon: <Atom className="w-5 h-5" />,
    color: 'text-pink-400',
    gradient: 'from-pink-500 to-rose-500',
    description: 'Тепловые явления, электричество',
    sections: [
      {
        id: 'phys8-s1',
        title: 'Тепловые явления',
        description: 'Теплопередача, агрегатные состояния',
        order: 1,
        topics: [
          {
            id: 'phys8-s1-t1',
            title: 'Внутренняя энергия',
            description: 'Теплопередача и работа',
            theory: `<h3>Внутренняя энергия</h3>
            <p>Внутренняя энергия — это энергия движения и взаимодействия частиц, из которых состоит тело.</p>
            <h4>Способы изменения:</h4>
            <ul>
              <li><b>Совершение работы</b> (над телом или телом)</li>
              <li><b>Теплопередача</b> (теплопроводность, конвекция, излучение)</li>
            </ul>
            <h4>Виды теплопередачи:</h4>
            <ul>
              <li><b>Теплопроводность</b> — передача через вещество</li>
              <li><b>Конвекция</b> — перенос потоками жидкости или газа</li>
              <li><b>Излучение</b> — передача электромагнитными волнами</li>
            </ul>`,
            examples: ['Как передаётся тепло в вакууме?', 'Почему ручка чайника не нагревается?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'phys8-s1-t1-l1',
                title: 'Внутренняя энергия',
                content: `<div class="lesson">
                  <h2>🔥 Внутренняя энергия</h2>
                  <p>Внутренняя энергия = кинетическая + потенциальная энергия частиц</p>
                  <h3>Зависит от:</h3>
                  <ul>
                    <li>Температуры (чем выше, тем больше)</li>
                    <li>Агрегатного состояния</li>
                    <li>Массы тела</li>
                  </ul>
                  <h3>Способы изменения:</h3>
                  <p>1. Работа (трение, сжатие)</p>
                  <p>2. Теплопередача</p>
                  <div class="tip">💡 При нагревании внутренняя энергия увеличивается!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              },
              {
                id: 'phys8-s1-t1-l2',
                title: 'Виды теплопередачи',
                content: `<div class="lesson">
                  <h2>🌡️ Теплопередача</h2>
                  <h3>Теплопроводность:</h3>
                  <p>Передача через вещество (металлы — хорошо, дерево — плохо)</p>
                  <h3>Конвекция:</h3>
                  <p>Перенос потоками жидкости/газа (нагрев воды снизу)</p>
                  <h3>Излучение:</h3>
                  <p>Работает в вакууме! (Солнце → Земля)</p>
                  <div class="tip">💡 Излучение — единственный способ в вакууме!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'phys8-s1-t2',
            title: 'Агрегатные состояния',
            description: 'Плавление и кристаллизация',
            theory: `<h3>Агрегатные состояния вещества</h3>
            <h4>Переходы:</h4>
            <ul>
              <li><b>Плавление</b> — твёрдое → жидкое (поглощение энергии)</li>
              <li><b>Кристаллизация</b> — жидкое → твёрдое (выделение энергии)</li>
              <li><b>Парообразование</b> — жидкое → газообразное</li>
              <li><b>Конденсация</b> — газообразное → жидкое</li>
            </ul>
            <h4>Температура плавления:</h4>
            <p>Лёд: 0°C, Железо: 1538°C, Вольфрам: 3422°C</p>
            <h4>Формула:</h4>
            <p>Q = λ · m, где λ — удельная теплота плавления</p>`,
            examples: ['При какой температуре плавится лёд?', 'Сколько энергии нужно для плавления?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'phys8-s1-t2-l1',
                title: 'Плавление и кристаллизация',
                content: `<div class="lesson">
                  <h2>🧊 Плавление и отвердевание</h2>
                  <h3>Плавление:</h3>
                  <p>Твёрдое → жидкое при температуре плавления</p>
                  <p>Q = λ · m (поглощение энергии)</p>
                  <h3>Кристаллизация (отвердевание):</h3>
                  <p>Жидкое → твёрдое</p>
                  <p>Q = -λ · m (выделение энергии)</p>
                  <h3>Важно:</h3>
                  <p>Во время плавления/кристаллизации температура не меняется!</p>
                  <div class="tip">💡 Лёд плавится при 0°C, вода замерзает при 0°C!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'phys8-s1-t3',
            title: 'Испарение и конденсация',
            description: 'Парообразование',
            theory: `<h3>Испарение</h3>
            <p>Испарение — переход жидкости в пар при любой температуре.</p>
            <h4>От чего зависит скорость испарения:</h4>
            <ul>
              <li>Температура (выше → быстрее)</li>
              <li>Площадь поверхности (больше → быстрее)</li>
              <li>Ветер (есть → быстрее)</li>
              <li>Род вещества (спирт испаряется быстрее воды)</li>
            </ul>
            <h4>Формула:</h4>
            <p>Q = L · m, где L — удельная теплота парообразования</p>
            <h3>Конденсация</h3>
            <p>Переход пара в жидкость, выделение энергии.</p>`,
            examples: ['Почему мокрое бельё сохнет быстрее на ветру?', 'Почему пот охлаждает тело?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'phys8-s1-t3-l1',
                title: 'Испарение',
                content: `<div class="lesson">
                  <h2>💨 Испарение</h2>
                  <p>Переход жидкости в пар с поверхности при любой температуре.</p>
                  <h3>Быстрее испаряется:</h3>
                  <ul>
                    <li>При нагревании</li>
                    <li>При ветре</li>
                    <li>При большей площади</li>
                  </ul>
                  <h3>Охлаждение:</h3>
                  <p>При испарении температура жидкости понижается!</p>
                  <div class="tip">💡 Испарение — это охлаждение!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'phys8-s1-t3-q1',
                question: 'Испарение происходит при:',
                options: ['Только при кипении', 'При любой температуре', 'Только при 100°C', 'Только на солнце'],
                correctAnswer: 1,
                explanation: 'Испарение происходит при любой температуре с поверхности жидкости!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'phys8-s1-t3-q2',
                question: 'Что ускоряет испарение?',
                options: ['Холод', 'Ветер', 'Закрытая ёмкость', 'Лёд'],
                correctAnswer: 1,
                explanation: 'Ветер уносит молекулы пара и ускоряет испарение!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'phys8-s1-t3-q3',
                question: 'При испарении температура жидкости:',
                options: ['Повышается', 'Понижается', 'Не меняется', 'Становится 0°C'],
                correctAnswer: 1,
                explanation: 'При испарении улетают самые быстрые молекулы, поэтому жидкость охлаждается!',
                difficulty: 'medium',
                points: 15
              }
            ]
          },
          {
            id: 'phys8-s1-t4',
            title: 'Тепловой баланс',
            description: 'Уравнение теплового баланса',
            theory: `<h3>Уравнение теплового баланса</h3>
            <p>В изолированной системе сумма теплот равна нулю:</p>
            <h4>Q₁ + Q₂ + ... = 0</h4>
            <p>Или: Qполученное = Qотданное</p>
            <h4>Пример:</h4>
            <p>Смешали горячую и холодную воду:</p>
            <p>c·m₁·(t₁ - t) = c·m₂·(t - t₂)</p>
            <p>Горячая отдаёт, холодная принимает.</p>`,
            examples: ['Найди температуру смеси', 'Сколько льда растает в горячей воде?'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 35,
            lessons: [
              {
                id: 'phys8-s1-t4-l1',
                title: 'Уравнение теплового баланса',
                content: `<div class="lesson">
                  <h2>⚖️ Тепловой баланс</h2>
                  <h3>Закон:</h3>
                  <p>Q₁ + Q₂ + Q₃ + ... = 0</p>
                  <p>Все теплоты в системе в сумме дают ноль!</p>
                  <h3>Алгоритм решения:</h3>
                  <ol>
                    <li>Определить, какие тела отдают тепло</li>
                    <li>Определить, какие тела получают тепло</li>
                    <li>Записать уравнение</li>
                    <li>Решить</li>
                  </ol>
                  <div class="tip">💡 Энергия не исчезает, а передаётся!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'phys8-s1-t4-q1',
                question: 'В изолированной системе сумма всех теплот равна:',
                options: ['Бесконечности', 'Нулю', 'Единице', 'Температуре'],
                correctAnswer: 1,
                explanation: 'По закону сохранения энергии: Q₁ + Q₂ + ... = 0!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'phys8-s1-t4-q2',
                question: 'При смешивании горячей и холодной воды:',
                options: ['Горячая нагревается', 'Холодная охлаждается', 'Тепло переходит от горячей к холодной', 'Ничего не происходит'],
                correctAnswer: 2,
                explanation: 'Тепло передаётся от горячего тела к холодному до теплового равновесия!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'phys8-s1-t4-q3',
                question: 'Формула количества теплоты:',
                options: ['Q = m · t', 'Q = c · m · Δt', 'Q = c · t', 'Q = m · c'],
                correctAnswer: 1,
                explanation: 'Q = c · m · Δt — количество теплоты = уд. теплоёмкость × масса × изменение температуры!',
                difficulty: 'medium',
                points: 15
              }
            ]
          }
        ]
      },
      {
        id: 'phys8-s2',
        title: 'Электрические явления',
        description: 'Электрический ток',
        order: 2,
        topics: [
          {
            id: 'phys8-s2-t1',
            title: 'Электрический ток',
            description: 'Сила тока, напряжение, сопротивление',
            theory: `<h3>Электрический ток</h3>
            <p>Электрический ток — это направленное движение заряженных частиц.</p>
            <h4>Основные величины:</h4>
            <ul>
              <li><b>Сила тока</b> I = q/t (Ампер, А)</li>
              <li><b>Напряжение</b> U = A/q (Вольт, В)</li>
              <li><b>Сопротивление</b> R = ρ · l/S (Ом)</li>
            </ul>
            <h4>Закон Ома для участка цепи:</h4>
            <p>I = U/R</p>
            <h4>Пример:</h4>
            <p>При U = 12 В и R = 4 Ом: I = 12/4 = 3 А</p>`,
            examples: ['Рассчитай силу тока', 'Найди сопротивление'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 40,
            lessons: [
              {
                id: 'phys8-s2-t1-l1',
                title: 'Закон Ома',
                content: `<div class="lesson">
                  <h2>⚡ Закон Ома</h2>
                  <h3>I = U/R</h3>
                  <p>I — сила тока (А)</p>
                  <p>U — напряжение (В)</p>
                  <p>R — сопротивление (Ом)</p>
                  <h3>Следствия:</h3>
                  <p>U = I · R</p>
                  <p>R = U/I</p>
                  <h3>Пример:</h3>
                  <p>Лампочка R = 20 Ом подключена к U = 220 В</p>
                  <p>I = 220/20 = 11 А</p>
                  <div class="tip">💡 Закон Ома — главный закон электричества!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              },
              {
                id: 'phys8-s2-t1-l2',
                title: 'Сопротивление проводника',
                content: `<div class="lesson">
                  <h2>🔌 Сопротивление</h2>
                  <h3>R = ρ · l/S</h3>
                  <p>ρ — удельное сопротивление (зависит от материала)</p>
                  <p>l — длина проводника</p>
                  <p>S — площадь поперечного сечения</p>
                  <h3>От чего зависит:</h3>
                  <ul>
                    <li>Материал (медь — мало, вольфрам — много)</li>
                    <li>Длина (больше длина → больше R)</li>
                    <li>Сечение (больше сечение → меньше R)</li>
                  </ul>
                  <div class="tip">💡 Реостаты меняют сопротивление изменением длины!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'phys8-q1',
        question: 'Какой вид теплопередачи работает в вакууме?',
        options: ['Теплопроводность', 'Конвекция', 'Излучение', 'Все три'],
        correctAnswer: 2,
        explanation: 'Излучение — единственный вид теплопередачи, работающий в вакууме (от Солнца к Земле).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'phys8-q2',
        question: 'При какой температуре плавится лёд?',
        options: ['-10°C', '0°C', '100°C', '1000°C'],
        correctAnswer: 1,
        explanation: 'Температура плавления льда (кристаллизации воды) равна 0°C при нормальном давлении.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'phys8-q3',
        question: 'По закону Ома: I = ?',
        options: ['U · R', 'U/R', 'R/U', 'U + R'],
        correctAnswer: 1,
        explanation: 'Закон Ома: I = U/R. Сила тока равна отношению напряжения к сопротивлению.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'phys8-q4',
        question: 'Внутренняя энергия зависит от:',
        options: ['Массы', 'Температуры', 'Объёма', 'Цвета'],
        correctAnswer: 1,
        explanation: 'Температуры.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'phys8-q5',
        question: 'Теплопередача в вакууме:',
        options: ['Теплопроводность', 'Конвекция', 'Излучение', 'Никакая'],
        correctAnswer: 2,
        explanation: 'Излучение.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'phys8-q6',
        question: 'Температура плавления льда:',
        options: ['−10°C', '0°C', '100°C', '−273°C'],
        correctAnswer: 1,
        explanation: '0°C.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'phys8-q7',
        question: 'По Ому: U = ?',
        options: ['I · R', 'I / R', 'R / I', 'I + R'],
        correctAnswer: 0,
        explanation: 'I · R.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'phys8-q8',
        question: 'Единица силы тока:',
        options: ['Вольт', 'Ом', 'Ампер', 'Ватт'],
        correctAnswer: 2,
        explanation: 'Ампер.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'phys8-q9',
        question: 'При нагревании энергия:',
        options: ['Уменьшается', 'Увеличивается', 'Не меняется', 'Ноль'],
        correctAnswer: 1,
        explanation: 'Увеличивается.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'phys8-q10',
        question: 'Единица напряжения:',
        options: ['Ампер', 'Вольт', 'Ом', 'Джоуль'],
        correctAnswer: 1,
        explanation: 'Вольт.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'phys8-q11',
        question: 'Количество теплоты — это:',
        options: ['Температура', 'Энергия', 'Масса', 'Объём'],
        correctAnswer: 1,
        explanation: 'Энергия.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'phys8-q12',
        question: 'Сопротивление зависит от:',
        options: ['Материала', 'Длины', 'Сечения', 'От всего'],
        correctAnswer: 3,
        explanation: 'От материала, длины и сечения.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'phys8-q13',
        question: 'Конвекция в:',
        options: ['Твёрдых телах', 'Жидкостях и газах', 'Вакууме', 'Нигде'],
        correctAnswer: 1,
        explanation: 'В жидкостях и газах.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ИСТОРИЯ ====================
  {
    id: 'history8',
    title: 'История',
    icon: <Scroll className="w-5 h-5" />,
    color: 'text-amber-400',
    gradient: 'from-amber-500 to-yellow-500',
    description: 'Россия в XVIII веке',
    sections: [
      {
        id: 'hist8-s1',
        title: 'Россия при Петре I',
        description: 'Преобразования Петра Великого',
        order: 1,
        topics: [
          {
            id: 'hist8-s1-t1',
            title: 'Реформы Петра I',
            description: 'Государственные преобразования',
            theory: `<h3>Петр I (1682-1725)</h3>
            <h4>Государственные реформы:</h4>
            <ul>
              <li>Сенат (1711) — высший орган власти</li>
              <li>Коллегии — центральные органы управления</li>
              <li>Синод — управление церковью</li>
              <li>Табель о рангах (1722) — система чинов</li>
              <li>Областная реформа — губернии</li>
            </ul>
            <h4>Военные реформы:</h4>
            <ul>
              <li>Рекрутская повинность</li>
              <li>Регулярная армия и флот</li>
            </ul>
            <h4>1721 год — провозглашение империи</h4>`,
            examples: ['Какие реформы провёл Петр I?', 'Что такое Табель о рангах?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'hist8-s1-t1-l1',
                title: 'Государственные реформы',
                content: `<div class="lesson">
                  <h2>👑 Петр I — Великий реформатор</h2>
                  <h3>Главные реформы:</h3>
                  <ul>
                    <li><b>Сенат</b> (1711) — высший орган управления</li>
                    <li><b>Коллегии</b> — вместо приказов</li>
                    <li><b>Табель о рангах</b> (1722) — 14 классов чинов</li>
                    <li><b>Указ о престолонаследии</b> — царь сам назначает наследника</li>
                  </ul>
                  <h3>1721 год:</h3>
                  <p>Россия провозглашена империей</p>
                  <p>Пётр I — первый император</p>
                  <div class="tip">💡 "В Европу прорубить окно!" — цель Петра</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              },
              {
                id: 'hist8-s1-t1-l2',
                title: 'Северная война',
                content: `<div class="lesson">
                  <h2>⚔️ Северная война (1700-1721)</h2>
                  <p>Россия + Дания + Польша против Швеции</p>
                  <h3>Ключевые события:</h3>
                  <ul>
                    <li><b>1700</b> — Нарвское поражение</li>
                    <li><b>1703</b> — основание Санкт-Петербурга</li>
                    <li><b>1709</b> — Полтавская победа</li>
                    <li><b>1721</b> — Ништадтский мир</li>
                  </ul>
                  <h3>Итог:</h3>
                  <p>Россия получила выход к Балтийскому морю</p>
                  <div class="tip">💡 Полтава — перелом войны!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'hist8-s2',
        title: 'Россия во второй половине XVIII века',
        description: 'Екатерина II',
        order: 2,
        topics: [
          {
            id: 'hist8-s2-t1',
            title: 'Екатерина II',
            description: 'Просвещённый абсолютизм',
            theory: `<h3>Екатерина II (1762-1796)</h3>
            <h4>Внутренняя политика:</h4>
            <ul>
              <li>"Наказ" — идеи просвещения</li>
              <li>Уложенная комиссия (1767)</li>
              <li>Губернская реформа (1775)</li>
              <li>Жалованные грамоты дворянству и городам (1785)</li>
            </ul>
            <h4>Внешняя политика:</h4>
            <ul>
              <li>Русско-турецкие войны — выход к Чёрному морю</li>
              <li>Присоединение Крыма (1783)</li>
              <li>Разделы Польши</li>
            </ul>
            <h4>Пугачёвское восстание (1773-1775)</h4>`,
            examples: ['Что такое просвещённый абсолютизм?', 'Какие земли присоединены при Екатерине II?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'hist8-s2-t1-l1',
                title: 'Просвещённый абсолютизм',
                content: `<div class="lesson">
                  <h2>👑 Екатерина II — Просвещённый монарх</h2>
                  <h3>Идеи:</h3>
                  <p>Переписка с Вольтером, Дидро</p>
                  <p>"Наказ" — идеи Просвещения в управлении</p>
                  <h3>Реформы:</h3>
                  <ul>
                    <li>Уложенная комиссия — новый свод законов</li>
                    <li>Губернская реформа — 50 губерний</li>
                    <li>Жалованная грамота дворянству</li>
                  </ul>
                  <div class="tip">💡 "Золотой век" дворянства!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              },
              {
                id: 'hist8-s2-t1-l2',
                title: 'Внешняя политика',
                content: `<div class="lesson">
                  <h2>🗺️ Расширение империи</h2>
                  <h3>Русско-турецкие войны:</h3>
                  <ul>
                    <li>1768-1774 — Кючук-Кайнарджийский мир</li>
                    <li>1787-1791 — Ясский мир</li>
                  </ul>
                  <h3>Присоединения:</h3>
                  <ul>
                    <li>Крым (1783)</li>
                    <li>Правобережная Украина</li>
                    <li>Белоруссия, Литва (разделы Польши)</li>
                  </ul>
                  <div class="tip">💡 Суворов и Ушаков — герои войн!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'hist8-q1',
        question: 'В каком году основан Санкт-Петербург?',
        options: ['1700', '1703', '1721', '1725'],
        correctAnswer: 1,
        explanation: 'Санкт-Петербург основан Петром I в 1703 году после взятия крепости Ниеншанц.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist8-q2',
        question: 'Какая война длилась с 1700 по 1721 год?',
        options: ['Крымская', 'Северная', 'Отечественная', 'Семилетняя'],
        correctAnswer: 1,
        explanation: 'Северная война (1700-1721) — война России со Швецией за выход к Балтийскому морю.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist8-q3',
        question: 'Когда Крым был присоединён к России?',
        options: ['1762', '1773', '1783', '1796'],
        correctAnswer: 2,
        explanation: 'В 1783 году Екатерина II изявила манифест о присоединении Крыма к России.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist8-q4',
        question: 'Когда Россия стала империей?',
        options: ['1703', '1721', '1547', '1613'],
        correctAnswer: 1,
        explanation: '1721.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist8-q5',
        question: 'Полтавская битва:',
        options: ['1700', '1703', '1709', '1721'],
        correctAnswer: 2,
        explanation: '1709.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist8-q6',
        question: 'Кто основал Петербург?',
        options: ['Иван IV', 'Пётр I', 'Екатерина II', 'Александр I'],
        correctAnswer: 1,
        explanation: 'Пётр I.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'hist8-q7',
        question: 'Табель о рангах — это:',
        options: ['Налог', 'Система чинов', 'Армия', 'Церковь'],
        correctAnswer: 1,
        explanation: 'Система чинов.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist8-q8',
        question: 'Екатерина II правила в:',
        options: ['XVII в.', 'XVIII в.', 'XIX в.', 'XVI в.'],
        correctAnswer: 1,
        explanation: 'XVIII век.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'hist8-q9',
        question: 'Крым присоединён в:',
        options: ['1709', '1721', '1783', '1812'],
        correctAnswer: 2,
        explanation: '1783.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist8-q10',
        question: 'Северная война — с:',
        options: ['Турцией', 'Швецией', 'Францией', 'Польшей'],
        correctAnswer: 1,
        explanation: 'Швецией.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'hist8-q11',
        question: 'Просвещённый абсолютизм — это:',
        options: ['Отмена монархии', 'Политика с идеями', 'Война', 'Религия'],
        correctAnswer: 1,
        explanation: 'Политика с идеями просвещения.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist8-q12',
        question: 'Пугачёвское восстание:',
        options: ['1773−1775', '1700−1721', '1783−1785', '1812'],
        correctAnswer: 0,
        explanation: '1773−1775.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist8-q13',
        question: 'Ништадтский мир:',
        options: ['1709', '1721', '1783', '1812'],
        correctAnswer: 1,
        explanation: '1721.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== БИОЛОГИЯ (Человек) ====================
  {
    id: 'bio8',
    title: 'Биология',
    icon: <Leaf className="w-5 h-5" />,
    color: 'text-green-400',
    gradient: 'from-green-500 to-emerald-500',
    description: 'Человек и его здоровье',
    sections: [
      {
        id: 'bio8-s1',
        title: 'Организм человека',
        description: 'Строение и функции органов',
        order: 1,
        topics: [
          {
            id: 'bio8-s1-t1',
            title: 'Опорно-двигательная система',
            description: 'Кости и мышцы',
            theory: `<h3>Опорно-двигательная система</h3>
            <h4>Скелет:</h4>
            <ul>
              <li><b>Осевой скелет</b>: череп, позвоночник, грудная клетка</li>
              <li><b>Добавочный скелет</b>: конечности</li>
            </ul>
            <h4>Функции скелета:</h4>
            <ul>
              <li>Опора тела</li>
              <li>Защита органов (череп, рёбра)</li>
              <li>Движение (суставы)</li>
              <li>Депо минеральных веществ</li>
            </ul>
            <h4>Типы соединения костей:</h4>
            <ul>
              <li>Неподвижное (череп)</li>
              <li>Полуподвижное (позвоночник)</li>
              <li>Подвижное (суставы)</li>
            </ul>`,
            examples: ['Назови функции скелета', 'Какие кости защищают органы?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'bio8-s1-t1-l1',
                title: 'Строение скелета',
                content: `<div class="lesson">
                  <h2>🦴 Скелет человека</h2>
                  <h3>Отделы:</h3>
                  <ul>
                    <li><b>Череп</b> — защита мозга</li>
                    <li><b>Позвоночник</b> — 33-34 позвонка</li>
                    <li><b>Грудная клетка</b> — защита сердца, лёгких</li>
                    <li><b>Пояса конечностей</b></li>
                    <li><b>Свободные конечности</b></li>
                  </ul>
                  <h3>Особенности:</h3>
                  <p>S-образный позвоночник — прямохождение</p>
                  <div class="tip">💡 У человека около 206 костей!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'bio8-s1-t2',
            title: 'Кровеносная система',
            description: 'Сердце и сосуды',
            theory: `<h3>Кровеносная система</h3>
            <h4>Сердце:</h4>
            <p>Четырёхкамерное: 2 предсердия, 2 желудочка</p>
            <p>Масса: около 300 г</p>
            <h4>Круги кровообращения:</h4>
            <ul>
              <li><b>Большой круг</b>: левый желудочек → тело → правое предсердие</li>
              <li><b>Малый круг</b>: правый желудочек → лёгкие → левое предсердие</li>
            </ul>
            <h4>Сосуды:</h4>
            <ul>
              <li><b>Артерии</b> — несут кровь от сердца</li>
              <li><b>Вены</b> — несут кровь к сердцу</li>
              <li><b>Капилляры</b> — обмен веществ</li>
            </ul>`,
            examples: ['Опиши большой круг кровообращения', 'Чем артерии отличаются от вен?'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 35,
            lessons: [
              {
                id: 'bio8-s1-t2-l1',
                title: 'Строение сердца',
                content: `<div class="lesson">
                  <h2>❤️ Сердце человека</h2>
                  <h3>Строение:</h3>
                  <ul>
                    <li>4 камеры: 2 предсердия + 2 желудочка</li>
                    <li>Клапаны — предотвращают обратный ток крови</li>
                    <li>Перегородка — разделяет левую и правую половины</li>
                  </ul>
                  <h3>Работа сердца:</h3>
                  <p>Систола (сокращение) → Диастола (расслабление)</p>
                  <p>Пульс — колебание стенок артерий</p>
                  <div class="tip">💡 Сердце делает ~70 ударов в минуту!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              },
              {
                id: 'bio8-s1-t2-l2',
                title: 'Круги кровообращения',
                content: `<div class="lesson">
                  <h2>🔄 Круги кровообращения</h2>
                  <h3>Большой круг:</h3>
                  <p>Левый желудочек → аорта → органы → вены → правое предсердие</p>
                  <p>Доставляет O₂, забирает CO₂</p>
                  <h3>Малый круг:</h3>
                  <p>Правый желудочек → лёгочная артерия → лёгкие → левое предсердие</p>
                  <p>Насыщает кровь O₂, выводит CO₂</p>
                  <div class="tip">💡 Малый круг — газообмен, большой — питание!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'bio8-s2',
        title: 'Нервная система',
        description: 'Строение и функции',
        order: 2,
        topics: [
          {
            id: 'bio8-s2-t1',
            title: 'Строение нервной системы',
            description: 'Нейроны и нервы',
            theory: `<h3>Нервная система</h3>
            <p>Нервная система обеспечивает регуляцию всех органов.</p>
            <h4>Строение:</h4>
            <ul>
              <li><b>Нейроны</b> — нервные клетки</li>
              <li><b>Нервы</b> — скопления нейронов</li>
              <li><b>Глия</b> — клетки-помощники</li>
            </ul>
            <h4>Нейрон состоит из:</h4>
            <ul>
              <li>Тело — дендриты — аксон</li>
              <li>Дендриты — короткие отростки</li>
              <li>Аксон — длинный отросток</li>
            </ul>
            <h4>Синапс — контакт между нейронами</h4>`,
            examples: ['Как устроен нейрон?', 'Что такое синапс?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'bio8-s2-t1-l1',
                title: 'Нейрон',
                content: `<div class="lesson">
                  <h2>🧠 Нейрон</h2>
                  <h3>Строение:</h3>
                  <ul>
                    <li>Тело — ядро, цитоплазма</li>
                    <li>Дендриты — принимают сигналы</li>
                    <li>Аксон — передаёт сигналы</li>
                  </ul>
                  <h3>Синапс:</h3>
                  <p>Место контакта между нейронами</p>
                  <div class="tip">💡 Нервный импульс идёт от дендритов к аксону!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'bio8-s2-t1-q1',
                question: 'Что такое нейрон?',
                options: ['Мышечная клетка', 'Нервная клетка', 'Кровяная клетка', 'Костная клетка'],
                correctAnswer: 1,
                explanation: 'Нейрон — нервная клетка, основная единица нервной системы.',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'bio8-s2-t1-q2',
                question: 'Как называется контакт между нейронами?',
                options: ['Синапс', 'Щель', 'Контакт', 'Связь'],
                correctAnswer: 0,
                explanation: 'Синапс — место контакта между нейронами.',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'bio8-s2-t1-q3',
                question: 'Какие отростки есть у нейрона?',
                options: ['Только дендриты', 'Дендриты и аксон', 'Только аксон', 'Нет отростков'],
                correctAnswer: 1,
                explanation: 'У нейрона есть дендриты (принимают) и аксон (передаёт).',
                difficulty: 'medium',
                points: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'bio8-q1',
        question: 'Сколько камер в сердце человека?',
        options: ['2', '3', '4', '6'],
        correctAnswer: 2,
        explanation: 'Сердце человека четырёхкамерное: 2 предсердия и 2 желудочка.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio8-q2',
        question: 'Какие сосуды несут кровь от сердца?',
        options: ['Вены', 'Артерии', 'Капилляры', 'Лимфатические'],
        correctAnswer: 1,
        explanation: 'Артерии несут кровь от сердца к органам. Вены — к сердцу.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio8-q3',
        question: 'Какой круг кровообращения идёт через лёгкие?',
        options: ['Большой', 'Малый', 'Третий', 'Оба круга'],
        correctAnswer: 1,
        explanation: 'Малый круг кровообращения проходит через лёгкие, где кровь насыщается кислородом.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio8-q4',
        question: 'Какой орган вырабатывает инсулин?',
        options: ['Печень', 'Желудок', 'Поджелудочная железа', 'Почки'],
        correctAnswer: 2,
        explanation: 'Поджелудочная железа вырабатывает инсулин для регуляции сахара в крови.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio8-q5',
        question: 'Что такое нейрон?',
        options: ['Клетка кожи', 'Нервная клетка', 'Клетка крови', 'Мышечная клетка'],
        correctAnswer: 1,
        explanation: 'Нейрон — нервная клетка, основная единица нервной системы.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio8-q6',
        question: 'Какой отдел мозга отвечает за координацию движений?',
        options: ['Передний мозг', 'Мозжечок', 'Спинной мозг', 'Промежуточный мозг'],
        correctAnswer: 1,
        explanation: 'Мозжечок координирует движения и поддерживает равновесие.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio8-q7',
        question: 'Какой гормон вырабатывают надпочечники при стрессе?',
        options: ['Инсулин', 'Адреналин', 'Тироксин', 'Гормон роста'],
        correctAnswer: 1,
        explanation: 'Надпочечники выделяют адреналин при стрессе ("бей или беги").',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio8-q8',
        question: 'Что такое безусловный рефлекс?',
        options: ['Приобретённая реакция', 'Врождённая реакция', 'Условная реакция', 'Осознанное действие'],
        correctAnswer: 1,
        explanation: 'Безусловный рефлекс — врождённая реакция организма (например, мигательный).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio8-q9',
        question: 'Где находятся рецепторы слуха?',
        options: ['В наружном ухе', 'В среднем ухе', 'Во внутреннем ухе (улитке)', 'В слуховом проходе'],
        correctAnswer: 2,
        explanation: 'Рецепторы слуха находятся в улитке внутреннего уха.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio8-q10',
        question: 'Что такое гомеостаз?',
        options: ['Болезнь', 'Постоянство внутренней среды', 'Размножение', 'Рост'],
        correctAnswer: 1,
        explanation: 'Гомеостаз — поддержание постоянства внутренней среды организма.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio8-q11',
        question: 'Какая железа называется "дирижёром эндокринного оркестра"?',
        options: ['Щитовидная', 'Гипофиз', 'Надпочечники', 'Поджелудочная'],
        correctAnswer: 1,
        explanation: 'Гипофиз управляет работой других желёз внутренней секреции.',
        difficulty: 'hard',
        points: 20
      },
      {
        id: 'bio8-q12',
        question: 'Сколько пар хромосом у человека?',
        options: ['23', '46', '22', '44'],
        correctAnswer: 0,
        explanation: 'У человека 23 пары хромосом (46 хромосом всего).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio8-q13',
        question: 'Что такое анализатор?',
        options: ['Прибор', 'Система: рецептор + проводящий путь + мозговой центр', 'Микроскоп', 'Орган чувств'],
        correctAnswer: 1,
        explanation: 'Анализатор — система, обеспечивающая восприятие раздражения (рецептор + путь + центр).',
        difficulty: 'hard',
        points: 20
      }
    ]
  },

  // ==================== ЛИТЕРАТУРА ====================
  {
    id: 'literature8',
    title: 'Литература',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Русская классика XIX века',
    sections: [
      {
        id: 'lit8-s1',
        title: 'А.С. Пушкин',
        description: 'Капитанская дочка',
        order: 1,
        topics: [
          {
            id: 'lit8-s1-t1',
            title: 'Роман "Капитанская дочка"',
            description: 'Исторический роман',
            theory: `<h3>"Капитанская дочка"</h3>
            <p>Исторический роман о пугачёвском восстании.</p>
            <h4>Главные герои:</h4>
            <ul>
              <li>Пётр Гринёв — главный герой, дворянин</li>
              <li>Маша Миронова — дочь коменданта крепости</li>
              <li>Емельян Пугачёв — предводитель восстания</li>
            </ul>
            <h4>Главная мысль:</h4>
            <p>Честь и долг — важнейшие ценности человека.</p>`,
            examples: ['Как Гринёв проявил честь?', 'Образ Пугачёва в романе'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'lit8-s1-t1-l1',
                title: 'Образ Гринёва',
                content: `<div class="lesson">
                  <h2>⚔️ Пётр Гринёв</h2>
                  <p>Главный герой — молодой дворянин, отправленный на службу.</p>
                  <h3>Качества:</h3>
                  <ul>
                    <li>Честность</li>
                    <li>Благородство</li>
                    <li>Верность долгу</li>
                  </ul>
                  <div class="tip">💡 "Береги честь смолоду!" — эпиграф романа</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'lit8-q1',
        question: 'Кто автор романа "Капитанская дочка"?',
        options: ['Лермонтов', 'Пушкин', 'Гоголь', 'Тургенев'],
        correctAnswer: 1,
        explanation: 'А.С. Пушкин написал "Капитанскую дочку" в 1836 году.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'lit8-q2',
        question: 'Кто написал роман "Герой нашего времени"?',
        options: ['Пушкин', 'Лермонтов', 'Гоголь', 'Достоевский'],
        correctAnswer: 1,
        explanation: 'М.Ю. Лермонтов написал "Герой нашего времени" (1840).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'lit8-q3',
        question: 'Кто главный герой поэмы "Мцыри"?',
        options: ['Печорин', 'Онегин', 'Мцыри', 'Демон'],
        correctAnswer: 2,
        explanation: 'Мцыри — юноша-монах, главный герой поэмы М.Ю. Лермонтова.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'lit8-q4',
        question: 'Какое произведение написал Н.В. Гоголь?',
        options: ['Евгений Онегин', 'Мёртвые души', 'Гроза', 'Отцы и дети'],
        correctAnswer: 1,
        explanation: '"Мёртвые души" — поэма Н.В. Гоголя.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'lit8-q5',
        question: 'Кто автор пьесы "Ревизор"?',
        options: ['Пушкин', 'Гоголь', 'Островский', 'Фонвизин'],
        correctAnswer: 1,
        explanation: 'Н.В. Гоголь написал комедию "Ревизор" (1836).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'lit8-q6',
        question: 'Кто написал пьесу "Гроза"?',
        options: ['Гоголь', 'Островский', 'Чехов', 'Тургенев'],
        correctAnswer: 1,
        explanation: 'А.Н. Островский написал пьесу "Гроза" (1859).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'lit8-q7',
        question: 'Кто автор рассказа "После бала"?',
        options: ['Тургенев', 'Толстой', 'Чехов', 'Горький'],
        correctAnswer: 1,
        explanation: 'Л.Н. Толстой написал рассказ "После бала" (1903).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'lit8-q8',
        question: 'Кто написал "Евгений Онегин"?',
        options: ['Лермонтов', 'Пушкин', 'Гоголь', 'Тургенев'],
        correctAnswer: 1,
        explanation: 'А.С. Пушкин написал роман в стихах "Евгений Онегин".',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'lit8-q9',
        question: 'Что такое онегинская строфа?',
        options: ['Стихотворение', '14 строк особого построения', 'Роман', 'Сонет'],
        correctAnswer: 1,
        explanation: 'Онегинская строфа — 14 строк особого построения, созданная Пушкиным.',
        difficulty: 'hard',
        points: 20
      },
      {
        id: 'lit8-q10',
        question: 'Кто автор романа "Отцы и дети"?',
        options: ['Тургенев', 'Толстой', 'Достоевский', 'Гончаров'],
        correctAnswer: 0,
        explanation: 'И.С. Тургенев написал роман "Отцы и дети" (1862).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'lit8-q11',
        question: 'Кто такой Базаров?',
        options: ['Поэт', 'Нигилист в романе "Отцы и дети"', 'Помещик', 'Офицер'],
        correctAnswer: 1,
        explanation: 'Евгений Базаров — главный герой романа И.С. Тургенева "Отцы и дети", нигилист.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'lit8-q12',
        question: 'Кто написал рассказ "Хамелеон"?',
        options: ['Толстой', 'Чехов', 'Бунин', 'Куприн'],
        correctAnswer: 1,
        explanation: 'А.П. Чехов написал рассказ "Хамелеон" (1884).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'lit8-q13',
        question: 'Что такое сатира?',
        options: ['Весёлое стихотворение', 'Обличение пороков через смех', 'Любовная лирика', 'Героическая поэма'],
        correctAnswer: 1,
        explanation: 'Сатира — обличение общественных пороков через смех и иронию.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ИНОСТРАННЫЙ ЯЗЫК ====================
  {
    id: 'english8',
    title: 'Иностранный язык',
    icon: <Languages className="w-5 h-5" />,
    color: 'text-cyan-400',
    gradient: 'from-cyan-500 to-blue-500',
    description: 'Английский язык',
    sections: [
      {
        id: 'eng8-s1',
        title: 'Грамматика',
        description: 'Сложные времена',
        order: 1,
        topics: [
          {
            id: 'eng8-s1-t1',
            title: 'Present Perfect',
            description: 'Настоящее совершённое',
            theory: `<h3>Present Perfect</h3>
            <p>have/has + V3 (третья форма глагола)</p>
            <h4>Употребление:</h4>
            <ul>
              <li>Действие завершилось, результат важен сейчас</li>
              <li>I have lost my keys (потерял, теперь нет ключей)</li>
            </ul>
            <h4>Слова-маркеры:</h4>
            <p>just, already, yet, ever, never, recently</p>`,
            examples: ['I have finished my homework', 'She has visited Paris'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 30,
            lessons: [
              {
                id: 'eng8-s1-t1-l1',
                title: 'Present Perfect',
                content: `<div class="lesson">
                  <h2>⏰ Present Perfect</h2>
                  <p>have/has + V3</p>
                  <h3>Примеры:</h3>
                  <p>I have visited Paris. (Я посетил Париж)</p>
                  <p>She has finished her work. (Она закончила работу)</p>
                  <div class="tip">💡 Результат важен в настоящем!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'eng8-q1',
        question: 'Выберите правильную форму: She ___ finished her homework.',
        options: ['have', 'has', 'is', 'are'],
        correctAnswer: 1,
        explanation: 'She has finished — для she/he/it используем has.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'eng8-q2',
        question: 'Past Perfect: When I came, she ___ already left.',
        options: ['has', 'had', 'have', 'was'],
        correctAnswer: 1,
        explanation: 'had left — Past Perfect (действие произошло раньше другого действия в прошлом).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'eng8-q3',
        question: 'Future Perfect: By 2025, I ___ my education.',
        options: ['will finish', 'will have finished', 'am finishing', 'finish'],
        correctAnswer: 1,
        explanation: 'will have finished — Future Perfect (к определённому моменту в будущем).',
        difficulty: 'hard',
        points: 20
      },
      {
        id: 'eng8-q4',
        question: 'Conditionals: If I were you, I ___ accept the offer.',
        options: ['will', 'would', 'can', 'shall'],
        correctAnswer: 1,
        explanation: 'would — Second Conditional (нереальное условие в настоящем).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'eng8-q5',
        question: 'Passive Voice: The house ___ in 1990.',
        options: ['built', 'was built', 'has built', 'builds'],
        correctAnswer: 1,
        explanation: 'was built — пассивный залог в прошедшем времени.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'eng8-q6',
        question: 'Reported Speech: "I am tired" → He said he ___ tired.',
        options: ['is', 'was', 'will be', 'has been'],
        correctAnswer: 1,
        explanation: 'was — согласование времён (am → was в косвенной речи).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'eng8-q7',
        question: 'Gerund or Infinitive: I enjoy ___ music.',
        options: ['listen', 'to listen', 'listening', 'listens'],
        correctAnswer: 2,
        explanation: 'enjoy + gerund (listening).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'eng8-q8',
        question: 'Modal verbs: You ___ wear a uniform at school.',
        options: ['mustn\'t', 'don\'t have to', 'must', 'shouldn\'t'],
        correctAnswer: 2,
        explanation: 'must — обязанность.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'eng8-q9',
        question: 'Relative clauses: The man ___ is talking to Mary is my uncle.',
        options: ['who', 'which', 'whose', 'whom'],
        correctAnswer: 0,
        explanation: 'who — для людей.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'eng8-q10',
        question: 'Articles: ___ Sun rises in the east.',
        options: ['A', 'An', 'The', '—'],
        correctAnswer: 2,
        explanation: 'The Sun — уникальный объект.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'eng8-q11',
        question: 'Phrasal verbs: She gave ___ smoking last year.',
        options: ['up', 'off', 'out', 'away'],
        correctAnswer: 0,
        explanation: 'give up — бросить (привычку).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'eng8-q12',
        question: 'Wishes: I wish I ___ speak French.',
        options: ['can', 'could', 'will be able', 'am able to'],
        correctAnswer: 1,
        explanation: 'could — wish + Past Simple для нереального желания.',
        difficulty: 'hard',
        points: 20
      },
      {
        id: 'eng8-q13',
        question: 'Used to / Be used to: I ___ getting up early.',
        options: ['used to', 'am used to', 'use to', 'was used to'],
        correctAnswer: 1,
        explanation: 'be used to + gerund — привыкнуть к чему-то.',
        difficulty: 'hard',
        points: 20
      }
    ]
  },

  // ==================== ХИМИЯ ====================
  {
    id: 'chemistry8',
    title: 'Химия',
    icon: <FlaskConical className="w-5 h-5" />,
    color: 'text-lime-400',
    gradient: 'from-lime-500 to-green-500',
    description: 'Введение в химию',
    sections: [
      {
        id: 'chem8-s1',
        title: 'Основы химии',
        description: 'Атомы и молекулы',
        order: 1,
        topics: [
          {
            id: 'chem8-s1-t1',
            title: 'Атомно-молекулярное учение',
            description: 'Строение вещества',
            theory: `<h3>Атомы и молекулы</h3>
            <p>Вещества состоят из молекул, молекулы — из атомов.</p>
            <h4>Атом:</h4>
            <p>Наименьшая химически неделимая частица</p>
            <h4>Молекула:</h4>
            <p>Наименьшая частица вещества, сохраняющая его свойства</p>
            <h4>Химический элемент:</h4>
            <p>Вид атомов с определённым зарядом ядра</p>`,
            examples: ['Чем атом отличается от молекулы?', 'Что такое химический элемент?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'chem8-s1-t1-l1',
                title: 'Атомы и молекулы',
                content: `<div class="lesson">
                  <h2>🔬 Атомы и молекулы</h2>
                  <h3>Атом:</h3>
                  <p>Наименьшая частица химического элемента</p>
                  <h3>Молекула:</h3>
                  <p>Наименьшая частица вещества</p>
                  <p>Пример: H₂O — молекула воды (2 атома H, 1 атом O)</p>
                  <div class="tip">💡 Атомы соединяются в молекулы!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              }
            ]
          }
        ]
      },
      {
        id: 'chem8-s2',
        title: 'Периодическая система',
        description: 'Таблица Менделеева',
        order: 2,
        topics: [
          {
            id: 'chem8-s2-t1',
            title: 'Структура таблицы',
            description: 'Периоды и группы',
            theory: `<h3>Периодическая таблица</h3>
            <p>Д.И. Менделеев открыл периодический закон (1869).</p>
            <h4>Структура:</h4>
            <ul>
              <li><b>Периоды</b> (7) — горизонтальные ряды</li>
              <li><b>Группы</b> (18) — вертикальные столбцы</li>
            </ul>
            <h4>Закон:</h4>
            <p>Свойства элементов периодически зависят от заряда ядра атома.</p>
            <h4>В группе:</h4>
            <p>Сверху вниз металлические свойства усиливаются.</p>
            <h4>В периоде:</h4>
            <p>Слева направо неметаллические свойства усиливаются.</p>`,
            examples: ['Определи положение элемента', 'Сравни свойства элементов'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'chem8-s2-t1-l1',
                title: 'Периоды и группы',
                content: `<div class="lesson">
                  <h2>📊 Периодическая система</h2>
                  <h3>Периоды (7):</h3>
                  <p>Горизонтальные ряды. В периоде слева направо:</p>
                  <ul>
                    <li>Металлы → Неметаллы</li>
                    <li>Радиус атома уменьшается</li>
                  </ul>
                  <h3>Группы (18):</h3>
                  <p>Вертикальные столбцы. В группе сверху вниз:</p>
                  <ul>
                    <li>Металлические свойства растут</li>
                    <li>Радиус атома увеличивается</li>
                  </ul>
                  <div class="tip">💡 Номер группы = число электронов на внешнем уровне!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'chem8-s2-t1-q1',
                question: 'Сколько периодов в таблице Менделеева?',
                options: ['5', '7', '8', '18'],
                correctAnswer: 1,
                explanation: 'В таблице Менделеева 7 периодов!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'chem8-s2-t1-q2',
                question: 'Как изменяются металлические свойства в группе сверху вниз?',
                options: ['Уменьшаются', 'Усиливаются', 'Не меняются', 'Исчезают'],
                correctAnswer: 1,
                explanation: 'В группе сверху вниз металлические свойства усиливаются!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'chem8-s2-t1-q3',
                question: 'Кто открыл периодический закон?',
                options: ['Ньютон', 'Менделеев', 'Ломоносов', 'Эйнштейн'],
                correctAnswer: 1,
                explanation: 'Д.И. Менделеев открыл периодический закон в 1869 году!',
                difficulty: 'easy',
                points: 10
              }
            ]
          }
        ]
      },
      {
        id: 'chem8-s3',
        title: 'Химические реакции',
        description: 'Типы реакций',
        order: 3,
        topics: [
          {
            id: 'chem8-s3-t1',
            title: 'Типы химических реакций',
            description: 'Классификация реакций',
            theory: `<h3>Типы реакций</h3>
            <h4>По числу веществ:</h4>
            <ul>
              <li><b>Соединения</b>: A + B = AB</li>
              <li><b>Разложения</b>: AB = A + B</li>
              <li><b>Замещения</b>: A + BC = AC + B</li>
              <li><b>Обмена</b>: AB + CD = AD + CB</li>
            </ul>
            <h4>Примеры:</h4>
            <p>2H₂ + O₂ = 2H₂O (соединение)</p>
            <p>2H₂O = 2H₂ + O₂ (разложение)</p>
            <p>Zn + 2HCl = ZnCl₂ + H₂ (замещение)</p>`,
            examples: ['Определи тип реакции', 'Составь уравнение реакции'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'chem8-s3-t1-l1',
                title: 'Типы реакций',
                content: `<div class="lesson">
                  <h2>⚗️ Типы реакций</h2>
                  <h3>Соединение (из двух — одно):</h3>
                  <p>A + B → AB</p>
                  <h3>Разложение (из одного — два):</h3>
                  <p>AB → A + B</p>
                  <h3>Замещение:</h3>
                  <p>A + BC → AC + B</p>
                  <h3>Обмена:</h3>
                  <p>AB + CD → AD + CB</p>
                  <div class="tip">💡 Реакции обмена идут до конца, если есть осадок, газ или вода!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'chem8-s3-t1-q1',
                question: 'Реакция 2H₂ + O₂ = 2H₂O — это:',
                options: ['Разложения', 'Соединения', 'Замещения', 'Обмена'],
                correctAnswer: 1,
                explanation: 'Два вещества соединяются в одно — реакция соединения!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'chem8-s3-t1-q2',
                question: 'Реакция Zn + 2HCl = ZnCl₂ + H₂ — это:',
                options: ['Разложения', 'Соединения', 'Замещения', 'Обмена'],
                correctAnswer: 2,
                explanation: 'Цинк замещает водород — реакция замещения!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'chem8-s3-t1-q3',
                question: 'Реакция обмена идёт до конца, если образуется:',
                options: ['Только газ', 'Осадок, газ или вода', 'Только вода', 'Любое вещество'],
                correctAnswer: 1,
                explanation: 'Реакция обмена идёт до конца при образовании осадка, газа или воды!',
                difficulty: 'medium',
                points: 15
              }
            ]
          }
        ]
      },
      {
        id: 'chem8-s4',
        title: 'Кислоты и основания',
        description: 'Важнейшие классы соединений',
        order: 4,
        topics: [
          {
            id: 'chem8-s4-t1',
            title: 'Кислоты',
            description: 'Свойства кислот',
            theory: `<h3>Кислоты</h3>
            <p>Кислоты — вещества, состоящие из ионов H⁺ и кислотного остатка.</p>
            <h4>Примеры:</h4>
            <ul>
              <li>HCl — соляная кислота</li>
              <li>H₂SO₄ — серная кислота</li>
              <li>HNO₃ — азотная кислота</li>
            </ul>
            <h4>Свойства:</h4>
            <ul>
              <li>Кислый вкус</li>
              <li>Изменяют окраску индикаторов</li>
              <li>Реагируют с металлами, основаниями, оксидами</li>
            </ul>
            <h4>Индикаторы:</h4>
            <p>Лакмус — красный, фенолфталеин — бесцветный</p>`,
            examples: ['Напиши реакцию кислоты с металлом', 'Как действует индикатор?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'chem8-s4-t1-l1',
                title: 'Свойства кислот',
                content: `<div class="lesson">
                  <h2>🧪 Кислоты</h2>
                  <h3>Общая формула:</h3>
                  <p>HₙA, где A — кислотный остаток</p>
                  <h3>Химические свойства:</h3>
                  <ul>
                    <li>C металлами: Zn + 2HCl = ZnCl₂ + H₂↑</li>
                    <li>С основаниями: HCl + NaOH = NaCl + H₂O</li>
                    <li>С оксидами: 2HCl + CuO = CuCl₂ + H₂O</li>
                  </ul>
                  <div class="tip">💡 Лакмус в кислоте — красный!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'chem8-s4-t1-q1',
                question: 'Какой цвет у лакмуса в кислоте?',
                options: ['Синий', 'Красный', 'Зелёный', 'Жёлтый'],
                correctAnswer: 1,
                explanation: 'Лакмус в кислой среде становится красным!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'chem8-s4-t1-q2',
                question: 'Формула серной кислоты:',
                options: ['HCl', 'H₂SO₄', 'HNO₃', 'H₃PO₄'],
                correctAnswer: 1,
                explanation: 'H₂SO₄ — серная кислота!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'chem8-s4-t1-q3',
                question: 'Продукт реакции кислоты с металлом:',
                options: ['Только соль', 'Соль и водород', 'Соль и вода', 'Только водород'],
                correctAnswer: 1,
                explanation: 'Кислота + металл → соль + водород!',
                difficulty: 'medium',
                points: 15
              }
            ]
          },
          {
            id: 'chem8-s4-t2',
            title: 'Основания',
            description: 'Свойства оснований',
            theory: `<h3>Основания</h3>
            <p>Основания — вещества, состоящие из ионов металла и OH⁻ групп.</p>
            <h4>Примеры:</h4>
            <ul>
              <li>NaOH — гидроксид натрия</li>
              <li>Ca(OH)₂ — гидроксид кальция</li>
              <li>Fe(OH)₃ — гидроксид железа(III)</li>
            </ul>
            <h4>Свойства:</h4>
            <ul>
              <li>Мыло на ощупь (щёлочи)</li>
              <li>Изменяют окраску индикаторов</li>
              <li>Реагируют с кислотами</li>
            </ul>
            <h4>Индикаторы:</h4>
            <p>Лакмус — синий, фенолфталеин — малиновый</p>`,
            examples: ['Напиши реакцию основания с кислотой', 'Чем щёлочь отличается от нерастворимого основания?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'chem8-s4-t2-l1',
                title: 'Свойства оснований',
                content: `<div class="lesson">
                  <h2>🧪 Основания</h2>
                  <h3>Общая формула:</h3>
                  <p>Me(OH)ₙ</p>
                  <h3>Щёлочи (растворимые):</h3>
                  <p>NaOH, KOH — растворяются в воде</p>
                  <h3>Нерастворимые:</h3>
                  <p>Cu(OH)₂, Fe(OH)₃ — не растворяются</p>
                  <h3>Реакция нейтрализации:</h3>
                  <p>NaOH + HCl = NaCl + H₂O</p>
                  <div class="tip">💡 Лакмус в щёлочи — синий!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'chem8-s4-t2-q1',
                question: 'Какой цвет у лакмуса в щёлочи?',
                options: ['Красный', 'Синий', 'Зелёный', 'Жёлтый'],
                correctAnswer: 1,
                explanation: 'Лакмус в щелочной среде становится синим!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'chem8-s4-t2-q2',
                question: 'Реакция нейтрализации — это:',
                options: ['Кислота + металл', 'Кислота + основание', 'Основание + соль', 'Металл + вода'],
                correctAnswer: 1,
                explanation: 'Нейтрализация: кислота + основание = соль + вода!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'chem8-s4-t2-q3',
                question: 'Формула гидроксида натрия:',
                options: ['NaOH', 'Na₂O', 'NaCl', 'Na₂SO₄'],
                correctAnswer: 0,
                explanation: 'NaOH — гидроксид натрия, щёлочь!',
                difficulty: 'easy',
                points: 10
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'chem8-q1',
        question: 'Из чего состоят молекулы?',
        options: ['Из атомов', 'Из молекул', 'Из электронов', 'Из протонов'],
        correctAnswer: 0,
        explanation: 'Молекулы состоят из атомов, соединённых химическими связями.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'chem8-q2',
        question: 'Что такое химический элемент?',
        options: ['Молекула', 'Вид атомов с определённым зарядом ядра', 'Смесь веществ', 'Вещество'],
        correctAnswer: 1,
        explanation: 'Химический элемент — вид атомов с одинаковым зарядом ядра.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'chem8-q3',
        question: 'Какой элемент обозначается символом O?',
        options: ['Золото', 'Кислород', 'Углерод', 'Водород'],
        correctAnswer: 1,
        explanation: 'O — кислород (Oxygenium).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'chem8-q4',
        question: 'Сколько элементов в таблице Менделеева?',
        options: ['92', '108', '118', '150'],
        correctAnswer: 2,
        explanation: 'В современной таблице Менделеева 118 химических элементов.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'chem8-q5',
        question: 'Что такое валентность?',
        options: ['Масса атома', 'Способность атомов соединяться', 'Заряд ядра', 'Число электронов'],
        correctAnswer: 1,
        explanation: 'Валентность — способность атомов соединяться с определённым числом других атомов.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'chem8-q6',
        question: 'Формула воды:',
        options: ['HO', 'H₂O', 'H₂O₂', 'HO₂'],
        correctAnswer: 1,
        explanation: 'H₂O — вода (2 атома водорода, 1 атом кислорода).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'chem8-q7',
        question: 'Что такое оксид?',
        options: ['Соль', 'Соединение элемента с кислородом', 'Кислота', 'Основание'],
        correctAnswer: 1,
        explanation: 'Оксид — соединение элемента с кислородом.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'chem8-q8',
        question: 'Какой газ мы вдыхаем?',
        options: ['Азот', 'Кислород', 'Углекислый газ', 'Водород'],
        correctAnswer: 1,
        explanation: 'Мы вдыхаем кислород (O₂) из воздуха.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'chem8-q9',
        question: 'Что такое кислота?',
        options: ['Оксид', 'Вещество с H⁺ и кислотным остатком', 'Соль', 'Металл'],
        correctAnswer: 1,
        explanation: 'Кислота состоит из ионов H⁺ и кислотного остатка.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'chem8-q10',
        question: 'Что такое pH?',
        options: ['Температура', 'Показатель кислотности', 'Давление', 'Плотность'],
        correctAnswer: 1,
        explanation: 'pH — показатель кислотности среды.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'chem8-q11',
        question: 'Какой металл является жидкостью?',
        options: ['Железо', 'Ртуть', 'Медь', 'Золото'],
        correctAnswer: 1,
        explanation: 'Ртуть (Hg) — единственный жидкий металл при комнатной температуре.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'chem8-q12',
        question: 'Что показывает атомная масса?',
        options: ['Заряд ядра', 'Относительную массу атома', 'Число электронов', 'Валентность'],
        correctAnswer: 1,
        explanation: 'Атомная масса — относительная масса атома (в а.е.м.).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'chem8-q13',
        question: 'Какой элемент является основой органических веществ?',
        options: ['Кислород', 'Углерод', 'Азот', 'Водород'],
        correctAnswer: 1,
        explanation: 'Углерод (C) — основа всех органических веществ.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ОБЩЕСТВОЗНАНИЕ ====================
  {
    id: 'social8',
    title: 'Обществознание',
    icon: <Users className="w-5 h-5" />,
    color: 'text-teal-400',
    gradient: 'from-teal-500 to-cyan-500',
    description: 'Человек и общество',
    sections: [
      {
        id: 'soc8-s1',
        title: 'Человек',
        description: 'Личность и общество',
        order: 1,
        topics: [
          {
            id: 'soc8-s1-t1',
            title: 'Что такое человек',
            description: 'Биосоциальная природа',
            theory: `<h3>Человек как существо</h3>
            <h4>Биологическая природа:</h4>
            <p>Питание, дыхание, размножение</p>
            <h4>Социальная природа:</h4>
            <p>Труд, речь, мышление, общение</p>
            <h4>Личность:</h4>
            <p>Человек с устойчивыми качествами характера, убеждениями, взглядами</p>`,
            examples: ['Что такое личность?', 'В чём отличие человека от животного?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'soc8-s1-t1-l1',
                title: 'Человек — биосоциальное существо',
                content: `<div class="lesson">
                  <h2>👤 Человек</h2>
                  <h3>Биологическое:</h3>
                  <p>Тело, инстинкты, потребности</p>
                  <h3>Социальное:</h3>
                  <p>Сознание, речь, труд, общество</p>
                  <div class="tip">💡 Человек — часть природы и общества!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'soc8-q1',
        question: 'Что делает человека социальным существом?',
        options: ['Только инстинкты', 'Труд, речь, мышление', 'Только питание', 'Ничего'],
        correctAnswer: 1,
        explanation: 'Труд, речь, мышление и общение — социальные качества человека.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'soc8-q2',
        question: 'Что такое общество в широком смысле?',
        options: ['Группа друзей', 'Обособившаяся от природы часть мира', 'Только семья', 'Государство'],
        correctAnswer: 1,
        explanation: 'Общество — обособившаяся от природы часть мира, связанная совместной деятельностью.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'soc8-q3',
        question: 'Что такое социализация?',
        options: ['Обучение в школе', 'Процесс усвоения норм общества', 'Работа', 'Отдых'],
        correctAnswer: 1,
        explanation: 'Социализация — процесс усвоения норм и ценностей общества.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'soc8-q4',
        question: 'Что такое социальная роль?',
        options: ['Только профессия', 'Модель поведения в обществе', 'Игра', 'Хобби'],
        correctAnswer: 1,
        explanation: 'Социальная роль — модель поведения, ожидаемая от человека с определённым статусом.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'soc8-q5',
        question: 'Что такое социальный статус?',
        options: ['Должность', 'Положение человека в обществе', 'Доход', 'Возраст'],
        correctAnswer: 1,
        explanation: 'Социальный статус — положение человека в обществе с определёнными правами и обязанностями.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'soc8-q6',
        question: 'Что такое культура?',
        options: ['Только искусство', 'Достижения человеческого общества', 'Только религия', 'Только наука'],
        correctAnswer: 1,
        explanation: 'Культура — все достижения человеческого общества в материальной и духовной сфере.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'soc8-q7',
        question: 'Что такое мораль?',
        options: ['Закон', 'Нравственные нормы', 'Традиции', 'Обычаи'],
        correctAnswer: 1,
        explanation: 'Мораль — нравственные нормы, регулирующие поведение людей.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'soc8-q8',
        question: 'Что такое право?',
        options: ['Мораль', 'Система обязательных норм', 'Традиции', 'Обычаи'],
        correctAnswer: 1,
        explanation: 'Право — система обязательных норм, охраняемых государством.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'soc8-q9',
        question: 'Что такое государство?',
        options: ['Страна', 'Организация политической власти', 'Народ', 'Правительство'],
        correctAnswer: 1,
        explanation: 'Государство — организация политической власти на определённой территории.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'soc8-q10',
        question: 'Что такое конституция?',
        options: ['Обычный закон', 'Основной закон государства', 'Правительство', 'Парламент'],
        correctAnswer: 1,
        explanation: 'Конституция — основной закон государства, имеющий высшую юридическую силу.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'soc8-q11',
        question: 'Что такое экономика?',
        options: ['Только торговля', 'Хозяйственная деятельность', 'Только банки', 'Только заводы'],
        correctAnswer: 1,
        explanation: 'Экономика — хозяйственная деятельность общества по производству и распределению благ.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'soc8-q12',
        question: 'Что такое семья?',
        options: ['Группа людей', 'Малая социальная группа, основанная на браке или родстве', 'Друзья', 'Коллеги'],
        correctAnswer: 1,
        explanation: 'Семья — малая социальная группа, основанная на браке, родстве или усыновлении.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'soc8-q13',
        question: 'Что такое гражданство?',
        options: ['Место рождения', 'Правовая связь с государством', 'Национальность', 'Прописка'],
        correctAnswer: 1,
        explanation: 'Гражданство — правовая связь человека с государством, взаимные права и обязанности.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ФИЗКУЛЬТУРА ====================
  {
    id: 'pe8',
    title: 'Физическая культура',
    icon: <Dumbbell className="w-5 h-5" />,
    color: 'text-orange-400',
    gradient: 'from-orange-500 to-red-500',
    description: 'Физическое развитие',
    sections: [
      {
        id: 'pe8-s1',
        title: 'Физические качества',
        description: 'Развитие способностей',
        order: 1,
        topics: [
          {
            id: 'pe8-s1-t1',
            title: 'Основные физические качества',
            description: 'Сила, быстрота, выносливость',
            theory: `<h3>Физические качества</h3>
            <h4>Сила:</h4>
            <p>Способность преодолевать сопротивление</p>
            <h4>Быстрота:</h4>
            <p>Способность выполнять движения за минимальное время</p>
            <h4>Выносливость:</h4>
            <p>Способность длительно выполнять работу</p>
            <h4>Гибкость:</h4>
            <p>Подвижность в суставах</p>
            <h4>Ловкость:</h4>
            <p>Способность быстро осваивать движения</p>`,
            examples: ['Как развивать выносливость?', 'Какие качества важны для бегуна?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'pe8-s1-t1-l1',
                title: 'Физические качества',
                content: `<div class="lesson">
                  <h2>🏃 Физические качества</h2>
                  <h3>Пять основных:</h3>
                  <ul>
                    <li>Сила — работа с весом</li>
                    <li>Быстрота — спринт</li>
                    <li>Выносливость — бег на длинные дистанции</li>
                    <li>Гибкость — растяжка</li>
                    <li>Ловкость — игровые виды</li>
                  </ul>
                  <div class="tip">💡 Регулярные тренировки развивают все качества!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'pe8-q1',
        question: 'Какое физическое качество развивает бег на длинные дистанции?',
        options: ['Силу', 'Гибкость', 'Выносливость', 'Ловкость'],
        correctAnswer: 2,
        explanation: 'Бег на длинные дистанции развивает выносливость.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe8-q2',
        question: 'Что такое кросс?',
        options: ['Бег по стадиону', 'Бег по пересечённой местности', 'Прыжки', 'Метание'],
        correctAnswer: 1,
        explanation: 'Кросс — бег по пересечённой местности.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe8-q3',
        question: 'Какой вид спорта развивает силу?',
        options: ['Плавание', 'Тяжёлая атлетика', 'Шахматы', 'Бадминтон'],
        correctAnswer: 1,
        explanation: 'Тяжёлая атлетика развивает силу мышц.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe8-q4',
        question: 'Что такое закаливание?',
        options: ['Загар', 'Повышение устойчивости организма к холоду', 'Плавание', 'Бег'],
        correctAnswer: 1,
        explanation: 'Закаливание — повышение устойчивости организма к неблагоприятным условиям.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'pe8-q5',
        question: 'Сколько игроков в волейбольной команде?',
        options: ['4', '5', '6', '7'],
        correctAnswer: 2,
        explanation: 'В волейбольной команде на площадке 6 игроков.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe8-q6',
        question: 'Какой удар в баскетболе приносит 3 очка?',
        options: ['Штрафной', 'Из-за трёхочковой линии', 'С игры', 'Сверху'],
        correctAnswer: 1,
        explanation: 'Бросок из-за трёхочковой линии приносит 3 очка.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'pe8-q7',
        question: 'Что такое пульс?',
        options: ['Давление', 'Частота сердечных сокращений', 'Температура', 'Дыхание'],
        correctAnswer: 1,
        explanation: 'Пульс — частота сердечных сокращений (ударов в минуту).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe8-q8',
        question: 'Какой снаряд используется в гимнастике?',
        options: ['Мяч', 'Брусья', 'Шайба', 'Ракетка'],
        correctAnswer: 1,
        explanation: 'Брусья — гимнастический снаряд.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe8-q9',
        question: 'Что такое спринт?',
        options: ['Длинный бег', 'Бег на короткие дистанции', 'Прыжки', 'Метание'],
        correctAnswer: 1,
        explanation: 'Спринт — бег на короткие дистанции (60 м, 100 м, 200 м).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'pe8-q10',
        question: 'Какая дистанция является марафонской?',
        options: ['10 км', '21 км', '42 км 195 м', '100 км'],
        correctAnswer: 2,
        explanation: 'Марафонская дистанция — 42 км 195 м.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'pe8-q11',
        question: 'Что такое гигиена?',
        options: ['Спорт', 'Меры по сохранению здоровья', 'Лекарства', 'Врачи'],
        correctAnswer: 1,
        explanation: 'Гигиена — меры по сохранению и укреплению здоровья.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe8-q12',
        question: 'Какой вид плавания самый быстрый?',
        options: ['Брасс', 'Кроль на спине', 'Кроль на груди', 'Баттерфляй'],
        correctAnswer: 2,
        explanation: 'Кроль на груди — самый быстрый вид плавания.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'pe8-q13',
        question: 'Что такое разминка?',
        options: ['Основная тренировка', 'Подготовка организма к нагрузке', 'Отдых', 'Заминка'],
        correctAnswer: 1,
        explanation: 'Разминка — подготовка организма к основной физической нагрузке.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== РУССКИЙ ЯЗЫК ====================
  {
    id: 'russian8',
    title: 'Русский язык',
    icon: <Pen className="w-5 h-5" />,
    color: 'text-rose-400',
    gradient: 'from-rose-500 to-pink-500',
    description: 'Синтаксис и пунктуация',
    sections: [
      {
        id: 'rus8-s1',
        title: 'Синтаксис простого предложения',
        description: 'Строение предложений',
        order: 1,
        topics: [
          {
            id: 'rus8-s1-t1',
            title: 'Члены предложения',
            description: 'Главные и второстепенные члены',
            theory: `<h3>Члены предложения</h3>
            <h4>Главные члены:</h4>
            <ul>
              <li><b>Подлежащее</b> — о ком/чём говорится (кто? что?)</li>
              <li><b>Сказуемое</b> — что делает подлежащее (что делает?)</li>
            </ul>
            <h4>Второстепенные члены:</h4>
            <ul>
              <li><b>Дополнение</b> — косвенные падежи (кого? чего? кому? и т.д.)</li>
              <li><b>Определение</b> — какой? чей?</li>
              <li><b>Обстоятельство</b> — где? когда? как? зачем?</li>
            </ul>
            <h4>Пример:</h4>
            <p>Красивые цветы распустились в саду весной.</p>
            <p>цветы — подлежащее, распустились — сказуемое</p>`,
            examples: ['Выдели подлежащее и сказуемое', 'Найди второстепенные члены'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'rus8-s1-t1-l1',
                title: 'Главные члены предложения',
                content: `<div class="lesson">
                  <h2>📝 Грамматическая основа</h2>
                  <h3>Подлежащее:</h3>
                  <p>О ком или о чём говорится в предложении.</p>
                  <p>Вопросы: кто? что?</p>
                  <h3>Сказуемое:</h3>
                  <p>Что делает подлежащее.</p>
                  <p>Вопросы: что делает? что сделал?</p>
                  <h3>Пример:</h3>
                  <p>Ученик пишет сочинение.</p>
                  <p>ученик — подлежащее, пишет — сказуемое</p>
                  <div class="tip">💡 Подлежащее + сказуемое = грамматическая основа!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              },
              {
                id: 'rus8-s1-t1-l2',
                title: 'Второстепенные члены',
                content: `<div class="lesson">
                  <h2>📝 Второстепенные члены</h2>
                  <h3>Дополнение:</h3>
                  <p>Обозначает предмет. Вопросы косвенных падежей.</p>
                  <h3>Определение:</h3>
                  <p>Обозначает признак. Вопросы: какой? чей?</p>
                  <h3>Обстоятельство:</h3>
                  <p>Обозначает место, время, способ. Вопросы: где? когда? как?</p>
                  <div class="tip">💡 Второстепенные члены распространяют предложение!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'rus8-s1-t1-q1',
                question: 'Какой член предложения отвечает на вопрос "что делает?"',
                options: ['Подлежащее', 'Сказуемое', 'Дополнение', 'Определение'],
                correctAnswer: 1,
                explanation: 'Сказуемое отвечает на вопросы: что делает? что сделал?',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'rus8-s1-t1-q2',
                question: 'Какой член предложения обозначает признак предмета?',
                options: ['Дополнение', 'Обстоятельство', 'Определение', 'Сказуемое'],
                correctAnswer: 2,
                explanation: 'Определение обозначает признак и отвечает на вопросы: какой? чей?',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'rus8-s1-t1-q3',
                question: 'Грамматическая основа — это:',
                options: ['Все члены предложения', 'Подлежащее и сказуемое', 'Только подлежащее', 'Второстепенные члены'],
                correctAnswer: 1,
                explanation: 'Грамматическая основа = подлежащее + сказуемое!',
                difficulty: 'easy',
                points: 10
              }
            ]
          }
        ]
      },
      {
        id: 'rus8-s2',
        title: 'Пунктуация',
        description: 'Знаки препинания',
        order: 2,
        topics: [
          {
            id: 'rus8-s2-t1',
            title: 'Тире между подлежащим и сказуемым',
            description: 'Правила постановки тире',
            theory: `<h3>Тире в простом предложении</h3>
            <h4>Когда ставится тире:</h4>
            <ul>
              <li>Сущ. — Сущ.: Москва — столица России.</li>
              <li>Числ. — Числ.: Дважды два — четыре.</li>
              <li>Неопр. ф. глагола: Моя мечта — путешествовать.</li>
            </ul>
            <h4>Когда НЕ ставится тире:</h4>
            <ul>
              <li>Подлежащее — местоимение: Я ученик.</li>
              <li>Сказуемое — глагол: Дети играют.</li>
              <li>Есть сравнит. союзы: Этот сад как лес.</li>
            </ul>`,
            examples: ['Поставь тире, если нужно', 'Объясни постановку тире'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'rus8-s2-t1-l1',
                title: 'Тире между подлежащим и сказуемым',
                content: `<div class="lesson">
                  <h2>✏️ Тире в предложении</h2>
                  <h3>Ставим тире:</h3>
                  <p>Существительное — существительное</p>
                  <p>Пример: Лес — богатство природы.</p>
                  <h3>Не ставим тире:</h3>
                  <p>Если подлежащее — личное местоимение</p>
                  <p>Пример: Он хороший врач.</p>
                  <div class="tip">💡 Тире заменяет "это", "значит"!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'rus8-s2-t1-q1',
                question: 'Нужна ли тире: Москва ... столица России.',
                options: ['Да', 'Нет', 'Запятая', 'Двоеточие'],
                correctAnswer: 0,
                explanation: 'Сущ. — Сущ., ставим тире!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'rus8-s2-t1-q2',
                question: 'Нужна ли тире: Я ... студент.',
                options: ['Да', 'Нет', 'Запятая', 'Точка'],
                correctAnswer: 1,
                explanation: 'Подлежащее — личное местоимение, тире не ставится!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'rus8-s2-t1-q3',
                question: 'Тире ставится, если оба главных члена выражены:',
                options: ['Глаголами', 'Существительными в И.п.', 'Местоимениями', 'Прилагательными'],
                correctAnswer: 1,
                explanation: 'Сущ. в И.п. — Сущ. в И.п. = тире!',
                difficulty: 'medium',
                points: 15
              }
            ]
          },
          {
            id: 'rus8-s2-t2',
            title: 'Обособленные определения',
            description: 'Причастные обороты',
            theory: `<h3>Обособление определений</h3>
            <h4>Когда обособляются:</h4>
            <ul>
              <li>После определяемого слова: Книга, прочитанная мною, интересная.</li>
              <li>Относятся к личному местоимению: Уставший, он сел отдохнуть.</li>
              <li>Имеют добавочное значение: Этот человек, упрямый и гордый, не сдался.</li>
            </ul>
            <h4>Не обособляются:</h4>
            <p>Стоят перед определяемым словом: Прочитанная мною книга интересная.</p>`,
            examples: ['Обособли определение, если нужно', 'Расставь знаки препинания'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 35,
            lessons: [
              {
                id: 'rus8-s2-t2-l1',
                title: 'Причастный оборот',
                content: `<div class="lesson">
                  <h2>📝 Причастный оборот</h2>
                  <h3>Обособляется запятыми:</h3>
                  <p>Если стоит ПОСЛЕ определяемого слова.</p>
                  <p>Пример: Листья, падающие с деревьев, кружились в воздухе.</p>
                  <h3>Не обособляется:</h3>
                  <p>Если стоит ПЕРЕД определяемым словом.</p>
                  <p>Пример: Падающие с деревьев листья кружились.</p>
                  <div class="tip">💡 После слова — запятые, до слова — нет!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'rus8-s2-t2-q1',
                question: 'Нужны ли запятые: Листья падающие с деревьев кружились.',
                options: ['Да, две запятые', 'Нет', 'Одна запятая', 'Тире'],
                correctAnswer: 1,
                explanation: 'Причастный оборот стоит ПЕРЕД определяемым словом — не обособляется!',
                difficulty: 'hard',
                points: 20
              },
              {
                id: 'rus8-s2-t2-q2',
                question: 'Нужны ли запятые: Листья, падающие с деревьев, кружились.',
                options: ['Да, две запятые', 'Нет', 'Одна запятая', 'Тире'],
                correctAnswer: 0,
                explanation: 'Причастный оборот стоит ПОСЛЕ определяемого слова — обособляется!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'rus8-s2-t2-q3',
                question: 'Определяемое слово — это:',
                options: ['Причастие', 'Слово, от которого зависит причастный оборот', 'Глагол', 'Существительное в косвенном падеже'],
                correctAnswer: 1,
                explanation: 'Определяемое слово — то, от которого зависит причастный оборот!',
                difficulty: 'medium',
                points: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'rus8-q1',
        question: 'Грамматическая основа предложения — это:',
        options: ['Все слова', 'Подлежащее и сказуемое', 'Второстепенные члены', 'Знаки препинания'],
        correctAnswer: 1,
        explanation: 'Грамматическая основа = подлежащее + сказуемое.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus8-q2',
        question: 'Какой член предложения отвечает на вопрос "какой?"',
        options: ['Дополнение', 'Сказуемое', 'Определение', 'Обстоятельство'],
        correctAnswer: 2,
        explanation: 'Определение отвечает на вопросы: какой? чей?',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus8-q3',
        question: 'Тире между подлежащим и сказуемым ставится, если:',
        options: ['Подлежащее — местоимение', 'Оба — существительные в И.п.', 'Сказуемое — глагол', 'Есть союз "как"'],
        correctAnswer: 1,
        explanation: 'Сущ. в И.п. — Сущ. в И.п. — ставим тире.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus8-q4',
        question: 'Причастный оборот обособляется, если стоит:',
        options: ['Перед определяемым словом', 'После определяемого слова', 'В начале предложения', 'В конце предложения'],
        correctAnswer: 1,
        explanation: 'Причастный оборот обособляется после определяемого слова.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus8-q5',
        question: 'Обстоятельство отвечает на вопрос:',
        options: ['Какой?', 'Кого?', 'Где? когда? как?', 'Кто?'],
        correctAnswer: 2,
        explanation: 'Обстоятельство отвечает на вопросы: где? когда? как? зачем?',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus8-q6',
        question: 'Дополнение отвечает на вопросы:',
        options: ['Кто? что?', 'Какой? чей?', 'Косвенных падежей', 'Что делает?'],
        correctAnswer: 2,
        explanation: 'Дополнение отвечает на вопросы косвенных падежей.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus8-q7',
        question: 'Нужна ли тире: Он ... мой друг.',
        options: ['Да', 'Нет', 'Запятая', 'Двоеточие'],
        correctAnswer: 1,
        explanation: 'Подлежащее — личное местоимение, тире не ставится.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus8-q8',
        question: 'Предложение с причастным оборотом после слова:',
        options: ['Не требует запятых', 'Требует одну запятую', 'Требует две запятые', 'Требет тире'],
        correctAnswer: 2,
        explanation: 'Причастный оборот после слова обособляется двумя запятыми.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus8-q9',
        question: 'Сказуемое выражается:',
        options: ['Только глаголом', 'Глаголом, существительным, прилагательным', 'Только существительным', 'Только прилагательным'],
        correctAnswer: 1,
        explanation: 'Сказуемое может быть выражено глаголом, существительным, прилагательным.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus8-q10',
        question: 'Определяемое слово при причастном обороте — это:',
        options: ['Глагол', 'Существительное, к которому относится оборот', 'Причастие', 'Наречие'],
        correctAnswer: 1,
        explanation: 'Определяемое слово — существительное, от которого зависит причастный оборот.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ГЕОГРАФИЯ ====================
  {
    id: 'geography8',
    title: 'География',
    icon: <Globe className="w-5 h-5" />,
    color: 'text-sky-400',
    gradient: 'from-sky-500 to-blue-500',
    description: 'Климат и природные зоны России',
    sections: [
      {
        id: 'geo8-s1',
        title: 'Климат',
        description: 'Климатообразующие факторы',
        order: 1,
        topics: [
          {
            id: 'geo8-s1-t1',
            title: 'Климатообразующие факторы',
            description: 'От чего зависит климат',
            theory: `<h3>Климатообразующие факторы</h3>
            <h4>Главные факторы:</h4>
            <ul>
              <li><b>Географическая широта</b> — определяет угол падения солнечных лучей</li>
              <li><b>Циркуляция атмосферы</b> — ветры, циклоны, антициклоны</li>
              <li><b>Подстилающая поверхность</b> — рельеф, океаны, растительность</li>
            </ul>
            <h4>Типы климата России:</h4>
            <ul>
              <li>Арктический (Крайний Север)</li>
              <li>Субарктический (тундра)</li>
              <li>Умеренный (большая часть России)</li>
            </ul>`,
            examples: ['Почему климат России разнообразен?', 'Как влияет океан на климат?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'geo8-s1-t1-l1',
                title: 'Факторы климата',
                content: `<div class="lesson">
                  <h2>🌍 Климатообразующие факторы</h2>
                  <h3>Широта:</h3>
                  <p>Чем севернее — тем холоднее (угол солнца меньше).</p>
                  <h3>Циркуляция атмосферы:</h3>
                  <p>Западные ветры приносят влагу с Атлантики.</p>
                  <h3>Подстилающая поверхность:</h3>
                  <p>Горы задерживают влагу, океаны смягчают климат.</p>
                  <div class="tip">💡 Климат = широта + циркуляция + рельеф!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'geo8-s1-t1-q1',
                question: 'Какой фактор определяет количество солнечного тепла?',
                options: ['Рельеф', 'Географическая широта', 'Океаны', 'Ветры'],
                correctAnswer: 1,
                explanation: 'Географическая широта определяет угол падения солнечных лучей!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'geo8-s1-t1-q2',
                question: 'Какой климат преобладает в России?',
                options: ['Тропический', 'Умеренный', 'Экваториальный', 'Арктический'],
                correctAnswer: 1,
                explanation: 'Большая часть России находится в умеренном климатическом поясе.',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'geo8-s1-t1-q3',
                question: 'Что такое циклон?',
                options: ['Область низкого давления', 'Область высокого давления', 'Гора', 'Река'],
                correctAnswer: 0,
                explanation: 'Циклон — область низкого давления с пасмурной погодой.',
                difficulty: 'medium',
                points: 15
              }
            ]
          }
        ]
      },
      {
        id: 'geo8-s2',
        title: 'Природные зоны России',
        description: 'Разнообразие природы',
        order: 2,
        topics: [
          {
            id: 'geo8-s2-t1',
            title: 'Природные зоны',
            description: 'Тундра, леса, степи',
            theory: `<h3>Природные зоны России</h3>
            <h4>С севера на юг:</h4>
            <ul>
              <li><b>Арктические пустыни</b> — лёд, мхи, лишайники</li>
              <li><b>Тундра</b> — карликовые деревья, мхи, ягель</li>
              <li><b>Лесотундра</b> — переходная зона</li>
              <li><b>Тайга</b> — хвойные леса (ель, сосна, лиственница)</li>
              <li><b>Смешанные леса</b> — хвойные + лиственные</li>
              <li><b>Лесостепь</b> — переходная зона</li>
              <li><b>Степь</b> — травянистые растения</li>
            </ul>
            <h4>Закономерность:</h4>
            <p>Широтная зональность — смена зон с севера на юг.</p>`,
            examples: ['Назови природные зоны', 'Какие животные живут в тайге?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'geo8-s2-t1-l1',
                title: 'Природные зоны',
                content: `<div class="lesson">
                  <h2>🌲 Природные зоны</h2>
                  <h3>Тайга:</h3>
                  <p>Хвойные леса. Ель, сосна, лиственница.</p>
                  <p>Животные: лось, медведь, белка, соболь.</p>
                  <h3>Степь:</h3>
                  <p>Травянистые равнины. Ковыль, типчак.</p>
                  <p>Животные: суслик, сурок, дрофа.</p>
                  <div class="tip">💡 Зоны сменяются с севера на юг!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'geo8-s2-t1-q1',
                question: 'Какая природная zone расположена севернее?',
                options: ['Степь', 'Тайга', 'Тундра', 'Смешанный лес'],
                correctAnswer: 2,
                explanation: 'Тундра расположена севернее тайги и степи!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'geo8-s2-t1-q2',
                question: 'Главные деревья тайги:',
                options: ['Дуб, клён', 'Сосна, ель, лиственница', 'Берёза, осина', 'Пальмы'],
                correctAnswer: 1,
                explanation: 'Тайга — хвойный лес (сосна, ель, лиственница).',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'geo8-s2-t1-q3',
                question: 'Смена природных зон с севера на юг называется:',
                options: ['Высотная поясность', 'Широтная зональность', 'Меридиональность', 'Климатическая зона'],
                correctAnswer: 1,
                explanation: 'Широтная зональность — смена зон с севера на юг.',
                difficulty: 'medium',
                points: 15
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'geo8-q1',
        question: 'Какой фактор климата главный?',
        options: ['Рельеф', 'Географическая широта', 'Океаны', 'Ветры'],
        correctAnswer: 1,
        explanation: 'Географическая широта определяет количество солнечного тепла.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo8-q2',
        question: 'Циклон — это область:',
        options: ['Высокого давления', 'Низкого давления', 'Высоких температур', 'Низких температур'],
        correctAnswer: 1,
        explanation: 'Циклон — область низкого давления.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geo8-q3',
        question: 'Тайга — это:',
        options: ['Травянистая равнина', 'Хвойный лес', 'Тундра', 'Пустыня'],
        correctAnswer: 1,
        explanation: 'Тайга — хвойный лес с елью, сосной, лиственницей.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo8-q4',
        question: 'Какая природная зона расположена южнее тайги?',
        options: ['Тундра', 'Смешанные и широколиственные леса', 'Арктическая пустыня', 'Ледники'],
        correctAnswer: 1,
        explanation: 'К югу от тайги расположены смешанные и широколиственные леса.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geo8-q5',
        question: 'Степь характеризуется:',
        options: ['Лесами', 'Травянистой растительностью', 'Ледниками', 'Мхами'],
        correctAnswer: 1,
        explanation: 'Степь — травянистая равнина без деревьев.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo8-q6',
        question: 'Антициклон приносит:',
        options: ['Дождливую погоду', 'Ясную сухую погоду', 'Снег', 'Ветер'],
        correctAnswer: 1,
        explanation: 'Антициклон — область высокого давления, ясная погода.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geo8-q7',
        question: 'Климат России преимущественно:',
        options: ['Тропический', 'Умеренный', 'Экваториальный', 'Субтропический'],
        correctAnswer: 1,
        explanation: 'Большая часть России — умеренный пояс.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo8-q8',
        question: 'Тундра расположена:',
        options: ['На юге России', 'На севере России', 'В центре России', 'На Дальнем Востоке'],
        correctAnswer: 1,
        explanation: 'Тундра расположена на севере России.',
        difficulty: 'easy',
        points: 10
      }
    ]
  }
]
