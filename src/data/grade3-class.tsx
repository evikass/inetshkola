// Полные данные для 3 класса
// Иерархия: Предмет → Раздел → Тема → Урок

import { Calculator, Book, Globe, Palette, BookOpen, Music, Dumbbell, Shield, Ruler, Languages } from 'lucide-react'
import type { Subject } from './types'

// ==================== 3 КЛАСС ====================

export const grade3Subjects: Subject[] = [
  // ==================== МАТЕМАТИКА ====================
  {
    id: 'math3',
    title: 'Математика',
    icon: <Calculator className="w-5 h-5" />,
    color: 'text-blue-400',
    gradient: 'from-blue-500 to-indigo-500',
    description: 'Таблица умножения, деление, дроби',
    sections: [
      {
        id: 'math3-s1',
        title: 'Таблица умножения',
        description: 'Учим умножение от 2 до 9',
        order: 1,
        topics: [
          {
            id: 'math3-s1-t1',
            title: 'Умножение на 4, 5, 6',
            description: 'Продолжаем учить таблицу',
            theory: `<h3>Умножение на 4, 5, 6</h3>
            <h4>Таблица на 4:</h4>
            <ul>
              <li>4 × 1 = 4, 4 × 2 = 8, 4 × 3 = 12</li>
              <li>4 × 4 = 16, 4 × 5 = 20, 4 × 6 = 24</li>
              <li>4 × 7 = 28, 4 × 8 = 32, 4 × 9 = 36</li>
            </ul>
            <h4>Таблица на 5:</h4>
            <p>Все ответы заканчиваются на 0 или 5!</p>
            <h4>Таблица на 6:</h4>
            <p>6 × 6 = 36, 6 × 7 = 42, 6 × 8 = 48, 6 × 9 = 54</p>`,
            examples: ['Реши: 5 × 7', 'Сколько будет 6 × 8?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            quiz: [
              {
                id: 'math3-s1-t1-q1',
                question: 'Чему равно 5 × 7?',
                options: ['30', '35', '40', '45'],
                correctAnswer: 1,
                explanation: '5 × 7 = 35! Все ответы при умножении на 5 заканчиваются на 0 или 5!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'math3-s1-t1-q2',
                question: 'Чему равно 6 × 8?',
                options: ['42', '48', '54', '56'],
                correctAnswer: 1,
                explanation: '6 × 8 = 48! Шестью восемь — сорок восемь!',
                difficulty: 'medium',
                points: 15
              }
            ],
            lessons: [
              {
                id: 'math3-s1-t1-l1',
                title: 'Умножение на 4',
                content: `<div class="kid-lesson">
                  <h2>4️⃣ Таблица на 4</h2>
                  <p>Умножение на 4 — это как два раза умножить на 2!</p>
                  <div class="activity">Выучи: 4×4=16, 4×5=20, 4×6=24</div>
                  <div class="emoji-practice">4×7=28, 4×8=32, 4×9=36</div>
                  <div class="tip">💡 4×5 = 5×4 = 20!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'math3-s1-t1-l2',
                title: 'Умножение на 5',
                content: `<div class="kid-lesson">
                  <h2>5️⃣ Таблица на 5</h2>
                  <p>Все ответы заканчиваются на 0 или 5!</p>
                  <div class="activity">Найди закономерность: 5, 10, 15, 20...</div>
                  <div class="emoji-practice">5×1=5, 5×2=10, 5×3=15, 5×4=20, 5×5=25</div>
                  <div class="tip">💡 Чётные × 5 = ...0, нечётные × 5 = ...5</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'math3-s1-t1-l3',
                title: 'Умножение на 6',
                content: `<div class="kid-lesson">
                  <h2>6️⃣ Таблица на 6</h2>
                  <p>Запомни сложные случаи!</p>
                  <div class="activity">Выучи: 6×6=36, 6×7=42, 6×8=48, 6×9=54</div>
                  <div class="emoji-practice">Шестью шесть — тридцать шесть!</div>
                  <div class="tip">💡 6×7=42 — это 6×6+6 = 36+6 = 42</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ]
          },
          {
            id: 'math3-s1-t2',
            title: 'Умножение на 7, 8, 9',
            description: 'Завершаем таблицу',
            theory: `<h3>Умножение на 7, 8, 9</h3>
            <h4>Таблица на 7:</h4>
            <p>7 × 7 = 49, 7 × 8 = 56, 7 × 9 = 63</p>
            <h4>Таблица на 8:</h4>
            <p>8 × 8 = 64, 8 × 9 = 72</p>
            <h4>Таблица на 9:</h4>
            <p>9 × 9 = 81. Есть хитрость: сумма цифр ответа = 9!</p>
            <ul>
              <li>9 × 3 = 27 → 2 + 7 = 9</li>
              <li>9 × 7 = 63 → 6 + 3 = 9</li>
            </ul>`,
            examples: ['Реши: 7 × 8', 'Сколько будет 9 × 6?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            quiz: [
              {
                id: 'math3-s1-t2-q1',
                question: 'Чему равно 7 × 8?',
                options: ['54', '56', '58', '63'],
                correctAnswer: 1,
                explanation: '7 × 8 = 56! Запомни: 5, 6, 7, 8 — цифры по порядку!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'math3-s1-t2-q2',
                question: 'Чему равно 9 × 6?',
                options: ['45', '54', '63', '56'],
                correctAnswer: 1,
                explanation: '9 × 6 = 54! Проверка: 5 + 4 = 9!',
                difficulty: 'medium',
                points: 15
              }
            ],
            lessons: [
              {
                id: 'math3-s1-t2-l1',
                title: 'Умножение на 7',
                content: `<div class="kid-lesson">
                  <h2>7️⃣ Таблица на 7</h2>
                  <p>Самая сложная часть таблицы!</p>
                  <div class="activity">Выучи: 7×7=49, 7×8=56, 7×9=63</div>
                  <div class="emoji-practice">Семью семь — сорок девять!</div>
                  <div class="tip">💡 7×8 = 56 (5, 6, 7, 8 — по порядку!)</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'math3-s1-t2-l2',
                title: 'Умножение на 8',
                content: `<div class="kid-lesson">
                  <h2>8️⃣ Таблица на 8</h2>
                  <p>Умножение на 8 — это как 2×2×2!</p>
                  <div class="activity">Выучи: 8×8=64, 8×9=72</div>
                  <div class="emoji-practice">Восемью восемь — шестьдесят четыре!</div>
                  <div class="tip">💡 8×8 = 64 — запомни это!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'math3-s1-t2-l3',
                title: 'Умножение на 9',
                content: `<div class="kid-lesson">
                  <h2>9️⃣ Таблица на 9</h2>
                  <p>Есть хитрость! Сумма цифр ответа = 9!</p>
                  <div class="activity">Проверь: 9×4=36, 3+6=9!</div>
                  <div class="emoji-practice">9×1=9, 9×2=18, 9×3=27, 9×4=36, 9×5=45</div>
                  <div class="tip">💡 Пальчиковый метод: загни 4-й палец — 3 и 6!</div>
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
        id: 'math3-s2',
        title: 'Деление',
        description: 'Обратная операция умножения',
        order: 2,
        topics: [
          {
            id: 'math3-s2-t1',
            title: 'Что такое деление',
            description: 'Делим на равные части',
            theory: `<h3>Деление</h3>
            <p>Деление — это обратная операция умножения.</p>
            <h4>Пример:</h4>
            <p>12 ÷ 3 = 4, потому что 4 × 3 = 12</p>
            <h4>Компоненты деления:</h4>
            <ul>
              <li>Делимое (то, что делим) — 12</li>
              <li>Делитель (на что делим) — 3</li>
              <li>Частное (результат) — 4</li>
            </ul>`,
            examples: ['Реши: 15 ÷ 3', 'Найди частное: 24 ÷ 6'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            quiz: [
              {
                id: 'math3-s2-t1-q1',
                question: 'Чему равно 15 ÷ 3?',
                options: ['3', '5', '7', '12'],
                correctAnswer: 1,
                explanation: '15 ÷ 3 = 5, потому что 5 × 3 = 15!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'math3-s2-t1-q2',
                question: 'Чему равно 24 ÷ 6?',
                options: ['3', '4', '5', '6'],
                correctAnswer: 1,
                explanation: '24 ÷ 6 = 4, потому что 4 × 6 = 24!',
                difficulty: 'medium',
                points: 15
              }
            ],
            lessons: [
              {
                id: 'math3-s2-t1-l1',
                title: 'Деление на равные части',
                content: `<div class="kid-lesson">
                  <h2>➗ Деление</h2>
                  <p>Деление — это когда что-то делим поровну!</p>
                  <div class="activity">Раздели 12 конфет на 3 детей поровну!</div>
                  <div class="emoji-practice">12 ÷ 3 = 4 (каждому по 4)</div>
                  <div class="tip">💡 Деление — обратное умножению!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'math3-s2-t1-l2',
                title: 'Связь с умножением',
                content: `<div class="kid-lesson">
                  <h2>🔄 Связь умножения и деления</h2>
                  <p>Если 6 × 4 = 24, то 24 ÷ 4 = 6 и 24 ÷ 6 = 4!</p>
                  <div class="activity">Составь примеры: 7 × 3 = 21 → ?</div>
                  <div class="emoji-practice">21 ÷ 3 = 7, 21 ÷ 7 = 3</div>
                  <div class="tip">💡 Используй таблицу умножения!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'math3-s2-t1-l3',
                title: 'Деление с остатком',
                content: `<div class="kid-lesson">
                  <h2>🔢 Деление с остатком</h2>
                  <p>Иногда не делится нацело! Остаток должен быть меньше делителя!</p>
                  <div class="activity">Раздели 10 конфет на 3 детей!</div>
                  <div class="emoji-practice">10 ÷ 3 = 3 (остаток 1)</div>
                  <div class="tip">💡 10 = 3 × 3 + 1</div>
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
        id: 'math3-s3',
        title: 'Площадь и периметр',
        description: 'Геометрические величины',
        order: 3,
        topics: [
          {
            id: 'math3-s3-t1',
            title: 'Периметр',
            description: 'Сумма длин сторон',
            theory: `<h3>Периметр</h3>
            <p>Периметр — это сумма длин всех сторон фигуры.</p>
            <h4>Периметр прямоугольника:</h4>
            <p>P = (a + b) × 2 или P = a + a + b + b</p>
            <h4>Периметр квадрата:</h4>
            <p>P = a × 4 (все стороны равны)</p>
            <h4>Пример:</h4>
            <p>Прямоугольник со сторонами 5 см и 3 см: P = (5 + 3) × 2 = 16 см</p>`,
            examples: ['Найди периметр квадрата со стороной 4 см', 'Периметр прямоугольника 6×2?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            quiz: [
              {
                id: 'math3-s3-t1-q1',
                question: 'Чему равен периметр квадрата со стороной 5 см?',
                options: ['10 см', '15 см', '20 см', '25 см'],
                correctAnswer: 2,
                explanation: 'P = 5 × 4 = 20 см! У квадрата 4 равные стороны.',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'math3-s3-t1-q2',
                question: 'Периметр прямоугольника со сторонами 6 см и 2 см?',
                options: ['8 см', '12 см', '16 см', '24 см'],
                correctAnswer: 2,
                explanation: 'P = (6 + 2) × 2 = 16 см!',
                difficulty: 'medium',
                points: 15
              }
            ],
            lessons: [
              {
                id: 'math3-s3-t1-l1',
                title: 'Что такое периметр',
                content: `<div class="kid-lesson">
                  <h2>📏 Периметр</h2>
                  <p>Периметр — это сумма длин всех сторон!</p>
                  <div class="activity">Найди периметр комнаты!</div>
                  <div class="emoji-practice">⬜ P = все стороны сложить!</div>
                  <div class="tip">💡 Периметр = "обойти вокруг"!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'math3-s3-t1-l2',
                title: 'Периметр прямоугольника',
                content: `<div class="kid-lesson">
                  <h2>⬜ Периметр прямоугольника</h2>
                  <p>P = (длина + ширина) × 2</p>
                  <div class="activity">Прямоугольник 5×3: P = ?</div>
                  <div class="emoji-practice">P = (5 + 3) × 2 = 16 см</div>
                  <div class="tip">💡 Или: 5 + 5 + 3 + 3 = 16</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'math3-s3-t1-l3',
                title: 'Периметр квадрата',
                content: `<div class="kid-lesson">
                  <h2>⬜ Периметр квадрата</h2>
                  <p>У квадрата все стороны равны!</p>
                  <div class="activity">Квадрат со стороной 4: P = ?</div>
                  <div class="emoji-practice">P = 4 × 4 = 16 см</div>
                  <div class="tip">💡 Квадрат: P = сторона × 4</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ]
          },
          {
            id: 'math3-s3-t2',
            title: 'Площадь',
            description: 'Сколько места занимает',
            theory: `<h3>Площадь</h3>
            <p>Площадь — это величина, которая показывает, сколько места занимает фигура.</p>
            <h4>Площадь прямоугольника:</h4>
            <p>S = a × b (длина × ширина)</p>
            <h4>Площадь квадрата:</h4>
            <p>S = a × a = a²</p>
            <h4>Единицы площади:</h4>
            <p>мм², см², дм², м²</p>`,
            examples: ['Найди площадь прямоугольника 5×3', 'S квадрата со стороной 4?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            quiz: [
              {
                id: 'math3-s3-t2-q1',
                question: 'Чему равна площадь прямоугольника со сторонами 6 см и 4 см?',
                options: ['10 см²', '20 см²', '24 см²', '48 см²'],
                correctAnswer: 2,
                explanation: 'S = 6 × 4 = 24 см²!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'math3-s3-t2-q2',
                question: 'Чему равна площадь квадрата со стороной 5 см?',
                options: ['10 см²', '15 см²', '20 см²', '25 см²'],
                correctAnswer: 3,
                explanation: 'S = 5 × 5 = 25 см²!',
                difficulty: 'medium',
                points: 15
              }
            ],
            lessons: [
              {
                id: 'math3-s3-t2-l1',
                title: 'Что такое площадь',
                content: `<div class="kid-lesson">
                  <h2>📐 Площадь</h2>
                  <p>Площадь — это сколько места занимает фигура на плоскости!</p>
                  <div class="activity">Сравни: что больше — тетрадь или книга?</div>
                  <div class="emoji-practice">⬜ больше чем 🟨 — значит площадь больше!</div>
                  <div class="tip">💡 Площадь измеряют в квадратных единицах!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'math3-s3-t2-l2',
                title: 'Площадь прямоугольника',
                content: `<div class="kid-lesson">
                  <h2>⬜ Площадь прямоугольника</h2>
                  <p>S = длина × ширина</p>
                  <div class="activity">Прямоугольник 6×4: S = ?</div>
                  <div class="emoji-practice">S = 6 × 4 = 24 см²</div>
                  <div class="tip">💡 Площадь всегда в квадратных единицах!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'math3-s3-t2-l3',
                title: 'Площадь квадрата',
                content: `<div class="kid-lesson">
                  <h2>⬜ Площадь квадрата</h2>
                  <p>S = сторона × сторона = a²</p>
                  <div class="activity">Квадрат со стороной 5: S = ?</div>
                  <div class="emoji-practice">S = 5 × 5 = 25 см²</div>
                  <div class="tip">💡 5² = "пять в квадрате" = 25</div>
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
        id: 'math3-q1',
        question: 'Чему равно 7 × 8?',
        options: ['54', '56', '58', '63'],
        correctAnswer: 1,
        explanation: '7 × 8 = 56. Запомни: 5, 6, 7, 8 — цифры по порядку!',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math3-q2',
        question: 'Чему равно 63 ÷ 9?',
        options: ['6', '7', '8', '9'],
        correctAnswer: 1,
        explanation: '63 ÷ 9 = 7, потому что 7 × 9 = 63.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math3-q3',
        question: 'Периметр квадрата со стороной 5 см равен:',
        options: ['10 см', '15 см', '20 см', '25 см'],
        correctAnswer: 2,
        explanation: 'P = 5 × 4 = 20 см. У квадрата 4 равные стороны.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math3-q4',
        question: 'Чему равно 8 × 9?',
        options: ['63', '72', '81', '64'],
        correctAnswer: 1,
        explanation: '8 × 9 = 72! Восемью девять — семьдесят два.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math3-q5',
        question: 'Чему равно 6 × 7?',
        options: ['42', '35', '48', '49'],
        correctAnswer: 0,
        explanation: '6 × 7 = 42! Шестью семь — сорок два.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math3-q6',
        question: 'Площадь прямоугольника со сторонами 4 см и 3 см равна:',
        options: ['7 см²', '12 см²', '14 см²', '10 см²'],
        correctAnswer: 1,
        explanation: 'S = 4 × 3 = 12 см²! Площадь = длина × ширина.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math3-q7',
        question: 'Чему равно 81 ÷ 9?',
        options: ['7', '8', '9', '10'],
        correctAnswer: 2,
        explanation: '81 ÷ 9 = 9, потому что 9 × 9 = 81!',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math3-q8',
        question: 'Чему равно 9 × 6?',
        options: ['45', '54', '63', '56'],
        correctAnswer: 1,
        explanation: '9 × 6 = 54! Девятью шесть — пятьдесят четыре.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== РУССКИЙ ЯЗЫК ====================
  {
    id: 'russian3',
    title: 'Русский язык',
    icon: <Book className="w-5 h-5" />,
    color: 'text-red-400',
    gradient: 'from-red-500 to-orange-500',
    description: 'Части речи, падежи, склонения',
    sections: [
      {
        id: 'rus3-s1',
        title: 'Части речи',
        description: 'Имя существительное, прилагательное, глагол',
        order: 1,
        topics: [
          {
            id: 'rus3-s1-t1',
            title: 'Имя существительное',
            description: 'Слова-предметы',
            theory: `<h3>Имя существительное</h3>
            <p>Имя существительное — это часть речи, обозначающая предмет.</p>
            <h4>Признаки существительного:</h4>
            <ul>
              <li>Обозначает предмет (кто? что?)</li>
              <li>Имеет род (мужской, женский, средний)</li>
              <li>Изменяется по числам и падежам</li>
            </ul>
            <h4>Примеры:</h4>
            <p>стол, книга, окно, мама, кот</p>`,
            examples: ['Определи существительные в тексте', 'Какой род у слова "окно"?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            quiz: [
              {
                id: 'rus3-s1-t1-q1',
                question: 'На какие вопросы отвечает существительное?',
                options: ['Что делать? Какой?', 'Кто? Что?', 'Как? Где?', 'Чей? Какая?'],
                correctAnswer: 1,
                explanation: 'Существительное отвечает на вопросы "Кто?" и "Что?"!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'rus3-s1-t1-q2',
                question: 'Какой род у слова "солнце"?',
                options: ['Мужской', 'Женский', 'Средний', 'Множественный'],
                correctAnswer: 2,
                explanation: 'Солнце — средний род (оно, моё). Проверяем: моё солнце!',
                difficulty: 'medium',
                points: 15
              }
            ],
            lessons: [
              {
                id: 'rus3-s1-t1-l1',
                title: 'Что такое существительное?',
                content: `<div class="kid-lesson">
                  <h2>📝 Существительное</h2>
                  <p>Существительное — это слова-предметы! Отвечают на "кто?" или "что?"</p>
                  <div class="activity">Назови 5 существительных!</div>
                  <div class="emoji-practice">🏠 дом, 🐱 кот, 📚 книга — существительные</div>
                  <div class="tip">💡 Кто? Что? — вопросы существительного!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'rus3-s1-t1-l2',
                title: 'Род существительных',
                content: `<div class="kid-lesson">
                  <h2>👤 Род существительных</h2>
                  <p>Мужской род (он, мой): стол, кот, папа</p>
                  <p>Женский род (она, моя): книга, мама, сестра</p>
                  <p>Средний род (оно, моё): окно, солнце, море</p>
                  <div class="activity">Определи род:铅笔, солнце, мама!</div>
                  <div class="emoji-practice">он мой — м.р., она моя — ж.р., оно моё — ср.р.</div>
                  <div class="tip">💡 Подставь "мой/моя/моё"!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'rus3-s1-t1-l3',
                title: 'Число существительных',
                content: `<div class="kid-lesson">
                  <h2>🔢 Число существительных</h2>
                  <p>Единственное: стол, кот, книга</p>
                  <p>Множественное: столы, коты, книги</p>
                  <div class="activity">Поставь во множественное: дом, окно!</div>
                  <div class="emoji-practice">дом → домА, окнО → окнА</div>
                  <div class="tip">💡 Один — ед.ч., много — мн.ч.!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ]
          },
          {
            id: 'rus3-s1-t2',
            title: 'Имя прилагательное',
            description: 'Слова-признаки',
            theory: `<h3>Имя прилагательное</h3>
            <p>Имя прилагательное — это часть речи, обозначающая признак предмета.</p>
            <h4>Признаки прилагательного:</h4>
            <ul>
              <li>Обозначает признак (какой? чей?)</li>
              <li>Изменяется по родам, числам и падежам</li>
              <li>Связано с существительным</li>
            </ul>
            <h4>Примеры:</h4>
            <p>красивый, большой, деревянный, мамин</p>`,
            examples: ['Найди прилагательные', 'Подбери прилагательное к слову "кот"'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 20,
            quiz: [
              {
                id: 'rus3-s1-t2-q1',
                question: 'На какие вопросы отвечает прилагательное?',
                options: ['Кто? Что?', 'Что делать?', 'Какой? Какая?', 'Где? Куда?'],
                correctAnswer: 2,
                explanation: 'Прилагательное отвечает на вопросы "Какой? Какая? Какое?"!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'rus3-s1-t2-q2',
                question: 'Какое окончание у прилагательного женского рода?',
                options: ['-ый, -ий', '-ая, -яя', '-ое, -ее', '-ые, -ие'],
                correctAnswer: 1,
                explanation: 'Прилагательные женского рода имеют окончания -ая, -яя (красивая, синяя)!',
                difficulty: 'medium',
                points: 15
              }
            ],
            lessons: [
              {
                id: 'rus3-s1-t2-l1',
                title: 'Что такое прилагательное?',
                content: `<div class="kid-lesson">
                  <h2>🎨 Прилагательное</h2>
                  <p>Прилагательное — это слова-признаки! Отвечают на "какой?" "какая?"</p>
                  <div class="activity">Опиши кота! Какой он?</div>
                  <div class="emoji-practice">большой, пушистый, рыжий — прилагательные</div>
                  <div class="tip">💡 Прилагательное красит существительное!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'rus3-s1-t2-l2',
                title: 'Род прилагательных',
                content: `<div class="kid-lesson">
                  <h2>👤 Род прилагательных</h2>
                  <p>Прилагательное согласуется с существительным в роде!</p>
                  <div class="activity">Красив... стол, красив... книга, красив... окно!</div>
                  <div class="emoji-practice">красивЫЙ (м.р.), красивАЯ (ж.р.), красивОЕ (ср.р.)</div>
                  <div class="tip">💡 Окончание зависит от рода существительного!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              }
            ]
          },
          {
            id: 'rus3-s1-t3',
            title: 'Глагол',
            description: 'Слова-действия',
            theory: `<h3>Глагол</h3>
            <p>Глагол — это часть речи, обозначающая действие предмета.</p>
            <h4>Признаки глагола:</h4>
            <ul>
              <li>Обозначает действие (что делать? что сделать?)</li>
              <li>Изменяется по временам (прошедшее, настоящее, будущее)</li>
              <li>Изменяется по числам и лицам</li>
            </ul>
            <h4>Примеры:</h4>
            <p>бежать, писать, учиться, прочитать</p>`,
            examples: ['Найди глаголы в тексте', 'Определи время глагола'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 20,
            lessons: [
              {
                id: 'rus3-s1-t3-l1',
                title: 'Что такое глагол?',
                content: `<div class="kid-lesson">
                  <h2>🏃 Глагол</h2>
                  <p>Глагол — это слова-действия! Отвечают на "что делать?" "что сделать?"</p>
                  <div class="activity">Что делает кот? Назови 3 действия!</div>
                  <div class="emoji-practice">бегать, спать, играть — глаголы</div>
                  <div class="tip">💡 Глагол показывает действие!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'rus3-s1-t3-l2',
                title: 'Время глагола',
                content: `<div class="kid-lesson">
                  <h2>⏰ Время глагола</h2>
                  <p>Прошедшее: что делал? — играл, читал</p>
                  <p>Настоящее: что делает? — играет, читает</p>
                  <p>Будущее: что будет делать? — будет играть</p>
                  <div class="activity">Определи время: "Я учился"</div>
                  <div class="emoji-practice">учился — прошедшее время!</div>
                  <div class="tip">💡 Было, есть, будет — три времени!</div>
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
        id: 'rus3-s2',
        title: 'Состав слова',
        description: 'Морфемный разбор',
        order: 2,
        topics: [
          {
            id: 'rus3-s2-t1',
            title: 'Приставка и суффикс',
            description: 'Части слова',
            theory: `<h3>Состав слова</h3>
            <h4>Приставка:</h4>
            <p>Часть слова перед корнем. Образует новые слова: при-ехать, у-ехать, вы-ехать</p>
            <h4>Суффикс:</h4>
            <p>Часть слова после корня. Образует новые слова: дом-ик, стол-н-ый</p>
            <h4>Окончание:</h4>
            <p>Изменяемая часть слова: стол-а, стол-у, стол-ом</p>`,
            examples: ['Разбери по составу: подснежник', 'Найди приставку в слове "прочитать"'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'rus3-s2-t1-l1',
                title: 'Приставка',
                content: `<div class="kid-lesson">
                  <h2>▶️ Приставка</h2>
                  <p>Приставка стоит перед корнем и образует новые слова!</p>
                  <div class="activity">Какие приставки в словах: приехать, написать?</div>
                  <div class="emoji-practice">ПРИ-ехать (при-), НА-писать (на-)</div>
                  <div class="tip">💡 Приставки: по-, при-, вы-, у-, за-, на-</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'rus3-s2-t1-l2',
                title: 'Суффикс',
                content: `<div class="kid-lesson">
                  <h2>◀️ Суффикс</h2>
                  <p>Суффикс стоит после корня и образует новые слова!</p>
                  <div class="activity">Какие суффиксы: домик, котёнок?</div>
                  <div class="emoji-practice">дом-ИК (-ик), кот-ЁНОК (-ёнок)</div>
                  <div class="tip">💡 Суффиксы: -ик, -ок, -н-, -ск-, -ник</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'rus3-s2-t1-l3',
                title: 'Разбор слова по составу',
                content: `<div class="kid-lesson">
                  <h2>🔍 Разбор по составу</h2>
                  <p>Порядок: окончание → корень → приставка → суффикс</p>
                  <div class="activity">Разбери: подснежник!</div>
                  <div class="emoji-practice">под-снеж-ник (под- приставка, -снеж- корень, -ник суффикс)</div>
                  <div class="tip">💡 Сначала найди корень (родственные слова)!</div>
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
        id: 'rus3-q1',
        question: 'Какая часть речи обозначает действие?',
        options: ['Существительное', 'Прилагательное', 'Глагол', 'Наречие'],
        correctAnswer: 2,
        explanation: 'Глагол — это часть речи, которая обозначает действие и отвечает на вопросы "что делать?" "что сделать?".',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus3-q2',
        question: 'Какой род у слова "солнце"?',
        options: ['Мужской', 'Женский', 'Средний', 'Множественный'],
        correctAnswer: 2,
        explanation: 'Солнце — средний род (оно, моё). Проверяем: моё солнце.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus3-q3',
        question: 'Где приставка в слове "перелетел"?',
        options: ['пере-', '-лете-', '-л-', 'нет приставки'],
        correctAnswer: 0,
        explanation: 'Пере- — это приставка. Корень -лет-, суффикс -ел.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus3-q4',
        question: 'Какой род у слова "книга"?',
        options: ['Мужской', 'Женский', 'Средний', 'Множественный'],
        correctAnswer: 1,
        explanation: 'Книга — женский род (она, моя). Проверяем: моя книга.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus3-q5',
        question: 'На какой вопрос отвечает прилагательное?',
        options: ['Кто? Что?', 'Что делать?', 'Какой? Какая?', 'Где? Куда?'],
        correctAnswer: 2,
        explanation: 'Прилагательное отвечает на вопросы "какой?", "какая?", "какое?", "какие?".',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus3-q6',
        question: 'Какой суффикс в слове "домик"?',
        options: ['-ом-', '-ик', '-ми-', 'нет суффикса'],
        correctAnswer: 1,
        explanation: '-ик — это суффикс. Корень -дом-, суффикс -ик.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus3-q7',
        question: 'Какое время у глагола "читал"?',
        options: ['Настоящее', 'Прошедшее', 'Будущее', 'Не имеет времени'],
        correctAnswer: 1,
        explanation: 'Читал — прошедшее время. Окончание -л указывает на прошедшее время.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus3-q8',
        question: 'Найди существительное:',
        options: ['Бежать', 'Красивый', 'Стол', 'Быстро'],
        correctAnswer: 2,
        explanation: 'Стол — существительное (кто? что?), бежать — глагол, красивый — прилагательное, быстро — наречие.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ОКРУЖАЮЩИЙ МИР ====================
  {
    id: 'world3',
    title: 'Окружающий мир',
    icon: <Globe className="w-5 h-5" />,
    color: 'text-green-400',
    gradient: 'from-green-500 to-teal-500',
    description: 'Природные зоны, организмы, экология',
    sections: [
      {
        id: 'world3-s1',
        title: 'Природные зоны России',
        description: 'Разнообразие природы',
        order: 1,
        topics: [
          {
            id: 'world3-s1-t1',
            title: 'Лес, степь, пустыня',
            description: 'Основные природные зоны',
            theory: `<h3>Природные зоны России</h3>
            <h4>🌲 Лес:</h4>
            <p>Много деревьев, умеренный климат. Животные: лиса, медведь, заяц, белка.</p>
            <h4>🌾 Степь:</h4>
            <p>Равнина с травой, без деревьев. Животные: суслик, сурок, степной орёл.</p>
            <h4>🏜️ Пустыня:</h4>
            <p>Мало воды, жарко днём, холодно ночью. Животные: верблюд, ящерица, змея.</p>`,
            examples: ['Какая природная зона у нас?', 'Чем отличается лес от степи?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'world3-s1-t1-l1',
                title: 'Лесная зона',
                content: `<div class="kid-lesson">
                  <h2>🌲 Лес</h2>
                  <p>Лес — это природная зона с множеством деревьев!</p>
                  <div class="activity">Какие животные живут в лесу?</div>
                  <div class="emoji-practice">🦊 лиса, 🐻 медведь, 🐿️ белка, 🦌 олень</div>
                  <div class="tip">💡 Леса бывают хвойные, лиственные и смешанные!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'world3-s1-t1-l2',
                title: 'Степная зона',
                content: `<div class="kid-lesson">
                  <h2>🌾 Степь</h2>
                  <p>Степь — это равнина с травой, почти без деревьев!</p>
                  <div class="activity">Почему в степи нет лесов?</div>
                  <div class="emoji-practice">Мало дождей, сухо — деревья не растут!</div>
                  <div class="tip">💡 Степь — это "море травы"!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'world3-s1-t1-l3',
                title: 'Пустыня',
                content: `<div class="kid-lesson">
                  <h2>🏜️ Пустыня</h2>
                  <p>Пустыня — это место с очень малым количеством воды!</p>
                  <div class="activity">Как животные приспособились к пустыне?</div>
                  <div class="emoji-practice">🐪 Верблюд = корабль пустыни! Ящерицы прячутся в песок!</div>
                  <div class="tip">💡 Днём жарко, ночью холодно!</div>
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
        id: 'world3-s2',
        title: 'Организмы',
        description: 'Растения и животные',
        order: 2,
        topics: [
          {
            id: 'world3-s2-t1',
            title: 'Группы животных',
            description: 'Классификация животных',
            theory: `<h3>Группы животных</h3>
            <h4>🦁 Звери (млекопитающие):</h4>
            <p>Покрыты шерстью, кормят детёнышей молоком: лиса, медведь, кит</p>
            <h4>🐦 Птицы:</h4>
            <p>Покрыты перьями, откладывают яйца: воробей, орёл, пингвин</p>
            <h4>🐟 Рыбы:</h4>
            <p>Живут в воде, покрыты чешуёй: карась, щука, акула</p>
            <h4>🦎 Пресмыкающиеся:</h4>
            <p>Покрыты чешуёй, ползают: ящерица, змея, черепаха</p>
            <h4>🐸 Земноводные:</h4>
            <p>Живут и в воде, и на суше: лягушка, жаба, тритон</p>
            <h4>🐛 Насекомые:</h4>
            <p>6 ног, тело из трёх частей: бабочка, муравей, пчела</p>`,
            examples: ['К какой группе относится кит?', 'Чем отличаются птицы от зверей?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'world3-s2-t1-l1',
                title: 'Звери и птицы',
                content: `<div class="kid-lesson">
                  <h2>🦁 Звери и 🐦 Птицы</h2>
                  <p>Звери: шерсть, молоко, живорождение</p>
                  <p>Птицы: перья, яйца, клюв</p>
                  <div class="activity">К какой группе относится летучая мышь?</div>
                  <div class="emoji-practice">Летучая мышь — это зверь! 🦇</div>
                  <div class="tip">💡 Летучая мышь летает, но это зверь!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'world3-s2-t1-l2',
                title: 'Рыбы и пресмыкающиеся',
                content: `<div class="kid-lesson">
                  <h2>🐟 Рыбы и 🦎 Пресмыкающиеся</h2>
                  <p>Рыбы: живут в воде, чешуя, жабры</p>
                  <p>Пресмыкающиеся: чешуя, ползают, откладывают яйца</p>
                  <div class="activity">Чем крокодил отличается от рыбы?</div>
                  <div class="emoji-practice">Крокодил дышит лёгкими, рыба — жабрами!</div>
                  <div class="tip">💡 Крокодил — пресмыкающееся!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'world3-s2-t1-l3',
                title: 'Насекомые',
                content: `<div class="kid-lesson">
                  <h2>🐛 Насекомые</h2>
                  <p>Насекомые имеют 6 ног и тело из 3 частей!</p>
                  <div class="activity">Посчитай ноги у паука — это насекомое?</div>
                  <div class="emoji-practice">Паук имеет 8 ног — это не насекомое! 🕷️</div>
                  <div class="tip">💡 Паук — это паукообразное (8 ног)!</div>
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
        id: 'world3-q1',
        question: 'Какая природная зона характеризуется отсутствием деревьев и большим количеством травы?',
        options: ['Лес', 'Степь', 'Пустыня', 'Тундра'],
        correctAnswer: 1,
        explanation: 'Степь — это равнина, покрытая травой, с очень малым количеством деревьев из-за недостатка влаги.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'world3-q2',
        question: 'К какой группе животных относится кит?',
        options: ['Рыбы', 'Пресмыкающиеся', 'Звери (млекопитающие)', 'Земноводные'],
        correctAnswer: 2,
        explanation: 'Кит — это млекопитающее (зверь). Он кормит детёнышей молоком и дышит лёгкими.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'world3-q3',
        question: 'Сколько ног у насекомых?',
        options: ['4', '6', '8', '10'],
        correctAnswer: 1,
        explanation: 'У всех насекомых 6 ног. Если ног больше или меньше — это не насекомое!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'world3-q4',
        question: 'Какое животное типично для пустыни?',
        options: ['Медведь', 'Верблюд', 'Белка', 'Суслик'],
        correctAnswer: 1,
        explanation: 'Верблюд — типичное животное пустыни. Он может долго обходиться без воды!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'world3-q5',
        question: 'Какая природная зона занимает большую часть территории России?',
        options: ['Пустыня', 'Степь', 'Лес', 'Джунгли'],
        correctAnswer: 2,
        explanation: 'Леса (тайга) занимают большую часть территории России!',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'world3-q6',
        question: 'Чем покрыто тело птиц?',
        options: ['Шерстью', 'Чешуёй', 'Перьями', 'Кожей'],
        correctAnswer: 2,
        explanation: 'Тело птиц покрыто перьями — это их главный признак!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'world3-q7',
        question: 'Какое животное НЕ является насекомым?',
        options: ['Бабочка', 'Муравей', 'Паук', 'Пчела'],
        correctAnswer: 2,
        explanation: 'Паук — не насекомое! У него 8 ног, а у насекомых — 6!',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'world3-q8',
        question: 'Дышит ли кит жабрами?',
        options: ['Да', 'Нет', 'Иногда', 'Только под водой'],
        correctAnswer: 1,
        explanation: 'Нет! Кит — млекопитающее, он дышит лёгкими, как люди!',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ЛИТЕРАТУРНОЕ ЧТЕНИЕ ====================
  {
    id: 'literature3',
    title: 'Литературное чтение',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Басни, былины, сказки А.С. Пушкина',
    sections: [
      {
        id: 'lit3-s1',
        title: 'Устное народное творчество',
        description: 'Былины и сказки',
        order: 1,
        topics: [
          {
            id: 'lit3-s1-t1',
            title: 'Былины',
            description: 'Героические сказания',
            theory: `<h3>Былины</h3>
            <p>Былины — это русские народные эпические песни-сказания о богатырях.</p>
            <h4>Главные богатыри:</h4>
            <ul>
              <li><b>Илья Муромец</b> — самый сильный, защитник Руси</li>
              <li><b>Добрыня Никитич</b> — умный и храбрый</li>
              <li><b>Алёша Попович</b> — молодой и ловкий</li>
            </ul>
            <h4>Особенности былин:</h4>
            <p>Гиперболизация (преувеличение) подвигов героев, сказочный характер событий.</p>`,
            examples: ['Прочитай былину об Илье Муромце', 'Какие подвиги совершали богатыри?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'lit3-s1-t1-l1',
                title: 'Кто такие богатыри?',
                content: `<div class="kid-lesson">
                  <h2>⚔️ Богатыри</h2>
                  <p>Богатыри — это русские герои, защитники родной земли!</p>
                  <div class="activity">Назови трёх главных богатырей!</div>
                  <div class="emoji-practice">🦸 Илья Муромец, 🦸‍♂️ Добрыня Никитич, 🦸‍♀️ Алёша Попович</div>
                  <div class="tip">💡 Богатыри защищали Русь от врагов!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'lit3-s1-t1-l2',
                title: 'Былина об Илье Муромце',
                content: `<div class="kid-lesson">
                  <h2>🛡️ Илья Муромец</h2>
                  <p>Илья Муромец — самый известный русский богатырь!</p>
                  <p>Он 33 года пролежал на печи, а потом получил силу от старцев.</p>
                  <div class="activity">Какой подвиг совершил Илья Муромец?</div>
                  <div class="emoji-practice">Победил Соловья-разбойника! 🦅</div>
                  <div class="tip">💡 Илья Муромец — символ русской силы!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 10
              }
            ]
          },
          {
            id: 'lit3-s1-t2',
            title: 'Сказки А.С. Пушкина',
            description: 'Волшебные сказки поэта',
            theory: `<h3>Сказки А.С. Пушкина</h3>
            <p>Александр Сергеевич Пушкин написал замечательные сказки в стихах.</p>
            <h4>Известные сказки:</h4>
            <ul>
              <li>"Сказка о рыбаке и рыбке"</li>
              <li>"Сказка о золотом петушке"</li>
              <li>"Сказка о мёртвой царевне"</li>
              <li>"Сказка о царе Салтане"</li>
            </ul>`,
            examples: ['Прочитай "Сказку о рыбаке и рыбке"', 'Чему учит эта сказка?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'lit3-s1-t2-l1',
                title: 'Сказка о рыбаке и рыбке',
                content: `<div class="kid-lesson">
                  <h2>🐟 Сказка о рыбаке и рыбке</h2>
                  <p>Жил старик со своею старухой у самого синего моря...</p>
                  <h3>Главная мысль:</h3>
                  <p>Нельзя быть жадным и неблагодарным!</p>
                  <div class="activity">Почему старуха осталась у разбитого корыта?</div>
                  <div class="emoji-practice">Жадность наказывается! 💔</div>
                  <div class="tip">💡 Будь благодарен за то, что имеешь!</div>
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
        id: 'lit3-s2',
        title: 'Басни',
        description: 'И.А. Крылов',
        order: 2,
        topics: [
          {
            id: 'lit3-s2-t1',
            title: 'Басни И.А. Крылова',
            description: 'Мудрость в коротких историях',
            theory: `<h3>Басня</h3>
            <p>Басня — это короткий рассказ в стихах или прозе с нравоучением (моралью).</p>
            <h4>Особенности басни:</h4>
            <ul>
              <li>Короткий сюжет</li>
              <li>Герои — животные (аллегория)</li>
              <li>Мораль в начале или конце</li>
            </ul>
            <h4>Известные басни:</h4>
            <p>"Ворона и Лисица", "Стрекоза и Муравей", "Квартет"</p>`,
            examples: ['Прочитай басню "Ворона и Лисица"', 'Какая мораль в этой басне?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'lit3-s2-t1-l1',
                title: 'Ворона и Лисица',
                content: `<div class="kid-lesson">
                  <h2>🦊 Ворона и Лисица</h2>
                  <p>Ворона держала во рту кусок сыра. Лиса захотела его получить...</p>
                  <h3>Мораль:</h3>
                  <p>Не верь льстивым словам!</p>
                  <div class="activity">Почему Ворона потеряла сыр?</div>
                  <div class="emoji-practice">Поверила лести Лисы! 🧀</div>
                  <div class="tip">💡 Льстецы хотят обмануть тебя!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'lit3-s2-t1-l2',
                title: 'Стрекоза и Муравей',
                content: `<div class="kid-lesson">
                  <h2>🦗 Стрекоза и Муравей</h2>
                  <p>Стрекоза лето красное пропела, а Муравей трудился...</p>
                  <h3>Мораль:</h3>
                  <p>Нужно трудиться, а не только веселиться!</p>
                  <div class="activity">Почему Стрекоза осталась без крова?</div>
                  <div class="emoji-practice">Не готовилась к зиме! ❄️</div>
                  <div class="tip">💡 Труд кормит, а лень портит!</div>
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
        id: 'lit3-q1',
        question: 'Кто самый известный русский богатырь?',
        options: ['Алёша Попович', 'Добрыня Никитич', 'Илья Муромец', 'Никита Кожемяка'],
        correctAnswer: 2,
        explanation: 'Илья Муромец — самый известный и почитаемый русский богатырь, главный герой многих былин.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'lit3-q2',
        question: 'Какая мораль в басне "Ворона и Лисица"?',
        options: ['Нужно делиться', 'Не верь льстецам', 'Сыр полезен', 'Лиса хитрая'],
        correctAnswer: 1,
        explanation: 'Мораль басни: не верь льстивым словам, за ними часто скрывается обман.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ИНОСТРАННЫЙ ЯЗЫК ====================
  {
    id: 'english3',
    title: 'Иностранный язык',
    icon: <Languages className="w-5 h-5" />,
    color: 'text-cyan-400',
    gradient: 'from-cyan-500 to-blue-500',
    description: 'Английский язык: грамматика и лексика',
    sections: [
      {
        id: 'eng3-s1',
        title: 'Грамматика',
        description: 'Основы грамматики',
        order: 1,
        topics: [
          {
            id: 'eng3-s1-t1',
            title: 'Глагол to be',
            description: 'Быть, являться',
            theory: `<h3>Глагол to be</h3>
            <p>Глагол to be — это глагол "быть". Он изменяется по лицам и числам.</p>
            <h4>Формы глагола to be:</h4>
            <ul>
              <li><b>I am</b> (я есть) — I'm</li>
              <li><b>He/She/It is</b> (он/она/оно есть) — He's, She's, It's</li>
              <li><b>We/You/They are</b> (мы/вы/они есть) — We're, You're, They're</li>
            </ul>`,
            examples: ['Переведи: Я ученик', 'Поставь правильную форму: She ___ happy'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'eng3-s1-t1-l1',
                title: 'Формы to be',
                content: `<div class="kid-lesson">
                  <h2>📝 Глагол to be</h2>
                  <p>to be = быть, являться</p>
                  <p>I am, You are, He is, She is, It is</p>
                  <p>We are, You are, They are</p>
                  <div class="activity">Заполни: I ___ a student!</div>
                  <div class="emoji-practice">I am a student! = Я ученик!</div>
                  <div class="tip">💡 I am = I'm, He is = He's!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'eng3-s1-t1-l2',
                title: 'Отрицание и вопрос',
                content: `<div class="kid-lesson">
                  <h2>❓ Отрицание и вопрос</h2>
                  <p>Отрицание: I am not, He is not (isn't), They are not (aren't)</p>
                  <p>Вопрос: Am I? Is he? Are they?</p>
                  <div class="activity">Переведи: Он не счастлив!</div>
                  <div class="emoji-practice">He isn't happy! = Он не счастлив!</div>
                  <div class="tip">💡 isn't = is not, aren't = are not</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 10
              }
            ]
          },
          {
            id: 'eng3-s1-t2',
            title: 'Present Simple',
            description: 'Настоящее простое время',
            theory: `<h3>Present Simple</h3>
            <p>Present Simple используется для регулярных действий.</p>
            <h4>Правила:</h4>
            <ul>
              <li>I/You/We/They + глагол: I play, We read</li>
              <li>He/She/It + глагол + s/es: He plays, She watches</li>
            </ul>
            <h4>Слова-маркеры:</h4>
            <p>always, usually, often, sometimes, every day</p>`,
            examples: ['Переведи: Он играет в футбол каждый день', 'Поставь глагол: She (read) books'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'eng3-s1-t2-l1',
                title: 'Утвердительные предложения',
                content: `<div class="kid-lesson">
                  <h2>✅ Present Simple</h2>
                  <p>Для регулярных действий!</p>
                  <p>I play tennis. = Я играю в теннис.</p>
                  <p>He plays tennis. = Он играет в теннис. (+s)</p>
                  <div class="activity">Переведи: Она читает книги!</div>
                  <div class="emoji-practice">She reads books! 📚</div>
                  <div class="tip">💡 He/She/It + глагол + s!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'eng3-s1-t2-l2',
                title: 'Вопросы и отрицания',
                content: `<div class="kid-lesson">
                  <h2>❓ Вопросы в Present Simple</h2>
                  <p>Do you play? = Ты играешь?</p>
                  <p>Does he play? = Он играет?</p>
                  <p>I don't play. = Я не играю.</p>
                  <p>He doesn't play. = Он не играет.</p>
                  <div class="activity">Переведи: Ты любишь мороженое?</div>
                  <div class="emoji-practice">Do you like ice cream? 🍦</div>
                  <div class="tip">💡 Do/Does для вопроса, don't/doesn't для отрицания!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 10
              }
            ]
          }
        ]
      },
      {
        id: 'eng3-s2',
        title: 'Лексика',
        description: 'Слова и темы',
        order: 2,
        topics: [
          {
            id: 'eng3-s2-t1',
            title: 'Мой день',
            description: 'Daily routine',
            theory: `<h3>Daily Routine — Распорядок дня</h3>
            <h4>Слова:</h4>
            <ul>
              <li><b>get up</b> — вставать</li>
              <li><b>have breakfast</b> — завтракать</li>
              <li><b>go to school</b> — идти в школу</li>
              <li><b>have lunch</b> — обедать</li>
              <li><b>do homework</b> — делать домашнее задание</li>
              <li><b>go to bed</b> — ложиться спать</li>
            </ul>`,
            examples: ['Расскажи о своём дне', 'Переведи: Я встаю в 7 часов'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 20,
            lessons: [
              {
                id: 'eng3-s2-t1-l1',
                title: 'Утренние действия',
                content: `<div class="kid-lesson">
                  <h2>🌅 Morning routine</h2>
                  <p>I get up at 7 o'clock. = Я встаю в 7 часов.</p>
                  <p>I have breakfast. = Я завтракаю.</p>
                  <p>I go to school. = Я иду в школу.</p>
                  <div class="activity">Расскажи: Что ты делаешь утром?</div>
                  <div class="emoji-practice">I get up → I have breakfast → I go to school</div>
                  <div class="tip">💡 Используй Present Simple для регулярных действий!</div>
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
        id: 'eng3-q1',
        question: 'Выбери правильную форму: She ___ a student.',
        options: ['am', 'is', 'are', 'be'],
        correctAnswer: 1,
        explanation: 'She is a student. После She используем is.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'eng3-q2',
        question: 'Как перевести "He plays football every day"?',
        options: ['Он играл в футбол', 'Он играет в футбол каждый день', 'Он будет играть в футбол', 'Он не играет в футбол'],
        correctAnswer: 1,
        explanation: 'Present Simple описывает регулярные действия. He plays = Он играет.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ИЗОБРАЗИТЕЛЬНОЕ ИСКУССТВО ====================
  {
    id: 'art3',
    title: 'Изобразительное искусство',
    icon: <Palette className="w-5 h-5" />,
    color: 'text-pink-400',
    gradient: 'from-pink-500 to-rose-500',
    description: 'Живопись, графика, народное искусство',
    sections: [
      {
        id: 'art3-s1',
        title: 'Виды изобразительного искусства',
        description: 'Живопись, графика, скульптура',
        order: 1,
        topics: [
          {
            id: 'art3-s1-t1',
            title: 'Живопись',
            description: 'Искусство цвета',
            theory: `<h3>Живопись</h3>
            <p>Живопись — это вид изобразительного искусства, связанный с передачей зрительных образов через цвет.</p>
            <h4>Жанры живописи:</h4>
            <ul>
              <li><b>Портрет</b> — изображение человека</li>
              <li><b>Пейзаж</b> — изображение природы</li>
              <li><b>Натюрморт</b> — изображение предметов</li>
              <li><b>Анималистический</b> — изображение животных</li>
            </ul>`,
            examples: ['Какой жанр у картины с изображением леса?', 'Нарисуй натюрморт'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 25,
            lessons: [
              {
                id: 'art3-s1-t1-l1',
                title: 'Жанры живописи',
                content: `<div class="kid-lesson">
                  <h2>🎨 Жанры живописи</h2>
                  <p>Портрет — изображение человека 👤</p>
                  <p>Пейзаж — изображение природы 🌳</p>
                  <p>Натюрморт — изображение предметов 🍎</p>
                  <div class="activity">Определи жанр картины!</div>
                  <div class="emoji-practice">Картина с лесом = пейзаж!</div>
                  <div class="tip">💡 Каждый жанр показывает своё!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'art3-s1-t1-l2',
                title: 'Цвет в живописи',
                content: `<div class="kid-lesson">
                  <h2>🎨 Цветовая палитра</h2>
                  <p>Тёплые цвета: красный, оранжевый, жёлтый 🔴🟠🟡</p>
                  <p>Холодные цвета: синий, зелёный, фиолетовый 🔵🟢🟣</p>
                  <div class="activity">Назови тёплые и холодные цвета!</div>
                  <div class="emoji-practice">Солнце = тёплый, море = холодный!</div>
                  <div class="tip">💡 Цвет создаёт настроение!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 10
              }
            ]
          },
          {
            id: 'art3-s1-t2',
            title: 'Графика',
            description: 'Искусство линии',
            theory: `<h3>Графика</h3>
            <p>Графика — это вид искусства, основанный на рисунке. Главное средство — линия, штрих, пятно.</p>
            <h4>Виды графики:</h4>
            <ul>
              <li><b>Рисунок</b> — карандаш, уголь, сангина</li>
              <li><b>Книжная графика</b> — иллюстрации</li>
              <li><b>Плакат</b> — рекламный рисунок</li>
            </ul>`,
            examples: ['Нарисуй иллюстрацию к сказке', 'Чем графика отличается от живописи?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'art3-s1-t2-l1',
                title: 'Что такое графика?',
                content: `<div class="kid-lesson">
                  <h2>✏️ Графика</h2>
                  <p>Графика — это искусство линии и штриха!</p>
                  <p>Главные средства: линия, штрих, пятно</p>
                  <div class="activity">Нарисуй графикой дерево!</div>
                  <div class="emoji-practice">Линии и штрихи — основа графики!</div>
                  <div class="tip">💡 В графике цвет не главное!</div>
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
        id: 'art3-s2',
        title: 'Народное искусство',
        description: 'Декоративно-прикладное искусство',
        order: 2,
        topics: [
          {
            id: 'art3-s2-t1',
            title: 'Русские народные промыслы',
            description: 'Хохлома, Гжель, Дымка',
            theory: `<h3>Народные промыслы</h3>
            <h4>Хохлома:</h4>
            <p>Золотая роспись по дереву: красный, чёрный, золотой цвета</p>
            <h4>Гжель:</h4>
            <p>Белая керамика с синей росписью</p>
            <h4>Дымковская игрушка:</h4>
            <p>Яркие глиняные игрушки</p>`,
            examples: ['Раскрась в стиле Хохлома', 'Чем отличается Гжель от Хохломы?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'art3-s2-t1-l1',
                title: 'Хохломская роспись',
                content: `<div class="kid-lesson">
                  <h2>🎨 Хохлома</h2>
                  <p>Хохлома — золотая роспись по дереву!</p>
                  <p>Цвета: красный, чёрный, золотой</p>
                  <div class="activity">Раскрась ложку в стиле Хохлома!</div>
                  <div class="emoji-practice">Травка, ягоды, листочки — элементы Хохломы!</div>
                  <div class="tip">💡 Хохлома — "золотое" чудо!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'art3-s2-t1-l2',
                title: 'Гжель и Дымка',
                content: `<div class="kid-lesson">
                  <h2>🏺 Гжель и Дымка</h2>
                  <p>Гжель: белая керамика + синяя роспись ⚪🔵</p>
                  <p>Дымка: яркие глиняные игрушки 🎨</p>
                  <div class="activity">Определи промысел по картинке!</div>
                  <div class="emoji-practice">Белое с синим = Гжель!</div>
                  <div class="tip">💡 Каждый промысел уникален!</div>
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
        id: 'art3-q1',
        question: 'Какой жанр живописи изображает природу?',
        options: ['Портрет', 'Натюрморт', 'Пейзаж', 'Анималистический'],
        correctAnswer: 2,
        explanation: 'Пейзаж — это жанр живописи, изображающий природу: леса, горы, реки.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'art3-q2',
        question: 'Какие цвета использует Хохломская роспись?',
        options: ['Белый и синий', 'Красный, чёрный, золотой', 'Все цвета радуги', 'Только зелёный'],
        correctAnswer: 1,
        explanation: 'Хохломская роспись использует красный, чёрный и золотой цвета.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== МУЗЫКА ====================
  {
    id: 'music3',
    title: 'Музыка',
    icon: <Music className="w-5 h-5" />,
    color: 'text-violet-400',
    gradient: 'from-violet-500 to-purple-500',
    description: 'Нотная грамота, музыкальные инструменты, композиторы',
    sections: [
      {
        id: 'music3-s1',
        title: 'Нотная грамота',
        description: 'Основы музыкальной грамоты',
        order: 1,
        topics: [
          {
            id: 'music3-s1-t1',
            title: 'Ноты и нотный стан',
            description: 'Семь нот',
            theory: `<h3>Ноты</h3>
            <p>В музыке 7 основных нот: До, Ре, Ми, Фа, Соль, Ля, Си.</p>
            <h4>Нотный стан:</h4>
            <p>Нотный стан — это 5 линеек, на которых записывают ноты.</p>
            <h4>Скрипичный ключ:</h4>
            <p>Знак в начале нотного стана, показывающий высоту звуков.</p>`,
            examples: ['Назови все ноты по порядку', 'Покажи ноту "До" на нотном стане'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 20,
            lessons: [
              {
                id: 'music3-s1-t1-l1',
                title: 'Семь нот',
                content: `<div class="kid-lesson">
                  <h2>🎵 Семь нот</h2>
                  <p>До, Ре, Ми, Фа, Соль, Ля, Си!</p>
                  <div class="activity">Пропой гамму вверх и вниз!</div>
                  <div class="emoji-practice">До-Ре-Ми-Фа-Соль-Ля-Си-До! 🎶</div>
                  <div class="tip">💡 Ноты повторяются: после Си снова До!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'music3-s1-t1-l2',
                title: 'Нотный стан',
                content: `<div class="kid-lesson">
                  <h2>🎼 Нотный стан</h2>
                  <p>Нотный стан — это 5 линеек для записи нот.</p>
                  <p>Ноты могут быть на линейках и между ними.</p>
                  <div class="activity">Найди ноту До на нотном стане!</div>
                  <div class="emoji-practice">До — на первой добавочной линейке!</div>
                  <div class="tip">💡 Скрипичный ключ показывает ноту Соль!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 10
              }
            ]
          }
        ]
      },
      {
        id: 'music3-s2',
        title: 'Музыкальные инструменты',
        description: 'Инструменты симфонического оркестра',
        order: 2,
        topics: [
          {
            id: 'music3-s2-t1',
            title: 'Группы инструментов',
            description: 'Струнные, духовые, ударные',
            theory: `<h3>Группы музыкальных инструментов</h3>
            <h4>🎻 Струнные:</h4>
            <p>Скрипка, альт, виолончель, контрабас — звук извлекается смычком</p>
            <h4>🎺 Духовые:</h4>
            <p>Флейта, кларнет, труба, тромбон — звук извлекается выдуванием воздуха</p>
            <h4>🥁 Ударные:</h4>
            <p>Барабан, тарелки, ксилофон — звук извлекается ударом</p>`,
            examples: ['Назови струнный инструмент', 'Как извлекается звук у флейты?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'music3-s2-t1-l1',
                title: 'Струнные инструменты',
                content: `<div class="kid-lesson">
                  <h2>🎻 Струнные инструменты</h2>
                  <p>Скрипка — королева оркестра!</p>
                  <p>Звук извлекается смычком или пальцами (пиццикато)</p>
                  <div class="activity">Послушай скрипичный концерт!</div>
                  <div class="emoji-practice">Скрипка, альт, виолончель, контрабас</div>
                  <div class="tip">💡 Струнные — основа симфонического оркестра!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'music3-s2-t1-l2',
                title: 'Духовые и ударные',
                content: `<div class="kid-lesson">
                  <h2>🎺 Духовые и 🥁 Ударные</h2>
                  <p>Духовые: флейта, кларнет, труба — дуют!</p>
                  <p>Ударные: барабан, тарелки — бьют!</p>
                  <div class="activity">Определи инструмент по звучанию!</div>
                  <div class="emoji-practice">Труба — громкая, флейта — нежная!</div>
                  <div class="tip">💡 Каждый инструмент уникален!</div>
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
        id: 'music3-q1',
        question: 'Сколько основных нот в музыке?',
        options: ['5', '6', '7', '8'],
        correctAnswer: 2,
        explanation: 'В музыке 7 основных нот: До, Ре, Ми, Фа, Соль, Ля, Си.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'music3-q2',
        question: 'К какой группе инструментов относится скрипка?',
        options: ['Духовые', 'Ударные', 'Струнные', 'Клавишные'],
        correctAnswer: 2,
        explanation: 'Скрипка — это струнный смычковый инструмент, главный инструмент симфонического оркестра.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ТЕХНОЛОГИЯ ====================
  {
    id: 'tech3',
    title: 'Технология',
    icon: <Ruler className="w-5 h-5" />,
    color: 'text-amber-400',
    gradient: 'from-amber-500 to-orange-500',
    description: 'Работа с бумагой, картоном, природными материалами',
    sections: [
      {
        id: 'tech3-s1',
        title: 'Работа с бумагой',
        description: 'Аппликация, оригами',
        order: 1,
        topics: [
          {
            id: 'tech3-s1-t1',
            title: 'Аппликация',
            description: 'Вырезание и наклеивание',
            theory: `<h3>Аппликация</h3>
            <p>Аппликация — это создание изображений из наклеенных кусочков бумаги, ткани или других материалов.</p>
            <h4>Виды аппликации:</h4>
            <ul>
              <li><b>Предметная</b> — один объект</li>
              <li><b>Сюжетная</b> — сцена из нескольких объектов</li>
              <li><b>Декоративная</b> — узор, орнамент</li>
            </ul>
            <h4>Инструменты:</h4>
            <p>Ножницы, клей, кисть, бумага, картон</p>`,
            examples: ['Сделай аппликацию "Осеннее дерево"', 'Как безопасно работать с ножницами?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 30,
            lessons: [
              {
                id: 'tech3-s1-t1-l1',
                title: 'Техника аппликации',
                content: `<div class="kid-lesson">
                  <h2>✂️ Аппликация</h2>
                  <p>1. Придумай сюжет</p>
                  <p>2. Вырежи детали</p>
                  <p>3. Наклей на основу</p>
                  <div class="activity">Сделай аппликацию "Цветок"!</div>
                  <div class="emoji-practice">Лепестки, стебель, листья — готово! 🌸</div>
                  <div class="tip">💡 Клей наноси аккуратно, не слишком много!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              },
              {
                id: 'tech3-s1-t1-l2',
                title: 'Безопасность при работе',
                content: `<div class="kid-lesson">
                  <h2>⚠️ Техника безопасности</h2>
                  <p>✂️ Ножницы передавай кольцами вперёд</p>
                  <p>✂️ Не держи ножницы лезвиями вверх</p>
                  <p>🧴 Клей не пробуй на вкус</p>
                  <div class="activity">Расскажи правила безопасности!</div>
                  <div class="emoji-practice">Безопасность — главное!</div>
                  <div class="tip">💡 Работай аккуратно и не спеши!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 10
              }
            ]
          },
          {
            id: 'tech3-s1-t2',
            title: 'Оригами',
            description: 'Искусство складывания бумаги',
            theory: `<h3>Оригами</h3>
            <p>Оригами — это японское искусство складывания фигурок из бумаги без ножниц и клея.</p>
            <h4>Базовые формы:</h4>
            <ul>
              <li><b>Квадрат</b> — основа многих фигур</li>
              <li><b>Треугольник</b> — сложи квадрат пополам</li>
              <li><b>"Птица"</b> — основа для журавлика</li>
            </ul>`,
            examples: ['Сложи бумажный самолётик', 'Сделай оригами "Журавлик"'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'tech3-s1-t2-l1',
                title: 'Базовые сгибы',
                content: `<div class="kid-lesson">
                  <h2>📄 Оригами</h2>
                  <p>Согни квадрат пополам — получился треугольник!</p>
                  <p>Согни треугольник пополам — получился меньше!</p>
                  <div class="activity">Сделай бумажный самолётик!</div>
                  <div class="emoji-practice">Сгибы должны быть точными! ✈️</div>
                  <div class="tip">💡 Проглаживай сгибы ногтем!</div>
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
        id: 'tech3-s2',
        title: 'Работа с природными материалами',
        description: 'Шишки, листья, каштаны',
        order: 2,
        topics: [
          {
            id: 'tech3-s2-t1',
            title: 'Поделки из шишек',
            description: 'Животные из природных материалов',
            theory: `<h3>Поделки из природных материалов</h3>
            <p>Из шишек, желудей, каштанов можно делать замечательные поделки!</p>
            <h4>Материалы:</h4>
            <ul>
              <li>Шишки — для туловища животных</li>
              <li>Жёлуди — для головы</li>
              <li>Листья — для крыльев, хвоста</li>
              <li>Пластилин — для соединения деталей</li>
            </ul>`,
            examples: ['Сделай ёжика из шишки', 'Какие материалы нужны для поделки?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 30,
            lessons: [
              {
                id: 'tech3-s2-t1-l1',
                title: 'Ёжик из шишки',
                content: `<div class="kid-lesson">
                  <h2>🦔 Ёжик из шишки</h2>
                  <p>1. Возьми шишку — это туловище</p>
                  <p>2. Сделай мордочку из пластилина</p>
                  <p>3. Добавь глазки и носик</p>
                  <div class="activity">Сделай ёжика!</div>
                  <div class="emoji-practice">Шишка + пластилин = ёжик! 🦔</div>
                  <div class="tip">💡 Пластилин хорошо скрепляет детали!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'tech3-q1',
        question: 'Как правильно передавать ножницы?',
        options: ['Лезвиями вперёд', 'Кольцами вперёд', 'Любым способом', 'Бросить на стол'],
        correctAnswer: 1,
        explanation: 'Ножницы нужно передавать кольцами вперёд, чтобы не поранить партнёра.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'tech3-q2',
        question: 'Что такое оригами?',
        options: ['Рисование красками', 'Складывание фигур из бумаги', 'Вырезание из бумаги', 'Лепка из пластилина'],
        correctAnswer: 1,
        explanation: 'Оригами — это японское искусство складывания фигурок из бумаги без использования клея и ножниц.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ФИЗИЧЕСКАЯ КУЛЬТУРА ====================
  {
    id: 'pe3',
    title: 'Физическая культура',
    icon: <Dumbbell className="w-5 h-5" />,
    color: 'text-green-400',
    gradient: 'from-green-500 to-emerald-500',
    description: 'Гимнастика, подвижные игры, закаливание',
    sections: [
      {
        id: 'pe3-s1',
        title: 'Гимнастика',
        description: 'Упражнения для развития тела',
        order: 1,
        topics: [
          {
            id: 'pe3-s1-t1',
            title: 'Общеразвивающие упражнения',
            description: 'Зарядка и разминка',
            theory: `<h3>Общеразвивающие упражнения</h3>
            <p>Упражнения для развития силы, гибкости, координации.</p>
            <h4>Виды упражнений:</h4>
            <ul>
              <li><b>Для рук</b> — вращения, махи</li>
              <li><b>Для ног</b> — приседания, выпады</li>
              <li><b>Для туловища</b> — наклоны, повороты</li>
              <li><b>Для осанки</b> — упражнения у стены</li>
            </ul>`,
            examples: ['Покажи упражнение для осанки', 'Сделай 10 приседаний'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'pe3-s1-t1-l1',
                title: 'Утренняя зарядка',
                content: `<div class="kid-lesson">
                  <h2>🏃 Утренняя зарядка</h2>
                  <p>1. Потягивания — проснись!</p>
                  <p>2. Вращения головой</p>
                  <p>3. Махи руками</p>
                  <p>4. Приседания</p>
                  <p>5. Прыжки</p>
                  <div class="activity">Сделай зарядку прямо сейчас!</div>
                  <div class="emoji-practice">10 минут зарядки = бодрое утро! ☀️</div>
                  <div class="tip">💡 Заряжайся энергией каждый день!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'pe3-s1-t1-l2',
                title: 'Упражнения для осанки',
                content: `<div class="kid-lesson">
                  <h2>🧍 Осанка</h2>
                  <p>Правильная осанка — это красиво и полезно!</p>
                  <p>Упражнение: встань к стене, коснись пятками, ягодицами, лопатками, головой</p>
                  <div class="activity">Проверь свою осанку!</div>
                  <div class="emoji-practice">Спина прямая — гордость ученика!</div>
                  <div class="tip">💡 Сиди прямо за партой!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 10
              }
            ]
          }
        ]
      },
      {
        id: 'pe3-s2',
        title: 'Подвижные игры',
        description: 'Игры на свежем воздухе',
        order: 2,
        topics: [
          {
            id: 'pe3-s2-t1',
            title: 'Русские народные игры',
            description: 'Лапта, городки, прятки',
            theory: `<h3>Русские народные игры</h3>
            <h4>Лапта:</h4>
            <p>Командная игра с мячом и битой. Нужно ударить по мячу и перебежать на другую сторону.</p>
            <h4>Городки:</h4>
            <p>Нужно выбить битой фигуры из "городков" (чурок).</p>
            <h4>Прятки:</h4>
            <p>Один водит, остальные прячутся.</p>`,
            examples: ['Научи играть в лапту', 'Какие игры ты знаешь?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 25,
            lessons: [
              {
                id: 'pe3-s2-t1-l1',
                title: 'Игра "Лапта"',
                content: `<div class="kid-lesson">
                  <h2>🏏 Лапта</h2>
                  <p>Командная игра с мячом и битой!</p>
                  <p>1. Ударь мяч битой</p>
                  <p>2. Перебеги на другую сторону</p>
                  <p>3. Вернись обратно</p>
                  <div class="activity">Играй в лапту на перемене!</div>
                  <div class="emoji-practice">Лапта — русская игра! 🏃‍♂️</div>
                  <div class="tip">💡 Бей сильно, беги быстро!</div>
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
        id: 'pe3-q1',
        question: 'Зачем нужна утренняя зарядка?',
        options: ['Чтобы устать', 'Чтобы проснуться и зарядиться энергией', 'Чтобы проголодаться', 'Чтобы уснуть'],
        correctAnswer: 1,
        explanation: 'Утренняя зарядка помогает проснуться, размять мышцы и получить заряд бодрости на весь день.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe3-q2',
        question: 'Какая русская народная игра используется с битой и мячом?',
        options: ['Прятки', 'Салки', 'Лапта', 'Классики'],
        correctAnswer: 2,
        explanation: 'Лапта — это русская народная игра, в которой нужно битой ударить по мячу и перебежать на другую сторону.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ОБЖ ====================
  {
    id: 'safety3',
    title: 'ОБЖ',
    icon: <Shield className="w-5 h-5" />,
    color: 'text-orange-400',
    gradient: 'from-orange-500 to-red-500',
    description: 'Правила безопасного поведения',
    sections: [
      {
        id: 'safety3-s1',
        title: 'Дорожная безопасность',
        description: 'Правила дорожного движения',
        order: 1,
        topics: [
          {
            id: 'safety3-s1-t1',
            title: 'Дорога и пешеход',
            description: 'Переходим дорогу правильно',
            theory: `<h3>Дорожная безопасность</h3>
            <h4>Правила пешехода:</h4>
            <ul>
              <li>Переходи дорогу по пешеходному переходу ("зебра")</li>
              <li>Сначала посмотри налево, потом направо</li>
              <li>Не перебегай дорогу перед транспортом</li>
              <li>Красный свет — стой, зелёный — иди</li>
            </ul>
            <h4>Дорожные знаки:</h4>
            <p>"Пешеходный переход", "Дети", "Опасный поворот"</p>`,
            examples: ['Как правильно переходить дорогу?', 'Что означает знак "Дети"?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'safety3-s1-t1-l1',
                title: 'Светофор',
                content: `<div class="kid-lesson">
                  <h2>🚦 Светофор</h2>
                  <p>🔴 Красный — стой!</p>
                  <p>🟡 Жёлтый — жди!</p>
                  <p>🟢 Зелёный — иди!</p>
                  <div class="activity">Какой свет светофора сейчас?</div>
                  <div class="emoji-practice">Никогда не переходи на красный!</div>
                  <div class="tip">💡 Зелёный не всегда безопасен — посмотри по сторонам!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'safety3-s1-t1-l2',
                title: 'Пешеходный переход',
                content: `<div class="kid-lesson">
                  <h2>🚶 Пешеходный переход</h2>
                  <p>1. Подойди к "зебре"</p>
                  <p>2. Посмотри налево</p>
                  <p>3. Посмотри направо</p>
                  <p>4. Убедись, что машины остановились</p>
                  <p>5. Переходи спокойно</p>
                  <div class="activity">Покажи, как переходить дорогу!</div>
                  <div class="emoji-practice">Остановись — посмотри — переходи!</div>
                  <div class="tip">💡 Не беги через дорогу!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 10
              }
            ]
          }
        ]
      },
      {
        id: 'safety3-s2',
        title: 'Пожарная безопасность',
        description: 'Огонь — опасно!',
        order: 2,
        topics: [
          {
            id: 'safety3-s2-t1',
            title: 'Правила пожарной безопасности',
            description: 'Предотвращение пожара',
            theory: `<h3>Пожарная безопасность</h3>
            <h4>Чтобы не было пожара:</h4>
            <ul>
              <li>Не играй со спичками и зажигалками</li>
              <li>Не включай электроприборы без разрешения взрослых</li>
              <li>Не оставляй включённые приборы без присмотра</li>
            </ul>
            <h4>Если пожар:</h4>
            <ul>
              <li>Немедленно уйди из помещения</li>
              <li>Позови взрослых</li>
              <li>Звони 101</li>
            </ul>`,
            examples: ['Что делать, если начался пожар?', 'Почему нельзя играть со спичками?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'safety3-s2-t1-l1',
                title: 'Огонь — друг и враг',
                content: `<div class="kid-lesson">
                  <h2>🔥 Огонь</h2>
                  <p>Огонь может быть полезным (греть, готовить еду) и опасным (пожар)!</p>
                  <div class="activity">Назови правила пожарной безопасности!</div>
                  <div class="emoji-practice">Спички — не игрушки! 🔥</div>
                  <div class="tip">💡 При пожаре звони 101!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'safety3-s2-t1-l2',
                title: 'Действия при пожаре',
                content: `<div class="kid-lesson">
                  <h2>🚒 Если пожар!</h2>
                  <p>1. Не паникуй!</p>
                  <p>2. Быстро уйди из помещения</p>
                  <p>3. Позови взрослых</p>
                  <p>4. Звони 101</p>
                  <div class="activity">Выучи телефон пожарной охраны!</div>
                  <div class="emoji-practice">101 — телефон МЧС! 🚒</div>
                  <div class="tip">💡 Не прячься — пожарные помогут!</div>
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
        id: 'safety3-q1',
        question: 'По какому номеру звонить при пожаре?',
        options: ['102', '103', '101', '104'],
        correctAnswer: 2,
        explanation: '101 — это номер пожарной охраны и МЧС для вызова при пожаре.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'safety3-q2',
        question: 'Как правильно переходить дорогу?',
        options: ['На красный свет', 'Перебегая перед машинами', 'По зебре, посмотрев налево и направо', 'Где удобно'],
        correctAnswer: 2,
        explanation: 'Переходить дорогу нужно по пешеходному переходу ("зебре"), предварительно посмотрев налево и направо.',
        difficulty: 'easy',
        points: 10
      }
    ]
  }
]
