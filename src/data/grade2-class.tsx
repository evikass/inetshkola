// Полные данные для 2 класса
// Иерархия: Предмет → Раздел → Тема → Урок

import { Calculator, Book, Globe, Palette, BookOpen, Music, Dumbbell, Shield, Ruler, Languages } from 'lucide-react'
import type { Subject } from './types'

// ==================== 2 КЛАСС ====================

export const grade2Subjects: Subject[] = [
  // ==================== МАТЕМАТИКА ====================
  {
    id: 'math2',
    title: 'Математика',
    icon: <Calculator className="w-5 h-5" />,
    color: 'text-blue-400',
    gradient: 'from-blue-500 to-indigo-500',
    description: 'Счёт до 100, сложение и вычитание в столбик',
    sections: [
      {
        id: 'math2-s1',
        title: 'Числа до 100',
        description: 'Десятки и единицы',
        order: 1,
        topics: [
          {
            id: 'math2-s1-t1',
            title: 'Десятки',
            description: 'Числа 10, 20, 30... 100',
            theory: `<h3>Десятки</h3>
            <p>После числа 10 идут десятки! Десяток — это 10 единиц.</p>
            <h4>Десятки:</h4>
            <ul>
              <li>10 — десять (1 десяток)</li>
              <li>20 — двадцать (2 десятка)</li>
              <li>30 — тридцать (3 десятка)</li>
              <li>...</li>
              <li>100 — сто (10 десятков)</li>
            </ul>`,
            examples: ['Сколько десятков в 50?', 'Какое число: 7 десятков?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            quiz: [
              {
                id: 'math2-s1-t1-q1',
                question: 'Сколько десятков в числе 50?',
                options: ['5', '50', '0', '10'],
                correctAnswer: 0,
                explanation: 'В числе 50 — 5 десятков! 50 = 5 × 10!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'math2-s1-t1-q2',
                question: 'Какое число состоит из 7 десятков?',
                options: ['17', '70', '7', '77'],
                correctAnswer: 1,
                explanation: '7 десятков = 70! Это круглое число!',
                difficulty: 'easy',
                points: 10
              }
            ],
            lessons: [
              {
                id: 'math2-s1-t1-l1',
                title: 'Что такое десяток?',
                content: `<div class="kid-lesson">
                  <h2>🔟 Десяток</h2>
                  <p>Десяток — это 10 единиц! Как все пальчики на двух руках! 🙌</p>
                  <div class="activity">Посчитай десятками до 100!</div>
                  <div class="emoji-practice">10, 20, 30, 40, 50, 60, 70, 80, 90, 100</div>
                  <div class="tip">💡 100 = 10 десятков!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'math2-s1-t1-l2',
                title: 'Круглые числа',
                content: `<div class="kid-lesson">
                  <h2>⭕ Круглые числа</h2>
                  <p>Круглые числа заканчиваются на 0: 10, 20, 30, 40...</p>
                  <div class="activity">Назови круглые числа до 100!</div>
                  <div class="emoji-practice">10, 20, 30, 40, 50, 60, 70, 80, 90, 100</div>
                  <div class="tip">💡 Круглые числа имеют 0 в конце!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'math2-s1-t1-l3',
                title: 'Десятки и единицы',
                content: `<div class="kid-lesson">
                  <h2>📊 Десятки и единицы</h2>
                  <p>Любое число состоит из десятков и единиц!</p>
                  <div class="activity">Сколько десятков и единиц в числе 47?</div>
                  <div class="emoji-practice">47 = 4 десятка + 7 единиц = 40 + 7</div>
                  <div class="tip">💡 Первая цифра — десятки, вторая — единицы!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ]
          },
          {
            id: 'math2-s1-t2',
            title: 'Числа от 11 до 99',
            description: 'Двузначные числа',
            theory: `<h3>Двузначные числа</h3>
            <p>Двузначные числа состоят из двух цифр: десятков и единиц.</p>
            <h4>Примеры:</h4>
            <ul>
              <li>11 — одиннадцать (1 десяток + 1 единица)</li>
              <li>25 — двадцать пять (2 десятка + 5 единиц)</li>
              <li>99 — девяносто девять (9 десятков + 9 единиц)</li>
            </ul>`,
            examples: ['Какое число: 3 десятка 5 единиц?', 'Разложи 78 на десятки и единицы'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            quiz: [
              {
                id: 'math2-s1-t2-q1',
                question: 'Какое число: 3 десятка и 5 единиц?',
                options: ['35', '53', '305', '8'],
                correctAnswer: 0,
                explanation: '3 десятка = 30, 5 единиц = 5. 30 + 5 = 35!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'math2-s1-t2-q2',
                question: 'Сколько десятков в числе 78?',
                options: ['7', '8', '78', '70'],
                correctAnswer: 0,
                explanation: 'В числе 78: 7 десятков и 8 единиц!',
                difficulty: 'easy',
                points: 10
              }
            ],
            lessons: [
              {
                id: 'math2-s1-t2-l1',
                title: 'Числа 11-20',
                content: `<div class="kid-lesson">
                  <h2>🔢 Числа 11-20</h2>
                  <p>Числа после 10: 11, 12, 13, 14, 15, 16, 17, 18, 19, 20</p>
                  <div class="activity">Посчитай от 11 до 20!</div>
                  <div class="emoji-practice">11 = 10 + 1, 12 = 10 + 2, 15 = 10 + 5</div>
                  <div class="tip">💡 11-19 = десять + число!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'math2-s1-t2-l2',
                title: 'Двузначные числа',
                content: `<div class="kid-lesson">
                  <h2>📊 Двузначные числа</h2>
                  <p>Двузначные числа — от 10 до 99. Они состоят из десятков и единиц!</p>
                  <div class="activity">Назови любое двузначное число!</div>
                  <div class="emoji-practice">47 = 40 + 7, 83 = 80 + 3</div>
                  <div class="tip">💡 Две цифры = двузначное число!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'math2-s1-t2-l3',
                title: 'Сравнение чисел',
                content: `<div class="kid-lesson">
                  <h2>⚖️ Сравниваем числа</h2>
                  <p>Чтобы сравнить числа, сравнивай десятки, потом единицы!</p>
                  <div class="activity">Что больше: 47 или 53?</div>
                  <div class="emoji-practice">47 < 53 (4 десятка < 5 десятков)</div>
                  <div class="tip">💡 Сначала сравнивай десятки!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ]
          }
        ]
      },
      {
        id: 'math2-s2',
        title: 'Сложение и вычитание в столбик',
        description: 'Письменные вычисления',
        order: 2,
        topics: [
          {
            id: 'math2-s2-t1',
            title: 'Сложение в столбик',
            description: 'Учимся складывать двузначные числа',
            theory: `<h3>Сложение в столбик</h3>
            <p>Когда числа большие, удобно складывать в столбик.</p>
            <pre>
   45
 + 23
 ----
   68
            </pre>
            <h4>Правило:</h4>
            <ol>
              <li>Записываем числа друг под другом</li>
              <li>Складываем единицы: 5 + 3 = 8</li>
              <li>Складываем десятки: 4 + 2 = 6</li>
            </ol>`,
            examples: ['Реши: 36 + 42', 'Посчитай: 58 + 17'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            quiz: [
              {
                id: 'math2-s2-t1-q1',
                question: 'Чему равно 45 + 23?',
                options: ['68', '65', '78', '58'],
                correctAnswer: 0,
                explanation: '45 + 23 = 68! Единицы: 5+3=8, Десятки: 4+2=6!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'math2-s2-t1-q2',
                question: 'Чему равно 58 + 17?',
                options: ['65', '75', '85', '71'],
                correctAnswer: 1,
                explanation: '58 + 17 = 75! 8+7=15 (5 пишем, 1 запоминаем), 5+1+1=7!',
                difficulty: 'medium',
                points: 15
              }
            ],
            lessons: [
              {
                id: 'math2-s2-t1-l1',
                title: 'Как записывать в столбик',
                content: `<div class="kid-lesson">
                  <h2>📝 Запись в столбик</h2>
                  <p>Числа записываем друг под другом: единицы под единицами, десятки под десятками!</p>
                  <div class="activity">Запиши 45 + 23 в столбик!</div>
                  <div class="emoji-practice">
                    45
                    +23
                    ----
                  </div>
                  <div class="tip">💡 Единицы под единицами, десятки под десятками!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'math2-s2-t1-l2',
                title: 'Складываем без перехода',
                content: `<div class="kid-lesson">
                  <h2>➕ Сложение без перехода</h2>
                  <p>Сначала единицы, потом десятки!</p>
                  <div class="activity">Реши: 45 + 23</div>
                  <div class="emoji-practice">
                    45    5+3=8
                    +23   4+2=6
                    ----
                    68
                  </div>
                  <div class="tip">💡 Начинай с единиц!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'math2-s2-t1-l3',
                title: 'Складываем с переходом',
                content: `<div class="kid-lesson">
                  <h2>🔄 Сложение с переходом</h2>
                  <p>Если сумма единиц больше 10, запоминаем десяток!</p>
                  <div class="activity">Реши: 58 + 17</div>
                  <div class="emoji-practice">
                    58    8+7=15 (пишем 5, 1 запоминаем)
                    +17   5+1+1=7
                    ----
                    75
                  </div>
                  <div class="tip">💡 Если получилось 10+, запомни десяток!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ]
          },
          {
            id: 'math2-s2-t2',
            title: 'Вычитание в столбик',
            description: 'Учимся вычитать двузначные числа',
            theory: `<h3>Вычитание в столбик</h3>
            <p>Вычитаем так же в столбик: единицы из единиц, десятки из десятков.</p>
            <pre>
   68
 - 23
 ----
   45
            </pre>
            <h4>Правило:</h4>
            <ol>
              <li>Записываем числа друг под другом</li>
              <li>Вычитаем единицы: 8 - 3 = 5</li>
              <li>Вычитаем десятки: 6 - 2 = 4</li>
            </ol>`,
            examples: ['Реши: 78 - 35', 'Посчитай: 52 - 37'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            quiz: [
              {
                id: 'math2-s2-t2-q1',
                question: 'Чему равно 68 - 23?',
                options: ['45', '55', '35', '41'],
                correctAnswer: 0,
                explanation: '68 - 23 = 45! Единицы: 8-3=5, Десятки: 6-2=4!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'math2-s2-t2-q2',
                question: 'Чему равно 52 - 37?',
                options: ['25', '15', '35', '14'],
                correctAnswer: 1,
                explanation: '52 - 37 = 15! Занимаем десяток: 12-7=5, 4-3=1!',
                difficulty: 'medium',
                points: 15
              }
            ],
            lessons: [
              {
                id: 'math2-s2-t2-l1',
                title: 'Вычитаем без перехода',
                content: `<div class="kid-lesson">
                  <h2>➖ Вычитание без перехода</h2>
                  <p>Вычитаем единицы из единиц, десятки из десятков!</p>
                  <div class="activity">Реши: 68 - 23</div>
                  <div class="emoji-practice">
                    68    8-3=5
                    -23   6-2=4
                    ----
                    45
                  </div>
                  <div class="tip">💡 Начинай с единиц!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'math2-s2-t2-l2',
                title: 'Занимаем десяток',
                content: `<div class="kid-lesson">
                  <h2>🔄 Занимаем десяток</h2>
                  <p>Если не хватает единиц, занимаем у десятков!</p>
                  <div class="activity">Реши: 52 - 37</div>
                  <div class="emoji-practice">
                    52    2-7 нельзя, занимаем: 12-7=5
                    -37   5-1-3=1 (один заняли!)
                    ----
                    15
                  </div>
                  <div class="tip">💡 Ставь точку над десятком, который заняли!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              }
            ]
          }
        ]
      },
      {
        id: 'math2-s3',
        title: 'Умножение',
        description: 'Первые шаги в умножении',
        order: 3,
        topics: [
          {
            id: 'math2-s3-t1',
            title: 'Что такое умножение',
            description: 'Знакомство с умножением',
            theory: `<h3>Что такое умножение?</h3>
            <p>Умножение — это сложение одинаковых чисел много раз.</p>
            <p>3 × 4 = 3 + 3 + 3 + 3 = 12</p>
            <h4>Знак умножения:</h4>
            <p>× (крестик) или · (точка)</p>
            <h4>Таблица умножения на 2:</h4>
            <ul>
              <li>2 × 1 = 2</li>
              <li>2 × 2 = 4</li>
              <li>2 × 3 = 6</li>
              <li>2 × 4 = 8</li>
              <li>2 × 5 = 10</li>
            </ul>`,
            examples: ['Реши: 2 × 6', 'Сколько будет 3 × 3?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'math2-s3-t1-l1',
                title: 'Умножение — это сложение',
                content: `<div class="kid-lesson">
                  <h2>× Умножение</h2>
                  <p>Умножение — это когда складываем одинаковые числа много раз!</p>
                  <div class="activity">Сколько будет 3 + 3 + 3 + 3?</div>
                  <div class="emoji-practice">3 × 4 = 3 + 3 + 3 + 3 = 12</div>
                  <div class="tip">💡 3 × 4 = "три четыре раза"!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'math2-s3-t1-l2',
                title: 'Таблица на 2',
                content: `<div class="kid-lesson">
                  <h2>2️⃣ Таблица умножения на 2</h2>
                  <p>Умножение на 2 — это удвоение!</p>
                  <div class="activity">Выучи таблицу на 2!</div>
                  <div class="emoji-practice">2×1=2, 2×2=4, 2×3=6, 2×4=8, 2×5=10</div>
                  <div class="tip">💡 Умножение на 2 — это + два раза!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'math2-s3-t1-l3',
                title: 'Таблица на 3',
                content: `<div class="kid-lesson">
                  <h2>3️⃣ Таблица умножения на 3</h2>
                  <p>Умножение на 3 — это три раза!</p>
                  <div class="activity">Выучи таблицу на 3!</div>
                  <div class="emoji-practice">3×1=3, 3×2=6, 3×3=9, 3×4=12, 3×5=15</div>
                  <div class="tip">💡 3×3=9, 3×4=12, 3×5=15!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ],
            quiz: [
              {
                id: 'math2-s3-t1-q1',
                question: 'Чему равно 2 × 3?',
                options: ['5', '6', '8', '9'],
                correctAnswer: 1,
                explanation: '2 × 3 = 6. Это как 2 + 2 + 2 = 6 (три двойки).',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'math2-s3-t1-q2',
                question: 'Чему равно 3 × 4?',
                options: ['7', '9', '12', '15'],
                correctAnswer: 2,
                explanation: '3 × 4 = 12. Это как 3 + 3 + 3 + 3 = 12 (четыре тройки).',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'math2-s3-t1-q3',
                question: 'Сколько будет 2 × 7?',
                options: ['9', '12', '14', '16'],
                correctAnswer: 2,
                explanation: '2 × 7 = 14. Это семь двоек: 2+2+2+2+2+2+2 = 14.',
                difficulty: 'medium',
                points: 15
              }
            ]
          },
          {
            id: 'math2-s3-t2',
            title: 'Таблица умножения на 4 и 5',
            description: 'Продолжаем учить таблицу',
            theory: `<h3>Умножение на 4 и 5</h3>
            <h4>Таблица на 4:</h4>
            <ul>
              <li>4 × 1 = 4</li>
              <li>4 × 2 = 8</li>
              <li>4 × 3 = 12</li>
              <li>4 × 4 = 16</li>
              <li>4 × 5 = 20</li>
            </ul>
            <h4>Таблица на 5:</h4>
            <ul>
              <li>5 × 1 = 5</li>
              <li>5 × 2 = 10</li>
              <li>5 × 3 = 15</li>
              <li>5 × 4 = 20</li>
              <li>5 × 5 = 25</li>
            </ul>`,
            examples: ['Реши: 4 × 3', 'Сколько будет 5 × 4?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'math2-s3-t2-l1',
                title: 'Таблица на 4',
                content: `<div class="kid-lesson">
                  <h2>4️⃣ Таблица умножения на 4</h2>
                  <p>Умножение на 4 — это четыре раза!</p>
                  <div class="activity">Выучи таблицу на 4!</div>
                  <div class="emoji-practice">4×1=4, 4×2=8, 4×3=12, 4×4=16, 4×5=20</div>
                  <div class="tip">💡 4 × 5 = 20 — все ответы заканчиваются на 0 или чётное число!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'math2-s3-t2-l2',
                title: 'Таблица на 5',
                content: `<div class="kid-lesson">
                  <h2>5️⃣ Таблица умножения на 5</h2>
                  <p>Умножение на 5 — это пять раз! Все ответы заканчиваются на 0 или 5!</p>
                  <div class="activity">Выучи таблицу на 5!</div>
                  <div class="emoji-practice">5×1=5, 5×2=10, 5×3=15, 5×4=20, 5×5=25</div>
                  <div class="tip">💡 5 × чётное = ...0, 5 × нечётное = ...5!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'math2-s3-t2-q1',
                question: 'Чему равно 4 × 3?',
                options: ['7', '10', '12', '15'],
                correctAnswer: 2,
                explanation: '4 × 3 = 12. Это как 4 + 4 + 4 = 12 (три четвёрки).',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'math2-s3-t2-q2',
                question: 'Чему равно 5 × 5?',
                options: ['20', '25', '30', '10'],
                correctAnswer: 1,
                explanation: '5 × 5 = 25. Это пять пятёрок!',
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
        id: 'math2-q1',
        question: 'Чему равно 25 + 17?',
        options: ['42', '41', '43', '40'],
        correctAnswer: 0,
        explanation: '25 + 17 = 42. 5+7=12 (2 пишем, 1 запоминаем), 2+1+1=4. Ответ: 42',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math2-q2',
        question: 'Чему равно 2 × 5?',
        options: ['7', '8', '9', '10'],
        correctAnswer: 3,
        explanation: '2 × 5 = 10. Это как 2 + 2 + 2 + 2 + 2 = 10 (пять двоек).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math2-q3',
        question: 'Сколько десятков в числе 73?',
        options: ['3', '7', '70', '73'],
        correctAnswer: 1,
        explanation: 'В числе 73: 7 десятков и 3 единицы. 73 = 70 + 3',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math2-q4',
        question: 'Чему равно 54 - 28?',
        options: ['26', '36', '24', '32'],
        correctAnswer: 0,
        explanation: '54 - 28 = 26. Занимаем десяток: 14-8=6, 4-2=2. Ответ: 26',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math2-q5',
        question: 'Чему равно 3 × 5?',
        options: ['8', '12', '15', '18'],
        correctAnswer: 2,
        explanation: '3 × 5 = 15. Это пять троек: 3+3+3+3+3 = 15.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math2-q6',
        question: 'Какое число больше: 89 или 98?',
        options: ['89', '98', 'Они равны', 'Не знаю'],
        correctAnswer: 1,
        explanation: '98 больше, чем 89. Сравниваем десятки: 8 < 9.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math2-q7',
        question: 'Чему равно 100 - 37?',
        options: ['53', '63', '73', '67'],
        correctAnswer: 1,
        explanation: '100 - 37 = 63. Занимаем из сотни: 10-7=3, 9-3=6. Ответ: 63',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math2-q8',
        question: 'Какое число состоит из 4 десятков и 8 единиц?',
        options: ['84', '48', '12', '408'],
        correctAnswer: 1,
        explanation: '4 десятка = 40, 8 единиц = 8. 40 + 8 = 48.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math2-q9',
        question: 'Чему равно 67 + 25?',
        options: ['82', '92', '91', '85'],
        correctAnswer: 1,
        explanation: '67 + 25 = 92! 7+5=12 (2 пишем, 1 запоминаем), 6+2+1=9!',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math2-q10',
        question: 'Чему равно 4 × 4?',
        options: ['8', '12', '16', '20'],
        correctAnswer: 2,
        explanation: '4 × 4 = 16! Это четыре четвёрки: 4+4+4+4 = 16.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math2-q11',
        question: 'Какое число идёт после 89?',
        options: ['88', '90', '91', '100'],
        correctAnswer: 1,
        explanation: 'После 89 идёт 90! К 89 прибавляем 1.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math2-q12',
        question: 'Чему равно 83 - 47?',
        options: ['36', '46', '35', '44'],
        correctAnswer: 0,
        explanation: '83 - 47 = 36! Занимаем десяток: 13-7=6, 7-4=3!',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math2-q13',
        question: 'Сколько будет 2 × 8?',
        options: ['10', '14', '16', '18'],
        correctAnswer: 2,
        explanation: '2 × 8 = 16! Это восемь двоек: 2+2+2+2+2+2+2+2 = 16.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== РУССКИЙ ЯЗЫК ====================
  {
    id: 'russian2',
    title: 'Русский язык',
    icon: <Book className="w-5 h-5" />,
    color: 'text-red-400',
    gradient: 'from-red-500 to-orange-500',
    description: 'Правописание жи-ши, ча-ща, чу-щу',
    sections: [
      {
        id: 'rus2-s1',
        title: 'Орфография',
        description: 'Правила правописания',
        order: 1,
        topics: [
          {
            id: 'rus2-s1-t1',
            title: 'Правописание ЖИ-ШИ',
            description: 'Пишем И после Ж и Ш',
            theory: `<h3>Правило ЖИ-ШИ</h3>
            <p>После Ж и Ш пишется буква И!</p>
            <h4>Запомни:</h4>
            <ul>
              <li>жи́знь, ши́на, маши́на</li>
              <li>жи́р, ши́ть, лежа́ть</li>
              <li>лы́жи, моржи́, ежи́</li>
            </ul>
            <h4>Как проверить:</h4>
            <p>ЖИ и ШИ — пиши с буквой И, даже если слышится Ы!</p>`,
            examples: ['Вставь букву: маш_на', 'Исправь ошибку: жызнь'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            quiz: [
              {
                id: 'rus2-s1-t1-q1',
                question: 'Какую букву нужно написать в слове "маш_на"?',
                options: ['Ы', 'И', 'Е', 'Я'],
                correctAnswer: 1,
                explanation: 'После Ш пишется И! Правило: ЖИ-ШИ пиши с буквой И!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'rus2-s1-t1-q2',
                question: 'В каком слове допущена ошибка?',
                options: ['Машина', 'Жизнь', 'Жыр', 'Лыжи'],
                correctAnswer: 2,
                explanation: 'Правильно писать "жир"! После Ж пишется И!',
                difficulty: 'easy',
                points: 10
              }
            ],
            lessons: [
              {
                id: 'rus2-s1-t1-l1',
                title: 'Правило ЖИ',
                content: `<div class="kid-lesson">
                  <h2>🔤 ЖИ пиши с И!</h2>
                  <p>После Ж всегда пишется И, даже если слышится Ы!</p>
                  <div class="activity">Вставь букву: ж_знь, ж_р, е ж_!</div>
                  <div class="emoji-practice">жИзнь, жИр, ежИ</div>
                  <div class="tip">💡 ЖИ — только с И!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'rus2-s1-t1-l2',
                title: 'Правило ШИ',
                content: `<div class="kid-lesson">
                  <h2>🔤 ШИ пиши с И!</h2>
                  <p>После Ш всегда пишется И!</p>
                  <div class="activity">Вставь букву: ш_на, маш_на, ш_ть!</div>
                  <div class="emoji-practice">шИна, машИна, шИть</div>
                  <div class="tip">💡 ШИ — только с И!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'rus2-s1-t1-l3',
                title: 'Слова с ЖИ-ШИ',
                content: `<div class="kid-lesson">
                  <h2>📝 Запомни слова!</h2>
                  <p>Слова с ЖИ: жизнь, живот, жираф, лыжи, ежик</p>
                  <p>Слова с ШИ: шина, машина, шить, шире, мыши</p>
                  <div class="activity">Придумай 3 слова с ЖИ-ШИ!</div>
                  <div class="emoji-practice">🦒 жираф, 🚗 машина, ⛷️ лыжи</div>
                  <div class="tip">💡 ЖИ-ШИ — только И!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ]
          },
          {
            id: 'rus2-s1-t2',
            title: 'Правописание ЧА-ЩА',
            description: 'Пишем А после Ч и Щ',
            theory: `<h3>Правило ЧА-ЩА</h3>
            <p>После Ч и Щ пишется буква А!</p>
            <h4>Запомни:</h4>
            <ul>
              <li>ча́шка, площа́дка, да́ча</li>
              <li>ща́вель, ча́й, ча́ща</li>
            </ul>
            <h4>Стишок:</h4>
            <p>ЧА и ЩА — пиши с буквой А!</p>`,
            examples: ['Вставь букву: ч_шка', 'Исправь: щявель'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            quiz: [
              {
                id: 'rus2-s1-t2-q1',
                question: 'Какую букву нужно написать в слове "ч_шка"?',
                options: ['И', 'Я', 'У', 'А'],
                correctAnswer: 3,
                explanation: 'После Ч пишется А! Правило: ЧА-ЩА пиши с буквой А!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'rus2-s1-t2-q2',
                question: 'Как правильно написать слово?',
                options: ['Щявель', 'Щавель', 'Щивель', 'Щевель'],
                correctAnswer: 1,
                explanation: 'Правильно "щавель"! После Щ пишется А!',
                difficulty: 'easy',
                points: 10
              }
            ],
            lessons: [
              {
                id: 'rus2-s1-t2-l1',
                title: 'Правило ЧА',
                content: `<div class="kid-lesson">
                  <h2>🔤 ЧА пиши с А!</h2>
                  <p>После Ч пишется А!</p>
                  <div class="activity">Вставь букву: ч_шка, ч_й, д_ч_!</div>
                  <div class="emoji-practice">чАшка, чАй, дАчА</div>
                  <div class="tip">💡 ЧА — только с А!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'rus2-s1-t2-l2',
                title: 'Правило ЩА',
                content: `<div class="kid-lesson">
                  <h2>🔤 ЩА пиши с А!</h2>
                  <p>После Щ пишется А!</p>
                  <div class="activity">Вставь букву: щ_вель, площ_дк_!</div>
                  <div class="emoji-practice">щАвель, площАдкА</div>
                  <div class="tip">💡 ЩА — только с А!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'rus2-s1-t2-l3',
                title: 'Слова с ЧА-ЩА',
                content: `<div class="kid-lesson">
                  <h2>📝 Запомни слова!</h2>
                  <p>Слова с ЧА: чай, чашка, дача, задача, куча</p>
                  <p>Слова с ЩА: щавель, площадь, роща, пища</p>
                  <div class="activity">Придумай 3 слова с ЧА-ЩА!</div>
                  <div class="emoji-practice">☕ чай, 🏠 дача, 🌳 роща</div>
                  <div class="tip">💡 ЧА-ЩА — только А!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ]
          },
          {
            id: 'rus2-s1-t3',
            title: 'Правописание ЧУ-ЩУ',
            description: 'Пишем У после Ч и Щ',
            theory: `<h3>Правило ЧУ-ЩУ</h3>
            <p>После Ч и Щ пишется буква У!</p>
            <h4>Запомни:</h4>
            <ul>
              <li>чу́до, щу́ка, чу́лок</li>
              <li>чу́вство, щу́плый</li>
            </ul>`,
            examples: ['Вставь букву: ч_до', 'Какая буква: щ_ка?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            quiz: [
              {
                id: 'rus2-s1-t3-q1',
                question: 'Какую букву нужно написать в слове "ч_до"?',
                options: ['А', 'О', 'У', 'Ю'],
                correctAnswer: 2,
                explanation: 'После Ч пишется У! Правило: ЧУ-ЩУ пиши с буквой У!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'rus2-s1-t3-q2',
                question: 'Как правильно: щ_ка?',
                options: ['Щука', 'Щака', 'Щика', 'Щока'],
                correctAnswer: 0,
                explanation: 'Правильно "щука"! После Щ пишется У!',
                difficulty: 'easy',
                points: 10
              }
            ],
            lessons: [
              {
                id: 'rus2-s1-t3-l1',
                title: 'Правило ЧУ',
                content: `<div class="kid-lesson">
                  <h2>🔤 ЧУ пиши с У!</h2>
                  <p>После Ч пишется У!</p>
                  <div class="activity">Вставь букву: ч_до, ч_лок, ч_вство!</div>
                  <div class="emoji-practice">чУдо, чУлок, чУвство</div>
                  <div class="tip">💡 ЧУ — только с У!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'rus2-s1-t3-l2',
                title: 'Правило ЩУ',
                content: `<div class="kid-lesson">
                  <h2>🔤 ЩУ пиши с У!</h2>
                  <p>После Щ пишется У!</p>
                  <div class="activity">Вставь букву: щ_ка, щ_плый!</div>
                  <div class="emoji-practice">щУка, щУплый</div>
                  <div class="tip">💡 ЩУ — только с У!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'rus2-s1-t3-l3',
                title: 'Все правила вместе',
                content: `<div class="kid-lesson">
                  <h2>📚 Все правила!</h2>
                  <p>ЖИ-ШИ — только И!</p>
                  <p>ЧА-ЩА — только А!</p>
                  <p>ЧУ-ЩУ — только У!</p>
                  <div class="activity">Повтори все три правила!</div>
                  <div class="emoji-practice">ЖИ-ШИ → И, ЧА-ЩА → А, ЧУ-ЩУ → У</div>
                  <div class="tip">💡 Запомни три правила!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ]
          }
        ]
      },
      {
        id: 'rus2-s2',
        title: 'Состав слова',
        description: 'Корень, приставка, суффикс',
        order: 2,
        topics: [
          {
            id: 'rus2-s2-t1',
            title: 'Корень слова',
            description: 'Главная часть слова',
            theory: `<h3>Корень слова</h3>
            <p>Корень — это общая часть родственных слов, в которой заключается их основное значение.</p>
            <h4>Пример:</h4>
            <p>Сад, садик, садовник, посадить — корень САД</p>
            <h4>Как найти корень?</h4>
            <ol>
              <li>Подбери родственные слова</li>
              <li>Найди общую часть</li>
            </ol>`,
            examples: ['Найди корень в словах: дом, домик, домашний', 'Подбери родственные слова к "лес"'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'rus2-s2-t1-l1',
                title: 'Что такое корень?',
                content: `<div class="kid-lesson">
                  <h2>🌱 Корень слова</h2>
                  <p>Корень — это главная часть слова! В ней спрятан смысл!</p>
                  <div class="activity">Какой корень у слов: сад, садик, садовник?</div>
                  <div class="emoji-practice">сад, садИк, садОвник → корень САД</div>
                  <div class="tip">💡 Родственные слова имеют один корень!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'rus2-s2-t1-l2',
                title: 'Родственные слова',
                content: `<div class="kid-lesson">
                  <h2>👨‍👩‍👧‍👦 Родственные слова</h2>
                  <p>Родственные слова — это слова с одним корнем!</p>
                  <div class="activity">Подбери родственные слова к "лес"!</div>
                  <div class="emoji-practice">лес, лесОк, лесНик, леснОй</div>
                  <div class="tip">💡 Родственные слова — как семья!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              }
            ]
          }
        ]
      },
      {
        id: 'rus2-s3',
        title: 'Звуки и буквы',
        description: 'Гласные и согласные',
        order: 3,
        topics: [
          {
            id: 'rus2-s3-t1',
            title: 'Гласные и согласные',
            description: 'Различаем звуки',
            theory: `<h3>Звуки и буквы</h3>
            <p>В русском языке 33 буквы, но 42 звука!</p>
            <h4>Гласные звуки:</h4>
            <p>А, О, У, И, Ы, Э — их можно петь!</p>
            <h4>Согласные звуки:</h4>
            <p>Б, В, Г, Д, Ж, З, К, Л, М, Н, П, Р, С, Т, Ф, Х, Ц, Ч, Ш, Щ — при произношении воздух встречает преграду</p>`,
            examples: ['Назови гласные звуки', 'Какие согласные ты знаешь?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'rus2-s3-t1-l1',
                title: 'Гласные звуки',
                content: `<div class="kid-lesson">
                  <h2>🎵 Гласные звуки</h2>
                  <p>Гласные звуки можно петь! А, О, У, И, Ы, Э</p>
                  <div class="activity">Произнеси звук А, О, У!</div>
                  <div class="emoji-practice">А-а-а, О-о-о, У-у-у</div>
                  <div class="tip">💡 Гласные — значит "голосовые"!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'rus2-s3-t1-l2',
                title: 'Согласные звуки',
                content: `<div class="kid-lesson">
                  <h2>🗣️ Согласные звуки</h2>
                  <p>Согласные — воздух встречает преграду: губы, зубы, язык!</p>
                  <div class="activity">Произнеси: Б, П, М, Л!</div>
                  <div class="emoji-practice">Б-б-б, П-п-п, М-м-м, Л-л-л</div>
                  <div class="tip">💡 Согласные — значит "согласуются" с гласными!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              }
            ],
            quiz: [
              {
                id: 'rus2-s3-t1-q1',
                question: 'Какой звук гласный?',
                options: ['Б', 'М', 'А', 'П'],
                correctAnswer: 2,
                explanation: 'А — гласный звук. Его можно петь!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'rus2-s3-t1-q2',
                question: 'Какой звук согласный?',
                options: ['О', 'У', 'М', 'И'],
                correctAnswer: 2,
                explanation: 'М — согласный звук. При произношении губы мешают воздуху!',
                difficulty: 'easy',
                points: 10
              }
            ]
          }
        ]
      },
      {
        id: 'rus2-s4',
        title: 'Слово и предложение',
        description: 'Строим предложения',
        order: 4,
        topics: [
          {
            id: 'rus2-s4-t1',
            title: 'Предложение',
            description: 'Из слов в предложения',
            theory: `<h3>Предложение</h3>
            <p>Предложение — это группа слов, связанных по смыслу и выражающих законченную мысль.</p>
            <h4>Правила:</h4>
            <ul>
              <li>Предложение начинается с большой буквы</li>
              <li>В конце предложения ставится точка, восклицательный или вопросительный знак</li>
            </ul>
            <h4>Пример:</h4>
            <p>Мама готовит обед.</p>`,
            examples: ['Составь предложение', 'Где конец предложения?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'rus2-s4-t1-l1',
                title: 'Что такое предложение?',
                content: `<div class="kid-lesson">
                  <h2>📝 Предложение</h2>
                  <p>Предложение — это слова, которые говорят о чём-то одном!</p>
                  <div class="activity">Составь предложение из слов: кошка, спит, на, диване!</div>
                  <div class="emoji-practice">Кошка спит на диване.</div>
                  <div class="tip">💡 Предложение начинается с большой буквы и заканчивается точкой!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              }
            ],
            quiz: [
              {
                id: 'rus2-s4-t1-q1',
                question: 'С чего начинается предложение?',
                options: ['С маленькой буквы', 'С большой буквы', 'С точки', 'С пробела'],
                correctAnswer: 1,
                explanation: 'Предложение всегда начинается с большой буквы!',
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
        id: 'rus2-q1',
        question: 'Какая буква пропущена в слове "маш_на"?',
        options: ['Ы', 'И', 'Е', 'А'],
        correctAnswer: 1,
        explanation: 'После Ш пишется И: машина. Правило ЖИ-ШИ!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus2-q2',
        question: 'Какая буква пропущена в слове "ча_ка"?',
        options: ['И', 'Я', 'У', 'А'],
        correctAnswer: 3,
        explanation: 'После Ч пишется А: чашка. Правило ЧА-ЩА!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus2-q3',
        question: 'Какой корень в словах: дом, домик, домашний?',
        options: ['ДОМИ', 'ДОМ', 'ДОМА', 'ДО'],
        correctAnswer: 1,
        explanation: 'Общая часть родственных слов — ДОМ. Это и есть корень!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus2-q4',
        question: 'Какая буква пропущена в слове "щ_ка"?',
        options: ['И', 'А', 'У', 'Ю'],
        correctAnswer: 2,
        explanation: 'После Щ пишется У: щука. Правило ЧУ-ЩУ!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus2-q5',
        question: 'Какой звук гласный?',
        options: ['К', 'М', 'О', 'Р'],
        correctAnswer: 2,
        explanation: 'О — гласный звук. Его можно петь!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus2-q6',
        question: 'С чего начинается предложение?',
        options: ['С точки', 'С маленькой буквы', 'С большой буквы', 'С запятой'],
        correctAnswer: 2,
        explanation: 'Предложение всегда начинается с большой буквы!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus2-q7',
        question: 'В каком слове допущена ошибка?',
        options: ['Чаща', 'Чяща', 'Роща', 'Дача'],
        correctAnswer: 1,
        explanation: 'Правильно писать "чаща"! После Ч пишется А!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus2-q8',
        question: 'Какая буква пропущена в слове "ж_знь"?',
        options: ['Ы', 'И', 'Е', 'Я'],
        correctAnswer: 1,
        explanation: 'После Ж пишется И: жизнь. Правило ЖИ-ШИ!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus2-q9',
        question: 'Как правильно: "лыж_" или "лыжы"?',
        options: ['Лыжы', 'Лыжи', 'Лыже', 'Лызя'],
        correctAnswer: 1,
        explanation: 'Правильно "лыжи"! После Ш пишется И!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus2-q10',
        question: 'Какая буква пропущена в слове "ч_вство"?',
        options: ['А', 'О', 'У', 'Я'],
        correctAnswer: 2,
        explanation: 'После Ч пишется У: чувство. Правило ЧУ-ЩУ!',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus2-q11',
        question: 'В каком слове ошибка?',
        options: ['Машина', 'Шына', 'Лыжи', 'Ежи'],
        correctAnswer: 1,
        explanation: 'Правильно "шина"! После Ш пишется И!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus2-q12',
        question: 'Найди слово с ошибкой:',
        options: ['Чудо', 'Щука', 'Чюдо', 'Чувство'],
        correctAnswer: 2,
        explanation: 'Правильно "чудо"! После Ч пишется У!',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ЛИТЕРАТУРНОЕ ЧТЕНИЕ ====================
  {
    id: 'literature2',
    title: 'Литературное чтение',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'text-amber-400',
    gradient: 'from-amber-500 to-yellow-500',
    description: 'Сказки, рассказы, стихи',
    sections: [
      {
        id: 'lit2-s1',
        title: 'Сказки',
        description: 'Русские народные и авторские',
        order: 1,
        topics: [
          {
            id: 'lit2-s1-t1',
            title: 'Русские народные сказки',
            description: 'Сказки народа',
            theory: `<h3>Русские народные сказки</h3>
            <p>Сказки — это рассказы о чудесах и волшебстве.</p>
            <h4>Известные сказки:</h4>
            <ul>
              <li>"Колобок"</li>
              <li>"Репка"</li>
              <li>"Теремок"</li>
              <li>"Курочка Ряба"</li>
            </ul>`,
            examples: ['Какие сказки ты знаешь?', 'Кто герои сказки "Колобок"?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'lit2-s1-t1-l1',
                title: 'Сказка "Колобок"',
                content: `<div class="kid-lesson">
                  <h2>🍞 Колобок</h2>
                  <p>Жили-были дед да баба...</p>
                  <p>Испекла баба колобок и положила на окошко остудить.</p>
                  <div class="activity">Кого встретил колобок?</div>
                  <div class="emoji-practice">Зайца 🐰, Волка 🐺, Медведя 🐻, Лису 🦊</div>
                  <div class="tip">💡 Сказки учат добру!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'lit2-s1-t1-l2',
                title: 'Сказка "Репка"',
                content: `<div class="kid-lesson">
                  <h2>🥕 Репка</h2>
                  <p>Посадил дед репку...</p>
                  <div class="activity">Кто тянул репку?</div>
                  <div class="emoji-practice">Дед 👴 → Бабка 👵 → Внучка 👧 → Жучка 🐕 → Кошка 🐱 → Мышка 🐭</div>
                  <div class="tip">💡 Вместе легче справиться!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'lit2-s1-t1-q1',
                question: 'Кто съел Колобка в сказке?',
                options: ['Заяц', 'Волк', 'Медведь', 'Лиса'],
                correctAnswer: 3,
                explanation: 'Лиса хитростью съела Колобка!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'lit2-s1-t1-q2',
                question: 'Кто помог вытянуть репку?',
                options: ['Только дед', 'Мышка', 'Никто', 'Бабка'],
                correctAnswer: 1,
                explanation: 'Мышка прибежала последней и помогла вытянуть репку!',
                difficulty: 'easy',
                points: 10
              }
            ]
          },
          {
            id: 'lit2-s1-t2',
            title: 'Авторские сказки',
            description: 'Сказки писателей',
            theory: `<h3>Авторские сказки</h3>
            <p>Авторские сказки написаны писателями.</p>
            <h4>Известные авторы:</h4>
            <ul>
              <li>А.С. Пушкин — "Сказка о рыбаке и рыбке"</li>
              <li>К.И. Чуковский — "Мойдодыр"</li>
              <li>С.Я. Маршак — "Кошкин дом"</li>
            </ul>`,
            examples: ['Кто написал "Мойдодыр"?', 'Какие сказки Пушкина ты знаешь?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 20,
            lessons: [
              {
                id: 'lit2-s1-t2-l1',
                title: 'Корней Чуковский',
                content: `<div class="kid-lesson">
                  <h2>📚 Корней Чуковский</h2>
                  <p>Корней Иванович Чуковский — детский писатель!</p>
                  <p>Его сказки: "Мойдодыр", "Айболит", "Муха-цокотуха"</p>
                  <div class="activity">Прочитай отрывок из "Айболита"!</div>
                  <div class="emoji-practice">Добрый доктор Айболит! Он под деревом сидит...</div>
                  <div class="tip">💡 Сказки Чуковского учат помогать другим!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'lit2-s1-t2-q1',
                question: 'Кто написал "Мойдодыр"?',
                options: ['Пушкин', 'Чуковский', 'Маршак', 'Барто'],
                correctAnswer: 1,
                explanation: 'Корней Чуковский написал "Мойдодыр"!',
                difficulty: 'medium',
                points: 15
              }
            ]
          }
        ]
      },
      {
        id: 'lit2-s2',
        title: 'Рассказы о природе',
        description: 'О животных и растениях',
        order: 2,
        topics: [
          {
            id: 'lit2-s2-t1',
            title: 'Рассказы о животных',
            description: 'Наши меньшие друзья',
            theory: `<h3>Рассказы о животных</h3>
            <p>Писатели пишут интересные рассказы о животных.</p>
            <h4>Известные авторы:</h4>
            <ul>
              <li>В.В. Бианки — "Лесная газета"</li>
              <li>Е.И. Чарушин — рассказы о животных</li>
              <li>М.М. Пришвин — "Ёж", "Лисичкин хлеб"</li>
            </ul>`,
            examples: ['Каких животных описывал Пришвин?', 'Что такое "Лесная газета"?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 20,
            lessons: [
              {
                id: 'lit2-s2-t1-l1',
                title: 'Виталий Бианки',
                content: `<div class="kid-lesson">
                  <h2>🌲 Виталий Бианки</h2>
                  <p>Виталий Валентинович Бианки писал о лесе и животных!</p>
                  <p>Его книга "Лесная газета" рассказывает о жизни леса.</p>
                  <div class="activity">Каких лесных жителей ты знаешь?</div>
                  <div class="emoji-practice">🦊🦌🐰🦔🐿️🦅</div>
                  <div class="tip">💡 Бианки очень любил природу!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'lit2-s2-t1-q1',
                question: 'Кто написал "Лесную газету"?',
                options: ['Пришвин', 'Чарушин', 'Бианки', 'Паустовский'],
                correctAnswer: 2,
                explanation: 'Виталий Бианки написал "Лесную газету"!',
                difficulty: 'medium',
                points: 15
              }
            ]
          }
        ]
      },
      {
        id: 'lit2-s3',
        title: 'Стихи',
        description: 'Поэзия для детей',
        order: 3,
        topics: [
          {
            id: 'lit2-s3-t1',
            title: 'Детские поэты',
            description: 'Стихи для детей',
            theory: `<h3>Детские поэты</h3>
            <p>Многие поэты писали стихи специально для детей.</p>
            <h4>Известные поэты:</h4>
            <ul>
              <li>А.Л. Барто — "Игрушки"</li>
              <li>С.В. Михалков — "Дядя Стёпа"</li>
              <li>Б.В. Заходер — стихи о животных</li>
            </ul>`,
            examples: ['Какое стихотворение Барто ты знаешь?', 'Кто такой Дядя Стёпа?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'lit2-s3-t1-l1',
                title: 'Агния Барто',
                content: `<div class="kid-lesson">
                  <h2>📚 Агния Барто</h2>
                  <p>Агния Львовна Барто писала стихи о детях и игрушках!</p>
                  <div class="activity">Выучи стихотворение "Наша Таня"!</div>
                  <div class="emoji-practice">Наша Таня громко плачет: уронила в речку мячик...</div>
                  <div class="tip">💡 Стихи Барто легко запоминаются!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'lit2-s3-t1-l2',
                title: 'Сергей Михалков',
                content: `<div class="kid-lesson">
                  <h2>📚 Сергей Михалков</h2>
                  <p>Сергей Владимирович Михалков — детский поэт!</p>
                  <p>Его стихотворение "Дядя Стёпа" о добром великане.</p>
                  <div class="activity">Кто такой Дядя Стёпа?</div>
                  <div class="emoji-practice">Дядя Стёпа — высокий добрый человек!</div>
                  <div class="tip">💡 Михалков также написал гимн России!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'lit2-s3-t1-q1',
                question: 'Кто написал стихи "Игрушки"?',
                options: ['Михалков', 'Барто', 'Заходер', 'Маршак'],
                correctAnswer: 1,
                explanation: 'Агния Барто написала цикл стихов "Игрушки"!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'lit2-s3-t1-q2',
                question: 'О ком стихотворение "Дядя Стёпа"?',
                options: ['О коте', 'О высоком человеке', 'О собаке', 'О машине'],
                correctAnswer: 1,
                explanation: 'Дядя Стёпа — это высокий добрый человек!',
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
        id: 'lit2-q1',
        question: 'Кто съел Колобка?',
        options: ['Заяц', 'Волк', 'Медведь', 'Лиса'],
        correctAnswer: 3,
        explanation: 'Лиса хитростью съела Колобка!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'lit2-q2',
        question: 'Кто написал "Мойдодыр"?',
        options: ['Пушкин', 'Чуковский', 'Маршак', 'Барто'],
        correctAnswer: 1,
        explanation: 'Корней Чуковский написал "Мойдодыр"!',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'lit2-q3',
        question: 'Кто написал "Лесную газету"?',
        options: ['Пришвин', 'Чарушин', 'Бианки', 'Паустовский'],
        correctAnswer: 2,
        explanation: 'Виталий Бианки написал "Лесную газету"!',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'lit2-q4',
        question: 'Кто написал стихи "Игрушки"?',
        options: ['Михалков', 'Барто', 'Заходер', 'Маршак'],
        correctAnswer: 1,
        explanation: 'Агния Барто написала цикл стихов "Игрушки"!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'lit2-q5',
        question: 'Кто помог вытянуть репку в сказке?',
        options: ['Только дед', 'Мышка', 'Никто', 'Соседи'],
        correctAnswer: 1,
        explanation: 'Мышка прибежала последней и помогла вытянуть репку!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'lit2-q6',
        question: 'О ком стихотворение "Дядя Стёпа"?',
        options: ['О коте', 'О высоком человеке', 'О собаке', 'О солдате'],
        correctAnswer: 1,
        explanation: 'Дядя Стёпа — это высокий добрый человек!',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ОКРУЖАЮЩИЙ МИР ====================
  {
    id: 'world2',
    title: 'Окружающий мир',
    icon: <Globe className="w-5 h-5" />,
    color: 'text-green-400',
    gradient: 'from-green-500 to-teal-500',
    description: 'Природа, человек, общество',
    sections: [
      {
        id: 'world2-s1',
        title: 'Природа',
        description: 'Живая и неживая природа',
        order: 1,
        topics: [
          {
            id: 'world2-s1-t1',
            title: 'Живая и неживая природа',
            description: 'Различаем объекты природы',
            theory: `<h3>Живая и неживая природа</h3>
            <h4>Живая природа:</h4>
            <p>Растения, животные, грибы, бактерии — они дышат, питаются, растут, размножаются</p>
            <h4>Неживая природа:</h4>
            <p>Солнце, воздух, вода, камни, почва — они не дышат, не питаются, не растут</p>`,
            examples: ['Что относится к живой природе?', 'Назови объекты неживой природы'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            quiz: [
              {
                id: 'world2-s1-t1-q1',
                question: 'Что относится к живой природе?',
                options: ['Камень', 'Дерево', 'Вода', 'Солнце'],
                correctAnswer: 1,
                explanation: 'Дерево — это растение, оно растёт, дышит, питается!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'world2-s1-t1-q2',
                question: 'Что НЕ относится к живой природе?',
                options: ['Птица', 'Цветок', 'Камень', 'Гриб'],
                correctAnswer: 2,
                explanation: 'Камень — неживая природа! Он не дышит и не растёт!',
                difficulty: 'easy',
                points: 10
              }
            ],
            lessons: [
              {
                id: 'world2-s1-t1-l1',
                title: 'Живая природа',
                content: `<div class="kid-lesson">
                  <h2>🌿 Живая природа</h2>
                  <p>Живая природа — это то, что дышит, растёт, питается!</p>
                  <div class="activity">Назови 5 живых существ!</div>
                  <div class="emoji-practice">🌳🌲🌼🐦🐕 — живая природа</div>
                  <div class="tip">💡 Растения — тоже живые!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'world2-s1-t1-l2',
                title: 'Неживая природа',
                content: `<div class="kid-lesson">
                  <h2>🪨 Неживая природа</h2>
                  <p>Неживая природа — это то, что не дышит и не растёт!</p>
                  <div class="activity">Назови объекты неживой природы!</div>
                  <div class="emoji-practice">☀️💧🪨🌍❄️ — неживая природа</div>
                  <div class="tip">💡 Солнце, вода, камни — неживые!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              }
            ]
          }
        ]
      },
      {
        id: 'world2-s2',
        title: 'Животные и растения',
        description: 'Разнообразие живой природы',
        order: 2,
        topics: [
          {
            id: 'world2-s2-t1',
            title: 'Дикие животные',
            description: 'Животные леса',
            theory: `<h3>Дикие животные</h3>
            <p>Дикие животные живут в природе и сами добывают себе еду.</p>
            <h4>Животные леса:</h4>
            <ul>
              <li>🐺 Волк — хищник</li>
              <li>🦊 Лиса — хищник</li>
              <li>🐻 Медведь — всеядный</li>
              <li>🐰 Заяц — травоядный</li>
              <li>🦌 Лось — травоядный</li>
            </ul>`,
            examples: ['Какие дикие животные живут в лесу?', 'Кто хищник, а кто травоядный?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'world2-s2-t1-l1',
                title: 'Хищники и травоядные',
                content: `<div class="kid-lesson">
                  <h2>🦁 Хищники и травоядные</h2>
                  <p><b>Хищники</b> — едят других животных: волк, лиса, медведь</p>
                  <p><b>Травоядные</b> — едят растения: заяц, лось, олень</p>
                  <div class="activity">Кто ест кого?</div>
                  <div class="emoji-practice">🐺→🐰, 🦊→🐭</div>
                  <div class="tip">💡 Хищники охотятся на травоядных!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'world2-s2-t1-q1',
                question: 'Какое животное хищник?',
                options: ['Заяц', 'Лось', 'Волк', 'Олень'],
                correctAnswer: 2,
                explanation: 'Волк — хищник, он охотится на других животных!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'world2-s2-t1-q2',
                question: 'Какое животное травоядное?',
                options: ['Волк', 'Лиса', 'Заяц', 'Медведь'],
                correctAnswer: 2,
                explanation: 'Заяц — травоядное животное, он ест траву и кору!',
                difficulty: 'easy',
                points: 10
              }
            ]
          },
          {
            id: 'world2-s2-t2',
            title: 'Растения',
            description: 'Деревья, кустарники, травы',
            theory: `<h3>Растения</h3>
            <p>Растения — это живая природа. Они дышат, растут, размножаются.</p>
            <h4>Группы растений:</h4>
            <ul>
              <li><b>Деревья</b> — высокий ствол, крона: дуб, берёза, ель</li>
              <li><b>Кустарники</b> — несколько стволов: шиповник, смородина</li>
              <li><b>Травы</b> — мягкий стебель: ромашка, одуванчик</li>
            </ul>`,
            examples: ['Назови деревья', 'Какие травы ты знаешь?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'world2-s2-t2-l1',
                title: 'Деревья нашего леса',
                content: `<div class="kid-lesson">
                  <h2>🌳 Деревья</h2>
                  <p>Деревья имеют один главный ствол и крону!</p>
                  <div class="activity">Какие деревья ты знаешь?</div>
                  <div class="emoji-practice">🌲Ель 🌳Дуб 🌲Сосна 🌳Берёза</div>
                  <div class="tip">💡 Деревья живут очень долго!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'world2-s2-t2-q1',
                question: 'Что такое дерево?',
                options: ['Растение с одним стволом', 'Растение без ствола', 'Цветок', 'Куст'],
                correctAnswer: 0,
                explanation: 'Дерево — это растение с одним главным стволом и кроной!',
                difficulty: 'easy',
                points: 10
              }
            ]
          }
        ]
      },
      {
        id: 'world2-s3',
        title: 'Человек',
        description: 'Человек и общество',
        order: 3,
        topics: [
          {
            id: 'world2-s3-t1',
            title: 'Человек — часть природы',
            description: 'Мы и окружающий мир',
            theory: `<h3>Человек</h3>
            <p>Человек — часть живой природы. Но человек отличается от животных:</p>
            <h4>Особенности человека:</h4>
            <ul>
              <li>Умеет говорить</li>
              <li>Умеет думать и рассуждать</li>
              <li>Создаёт орудия труда</li>
              <li>Живёт в обществе</li>
            </ul>`,
            examples: ['Чем человек отличается от животных?', 'Что такое общество?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 20,
            lessons: [
              {
                id: 'world2-s3-t1-l1',
                title: 'Человек и общество',
                content: `<div class="kid-lesson">
                  <h2>👨‍👩‍👧‍👦 Человек в обществе</h2>
                  <p>Люди живут вместе — это общество!</p>
                  <p>Мы общаемся, работаем, учимся вместе.</p>
                  <div class="activity">Кто входит в твою семью?</div>
                  <div class="emoji-practice">👨‍👩‍👧‍👦 Семья — это маленькое общество!</div>
                  <div class="tip">💡 Люди помогают друг другу!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'world2-s3-t1-q1',
                question: 'Чем человек отличается от животных?',
                options: ['Хвостом', 'Умеет говорить и думать', 'Лапами', 'Шерстью'],
                correctAnswer: 1,
                explanation: 'Человек умеет говорить, думать и создавать орудия труда!',
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
        id: 'world2-q1',
        question: 'Что относится к живой природе?',
        options: ['Камень', 'Дерево', 'Вода', 'Солнце'],
        correctAnswer: 1,
        explanation: 'Дерево — это растение, оно растёт, дышит, питается. Это живая природа!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'world2-q2',
        question: 'Какое животное хищник?',
        options: ['Заяц', 'Лось', 'Волк', 'Олень'],
        correctAnswer: 2,
        explanation: 'Волк — хищник, он охотится на других животных!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'world2-q3',
        question: 'Что такое дерево?',
        options: ['Растение с одним стволом', 'Растение без ствола', 'Цветок', 'Куст'],
        correctAnswer: 0,
        explanation: 'Дерево — это растение с одним главным стволом и кроной!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'world2-q4',
        question: 'Чем человек отличается от животных?',
        options: ['Хвостом', 'Умеет говорить и думать', 'Лапами', 'Крыльями'],
        correctAnswer: 1,
        explanation: 'Человек умеет говорить, думать и создавать орудия труда!',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'world2-q5',
        question: 'Какое животное травоядное?',
        options: ['Волк', 'Лиса', 'Заяц', 'Медведь'],
        correctAnswer: 2,
        explanation: 'Заяц — травоядное животное!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'world2-q6',
        question: 'Что НЕ относится к живой природе?',
        options: ['Птица', 'Цветок', 'Камень', 'Гриб'],
        correctAnswer: 2,
        explanation: 'Камень — неживая природа!',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ИЗО ====================
  {
    id: 'art2',
    title: 'ИЗО',
    icon: <Palette className="w-5 h-5" />,
    color: 'text-pink-400',
    gradient: 'from-pink-500 to-rose-500',
    description: 'Изобразительное искусство',
    sections: [
      {
        id: 'art2-s1',
        title: 'Рисование',
        description: 'Учимся рисовать',
        order: 1,
        topics: [
          {
            id: 'art2-s1-t1',
            title: 'Рисуем с натуры',
            description: 'Наблюдаем и рисуем',
            theory: `<h3>Рисование с натуры</h3>
            <p>Рисование с натуры — это рисование реальных предметов.</p>
            <h4>Правила:</h4>
            <ul>
              <li>Внимательно смотри на предмет</li>
              <li>Заметь форму и размер</li>
              <li>Определи цвет</li>
              <li>Начни с главного</li>
            </ul>`,
            examples: ['Нарисуй яблоко', 'Нарисуй вазу'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'art2-s1-t1-l1',
                title: 'Рисуем фрукты',
                content: `<div class="kid-lesson">
                  <h2>🍎 Рисуем яблоко</h2>
                  <h3>Порядок:</h3>
                  <ol>
                    <li>Нарисуй круг</li>
                    <li>Добавь ямку сверху</li>
                    <li>Нарисуй листочек</li>
                    <li>Раскрась красным и зелёным</li>
                  </ol>
                  <div class="tip">💡 Смотри внимательно на яблоко!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'art2-s1-t1-q1',
                question: 'С чего начать рисование с натуры?',
                options: ['Сразу рисовать', 'Внимательно посмотреть', 'Взять краски', 'Закрыть глаза'],
                correctAnswer: 1,
                explanation: 'Сначала нужно внимательно посмотреть на предмет!',
                difficulty: 'easy',
                points: 10
              }
            ]
          }
        ]
      },
      {
        id: 'art2-s2',
        title: 'Цвет и форма',
        description: 'Основы цветоведения',
        order: 2,
        topics: [
          {
            id: 'art2-s2-t1',
            title: 'Основные цвета',
            description: 'Красный, жёлтый, синий',
            theory: `<h3>Основные цвета</h3>
            <p>Основные цвета — это красный, жёлтый и синий. Из них можно получить все другие цвета!</p>
            <h4>Смешивание:</h4>
            <ul>
              <li>Красный + Жёлтый = Оранжевый</li>
              <li>Синий + Жёлтый = Зелёный</li>
              <li>Красный + Синий = Фиолетовый</li>
            </ul>`,
            examples: ['Какой цвет получится?', 'Смешай краски'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'art2-s2-t1-l1',
                title: 'Три основных цвета',
                content: `<div class="kid-lesson">
                  <h2>🎨 Три основных цвета</h2>
                  <p>Красный 🔴, Жёлтый 🟡, Синий 🔵</p>
                  <p>Из них можно получить ВСЕ другие цвета!</p>
                  <div class="activity">Попробуй смешать краски!</div>
                  <div class="emoji-practice">🔴+🟡=🟠 🔵+🟡=🟢 🔴+🔵=🟣</div>
                  <div class="tip">💡 Запомни три основных цвета!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'art2-s2-t1-l2',
                title: 'Тёплые и холодные цвета',
                content: `<div class="kid-lesson">
                  <h2>🌡️ Тёплые и холодные цвета</h2>
                  <p><b>Тёплые:</b> красный, оранжевый, жёлтый — как огонь и солнце!</p>
                  <p><b>Холодные:</b> синий, зелёный, фиолетовый — как лёд и вода!</p>
                  <div class="activity">Раздели цвета на тёплые и холодные!</div>
                  <div class="tip">💡 Тёплые — согревают, холодные — освежают!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'art2-s2-t1-q1',
                question: 'Какой цвет получится: красный + жёлтый?',
                options: ['Зелёный', 'Оранжевый', 'Фиолетовый', 'Синий'],
                correctAnswer: 1,
                explanation: 'Красный + Жёлтый = Оранжевый!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'art2-s2-t1-q2',
                question: 'Какие цвета основные?',
                options: ['Оранжевый, зелёный, фиолетовый', 'Красный, жёлтый, синий', 'Белый, чёрный, серый', 'Розовый, голубой, бежевый'],
                correctAnswer: 1,
                explanation: 'Основные цвета: красный, жёлтый и синий!',
                difficulty: 'easy',
                points: 10
              }
            ]
          },
          {
            id: 'art2-s2-t2',
            title: 'Геометрические формы',
            description: 'Формы предметов',
            theory: `<h3>Геометрические формы</h3>
            <p>Все предметы состоят из простых форм!</p>
            <h4>Основные формы:</h4>
            <ul>
              <li>⭕ Круг — мяч, яблоко</li>
              <li>⬜ Квадрат — окно, книга</li>
              <li>🔺 Треугольник — крыша, гора</li>
              <li>▬ Прямоугольник — дверь, стол</li>
            </ul>`,
            examples: ['Какую форму имеет предмет?', 'Найди формы вокруг'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'art2-s2-t2-l1',
                title: 'Формы вокруг нас',
                content: `<div class="kid-lesson">
                  <h2>🔷 Формы вокруг нас</h2>
                  <p>Все предметы имеют форму!</p>
                  <div class="activity">Какую форму имеет яблоко? Мяч? Книга?</div>
                  <div class="emoji-practice">🍎 = ⭕ круг, 📖 = ▬ прямоугольник</div>
                  <div class="tip">💡 Смотри на мир как художник!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'art2-s2-t2-q1',
                question: 'Какую форму имеет мяч?',
                options: ['Квадрат', 'Треугольник', 'Круг', 'Прямоугольник'],
                correctAnswer: 2,
                explanation: 'Мяч имеет круглую форму!',
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
        id: 'art2-q1',
        question: 'Какие цвета основные?',
        options: ['Оранжевый, зелёный, фиолетовый', 'Красный, жёлтый, синий', 'Белый, чёрный, серый', 'Розовый, голубой, бежевый'],
        correctAnswer: 1,
        explanation: 'Основные цвета: красный, жёлтый и синий!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'art2-q2',
        question: 'Какой цвет получится: синий + жёлтый?',
        options: ['Оранжевый', 'Зелёный', 'Фиолетовый', 'Красный'],
        correctAnswer: 1,
        explanation: 'Синий + Жёлтый = Зелёный!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'art2-q3',
        question: 'Какую форму имеет яблоко?',
        options: ['Квадрат', 'Треугольник', 'Круг', 'Прямоугольник'],
        correctAnswer: 2,
        explanation: 'Яблоко имеет круглую форму!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'art2-q4',
        question: 'Какие цвета тёплые?',
        options: ['Синий, зелёный', 'Красный, оранжевый, жёлтый', 'Фиолетовый, голубой', 'Белый, серый'],
        correctAnswer: 1,
        explanation: 'Тёплые цвета: красный, оранжевый, жёлтый — как солнце!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'art2-q5',
        question: 'Какой цвет получится: красный + синий?',
        options: ['Зелёный', 'Оранжевый', 'Фиолетовый', 'Жёлтый'],
        correctAnswer: 2,
        explanation: 'Красный + Синий = Фиолетовый!',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'art2-q6',
        question: 'С чего начать рисование с натуры?',
        options: ['Сразу рисовать', 'Внимательно посмотреть', 'Взять краски', 'Закрыть глаза'],
        correctAnswer: 1,
        explanation: 'Сначала нужно внимательно посмотреть на предмет!',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ЛИТЕРАТУРНОЕ ЧТЕНИЕ ====================
  {
    id: 'literature2',
    title: 'Литературное чтение',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Сказки, стихи, рассказы',
    sections: [
      {
        id: 'lit2-s1',
        title: 'Русские народные сказки',
        description: 'Волшебные сказки',
        order: 1,
        topics: [
          {
            id: 'lit2-s1-t1',
            title: 'Волшебные сказки',
            description: 'Гуси-лебеди, Морозко',
            theory: `<h3>Волшебные сказки</h3>
            <p>В волшебных сказках происходят чудеса: герои встречают волшебных существ, используют волшебные предметы.</p>
            <h4>Особенности:</h4>
            <ul>
              <li>Волшебные помощники</li>
              <li>Волшебные предметы</li>
              <li>Борьба добра со злом</li>
              <li>Счастливый конец</li>
            </ul>`,
            examples: ['Прочитай сказку "Гуси-лебеди"', 'Какие волшебные предметы в сказках?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 25,
            lessons: [
              {
                id: 'lit2-s1-t1-l1',
                title: 'Сказка "Гуси-лебеди"',
                content: `<div class="kid-lesson">
                  <h2>🦢 Гуси-лебеди</h2>
                  <p>Жили мужик да баба. У них была дочка да маленький сыночек...</p>
                  <h3>Главная мысль:</h3>
                  <p>Нужно слушаться родителей и помогать другим!</p>
                  <div class="activity">Перескажи сказку!</div>
                  <div class="tip">💡 Девочка спасла братика благодаря добрым делам!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'lit2-s2',
        title: 'Рассказы о детях',
        description: 'В. Осеева, Н. Носов',
        order: 2,
        topics: [
          {
            id: 'lit2-s2-t1',
            title: 'Рассказы В. Осеевой',
            description: 'Добрые истории',
            theory: `<h3>Валентина Осеева</h3>
            <p>Валентина Осеева писала рассказы о детях и их поступках.</p>
            <h4>Известные рассказы:</h4>
            <ul>
              <li>"Волшебное слово"</li>
              <li>"Хорошее"</li>
              <li>"Синие листья"</li>
            </ul>`,
            examples: ['Прочитай "Волшебное слово"', 'Какое слово было волшебным?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'lit2-s2-t1-l1',
                title: 'Рассказ "Волшебное слово"',
                content: `<div class="kid-lesson">
                  <h2>✨ Волшебное слово</h2>
                  <p>Мальчик Павлик узнал волшебное слово, которое помогало ему!</p>
                  <h3>Волшебное слово:</h3>
                  <p>"Пожалуйста" — вежливое слово!</p>
                  <div class="activity">Какие вежливые слова ты знаешь?</div>
                  <div class="tip">💡 Вежливость — это волшебство!</div>
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
        id: 'lit2-q1',
        question: 'Какое слово было волшебным в рассказе Осеевой?',
        options: ['Спасибо', 'Пожалуйста', 'Здравствуйте', 'Извините'],
        correctAnswer: 1,
        explanation: 'В рассказе "Волшебное слово" волшебным было слово "пожалуйста".',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ИНОСТРАННЫЙ ЯЗЫК ====================
  {
    id: 'english2',
    title: 'Иностранный язык',
    icon: <Languages className="w-5 h-5" />,
    color: 'text-cyan-400',
    gradient: 'from-cyan-500 to-blue-500',
    description: 'Английский язык',
    sections: [
      {
        id: 'eng2-s1',
        title: 'Моя семья',
        description: 'Family members',
        order: 1,
        topics: [
          {
            id: 'eng2-s1-t1',
            title: 'Члены семьи',
            description: 'Mother, father, sister, brother',
            theory: `<h3>Family — Семья</h3>
            <h4>Члены семьи:</h4>
            <ul>
              <li><b>Mother</b> [ма́зэ] — мама</li>
              <li><b>Father</b> [фа́зэ] — папа</li>
              <li><b>Sister</b> [си́стэ] — сестра</li>
              <li><b>Brother</b> [бра́зэ] — брат</li>
              <li><b>Grandmother</b> [грэ́ндмазэ] — бабушка</li>
              <li><b>Grandfather</b> [грэ́ндфазэ] — дедушка</li>
            </ul>`,
            examples: ['Расскажи о своей семье', 'Как будет "мама" по-английски?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'eng2-s1-t1-l1',
                title: 'Mother and Father',
                content: `<div class="kid-lesson">
                  <h2>👨‍👩‍👧 Family</h2>
                  <p>Mother — мама 👩</p>
                  <p>Father — папа 👨</p>
                  <div class="activity">Расскажи: This is my mother!</div>
                  <div class="tip">💡 Mother = мама, Father = папа!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'eng2-s1-t1-l2',
                title: 'Sister and Brother',
                content: `<div class="kid-lesson">
                  <h2>👧👦 Siblings</h2>
                  <p>Sister — сестра 👧</p>
                  <p>Brother — брат 👦</p>
                  <div class="activity">I have a sister! (У меня есть сестра!)</div>
                  <div class="tip">💡 Sister = сестра, Brother = брат!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              }
            ]
          }
        ]
      },
      {
        id: 'eng2-s2',
        title: 'Животные',
        description: 'Animals',
        order: 2,
        topics: [
          {
            id: 'eng2-s2-t1',
            title: 'Домашние животные',
            description: 'Pets',
            theory: `<h3>Animals — Животные</h3>
            <h4>Домашние животные:</h4>
            <ul>
              <li><b>Cat</b> [кэт] — кошка 🐱</li>
              <li><b>Dog</b> [дог] — собака 🐶</li>
              <li><b>Bird</b> [бёрд] — птица 🐦</li>
              <li><b>Fish</b> [фиш] — рыба 🐟</li>
            </ul>`,
            examples: ['Как будет "кошка"?', 'Назови животных по-английски'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'eng2-s2-t1-l1',
                title: 'Cat and Dog',
                content: `<div class="kid-lesson">
                  <h2>🐱🐶 Pets</h2>
                  <p>Cat — кошка 🐱</p>
                  <p>Dog — собака 🐶</p>
                  <div class="activity">I have a cat! (У меня есть кошка!)</div>
                  <div class="tip">💡 Cat = кошка, Dog = собака!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'eng2-q1',
        question: 'Как будет "мама" по-английски?',
        options: ['Father', 'Mother', 'Sister', 'Brother'],
        correctAnswer: 1,
        explanation: 'Mother — это мама по-английски.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'eng2-q2',
        question: 'Как будет "кошка" по-английски?',
        options: ['Dog', 'Bird', 'Cat', 'Fish'],
        correctAnswer: 2,
        explanation: 'Cat — это кошка по-английски.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ИЗО ====================
  {
    id: 'art2',
    title: 'Изобразительное искусство',
    icon: <Palette className="w-5 h-5" />,
    color: 'text-pink-400',
    gradient: 'from-pink-500 to-rose-500',
    description: 'Рисование и творчество',
    sections: [
      {
        id: 'art2-s1',
        title: 'Рисование животных',
        description: 'Учимся рисовать',
        order: 1,
        topics: [
          {
            id: 'art2-s1-t1',
            title: 'Рисуем животных',
            description: 'Простые схемы',
            theory: `<h3>Как нарисовать животное</h3>
            <h4>Этапы рисования:</h4>
            <ol>
              <li>Начни с простых фигур (круг, овал)</li>
              <li>Добавь детали</li>
              <li>Нарисуй лапы и хвост</li>
              <li>Добавь глаза и уши</li>
            </ol>`,
            examples: ['Нарисуй котика', 'Нарисуй птичку'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 25,
            lessons: [
              {
                id: 'art2-s1-t1-l1',
                title: 'Рисуем котика',
                content: `<div class="kid-lesson">
                  <h2>🐱 Как нарисовать котика</h2>
                  <ol>
                    <li>Нарисуй большой овал — тело</li>
                    <li>Добавь круг — голову</li>
                    <li>Нарисуй треугольники — уши</li>
                    <li>Добавь глаза, нос, усы</li>
                    <li>Нарисуй лапки и хвост</li>
                  </ol>
                  <div class="tip">💡 Начинай с простых фигур!</div>
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
        id: 'art2-q1',
        question: 'С чего лучше начать рисунок животного?',
        options: ['С деталей', 'С простых фигур', 'С раскрашивания', 'С фона'],
        correctAnswer: 1,
        explanation: 'Рисунок лучше начинать с простых фигур — кругов и овалов.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== МУЗЫКА ====================
  {
    id: 'music2',
    title: 'Музыка',
    icon: <Music className="w-5 h-5" />,
    color: 'text-violet-400',
    gradient: 'from-violet-500 to-purple-500',
    description: 'Музыка и пение',
    sections: [
      {
        id: 'music2-s1',
        title: 'Музыкальные инструменты',
        description: 'Знакомство с инструментами',
        order: 1,
        topics: [
          {
            id: 'music2-s1-t1',
            title: 'Народные инструменты',
            description: 'Балалайка, гармонь',
            theory: `<h3>Русские народные инструменты</h3>
            <h4>Инструменты:</h4>
            <ul>
              <li><b>Балалайка</b> — трёхструнный инструмент</li>
              <li><b>Гармонь</b> — духовой инструмент</li>
              <li><b>Домра</b> — струнный инструмент</li>
              <li><b>Гусли</b> — древний струнный инструмент</li>
            </ul>`,
            examples: ['Какой инструмент самый известный?', 'Послушай балалайку'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'music2-s1-t1-l1',
                title: 'Балалайка',
                content: `<div class="kid-lesson">
                  <h2>🎸 Балалайка</h2>
                  <p>Балалайка — русский народный инструмент с тремя струнами!</p>
                  <h3>Особенности:</h3>
                  <p>Треугольная форма, три струны</p>
                  <div class="tip">💡 Балалайка — символ России!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'music2-q1',
        question: 'Сколько струн у балалайки?',
        options: ['Две', 'Три', 'Четыре', 'Пять'],
        correctAnswer: 1,
        explanation: 'У балалайки три струны.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ТЕХНОЛОГИЯ ====================
  {
    id: 'tech2',
    title: 'Технология',
    icon: <Ruler className="w-5 h-5" />,
    color: 'text-amber-400',
    gradient: 'from-amber-500 to-orange-500',
    description: 'Трудовое обучение',
    sections: [
      {
        id: 'tech2-s1',
        title: 'Работа с бумагой',
        description: 'Оригами и аппликация',
        order: 1,
        topics: [
          {
            id: 'tech2-s1-t1',
            title: 'Оригами',
            description: 'Искусство складывания',
            theory: `<h3>Оригами</h3>
            <p>Оригами — это японское искусство складывания фигурок из бумаги.</p>
            <h4>Базовые фигуры:</h4>
            <ul>
              <li>Самолётик</li>
              <li>Кораблик</li>
              <li>Лягушка</li>
              <li>Журавлик</li>
            </ul>`,
            examples: ['Сделай самолётик', 'Сложи кораблик'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 25,
            lessons: [
              {
                id: 'tech2-s1-t1-l1',
                title: 'Самолётик',
                content: `<div class="kid-lesson">
                  <h2>✈️ Оригами: Самолётик</h2>
                  <h3>Порядок работы:</h3>
                  <ol>
                    <li>Возьми прямоугольный лист бумаги</li>
                    <li>Согни пополам</li>
                    <li>Загни углы к центру</li>
                    <li>Согни ещё раз</li>
                    <li>Отогни крылья</li>
                  </ol>
                  <div class="tip">💡 Делай ровные сгибы!</div>
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
        id: 'tech2-q1',
        question: 'Что такое оригами?',
        options: ['Рисование', 'Складывание из бумаги', 'Лепка', 'Вырезание'],
        correctAnswer: 1,
        explanation: 'Оригами — это японское искусство складывания фигурок из бумаги.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ФИЗКУЛЬТУРА ====================
  {
    id: 'pe2',
    title: 'Физическая культура',
    icon: <Dumbbell className="w-5 h-5" />,
    color: 'text-orange-400',
    gradient: 'from-orange-500 to-red-500',
    description: 'Спорт и здоровье',
    sections: [
      {
        id: 'pe2-s1',
        title: 'Гимнастика',
        description: 'Основные упражнения',
        order: 1,
        topics: [
          {
            id: 'pe2-s1-t1',
            title: 'Утренняя зарядка',
            description: 'Комплекс упражнений',
            theory: `<h3>Утренняя зарядка</h3>
            <h4>Упражнения:</h4>
            <ol>
              <li>Повороты головы</li>
              <li>Махи руками</li>
              <li>Наклоны</li>
              <li>Приседания</li>
              <li>Прыжки</li>
            </ol>`,
            examples: ['Сделай зарядку', 'Разомни шею'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'pe2-s1-t1-l1',
                title: 'Комплекс зарядки',
                content: `<div class="kid-lesson">
                  <h2>🏃 Утренняя зарядка</h2>
                  <ol>
                    <li>Повороты головы — 5 раз</li>
                    <li>Махи руками — 10 раз</li>
                    <li>Наклоны — 5 раз</li>
                    <li>Приседания — 5 раз</li>
                    <li>Прыжки — 10 раз</li>
                  </ol>
                  <div class="tip">💡 Зарядка даёт энергию на весь день!</div>
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
        id: 'pe2-q1',
        question: 'Зачем нужна утренняя зарядка?',
        options: ['Чтобы устать', 'Чтобы проснуться и получить энергию', 'Чтобы не спать', 'Не нужна'],
        correctAnswer: 1,
        explanation: 'Утренняя зарядка помогает проснуться и даёт энергию на весь день.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ОБЖ ====================
  {
    id: 'safety2',
    title: 'ОБЖ',
    icon: <Shield className="w-5 h-5" />,
    color: 'text-red-500',
    gradient: 'from-red-600 to-orange-600',
    description: 'Основы безопасности',
    sections: [
      {
        id: 'safety2-s1',
        title: 'Безопасность в школе',
        description: 'Правила поведения',
        order: 1,
        topics: [
          {
            id: 'safety2-s1-t1',
            title: 'Правила поведения',
            description: 'На уроках и переменах',
            theory: `<h3>Безопасность в школе</h3>
            <h4>На уроках:</h4>
            <ul>
              <li>Не бегай в классе</li>
              <li>Не играй острыми предметами</li>
              <li>Сиди правильно</li>
            </ul>
            <h4>На переменах:</h4>
            <ul>
              <li>Не бегай по коридорам</li>
              <li>Не толкайся</li>
              <li>Осторожно на лестницах</li>
            </ul>`,
            examples: ['Как вести себя в классе?', 'Почему нельзя бегать?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'safety2-s1-t1-l1',
                title: 'Правила на переменах',
                content: `<div class="kid-lesson">
                  <h2>🏫 Безопасность на переменах</h2>
                  <h3>Правила:</h3>
                  <ul>
                    <li>Не бегай по коридорам</li>
                    <li>Не толкай других</li>
                    <li>Осторожно на лестницах</li>
                    <li>Не играй в опасные игры</li>
                  </ul>
                  <div class="tip">💡 Безопасность — главное!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'safety2-q1',
        question: 'Можно ли бегать по коридорам школы?',
        options: ['Да, можно', 'Нет, опасно', 'Только быстро', 'Иногда'],
        correctAnswer: 1,
        explanation: 'Бегать по коридорам школы опасно — можно столкнуться или упасть.',
        difficulty: 'easy',
        points: 10
      }
    ]
  }
]
