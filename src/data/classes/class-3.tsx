// ==================== 3 КЛАСС ====================

import { Calculator, Book, Globe, BookOpen, Languages, Palette, Music, Dumbbell, Shield, Ruler, Monitor } from 'lucide-react'
import type { Grade } from '../types'

export const grade3: Grade = {
  id: 3,
  name: '3 класс',
  shortName: '3 кл.',
  subjects: [
    // ==================== МАТЕМАТИКА ====================
    {
      id: 'math3',
      title: 'Математика',
      icon: <Calculator className="w-5 h-5" />,
      color: 'text-blue-400',
      gradient: 'from-blue-500 to-indigo-500',
      description: 'Таблица умножения, деление, задачи',
      sections: [
        {
          id: 'math3-sec1',
          title: 'Умножение и деление',
          description: 'Таблица умножения',
          topics: [
            {
              id: 'math3-sec1-t1',
              title: 'Таблица умножения',
              description: 'Умножение чисел от 1 до 9',
              lessons: [
                {
                  id: 'math3-sec1-t1-l1',
                  title: 'Умножение на 2 и 3',
                  description: 'Первые строки таблицы',
                  theory: `<h3>✖️ Умножение на 2</h3>
                  <p>Умножение на 2 — это сложение двух одинаковых чисел!</p>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
2 × 1 = 2     2 × 6 = 12
2 × 2 = 4     2 × 7 = 14
2 × 3 = 6     2 × 8 = 16
2 × 4 = 8     2 × 9 = 18
2 × 5 = 10    2 × 10 = 20
                  </pre>
                  <h3>✖️ Умножение на 3</h3>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
3 × 1 = 3     3 × 6 = 18
3 × 2 = 6     3 × 7 = 21
3 × 3 = 9     3 × 8 = 24
3 × 4 = 12    3 × 9 = 27
3 × 5 = 15    3 × 10 = 30
                  </pre>`,
                  examples: ['Чему равно 7 × 2?', 'Вычисли: 8 × 3'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                },
                {
                  id: 'math3-sec1-t1-l2',
                  title: 'Умножение на 4, 5, 6',
                  description: 'Продолжаем таблицу',
                  theory: `<h3>✖️ Умножение на 4</h3>
                  <p>Умножение на 4 — это два раза умножить на 2!</p>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
4 × 1 = 4     4 × 6 = 24
4 × 2 = 8     4 × 7 = 28
4 × 3 = 12    4 × 8 = 32
4 × 4 = 16    4 × 9 = 36
4 × 5 = 20    4 × 10 = 40
                  </pre>
                  <h3>✖️ Умножение на 5</h3>
                  <p>Все ответы заканчиваются на 0 или 5!</p>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
5 × 1 = 5     5 × 6 = 30
5 × 2 = 10    5 × 7 = 35
5 × 3 = 15    5 × 8 = 40
5 × 4 = 20    5 × 9 = 45
5 × 5 = 25    5 × 10 = 50
                  </pre>`,
                  examples: ['Чему равно 6 × 5?', 'Вычисли: 7 × 4'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 25
                },
                {
                  id: 'math3-sec1-t1-l3',
                  title: 'Умножение на 7, 8, 9',
                  description: 'Заключительные строки',
                  theory: `<h3>✖️ Умножение на 9 — хитрость!</h3>
                  <p>Сумма цифр ответа всегда равна 9!</p>
                  <p>9 × 3 = 27 → 2 + 7 = 9</p>
                  <p>9 × 7 = 63 → 6 + 3 = 9</p>
                  <h4>Трюк с пальцами:</h4>
                  <p>Загни палец, который умножаешь — слева десятки, справа единицы!</p>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
9 × 1 = 9     9 × 6 = 54
9 × 2 = 18    9 × 7 = 63
9 × 3 = 27    9 × 8 = 72
9 × 4 = 36    9 × 9 = 81
9 × 5 = 45    9 × 10 = 90
                  </pre>`,
                  examples: ['Чему равно 8 × 7?', 'Вычисли: 9 × 6'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            },
            {
              id: 'math3-sec1-t2',
              title: 'Деление',
              description: 'Обратное действие умножению',
              lessons: [
                {
                  id: 'math3-sec1-t2-l1',
                  title: 'Что такое деление?',
                  description: 'Деление — обратное умножению',
                  theory: `<h3>➗ Деление</h3>
                  <p>Деление — это разделение на равные части.</p>
                  <h4>Связь с умножением:</h4>
                  <p>Если 3 × 4 = 12, то:</p>
                  <ul>
                    <li>12 : 3 = 4</li>
                    <li>12 : 4 = 3</li>
                  </ul>
                  <h4>Компоненты деления:</h4>
                  <ul>
                    <li><strong>Делимое</strong> — число, которое делят (12)</li>
                    <li><strong>Делитель</strong> — на сколько делят (3)</li>
                    <li><strong>Частное</strong> — результат (4)</li>
                  </ul>`,
                  examples: ['Вычисли: 24 : 6', 'Найди частное: 35 : 7'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            }
          ]
        },
        {
          id: 'math3-sec2',
          title: 'Геометрия',
          description: 'Периметр и площадь',
          topics: [
            {
              id: 'math3-sec2-t1',
              title: 'Периметр',
              description: 'Сумма сторон фигуры',
              lessons: [
                {
                  id: 'math3-sec2-t1-l1',
                  title: 'Периметр прямоугольника',
                  description: 'Сумма всех сторон',
                  theory: `<h3>📏 Периметр (P)</h3>
                  <p>Периметр — сумма длин всех сторон фигуры.</p>
                  <h4>Формулы:</h4>
                  <ul>
                    <li><strong>P = a + b + a + b</strong></li>
                    <li><strong>P = (a + b) × 2</strong></li>
                  </ul>
                  <h4>Пример:</h4>
                  <p>Прямоугольник со сторонами 5 см и 3 см:</p>
                  <p>P = (5 + 3) × 2 = 16 см</p>
                  <h4>Периметр квадрата:</h4>
                  <p>P = a × 4</p>`,
                  examples: ['Найди периметр прямоугольника 6×4', 'Найди периметр квадрата со стороной 5'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            },
            {
              id: 'math3-sec2-t2',
              title: 'Площадь',
              description: 'Внутренняя часть фигуры',
              lessons: [
                {
                  id: 'math3-sec2-t2-l1',
                  title: 'Площадь прямоугольника',
                  description: 'Длина × ширина',
                  theory: `<h3>📐 Площадь (S)</h3>
                  <p>Площадь — это внутренняя часть фигуры.</p>
                  <h4>Формула:</h4>
                  <p><strong>S = a × b</strong> (длина × ширина)</p>
                  <h4>Единицы площади:</h4>
                  <ul>
                    <li>мм², см², дм², м²</li>
                  </ul>
                  <h4>Пример:</h4>
                  <p>Прямоугольник со сторонами 5 см и 3 см:</p>
                  <p>S = 5 × 3 = 15 см²</p>
                  <h4>Площадь квадрата:</h4>
                  <p>S = a × a = a²</p>`,
                  examples: ['Найди площадь прямоугольника 7×4', 'Найди площадь квадрата со стороной 6'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Чему равно 7 × 8?',
          options: ['54', '56', '58', '64'],
          correctAnswer: 1,
          explanation: '7 × 8 = 56. Это нужно запомнить!',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'q2',
          question: 'Чему равен периметр квадрата со стороной 5 см?',
          options: ['15 см', '20 см', '25 см', '10 см'],
          correctAnswer: 1,
          explanation: 'P = a × 4 = 5 × 4 = 20 см',
          difficulty: 'easy',
          points: 10
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
      description: 'Морфология, синтаксис, орфография',
      sections: [
        {
          id: 'russian3-sec1',
          title: 'Состав слова',
          description: 'Морфемы',
          topics: [
            {
              id: 'russian3-sec1-t1',
              title: 'Корень слова',
              description: 'Главная часть слова',
              lessons: [
                {
                  id: 'russian3-sec1-t1-l1',
                  title: 'Что такое корень?',
                  description: 'Общая часть родственных слов',
                  theory: `<h3>🌱 Корень слова</h3>
                  <p>Корень — главная значимая часть слова, общая для родственных слов.</p>
                  <h4>Пример:</h4>
                  <ul>
                    <li>лес, лесок, лесной, лесник</li>
                    <li>Корень: -лес-</li>
                  </ul>
                  <h4>Правило:</h4>
                  <p>Чтобы найти корень, подбери родственные слова!</p>
                  <h4>⚠️ Важно:</h4>
                  <p>Однокоренные слова имеют одинаковый корень и связаны по смыслу.</p>`,
                  examples: ['Найди корень в слове "домик"', 'Подбери однокоренные слова к "вода"'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            },
            {
              id: 'russian3-sec1-t2',
              title: 'Приставка и суффикс',
              description: 'Образование новых слов',
              lessons: [
                {
                  id: 'russian3-sec1-t2-l1',
                  title: 'Приставка',
                  description: 'Часть слова перед корнем',
                  theory: `<h3>➡️ Приставка</h3>
                  <p>Приставка — часть слова перед корнем, служит для образования новых слов.</p>
                  <h4>Примеры приставок:</h4>
                  <ul>
                    <li>при- (пришёл)</li>
                    <li>за- (забежал)</li>
                    <li>по- (побежал)</li>
                    <li>пере- (перешёл)</li>
                    <li>вы- (выбежал)</li>
                  </ul>
                  <h4>Пример:</h4>
                  <p>ходить → при-ходить, вы-ходить, пере-ходить</p>`,
                  examples: ['Выдели приставку: побежал', 'Образуй слово с приставкой за- от "говорить"'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            }
          ]
        },
        {
          id: 'russian3-sec2',
          title: 'Части речи',
          description: 'Имя существительное, прилагательное, глагол',
          topics: [
            {
              id: 'russian3-sec2-t1',
              title: 'Имя существительное',
              description: 'Склонение, падежи',
              lessons: [
                {
                  id: 'russian3-sec2-t1-l1',
                  title: 'Падежи',
                  description: '6 падежей русского языка',
                  theory: `<h3>📝 Падежи</h3>
                  <p>В русском языке 6 падежей:</p>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px; font-size: 14px;">
Именительный   (кто? что?)        стол
Родительный    (кого? чего?)      стола
Дательный      (кому? чему?)      столу
Винительный    (кого? что?)       стол
Творительный   (кем? чем?)        столом
Предложный     (о ком? о чём?)    о столе
                  </pre>
                  <h4>Запоминалка:</h4>
                  <p>"Иван Родил Девчонку, Велел Тащить Пелёнку"</p>`,
                  examples: ['Определи падеж: "вижу стол"', 'Поставь в родительном падеже: книга'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Какой падеж отвечает на вопрос "кому? чему?"?',
          options: ['Именительный', 'Родительный', 'Дательный', 'Винительный'],
          correctAnswer: 2,
          explanation: 'Дательный падеж отвечает на вопросы "кому? чему?"',
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
      description: 'Басни, рассказы, стихи',
      sections: [
        {
          id: 'lit3-sec1',
          title: 'Басня',
          description: 'Басни И.А. Крылова',
          topics: [
            {
              id: 'lit3-sec1-t1',
              title: 'И.А. Крылов',
              description: 'Великий баснописец',
              lessons: [
                {
                  id: 'lit3-sec1-t1-l1',
                  title: 'Что такое басня?',
                  description: 'Особенности жанра',
                  theory: `<h3>📖 Басня</h3>
                  <p>Басня — короткий рассказ в стихах или прозе с нравоучением.</p>
                  <h4>Особенности басни:</h4>
                  <ul>
                    <li>Короткий сюжет</li>
                    <li>Герои — животные или люди</li>
                    <li>Мораль (нравоучительный вывод)</li>
                    <li>Аллегория (иносказание)</li>
                  </ul>
                  <h4>И.А. Крылов (1769-1844):</h4>
                  <p>Великий русский баснописец. Написал более 200 басен.</p>`,
                  examples: ['Какие басни Крылова ты знаешь?', 'Что такое мораль басни?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                },
                {
                  id: 'lit3-sec1-t1-l2',
                  title: '"Ворона и Лисица"',
                  description: 'Анализ басни',
                  theory: `<h3>🦊 "Ворона и Лисица"</h3>
                  <h4>Герои:</h4>
                  <ul>
                    <li>Ворона — глупая, доверчивая</li>
                    <li>Лисица — хитрая, льстивая</li>
                  </ul>
                  <h4>Мораль:</h4>
                  <p>"Уж сколько раз твердили миру,<br/>
                  Что лесть гнусна, вредна; но только всё не впрок,<br/>
                  И в сердце льстец всегда отыщет уголок."</p>
                  <h4>Главная мысль:</h4>
                  <p>Не верь льстецам! Лесть опасна.</p>`,
                  examples: ['Какой характер у Лисицы?', 'Чему учит эта басня?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 25
                }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Кто написал басню "Ворона и Лисица"?',
          options: ['А.С. Пушкин', 'И.А. Крылов', 'Л.Н. Толстой', 'К.И. Чуковский'],
          correctAnswer: 1,
          explanation: 'Басню "Ворона и Лисица" написал Иван Андреевич Крылов.',
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
      description: 'Природа, организм человека',
      sections: [
        {
          id: 'world3-sec1',
          title: 'Организм человека',
          description: 'Строение тела',
          topics: [
            {
              id: 'world3-sec1-t1',
              title: 'Органы человека',
              description: 'Основные системы органов',
              lessons: [
                {
                  id: 'world3-sec1-t1-l1',
                  title: 'Системы органов',
                  description: 'Как работают органы',
                  theory: `<h3>🫀 Системы органов человека</h3>
                  <h4>Основные системы:</h4>
                  <ul>
                    <li><strong>Пищеварительная</strong> — переваривание пищи</li>
                    <li><strong>Дыхательная</strong> — дыхание (лёгкие)</li>
                    <li><strong>Кровеносная</strong> — кровообращение (сердце)</li>
                    <li><strong>Нервная</strong> — управление организмом (мозг)</li>
                    <li><strong>Опорно-двигательная</strong> — движение (кости, мышцы)</li>
                  </ul>
                  <h4>⚠️ Здоровый образ жизни:</h4>
                  <ul>
                    <li>Правильное питание</li>
                    <li>Физические упражнения</li>
                    <li>Сон 9-10 часов</li>
                  </ul>`,
                  examples: ['Назови органы дыхания', 'Какая система отвечает за движение?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Какой орган является "насосом" организма?',
          options: ['Мозг', 'Лёгкие', 'Сердце', 'Желудок'],
          correctAnswer: 2,
          explanation: 'Сердце — это насос, который перекачивает кровь по организму.',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    // ==================== ИНОСТРАННЫЙ ЯЗЫК (АНГЛИЙСКИЙ) ====================
    {
      id: 'english3',
      title: 'Английский язык',
      icon: <Languages className="w-5 h-5" />,
      color: 'text-cyan-400',
      gradient: 'from-cyan-500 to-blue-500',
      description: 'Базовые слова, фразы, грамматика',
      sections: [
        {
          id: 'english3-sec1',
          title: 'Семья и дом',
          description: 'Слова о семье и доме',
          topics: [
            {
              id: 'english3-sec1-t1',
              title: 'Члены семьи',
              description: 'Family members',
              lessons: [
                {
                  id: 'english3-sec1-t1-l1',
                  title: 'Моя семья',
                  description: 'My family',
                  theory: `<h3>👨‍👩‍👧‍👦 Семья — Family</h3>
                  <h4>Запомни слова:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
mother / mum    — мама
father / dad    — папа
sister          — сестра
brother         — брат
grandmother     — бабушка
grandfather     — дедушка
family          — семья
                  </pre>
                  <h4>💡 Фразы:</h4>
                  <ul>
                    <li>This is my mother. — Это моя мама.</li>
                    <li>I have a sister. — У меня есть сестра.</li>
                    <li>My family is big. — Моя семья большая.</li>
                  </ul>`,
                  examples: ['Как сказать "у меня есть брат"?', 'Переведи: "This is my father"'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                },
                {
                  id: 'english3-sec1-t1-l2',
                  title: 'Глагол have got',
                  description: 'Иметь',
                  theory: `<h3>✋ Have got — иметь</h3>
                  <h4>Утверждение:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
I have got     — у меня есть
You have got   — у тебя есть
He has got     — у него есть
She has got    — у неё есть
We have got    — у нас есть
They have got  — у них есть
                  </pre>
                  <h4>🎮 Краткая форма:</h4>
                  <ul>
                    <li>I've got a cat. — У меня есть кот.</li>
                    <li>She's got a dog. — У неё есть собака.</li>
                  </ul>`,
                  examples: ['Напиши: "У меня есть сестра"', 'Напиши: "У него есть брат"'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            },
            {
              id: 'english3-sec1-t2',
              title: 'Мой дом',
              description: 'My house',
              lessons: [
                {
                  id: 'english3-sec1-t2-l1',
                  title: 'Комнаты',
                  description: 'Rooms',
                  theory: `<h3>🏠 Комнаты — Rooms</h3>
                  <h4>Запомни слова:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
house      — дом
room       — комната
bedroom    — спальня
kitchen    — кухня
bathroom   — ванная
living room — гостиная
                  </pre>
                  <h4>💡 Фразы:</h4>
                  <ul>
                    <li>There is a kitchen. — Там есть кухня.</li>
                    <li>My room is big. — Моя комната большая.</li>
                  </ul>`,
                  examples: ['Переведи: "bedroom"', 'Как сказать "гостиная"?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            }
          ]
        },
        {
          id: 'english3-sec2',
          title: 'Животные',
          description: 'Animals',
          topics: [
            {
              id: 'english3-sec2-t1',
              title: 'Домашние животные',
              description: 'Pets',
              lessons: [
                {
                  id: 'english3-sec2-t1-l1',
                  title: 'Питомцы',
                  description: 'Pets',
                  theory: `<h3>🐾 Домашние животные — Pets</h3>
                  <h4>Запомни слова:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
cat      — кошка
dog      — собака
fish     — рыба
bird     — птица
hamster  — хомяк
rabbit   — кролик
mouse    — мышь
                  </pre>
                  <h4>💡 Фразы:</h4>
                  <ul>
                    <li>I've got a cat. — У меня есть кошка.</li>
                    <li>My dog is funny. — Моя собака смешная.</li>
                  </ul>`,
                  examples: ['Как будет "хомяк"?', 'Скажи: "У меня есть птица"'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Как перевести слово "sister"?',
          options: ['Брат', 'Сестра', 'Мама', 'Бабушка'],
          correctAnswer: 1,
          explanation: 'Sister — это сестра на английском языке.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'q2',
          question: 'Выбери правильный вариант: "She ___ a cat."',
          options: ['have got', 'has got', 'is got', 'are got'],
          correctAnswer: 1,
          explanation: 'С местоимениями he/she/it используем has got.',
          difficulty: 'medium',
          points: 15
        }
      ]
    },
    // ==================== ИЗО (ИЗОБРАЗИТЕЛЬНОЕ ИСКУССТВО) ====================
    {
      id: 'art3',
      title: 'Изобразительное искусство',
      icon: <Palette className="w-5 h-5" />,
      color: 'text-pink-400',
      gradient: 'from-pink-500 to-rose-500',
      description: 'Живопись, народные промыслы, рисование',
      sections: [
        {
          id: 'art3-sec1',
          title: 'Виды живописи',
          description: 'Жанры изобразительного искусства',
          topics: [
            {
              id: 'art3-sec1-t1',
              title: 'Жанры живописи',
              description: 'Пейзаж, портрет, натюрморт',
              lessons: [
                {
                  id: 'art3-sec1-t1-l1',
                  title: 'Пейзаж',
                  description: 'Изображение природы',
                  theory: `<h3>🏞️ Пейзаж</h3>
                  <p>Пейзаж — это изображение природы на картине.</p>
                  <h4>Что рисуют в пейзаже:</h4>
                  <ul>
                    <li>🌲 Лес, поля, горы</li>
                    <li>🌊 Реки, озёра, море</li>
                    <li>🌅 Небо, солнце, облака</li>
                    <li>🏠 Дома, деревни</li>
                  </ul>
                  <h4>🎨 Знаменитые пейзажисты:</h4>
                  <ul>
                    <li>И.И. Шишкин — "Утро в сосновом лесу"</li>
                    <li>И.И. Левитан — "Золотая осень"</li>
                  </ul>
                  <h4>💡 Совет:</h4>
                  <p>Наблюдай за природой и старайся увидеть красоту!</p>`,
                  examples: ['Нарисуй простой пейзаж с деревьями', 'Какие цвета нужны для осеннего пейзажа?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 25
                },
                {
                  id: 'art3-sec1-t1-l2',
                  title: 'Портрет и натюрморт',
                  description: 'Другие жанры живописи',
                  theory: `<h3>👤 Портрет</h3>
                  <p>Портрет — это изображение человека.</p>
                  <h4>Что важно в портрете:</h4>
                  <ul>
                    <li>👁️ Глаза — зеркало души</li>
                    <li>😊 Выражение лица</li>
                    <li>💇 Причёска и одежда</li>
                  </ul>
                  <h3>🍎 Натюрморт</h3>
                  <p>Натюрморт — изображение предметов: фрукты, цветы, посуда.</p>
                  <h4>Правила натюрморта:</h4>
                  <ul>
                    <li>Предметы не "плавают" в воздухе</li>
                    <li>Есть передний и задний план</li>
                    <li>Красивая композиция</li>
                  </ul>`,
                  examples: ['Нарисуй натюрморт с фруктами', 'Попробуй нарисовать портрет друга'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 30
                }
              ]
            },
            {
              id: 'art3-sec1-t2',
              title: 'Цветовая гамма',
              description: 'Тёплые и холодные цвета',
              lessons: [
                {
                  id: 'art3-sec1-t2-l1',
                  title: 'Тёплые и холодные цвета',
                  description: 'Температура цвета',
                  theory: `<h3>🔥 Тёплые цвета</h3>
                  <p>Напоминают огонь, солнце, лето:</p>
                  <ul>
                    <li>🔴 Красный</li>
                    <li>🟠 Оранжевый</li>
                    <li>🟡 Жёлтый</li>
                  </ul>
                  <h3>❄️ Холодные цвета</h3>
                  <p>Напоминают лёд, воду, небо:</p>
                  <ul>
                    <li>🔵 Синий</li>
                    <li>🔷 Голубой</li>
                    <li>💜 Фиолетовый</li>
                    <li>💚 Зелёный (может быть и тёплым)</li>
                  </ul>
                  <h4>💡 Как использовать:</h4>
                  <p>Тёплые цвета — для солнечных картин, холодные — для зимних!</p>`,
                  examples: ['Нарисуй тёплый закат', 'Нарисуй холодный зимний пейзаж'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            }
          ]
        },
        {
          id: 'art3-sec2',
          title: 'Народные промыслы',
          description: 'Русские художественные традиции',
          topics: [
            {
              id: 'art3-sec2-t1',
              title: 'Хохлома и Гжель',
              description: 'Знаменитые росписи',
              lessons: [
                {
                  id: 'art3-sec2-t1-l1',
                  title: 'Хохломская роспись',
                  description: 'Золотая роспись',
                  theory: `<h3>🖌️ Хохлома</h3>
                  <p>Хохлома — это золотая роспись по дереву.</p>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>💛 Золотой фон</li>
                    <li>🔴 Красные и чёрные узоры</li>
                    <li>🌿 Растительные мотивы: травка, ягоды, листья</li>
                  </ul>
                  <h4>Элементы росписи:</h4>
                  <ul>
                    <li>"Травка" — завитки</li>
                    <li>"Кудрина" — узорные листья</li>
                    <li>"Ягодка" — красные ягоды рябины</li>
                  </ul>
                  <h4>📍 Родина:</h4>
                  <p>Нижегородская область</p>`,
                  examples: ['Нарисуй хохломской узор', 'Какие цвета использует Хохлома?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                },
                {
                  id: 'art3-sec2-t1-l2',
                  title: 'Гжельская керамика',
                  description: 'Синяя роспись',
                  theory: `<h3>💎 Гжель</h3>
                  <p>Гжель — это синяя роспись на белом фоне.</p>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>⚪ Белый фон</li>
                    <li>🔵 Синие узоры разных оттенков</li>
                    <li>🌸 Цветочные и растительные мотивы</li>
                  </ul>
                  <h4>Что делают:</h4>
                  <ul>
                    <li>🍵 Чайники, чашки, тарелки</li>
                    <li>🧸 Фигурки животных</li>
                    <li>💎 Вазы и кувшины</li>
                  </ul>
                  <h4>📍 Родина:</h4>
                  <p>Подмосковье, посёлок Гжель</p>`,
                  examples: ['Нарисуй гжельский узор', 'Чем отличается Гжель от Хохломы?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Какой жанр изображает природу?',
          options: ['Портрет', 'Натюрморт', 'Пейзаж', 'Картина'],
          correctAnswer: 2,
          explanation: 'Пейзаж — это изображение природы на картине.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'q2',
          question: 'Какие цвета преобладают в Гжели?',
          options: ['Красный и золотой', 'Синий и белый', 'Жёлтый и зелёный', 'Чёрный и серебряный'],
          correctAnswer: 1,
          explanation: 'Гжель — это синяя роспись на белом фоне.',
          difficulty: 'easy',
          points: 10
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
      description: 'Музыкальные жанры, композиторы, инструменты',
      sections: [
        {
          id: 'music3-sec1',
          title: 'Музыкальные жанры',
          description: 'Основные жанры музыки',
          topics: [
            {
              id: 'music3-sec1-t1',
              title: 'Песня, танец, марш',
              description: 'Три кита музыки',
              lessons: [
                {
                  id: 'music3-sec1-t1-l1',
                  title: 'Три кита музыки',
                  description: 'Основные жанры',
                  theory: `<h3>🎵 Три кита музыки</h3>
                  <p>Три основных музыкальных жанра: песня, танец, марш.</p>
                  <h3>🎤 Песня</h3>
                  <p>Музыка со словами, которую можно петь.</p>
                  <ul>
                    <li>Есть мелодия и текст</li>
                    <li>Выражает чувства и мысли</li>
                    <li>Примеры: народные песни, детские песни</li>
                  </ul>
                  <h3>💃 Танец</h3>
                  <p>Музыка, под которую хочется танцевать.</p>
                  <ul>
                    <li>Чёткий ритм</li>
                    <li>Танцевальные движения</li>
                    <li>Примеры: вальс, полька</li>
                  </ul>
                  <h3>🥁 Марш</h3>
                  <p>Музыка для торжественного шествия.</p>
                  <ul>
                    <li>Ровный, чёткий ритм</li>
                    <li>Можно шагать под музыку</li>
                    <li>Примеры: военные марши</li>
                  </ul>`,
                  examples: ['Послушай марш и попробуй шагать', 'Какой жанр можно петь?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            }
          ]
        },
        {
          id: 'music3-sec2',
          title: 'Русские композиторы',
          description: 'Великие русские музыканты',
          topics: [
            {
              id: 'music3-sec2-t1',
              title: 'М.И. Глинка и Н.А. Римский-Корсаков',
              description: 'Русские композиторы',
              lessons: [
                {
                  id: 'music3-sec2-t1-l1',
                  title: 'Михаил Иванович Глинка',
                  description: 'Отец русской музыки',
                  theory: `<h3>🎼 М.И. Глинка (1804-1857)</h3>
                  <p>Отец русской классической музыки.</p>
                  <h4>Знаменитые произведения:</h4>
                  <ul>
                    <li>🎭 Опера "Руслан и Людмила"</li>
                    <li>🎭 Опера "Иван Сусанин"</li>
                    <li>🎵 "Патриотическая песня"</li>
                  </ul>
                  <h4>Особенности музыки:</h4>
                  <ul>
                    <li>🇷🇺 Русские народные мотивы</li>
                    <li>🏰 Сказочные сюжеты</li>
                    <li>✨ Красивые мелодии</li>
                  </ul>
                  <h4>💡 Интересный факт:</h4>
                  <p>Глинка говорил: "Музыку создаёт народ, а мы, художники, только её аранжируем".</p>`,
                  examples: ['Послушай увертюру к опере "Руслан и Людмила"', 'Почему Глинку называют отцом русской музыки?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                },
                {
                  id: 'music3-sec2-t1-l2',
                  title: 'Николай Андреевич Римский-Корсаков',
                  description: 'Сказочник музыки',
                  theory: `<h3>🎭 Н.А. Римский-Корсаков (1844-1908)</h3>
                  <p>Композитор-сказочник.</p>
                  <h4>Знаменитые оперы-сказки:</h4>
                  <ul>
                    <li>🧚 "Снегурочка"</li>
                    <li>👸 "Садко"</li>
                    <li>🦅 "Сказка о царе Салтане"</li>
                    <li>🕊️ "Золотой петушок"</li>
                  </ul>
                  <h4>Особенности музыки:</h4>
                  <ul>
                    <li>📚 Сказочные сюжеты</li>
                    <li>🌊 Изображение природы (море, ветер)</li>
                    <li>🦜 Звукоподражание (птицы, колокольчики)</li>
                  </ul>
                  <h4>🎶 Известное произведение:</h4>
                  <p>"Полет шмеля" — быстрая музыка, изображающая полёт насекомого!</p>`,
                  examples: ['Послушай "Полет шмеля"', 'Какие сказки положил на музыку Римский-Корсаков?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            }
          ]
        },
        {
          id: 'music3-sec3',
          title: 'Музыкальные инструменты',
          description: 'Инструменты симфонического оркестра',
          topics: [
            {
              id: 'music3-sec3-t1',
              title: 'Инструменты оркестра',
              description: 'Группы инструментов',
              lessons: [
                {
                  id: 'music3-sec3-t1-l1',
                  title: 'Группы инструментов',
                  description: 'Как звучат инструменты',
                  theory: `<h3>🎻 Группы инструментов</h3>
                  <h4>🎹 Клавишные:</h4>
                  <ul>
                    <li>🎹 Фортепиано</li>
                    <li>🎹 Орган</li>
                  </ul>
                  <h4>🎻 Струнные:</h4>
                  <ul>
                    <li>🎻 Скрипка</li>
                    <li>🎸 Виолончель</li>
                    <li>🎵 Арфа</li>
                  </ul>
                  <h4>🎺 Духовые:</h4>
                  <ul>
                    <li>🎺 Труба</li>
                    <li>🎷 Саксофон</li>
                    <li>🎵 Флейта</li>
                  </ul>
                  <h4>🥁 Ударные:</h4>
                  <ul>
                    <li>🥁 Барабан</li>
                    <li>🔔 Тарелки</li>
                    <li>🎹 Ксилофон</li>
                  </ul>`,
                  examples: ['Послушай как звучит скрипка', 'Какой инструмент самый громкий?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Какой жанр музыки можно танцевать?',
          options: ['Песня', 'Марш', 'Танец', 'Опера'],
          correctAnswer: 2,
          explanation: 'Танец — это музыка, под которую хочется танцевать.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'q2',
          question: 'Кто написал оперу "Снегурочка"?',
          options: ['М.И. Глинка', 'Н.А. Римский-Корсаков', 'П.И. Чайковский', 'С.С. Прокофьев'],
          correctAnswer: 1,
          explanation: 'Опера "Снегурочка" была написана Н.А. Римским-Корсаковым.',
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
      color: 'text-orange-400',
      gradient: 'from-orange-500 to-amber-500',
      description: 'Гимнастика, спортивные игры, упражнения',
      sections: [
        {
          id: 'pe3-sec1',
          title: 'Гимнастические упражнения',
          description: 'Основы гимнастики',
          topics: [
            {
              id: 'pe3-sec1-t1',
              title: 'Строевые упражнения',
              description: 'Построения и перестроения',
              lessons: [
                {
                  id: 'pe3-sec1-t1-l1',
                  title: 'Команды и построения',
                  description: 'Строевые команды',
                  theory: `<h3>🏃 Строевые упражнения</h3>
                  <h4>Основные команды:</h4>
                  <ul>
                    <li><strong>"Становись!"</strong> — встать в строй</li>
                    <li><strong>"Равняйсь!"</strong> — выровняться</li>
                    <li><strong>"Смирно!"</strong> — стоять прямо</li>
                    <li><strong>"Вольно!"</strong> — можно расслабиться</li>
                    <li><strong>"На первый-второй рассчитайся!"</strong></li>
                    <li><strong>"Направо!", "Налево!", "Кругом!"</strong></li>
                  </ul>
                  <h4>💡 Правила:</h4>
                  <ul>
                    <li>✅ Выполнять команды чётко</li>
                    <li>✅ Держать ровный строй</li>
                    <li>✅ Слушать учителя</li>
                  </ul>`,
                  examples: ['Выполни команду "Направо!"', 'Как нужно стоять по команде "Смирно!"?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 15
                }
              ]
            },
            {
              id: 'pe3-sec1-t2',
              title: 'Акробатические упражнения',
              description: 'Кувырки и стойки',
              lessons: [
                {
                  id: 'pe3-sec1-t2-l1',
                  title: 'Кувырок вперёд',
                  description: 'Основной элемент',
                  theory: `<h3>🤸 Кувырок вперёд</h3>
                  <h4>Техника выполнения:</h4>
                  <ol>
                    <li>🧎 Встань на колени</li>
                    <li>✋ Поставь руки на мат</li>
                    <li>🔵 Прижми подбородок к груди</li>
                    <li>🔙 Опирайся на лопатки</li>
                    <li>🦵 Перекатись и встань</li>
                  </ol>
                  <h4>⚠️ Правила безопасности:</h4>
                  <ul>
                    <li>❌ Не выпрямляй шею!</li>
                    <li>✅ Группируйся плотно</li>
                    <li>✅ Делай на мягком мате</li>
                  </ul>
                  <h4>💡 Совет:</h4>
                  <p>Сначала учись на мягком мате с помощью учителя!</p>`,
                  examples: ['Покажи группировку сидя', 'Почему нужно прижимать подбородок к груди?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 20
                }
              ]
            }
          ]
        },
        {
          id: 'pe3-sec2',
          title: 'Спортивные игры',
          description: 'Основы командных игр',
          topics: [
            {
              id: 'pe3-sec2-t1',
              title: 'Футбол',
              description: 'Основы игры с мячом',
              lessons: [
                {
                  id: 'pe3-sec2-t1-l1',
                  title: 'Основы футбола',
                  description: 'Правила и техника',
                  theory: `<h3>⚽ Футбол</h3>
                  <h4>Основные правила:</h4>
                  <ul>
                    <li>👥 11 игроков в команде</li>
                    <li>🚫 Нельзя трогать мяч руками (кроме вратаря)</li>
                    <li>🎯 Забить гол в ворота противника</li>
                    <li>⏱️ Игра длится 2 тайма по 45 минут</li>
                  </ul>
                  <h4>Основные приёмы:</h4>
                  <ul>
                    <li>🦵 Ведение мяча ногой</li>
                    <li>👟 Передача партнёру</li>
                    <li>⚽ Удар по воротам</li>
                    <li>🧤 Вратарь ловит мяч</li>
                  </ul>
                  <h4>💡 Футбольные позиции:</h4>
                  <ul>
                    <li>🧤 Вратарь</li>
                    <li>🛡️ Защитник</li>
                    <li>🏃 Полузащитник</li>
                    <li>⚔️ Нападающий</li>
                  </ul>`,
                  examples: ['Попробуй вести мяч ногой', 'Какая позиция защищает ворота?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 25
                }
              ]
            },
            {
              id: 'pe3-sec2-t2',
              title: 'Баскетбол',
              description: 'Игра с корзиной',
              lessons: [
                {
                  id: 'pe3-sec2-t2-l1',
                  title: 'Основы баскетбола',
                  description: 'Правила и техника',
                  theory: `<h3>🏀 Баскетбол</h3>
                  <h4>Основные правила:</h4>
                  <ul>
                    <li>👥 5 игроков в команде</li>
                    <li>🏀 Забросить мяч в корзину противника</li>
                    <li>🚫 Нельзя бежать с мячом (нужно вести)</li>
                    <li>⏱️ 4 четверти по 10 минут</li>
                  </ul>
                  <h4>Основные приёмы:</h4>
                  <ul>
                    <li>🤲 Ведение мяча (дриблинг)</li>
                    <li>📤 Передача мяча</li>
                    <li>🎯 Бросок в корзину</li>
                    <li>🛡️ Защита своего кольца</li>
                  </ul>
                  <h4>💡 Баскетбольные позиции:</h4>
                  <ul>
                    <li>📏 Центровой — самый высокий</li>
                    <li>⚔️ Нападающий</li>
                    <li>🎯 Разыгрывающий</li>
                  </ul>`,
                  examples: ['Попробуй вести баскетбольный мяч', 'Сколько игроков в команде?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 25
                }
              ]
            }
          ]
        },
        {
          id: 'pe3-sec3',
          title: 'Развитие физических качеств',
          description: 'Сила, выносливость, ловкость',
          topics: [
            {
              id: 'pe3-sec3-t1',
              title: 'Развитие выносливости',
              description: 'Бег и упражнения',
              lessons: [
                {
                  id: 'pe3-sec3-t1-l1',
                  title: 'Бег на выносливость',
                  description: 'Как бегать долго',
                  theory: `<h3>🏃 Выносливость</h3>
                  <p>Выносливость — способность долго выполнять упражнения.</p>
                  <h4>Как развивать:</h4>
                  <ul>
                    <li>🏃 Медленный бег</li>
                    <li>⏱️ Начинай с 5-10 минут</li>
                    <li>📈 Постепенно увеличивай время</li>
                  </ul>
                  <h4>Правила бега:</h4>
                  <ul>
                    <li>👃 Дыши носом и ртом</li>
                    <li>🦵 Ставь ногу на носок</li>
                    <li>💪 Руки согнуты в локтях</li>
                    <li>👀 Смотри вперёд</li>
                  </ul>
                  <h4>💡 Нормативы для 3 класса:</h4>
                  <ul>
                    <li>🏃 Бег 1000 м — без времени</li>
                    <li>🏃 Бег 30 м — 6-7 секунд</li>
                  </ul>`,
                  examples: ['Пробеги в медленном темпе 5 минут', 'Как правильно дышать при беге?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 20
                }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Сколько игроков в футбольной команде?',
          options: ['5', '7', '11', '6'],
          correctAnswer: 2,
          explanation: 'В футбольной команде на поле 11 игроков.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'q2',
          question: 'Что нельзя делать в футболе?',
          options: ['Бегать', 'Трогать мяч руками', 'Передавать мяч', 'Бить по воротам'],
          correctAnswer: 1,
          explanation: 'В футболе нельзя трогать мяч руками (кроме вратаря).',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    // ==================== ТЕХНОЛОГИЯ (ТРУД) ====================
    {
      id: 'tech3',
      title: 'Технология',
      icon: <Ruler className="w-5 h-5" />,
      color: 'text-amber-400',
      gradient: 'from-amber-500 to-yellow-500',
      description: 'Конструирование, рукоделие, моделирование',
      sections: [
        {
          id: 'tech3-sec1',
          title: 'Работа с бумагой',
          description: 'Конструирование из бумаги',
          topics: [
            {
              id: 'tech3-sec1-t1',
              title: 'Оригами',
              description: 'Складывание фигурок',
              lessons: [
                {
                  id: 'tech3-sec1-t1-l1',
                  title: 'Базовые формы оригами',
                  description: 'Основные складки',
                  theory: `<h3>📄 Оригами</h3>
                  <p>Оригами — искусство складывания фигурок из бумаги.</p>
                  <h4>Базовые приёмы:</h4>
                  <ul>
                    <li>📐 Сгиб "долиной" — бумага сгибается вниз</li>
                    <li>🏔️ Сгиб "горой" — бумага сгибается вверх</li>
                    <li>➡️ Сгиб по диагонали</li>
                    <li>↔️ Сгиб пополам</li>
                  </ul>
                  <h4>💡 Простые фигурки:</h4>
                  <ul>
                    <li>🦢 Лебедь</li>
                    <li>✈️ Самолёт</li>
                    <li>🐸 Лягушка</li>
                    <li>⛵ Кораблик</li>
                  </ul>
                  <h4>⚠️ Правила:</h4>
                  <ul>
                    <li>✅ Сгибай чётко по линии</li>
                    <li>✅ Используй квадратный лист</li>
                    <li>✅ Проглаживай сгибы</li>
                  </ul>`,
                  examples: ['Сделай простого бумажного самолёта', 'Попробуй сложить лебедя'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 25
                },
                {
                  id: 'tech3-sec1-t1-l2',
                  title: 'Объёмные поделки',
                  description: 'Аппликации и конструкции',
                  theory: `<h3>🎨 Объёмные поделки из бумаги</h3>
                  <h4>Материалы:</h4>
                  <ul>
                    <li>📄 Цветная бумага</li>
                    <li>📦 Картон</li>
                    <li>✂️ Ножницы</li>
                    <li>🧴 Клей</li>
                  </ul>
                  <h4>Приёмы:</h4>
                  <ul>
                    <li>🔵 Склеивание полосок (цилиндры)</li>
                    <li>📐 Складывание гармошкой</li>
                    <li>✂️ Вырезание по контуру</li>
                    <li>🎭 Создание объёма</li>
                  </ul>
                  <h4>💡 Идеи поделок:</h4>
                  <ul>
                    <li>🎄 Новогодняя ёлочка</li>
                    <li>🌸 Объёмные цветы</li>
                    <li>🏠 Домик из бумаги</li>
                  </ul>`,
                  examples: ['Сделай объёмный цветок из бумаги', 'Как сделать цилиндр из бумаги?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 30
                }
              ]
            }
          ]
        },
        {
          id: 'tech3-sec2',
          title: 'Работа с тканью',
          description: 'Основы рукоделия',
          topics: [
            {
              id: 'tech3-sec2-t1',
              title: 'Простые швы',
              description: 'Шитьё для начинающих',
              lessons: [
                {
                  id: 'tech3-sec2-t1-l1',
                  title: 'Швейные принадлежности',
                  description: 'Инструменты для шитья',
                  theory: `<h3>🧵 Инструменты для шитья</h3>
                  <h4>Основные инструменты:</h4>
                  <ul>
                    <li>🪡 Игла — для прокалывания ткани</li>
                    <li>🧶 Нитки — для сшивания</li>
                    <li>✂️ Ножницы — для резки ткани</li>
                    <li>📏 Сантиметровая лента</li>
                    <li>📍 Булавки — для закрепления</li>
                  </ul>
                  <h4>⚠️ Правила безопасности:</h4>
                  <ul>
                    <li>✅ Иглу храни в игольнице</li>
                    <li>✅ Ножницы передавай кольцами вперёд</li>
                    <li>❌ Не бери иглу в рот</li>
                    <li>✅ Работай аккуратно</li>
                  </ul>
                  <h4>💡 Совет:</h4>
                  <p>Всегда держи рабочее место в порядке!</p>`,
                  examples: ['Покажи игольницу', 'Как правильно передавать ножницы?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 15
                },
                {
                  id: 'tech3-sec2-t1-l2',
                  title: 'Шов "вперёд иголку"',
                  description: 'Простой шов',
                  theory: `<h3>🪡 Шов "вперёд иголку"</h3>
                  <p>Самый простой шов для начинающих.</p>
                  <h4>Техника выполнения:</h4>
                  <ol>
                    <li>🧵 Вдень нитку в иглу</li>
                    <li>📐 Сделай узелок на конце</li>
                    <li>👆 Проколи ткань с лицевой стороны</li>
                    <li>👇 Вытащи иглу с обратной стороны</li>
                    <li>📏 Оставь промежуток (0.5 см)</li>
                    <li>🔄 Повторяй</li>
                  </ol>
                  <h4>💡 Где используется:</h4>
                  <ul>
                    <li>🧸 Сшивание игрушек</li>
                    <li>🧥 Временное смётывание</li>
                    <li>🎨 Декоративные швы</li>
                  </ul>`,
                  examples: ['Выполни шов "вперёд иголку" на образце', 'Какой длины стежки должны быть?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            }
          ]
        },
        {
          id: 'tech3-sec3',
          title: 'Конструирование',
          description: 'Создание моделей',
          topics: [
            {
              id: 'tech3-sec3-t1',
              title: 'Моделирование',
              description: 'Создание моделей',
              lessons: [
                {
                  id: 'tech3-sec3-t1-l1',
                  title: 'Модель из природных материалов',
                  description: 'Шишки, листья, желуди',
                  theory: `<h3>🌲 Природные материалы</h3>
                  <h4>Что можно использовать:</h4>
                  <ul>
                    <li>🌰 Шишки</li>
                    <li>🍂 Листья</li>
                    <li>🥜 Жёлуди</li>
                    <li>🌿 Веточки</li>
                    <li>🪨 Камешки</li>
                    <li>🌾 Солома</li>
                  </ul>
                  <h4>💡 Идеи поделок:</h4>
                  <ul>
                    <li>🦔 Ёжик из шишки</li>
                    <li>🦉 Сова из шишки и желудей</li>
                    <li>🐛 Гусеница из жёлудей</li>
                    <li>🦊 Звери из листьев</li>
                  </ul>
                  <h4>Инструменты:</h4>
                  <ul>
                    <li>🧴 Клей</li>
                    <li>🎨 Пластилин</li>
                    <li>✂️ Ножницы</li>
                  </ul>`,
                  examples: ['Сделай ёжика из шишки', 'Какие природные материалы можно найти в парке?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 25
                }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Какой сгиб делается вниз?',
          options: ['Сгиб "горой"', 'Сгиб "долиной"', 'Диагональный', 'Поперечный'],
          correctAnswer: 1,
          explanation: 'Сгиб "долиной" — бумага сгибается вниз.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'q2',
          question: 'Где хранить иглу?',
          options: ['На столе', 'В кармане', 'В игольнице', 'В руке'],
          correctAnswer: 2,
          explanation: 'Иглу нужно хранить в игольнице для безопасности.',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    // ==================== ОБЖ ====================
    {
      id: 'safety3',
      title: 'ОБЖ',
      icon: <Shield className="w-5 h-5" />,
      color: 'text-emerald-400',
      gradient: 'from-emerald-500 to-green-500',
      description: 'Правила безопасности, первая помощь',
      sections: [
        {
          id: 'safety3-sec1',
          title: 'Правила дорожного движения',
          description: 'Безопасность на дороге',
          topics: [
            {
              id: 'safety3-sec1-t1',
              title: 'Переход улицы',
              description: 'Правила пешехода',
              lessons: [
                {
                  id: 'safety3-sec1-t1-l1',
                  title: 'Светофор и пешеходный переход',
                  description: 'Как переходить дорогу',
                  theory: `<h3>🚦 Светофор</h3>
                  <h4>Сигналы светофора:</h4>
                  <ul>
                    <li>🔴 Красный — СТОЙ! Идти нельзя!</li>
                    <li>🟡 Жёлтый — ВНИМАНИЕ! Приготовься!</li>
                    <li>🟢 Зелёный — ИДИ! Можно переходить!</li>
                  </ul>
                  <h3>🚶 Пешеходный переход</h3>
                  <h4>Правила перехода:</h4>
                  <ol>
                    <li>👀 Посмотри налево</li>
                    <li>👀 Посмотри направо</li>
                    <li>🚶 Переходи спокойно</li>
                    <li>📱 Не смотри в телефон!</li>
                  </ol>
                  <h4>⚠️ Важно:</h4>
                  <ul>
                    <li>Переходи только по "зебре"</li>
                    <li>Не перебегай дорогу!</li>
                    <li>Не играй на проезжей части</li>
                  </ul>`,
                  examples: ['Расскажи правила перехода улицы', 'Что означает красный сигнал светофора?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                },
                {
                  id: 'safety3-sec1-t1-l2',
                  title: 'Дорожные знаки',
                  description: 'Знаки для пешеходов',
                  theory: `<h3>🪧 Дорожные знаки</h3>
                  <h4>Знаки для пешеходов:</h4>
                  <ul>
                    <li>🚶 "Пешеходный переход" — синий квадрат с человеком</li>
                    <li>🚫 "Движение пешеходов запрещено" — красный круг</li>
                    <li>🚌 "Место остановки автобуса"</li>
                    <li>🚸 "Дети" — предупреждающий знак</li>
                  </ul>
                  <h4>💡 Запомни:</h4>
                  <ul>
                    <li>🔵 Синие знаки — разрешают или указывают</li>
                    <li>🔴 Красные знаки — запрещают</li>
                    <li>🟡 Жёлтые знаки — предупреждают</li>
                  </ul>
                  <h4>⚠️ Безопасность:</h4>
                  <p>Всегда смотри на знаки и соблюдай правила!</p>`,
                  examples: ['Найди знак "Пешеходный переход"', 'Какой знак запрещает идти пешеходу?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            }
          ]
        },
        {
          id: 'safety3-sec2',
          title: 'Безопасность в интернете',
          description: 'Правила цифровой безопасности',
          topics: [
            {
              id: 'safety3-sec2-t1',
              title: 'Безопасность онлайн',
              description: 'Защита личной информации',
              lessons: [
                {
                  id: 'safety3-sec2-t1-l1',
                  title: 'Правила интернета',
                  description: 'Как быть безопасным онлайн',
                  theory: `<h3>💻 Безопасность в интернете</h3>
                  <h4>⚠️ Опасности интернета:</h4>
                  <ul>
                    <li>🎭 Незнакомцы могут притворяться детьми</li>
                    <li>📧 Вредоносные ссылки</li>
                    <li>🎮 Мошенничество в играх</li>
                  </ul>
                  <h4>✅ Правила безопасности:</h4>
                  <ol>
                    <li>🤐 Не рассказывай незнакомцам где живёшь</li>
                    <li>👤 Не давай пароль никому</li>
                    <li>📸 Не отправляй свои фото незнакомцам</li>
                    <li>🔗 Не открывай подозрительные ссылки</li>
                    <li>👨‍👩‍👧 Расскажи родителям о проблемах</li>
                  </ol>
                  <h4>💡 Совет:</h4>
                  <p>Если кто-то пугает или просит секрет — расскажи родителям!</p>`,
                  examples: ['Почему нельзя давать пароль другим?', 'Что делать если незнакомец пишет в интернете?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 20
                }
              ]
            }
          ]
        },
        {
          id: 'safety3-sec3',
          title: 'Первая помощь',
          description: 'Помощь при травмах',
          topics: [
            {
              id: 'safety3-sec3-t1',
              title: 'Мелкие травмы',
              description: 'Порезы, ссадины, ушибы',
              lessons: [
                {
                  id: 'safety3-sec3-t1-l1',
                  title: 'Первая помощь при порезах',
                  description: 'Как обработать рану',
                  theory: `<h3>🩹 Первая помощь при порезах</h3>
                  <h4>Что делать при порезе:</h4>
                  <ol>
                    <li>🧼 Промой рану чистой водой</li>
                    <li>🧪 Обработай перекисью водорода</li>
                    <li>🩹 Налей пластырь или бинт</li>
                    <li>👨‍⚕️ Если рана большая — обратись к врачу</li>
                  </ol>
                  <h4>⚠️ Важно:</h4>
                  <ul>
                    <li>❌ Не трогай рану грязными руками</li>
                    <li>❌ Не сдирай корочку</li>
                    <li>✅ Держи рану чистой</li>
                  </ul>
                  <h4>💊 Аптечка:</h4>
                  <ul>
                    <li>🧪 Перекись водорода</li>
                    <li>💚 Зелёнка</li>
                    <li>🩹 Пластыри</li>
                    <li>🎀 Бинт</li>
                  </ul>`,
                  examples: ['Расскажи порядок действий при порезе', 'Что должно быть в домашней аптечке?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 20
                },
                {
                  id: 'safety3-sec3-t1-l2',
                  title: 'Ушибы и синяки',
                  description: 'Как помочь при ушибе',
                  theory: `<h3>🤕 Ушибы и синяки</h3>
                  <h4>Что такое ушиб:</h4>
                  <p>Ушиб — повреждение тканей без ранки.</p>
                  <h4>Что делать при ушибе:</h4>
                  <ol>
                    <li>🧊 Приложи холод (лёд в полотенце)</li>
                    <li>⏰ Держи 10-15 минут</li>
                    <li>🛋️ Дай покой повреждённому месту</li>
                    <li>👨‍⚕️ Если болит сильно — к врачу</li>
                  </ol>
                  <h4>⚠️ Важно:</h4>
                  <ul>
                    <li>❌ Не грей ушиб в первый день!</li>
                    <li>❌ Не дави на синяк</li>
                    <li>✅ На следующий день — тёплый компресс</li>
                  </ul>
                  <h4>💡 Совет:</h4>
                  <p>При ударе головы обратись к врачу!</p>`,
                  examples: ['Что приложить к ушибу?', 'Почему нельзя греть ушиб в первый день?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 20
                }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Что означает зелёный сигнал светофора?',
          options: ['Стой', 'Внимание', 'Можно переходить', 'Беги'],
          correctAnswer: 2,
          explanation: 'Зелёный сигнал светофора означает, что можно переходить дорогу.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'q2',
          question: 'Что нужно сделать в первую очередь при порезе?',
          options: ['Наложить повязку', 'Промыть водой', 'Позвать маму', 'Приложить лёд'],
          correctAnswer: 1,
          explanation: 'Сначала нужно промыть рану чистой водой, затем обработать и наложить повязку.',
          difficulty: 'medium',
          points: 15
        }
      ]
    },
    // ==================== ИНФОРМАТИКА ====================
    {
      id: 'informatics3',
      title: 'Информатика',
      icon: <Monitor className="w-5 h-5" />,
      color: 'text-indigo-400',
      gradient: 'from-indigo-500 to-purple-500',
      description: 'Файлы, папки, безопасность',
      sections: [
        {
          id: 'info3-sec1',
          title: 'Файлы и папки',
          description: 'Работа с файлами',
          topics: [
            {
              id: 'info3-sec1-t1',
              title: 'Что такое файл?',
              description: 'Файлы и их типы',
              lessons: [
                {
                  id: 'info3-sec1-t1-l1',
                  title: 'Файлы',
                  description: 'Хранение информации',
                  theory: `<h3>📄 Файл</h3>
                  <p>Файл — это информация, хранящаяся в памяти компьютера под одним именем.</p>
                  <h4>Типы файлов:</h4>
                  <ul>
                    <li>📝 <strong>Текстовые</strong> — .txt, .doc (документы)</li>
                    <li>🖼️ <strong>Графические</strong> — .jpg, .png (картинки)</li>
                    <li>🎵 <strong>Звуковые</strong> — .mp3, .wav (музыка)</li>
                    <li>🎬 <strong>Видео</strong> — .mp4, .avi (видео)</li>
                  </ul>
                  <h4>Имя файла:</h4>
                  <p>Имя + расширение: документ.txt</p>`,
                  examples: ['Определи тип файла: image.jpg', 'Какое расширение у текстовых файлов?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                },
                {
                  id: 'info3-sec1-t1-l2',
                  title: 'Папки',
                  description: 'Организация файлов',
                  theory: `<h3>📁 Папки</h3>
                  <p>Папка — контейнер для хранения файлов и других папок.</p>
                  <h4>Действия с папками:</h4>
                  <ul>
                    <li>📂 <strong>Открыть</strong> — двойной клик</li>
                    <li>➕ <strong>Создать</strong> — правый клик → Создать → Папку</li>
                    <li>✏️ <strong>Переименовать</strong> — правый клик → Переименовать</li>
                    <li>🗑️ <strong>Удалить</strong> — клавиша Delete</li>
                  </ul>
                  <h4>Иерархия:</h4>
                  <p>Папки могут находиться внутри других папок!</p>`,
                  examples: ['Создай папку "Мои документы"', 'Переименуй папку'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            }
          ]
        },
        {
          id: 'info3-sec2',
          title: 'Безопасность в интернете',
          description: 'Правила работы в сети',
          topics: [
            {
              id: 'info3-sec2-t1',
              title: 'Интернет',
              description: 'Мир интернета',
              lessons: [
                {
                  id: 'info3-sec2-t1-l1',
                  title: 'Безопасность в интернете',
                  description: 'Правила поведения в сети',
                  theory: `<h3>🌐 Интернет</h3>
                  <p>Интернет — всемирная сеть компьютеров.</p>
                  <h4>⚠️ Правила безопасности:</h4>
                  <ul>
                    <li>❌ Не сообщай пароли никому!</li>
                    <li>❌ Не встречайся с незнакомцами из интернета</li>
                    <li>❌ Не открывай подозрительные ссылки</li>
                    <li>❌ Не загружай файлы без проверки</li>
                    <li>✅ Расскажи взрослым о проблемах</li>
                  </ul>
                  <h4>Важно:</h4>
                  <p>Всё, что ты делаешь в интернете, остаётся навсегда!</p>`,
                  examples: ['Почему нельзя давать пароли?', 'Что делать, если пишут незнакомцы?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 20
                }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Какое расширение у картинок?',
          options: ['.txt', '.jpg', '.mp3', '.doc'],
          correctAnswer: 1,
          explanation: 'Расширения .jpg, .png, .gif — это графические файлы (картинки).',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'q2',
          question: 'Что такое папка?',
          options: ['Текстовый документ', 'Контейнер для файлов', 'Программа', 'Игра'],
          correctAnswer: 1,
          explanation: 'Папка — это контейнер для хранения файлов и других папок.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'q3',
          question: 'Что нельзя делать в интернете?',
          options: ['Искать информацию', 'Сообщать пароли', 'Смотреть видео', 'Играть'],
          correctAnswer: 1,
          explanation: 'Никогда не сообщай пароли другим людям!',
          difficulty: 'easy',
          points: 10
        }
      ]
    }
  ]
}
