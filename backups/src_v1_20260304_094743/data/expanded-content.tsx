// Расширенный контент для основных предметов (1-4 классы)
// Дополнительные разделы, темы, уроки и тесты
// Импортируйте и объединяйте с существующими данными

import type { Subject, Section, Topic, Lesson, QuizQuestion } from './types'

// ==================== МАТЕМАТИКА - РАСШИРЕННЫЙ КОНТЕНТ ====================

// Дополнительные разделы для математики 1 класса
export const mathGrade1AdditionalSections: Section[] = [
  {
    id: 'math1-s4',
    title: 'Сравнение чисел',
    description: 'Больше, меньше, равно',
    order: 4,
    topics: [
      {
        id: 'math1-s4-t1',
        title: 'Знаки сравнения',
        description: '>, <, =',
        theory: `<h3>Знаки сравнения</h3>
        <ul>
          <li><b>></b> — больше (птичка смотрит вправо, где число больше)</li>
          <li><b><</b> — меньше (птичка смотрит влево, где число меньше)</li>
          <li><b>=</b> — равно (числа одинаковые)</li>
        </ul>
        <h4>Примеры:</h4>
        <ul>
          <li>5 > 3 (пять больше трёх)</li>
          <li>2 < 7 (два меньше семи)</li>
          <li>4 = 4 (четыре равно четырём)</li>
        </ul>`,
        examples: ['Сравни: 3 и 5', 'Поставь знак: 7 _ 2'],
        completed: false,
        difficulty: 'easy',
        estimatedTime: 15,
        lessons: [
          {
            id: 'math1-s4-t1-l1',
            title: 'Знак больше >',
            content: `<div class="kid-lesson">
              <h2>🐦 Знак больше ></h2>
              <p>Знак > похож на клювик птички! Птичка смотрит туда, где число больше!</p>
              <div class="activity">5 > 3 — пять больше трёх!</div>
              <div class="emoji-practice">🐦 5 > 3</div>
              <div class="tip">💡 Клювик открыт в сторону большего числа!</div>
            </div>`,
            completed: false,
            order: 1,
            estimatedTime: 5
          },
          {
            id: 'math1-s4-t1-l2',
            title: 'Знак меньше <',
            content: `<div class="kid-lesson">
              <h2>🐦 Знак меньше <</h2>
              <p>Знак < тоже похож на клювик! Птичка смотрит туда, где число меньше!</p>
              <div class="activity">2 < 7 — два меньше семи!</div>
              <div class="emoji-practice">🐦 2 < 7</div>
              <div class="tip">💡 Клювик открыт в сторону меньшего числа!</div>
            </div>`,
            completed: false,
            order: 2,
            estimatedTime: 5
          },
          {
            id: 'math1-s4-t1-l3',
            title: 'Знак равно =',
            content: `<div class="kid-lesson">
              <h2>= Знак равно</h2>
              <p>Если числа одинаковые, ставим знак = !</p>
              <div class="activity">4 = 4 — четыре равно четырём!</div>
              <div class="emoji-practice">4 = 4 ✓</div>
              <div class="tip">💡 Равно — это две чёрточки!</div>
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
    id: 'math1-s5',
    title: 'Задачи',
    description: 'Решаем простые задачи',
    order: 5,
    topics: [
      {
        id: 'math1-s5-t1',
        title: 'Задачи на сложение',
        description: 'Учимся решать задачи',
        theory: `<h3>Как решать задачи</h3>
        <h4>Алгоритм:</h4>
        <ol>
          <li>Прочитай задачу</li>
          <li>Найди условие (что известно)</li>
          <li>Найди вопрос (что нужно найти)</li>
          <li>Реши задачу</li>
          <li>Запиши ответ</li>
        </ol>
        <h4>Пример:</h4>
        <p>У Маши было 3 яблока. Ей дали ещё 2 яблока. Сколько яблок стало у Маши?</p>
        <p>Решение: 3 + 2 = 5</p>
        <p>Ответ: 5 яблок.</p>`,
        examples: ['Реши задачу про яблоки', 'Составь свою задачу'],
        completed: false,
        difficulty: 'medium',
        estimatedTime: 20,
        lessons: [
          {
            id: 'math1-s5-t1-l1',
            title: 'Условие и вопрос',
            content: `<div class="kid-lesson">
              <h2>📝 Задача</h2>
              <p><strong>Условие</strong> — то, что известно</p>
              <p><strong>Вопрос</strong> — то, что нужно найти</p>
              <div class="activity">Найди условие и вопрос в задаче!</div>
              <div class="tip">💡 В вопросе часто есть слово "сколько"!</div>
            </div>`,
            completed: false,
            order: 1,
            estimatedTime: 5
          },
          {
            id: 'math1-s5-t1-l2',
            title: 'Решаем задачу',
            content: `<div class="kid-lesson">
              <h2>✅ Решение задачи</h2>
              <p><strong>Задача:</strong> У Пети было 4 конфеты. Мама дала ещё 3. Сколько стало?</p>
              <p><strong>Условие:</strong> было 4, дали 3</p>
              <p><strong>Вопрос:</strong> сколько стало?</p>
              <p><strong>Решение:</strong> 4 + 3 = 7</p>
              <p><strong>Ответ:</strong> 7 конфет.</p>
              <div class="tip">💡 Всегда записывай ответ!</div>
            </div>`,
            completed: false,
            order: 2,
            estimatedTime: 5
          }
        ]
      }
    ]
  }
]

// Дополнительные тесты для математики 1 класса
export const mathGrade1AdditionalQuiz: QuizQuestion[] = [
  {
    id: 'math1-q8',
    question: 'Какой знак нужно поставить: 3 _ 8?',
    options: ['>', '<', '='],
    correctAnswer: 1,
    explanation: '3 < 8! Три меньше восьми! Клювик смотрит на меньшее число.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'math1-q9',
    question: 'Реши задачу: У Кати 2 куклы и 3 машинки. Сколько игрушек у Кати?',
    options: ['4', '5', '6', '7'],
    correctAnswer: 1,
    explanation: '2 + 3 = 5 игрушек!',
    difficulty: 'medium',
    points: 15
  },
  {
    id: 'math1-q10',
    question: 'Какое число больше: 7 или 4?',
    options: ['7', '4', 'Одинаковые', 'Не знаю'],
    correctAnswer: 0,
    explanation: '7 больше, чем 4! 7 > 4',
    difficulty: 'easy',
    points: 10
  }
]

// ==================== РУССКИЙ ЯЗЫК - РАСШИРЕННЫЙ КОНТЕНТ ====================

export const russianGrade1AdditionalSections: Section[] = [
  {
    id: 'rus1-s4',
    title: 'Слово и предложение',
    description: 'Учимся строить предложения',
    order: 4,
    topics: [
      {
        id: 'rus1-s4-t1',
        title: 'Предложение',
        description: 'Что такое предложение',
        theory: `<h3>Предложение</h3>
        <p>Предложение — это одно или несколько слов, которые выражают законченную мысль.</p>
        <h4>Правила:</h4>
        <ul>
          <li>Предложение начинается с большой буквы</li>
          <li>В конце предложения ставится точка, вопросительный или восклицательный знак</li>
          <li>Слова в предложении связаны по смыслу</li>
        </ul>
        <h4>Примеры:</h4>
        <ul>
          <li>Мама готовит обед.</li>
          <li>Ты идёшь гулять?</li>
          <li>Какой красивый цветок!</li>
        </ul>`,
        examples: ['Составь предложение', 'Найди конец предложения'],
        completed: false,
        difficulty: 'easy',
        estimatedTime: 20,
        lessons: [
          {
            id: 'rus1-s4-t1-l1',
            title: 'Большая буква',
            content: `<div class="kid-lesson">
              <h2>🔤 Большая буква</h2>
              <p>Предложение начинается с большой буквы!</p>
              <div class="activity">Напиши: Мама готовит суп.</div>
              <div class="emoji-practice">Мама — с большой буквы!</div>
              <div class="tip">💡 Первое слово — с большой буквы!</div>
            </div>`,
            completed: false,
            order: 1,
            estimatedTime: 5
          },
          {
            id: 'rus1-s4-t1-l2',
            title: 'Точка в конце',
            content: `<div class="kid-lesson">
              <h2>. Точка</h2>
              <p>В конце предложения ставится точка!</p>
              <div class="activity">Поставь точку: Мама готовит</div>
              <div class="emoji-practice">Мама готовит.</div>
              <div class="tip">💡 Точка — конец мысли!</div>
            </div>`,
            completed: false,
            order: 2,
            estimatedTime: 5
          }
        ]
      }
    ]
  }
]

// ==================== ОКРУЖАЮЩИЙ МИР - РАСШИРЕННЫЙ КОНТЕНТ ====================

export const worldGrade1AdditionalSections: Section[] = [
  {
    id: 'world1-s2',
    title: 'Природа',
    description: 'Живая и неживая природа',
    order: 2,
    topics: [
      {
        id: 'world1-s2-t1',
        title: 'Живая и неживая природа',
        description: 'Чем отличаются',
        theory: `<h3>Природа</h3>
        <h4>Живая природа:</h4>
        <ul>
          <li>растения 🌳</li>
          <li>животные 🐾</li>
          <li>грибы 🍄</li>
          <li>бактерии (микробы)</li>
        </ul>
        <h4>Неживая природа:</h4>
        <ul>
          <li>солнце ☀️</li>
          <li>воздух 🌬️</li>
          <li>вода 💧</li>
          <li>камни 🪨</li>
        </ul>`,
        examples: ['Что относится к живой природе?', 'Найди неживую природу'],
        completed: false,
        difficulty: 'easy',
        estimatedTime: 20,
        lessons: [
          {
            id: 'world1-s2-t1-l1',
            title: 'Живая природа',
            content: `<div class="kid-lesson">
              <h2>🌱 Живая природа</h2>
              <p>Живая природа — это то, что растёт, дышит, питается!</p>
              <ul>
                <li>🌳 растения (деревья, цветы)</li>
                <li>🐱 животные (кошки, собаки, птицы)</li>
                <li>🍄 грибы</li>
              </ul>
              <div class="tip">💡 Живое — дышит и растёт!</div>
            </div>`,
            completed: false,
            order: 1,
            estimatedTime: 5
          },
          {
            id: 'world1-s2-t1-l2',
            title: 'Неживая природа',
            content: `<div class="kid-lesson">
              <h2>☀️ Неживая природа</h2>
              <p>Неживая природа — не дышит и не растёт!</p>
              <ul>
                <li>☀️ солнце</li>
                <li>💧 вода</li>
                <li>🪨 камни</li>
                <li>🌬️ воздух</li>
              </ul>
              <div class="tip">💡 Солнце, вода, воздух — неживые!</div>
            </div>`,
            completed: false,
            order: 2,
            estimatedTime: 5
          }
        ]
      },
      {
        id: 'world1-s2-t2',
        title: 'Времена года',
        description: 'Зима, весна, лето, осень',
        theory: `<h3>Времена года</h3>
        <h4>Зима ❄️</h4>
        <p>Холодно, снег, лед</p>
        <h4>Весна 🌷</h4>
        <p>Теплеет, тает снег, появляются цветы</p>
        <h4>Лето ☀️</h4>
        <p>Жарко, зелень, каникулы</p>
        <h4>Осень 🍂</h4>
        <p>Прохладно, листопад, урожай</p>`,
        examples: ['Какое сейчас время года?', 'Назови признаки зимы'],
        completed: false,
        difficulty: 'easy',
        estimatedTime: 20,
        lessons: [
          {
            id: 'world1-s2-t2-l1',
            title: 'Зима и весна',
            content: `<div class="kid-lesson">
              <h2>❄️ Зима</h2>
              <p>Холодно! Снег, лёд, санки! 🛷</p>
              <h2>🌷 Весна</h2>
              <p>Теплеет! Тает снег, бегут ручьи, появляются цветы!</p>
              <div class="tip">💡 Зима — холод, Весна — тепло!</div>
            </div>`,
            completed: false,
            order: 1,
            estimatedTime: 5
          },
          {
            id: 'world1-s2-t2-l2',
            title: 'Лето и осень',
            content: `<div class="kid-lesson">
              <h2>☀️ Лето</h2>
              <p>Жарко! Солнце, купаться, каникулы! 🏖️</p>
              <h2>🍂 Осень</h2>
              <p>Прохладно! Листопад, урожай, дожди!</p>
              <div class="tip">💡 Лето — жара, Осень — листопад!</div>
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
    id: 'world1-s3',
    title: 'Человек',
    description: 'Организм человека',
    order: 3,
    topics: [
      {
        id: 'world1-s3-t1',
        title: 'Части тела',
        description: 'Голова, туловище, конечности',
        theory: `<h3>Тело человека</h3>
        <h4>Основные части:</h4>
        <ul>
          <li>Голова — на голове: глаза, нос, рот, уши</li>
          <li>Туловище — тело</li>
          <li>Руки — верхние конечности</li>
          <li>Ноги — нижние конечности</li>
        </ul>
        <h4>Органы чувств:</h4>
        <ul>
          <li>Глаза — зрение</li>
          <li>Уши — слух</li>
          <li>Нос — обоняние</li>
          <li>Язык — вкус</li>
          <li>Кожа — осязание</li>
        </ul>`,
        examples: ['Покажи части тела', 'Что делают глаза?'],
        completed: false,
        difficulty: 'easy',
        estimatedTime: 15,
        lessons: [
          {
            id: 'world1-s3-t1-l1',
            title: 'Голова',
            content: `<div class="kid-lesson">
              <h2>👤 Голова</h2>
              <p>На голове:</p>
              <ul>
                <li>👀 Глаза — видеть</li>
                <li>👂 Уши — слышать</li>
                <li>👃 Нос — дышать, нюхать</li>
                <li>👄 Рот — есть, говорить</li>
              </ul>
              <div class="tip">💡 Голова — главная часть тела!</div>
            </div>`,
            completed: false,
            order: 1,
            estimatedTime: 5
          }
        ]
      }
    ]
  }
]

// ==================== ФУНКЦИИ ДЛЯ ИНТЕГРАЦИИ ====================

/**
 * Объединяет дополнительные разделы с существующим предметом
 */
export function mergeAdditionalSections(
  existingSubject: Subject,
  additionalSections: Section[]
): Subject {
  return {
    ...existingSubject,
    sections: [...(existingSubject.sections || []), ...additionalSections]
  }
}

/**
 * Объединяет дополнительные тесты с существующим предметом
 */
export function mergeAdditionalQuiz(
  existingSubject: Subject,
  additionalQuiz: QuizQuestion[]
): Subject {
  return {
    ...existingSubject,
    quiz: [...(existingSubject.quiz || []), ...additionalQuiz]
  }
}

// ==================== ГОТОВЫЕ НАБОРЫ ДАННЫХ ====================

// Математика 1 класс с расширенным контентом
export const mathGrade1Expanded: Partial<Subject> = {
  sections: mathGrade1AdditionalSections,
  quiz: mathGrade1AdditionalQuiz
}

// Русский язык 1 класс с расширенным контентом
export const russianGrade1Expanded: Partial<Subject> = {
  sections: russianGrade1AdditionalSections
}

// Окружающий мир 1 класс с расширенным контентом
export const worldGrade1Expanded: Partial<Subject> = {
  sections: worldGrade1AdditionalSections
}
