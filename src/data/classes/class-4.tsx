// ==================== 4 КЛАСС ====================

import { Calculator, Book, Globe, BookOpen, Languages, Palette, Music, Dumbbell, Ruler, HeartHandshake, Monitor, Shield } from 'lucide-react'
import type { Grade } from '../types'

export const grade4: Grade = {
  id: 4,
  name: '4 класс',
  shortName: '4 кл.',
  subjects: [
    // ==================== МАТЕМАТИКА ====================
    {
      id: 'math4',
      title: 'Математика',
      icon: <Calculator className="w-5 h-5" />,
      color: 'text-blue-400',
      gradient: 'from-blue-500 to-indigo-500',
      description: 'Дроби, задачи на движение, многозначные числа',
      sections: [
        {
          id: 'math4-sec1',
          title: 'Многозначные числа',
          description: 'Числа больше 1000',
          topics: [
            {
              id: 'math4-sec1-t1',
              title: 'Нумерация',
              description: 'Разряды и классы',
              lessons: [
                {
                  id: 'math4-sec1-t1-l1',
                  title: 'Классы чисел',
                  description: 'Единицы, тысячи, миллионы',
                  theory: `<h3>📊 Классы чисел</h3>
                  <h4>Таблица разрядов:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px; font-size: 12px;">
Миллиарды | Миллионы | Тысячи | Единицы
СД Е      | СД Е     | СД Е   | СД Е
          |          |        | 1 2 3
                  </pre>
                  <h4>Чтение чисел:</h4>
                  <p>1 234 567 — один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь</p>
                  <h4>Правило:</h4>
                  <p>В каждом классе 3 разряда: сотни, десятки, единицы</p>`,
                  examples: ['Прочитай: 5 678 901', 'Запиши: два миллиона триста тысяч'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            }
          ]
        },
        {
          id: 'math4-sec2',
          title: 'Дроби',
          description: 'Доли и дробные числа',
          topics: [
            {
              id: 'math4-sec2-t1',
              title: 'Доли',
              description: 'Части целого',
              lessons: [
                {
                  id: 'math4-sec2-t1-l1',
                  title: 'Что такое дробь?',
                  description: 'Числитель и знаменатель',
                  theory: `<h3>🥧 Дроби</h3>
                  <p>Дробь — часть целого числа.</p>
                  <h4>Запись дроби:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
     3   ← числитель (сколько взяли)
    ───
     4   ← знаменатель (на сколько разделили)
                  </pre>
                  <h4>Пример:</h4>
                  <p>🍕 Пиццу разделили на 4 части, взяли 3 — это 3/4 пиццы</p>
                  <h4>Чтение:</h4>
                  <p>3/4 — "три четвёртых"</p>`,
                  examples: ['Как записать одну вторую?', 'Прочитай: 5/8'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            }
          ]
        },
        {
          id: 'math4-sec3',
          title: 'Задачи на движение',
          description: 'Скорость, время, расстояние',
          topics: [
            {
              id: 'math4-sec3-t1',
              title: 'Формула пути',
              description: 'S = v × t',
              lessons: [
                {
                  id: 'math4-sec3-t1-l1',
                  title: 'Скорость, время, расстояние',
                  description: 'Взаимосвязь величин',
                  theory: `<h3>🚗 Задачи на движение</h3>
                  <h4>Основные формулы:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
S = v × t     (расстояние = скорость × время)
v = S : t     (скорость = расстояние : время)
t = S : v     (время = расстояние : скорость)
                  </pre>
                  <h4>Единицы измерения:</h4>
                  <ul>
                    <li>S (расстояние) — км, м, см</li>
                    <li>v (скорость) — км/ч, м/с</li>
                    <li>t (время) — ч, мин, с</li>
                  </ul>
                  <h4>Пример:</h4>
                  <p>Автомобиль едет 60 км/ч. Какое расстояние он проедет за 3 часа?</p>
                  <p>S = 60 × 3 = 180 км</p>`,
                  examples: ['Найди время, если S=120 км, v=60 км/ч', 'Найди скорость, если S=200 км, t=4 ч'],
                  completed: false,
                  difficulty: 'hard',
                  estimatedTime: 30
                }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Автомобиль едет со скоростью 80 км/ч. Какое расстояние он проедет за 2 часа?',
          options: ['40 км', '82 км', '160 км', '78 км'],
          correctAnswer: 2,
          explanation: 'S = v × t = 80 × 2 = 160 км',
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
          id: 'russian4-sec1',
          title: 'Морфология',
          description: 'Части речи',
          topics: [
            {
              id: 'russian4-sec1-t1',
              title: 'Склонение существительных',
              description: 'Три склонения',
              lessons: [
                {
                  id: 'russian4-sec1-t1-l1',
                  title: 'Три склонения',
                  description: 'Распределение по типам',
                  theory: `<h3>📝 Склонения существительных</h3>
                  <h4>1-е склонение:</h4>
                  <ul>
                    <li>Мужской род на -а, -я (дядя, папа)</li>
                    <li>Женский род на -а, -я (мама, земля)</li>
                  </ul>
                  <h4>2-е склонение:</h4>
                  <ul>
                    <li>Мужской род с нулевым окончанием (стол, конь)</li>
                    <li>Средний род на -о, -е (окно, поле)</li>
                  </ul>
                  <h4>3-е склонение:</h4>
                  <ul>
                    <li>Женский род с нулевым окончанием (ночь, мышь)</li>
                  </ul>`,
                  examples: ['Определи склонение: "книга"', 'Определи склонение: "стол"'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            },
            {
              id: 'russian4-sec1-t2',
              title: 'Спряжение глаголов',
              description: 'I и II спряжение',
              lessons: [
                {
                  id: 'russian4-sec1-t2-l1',
                  title: 'Два спряжения',
                  description: 'Личные окончания',
                  theory: `<h3>✏️ Спряжения глаголов</h3>
                  <h4>I спряжение (окончания -ешь, -ет, -ем, -ете, -ут/-ют):</h4>
                  <p>Глаголы на -еть, -ать, -оть, -ыть, -ть (кроме исключений)</p>
                  <h4>II спряжение (окончания -ишь, -ит, -им, -ите, -ат/-ят):</h4>
                  <p>Глаголы на -ить + исключения</p>
                  <h4>Исключения II спряжения:</h4>
                  <p>Гнать, дышать, держать, обидеть, слышать, видеть, ненавидеть, и зависеть, и вертеть, и смотреть, и терпеть</p>`,
                  examples: ['Определи спряжение: "читать"', 'Определи спряжение: "говорить"'],
                  completed: false,
                  difficulty: 'hard',
                  estimatedTime: 30
                }
              ]
            }
          ]
        },
        {
          id: 'russian4-sec2',
          title: 'Синтаксис',
          description: 'Предложение и его члены',
          topics: [
            {
              id: 'russian4-sec2-t1',
              title: 'Члены предложения',
              description: 'Главные и второстепенные',
              lessons: [
                {
                  id: 'russian4-sec2-t1-l1',
                  title: 'Подлежащее и сказуемое',
                  description: 'Грамматическая основа',
                  theory: `<h3>📝 Главные члены предложения</h3>
                  <h4>Подлежащее:</h4>
                  <ul>
                    <li>Отвечает на вопросы КТО? ЧТО?</li>
                    <li>Выражается существительным или местоимением</li>
                  </ul>
                  <h4>Сказуемое:</h4>
                  <ul>
                    <li>Отвечает на вопросы ЧТО ДЕЛАЕТ? и др.</li>
                    <li>Выражается глаголом</li>
                  </ul>
                  <h4>Пример:</h4>
                  <p><u>Мальчик</u> (подлежащее) <u>читает</u> (сказуемое) книгу.</p>`,
                  examples: ['Найди подлежащее: "Птицы летят на юг"', 'Найди сказуемое: "Солнце светит ярко"'],
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
          question: 'Какого склонения слово "мышь"?',
          options: ['1-го', '2-го', '3-го', 'Не склоняется'],
          correctAnswer: 2,
          explanation: 'Слово "мышь" — 3-го склонения (женский род с нулевым окончанием).',
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
      description: 'Былины, басни, сказки',
      sections: [
        {
          id: 'lit4-sec1',
          title: 'Устное народное творчество',
          description: 'Былины, сказки',
          topics: [
            {
              id: 'lit4-sec1-t1',
              title: 'Былины',
              description: 'Русские богатыри',
              lessons: [
                {
                  id: 'lit4-sec1-t1-l1',
                  title: 'Былина "Илья Муромец"',
                  description: 'Русский богатырь',
                  theory: `<h3>⚔️ Былины</h3>
                  <p>Былина — русский народный эпос о богатырях.</p>
                  <h4>Особенности былин:</h4>
                  <ul>
                    <li>Ритмичный стих</li>
                    <li>Герои — богатыри</li>
                    <li>Подвиги во славу Руси</li>
                    <li>Вымысел + историческая основа</li>
                  </ul>
                  <h4>Илья Муромец:</h4>
                  <ul>
                    <li>Русский богатырь</li>
                    <li>Защитник Русской земли</li>
                    <li>Сидел 33 года, потом получил силу</li>
                  </ul>`,
                  examples: ['Какие подвиги совершил Илья Муромец?', 'Чем былина отличается от сказки?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            }
          ]
        },
        {
          id: 'lit4-sec2',
          title: 'Детская литература',
          description: 'Произведения для детей',
          topics: [
            {
              id: 'lit4-sec2-t1',
              title: 'А.С. Пушкин',
              description: 'Сказки Пушкина',
              lessons: [
                {
                  id: 'lit4-sec2-t1-l1',
                  title: '"Сказка о золотом петушке"',
                  description: 'Анализ сказки',
                  theory: `<h3>📖 "Сказка о золотом петушке"</h3>
                  <h4>Автор:</h4>
                  <p>Александр Сергеевич Пушкин (1799-1837)</p>
                  <h4>Герои:</h4>
                  <ul>
                    <li>Царь Дадон</li>
                    <li>Золотой петушок</li>
                    <li>Звездочёт</li>
                    <li>Шамаханская царица</li>
                  </ul>
                  <h4>Главная мысль:</h4>
                  <p>Нужно держать слово и не забывать о благодарности.</p>`,
                  examples: ['Чему учит сказка?', 'Почему царь Дадон погиб?'],
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
          question: 'Кто написал "Сказку о золотом петушке"?',
          options: ['И.А. Крылов', 'А.С. Пушкин', 'П.П. Бажов', 'К.И. Чуковский'],
          correctAnswer: 1,
          explanation: '"Сказку о золотом петушке" написал Александр Сергеевич Пушкин.',
          difficulty: 'easy',
          points: 10
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
      description: 'Природные зоны, Солнечная система',
      sections: [
        {
          id: 'world4-sec1',
          title: 'Природные зоны',
          description: 'Зоны России',
          topics: [
            {
              id: 'world4-sec1-t1',
              title: 'Зоны России',
              description: 'Арктика, тундра, лес, степь',
              lessons: [
                {
                  id: 'world4-sec1-t1-l1',
                  title: 'Арктика и тундра',
                  description: 'Холодные зоны',
                  theory: `<h3>❄️ Арктика</h3>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>Северный Ледовитый океан</li>
                    <li>Полярный день и ночь</li>
                    <li>Ледяные пустыни</li>
                  </ul>
                  <h4>Животные:</h4>
                  <p>белый медведь, морж, тюлень, полярная сова</p>
                  
                  <h3>🌲 Тундра</h3>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>Вечная мерзлота</li>
                    <li>Карликовые деревья</li>
                    <li>Мхи и лишайники</li>
                  </ul>
                  <h4>Животные:</h4>
                  <p>северный олень, песец, куропатка</p>`,
                  examples: ['Какие животные живут в Арктике?', 'Что такое вечная мерзлота?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            }
          ]
        },
        {
          id: 'world4-sec2',
          title: 'Солнечная система',
          description: 'Планеты и космос',
          topics: [
            {
              id: 'world4-sec2-t1',
              title: 'Планеты',
              description: '8 планет Солнечной системы',
              lessons: [
                {
                  id: 'world4-sec2-t1-l1',
                  title: 'Планеты Солнечной системы',
                  description: 'От Меркурия до Нептуна',
                  theory: `<h3>🌌 Солнечная система</h3>
                  <h4>8 планет (по порядку от Солнца):</h4>
                  <ol>
                    <li>☿️ Меркурий — ближайшая к Солнцу</li>
                    <li>♀️ Венера — самая горячая</li>
                    <li>🌍 Земля — наш дом</li>
                    <li>♂️ Марс — красная планета</li>
                    <li>♃ Юпитер — самая большая</li>
                    <li>♄ Сатурн — с кольцами</li>
                    <li>♅ Уран</li>
                    <li>♆ Нептун — самая далёкая</li>
                  </ol>
                  <h4>Запоминалка:</h4>
                  <p>"Мы Все Знаем: Мама Юлит Сидит У Несмысляшки"</p>`,
                  examples: ['Какая планета самая большая?', 'Какая планета ближе к Солнцу?'],
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
          question: 'Какая планета самая большая?',
          options: ['Земля', 'Марс', 'Юпитер', 'Сатурн'],
          correctAnswer: 2,
          explanation: 'Юпитер — самая большая планета Солнечной системы.',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    // ==================== АНГЛИЙСКИЙ ЯЗЫК ====================
    {
      id: 'english4',
      title: 'Английский язык',
      icon: <Languages className="w-5 h-5" />,
      color: 'text-cyan-400',
      gradient: 'from-cyan-500 to-blue-500',
      description: 'Past Simple, Future Simple, модальные глаголы',
      sections: [
        {
          id: 'english4-sec1',
          title: 'Грамматика',
          description: 'Времена глагола',
          topics: [
            {
              id: 'english4-sec1-t1',
              title: 'Past Simple',
              description: 'Простое прошедшее время',
              lessons: [
                {
                  id: 'english4-sec1-t1-l1',
                  title: 'Правильные глаголы',
                  description: 'Окончание -ed',
                  theory: `<h3>📖 Past Simple — правильные глаголы</h3>
                  <h4>Образование:</h4>
                  <p>Глагол + -ed</p>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
work → worked    (работал)
play → played    (играл)
watch → watched  (смотрел)
                  </pre>
                  <h4>Правила написания:</h4>
                  <ul>
                    <li>live → lived (e + d)</li>
                    <li>study → studied (y → i + ed)</li>
                    <li>stop → stopped (удвоение)</li>
                  </ul>`,
                  examples: ['Образуй форму: "clean"', 'Образуй форму: "cry"'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                },
                {
                  id: 'english4-sec1-t1-l2',
                  title: 'Неправильные глаголы',
                  description: 'Вторая форма',
                  theory: `<h3>📝 Неправильные глаголы в Past Simple</h3>
                  <h4>Популярные неправильные глаголы:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
go → went       (ходить → ходил)
see → saw       (видеть → видел)
eat → ate       (есть → ел)
have → had      (иметь → имел)
make → made     (делать → делал)
come → came     (приходить → пришёл)
take → took     (брать → взял)
give → gave     (давать → дал)
                  </pre>
                  <h4>Запомни:</h4>
                  <p>Неправильные глаголы нужно учить наизусть!</p>`,
                  examples: ['Назови 2-ю форму: "go"', 'Назови 2-ю форму: "take"'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 30
                }
              ]
            },
            {
              id: 'english4-sec1-t2',
              title: 'Future Simple',
              description: 'Простое будущее время',
              lessons: [
                {
                  id: 'english4-sec1-t2-l1',
                  title: 'Will + глагол',
                  description: 'Действия в будущем',
                  theory: `<h3>🔮 Future Simple</h3>
                  <h4>Образование:</h4>
                  <p>will + глагол (без to)</p>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
I will play    — Я буду играть
You will read  — Ты будешь читать
He will run    — Он будет бегать
                  </pre>
                  <h4>Когда используем:</h4>
                  <ul>
                    <li>Предсказания: It will rain tomorrow.</li>
                    <li>Мгновенные решения: I will help you!</li>
                    <li>Обещания: I will call you.</li>
                  </ul>
                  <h4>Сокращения:</h4>
                  <p>I'll, You'll, He'll, She'll, We'll, They'll</p>`,
                  examples: ['Переведи: "Я буду читать"', 'Переведи: "Она поможет нам"'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            }
          ]
        },
        {
          id: 'english4-sec2',
          title: 'Модальные глаголы',
          description: 'Can, Must, Should',
          topics: [
            {
              id: 'english4-sec2-t1',
              title: 'Can, Must, Should',
              description: 'Выражение возможности и долженствования',
              lessons: [
                {
                  id: 'english4-sec2-t1-l1',
                  title: 'Глагол Can',
                  description: 'Возможность и умение',
                  theory: `<h3>💪 Modal verb CAN</h3>
                  <h4>Значения:</h4>
                  <ul>
                    <li>Умение: I can swim. (Я умею плавать)</li>
                    <li>Возможность: You can go. (Ты можешь идти)</li>
                    <li>Просьба: Can you help me? (Можешь помочь?)</li>
                  </ul>
                  <h4>Формы:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
+ I can swim.
? Can you swim?
- I cannot (can't) swim.
                  </pre>
                  <h4>Важно:</h4>
                  <p>После can идёт глагол без to!</p>`,
                  examples: ['Переведи: "Я умею читать"', 'Составь вопрос: "ты можешь помочь?"'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                },
                {
                  id: 'english4-sec2-t1-l2',
                  title: 'Глаголы Must и Should',
                  description: 'Долженствование и совет',
                  theory: `<h3>⚠️ Must vs Should</h3>
                  <h4>MUST — должен (обязательно):</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
You must do homework. (Ты должен делать д/з)
You mustn't run here. (Здесь нельзя бегать)
                  </pre>
                  <h4>SHOULD — следует (совет):</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
You should sleep more. (Тебе следует больше спать)
You shouldn't eat much. (Не стоит много есть)
                  </pre>
                  <h4>Разница:</h4>
                  <p>Must = обязанность, Should = рекомендация</p>`,
                  examples: ['Выбери: "You ___ go to school" (обязательно)', 'Переведи: "Тебе следует отдохнуть"'],
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
          question: 'Какая форма Past Simple у глагола "go"?',
          options: ['goed', 'gone', 'went', 'going'],
          correctAnswer: 2,
          explanation: 'Глагол "go" — неправильный, его вторая форма "went".',
          difficulty: 'medium',
          points: 15
        },
        {
          id: 'q2',
          question: 'Выбери правильный перевод: "I will help you"',
          options: ['Я помог тебе', 'Я помогаю тебе', 'Я помогу тебе', 'Я помогал тебе'],
          correctAnswer: 2,
          explanation: 'Will + глагол = будущее время. "I will help" = "Я помогу".',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'q3',
          question: 'После модальных глаголов (can, must, should) идёт:',
          options: ['глагол с to', 'глагол без to', 'глагол с -ing', 'только существительное'],
          correctAnswer: 1,
          explanation: 'После модальных глаголов всегда идёт глагол в начальной форме без to.',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    // ==================== ИЗО ====================
    {
      id: 'art4',
      title: 'Изобразительное искусство',
      icon: <Palette className="w-5 h-5" />,
      color: 'text-pink-400',
      gradient: 'from-pink-500 to-rose-500',
      description: 'История искусства, архитектура, жанры живописи',
      sections: [
        {
          id: 'art4-sec1',
          title: 'Жанры живописи',
          description: 'Виды картин',
          topics: [
            {
              id: 'art4-sec1-t1',
              title: 'Основные жанры',
              description: 'Портрет, пейзаж, натюрморт',
              lessons: [
                {
                  id: 'art4-sec1-t1-l1',
                  title: 'Портрет',
                  description: 'Изображение человека',
                  theory: `<h3>👤 Портрет</h3>
                  <p>Портрет — изображение человека или группы людей.</p>
                  <h4>Виды портретов:</h4>
                  <ul>
                    <li>Парадный — важный человек в богатой одежде</li>
                    <li>Камерный — домашний, уютный</li>
                    <li>Автопортрет — художник рисует себя</li>
                    <li>Групповой — несколько людей вместе</li>
                  </ul>
                  <h4>Известные портретисты:</h4>
                  <ul>
                    <li>И.Е. Репин — "Бурлаки на Волге"</li>
                    <li>В.А. Серов — "Девочка с персиками"</li>
                    <li>Леонардо да Винчи — "Мона Лиза"</li>
                  </ul>`,
                  examples: ['Какой вид портрета "Мона Лиза"?', 'Кто написал "Девочку с персиками"?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                },
                {
                  id: 'art4-sec1-t1-l2',
                  title: 'Пейзаж и натюрморт',
                  description: 'Природа и предметы',
                  theory: `<h3>🏞️ Пейзаж</h3>
                  <p>Пейзаж — изображение природы.</p>
                  <h4>Виды пейзажей:</h4>
                  <ul>
                    <li>Сельский — деревня, поля</li>
                    <li>Городской — улицы, здания</li>
                    <li>Морской — море, корабли</li>
                  </ul>
                  <h4>Известные пейзажисты:</h4>
                  <p>И.И. Левитан, И.И. Шишкин, А.К. Саврасов</p>
                  
                  <h3>🍎 Натюрморт</h3>
                  <p>Натюрморт — изображение предметов (цветы, фрукты, посуда).</p>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>Предметы неподвижны</li>
                    <li>Важна композиция</li>
                    <li>Игра света и тени</li>
                  </ul>`,
                  examples: ['Чем отличается пейзаж от натюрморта?', 'Назови русского художника-пейзажиста'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 25
                }
              ]
            }
          ]
        },
        {
          id: 'art4-sec2',
          title: 'Архитектура',
          description: 'Искусство строить',
          topics: [
            {
              id: 'art4-sec2-t1',
              title: 'Русское зодчество',
              description: 'Храмы и соборы',
              lessons: [
                {
                  id: 'art4-sec2-t1-l1',
                  title: 'Древнерусские храмы',
                  description: 'Шедевры архитектуры',
                  theory: `<h3>🏛️ Русское зодчество</h3>
                  <h4>Особенности русских храмов:</h4>
                  <ul>
                    <li>Луковичные купола</li>
                    <li>Крест на куполе</li>
                    <li>Яркие цвета</li>
                    <li>Украшения на стенах</li>
                  </ul>
                  <h4>Известные храмы:</h4>
                  <ul>
                    <li>🏛️ Собор Василия Блаженного (Москва) — 9 куполов</li>
                    <li>⛪ Храм Христа Спасителя (Москва)</li>
                    <li>🏰 Церковь Покрова на Нерли — белый камень</li>
                  </ul>
                  <h4>Купола:</h4>
                  <p>Золотые — символ небесного света, синие со звёздами — Богородица</p>`,
                  examples: ['Сколько куполов у собора Василия Блаженного?', 'Где находится церковь Покрова на Нерли?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 30
                }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Как называется жанр живописи, изображающий природу?',
          options: ['Портрет', 'Натюрморт', 'Пейзаж', 'Батальный'],
          correctAnswer: 2,
          explanation: 'Пейзаж — это жанр живописи, изображающий природные виды.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'q2',
          question: 'Кто написал картину "Девочка с персиками"?',
          options: ['И.И. Левитан', 'В.А. Серов', 'И.Е. Репин', 'И.И. Шишкин'],
          correctAnswer: 1,
          explanation: 'Картина "Девочка с персиками" написана Валентином Александровичем Серовым в 1887 году.',
          difficulty: 'medium',
          points: 15
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
      description: 'Симфонический оркестр, музыкальные жанры',
      sections: [
        {
          id: 'music4-sec1',
          title: 'Симфонический оркестр',
          description: 'Инструменты и группы',
          topics: [
            {
              id: 'music4-sec1-t1',
              title: 'Группы инструментов',
              description: 'Семейства оркестра',
              lessons: [
                {
                  id: 'music4-sec1-t1-l1',
                  title: 'Струнные и духовые',
                  description: 'Основные группы',
                  theory: `<h3>🎻 Струнные инструменты</h3>
                  <h4>Инструменты:</h4>
                  <ul>
                    <li>🎻 Скрипка — королева оркестра</li>
                    <li>🎻 Альт — ниже скрипки</li>
                    <li>🎸 Виолончель — большой, играют сидя</li>
                    <li>🎺 Контрабас — самый большой</li>
                  </ul>
                  <h4>Особенности:</h4>
                  <p>Звук извлекается смычком или пальцами (пиццикато).</p>
                  
                  <h3>🎺 Духовые инструменты</h3>
                  <h4>Деревянные:</h4>
                  <p>Флейта, гобой, кларнет, фагот</p>
                  <h4>Медные:</h4>
                  <p>Труба, валторна, тромбон, туба</p>`,
                  examples: ['Какой инструмент самый большой в струнной группе?', 'Назови деревянный духовой инструмент'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                },
                {
                  id: 'music4-sec1-t1-l2',
                  title: 'Ударные инструменты',
                  description: 'Ритм оркестра',
                  theory: `<h3>🥁 Ударные инструменты</h3>
                  <h4>С определённой высотой звука:</h4>
                  <ul>
                    <li>🎹 Ксилофон — деревянные пластины</li>
                    <li>🔔 Колокольчики</li>
                    <li>🥁 Литавры — можно настраивать</li>
                  </ul>
                  <h4>Без определённой высоты:</h4>
                  <ul>
                    <li>🥁 Малый барабан</li>
                    <li>🥁 Большой барабан</li>
                    <li>🔔 Тарелки</li>
                    <li>🎭 Бубен, треугольник</li>
                  </ul>
                  <h4>Роль в оркестре:</h4>
                  <p>Создают ритм, эффекты, акценты</p>`,
                  examples: ['Какой ударный инструмент имеет определённую высоту звука?', 'Для чего нужны ударные в оркестре?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            }
          ]
        },
        {
          id: 'music4-sec2',
          title: 'Музыкальные жанры',
          description: 'Опера, балет, симфония',
          topics: [
            {
              id: 'music4-sec2-t1',
              title: 'Опера и балет',
              description: 'Музыкальный театр',
              lessons: [
                {
                  id: 'music4-sec2-t1-l1',
                  title: 'Опера',
                  description: 'Музыка и пение',
                  theory: `<h3>🎭 Опера</h3>
                  <p>Опера — музыкально-драматическое произведение для театра.</p>
                  <h4>Что входит в оперу:</h4>
                  <ul>
                    <li>🎵 Ария — сольная песня героя</li>
                    <li>🗣️ Речитатив — пение-разговор</li>
                    <li>👥 Хор — коллективное пение</li>
                    <li>🎹 Оркестр — музыкальное сопровождение</li>
                  </ul>
                  <h4>Известные русские оперы:</h4>
                  <ul>
                    <li>🎼 П.И. Чайковский — "Евгений Онегин"</li>
                    <li>🎼 М.П. Мусоргский — "Борис Годунов"</li>
                    <li>🎼 Н.А. Римский-Корсаков — "Снегурочка"</li>
                  </ul>`,
                  examples: ['Что такое ария?', 'Кто написал оперу "Евгений Онегин"?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                },
                {
                  id: 'music4-sec2-t1-l2',
                  title: 'Балет',
                  description: 'Танец и музыка',
                  theory: `<h3>🩰 Балет</h3>
                  <p>Балет — музыкальный спектакль с танцем и пантомимой.</p>
                  <h4>Особенности балета:</h4>
                  <ul>
                    <li>Классический танец</li>
                    <li>Костюмы и декорации</li>
                    <li>Сюжет (либретто)</li>
                    <li>Музыка без слов</li>
                  </ul>
                  <h4>Известные балеты П.И. Чайковского:</h4>
                  <ul>
                    <li>🦢 "Лебединое озеро"</li>
                    <li>🧚 "Спящая красавица"</li>
                    <li>🍬 "Щелкунчик"</li>
                  </ul>
                  <h4>Танцы в балете:</h4>
                  <p>Па-де-де, вариации, кордебалет</p>`,
                  examples: ['Назови балет Чайковского', 'Чем балет отличается от оперы?'],
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
          question: 'Какой инструмент называют "королевой оркестра"?',
          options: ['Флейта', 'Скрипка', 'Рояль', 'Труба'],
          correctAnswer: 1,
          explanation: 'Скрипку называют королевой оркестра за её певучий звук и ведущую роль.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'q2',
          question: 'Кто написал балет "Щелкунчик"?',
          options: ['М.П. Мусоргский', 'Н.А. Римский-Корсаков', 'П.И. Чайковский', 'С.С. Прокофьев'],
          correctAnswer: 2,
          explanation: 'Балет "Щелкунчик" написал Пётр Ильич Чайковский.',
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
      color: 'text-orange-400',
      gradient: 'from-orange-500 to-amber-500',
      description: 'Спортивные игры, соревнования, Олимпийские игры',
      sections: [
        {
          id: 'pe4-sec1',
          title: 'Спортивные игры',
          description: 'Командные виды спорта',
          topics: [
            {
              id: 'pe4-sec1-t1',
              title: 'Волейбол',
              description: 'Командная игра с мячом',
              lessons: [
                {
                  id: 'pe4-sec1-t1-l1',
                  title: 'Правила волейбола',
                  description: 'Основы игры',
                  theory: `<h3>🏐 Волейбол</h3>
                  <h4>Основные правила:</h4>
                  <ul>
                    <li>2 команды по 6 человек</li>
                    <li>Сетка высотой 2,43 м (мальчики), 2,24 м (девочки)</li>
                    <li>Мяч перебрасывается через сетку</li>
                    <li>3 касания на команду</li>
                    <li>Игра до 25 очков</li>
                  </ul>
                  <h4>Техника:</h4>
                  <ul>
                    <li>Передача двумя руками сверху</li>
                    <li>Передача снизу</li>
                    <li>Подача</li>
                    <li>Блок</li>
                  </ul>`,
                  examples: ['Сколько человек в команде?', 'Сколько касаний разрешено?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                },
                {
                  id: 'pe4-sec1-t1-l2',
                  title: 'Баскетбол',
                  description: 'Игра с корзиной',
                  theory: `<h3>🏀 Баскетбол</h3>
                  <h4>Основные правила:</h4>
                  <ul>
                    <li>2 команды по 5 человек</li>
                    <li>Корзина на высоте 3,05 м</li>
                    <li>Мяч ведут руками (дриблинг)</li>
                    <li>Нельзя бежать с мячом без ударов</li>
                  </ul>
                  <h4>Очки:</h4>
                  <ul>
                    <li>Штрафной бросок — 1 очко</li>
                    <li>Бросок со средней дистанции — 2 очка</li>
                    <li>Бросок из-за дуги — 3 очка</li>
                  </ul>
                  <h4>Техника:</h4>
                  <p>Ведение, передача, бросок, защита</p>`,
                  examples: ['Сколько игроков на площадке?', 'Какова высота корзины?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            },
            {
              id: 'pe4-sec1-t2',
              title: 'Футбол',
              description: 'Самый популярный вид спорта',
              lessons: [
                {
                  id: 'pe4-sec1-t2-l1',
                  title: 'Правила футбола',
                  description: 'Основы игры',
                  theory: `<h3>⚽ Футбол</h3>
                  <h4>Основные правила:</h4>
                  <ul>
                    <li>2 команды по 11 человек</li>
                    <li>Поле 90-120 м × 45-90 м</li>
                    <li>Ворота 7,32 м × 2,44 м</li>
                    <li>Игра ногами, вратарь руками</li>
                    <li>2 тайма по 45 минут</li>
                  </ul>
                  <h4>Позиции:</h4>
                  <ul>
                    <li>🧤 Вратарь — защищает ворота</li>
                    <li>🛡️ Защитники — защита</li>
                    <li>⚙️ Полузащитники — связь</li>
                    <li>⚔️ Нападающие — атака</li>
                  </ul>`,
                  examples: ['Сколько игроков в футбольной команде?', 'Кто может играть руками?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            }
          ]
        },
        {
          id: 'pe4-sec2',
          title: 'Олимпийские игры',
          description: 'История и традиции',
          topics: [
            {
              id: 'pe4-sec2-t1',
              title: 'История Олимпиад',
              description: 'От Древней Греции до наших дней',
              lessons: [
                {
                  id: 'pe4-sec2-t1-l1',
                  title: 'Древние Олимпийские игры',
                  description: 'Рождение традиций',
                  theory: `<h3>🏛️ Древние Олимпийские игры</h3>
                  <h4>История:</h4>
                  <ul>
                    <li>Начались в 776 г. до н.э. в Греции</li>
                    <li>Проводились в городе Олимпия</li>
                    <li>Проходили каждые 4 года</li>
                    <li>Длились 5 дней</li>
                  </ul>
                  <h4>Виды состязаний:</h4>
                  <ul>
                    <li>🏃 Бег</li>
                    <li>🤼 Борьба</li>
                    <li>🏇 Гонки на колесницах</li>
                    <li>🛡️ Пятиборье</li>
                  </ul>
                  <h4>Традиции:</h4>
                  <p>Олимпийский огонь, оливковый венок, священное перемирие</p>`,
                  examples: ['Где проходили древние Олимпиады?', 'Что получал победитель?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                },
                {
                  id: 'pe4-sec2-t1-l2',
                  title: 'Современные Олимпиады',
                  description: 'Олимпийское движение',
                  theory: `<h3>🏅 Современные Олимпийские игры</h3>
                  <h4>Возрождение:</h4>
                  <ul>
                    <li>1896 г. — первые современные Олимпиады</li>
                    <li>Пьер де Кубертен — основатель</li>
                    <li>Афины — место первой Олимпиады</li>
                  </ul>
                  <h4>Символы:</h4>
                  <ul>
                    <li>🔥 Олимпийский огонь</li>
                    <li>⭕ 5 колец — 5 континентов</li>
                    <li>🕊️ Белый голубь — мир</li>
                    <li>🥇🥈🥉 Медали</li>
                  </ul>
                  <h4>Олимпийский девиз:</h4>
                  <p>"Быстрее, выше, сильнее — вместе!"</p>`,
                  examples: ['Кто возродил Олимпийские игры?', 'Что означают 5 колец?'],
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
          question: 'Сколько игроков в команде в баскетболе?',
          options: ['6', '5', '11', '7'],
          correctAnswer: 1,
          explanation: 'В баскетбольной команде на площадке 5 игроков.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'q2',
          question: 'В каком году возродились современные Олимпийские игры?',
          options: ['1776', '1896', '1900', '1912'],
          correctAnswer: 1,
          explanation: 'Современные Олимпийские игры возродились в 1896 году в Афинах.',
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
      color: 'text-amber-600',
      gradient: 'from-amber-600 to-yellow-500',
      description: 'Обработка материалов, конструирование',
      sections: [
        {
          id: 'tech4-sec1',
          title: 'Обработка материалов',
          description: 'Работа с бумагой, деревом',
          topics: [
            {
              id: 'tech4-sec1-t1',
              title: 'Работа с бумагой',
              description: 'Техники и приёмы',
              lessons: [
                {
                  id: 'tech4-sec1-t1-l1',
                  title: 'Оригами',
                  description: 'Искусство складывания',
                  theory: `<h3>📄 Оригами</h3>
                  <p>Оригами — японское искусство складывания фигурок из бумаги.</p>
                  <h4>Базовые формы:</h4>
                  <ul>
                    <li>📐 Квадрат</li>
                    <li>📐 Треугольник</li>
                    <li>📐 Бумажный самолёт</li>
                    <li>🐸 Прыгающая лягушка</li>
                  </ul>
                  <h4>Правила:</h4>
                  <ul>
                    <li>Используй квадратный лист</li>
                    <li>Складывай чётко по линиям</li>
                    <li>Не используй клей и ножницы</li>
                  </ul>
                  <h4>Уровни сложности:</h4>
                  <p>Простой → Средний → Сложный → Мастер</p>`,
                  examples: ['Какая базовая форма самая простая?', 'Можно ли использовать клей в оригами?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 30
                },
                {
                  id: 'tech4-sec1-t1-l2',
                  title: 'Аппликация',
                  description: 'Вырезание и наклеивание',
                  theory: `<h3>✂️ Аппликация</h3>
                  <p>Аппликация — создание изображений из наклеенных кусочков.</p>
                  <h4>Виды аппликации:</h4>
                  <ul>
                    <li>🎨 Плоская — из плоских деталей</li>
                    <li>🎭 Объёмная — с элементами выступающими</li>
                    <li>🧩 Мозаичная — из мелких кусочков</li>
                    <li>✂️ Симметричная — из сложенной бумаги</li>
                  </ul>
                  <h4>Материалы:</h4>
                  <p>Цветная бумага, картон, клей, ножницы</p>
                  <h4>Техника безопасности:</h4>
                  <p>Ножницы передавать закрытыми, не держать остриём вверх!</p>`,
                  examples: ['Какие виды аппликации ты знаешь?', 'Как правильно передавать ножницы?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 25
                }
              ]
            }
          ]
        },
        {
          id: 'tech4-sec2',
          title: 'Конструирование',
          description: 'Создание моделей',
          topics: [
            {
              id: 'tech4-sec2-t1',
              title: 'Работа с конструктором',
              description: 'Сборка моделей',
              lessons: [
                {
                  id: 'tech4-sec2-t1-l1',
                  title: 'Виды конструкторов',
                  description: 'От LEGO до металлического',
                  theory: `<h3>🔧 Конструкторы</h3>
                  <h4>Виды конструкторов:</h4>
                  <ul>
                    <li>🧱 Пластиковый (LEGO) — универсальный</li>
                    <li>⚙️ Металлический — механизмы</li>
                    <li>🪵 Деревянный — природный материал</li>
                    <li>📎 Бумажный — модели техники</li>
                  </ul>
                  <h4>Основные детали:</h4>
                  <ul>
                    <li>🧱 Блоки, пластины</li>
                    <li>⚙️ Колёса, оси</li>
                    <li>🔩 Винты, гайки (металлический)</li>
                    <li>🔌 Соединительные элементы</li>
                  </ul>
                  <h4>Этапы работы:</h4>
                  <p>Изучи инструкцию → Отсортируй детали → Собери по шагам</p>`,
                  examples: ['Какие виды конструкторов ты знаешь?', 'С чего начинается сборка модели?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            },
            {
              id: 'tech4-sec2-t2',
              title: 'Простые механизмы',
              description: 'Рычаг, блок, ворот',
              lessons: [
                {
                  id: 'tech4-sec2-t2-l1',
                  title: 'Рычаг и его применение',
                  description: 'Простые механизмы вокруг нас',
                  theory: `<h3>⚖️ Рычаг</h3>
                  <p>Рычаг — твёрдое тело, вращающееся вокруг точки опоры.</p>
                  <h4>Составные части:</h4>
                  <ul>
                    <li>📍 Точка опоры</li>
                    <li>💪 Точка приложения силы</li>
                    <li>📦 Точка нагрузки</li>
                  </ul>
                  <h4>Примеры рычагов:</h4>
                  <ul>
                    <li>⚖️ Качели</li>
                    <li>🔨 Ножницы</li>
                    <li>🥄 Ложка</li>
                    <li>🚪 Дверь</li>
                    <li>🎣 Весло</li>
                  </ul>
                  <h4>Правило рычага:</h4>
                  <p>Рычаг в равновесии, когда сила × плечо равны с обеих сторон</p>`,
                  examples: ['Приведи пример рычага', 'Из чего состоит рычаг?'],
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
          question: 'Что такое оригами?',
          options: ['Вид вышивки', 'Искусство складывания из бумаги', 'Вид рисования', 'Техника вырезания'],
          correctAnswer: 1,
          explanation: 'Оригами — японское искусство складывания фигурок из бумаги без клея и ножниц.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'q2',
          question: 'Какое из перечисленных является примером рычага?',
          options: ['Колесо', 'Ножницы', 'Шар', 'Кубик'],
          correctAnswer: 1,
          explanation: 'Ножницы — это рычаг, состоящий из двух плечей и точки опоры (винт).',
          difficulty: 'medium',
          points: 15
        }
      ]
    },
    // ==================== ОРКСЭ ====================
    {
      id: 'ethics4',
      title: 'ОРКСЭ',
      icon: <HeartHandshake className="w-5 h-5" />,
      color: 'text-rose-500',
      gradient: 'from-rose-500 to-red-500',
      description: 'Основы религиозных культур и светской этики',
      sections: [
        {
          id: 'ethics4-sec1',
          title: 'Основы мировых религий',
          description: 'Культурные традиции народов',
          topics: [
            {
              id: 'ethics4-sec1-t1',
              title: 'Мировые религии',
              description: 'Христианство, ислам, буддизм, иудаизм',
              lessons: [
                {
                  id: 'ethics4-sec1-t1-l1',
                  title: 'Христианство',
                  description: 'Православная культура России',
                  theory: `<h3>✝️ Христианство</h3>
                  <p>Христианство — одна из мировых религий, основанная на учении Иисуса Христа.</p>
                  <h4>Основные понятия:</h4>
                  <ul>
                    <li>⛪ Храм — место молитвы</li>
                    <li>🙏 Икона — священное изображение</li>
                    <li>🕯️ Свеча — символ молитвы</li>
                    <li>✝️ Крест — главный символ</li>
                  </ul>
                  <h4>Православные праздники:</h4>
                  <ul>
                    <li>🎄 Рождество — рождение Иисуса (7 января)</li>
                    <li>🐣 Пасха — воскресение Христа</li>
                    <li>⛪ Крещение</li>
                  </ul>
                  <h4>Главные ценности:</h4>
                  <p>Любовь, милосердие, прощение, помощь ближнему</p>`,
                  examples: ['Назови главный символ христианства', 'Какой христианский праздник 7 января?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 30
                },
                {
                  id: 'ethics4-sec1-t1-l2',
                  title: 'Ислам и буддизм',
                  description: 'Культурные традиции',
                  theory: `<h3>☪️ Ислам</h3>
                  <p>Ислам — религия, основанная на учении пророка Мухаммеда.</p>
                  <h4>Основные понятия:</h4>
                  <ul>
                    <li>🕌 Мечеть — место молитвы</li>
                    <li>📖 Коран — священная книга</li>
                    <li>🕋 Мекка — священный город</li>
                  </ul>
                  
                  <h3>☸️ Буддизм</h3>
                  <p>Буддизм — одна из древнейших мировых религий.</p>
                  <h4>Основные понятия:</h4>
                  <ul>
                    <li>🏛️ Ступа — священное сооружение</li>
                    <li>🧘 Медитация — духовная практика</li>
                    <li>☸️ Дхармачакра — колесо закона</li>
                  </ul>
                  <h4>Ценности буддизма:</h4>
                  <p>Ненасилие, сострадание, гармония с природой</p>`,
                  examples: ['Как называется священная книга ислама?', 'Что такое медитация?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            }
          ]
        },
        {
          id: 'ethics4-sec2',
          title: 'Нравственные ценности',
          description: 'Мораль и этика',
          topics: [
            {
              id: 'ethics4-sec2-t1',
              title: 'Добродетели',
              description: 'Что такое хорошо и плохо',
              lessons: [
                {
                  id: 'ethics4-sec2-t1-l1',
                  title: 'Добро и зло',
                  description: 'Нравственный выбор',
                  theory: `<h3>💫 Добро и зло</h3>
                  <h4>Добро — это:</h4>
                  <ul>
                    <li>❤️ Помощь другим</li>
                    <li>🤝 Честность</li>
                    <li>😊 Добрые поступки</li>
                    <li>💪 Справедливость</li>
                  </ul>
                  <h4>Зло — это:</h4>
                  <ul>
                    <li>💔 Причинение вреда</li>
                    <li>🤥 Обман</li>
                    <li>😠 Жестокость</li>
                    <li>👎 Предательство</li>
                  </ul>
                  <h4>Нравственный выбор:</h4>
                  <p>Каждый человек выбирает между добром и злом. Важно поступать по совести!</p>`,
                  examples: ['Приведи пример доброго поступка', 'Что значит "поступить по совести"?'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                },
                {
                  id: 'ethics4-sec2-t1-l2',
                  title: 'Золотое правило нравственности',
                  description: 'Относись к другим так, как хочешь, чтобы относились к тебе',
                  theory: `<h3>⭐ Золотое правило нравственности</h3>
                  <h4>Правило:</h4>
                  <p><em>"Относись к другим так, как ты хотел бы, чтобы относились к тебе"</em></p>
                  <h4>Что это значит:</h4>
                  <ul>
                    <li>Не делай другим того, что не хочешь себе</li>
                    <li>Помогай, если хочешь, чтобы помогали тебе</li>
                    <li>Будь честен, если хочешь честности</li>
                    <li>Уважай других, если хочешь уважения</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <ul>
                    <li>Не обзывай — и тебя не обидят</li>
                    <li>Помоги другу — и он поможет тебе</li>
                    <li>Будь вежлив — и к тебе будут вежливы</li>
                  </ul>`,
                  examples: ['Сформулируй золотое правило', 'Приведи пример применения правила'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 20
                }
              ]
            },
            {
              id: 'ethics4-sec2-t2',
              title: 'Семейные ценности',
              description: 'Традиции и отношения',
              lessons: [
                {
                  id: 'ethics4-sec2-t2-l1',
                  title: 'Семья и её ценности',
                  description: 'Любовь, уважение, забота',
                  theory: `<h3>👨‍👩‍👧‍👦 Семейные ценности</h3>
                  <h4>Что такое семья:</h4>
                  <p>Семья — это люди, связанные любовью, заботой и родством.</p>
                  <h4>Ценности семьи:</h4>
                  <ul>
                    <li>❤️ Любовь</li>
                    <li>🤝 Уважение</li>
                    <li>💪 Поддержка</li>
                    <li>🏠 Забота о доме</li>
                    <li>📚 Традиции</li>
                  </ul>
                  <h4>Роль каждого в семье:</h4>
                  <ul>
                    <li>👨‍👩‍👧 Родители — забота, воспитание</li>
                    <li>👦👧 Дети — уважение, помощь</li>
                    <li>👴👵 Бабушка и дедушка — мудрость, опыт</li>
                  </ul>
                  <h4>Семейные традиции:</h4>
                  <p>Совместные праздники, обеды, прогулки, чтение</p>`,
                  examples: ['Назови семейные ценности', 'Как ты можешь помочь семье?'],
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
          question: 'Как называется священная книга ислама?',
          options: ['Библия', 'Коран', 'Тора', 'Веды'],
          correctAnswer: 1,
          explanation: 'Коран — священная книга ислама, содержащая откровения пророка Мухаммеда.',
          difficulty: 'medium',
          points: 15
        },
        {
          id: 'q2',
          question: 'В чём суть золотого правила нравственности?',
          options: [
            'Делай что хочешь',
            'Относись к другим так, как хочешь, чтобы относились к тебе',
            'Думай только о себе',
            'Никому не верь'
          ],
          correctAnswer: 1,
          explanation: 'Золотое правило учит относиться к другим с таким же уважением, какого мы хотим для себя.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'q3',
          question: 'Какой христианский праздник отмечается 7 января?',
          options: ['Пасха', 'Крещение', 'Рождество', 'Троица'],
          correctAnswer: 2,
          explanation: 'Рождество Христово — праздник рождения Иисуса Христа, отмечается 7 января.',
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
      color: 'text-red-500',
      gradient: 'from-red-600 to-orange-600',
      description: 'Основы безопасности жизнедеятельности',
      sections: [
        {
          id: 'safety4-sec1',
          title: 'Безопасность на улице',
          description: 'Правила поведения',
          topics: [
            {
              id: 'safety4-sec1-t1',
              title: 'Безопасность на воде',
              description: 'Правила поведения у воды',
              lessons: [
                {
                  id: 'safety4-sec1-t1-l1',
                  title: 'Правила поведения на воде',
                  description: 'Как купаться безопасно',
                  theory: `<h3>🏊 Правила безопасности на воде</h3>
                  <h4>Где можно купаться:</h4>
                  <ul>
                    <li>✅ Только в специально отведённых местах</li>
                    <li>✅ Под присмотром взрослых</li>
                    <li>✅ В хорошую погоду</li>
                  </ul>
                  <h4>Запрещается:</h4>
                  <ul>
                    <li>❌ Купаться в незнакомых местах</li>
                    <li>❌ Заплывать за буйки</li>
                    <li>❌ Прыгать в воду в незнакомых местах</li>
                    <li>❌ Купаться в шторм</li>
                  </ul>
                  <h4>Если тонет человек:</h4>
                  <p>Зови взрослых, брось спасательный круг, позвони 112!</p>`,
                  examples: ['Где можно купаться?', 'Что делать, если кто-то тонет?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 20
                }
              ]
            }
          ]
        },
        {
          id: 'safety4-sec2',
          title: 'Первая помощь',
          description: 'Помощь при травмах',
          topics: [
            {
              id: 'safety4-sec2-t1',
              title: 'Оказание первой помощи',
              description: 'Базовые навыки',
              lessons: [
                {
                  id: 'safety4-sec2-t1-l1',
                  title: 'Ожоги и порезы',
                  description: 'Первая помощь',
                  theory: `<h3>🩹 Первая помощь при ожогах</h3>
                  <h4>Действия:</h4>
                  <ol>
                    <li>Охладить место ожога под проточной водой 15-20 минут</li>
                    <li>Наложить чистую повязку</li>
                    <li>Обратиться к врачу</li>
                  </ol>
                  <h4>⚠️ Нельзя:</h4>
                  <ul>
                    <li>Мазать маслом или жиром</li>
                    <li>Прокалывать пузыри</li>
                    <li>Отрывать прилипшую одежду</li>
                  </ul>
                  <h3>🔪 При порезах:</h3>
                  <ol>
                    <li>Промыть чистой водой</li>
                    <li>Обработать перекисью водорода</li>
                    <li>Наложить повязку</li>
                  </ol>`,
                  examples: ['Что делать при ожоге?', 'Чем обработать порез?'],
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
          question: 'Что нужно сделать при ожоге в первую очередь?',
          options: ['Смазать маслом', 'Охладить водой', 'Наложить повязку', 'Проколоть пузырь'],
          correctAnswer: 1,
          explanation: 'Сначала нужно охладить место ожога под проточной водой 15-20 минут.',
          difficulty: 'medium',
          points: 15
        },
        {
          id: 'q2',
          question: 'Где можно купаться?',
          options: ['В любом водоёме', 'В специально отведённых местах', 'Везде, где глубоко', 'В любом месте с мостками'],
          correctAnswer: 1,
          explanation: 'Купаться можно только в специально отведённых местах под присмотром взрослых.',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    // ==================== ИНФОРМАТИКА ====================
    {
      id: 'informatics4',
      title: 'Информатика',
      icon: <Monitor className="w-5 h-5" />,
      color: 'text-indigo-400',
      gradient: 'from-indigo-500 to-purple-500',
      description: 'Программы, алгоритмы, презентации',
      sections: [
        {
          id: 'info4-sec1',
          title: 'Работа с информацией',
          description: 'Обработка данных',
          topics: [
            {
              id: 'info4-sec1-t1',
              title: 'Представление информации',
              description: 'Виды информации',
              lessons: [
                {
                  id: 'info4-sec1-t1-l1',
                  title: 'Кодирование информации',
                  description: 'Как кодируется информация',
                  theory: `<h3>🔢 Кодирование информации</h3>
                  <p>Информация в компьютере кодируется с помощью нулей и единиц.</p>
                  <h4>Двоичный код:</h4>
                  <ul>
                    <li>0 — нет сигнала</li>
                    <li>1 — есть сигнал</li>
                  </ul>
                  <h4>Пример:</h4>
                  <p>Буква "А" = 01000001</p>
                  <h4>Единицы измерения:</h4>
                  <ul>
                    <li><strong>Бит</strong> — наименьшая единица (0 или 1)</li>
                    <li><strong>Байт</strong> = 8 бит</li>
                    <li><strong>Килобайт (КБ)</strong> = 1024 байта</li>
                    <li><strong>Мегабайт (МБ)</strong> = 1024 КБ</li>
                    <li><strong>Гигабайт (ГБ)</strong> = 1024 МБ</li>
                  </ul>`,
                  examples: ['Сколько бит в байте?', 'Что больше: КБ или МБ?'],
                  completed: false,
                  difficulty: 'medium',
                  estimatedTime: 25
                }
              ]
            }
          ]
        },
        {
          id: 'info4-sec2',
          title: 'Презентации',
          description: 'Создание презентаций',
          topics: [
            {
              id: 'info4-sec2-t1',
              title: 'PowerPoint',
              description: 'Создание презентаций',
              lessons: [
                {
                  id: 'info4-sec2-t1-l1',
                  title: 'Что такое презентация?',
                  description: 'Основы создания',
                  theory: `<h3>📊 Презентация</h3>
                  <p>Презентация — это показ информации с помощью слайдов.</p>
                  <h4>Структура презентации:</h4>
                  <ul>
                    <li>📍 <strong>Титульный слайд</strong> — тема и автор</li>
                    <li>📋 <strong>Содержание</strong> — о чём будет презентация</li>
                    <li>📄 <strong>Основные слайды</strong> — информация</li>
                    <li>🎯 <strong>Заключение</strong> — выводы</li>
                  </ul>
                  <h4>Правила:</h4>
                  <ul>
                    <li>Меньше текста, больше картинок</li>
                    <li>Читаемый шрифт</li>
                    <li>Понятные заголовки</li>
                  </ul>`,
                  examples: ['Создай презентацию о себе', 'Добавь слайд с картинкой'],
                  completed: false,
                  difficulty: 'easy',
                  estimatedTime: 30
                }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Сколько бит в одном байте?',
          options: ['4', '8', '16', '32'],
          correctAnswer: 1,
          explanation: 'В одном байте 8 бит.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'q2',
          question: 'Что больше: МБ или КБ?',
          options: ['КБ', 'МБ', 'Одинаковы', 'Зависит от файла'],
          correctAnswer: 1,
          explanation: 'МБ (мегабайт) больше, чем КБ (килобайт). 1 МБ = 1024 КБ.',
          difficulty: 'easy',
          points: 10
        },
        {
          id: 'q3',
          question: 'Что такое презентация?',
          options: ['Текстовый документ', 'Показ информации с помощью слайдов', 'Рисунок', 'Таблица'],
          correctAnswer: 1,
          explanation: 'Презентация — это показ информации с помощью слайдов.',
          difficulty: 'easy',
          points: 10
        }
      ]
    }
  ]
}
