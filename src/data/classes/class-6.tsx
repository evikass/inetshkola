// ==================== 6 КЛАСС ====================

import { Calculator, Book, BookOpen, Globe, Leaf, Map, Languages, Palette, Shield, Monitor } from 'lucide-react'
import type { Grade } from '../types'

export const grade6: Grade = {
  id: 6,
  name: '6 класс',
  shortName: '6 кл.',
  subjects: [
    {
      id: 'math6',
      title: 'Математика',
      icon: <Calculator className="w-5 h-5" />,
      color: 'text-blue-400',
      gradient: 'from-blue-500 to-indigo-500',
      description: 'Отрицательные числа, пропорции',
      sections: [
        {
          id: 'math6-sec1',
          title: 'Положительные и отрицательные числа',
          description: 'Координаты на прямой, модуль',
          topics: [
            {
              id: 'math6-sec1-top1',
              title: 'Координатная прямая',
              description: 'Положительные и отрицательные числа',
              lessons: [
                {
                  id: 'math6-sec1-top1-les1',
                  title: 'Что такое координатная прямая',
                  description: 'Определение и построение',
                  theory: `<h3>Координатная прямая</h3>
                  <h4>Элементы:</h4>
                  <ul>
                    <li><strong>Точка O (ноль)</strong> — начало отсчёта</li>
                    <li><strong>Справа от нуля</strong> — положительные числа</li>
                    <li><strong>Слева от нуля</strong> — отрицательные числа</li>
                  </ul>
                  <h4>Пример:</h4>
                  <p>←... -3  -2  -1  0  1  2  3 ...→</p>`,
                  examples: ['Отметь на прямой -3', 'Какое число правее: -2 или 1?', 'Построй координатную прямую'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                },
                {
                  id: 'math6-sec1-top1-les2',
                  title: 'Модуль числа',
                  description: 'Определение модуля',
                  theory: `<h3>Модуль числа</h3>
                  <p>Модуль — это расстояние от начала отсчёта до точки на координатной прямой.</p>
                  <h4>Свойства:</h4>
                  <ul>
                    <li>|5| = 5</li>
                    <li>|-5| = 5</li>
                    <li>|0| = 0</li>
                  </ul>
                  <p>Модуль всегда положителен или равен нулю!</p>`,
                  examples: ['Найди модуль: |-12|', 'Найди |0|', 'Сравни: |-3| и |3|'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            },
            {
              id: 'math6-sec1-top2',
              title: 'Сравнение чисел',
              description: 'Правила сравнения',
              lessons: [
                {
                  id: 'math6-sec1-top2-les1',
                  title: 'Сравнение отрицательных чисел',
                  description: 'Правила сравнения',
                  theory: `<h3>Сравнение чисел</h3>
                  <h4>Правила:</h4>
                  <ul>
                    <li>Любое положительное больше любого отрицательного</li>
                    <li>Нуль больше любого отрицательного</li>
                    <li>Из двух отрицательных больше то, у которого модуль меньше</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <p>-3 > -7, так как |-3| < |-7|</p>
                  <p>5 > -10</p>
                  <p>0 > -5</p>`,
                  examples: ['Сравни: -5 и -2', 'Сравни: -3 и 3', 'Какое число больше: -1 или -100?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            }
          ]
        },
        {
          id: 'math6-sec2',
          title: 'Пропорции',
          description: 'Отношения и пропорции',
          topics: [
            {
              id: 'math6-sec2-top1',
              title: 'Отношения',
              description: 'Что такое отношение',
              lessons: [
                {
                  id: 'math6-sec2-top1-les1',
                  title: 'Понятие отношения',
                  description: 'Частное двух чисел',
                  theory: `<h3>Отношение</h3>
                  <p>Отношение — это частное двух чисел.</p>
                  <h4>Пример:</h4>
                  <p>Отношение 6 к 2: 6 : 2 = 3 или 6/2 = 3</p>
                  <h4>Свойство:</h4>
                  <p>Отношение не изменится, если оба числа умножить или разделить на одно и то же число.</p>`,
                  examples: ['Найди отношение 10 к 2', 'Найди 12 : 4', 'Что показывает отношение?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            },
            {
              id: 'math6-sec2-top2',
              title: 'Пропорция',
              description: 'Основное свойство пропорции',
              lessons: [
                {
                  id: 'math6-sec2-top2-les1',
                  title: 'Что такое пропорция',
                  description: 'Равенство отношений',
                  theory: `<h3>Пропорция</h3>
                  <p>Пропорция — равенство двух отношений.</p>
                  <p>a/b = c/d или a : b = c : d</p>
                  <h4>Основное свойство:</h4>
                  <p>Произведение крайних членов равно произведению средних.</p>
                  <p>a × d = b × c</p>
                  <h4>Пример:</h4>
                  <p>3/4 = 6/8 — проверка: 3 × 8 = 4 × 6 = 24 ✓</p>`,
                  examples: ['Проверь пропорцию: 2/3 = 8/12', 'Найди x: x/7 = 4/2', 'Составь пропорцию'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                },
                {
                  id: 'math6-sec2-top2-les2',
                  title: 'Решение задач на пропорции',
                  description: 'Прямая пропорциональность',
                  theory: `<h3>Прямая пропорциональность</h3>
                  <p>При увеличении одной величины другая увеличивается во столько же раз.</p>
                  <h4>Пример задачи:</h4>
                  <p>3 кг яблок стоят 150 руб. Сколько стоят 5 кг?</p>
                  <p>3 кг — 150 руб</p>
                  <p>5 кг — x руб</p>
                  <p>3/5 = 150/x</p>
                  <p>x = 5 × 150 / 3 = 250 руб</p>`,
                  examples: ['Реши задачу на пропорцию', 'Найди неизвестный член', 'Составь пропорцию к задаче'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 30
                }
              ]
            }
          ]
        },
        {
          id: 'math6-sec3',
          title: 'Координаты',
          description: 'Координатная плоскость',
          topics: [
            {
              id: 'math6-sec3-top1',
              title: 'Координатная плоскость',
              description: 'Построение точек',
              lessons: [
                {
                  id: 'math6-sec3-top1-les1',
                  title: 'Декартовы координаты',
                  description: 'Оси координат',
                  theory: `<h3>Координатная плоскость</h3>
                  <h4>Элементы:</h4>
                  <ul>
                    <li><strong>Ось X</strong> — горизонтальная ось (абсцисс)</li>
                    <li><strong>Ось Y</strong> — вертикальная ось (ординат)</li>
                    <li><strong>Начало координат</strong> — точка O(0, 0)</li>
                  </ul>
                  <h4>Координаты точки:</h4>
                  <p>A(x, y) — сначала x, потом y</p>
                  <p>Пример: A(3, 2) — 3 шага вправо, 2 вверх</p>`,
                  examples: ['Построй точку A(2, 3)', 'Определи координаты точки', 'Где находится точка (-2, 3)?'],
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
          id: 'math6-q1',
          question: 'Чему равен модуль числа -7?',
          options: ['-7', '7', '0', '14'],
          correctAnswer: 1,
          explanation: 'Модуль числа — это его расстояние от нуля, всегда положительное. |-7| = 7.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'math6-q2',
          question: 'Вычисли: -5 + 8',
          options: ['-13', '13', '3', '-3'],
          correctAnswer: 2,
          explanation: '-5 + 8 = 3. Из большего модуля вычитаем меньший, ставим знак числа с большим модулем (+8).',
          difficulty: 'medium',
          points: 15
        },
        {
          id: 'math6-q3',
          question: 'Найди неизвестный член пропорции: x/3 = 8/6',
          options: ['4', '3', '2', '5'],
          correctAnswer: 0,
          explanation: 'x = (3 × 8)/6 = 24/6 = 4. Используем основное свойство пропорции.',
          difficulty: 'medium',
          points: 15
        },
        {
          id: 'math6-q4',
          question: 'Какое число больше: -3 или -7?',
          options: ['-3', '-7', 'Они равны', 'Нельзя сравнить'],
          correctAnswer: 0,
          explanation: '-3 > -7, так как |-3| < |-7|. Из двух отрицательных чисел больше то, у которого модуль меньше.',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    {
      id: 'russian6',
      title: 'Русский язык',
      icon: <Book className="w-5 h-5" />,
      color: 'text-red-400',
      gradient: 'from-red-500 to-orange-500',
      description: 'Морфемика, орфография',
      sections: [
        {
          id: 'russian6-sec1',
          title: 'Морфемика',
          description: 'Состав слова',
          topics: [
            {
              id: 'russian6-sec1-top1',
              title: 'Состав слова',
              description: 'Корень, приставка, суффикс, окончание',
              lessons: [
                {
                  id: 'russian6-sec1-top1-les1',
                  title: 'Морфемы слова',
                  description: 'Части слова',
                  theory: `<h3>Морфемы — части слова</h3>
                  <h4>Основа слова:</h4>
                  <p>Часть слова без окончания, выражает лексическое значение.</p>
                  <h4>Морфемы:</h4>
                  <ul>
                    <li><strong>Корень</strong> — главная часть, общая для родственных слов (вод-а, вод-ный)</li>
                    <li><strong>Приставка</strong> — перед корнем (при-ехал, вы-шел)</li>
                    <li><strong>Суффикс</strong> — после корня (дом-ик, стол-н-ый)</li>
                    <li><strong>Окончание</strong> — изменяемая часть (стол-а, стол-у)</li>
                  </ul>
                  <h4>Нулевое окончание:</h4>
                  <p>Когда окончание не выражено звуком: стол□, лес□</p>`,
                  examples: ['Выдели корень в слове "водолаз"', 'Найди приставку', 'Разбери слово по составу'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                },
                {
                  id: 'russian6-sec1-top1-les2',
                  title: 'Разбор слова по составу',
                  description: 'Порядок разбора',
                  theory: `<h3>Порядок разбора:</h3>
                  <ol>
                    <li>Выдели окончание (измени форму слова)</li>
                    <li>Выдели основу (всё без окончания)</li>
                    <li>Выдели корень (подбери родственные слова)</li>
                    <li>Выдели приставку (перед корнем)</li>
                    <li>Выдели суффикс (после корня)</li>
                  </ol>
                  <h4>Пример:</h4>
                  <p>под-вод-н-ый (приставка-корень-суффикс-окончание)</p>`,
                  examples: ['Разбери: перевозчик', 'Разбери: школьник', 'Найди все морфемы'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 30
                }
              ]
            }
          ]
        },
        {
          id: 'russian6-sec2',
          title: 'Орфография',
          description: 'Правописание',
          topics: [
            {
              id: 'russian6-sec2-top1',
              title: 'Чередующиеся гласные в корне',
              description: 'Правила написания',
              lessons: [
                {
                  id: 'russian6-sec2-top1-les1',
                  title: 'Корни с чередованием',
                  description: '-раст-/-ращ-/-рос-',
                  theory: `<h3>Чередование гласных в корне</h3>
                  <h4>-раст-/-ращ-/-рос-:</h4>
                  <ul>
                    <li>Перед <strong>ст, щ</strong> — <strong>а</strong>: расти, выращивать</li>
                    <li>Перед <strong>с</strong> — <strong>о</strong>: росли, заросли</li>
                  </ul>
                  <h4>Исключения:</h4>
                  <p>Росток, ростовщик, Ростов, Ростислав — пишется о</p>`,
                  examples: ['Вставь букву: выр_щивать', 'Напиши правильно: р_сток', 'Объясни написание'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                },
                {
                  id: 'russian6-sec2-top1-les2',
                  title: 'Корни -лаг-/-лож-, -кас-/-кос-',
                  description: 'Правила выбора гласной',
                  theory: `<h3>-лаг-/-лож-</h3>
                  <ul>
                    <li>Перед <strong>ж</strong> — <strong>о</strong>: положить</li>
                    <li>Перед <strong>г</strong> — <strong>а</strong>: слагаемое</li>
                  </ul>
                  <h3>-кас-/-кос-</h3>
                  <ul>
                    <li>Перед <strong>а</strong> — <strong>с</strong>: касаться</li>
                    <li>Без <strong>а</strong> — <strong>о</strong>: коснуться</li>
                  </ul>
                  <h4>Исключение:</h4>
                  <p>Полог — пишется о</p>`,
                  examples: ['Вставь: пол_жить', 'Напиши: к_саться', 'Объясни выбор'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                },
                {
                  id: 'russian6-sec2-top1-les3',
                  title: 'Корни -бер-/-бир-, -мер-/-мир-',
                  description: 'Выбор И или Е',
                  theory: `<h3>Корни с И/Е</h3>
                  <h4>Правило:</h4>
                  <ul>
                    <li>Перед <strong>а</strong> — <strong>и</strong>: собирать, отмирать</li>
                    <li>Без <strong>а</strong> — <strong>е</strong>: соберёт, отмереть</li>
                  </ul>
                  <h4>Другие корни:</h4>
                  <ul>
                    <li>-пер-/-пир-: запирать — запереть</li>
                    <li>-дер-/-дир-: раздирать — раздерёт</li>
                    <li>-тер-/-тир-: стирать — стереть</li>
                  </ul>`,
                  examples: ['Вставь: соб_рать', 'Напиши: зап_реть', 'Выбери гласную'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            },
            {
              id: 'russian6-sec2-top2',
              title: 'Приставки пре- и при-',
              description: 'Значения приставок',
              lessons: [
                {
                  id: 'russian6-sec2-top2-les1',
                  title: 'Значения приставки ПРИ-',
                  description: 'Приближение, присоединение, близость',
                  theory: `<h3>Приставка ПРИ- обозначает:</h3>
                  <ul>
                    <li><strong>Приближение</strong> (приехал, прилетел)</li>
                    <li><strong>Присоединение</strong> (приклеил, привязал)</li>
                    <li><strong>Близость</strong> (приморский, пришкольный)</li>
                    <li><strong>Неполное действие</strong> (присесть, приоткрыть)</li>
                  </ul>`,
                  examples: ['Объясни: пр_ехать', 'Значение в слове пр_школьный', 'Вставь букву'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                },
                {
                  id: 'russian6-sec2-top2-les2',
                  title: 'Значения приставки ПРЕ-',
                  description: '= очень или пере-',
                  theory: `<h3>Приставка ПРЕ- обозначает:</h3>
                  <ul>
                    <li>= <strong>"очень"</strong> (прекрасный, премудрый)</li>
                    <li>= <strong>пере-</strong> (преградить = перегородить)</li>
                  </ul>
                  <h4>Сложные случаи (надо запомнить):</h4>
                  <p>Президент, претензия, привилегия, приоритет</p>`,
                  examples: ['Объясни: пр_красный', 'Замени: пр_градить', 'Вставь: пр_зидент'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            }
          ]
        },
        {
          id: 'russian6-sec3',
          title: 'Морфология',
          description: 'Части речи',
          topics: [
            {
              id: 'russian6-sec3-top1',
              title: 'Имя числительное',
              description: 'Количественные и порядковые',
              lessons: [
                {
                  id: 'russian6-sec3-top1-les1',
                  title: 'Виды числительных',
                  description: 'Количественные и порядковые',
                  theory: `<h3>Имя числительное</h3>
                  <h4>Количественные (сколько?):</h4>
                  <ul>
                    <li>Целые: пять, двадцать</li>
                    <li>Дробные: одна вторая, три пятых</li>
                    <li>Собирательные: двое, трое</li>
                  </ul>
                  <h4>Порядковые (который?):</h4>
                  <p>пятый, двадцатый</p>`,
                  examples: ['Определи разряд: пятеро', 'Просклоняй: два', 'Образуй порядковое: пять'],
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
          id: 'russian6-q1',
          question: 'Какая морфема стоит перед корнем?',
          options: ['Суффикс', 'Окончание', 'Приставка', 'Основа'],
          correctAnswer: 2,
          explanation: 'Приставка — это морфема, которая стоит перед корнем и служит для образования новых слов.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'russian6-q2',
          question: 'В каком слове пишется И в корне?',
          options: ['соб_ру', 'выр_щивать', 'к_саться', 'соб_рать'],
          correctAnswer: 3,
          explanation: 'Собирать — в корне -бер-/-бир- перед А пишется И: собирать, но соберёт.',
          difficulty: 'medium',
          points: 15
        },
        {
          id: 'russian6-q3',
          question: 'В каком слове пишется ПРИ-?',
          options: ['пр_красный', 'пр_ехать', 'пр_градить', 'пр_восходить'],
          correctAnswer: 1,
          explanation: 'Приехать — приставка ПРИ- означает приближение.',
          difficulty: 'medium',
          points: 15
        }
      ]
    },
    {
      id: 'history6',
      title: 'История Средних веков',
      icon: <Globe className="w-5 h-5" />,
      color: 'text-amber-400',
      gradient: 'from-amber-500 to-yellow-500',
      description: 'Феодализм, рыцари, крестовые походы',
      sections: [
        {
          id: 'history6-sec1',
          title: 'Раннее Средневековье',
          description: 'Становление феодализма',
          topics: [
            {
              id: 'history6-sec1-top1',
              title: 'Средневековое общество',
              description: 'Феодализм, сословия',
              lessons: [
                {
                  id: 'history6-sec1-top1-les1',
                  title: 'Феодализм',
                  description: 'Что такое феодализм',
                  theory: `<h3>Феодализм</h3>
                  <p>Общественный строй, основанный на владении землёй (феодом).</p>
                  <h4>Сословия:</h4>
                  <ul>
                    <li><strong>Духовенство</strong> — церковные служители (молиться)</li>
                    <li><strong>Дворянство</strong> — рыцари, феодалы (воевать)</li>
                    <li><strong>Крестьяне</strong> — земледельцы (работать)</li>
                  </ul>`,
                  examples: ['Что такое феод?', 'Какие были сословия?', 'Объясни вассалитет'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                },
                {
                  id: 'history6-sec1-top1-les2',
                  title: 'Феодальная лестница',
                  description: 'Иерархия власти',
                  theory: `<h3>Феодальная лестница</h3>
                  <h4>Иерархия:</h4>
                  <p>Король → Герцоги → Графы → Бароны → Рыцари</p>
                  <h4>Вассалитет:</h4>
                  <p>Вассал служит сеньору, получает землю и защиту.</p>
                  <p>«Вассал моего вассала — не мой вассал»</p>`,
                  examples: ['Кто на вершине лестницы?', 'Что такое вассал?', 'Какие обязанности у вассала?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            }
          ]
        },
        {
          id: 'history6-sec2',
          title: 'Расцвет Средневековья',
          description: 'Крестовые походы',
          topics: [
            {
              id: 'history6-sec2-top1',
              title: 'Крестовые походы',
              description: 'Походы на Иерусалим',
              lessons: [
                {
                  id: 'history6-sec2-top1-les1',
                  title: 'Причины и цели походов',
                  description: 'Почему начались походы',
                  theory: `<h3>Крестовые походы (1096-1270)</h3>
                  <h4>Причины:</h4>
                  <ul>
                    <li>Освободить Святую землю (Иерусалим) от мусульман</li>
                    <li>Расширить владения церкви</li>
                    <li>Найти богатства</li>
                  </ul>
                  <h4>Первый поход (1096-1099):</h4>
                  <p>Захват Иерусалима, создание крестоносных государств.</p>`,
                  examples: ['Почему начались крестовые походы?', 'Что такое Святая земля?', 'Когда был первый поход?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                },
                {
                  id: 'history6-sec2-top1-les2',
                  title: 'Последствия крестовых походов',
                  description: 'Итоги для Европы',
                  theory: `<h3>Последствия:</h3>
                  <ul>
                    <li>Развитие торговли (пряности, шёлк)</li>
                    <li>Ослабление феодалов</li>
                    <li>Усиление королевской власти</li>
                    <li>Культурный обмен Востока и Запада</li>
                  </ul>`,
                  examples: ['Какие были последствия?', 'Что стало с торговлей?', 'Как изменилась власть королей?'],
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
          id: 'history6-q1',
          question: 'Кто находился на вершине феодальной лестницы?',
          options: ['Рыцарь', 'Барон', 'Король', 'Герцог'],
          correctAnswer: 2,
          explanation: 'Король был на вершине феодальной лестницы, все остальные были его вассалами прямо или косвенно.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'history6-q2',
          question: 'Какую цель преследовали крестоносцы?',
          options: ['Завоевать Рим', 'Освободить Иерусалим', 'Открыть Америку', 'Покорить Китай'],
          correctAnswer: 1,
          explanation: 'Главной целью крестовых походов было освобождение Иерусалима и Святой земли от мусульман.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'history6-q3',
          question: 'Какой город был главной целью крестоносцев?',
          options: ['Рим', 'Константинополь', 'Иерусалим', 'Париж'],
          correctAnswer: 2,
          explanation: 'Иерусалим — Святой город, который крестоносцы хотели освободить от мусульман.',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    {
      id: 'bio6',
      title: 'Биология',
      icon: <Leaf className="w-5 h-5" />,
      color: 'text-lime-400',
      gradient: 'from-lime-500 to-green-500',
      description: 'Растения, животные, грибы',
      sections: [
        {
          id: 'bio6-sec1',
          title: 'Растения',
          description: 'Строение и жизнедеятельность',
          topics: [
            {
              id: 'bio6-sec1-top1',
              title: 'Фотосинтез',
              description: 'Как растения создают пищу',
              lessons: [
                {
                  id: 'bio6-sec1-top1-les1',
                  title: 'Что такое фотосинтез',
                  description: 'Процесс создания органических веществ',
                  theory: `<h3>Фотосинтез</h3>
                  <p>Процесс создания органических веществ из неорганических с помощью энергии света.</p>
                  <h4>Уравнение:</h4>
                  <p>6CO₂ + 6H₂O + свет → C₆H₁₂O₆ + 6O₂</p>
                  <h4>Где происходит:</h4>
                  <ul>
                    <li>В хлоропластах</li>
                    <li>В зелёных частях растений</li>
                  </ul>`,
                  examples: ['Где происходит фотосинтез?', 'Что нужно для фотосинтеза?', 'Почему растения зелёные?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                },
                {
                  id: 'bio6-sec1-top1-les2',
                  title: 'Значение фотосинтеза',
                  description: 'Роль в природе',
                  theory: `<h3>Значение фотосинтеза</h3>
                  <h4>Для растений:</h4>
                  <p>Создание питательных веществ</p>
                  <h4>Для природы:</h4>
                  <ul>
                    <li>Выделение кислорода</li>
                    <li>Поглощение углекислого газа</li>
                    <li>Круговорот веществ</li>
                  </ul>`,
                  examples: ['Какой газ выделяется?', 'Что поглощают растения?', 'Почему важен фотосинтез?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            },
            {
              id: 'bio6-sec1-top2',
              title: 'Строение растений',
              description: 'Органы растения',
              lessons: [
                {
                  id: 'bio6-sec1-top2-les1',
                  title: 'Вегетативные органы',
                  description: 'Корень, стебель, лист',
                  theory: `<h3>Вегетативные органы</h3>
                  <ul>
                    <li><strong>Корень</strong> — закрепление, всасывание воды и минералов</li>
                    <li><strong>Стебель</strong> — опора, проведение веществ</li>
                    <li><strong>Лист</strong> — фотосинтез, газообмен, испарение</li>
                  </ul>`,
                  examples: ['Какие органы вегетативные?', 'Функция корня?', 'Что делает лист?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                },
                {
                  id: 'bio6-sec1-top2-les2',
                  title: 'Генеративные органы',
                  description: 'Цветок, плод, семя',
                  theory: `<h3>Генеративные органы</h3>
                  <ul>
                    <li><strong>Цветок</strong> — орган размножения</li>
                    <li><strong>Плод</strong> — защита и распространение семян</li>
                    <li><strong>Семя</strong> — зачаток нового растения</li>
                  </ul>
                  <h4>Строение цветка:</h4>
                  <p>Тычинки + Пестик + Лепестки + Чашелистики</p>`,
                  examples: ['Какие органы генеративные?', 'Из чего состоит цветок?', 'Функция плода?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            }
          ]
        },
        {
          id: 'bio6-sec2',
          title: 'Животные',
          description: 'Многообразие животных',
          topics: [
            {
              id: 'bio6-sec2-top1',
              title: 'Одноклеточные и многоклеточные',
              description: 'Классификация животных',
              lessons: [
                {
                  id: 'bio6-sec2-top1-les1',
                  title: 'Одноклеточные животные',
                  description: 'Амёба, инфузория',
                  theory: `<h3>Одноклеточные</h3>
                  <h4>Амёба:</h4>
                  <ul>
                    <li>Не имеет постоянной формы</li>
                    <li>Перемещается ложноножками</li>
                    <li>Питание: заглатывание пищи</li>
                  </ul>
                  <h4>Инфузория-туфелька:</h4>
                  <ul>
                    <li>Постоянная форма</li>
                    <li>Перемещение ресничками</li>
                  </ul>`,
                  examples: ['Чем амёба отличается от инфузории?', 'Как питается амёба?', 'Что такое реснички?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            }
          ]
        },
        {
          id: 'bio6-sec3',
          title: 'Грибы',
          description: 'Особое царство',
          topics: [
            {
              id: 'bio6-sec3-top1',
              title: 'Строение грибов',
              description: 'Грибница и плодовое тело',
              lessons: [
                {
                  id: 'bio6-sec3-top1-les1',
                  title: 'Шляпочные грибы',
                  description: 'Строение и питание',
                  theory: `<h3>Шляпочные грибы</h3>
                  <h4>Строение:</h4>
                  <ul>
                    <li><strong>Грибница (мицелий)</strong> — под землёй</li>
                    <li><strong>Плодовое тело</strong> — шляпка и ножка</li>
                  </ul>
                  <h4>Питание:</h4>
                  <p>Гетеротрофы — готовы органические вещества</p>
                  <h4>Симбиоз:</h4>
                  <p>Грибокорень — гриб + корень дерева</p>`,
                  examples: ['Из чего состоит гриб?', 'Что такое грибница?', 'Как питаются грибы?'],
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
          id: 'bio6-q1',
          question: 'Какой газ выделяется при фотосинтезе?',
          options: ['Углекислый газ', 'Азот', 'Кислород', 'Водород'],
          correctAnswer: 2,
          explanation: 'При фотосинтезе растения поглощают CO₂ и выделяют O₂ — кислород, необходимый для дыхания.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'bio6-q2',
          question: 'Какой орган растения выполняет фотосинтез?',
          options: ['Корень', 'Стебель', 'Лист', 'Корень'],
          correctAnswer: 2,
          explanation: 'Лист — главный орган фотосинтеза, содержит хлорофилл в клетках мякоти листа.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'bio6-q3',
          question: 'Что такое грибница?',
          options: ['Шляпка гриба', 'Ножка гриба', 'Подземная часть гриба', 'Споры гриба'],
          correctAnswer: 2,
          explanation: 'Грибница (мицелий) — подземная часть гриба, состоящая из тонких нитей.',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    {
      id: 'geo6',
      title: 'География',
      icon: <Map className="w-5 h-5" />,
      color: 'text-teal-400',
      gradient: 'from-teal-500 to-cyan-500',
      description: 'Материки и океаны',
      sections: [
        {
          id: 'geo6-sec1',
          title: 'Гидросфера',
          description: 'Реки, озёра, океаны',
          topics: [
            {
              id: 'geo6-sec1-top1',
              title: 'Мировой океан',
              description: 'Океаны и моря',
              lessons: [
                {
                  id: 'geo6-sec1-top1-les1',
                  title: 'Состав гидросферы',
                  description: 'Вода на Земле',
                  theory: `<h3>Гидросфера</h3>
                  <p>Водная оболочка Земли, составляет 71% поверхности планеты.</p>
                  <h4>Состав гидросферы:</h4>
                  <ul>
                    <li><strong>Мировой океан</strong> — 96% воды (солёная)</li>
                    <li><strong>Подземные воды</strong> — 2%</li>
                    <li><strong>Ледники</strong> — 1,7%</li>
                    <li><strong>Реки и озёра</strong> — 0,02%</li>
                  </ul>`,
                  examples: ['Сколько % воды в океанах?', 'Какая вода в океанах?', 'Назови состав гидросферы'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                },
                {
                  id: 'geo6-sec1-top1-les2',
                  title: 'Океаны Земли',
                  description: 'Названия океанов',
                  theory: `<h3>Океаны</h3>
                  <h4>Пять океанов:</h4>
                  <ul>
                    <li><strong>Тихий</strong> — самый большой</li>
                    <li><strong>Атлантический</strong> — второй по размеру</li>
                    <li><strong>Индийский</strong></li>
                    <li><strong>Северный Ледовитый</strong></li>
                    <li><strong>Южный</strong> (Антарктический)</li>
                  </ul>`,
                  examples: ['Какой океан самый большой?', 'Назови все океаны', 'Где находится Индийский океан?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            }
          ]
        },
        {
          id: 'geo6-sec2',
          title: 'Атмосфера',
          description: 'Климат и погода',
          topics: [
            {
              id: 'geo6-sec2-top1',
              title: 'Строение атмосферы',
              description: 'Слои атмосферы',
              lessons: [
                {
                  id: 'geo6-sec2-top1-les1',
                  title: 'Состав атмосферы',
                  description: 'Газы в воздухе',
                  theory: `<h3>Атмосфера Земли</h3>
                  <p>Воздушная оболочка Земли.</p>
                  <h4>Состав:</h4>
                  <ul>
                    <li><strong>Азот</strong> — 78%</li>
                    <li><strong>Кислород</strong> — 21%</li>
                    <li><strong>Другие газы</strong> — 1%</li>
                  </ul>`,
                  examples: ['Какой газ преобладает?', 'Сколько кислорода?', 'Что такое атмосфера?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                },
                {
                  id: 'geo6-sec2-top1-les2',
                  title: 'Слои атмосферы',
                  description: 'Тропосфера, стратосфера',
                  theory: `<h3>Слои атмосферы</h3>
                  <ul>
                    <li><strong>Тропосфера</strong> (до 10-18 км) — погода, облака</li>
                    <li><strong>Стратосфера</strong> (до 50 км) — озоновый слой</li>
                    <li><strong>Мезосфера</strong> (до 80 км)</li>
                    <li><strong>Термосфера</strong> (до 800 км) — северное сияние</li>
                  </ul>`,
                  examples: ['Где находится озоновый слой?', 'Где формируется погода?', 'Что такое тропосфера?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            },
            {
              id: 'geo6-sec2-top2',
              title: 'Погода и климат',
              description: 'Различия и элементы',
              lessons: [
                {
                  id: 'geo6-sec2-top2-les1',
                  title: 'Погода и климат',
                  description: 'Определения',
                  theory: `<h3>Погода и климат</h3>
                  <h4>Погода:</h4>
                  <p>Состояние атмосферы в данный момент и в данном месте.</p>
                  <h4>Климат:</h4>
                  <p>Многолетний режим погоды в определённой местности.</p>
                  <h4>Элементы погоды:</h4>
                  <p>Температура, давление, влажность, ветер, осадки</p>`,
                  examples: ['В чём разница погоды и климата?', 'Назови элементы погоды', 'Что такое климат?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            }
          ]
        },
        {
          id: 'geo6-sec3',
          title: 'Биосфера',
          description: 'Живая оболочка Земли',
          topics: [
            {
              id: 'geo6-sec3-top1',
              title: 'Биосфера',
              description: 'Живая оболочка Земли',
              lessons: [
                {
                  id: 'geo6-sec3-top1-les1',
                  title: 'Границы биосферы',
                  description: 'Учение Вернадского',
                  theory: `<h3>Биосфера</h3>
                  <p>Оболочка Земли, населённая живыми организмами.</p>
                  <h4>Границы:</h4>
                  <ul>
                    <li><strong>Верхняя</strong> — до 20-25 км (озоновый слой)</li>
                    <li><strong>Нижняя</strong> — до 3 км вглубь земли</li>
                    <li><strong>В океане</strong> — до 11 км глубины</li>
                  </ul>
                  <h4>В.И. Вернадский:</h4>
                  <p>Создал учение о биосфере</p>`,
                  examples: ['Кто создал учение о биосфере?', 'Каковы границы биосферы?', 'Что такое биосфера?'],
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
          id: 'geo6-q1',
          question: 'Сколько процентов воды содержится в Мировом океане?',
          options: ['71%', '96%', '50%', '80%'],
          correctAnswer: 1,
          explanation: 'Мировой океан содержит около 96% всей воды на Земле.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'geo6-q2',
          question: 'Какой газ составляет основную часть атмосферы?',
          options: ['Кислород', 'Азот', 'Углекислый газ', 'Аргон'],
          correctAnswer: 1,
          explanation: 'Азот составляет около 78% атмосферы, кислород — около 21%.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'geo6-q3',
          question: 'Кто создал учение о биосфере?',
          options: ['Менделеев', 'Вернадский', 'Дарвин', 'Ломоносов'],
          correctAnswer: 1,
          explanation: 'В.И. Вернадский создал учение о биосфере как оболочке Земли, преобразуемой живыми организмами.',
          difficulty: 'medium',
          points: 15
        }
      ]
    },
    {
      id: 'literature6',
      title: 'Литература',
      icon: <BookOpen className="w-5 h-5" />,
      color: 'text-purple-400',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Русская классика, поэзия',
      sections: [
        {
          id: 'literature6-sec1',
          title: 'Русская классика',
          description: 'Произведения русских писателей',
          topics: [
            {
              id: 'literature6-sec1-top1',
              title: 'А.С. Пушкин',
              description: 'Жизнь и творчество',
              lessons: [
                {
                  id: 'literature6-sec1-top1-les1',
                  title: 'Биография Пушкина',
                  description: 'Жизнь поэта',
                  theory: `<h3>Александр Сергеевич Пушкин (1799-1837)</h3>
                  <p>Величайший русский поэт, основатель современного русского литературного языка.</p>
                  <h4>Биография:</h4>
                  <ul>
                    <li>Родился в Москве, учился в Царскосельском лицее</li>
                    <li>Ссылка на юг, затем в Михайловское</li>
                    <li>Погиб на дуэли с Дантесом</li>
                  </ul>`,
                  examples: ['Назови годы жизни Пушкина', 'Где учился Пушкин?', 'Как погиб поэт?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                },
                {
                  id: 'literature6-sec1-top1-les2',
                  title: 'Произведения Пушкина',
                  description: 'Дубровский, Капитанская дочка',
                  theory: `<h3>Произведения 6 класса</h3>
                  <h4>"Дубровский":</h4>
                  <p>Роман о благородном разбойнике Владимире Дубровском.</p>
                  <h4>"Капитанская дочка":</h4>
                  <p>Исторический роман о Пугачёвском восстании.</p>
                  <h4>Сказки:</h4>
                  <p>"Сказка о мёртвой царевне", "Сказка о золотом петушке"</p>`,
                  examples: ['О чём роман "Дубровский"?', 'Главная тема "Капитанской дочки"?', 'Назови сказки Пушкина'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            },
            {
              id: 'literature6-sec1-top2',
              title: 'М.Ю. Лермонтов',
              description: 'Поэзия и проза',
              lessons: [
                {
                  id: 'literature6-sec1-top2-les1',
                  title: 'Биография Лермонтова',
                  description: 'Жизнь поэта',
                  theory: `<h3>Михаил Юрьевич Лермонтов (1814-1841)</h3>
                  <p>Русский поэт, прозаик и драматург.</p>
                  <h4>Биография:</h4>
                  <ul>
                    <li>Рос без матери, воспитывался бабушкой</li>
                    <li>Учился в Московском университете</li>
                    <li>Погиб на дуэли в 26 лет</li>
                  </ul>`,
                  examples: ['Когда родился Лермонтов?', 'Как он воспитывался?', 'Как погиб поэт?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                },
                {
                  id: 'literature6-sec1-top2-les2',
                  title: 'Произведения Лермонтова',
                  description: 'Бородино, Мцыри',
                  theory: `<h3>Известные произведения</h3>
                  <h4>"Бородино":</h4>
                  <p>Стихотворение о войне 1812 года.</p>
                  <h4>"Парус":</h4>
                  <p>Лирическое стихотворение об одиночестве.</p>
                  <h4>"Мцыри":</h4>
                  <p>Поэма о свободолюбивом юноше.</p>`,
                  examples: ['О чём "Бородино"?', 'Тема "Паруса"?', 'Кто такой Мцыри?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            }
          ]
        },
        {
          id: 'literature6-sec2',
          title: 'Поэзия',
          description: 'Стихотворения',
          topics: [
            {
              id: 'literature6-sec2-top1',
              title: 'Н.В. Гоголь',
              description: 'Сатира и юмор',
              lessons: [
                {
                  id: 'literature6-sec2-top1-les1',
                  title: 'Биография Гоголя',
                  description: 'Жизнь писателя',
                  theory: `<h3>Николай Васильевич Гоголь (1809-1852)</h3>
                  <p>Русский писатель, мастер сатиры и мистики.</p>
                  <h4>Биография:</h4>
                  <ul>
                    <li>Родился на Украине</li>
                    <li>Жил в Петербурге, затем за границей</li>
                  </ul>`,
                  examples: ['Где родился Гоголь?', 'Какие жанры писал?', 'Назови произведения'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                },
                {
                  id: 'literature6-sec2-top1-les2',
                  title: 'Произведения Гоголя',
                  description: 'Ночь перед Рождеством, Тарас Бульба',
                  theory: `<h3>Произведения 6 класса</h3>
                  <h4>"Ночь перед Рождеством":</h4>
                  <p>Повесть из цикла "Вечера на хуторе близ Диканьки".</p>
                  <h4>"Тарас Бульба":</h4>
                  <p>Повесть о запорожских казаках.</p>
                  <h4>Особенности:</h4>
                  <p>Юмор, украинский колорит, мастерство портрета.</p>`,
                  examples: ['О чём "Тарас Бульба"?', 'Особенность юмора Гоголя?', 'В каком цикле "Ночь перед Рождеством"?'],
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
          id: 'literature6-q1',
          question: 'В каком году родился А.С. Пушкин?',
          options: ['1799', '1809', '1814', '1790'],
          correctAnswer: 0,
          explanation: 'Александр Сергеевич Пушкин родился 6 июня 1799 года в Москве.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'literature6-q2',
          question: 'Кто написал стихотворение "Бородино"?',
          options: ['Пушкин', 'Гоголь', 'Лермонтов', 'Тургенев'],
          correctAnswer: 2,
          explanation: 'Стихотворение "Бородино" о войне 1812 года написал М.Ю. Лермонтов в 1837 году.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'literature6-q3',
          question: 'В каком произведении Гоголя действуют запорожские казаки?',
          options: ['Ночь перед Рождеством', 'Тарас Бульба', 'Мёртвые души', 'Ревизор'],
          correctAnswer: 1,
          explanation: '"Тарас Бульба" — историческая повесть Гоголя о запорожских казаках.',
          difficulty: 'medium',
          points: 15
        }
      ]
    },
    {
      id: 'foreign6',
      title: 'Иностранный язык',
      icon: <Languages className="w-5 h-5" />,
      color: 'text-sky-400',
      gradient: 'from-sky-500 to-blue-500',
      description: 'Английский язык',
      sections: [
        {
          id: 'foreign6-sec1',
          title: 'Грамматика',
          description: 'Времена и конструкции',
          topics: [
            {
              id: 'foreign6-sec1-top1',
              title: 'Present Continuous',
              description: 'Настоящее продолженное',
              lessons: [
                {
                  id: 'foreign6-sec1-top1-les1',
                  title: 'Образование Present Continuous',
                  description: 'Формула времени',
                  theory: `<h3>Present Continuous</h3>
                  <p>Действие, происходящее в данный момент.</p>
                  <h4>Формула:</h4>
                  <p>am/is/are + V-ing</p>
                  <h4>Примеры:</h4>
                  <ul>
                    <li>I am reading now. — Я читаю сейчас.</li>
                    <li>She is sleeping. — Она спит.</li>
                    <li>They are playing. — Они играют.</li>
                  </ul>`,
                  examples: ['Образуй: He (read) now', 'Переведи: Я пишу', 'Вставь: We ___ watching TV'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            },
            {
              id: 'foreign6-sec1-top2',
              title: 'Past Simple',
              description: 'Прошедшее простое',
              lessons: [
                {
                  id: 'foreign6-sec1-top2-les1',
                  title: 'Правильные глаголы',
                  description: 'Окончание -ed',
                  theory: `<h3>Past Simple</h3>
                  <p>Действие, которое произошло в прошлом.</p>
                  <h4>Правильные глаголы:</h4>
                  <p>Добавляем -ed: work → worked, play → played</p>
                  <h4>Неправильные глаголы:</h4>
                  <p>Запомнить формы: go → went, see → saw</p>`,
                  examples: ['Образуй: play в Past Simple', 'Переведи: Я играл вчера', 'Найди неправильный глагол'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            }
          ]
        },
        {
          id: 'foreign6-sec2',
          title: 'Лексика',
          description: 'Тематическая лексика',
          topics: [
            {
              id: 'foreign6-sec2-top1',
              title: 'Времена года и погода',
              description: 'Seasons and Weather',
              lessons: [
                {
                  id: 'foreign6-sec2-top1-les1',
                  title: 'Seasons',
                  description: 'Времена года',
                  theory: `<h3>Seasons</h3>
                  <ul>
                    <li><strong>Winter</strong> — зима</li>
                    <li><strong>Spring</strong> — весна</li>
                    <li><strong>Summer</strong> — лето</li>
                    <li><strong>Autumn</strong> — осень</li>
                  </ul>
                  <h4>Months:</h4>
                  <p>December, January, February — зима</p>`,
                  examples: ['Переведи: зима', 'Назови летние месяцы', 'Какой сейчас сезон?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                },
                {
                  id: 'foreign6-sec2-top1-les2',
                  title: 'Weather',
                  description: 'Погода',
                  theory: `<h3>Weather</h3>
                  <ul>
                    <li><strong>It's sunny</strong> — солнечно</li>
                    <li><strong>It's rainy</strong> — дождливо</li>
                    <li><strong>It's snowy</strong> — снежно</li>
                    <li><strong>It's windy</strong> — ветрено</li>
                    <li><strong>It's cloudy</strong> — облачно</li>
                  </ul>
                  <h4>Вопрос:</h4>
                  <p>What is the weather like today?</p>`,
                  examples: ['Переведи: солнечно', 'Как спросить о погоде?', 'Опиши погоду'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            },
            {
              id: 'foreign6-sec2-top2',
              title: 'Мой дом',
              description: 'My House',
              lessons: [
                {
                  id: 'foreign6-sec2-top2-les1',
                  title: 'Rooms',
                  description: 'Комнаты',
                  theory: `<h3>Rooms</h3>
                  <ul>
                    <li><strong>Living room</strong> — гостиная</li>
                    <li><strong>Bedroom</strong> — спальня</li>
                    <li><strong>Kitchen</strong> — кухня</li>
                    <li><strong>Bathroom</strong> — ванная</li>
                  </ul>`,
                  examples: ['Переведи: кухня', 'Где ты спишь?', 'Опиши свою комнату'],
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
          id: 'foreign6-q1',
          question: 'Как переводится "It\'s rainy"?',
          options: ['Солнечно', 'Дождливо', 'Ветрено', 'Снежно'],
          correctAnswer: 1,
          explanation: 'Rainy — дождливый. It\'s rainy = Дождливо.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'foreign6-q2',
          question: 'Что означает "bedroom"?',
          options: ['Кухня', 'Ванная', 'Спальня', 'Гостиная'],
          correctAnswer: 2,
          explanation: 'Bedroom — спальня (bed — кровать + room — комната).',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'foreign6-q3',
          question: 'Выбери правильную форму Present Continuous:',
          options: ['I read', 'I am reading', 'I reads', 'I reading'],
          correctAnswer: 1,
          explanation: 'Present Continuous: am/is/are + V-ing. I am reading — Я читаю сейчас.',
          difficulty: 'medium',
          points: 15
        }
      ]
    },
    {
      id: 'art6',
      title: 'ИЗО',
      icon: <Palette className="w-5 h-5" />,
      color: 'text-rose-400',
      gradient: 'from-rose-500 to-pink-500',
      description: 'Изобразительное искусство',
      sections: [
        {
          id: 'art6-sec1',
          title: 'Виды искусства',
          description: 'Живопись, графика, скульптура',
          topics: [
            {
              id: 'art6-sec1-top1',
              title: 'Живопись и графика',
              description: 'Виды изобразительного искусства',
              lessons: [
                {
                  id: 'art6-sec1-top1-les1',
                  title: 'Живопись',
                  description: 'Виды живописи',
                  theory: `<h3>Живопись</h3>
                  <p>Создание изображений красками.</p>
                  <h4>Техники:</h4>
                  <ul>
                    <li><strong>Масло</strong> — картины на холсте</li>
                    <li><strong>Акварель</strong> — водяные краски</li>
                    <li><strong>Гуашь</strong> — густые краски</li>
                  </ul>`,
                  examples: ['Чем отличается живопись от графики?', 'Какие техники живописи?', 'Что такое акварель?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                },
                {
                  id: 'art6-sec1-top1-les2',
                  title: 'Графика',
                  description: 'Рисунок и гравюра',
                  theory: `<h3>Графика</h3>
                  <p>Изображение линиями, штрихами.</p>
                  <h4>Виды:</h4>
                  <ul>
                    <li><strong>Рисунок</strong> — карандаш, уголь</li>
                    <li><strong>Гравюра</strong> — печатное изображение</li>
                    <li><strong>Эскиз</strong> — предварительный набросок</li>
                  </ul>`,
                  examples: ['Что такое гравюра?', 'Чем рисунок от живописи?', 'Что такое эскиз?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            }
          ]
        },
        {
          id: 'art6-sec2',
          title: 'Древнерусское искусство',
          description: 'Иконы и храмы',
          topics: [
            {
              id: 'art6-sec2-top1',
              title: 'Иконопись',
              description: 'Русские иконы',
              lessons: [
                {
                  id: 'art6-sec2-top1-les1',
                  title: 'Андрей Рублёв',
                  description: 'Великий иконописец',
                  theory: `<h3>Андрей Рублёв (XV век)</h3>
                  <p>Великий русский иконописец.</p>
                  <h4>"Троица":</h4>
                  <p>Самая известная икона — три ангела за столом.</p>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>Гармония и покой</li>
                    <li>Светлые краски</li>
                    <li>Духовная глубина</li>
                  </ul>`,
                  examples: ['Кто такой Андрей Рублёв?', 'Что такое "Троица"?', 'Особенности икон Рублёва?'],
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
          id: 'art6-q1',
          question: 'Кто написал икону "Троица"?',
          options: ['Пушкин', 'Рублёв', 'Гоголь', 'Достоевский'],
          correctAnswer: 1,
          explanation: 'Андрей Рублёв — великий русский иконописец XV века, автор иконы "Троица".',
          difficulty: 'medium',
          points: 15
        },
        {
          id: 'art6-q2',
          question: 'Какая техника живописи использует водяные краски?',
          options: ['Масло', 'Гуашь', 'Акварель', 'Гравюра'],
          correctAnswer: 2,
          explanation: 'Акварель — техника живописи водяными прозрачными красками.',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    {
      id: 'safety6',
      title: 'ОБЖ',
      icon: <Shield className="w-5 h-5" />,
      color: 'text-red-500',
      gradient: 'from-red-600 to-red-500',
      description: 'Основы безопасности жизнедеятельности',
      sections: [
        {
          id: 'safety6-sec1',
          title: 'Безопасность в городе',
          description: 'Правила поведения',
          topics: [
            {
              id: 'safety6-sec1-top1',
              title: 'Транспортная безопасность',
              description: 'Правила в транспорте',
              lessons: [
                {
                  id: 'safety6-sec1-top1-les1',
                  title: 'В общественном транспорте',
                  description: 'Автобус, трамвай, метро',
                  theory: `<h3>Правила в транспорте</h3>
                  <h4>При посадке:</h4>
                  <ul>
                    <li>Жди полной остановки</li>
                    <li>Входи через заднюю дверь</li>
                    <li>Не толкайся</li>
                  </ul>
                  <h4>В транспорте:</h4>
                  <ul>
                    <li>Держись за поручень</li>
                    <li>Не отвлекай водителя</li>
                    <li>Уступай место пожилым</li>
                  </ul>`,
                  examples: ['Как входить в автобус?', 'Зачем держаться за поручень?', 'Кому уступать место?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            }
          ]
        },
        {
          id: 'safety6-sec2',
          title: 'Чрезвычайные ситуации',
          description: 'Действия в ЧС',
          topics: [
            {
              id: 'safety6-sec2-top1',
              title: 'Землетрясение',
              description: 'Правила при землетрясении',
              lessons: [
                {
                  id: 'safety6-sec2-top1-les1',
                  title: 'Действия при землетрясении',
                  description: 'Как защититься',
                  theory: `<h3>При землетрясении:</h3>
                  <h4>Если ты в помещении:</h4>
                  <ul>
                    <li>Встань в дверной проём или углу</li>
                    <li>Держись подальше от окон</li>
                    <li>Не пользуйся лифтом</li>
                  </ul>
                  <h4>Если ты на улице:</h4>
                  <ul>
                    <li>Отойди от зданий</li>
                    <li>Не беги вдоль стен</li>
                    <li>Остерегайся падающих предметов</li>
                  </ul>`,
                  examples: ['Где укрыться в помещении?', 'Что делать на улице?', 'Можно ли использовать лифт?'],
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
          id: 'safety6-q1',
          question: 'Как правильно входить в общественный транспорт?',
          options: ['Через переднюю дверь', 'Через заднюю дверь', 'Через любую дверь', 'Через окна'],
          correctAnswer: 1,
          explanation: 'Входить в общественный транспорт нужно через заднюю дверь, выходить — через переднюю.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'safety6-q2',
          question: 'Где лучше укрыться при землетрясении в помещении?',
          options: ['У окна', 'В дверном проёме', 'На балконе', 'В лифте'],
          correctAnswer: 1,
          explanation: 'При землетрясении лучше укрыться в дверном проёме или углу, подальше от окон.',
          difficulty: 'medium',
          points: 15
        }
      ]
    },
    {
      id: 'informatics6',
      title: 'Информатика',
      icon: <Monitor className="w-5 h-5" />,
      color: 'text-cyan-400',
      gradient: 'from-cyan-500 to-blue-500',
      description: 'Основы информатики',
      sections: [
        {
          id: 'informatics6-sec1',
          title: 'Алгоритмы',
          description: 'Понятие алгоритма',
          topics: [
            {
              id: 'informatics6-sec1-top1',
              title: 'Что такое алгоритм',
              description: 'Определение и свойства',
              lessons: [
                {
                  id: 'informatics6-sec1-top1-les1',
                  title: 'Понятие алгоритма',
                  description: 'Определение',
                  theory: `<h3>Алгоритм</h3>
                  <p>Алгоритм — это последовательность действий для решения задачи.</p>
                  <h4>Свойства алгоритма:</h4>
                  <ul>
                    <li><strong>Понятность</strong> — каждый шаг понятен</li>
                    <li><strong>Определённость</strong> — один результат для одних данных</li>
                    <li><strong>Результативность</strong> — приводит к результату</li>
                    <li><strong>Массовость</strong> — подходит для многих задач</li>
                  </ul>`,
                  examples: ['Что такое алгоритм?', 'Назови свойства', 'Приведи пример алгоритма'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                },
                {
                  id: 'informatics6-sec1-top1-les2',
                  title: 'Способы записи алгоритма',
                  description: 'Формы записи',
                  theory: `<h3>Способы записи:</h3>
                  <ul>
                    <li><strong>Словесный</strong> — описание словами</li>
                    <li><strong>Блок-схема</strong> — графическое изображение</li>
                    <li><strong>Программа</strong> — на языке программирования</li>
                  </ul>
                  <h4>Блок-схема:</h4>
                  <ul>
                    <li>Овал — начало/конец</li>
                    <li>Прямоугольник — действие</li>
                    <li>Ромб — условие</li>
                  </ul>`,
                  examples: ['Какие способы записи?', 'Что означает овал?', 'Нарисуй простую блок-схему'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            }
          ]
        },
        {
          id: 'informatics6-sec2',
          title: 'Файлы и папки',
          description: 'Работа с файлами',
          topics: [
            {
              id: 'informatics6-sec2-top1',
              title: 'Файловая система',
              description: 'Организация файлов',
              lessons: [
                {
                  id: 'informatics6-sec2-top1-les1',
                  title: 'Файлы и папки',
                  description: 'Понятие файла',
                  theory: `<h3>Файл</h3>
                  <p>Файл — это именованная область данных на диске.</p>
                  <h4>Имя файла:</h4>
                  <p>имя.расширение (например, document.txt)</p>
                  <h4>Папка:</h4>
                  <p>Контейнер для файлов и других папок.</p>
                  <h4>Расширения:</h4>
                  <ul>
                    <li>.txt — текстовый файл</li>
                    <li>.doc — документ Word</li>
                    <li>.jpg — изображение</li>
                  </ul>`,
                  examples: ['Что такое файл?', 'Для чего расширение?', 'Что такое папка?'],
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
          id: 'informatics6-q1',
          question: 'Что такое алгоритм?',
          options: ['Программа', 'Последовательность действий', 'Файл', 'Папка'],
          correctAnswer: 1,
          explanation: 'Алгоритм — это последовательность действий для решения задачи.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'informatics6-q2',
          question: 'Какой фигурой обозначается действие в блок-схеме?',
          options: ['Овал', 'Ромб', 'Прямоугольник', 'Круг'],
          correctAnswer: 2,
          explanation: 'В блок-схеме действие обозначается прямоугольником, условие — ромбом, начало/конец — овалом.',
          difficulty: 'medium',
          points: 15
        },
        {
          id: 'informatics6-q3',
          question: 'Что означает расширение .txt?',
          options: ['Изображение', 'Текстовый файл', 'Программа', 'Видео'],
          correctAnswer: 1,
          explanation: '.txt — расширение текстового файла.',
          difficulty: 'easy',
          points: 10
        }
      ]
    }
  ]
}
