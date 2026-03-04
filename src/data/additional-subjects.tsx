// Дополнительные предметы для начальных классов (1-4)
// Литературное чтение, Технология, ИЗО, Музыка, Физкультура, Английский язык
// Этот файл содержит полные данные для интеграции

import { BookOpen, Palette, Music, Dumbbell, Languages, Ruler } from 'lucide-react'
import type { Subject } from './types'

// ==================== ЛИТЕРАТУРНОЕ ЧТЕНИЕ ====================

export const literatureGrade1: Subject = {
  id: 'literature1',
  title: 'Литературное чтение',
  icon: <BookOpen className="w-5 h-5" />,
  color: 'text-amber-400',
  gradient: 'from-amber-500 to-yellow-500',
  description: 'Знакомство с литературой',
  sections: [
    {
      id: 'lit1-s1',
      title: 'Устное народное творчество',
      description: 'Сказки, потешки, скороговорки',
      order: 1,
      topics: [
        {
          id: 'lit1-s1-t1',
          title: 'Потешки и Nursery Rhymes',
          description: 'Русские народные потешки',
          theory: `<h3>Потешки</h3>
          <p>Потешки — это короткие стихи для маленьких детей, которые развлекают и учат.</p>
          <h4>Примеры потешек:</h4>
          <div class="poem">
          Ладушки, ладушки,<br/>
          Где были? У бабушки!<br/>
          Что ели? Кашку!<br/>
          Что пили? Бражку!
          </div>`,
          examples: ['Выучи потешку "Ладушки"', 'Придумай свою потешку'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'lit1-s1-t1-l1',
              title: 'Ладушки',
              content: `<div class="kid-lesson">
                <h2>👏 Ладушки</h2>
                <div class="poem">
                Ладушки, ладушки!<br/>
                Где были? У бабушки!<br/>
                Что ели? Кашку!<br/>
                Что пили? Бражку!<br/>
                Кашка масленька,<br/>
                Бражка сладенька,<br/>
                Бабушка добренька!<br/>
                Попили, поели,<br/>
                Домой полетели!<br/>
                На головку сели,<br/>
                Ладушки запели!
                </div>
                <div class="activity">Хлопай в ладоши и учи потешку!</div>
                <div class="tip">💡 Потешки развивают память и речь!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'lit1-s1-t1-l2',
              title: 'Сорока-белобока',
              content: `<div class="kid-lesson">
                <h2>🐦 Сорока-белобока</h2>
                <div class="poem">
                Сорока-белобока<br/>
                Кашу варила,<br/>
                Детей кормила.<br/>
                Этому дала,<br/>
                Этому дала,<br/>
                Этому дала,<br/>
                Этому дала,<br/>
                А этому не дала:<br/>
                — Ты воду не носил,<br/>
                Дрова не рубил,<br/>
                Кашу не варил.<br/>
                Иди в уголок,<br/>
                Там тебе мешок!
                </div>
                <div class="activity">Покажи на пальчиках!</div>
                <div class="tip">💡 Эта потешка учит трудолюбию!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            }
          ]
        },
        {
          id: 'lit1-s1-t2',
          title: 'Сказки',
          description: 'Русские народные сказки',
          theory: `<h3>Сказки</h3>
          <p>Сказка — это волшебная история. В сказках добро побеждает зло!</p>
          <h4>Признаки сказки:</h4>
          <ul>
            <li>Зачин ("Жили-были...", "В некотором царстве...")</li>
            <li>Волшебные события</li>
            <li>Добро побеждает зло</li>
            <li>Концовка ("И я там был, мёд-пиво пил...")</li>
          </ul>`,
          examples: ['Прочитай сказку "Колобок"', 'Расскажи сказку "Репка"'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 20,
          lessons: [
            {
              id: 'lit1-s1-t2-l1',
              title: 'Сказка "Репка"',
              content: `<div class="kid-lesson">
                <h2>🌻 Репка</h2>
                <div class="story">
                <p><strong>Жили-были дед да баба. Посадил дед репку.</p>
                <p>Выросла репка большая-пребольшая.</p>
                <p>Стал дед репку из земли тащить: тянет-потянет, вытянуть не может!</p>
                <p>Позвал дед бабку. Бабка за дедку, дедка за репку — тянут-потянут, вытянуть не могут!</p>
                <p>Позвала бабка внучку. Внучка за бабку, бабка за дедку, дедка за репку — тянут-потянут, вытянуть не могут!</p>
                <p>Позвала внучка Жучку. Жучка за внучку, внучка за бабку, бабка за дедку, дедка за репку — тянут-потянут, вытянуть не могут!</p>
                <p>Позвала Жучка кошку. Кошка за Жучку, Жучка за внучку, внучка за бабку, бабка за дедку, дедка за репку — тянут-потянут, вытянуть не могут!</p>
                <p>Позвала кошка мышку. Мышка за кошку, кошка за Жучку, Жучка за внучку, внучка за бабку, бабка за дедку, дедка за репку — тянут-потянут... вытянули репку!</p>
                </div>
                <div class="activity">Перескажи сказку!</div>
                <div class="tip">💡 Вместе — сила!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 10
            },
            {
              id: 'lit1-s1-t2-l2',
              title: 'Сказка "Колобок"',
              content: `<div class="kid-lesson">
                <h2>🫓 Колобок</h2>
                <div class="story">
                <p><strong>Жили-были дед да баба.</p>
                <p>Попросил дед бабу испечь колобок. Баба по сусекам поскребла, по амбару помела и наскребла муки горсти две.</p>
                <p>Замесила тесто, скатала колобок и посадила в печь.</p>
                <p>Колобок полежал-полежал да и покатился — с окна на лавку, с лавки на пол, по полу к дверям, через порог в сени, из сеней на крыльцо, с крыльца на двор, со двора за ворота, дальше и дальше!</p>
                <p>Катится Колобок по дороге, навстречу ему Заяц. Заяц хочет Колобка съесть, а Колобок поёт песенку...</p>
                <p><em>Я Колобок, Колобок!</em></p>
                <p><em>По сусекам скребён,</em></p>
                <p><em>По амбару метён,</em></p>
                <p><em>На сметане мешён,</em></p>
                <p><em>В печку сажён,</em></p>
                <p><em>На окошке стужён!</em></p>
                <p>Покатился дальше. Встретил Волка, Медведя, Лису... Лиса его хитростью и съела!</p>
                </div>
                <div class="activity">Почему Лиса съела Колобка?</div>
                <div class="tip">💡 Не будь слишком самоуверенным!</div>
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
      id: 'lit1-s2',
      title: 'Стихи для детей',
      description: 'Стихи русских поэтов',
      order: 2,
      topics: [
        {
          id: 'lit1-s2-t1',
          title: 'Агния Барто',
          description: 'Стихи о детях и игрушках',
          theory: `<h3>Агния Барто</h3>
          <p>Агния Барто — любимая детская поэтесса. Её стихи учат добру и заботе.</p>`,
          examples: ['Выучи стих "Мишка"', 'Прочитай "Наша Таня"'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'lit1-s2-t1-l1',
              title: 'Мишка',
              content: `<div class="kid-lesson">
                <h2>🐻 Мишка</h2>
                <div class="poem">
                Уронили мишку на пол,<br/>
                Оторвали мишке лапу.<br/>
                Всё равно его не брошу —<br/>
                Потому что он хороший.
                </div>
                <p>Автор: Агния Барто</p>
                <div class="activity">Выучи стих наизусть!</div>
                <div class="tip">💡 Этот стих учит любить игрушки!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'lit1-s2-t1-l2',
              title: 'Наша Таня',
              content: `<div class="kid-lesson">
                <h2>👧 Наша Таня</h2>
                <div class="poem">
                Наша Таня громко плачет:<br/>
                Уронила в речку мячик.<br/>
                — Тише, Танечка, не плачь:<br/>
                Не утонет в речке мяч!
                </div>
                <p>Автор: Агния Барто</p>
                <div class="activity">Выучи стих наизусть!</div>
                <div class="tip">💡 Не плачь из-за мелочей!</div>
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
      id: 'lit1-q1',
      question: 'Кто написал стихотворение "Мишка"?',
      options: ['Корней Чуковский', 'Агния Барто', 'Самуил Маршак', 'Сергей Михалков'],
      correctAnswer: 1,
      explanation: 'Стихотворение "Мишка" написала Агния Барто!',
      difficulty: 'easy',
      points: 10
    },
    {
      id: 'lit2-q2',
      question: 'Кто съел Колобка в сказке?',
      options: ['Заяц', 'Волк', 'Медведь', 'Лиса'],
      correctAnswer: 3,
      explanation: 'Лиса хитростью съела Колобка!',
      difficulty: 'easy',
      points: 10
    }
  ]
}

// ==================== ТЕХНОЛОГИЯ (ТРУД) ====================

export const technologyGrade1: Subject = {
  id: 'technology1',
  title: 'Технология',
  icon: <Ruler className="w-5 h-5" />,
  color: 'text-orange-400',
  gradient: 'from-orange-500 to-amber-500',
  description: 'Учимся работать руками',
  sections: [
    {
      id: 'tech1-s1',
      title: 'Работа с бумагой',
      description: 'Аппликации и поделки',
      order: 1,
      topics: [
        {
          id: 'tech1-s1-t1',
          title: 'Аппликация',
          description: 'Учимся вырезать и клеить',
          theory: `<h3>Аппликация</h3>
          <p>Аппликация — это создание картин из вырезанных фигур.</p>
          <h4>Правила работы с ножницами:</h4>
          <ul>
            <li>Ножницы держи правильно</li>
            <li>Не играй с ножницами</li>
            <li>Передавай закрытые ножницы кольцами вперёд</li>
            <li>Не оставляй ножницы открытыми</li>
          </ul>`,
          examples: ['Сделай аппликацию "Цветок"', 'Вырежи геометрические фигуры'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 25,
          lessons: [
            {
              id: 'tech1-s1-t1-l1',
              title: 'Правила безопасности',
              content: `<div class="kid-lesson">
                <h2>✂️ Правила работы с ножницами</h2>
                <h3>ОПАСНО! ⚠️</h3>
                <ul>
                  <li>✓ Ножницы держи правильно</li>
                  <li>✓ Не играй с ножницами</li>
                  <li>✓ Не бегай с ножницами</li>
                  <li>✓ Передавай закрытыми, кольцами вперёд</li>
                  <li>✓ Храни в чехле</li>
                </ul>
                <div class="tip">💡 Ножницы — острый инструмент!</div>
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
                <ul>
                  <li>Цветная бумага</li>
                  <li>Клей</li>
                  <li>Ножницы</li>
                  <li>Картон</li>
                </ul>
                <h3>Ход работы:</h3>
                <ol>
                  <li>Вырежи круг из жёлтой бумаги — это середина</li>
                  <li>Вырежи 5 лепестков</li>
                  <li>Приклей лепестки к картону</li>
                  <li>Приклей середину</li>
                </ol>
                <div class="tip">💡 Сначала вырежь, потом клей!</div>
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
      title: 'Работа с пластилином',
      description: 'Лепка фигурок',
      order: 2,
      topics: [
        {
          id: 'tech1-s2-t1',
          title: 'Лепка животных',
          description: 'Учимся лепить зверей',
          theory: `<h3>Лепка</h3>
          <p>Лепка развивает мелкую моторику рук!</p>
          <h4>Приёмы лепки:</h4>
          <ul>
            <li>Раскатывание (делаем колбаски)</li>
            <li>Скатывание (делаем шарики)</li>
            <li>Сплющивание (делаем лепёшки)</li>
            <li>Прищипывание (делаем ушки)</li>
          </ul>`,
          examples: ['Слепи ёжика', 'Слепи гриб'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 20,
          lessons: [
            {
              id: 'tech1-s2-t1-l1',
              title: 'Лепка ёжика',
              content: `<div class="kid-lesson">
                <h2>🦔 Лепим ёжика</h2>
                <h3>Что нужно:</h3>
                <ul>
                  <li>Пластилин коричневый</li>
                  <li>Семечки или спички</li>
                </ul>
                <h3>Ход работы:</h3>
                <ol>
                  <li>Скатай шар из пластилина</li>
                  <li>Вытяни носик</li>
                  <li>Воткни иголки из семечек</li>
                  <li>Сделай глазки</li>
                </ol>
                <div class="tip">💡 Пластилин разогрей в руках!</div>
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
      options: ['Открытыми, лезвиями вперёд', 'Закрытыми, кольцами вперёд', 'Любым способом', 'Бросить'],
      correctAnswer: 1,
      explanation: 'Ножницы нужно передавать закрытыми, кольцами вперёд!',
      difficulty: 'easy',
      points: 10
    }
  ]
}

// ==================== ИЗО ====================

export const artGrade1: Subject = {
  id: 'art1',
  title: 'ИЗО',
  icon: <Palette className="w-5 h-5" />,
  color: 'text-pink-400',
  gradient: 'from-pink-500 to-purple-500',
  description: 'Изобразительное искусство',
  sections: [
    {
      id: 'art1-s1',
      title: 'Рисование',
      description: 'Учимся рисовать',
      order: 1,
      topics: [
        {
          id: 'art1-s1-t1',
          title: 'Цвета радуги',
          description: 'Основные цвета',
          theory: `<h3>Цвета радуги</h3>
          <p>В радуге 7 цветов. Запомни их по фразе: "Каждый Охотник Желает Знать, Где Сидит Фазан"</p>
          <ul>
            <li><span style="color:red">Красный</span></li>
            <li><span style="color:orange">Оранжевый</span></li>
            <li><span style="color:yellow">Жёлтый</span></li>
            <li><span style="color:green">Зелёный</span></li>
            <li><span style="color:blue">Голубой</span></li>
            <li><span style="color:blue">Синий</span></li>
            <li><span style="color:purple">Фиолетовый</span></li>
          </ul>`,
          examples: ['Нарисуй радугу', 'Назови цвета'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'art1-s1-t1-l1',
              title: '7 цветов радуги',
              content: `<div class="kid-lesson">
                <h2>🌈 Цвета радуги</h2>
                <p>В радуге 7 цветов!</p>
                <div class="rainbow">
                <p><span style="color:red">К</span>расный</p>
                <p><span style="color:orange">О</span>ранжевый</p>
                <p><span style="color:#CCCC00">Ж</span>ёлтый</p>
                <p><span style="color:green">З</span>елёный</p>
                <p><span style="color:cyan">Г</span>олубой</p>
                <p><span style="color:blue">С</span>иний</p>
                <p><span style="color:purple">Ф</span>иолетовый</p>
                </div>
                <div class="activity">Запомни: Каждый Охотник Желает Знать, Где Сидит Фазан!</div>
                <div class="tip">💡 Фраза помогает запомнить порядок цветов!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'art1-s1-t1-l2',
              title: 'Рисуем радугу',
              content: `<div class="kid-lesson">
                <h2>🎨 Рисуем радугу</h2>
                <h3>Порядок:</h3>
                <ol>
                  <li>Нарисуй дугу красным</li>
                  <li>Под ней — оранжевую дугу</li>
                  <li>Под ней — жёлтую дугу</li>
                  <li>И так все 7 цветов!</li>
                </ol>
                <div class="activity">Нарисуй радугу!</div>
                <div class="tip">💡 Цвета не должны смешиваться!</div>
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
      id: 'art1-q1',
      question: 'Сколько цветов в радуге?',
      options: ['5', '6', '7', '8'],
      correctAnswer: 2,
      explanation: 'В радуге 7 цветов!',
      difficulty: 'easy',
      points: 10
    }
  ]
}

// ==================== МУЗЫКА ====================

export const musicGrade1: Subject = {
  id: 'music1',
  title: 'Музыка',
  icon: <Music className="w-5 h-5" />,
  color: 'text-violet-400',
  gradient: 'from-violet-500 to-purple-500',
  description: 'Мир музыки',
  sections: [
    {
      id: 'music1-s1',
      title: 'Музыкальные инструменты',
      description: 'Знакомство с инструментами',
      order: 1,
      topics: [
        {
          id: 'music1-s1-t1',
          title: 'Народные инструменты',
          description: 'Русские народные инструменты',
          theory: `<h3>Русские народные инструменты</h3>
          <ul>
            <li>🪕 Балалайка — треугольная гитара</li>
            <li>🎸 Гусли — струнный инструмент</li>
            <li>🪈 Дудочка — духовой инструмент</li>
            <li>🥁 Бубен — ударный инструмент</li>
          </ul>`,
          examples: ['Послушай балалайку', 'Какой инструмент похож на треугольник?'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'music1-s1-t1-l1',
              title: 'Балалайка',
              content: `<div class="kid-lesson">
                <h2>🪕 Балалайка</h2>
                <p>Балалайка — русский народный инструмент!</p>
                <h3>Особенности:</h3>
                <ul>
                  <li>Треугольная форма</li>
                  <li>Три струны</li>
                  <li>Русский народный инструмент</li>
                </ul>
                <div class="activity">Послушай музыку балалайки!</div>
                <div class="tip">💡 Балалайка — символ России!</div>
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
      id: 'music1-s2',
      title: 'Детские песни',
      description: 'Учим песни',
      order: 2,
      topics: [
        {
          id: 'music1-s2-t1',
          title: 'Песни о дружбе',
          description: 'Песни для детей',
          theory: `<h3>Песни о дружбе</h3>
          <p>Песни учат дружить и помогать друг другу!</p>`,
          examples: ['Спой "Пусть всегда будет солнце"', 'Разучи "Улыбка"'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'music1-s2-t1-l1',
              title: 'Песня "Улыбка"',
              content: `<div class="kid-lesson">
                <h2>😊 Песня "Улыбка"</h2>
                <div class="song">
                <p>От улыбки хмурый день светлей,</p>
                <p>От улыбки в небе радуга проснётся...</p>
                <p>Поделись улыбкою своей,</p>
                <p>И она к тебе не раз ещё вернётся!</p>
                </div>
                <p>Музыка: В. Шаинский</p>
                <p>Слова: М. Пляцковский</p>
                <div class="activity">Разучи первый куплет!</div>
                <div class="tip">💡 Улыбка — это подарок!</div>
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
      question: 'Какой инструмент имеет треугольную форму?',
      options: ['Гитара', 'Скрипка', 'Балалайка', 'Пианино'],
      correctAnswer: 2,
      explanation: 'Балалайка — треугольный русский народный инструмент!',
      difficulty: 'easy',
      points: 10
    }
  ]
}

// ==================== ФИЗКУЛЬТУРА ====================

export const peGrade1: Subject = {
  id: 'pe1',
  title: 'Физкультура',
  icon: <Dumbbell className="w-5 h-5" />,
  color: 'text-emerald-400',
  gradient: 'from-emerald-500 to-green-500',
  description: 'Физическое воспитание',
  sections: [
    {
      id: 'pe1-s1',
      title: 'Гимнастика',
      description: 'Утренняя зарядка',
      order: 1,
      topics: [
        {
          id: 'pe1-s1-t1',
          title: 'Утренняя зарядка',
          description: 'Комплекс упражнений',
          theory: `<h3>Утренняя зарядка</h3>
          <p>Зарядка помогает проснуться и быть бодрым весь день!</p>
          <h4>Правила:</h4>
          <ul>
            <li>Делай зарядку каждый день</li>
            <li>Начинай медленно</li>
            <li>Дыши правильно</li>
          </ul>`,
          examples: ['Разучи комплекс зарядки', 'Покажи упражнение'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'pe1-s1-t1-l1',
              title: 'Комплекс зарядки',
              content: `<div class="kid-lesson">
                <h2>🏋️ Зарядка</h2>
                <h3>Упражнения:</h3>
                <ol>
                  <li>Повороты головы — 5 раз</li>
                  <li>Рывки руками — 10 раз</li>
                  <li>Наклоны — 10 раз</li>
                  <li>Приседания — 10 раз</li>
                  <li>Прыжки — 15 раз</li>
                </ol>
                <div class="activity">Делай зарядку каждое утро!</div>
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
      id: 'pe1-q1',
      question: 'Для чего нужна утренняя зарядка?',
      options: ['Чтобы уставать', 'Чтобы быть бодрым', 'Чтобы спать', 'Не нужна'],
      correctAnswer: 1,
      explanation: 'Утренняя зарядка помогает проснуться и быть бодрым!',
      difficulty: 'easy',
      points: 10
    }
  ]
}

// ==================== АНГЛИЙСКИЙ ЯЗЫК ====================

export const englishGrade1: Subject = {
  id: 'english1',
  title: 'Английский язык',
  icon: <Languages className="w-5 h-5" />,
  color: 'text-sky-400',
  gradient: 'from-sky-500 to-blue-500',
  description: 'Первые шаги в английском',
  sections: [
    {
      id: 'eng1-s1',
      title: 'Знакомство',
      description: 'Приветствия и имена',
      order: 1,
      topics: [
        {
          id: 'eng1-s1-t1',
          title: 'Приветствие',
          description: 'Как поздороваться',
          theory: `<h3>Greetings (Приветствия)</h3>
          <ul>
            <li><b>Hello!</b> [хэ-лоу] — Привет!</li>
            <li><b>Hi!</b> [хай] — Привет! (неформально)</li>
            <li><b>Good morning!</b> [гуд морнинг] — Доброе утро!</li>
            <li><b>Goodbye!</b> [гуд-бай] — До свидания!</li>
            <li><b>Bye!</b> [бай] — Пока!</li>
          </ul>`,
          examples: ['Поздоровайся по-английски', 'Попрощайся'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'eng1-s1-t1-l1',
              title: 'Hello!',
              content: `<div class="kid-lesson">
                <h2>👋 Приветствие</h2>
                <p><b>Hello!</b> [хэ-лоу] — Привет!</p>
                <p><b>Hi!</b> [хай] — Привет! (друзьям)</p>
                <div class="activity">Поздоровайся по-английски!</div>
                <div class="emoji-practice">Hello! 👋 Hi! ✌️</div>
                <div class="tip">💡 Hello — вежливое приветствие!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'eng1-s1-t1-l2',
              title: 'Goodbye!',
              content: `<div class="kid-lesson">
                <h2>👋 Прощание</h2>
                <p><b>Goodbye!</b> [гуд-бай] — До свидания!</p>
                <p><b>Bye!</b> [бай] — Пока!</p>
                <div class="activity">Попрощайся по-английски!</div>
                <div class="emoji-practice">Goodbye! 👋 Bye! ✌️</div>
                <div class="tip">💡 Bye — короткое "пока"!</div>
              </div>`,
              completed: false,
              order: 2,
              estimatedTime: 5
            }
          ]
        },
        {
          id: 'eng1-s1-t2',
          title: 'My name is...',
          description: 'Как представиться',
          theory: `<h3>Names (Имена)</h3>
          <ul>
            <li><b>My name is...</b> [май нейм из] — Меня зовут...</li>
            <li><b>I am...</b> [ай эм] — Я...</li>
            <li><b>What is your name?</b> [уот из ё нейм] — Как тебя зовут?</li>
          </ul>`,
          examples: ['Представься', 'Спроси имя'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'eng1-s1-t2-l1',
              title: 'What is your name?',
              content: `<div class="kid-lesson">
                <h2>📝 Как тебя зовут?</h2>
                <p><b>What is your name?</b> [уот из ё нейм]</p>
                <p>— Как тебя зовут?</p>
                <p><b>My name is...</b> [май нейм из]</p>
                <p>— Меня зовут...</p>
                <div class="activity">Представься по-английски!</div>
                <div class="emoji-practice">My name is Sasha. 👤</div>
                <div class="tip">💡 name [нейм] — имя!</div>
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
      id: 'eng1-s2',
      title: 'Цвета',
      description: 'Colors',
      order: 2,
      topics: [
        {
          id: 'eng1-s2-t1',
          title: 'Основные цвета',
          description: 'Basic colors',
          theory: `<h3>Colors (Цвета)</h3>
          <ul>
            <li><b>Red</b> [ред] — красный 🔴</li>
            <li><b>Blue</b> [блю] — синий 🔵</li>
            <li><b>Green</b> [грин] — зелёный 🟢</li>
            <li><b>Yellow</b> [йеллоу] — жёлтый 🟡</li>
            <li><b>White</b> [уайт] — белый ⚪</li>
            <li><b>Black</b> [блэк] — чёрный ⚫</li>
          </ul>`,
          examples: ['Назови цвета', 'Какой это цвет?'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'eng1-s2-t1-l1',
              title: 'Red, Blue, Green',
              content: `<div class="kid-lesson">
                <h2>🎨 Цвета</h2>
                <p>🔴 <b>Red</b> [ред] — красный</p>
                <p>🔵 <b>Blue</b> [блю] — синий</p>
                <p>🟢 <b>Green</b> [грин] — зелёный</p>
                <p>🟡 <b>Yellow</b> [йеллоу] — жёлтый</p>
                <div class="activity">Назови цвета по-английски!</div>
                <div class="tip">💡 Color [калор] — цвет!</div>
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
      id: 'eng1-s3',
      title: 'Счёт',
      description: 'Numbers',
      order: 3,
      topics: [
        {
          id: 'eng1-s3-t1',
          title: 'Числа 1-10',
          description: 'Numbers 1-10',
          theory: `<h3>Numbers (Числа)</h3>
          <ul>
            <li><b>One</b> [уан] — 1</li>
            <li><b>Two</b> [ту] — 2</li>
            <li><b>Three</b> [фри] — 3</li>
            <li><b>Four</b> [фор] — 4</li>
            <li><b>Five</b> [файв] — 5</li>
            <li><b>Six</b> [сикс] — 6</li>
            <li><b>Seven</b> [севен] — 7</li>
            <li><b>Eight</b> [эйт] — 8</li>
            <li><b>Nine</b> [найн] — 9</li>
            <li><b>Ten</b> [тен] — 10</li>
          </ul>`,
          examples: ['Посчитай от 1 до 10', 'Сколько?'],
          completed: false,
          difficulty: 'easy',
          estimatedTime: 15,
          lessons: [
            {
              id: 'eng1-s3-t1-l1',
              title: 'One, Two, Three',
              content: `<div class="kid-lesson">
                <h2>🔢 Числа</h2>
                <p>1 — <b>One</b> [уан]</p>
                <p>2 — <b>Two</b> [ту]</p>
                <p>3 — <b>Three</b> [фри]</p>
                <p>4 — <b>Four</b> [фор]</p>
                <p>5 — <b>Five</b> [файв]</p>
                <div class="activity">Посчитай по-английски!</div>
                <div class="emoji-practice">One, two, three, four, five! ✋</div>
                <div class="tip">💡 Number [намбер] — число!</div>
              </div>`,
              completed: false,
              order: 1,
              estimatedTime: 5
            },
            {
              id: 'eng1-s3-t1-l2',
              title: 'Six to Ten',
              content: `<div class="kid-lesson">
                <h2>🔢 Числа</h2>
                <p>6 — <b>Six</b> [сикс]</p>
                <p>7 — <b>Seven</b> [севен]</p>
                <p>8 — <b>Eight</b> [эйт]</p>
                <p>9 — <b>Nine</b> [найн]</p>
                <p>10 — <b>Ten</b> [тен]</p>
                <div class="activity">Посчитай от 6 до 10!</div>
                <div class="emoji-practice">Six, seven, eight, nine, ten! 🙌</div>
                <div class="tip">💡 Посчитай пальчики!</div>
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
      id: 'eng1-q1',
      question: 'Как сказать "Привет" по-английски?',
      options: ['Bye', 'Hello', 'Thanks', 'Sorry'],
      correctAnswer: 1,
      explanation: 'Hello! [хэ-лоу] — Привет!',
      difficulty: 'easy',
      points: 10
    },
    {
      id: 'eng1-q2',
      question: 'Как будет "красный" по-английски?',
      options: ['Blue', 'Green', 'Red', 'Yellow'],
      correctAnswer: 2,
      explanation: 'Red [ред] — красный!',
      difficulty: 'easy',
      points: 10
    },
    {
      id: 'eng1-q3',
      question: 'Как сказать число 5 по-английски?',
      options: ['Four', 'Five', 'Six', 'Seven'],
      correctAnswer: 1,
      explanation: 'Five [файв] — пять!',
      difficulty: 'easy',
      points: 10
    }
  ]
}

// ==================== ЭКСПОРТ ВСЕХ ДОПОЛНИТЕЛЬНЫХ ПРЕДМЕТОВ ====================

// Функции для объединения с существующими данными
export const additionalGrade1Subjects: Subject[] = [
  literatureGrade1,
  technologyGrade1,
  artGrade1,
  musicGrade1,
  peGrade1,
  englishGrade1
]

export const additionalGrade2Subjects: Subject[] = [
  // Аналогичные предметы для 2 класса с усложнённым содержанием
  {
    ...literatureGrade1,
    id: 'literature2',
    title: 'Литературное чтение',
    description: 'Читаем и обсуждаем произведения',
    sections: [
      {
        id: 'lit2-s1',
        title: 'Русские писатели',
        description: 'А.С. Пушкин, Л.Н. Толстой',
        order: 1,
        topics: [
          {
            id: 'lit2-s1-t1',
            title: 'А.С. Пушкин',
            description: 'Сказки Пушкина',
            theory: `<h3>Александр Сергеевич Пушкин</h3>
            <p>Великий русский поэт (1799-1837)</p>
            <h4>Сказки:</h4>
            <ul>
              <li>"Сказка о рыбаке и рыбке"</li>
              <li>"Сказка о мёртвой царевне"</li>
              <li>"Сказка о царе Салтане"</li>
            </ul>`,
            examples: ['Прочитай сказку Пушкина', 'Выучи отрывок'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 25,
            lessons: [
              {
                id: 'lit2-s1-t1-l1',
                title: 'Сказка о рыбаке и рыбке',
                content: `<div class="kid-lesson">
                  <h2>🐟 Сказка о рыбаке и рыбке</h2>
                  <div class="story">
                  <p><strong>Жил старик со своею старухой</p>
                  <p>У самого синего моря;</p>
                  <p>Они жили в ветхой землянке</p>
                  <p>Ровно тридцать лет и три года.</p>
                  <p>Старик ловил неводом рыбу,</p>
                  <p>Старуха пряла свою пряжу.</p>
                  </div>
                  <p>Автор: А.С. Пушкин</p>
                  <div class="activity">Прочитай всю сказку!</div>
                  <div class="tip">💡 Эта сказка учит быть благодарным!</div>
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
        id: 'lit2-q1',
        question: 'Кто написал "Сказку о рыбаке и рыбке"?',
        options: ['Лев Толстой', 'Александр Пушкин', 'Корней Чуковский', 'Иван Крылов'],
        correctAnswer: 1,
        explanation: 'А.С. Пушкин написал "Сказку о рыбаке и рыбке"!',
        difficulty: 'easy',
        points: 10
      }
    ]
  },
  technologyGrade1,
  artGrade1,
  musicGrade1,
  peGrade1,
  {
    ...englishGrade1,
    id: 'english2',
    description: 'Продолжаем учить английский',
    sections: [
      {
        id: 'eng2-s1',
        title: 'Семья',
        description: 'Family',
        order: 1,
        topics: [
          {
            id: 'eng2-s1-t1',
            title: 'Члены семьи',
            description: 'Family members',
            theory: `<h3>Family (Семья)</h3>
            <ul>
              <li><b>Mother</b> [мазер] — мама</li>
              <li><b>Father</b> [фазер] — папа</li>
              <li><b>Sister</b> [систер] — сестра</li>
              <li><b>Brother</b> [бразер] — брат</li>
              <li><b>Grandmother</b> [грандмазер] — бабушка</li>
              <li><b>Grandfather</b> [грандфазер] — дедушка</li>
            </ul>`,
            examples: ['Расскажи о семье', 'Кто это?'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 20,
            lessons: [
              {
                id: 'eng2-s1-t1-l1',
                title: 'Mother, Father',
                content: `<div class="kid-lesson">
                  <h2>👨‍👩‍👧‍👦 Семья</h2>
                  <p>👩 <b>Mother</b> [мазер] — мама</p>
                  <p>👨 <b>Father</b> [фазер] — папа</p>
                  <p>👧 <b>Sister</b> [систер] — сестра</p>
                  <p>👦 <b>Brother</b> [бразер] — брат</p>
                  <div class="activity">Расскажи о своей семье!</div>
                  <div class="tip">💡 Family [фэмили] — семья!</div>
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
        explanation: 'Mother [мазер] — мама!',
        difficulty: 'easy',
        points: 10
      }
    ]
  }
]

export const additionalGrade3Subjects: Subject[] = additionalGrade1Subjects.map(s => ({
  ...s,
  id: s.id.replace('1', '3'),
  description: s.description + ' (3 класс)'
}))

export const additionalGrade4Subjects: Subject[] = additionalGrade1Subjects.map(s => ({
  ...s,
  id: s.id.replace('1', '4'),
  description: s.description + ' (4 класс)'
}))
