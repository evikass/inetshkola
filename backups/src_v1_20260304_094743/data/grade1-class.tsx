// Полные данные для 1 класса
// Иерархия: Предмет → Раздел → Тема → Урок

import { Calculator, Book, Globe, Palette, BookOpen, Music, Dumbbell, Shield, Ruler, Languages } from 'lucide-react'
import type { Subject } from './types'

// ==================== 1 КЛАСС ====================

export const grade1Subjects: Subject[] = [
  // ==================== МАТЕМАТИКА ====================
  {
    id: 'math1',
    title: 'Математика',
    icon: <Calculator className="w-5 h-5" />,
    color: 'text-blue-400',
    gradient: 'from-blue-500 to-indigo-500',
    description: 'Основы математики: счёт, сложение, вычитание',
    sections: [
      {
        id: 'math1-s1',
        title: 'Числа первого десятка',
        description: 'Знакомство с числами от 1 до 10',
        order: 1,
        topics: [
          {
            id: 'math1-s1-t1',
            title: 'Числа 1-5',
            description: 'Учим первые пять чисел',
            theory: `<h3>Первые числа</h3>
            <p>Давай познакомимся с числами от 1 до 5!</p>
            <h4>Один (1)</h4>
            <p>Один предмет — одна вещь. Один мячик! 🏀</p>
            <h4>Два (2)</h4>
            <p>Два — это один и ещё один. Два носочка! 🧦🧦</p>
            <h4>Три (3)</h4>
            <p>Три — это два и ещё один. Три поросёнка! 🐷🐷🐷</p>
            <h4>Четыре (4)</h4>
            <p>Четыре — три и ещё один. У квадрата 4 угла! ⬜</p>
            <h4>Пять (5)</h4>
            <p>Пять — четыре и ещё один. Пять пальчиков! ✋</p>`,
            examples: ['Покажи 3 пальчика', 'Сколько углов у квадрата?', 'Посчитай до 5'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            quiz: [
              {
                id: 'math1-s1-t1-q1',
                question: 'Сколько пальчиков на одной руке?',
                options: ['3', '4', '5', '6'],
                correctAnswer: 2,
                explanation: 'На одной руке 5 пальчиков! Посчитай: большой, указательный, средний, безымянный, мизинец!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'math1-s1-t1-q2',
                question: 'Какое число идёт после 3?',
                options: ['2', '4', '5', '6'],
                correctAnswer: 1,
                explanation: 'После 3 идёт 4! 1, 2, 3, 4, 5!',
                difficulty: 'easy',
                points: 10
              }
            ],
            lessons: [
              {
                id: 'math1-s1-t1-l1',
                title: 'Число 1',
                content: `<div class="kid-lesson">
                  <h2>1️⃣ Один</h2>
                  <p>Один — это одна вещь! Одно солнышко на небе ☀️</p>
                  <div class="activity">Найди один предмет в комнате!</div>
                  <div class="emoji-practice">🏀 = 1</div>
                  <div class="tip">💡 Подними один пальчик!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'math1-s1-t1-l2',
                title: 'Число 2',
                content: `<div class="kid-lesson">
                  <h2>2️⃣ Два</h2>
                  <p>Два — это один и ещё один! Два у тебя ушка 👂👂</p>
                  <div class="activity">Покажи два пальчика!</div>
                  <div class="emoji-practice">🧦🧦 = 2</div>
                  <div class="tip">💡 Пара — это два предмета!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'math1-s1-t1-l3',
                title: 'Число 3',
                content: `<div class="kid-lesson">
                  <h2>3️⃣ Три</h2>
                  <p>Три — это два и ещё один! Три поросёнка 🐷🐷🐷</p>
                  <div class="activity">Покажи три пальчика!</div>
                  <div class="emoji-practice">🔺 — 3 угла!</div>
                  <div class="tip">💡 У треугольника 3 угла!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              },
              {
                id: 'math1-s1-t1-l4',
                title: 'Числа 4 и 5',
                content: `<div class="kid-lesson">
                  <h2>4️⃣5️⃣ Четыре и пять</h2>
                  <p>Четыре — у квадрата 4 угла! Пять — вся ладошка! ✋</p>
                  <div class="activity">Посчитай пальчики на руке!</div>
                  <div class="emoji-practice">⬜ = 4 угла, ✋ = 5 пальцев</div>
                  <div class="tip">💡 Четыре ножки у стула!</div>
                </div>`,
                completed: false,
                order: 4,
                estimatedTime: 5
              }
            ]
          },
          {
            id: 'math1-s1-t2',
            title: 'Числа 6-10',
            description: 'Продолжаем считать',
            theory: `<h3>Числа от 6 до 10</h3>
            <h4>Шесть (6)</h4>
            <p>Шесть — это пять и ещё один. У жука 6 лапок! 🐞</p>
            <h4>Семь (7)</h4>
            <p>Семь — шесть и ещё один. 7 дней в неделе! 📅</p>
            <h4>Восемь (8)</h4>
            <p>Восемь — семь и ещё один. У паука 8 лапок! 🕷️</p>
            <h4>Девять (9)</h4>
            <p>Девять — восемь и ещё один.</p>
            <h4>Десять (10)</h4>
            <p>Десять — все пальчики на двух руках! 🙌</p>`,
            examples: ['Сколько дней в неделе?', 'Посчитай до 10', 'Покажи 8 пальчиков'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            quiz: [
              {
                id: 'math1-s1-t2-q1',
                question: 'Сколько дней в неделе?',
                options: ['5', '6', '7', '8'],
                correctAnswer: 2,
                explanation: 'В неделе 7 дней: понедельник, вторник, среда, четверг, пятница, суббота, воскресенье!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'math1-s1-t2-q2',
                question: 'Сколько лапок у паука?',
                options: ['4', '6', '8', '10'],
                correctAnswer: 2,
                explanation: 'У паука 8 лапок! Это число 8!',
                difficulty: 'easy',
                points: 10
              }
            ],
            lessons: [
              {
                id: 'math1-s1-t2-l1',
                title: 'Числа 6 и 7',
                content: `<div class="kid-lesson">
                  <h2>6️⃣7️⃣ Шесть и семь</h2>
                  <p>Шесть лапок у жука 🐞, семь дней в неделе!</p>
                  <div class="activity">Назови дни недели!</div>
                  <div class="emoji-practice">Пн, Вт, Ср, Чт, Пт, Сб, Вс = 7</div>
                  <div class="tip">💡 Понедельник — первый день!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'math1-s1-t2-l2',
                title: 'Числа 8 и 9',
                content: `<div class="kid-lesson">
                  <h2>8️⃣9️⃣ Восемь и девять</h2>
                  <p>Восемь лапок у паука 🕷️, девять — почти десять!</p>
                  <div class="activity">Нарисуй паучка с 8 лапками!</div>
                  <div class="emoji-practice">🕷️ = 8 лапок</div>
                  <div class="tip">💡 8 — это 4 + 4!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'math1-s1-t2-l3',
                title: 'Число 10',
                content: `<div class="kid-lesson">
                  <h2>🔟 Десять</h2>
                  <p>Десять — все пальчики на двух руках! 🙌</p>
                  <div class="activity">Посчитай все пальчики!</div>
                  <div class="emoji-practice">👋👋 = 10 пальцев</div>
                  <div class="tip">💡 Десять — это десяток!</div>
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
        id: 'math1-s2',
        title: 'Сложение и вычитание',
        description: 'Арифметические действия',
        order: 2,
        topics: [
          {
            id: 'math1-s2-t1',
            title: 'Сложение',
            description: 'Учимся складывать',
            theory: `<h3>Сложение — объединяем!</h3>
            <p>Сложение — это когда мы объединяем группы. Знак сложения: + (плюс)</p>
            <h4>Примеры:</h4>
            <p>🍎🍎 + 🍎 = 🍎🍎🍎 → 2 + 1 = 3</p>
            <h4>Правила:</h4>
            <ul>
              <li>От перестановки сумма не меняется: 3 + 2 = 2 + 3</li>
              <li>При сложении с нулём число не меняется: 5 + 0 = 5</li>
            </ul>`,
            examples: ['3 + 2 = ?', 'Реши: 4 + 1', 'Сколько будет 5 + 5?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 25,
            quiz: [
              {
                id: 'math1-s2-t1-q1',
                question: 'Чему равно 2 + 3?',
                options: ['4', '5', '6', '7'],
                correctAnswer: 1,
                explanation: '2 + 3 = 5! Можно посчитать на пальчиках: 2 + 3 = 5!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'math1-s2-t1-q2',
                question: 'Чему равно 5 + 0?',
                options: ['0', '4', '5', '6'],
                correctAnswer: 2,
                explanation: 'Если к числу прибавить 0, оно не меняется! 5 + 0 = 5!',
                difficulty: 'easy',
                points: 10
              }
            ],
            lessons: [
              {
                id: 'math1-s2-t1-l1',
                title: 'Что такое сложение?',
                content: `<div class="kid-lesson">
                  <h2>➕ Сложение</h2>
                  <p>Сложение — это когда мы объединяем предметы! Знак + означает "плюс"!</p>
                  <div class="activity">🍎 + 🍎 = ? (два яблока)</div>
                  <div class="emoji-practice">2 + 1 = 3</div>
                  <div class="tip">💡 Плюс — это крестик!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'math1-s2-t1-l2',
                title: 'Примеры на сложение',
                content: `<div class="kid-lesson">
                  <h2>🧮 Складываем числа</h2>
                  <p>Давай решим примеры вместе!</p>
                  <div class="activity">🍎🍎 + 🍎🍎 = 🍎🍎🍎🍎</div>
                  <div class="emoji-practice">2 + 2 = 4, 3 + 1 = 4, 5 + 5 = 10</div>
                  <div class="tip">💡 Можно считать на пальчиках!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'math1-s2-t1-l3',
                title: 'Сложение с нулём',
                content: `<div class="kid-lesson">
                  <h2>0️⃣ Сложение с нулём</h2>
                  <p>Если к числу прибавить 0, оно не меняется!</p>
                  <div class="activity">🍎🍎🍎 + 0 = 🍎🍎🍎</div>
                  <div class="emoji-practice">3 + 0 = 3, 5 + 0 = 5, 0 + 7 = 7</div>
                  <div class="tip">💡 Ноль — это "ничего"!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ]
          },
          {
            id: 'math1-s2-t2',
            title: 'Вычитание',
            description: 'Учимся вычитать',
            theory: `<h3>Вычитание — убираем часть!</h3>
            <p>Вычитание — это когда мы убираем часть предметов. Знак вычитания: − (минус)</p>
            <h4>Примеры:</h4>
            <p>🍎🍎🍎 − 🍎 = 🍎🍎 → 3 − 1 = 2</p>
            <h4>Правила:</h4>
            <ul>
              <li>При вычитании самого числа получается ноль: 5 − 5 = 0</li>
              <li>При вычитании нуля число не меняется: 5 − 0 = 5</li>
            </ul>`,
            examples: ['5 − 2 = ?', 'Было 7, съели 3. Сколько осталось?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 25,
            quiz: [
              {
                id: 'math1-s2-t2-q1',
                question: 'Чему равно 5 − 2?',
                options: ['2', '3', '4', '7'],
                correctAnswer: 1,
                explanation: '5 − 2 = 3! Было 5, убрали 2, осталось 3!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'math1-s2-t2-q2',
                question: 'Чему равно 4 − 4?',
                options: ['0', '1', '4', '8'],
                correctAnswer: 0,
                explanation: 'Если из числа вычесть само число, будет 0! 4 − 4 = 0!',
                difficulty: 'easy',
                points: 10
              }
            ],
            lessons: [
              {
                id: 'math1-s2-t2-l1',
                title: 'Что такое вычитание?',
                content: `<div class="kid-lesson">
                  <h2>➖ Вычитание</h2>
                  <p>Вычитание — это когда мы убираем предметы! Знак − означает "минус"!</p>
                  <div class="activity">🍎🍎🍎 − 🍎 = 🍎🍎</div>
                  <div class="emoji-practice">3 − 1 = 2</div>
                  <div class="tip">💡 Минус — это чёрточка!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'math1-s2-t2-l2',
                title: 'Примеры на вычитание',
                content: `<div class="kid-lesson">
                  <h2>🧮 Вычитаем числа</h2>
                  <p>Давай решим примеры вместе!</p>
                  <div class="activity">🍎🍎🍎🍎 − 🍎🍎 = 🍎🍎</div>
                  <div class="emoji-practice">4 − 2 = 2, 5 − 3 = 2, 10 − 5 = 5</div>
                  <div class="tip">💡 Вычитание — обратное сложению!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'math1-s2-t2-l3',
                title: 'Вычитание до нуля',
                content: `<div class="kid-lesson">
                  <h2>0️⃣ Вычитание до нуля</h2>
                  <p>Если из числа вычесть само число, будет 0!</p>
                  <div class="activity">🍎🍎🍎 − 🍎🍎🍎 = 0</div>
                  <div class="emoji-practice">5 − 5 = 0, 3 − 3 = 0, 10 − 10 = 0</div>
                  <div class="tip">💡 Всё минус всё = ничего!</div>
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
        id: 'math1-s3',
        title: 'Геометрические фигуры',
        description: 'Круг, квадрат, треугольник',
        order: 3,
        topics: [
          {
            id: 'math1-s3-t1',
            title: 'Основные фигуры',
            description: 'Учим геометрические фигуры',
            theory: `<h3>Геометрические фигуры</h3>
            <h4>⚪ Круг</h4>
            <p>Фигура без углов, похож на солнышко или колесо</p>
            <h4>⬜ Квадрат</h4>
            <p>У квадрата 4 равные стороны и 4 угла</p>
            <h4>🔺 Треугольник</h4>
            <p>У треугольника 3 стороны и 3 угла</p>
            <h4>▭ Прямоугольник</h4>
            <p>У прямоугольника 4 угла, противоположные стороны равны</p>`,
            examples: ['Найди все круги', 'Чем отличается квадрат от прямоугольника?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            quiz: [
              {
                id: 'math1-s3-t1-q1',
                question: 'Сколько углов у треугольника?',
                options: ['2', '3', '4', '5'],
                correctAnswer: 1,
                explanation: 'У треугольника 3 угла! Это видно из названия: три + угольник!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'math1-s3-t1-q2',
                question: 'У какой фигуры нет углов?',
                options: ['Квадрат', 'Треугольник', 'Круг', 'Прямоугольник'],
                correctAnswer: 2,
                explanation: 'У круга нет углов! Он круглый и гладкий!',
                difficulty: 'easy',
                points: 10
              }
            ],
            lessons: [
              {
                id: 'math1-s3-t1-l1',
                title: 'Круг',
                content: `<div class="kid-lesson">
                  <h2>⚪ Круг</h2>
                  <p>Круг — это фигура без углов! Похож на солнышко ☀️ или колесо 🛞</p>
                  <div class="activity">Найди круглые предметы в комнате!</div>
                  <div class="emoji-practice">⚪🔵🟡 — круги</div>
                  <div class="tip">💡 У круга нет уголков!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'math1-s3-t1-l2',
                title: 'Квадрат',
                content: `<div class="kid-lesson">
                  <h2>⬜ Квадрат</h2>
                  <p>Квадрат — это фигура с 4 равными сторонами и 4 углами!</p>
                  <div class="activity">Найди квадратные предметы!</div>
                  <div class="emoji-practice">⬜ has 4 equal sides!</div>
                  <div class="tip">💡 У квадрата все стороны одинаковые!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'math1-s3-t1-l3',
                title: 'Треугольник',
                content: `<div class="kid-lesson">
                  <h2>🔺 Треугольник</h2>
                  <p>Треугольник — это фигура с 3 сторонами и 3 углами!</p>
                  <div class="activity">Нарисуй треугольник!</div>
                  <div class="emoji-practice">🔺 — 3 угла, 3 стороны</div>
                  <div class="tip">💡 Три угла = треугольник!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'math1-q1',
        question: 'Чему равно 3 + 2?',
        options: ['4', '5', '6', '7'],
        correctAnswer: 1,
        explanation: '3 + 2 = 5. Можно посчитать на пальцах: 3 пальца + 2 пальца = 5 пальцев!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math1-q2',
        question: 'Чему равно 7 − 3?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 1,
        explanation: '7 − 3 = 4. Было 7, убрали 3, осталось 4.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math1-q3',
        question: 'Сколько углов у треугольника?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 1,
        explanation: 'У треугольника 3 угла. Это видно даже из названия: "три" + "угольник"!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math1-q4',
        question: 'Какое число больше: 5 или 3?',
        options: ['3', '5', 'Одинаковые', 'Не знаю'],
        correctAnswer: 1,
        explanation: '5 больше, чем 3! 5 пальцев больше, чем 3 пальца!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math1-q5',
        question: 'Чему равно 6 + 4?',
        options: ['8', '9', '10', '11'],
        correctAnswer: 2,
        explanation: '6 + 4 = 10! Это все пальчики на обеих руках!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math1-q6',
        question: 'Сколько сторон у квадрата?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 1,
        explanation: 'У квадрата 4 равные стороны!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math1-q7',
        question: 'Чему равно 8 − 5?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 1,
        explanation: '8 − 5 = 3! Было 8, убрали 5, осталось 3!',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== РУССКИЙ ЯЗЫК ====================
  {
    id: 'russian1',
    title: 'Русский язык',
    icon: <Book className="w-5 h-5" />,
    color: 'text-red-400',
    gradient: 'from-red-500 to-orange-500',
    description: 'Обучение грамоте и письму',
    sections: [
      {
        id: 'rus1-s1',
        title: 'Алфавит',
        description: '33 буквы русского алфавита',
        order: 1,
        topics: [
          {
            id: 'rus1-s1-t1',
            title: 'Знакомство с алфавитом',
            description: 'Учим буквы А-Я',
            theory: `<h3>Русский алфавит</h3>
            <p>В русском алфавите 33 буквы. Они делятся на гласные и согласные.</p>
            <h4>Гласные буквы (10):</h4>
            <p>А, Е, Ё, И, О, У, Ы, Э, Ю, Я</p>
            <h4>Согласные буквы (21):</h4>
            <p>Б, В, Г, Д, Ж, З, К, Л, М, Н, П, Р, С, Т, Ф, Х, Ц, Ч, Ш, Щ</p>
            <h4>Особые буквы (2):</h4>
            <p>Ь (мягкий знак) и Ъ (твёрдый знак)</p>`,
            examples: ['Назови буквы по порядку', 'Какая буква после К?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 25,
            quiz: [
              {
                id: 'rus1-s1-t1-q1',
                question: 'Сколько букв в русском алфавите?',
                options: ['30', '31', '33', '35'],
                correctAnswer: 2,
                explanation: 'В русском алфавите 33 буквы! От А до Я!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'rus1-s1-t1-q2',
                question: 'Какая буква первая в алфавите?',
                options: ['Б', 'А', 'В', 'Я'],
                correctAnswer: 1,
                explanation: 'Первая буква алфавита — А!',
                difficulty: 'easy',
                points: 10
              }
            ],
            lessons: [
              {
                id: 'rus1-s1-t1-l1',
                title: 'Гласные буквы',
                content: `<div class="kid-lesson">
                  <h2>🔤 Гласные буквы</h2>
                  <p>Гласные буквы можно петь: А, Е, Ё, И, О, У, Ы, Э, Ю, Я</p>
                  <div class="activity">Пропой гласные буквы!</div>
                  <div class="emoji-practice">А-А-А! О-О-О! У-У-У!</div>
                  <div class="tip">💡 Гласные поются голосом!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'rus1-s1-t1-l2',
                title: 'Согласные буквы',
                content: `<div class="kid-lesson">
                  <h2>🔤 Согласные буквы</h2>
                  <p>Согласные буквы произносятся с преградой: Б, В, Г, Д, Ж, З...</p>
                  <div class="activity">Назови согласные в слове МАМА!</div>
                  <div class="emoji-practice">М-А-М-А → М, М — согласные</div>
                  <div class="tip">💡 Согласные нельзя петь!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'rus1-s1-t1-l3',
                title: 'Алфавит от А до Я',
                content: `<div class="kid-lesson">
                  <h2>📖 Весь алфавит</h2>
                  <p>33 буквы: А Б В Г Д Е Ё Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ъ Ы Ь Э Ю Я</p>
                  <div class="activity">Посчитай буквы!</div>
                  <div class="emoji-practice">А → Я = 33 буквы</div>
                  <div class="tip">💡 Первая буква — А, последняя — Я!</div>
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
        id: 'rus1-s2',
        title: 'Звуки и буквы',
        description: 'Различаем звуки и буквы',
        order: 2,
        topics: [
          {
            id: 'rus1-s2-t1',
            title: 'Гласные и согласные звуки',
            description: 'Различаем звуки речи',
            theory: `<h3>Звуки и буквы</h3>
            <p>Буквы мы пишем и видим, а звуки — произносим и слышим.</p>
            <h4>Гласные звуки:</h4>
            <p>Произносятся голосом, рот открыт: [а], [о], [у], [ы], [и], [э]</p>
            <h4>Согласные звуки:</h4>
            <p>Произносятся с препятствием (губы, зубы, язык). Могут быть твёрдыми и мягкими.</p>`,
            examples: ['Какой звук в слове мама?', 'Назови согласные в слове кот'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 20,
            quiz: [
              {
                id: 'rus1-s2-t1-q1',
                question: 'Сколько гласных звуков в русском языке?',
                options: ['5', '6', '10', '33'],
                correctAnswer: 1,
                explanation: 'Гласных звуков 6: [а], [о], [у], [ы], [и], [э]!',
                difficulty: 'medium',
                points: 10
              },
              {
                id: 'rus1-s2-t1-q2',
                question: 'Что мы делаем с буквами?',
                options: ['Слышим', 'Пишем и видим', 'Произносим', 'Говорим'],
                correctAnswer: 1,
                explanation: 'Буквы мы пишем и видим, а звуки — произносим и слышим!',
                difficulty: 'easy',
                points: 10
              }
            ],
            lessons: [
              {
                id: 'rus1-s2-t1-l1',
                title: 'Что такое звук?',
                content: `<div class="kid-lesson">
                  <h2>🎵 Звук</h2>
                  <p>Звук — это то, что мы слышим и произносим. Буква — это то, что мы пишем!</p>
                  <div class="activity">Произнеси звук [А]!</div>
                  <div class="emoji-practice">Звук [А] → буква А</div>
                  <div class="tip">💡 Звуки в квадратных скобках: [а], [о]</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'rus1-s2-t1-l2',
                title: 'Гласные звуки',
                content: `<div class="kid-lesson">
                  <h2>🗣️ Гласные звуки</h2>
                  <p>Гласные звуки поются: [а], [о], [у], [ы], [и], [э]</p>
                  <div class="activity">Пропой гласные звуки!</div>
                  <div class="emoji-practice">[а] [о] [у] [ы] [и] [э] = 6 звуков</div>
                  <div class="tip">💡 Гласных звуков 6, а букв 10!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'rus1-s2-t1-l3',
                title: 'Согласные звуки',
                content: `<div class="kid-lesson">
                  <h2>💬 Согласные звуки</h2>
                  <p>Согласные звуки произносятся с преградой: губы, зубы, язык</p>
                  <div class="activity">Произнеси [Б] — губы вместе!</div>
                  <div class="emoji-practice">[б], [в], [г], [д] — согласные</div>
                  <div class="tip">💡 Согласные бывают твёрдые и мягкие!</div>
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
        id: 'rus1-s3',
        title: 'Слоги',
        description: 'Делим слова на слоги',
        order: 3,
        topics: [
          {
            id: 'rus1-s3-t1',
            title: 'Деление на слоги',
            description: 'Сколько гласных — столько слогов',
            theory: `<h3>Что такое слог?</h3>
            <p>Слог — это часть слова, которую можно произнести одним выдохом. В слоге обязательно есть гласный звук.</p>
            <h4>Правило:</h4>
            <p>Сколько в слове гласных — столько и слогов!</p>
            <h4>Примеры:</h4>
            <ul>
              <li>кот — 1 слог (1 гласная О)</li>
              <li>ма-ма — 2 слога (2 гласные А, А)</li>
              <li>па-на-ма — 3 слога (3 гласные А, А, А)</li>
            </ul>`,
            examples: ['Раздели на слоги: молоко', 'Сколько слогов в слове "ручка"?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'rus1-s3-t1-l1',
                title: 'Что такое слог?',
                content: `<div class="kid-lesson">
                  <h2>📊 Слог</h2>
                  <p>Слог — это часть слова, которую можно сказать за один раз!</p>
                  <div class="activity">Хлопни в ладоши на каждый слог: МО-ЛО-КО!</div>
                  <div class="emoji-practice">кот — 1 слог, ма-ма — 2 слога</div>
                  <div class="tip">💡 Сколько гласных — столько слогов!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'rus1-s3-t1-l2',
                title: 'Считаем слоги',
                content: `<div class="kid-lesson">
                  <h2>🔢 Считаем слоги</h2>
                  <p>Чтобы посчитать слоги, посчитай гласные буквы!</p>
                  <div class="activity">Сколько слогов в слове ЯБЛОКО?</div>
                  <div class="emoji-practice">Я-БЛО-КО = 3 слога (Я, О, О)</div>
                  <div class="tip">💡 Хлопай на каждый слог!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'rus1-s3-t1-l3',
                title: 'Перенос слов',
                content: `<div class="kid-lesson">
                  <h2>✏️ Перенос слов</h2>
                  <p>Слова переносятся по слогам! Одну букву нельзя оставлять на строке!</p>
                  <div class="activity">Как перенести слово МОЛОКО?</div>
                  <div class="emoji-practice">МО-ЛО-КО (можно: мо-локо, моло-ко)</div>
                  <div class="tip">💡 Одну букву нельзя оставлять!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'rus1-q1',
        question: 'Сколько букв в русском алфавите?',
        options: ['30', '31', '33', '34'],
        correctAnswer: 2,
        explanation: 'В русском алфавите 33 буквы. Первая буква — А, последняя — Я.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus1-q2',
        question: 'Сколько слогов в слове "молоко"?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 1,
        explanation: 'В слове "молоко" 3 гласные буквы (о, о, о), значит 3 слога: мо-ло-ко.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus1-q3',
        question: 'Какая буква последняя в алфавите?',
        options: ['А', 'Я', 'Ю', 'Ё'],
        correctAnswer: 1,
        explanation: 'Последняя буква русского алфавита — Я!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus1-q4',
        question: 'Сколько гласных букв в русском языке?',
        options: ['6', '10', '21', '33'],
        correctAnswer: 1,
        explanation: 'Гласных букв 10: А, Е, Ё, И, О, У, Ы, Э, Ю, Я!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus1-q5',
        question: 'Сколько слогов в слове "мама"?',
        options: ['1', '2', '3', '4'],
        correctAnswer: 1,
        explanation: 'В слове "мама" 2 гласные буквы (а, а), значит 2 слога: ма-ма!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus1-q6',
        question: 'Какие буквы можно петь?',
        options: ['Согласные', 'Гласные', 'Все', 'Никакие'],
        correctAnswer: 1,
        explanation: 'Гласные буквы можно петь: А-А-А, О-О-О, У-У-У!',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ОКРУЖАЮЩИЙ МИР ====================
  {
    id: 'world1',
    title: 'Окружающий мир',
    icon: <Globe className="w-5 h-5" />,
    color: 'text-green-400',
    gradient: 'from-green-500 to-teal-500',
    description: 'Знакомство с миром вокруг нас',
    sections: [
      {
        id: 'world1-s1',
        title: 'Безопасность',
        description: 'Правила безопасного поведения',
        order: 1,
        topics: [
          {
            id: 'world1-s1-t1',
            title: 'Правила дорожного движения',
            description: 'Светофор и пешеходный переход',
            theory: `<h3>Правила дорожного движения</h3>
            <h4>🚦 Светофор:</h4>
            <ul>
              <li>🔴 Красный — стой!</li>
              <li>🟡 Жёлтый — жди!</li>
              <li>🟢 Зелёный — иди!</li>
            </ul>
            <h4>🚶 Пешеходный переход:</h4>
            <p>Переходи дорогу только по "зебре" — белым полоскам.</p>`,
            examples: ['Какой свет светофора разрешает идти?', 'Где нужно переходить дорогу?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            quiz: [
              {
                id: 'world1-s1-t1-q1',
                question: 'Какой цвет светофора разрешает переходить дорогу?',
                options: ['Красный', 'Жёлтый', 'Зелёный', 'Синий'],
                correctAnswer: 2,
                explanation: 'Зелёный цвет разрешает переходить дорогу!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'world1-s1-t1-q2',
                question: 'Как называется пешеходный переход?',
                options: ['Лошадь', 'Зебра', 'Жираф', 'Тигр'],
                correctAnswer: 1,
                explanation: 'Пешеходный переход называют "зеброй" из-за белых полосок!',
                difficulty: 'easy',
                points: 10
              }
            ],
            lessons: [
              {
                id: 'world1-s1-t1-l1',
                title: 'Светофор',
                content: `<div class="kid-lesson">
                  <h2>🚦 Светофор</h2>
                  <p>Светофор показывает, когда можно идти!</p>
                  <div class="activity">Какой цвет загорелся?</div>
                  <div class="emoji-practice">🔴 = стой! 🟡 = жди! 🟢 = иди!</div>
                  <div class="tip">💡 Зелёный — можно переходить!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'world1-s1-t1-l2',
                title: 'Пешеходный переход',
                content: `<div class="kid-lesson">
                  <h2>🚶 Пешеходный переход</h2>
                  <p>Дорогу переходи только по "зебре" — белым полоскам!</p>
                  <div class="activity">Где нужно переходить дорогу?</div>
                  <div class="emoji-practice">🦓 = зебра = пешеходный переход</div>
                  <div class="tip">💡 Сначала посмотри налево, потом направо!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'world1-s1-t1-l3',
                title: 'Безопасность на дороге',
                content: `<div class="kid-lesson">
                  <h2>⚠️ Будь осторожен!</h2>
                  <p>Никогда не выбегай на дорогу! Машины едут быстро!</p>
                  <div class="activity">Расскажи правило перехода дороги!</div>
                  <div class="emoji-practice">1. Подойди к зебре 2. Посмотри налево 3. Посмотри направо 4. Иди!</div>
                  <div class="tip">💡 Лучше подождать, чем спешить!</div>
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
        id: 'world1-s2',
        title: 'Природа',
        description: 'Растения и животные',
        order: 2,
        topics: [
          {
            id: 'world1-s2-t1',
            title: 'Растения',
            description: 'Деревья, кустарники, травы',
            theory: `<h3>Растения вокруг нас</h3>
            <h4>Деревья:</h4>
            <p>Имеют один толстый ствол: дуб, берёза, ель, сосна</p>
            <h4>Кустарники:</h4>
            <p>Имеют несколько тонких стволов: шиповник, смородина</p>
            <h4>Травы:</h4>
            <p>Мягкие стебли: ромашка, одуванчик, клевер</p>`,
            examples: ['Назови 3 дерева', 'Чем отличается дерево от кустарника?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'world1-s2-t1-l1',
                title: 'Деревья',
                content: `<div class="kid-lesson">
                  <h2>🌳 Деревья</h2>
                  <p>Деревья — это растения с одним толстым стволом!</p>
                  <div class="activity">Назови деревья, которые ты знаешь!</div>
                  <div class="emoji-practice">🌳🌲🌴🍎 — деревья</div>
                  <div class="tip">💡 У дерева один главный ствол!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'world1-s2-t1-l2',
                title: 'Кустарники',
                content: `<div class="kid-lesson">
                  <h2>🌿 Кустарники</h2>
                  <p>Кустарники — это растения с несколькими тонкими стволами!</p>
                  <div class="activity">Какие кустарники ты знаешь?</div>
                  <div class="emoji-practice">🫐 Смородина, 🌹 шиповник</div>
                  <div class="tip">💡 У кустарника много стволов из земли!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'world1-s2-t1-l3',
                title: 'Травы',
                content: `<div class="kid-lesson">
                  <h2>🌱 Травы</h2>
                  <p>Травы — это растения с мягкими стеблями!</p>
                  <div class="activity">Найди траву на улице!</div>
                  <div class="emoji-practice">🌼🌸🌷 — травянистые растения</div>
                  <div class="tip">💡 Травы низкие, у них мягкий стебель!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'world1-q1',
        question: 'Какой цвет светофора разрешает переходить дорогу?',
        options: ['Красный', 'Жёлтый', 'Зелёный', 'Синий'],
        correctAnswer: 2,
        explanation: 'Зелёный свет светофора разрешает движение пешеходам!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'world1-q2',
        question: 'Как называется пешеходный переход?',
        options: ['Лошадь', 'Зебра', 'Жираф', 'Тигр'],
        correctAnswer: 1,
        explanation: 'Пешеходный переход называют "зеброй" из-за белых полосок.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'world1-q3',
        question: 'У какого растения один толстый ствол?',
        options: ['Трава', 'Кустарник', 'Дерево', 'Цветок'],
        correctAnswer: 2,
        explanation: 'У дерева один толстый главный ствол, например, у дуба или берёзы.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ЛИТЕРАТУРНОЕ ЧТЕНИЕ ====================
  {
    id: 'literature1',
    title: 'Литературное чтение',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Русские народные сказки и детские рассказы',
    sections: [
      {
        id: 'lit1-s1',
        title: 'Русские народные сказки',
        description: 'Устное народное творчество',
        order: 1,
        topics: [
          {
            id: 'lit1-s1-t1',
            title: 'Сказки о животных',
            description: 'Колобок, Теремок, Репка',
            theory: `<h3>Русские народные сказки</h3>
            <p>Сказки — это удивительные истории, которые передавались из поколения в поколение.</p>
            <h4>Сказки о животных:</h4>
            <ul>
              <li><b>Колобок</b> — о круглом хлебце, который убежал от бабушки и дедушки</li>
              <li><b>Теремок</b> — о домике, где жили разные звери</li>
              <li><b>Репка</b> — о большой репе, которую тянули все вместе</li>
            </ul>`,
            examples: ['Перескажи сказку "Колобок"', 'Кто жил в теремке?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 25,
            lessons: [
              {
                id: 'lit1-s1-t1-l1',
                title: 'Сказка "Колобок"',
                content: `<div class="kid-lesson">
                  <h2>🍪 Колобок</h2>
                  <p>Жили-были дед да баба. Испекла баба колобок...</p>
                  <h3>Герои сказки:</h3>
                  <p>Колобок, заяц, волк, медведь, лиса</p>
                  <div class="activity">Перескажи сказку своими словами!</div>
                  <div class="tip">💡 Лиса была хитрой и съела колобка!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'lit1-s1-t1-l2',
                title: 'Сказка "Теремок"',
                content: `<div class="kid-lesson">
                  <h2>🏠 Теремок</h2>
                  <p>Стоит в поле теремок, он не низок, не высок...</p>
                  <h3>Кто жил в теремке:</h3>
                  <p>Мышка-норушка, Лягушка-квакушка, Зайчик-побегайчик, Лисичка-сестричка, Волчок-серый бочок, Медведь</p>
                  <div class="activity">Кто пришёл первым? А кто последним?</div>
                  <div class="tip">💡 Медведь сломал теремок!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 10
              },
              {
                id: 'lit1-s1-t1-l3',
                title: 'Сказка "Репка"',
                content: `<div class="kid-lesson">
                  <h2>🥕 Репка</h2>
                  <p>Посадил дед репку. Выросла репка большая-пребольшая...</p>
                  <h3>Кто тянул репку:</h3>
                  <p>Дед ← Бабка ← Внучка ← Жучка ← Кошка ← Мышка</p>
                  <div class="activity">Почему удалось вытянуть репку?</div>
                  <div class="tip">💡 Вместе — дружно! Дружба помогает!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 10
              }
            ]
          }
        ]
      },
      {
        id: 'lit1-s2',
        title: 'Стихи для детей',
        description: 'Агния Барто, Самуил Маршак',
        order: 2,
        topics: [
          {
            id: 'lit1-s2-t1',
            title: 'Стихи Агнии Барто',
            description: 'Игрушки',
            theory: `<h3>Агния Барто</h3>
            <p>Агния Барто — любимая детская поэтесса. Её стихи про игрушки знают все дети!</p>
            <h4>Известные стихи:</h4>
            <ul>
              <li>"Мишка"</li>
              <li>"Зайка"</li>
              <li>"Бычок"</li>
              <li>"Наша Таня"</li>
              <li>"Лошадка"</li>
            </ul>`,
            examples: ['Выучи стих "Мишка"', 'Расскажи стих "Зайка"'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'lit1-s2-t1-l1',
                title: 'Стих "Мишка"',
                content: `<div class="kid-lesson">
                  <h2>🧸 Мишка</h2>
                  <p>Уронили мишку на пол,</p>
                  <p>Оторвали мишке лапу.</p>
                  <p>Всё равно его не брошу —</p>
                  <p>Потому что он хороший.</p>
                  <div class="activity">Выучи стих наизусть!</div>
                  <div class="tip">💡 Это стих о любви к игрушкам!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'lit1-s2-t1-l2',
                title: 'Стих "Зайка"',
                content: `<div class="kid-lesson">
                  <h2>🐰 Зайка</h2>
                  <p>Зайку бросила хозяйка —</p>
                  <p>Под дождём остался зайка.</p>
                  <p>Со скамейки слезть не мог,</p>
                  <p>Весь до ниточки промок.</p>
                  <div class="activity">Почему зайка промок?</div>
                  <div class="tip">💡 Нужно заботиться о своих игрушках!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 10
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'lit1-q1',
        question: 'Кто съел Колобка в сказке?',
        options: ['Заяц', 'Волк', 'Медведь', 'Лиса'],
        correctAnswer: 3,
        explanation: 'Лиса была хитрой и обманом съела Колобка.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'lit1-q2',
        question: 'Кто помог вытянуть репку?',
        options: ['Только дед', 'Только бабка', 'Вся семья вместе', 'Никто'],
        correctAnswer: 2,
        explanation: 'Репку вытянули все вместе: дед, бабка, внучка, жучка, кошка и мышка.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ИНОСТРАННЫЙ ЯЗЫК ====================
  {
    id: 'english1',
    title: 'Иностранный язык',
    icon: <Languages className="w-5 h-5" />,
    color: 'text-cyan-400',
    gradient: 'from-cyan-500 to-blue-500',
    description: 'Английский язык для начинающих',
    sections: [
      {
        id: 'eng1-s1',
        title: 'Знакомство',
        description: 'Приветствие и имена',
        order: 1,
        topics: [
          {
            id: 'eng1-s1-t1',
            title: 'Приветствие',
            description: 'Hello! Hi! Good morning!',
            theory: `<h3>Greetings — Приветствия</h3>
            <h4>Основные приветствия:</h4>
            <ul>
              <li><b>Hello!</b> [хэло́у] — Здравствуй!</li>
              <li><b>Hi!</b> [хай] — Привет!</li>
              <li><b>Good morning!</b> [гуд мо́рнинг] — Доброе утро!</li>
              <li><b>Goodbye!</b> [гудба́й] — До свидания!</li>
            </ul>`,
            examples: ['Поздоровайся по-английски', 'Попрощайся'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            quiz: [
              {
                id: 'eng1-s1-t1-q1',
                question: 'Как поздороваться по-английски?',
                options: ['Goodbye', 'Hello', 'Morning', 'Red'],
                correctAnswer: 1,
                explanation: 'Hello! — это приветствие по-английски!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'eng1-s1-t1-q2',
                question: 'Как сказать "До свидания" по-английски?',
                options: ['Hello', 'Hi', 'Goodbye', 'Morning'],
                correctAnswer: 2,
                explanation: 'Goodbye! — это прощание по-английски!',
                difficulty: 'easy',
                points: 10
              }
            ],
            lessons: [
              {
                id: 'eng1-s1-t1-l1',
                title: 'Hello!',
                content: `<div class="kid-lesson">
                  <h2>👋 Hello!</h2>
                  <p>Hello! — Здравствуй!</p>
                  <p>Hi! — Привет!</p>
                  <div class="activity">Поздоровайся с другом на английском!</div>
                  <div class="emoji-practice">Hello! 👋 Hi! 👋</div>
                  <div class="tip">💡 Hello — вежливое приветствие, Hi — дружеское!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'eng1-s1-t1-l2',
                title: 'Good morning!',
                content: `<div class="kid-lesson">
                  <h2>🌅 Good morning!</h2>
                  <p>Good morning! — Доброе утро!</p>
                  <p>Goodbye! — До свидания!</p>
                  <p>Bye! — Пока!</p>
                  <div class="activity">Скажи "Доброе утро" учителю!</div>
                  <div class="tip">💡 Morning = утро!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              }
            ]
          },
          {
            id: 'eng1-s1-t2',
            title: 'Цвета',
            description: 'Colors',
            theory: `<h3>Colors — Цвета</h3>
            <h4>Основные цвета:</h4>
            <ul>
              <li><b>Red</b> [ред] — красный 🔴</li>
              <li><b>Blue</b> [блу] — синий 🔵</li>
              <li><b>Green</b> [грин] — зелёный 🟢</li>
              <li><b>Yellow</b> [йе́ллоу] — жёлтый 🟡</li>
              <li><b>White</b> [уа́йт] — белый ⚪</li>
              <li><b>Black</b> [блэк] — чёрный ⚫</li>
            </ul>`,
            examples: ['Назови цвета по-английски', 'Какой цвет "red"?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            quiz: [
              {
                id: 'eng1-s1-t2-q1',
                question: 'Какой цвет "red"?',
                options: ['Синий', 'Зелёный', 'Красный', 'Жёлтый'],
                correctAnswer: 2,
                explanation: 'Red — это красный цвет! 🔴',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'eng1-s1-t2-q2',
                question: 'Как будет "синий" по-английски?',
                options: ['Red', 'Blue', 'Green', 'Yellow'],
                correctAnswer: 1,
                explanation: 'Blue — это синий цвет! 🔵',
                difficulty: 'easy',
                points: 10
              }
            ],
            lessons: [
              {
                id: 'eng1-s1-t2-l1',
                title: 'Red, Blue, Green',
                content: `<div class="kid-lesson">
                  <h2>🎨 Colors</h2>
                  <p>🔴 Red — красный</p>
                  <p>🔵 Blue — синий</p>
                  <p>🟢 Green — зелёный</p>
                  <div class="activity">Покажи что-нибудь красное! Назови цвет!</div>
                  <div class="tip">💡 Red = красный!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'eng1-s1-t2-l2',
                title: 'Yellow, White, Black',
                content: `<div class="kid-lesson">
                  <h2>🎨 More Colors</h2>
                  <p>🟡 Yellow — жёлтый</p>
                  <p>⚪ White — белый</p>
                  <p>⚫ Black — чёрный</p>
                  <div class="activity">Назови все 6 цветов!</div>
                  <div class="tip">💡 Yellow как солнышко!</div>
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
        id: 'eng1-s2',
        title: 'Цифры',
        description: 'Numbers 1-10',
        order: 2,
        topics: [
          {
            id: 'eng1-s2-t1',
            title: 'Цифры 1-5',
            description: 'Numbers one to five',
            theory: `<h3>Numbers — Цифры</h3>
            <h4>Цифры от 1 до 5:</h4>
            <ul>
              <li><b>One</b> [уан] — один 1️⃣</li>
              <li><b>Two</b> [ту] — два 2️⃣</li>
              <li><b>Three</b> [сри] — три 3️⃣</li>
              <li><b>Four</b> [фо] — четыре 4️⃣</li>
              <li><b>Five</b> [файв] — пять 5️⃣</li>
            </ul>`,
            examples: ['Посчитай до 5 по-английски', 'Сколько будет "three"?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            quiz: [
              {
                id: 'eng1-s2-t1-q1',
                question: 'Как будет "три" по-английски?',
                options: ['One', 'Two', 'Three', 'Four'],
                correctAnswer: 2,
                explanation: 'Three — это три! 3️⃣',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'eng1-s2-t1-q2',
                question: 'Какое число идёт после three?',
                options: ['Two', 'Four', 'Five', 'One'],
                correctAnswer: 1,
                explanation: 'После three (3) идёт four (4)!',
                difficulty: 'easy',
                points: 10
              }
            ],
            lessons: [
              {
                id: 'eng1-s2-t1-l1',
                title: 'One, Two, Three',
                content: `<div class="kid-lesson">
                  <h2>🔢 Numbers</h2>
                  <p>1️⃣ One — один</p>
                  <p>2️⃣ Two — два</p>
                  <p>3️⃣ Three — три</p>
                  <div class="activity">Посчитай пальчики: One, two, three!</div>
                  <div class="tip">💡 Three похоже на "три"!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'eng1-s2-t1-l2',
                title: 'Four, Five',
                content: `<div class="kid-lesson">
                  <h2>🔢 More Numbers</h2>
                  <p>4️⃣ Four — четыре</p>
                  <p>5️⃣ Five — пять</p>
                  <div class="activity">Посчитай до пяти: One, two, three, four, five!</div>
                  <div class="tip">💡 Five — это пять пальцев!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              }
            ]
          },
          {
            id: 'eng1-s2-t2',
            title: 'Цифры 6-10',
            description: 'Numbers six to ten',
            theory: `<h3>Numbers — Цифры</h3>
            <h4>Цифры от 6 до 10:</h4>
            <ul>
              <li><b>Six</b> [сикс] — шесть 6️⃣</li>
              <li><b>Seven</b> [севн] — семь 7️⃣</li>
              <li><b>Eight</b> [эйт] — восемь 8️⃣</li>
              <li><b>Nine</b> [найн] — девять 9️⃣</li>
              <li><b>Ten</b> [тен] — десять 🔟</li>
            </ul>`,
            examples: ['Посчитай до 10 по-английски', 'Как будет "семь"?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            quiz: [
              {
                id: 'eng1-s2-t2-q1',
                question: 'Как будет "семь" по-английски?',
                options: ['Six', 'Seven', 'Eight', 'Nine'],
                correctAnswer: 1,
                explanation: 'Seven — это семь! 7️⃣',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'eng1-s2-t2-q2',
                question: 'Как будет "десять" по-английски?',
                options: ['Eight', 'Nine', 'Ten', 'Seven'],
                correctAnswer: 2,
                explanation: 'Ten — это десять! 🔟',
                difficulty: 'easy',
                points: 10
              }
            ],
            lessons: [
              {
                id: 'eng1-s2-t2-l1',
                title: 'Six, Seven, Eight',
                content: `<div class="kid-lesson">
                  <h2>🔢 Numbers 6-8</h2>
                  <p>6️⃣ Six — шесть</p>
                  <p>7️⃣ Seven — семь</p>
                  <p>8️⃣ Eight — восемь</p>
                  <div class="activity">Посчитай: One, two, three, four, five, six, seven, eight!</div>
                  <div class="tip">💡 Seven похоже на "семь"!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'eng1-s2-t2-l2',
                title: 'Nine, Ten',
                content: `<div class="kid-lesson">
                  <h2>🔢 Numbers 9-10</h2>
                  <p>9️⃣ Nine — девять</p>
                  <p>🔟 Ten — десять</p>
                  <div class="activity">Посчитай до десяти: One to ten!</div>
                  <div class="tip">💡 Ten — это все пальчики!</div>
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
        id: 'eng1-s3',
        title: 'Семья',
        description: 'Family members',
        order: 3,
        topics: [
          {
            id: 'eng1-s3-t1',
            title: 'Члены семьи',
            description: 'Family members',
            theory: `<h3>Family — Семья</h3>
            <h4>Члены семьи:</h4>
            <ul>
              <li><b>Mother</b> [ма́зэр] / <b>Mom</b> [мам] — мама 👩</li>
              <li><b>Father</b> [фа́зэр] / <b>Dad</b> [дэд] — папа 👨</li>
              <li><b>Sister</b> [си́стэр] — сестра 👧</li>
              <li><b>Brother</b> [бра́зэр] — брат 👦</li>
              <li><b>Grandmother</b> [грэндма́зэр] / <b>Grandma</b> — бабушка 👵</li>
              <li><b>Grandfather</b> [грэндфа́зэр] / <b>Grandpa</b> — дедушка 👴</li>
            </ul>`,
            examples: ['Назови членов семьи по-английски', 'Как будет "мама"?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            quiz: [
              {
                id: 'eng1-s3-t1-q1',
                question: 'Как будет "мама" по-английски?',
                options: ['Dad', 'Mom', 'Sister', 'Brother'],
                correctAnswer: 1,
                explanation: 'Mom (Mother) — это мама! 👩',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'eng1-s3-t1-q2',
                question: 'Как будет "бабушка" по-английски?',
                options: ['Grandma', 'Sister', 'Mom', 'Dad'],
                correctAnswer: 0,
                explanation: 'Grandma (Grandmother) — это бабушка! 👵',
                difficulty: 'easy',
                points: 10
              }
            ],
            lessons: [
              {
                id: 'eng1-s3-t1-l1',
                title: 'Mom and Dad',
                content: `<div class="kid-lesson">
                  <h2>👨‍👩‍👧‍👦 Family</h2>
                  <p>👩 Mother / Mom — мама</p>
                  <p>👨 Father / Dad — папа</p>
                  <div class="activity">Скажи "I love you, Mom!" — Я люблю тебя, мама!</div>
                  <div class="tip">💡 Mom и Dad — короткие формы!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'eng1-s3-t1-l2',
                title: 'Sister and Brother',
                content: `<div class="kid-lesson">
                  <h2>👧👦 Siblings</h2>
                  <p>👧 Sister — сестра</p>
                  <p>👦 Brother — брат</p>
                  <div class="activity">Есть ли у тебя sister или brother?</div>
                  <div class="tip">💡 Sister и Brother похожи на русские слова!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'eng1-s3-t1-l3',
                title: 'Grandparents',
                content: `<div class="kid-lesson">
                  <h2>👴👵 Grandparents</h2>
                  <p>👵 Grandmother / Grandma — бабушка</p>
                  <p>👴 Grandfather / Grandpa — дедушка</p>
                  <div class="activity">Назови бабушку и дедушку по-английски!</div>
                  <div class="tip">💡 Grand = большой/старший!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'eng1-q1',
        question: 'Как будет "Привет" по-английски?',
        options: ['Goodbye', 'Hello', 'Morning', 'Red'],
        correctAnswer: 1,
        explanation: 'Hello! — это приветствие по-английски.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'eng1-q2',
        question: 'Какой цвет "red"?',
        options: ['Синий', 'Зелёный', 'Красный', 'Жёлтый'],
        correctAnswer: 2,
        explanation: 'Red — это красный цвет.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'eng1-q3',
        question: 'Как будет "пять" по-английски?',
        options: ['Four', 'Five', 'Six', 'Three'],
        correctAnswer: 1,
        explanation: 'Five — это пять. Five fingers = пять пальцев!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'eng1-q4',
        question: 'Как будет "мама" по-английски?',
        options: ['Dad', 'Sister', 'Mom', 'Brother'],
        correctAnswer: 2,
        explanation: 'Mom (Mother) — это мама по-английски.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ИЗО ====================
  {
    id: 'art1',
    title: 'Изобразительное искусство',
    icon: <Palette className="w-5 h-5" />,
    color: 'text-pink-400',
    gradient: 'from-pink-500 to-rose-500',
    description: 'Рисование и творчество',
    sections: [
      {
        id: 'art1-s1',
        title: 'Основы рисования',
        description: 'Линии и фигуры',
        order: 1,
        topics: [
          {
            id: 'art1-s1-t1',
            title: 'Линии',
            description: 'Прямые, волнистые, ломаные',
            theory: `<h3>Виды линий</h3>
            <h4>Линии в рисовании:</h4>
            <ul>
              <li><b>Прямая линия</b> — ровная, как горизонт</li>
              <li><b>Волнистая линия</b> — как волны на море</li>
              <li><b>Ломаная линия</b> — как горы или зигзаги</li>
              <li><b>Спираль</b> — как улитка</li>
            </ul>`,
            examples: ['Нарисуй прямую линию', 'Нарисуй волнистую линию'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'art1-s1-t1-l1',
                title: 'Прямые линии',
                content: `<div class="kid-lesson">
                  <h2>➖ Прямые линии</h2>
                  <p>Прямая линия — ровная, без изгибов.</p>
                  <h3>Где встречаются:</h3>
                  <p>Горизонт, столб, карандаш, рельсы</p>
                  <div class="activity">Нарисуй прямую линию слева направо!</div>
                  <div class="tip">💡 Прямая линия — основа рисования!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'art1-s1-t1-l2',
                title: 'Волнистые линии',
                content: `<div class="kid-lesson">
                  <h2>〰️ Волнистые линии</h2>
                  <p>Волнистая линия — плавно изгибается.</p>
                  <h3>Где встречаются:</h3>
                  <p>Волны, облака, холмы</p>
                  <div class="activity">Нарисуй море волнистыми линиями!</div>
                  <div class="tip">💡 Волнистые линии создают движение!</div>
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
        id: 'art1-s2',
        title: 'Цвета в живописи',
        description: 'Тёплые и холодные цвета',
        order: 2,
        topics: [
          {
            id: 'art1-s2-t1',
            title: 'Тёплые и холодные цвета',
            description: 'Различаем температуру цвета',
            theory: `<h3>Температура цвета</h3>
            <h4>Тёплые цвета:</h4>
            <p>Красный, оранжевый, жёлтый — как солнце и огонь 🔥</p>
            <h4>Холодные цвета:</h4>
            <p>Синий, зелёный, фиолетовый — как лёд и вода ❄️</p>`,
            examples: ['Назови тёплые цвета', 'Какие цвета холодные?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'art1-s2-t1-l1',
                title: 'Тёплые цвета',
                content: `<div class="kid-lesson">
                  <h2>🔥 Тёплые цвета</h2>
                  <p>Красный, оранжевый, жёлтый</p>
                  <h3>Ассоциации:</h3>
                  <p>Солнце, огонь, лето, тепло</p>
                  <div class="activity">Найди тёплые цвета в комнате!</div>
                  <div class="tip">💡 Тёплые цвета греют!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'art1-s2-t1-l2',
                title: 'Холодные цвета',
                content: `<div class="kid-lesson">
                  <h2>❄️ Холодные цвета</h2>
                  <p>Синий, зелёный, фиолетовый</p>
                  <h3>Ассоциации:</h3>
                  <p>Лёд, вода, зима, небо</p>
                  <div class="activity">Нарисуй зиму холодными цветами!</div>
                  <div class="tip">💡 Холодные цвета освежают!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'art1-q1',
        question: 'Какой цвет тёплый?',
        options: ['Синий', 'Зелёный', 'Красный', 'Фиолетовый'],
        correctAnswer: 2,
        explanation: 'Красный — тёплый цвет, как огонь или солнце.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'art1-q2',
        question: 'Какая линия похожа на волны?',
        options: ['Прямая', 'Волнистая', 'Ломаная', 'Точечная'],
        correctAnswer: 1,
        explanation: 'Волнистая линия плавно изгибается, как волны на море.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'art1-q3',
        question: 'Какой цвет холодный?',
        options: ['Красный', 'Оранжевый', 'Синий', 'Жёлтый'],
        correctAnswer: 2,
        explanation: 'Синий — холодный цвет, как лёд или вода.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== МУЗЫКА ====================
  {
    id: 'music1',
    title: 'Музыка',
    icon: <Music className="w-5 h-5" />,
    color: 'text-violet-400',
    gradient: 'from-violet-500 to-purple-500',
    description: 'Мир звуков и мелодий',
    sections: [
      {
        id: 'music1-s1',
        title: 'Звуки вокруг нас',
        description: 'Высокие и низкие звуки',
        order: 1,
        topics: [
          {
            id: 'music1-s1-t1',
            title: 'Высокие и низкие звуки',
            description: 'Различаем звуки по высоте',
            theory: `<h3>Высота звука</h3>
            <h4>Высокие звуки:</h4>
            <p>Птички, колокольчик, свист — тонкие, звонкие</p>
            <h4>Низкие звуки:</h4>
            <p>Медведь, барабан, гром — густые, глубокие</p>
            <h4>В музыке:</h4>
            <p>Пианино: слева — низкие, справа — высокие</p>`,
            examples: ['Какой звук выше: птички или медведя?', 'Покажи высокий звук голосом'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'music1-s1-t1-l1',
                title: 'Высокие звуки',
                content: `<div class="kid-lesson">
                  <h2>🎵 Высокие звуки</h2>
                  <p>Высокие звуки — тонкие и звонкие!</p>
                  <h3>Примеры:</h3>
                  <p>🐦 Птичка, 🔔 колокольчик, свист</p>
                  <div class="activity">Спой высоким голосом, как птичка!</div>
                  <div class="tip">💡 Высокие звуки — как колокольчик!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'music1-s1-t1-l2',
                title: 'Низкие звуки',
                content: `<div class="kid-lesson">
                  <h2>🎵 Низкие звуки</h2>
                  <p>Низкие звуки — густые и глубокие!</p>
                  <h3>Примеры:</h3>
                  <p>🐻 Медведь, 🥁 барабан, гром</p>
                  <div class="activity">Порычи низким голосом, как медведь!</div>
                  <div class="tip">💡 Низкие звуки — как барабан!</div>
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
        id: 'music1-s2',
        title: 'Детские песни',
        description: 'Разучивание песен',
        order: 2,
        topics: [
          {
            id: 'music1-s2-t1',
            title: 'Песни о дружбе',
            description: 'Дружба в музыке',
            theory: `<h3>Песни о дружбе</h3>
            <p>Песни учат нас дружить, помогать друг другу, быть добрыми.</p>
            <h4>Известные песни:</h4>
            <ul>
              <li>"Дружба крепкая"</li>
              <li>"Если с другом вышел в путь"</li>
              <li>"Вместе весело шагать"</li>
            </ul>`,
            examples: ['Спой песню о дружбе', 'Разучи припев'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'music1-s2-t1-l1',
                title: 'Песня "Вместе весело шагать"',
                content: `<div class="kid-lesson">
                  <h2>🎶 Вместе весело шагать</h2>
                  <p>Вместе весело шагать по просторам,</p>
                  <p>По просторам, по просторам!</p>
                  <p>И, конечно, припевать лучше хором,</p>
                  <p>Лучше хором, лучше хором!</p>
                  <div class="activity">Разучи припев!</div>
                  <div class="tip">💡 Вместе петь веселее!</div>
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
        id: 'music1-q1',
        question: 'Какой звук выше: колокольчик или барабан?',
        options: ['Колокольчик', 'Барабан', 'Одинаковые', 'Зависит от удара'],
        correctAnswer: 0,
        explanation: 'Колокольчик издаёт высокий, звонкий звук, а барабан — низкий.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'music1-q2',
        question: 'Какой звук низкий?',
        options: ['Птичка', 'Колокольчик', 'Медведь', 'Свист'],
        correctAnswer: 2,
        explanation: 'Медведь рычит низким, густым голосом.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'music1-q3',
        question: 'О чём поётся в песне "Вместе весело шагать"?',
        options: ['О дожде', 'О дружбе', 'О школе', 'О животных'],
        correctAnswer: 1,
        explanation: 'Эта песня о дружбе и том, что вместе весело идти по жизни.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ТЕХНОЛОГИЯ ====================
  {
    id: 'tech1',
    title: 'Технология',
    icon: <Ruler className="w-5 h-5" />,
    color: 'text-amber-400',
    gradient: 'from-amber-500 to-orange-500',
    description: 'Труд и творчество',
    sections: [
      {
        id: 'tech1-s1',
        title: 'Работа с бумагой',
        description: 'Аппликация и конструирование',
        order: 1,
        topics: [
          {
            id: 'tech1-s1-t1',
            title: 'Аппликация',
            description: 'Создание картин из бумаги',
            theory: `<h3>Аппликация</h3>
            <p>Аппликация — это создание картин из наклеенных кусочков бумаги или ткани.</p>
            <h4>Материалы:</h4>
            <ul>
              <li>Цветная бумага</li>
              <li>Картон</li>
              <li>Клей</li>
              <li>Ножницы</li>
            </ul>
            <h4>Правила безопасности:</h4>
            <ul>
              <li>Ножницы передавать кольцами вперёд</li>
              <li>Не играть с ножницами</li>
              <li>Клеить аккуратно</li>
            </ul>`,
            examples: ['Сделай аппликацию "Цветок"', 'Какие правила безопасности?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 30,
            lessons: [
              {
                id: 'tech1-s1-t1-l1',
                title: 'Правила работы с ножницами',
                content: `<div class="kid-lesson">
                  <h2>✂️ Безопасность</h2>
                  <h3>Правила работы с ножницами:</h3>
                  <ul>
                    <li>Не играй с ножницами</li>
                    <li>Передавай кольцами вперёд</li>
                    <li>Режь от себя</li>
                    <li>Храни в чехле</li>
                  </ul>
                  <div class="tip">💡 Ножницы — не игрушка!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'tech1-s1-t1-l2',
                title: 'Аппликация "Цветок"',
                content: `<div class="kid-lesson">
                  <h2>🌸 Аппликация "Цветок"</h2>
                  <h3>Что нужно:</h3>
                  <p>Цветная бумага, клей, картон</p>
                  <h3>Порядок работы:</h3>
                  <ol>
                    <li>Вырежи лепестки</li>
                    <li>Вырежи серединку</li>
                    <li>Вырежи стебель и листья</li>
                    <li>Наклей на картон</li>
                  </ol>
                  <div class="tip">💡 Сделай красивый цветок!</div>
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
        id: 'tech1-s2',
        title: 'Лепка',
        description: 'Работа с пластилином',
        order: 2,
        topics: [
          {
            id: 'tech1-s2-t1',
            title: 'Основы лепки',
            description: 'Приёмы работы с пластилином',
            theory: `<h3>Лепка из пластилина</h3>
            <h4>Основные приёмы:</h4>
            <ul>
              <li><b>Раскатывание</b> — создание шариков и колбасок</li>
              <li><b>Сплющивание</b> — создание лепёшек</li>
              <li><b>Прищипывание</b> — создание деталей</li>
              <li><b>Сглаживание</b> — соединение частей</li>
            </ul>`,
            examples: ['Слепи шарик', 'Слепи гусеницу'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 25,
            lessons: [
              {
                id: 'tech1-s2-t1-l1',
                title: 'Шарик и колбаска',
                content: `<div class="kid-lesson">
                  <h2>🎨 Лепка</h2>
                  <h3>Как сделать шарик:</h3>
                  <p>Круговыми движениями раскатывай пластилин между ладонями</p>
                  <h3>Как сделать колбаску:</h3>
                  <p>Раскатывай пластилин движениями вперёд-назад</p>
                  <div class="activity">Слепи шарик и колбаску!</div>
                  <div class="tip">💡 Тёплый пластилин лепится лучше!</div>
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
        id: 'tech1-q1',
        question: 'Как правильно передавать ножницы?',
        options: ['Кольцами к себе', 'Кольцами вперёд', 'Как угодно', 'Лезвиями вперёд'],
        correctAnswer: 1,
        explanation: 'Ножницы нужно передавать кольцами вперёд, чтобы не поранить человека.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'tech1-q2',
        question: 'Что такое аппликация?',
        options: ['Рисунок красками', 'Картина из наклеенных кусочков', 'Лепка из пластилина', 'Рисунок карандашом'],
        correctAnswer: 1,
        explanation: 'Аппликация — это создание картин из наклеенных кусочков бумаги или ткани.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'tech1-q3',
        question: 'Как сделать шарик из пластилина?',
        options: ['Раскатать вперёд-назад', 'Круговыми движениями между ладонями', 'Сплющить', 'Растянуть'],
        correctAnswer: 1,
        explanation: 'Шарик делается круговыми движениями между ладонями.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ФИЗКУЛЬТУРА ====================
  {
    id: 'pe1',
    title: 'Физическая культура',
    icon: <Dumbbell className="w-5 h-5" />,
    color: 'text-orange-400',
    gradient: 'from-orange-500 to-red-500',
    description: 'Спорт и здоровье',
    sections: [
      {
        id: 'pe1-s1',
        title: 'Строевые упражнения',
        description: 'Построения и перестроения',
        order: 1,
        topics: [
          {
            id: 'pe1-s1-t1',
            title: 'Построение в шеренгу',
            description: 'Ровная линия',
            theory: `<h3>Построения</h3>
            <h4>Шеренга:</h4>
            <p>Ученики стоят в одну линию, плечом к плечу</p>
            <h4>Колонна:</h4>
            <p>Ученики стоят друг за другом в колонну</p>
            <h4>Команды:</h4>
            <ul>
              <li>"Становись!" — построиться</li>
              <li>"Равняйсь!" — выровняться</li>
              <li>"Смирно!" — стоять прямо</li>
              <li>"Вольно!" — расслабиться</li>
            </ul>`,
            examples: ['Встань в шеренгу', 'Выполни команду "Смирно!"'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'pe1-s1-t1-l1',
                title: 'Команды',
                content: `<div class="kid-lesson">
                  <h2>🏃 Строевые команды</h2>
                  <h3>Основные команды:</h3>
                  <p><b>Становись!</b> — построиться в шеренгу</p>
                  <p><b>Равняйсь!</b> — выровняться</p>
                  <p><b>Смирно!</b> — стоять прямо, пятки вместе</p>
                  <p><b>Вольно!</b> — можно расслабиться</p>
                  <div class="tip">💡 Слушай учителя внимательно!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              }
            ]
          }
        ]
      },
      {
        id: 'pe1-s2',
        title: 'Подвижные игры',
        description: 'Игры для развития',
        order: 2,
        topics: [
          {
            id: 'pe1-s2-t1',
            title: 'Игры с мячом',
            description: 'Передача и ловля мяча',
            theory: `<h3>Игры с мячом</h3>
            <h4>Правила ловли мяча:</h4>
            <ul>
              <li>Смотри на мяч</li>
              <li>Лови двумя руками</li>
              <li>Прижимай мяч к груди</li>
            </ul>
            <h4>Игры:</h4>
            <ul>
              <li>"Передай мяч"</li>
              <li>"Ловишки с мячом"</li>
              <li>"Школа мяча"</li>
            </ul>`,
            examples: ['Передай мяч соседу', 'Поиграй в "Ловишки"'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'pe1-s2-t1-l1',
                title: 'Ловля мяча',
                content: `<div class="kid-lesson">
                  <h2>🏀 Ловля мяча</h2>
                  <h3>Как ловить мяч:</h3>
                  <ol>
                    <li>Смотри на мяч</li>
                    <li>Вытяни руки навстречу</li>
                    <li>Лови двумя руками</li>
                    <li>Прижми к груди</li>
                  </ol>
                  <div class="tip">💡 Не бойся мяча!</div>
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
        id: 'pe1-q1',
        question: 'Что означает команда "Смирно!"?',
        options: ['Можно бегать', 'Стоять прямо', 'Садиться', 'Лежать'],
        correctAnswer: 1,
        explanation: 'По команде "Смирно!" нужно стоять прямо, пятки вместе, носки врозь.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe1-q2',
        question: 'Как правильно ловить мяч?',
        options: ['Одной рукой', 'Закрыть глаза', 'Двумя руками', 'Отвернуться'],
        correctAnswer: 2,
        explanation: 'Мяч нужно ловить двумя руками, смотреть на мяч и прижимать его к груди.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe1-q3',
        question: 'Что такое шеренга?',
        options: ['Круг', 'Линия плечом к плечу', 'Колонна друг за другом', 'Рассыпной строй'],
        correctAnswer: 1,
        explanation: 'Шеренга — это построение в одну линию, плечом к плечу.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ОБЖ ====================
  {
    id: 'safety1',
    title: 'ОБЖ',
    icon: <Shield className="w-5 h-5" />,
    color: 'text-red-500',
    gradient: 'from-red-600 to-orange-600',
    description: 'Основы безопасности',
    sections: [
      {
        id: 'safety1-s1',
        title: 'Безопасность дома',
        description: 'Правила поведения',
        order: 1,
        topics: [
          {
            id: 'safety1-s1-t1',
            title: 'Опасные предметы',
            description: 'Осторожно: электроприборы',
            theory: `<h3>Безопасность дома</h3>
            <h4>Опасные предметы:</h4>
            <ul>
              <li>⚠️ Розетки и провода</li>
              <li>⚠️ Острые предметы (ножи, ножницы)</li>
              <li>⚠️ Лекарства</li>
              <li>⚠️ Горячая вода и плита</li>
            </ul>
            <h4>Правила:</h4>
            <ul>
              <li>Не трогай розетки</li>
              <li>Не играй с огнём</li>
              <li>Не бери лекарства без взрослых</li>
            </ul>`,
            examples: ['Что делать, если запах газ?', 'Какие предметы опасны?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'safety1-s1-t1-l1',
                title: 'Электробезопасность',
                content: `<div class="kid-lesson">
                  <h2>⚡ Электричество</h2>
                  <h3>Правила:</h3>
                  <ul>
                    <li>Не трогай розетки</li>
                    <li>Не дёргай провода</li>
                    <li>Не касайся приборов мокрыми руками</li>
                  </ul>
                  <div class="activity">Покажи розетки в классе (не трогай!)</div>
                  <div class="tip">💡 Электричество опасно!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'safety1-s1-t1-l2',
                title: 'Огонь',
                content: `<div class="kid-lesson">
                  <h2>🔥 Огонь</h2>
                  <h3>Правила:</h3>
                  <ul>
                    <li>Не играй со спичками</li>
                    <li>Не включай плиту без взрослых</li>
                    <li>Если пожар — зови взрослых!</li>
                  </ul>
                  <div class="tip">💡 Огонь — не игра!</div>
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
        id: 'safety1-s2',
        title: 'Безопасность на улице',
        description: 'Правила поведения',
        order: 2,
        topics: [
          {
            id: 'safety1-s2-t1',
            title: 'Незнакомые люди',
            description: 'Не разговаривай с незнакомцами',
            theory: `<h3>Незнакомые люди</h3>
            <h4>Правила:</h4>
            <ul>
              <li>Не разговаривай с незнакомцами</li>
              <li>Не бери угощения от незнакомцев</li>
              <li>Не садись в машину к незнакомцу</li>
              <li>Если кто-то преследует — беги в людное место</li>
            </ul>
            <h4>Пароль:</h4>
            <p>Договорись с родителями о секретном слове</p>`,
            examples: ['Что делать, если незнакомец зовёт?', 'Можно ли брать конфеты у незнакомцев?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'safety1-s2-t1-l1',
                title: 'Правило "Свой-чужой"',
                content: `<div class="kid-lesson">
                  <h2>🚷 Незнакомцы</h2>
                  <h3>Правила:</h3>
                  <ul>
                    <li>Не разговаривай с незнакомцами</li>
                    <li>Не бери подарки</li>
                    <li>Не садись в машину</li>
                    <li>Не говори, что ты один дома</li>
                  </ul>
                  <div class="activity">Придумай секретное слово с родителями!</div>
                  <div class="tip">💡 Незнакомец — это не враг, но будь осторожен!</div>
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
        id: 'safety1-q1',
        question: 'Можно ли трогать розетки?',
        options: ['Да, можно', 'Нет, опасно', 'Только сухими руками', 'Иногда'],
        correctAnswer: 1,
        explanation: 'Розетки трогать нельзя — это опасно для жизни!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'safety1-q2',
        question: 'Что делать, если незнакомец предлагает конфету?',
        options: ['Взять', 'Отказаться', 'Спросить маму', 'Взять и съесть сразу'],
        correctAnswer: 1,
        explanation: 'Нельзя брать ничего у незнакомцев. Нужно вежливо отказаться.',
        difficulty: 'easy',
        points: 10
      }
    ]
  }
]
