// Расширенные данные для подготовительного класса
// Иерархия: Предмет → Раздел → Тема → Урок

import { Book, Calculator, Leaf, Palette, Music, Heart, Mic, Sparkles, Dumbbell, Users, AlertTriangle } from 'lucide-react'
import type { Subject } from './types'

// ==================== ПОДГОТОВИТЕЛЬНЫЙ КЛАСС ====================

export const preparatoryClassSubjects: Subject[] = [
  // ==================== ПОДГОТОВКА К ПИСЬМУ ====================
  {
    id: 'prep-writing',
    title: 'Подготовка к письму',
    icon: <Book className="w-5 h-5" />,
    color: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Развитие навыков письма и мелкой моторики',
    sections: [
      {
        id: 'prep-writing-s1',
        title: 'Развитие моторики',
        description: 'Упражнения для развития руки',
        order: 1,
        topics: [
          {
            id: 'prep-writing-s1-t1',
            title: 'Обведение контуров',
            description: 'Учимся обводить фигуры по контуру',
            theory: `<h3>Что такое обведение контуров?</h3>
            <p>Обведение контуров — это первое упражнение для подготовки руки к письму. Ребёнок учится контролировать движение карандаша, следуя по готовой линии.</p>
            <h4>Почему это важно?</h4>
            <ul>
              <li>Развивает мелкую моторику пальцев</li>
              <li>Учит координировать движения руки и глаза</li>
              <li>Подготавливает мышцы руки к письму</li>
            </ul>`,
            examples: ['Обведи солнышко ☀️', 'Обведи листочек 🍃', 'Обведи геометрические фигуры'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'prep-writing-s1-t1-l1',
                title: 'Обводим солнышко',
                content: `<div class="kid-lesson">
                  <h2>☀️ Солнышко</h2>
                  <p>Давай обведём солнышко! Проведи пальчиком по контуру, а потом попробуй карандашом.</p>
                  <div class="activity">Нарисуй солнышко с лучиками!</div>
                  <div class="tip">💡 Держи карандаш тремя пальчиками!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'prep-writing-s1-t1-l2',
                title: 'Обводим фигуры',
                content: `<div class="kid-lesson">
                  <h2>🔷 Фигуры</h2>
                  <p>Обведи круг, квадрат и треугольник. Постарайся не выходить за линии!</p>
                  <div class="activity">Нарисуй эти фигуры сам!</div>
                  <div class="tip">💡 Веди линию медленно и аккуратно!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'prep-writing-s1-t1-l3',
                title: 'Обводим дорожки',
                content: `<div class="kid-lesson">
                  <h2>🛤️ Дорожки</h2>
                  <p>Проведи зайчика по дорожке к морковке! Обведи извилистую линию.</p>
                  <div class="activity">Помоги зайчику найти дорогу!</div>
                  <div class="tip">💡 Сначала пальчиком, потом карандашом!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ]
          },
          {
            id: 'prep-writing-s1-t2',
            title: 'Штриховка',
            description: 'Учимся штриховать фигуры',
            theory: `<h3>Что такое штриховка?</h3>
            <p>Штриховка — это закрашивание фигуры ровными линиями. Это помогает научиться вести ровные линии.</p>
            <h4>Правила штриховки:</h4>
            <ul>
              <li>Линии должны быть ровными</li>
              <li>Расстояние между линиями одинаковое</li>
              <li>Не выходить за контур фигуры</li>
            </ul>`,
            examples: ['Заштрихуй яблоко', 'Заштрихуй домик', 'Заштрихуй машинку'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'prep-writing-s1-t2-l1',
                title: 'Штрихуем горизонтально',
                content: `<div class="kid-lesson">
                  <h2>➡️ Горизонтальные линии</h2>
                  <p>Рисуем линии слева направо, как машинка едет по дороге!</p>
                  <div class="activity">Заштрихуй прямоугольник горизонтальными линиями!</div>
                  <div class="tip">💡 Линии не должны касаться друг друга!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'prep-writing-s1-t2-l2',
                title: 'Штрихуем вертикально',
                content: `<div class="kid-lesson">
                  <h2>⬇️ Вертикальные линии</h2>
                  <p>Рисуем линии сверху вниз, как дождик капает!</p>
                  <div class="activity">Заштрихуй квадрат вертикальными линиями!</div>
                  <div class="tip">💡 Веди линию сверху вниз!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'prep-writing-s1-t2-l3',
                title: 'Штрихуем по диагонали',
                content: `<div class="kid-lesson">
                  <h2>↗️ Наклонные линии</h2>
                  <p>Рисуем линии наискосок, как горка!</p>
                  <div class="activity">Заштрихуй треугольник наклонными линиями!</div>
                  <div class="tip">💡 Все линии в одну сторону!</div>
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
        id: 'prep-writing-s2',
        title: 'Элементы букв',
        description: 'Подготовка к написанию букв',
        order: 2,
        topics: [
          {
            id: 'prep-writing-s2-t1',
            title: 'Палочки и крючочки',
            description: 'Первые элементы букв',
            theory: `<h3>Элементы букв</h3>
            <p>Буквы состоят из простых элементов: палочек, крючочков, петель и овалов.</p>
            <h4>Основные элементы:</h4>
            <ul>
              <li>Прямая палочка — |</li>
              <li>Наклонная палочка — /</li>
              <li>Крючок — ˥</li>
              <li>Овал — о</li>
            </ul>`,
            examples: ['Напиши прямую палочку', 'Напиши крючок', 'Напиши овал'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'prep-writing-s2-t1-l1',
                title: 'Прямая палочка',
                content: `<div class="kid-lesson">
                  <h2>➡️ Прямая палочка</h2>
                  <p>Веди линию сверху вниз. Это элемент букв А, Н, П!</p>
                  <div class="activity">Напиши 5 прямых палочек!</div>
                  <div class="tip">💡 Начинай сверху, веди до нижней линии!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'prep-writing-s2-t1-l2',
                title: 'Наклонная палочка',
                content: `<div class="kid-lesson">
                  <h2>↗️ Наклонная палочка</h2>
                  <p>Веди линию наискосок. Это элемент букв А, У, Д!</p>
                  <div class="activity">Напиши 5 наклонных палочек!</div>
                  <div class="tip">💡 Держи наклон как у всех букв!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'prep-writing-s2-t1-l3',
                title: 'Крючок',
                content: `<div class="kid-lesson">
                  <h2>🪝 Крючок</h2>
                  <p>Палочка с загибом внизу. Это элемент букв у, р, в!</p>
                  <div class="activity">Напиши 5 крючков!</div>
                  <div class="tip">💡 Загиб делай маленьким!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              },
              {
                id: 'prep-writing-s2-t1-l4',
                title: 'Овал',
                content: `<div class="kid-lesson">
                  <h2>⭕ Овал</h2>
                  <p>Круглая фигурка. Это элемент букв о, а, ю!</p>
                  <div class="activity">Напиши 5 овалов!</div>
                  <div class="tip">💡 Начинай сверху, веди по кругу!</div>
                </div>`,
                completed: false,
                order: 4,
                estimatedTime: 5
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'prep-writing-q1',
        question: 'Какой элемент буквы мы учились писать?',
        options: ['Квадратик', 'Палочка', 'Треугольник', 'Звёздочка'],
        correctAnswer: 1,
        explanation: 'Прямая палочка — это основной элемент многих букв!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'prep-writing-q2',
        question: 'Как правильно держать карандаш?',
        options: ['В кулаке', 'Тремя пальцами', 'Двумя руками', 'Любой рукой'],
        correctAnswer: 1,
        explanation: 'Карандаш нужно держать тремя пальцами: большим, указательным и средним!',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ОСНОВЫ СЧЁТА ====================
  {
    id: 'prep-math',
    title: 'Основы счёта',
    icon: <Calculator className="w-5 h-5" />,
    color: 'text-blue-400',
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Знакомство с числами и основами математики',
    sections: [
      {
        id: 'prep-math-s1',
        title: 'Числа первого десятка',
        description: 'Знакомство с числами от 1 до 10',
        order: 1,
        topics: [
          {
            id: 'prep-math-s1-t1',
            title: 'Числа 1, 2, 3',
            description: 'Знакомимся с первыми числами',
            theory: `<h3>Первые числа</h3>
            <p>Давай познакомимся с первыми числами!</p>
            <h4>Один (1)</h4>
            <p>Один предмет — это одна вещь. Один мячик, одна кукла, один карандаш.</p>
            <h4>Два (2)</h4>
            <p>Два — это один и ещё один. Два носочка, две варежки.</p>
            <h4>Три (3)</h4>
            <p>Три — это два и ещё один. Три поросёнка, три медведя!</p>`,
            examples: ['Покажи 1 пальчик', 'Покажи 2 пальчика', 'Покажи 3 пальчика'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'prep-math-s1-t1-l1',
                title: 'Число 1',
                content: `<div class="kid-lesson">
                  <h2>1️⃣ Один</h2>
                  <p>Один — это одна вещь! Один солнышко на небе ☀️</p>
                  <div class="activity">Найди один предмет в комнате!</div>
                  <div class="emoji-practice">🍎 = 1</div>
                  <div class="tip">💡 Подними один пальчик!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'prep-math-s1-t1-l2',
                title: 'Число 2',
                content: `<div class="kid-lesson">
                  <h2>2️⃣ Два</h2>
                  <p>Два — это один и ещё один! Два у тебя ушка 👂👂</p>
                  <div class="activity">Покажи два пальчика!</div>
                  <div class="emoji-practice">🍎🍎 = 2</div>
                  <div class="tip">💡 Две руки — это 10 пальчиков!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'prep-math-s1-t1-l3',
                title: 'Число 3',
                content: `<div class="kid-lesson">
                  <h2>3️⃣ Три</h2>
                  <p>Три — это два и ещё один! Три поросёнка 🐷🐷🐷</p>
                  <div class="activity">Покажи три пальчика!</div>
                  <div class="emoji-practice">🍎🍎🍎 = 3</div>
                  <div class="tip">💡 Три угла у треугольника!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ]
          },
          {
            id: 'prep-math-s1-t2',
            title: 'Числа 4, 5',
            description: 'Продолжаем считать',
            theory: `<h3>Числа 4 и 5</h3>
            <h4>Четыре (4)</h4>
            <p>Четыре — это три и ещё один. У квадрата 4 угла, у стула 4 ножки.</p>
            <h4>Пять (5)</h4>
            <p>Пять — это четыре и ещё один. Пять пальчиков на одной руке! ✋</p>`,
            examples: ['Посчитай ножки у стула', 'Покажи 5 пальчиков', 'Сколько углов у квадрата?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'prep-math-s1-t2-l1',
                title: 'Число 4',
                content: `<div class="kid-lesson">
                  <h2>4️⃣ Четыре</h2>
                  <p>Четыре — это три и ещё один! У квадрата 4 угла ⬜</p>
                  <div class="activity">Посчитай углы у квадрата!</div>
                  <div class="emoji-practice">🍎🍎🍎🍎 = 4</div>
                  <div class="tip">💡 У стула 4 ножки!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'prep-math-s1-t2-l2',
                title: 'Число 5',
                content: `<div class="kid-lesson">
                  <h2>5️⃣ Пять</h2>
                  <p>Пять — это четыре и ещё один! Пять пальчиков на руке ✋</p>
                  <div class="activity">Посчитай пальчики на одной руке!</div>
                  <div class="emoji-practice">🍎🍎🍎🍎🍎 = 5</div>
                  <div class="tip">💡 Пять — это вся ладошка!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              }
            ]
          },
          {
            id: 'prep-math-s1-t3',
            title: 'Числа 6-10',
            description: 'Доучиваем до десяти',
            theory: `<h3>Числа от 6 до 10</h3>
            <p>Продолжаем считать!</p>
            <h4>Шесть (6)</h4>
            <p>Шесть — это пять и ещё один.</p>
            <h4>Семь (7)</h4>
            <p>Семь — шесть и ещё один. Семь дней в неделе!</p>
            <h4>Восемь (8)</h4>
            <p>Восемь — семь и ещё один.</p>
            <h4>Девять (9)</h4>
            <p>Девять — восемь и ещё один.</p>
            <h4>Десять (10)</h4>
            <p>Десять — девять и ещё один. Десять пальчиков на двух руках! 🙌</p>`,
            examples: ['Сколько дней в неделе?', 'Посчитай до 10', 'Покажи 10 пальчиков'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 20,
            lessons: [
              {
                id: 'prep-math-s1-t3-l1',
                title: 'Числа 6 и 7',
                content: `<div class="kid-lesson">
                  <h2>6️⃣7️⃣ Шесть и семь</h2>
                  <p>Шесть — это 5+1, а семь — это 6+1!</p>
                  <div class="activity">Сколько дней в неделе?</div>
                  <div class="emoji-practice">🍎🍎🍎🍎🍎🍎 = 6</div>
                  <div class="tip">💡 7 дней: Пн, Вт, Ср, Чт, Пт, Сб, Вс!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'prep-math-s1-t3-l2',
                title: 'Числа 8 и 9',
                content: `<div class="kid-lesson">
                  <h2>8️⃣9️⃣ Восемь и девять</h2>
                  <p>Восемь — это 7+1, а девять — это 8+1!</p>
                  <div class="activity">Посчитай ножки у двух стульев!</div>
                  <div class="emoji-practice">🍎🍎🍎🍎🍎🍎🍎🍎 = 8</div>
                  <div class="tip">💡 У паука 8 ножек!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'prep-math-s1-t3-l3',
                title: 'Число 10',
                content: `<div class="kid-lesson">
                  <h2>🔟 Десять</h2>
                  <p>Десять — это 9+1! Все пальчики на двух руках! 🙌</p>
                  <div class="activity">Посчитай все пальчики!</div>
                  <div class="emoji-practice">🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎 = 10</div>
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
        id: 'prep-math-s2',
        title: 'Сравнение чисел',
        description: 'Больше, меньше, равно',
        order: 2,
        topics: [
          {
            id: 'prep-math-s2-t1',
            title: 'Больше и меньше',
            description: 'Сравниваем количество',
            theory: `<h3>Сравниваем числа</h3>
            <p>Мы можем сравнивать, где больше, а где меньше!</p>
            <h4>Знаки:</h4>
            <ul>
              <li>> больше — птичка открывает клюв к большему числу</li>
              <li>< меньше — острый уголок показывает на меньшее</li>
              <li>= равно — одинаковое количество</li>
            </ul>`,
            examples: ['Что больше: 3 или 5?', 'Что меньше: 2 или 4?', 'Сравни: 3 и 3'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'prep-math-s2-t1-l1',
                title: 'Знак больше >',
                content: `<div class="kid-lesson">
                  <h2>➡️ Больше</h2>
                  <p>Знак > показывает, что левое число больше! Птичка открывает клюв к большему!</p>
                  <div class="activity">5 > 3 — пять больше трёх!</div>
                  <div class="emoji-practice">🍎🍎🍎🍎🍎 > 🍎🍎🍎</div>
                  <div class="tip">💡 Клювик открывается к большему!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'prep-math-s2-t1-l2',
                title: 'Знак меньше <',
                content: `<div class="kid-lesson">
                  <h2>⬅️ Меньше</h2>
                  <p>Знак < показывает, что левое число меньше! Острый уголок на меньшее!</p>
                  <div class="activity">2 < 4 — два меньше четырёх!</div>
                  <div class="emoji-practice">🍎🍎 < 🍎🍎🍎🍎</div>
                  <div class="tip">💡 Уголок указывает на меньшее!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'prep-math-s2-t1-l3',
                title: 'Знак равно =',
                content: `<div class="kid-lesson">
                  <h2>= Равно</h2>
                  <p>Знак = показывает, что числа одинаковые!</p>
                  <div class="activity">3 = 3 — три равно трём!</div>
                  <div class="emoji-practice">🍎🍎🍎 = 🍎🍎🍎</div>
                  <div class="tip">💡 Две одинаковые чёрточки!</div>
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
        id: 'prep-math-s3',
        title: 'Геометрические фигуры',
        description: 'Круг, квадрат, треугольник',
        order: 3,
        topics: [
          {
            id: 'prep-math-s3-t1',
            title: 'Основные фигуры',
            description: 'Учим фигуры',
            theory: `<h3>Геометрические фигуры</h3>
            <p>Фигуры — это формы предметов!</p>
            <h4>Основные фигуры:</h4>
            <ul>
              <li>⭕ <b>Круг</b> — круглый, без углов</li>
              <li>⬜ <b>Квадрат</b> — 4 одинаковые стороны</li>
              <li>🔺 <b>Треугольник</b> — 3 стороны, 3 угла</li>
              <li>▬ <b>Прямоугольник</b> — 4 стороны, 4 угла</li>
            </ul>`,
            examples: ['Найди круг', 'Сколько углов у квадрата?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'prep-math-s3-t1-l1',
                title: 'Круг',
                content: `<div class="kid-lesson">
                  <h2>⭕ Круг</h2>
                  <p>Круг — это фигура без углов! Как солнышко или мячик!</p>
                  <div class="activity">Найди круглые предметы вокруг!</div>
                  <div class="emoji-practice">⚪🔴🔵🟡🟢 — это круги!</div>
                  <div class="tip">💡 У круга нет углов!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'prep-math-s3-t1-l2',
                title: 'Квадрат',
                content: `<div class="kid-lesson">
                  <h2>⬜ Квадрат</h2>
                  <p>Квадрат — это фигура с 4 одинаковыми сторонами!</p>
                  <div class="activity">Посчитай углы у квадрата!</div>
                  <div class="emoji-practice">У квадрата 4 угла и 4 одинаковые стороны!</div>
                  <div class="tip">💡 Все стороны квадрата равны!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'prep-math-s3-t1-l3',
                title: 'Треугольник',
                content: `<div class="kid-lesson">
                  <h2>🔺 Треугольник</h2>
                  <p>Треугольник — это фигура с 3 сторонами и 3 углами!</p>
                  <div class="activity">Найди треугольники вокруг!</div>
                  <div class="emoji-practice">🚩📐🏕️ — предметы похожие на треугольник!</div>
                  <div class="tip">💡 Три угла = треугольник!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              }
            ],
            quiz: [
              {
                id: 'prep-math-s3-t1-q1',
                question: 'Сколько углов у треугольника?',
                options: ['2', '3', '4', 'Нет углов'],
                correctAnswer: 1,
                explanation: 'У треугольника 3 угла! Три-угольник!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'prep-math-s3-t1-q2',
                question: 'Какая фигура без углов?',
                options: ['Квадрат', 'Треугольник', 'Круг', 'Прямоугольник'],
                correctAnswer: 2,
                explanation: 'У круга нет углов — он круглый!',
                difficulty: 'easy',
                points: 10
              }
            ]
          }
        ]
      },
      {
        id: 'prep-math-s4',
        title: 'Сравнение предметов',
        description: 'Большой-маленький, длинный-короткий',
        order: 4,
        topics: [
          {
            id: 'prep-math-s4-t1',
            title: 'Размер предметов',
            description: 'Сравниваем по размеру',
            theory: `<h3>Сравниваем предметы</h3>
            <p>Предметы можно сравнивать по размеру:</p>
            <h4>Слова для сравнения:</h4>
            <ul>
              <li>Большой — маленький</li>
              <li>Длинный — короткий</li>
              <li>Высокий — низкий</li>
              <li>Широкий — узкий</li>
            </ul>`,
            examples: ['Что больше: слон или мышка?', 'Какая лента длиннее?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'prep-math-s4-t1-l1',
                title: 'Большой и маленький',
                content: `<div class="kid-lesson">
                  <h2>🐘 Большой и маленький</h2>
                  <p>Слон — большой! Мышка — маленькая!</p>
                  <div class="activity">Сравни предметы!</div>
                  <div class="emoji-practice">🐘 > 🐭 (слон больше мышки)</div>
                  <div class="tip">💡 Большой предмет занимает больше места!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'prep-math-s4-t1-l2',
                title: 'Длинный и короткий',
                content: `<div class="kid-lesson">
                  <h2>📏 Длинный и короткий</h2>
                  <p>Лента может быть длинной или короткой!</p>
                  <div class="activity">Какая лента длиннее?</div>
                  <div class="emoji-practice">━━━━━ > ━━ (длинная > короткая)</div>
                  <div class="tip">💡 Длинный предмет тянется дальше!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              }
            ],
            quiz: [
              {
                id: 'prep-math-s4-t1-q1',
                question: 'Кто больше: слон или мышка?',
                options: ['Слон', 'Мышка', 'Одинаковые', 'Не знаю'],
                correctAnswer: 0,
                explanation: 'Слон намного больше мышки!',
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
        id: 'prep-math-q1',
        question: 'Сколько пальчиков на одной руке?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 2,
        explanation: 'На одной руке 5 пальчиков: большой, указательный, средний, безымянный и мизинец!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'prep-math-q2',
        question: 'Какое число больше: 3 или 7?',
        options: ['3', '7', 'Они равны', 'Не знаю'],
        correctAnswer: 1,
        explanation: '7 больше, чем 3! Когда считаем: 1, 2, 3, 4, 5, 6, 7 — число 7 идёт позже.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'prep-math-q3',
        question: 'Сколько дней в неделе?',
        options: ['5', '6', '7', '8'],
        correctAnswer: 2,
        explanation: 'В неделе 7 дней: понедельник, вторник, среда, четверг, пятница, суббота, воскресенье!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'prep-math-q4',
        question: 'Сколько углов у квадрата?',
        options: ['2', '3', '4', 'Нет углов'],
        correctAnswer: 2,
        explanation: 'У квадрата 4 угла!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'prep-math-q5',
        question: 'Какая фигура без углов?',
        options: ['Квадрат', 'Треугольник', 'Круг', 'Прямоугольник'],
        correctAnswer: 2,
        explanation: 'У круга нет углов — он круглый!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'prep-math-q6',
        question: 'Кто больше: слон или мышка?',
        options: ['Слон', 'Мышка', 'Одинаковые', 'Не знаю'],
        correctAnswer: 0,
        explanation: 'Слон намного больше мышки!',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ОКРУЖАЮЩИЙ МИР ====================
  {
    id: 'prep-world',
    title: 'Окружающий мир',
    icon: <Leaf className="w-5 h-5" />,
    color: 'text-green-400',
    gradient: 'from-green-500 to-emerald-500',
    description: 'Знакомство с природой и окружающим миром',
    sections: [
      {
        id: 'prep-world-s1',
        title: 'Времена года',
        description: 'Зима, весна, лето, осень',
        order: 1,
        topics: [
          {
            id: 'prep-world-s1-t1',
            title: 'Четыре времени года',
            description: 'Знакомимся с сезонами',
            theory: `<h3>Четыре времени года</h3>
            <p>В году четыре времени года, каждое длится три месяца:</p>
            <ul>
              <li>❄️ <b>Зима</b> — декабрь, январь, февраль. Холодно, снег!</li>
              <li>🌸 <b>Весна</b> — март, апрель, май. Тает снег, распускаются листья!</li>
              <li>☀️ <b>Лето</b> — июнь, июль, август. Тепло, каникулы!</li>
              <li>🍂 <b>Осень</b> — сентябрь, октябрь, ноябрь. Листья желтеют, идёт дождь!</li>
            </ul>`,
            examples: ['Какое сейчас время года?', 'Что мы надеваем зимой?', 'Когда каникулы?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'prep-world-s1-t1-l1',
                title: 'Зима',
                content: `<div class="kid-lesson">
                  <h2>❄️ Зима</h2>
                  <p>Зимой холодно! Выпадает снег, можно кататься на санках и лыжах!</p>
                  <div class="activity">Что мы надеваем зимой?</div>
                  <div class="emoji-practice">🧥🧤🧣🎿⛄</div>
                  <div class="tip">💡 Зимой мы надеваем тёплую одежду!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'prep-world-s1-t1-l2',
                title: 'Весна',
                content: `<div class="kid-lesson">
                  <h2>🌸 Весна</h2>
                  <p>Весной тает снег, распускаются первые цветы, прилетают птицы!</p>
                  <div class="activity">Какие цветы цветут весной?</div>
                  <div class="emoji-practice">🌷🌱🐦☀️💧</div>
                  <div class="tip">💡 Подснежники — первые весенние цветы!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              },
              {
                id: 'prep-world-s1-t1-l3',
                title: 'Лето',
                content: `<div class="kid-lesson">
                  <h2>☀️ Лето</h2>
                  <p>Летом тепло и солнечно! Можно купаться и загорать!</p>
                  <div class="activity">Что мы делаем летом?</div>
                  <div class="emoji-practice">🏖️🏊🍉🌻🦋</div>
                  <div class="tip">💡 Летом самые длинные каникулы!</div>
                </div>`,
                completed: false,
                order: 3,
                estimatedTime: 5
              },
              {
                id: 'prep-world-s1-t1-l4',
                title: 'Осень',
                content: `<div class="kid-lesson">
                  <h2>🍂 Осень</h2>
                  <p>Осенью листья желтеют и падают, часто идёт дождь!</p>
                  <div class="activity">Какого цвета листья осенью?</div>
                  <div class="emoji-practice">🍁🍂🌧️🍄🌰</div>
                  <div class="tip">💡 Осенью собирают урожай!</div>
                </div>`,
                completed: false,
                order: 4,
                estimatedTime: 5
              }
            ]
          }
        ]
      },
      {
        id: 'prep-world-s2',
        title: 'Домашние животные',
        description: 'Наши питомцы и друзья',
        order: 2,
        topics: [
          {
            id: 'prep-world-s2-t1',
            title: 'Кошки и собаки',
            description: 'Самые любимые питомцы',
            theory: `<h3>Домашние животные</h3>
            <p>Домашние животные живут с людьми. Мы заботимся о них, а они дарят нам любовь!</p>
            <h4>🐱 Кошка</h4>
            <p>Мяукает, любит спать и мурлыкать. Ловит мышей!</p>
            <h4>🐕 Собака</h4>
            <p>Лает, охраняет дом. Самый верный друг человека!</p>`,
            examples: ['Как кричит кошка?', 'Кто охраняет дом?', 'Как называется детёныш кошки?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'prep-world-s2-t1-l1',
                title: 'Кошка',
                content: `<div class="kid-lesson">
                  <h2>🐱 Кошка</h2>
                  <p>Кошка — пушистый питомец. Она мяукает: "Мяу-мяу!"</p>
                  <div class="activity">Как называется малыш кошки?</div>
                  <div class="emoji-practice">🐱 → 😺 → 🐈‍⬛</div>
                  <div class="tip">💡 Малыш кошки — котёнок!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'prep-world-s2-t1-l2',
                title: 'Собака',
                content: `<div class="kid-lesson">
                  <h2>🐕 Собака</h2>
                  <p>Собака — верный друг! Она лает: "Гав-гав!"</p>
                  <div class="activity">Как называется малыш собаки?</div>
                  <div class="emoji-practice">🐕 → 🐶 → 🦮</div>
                  <div class="tip">💡 Малыш собаки — щенок!</div>
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
        id: 'prep-world-s3',
        title: 'Я и моя семья',
        description: 'Семья и дом',
        order: 3,
        topics: [
          {
            id: 'prep-world-s3-t1',
            title: 'Моя семья',
            description: 'Кто входит в семью',
            theory: `<h3>Семья</h3>
            <p>Семья — это самые близкие люди!</p>
            <h4>Члены семьи:</h4>
            <ul>
              <li>👨 Мама и папа — родители</li>
              <li>👦👧 Брат и сестра</li>
              <li>👴👵 Бабушка и дедушка</li>
            </ul>`,
            examples: ['Кто твоя мама?', 'Есть ли у тебя брат или сестра?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'prep-world-s3-t1-l1',
                title: 'Члены семьи',
                content: `<div class="kid-lesson">
                  <h2>👨‍👩‍👧‍👦 Моя семья</h2>
                  <p>Семья — это люди, которые тебя любят!</p>
                  <div class="activity">Назови членов своей семьи!</div>
                  <div class="emoji-practice">👨 папа, 👩 мама, 👧 я, 👦 брат, 👴 дедушка, 👵 бабушка</div>
                  <div class="tip">💡 Семья — это любовь и забота!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              }
            ],
            quiz: [
              {
                id: 'prep-world-s3-t1-q1',
                question: 'Кто такие родители?',
                options: ['Брат и сестра', 'Мама и папа', 'Дедушка и бабушка', 'Друзья'],
                correctAnswer: 1,
                explanation: 'Родители — это мама и папа!',
                difficulty: 'easy',
                points: 10
              }
            ]
          }
        ]
      },
      {
        id: 'prep-world-s4',
        title: 'Природа вокруг нас',
        description: 'Растения и животные',
        order: 4,
        topics: [
          {
            id: 'prep-world-s4-t1',
            title: 'Растения',
            description: 'Деревья, цветы, трава',
            theory: `<h3>Растения</h3>
            <p>Растения — это живая природа!</p>
            <h4>Растения:</h4>
            <ul>
              <li>🌳 Деревья — дуб, берёза, ель</li>
              <li>🌸 Цветы — ромашка, роза, tulpan</li>
              <li>🌿 Трава — мягкая, зелёная</li>
            </ul>`,
            examples: ['Какие деревья ты знаешь?', 'Где растут цветы?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'prep-world-s4-t1-l1',
                title: 'Деревья',
                content: `<div class="kid-lesson">
                  <h2>🌳 Деревья</h2>
                  <p>Деревья — большие растения с корнями, стволом и ветками!</p>
                  <div class="activity">Какие деревья ты видел?</div>
                  <div class="emoji-practice">🌲 ель, 🌳 дуб, 🌲 сосна, 🌳 берёза</div>
                  <div class="tip">💡 Деревья дают нам воздух!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              }
            ],
            quiz: [
              {
                id: 'prep-world-s4-t1-q1',
                question: 'Что есть у дерева?',
                options: ['Только листья', 'Корень, ствол, ветки', 'Только корни', 'Ничего'],
                correctAnswer: 1,
                explanation: 'У дерева есть корни, ствол, ветки и листья!',
                difficulty: 'easy',
                points: 10
              }
            ]
          }
        ]
      },
      {
        id: 'prep-world-s5',
        title: 'Правила безопасности',
        description: 'Как быть безопасным',
        order: 5,
        topics: [
          {
            id: 'prep-world-s5-t1',
            title: 'Безопасность дома',
            description: 'Правила дома',
            theory: `<h3>Безопасность дома</h3>
            <p>Дома тоже нужно быть осторожным!</p>
            <h4>Правила:</h4>
            <ul>
              <li>🔌 Не трогай розетки</li>
              <li>🔥 Не играй с огнём</li>
              <li>🔪 Осторожно с острыми предметами</li>
              <li>🚪 Не открывай дверь незнакомцам</li>
            </ul>`,
            examples: ['Что нельзя трогать?', 'Кому можно открыть дверь?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'prep-world-s5-t1-l1',
                title: 'Опасности дома',
                content: `<div class="kid-lesson">
                  <h2>🏠 Безопасность дома</h2>
                  <p>Дома есть опасности! Будь осторожен!</p>
                  <div class="activity">Что нельзя трогать?</div>
                  <div class="emoji-practice">🔌 розетки, 🔥 огонь, 🔪 ножи — опасно!</div>
                  <div class="tip">💡 Спроси взрослых, если не уверен!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              },
              {
                id: 'prep-world-s5-t1-l2',
                title: 'Незнакомцы',
                content: `<div class="kid-lesson">
                  <h2>🚪 Незнакомцы</h2>
                  <p>Незнакомец — это человек, которого ты не знаешь!</p>
                  <div class="activity">Что делать, если звонят в дверь?</div>
                  <div class="emoji-practice">Не открывай! Позови родителей!</div>
                  <div class="tip">💡 Никогда не открывай дверь незнакомцам!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 5
              }
            ],
            quiz: [
              {
                id: 'prep-world-s5-t1-q1',
                question: 'Можно ли трогать розетки?',
                options: ['Да', 'Нет', 'Иногда', 'Только пальцем'],
                correctAnswer: 1,
                explanation: 'Розетки трогать нельзя — это опасно!',
                difficulty: 'easy',
                points: 10
              },
              {
                id: 'prep-world-s5-t1-q2',
                question: 'Что делать, если в дверь звонит незнакомец?',
                options: ['Открыть', 'Позови родителей', 'Поговорить', 'Молчать'],
                correctAnswer: 1,
                explanation: 'Позови родителей! Никогда не открывай дверь незнакомцам!',
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
        id: 'prep-world-q1',
        question: 'Какое время года наступает после зимы?',
        options: ['Лето', 'Осень', 'Весна', 'Зима'],
        correctAnswer: 2,
        explanation: 'После зимы наступает весна! Снег тает, распускаются первые цветы.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'prep-world-q2',
        question: 'Как называется детёныш кошки?',
        options: ['Щенок', 'Котёнок', 'Зайчонок', 'Медвежонок'],
        correctAnswer: 1,
        explanation: 'Детёныш кошки называется котёнком! 🐱',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'prep-world-q3',
        question: 'Кто такие родители?',
        options: ['Брат и сестра', 'Мама и папа', 'Дедушка и бабушка', 'Друзья'],
        correctAnswer: 1,
        explanation: 'Родители — это мама и папа!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'prep-world-q4',
        question: 'Что есть у дерева?',
        options: ['Только листья', 'Корень, ствол, ветки', 'Только корни', 'Ничего'],
        correctAnswer: 1,
        explanation: 'У дерева есть корни, ствол, ветки и листья!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'prep-world-q5',
        question: 'Можно ли трогать розетки?',
        options: ['Да', 'Нет', 'Иногда', 'Только пальцем'],
        correctAnswer: 1,
        explanation: 'Розетки трогать нельзя — это опасно!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'prep-world-q6',
        question: 'Как называется детёныш собаки?',
        options: ['Котёнок', 'Щенок', 'Зайчонок', 'Медвежонок'],
        correctAnswer: 1,
        explanation: 'Детёныш собаки называется щенком! 🐕',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== РАЗВИТИЕ РЕЧИ ====================
  {
    id: 'prep-speech',
    title: 'Развитие речи',
    icon: <Mic className="w-5 h-5" />,
    color: 'text-violet-400',
    gradient: 'from-violet-500 to-purple-500',
    description: 'Звуки, буквы и слова',
    sections: [
      {
        id: 'prep-speech-s1',
        title: 'Звуки и буквы',
        description: 'Знакомство со звуками',
        order: 1,
        topics: [
          {
            id: 'prep-speech-s1-t1',
            title: 'Гласные звуки',
            description: 'А, О, У, И, Ы, Э',
            theory: `<h3>Гласные звуки</h3>
            <p>Гласные звуки — это звуки, которые поются!</p>
            <h4>Гласные:</h4>
            <p>А, О, У, И, Ы, Э</p>
            <h4>Когда произносим:</h4>
            <p>Рот открыт, воздух свободно проходит!</p>`,
            examples: ['Произнеси звук А', 'Какие гласные ты знаешь?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'prep-speech-s1-t1-l1',
                title: 'Звук А',
                content: `<div class="kid-lesson">
                  <h2>🔤 Звук А</h2>
                  <p>Открой рот широко и скажи: "А-а-а!"</p>
                  <div class="activity">Покажи звук А!</div>
                  <div class="emoji-practice">🍎 А-а-абрикос</div>
                  <div class="tip">💡 Звук А — гласный, Его можно петь!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              }
            ],
            quiz: [
              {
                id: 'prep-speech-s1-t1-q1',
                question: 'Какой это звук: А?',
                options: ['Согласный', 'Гласный', 'Тихий', 'Громкий'],
                correctAnswer: 1,
                explanation: 'А — гласный звук, Его можно петь!',
                difficulty: 'easy',
                points: 10
              }
            ]
          },
          {
            id: 'prep-speech-s1-t2',
            title: 'Согласные звуки',
            description: 'Б, В, Г, Д, и другие',
            theory: `<h3>Согласные звуки</h3>
            <p>Согласные звуки — это звуки, при которых губы, зубы или язык мешают воздуху.</p>
            <h4>Согласные:</h4>
            <p>Б, В, Г, Д, Ж, З, К, Л, М, Н, П, Р, С, Т, Ф, Х, Ц, Ч, Ш, Щ</p>`,
            examples: ['Произнеси звук Б', 'Какие согласные ты знаешь?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 20,
            lessons: [
              {
                id: 'prep-speech-s1-t2-l1',
                title: 'Звуки М и П',
                content: `<div class="kid-lesson">
                  <h2>🔤 Звуки М и П</h2>
                  <h3>М:</h3>
                  <p>Закрой губы и скажи: "М-м-м!"</p>
                  <h3>П:</h3>
                  <p>Губы вместе, потом разрывай: "П-п-п!"</p>
                  <div class="tip">💡 М — звонкий, П — глухой!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'prep-speech-s1-t2-q1',
                question: 'М — это какой звук?',
                options: ['Гласный', 'Согласный', 'Громкий', 'Тихий'],
                correctAnswer: 1,
                explanation: 'М — согласный звук!',
                difficulty: 'easy',
                points: 10
              }
            ]
          }
        ]
      },
      {
        id: 'prep-speech-s2',
        title: 'Слова',
        description: 'Составляем слова',
        order: 2,
        topics: [
          {
            id: 'prep-speech-s2-t1',
            title: 'Слова из двух звуков',
            description: 'Простые слова',
            theory: `<h3>Слова из звуков</h3>
            <p>Из звуков можно составить слова!</p>
            <h4>Примеры:</h4>
            <ul>
              <li>АУ — ау!</li>
              <li>УА — уа!</li>
              <li>ИА — иа!</li>
            </ul>`,
            examples: ['Составь слово', 'Какие слова ты знаешь?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'prep-speech-s2-t1-l1',
                title: 'Слова АУ и УА',
                content: `<div class="kid-lesson">
                  <h2>📝 Слова</h2>
                  <h3>АУ</h3>
                  <p>Так говорят, когда что-то теряют: "Ау-у-у!"</p>
                  <h3>УА</h3>
                  <p>Так плачет малыш: "Уа-уа!"</p>
                  <div class="tip">💡 Из звуков получаются слова!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'prep-speech-s2-t1-q1',
                question: 'Что означает "АУ"?',
                options: ['Приветствие', 'Зов о помощи', 'Прощание', 'Вопрос'],
                correctAnswer: 1,
                explanation: 'Ау — зов о помощи, когда потерялся!',
                difficulty: 'easy',
                points: 10
              }
            ]
          }
        ]
      },
      {
        id: 'prep-speech-s3',
        title: 'Слова-действия',
        description: 'Глаголы — что делать?',
        order: 3,
        topics: [
          {
            id: 'prep-speech-s3-t1',
            title: 'Что мы делаем?',
            description: 'Слова-действия',
            theory: `<h3>Слова-действия</h3>
            <p>Слова-действия называют то, что мы делаем!</p>
            <h4>Примеры:</h4>
            <ul>
              <li>Бежать — ногами быстро двигаться</li>
              <li>Прыгать — подпрыгивать вверх</li>
              <li>Рисовать — создавать картинки</li>
              <li>Петь — напевать песенки</li>
            </ul>`,
            examples: ['Что ты делаешь?', 'Покажи действие'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'prep-speech-s3-t1-l1',
                title: 'Слова-действия',
                content: `<div class="kid-lesson">
                  <h2>🏃 Слова-действия</h2>
                  <p>Слова-действия говорят, что мы делаем!</p>
                  <div class="activity">Покажи действие: бегать!</div>
                  <div class="emoji-practice">🏃 бежать, 🦘 прыгать, 🎨 рисовать, 🎤 петь</div>
                  <div class="tip">💡 Слова-действия отвечают на вопрос "Что делать?"!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              }
            ],
            quiz: [
              {
                id: 'prep-speech-s3-t1-q1',
                question: 'Какое слово-действие?',
                options: ['Стол', 'Бежать', 'Красивый', 'Дома'],
                correctAnswer: 1,
                explanation: 'Бежать — это слово-действие! Оно отвечает на вопрос "Что делать?"!',
                difficulty: 'easy',
                points: 10
              }
            ]
          }
        ]
      },
      {
        id: 'prep-speech-s4',
        title: 'Слова-признаки',
        description: 'Прилагательные — какой?',
        order: 4,
        topics: [
          {
            id: 'prep-speech-s4-t1',
            title: 'Какой предмет?',
            description: 'Слова-признаки',
            theory: `<h3>Слова-признаки</h3>
            <p>Слова-признаки описывают предметы!</p>
            <h4>Примеры:</h4>
            <ul>
              <li>Большой — размер</li>
              <li>Красный — цвет</li>
              <li>Мягкий — на ощупь</li>
              <li>Сладкий — вкус</li>
            </ul>`,
            examples: ['Какой это предмет?', 'Опиши предмет'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'prep-speech-s4-t1-l1',
                title: 'Слова-признаки',
                content: `<div class="kid-lesson">
                  <h2>🌈 Слова-признаки</h2>
                  <p>Слова-признаки описывают, какой предмет!</p>
                  <div class="activity">Какое яблоко? (цвет, размер, вкус)</div>
                  <div class="emoji-practice">🍎 красное, круглое, сладкое</div>
                  <div class="tip">💡 Слова-признаки отвечают на вопрос "Какой?"!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 5
              }
            ],
            quiz: [
              {
                id: 'prep-speech-s4-t1-q1',
                question: 'Какое слово-признак?',
                options: ['Бежать', 'Яблоко', 'Красный', 'Под'],
                correctAnswer: 2,
                explanation: 'Красный — это слово-признак! Оно отвечает на вопрос "Какой?"!',
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
        id: 'prep-speech-q1',
        question: 'Какой звук гласный?',
        options: ['Б', 'М', 'А', 'П'],
        correctAnswer: 2,
        explanation: 'А — гласный звук. Его можно петь!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'prep-speech-q2',
        question: 'Какой звук согласный?',
        options: ['О', 'У', 'М', 'И'],
        correctAnswer: 2,
        explanation: 'М — согласный звук. При его произношении губы мешают воздуху!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'prep-speech-q3',
        question: 'Какое слово-действие?',
        options: ['Стол', 'Бежать', 'Красивый', 'Дома'],
        correctAnswer: 1,
        explanation: 'Бежать — это слово-действие! Оно отвечает на вопрос "Что делать?"!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'prep-speech-q4',
        question: 'Какое слово-признак?',
        options: ['Бежать', 'Яблоко', 'Красный', 'Под'],
        correctAnswer: 2,
        explanation: 'Красный — это слово-признак! Оно отвечает на вопрос "Какой?"!',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ФИЗКУЛЬТУРА ====================
  {
    id: 'prep-pe',
    title: 'Физкультура',
    icon: <Dumbbell className="w-5 h-5" />,
    color: 'text-orange-400',
    gradient: 'from-orange-500 to-red-500',
    description: 'Спорт и здоровье',
    sections: [
      {
        id: 'prep-pe-s1',
        title: 'Подвижные игры',
        description: 'Весёлые игры',
        order: 1,
        topics: [
          {
            id: 'prep-pe-s1-t1',
            title: 'Игры с мячом',
            description: 'Учимся играть с мячом',
            theory: `<h3>Игры с мячом</h3>
            <p>Игры с мячом развивают ловкость и координацию!</p>
            <h4>Игры:</h4>
            <ul>
              <li><b>Прятки с мячом</b> — прячь мяч!</li>
              <li><b>Передача мяча</b> — передавай друзьям!</li>
              <li><b>Попади в цель</b> — бросай точно!</li>
            </ul>`,
            examples: ['Передай мяч', 'Попади в корзину'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'prep-pe-s1-t1-l1',
                title: 'Передача мяча',
                content: `<div class="kid-lesson">
                  <h2>🏀 Передача мяча</h2>
                  <p>Учись передавать мяч друзьям!</p>
                  <ol>
                    <li>Встань в круг</li>
                    <li>Возьми мяч</li>
                    <li>Передай соседу</li>
                  </ol>
                  <div class="tip">💡 Бросай аккуратно, чтобы друг поймал!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'prep-pe-s1-t1-q1',
                question: 'Как правильно передавать мяч?',
                options: ['Сильно бросить', 'Аккуратно передать', 'Уронить', 'Спрятать'],
                correctAnswer: 1,
                explanation: 'Мяч нужно передавать аккуратно, чтобы друг поймал!',
                difficulty: 'easy',
                points: 10
              }
            ]
          },
          {
            id: 'prep-pe-s1-t2',
            title: 'Прятки и догонялки',
            description: 'Весёлые игры',
            theory: `<h3>Прятки и догонялки</h3>
            <p>Эти игры учат бегать и прятаться!</p>
            <h4>Правила:</h4>
            <ul>
              <li>В прятках — спрячься так, чтобы не нашли!</li>
              <li>В догонялках — беги быстро, но осторожно!</li>
            </ul>`,
            examples: ['Поиграй в прятки', 'Догони друга'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'prep-pe-s1-t2-l1',
                title: 'Игра в прятки',
                content: `<div class="kid-lesson">
                  <h2>🙈 Прятки</h2>
                  <p>Один считает, остальные прячутся!</p>
                  <div class="activity">Поиграй в прятки с друзьями!</div>
                  <div class="tip">💡 Прячься в безопасных местах!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'prep-pe-s1-t2-q1',
                question: 'Где можно прятаться?',
                options: ['На дороге', 'В безопасном месте', 'На дереве', 'В реке'],
                correctAnswer: 1,
                explanation: 'Прятаться можно только в безопасных местах!',
                difficulty: 'easy',
                points: 10
              }
            ]
          }
        ]
      },
      {
        id: 'prep-pe-s2',
        title: 'Упражнения',
        description: 'Зарядка и разминка',
        order: 2,
        topics: [
          {
            id: 'prep-pe-s2-t1',
            title: 'Утренняя зарядка',
            description: 'Начинаем день с энергии',
            theory: `<h3>Утренняя зарядка</h3>
            <p>Зарядка даёт энергию на весь день!</p>
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
                id: 'prep-pe-s2-t1-l1',
                title: 'Комплекс зарядки',
                content: `<div class="kid-lesson">
                  <h2>🏃 Зарядка</h2>
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
            ],
            quiz: [
              {
                id: 'prep-pe-s2-t1-q1',
                question: 'Зачем нужна зарядка?',
                options: ['Чтобы устать', 'Чтобы проснуться и получить энергию', 'Чтобы не спать', 'Не нужна'],
                correctAnswer: 1,
                explanation: 'Утренняя зарядка помогает проснуться и даёт энергию!',
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
        id: 'prep-pe-q1',
        question: 'Как правильно передавать мяч?',
        options: ['Сильно бросить', 'Аккуратно передать', 'Уронить', 'Спрятать'],
        correctAnswer: 1,
        explanation: 'Мяч нужно передавать аккуратно, чтобы друг поймал!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'prep-pe-q2',
        question: 'Зачем нужна зарядка?',
        options: ['Чтобы устать', 'Чтобы проснуться', 'Чтобы не спать', 'Не нужна'],
        correctAnswer: 1,
        explanation: 'Утренняя зарядка помогает проснуться!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'prep-pe-q3',
        question: 'Где можно прятаться?',
        options: ['На дороге', 'В безопасном месте', 'На дереве', 'В реке'],
        correctAnswer: 1,
        explanation: 'Прятаться можно только в безопасных местах!',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ТВОРЧЕСТВО ====================
  {
    id: 'prep-creativity',
    title: 'Творчество',
    icon: <Sparkles className="w-5 h-5" />,
    color: 'text-fuchsia-400',
    gradient: 'from-fuchsia-500 to-pink-500',
    description: 'Рисование, лепка и творчество',
    sections: [
      {
        id: 'prep-creativity-s1',
        title: 'Рисование',
        description: 'Учимся рисовать',
        order: 1,
        topics: [
          {
            id: 'prep-creativity-s1-t1',
            title: 'Рисуем линии',
            description: 'Прямые и кривые линии',
            theory: `<h3>Линии</h3>
            <p>Линии бывают разные!</p>
            <h4>Виды линий:</h4>
            <ul>
              <li><b>Прямая</b> — как линейка</li>
              <li><b>Кривая</b> — как дорожка</li>
              <li><b>Ломаная</b> — как зигзаг</li>
            </ul>`,
            examples: ['Нарисуй прямую линию', 'Нарисуй кривую линию'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 15,
            lessons: [
              {
                id: 'prep-creativity-s1-t1-l1',
                title: 'Прямая линия',
                content: `<div class="kid-lesson">
                  <h2>✏️ Прямая линия</h2>
                  <p>Веди карандаш прямо, не сгибай!</p>
                  <div class="activity">Нарисуй прямую линию слева направо!</div>
                  <div class="tip">💡 Прямая линия — как линейка!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'prep-creativity-s1-t1-q1',
                question: 'Какая линия прямая?',
                options: ['Зигзаг', 'Как линейка', 'Волна', 'Кружочек'],
                correctAnswer: 1,
                explanation: 'Прямая линия — как линейка, без изгибов!',
                difficulty: 'easy',
                points: 10
              }
            ]
          },
          {
            id: 'prep-creativity-s1-t2',
            title: 'Рисуем фигуры',
            description: 'Круг, квадрат, треугольник',
            theory: `<h3>Фигуры</h3>
            <p>Основные фигуры:</p>
            <ul>
              <li><b>Круг</b> — круглый, без углов</li>
              <li><b>Квадрат</b> — 4 стороны, 4 угла</li>
              <li><b>Треугольник</b> — 3 стороны, 3 угла</li>
            </ul>`,
            examples: ['Нарисуй круг', 'Нарисуй квадрат', 'Нарисуй треугольник'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'prep-creativity-s1-t2-l1',
                title: 'Круг',
                content: `<div class="kid-lesson">
                  <h2>⭕ Круг</h2>
                  <p>Веди карандаш по кругу, соединяй начало с концом!</p>
                  <div class="activity">Нарисуй солнышко с лучиками!</div>
                  <div class="tip">💡 Круг — как солнышко!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 10
              },
              {
                id: 'prep-creativity-s1-t2-l2',
                title: 'Квадрат',
                content: `<div class="kid-lesson">
                  <h2>⬜ Квадрат</h2>
                  <p>4 стороны, 4 угла, все равные!</p>
                  <div class="activity">Нарисуй квадрат и раскрась!</div>
                  <div class="tip">💡 Квадрат — как окошко!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 10
              }
            ],
            quiz: [
              {
                id: 'prep-creativity-s1-t2-q1',
                question: 'Сколько углов у квадрата?',
                options: ['3', '4', '5', 'Нет углов'],
                correctAnswer: 1,
                explanation: 'У квадрата 4 угла!',
                difficulty: 'easy',
                points: 10
              }
            ]
          }
        ]
      },
      {
        id: 'prep-creativity-s2',
        title: 'Лепка',
        description: 'Работа с пластилином',
        order: 2,
        topics: [
          {
            id: 'prep-creativity-s2-t1',
            title: 'Знакомство с пластилином',
            description: 'Учимся лепить',
            theory: `<h3>Пластилин</h3>
            <p>Пластилин — мягкий материал для лепки!</p>
            <h4>Правила:</h4>
            <ul>
              <li>Разогрей пластилин в руках</li>
              <li>Лепи на дощечке</li>
              <li>Не бери в рот!</li>
            </ul>`,
            examples: ['Слепи шарик', 'Слепи змейку', 'Слепи морковку'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'prep-creativity-s2-t1-l1',
                title: 'Лепим шарик',
                content: `<div class="kid-lesson">
                  <h2>🔴 Шарик</h2>
                  <h3>Как сделать:</h3>
                  <ol>
                    <li>Возьми пластилин</li>
                    <li>Разомни в руках</li>
                    <li>Скатай в ладошках</li>
                  </ol>
                  <div class="tip">💡 Круглыми движениями получишь шарик!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ],
            quiz: [
              {
                id: 'prep-creativity-s2-t1-q1',
                question: 'Что сначала делают с пластилином?',
                options: ['Сразу лепят', 'Разогревают в руках', 'Кладут в холодильник', 'Режут ножом'],
                correctAnswer: 1,
                explanation: 'Сначала нужно разогреть пластилин в руках!',
                difficulty: 'easy',
                points: 10
              }
            ]
          },
          {
            id: 'prep-creativity-s2-t2',
            title: 'Лепим животных',
            description: 'Гусеница, змейка',
            theory: `<h3>Лепим животных</h3>
            <h4>Гусеница:</h4>
            <ol>
              <li>Слепи несколько шариков</li>
              <li>Соедини в цепочку</li>
              <li>Добавь глазки</li>
            </ol>
            <h4>Змейка:</h4>
            <ol>
              <li>Скатай длинную колбаску</li>
              <li>Загни хвостик</li>
              <li>Сделай голову и глазки</li>
            </ol>`,
            examples: ['Слепи гусеницу', 'Слепи змейку', 'Слепи улитку'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'prep-creativity-s2-t2-l1',
                title: 'Гусеница',
                content: `<div class="kid-lesson">
                  <h2>🐛 Гусеница</h2>
                  <ol>
                    <li>Слепи 5-6 зелёных шариков</li>
                    <li>Соедини их друг за другом</li>
                    <li>На первом сделай рожки</li>
                    <li>Добавь глазки!</li>
                  </ol>
                  <div class="tip">💡 Гусеница ползёт, листочка к листочку!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ],
            quiz: [
              {
                id: 'prep-creativity-s2-t2-q1',
                question: 'Из чего лепим гусеницу?',
                options: ['Из одного куска', 'Из шариков', 'Из колбаски', 'Из квадрата'],
                correctAnswer: 1,
                explanation: 'Гусеницу лепим из нескольких шариков!',
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
        id: 'prep-creativity-q1',
        question: 'Какую фигуру легче всего нарисовать?',
        options: ['Звезду', 'Круг', 'Дом', 'Дерево'],
        correctAnswer: 1,
        explanation: 'Круг — простая фигура, ведём линию по кругу!',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'prep-creativity-q2',
        question: 'Сколько углов у треугольника?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 1,
        explanation: 'У треугольника 3 угла!',
        difficulty: 'easy',
        points: 10
      }
    ]
  }
]
