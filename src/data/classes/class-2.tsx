// ==================== 2 КЛАСС ====================

import { Calculator, Book, BookOpenText, Languages, Globe, Music, Lightbulb } from 'lucide-react'
import type { Grade } from '../types'

export const class2: Grade = {
  id: 2,
  name: '2 класс',
  shortName: '2 кл.',
  subjects: [
    {
      id: 'class-2-math',
      title: 'Математика',
      icon: <Calculator className="w-5 h-5" />,
      color: 'text-blue-400',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Счёт до 100, сложение и вычитание в столбик',
      topics: [
        {
          id: 'class-2-math-t1',
          title: 'Счёт до 100',
          description: 'Учимся считать в пределах ста',
          theory: `<h3>Числа от 1 до 100</h3>
          <p>Числа от 1 до 100 состоят из десятков и единиц. Десятки: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100.</p>
          <h4>Состав числа:</h4>
          <ul>
            <li>25 = 2 десятка + 5 единиц</li>
            <li>48 = 4 десятка + 8 единиц</li>
            <li>73 = 7 десятков + 3 единицы</li>
          </ul>`,
          examples: ['Посчитай от 10 до 20', 'Назови соседей числа 35', 'Сколько десятков в числе 50?'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 20,
          lessons: [
            {
              id: 'class-2-math-t1-l1',
              title: 'Десятки',
              content: `<div class="kid-lesson">
                <h2>🔢 Десятки</h2>
                <p>10 — десять (один десяток)</p>
                <p>20 — двадцать (два десятка)</p>
                <p>30 — тридцать (три десятка)</p>
                <p>40, 50, 60, 70, 80, 90, 100!</p>
                <div class="tip">💡 100 — это десять десятков!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-2-math-t1-l2',
              title: 'Числа от 21 до 99',
              content: `<div class="kid-lesson">
                <h2>📝 Двузначные числа</h2>
                <p>21 — двадцать один (2 десятка + 1)</p>
                <p>45 — сорок пять (4 десятка + 5)</p>
                <p>78 — семьдесят восемь (7 десятков + 8)</p>
                <div class="tip">💡 Сначала называем десятки, потом единицы!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-2-math-t1-l3',
              title: 'Сравнение чисел',
              content: `<div class="kid-lesson">
                <h2>⚖️ Сравниваем числа</h2>
                <p>25 < 48 (двадцать пять меньше сорока восьми)</p>
                <p>73 > 56 (семьдесят три больше пятидесяти шести)</p>
                <p>90 = 90 (девяносто равно девяносто)</p>
                <div class="tip">💡 Чем больше десятков, тем больше число!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-2-math-t1-q1',
              question: 'Сколько десятков в числе 50?',
              options: ['5', '50', '0', '10'],
              correctAnswer: 0,
              explanation: 'В числе 50 пять десятков! 50 = 5 × 10',
              difficulty: 'easy',
              points: 10
            },
            {
              id: 'class-2-math-t1-q2',
              question: 'Какое число больше: 34 или 43?',
              options: ['34', '43', 'Они равны', 'Не знаю'],
              correctAnswer: 1,
              explanation: '43 больше, чем 34! В числе 43 четыре десятка, а в 34 — три.',
              difficulty: 'easy',
              points: 10
            }
          ]
        },
        {
          id: 'class-2-math-t2',
          title: 'Сложение и вычитание в столбик',
          description: 'Учимся записывать примеры в столбик',
          theory: `<h3>Сложение и вычитание в столбик</h3>
          <p>Запись в столбик помогает решать примеры с двузначными числами.</p>
          <h4>Правила:</h4>
          <ul>
            <li>Единицы пишем под единицами</li>
            <li>Десятки пишем под десятками</li>
            <li>Начинаем складывать с единиц</li>
            <li>Запоминаем лишние десятки</li>
          </ul>`,
          examples: ['25 + 13 = ?', '48 - 24 = ?', '36 + 27 = ?'],
          completed: false,
          difficulty: 'medium',
          estimatedTime: 25,
          lessons: [
            {
              id: 'class-2-math-t2-l1',
              title: 'Сложение в столбик',
              content: `<div class="kid-lesson">
                <h2>➕ Сложение в столбик</h2>
                <p>   25</p>
                <p>+ 13</p>
                <p>----</p>
                <p>   38</p>
                <p>5 + 3 = 8 (единицы)</p>
                <p>2 + 1 = 3 (десятки)</p>
                <div class="tip">💡 Единицы под единицами, десятки под десятками!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-2-math-t2-l2',
              title: 'Вычитание в столбик',
              content: `<div class="kid-lesson">
                <h2>➖ Вычитание в столбик</h2>
                <p>   48</p>
                <p>- 24</p>
                <p>----</p>
                <p>   24</p>
                <p>8 - 4 = 4 (единицы)</p>
                <p>4 - 2 = 2 (десятки)</p>
                <div class="tip">💡 Начинай с единиц!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-2-math-t2-l3',
              title: 'С переходом через десяток',
              content: `<div class="kid-lesson">
                <h2>🔄 Переход через десяток</h2>
                <p>   36</p>
                <p>+ 27</p>
                <p>----</p>
                <p>   63</p>
                <p>6 + 7 = 13 (3 пишем, 1 запоминаем)</p>
                <p>3 + 2 + 1 = 6 (десятки)</p>
                <div class="tip">💡 Не забудь прибавить запомненный десяток!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-2-math-t2-q1',
              question: '25 + 34 = ?',
              options: ['59', '49', '69', '51'],
              correctAnswer: 0,
              explanation: '25 + 34 = 59! 5 + 4 = 9, 2 + 3 = 5',
              difficulty: 'medium',
              points: 15
            },
            {
              id: 'class-2-math-t2-q2',
              question: 'С чего начинать при сложении в столбик?',
              options: ['С десятков', 'С единиц', 'С сотен', 'Не важно'],
              correctAnswer: 1,
              explanation: 'Начинать нужно с единиц! Единицы — правые цифры.',
              difficulty: 'easy',
              points: 10
            }
          ]
        },
        {
          id: 'class-2-math-t3',
          title: 'Единицы измерения',
          description: 'Метры, сантиметры, килограммы',
          theory: `<h3>Единицы измерения</h3>
          <p>Для измерения длины используют метры (м) и сантиметры (см).</p>
          <h4>Соотношения:</h4>
          <ul>
            <li>1 метр = 100 сантиметров</li>
            <li>1 дециметр = 10 сантиметров</li>
            <li>1 метр = 10 дециметров</li>
          </ul>`,
          examples: ['Измерь линейкой', 'Сколько см в 1 метре?', 'Сравни 50 см и 1 м'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 20,
          lessons: [
            {
              id: 'class-2-math-t3-l1',
              title: 'Сантиметры и метры',
              content: `<div class="kid-lesson">
                <h2>📏 Длина</h2>
                <p>Сантиметр (см) — маленькая единица</p>
                <p>Метр (м) — большая единица</p>
                <p>1 метр = 100 сантиметров</p>
                <div class="tip">💡 Измерь ширину парты линейкой!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-2-math-t3-l2',
              title: 'Измерение линейкой',
              content: `<div class="kid-lesson">
                <h2>📐 Линейка</h2>
                <p>Как пользоваться линейкой:</p>
                <p>1. Приложи ноль к началу отрезка</p>
                <p>2. Посмотри, где заканчивается отрезок</p>
                <p>3. Это и есть длина!</p>
                <div class="tip">💡 Ноль — начало измерения!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-2-math-t3-l3',
              title: 'Килограммы',
              content: `<div class="kid-lesson">
                <h2>⚖️ Масса</h2>
                <p>Килограмм (кг) — единица массы</p>
                <p>Грамм (г) — маленькая единица</p>
                <p>1 килограмм = 1000 граммов</p>
                <div class="tip">💡 Массу измеряют весами!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-2-math-t3-q1',
              question: 'Сколько сантиметров в одном метре?',
              options: ['10', '50', '100', '1000'],
              correctAnswer: 2,
              explanation: 'В одном метре 100 сантиметров!',
              difficulty: 'easy',
              points: 10
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'class-2-math-q1',
          question: '47 + 23 = ?',
          options: ['60', '70', '80', '64'],
          correctAnswer: 1,
          explanation: '47 + 23 = 70! 7 + 3 = 10 (0 пишем, 1 запоминаем), 4 + 2 + 1 = 7',
          difficulty: 'medium',
          points: 15
        },
        {
          id: 'class-2-math-q2',
          question: 'Что больше: 1 метр или 50 сантиметров?',
          options: ['1 метр', '50 сантиметров', 'Они равны', 'Нельзя сравнить'],
          correctAnswer: 0,
          explanation: '1 метр = 100 см, а 100 > 50, значит 1 метр больше!',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    {
      id: 'class-2-russian',
      title: 'Русский язык',
      icon: <Book className="w-5 h-5" />,
      color: 'text-red-400',
      gradient: 'from-red-500 to-rose-500',
      description: 'Части речи и правописание',
      topics: [
        {
          id: 'class-2-russian-t1',
          title: 'Части речи',
          description: 'Имя существительное, глагол, прилагательное',
          theory: `<h3>Части речи</h3>
          <p>Слова в русском языке делятся на группы — части речи.</p>
          <h4>Основные части речи:</h4>
          <ul>
            <li>Имя существительное — отвечает на "кто? что?" (дом, кот)</li>
            <li>Глагол — отвечает на "что делать?" (бежать, читать)</li>
            <li>Имя прилагательное — отвечает на "какой?" (большой, красный)</li>
          </ul>`,
          examples: ['Найди существительное', 'Определи часть речи', 'Подбери прилагательное'],
          completed: false,
          difficulty: 'medium',
          estimatedTime: 25,
          lessons: [
            {
              id: 'class-2-russian-t1-l1',
              title: 'Имя существительное',
              content: `<div class="kid-lesson">
                <h2>📝 Имя существительное</h2>
                <p>Существительное — это название предмета!</p>
                <p>Отвечает на вопросы: КТО? ЧТО?</p>
                <p>Примеры: стол, книга, кот, Москва</p>
                <div class="tip">💡 Существительные — это названия всего вокруг!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-2-russian-t1-l2',
              title: 'Глагол',
              content: `<div class="kid-lesson">
                <h2>🏃 Глагол</h2>
                <p>Глагол — это действие!</p>
                <p>Отвечает на вопросы: ЧТО ДЕЛАТЬ? ЧТО СДЕЛАЛ?</p>
                <p>Примеры: бежать, прыгать, читать, писать</p>
                <div class="tip">💡 Глаголы — это слова-действия!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-2-russian-t1-l3',
              title: 'Имя прилагательное',
              content: `<div class="kid-lesson">
                <h2>🎨 Имя прилагательное</h2>
                <p>Прилагательное — это признак предмета!</p>
                <p>Отвечает на вопросы: КАКОЙ? КАКАЯ? КАКОЕ?</p>
                <p>Примеры: большой, красный, весёлый</p>
                <div class="tip">💡 Прилагательные делают речь красивой!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-2-russian-t1-q1',
              question: 'Какая часть речи слово "бежать"?',
              options: ['Существительное', 'Глагол', 'Прилагательное', 'Не знаю'],
              correctAnswer: 1,
              explanation: '"Бежать" — это действие, значит это глагол!',
              difficulty: 'medium',
              points: 15
            },
            {
              id: 'class-2-russian-t1-q2',
              question: 'На какой вопрос отвечает существительное?',
              options: ['Что делать?', 'Какой?', 'Кто? Что?', 'Где?'],
              correctAnswer: 2,
              explanation: 'Существительное отвечает на вопросы КТО? ЧТО?',
              difficulty: 'easy',
              points: 10
            }
          ]
        },
        {
          id: 'class-2-russian-t2',
          title: 'Правописание жи-ши',
          description: 'Учим правила написания',
          theory: `<h3>Правило ЖИ-ШИ</h3>
          <p>В сочетаниях ЖИ и ШИ пишется буква И, даже если слышится Ы!</p>
          <h4>Примеры:</h4>
          <ul>
            <li>ЖИ: жираф, жизнь, машина, лыжи</li>
            <li>ШИ: шина, шишка, мыши, карандаши</li>
          </ul>`,
          examples: ['Напиши слово "машина"', 'Вставь букву: ж...раф', 'Найди ошибку'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'class-2-russian-t2-l1',
              title: 'Сочетание ЖИ',
              content: `<div class="kid-lesson">
                <h2>🔤 ЖИ пиши с буквой И</h2>
                <p>Жираф 🦒 — пишем ЖИ</p>
                <p>Жизнь — пишем ЖИ</p>
                <p>Машина 🚗 — пишем ШИ (но это на следующем уроке)</p>
                <div class="tip">💡 Запомни: ЖИ — только с И!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-2-russian-t2-l2',
              title: 'Сочетание ШИ',
              content: `<div class="kid-lesson">
                <h2>🔤 ШИ пиши с буквой И</h2>
                <p>Шина — пишем ШИ</p>
                <p>Шишка 🌲 — пишем ШИ</p>
                <p>Мыши 🐭 — пишем ШИ</p>
                <div class="tip">💡 Запомни: ШИ — только с И!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-2-russian-t2-l3',
              title: 'Практика',
              content: `<div class="kid-lesson">
                <h2>✏️ Пишем правильно</h2>
                <p>Вставь пропущенную букву:</p>
                <p>Маш...на (и или ы?) — МАШИНА</p>
                <p>Лыж... (и или ы?) — ЛЫЖИ</p>
                <p>Ш...шка (и или ы?) — ШИШКА</p>
                <div class="tip">💡 ЖИ-ШИ — всегда с И!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-2-russian-t2-q1',
              question: 'Как правильно написать слово?',
              options: ['Жыраф', 'Жираф', 'Жыров', 'Жырав'],
              correctAnswer: 1,
              explanation: 'Правильно: ЖИРАФ! ЖИ пишется с И!',
              difficulty: 'easy',
              points: 10
            }
          ]
        },
        {
          id: 'class-2-russian-t3',
          title: 'Составление предложений',
          description: 'Главные и второстепенные члены',
          theory: `<h3>Предложение</h3>
          <p>Предложение — это группа слов, которые выражают законченную мысль.</p>
          <h4>Главные члены:</h4>
          <ul>
            <li>Подлежащее — о ком или о чём говорится (кто? что?)</li>
            <li>Сказуемое — что делает предмет? (глагол)</li>
          </ul>`,
          examples: ['Найди подлежащее', 'Определи сказуемое', 'Составь предложение'],
          completed: false,
          difficulty: 'medium',
          estimatedTime: 20,
          lessons: [
            {
              id: 'class-2-russian-t3-l1',
              title: 'Подлежащее',
              content: `<div class="kid-lesson">
                <h2>👤 Подлежащее</h2>
                <p>Подлежащее — это о ком или о чём говорится в предложении.</p>
                <p>Отвечает на вопрос: КТО? ЧТО?</p>
                <p>Пример: "Маша читает книгу."</p>
                <p>Кто читает? — Маша. Это подлежащее!</p>
                <div class="tip">💡 Подлежащее подчёркивается одной чертой!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-2-russian-t3-l2',
              title: 'Сказуемое',
              content: `<div class="kid-lesson">
                <h2>✍️ Сказуемое</h2>
                <p>Сказуемое — это то, что делает подлежащее.</p>
                <p>Отвечает на вопрос: ЧТО ДЕЛАЕТ?</p>
                <p>Пример: "Маша читает книгу."</p>
                <p>Что делает Маша? — Читает. Это сказуемое!</p>
                <div class="tip">💡 Сказуемое подчёркивается двумя чертами!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-2-russian-t3-l3',
              title: 'Грамматическая основа',
              content: `<div class="kid-lesson">
                <h2>📝 Грамматическая основа</h2>
                <p>Подлежащее + Сказуемое = Грамматическая основа</p>
                <p>"Кот спит на диване."</p>
                <p>Кто? — Кот (подлежащее)</p>
                <p>Что делает? — Спит (сказуемое)</p>
                <p>Основа: кот спит</p>
                <div class="tip">💡 Без основы нет предложения!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-2-russian-t3-q1',
              question: 'В предложении "Птица летит" найди подлежащее',
              options: ['Птица', 'Летит', 'Птица летит', 'Нет подлежащего'],
              correctAnswer: 0,
              explanation: 'Подлежащее — ПТИЦА! Отвечает на вопрос КТО?',
              difficulty: 'medium',
              points: 15
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'class-2-russian-q1',
          question: 'Как пишется сочетание ЖИ?',
          options: ['С буквой Ы', 'С буквой И', 'С буквой Е', 'Можно по-разному'],
          correctAnswer: 1,
          explanation: 'ЖИ пишется только с буквой И!',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'class-2-russian-q2',
          question: 'Какая часть речи обозначает действие?',
          options: ['Существительное', 'Прилагательное', 'Глагол', 'Предлог'],
          correctAnswer: 2,
          explanation: 'Глагол — это часть речи, которая обозначает действие!',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    {
      id: 'class-2-literature',
      title: 'Литературное чтение',
      icon: <BookOpenText className="w-5 h-5" />,
      color: 'text-purple-400',
      gradient: 'from-purple-500 to-violet-500',
      description: 'Русские народные сказки и стихи',
      topics: [
        {
          id: 'class-2-literature-t1',
          title: 'Русские народные сказки',
          description: 'Читаем и пересказываем сказки',
          theory: `<h3>Русские народные сказки</h3>
          <p>Сказки — это произведения о волшебных событиях. Русские народные сказки созданы народом и передаются из поколения в поколение.</p>
          <h4>Особенности сказок:</h4>
          <ul>
            <li>Добро побеждает зло</li>
            <li>Есть волшебные предметы</li>
            <li>Начинаются с "Жили-были..."</li>
            <li>Заканчиваются хорошо</li>
          </ul>`,
          examples: ['Перескажи "Колобок"', 'Кто победил в сказке?', 'Чему учит сказка?'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 25,
          lessons: [
            {
              id: 'class-2-literature-t1-l1',
              title: 'Сказка "Колобок"',
              content: `<div class="kid-lesson">
                <h2>🥐 Колобок</h2>
                <p>Жили-были дед да баба...</p>
                <p>Испекла баба колобок и положила на окно студить.</p>
                <p>А колобок спрыгнул и покатился...</p>
                <p>Встретил зайца, волка, медведя, лису...</p>
                <div class="tip">💡 Лиса обманула колобка — не будь доверчивым!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-2-literature-t1-l2',
              title: 'Сказка "Репка"',
              content: `<div class="kid-lesson">
                <h2>🥕 Репка</h2>
                <p>Посадил дед репку...</p>
                <p>Выросла репка большая-пребольшая!</p>
                <p>Стал дед тянуть — не может.</p>
                <p>Позвал бабку, внучку, жучку, кошку, мышку...</p>
                <div class="tip">💡 Вместе — сила! Дружба помогает!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-2-literature-t1-l3',
              title: 'Сказка "Теремок"',
              content: `<div class="kid-lesson">
                <h2>🏠 Теремок</h2>
                <p>Стоит в поле теремок...</p>
                <p>Прибегают звери: мышка, лягушка, зайчик, лисичка, волк...</p>
                <p>Все живут дружно!</p>
                <p>Но пришёл медведь и сломал теремок...</p>
                <div class="tip">💡 Дружба важна, но надо быть осторожным!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-2-literature-t1-q1',
              question: 'Кто съел колобка?',
              options: ['Заяц', 'Волк', 'Медведь', 'Лиса'],
              correctAnswer: 3,
              explanation: 'Лиса съела колобка! Она его обманула.',
              difficulty: 'easy',
              points: 10
            },
            {
              id: 'class-2-literature-t1-q2',
              question: 'Чему учит сказка "Репка"?',
              options: ['Надо работать одному', 'Вместе можно сделать больше', 'Репка невкусная', 'Не надо помогать'],
              correctAnswer: 1,
              explanation: 'Сказка учит, что вместе можно справиться с любой задачей!',
              difficulty: 'easy',
              points: 10
            }
          ]
        },
        {
          id: 'class-2-literature-t2',
          title: 'Стихи Барто и Маршака',
          description: 'Учим стихи наизусть',
          theory: `<h3>Стихи для детей</h3>
          <p>Агния Барто и Самуил Маршак — известные детские поэты.</p>
          <h4>Их произведения:</h4>
          <ul>
            <li>Барто: "Игрушки" (Мишка, Зайка, Бычок)</li>
            <li>Маршак: "Детки в клетке", "Где обедал воробей?"</li>
          </ul>`,
          examples: ['Расскажи "Мишку"', 'Выучи "Зайку"', 'Прочитай выразительно'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 20,
          lessons: [
            {
              id: 'class-2-literature-t2-l1',
              title: 'Агния Барто "Мишка"',
              content: `<div class="kid-lesson">
                <h2>🐻 Мишка</h2>
                <p>Уронили мишку на пол,</p>
                <p>Оторвали мишке лапу.</p>
                <p>Всё равно его не брошу —</p>
                <p>Потому что он хороший.</p>
                <div class="tip">💡 Выучи стихотворение наизусть!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-2-literature-t2-l2',
              title: 'Агния Барто "Зайка"',
              content: `<div class="kid-lesson">
                <h2>🐰 Зайка</h2>
                <p>Зайку бросила хозяйка —</p>
                <p>Под дождём остался зайка.</p>
                <p>Со скамейки слезть не мог,</p>
                <p>Весь до ниточки промок.</p>
                <div class="tip">💡 Надо заботиться о игрушках!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-2-literature-t2-l3',
              title: 'Маршак "Детки в клетке"',
              content: `<div class="kid-lesson">
                <h2>🦁 Детки в клетке</h2>
                <p>В нашем зоопарке</p>
                <p>Детская площадка:</p>
                <p>Здесь медвежата,</p>
                <p>Здесь и котята...</p>
                <div class="tip">💡 Маршак пишет весело и интересно!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-2-literature-t2-q1',
              question: 'Кто написал "Мишку"?',
              options: ['Маршак', 'Барто', 'Пушкин', 'Чуковский'],
              correctAnswer: 1,
              explanation: 'Агния Барто написала стихотворение "Мишка"!',
              difficulty: 'easy',
              points: 10
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'class-2-literature-q1',
          question: 'Как начинаются русские народные сказки?',
          options: ['Однажды...', 'Жили-были...', 'В некотором царстве...', 'Давным-давно...'],
          correctAnswer: 1,
          explanation: 'Русские народные сказки часто начинаются со слов "Жили-были..."',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    {
      id: 'class-2-english',
      title: 'Иностранный язык',
      icon: <Languages className="w-5 h-5" />,
      color: 'text-pink-400',
      gradient: 'from-pink-500 to-rose-500',
      description: 'Алфавит и основные фразы',
      topics: [
        {
          id: 'class-2-english-t1',
          title: 'Английский алфавит',
          description: 'Знакомство с буквами',
          theory: `<h3>English Alphabet</h3>
          <p>В английском алфавите 26 букв.</p>
          <h4>Первые буквы:</h4>
          <ul>
            <li>A a — [эй] — apple (яблоко)</li>
            <li>B b — [би] — book (книга)</li>
            <li>C c — [си] — cat (кот)</li>
            <li>D d — [ди] — dog (собака)</li>
          </ul>`,
          examples: ['Как читается буква A?', 'Скажи "яблоко" по-английски', 'Напиши букву B'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 20,
          lessons: [
            {
              id: 'class-2-english-t1-l1',
              title: 'Буквы A, B, C, D',
              content: `<div class="kid-lesson">
                <h2>🔤 Буквы A-D</h2>
                <p>Aa — Apple 🍎 (яблоко)</p>
                <p>Bb — Book 📖 (книга)</p>
                <p>Cc — Cat 🐱 (кот)</p>
                <p>Dd — Dog 🐕 (собака)</p>
                <div class="tip">💡 Запомни: Apple — яблоко!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-2-english-t1-l2',
              title: 'Буквы E, F, G, H',
              content: `<div class="kid-lesson">
                <h2>🔤 Буквы E-H</h2>
                <p>Ee — Egg 🥚 (яйцо)</p>
                <p>Ff — Fish 🐟 (рыба)</p>
                <p>Gg — Green 💚 (зелёный)</p>
                <p>Hh — House 🏠 (дом)</p>
                <div class="tip">💡 House — это дом!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-2-english-t1-l3',
              title: 'Цвета',
              content: `<div class="kid-lesson">
                <h2>🎨 Colours</h2>
                <p>Red — красный 🔴</p>
                <p>Blue — синий 🔵</p>
                <p>Green — зелёный 🟢</p>
                <p>Yellow — жёлтый 🟡</p>
                <div class="tip">💡 Red — красный, как радуга!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-2-english-t1-q1',
              question: 'Как будет "яблоко" по-английски?',
              options: ['Book', 'Apple', 'Cat', 'Dog'],
              correctAnswer: 1,
              explanation: 'Apple — это яблоко!',
              difficulty: 'easy',
              points: 10
            },
            {
              id: 'class-2-english-t1-q2',
              question: 'Какой цвет "Red"?',
              options: ['Синий', 'Зелёный', 'Красный', 'Жёлтый'],
              correctAnswer: 2,
              explanation: 'Red — это красный цвет!',
              difficulty: 'easy',
              points: 10
            }
          ]
        },
        {
          id: 'class-2-english-t2',
          title: 'Основные фразы',
          description: 'Приветствие и знакомство',
          theory: `<h3>Basic Phrases</h3>
          <p>Самые важные фразы для общения:</p>
          <h4>Приветствие:</h4>
          <ul>
            <li>Hello! — Привет!</li>
            <li>Good morning! — Доброе утро!</li>
            <li>How are you? — Как дела?</li>
          </ul>`,
          examples: ['Поздоровайся по-английски', 'Скажи "Как дела?"', 'Познакомься'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'class-2-english-t2-l1',
              title: 'Приветствие',
              content: `<div class="kid-lesson">
                <h2>👋 Приветствие</h2>
                <p>Hello! — Привет!</p>
                <p>Hi! — Привет! (друзьям)</p>
                <p>Good morning! — Доброе утро!</p>
                <p>Goodbye! — До свидания!</p>
                <div class="tip">💡 Hello можно сказать всем!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-2-english-t2-l2',
              title: 'Знакомство',
              content: `<div class="kid-lesson">
                <h2>🤝 Знакомство</h2>
                <p>What is your name? — Как тебя зовут?</p>
                <p>My name is... — Меня зовут...</p>
                <p>Nice to meet you! — Приятно познакомиться!</p>
                <div class="tip">💡 My name is... — добавь своё имя!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-2-english-t2-l3',
              title: 'Цифры',
              content: `<div class="kid-lesson">
                <h2>🔢 Numbers</h2>
                <p>One — один (1)</p>
                <p>Two — два (2)</p>
                <p>Three — три (3)</p>
                <p>Four — четыре (4)</p>
                <p>Five — пять (5)</p>
                <div class="tip">💡 One, two, three — легко запомнить!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-2-english-t2-q1',
              question: 'Как сказать "Привет" по-английски?',
              options: ['Goodbye', 'Hello', 'Thanks', 'Sorry'],
              correctAnswer: 1,
              explanation: 'Hello — это привет!',
              difficulty: 'easy',
              points: 10
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'class-2-english-q1',
          question: 'Сколько букв в английском алфавите?',
          options: ['25', '26', '33', '30'],
          correctAnswer: 1,
          explanation: 'В английском алфавите 26 букв!',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    {
      id: 'class-2-world',
      title: 'Окружающий мир',
      icon: <Globe className="w-5 h-5" />,
      color: 'text-green-400',
      gradient: 'from-green-500 to-emerald-500',
      description: 'Природные явления и животный мир',
      topics: [
        {
          id: 'class-2-world-t1',
          title: 'Природные явления',
          description: 'Что происходит в природе',
          theory: `<h3>Природные явления</h3>
          <p>Природа постоянно меняется: идёт дождь, дует ветер, светит солнце.</p>
          <h4>Явления природы:</h4>
          <ul>
            <li>Дождь — вода с неба</li>
            <li>Снег — белый пушистый</li>
            <li>Ветер — движение воздуха</li>
            <li>Гроза — молния и гром</li>
          </ul>`,
          examples: ['Почему идёт дождь?', 'Что такое ветер?', 'Когда бывает гроза?'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 20,
          lessons: [
            {
              id: 'class-2-world-t1-l1',
              title: 'Дождь и снег',
              content: `<div class="kid-lesson">
                <h2>🌧️ Дождь</h2>
                <p>Дождь — это вода, которая падает с неба.</p>
                <p>Вода испаряется, поднимается вверх и превращается в облака.</p>
                <p>Когда облака тяжёлые — идёт дождь!</p>
                <h2>❄️ Снег</h2>
                <p>Снег — это замёрзшая вода. Бывает зимой!</p>
                <div class="tip">💡 Дождь летом, снег зимой!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-2-world-t1-l2',
              title: 'Ветер и гроза',
              content: `<div class="kid-lesson">
                <h2>💨 Ветер</h2>
                <p>Ветер — это движение воздуха.</p>
                <p>Тёплый воздух легче и поднимается вверх.</p>
                <p>Холодный воздух занимает его место — так дует ветер!</p>
                <h2>⛈️ Гроза</h2>
                <p>Гроза — это молния и гром. Сначала видишь вспышку, потом слышишь гром!</p>
                <div class="tip">💡 Во время грозы нельзя прятаться под деревом!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-2-world-t1-l3',
              title: 'Круговорот воды',
              content: `<div class="kid-lesson">
                <h2>🔄 Круговорот воды</h2>
                <p>1. Солнце нагревает воду</p>
                <p>2. Вода испаряется и становится паром</p>
                <p>3. Пар превращается в облака</p>
                <p>4. Из облаков идёт дождь или снег</p>
                <p>5. Вода снова в реках и морях!</p>
                <div class="tip">💡 Вода в природе никогда не исчезает!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-2-world-t1-q1',
              question: 'Что такое ветер?',
              options: ['Движение воды', 'Движение воздуха', 'Движение земли', 'Движение облаков'],
              correctAnswer: 1,
              explanation: 'Ветер — это движение воздуха!',
              difficulty: 'easy',
              points: 10
            }
          ]
        },
        {
          id: 'class-2-world-t2',
          title: 'Животный мир',
          description: 'Дикие и домашние животные',
          theory: `<h3>Животные</h3>
          <p>Животные делятся на диких и домашних.</p>
          <h4>Дикие животные:</h4>
          <ul>
            <li>Живут в лесу, поле, горах</li>
            <li>Сами добывают еду</li>
            <li>Сами строят жилища</li>
          </ul>`,
          examples: ['Назови диких животных', 'Кто живёт в лесу?', 'Сравни волка и собаку'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 20,
          lessons: [
            {
              id: 'class-2-world-t2-l1',
              title: 'Дикие животные',
              content: `<div class="kid-lesson">
                <h2>🌲 Дикие животные</h2>
                <p>Медведь 🐻 — живёт в берлоге</p>
                <p>Волк 🐺 — живёт в логове</p>
                <p>Лиса 🦊 — живёт в норе</p>
                <p>Заяц 🐰 — прячется в кустах</p>
                <div class="tip">💡 Дикие животные живут в природе!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-2-world-t2-l2',
              title: 'Домашние животные',
              content: `<div class="kid-lesson">
                <h2>🏡 Домашние животные</h2>
                <p>Собака 🐕 — сторожит дом</p>
                <p>Кошка 🐱 — ловит мышей</p>
                <p>Корова 🐄 — даёт молоко</p>
                <p>Лошадь 🐴 — возит грузы</p>
                <div class="tip">💡 Человек заботится о домашних животных!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-2-world-t2-l3',
              title: 'Сравнение',
              content: `<div class="kid-lesson">
                <h2>⚖️ Дикие vs Домашние</h2>
                <p>Дикие: сами добывают еду, сами строят дом</p>
                <p>Домашние: человек кормит, человек строит дом</p>
                <p>Собака — домашняя, волк — дикий!</p>
                <div class="tip">💡 Предком собаки был волк!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-2-world-t2-q1',
              question: 'Какое животное дикое?',
              options: ['Собака', 'Корова', 'Медведь', 'Кошка'],
              correctAnswer: 2,
              explanation: 'Медведь — дикое животное! Живёт в лесу.',
              difficulty: 'easy',
              points: 10
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'class-2-world-q1',
          question: 'Куда девается вода после дождя?',
          options: ['Исчезает', 'Испаряется и возвращается', 'Уходит в космос', 'Превращается в камни'],
          correctAnswer: 1,
          explanation: 'Вода испаряется и возвращается в природу! Это круговорот воды.',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    {
      id: 'class-2-music',
      title: 'Музыка',
      icon: <Music className="w-5 h-5" />,
      color: 'text-cyan-400',
      gradient: 'from-cyan-500 to-teal-500',
      description: 'Нотная грамота и детские песни',
      topics: [
        {
          id: 'class-2-music-t1',
          title: 'Нотная грамота',
          description: 'Знакомство с нотами',
          theory: `<h3>Ноты</h3>
          <p>Музыка записывается с помощью нот. Основные 7 нот: До, Ре, Ми, Фа, Соль, Ля, Си.</p>
          <h4>Нотный стан:</h4>
          <ul>
            <li>5 линеек, на которых записывают ноты</li>
            <li>Скрипичный ключ — показывает, где находится нота Соль</li>
          </ul>`,
          examples: ['Назови 7 нот', 'Спой гамму', 'Покажи ноту ДО'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 20,
          lessons: [
            {
              id: 'class-2-music-t1-l1',
              title: 'Семь нот',
              content: `<div class="kid-lesson">
                <h2>🎵 Семь нот</h2>
                <p>ДО — первая нота</p>
                <p>РЕ — вторая нота</p>
                <p>МИ — третья нота</p>
                <p>ФА — четвёртая нота</p>
                <p>СОЛЬ — пятая нота</p>
                <p>ЛЯ — шестая нота</p>
                <p>СИ — седьмая нота</p>
                <div class="tip">💡 Запомни: До-Ре-Ми-Фа-Соль-Ля-Си!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-2-music-t1-l2',
              title: 'Нотный стан',
              content: `<div class="kid-lesson">
                <h2>🎼 Нотный стан</h2>
                <p>Нотный стан — это 5 линеек.</p>
                <p>Ноты пишутся на линейках и между ними.</p>
                <p>Скрипичный ключ 🎼 показывает начало.</p>
                <div class="tip">💡 Чем выше нота на стане, тем выше звук!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-2-music-t1-l3',
              title: 'Песня "В лесу родилась ёлочка"',
              content: `<div class="kid-lesson">
                <h2>🎄 В лесу родилась ёлочка</h2>
                <p>В лесу родилась ёлочка,</p>
                <p>В лесу она росла.</p>
                <p>Зимой и летом стройная,</p>
                <p>Зелёная была!</p>
                <div class="tip">💡 Спой эту песню!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-2-music-t1-q1',
              question: 'Сколько основных нот?',
              options: ['5', '6', '7', '8'],
              correctAnswer: 2,
              explanation: '7 основных нот: До, Ре, Ми, Фа, Соль, Ля, Си!',
              difficulty: 'easy',
              points: 10
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'class-2-music-q1',
          question: 'Какая нота первая?',
          options: ['Ре', 'Ми', 'До', 'Си'],
          correctAnswer: 2,
          explanation: 'ДО — первая нота в гамме!',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    {
      id: 'class-2-project',
      title: 'Проектная деятельность',
      icon: <Lightbulb className="w-5 h-5" />,
      color: 'text-violet-400',
      gradient: 'from-violet-500 to-purple-500',
      description: 'Исследования и презентации',
      topics: [
        {
          id: 'class-2-project-t1',
          title: 'Создание коллажей',
          description: 'Тематические проекты',
          theory: `<h3>Коллаж</h3>
          <p>Коллаж — это картина из разных материалов: фотографий, картинок, текста.</p>
          <h4>Этапы работы:</h4>
          <ul>
            <li>Выбрать тему</li>
            <li>Найти материалы</li>
            <li>Разложить и приклеить</li>
            <li>Оформить и представить</li>
          </ul>`,
          examples: ['Сделай коллаж "Моя семья"', 'Коллаж "Времена года"', 'Презентация проекта'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 25,
          lessons: [
            {
              id: 'class-2-project-t1-l1',
              title: 'Выбор темы',
              content: `<div class="kid-lesson">
                <h2>📋 Выбираем тему</h2>
                <p>Тема должна быть интересной!</p>
                <p>Примеры тем:</p>
                <p>- Моя семья</p>
                <p>- Мой город</p>
                <p>- Любимые животные</p>
                <div class="tip">💡 Выбери тему, которая тебе нравится!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'class-2-project-t1-l2',
              title: 'Сбор материалов',
              content: `<div class="kid-lesson">
                <h2>🔍 Собираем материалы</h2>
                <p>Для коллажа нужны:</p>
                <p>- Фотографии</p>
                <p>- Картинки из журналов</p>
                <p>- Цветная бумага</p>
                <p>- Клей и ножницы</p>
                <div class="tip">💡 Можно нарисовать самому!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            },
            {
              id: 'class-2-project-t1-l3',
              title: 'Презентация',
              content: `<div class="kid-lesson">
                <h2>🎤 Презентуем проект</h2>
                <p>1. Расскажи о теме проекта</p>
                <p>2. Покажи, что получилось</p>
                <p>3. Ответь на вопросы</p>
                <div class="tip">💡 Говори громко и уверенно!</div>
              </div>`,
              completed: false,
              order: 3,
              estimatedTime: 5
            }
          ],
          quiz: [
            {
              id: 'class-2-project-t1-q1',
              question: 'Что такое коллаж?',
              options: ['Рисунок красками', 'Картина из разных материалов', 'Лепка из глины', 'Песня'],
              correctAnswer: 1,
              explanation: 'Коллаж — это картина из разных материалов: фотографий, картинок, текста!',
              difficulty: 'easy',
              points: 10
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'class-2-project-q1',
          question: 'С чего начать создание проекта?',
          options: ['С презентации', 'С выбора темы', 'С склеивания', 'С рисования'],
          correctAnswer: 1,
          explanation: 'Начинать нужно с выбора темы!',
          difficulty: 'easy',
          points: 10
        }
      ]
    }
  ]
}
