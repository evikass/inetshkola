// ==================== 1 КЛАСС ====================

import { Calculator, MessageCircle, BookOpen, Globe, Ruler, Dumbbell, Palette } from 'lucide-react'
import type { Grade } from '../types'

export const class1: Grade = {
  id: 1,
  name: '1 класс',
  shortName: '1 кл.',
  subjects: [
    {
      id: 'class-1-math',
      title: 'Математика',
      icon: <Calculator className="w-5 h-5" />,
      color: 'text-blue-400',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Знакомство с цифрами, счёт и простые вычисления',
      topics: [
        {
          id: 'class-1-math-t1',
          title: 'Знакомство с цифрами',
          description: 'Учимся узнавать и писать цифры от 0 до 9',
          theory: `<h3>Цифры и числа</h3>
          <p>Цифры — это знаки, которыми мы записываем числа. Всего существует 10 цифр: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.</p>
          <h4>Как выглядят цифры:</h4>
          <ul>
            <li>0 — кружочек, означает "ничего"</li>
            <li>1 — палочка, один предмет</li>
            <li>2 — похожа на лебедя</li>
            <li>3 — как ушки зайчика</li>
            <li>4 — как стульчик</li>
            <li>5 — как крючок</li>
          </ul>`,
          examples: ['Посчитай предметы на картинке', 'Напиши цифру 1', 'Найди цифру 3 среди других'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 20,
          lessons: [
            {
              id: 'class-1-math-t1-l1',
              title: 'Цифры от 1 до 5',
              content: `<div class="kid-lesson">
                <h2>🔢 Цифры от 1 до 5</h2>
                <p>Сегодня познакомимся с первыми пятью цифрами!</p>
                <div class="numbers">1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣</div>
                <p>1 — один предмет (одно яблоко 🍎)</p>
                <p>2 — два предмета (два яблока 🍎🍎)</p>
                <p>3 — три предмета (три яблока 🍎🍎🍎)</p>
                <div class="tip">💡 Считай всё вокруг: ступеньки, игрушки, пальчики!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-1-math-t1-l2',
              title: 'Цифры от 6 до 9 и 0',
              content: `<div class="kid-lesson">
                <h2>🔢 Цифры от 6 до 9 и 0</h2>
                <p>Продолжаем знакомство с цифрами!</p>
                <div class="numbers">6️⃣ 7️⃣ 8️⃣ 9️⃣ 0️⃣</div>
                <p>6 — шесть (шесть лапок у жука 🐞)</p>
                <p>7 — семь (семь дней в неделе)</p>
                <p>8 — восемь (восемь лапок у паука 🕷️)</p>
                <p>0 — ноль (означает "ничего")</p>
                <div class="tip">💡 0 похож на кружочек!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-1-math-t1-l3',
              title: 'Написание цифр',
              content: `<div class="kid-lesson">
                <h2>✏️ Учимся писать цифры</h2>
                <p>Каждая цифра пишется по определённым правилам!</p>
                <p>Цифра 1: одна палочка сверху вниз</p>
                <p>Цифра 2: головка, шейка, хвостик</p>
                <p>Цифра 3: два полукруга</p>
                <div class="activity">Попробуй написать цифры в воздухе!</div>
                <div class="tip">💡 Начинай писать сверху!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-1-math-t1-q1',
              question: 'Сколько всего цифр?',
              options: ['5', '7', '10', '100'],
              correctAnswer: 2,
              explanation: 'Всего 10 цифр: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9',
              difficulty: 'easy',
              points: 10
            },
            {
              id: 'class-1-math-t1-q2',
              question: 'Что означает цифра 0?',
              options: ['Много', 'Ничего', 'Десять', 'Один'],
              correctAnswer: 1,
              explanation: 'Цифра 0 означает "ничего" или "ноль".',
              difficulty: 'easy',
              points: 10
            }
          ]
        },
        {
          id: 'class-1-math-t2',
          title: 'Счёт предметов',
          description: 'Учимся считать предметы до 10',
          theory: `<h3>Счёт предметов</h3>
          <p>Счёт — это определение количества предметов. Чтобы посчитать, нужно называть числа по порядку и указывать на каждый предмет.</p>
          <h4>Правила счёта:</h4>
          <ul>
            <li>Считай слева направо</li>
            <li>Не пропускай предметы</li>
            <li>Не считай один предмет дважды</li>
            <li>Последнее число — это ответ</li>
          </ul>`,
          examples: ['Сколько яблок?', 'Посчитай машинки', 'Сколько птичек на ветке?'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'class-1-math-t2-l1',
              title: 'Счёт до 5',
              content: `<div class="kid-lesson">
                <h2>🔢 Счёт до 5</h2>
                <p>Давай посчитаем предметы!</p>
                <p>🍎 — один (1)</p>
                <p>🍎🍎 — два (2)</p>
                <p>🍎🍎🍎 — три (3)</p>
                <p>🍎🍎🍎🍎 — четыре (4)</p>
                <p>🍎🍎🍎🍎🍎 — пять (5)</p>
                <div class="tip">💡 Показывай пальчиком на каждый предмет!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-1-math-t2-l2',
              title: 'Счёт до 10',
              content: `<div class="kid-lesson">
                <h2>🔢 Счёт до 10</h2>
                <p>Продолжаем считать!</p>
                <p>🌟🌟🌟🌟🌟🌟 — шесть</p>
                <p>🌟🌟🌟🌟🌟🌟🌟 — семь</p>
                <p>🌟🌟🌟🌟🌟🌟🌟🌟 — восемь</p>
                <p>🌟🌟🌟🌟🌟🌟🌟🌟🌟 — девять</p>
                <p>🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 — десять</p>
                <div class="tip">💡 Десять — это все пальчики на двух руках!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-1-math-t2-l3',
              title: 'Обратный счёт',
              content: `<div class="kid-lesson">
                <h2>⬇️ Обратный счёт</h2>
                <p>Умеем считать от 1 до 10, а теперь — наоборот!</p>
                <p>10, 9, 8, 7, 6, 5, 4, 3, 2, 1 — пуск! 🚀</p>
                <div class="activity">Посчитай назад от 5 до 1!</div>
                <div class="tip">💡 Обратный счёт нужен для запуска ракеты! 🚀</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-1-math-t2-q1',
              question: 'Посчитай: ⭐⭐⭐⭐. Сколько звёзд?',
              options: ['3', '4', '5', '6'],
              correctAnswer: 1,
              explanation: 'Четыре звезды! 1, 2, 3, 4.',
              difficulty: 'easy',
              points: 10
            },
            {
              id: 'class-1-math-t2-q2',
              question: 'Какое число идёт после 7?',
              options: ['6', '8', '9', '10'],
              correctAnswer: 1,
              explanation: 'После 7 идёт 8! 1, 2, 3, 4, 5, 6, 7, 8...',
              difficulty: 'easy',
              points: 10
            }
          ]
        },
        {
          id: 'class-1-math-t3',
          title: 'Сложение и вычитание',
          description: 'Первые арифметические действия',
          theory: `<h3>Сложение и вычитание</h3>
          <p>Сложение — это объединение предметов. Знак сложения: + (плюс).</p>
          <p>Вычитание — это удаление части предметов. Знак вычитания: − (минус).</p>
          <h4>Примеры:</h4>
          <ul>
            <li>2 + 1 = 3 (два и ещё один — три)</li>
            <li>3 − 1 = 2 (три без одного — два)</li>
          </ul>`,
          examples: ['2 + 2 = ?', '5 − 2 = ?', '3 + 1 = ?'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 20,
          lessons: [
            {
              id: 'class-1-math-t3-l1',
              title: 'Что такое сложение?',
              content: `<div class="kid-lesson">
                <h2>➕ Сложение</h2>
                <p>Сложение — это когда мы объединяем предметы!</p>
                <p>🍎 + 🍎 = 🍎🍎</p>
                <p>1 + 1 = 2</p>
                <p>2 + 1 = 3</p>
                <div class="tip">💡 Знак + называется "плюс"</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-1-math-t3-l2',
              title: 'Что такое вычитание?',
              content: `<div class="kid-lesson">
                <h2>➖ Вычитание</h2>
                <p>Вычитание — это когда мы убираем предметы!</p>
                <p>🍎🍎🍎 − 🍎 = 🍎🍎</p>
                <p>3 − 1 = 2</p>
                <p>5 − 2 = 3</p>
                <div class="tip">💡 Знак − называется "минус"</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-1-math-t3-l3',
              title: 'Решаем примеры',
              content: `<div class="kid-lesson">
                <h2>📝 Решаем примеры</h2>
                <p>Попробуй решить:</p>
                <p>2 + 2 = ? (два и ещё два)</p>
                <p>4 − 1 = ? (четыре без одного)</p>
                <p>3 + 3 = ?</p>
                <div class="tip">💡 Можно использовать пальчики или предметы!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-1-math-t3-q1',
              question: '2 + 2 = ?',
              options: ['3', '4', '5', '6'],
              correctAnswer: 1,
              explanation: '2 + 2 = 4. Два и ещё два — четыре!',
              difficulty: 'easy',
              points: 10
            },
            {
              id: 'class-1-math-t3-q2',
              question: '5 − 2 = ?',
              options: ['2', '3', '4', '7'],
              correctAnswer: 1,
              explanation: '5 − 2 = 3. Пять без двух — три!',
              difficulty: 'easy',
              points: 10
            }
          ]
        },
        {
          id: 'class-1-math-t4',
          title: 'Геометрические фигуры',
          description: 'Знакомство с основными фигурами',
          theory: `<h3>Геометрические фигуры</h3>
          <p>Геометрические фигуры — это формы предметов. Основные фигуры: круг, квадрат, треугольник, прямоугольник.</p>
          <h4>Свойства фигур:</h4>
          <ul>
            <li>Круг — нет углов, круглый</li>
            <li>Квадрат — 4 равные стороны, 4 угла</li>
            <li>Треугольник — 3 стороны, 3 угла</li>
            <li>Прямоугольник — 4 стороны, противоположные равны</li>
          </ul>`,
          examples: ['Найди круги вокруг тебя', 'Какой формы окно?', 'Сколько углов у квадрата?'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'class-1-math-t4-l1',
              title: 'Круг и квадрат',
              content: `<div class="kid-lesson">
                <h2>⭕ Круг и ⬜ Квадрат</h2>
                <p>Круг — круглый, без уголков! Как солнышко ☀️</p>
                <p>Квадрат — 4 одинаковые стороны и 4 угла! Как окошко 🪟</p>
                <div class="activity">Найди в комнате предметы круглой и квадратной формы!</div>
                <div class="tip">💡 Часы — круглые, окно — квадратное!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-1-math-t4-l2',
              title: 'Треугольник и прямоугольник',
              content: `<div class="kid-lesson">
                <h2>🔺 Треугольник и ▭ Прямоугольник</h2>
                <p>Треугольник — 3 стороны и 3 угла! Как крыша домика 🏠</p>
                <p>Прямоугольник — 4 стороны, как дверь 🚪</p>
                <div class="activity">Нарисуй эти фигуры!</div>
                <div class="tip">💡 У треугольника 3 угла, у прямоугольника — 4!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-1-math-t4-l3',
              title: 'Ищем фигуры вокруг',
              content: `<div class="kid-lesson">
                <h2>🔍 Ищем фигуры вокруг</h2>
                <p>Геометрические фигуры везде!</p>
                <p>⭕ Круг: солнце, мяч, тарелка</p>
                <p>⬜ Квадрат: окно, плитка</p>
                <p>🔺 Треугольник: крыша, ёлка</p>
                <p>▭ Прямоугольник: дверь, книга</p>
                <div class="tip">💡 Оглянись вокруг — сколько разных фигур!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-1-math-t4-q1',
              question: 'Сколько углов у треугольника?',
              options: ['2', '3', '4', '5'],
              correctAnswer: 1,
              explanation: 'У треугольника 3 угла! Три-угольник — три угла!',
              difficulty: 'easy',
              points: 10
            },
            {
              id: 'class-1-math-t4-q2',
              question: 'Какая фигура не имеет углов?',
              options: ['Квадрат', 'Треугольник', 'Круг', 'Прямоугольник'],
              correctAnswer: 2,
              explanation: 'Круг не имеет углов — он круглый!',
              difficulty: 'easy',
              points: 10
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'class-1-math-q1',
          question: 'Сколько пальцев на одной руке?',
          options: ['3', '4', '5', '6'],
          correctAnswer: 2,
          explanation: 'На одной руке 5 пальцев!',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'class-1-math-q2',
          question: '3 + 2 = ?',
          options: ['4', '5', '6', '7'],
          correctAnswer: 1,
          explanation: '3 + 2 = 5. Три и ещё два — пять!',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    {
      id: 'class-1-russian',
      title: 'Русский язык',
      icon: <BookOpen className="w-5 h-5" />,
      color: 'text-red-400',
      gradient: 'from-red-500 to-rose-500',
      description: 'Алфавит, слоги и первые слова',
      topics: [
        {
          id: 'class-1-russian-t1',
          title: 'Алфавит',
          description: 'Знакомство с русским алфавитом',
          theory: `<h3>Русский алфавит</h3>
          <p>В русском алфавите 33 буквы. Каждая буква имеет своё название и звук.</p>
          <h4>Группы букв:</h4>
          <ul>
            <li>Гласные: а, о, у, ы, э, я, ё, ю, и, е</li>
            <li>Согласные: б, в, г, д, ж, з, к, л, м, н, п, р, с, т, ф, х, ц, ч, ш, щ</li>
            <li>Особые: ъ, ь (не имеют звука)</li>
          </ul>`,
          examples: ['Назови буквы', 'Какой звук обозначает буква?', 'Найди букву А'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 20,
          lessons: [
            {
              id: 'class-1-russian-t1-l1',
              title: 'Буквы А, О, У, Ы',
              content: `<div class="kid-lesson">
                <h2>🔤 Гласные буквы</h2>
                <p>А — "а", первый звук в слове "арбуз"</p>
                <p>О — "о", первый звук в слове "ослик"</p>
                <p>У — "у", первый звук в слове "утка"</p>
                <p>Ы — "ы", звук в слове "мышка"</p>
                <div class="tip">💡 Гласные звуки можно пропеть: а-а-а-а!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-1-russian-t1-l2',
              title: 'Буквы М, Л, Н, Р',
              content: `<div class="kid-lesson">
                <h2>🔤 Согласные буквы</h2>
                <p>М — "м", звук в слове "мама"</p>
                <p>Л — "л", звук в слове "ложка"</p>
                <p>Н — "н", звук в слове "нос"</p>
                <p>Р — "р", звук в слове "рыба"</p>
                <div class="tip">💡 Согласные звуки нельзя пропеть!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-1-russian-t1-l3',
              title: 'Все буквы алфавита',
              content: `<div class="kid-lesson">
                <h2>📚 Весь алфавит</h2>
                <p>А Б В Г Д Е Ё Ж З</p>
                <p>И Й К Л М Н О П</p>
                <p>Р С Т У Ф Х Ц Ч</p>
                <p>Ш Щ Ъ Ы Ь Э Ю Я</p>
                <p>Всего 33 буквы!</p>
                <div class="tip">💡 Выучи алфавит наизусть!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-1-russian-t1-q1',
              question: 'Сколько букв в русском алфавите?',
              options: ['30', '31', '33', '35'],
              correctAnswer: 2,
              explanation: 'В русском алфавите 33 буквы!',
              difficulty: 'easy',
              points: 10
            },
            {
              id: 'class-1-russian-t1-q2',
              question: 'Какая буква первая в алфавите?',
              options: ['Б', 'В', 'А', 'О'],
              correctAnswer: 2,
              explanation: 'Первая буква алфавита — А!',
              difficulty: 'easy',
              points: 10
            }
          ]
        },
        {
          id: 'class-1-russian-t2',
          title: 'Слоги',
          description: 'Делим слова на слоги',
          theory: `<h3>Слоги в словах</h3>
          <p>Слово можно разделить на части — слоги. Сколько в слове гласных, столько и слогов.</p>
          <h4>Примеры:</h4>
          <ul>
            <li>МА-МА (2 слога, 2 гласных)</li>
            <li>МА-ШИ-НА (3 слога, 3 гласных)</li>
            <li>КОТ (1 слог, 1 гласный)</li>
          </ul>`,
          examples: ['Раздели слово на слоги', 'Сколько слогов в слове?', 'Составь слово из слогов'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'class-1-russian-t2-l1',
              title: 'Что такое слог?',
              content: `<div class="kid-lesson">
                <h2>📖 Что такое слог?</h2>
                <p>Слог — это часть слова, которую можно произнести одним выдохом.</p>
                <p>МА-МА (хлоп-хлоп)</p>
                <p>ПА-ПА (хлоп-хлоп)</p>
                <div class="tip">💡 Хлопни в ладоши — сколько раз, столько слогов!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-1-russian-t2-l2',
              title: 'Делим слова на слоги',
              content: `<div class="kid-lesson">
                <h2>✂️ Делим слова на слоги</h2>
                <p>КО-РО-ВА (3 слога)</p>
                <p>СО-БА-КА (3 слога)</p>
                <p>КОТ (1 слог)</p>
                <p>ДО-Мик (2 слога)</p>
                <div class="tip">💡 Считай гласные — сколько гласных, столько слогов!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-1-russian-t2-l3',
              title: 'Составляем слова из слогов',
              content: `<div class="kid-lesson">
                <h2>🧩 Составляем слова</h2>
                <p>МА + МА = МАМА</p>
                <p>ПА + ПА = ПАПА</p>
                <p>МА + ША = МАША</p>
                <p>ЛО + ЖКА = ЛОЖКА</p>
                <div class="tip">💡 Соединяй слоги и получай слова!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-1-russian-t2-q1',
              question: 'Сколько слогов в слове "МАМА"?',
              options: ['1', '2', '3', '4'],
              correctAnswer: 1,
              explanation: 'МА-МА — два слога! Хлопни: хлоп-хлоп!',
              difficulty: 'easy',
              points: 10
            },
            {
              id: 'class-1-russian-t2-q2',
              question: 'Какое правило о слогах верное?',
              options: ['Слогов всегда 3', 'Сколько гласных — столько слогов', 'Слогов всегда 1', 'Слоги не нужны'],
              correctAnswer: 1,
              explanation: 'Сколько в слове гласных букв, столько и слогов!',
              difficulty: 'easy',
              points: 10
            }
          ]
        },
        {
          id: 'class-1-russian-t3',
          title: 'Письмо букв',
          description: 'Учимся писать буквы',
          theory: `<h3>Пишем буквы правильно</h3>
          <p>Каждая буква пишется по определённым правилам. Важно соблюдать наклон и последовательность элементов.</p>
          <h4>Элементы букв:</h4>
          <ul>
            <li>Прямая палочка</li>
            <li>Наклонная палочка</li>
            <li>Овал</li>
            <li>Полуовал</li>
            <li>Крючок</li>
          </ul>`,
          examples: ['Напиши букву А', 'Обведи букву по пунктиру', 'Напиши букву в тетради'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 20,
          lessons: [
            {
              id: 'class-1-russian-t3-l1',
              title: 'Пишем буквы А и О',
              content: `<div class="kid-lesson">
                <h2>✏️ Буквы А и О</h2>
                <p>А: два наклонных элемента и перекладина</p>
                <p>О: овал — начинаем сверху, ведём влево</p>
                <div class="activity">Напиши буквы в воздухе!</div>
                <div class="tip">💡 Пишем сверху вниз!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-1-russian-t3-l2',
              title: 'Пишем буквы М и Л',
              content: `<div class="kid-lesson">
                <h2>✏️ Буквы М и Л</h2>
                <p>М: два наклонных элемента и "горка" посередине</p>
                <p>Л: два наклонных элемента встречаются сверху</p>
                <div class="tip">💡 М — как две горки, Л — как одна!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-1-russian-t3-l3',
              title: 'Пишем слоги',
              content: `<div class="kid-lesson">
                <h2>📝 Пишем слоги</h2>
                <p>МА, МО, МУ, МЫ</p>
                <p>ЛА, ЛО, ЛУ, ЛЫ</p>
                <p>НА, НО, НУ, НЫ</p>
                <div class="tip">💡 Буквы в слоге пишутся рядом!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-1-russian-t3-q1',
              question: 'С какой буквы начинается слово "МАМА"?',
              options: ['О', 'А', 'М', 'Н'],
              correctAnswer: 2,
              explanation: 'МАМА начинается с буквы М!',
              difficulty: 'easy',
              points: 10
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'class-1-russian-q1',
          question: 'Сколько букв в русском алфавите?',
          options: ['30', '31', '33', '35'],
          correctAnswer: 2,
          explanation: 'В русском алфавите 33 буквы!',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'class-1-russian-q2',
          question: 'Сколько слогов в слове "КОТ"?',
          options: ['1', '2', '3', '4'],
          correctAnswer: 0,
          explanation: 'КОТ — один слог! Одна гласная О!',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    {
      id: 'class-1-speech',
      title: 'Развитие речи',
      icon: <MessageCircle className="w-5 h-5" />,
      color: 'text-teal-400',
      gradient: 'from-teal-500 to-cyan-500',
      description: 'Составление рассказов и развитие речи',
      topics: [
        {
          id: 'class-1-speech-t1',
          title: 'Составление рассказов',
          description: 'Учимся рассказывать истории',
          theory: `<h3>Как составить рассказ?</h3>
          <p>Рассказ состоит из начала, середины и конца. Важно говорить связно и по порядку.</p>
          <h4>План рассказа:</h4>
          <ul>
            <li>Кто? (герой)</li>
            <li>Где? (место)</li>
            <li>Что делал? (действия)</li>
            <li>Чем закончилось? (результат)</li>
          </ul>`,
          examples: ['Расскажи про свою семью', 'Расскажи сказку', 'Опиши картинку'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'class-1-speech-t1-l1',
              title: 'Кто? Где? Что делал?',
              content: `<div class="kid-lesson">
                <h2>📝 Составляем рассказ</h2>
                <p>Каждый рассказ отвечает на вопросы:</p>
                <p>КТО? — Мальчик Петя</p>
                <p>ГДЕ? — В парке</p>
                <p>ЧТО ДЕЛАЛ? — Катался на качелях</p>
                <div class="tip">💡 Ответь на вопросы — и готов рассказ!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-1-speech-t1-l2',
              title: 'Рассказ по картинке',
              content: `<div class="kid-lesson">
                <h2>🖼️ Рассказ по картинке</h2>
                <p>Рассмотри картинку и расскажи:</p>
                <p>1. Что ты видишь?</p>
                <p>2. Кто там нарисован?</p>
                <p>3. Что происходит?</p>
                <div class="tip">💡 Начни со слов: "На картинке я вижу..."</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-1-speech-t1-l3',
              title: 'Сказка своими словами',
              content: `<div class="kid-lesson">
                <h2>🏰 Пересказ сказки</h2>
                <p>Вспомни сказку "Колобок" и расскажи её!</p>
                <p>1. Жили-были дед да баба...</p>
                <p>2. Испекла баба колобок...</p>
                <p>3. Покатился колобок...</p>
                <div class="tip">💡 Используй слова из сказки!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-1-speech-t1-q1',
              question: 'С чего начинается рассказ?',
              options: ['С конца', 'С начала', 'С середины', 'Не важно'],
              correctAnswer: 1,
              explanation: 'Рассказ начинается с начала! Потом идёт середина, а потом конец.',
              difficulty: 'easy',
              points: 10
            }
          ]
        },
        {
          id: 'class-1-speech-t2',
          title: 'Артикуляционная гимнастика',
          description: 'Упражнения для развития речи',
          theory: `<h3>Артикуляционная гимнастика</h3>
          <p>Это упражнения для языка и губ, которые помогают говорить чётко и правильно.</p>
          <h4>Упражнения:</h4>
          <ul>
            <li>"Лошадка" — цокать языком</li>
            <li>"Часики" — двигать языком влево-вправо</li>
            <li>"Вкусное варенье" — облизать губы</li>
          </ul>`,
          examples: ['Сделай "Лошадку"', 'Упражнение "Часики"', 'Оближи губы'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 10,
          lessons: [
            {
              id: 'class-1-speech-t2-l1',
              title: 'Упражнение "Лошадка"',
              content: `<div class="kid-lesson">
                <h2>🐴 Лошадка</h2>
                <p>Цокай языком как лошадка!</p>
                <p>Цок-цок-цок!</p>
                <div class="activity">Поцокай 10 раз!</div>
                <div class="tip">💡 Это упражнение укрепляет язык!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 3
            },
            {
              id: 'class-1-speech-t2-l2',
              title: 'Упражнение "Часики"',
              content: `<div class="kid-lesson">
                <h2>🕐 Часики</h2>
                <p>Открой рот и двигай языком влево-вправо!</p>
                <p>Тик-так, тик-так!</p>
                <div class="tip">💡 Язык как маятник часов!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 3
            },
            {
              id: 'class-1-speech-t2-l3',
              title: 'Скороговорки',
              content: `<div class="kid-lesson">
                <h2>🗣️ Скороговорки</h2>
                <p>Произнеси быстро:</p>
                <p>"Мама мыла Милу"</p>
                <p>"На дворе трава, на траве дрова"</p>
                <p>"Шла Саша по шоссе"</p>
                <div class="tip">💡 Сначала медленно, потом быстрее!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-1-speech-t2-q1',
              question: 'Зачем нужна артикуляционная гимнастика?',
              options: ['Чтобы красиво петь', 'Чтобы говорить чётко', 'Чтобы танцевать', 'Чтобы бегать'],
              correctAnswer: 1,
              explanation: 'Артикуляционная гимнастика помогает говорить чётко и правильно!',
              difficulty: 'easy',
              points: 10
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'class-1-speech-q1',
          question: 'Из каких частей состоит рассказ?',
          options: ['Только начало', 'Начало, середина, конец', 'Только конец', 'Одна часть'],
          correctAnswer: 1,
          explanation: 'Рассказ состоит из начала, середины и конца!',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    {
      id: 'class-1-world',
      title: 'Окружающий мир',
      icon: <Globe className="w-5 h-5" />,
      color: 'text-green-400',
      gradient: 'from-green-500 to-emerald-500',
      description: 'Природа, времена года, правила поведения',
      topics: [
        {
          id: 'class-1-world-t1',
          title: 'Времена года',
          description: 'Зима, весна, лето, осень',
          theory: `<h3>Четыре времени года</h3>
          <p>В году четыре времени года, каждое длится три месяца.</p>
          <h4>Времена года:</h4>
          <ul>
            <li>❄️ Зима — декабрь, январь, февраль</li>
            <li>🌸 Весна — март, апрель, май</li>
            <li>☀️ Лето — июнь, июль, август</li>
            <li>🍂 Осень — сентябрь, октябрь, ноябрь</li>
          </ul>`,
          examples: ['Какое сейчас время года?', 'Назови месяцы зимы', 'Что происходит весной?'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'class-1-world-t1-l1',
              title: 'Зима и весна',
              content: `<div class="kid-lesson">
                <h2>❄️ Зима</h2>
                <p>Холодно, снег, лыжи, снеговики, Новый год!</p>
                <p>Месяцы: декабрь, январь, февраль</p>
                <h2>🌸 Весна</h2>
                <p>Тает снег, ручьи, первые цветы, птицы возвращаются!</p>
                <p>Месяцы: март, апрель, май</p>
                <div class="tip">💡 Зимой — снеговик, весной — подснежник!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-1-world-t1-l2',
              title: 'Лето и осень',
              content: `<div class="kid-lesson">
                <h2>☀️ Лето</h2>
                <p>Тепло, солнце, каникулы, ягоды, купание!</p>
                <p>Месяцы: июнь, июль, август</p>
                <h2>🍂 Осень</h2>
                <p>Листья желтеют, дождь, урожай, птицы улетают!</p>
                <p>Месяцы: сентябрь, октябрь, ноябрь</p>
                <div class="tip">💡 Летом — ягоды, осенью — грибы!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-1-world-t1-l3',
              title: 'Круглый год',
              content: `<div class="kid-lesson">
                <h2>🔄 Круглый год</h2>
                <p>Времена года идут по кругу:</p>
                <p>Зима → Весна → Лето → Осень → Зима...</p>
                <p>Всего 12 месяцев в году!</p>
                <div class="tip">💡 Запомни порядок: Зима, Весна, Лето, Осень!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-1-world-t1-q1',
              question: 'Сколько времён года?',
              options: ['2', '3', '4', '12'],
              correctAnswer: 2,
              explanation: 'Четыре времени года: зима, весна, лето, осень!',
              difficulty: 'easy',
              points: 10
            },
            {
              id: 'class-1-world-t1-q2',
              question: 'Какой месяц первый в году?',
              options: ['Февраль', 'Январь', 'Декабрь', 'Март'],
              correctAnswer: 1,
              explanation: 'Январь — первый месяц года!',
              difficulty: 'easy',
              points: 10
            }
          ]
        },
        {
          id: 'class-1-world-t2',
          title: 'Домашние животные',
          description: 'Знакомство с домашними питомцами',
          theory: `<h3>Домашние животные</h3>
          <p>Домашние животные живут рядом с человеком. Человек заботится о них: кормит, ухаживает.</p>
          <h4>Домашние животные:</h4>
          <ul>
            <li>🐕 Собака — сторожит дом</li>
            <li>🐈 Кошка — ловит мышей</li>
            <li>🐄 Корова — даёт молоко</li>
            <li>🐔 Курица — несёт яйца</li>
          </ul>`,
          examples: ['Кто даёт молоко?', 'Как кричит собака?', 'Назови домашних животных'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'class-1-world-t2-l1',
              title: 'Собака и кошка',
              content: `<div class="kid-lesson">
                <h2>🐕 Собака</h2>
                <p>Друг человека! Сторожит дом, любит играть.</p>
                <p>Говорит: "Гав-гав!"</p>
                <h2>🐈 Кошка</h2>
                <p>Любит спать и мурлыкать. Ловит мышей.</p>
                <p>Говорит: "Мяу!"</p>
                <div class="tip">💡 Собака и кошка — наши друзья!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-1-world-t2-l2',
              title: 'Животные на ферме',
              content: `<div class="kid-lesson">
                <h2>🐄 Корова</h2>
                <p>Большое животное, даёт молоко. Говорит: "Муу!"</p>
                <h2>🐷 Свинья</h2>
                <p>Розовая, любит валяться в грязи. Говорит: "Хрю-хрю!"</p>
                <h2>🐔 Курица</h2>
                <p>Несёт яйца. Говорит: "Ко-ко-ко!"</p>
                <div class="tip">💡 Фермерские животные дают нам еду!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-1-world-t2-l3',
              title: 'Детёныши животных',
              content: `<div class="kid-lesson">
                <h2>👶 Детёныши</h2>
                <p>У собаки — щенок 🐕</p>
                <p>У кошки — котёнок 🐈</p>
                <p>У коровы — телёнок 🐄</p>
                <p>У курицы — цыплёнок 🐤</p>
                <div class="tip">💡 Мама-животное заботится о детёныше!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-1-world-t2-q1',
              question: 'Кто даёт молоко?',
              options: ['Собака', 'Кошка', 'Корова', 'Курица'],
              correctAnswer: 2,
              explanation: 'Корова даёт молоко!',
              difficulty: 'easy',
              points: 10
            },
            {
              id: 'class-1-world-t2-q2',
              question: 'Как называется детёныш кошки?',
              options: ['Щенок', 'Котёнок', 'Телёнок', 'Цыплёнок'],
              correctAnswer: 1,
              explanation: 'У кошки — котёнок!',
              difficulty: 'easy',
              points: 10
            }
          ]
        },
        {
          id: 'class-1-world-t3',
          title: 'Правила поведения',
          description: 'Как вести себя в школе и дома',
          theory: `<h3>Правила поведения</h3>
          <p>Есть правила, которые помогают нам жить дружно и безопасно.</p>
          <h4>Основные правила:</h4>
          <ul>
            <li>Приветствовать взрослых</li>
            <li>Не бегать в коридорах</li>
            <li>Быть вежливым</li>
            <li>Помогать другим</li>
          </ul>`,
          examples: ['Как поздороваться?', 'Что нельзя делать в школе?', 'Как быть вежливым?'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'class-1-world-t3-l1',
              title: 'Правила в школе',
              content: `<div class="kid-lesson">
                <h2>🏫 Правила в школе</h2>
                <p>1. Здоровайся с учителем: "Здравствуйте!"</p>
                <p>2. Поднимай руку, если хочешь ответить</p>
                <p>3. Не бегай в классе и коридоре</p>
                <p>4. Слушай учителя внимательно</p>
                <div class="tip">💡 Правила помогают учиться!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-1-world-t3-l2',
              title: 'Вежливые слова',
              content: `<div class="kid-lesson">
                <h2>💬 Вежливые слова</h2>
                <p>"Здравствуйте" — приветствие</p>
                <p>"Спасибо" — благодарность</p>
                <p>"Пожалуйста" — просьба</p>
                <p>"Извините" — извинение</p>
                <div class="tip">💡 Вежливые слова открывают все двери!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-1-world-t3-l3',
              title: 'Безопасность',
              content: `<div class="kid-lesson">
                <h2>⚠️ Безопасность</h2>
                <p>1. Не разговаривай с незнакомцами</p>
                <p>2. Переходи дорогу на зелёный свет</p>
                <p>3. Не играй с огнём</p>
                <p>4. Не открывай дверь незнакомым</p>
                <div class="tip">💡 Безопасность — самое важное!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-1-world-t3-q1',
              question: 'Какое слово нужно сказать, когда тебе помогают?',
              options: ['Привет', 'Пока', 'Спасибо', 'Извините'],
              correctAnswer: 2,
              explanation: 'Нужно сказать "Спасибо" — это вежливо!',
              difficulty: 'easy',
              points: 10
            },
            {
              id: 'class-1-world-t3-q2',
              question: 'Что нужно делать на зелёный свет светофора?',
              options: ['Стоять', 'Бежать', 'Переходить дорогу', 'Прыгать'],
              correctAnswer: 2,
              explanation: 'На зелёный свет можно переходить дорогу!',
              difficulty: 'easy',
              points: 10
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'class-1-world-q1',
          question: 'Сколько времён года?',
          options: ['2', '3', '4', '12'],
          correctAnswer: 2,
          explanation: 'Четыре времени года: зима, весна, лето, осень!',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'class-1-world-q2',
          question: 'Кто несёт яйца?',
          options: ['Собака', 'Корова', 'Курица', 'Кошка'],
          correctAnswer: 2,
          explanation: 'Курица несёт яйца!',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    {
      id: 'class-1-tech',
      title: 'Технология',
      icon: <Ruler className="w-5 h-5" />,
      color: 'text-yellow-400',
      gradient: 'from-yellow-500 to-amber-500',
      description: 'Работа с бумагой, лепка и аппликации',
      topics: [
        {
          id: 'class-1-tech-t1',
          title: 'Работа с бумагой',
          description: 'Учимся складывать и вырезать',
          theory: `<h3>Работа с бумагой</h3>
          <p>Бумага — это материал, из которого можно создавать разные поделки.</p>
          <h4>Что можно делать с бумагой:</h4>
          <ul>
            <li>Складывать — оригами</li>
            <li>Вырезать — аппликации</li>
            <li>Склеивать — объёмные фигуры</li>
          </ul>`,
          examples: ['Сделай лодочку', 'Вырежи круг', 'Сложи самолётик'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 20,
          lessons: [
            {
              id: 'class-1-tech-t1-l1',
              title: 'Бумага и её свойства',
              content: `<div class="kid-lesson">
                <h2>📄 Бумага</h2>
                <p>Бумага бывает разная: тонкая и толстая, белая и цветная!</p>
                <p>Бумагу можно:</p>
                <p>- Складывать</p>
                <p>- Резать</p>
                <p>- Клеить</p>
                <div class="tip">💡 Работай аккуратно с ножницами!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-1-tech-t1-l2',
              title: 'Оригами: самолётик',
              content: `<div class="kid-lesson">
                <h2>✈️ Самолётик из бумаги</h2>
                <p>1. Возьми лист бумаги</p>
                <p>2. Сложи пополам</p>
                <p>3. Загни углы</p>
                <p>4. Сложи крылья</p>
                <div class="tip">💡 Самолётик готов к полёту!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-1-tech-t1-l3',
              title: 'Аппликация',
              content: `<div class="kid-lesson">
                <h2>🎨 Аппликация</h2>
                <p>Аппликация — это картинка из вырезанных кусочков!</p>
                <p>1. Нарисуй детали</p>
                <p>2. Вырежи их</p>
                <p>3. Наклей на основу</p>
                <div class="tip">💡 Сделай аппликацию "Цветок"!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-1-tech-t1-q1',
              question: 'Что такое оригами?',
              options: ['Лепка из глины', 'Искусство складывания бумаги', 'Рисование красками', 'Вырезание'],
              correctAnswer: 1,
              explanation: 'Оригами — это искусство складывания фигурок из бумаги!',
              difficulty: 'easy',
              points: 10
            }
          ]
        },
        {
          id: 'class-1-tech-t2',
          title: 'Лепка из пластилина',
          description: 'Создаём фигурки из пластилина',
          theory: `<h3>Лепка из пластилина</h3>
          <p>Пластилин — это мягкий материал, из которого можно лепить разные фигурки.</p>
          <h4>Приёмы лепки:</h4>
          <ul>
            <li>Раскатывание — сделать колбаску</li>
            <li>Скатывание — сделать шарик</li>
            <li>Сплющивание — сделать лепёшку</li>
          </ul>`,
          examples: ['Слепи шарик', 'Слепи змейку', 'Слепи снеговика'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'class-1-tech-t2-l1',
              title: 'Шарики и колбаски',
              content: `<div class="kid-lesson">
                <h2>🔴 Шарик</h2>
                <p>Возьми кусочек пластилина и покатай между ладошками!</p>
                <h2>🐍 Колбаска</h2>
                <p>Раскатай пластилин ладошками туда-сюда!</p>
                <div class="tip">💡 Разминай пластилин, чтобы он стал мягким!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-1-tech-t2-l2',
              title: 'Лепим снеговика',
              content: `<div class="kid-lesson">
                <h2>⛄ Снеговик из пластилина</h2>
                <p>1. Слепи три шарика: большой, средний, маленький</p>
                <p>2. Поставь их друг на друга</p>
                <p>3. Сделай глаза и нос</p>
                <div class="tip">💡 Снеговик готов!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-1-tech-t2-l3',
              title: 'Лепим животных',
              content: `<div class="kid-lesson">
                <h2>🐱 Кошка из пластилина</h2>
                <p>1. Слепи тело — овал</p>
                <p>2. Слепи голову — шарик</p>
                <p>3. Сделай ушки — треугольники</p>
                <p>4. Приклей хвостик — колбаску</p>
                <div class="tip">💡 Можно слепить любую фигурку!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-1-tech-t2-q1',
              question: 'Как сделать шарик из пластилина?',
              options: ['Растянуть', 'Покатать между ладошками', 'Сплющить', 'Порезать'],
              correctAnswer: 1,
              explanation: 'Шарик делается катанием между ладошками!',
              difficulty: 'easy',
              points: 10
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'class-1-tech-q1',
          question: 'Что такое аппликация?',
          options: ['Лепка', 'Рисунок из вырезанных деталей', 'Вышивка', 'Плетение'],
          correctAnswer: 1,
          explanation: 'Аппликация — это картина из вырезанных и наклеенных деталей!',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    {
      id: 'class-1-pe',
      title: 'Физкультура',
      icon: <Dumbbell className="w-5 h-5" />,
      color: 'text-orange-400',
      gradient: 'from-orange-500 to-red-500',
      description: 'Подвижные игры, гимнастика и эстафеты',
      topics: [
        {
          id: 'class-1-pe-t1',
          title: 'Подвижные игры',
          description: 'Учимся играть в команды',
          theory: `<h3>Подвижные игры</h3>
          <p>Подвижные игры помогают развивать силу, ловкость и быстроту.</p>
          <h4>Правила игр:</h4>
          <ul>
            <li>Слушать правила игры</li>
            <li>Соблюдать очередность</li>
            <li>Быть честным</li>
            <li>Помогать товарищам</li>
          </ul>`,
          examples: ['Игры с мячом', 'Эстафеты', 'Прятки'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 20,
          lessons: [
            {
              id: 'class-1-pe-t1-l1',
              title: 'Игры с мячом',
              content: `<div class="kid-lesson">
                <h2>🏀 Игры с мячом</h2>
                <p>Мяч можно:</p>
                <p>- Бросать и ловить</p>
                <p>- Катить</p>
                <p>- Отбивать</p>
                <div class="activity">Поиграй в "Лови мяч"!</div>
                <div class="tip">💡 Лови мяч обеими руками!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-1-pe-t1-l2',
              title: 'Эстафеты',
              content: `<div class="kid-lesson">
                <h2>🏃 Эстафета</h2>
                <p>Эстафета — это командная игра!</p>
                <p>1. Делимся на команды</p>
                <p>2. Бежим по очереди</p>
                <p>3. Передаём палочку</p>
                <div class="tip">💡 Побеждает дружба и скорость!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-1-pe-t1-l3',
              title: 'Прыжки и бег',
              content: `<div class="kid-lesson">
                <h2>🏃‍♂️ Бег и прыжки</h2>
                <p>Бег — быстрые шаги!</p>
                <p>Прыжки — отталкивайся двумя ногами!</p>
                <div class="activity">Попрыгай как зайчик!</div>
                <div class="tip">💡 Разминайся перед бегом!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-1-pe-t1-q1',
              question: 'Что нужно сделать перед бегом?',
              options: ['Поесть', 'Разминаться', 'Отдохнуть', 'Читать'],
              correctAnswer: 1,
              explanation: 'Перед бегом нужно сделать разминку, чтобы не пораниться!',
              difficulty: 'easy',
              points: 10
            }
          ]
        },
        {
          id: 'class-1-pe-t2',
          title: 'Гимнастика',
          description: 'Упражнения для здоровья',
          theory: `<h3>Гимнастика</h3>
          <p>Гимнастика — это упражнения для развития тела и здоровья.</p>
          <h4>Виды упражнений:</h4>
          <ul>
            <li>Наклоны</li>
            <li>Приседания</li>
            <li>Прыжки</li>
            <li>Повороты</li>
          </ul>`,
          examples: ['Сделай 5 приседаний', 'Наклонись вперёд', 'Покрути головой'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'class-1-pe-t2-l1',
              title: 'Зарядка',
              content: `<div class="kid-lesson">
                <h2>🌞 Утренняя зарядка</h2>
                <p>1. Подняли руки вверх — потянулись!</p>
                <p>2. Наклоны влево-вправо</p>
                <p>3. Приседания</p>
                <p>4. Прыжки на месте</p>
                <div class="tip">💡 Зарядка бодрит на весь день!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-1-pe-t2-l2',
              title: 'Упражнения для осанки',
              content: `<div class="kid-lesson">
                <h2>🧍 Правильная осанка</h2>
                <p>1. Встань прямо</p>
                <p>2. Расправь плечи</p>
                <p>3. Подними подбородок</p>
                <p>4. Втяни живот</p>
                <div class="tip">💡 Правильная осанка — красивая спина!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-1-pe-t2-l3',
              title: 'Дыхательные упражнения',
              content: `<div class="kid-lesson">
                <h2>🌬️ Дыхание</h2>
                <p>1. Глубокий вдох носом</p>
                <p>2. Задержи дыхание</p>
                <p>3. Медленный выдох ртом</p>
                <div class="tip">💡 Глубокое дыхание успокаивает!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-1-pe-t2-q1',
              question: 'Зачем нужна зарядка?',
              options: ['Чтобы спать', 'Чтобы бодрствовать', 'Чтобы есть', 'Чтобы читать'],
              correctAnswer: 1,
              explanation: 'Зарядка помогает проснуться и бодрствовать весь день!',
              difficulty: 'easy',
              points: 10
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'class-1-pe-q1',
          question: 'Что важно перед физическими упражнениями?',
          options: ['Поесть', 'Разминаться', 'Читать', 'Сидеть'],
          correctAnswer: 1,
          explanation: 'Разминка важна перед любыми упражнениями!',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    {
      id: 'class-1-art',
      title: 'ИЗО',
      icon: <Palette className="w-5 h-5" />,
      color: 'text-pink-400',
      gradient: 'from-pink-500 to-rose-500',
      description: 'Рисование красками и работа с цветом',
      topics: [
        {
          id: 'class-1-art-t1',
          title: 'Работа с цветом',
          description: 'Учимся различать цвета',
          theory: `<h3>Цвета и оттенки</h3>
          <p>Мир полон разных цветов! Основные цвета: красный, синий, жёлтый.</p>
          <h4>Смешивание цветов:</h4>
          <ul>
            <li>Красный + Жёлтый = Оранжевый</li>
            <li>Синий + Жёлтый = Зелёный</li>
            <li>Красный + Синий = Фиолетовый</li>
          </ul>`,
          examples: ['Назови цвета радуги', 'Смешай краски', 'Нарисуй радугу'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'class-1-art-t1-l1',
              title: 'Основные цвета',
              content: `<div class="kid-lesson">
                <h2>🎨 Основные цвета</h2>
                <p>🔴 Красный — как яблоко</p>
                <p>🔵 Синий — как небо</p>
                <p>🟡 Жёлтый — как солнце</p>
                <div class="tip">💡 Из этих трёх цветов можно получить другие!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-1-art-t1-l2',
              title: 'Смешивание цветов',
              content: `<div class="kid-lesson">
                <h2>🌈 Смешиваем цвета</h2>
                <p>🔴 + 🟡 = 🟠 Оранжевый</p>
                <p>🔵 + 🟡 = 🟢 Зелёный</p>
                <p>🔴 + 🔵 = 🟣 Фиолетовый</p>
                <div class="tip">💡 Попробуй смешать краски!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-1-art-t1-l3',
              title: 'Радуга',
              content: `<div class="kid-lesson">
                <h2>🌈 Радуга</h2>
                <p>В радуге 7 цветов:</p>
                <p>Красный, Оранжевый, Жёлтый, Зелёный, Голубой, Синий, Фиолетовый</p>
                <div class="activity">Нарисуй радугу!</div>
                <div class="tip">💡 Запомни: Каждый Охотник Желает Знать, Где Сидит Фазан!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-1-art-t1-q1',
              question: 'Какой цвет получится, если смешать красный и жёлтый?',
              options: ['Зелёный', 'Оранжевый', 'Фиолетовый', 'Синий'],
              correctAnswer: 1,
              explanation: 'Красный + Жёлтый = Оранжевый!',
              difficulty: 'easy',
              points: 10
            },
            {
              id: 'class-1-art-t1-q2',
              question: 'Сколько цветов в радуге?',
              options: ['5', '6', '7', '8'],
              correctAnswer: 2,
              explanation: 'В радуге 7 цветов!',
              difficulty: 'easy',
              points: 10
            }
          ]
        },
        {
          id: 'class-1-art-t2',
          title: 'Рисование красками',
          description: 'Учимся рисовать акварелью',
          theory: `<h3>Акварельные краски</h3>
          <p>Акварель — это прозрачные краски, которые разводятся водой.</p>
          <h4>Правила работы с акварелью:</h4>
          <ul>
            <li>Смочи кисточку водой</li>
            <li>Набери краску на кисточку</li>
            <li>Рисуй плавными движениями</li>
            <li>Промой кисточку перед другим цветом</li>
          </ul>`,
          examples: ['Нарисуй солнышко', 'Нарисуй цветок', 'Нарисуй дерево'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 20,
          lessons: [
            {
              id: 'class-1-art-t2-l1',
              title: 'Кисточка и краски',
              content: `<div class="kid-lesson">
                <h2>🖌️ Как работать с кисточкой</h2>
                <p>1. Намочи кисточку в воде</p>
                <p>2. Проведи по краске</p>
                <p>3. Рисуй на бумаге</p>
                <p>4. Промой кисточку!</p>
                <div class="tip">💡 Держи кисточку как карандаш!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-1-art-t2-l2',
              title: 'Рисуем солнышко',
              content: `<div class="kid-lesson">
                <h2>☀️ Солнышко</h2>
                <p>1. Нарисуй жёлтый круг в центре</p>
                <p>2. Добавь лучики во все стороны</p>
                <p>3. Можно добавить улыбку!</p>
                <div class="tip">💡 Солнышко согревает землю!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-1-art-t2-l3',
              title: 'Рисуем природу',
              content: `<div class="kid-lesson">
                <h2>🌳 Дерево</h2>
                <p>1. Коричневый ствол снизу вверх</p>
                <p>2. Зелёная крона — много листьев</p>
                <p>3. Добавь травку внизу</p>
                <div class="tip">💡 Можно нарисовать целый лес!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-1-art-t2-q1',
              question: 'Что нужно сделать перед тем, как набрать краску?',
              options: ['Положить кисточку', 'Смочить кисточку водой', 'Вытереть кисточку', 'Подержать в воздухе'],
              correctAnswer: 1,
              explanation: 'Нужно смочить кисточку водой, чтобы краска набралась!',
              difficulty: 'easy',
              points: 10
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'class-1-art-q1',
          question: 'Какой цвет получается из синего и жёлтого?',
          options: ['Оранжевый', 'Зелёный', 'Фиолетовый', 'Красный'],
          correctAnswer: 1,
          explanation: 'Синий + Жёлтый = Зелёный!',
          difficulty: 'easy',
          points: 10
        }
      ]
    }
  ]
}
