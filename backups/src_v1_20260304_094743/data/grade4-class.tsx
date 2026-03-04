// Полные данные для 4 класса
// Иерархия: Предмет → Раздел → Тема → Урок

import { Calculator, Book, Globe, Palette, BookOpen, Music, Dumbbell, Shield, Ruler, Languages } from 'lucide-react'
import type { Subject } from './types'

// ==================== 4 КЛАСС ====================

export const grade4Subjects: Subject[] = [
  // ==================== МАТЕМАТИКА ====================
  {
    id: 'math4',
    title: 'Математика',
    icon: <Calculator className="w-5 h-5" />,
    color: 'text-blue-400',
    gradient: 'from-blue-500 to-indigo-500',
    description: 'Дроби, многозначные числа, уравнения',
    sections: [
      {
        id: 'math4-s1',
        title: 'Многозначные числа',
        description: 'Числа больше 1000',
        order: 1,
        topics: [
          {
            id: 'math4-s1-t1',
            title: 'Классы и разряды',
            description: 'Как читать большие числа',
            theory: `<h3>Многозначные числа</h3>
            <p>Числа делятся на классы по 3 разряда.</p>
            <h4>Классы:</h4>
            <ul>
              <li>I класс — единицы (1, 10, 100)</li>
              <li>II класс — тысячи (1000, 10000, 100000)</li>
              <li>III класс — миллионы</li>
            </ul>
            <h4>Пример:</h4>
            <p>1 234 567 — один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь</p>`,
            examples: ['Прочитай число: 12 345', 'Сколько тысяч в числе 15 000?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            quiz: [
              {
                id: 'math4-s1-t1-q1',
                question: 'Сколько тысяч в числе 15 000?',
                options: ['5', '15', '150', '15000'],
                correctAnswer: 1,
                explanation: '15 000 = 15 тысяч! Цифры до пробела показывают количество тысяч.',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'math4-s1-t1-q2',
                question: 'Как правильно прочитать число 1 234 567?',
                options: ['Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь', 'Сто двадцать три тысячи', 'Двенадцать миллионов', 'Миллиард'],
                correctAnswer: 0,
                explanation: '1 234 567 = один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь!',
                difficulty: 'medium',
                points: 15
              }
            ],
            lessons: [
              {
                id: 'math4-s1-t1-l1',
                title: 'Класс единиц',
                content: `<div class="kid-lesson">
                  <h2>1️⃣ Класс единиц</h2>
                  <p>Первые три цифры справа — класс единиц: единицы, десятки, сотни</p>
                  <div class="activity">Прочитай: 345</div>
                  <div class="emoji-practice">345 = 3 сотни 4 десятка 5 единиц = триста сорок пять</div>
                  <div class="tip">💡 Справа налево: единицы, десятки, сотни!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'math4-s1-t1-l2',
                title: 'Класс тысяч',
                content: `<div class="kid-lesson">
                  <h2>1️⃣0️⃣0️⃣0️⃣ Класс тысяч</h2>
                  <p>Следующие три цифры — класс тысяч!</p>
                  <div class="activity">Прочитай: 12 345</div>
                  <div class="emoji-practice">12 345 = 12 тысяч 345 = двенадцать тысяч триста сорок пять</div>
                  <div class="tip">💡 Пробел между классами: 12 345</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'math4-s1-t1-l3',
                title: 'Миллионы',
                content: `<div class="kid-lesson">
                  <h2>1️⃣0️⃣0️⃣0️⃣0️⃣0️⃣0️⃣ Миллионы</h2>
                  <p>Третий класс — миллионы!</p>
                  <div class="activity">Прочитай: 1 234 567</div>
                  <div class="emoji-practice">1 234 567 = один миллион двести тридцать четыре тысячи...</div>
                  <div class="tip">💡 1 000 000 = миллион!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ]
          },
          {
            id: 'math4-s1-t2',
            title: 'Сложение и вычитание многозначных чисел',
            description: 'Действия в столбик',
            theory: `<h3>Сложение и вычитание многозначных чисел</h3>
            <p>Действия выполняются так же, как с двузначными числами — в столбик!</p>
            <h4>Правило:</h4>
            <ol>
              <li>Записываем числа друг под другом по разрядам</li>
              <li>Начинаем с единиц</li>
              <li>Переходим к следующим разрядам</li>
            </ol>`,
            examples: ['Реши: 1234 + 567', 'Вычисли: 5000 - 1234'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            quiz: [
              {
                id: 'math4-s1-t2-q1',
                question: 'Чему равно 2345 + 1678?',
                options: ['4013', '4023', '3923', '4113'],
                correctAnswer: 1,
                explanation: '2345 + 1678 = 4023! Складываем в столбик по разрядам.',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'math4-s1-t2-q2',
                question: 'Чему равно 5000 - 2345?',
                options: ['2655', '2755', '2655', '2665'],
                correctAnswer: 0,
                explanation: '5000 - 2345 = 2655! Вычитаем в столбик, занимаем у старших разрядов.',
                difficulty: 'medium',
                points: 15
              }
            ],
            lessons: [
              {
                id: 'math4-s1-t2-l1',
                title: 'Сложение многозначных',
                content: `<div class="kid-lesson">
                  <h2>➕ Сложение в столбик</h2>
                  <p>Записываем по разрядам и складываем справа налево!</p>
                  <div class="activity">Реши: 1234 + 567</div>
                  <div class="emoji-practice">
                    1234
                    +567
                    ----
                    1801
                  </div>
                  <div class="tip">💡 Единицы под единицами, десятки под десятками!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'math4-s1-t2-l2',
                title: 'Вычитание многозначных',
                content: `<div class="kid-lesson">
                  <h2>➖ Вычитание в столбик</h2>
                  <p>Если не хватает — занимаем у следующего разряда!</p>
                  <div class="activity">Реши: 5000 - 1234</div>
                  <div class="emoji-practice">
                    5000
                    -1234
                    ----
                    3766
                  </div>
                  <div class="tip">💡 Занимаем у следующего разряда, ставим точку!</div>
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
        id: 'math4-s2',
        title: 'Дроби',
        description: 'Доли и дроби',
        order: 2,
        topics: [
          {
            id: 'math4-s2-t1',
            title: 'Что такое дробь',
            description: 'Часть целого',
            theory: `<h3>Дробь</h3>
            <p>Дробь — это часть целого. Записывается как числитель/знаменатель.</p>
            <h4>Пример:</h4>
            <p>🍕 Пиццу разрезали на 8 кусков. Съели 3 куска. Это 3/8 пиццы.</p>
            <h4>Части дроби:</h4>
            <ul>
              <li><b>Числитель</b> (сверху) — сколько взяли</li>
              <li><b>Знаменатель</b> (снизу) — на сколько разделили</li>
            </ul>
            <h4>Виды дробей:</h4>
            <ul>
              <li>Правильная: 3/8 (числитель < знаменателя)</li>
              <li>Неправильная: 8/3 (числитель > знаменателя)</li>
            </ul>`,
            examples: ['Какая дробь: половина?', 'Какая дробь: четверть?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            quiz: [
              {
                id: 'math4-s2-t1-q1',
                question: 'Как записать дробью "половина"?',
                options: ['1/3', '1/2', '1/4', '2/1'],
                correctAnswer: 1,
                explanation: 'Половина = 1/2 (одна вторая). Целое разделено на 2 части, взяли 1.',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'math4-s2-t1-q2',
                question: 'Какая дробь правильная?',
                options: ['5/3', '7/2', '3/8', '9/4'],
                correctAnswer: 2,
                explanation: '3/8 — правильная дробь (числитель 3 меньше знаменателя 8).',
                difficulty: 'medium',
                points: 15
              }
            ],
            lessons: [
              {
                id: 'math4-s2-t1-l1',
                title: 'Доли',
                content: `<div class="kid-lesson">
                  <h2>🍕 Доли</h2>
                  <p>Доля — это равная часть целого!</p>
                  <div class="activity">Раздели пиццу на 4 части. Какая это доля?</div>
                  <div class="emoji-practice">1/4 — одна четвёртая (четверть)</div>
                  <div class="tip">💡 1/2 — половина, 1/3 — треть, 1/4 — четверть!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'math4-s2-t1-l2',
                title: 'Дроби',
                content: `<div class="kid-lesson">
                  <h2>🔢 Дроби</h2>
                  <p>Дробь показывает, сколько долей взяли!</p>
                  <div class="activity">Съели 3 куска из 8. Какая дробь?</div>
                  <div class="emoji-practice">3/8 — три восьмых</div>
                  <div class="tip">💡 Числитель сверху, знаменатель снизу!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'math4-s2-t1-l3',
                title: 'Сравнение дробей',
                content: `<div class="kid-lesson">
                  <h2>⚖️ Сравнение дробей</h2>
                  <p>Если знаменатели одинаковые — больше та, где числитель больше!</p>
                  <div class="activity">Сравни: 3/8 и 5/8</div>
                  <div class="emoji-practice">3/8 < 5/8 (из 8 кусков 5 больше, чем 3)</div>
                  <div class="tip">💡 При одинаковых знаменателях сравнивай числители!</div>
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
        id: 'math4-s3',
        title: 'Уравнения',
        description: 'Находим неизвестное',
        order: 3,
        topics: [
          {
            id: 'math4-s3-t1',
            title: 'Решение уравнений',
            description: 'Находим неизвестное число',
            theory: `<h3>Уравнение</h3>
            <p>Уравнение — это равенство с неизвестным числом (x).</p>
            <h4>Правила:</h4>
            <ul>
              <li>Чтобы найти слагаемое: вычти из суммы другое слагаемое</li>
              <li>Чтобы найти уменьшаемое: прибавь вычитаемое к разности</li>
              <li>Чтобы найти вычитаемое: вычти разность из уменьшаемого</li>
              <li>Чтобы найти множитель: раздели произведение на другой множитель</li>
            </ul>
            <h4>Пример:</h4>
            <p>x + 5 = 12 → x = 12 - 5 → x = 7</p>`,
            examples: ['Реши: x + 15 = 30', 'Найди x: x × 4 = 20'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'math4-s3-t1-l1',
                title: 'Находим слагаемое',
                content: `<div class="kid-lesson">
                  <h2>➕ Находим слагаемое</h2>
                  <p>Чтобы найти слагаемое, нужно из суммы вычесть другое слагаемое!</p>
                  <div class="activity">Реши: x + 15 = 30</div>
                  <div class="emoji-practice">x = 30 - 15 → x = 15</div>
                  <div class="tip">💡 Слагаемое = Сумма - другое слагаемое</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'math4-s3-t1-l2',
                title: 'Находим множитель',
                content: `<div class="kid-lesson">
                  <h2>× Находим множитель</h2>
                  <p>Чтобы найти множитель, раздели произведение на другой множитель!</p>
                  <div class="activity">Реши: x × 4 = 20</div>
                  <div class="emoji-practice">x = 20 ÷ 4 → x = 5</div>
                  <div class="tip">💡 Множитель = Произведение ÷ другой множитель</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'math4-s3-t1-l3',
                title: 'Сложные уравнения',
                content: `<div class="kid-lesson">
                  <h2>🧩 Сложные уравнения</h2>
                  <p>Иногда нужно несколько действий!</p>
                  <div class="activity">Реши: x + 7 = 15 - 3</div>
                  <div class="emoji-practice">x + 7 = 12 → x = 12 - 7 → x = 5</div>
                  <div class="tip">💡 Сначала упрости правую часть!</div>
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
        id: 'math4-q1',
        question: 'Прочитай число: 12 345',
        options: ['Двенадцать тысяч триста сорок пять', 'Сто двадцать тысяч триста сорок пять', 'Двенадцать тысяч триста пятьдесят четыре', 'Двенадцать тысяч тридцать четыре'],
        correctAnswer: 0,
        explanation: '12 345 — двенадцать тысяч триста сорок пять. 12 тысяч + 345 единиц.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math4-q2',
        question: 'Какая дробь больше: 3/8 или 5/8?',
        options: ['3/8', '5/8', 'Они равны', 'Нельзя сравнить'],
        correctAnswer: 1,
        explanation: 'При одинаковых знаменателях больше та дробь, у которой числитель больше. 5 > 3, значит 5/8 > 3/8.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math4-q3',
        question: 'Реши уравнение: x + 12 = 25',
        options: ['x = 37', 'x = 13', 'x = 12', 'x = 10'],
        correctAnswer: 1,
        explanation: 'x = 25 - 12 = 13. Чтобы найти слагаемое, нужно из суммы вычесть другое слагаемое.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math4-q4',
        question: 'Автомобиль едет со скоростью 60 км/ч. Какое расстояние он проедет за 3 часа?',
        options: ['180 км', '20 км', '63 км', '120 км'],
        correctAnswer: 0,
        explanation: 'S = V × t = 60 × 3 = 180 км! Расстояние = скорость × время.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math4-q5',
        question: 'Чему равна сумма дробей 1/4 + 2/4?',
        options: ['1/4', '2/4', '3/4', '3/8'],
        correctAnswer: 2,
        explanation: '1/4 + 2/4 = 3/4! При одинаковых знаменателях складываем числители!',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math4-q6',
        question: 'Реши уравнение: x × 5 = 45',
        options: ['x = 9', 'x = 40', 'x = 50', 'x = 225'],
        correctAnswer: 0,
        explanation: 'x = 45 ÷ 5 = 9! Чтобы найти множитель, нужно произведение разделить на другой множитель.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math4-q7',
        question: 'Велосипедист проехал 48 км за 4 часа. С какой скоростью он ехал?',
        options: ['12 км/ч', '44 км/ч', '52 км/ч', '192 км/ч'],
        correctAnswer: 0,
        explanation: 'V = S ÷ t = 48 ÷ 4 = 12 км/ч! Скорость = расстояние ÷ время.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math4-q8',
        question: 'Сократи дробь: 6/12',
        options: ['3/6', '2/4', '1/2', '5/10'],
        correctAnswer: 2,
        explanation: '6/12 = 1/2! Делим числитель и знаменатель на 6.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== РУССКИЙ ЯЗЫК ====================
  {
    id: 'russian4',
    title: 'Русский язык',
    icon: <Book className="w-5 h-5" />,
    color: 'text-red-400',
    gradient: 'from-red-500 to-orange-500',
    description: 'Склонения, спряжения, синтаксис',
    sections: [
      {
        id: 'rus4-s1',
        title: 'Падежи',
        description: 'Склонение имён существительных',
        order: 1,
        topics: [
          {
            id: 'rus4-s1-t1',
            title: 'Шесть падежей',
            description: 'Учим падежи',
            theory: `<h3>Падежи русского языка</h3>
            <table>
              <tr><th>Падеж</th><th>Вопрос</th><th>Пример</th></tr>
              <tr><td>Именительный</td><td>кто? что?</td><td>стол</td></tr>
              <tr><td>Родительный</td><td>кого? чего?</td><td>стола</td></tr>
              <tr><td>Дательный</td><td>кому? чему?</td><td>столу</td></tr>
              <tr><td>Винительный</td><td>кого? что?</td><td>стол</td></tr>
              <tr><td>Творительный</td><td>кем? чем?</td><td>столом</td></tr>
              <tr><td>Предложный</td><td>о ком? о чём?</td><td>о столе</td></tr>
            </table>
            <h4>Запоминалка:</h4>
            <p>Иван Родил Девчонку, Велел Тащить Пелёнку</p>`,
            examples: ['Определи падеж слова "книге"', 'Поставь "окно" в дательный падеж'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 35,
            lessons: [
              {
                id: 'rus4-s1-t1-l1',
                title: 'Именительный и родительный',
                content: `<div class="kid-lesson">
                  <h2>📝 Именительный и Родительный</h2>
                  <p>Именительный (кто? что?): стол, книга — начальная форма</p>
                  <p>Родительный (кого? чего?): столА, книгИ — "нет кого?"</p>
                  <div class="activity">Поставь в родительный: дом, окно</div>
                  <div class="emoji-practice">дом → домА, окнО → окнА</div>
                  <div class="tip">💡 Именительный — это начальная форма!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'rus4-s1-t1-l2',
                title: 'Дательный и винительный',
                content: `<div class="kid-lesson">
                  <h2>📝 Дательный и Винительный</h2>
                  <p>Дательный (кому? чему?): столУ, книгЕ — "дать кому?"</p>
                  <p>Винительный (кого? что?): стол, книгУ — "вижу что?"</p>
                  <div class="activity">Поставь "кот" в дательный и винительный!</div>
                  <div class="emoji-practice">Дательный: котУ, Винительный: котА</div>
                  <div class="tip">💡 Дательный — "дать кому?", Винительный — "вижу кого?"</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'rus4-s1-t1-l3',
                title: 'Творительный и предложный',
                content: `<div class="kid-lesson">
                  <h2>📝 Творительный и Предложный</h2>
                  <p>Творительный (кем? чем?): столОМ, книгОЙ — "горжусь чем?"</p>
                  <p>Предложный (о ком? о чём?): о столЕ, о книгЕ — "говорю о чём?"</p>
                  <div class="activity">Поставь "школа" во все падежи!</div>
                  <div class="emoji-practice">школа, школы, школе, школу, школой, о школе</div>
                  <div class="tip">💡 Иван Родил Девчонку, Велел Тащить Пелёнку!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ],
            quiz: [
              {
                id: 'rus4-s1-t1-q1',
                question: 'В каком падеже слово "книге"?',
                options: ['Именительный', 'Родительный', 'Дательный', 'Предложный'],
                correctAnswer: 2,
                explanation: 'Книге — это дательный падеж (кому? чему?)!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'rus4-s1-t1-q2',
                question: 'Какой вопрос у родительного падежа?',
                options: ['кто? что?', 'кого? чего?', 'кому? чему?', 'кем? чем?'],
                correctAnswer: 1,
                explanation: 'Родительный падеж отвечает на вопросы кого? чего?',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'rus4-s1-t1-q3',
                question: 'Сколько падежей в русском языке?',
                options: ['5', '6', '7', '8'],
                correctAnswer: 1,
                explanation: 'В русском языке 6 падежей!',
                difficulty: 'easy',
                points: 10
              }
            ]
          },
          {
            id: 'rus4-s1-t2',
            title: 'Три склонения',
            description: 'Типы склонения существительных',
            theory: `<h3>Три склонения существительных</h3>
            <h4>1 склонение:</h4>
            <p>Мужской и женский род с окончаниями -а, -я: мама, папа, дядя</p>
            <h4>2 склонение:</h4>
            <p>Мужской род с нулевым окончанием и средний род: стол, окно, поле</p>
            <h4>3 склонение:</h4>
            <p>Женский род с мягким знаком на конце: ночь, мышь, дочь</p>`,
            examples: ['Определи склонение: "ручка"', 'Какого склонения слово "степь"?'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 30,
            lessons: [
              {
                id: 'rus4-s1-t2-l1',
                title: 'Первое склонение',
                content: `<div class="kid-lesson">
                  <h2>1️⃣ Первое склонение</h2>
                  <p>Мужской и женский род с окончаниями -а, -я</p>
                  <div class="activity">Определи склонение: мама, папа, дядя, тётя</div>
                  <div class="emoji-practice">Все 1 склонения! (оканчиваются на -а, -я)</div>
                  <div class="tip">💡 -а, -я = 1 склонение!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'rus4-s1-t2-l2',
                title: 'Второе склонение',
                content: `<div class="kid-lesson">
                  <h2>2️⃣ Второе склонение</h2>
                  <p>Мужской род (нулевой конец) и средний род (-о, -е)</p>
                  <div class="activity">Определи склонение: стол, окно, поле</div>
                  <div class="emoji-practice">стол (м.р., 0), окно (ср.р., -о), поле (ср.р., -е) — все 2 скл.</div>
                  <div class="tip">💡 Мужской без окончания, средний -о/-е = 2 склонение!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'rus4-s1-t2-l3',
                title: 'Третье склонение',
                content: `<div class="kid-lesson">
                  <h2>3️⃣ Третье склонение</h2>
                  <p>Женский род с ь на конце: ночь, мышь, дочь, степь</p>
                  <div class="activity">Определи склонение: ночь, рожь, мышь</div>
                  <div class="emoji-practice">Все 3 склонения! (ж.р., ь на конце)</div>
                  <div class="tip">💡 Женский род + ь = 3 склонение!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ],
            quiz: [
              {
                id: 'rus4-s1-t2-q1',
                question: 'Какого склонения слово "ночь"?',
                options: ['1 склонение', '2 склонение', '3 склонение', 'Не склоняется'],
                correctAnswer: 2,
                explanation: 'Ночь — женский род с ь на конце, 3 склонение!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'rus4-s1-t2-q2',
                question: 'Какого склонения слово "мама"?',
                options: ['1 склонение', '2 склонение', '3 склонение', 'Не склоняется'],
                correctAnswer: 0,
                explanation: 'Мама — женский род с окончанием -а, 1 склонение!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'rus4-s1-t2-q3',
                question: 'Какого склонения слово "окно"?',
                options: ['1 склонение', '2 склонение', '3 склонение', 'Не склоняется'],
                correctAnswer: 1,
                explanation: 'Окно — средний род с окончанием -о, 2 склонение!',
                difficulty: 'medium',
                points: 15
              }
            ]
          }
        ]
      },
      {
        id: 'rus4-s2',
        title: 'Глагол',
        description: 'Спряжения глаголов',
        order: 2,
        topics: [
          {
            id: 'rus4-s2-t1',
            title: 'Спряжения глаголов',
            description: 'I и II спряжение',
            theory: `<h3>Спряжения глаголов</h3>
            <h4>I спряжение:</h4>
            <p>Глаголы с окончаниями -ешь, -ет, -ем, -ете, -ут/-ют</p>
            <p>Пример: читать — читаешь, читает, читаем, читаете, читают</p>
            <h4>II спряжение:</h4>
            <p>Глаголы с окончаниями -ишь, -ит, -им, -ите, -ат/-ят</p>
            <p>Пример: говорить — говоришь, говорит, говорим, говорите, говорят</p>
            <h4>Исключения:</h4>
            <p>Брить, стелить — I спряжение</p>
            <p>Гнать, держать, дышать, слышать и другие — II спряжение</p>`,
            examples: ['Определи спряжение: "читать"', 'Какое спряжение у "говорить"?'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 35,
            lessons: [
              {
                id: 'rus4-s2-t1-l1',
                title: 'Первое спряжение',
                content: `<div class="kid-lesson">
                  <h2>1️⃣ I Спряжение</h2>
                  <p>Окончания: -ешь, -ет, -ем, -ете, -ут/-ют</p>
                  <div class="activity">Проспрягай: читать</div>
                  <div class="emoji-practice">читаЕШЬ, читаЕТ, читаЕМ, читаЕТЕ, читаЮТ</div>
                  <div class="tip">💡 I спряжение = -Е- в окончании!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'rus4-s2-t1-l2',
                title: 'Второе спряжение',
                content: `<div class="kid-lesson">
                  <h2>2️⃣ II Спряжение</h2>
                  <p>Окончания: -ишь, -ит, -им, -ите, -ат/-ят</p>
                  <div class="activity">Проспрягай: говорить</div>
                  <div class="emoji-practice">говорИШЬ, говорИТ, говорИМ, говорИТЕ, говорЯТ</div>
                  <div class="tip">💡 II спряжение = -И- в окончании!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'rus4-s2-t1-l3',
                title: 'Исключения',
                content: `<div class="kid-lesson">
                  <h2>⚠️ Исключения</h2>
                  <p>II спряжение: гнать, держать, дышать, слышать, смотреть, видеть, ненавидеть, зависеть, терпеть, вертеть, обидеть</p>
                  <p>I спряжение: брить, стелить</p>
                  <div class="activity">Выучи исключения!</div>
                  <div class="emoji-practice">Гнать, держать, смотреть и видеть — II спряжение!</div>
                  <div class="tip">💡 Брить, стелить — I спряжение (исключение)!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ],
            quiz: [
              {
                id: 'rus4-s2-t1-q1',
                question: 'Какое спряжение у глагола "читать"?',
                options: ['I спряжение', 'II спряжение', 'Разноспрягаемый', 'Безличный'],
                correctAnswer: 0,
                explanation: 'Читать — I спряжение! Окончания: -ешь, -ет, -ем, -ете, -ут/-ют.',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'rus4-s2-t1-q2',
                question: 'Какое спряжение у глагола "говорить"?',
                options: ['I спряжение', 'II спряжение', 'Разноспрягаемый', 'Безличный'],
                correctAnswer: 1,
                explanation: 'Говорить — II спряжение! Окончания: -ишь, -ит, -им, -ите, -ат/-ят.',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'rus4-s2-t1-q3',
                question: 'Какой глагол — исключение I спряжения?',
                options: ['Гнать', 'Держать', 'Брить', 'Слышать'],
                correctAnswer: 2,
                explanation: 'Брить и стелить — исключения I спряжения!',
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
        id: 'rus4-q1',
        question: 'В каком падеже слово "книге"?',
        options: ['Именительный', 'Родительный', 'Дательный', 'Предложный'],
        correctAnswer: 2,
        explanation: 'Книге — это дательный падеж (кому? чему?). Можно подставить: "дать книге".',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus4-q2',
        question: 'Какого склонения слово "ночь"?',
        options: ['1 склонение', '2 склонение', '3 склонение', 'Не склоняется'],
        correctAnswer: 2,
        explanation: 'Ночь — женский род с мягким знаком на конце. Это 3 склонение.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus4-q3',
        question: 'Какое спряжение у глагола "читать"?',
        options: ['I спряжение', 'II спряжение', 'Разноспрягаемый', 'Безличный'],
        correctAnswer: 0,
        explanation: 'Читать — I спряжение. Окончания: читаешь, читает, читаем, читаете, читают.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus4-q4',
        question: 'Какой падеж отвечает на вопрос "кого? чего?"?',
        options: ['Именительный', 'Родительный', 'Дательный', 'Винительный'],
        correctAnswer: 1,
        explanation: 'Родительный падеж отвечает на вопросы "кого?" и "чего?". Например: нет дома (чего?).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus4-q5',
        question: 'Какого склонения слово "окно"?',
        options: ['1 склонение', '2 склонение', '3 склонение', 'Не склоняется'],
        correctAnswer: 1,
        explanation: 'Окно — средний род с окончанием -о. Это 2 склонение.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus4-q6',
        question: 'Какое спряжение у глагола "говорить"?',
        options: ['I спряжение', 'II спряжение', 'Разноспрягаемый', 'Безличный'],
        correctAnswer: 1,
        explanation: 'Говорить — II спряжение. Окончания: говоришь, говорит, говорим, говорите, говорят.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus4-q7',
        question: 'В каком падеже слово "о столе"?',
        options: ['Дательный', 'Винительный', 'Творительный', 'Предложный'],
        correctAnswer: 3,
        explanation: 'О столе — это предложный падеж (о ком? о чём?).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus4-q8',
        question: 'Какой глагол — исключение II спряжения?',
        options: ['Брить', 'Стелить', 'Гнать', 'Читать'],
        correctAnswer: 2,
        explanation: 'Гнать — это глагол-исключение II спряжения! Также: держать, дышать, слышать и др.',
        difficulty: 'hard',
        points: 20
      }
    ]
  },

  // ==================== ОКРУЖАЮЩИЙ МИР ====================
  {
    id: 'world4',
    title: 'Окружающий мир',
    icon: <Globe className="w-5 h-5" />,
    color: 'text-green-400',
    gradient: 'from-green-500 to-teal-500',
    description: 'История России, человек и природа',
    sections: [
      {
        id: 'world4-s1',
        title: 'История России',
        description: 'Основные события',
        order: 1,
        topics: [
          {
            id: 'world4-s1-t1',
            title: 'Древняя Русь',
            description: 'Основание государства',
            theory: `<h3>Древняя Русь</h3>
            <h4>862 год — призвание варягов:</h4>
            <p>Рюрик стал княжить в Новгороде</p>
            <h4>882 год — образование Древнерусского государства:</h4>
            <p>Князь Олег объединил Новгород и Киев</p>
            <h4>988 год — Крещение Руси:</h4>
            <p>Князь Владимир крестил Русь</p>
            <h4>Ярослав Мудрый:</h4>
            <p>Создал первый свод законов — "Русская Правда"</p>`,
            examples: ['Кто крестил Русь?', 'Когда образовалось Древнерусское государство?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'world4-s1-t1-l1',
                title: 'Образование Древней Руси',
                content: `<div class="kid-lesson">
                  <h2>🏰 Образование Древней Руси</h2>
                  <p>862 — Рюрик в Новгороде</p>
                  <p>882 — Олег объединил Новгород и Киев</p>
                  <div class="activity">Запомни дату: 882 год!</div>
                  <div class="emoji-practice">882 = образование Древнерусского государства</div>
                  <div class="tip">💡 Олег — первый князь объединённой Руси!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'world4-s1-t1-l2',
                title: 'Крещение Руси',
                content: `<div class="kid-lesson">
                  <h2>✝️ Крещение Руси</h2>
                  <p>988 год — князь Владимир крестил Русь!</p>
                  <div class="activity">Почему это важное событие?</div>
                  <div class="emoji-practice">Крещение объединило народы Руси общей верой!</div>
                  <div class="tip">💡 Владимир = Красное Солнышко!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'world4-s1-t1-l3',
                title: 'Ярослав Мудрый',
                content: `<div class="kid-lesson">
                  <h2>📜 Ярослав Мудрый</h2>
                  <p>Создал первый свод законов — "Русская Правда"</p>
                  <p>При нём Русь стала сильной и образованной</p>
                  <div class="activity">Какой закон создал Ярослав?</div>
                  <div class="emoji-practice">Русская Правда — первый закон Руси!</div>
                  <div class="tip">💡 Ярослав Мудрый — великий князь!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ],
            quiz: [
              {
                id: 'world4-s1-t1-q1',
                question: 'В каком году произошло Крещение Руси?',
                options: ['862', '882', '988', '1380'],
                correctAnswer: 2,
                explanation: '988 год — князь Владимир крестил Русь!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'world4-s1-t1-q2',
                question: 'Кто создал первый свод законов "Русская Правда"?',
                options: ['Рюрик', 'Олег', 'Владимир', 'Ярослав Мудрый'],
                correctAnswer: 3,
                explanation: 'Ярослав Мудрый создал "Русскую Правду" — первый свод законов!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'world4-s1-t1-q3',
                question: 'В каком году образовалось Древнерусское государство?',
                options: ['862', '882', '988', '1240'],
                correctAnswer: 1,
                explanation: '882 год — князь Олег объединил Новгород и Киев!',
                difficulty: 'medium',
                points: 15
              }
            ]
          },
          {
            id: 'world4-s1-t2',
            title: 'Московское царство',
            description: 'Возвышение Москвы',
            theory: `<h3>Московское царство</h3>
            <h4>1380 год — Куликовская битва:</h4>
            <p>Дмитрий Донской победил ордынцев</p>
            <h4>1480 год — Стояние на Угре:</h4>
            <p>Конец монголо-татарского ига</p>
            <h4>Иван III:</h4>
            <p>Объединил русские земли, принял титул "государь всея Руси"</p>
            <h4>Иван IV Грозный:</h4>
            <p>Первый русский царь (с 1547 года)</p>`,
            examples: ['Кто победил на Куликовом поле?', 'Кто был первым русским царём?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'world4-s1-t2-l1',
                title: 'Куликовская битва',
                content: `<div class="kid-lesson">
                  <h2>⚔️ Куликовская битва</h2>
                  <p>1380 год — Дмитрий Донской победил ордынцев!</p>
                  <div class="activity">Почему его прозвали Донским?</div>
                  <div class="emoji-practice">За победу на Дону! 🏆</div>
                  <div class="tip">💡 1380 = Куликовская битва!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'world4-s1-t2-l2',
                title: 'Конец ига',
                content: `<div class="kid-lesson">
                  <h2>🆓 Конец монгольского ига</h2>
                  <p>1480 год — Стояние на Угре</p>
                  <p>Иван III отказался платить дань ордынцам</p>
                  <div class="activity">Сколько лет длилось иго?</div>
                  <div class="emoji-practice">Почти 240 лет! (1240-1480)</div>
                  <div class="tip">💡 1480 = конец ига!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'world4-s1-t2-l3',
                title: 'Иван Грозный',
                content: `<div class="kid-lesson">
                  <h2>👑 Иван IV Грозный</h2>
                  <p>Первый русский царь (с 1547 года)</p>
                  <p>Расширил границы России, создал регулярное войско</p>
                  <div class="activity">Кто был первым царём?</div>
                  <div class="emoji-practice">Иван IV Грозный — первый царь!</div>
                  <div class="tip">💡 До него правили князья!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ],
            quiz: [
              {
                id: 'world4-s1-t2-q1',
                question: 'В каком году была Куликовская битва?',
                options: ['1240', '1380', '1480', '1547'],
                correctAnswer: 1,
                explanation: '1380 год — Дмитрий Донской победил ордынцев на Куликовом поле!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'world4-s1-t2-q2',
                question: 'Кто был первым русским царём?',
                options: ['Иван III', 'Иван IV Грозный', 'Дмитрий Донской', 'Иван Калита'],
                correctAnswer: 1,
                explanation: 'Иван IV Грозный принял титул царя в 1547 году!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'world4-s1-t2-q3',
                question: 'Когда закончилось монголо-татарское иго?',
                options: ['1240', '1380', '1480', '1547'],
                correctAnswer: 2,
                explanation: '1480 год — Стояние на Угре, конец ига!',
                difficulty: 'medium',
                points: 15
              }
            ]
          }
        ]
      },
      {
        id: 'world4-s2',
        title: 'Человек и природа',
        description: 'Экология и здоровье',
        order: 2,
        topics: [
          {
            id: 'world4-s2-t1',
            title: 'Экология',
            description: 'Береги природу',
            theory: `<h3>Экология</h3>
            <p>Экология — наука о взаимоотношениях организмов с окружающей средой.</p>
            <h4>Правила бережного отношения к природе:</h4>
            <ul>
              <li>Не мусорить в лесу и у воды</li>
              <li>Не разорять птичьи гнёзда</li>
              <li>Не ломать деревья и кусты</li>
              <li>Собирать грибы и ягоды аккуратно</li>
              <li>Экономить воду и электричество</li>
            </ul>`,
            examples: ['Как беречь воду дома?', 'Почему нельзя разорять гнёзда?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'world4-s2-t1-l1',
                title: 'Береги природу',
                content: `<div class="kid-lesson">
                  <h2>🌿 Береги природу!</h2>
                  <p>Природа — наш дом! Её нужно защищать!</p>
                  <div class="activity">Как ты можешь помочь природе?</div>
                  <div class="emoji-practice">Не мусорить, не ломать, не шуметь!</div>
                  <div class="tip">💡 Один человек может сделать много!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'world4-s2-t1-l2',
                title: 'Экономия ресурсов',
                content: `<div class="kid-lesson">
                  <h2>💧 Экономь воду и свет!</h2>
                  <p>Вода и электричество — не бесконечны!</p>
                  <div class="activity">Как экономить воду?</div>
                  <div class="emoji-practice">Закрывай кран, принимай душ вместо ванны!</div>
                  <div class="tip">💡 Выключай свет, когда уходишь!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'world4-s2-t1-l3',
                title: 'Красная книга',
                content: `<div class="kid-lesson">
                  <h2>📕 Красная книга</h2>
                  <p>В Красной книге — редкие и исчезающие животные и растения!</p>
                  <div class="activity">Какие животные в Красной книге?</div>
                  <div class="emoji-practice">🐯 Амурский тигр, 🦌 зубр, 🦅 беркут</div>
                  <div class="tip">💡 Красная книга — сигнал опасности!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ],
            quiz: [
              {
                id: 'world4-s2-t1-q1',
                question: 'Что такое Красная книга?',
                options: ['Книга о природе', 'Список редких и исчезающих видов', 'Учебник по биологии', 'Атлас мира'],
                correctAnswer: 1,
                explanation: 'Красная книга содержит списки редких и исчезающих животных и растений!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'world4-s2-t1-q2',
                question: 'Как правильно экономить воду?',
                options: ['Не мыться вообще', 'Закрывать кран, когда не используешь', 'Использовать только Bottled воду', 'Пить меньше воды'],
                correctAnswer: 1,
                explanation: 'Нужно закрывать кран, когда вода не нужна!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'world4-s2-t1-q3',
                question: 'Какое животное занесено в Красную книгу?',
                options: ['Домашняя кошка', 'Амурский тигр', 'Корова', 'Собака'],
                correctAnswer: 1,
                explanation: 'Амурский тигр — редкое животное, занесённое в Красную книгу!',
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
        id: 'world4-q1',
        question: 'В каком году произошло Крещение Руси?',
        options: ['862', '882', '988', '1380'],
        correctAnswer: 2,
        explanation: '988 год — Князь Владимир крестил Русь. Это важнейшее событие в истории России.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'world4-q2',
        question: 'Кто был первым русским царём?',
        options: ['Иван III', 'Иван IV Грозный', 'Дмитрий Донской', 'Ярослав Мудрый'],
        correctAnswer: 1,
        explanation: 'Иван IV Грозный принял титул царя в 1547 году. До него правили князья.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'world4-q3',
        question: 'Что такое Красная книга?',
        options: ['Книга о природе', 'Список редких и исчезающих видов', 'История России', 'Атлас мира'],
        correctAnswer: 1,
        explanation: 'Красная книга содержит списки редких и находящихся под угрозой исчезновения животных и растений.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'world4-q4',
        question: 'В каком году была Куликовская битва?',
        options: ['1240', '1380', '1480', '1547'],
        correctAnswer: 1,
        explanation: '1380 год — Дмитрий Донской победил ордынцев на Куликовом поле!',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'world4-q5',
        question: 'Кто крестил Русь?',
        options: ['Рюрик', 'Олег', 'Владимир', 'Ярослав Мудрый'],
        correctAnswer: 2,
        explanation: 'Князь Владимир крестил Русь в 988 году!',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'world4-q6',
        question: 'Когда закончилось монголо-татарское иго?',
        options: ['1240', '1380', '1480', '1547'],
        correctAnswer: 2,
        explanation: '1480 год — Стояние на Угре, конец ига!',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'world4-q7',
        question: 'Какое животное в Красной книге России?',
        options: ['Волк', 'Амурский тигр', 'Лиса', 'Заяц'],
        correctAnswer: 1,
        explanation: 'Амурский тигр — редкое животное, занесённое в Красную книгу России!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'world4-q8',
        question: 'Кто победил на Куликовом поле?',
        options: ['Иван Грозный', 'Дмитрий Донской', 'Ярослав Мудрый', 'Рюрик'],
        correctAnswer: 1,
        explanation: 'Дмитрий Донской победил ордынцев в 1380 году!',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ЛИТЕРАТУРНОЕ ЧТЕНИЕ ====================
  {
    id: 'literature4',
    title: 'Литературное чтение',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Произведения русских писателей XIX века',
    sections: [
      {
        id: 'lit4-s1',
        title: 'Русские писатели',
        description: 'Классика детской литературы',
        order: 1,
        topics: [
          {
            id: 'lit4-s1-t1',
            title: 'А.С. Пушкин',
            description: 'Сказки и стихи',
            theory: `<h3>Александр Сергеевич Пушкин (1799-1837)</h3>
            <p>Великий русский поэт, основоположник современного русского литературного языка.</p>
            <h4>Произведения для детей:</h4>
            <ul>
              <li>"Сказка о рыбаке и рыбке"</li>
              <li>"Сказка о мёртвой царевне и семи богатырях"</li>
              <li>"Сказка о золотом петушке"</li>
              <li>"Сказка о царе Салтане"</li>
            </ul>
            <h4>Особенности:</h4>
            <p>Сказки в стихах, богатство языка, народные мотивы.</p>`,
            examples: ['Прочитай "Сказку о мёртвой царевне"', 'Выучи отрывок наизусть'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'lit4-s1-t1-l1',
                title: 'Сказка о мёртвой царевне',
                content: `<div class="kid-lesson">
                  <h2>👸 Сказка о мёртвой царевне</h2>
                  <p>О красавице царевне, злой мачехе и королевиче Елисее.</p>
                  <h3>Главная мысль:</h3>
                  <p>Добро побеждает зло, настоящая красота — внутри!</p>
                  <div class="activity">Выучи отрывок: "Я ль, скажи мне..."</div>
                  <div class="tip">💡 Пушкин учил добру и справедливости!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              },
              {
                id: 'lit4-s1-t1-l2',
                title: 'Язык сказок Пушкина',
                content: `<div class="kid-lesson">
                  <h2>📖 Язык Пушкина</h2>
                  <p>Пушкин создал прекрасный русский литературный язык!</p>
                  <p>Особенности: лёгкость стиха, образность, народные выражения</p>
                  <div class="activity">Найди народные выражения в сказке!</div>
                  <div class="emoji-practice">"Три девицы под окном..."</div>
                  <div class="tip">💡 Стихи Пушкина легко запоминаются!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'lit4-s1-t1-q1',
                question: 'Кто написал "Сказку о рыбаке и рыбке"?',
                options: ['Л.Н. Толстой', 'А.С. Пушкин', 'И.А. Крылов', 'Ф.И. Тютчев'],
                correctAnswer: 1,
                explanation: 'Александр Сергеевич Пушкин — автор этой сказки!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'lit4-s1-t1-q2',
                question: 'В каком году родился А.С. Пушкин?',
                options: ['1799', '1800', '1899', '1700'],
                correctAnswer: 0,
                explanation: 'Пушкин родился в 1799 году!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'lit4-s1-t1-q3',
                question: 'Какая сказка Пушкина о красавице и мачехе?',
                options: ['Сказка о рыбаке и рыбке', 'Сказка о мёртвой царевне', 'Сказка о золотом петушке', 'Сказка о царе Салтане'],
                correctAnswer: 1,
                explanation: '"Сказка о мёртвой царевне и семи богатырях"!',
                difficulty: 'medium',
                points: 15
              }
            ]
          },
          {
            id: 'lit4-s1-t2',
            title: 'Л.Н. Толстой',
            description: 'Рассказы для детей',
            theory: `<h3>Лев Николаевич Толстой (1828-1910)</h3>
            <p>Великий русский писатель, автор рассказов для детей.</p>
            <h4>Рассказы:</h4>
            <ul>
              <li>"Филипок"</li>
              <li>"Котёнок"</li>
              <li>"Акула"</li>
              <li>"Прыжок"</li>
            </ul>
            <h4>Особенности:</h4>
            <p>Простой язык, поучительный характер, описание жизни крестьянских детей.</p>`,
            examples: ['Прочитай рассказ "Филипок"', 'Какой урок ты извлёк?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'lit4-s1-t2-l1',
                title: 'Рассказ "Филипок"',
                content: `<div class="kid-lesson">
                  <h2>👦 Филипок</h2>
                  <p>История о мальчике, который очень хотел учиться!</p>
                  <h3>Главная мысль:</h3>
                  <p>Желание учиться — это хорошо, но нужно слушаться родителей!</p>
                  <div class="activity">Перескажи рассказ!</div>
                  <div class="emoji-practice">Филипок хотел учиться, как старший брат! 📚</div>
                  <div class="tip">💡 Учение — это свет!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              },
              {
                id: 'lit4-s1-t2-l2',
                title: 'Рассказ "Акула"',
                content: `<div class="kid-lesson">
                  <h2>🦈 Акула</h2>
                  <p>Отец спасает сына от акулы!</p>
                  <h3>Главная мысль:</h3>
                  <p>Любовь отца к сыну, мужество и решимость!</p>
                  <div class="activity">Перескажи, как отец спас мальчика!</div>
                  <div class="emoji-practice">Отец не раздумывая бросился в воду! 🏊</div>
                  <div class="tip">💡 Родительская любовь — сильнее всего!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'lit4-s1-t2-q1',
                question: 'Какой рассказ Толстого о мальчике, который хотел учиться?',
                options: ['Акула', 'Прыжок', 'Филипок', 'Котёнок'],
                correctAnswer: 2,
                explanation: '"Филипок" — рассказ о мальчике, который хотел учиться!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'lit4-s1-t2-q2',
                question: 'В каком году родился Л.Н. Толстой?',
                options: ['1799', '1828', '1899', '1900'],
                correctAnswer: 1,
                explanation: 'Лев Николаевич Толстой родился в 1828 году!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'lit4-s1-t2-q3',
                question: 'Какой рассказ Толстого об отце и сыне на корабле?',
                options: ['Филипок', 'Котёнок', 'Акула', 'Прыжок'],
                correctAnswer: 2,
                explanation: '"Акула" — рассказ о том, как отец спас сына от акулы!',
                difficulty: 'easy',
                points: 10
              }
            ]
          }
        ]
      },
      {
        id: 'lit4-s2',
        title: 'Поэзия',
        description: 'Стихи о природе',
        order: 2,
        topics: [
          {
            id: 'lit4-s2-t1',
            title: 'Ф.И. Тютчев, А.А. Фет',
            description: 'Поэты природы',
            theory: `<h3>Поэты природы</h3>
            <h4>Фёдор Иванович Тютчев:</h4>
            <p>Автор знаменитого: "Чародейкою Зимою..."</p>
            <h4>Афанасий Афанасьевич Фет:</h4>
            <p>Автор стихов о весне, лете, природе.</p>
            <h4>Особенности:</h4>
            <p>Красота природы, образность, музыкальность стиха.</p>`,
            examples: ['Выучи стихотворение Тютчева', 'Найди средства выразительности'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'lit4-s2-t1-l1',
                title: 'Стихи о зиме',
                content: `<div class="kid-lesson">
                  <h2>❄️ Чародейкою Зимою...</h2>
                  <p>Фёдор Тютчев описывает красоту зимнего леса!</p>
                  <p>"Чародейкою Зимою околдован, лес стоит..."</p>
                  <div class="activity">Выучи стихотворение!</div>
                  <div class="emoji-practice">Зима — волшебница! ❄️</div>
                  <div class="tip">💡 Читай с чувством, представляй картину!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'lit4-s2-t1-q1',
                question: 'Кто написал стихотворение "Чародейкою Зимою..."?',
                options: ['А.С. Пушкин', 'Ф.И. Тютчев', 'А.А. Фет', 'Л.Н. Толстой'],
                correctAnswer: 1,
                explanation: 'Фёдор Иванович Тютчев — автор этого стихотворения!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'lit4-s2-t1-q2',
                question: 'О чём писали Тютчев и Фет?',
                options: ['О городе', 'О природе', 'О войне', 'О технике'],
                correctAnswer: 1,
                explanation: 'Тютчев и Фет — поэты природы!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'lit4-s2-t1-q3',
                question: 'Какой поэт написал много стихов о весне?',
                options: ['Пушкин', 'Толстой', 'Фет', 'Крылов'],
                correctAnswer: 2,
                explanation: 'Афанасий Афанасьевич Фет — автор стихов о весне!',
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
        id: 'lit4-q1',
        question: 'Кто написал "Сказку о рыбаке и рыбке"?',
        options: ['Л.Н. Толстой', 'А.С. Пушкин', 'И.А. Крылов', 'Ф.И. Тютчев'],
        correctAnswer: 1,
        explanation: 'Александр Сергеевич Пушкин — автор "Сказки о рыбаке и рыбке" и других знаменитых сказок в стихах.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'lit4-q2',
        question: 'Какой рассказ Л.Н. Толстого о мальчике, который хотел учиться?',
        options: ['Акула', 'Прыжок', 'Филипок', 'Котёнок'],
        correctAnswer: 2,
        explanation: '"Филипок" — рассказ о маленьком мальчике, который пошёл в школу без разрешения родителей.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ИНОСТРАННЫЙ ЯЗЫК ====================
  {
    id: 'english4',
    title: 'Иностранный язык',
    icon: <Languages className="w-5 h-5" />,
    color: 'text-cyan-400',
    gradient: 'from-cyan-500 to-blue-500',
    description: 'Английский язык: времена, модальные глаголы',
    sections: [
      {
        id: 'eng4-s1',
        title: 'Грамматика',
        description: 'Времена и модальные глаголы',
        order: 1,
        topics: [
          {
            id: 'eng4-s1-t1',
            title: 'Present Continuous',
            description: 'Настоящее продолженное',
            theory: `<h3>Present Continuous</h3>
            <p>Present Continuous описывает действие, происходящее прямо сейчас.</p>
            <h4>Формула:</h4>
            <p>am/is/are + глагол + -ing</p>
            <h4>Примеры:</h4>
            <ul>
              <li>I am reading now. — Я читаю сейчас.</li>
              <li>He is playing football. — Он играет в футбол.</li>
              <li>They are sleeping. — Они спят.</li>
            </ul>
            <h4>Слова-маркеры:</h4>
            <p>now, at the moment, right now</p>`,
            examples: ['Переведи: Я сейчас делаю домашнее задание', 'Поставь глагол в -ing форму'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'eng4-s1-t1-l1',
                title: 'Формула Present Continuous',
                content: `<div class="kid-lesson">
                  <h2>⏳ Present Continuous</h2>
                  <p>Для действий, которые происходят ПРЯМО СЕЙЧАС!</p>
                  <p>am/is/are + глагол + -ing</p>
                  <p>I am reading. = Я читаю (сейчас).</p>
                  <div class="activity">Переведи: Он сейчас играет!</div>
                  <div class="emoji-practice">He is playing now! 🎮</div>
                  <div class="tip">💡 Look! Listen! — слова-подсказки!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'eng4-s1-t1-l2',
                title: 'Отрицание и вопрос',
                content: `<div class="kid-lesson">
                  <h2>❓ Вопросы в Present Continuous</h2>
                  <p>Are you reading? = Ты читаешь?</p>
                  <p>I am not reading. = Я не читаю.</p>
                  <div class="activity">Задай вопрос: Он спит?</div>
                  <div class="emoji-practice">Is he sleeping? 😴</div>
                  <div class="tip">💡 am/is/are выносим в начало вопроса!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'eng4-s1-t1-q1',
                question: 'Выбери правильный перевод: "Я сейчас читаю книгу"',
                options: ['I read a book', 'I am reading a book', 'I reads a book', 'I reading a book'],
                correctAnswer: 1,
                explanation: 'Present Continuous: am/is/are + глагол + -ing!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'eng4-s1-t1-q2',
                question: 'Какое окончание у глагола в Present Continuous?',
                options: ['-ed', '-ing', '-s', '-er'],
                correctAnswer: 1,
                explanation: 'Present Continuous: am/is/are + глагол + -ing!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'eng4-s1-t1-q3',
                question: 'Выбери правильный вопрос: "Ты сейчас играешь?"',
                options: ['Do you play?', 'Are you playing?', 'Is you playing?', 'You are playing?'],
                correctAnswer: 1,
                explanation: 'Are you playing? — правильный вопрос в Present Continuous!',
                difficulty: 'medium',
                points: 15
              }
            ]
          },
          {
            id: 'eng4-s1-t2',
            title: 'Модальные глаголы',
            description: 'Can, must, should',
            theory: `<h3>Модальные глаголы</h3>
            <p>Модальные глаголы выражают отношение к действию (возможность, необходимость, совет).</p>
            <h4>Can (мочь):</h4>
            <p>I can swim. = Я умею плавать.</p>
            <h4>Must (должен):</h4>
            <p>You must go to school. = Ты должен ходить в школу.</p>
            <h4>Should (следует):</h4>
            <p>You should study more. = Тебе следует учиться больше.</p>`,
            examples: ['Переведи: Я могу бегать быстро', 'Что ты должен делать?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'eng4-s1-t2-l1',
                title: 'Глагол can',
                content: `<div class="kid-lesson">
                  <h2>💪 Can — мочь</h2>
                  <p>I can swim. = Я умею плавать.</p>
                  <p>I can't fly. = Я не умею летать.</p>
                  <p>Can you run? = Ты умеешь бегать?</p>
                  <div class="activity">Расскажи, что ты умеешь делать!</div>
                  <div class="emoji-practice">I can read, write, and speak English! 📚</div>
                  <div class="tip">💡 Can + глагол без to!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'eng4-s1-t2-l2',
                title: 'Глагол must',
                content: `<div class="kid-lesson">
                  <h2>📝 Must — должен</h2>
                  <p>You must do homework. = Ты должен делать домашку.</p>
                  <p>We must help parents. = Мы должны помогать родителям.</p>
                  <div class="activity">Что ты должен делать каждый день?</div>
                  <div class="emoji-practice">I must go to school! 🏫</div>
                  <div class="tip">💡 Must — это обязательно!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'eng4-s1-t2-q1',
                question: 'Что означает модальный глагол "must"?',
                options: ['Мочь', 'Хотеть', 'Должен', 'Любить'],
                correctAnswer: 2,
                explanation: 'Must = должен!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'eng4-s1-t2-q2',
                question: 'Как перевести "I can swim"?',
                options: ['Я плаваю', 'Я умею плавать', 'Я должен плавать', 'Я хочу плавать'],
                correctAnswer: 1,
                explanation: 'Can = мочь/уметь. I can swim = Я умею плавать!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'eng4-s1-t2-q3',
                question: 'Какой модальный глагол означает совет?',
                options: ['Can', 'Must', 'Should', 'May'],
                correctAnswer: 2,
                explanation: 'Should = следует (совет)!',
                difficulty: 'medium',
                points: 15
              }
            ]
          }
        ]
      },
      {
        id: 'eng4-s2',
        title: 'Лексика',
        description: 'Темы для разговора',
        order: 2,
        topics: [
          {
            id: 'eng4-s2-t1',
            title: 'Моё хобби',
            description: 'Hobbies',
            theory: `<h3>Hobbies — Хобби</h3>
            <h4>Слова:</h4>
            <ul>
              <li><b>read books</b> — читать книги</li>
              <li><b>play sports</b> — заниматься спортом</li>
              <li><b>draw</b> — рисовать</li>
              <li><b>listen to music</b> — слушать музыку</li>
              <li><b>play computer games</b> — играть в компьютерные игры</li>
              <li><b>collect stamps</b> — коллекционировать марки</li>
            </ul>`,
            examples: ['Расскажи о своём хобби', 'Спроси друга о его хобби'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'eng4-s2-t1-l1',
                title: 'Моё хобби',
                content: `<div class="kid-lesson">
                  <h2>🎯 My Hobby</h2>
                  <p>What is your hobby? = Какое у тебя хобби?</p>
                  <p>My hobby is reading. = Моё хобби — чтение.</p>
                  <p>I like playing football. = Мне нравится играть в футбол.</p>
                  <div class="activity">Расскажи о своём хобби!</div>
                  <div class="emoji-practice">I like collecting coins! 🪙</div>
                  <div class="tip">💡 like + глагол + -ing!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'eng4-s2-t1-q1',
                question: 'Как спросить "Какое у тебя хобби?"',
                options: ['What do you do?', 'What is your hobby?', 'Where are you?', 'How are you?'],
                correctAnswer: 1,
                explanation: 'What is your hobby? = Какое у тебя хобби?',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'eng4-s2-t1-q2',
                question: 'Как сказать "Мне нравится играть в футбол"?',
                options: ['I play football', 'I like playing football', 'I must play football', 'I can football'],
                correctAnswer: 1,
                explanation: 'I like playing football — мне нравится играть в футбол!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'eng4-s2-t1-q3',
                question: 'Как переводится "read books"?',
                options: ['Писать книги', 'Читать книги', 'Купить книги', 'Рисовать книги'],
                correctAnswer: 1,
                explanation: 'Read books = читать книги!',
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
        id: 'eng4-q1',
        question: 'Выбери правильный перевод: "Я сейчас читаю книгу"',
        options: ['I read a book', 'I am reading a book', 'I reads a book', 'I reading a book'],
        correctAnswer: 1,
        explanation: 'Present Continuous: am/is/are + глагол + -ing. I am reading a book = Я сейчас читаю книгу.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'eng4-q2',
        question: 'Что означает модальный глагол "must"?',
        options: ['Мочь', 'Хотеть', 'Должен', 'Любить'],
        correctAnswer: 2,
        explanation: 'Must = должен. You must study = Ты должен учиться.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ИЗОБРАЗИТЕЛЬНОЕ ИСКУССТВО ====================
  {
    id: 'art4',
    title: 'Изобразительное искусство',
    icon: <Palette className="w-5 h-5" />,
    color: 'text-pink-400',
    gradient: 'from-pink-500 to-rose-500',
    description: 'История искусства, художники, архитектура',
    sections: [
      {
        id: 'art4-s1',
        title: 'История искусства',
        description: 'Великие художники',
        order: 1,
        topics: [
          {
            id: 'art4-s1-t1',
            title: 'Русские художники',
            description: 'И.И. Левитан, И.И. Шишкин',
            theory: `<h3>Русские художники-пейзажисты</h3>
            <h4>Исаак Ильич Левитан:</h4>
            <p>Мастер "пейзажа настроения". Картины: "Золотая осень", "Над вечным покоем"</p>
            <h4>Иван Иванович Шишкин:</h4>
            <p>"Певец русского леса". Картины: "Утро в сосновом лесу", "Рожь"</p>
            <h4>Особенности:</h4>
            <p>Любовь к русской природе, реалистичность, передача настроения.</p>`,
            examples: ['Рассмотри картины Левитана', 'Опиши настроение картины'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'art4-s1-t1-l1',
                title: 'Левитан',
                content: `<div class="kid-lesson">
                  <h2>🎨 Исаак Левитан</h2>
                  <p>Мастер русского пейзажа!</p>
                  <p>Его картины передают настроение природы.</p>
                  <h3>Известные картины:</h3>
                  <p>"Золотая осень", "Владимирка", "Над вечным покоем"</p>
                  <div class="activity">Рассмотри картину "Золотая осень"!</div>
                  <div class="emoji-practice">Осень на картине — золотая, тихая, грустная... 🍂</div>
                  <div class="tip">💡 Пейзаж передаёт чувства художника!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              },
              {
                id: 'art4-s1-t1-l2',
                title: 'Шишкин',
                content: `<div class="kid-lesson">
                  <h2>🌲 Иван Шишкин</h2>
                  <p>"Певец русского леса!"</p>
                  <h3>Известные картины:</h3>
                  <p>"Утро в сосновом лесу", "Рожь", "Корабельная роща"</p>
                  <div class="activity">Найди медведей на картине "Утро в сосновом лесу"!</div>
                  <div class="emoji-practice">Медведи на картине — знаменитая деталь! 🐻</div>
                  <div class="tip">💡 Шишкин детально изображал природу!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'art4-s1-t1-q1',
                question: 'Кого называют "певцом русского леса"?',
                options: ['Левитан', 'Шишкин', 'Репин', 'Серов'],
                correctAnswer: 1,
                explanation: 'Ивана Шишкина называют "певцом русского леса"!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'art4-s1-t1-q2',
                question: 'Кто написал картину "Золотая осень"?',
                options: ['Шишкин', 'Левитан', 'Репин', 'Суриков'],
                correctAnswer: 1,
                explanation: 'Исаак Левитан — автор картины "Золотая осень"!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'art4-s1-t1-q3',
                question: 'Какие медведи на картине Шишкина?',
                options: ['Белые', 'Бурые', 'На картине нет медведей', 'Панда'],
                correctAnswer: 1,
                explanation: 'На картине "Утро в сосновом лесу" — бурые медведи!',
                difficulty: 'easy',
                points: 10
              }
            ]
          }
        ]
      },
      {
        id: 'art4-s2',
        title: 'Архитектура',
        description: 'Зодчество',
        order: 2,
        topics: [
          {
            id: 'art4-s2-t1',
            title: 'Русская архитектура',
            description: 'Храмы и соборы',
            theory: `<h3>Русская архитектура</h3>
            <h4>Особенности:</h4>
            <ul>
              <li>Луковичные купола</li>
              <li>Белокаменное зодчество</li>
              <li>Резные украшения</li>
            </ul>
            <h4>Известные памятники:</h4>
            <p>Храм Василия Блаженного, Собор Святой Софии, Церковь Покрова на Нерли</p>`,
            examples: ['Рассмотри изображение храма', 'Опиши особенности куполов'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'art4-s2-t1-l1',
                title: 'Храм Василия Блаженного',
                content: `<div class="kid-lesson">
                  <h2>⛪ Храм Василия Блаженного</h2>
                  <p>Знаменитый собор на Красной площади в Москве!</p>
                  <p>Построен в XVI веке при Иване Грозном.</p>
                  <h3>Особенности:</h3>
                  <p>9 куполов разного цвета, нет похожих куполов!</p>
                  <div class="activity">Рассмотри фото храма!</div>
                  <div class="emoji-practice">Каждый купол — как разные цветы! 🌸🌺</div>
                  <div class="tip">💡 Храм — символ России!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'art4-s2-t1-q1',
                question: 'Какая особенность русской церковной архитектуры?',
                options: ['Плоская крыша', 'Луковичные купола', 'Стеклянные стены', 'Металлическая крыша'],
                correctAnswer: 1,
                explanation: 'Луковичные купола — характерная особенность русской церковной архитектуры!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'art4-s2-t1-q2',
                question: 'Где находится Храм Василия Блаженного?',
                options: ['В Санкт-Петербурге', 'На Красной площади в Москве', 'В Киеве', 'В Новгороде'],
                correctAnswer: 1,
                explanation: 'Храм Василия Блаженного находится на Красной площади в Москве!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'art4-s2-t1-q3',
                question: 'При каком царе построен Храм Василия Блаженного?',
                options: ['Иван Калита', 'Дмитрий Донской', 'Иван IV Грозный', 'Пётр I'],
                correctAnswer: 2,
                explanation: 'Храм построен в XVI веке при Иване Грозном!',
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
        id: 'art4-q1',
        question: 'Кого называют "певцом русского леса"?',
        options: ['Левитан', 'Шишкин', 'Репин', 'Серов'],
        correctAnswer: 1,
        explanation: 'Ивана Шишкина называют "певцом русского леса" за его прекрасные картины с изображением леса.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'art4-q2',
        question: 'Какая особенность русской церковной архитектуры?',
        options: ['Плоская крыша', 'Луковичные купола', 'Стеклянные стены', 'Металлическая крыша'],
        correctAnswer: 1,
        explanation: 'Луковичные купола — характерная особенность русской церковной архитектуры.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== МУЗЫКА ====================
  {
    id: 'music4',
    title: 'Музыка',
    icon: <Music className="w-5 h-5" />,
    color: 'text-violet-400',
    gradient: 'from-violet-500 to-purple-500',
    description: 'Композиторы, музыкальные формы, жанры',
    sections: [
      {
        id: 'music4-s1',
        title: 'Великие композиторы',
        description: 'Русские композиторы',
        order: 1,
        topics: [
          {
            id: 'music4-s1-t1',
            title: 'П.И. Чайковский',
            description: 'Русский композитор',
            theory: `<h3>Пётр Ильич Чайковский (1840-1893)</h3>
            <p>Великий русский композитор, автор балетов, симфоний, опер.</p>
            <h4>Известные произведения:</h4>
            <ul>
              <li><b>Балет "Щелкунчик"</b> — рождественская сказка</li>
              <li><b>Балет "Лебединое озеро"</b></li>
              <li><b>Балет "Спящая красавица"</b></li>
              <li><b>Фортепианный цикл "Времена года"</b></li>
            </ul>`,
            examples: ['Послушай фрагмент из "Щелкунчика"', 'Опиши настроение музыки'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'music4-s1-t1-l1',
                title: 'Балет "Щелкунчик"',
                content: `<div class="kid-lesson">
                  <h2>🩰 Щелкунчик</h2>
                  <p>Балет Петра Чайковского по сказке Гофмана!</p>
                  <h3>Известные номера:</h3>
                  <p>"Марш", "Вальс цветов", "Танец Феи Драже"</p>
                  <div class="activity">Послушай "Вальс цветов"!</div>
                  <div class="emoji-practice">Музыка волшебная, лёгкая, сказочная! ✨</div>
                  <div class="tip">💡 Чайковский — гений балетной музыки!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              },
              {
                id: 'music4-s1-t1-l2',
                title: '"Времена года"',
                content: `<div class="kid-lesson">
                  <h2>🎹 Времена года</h2>
                  <p>12 пьес для фортепиано — по одной на каждый месяц!</p>
                  <p>"Январь. У камелька", "Март. Песня жаворонка"...</p>
                  <div class="activity">Послушай "Март. Песня жаворонка"!</div>
                  <div class="emoji-practice">Музыка рисует картину весны! 🌸</div>
                  <div class="tip">💡 Музыка может изображать картины природы!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'music4-s1-t1-q1',
                question: 'Кто автор балета "Щелкунчик"?',
                options: ['Моцарт', 'Бетховен', 'Чайковский', 'Бах'],
                correctAnswer: 2,
                explanation: 'Пётр Ильич Чайковский — автор балета "Щелкунчик"!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'music4-s1-t1-q2',
                question: 'Сколько пьес в цикле "Времена года" Чайковского?',
                options: ['4', '6', '12', '24'],
                correctAnswer: 2,
                explanation: '12 пьес — по одной на каждый месяц!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'music4-s1-t1-q3',
                question: 'Какой балет Чайковского о принцессе-лебеди?',
                options: ['Щелкунчик', 'Лебединое озеро', 'Спящая красавица', 'Золушка'],
                correctAnswer: 1,
                explanation: '"Лебединое озеро" — балет о принцессе Одетте!',
                difficulty: 'easy',
                points: 10
              }
            ]
          }
        ]
      },
      {
        id: 'music4-s2',
        title: 'Музыкальные формы',
        description: 'Строение музыки',
        order: 2,
        topics: [
          {
            id: 'music4-s2-t1',
            title: 'Музыкальная форма',
            description: 'Как устроена музыка',
            theory: `<h3>Музыкальная форма</h3>
            <p>Музыкальная форма — это строение музыкального произведения.</p>
            <h4>Простые формы:</h4>
            <ul>
              <li><b>Одночастная</b> (А) — одна часть</li>
              <li><b>Двухчастная</b> (АВ) — две разные части</li>
              <li><b>Трёхчастная</b> (АВА) — первая часть возвращается</li>
            </ul>`,
            examples: ['Определи форму песни', 'Послушай и назови части'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'music4-s2-t1-l1',
                title: 'Трёхчастная форма',
                content: `<div class="kid-lesson">
                  <h2>🎵 Трёхчастная форма (АВА)</h2>
                  <p>Первая часть — контрастная — возвращение первой!</p>
                  <p>Как: Припев — Куплет — Припев</p>
                  <div class="activity">Послушай песню и определи форму!</div>
                  <div class="emoji-practice">АВА — первая часть возвращается! 🔄</div>
                  <div class="tip">💡 Многие песни имеют трёхчастную форму!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'music4-s2-t1-q1',
                question: 'Что такое трёхчастная форма?',
                options: ['ААА', 'АВ', 'АВА', 'АВС'],
                correctAnswer: 2,
                explanation: 'Трёхчастная форма: АВА — первая часть, контрастная, возвращение первой!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'music4-s2-t1-q2',
                question: 'Какая форма у песни "Припев — Куплет — Припев"?',
                options: ['Одночастная', 'Двухчастная', 'Трёхчастная', 'Четырёхчастная'],
                correctAnswer: 2,
                explanation: 'Это трёхчастная форма (АВА)!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'music4-s2-t1-q3',
                question: 'Сколько частей в двухчастной форме?',
                options: ['1', '2', '3', '4'],
                correctAnswer: 1,
                explanation: 'Двухчастная форма (АВ) — две разные части!',
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
        id: 'music4-q1',
        question: 'Кто автор балета "Щелкунчик"?',
        options: ['Моцарт', 'Бетховен', 'Чайковский', 'Бах'],
        correctAnswer: 2,
        explanation: 'Пётр Ильич Чайковский — автор балетов "Щелкунчик", "Лебединое озеро", "Спящая красавица".',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'music4-q2',
        question: 'Что такое трёхчастная форма?',
        options: ['ААА', 'АВ', 'АВА', 'АВС'],
        correctAnswer: 2,
        explanation: 'Трёхчастная форма: АВА — первая часть, контрастная, возвращение первой.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ТЕХНОЛОГИЯ ====================
  {
    id: 'tech4',
    title: 'Технология',
    icon: <Ruler className="w-5 h-5" />,
    color: 'text-amber-400',
    gradient: 'from-amber-500 to-orange-500',
    description: 'Работа с разными материалами, конструирование',
    sections: [
      {
        id: 'tech4-s1',
        title: 'Работа с тканью',
        description: 'Шитьё и вышивка',
        order: 1,
        topics: [
          {
            id: 'tech4-s1-t1',
            title: 'Основы шитья',
            description: 'Ручные швы',
            theory: `<h3>Ручные швы</h3>
            <h4>Инструменты:</h4>
            <p>Игла, нитки, напёрсток, ножницы, ткань</p>
            <h4>Виды швов:</h4>
            <ul>
              <li><b>Шов "вперёд иголку"</b> — простой стежок</li>
              <li><b>Шов "назад иголку"</b> — прочный шов</li>
              <li><b>Обмёточный шов</b> — обработка края</li>
            </ul>
            <h4>Техника безопасности:</h4>
            <p>Иглы храни в игольнице, не бери в рот, передавай тупым концом.</p>`,
            examples: ['Выполни шов "вперёд иголку"', 'Как безопасно работать с иглой?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'tech4-s1-t1-l1',
                title: 'Шов "вперёд иголку"',
                content: `<div class="kid-lesson">
                  <h2>🪡 Шов "вперёд иголку"</h2>
                  <p>Самый простой шов!</p>
                  <p>1. Введи иглу с лицевой стороны</p>
                  <p>2. Выведи с изнаночной</p>
                  <p>3. Повтори на равном расстоянии</p>
                  <div class="activity">Выполни шов на образце!</div>
                  <div class="emoji-practice">Стежки должны быть одинаковые! 📏</div>
                  <div class="tip">💡 Используй напёрсток для защиты пальца!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              },
              {
                id: 'tech4-s1-t1-l2',
                title: 'Безопасность при шитье',
                content: `<div class="kid-lesson">
                  <h2>⚠️ Техника безопасности</h2>
                  <p>🪡 Иглы храни в игольнице</p>
                  <p>🪡 Не бери иглу в рот</p>
                  <p>🪡 Передавай тупым концом</p>
                  <p>✂️ Ножницы передавай кольцами вперёд</p>
                  <div class="activity">Расскажи правила безопасности!</div>
                  <div class="emoji-practice">Безопасность — главное! 🛡️</div>
                  <div class="tip">💡 Всегда проверяй, где игла!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'tech4-s1-t1-q1',
                question: 'Как правильно передавать иглу?',
                options: ['Тупым концом', 'Острым концом', 'Любым', 'Бросить на стол'],
                correctAnswer: 0,
                explanation: 'Иглу нужно передавать тупым концом (ушком), чтобы не уколоть!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'tech4-s1-t1-q2',
                question: 'Какой шов самый простой?',
                options: ['Шов назад иголку', 'Шов вперёд иголку', 'Обмёточный шов', 'Петельный шов'],
                correctAnswer: 1,
                explanation: 'Шов "вперёд иголку" — самый простой!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'tech4-s1-t1-q3',
                question: 'Для чего нужен напёрсток?',
                options: ['Для хранения игл', 'Для защиты пальца', 'Для вышивания', 'Для резки'],
                correctAnswer: 1,
                explanation: 'Напёрсток защищает палец от уколов иглой!',
                difficulty: 'easy',
                points: 10
              }
            ]
          }
        ]
      },
      {
        id: 'tech4-s2',
        title: 'Конструирование',
        description: 'Модели и макеты',
        order: 2,
        topics: [
          {
            id: 'tech4-s2-t1',
            title: 'Изготовление моделей',
            description: 'Из картона и бумаги',
            theory: `<h3>Конструирование моделей</h3>
            <p>Модель — это уменьшенная копия предмета.</p>
            <h4>Этапы работы:</h4>
            <ol>
              <li>Выбор объекта</li>
              <li>Измерение и расчёт</li>
              <li>Создание чертежа</li>
              <li>Вырезание и сборка</li>
              <li>Оформление</li>
            </ol>`,
            examples: ['Сделай модель дома', 'Создай макет комнаты'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'tech4-s2-t1-l1',
                title: 'Модель из картона',
                content: `<div class="kid-lesson">
                  <h2>🏠 Модель дома</h2>
                  <p>1. Нарисуй развёртку дома</p>
                  <p>2. Вырежи по контуру</p>
                  <p>3. Согни по линиям сгиба</p>
                  <p>4. Склей края</p>
                  <div class="activity">Сделай модель своего дома!</div>
                  <div class="emoji-practice">Развёртка — это как развёрнутая коробка! 📦</div>
                  <div class="tip">💡 Сгибы проглаживай тупой стороной ножниц!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 25
              }
            ],
            quiz: [
              {
                id: 'tech4-s2-t1-q1',
                question: 'Что такое развёртка?',
                options: ['Готовая модель', 'Чертёж для сборки модели', 'Инструмент', 'Вид клея'],
                correctAnswer: 1,
                explanation: 'Развёртка — это плоский чертёж, который при сгибании превращается в объёмную модель!',
                difficulty: 'medium',
                points: 15
              },
              {
                id: 'tech4-s2-t1-q2',
                question: 'Из чего делают модели?',
                options: ['Только из дерева', 'Только из металла', 'Из картона и бумаги', 'Только из пластика'],
                correctAnswer: 2,
                explanation: 'Модели делают из картона, бумаги и других материалов!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'tech4-s2-t1-q3',
                question: 'Какой первый этап изготовления модели?',
                options: ['Склеивание', 'Выбор объекта', 'Оформление', 'Покраска'],
                correctAnswer: 1,
                explanation: 'Сначала нужно выбрать объект для модели!',
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
        id: 'tech4-q1',
        question: 'Как правильно передавать иглу?',
        options: ['Тупым концом', 'Острым концом', 'Любым', 'Бросить на стол'],
        correctAnswer: 0,
        explanation: 'Иглу нужно передавать тупым концом (ушком), чтобы не уколоть партнёра.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'tech4-q2',
        question: 'Что такое развёртка?',
        options: ['Готовая модель', 'Чертёж для сборки модели', 'Инструмент', 'Вид клея'],
        correctAnswer: 1,
        explanation: 'Развёртка — это плоский чертёж, который при сгибании и склеивании превращается в объёмную модель.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ФИЗИЧЕСКАЯ КУЛЬТУРА ====================
  {
    id: 'pe4',
    title: 'Физическая культура',
    icon: <Dumbbell className="w-5 h-5" />,
    color: 'text-green-400',
    gradient: 'from-green-500 to-emerald-500',
    description: 'Виды спорта, физические качества, закаливание',
    sections: [
      {
        id: 'pe4-s1',
        title: 'Физические качества',
        description: 'Развитие тела',
        order: 1,
        topics: [
          {
            id: 'pe4-s1-t1',
            title: 'Основные физические качества',
            description: 'Сила, быстрота, выносливость',
            theory: `<h3>Физические качества</h3>
            <h4>Сила:</h4>
            <p>Способность преодолевать сопротивление. Упражнения: подтягивания, отжимания, приседания.</p>
            <h4>Быстрота:</h4>
            <p>Способность выполнять движения за минимальное время. Упражнения: бег на короткие дистанции.</p>
            <h4>Выносливость:</h4>
            <p>Способность длительно выполнять работу. Упражнения: бег на длинные дистанции, плавание.</p>
            <h4>Гибкость:</h4>
            <p>Способность выполнять движения с большой амплитудой. Упражнения: растяжка.</p>`,
            examples: ['Как развить силу?', 'Упражнения для гибкости'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'pe4-s1-t1-l1',
                title: 'Развитие силы',
                content: `<div class="kid-lesson">
                  <h2>💪 Сила</h2>
                  <p>Сила — это способность преодолевать сопротивление!</p>
                  <h3>Упражнения для силы:</h3>
                  <p>• Отжимания от пола</p>
                  <p>• Подтягивания</p>
                  <p>• Приседания</p>
                  <div class="activity">Сделай 10 приседаний!</div>
                  <div class="emoji-practice">Регулярные тренировки = сила! 💪</div>
                  <div class="tip">💡 Начинай с малого, постепенно увеличивай!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'pe4-s1-t1-l2',
                title: 'Гибкость и выносливость',
                content: `<div class="kid-lesson">
                  <h2>🤸 Гибкость и 🏃 Выносливость</h2>
                  <p>Гибкость: растяжка, наклоны, шпагат</p>
                  <p>Выносливость: бег, плавание, лыжи</p>
                  <div class="activity">Сделай наклон к ногам!</div>
                  <div class="emoji-practice">Гибкость нужно развивать постепенно! 🤸</div>
                  <div class="tip">💡 Растягивайся на разогретые мышцы!</div>
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
        id: 'pe4-s2',
        title: 'Закаливание',
        description: 'Укрепление здоровья',
        order: 2,
        topics: [
          {
            id: 'pe4-s2-t1',
            title: 'Правила закаливания',
            description: 'Как стать здоровее',
            theory: `<h3>Закаливание</h3>
            <p>Закаливание — это повышение устойчивости организма к неблагоприятным условиям.</p>
            <h4>Правила:</h4>
            <ul>
              <li>Начинай постепенно</li>
              <li>Регулярность — главное</li>
              <li>Учитывай состояние здоровья</li>
              <li>Закаливайся после болезни осторожно</li>
            </ul>
            <h4>Виды закаливания:</h4>
            <p>Воздушные ванны, обтирания, обливания, купание</p>`,
            examples: ['Как правильно закаливаться?', 'Виды закаливания'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'pe4-s2-t1-l1',
                title: 'Правила закаливания',
                content: `<div class="kid-lesson">
                  <h2>❄️ Закаливание</h2>
                  <p>Правила:</p>
                  <p>1. Начинай постепенно (тёплая вода → прохладная)</p>
                  <p>2. Делай регулярно</p>
                  <p>3. Не закаливайся во время болезни</p>
                  <div class="activity">Принимай контрастный душ!</div>
                  <div class="emoji-practice">Закалённый человек меньше болеет! 💪</div>
                  <div class="tip">💡 Сначала посоветуйся с родителями и врачом!</div>
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
        id: 'pe4-q1',
        question: 'Какое физическое качество помогает долго бежать?',
        options: ['Сила', 'Быстрота', 'Выносливость', 'Гибкость'],
        correctAnswer: 2,
        explanation: 'Выносливость — это способность длительно выполнять физическую работу, например, долго бежать.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe4-q2',
        question: 'Какое главное правило закаливания?',
        options: ['Начинать с холодной воды', 'Делать постепенно и регулярно', 'Закаливаться только зимой', 'Пропускать дни'],
        correctAnswer: 1,
        explanation: 'Главные правила закаливания: постепенность и регулярность. Нельзя сразу начинать с холодной воды.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ОБЖ ====================
  {
    id: 'safety4',
    title: 'ОБЖ',
    icon: <Shield className="w-5 h-5" />,
    color: 'text-orange-400',
    gradient: 'from-orange-500 to-red-500',
    description: 'Безопасность в быту и на природе',
    sections: [
      {
        id: 'safety4-s1',
        title: 'Безопасность на воде',
        description: 'Правила купания',
        order: 1,
        topics: [
          {
            id: 'safety4-s1-t1',
            title: 'Правила поведения на воде',
            description: 'Купание безопасно',
            theory: `<h3>Безопасность на воде</h3>
            <h4>Правила купания:</h4>
            <ul>
              <li>Купайся только в разрешённых местах</li>
              <li>Не плавай один</li>
              <li>Не ныряй в незнакомых местах</li>
              <li>Не заплывай далеко</li>
              <li>Не купайся сразу после еды</li>
            </ul>
            <h4>Если тонет человек:</h4>
            <ol>
              <li>Зови на помощь</li>
              <li>Брось плавающий предмет</li>
              <li>Не ныряй сам, если не умеешь спасать</li>
            </ol>`,
            examples: ['Как правильно купаться?', 'Что делать, если кто-то тонет?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'safety4-s1-t1-l1',
                title: 'Правила купания',
                content: `<div class="kid-lesson">
                  <h2>🏊 Правила купания</h2>
                  <p>✓ Купайся только в разрешённых местах</p>
                  <p>✓ Не плавай один</p>
                  <p>✓ Не ныряй в незнакомых местах</p>
                  <p>✓ Не заплывай за буйки</p>
                  <div class="activity">Расскажи правила!</div>
                  <div class="emoji-practice">Вода — друг и враг! Будь осторожен! 🌊</div>
                  <div class="tip">💡 Лучше недоплавать, чем перетонуть!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'safety4-s1-t1-l2',
                title: 'Помощь тонущему',
                content: `<div class="kid-lesson">
                  <h2>🆘 Если кто-то тонет!</h2>
                  <p>1. Зови на помощь!</p>
                  <p>2. Брось плавающий предмет (мяч, доску)</p>
                  <p>3. Вытяни палкой или верёвкой</p>
                  <p>4. Не ныряй сам, если не умеешь спасать!</p>
                  <div class="activity">Что нужно бросить тонущему?</div>
                  <div class="emoji-practice">Любой плавающий предмет! 🏐</div>
                  <div class="tip">💡 Спасатель должен быть в безопасности!</div>
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
        id: 'safety4-s2',
        title: 'Безопасность в лесу',
        description: 'Правила поведения в природе',
        order: 2,
        topics: [
          {
            id: 'safety4-s2-t1',
            title: 'Если заблудился в лесу',
            description: 'Действия в лесу',
            theory: `<h3>Если заблудился в лесу</h3>
            <h4>Правила:</h4>
            <ul>
              <li>Не паникуй!</li>
              <li>Оставайся на месте</li>
              <li>Зови на помощь</li>
              <li>Ищи ручей — он выведет к людям</li>
              <li>Не ешь незнакомые грибы и ягоды</li>
            </ul>
            <h4>Как не заблудиться:</h4>
            <ul>
              <li>Не ходи в лес один</li>
              <li>Запоминай ориентиры</li>
              <li>Бери с собой телефон и воду</li>
            </ul>`,
            examples: ['Что делать, если заблудился?', 'Какие ориентиры в лесу?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'safety4-s2-t1-l1',
                title: 'Правила поведения в лесу',
                content: `<div class="kid-lesson">
                  <h2>🌲 В лесу</h2>
                  <p>✓ Не ходи один</p>
                  <p>✓ Запоминай ориентиры (деревья, тропинки)</p>
                  <p>✓ Не ешь незнакомые ягоды</p>
                  <p>✓ Бери телефон и воду</p>
                  <div class="activity">Какие ориентиры ты можешь запомнить?</div>
                  <div class="emoji-practice">Большое дерево, поворот тропы, камень! 🌳</div>
                  <div class="tip">💡 Ориентиры — твои путеводные звёзды!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'safety4-s2-t1-l2',
                title: 'Если заблудился',
                content: `<div class="kid-lesson">
                  <h2>😰 Если заблудился</h2>
                  <p>1. Не паникуй! Остановись и успокойся</p>
                  <p>2. Оставайся на месте — тебя найдут</p>
                  <p>3. Зови на помощь громко</p>
                  <p>4. Ищи ручей — он выведет к людям</p>
                  <div class="activity">Выучи эти правила!</div>
                  <div class="emoji-practice">Ручей течёт к реке, река — к людям! 💧</div>
                  <div class="tip">💡 Спокойствие — главное!</div>
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
        id: 'safety4-q1',
        question: 'Что делать, если заблудился в лесу?',
        options: ['Бежать куда глаза глядят', 'Оставаться на месте и звать на помощь', 'Паниковать', 'Петь песни'],
        correctAnswer: 1,
        explanation: 'Если заблудился, нужно оставаться на месте, сохранять спокойствие и звать на помощь. Тебя обязательно найдут!',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'safety4-q2',
        question: 'Что нужно бросить тонущему человеку?',
        options: ['Камень', 'Плавающий предмет', 'Палку', 'Ничего'],
        correctAnswer: 1,
        explanation: 'Тонущему нужно бросить любой плавающий предмет: мяч, доску, пластиковую бутылку. Это поможет ему держаться на воде.',
        difficulty: 'easy',
        points: 10
      }
    ]
  }
]
