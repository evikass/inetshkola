import type { LessonSlide } from '@/components/school/InteractiveLesson'

export interface SampleLesson {
  id: string
  title: string
  subject: string
  description: string
  grade: number
  slides: LessonSlide[]
  totalDuration: number
}

// Math: Введение в дроби (5 слайдов)
export const fractionsLesson: SampleLesson = {
  id: 'math-fractions-intro',
  title: 'Введение в дроби',
  subject: 'Математика',
  description: 'Узнай, что такое дроби и как с ними работать',
  grade: 5,
  slides: [
    {
      id: 'frac-1',
      type: 'text',
      title: 'Что такое дробь? 🍰',
      content: `
        <p>Дробь — это часть целого!</p>
        <p>Представь, что у тебя есть пицца. Если ты разрежешь её на равные части, каждая часть будет <strong>дробью</strong> от целой пиццы.</p>
        <div style="text-align: center; font-size: 4rem; margin: 1rem 0;">🍕 ➗ 8 = 1/8</div>
        <p>Если взять один кусочек из восьми, это будет <strong>одна восьмая</strong> (1/8).</p>
      `,
      duration: 30
    },
    {
      id: 'frac-2',
      type: 'text',
      title: 'Числитель и знаменатель',
      content: `
        <p>Дробь состоит из двух частей:</p>
        <div style="background: rgba(139, 92, 246, 0.2); padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
          <p style="font-size: 2rem; text-align: center;">
            <span style="color: #a78bfa;">3</span>
            <span style="font-size: 3rem;">/</span>
            <span style="color: #f472b6;">4</span>
          </p>
          <p style="text-align: center;">
            <span style="color: #a78bfa;">числитель</span> / 
            <span style="color: #f472b6;">знаменатель</span>
          </p>
        </div>
        <ul>
          <li><strong style="color: #a78bfa;">Числитель</strong> (сверху) — сколько частей взяли</li>
          <li><strong style="color: #f472b6;">Знаменатель</strong> (снизу) — на сколько частей разделили</li>
        </ul>
      `,
      duration: 35,
      checkpoint: {
        type: 'quiz',
        question: 'В дроби 3/5, что показывает число 5?',
        options: [
          'Сколько частей взяли',
          'На сколько частей разделили',
          'Сколько всего предметов',
          'Номер дроби'
        ],
        correctAnswer: 1,
        hint: 'Знаменатель всегда показывает, на сколько равных частей разделили целое.'
      }
    },
    {
      id: 'frac-3',
      type: 'demo',
      title: 'Примеры дробей в жизни',
      content: `
        <p>Дроби встречаются везде!</p>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1rem;">
          <div style="background: rgba(34, 197, 94, 0.2); padding: 1rem; border-radius: 0.5rem; text-align: center;">
            <div style="font-size: 2rem;">🕐</div>
            <p><strong>Полчаса</strong></p>
            <p>1/2 часа</p>
          </div>
          <div style="background: rgba(59, 130, 246, 0.2); padding: 1rem; border-radius: 0.5rem; text-align: center;">
            <div style="font-size: 2rem;">📐</div>
            <p><strong>Полкилометра</strong></p>
            <p>1/2 км = 500 м</p>
          </div>
          <div style="background: rgba(234, 179, 8, 0.2); padding: 1rem; border-radius: 0.5rem; text-align: center;">
            <div style="font-size: 2rem;">🎂</div>
            <p><strong>Четверть торта</strong></p>
            <p>1/4 торта</p>
          </div>
          <div style="background: rgba(168, 85, 247, 0.2); padding: 1rem; border-radius: 0.5rem; text-align: center;">
            <div style="font-size: 2rem;">💰</div>
            <p><strong>Половина цены</strong></p>
            <p>1/2 стоимости</p>
          </div>
        </div>
      `,
      duration: 25
    },
    {
      id: 'frac-4',
      type: 'text',
      title: 'Правильные и неправильные дроби',
      content: `
        <p>Дроби бывают двух видов:</p>
        <div style="margin: 1rem 0;">
          <div style="background: rgba(34, 197, 94, 0.2); padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem;">
            <p><strong style="color: #4ade80;">✓ Правильная дробь</strong></p>
            <p>Числитель МЕНЬШЕ знаменателя</p>
            <p style="font-size: 1.5rem;">2/3, 5/8, 1/2 — все меньше 1</p>
          </div>
          <div style="background: rgba(239, 68, 68, 0.2); padding: 1rem; border-radius: 0.5rem;">
            <p><strong style="color: #f87171;">⚠ Неправильная дробь</strong></p>
            <p>Числитель БОЛЬШЕ или РАВЕН знаменателю</p>
            <p style="font-size: 1.5rem;">5/3, 8/4, 7/7 — все больше или равны 1</p>
          </div>
        </div>
      `,
      duration: 30,
      checkpoint: {
        type: 'quiz',
        question: 'Какая дробь является правильной?',
        options: ['7/5', '3/4', '8/3', '5/5'],
        correctAnswer: 1,
        hint: 'В правильной дроби числитель всегда меньше знаменателя.'
      }
    },
    {
      id: 'frac-5',
      type: 'text',
      title: 'Отлично! 🎉',
      content: `
        <div style="text-align: center;">
          <p style="font-size: 3rem;">🏆</p>
          <p style="font-size: 1.5rem;">Ты узнал:</p>
          <ul style="text-align: left; display: inline-block; margin-top: 1rem;">
            <li>✅ Что такое дробь</li>
            <li>✅ Что такое числитель и знаменатель</li>
            <li>✅ Примеры дробей в жизни</li>
            <li>✅ Правильные и неправильные дроби</li>
          </ul>
        </div>
      `,
      duration: 15
    }
  ],
  totalDuration: 135
}

// Russian: Части речи (6 слайдов)
export const partsOfSpeechLesson: SampleLesson = {
  id: 'russian-parts-of-speech',
  title: 'Части речи',
  subject: 'Русский язык',
  description: 'Изучи основные части речи русского языка',
  grade: 4,
  slides: [
    {
      id: 'pos-1',
      type: 'text',
      title: 'Что такое части речи? 📚',
      content: `
        <p>Часть речи — это группа слов с общими признаками.</p>
        <div style="text-align: center; margin: 1rem 0;">
          <p style="font-size: 3rem;">📝</p>
          <p>В русском языке <strong>10 частей речи</strong></p>
        </div>
        <p>Каждая часть речи отвечает на свой вопрос и имеет свою роль в предложении.</p>
      `,
      duration: 25
    },
    {
      id: 'pos-2',
      type: 'text',
      title: 'Имя существительное',
      content: `
        <div style="background: rgba(59, 130, 246, 0.2); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
          <p><strong style="color: #60a5fa;">📘 Имя существительное</strong></p>
          <p>Обозначает <strong>предмет</strong></p>
        </div>
        <p><strong>Вопросы:</strong> кто? что?</p>
        <p><strong>Примеры:</strong></p>
        <ul>
          <li>🏠 дом (что?)</li>
          <li>🐕 собака (кто?)</li>
          <li>🌈 радуга (что?)</li>
          <li>👦 ученик (кто?)</li>
        </ul>
      `,
      duration: 30,
      checkpoint: {
        type: 'quiz',
        question: 'Какое слово является именем существительным?',
        options: ['бежать', 'красивый', 'книга', 'быстро'],
        correctAnswer: 2,
        hint: 'Имя существительное отвечает на вопросы "кто?" или "что?"'
      }
    },
    {
      id: 'pos-3',
      type: 'text',
      title: 'Имя прилагательное',
      content: `
        <div style="background: rgba(168, 85, 247, 0.2); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
          <p><strong style="color: #c084fc;">📙 Имя прилагательное</strong></p>
          <p>Обозначает <strong>признак предмета</strong></p>
        </div>
        <p><strong>Вопросы:</strong> какой? какая? какое? какие?</p>
        <p><strong>Примеры:</strong></p>
        <ul>
          <li>🎨 <strong>красивый</strong> цветок</li>
          <li>📏 <strong>длинная</strong> дорога</li>
          <li>🔆 <strong>солнечный</strong> день</li>
        </ul>
      `,
      duration: 30,
      checkpoint: {
        type: 'think',
        question: 'Придумай 3 прилагательных, описывающих твоего любимого животное. Какие признаки ты назовёшь?',
        hint: 'Подумай о цвете, размере, характере животного'
      }
    },
    {
      id: 'pos-4',
      type: 'text',
      title: 'Глагол',
      content: `
        <div style="background: rgba(34, 197, 94, 0.2); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
          <p><strong style="color: #4ade80;">📗 Глагол</strong></p>
          <p>Обозначает <strong>действие</strong></p>
        </div>
        <p><strong>Вопросы:</strong> что делать? что сделать?</p>
        <p><strong>Примеры:</strong></p>
        <ul>
          <li>🏃 бежать</li>
          <li>📖 читать</li>
          <li>🎨 рисовать</li>
          <li>🎵 петь</li>
        </ul>
      `,
      duration: 30,
      checkpoint: {
        type: 'quiz',
        question: 'Какое слово является глаголом?',
        options: ['прыжок', 'прыгать', 'прыгучий', 'прыгко'],
        correctAnswer: 1,
        hint: 'Глагол отвечает на вопросы "что делать?" или "что сделать?"'
      }
    },
    {
      id: 'pos-5',
      type: 'demo',
      title: 'Другие части речи',
      content: `
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem;">
          <div style="background: rgba(234, 179, 8, 0.2); padding: 0.75rem; border-radius: 0.5rem;">
            <p><strong>Наречие</strong></p>
            <p style="font-size: 0.8rem;">быстро, медленно</p>
          </div>
          <div style="background: rgba(236, 72, 153, 0.2); padding: 0.75rem; border-radius: 0.5rem;">
            <p><strong>Местоимение</strong></p>
            <p style="font-size: 0.8rem;">я, ты, он, она</p>
          </div>
          <div style="background: rgba(6, 182, 212, 0.2); padding: 0.75rem; border-radius: 0.5rem;">
            <p><strong>Числительное</strong></p>
            <p style="font-size: 0.8rem;">один, два, три</p>
          </div>
          <div style="background: rgba(249, 115, 22, 0.2); padding: 0.75rem; border-radius: 0.5rem;">
            <p><strong>Предлог</strong></p>
            <p style="font-size: 0.8rem;">в, на, под, над</p>
          </div>
        </div>
      `,
      duration: 25
    },
    {
      id: 'pos-6',
      type: 'text',
      title: 'Молодец! 🎉',
      content: `
        <div style="text-align: center;">
          <p style="font-size: 3rem;">🌟</p>
          <p style="font-size: 1.5rem;">Теперь ты знаешь:</p>
          <ul style="text-align: left; display: inline-block; margin-top: 1rem;">
            <li>✅ Что такое части речи</li>
            <li>✅ Имя существительное (кто? что?)</li>
            <li>✅ Имя прилагательное (какой?)</li>
            <li>✅ Глагол (что делать?)</li>
            <li>✅ Другие части речи</li>
          </ul>
        </div>
      `,
      duration: 15
    }
  ],
  totalDuration: 155
}

// Science: Круговорот воды (4 слайда)
export const waterCycleLesson: SampleLesson = {
  id: 'science-water-cycle',
  title: 'Круговорот воды в природе',
  subject: 'Окружающий мир',
  description: 'Узнай, как вода путешествует по планете',
  grade: 3,
  slides: [
    {
      id: 'water-1',
      type: 'text',
      title: 'Куда девается вода? 💧',
      content: `
        <p>Вода на Земле постоянно движется!</p>
        <div style="text-align: center; margin: 1rem 0;">
          <p style="font-size: 4rem;">🌊 → ☁️ → 🌧️ → 🌊</p>
        </div>
        <p>Этот процесс называется <strong>круговоротом воды</strong>.</p>
        <p>Вода никогда не исчезает, она просто меняет своё состояние и место!</p>
      `,
      duration: 25
    },
    {
      id: 'water-2',
      type: 'text',
      title: 'Испарение ☀️',
      content: `
        <div style="text-align: center; margin-bottom: 1rem;">
          <p style="font-size: 3rem;">☀️</p>
          <p><strong>Солнце нагревает воду</strong></p>
        </div>
        <p>Когда солнце греет воду в реках, озёрах и морях:</p>
        <ol>
          <li>💧 Вода нагревается</li>
          <li>🌫️ Превращается в невидимый пар</li>
          <li>☁️ Пар поднимается вверх</li>
        </ol>
        <p style="margin-top: 1rem;">Этот процесс называется <strong>испарение</strong>!</p>
      `,
      duration: 35,
      checkpoint: {
        type: 'quiz',
        question: 'Что происходит с водой при испарении?',
        options: [
          'Она исчезает',
          'Она превращается в лёд',
          'Она превращается в пар',
          'Она становится грязной'
        ],
        correctAnswer: 2,
        hint: 'При нагревании вода меняет своё состояние.'
      }
    },
    {
      id: 'water-3',
      type: 'demo',
      title: 'Образование облаков и осадки',
      content: `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div style="background: rgba(147, 197, 253, 0.2); padding: 1rem; border-radius: 0.5rem;">
            <p style="font-size: 2rem; text-align: center;">☁️</p>
            <p><strong>Образование облаков</strong></p>
            <ul style="font-size: 0.9rem;">
              <li>Пар остывает наверху</li>
              <li>Превращается в капельки</li>
              <li>Капельки образуют облака</li>
            </ul>
          </div>
          <div style="background: rgba(96, 165, 250, 0.2); padding: 1rem; border-radius: 0.5rem;">
            <p style="font-size: 2rem; text-align: center;">🌧️</p>
            <p><strong>Осадки</strong></p>
            <ul style="font-size: 0.9rem;">
              <li>Капельки становятся тяжёлыми</li>
              <li>Падают на землю</li>
              <li>Дождь, снег, град</li>
            </ul>
          </div>
        </div>
      `,
      duration: 40,
      checkpoint: {
        type: 'think',
        question: 'Как ты думаешь, почему зимой идёт снег, а не дождь? Объясни своими словами.',
        hint: 'Подумай о температуре воздуха зимой'
      }
    },
    {
      id: 'water-4',
      type: 'text',
      title: 'Круг завершается! 🔄',
      content: `
        <div style="text-align: center;">
          <p style="font-size: 2rem;">🌧️ → 🌊 → ☀️ → ☁️ → 🌧️</p>
        </div>
        <p>Вода, которая выпадает в виде осадков:</p>
        <ul>
          <li>💧 Стекает в реки и озёра</li>
          <li>🌱 Питает растения</li>
          <li>🕳️ Уходит в грунт</li>
        </ul>
        <p>И потом всё повторяется снова!</p>
        <div style="background: rgba(34, 197, 94, 0.2); padding: 1rem; border-radius: 0.5rem; margin-top: 1rem; text-align: center;">
          <p><strong>Круговорот воды — вечный процесс!</strong></p>
          <p style="font-size: 0.9rem;">Вода, которую ты пьёшь сегодня, могла быть в океане миллионы лет назад!</p>
        </div>
      `,
      duration: 30
    }
  ],
  totalDuration: 130
}

// Export all lessons
export const sampleLessons: SampleLesson[] = [
  fractionsLesson,
  partsOfSpeechLesson,
  waterCycleLesson
]

// Helper to find a lesson by ID
export function getLessonById(id: string): SampleLesson | undefined {
  return sampleLessons.find(lesson => lesson.id === id)
}

// Helper to get lessons by subject
export function getLessonsBySubject(subject: string): SampleLesson[] {
  return sampleLessons.filter(lesson => lesson.subject === subject)
}

// Helper to get lessons by grade
export function getLessonsByGrade(grade: number): SampleLesson[] {
  return sampleLessons.filter(lesson => lesson.grade === grade)
}
