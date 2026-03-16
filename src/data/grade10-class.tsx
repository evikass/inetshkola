// Полные данные для 10 класса
// Иерархия: Предмет → Раздел → Тема → Урок

import { 
  Calculator, Target, Atom, Scroll, BookOpen, Users, 
  Monitor, Languages, Bug, FlaskConical, GraduationCap, History, Telescope, BookOpenText, Globe, Shield, Palette, Music
} from 'lucide-react'
import type { Subject } from './types'

// ==================== 10 КЛАСС ====================

export const grade10Subjects: Subject[] = [
  // ==================== РУССКИЙ ЯЗЫК ====================
  {
    id: 'russian10',
    title: 'Русский язык',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'text-red-400',
    gradient: 'from-red-500 to-rose-500',
    description: 'Стилистика, культура речи, анализ текста',
    sections: [
      {
        id: 'rus10-s1',
        title: 'Фонетика и орфоэпия',
        description: 'Звуки речи и ударение',
        order: 1,
        topics: [
          {
            id: 'rus10-s1-t1',
            title: 'Фонетический разбор',
            description: 'Анализ звукового состава слова',
            theory: `<h3>Фонетика</h3>
            <p>Фонетика — раздел языкознания, изучающий звуки речи.</p>
            <h4>Гласные звуки:</h4>
            <ul>
              <li><b>Ударные</b>: [а], [о], [у], [ы], [и], [э]</li>
              <li><b>Безударные</b>: [ʌ], [иэ], [ыэ] — редуцированные</li>
            </ul>
            <h4>Согласные звуки:</h4>
            <ul>
              <li><b>Звонкие/глухие</b>: б-п, в-ф, г-к, д-т, ж-ш, з-с</li>
              <li><b>Твёрдые/мягкие</b>: [б]-[б'], [м]-[м']</li>
              <li><b>Всегда твёрдые</b>: [ж], [ш], [ц]</li>
              <li><b>Всегда мягкие</b>: [ч'], [щ'], [й']</li>
            </ul>`,
            examples: ['Сделай фонетический разбор слова "яблоко"', 'Определи количество звуков и букв'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'rus10-s1-t1-l1',
                title: 'Согласные звуки',
                content: `<div class="lesson">
                  <h2>🔊 Согласные звуки</h2>
                  <h3>Парные по звонкости/глухости:</h3>
                  <p>Б-П, В-Ф, Г-К, Д-Т, Ж-Ш, З-С</p>
                  <h3>Всегда звонкие:</h3>
                  <p>Л, М, Н, Р, Й</p>
                  <h3>Всегда глухие:</h3>
                  <p>Х, Ц, Ч, Щ</p>
                  <div class="tip">💡 Запомни: ЖИ-ШИ пиши с И!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'rus10-s1-t2',
            title: 'Орфоэпические нормы',
            description: 'Правильное ударение и произношение',
            theory: `<h3>Орфоэпия</h3>
            <p>Орфоэпия — совокупность правил произношения.</p>
            <h4>Ударение в словах:</h4>
            <ul>
              <li>звони́т, позво́нит (не звóнит!)</li>
              <li>катало́г (не катáлог!)</li>
              <li>сре́дства (не средствá!)</li>
              <li>краси́вее (не красивéе!)</li>
            </ul>`,
            examples: ['Поставь ударение в словах', 'Определи правильное произношение'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'rus10-s1-t2-l1',
                title: 'Правила ударения',
                content: `<div class="lesson">
                  <h2>📝 Ударение</h2>
                  <h3>Запомни ударения:</h3>
                  <ul>
                    <li>звони́т, позво́нит</li>
                    <li>катало́г, диалог</li>
                    <li>сре́дства, торты́</li>
                  </ul>
                  <div class="tip">💡 Ударение проверяй по орфоэпическому словарю!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'rus10-s2',
        title: 'Лексика и фразеология',
        description: 'Слово и его значение',
        order: 2,
        topics: [
          {
            id: 'rus10-s2-t1',
            title: 'Лексическое значение слова',
            description: 'Типы лексических значений',
            theory: `<h3>Лексика</h3>
            <p>Лексика — словарный состав языка.</p>
            <h4>Типы лексических значений:</h4>
            <ul>
              <li><b>Прямое</b> — основное значение</li>
              <li><b>Переносное</b> — вторичное значение</li>
            </ul>
            <h4>Синонимы, антонимы, омонимы:</h4>
            <p>Синонимы: большой — огромный</p>
            <p>Антонимы: большой — маленький</p>`,
            examples: ['Определи тип лексического значения', 'Подбери синонимы и антонимы'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'rus10-s2-t1-l1',
                title: 'Синонимы и антонимы',
                content: `<div class="lesson">
                  <h2>📚 Лексические отношения</h2>
                  <h3>Синонимы (близкие):</h3>
                  <p>Красивый — прекрасный — великолепный</p>
                  <h3>Антонимы (противоположные):</h3>
                  <p>Большой — маленький, Добрый — злой</p>
                  <div class="tip">💡 Синонимы обогащают речь!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'rus10-s3',
        title: 'Стили речи',
        description: 'Функциональные стили',
        order: 3,
        topics: [
          {
            id: 'rus10-s3-t1',
            title: 'Функциональные стили',
            description: 'Разговорный, книжные стили',
            theory: `<h3>Стили речи</h3>
            <h4>Разговорный стиль:</h4>
            <p>Сфера: бытовое общение</p>
            <h4>Научный стиль:</h4>
            <p>Сфера: наука, образование</p>
            <h4>Официально-деловой стиль:</h4>
            <p>Сфера: документы, законы</p>
            <h4>Публицистический стиль:</h4>
            <p>Сфера: СМИ, выступления</p>
            <h4>Художественный стиль:</h4>
            <p>Сфера: литература</p>`,
            examples: ['Определи стиль текста', 'Найди средства разных стилей'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'rus10-s3-t1-l1',
                title: 'Определение стиля',
                content: `<div class="lesson">
                  <h2>📝 Стили речи</h2>
                  <h3>Разговорный:</h3>
                  <p>«Привет! Как дела?»</p>
                  <h3>Научный:</h3>
                  <p>«Фотосинтез — процесс образования органических веществ...»</p>
                  <h3>Официально-деловой:</h3>
                  <p>«Довожу до Вашего сведения...»</p>
                  <div class="tip">💡 Стиль определяется по цели и сфере!</div>
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
        id: 'rus10-q1',
        question: 'В каком слове ударение падает на первый слог?',
        options: ['звонит', 'средства', 'красивее', 'каталог'],
        correctAnswer: 1,
        explanation: 'В слове «средства» ударение падает на первый слог: сре́дства.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus10-q2',
        question: 'Какой стиль используется в научных статьях?',
        options: ['Разговорный', 'Научный', 'Художественный', 'Официально-деловой'],
        correctAnswer: 1,
        explanation: 'Научный стиль используется в научных статьях.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus10-q3',
        question: 'Какие согласные всегда твёрдые?',
        options: ['Ч, Щ, Й', 'Ж, Ш, Ц', 'Б, В, Г', 'П, Ф, К'],
        correctAnswer: 1,
        explanation: 'Ж, Ш, Ц — всегда твёрдые согласные.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus10-q4',
        question: 'Какое слово имеет переносное значение?',
        options: ['Золотое кольцо', 'Золотые руки', 'Золотая медаль', 'Золотой слиток'],
        correctAnswer: 1,
        explanation: '"Золотые руки" — переносное значение (умелые руки).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus10-q5',
        question: 'Какой стиль характеризуется неофициальностью общения?',
        options: ['Научный', 'Разговорный', 'Официально-деловой', 'Публицистический'],
        correctAnswer: 1,
        explanation: 'Разговорный стиль используется в бытовом общении.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus10-q6',
        question: 'В каком слове верно поставлено ударение?',
        options: ['красИвее', 'красивЕе', 'красИве', 'красивЕй'],
        correctAnswer: 0,
        explanation: 'Ударение в слове «краси́вее» падает на второй слог.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus10-q7',
        question: 'Что такое синонимы?',
        options: ['Слова с противоположным значением', 'Слова с близким значением', 'Слова с одинаковым написанием', 'Слова с разным звучанием'],
        correctAnswer: 1,
        explanation: 'Синонимы — слова с близким или одинаковым значением.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ЛИТЕРАТУРА ====================
  {
    id: 'literature10',
    title: 'Литература',
    icon: <BookOpenText className="w-5 h-5" />,
    color: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Русская классика XIX века',
    sections: [
      {
        id: 'lit10-s1',
        title: 'А.С. Пушкин',
        description: 'Жизнь и творчество',
        order: 1,
        topics: [
          {
            id: 'lit10-s1-t1',
            title: 'Роман "Евгений Онегин"',
            description: 'Анализ романа в стихах',
            theory: `<h3>Роман "Евгений Онегин"</h3>
            <p>Роман в стихах, написанный в 1823-1831 годах.</p>
            <h4>Главная идея:</h4>
            <p>Изображение судьбы "лишнего человека" в русском обществе.</p>
            <h4>Система образов:</h4>
            <ul>
              <li><b>Евгений Онегин</b> — "лишний человек", скептик, эгоист</li>
              <li><b>Татьяна Ларина</b> — "милый идеал", искренность, глубина</li>
              <li><b>Владимир Ленский</b> — романтик, поэт, идеалист</li>
              <li><b>Ольга Ларина</b> — легкомысленная красавица</li>
            </ul>
            <h4>Особенности:</h4>
            <ul>
              <li>"Энциклопедия русской жизни"</li>
              <li>Онегинская строфа (14 строк, 4-стопный ямб)</li>
              <li>Лиро-эпический жанр</li>
            </ul>`,
            examples: ['Проанализируй образ Онегина', 'Сравни Татьяну и Ольгу'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 60,
            lessons: [
              {
                id: 'lit10-s1-t1-l1',
                title: 'Образ Онегина',
                content: `<div class="lesson">
                  <h2>📖 Евгений Онегин</h2>
                  <h3>Характеристика героя:</h3>
                  <ul>
                    <li>Тип "лишнего человека"</li>
                    <li>Образован, но поверхностно</li>
                    <li>Разочарован в жизни</li>
                    <li>Эгоист, не умеет любить</li>
                  </ul>
                  <h3>Эволюция героя:</h3>
                  <p>От эгоизма — к любви и раскаянию</p>
                  <div class="tip">💡 Онегин — отражение дворянской молодёжи XIX века!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              },
              {
                id: 'lit10-s1-t1-l2',
                title: 'Образ Татьяны',
                content: `<div class="lesson">
                  <h2>💕 Татьяна Ларина</h2>
                  <h3>"Милый идеал" Пушкина:</h3>
                  <ul>
                    <li>Искренность и естественность</li>
                    <li>Глубина чувств</li>
                    <li>Верность долгу</li>
                    <li>Русская душа</li>
                  </ul>
                  <h3>Изменения:</h3>
                  <p>Провинциальная девушка → светская дама</p>
                  <p>Но сохранила внутренний мир</p>
                  <div class="tip">💡 "Я вас люблю (к чему лукавить?)" — признание Татьяны</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 20
              }
            ]
          },
          {
            id: 'lit10-s1-t2',
            title: 'Лирика Пушкина',
            description: 'Темы и мотивы',
            theory: `<h3>Основные темы лирики</h3>
            <h4>Любовная лирика:</h4>
            <ul>
              <li>"Я помню чудное мгновенье..." (Керн)</li>
              <li>"На холмах Грузии лежит ночная мгла..."</li>
              <li>"Я вас любил: любовь ещё, быть может..."</li>
            </ul>
            <h4>Философская лирика:</h4>
            <ul>
              <li>"К морю" — тема свободы</li>
              <li>"Пророк" — назначение поэта</li>
              <li>"Я памятник себе воздвиг нерукотворный..."</li>
            </ul>
            <h4>Свободолюбивая лирика:</h4>
            <ul>
              <li>"К Чаадаеву"</li>
              <li>"Во глубине сибирских руд..."</li>
            </ul>`,
            examples: ['Проанализируй стихотворение', 'Определи тему лирики'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'lit10-s1-t2-l1',
                title: 'Любовная лирика',
                content: `<div class="lesson">
                  <h2>💝 Любовная лирика Пушкина</h2>
                  <h3>"Я вас любил...":</h3>
                  <p>Безответная любовь, благородство</p>
                  <p>"Я вас любил так искренно, так нежно..."</p>
                  <h3>"К ***" (Керн):</h3>
                  <p>"Я помню чудное мгновенье..."</p>
                  <p>Вдохновение, возрождение души</p>
                  <div class="tip">💡 Любовь у Пушкина — высокое, чистое чувство!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          }
        ]
      },
      {
        id: 'lit10-s2',
        title: 'М.Ю. Лермонтов',
        description: 'Поэзия и проза',
        order: 2,
        topics: [
          {
            id: 'lit10-s2-t1',
            title: 'Роман "Герой нашего времени"',
            description: 'Психологический роман',
            theory: `<h3>"Герой нашего времени"</h3>
            <p>Первый психологический роман в русской литературе.</p>
            <h4>Печорин — герой времени:</h4>
            <ul>
              <li>Тип "лишнего человека"</li>
              <li>Сила характера без цели</li>
              <li>Противоречивая натура</li>
              <li>Разрушитель судеб</li>
            </ul>
            <h4>Композиция:</h4>
            <p>Нарушена хронология — психологический эффект</p>
            <h4>Повести:</h4>
            <ul>
              <li>"Бэла" — страсть и трагедия</li>
              <li>"Максим Максимыч" — встреча с героем</li>
              <li>"Княжна Мери" — светское общество</li>
              <li>"Фаталист" — тема судьбы</li>
            </ul>`,
            examples: ['Проанализируй образ Печорина', 'Определи роль композиции'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 60,
            lessons: [
              {
                id: 'lit10-s2-t1-l1',
                title: 'Образ Печорина',
                content: `<div class="lesson">
                  <h2>🎭 Печорин</h2>
                  <h3>Характеристика:</h3>
                  <ul>
                    <li>"Страшный человек"</li>
                    <li>Ум, воля, скептицизм</li>
                    <li>Двойственность натуры</li>
                    <li>Одиночество и скука</li>
                  </ul>
                  <h3>Отношения:</h3>
                  <p>Бэла, Мери, Вера — разбитые судьбы</p>
                  <div class="tip">💡 Печорин — портрет поколения!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          },
          {
            id: 'lit10-s2-t2',
            title: 'Лирика Лермонтова',
            description: 'Темы и мотивы',
            theory: `<h3>Основные мотивы лирики</h3>
            <h4>Одиночество:</h4>
            <ul>
              <li>"Одиночество" — "Как страшно жизни сей оковы..."</li>
              <li>"Выхожу один я на дорогу..."</li>
            </ul>
            <h4>Свобода:</h4>
            <ul>
              <li>"Парус" — "Белеет парус одинокой..."</li>
              <li>"Мцыри" — поэма о свободе</li>
            </ul>
            <h4>Тема поэта и поэзии:</h4>
            <ul>
              <li>"Смерть поэта" — отклик на гибель Пушкина</li>
              <li>"Поэт" — назначение искусства</li>
            </ul>
            <h4>Патриотизм:</h4>
            <ul>
              <li>"Родина" — любовь к родной земле</li>
            </ul>`,
            examples: ['Проанализируй "Парус"', 'Определи тему одиночества'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'lit10-s2-t2-l1',
                title: 'Стихотворение "Парус"',
                content: `<div class="lesson">
                  <h2>⛵ "Парус"</h2>
                  <h3>Образ паруса:</h3>
                  <p>Символ одинокой, мятежной души</p>
                  <h3>Композиция:</h3>
                  <p>3 строфы, каждая — новая грань образа</p>
                  <h3>Ключевые строки:</h3>
                  <p>"А он, мятежный, просит бури,</p>
                  <p>Как будто в бурях есть покой!"</p>
                  <div class="tip">💡 Парус — символ романтического героя!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          }
        ]
      },
      {
        id: 'lit10-s3',
        title: 'Н.В. Гоголь',
        description: 'Сатира и реализм',
        order: 3,
        topics: [
          {
            id: 'lit10-s3-t1',
            title: 'Поэма "Мёртвые души"',
            description: 'Анализ произведения',
            theory: `<h3>"Мёртвые души"</h3>
            <p>Поэма в прозе (1842).</p>
            <h4>Сюжет:</h4>
            <p>Чичиков скупает "мёртвые души" — умерших крестьян для аферы.</p>
            <h4>Галерея помещиков:</h4>
            <ul>
              <li><b>Манилов</b> — сентиментальность, пустота</li>
              <li><b>Коробочка</b> — тупая жадность</li>
              <li><b>Ноздрёв</b> — безалаберность, хамство</li>
              <li><b>Собакевич</b> — грубая деловитость</li>
              <li><b>Плюшкин</b> — патологическая скупость</li>
            </ul>
            <h4>Идея:</h4>
            <p>Критика крепостничества, "мёртвые души" — омертвевшие характеры.</p>`,
            examples: ['Сравни образы помещиков', 'Проанализируй образ Чичикова'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 60,
            lessons: [
              {
                id: 'lit10-s3-t1-l1',
                title: 'Галерея помещиков',
                content: `<div class="lesson">
                  <h2>🏠 Помещики в поэме</h2>
                  <h3>Манилов:</h3>
                  <p>Мечтательность без дела, "маниловщина"</p>
                  <h3>Коробочка:</h3>
                  <p>Накопительство, боязнь нового</p>
                  <h3>Собакевич:</h3>
                  <p>"Дубинноголовый", грубая сила</p>
                  <h3>Плюшкин:</h3>
                  <p>"Прореха на человечестве"</p>
                  <div class="tip">💡 Гоголь показывает деградацию дворянства!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'lit10-q1',
        question: 'Кто автор "Евгения Онегина"?',
        options: ['М.Ю. Лермонтов', 'А.С. Пушкин', 'Н.В. Гоголь', 'И.С. Тургенев'],
        correctAnswer: 1,
        explanation: 'Роман в стихах "Евгений Онегин" написал А.С. Пушкин.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'lit10-q2',
        question: 'Какой тип героя представляет Печорин?',
        options: ['Герой-романтик', 'Лишний человек', 'Герой-труженик', 'Герой-революционер'],
        correctAnswer: 1,
        explanation: 'Печорин — типичный "лишний человек" в русской литературе.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'lit10-q3',
        question: 'Сколько помещиков посещает Чичиков в "Мёртвых душах"?',
        options: ['Трёх', 'Четырёх', 'Пяти', 'Шести'],
        correctAnswer: 2,
        explanation: 'Чичиков посещает пять помещиков: Манилова, Коробочку, Ноздрёва, Собакевича и Плюшкина.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'lit10-q4',
        question: 'Как называется строфа, использованная Пушкиным в "Евгении Онегине"?',
        options: ['Сонет', 'Онегинская строфа', 'Ода', 'Баллада'],
        correctAnswer: 1,
        explanation: 'Онегинская строфа — 14 строк 4-стопного ямба.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'lit10-q5',
        question: 'Кого Пушкин назвал "милым идеалом"?',
        options: ['Ольгу Ларину', 'Татьяну Ларину', 'Наталью Гончарову', 'Анну Керн'],
        correctAnswer: 1,
        explanation: 'Татьяна Ларина — "милый идеал" Пушкина.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'lit10-q6',
        question: 'Какой жанр у произведения "Герой нашего времени"?',
        options: ['Роман-эпопея', 'Психологический роман', 'Повесть', 'Рассказ'],
        correctAnswer: 1,
        explanation: '"Герой нашего времени" — первый психологический роман в русской литературе.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'lit10-q7',
        question: 'Кто из помещиков в "Мёртвых душах" был "прорехой на человечестве"?',
        options: ['Манилов', 'Ноздрёв', 'Плюшкин', 'Собакевич'],
        correctAnswer: 2,
        explanation: 'Гоголь называет Плюшкина "прорехой на человечестве" из-за его патологической скупости.',
        difficulty: 'hard',
        points: 20
      },
      {
        id: 'lit10-q8',
        question: 'В каком стихотворении Лермонтов откликнулся на гибель Пушкина?',
        options: ['"Парус"', '"Мцыри"', '"Смерть поэта"', '"Родина"'],
        correctAnswer: 2,
        explanation: '"Смерть поэта" — отклик Лермонтова на гибель Пушкина.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== АЛГЕБРА И НАЧАЛА АНАЛИЗА ====================
  {
    id: 'algebra10',
    title: 'Алгебра и начала анализа',
    icon: <Calculator className="w-5 h-5" />,
    color: 'text-blue-400',
    gradient: 'from-blue-500 to-violet-500',
    description: 'Тригонометрия, производная, функции',
    sections: [
      {
        id: 'alg10-s1',
        title: 'Тригонометрические функции',
        description: 'Синус, косинус, тангенс',
        order: 1,
        topics: [
          {
            id: 'alg10-s1-t1',
            title: 'Тригонометрические формулы',
            description: 'Основные тождества',
            theory: `<h3>Основные тригонометрические тождества</h3>
            <h4>Главное тождество:</h4>
            <p>sin²α + cos²α = 1</p>
            <h4>Связь тангенса и котангенса:</h4>
            <p>tgα · ctgα = 1</p>
            <h4>Формулы сложения:</h4>
            <p>sin(α + β) = sinα·cosβ + cosα·sinβ</p>
            <p>cos(α + β) = cosα·cosβ - sinα·sinβ</p>
            <h4>Формулы двойного угла:</h4>
            <p>sin2α = 2sinα·cosα</p>
            <p>cos2α = cos²α - sin²α</p>`,
            examples: ['Упрости: 1 - sin²α', 'Вычисли sin2α, если sinα = 0.6'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 45,
            lessons: [
              {
                id: 'alg10-s1-t1-l1',
                title: 'Основные тождества',
                content: `<div class="lesson">
                  <h2>📐 Тригонометрические тождества</h2>
                  <h3>Главное тождество:</h3>
                  <p><b>sin²α + cos²α = 1</b></p>
                  <h3>Из него следует:</h3>
                  <p>sin²α = 1 - cos²α</p>
                  <p>cos²α = 1 - sin²α</p>
                  <div class="tip">💡 Зная sinα, можно найти cosα и наоборот!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              },
              {
                id: 'alg10-s1-t1-l2',
                title: 'Формулы сложения',
                content: `<div class="lesson">
                  <h2>➕ Формулы сложения</h2>
                  <h3>Синус суммы:</h3>
                  <p>sin(α + β) = sinα·cosβ + cosα·sinβ</p>
                  <h3>Косинус суммы:</h3>
                  <p>cos(α + β) = cosα·cosβ - sinα·sinβ</p>
                  <div class="tip">💡 Эти формулы — основа тригонометрии!</div>
                </div>`,
                completed: false,
                order: 2,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'alg10-s1-t2',
            title: 'Тригонометрические уравнения',
            description: 'Решение уравнений',
            theory: `<h3>Простейшие тригонометрические уравнения</h3>
            <h4>sin x = a:</h4>
            <p>x = (-1)ⁿ · arcsin a + πn, n ∈ Z</p>
            <h4>cos x = a:</h4>
            <p>x = ± arccos a + 2πn, n ∈ Z</p>
            <h4>tg x = a:</h4>
            <p>x = arctg a + πn, n ∈ Z</p>`,
            examples: ['Реши: sin x = 0.5', 'Реши: cos x = -√2/2'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 50,
            lessons: [
              {
                id: 'alg10-s1-t2-l1',
                title: 'Решение sin x = a',
                content: `<div class="lesson">
                  <h2>📈 Уравнение sin x = a</h2>
                  <h3>Общее решение:</h3>
                  <p>x = (-1)ⁿ · arcsin a + πn, n ∈ Z</p>
                  <h3>Частные случаи:</h3>
                  <ul>
                    <li>sin x = 0 → x = πn</li>
                    <li>sin x = 1 → x = π/2 + 2πn</li>
                  </ul>
                  <div class="tip">💡 |a| ≤ 1 — иначе решений нет!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'alg10-s2',
        title: 'Производная',
        description: 'Понятие производной и её применение',
        order: 2,
        topics: [
          {
            id: 'alg10-s2-t1',
            title: 'Понятие производной',
            description: 'Определение и формулы',
            theory: `<h3>Производная функции</h3>
            <p>Производная — предел отношения приращения функции к приращению аргумента.</p>
            <h4>Таблица производных:</h4>
            <ul>
              <li>C' = 0 (константа)</li>
              <li>(xⁿ)' = n·xⁿ⁻¹</li>
              <li>(sin x)' = cos x</li>
              <li>(cos x)' = -sin x</li>
              <li>(eˣ)' = eˣ</li>
              <li>(ln x)' = 1/x</li>
            </ul>`,
            examples: ['Найди производную: x³ + 2x', 'Найди: (x²·sin x)\''],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 50,
            lessons: [
              {
                id: 'alg10-s2-t1-l1',
                title: 'Таблица производных',
                content: `<div class="lesson">
                  <h2>📊 Производные элементарных функций</h2>
                  <h3>Степенная:</h3>
                  <p>(xⁿ)' = n·xⁿ⁻¹</p>
                  <h3>Тригонометрические:</h3>
                  <p>(sin x)' = cos x</p>
                  <p>(cos x)' = -sin x</p>
                  <div class="tip">💡 Выучи таблицу производных!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'alg10-s2-t2',
            title: 'Применение производной',
            description: 'Исследование функций',
            theory: `<h3>Применение производной</h3>
            <h4>Геометрический смысл:</h4>
            <p>f'(x₀) = tg α — тангенс угла наклона касательной</p>
            <h4>Исследование функции:</h4>
            <ul>
              <li>f'(x) > 0 — функция возрастает</li>
              <li>f'(x) < 0 — функция убывает</li>
              <li>f'(x) = 0 — критическая точка</li>
            </ul>`,
            examples: ['Найди точки экстремума', 'Напиши уравнение касательной'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 55,
            lessons: [
              {
                id: 'alg10-s2-t2-l1',
                title: 'Возрастание и убывание',
                content: `<div class="lesson">
                  <h2>📈 Монотонность функции</h2>
                  <h3>Правила:</h3>
                  <ul>
                    <li>f'(x) > 0 — возрастает</li>
                    <li>f'(x) < 0 — убывает</li>
                  </ul>
                  <div class="tip">💡 Точка, где f'(x) = 0 — возможный экстремум!</div>
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
        id: 'alg10-q1',
        question: 'Чему равен cos²α, если sin²α = 0.36?',
        options: ['0.36', '0.64', '1', '0.6'],
        correctAnswer: 1,
        explanation: 'sin²α + cos²α = 1, значит cos²α = 1 - 0.36 = 0.64.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg10-q2',
        question: 'Найди производную: f(x) = x⁴',
        options: ['x³', '4x³', '4x⁴', 'x⁴'],
        correctAnswer: 1,
        explanation: '(xⁿ)\' = n·xⁿ⁻¹. (x⁴)\' = 4x³.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg10-q3',
        question: 'Чему равен sin2α?',
        options: ['2sinαcosα', 'sin²α + cos²α', '2sinα', 'sinαcosα'],
        correctAnswer: 0,
        explanation: 'Формула двойного угла: sin2α = 2sinαcosα.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'alg10-q4',
        question: 'Какое уравнение является решением sin x = 0?',
        options: ['x = π/2 + 2πn', 'x = πn', 'x = 2πn', 'x = -π/2 + πn'],
        correctAnswer: 1,
        explanation: 'sin x = 0 при x = πn, n ∈ Z.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'alg10-q5',
        question: 'Найди производную: f(x) = cos x',
        options: ['sin x', '-sin x', 'cos x', '-cos x'],
        correctAnswer: 1,
        explanation: '(cos x)\' = -sin x.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg10-q6',
        question: 'При каком условии функция возрастает?',
        options: ['f\'(x) < 0', 'f\'(x) > 0', 'f\'(x) = 0', 'f(x) > 0'],
        correctAnswer: 1,
        explanation: 'Функция возрастает, когда f\'(x) > 0.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg10-q7',
        question: 'Чему равен tgα·ctgα?',
        options: ['0', '1', 'sin²α', 'cos²α'],
        correctAnswer: 1,
        explanation: 'tgα·ctgα = 1.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ГЕОМЕТРИЯ (Стереометрия) ====================
  {
    id: 'geometry10',
    title: 'Геометрия',
    icon: <Target className="w-5 h-5" />,
    color: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Стереометрия: многогранники и тела',
    sections: [
      {
        id: 'geom10-s1',
        title: 'Многогранники',
        description: 'Призма, пирамида',
        order: 1,
        topics: [
          {
            id: 'geom10-s1-t1',
            title: 'Призма',
            description: 'Прямая и наклонная призма',
            theory: `<h3>Призма</h3>
            <p>Многогранник с двумя равными основаниями и параллельными рёбрами.</p>
            <h4>Формулы:</h4>
            <ul>
              <li><b>Sбок</b> = P·h (прямая призма)</li>
              <li><b>V</b> = Sосн·h</li>
            </ul>`,
            examples: ['Найди объём призмы', 'Вычисли площадь боковой поверхности'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'geom10-s1-t1-l1',
                title: 'Прямая призма',
                content: `<div class="lesson">
                  <h2>📦 Призма</h2>
                  <h3>Формулы:</h3>
                  <p>Sбок = P·h</p>
                  <p>V = Sосн·h</p>
                  <div class="tip">💡 В прямой призме высота = боковому ребру!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'geom10-s1-t2',
            title: 'Пирамида',
            description: 'Правильная пирамида',
            theory: `<h3>Пирамида</h3>
            <h4>Правильная пирамида:</h4>
            <ul>
              <li>Основание — правильный многоугольник</li>
              <li>Все боковые рёбра равны</li>
            </ul>
            <h4>Формулы:</h4>
            <ul>
              <li><b>Sбок</b> = ½·P·a (a — апофема)</li>
              <li><b>V</b> = ⅓·Sосн·h</li>
            </ul>`,
            examples: ['Найди объём пирамиды', 'Вычисли апофему'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'geom10-s1-t2-l1',
                title: 'Правильная пирамида',
                content: `<div class="lesson">
                  <h2>🔺 Пирамида</h2>
                  <h3>Формулы:</h3>
                  <p>Sбок = ½·P·a</p>
                  <p>V = ⅓·Sосн·h</p>
                  <div class="tip">💡 Объём пирамиды = ⅓ объёма призмы!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'geom10-s2',
        title: 'Тела вращения',
        description: 'Цилиндр, конус, шар',
        order: 2,
        topics: [
          {
            id: 'geom10-s2-t1',
            title: 'Цилиндр и конус',
            description: 'Тела вращения',
            theory: `<h3>Цилиндр</h3>
            <ul>
              <li><b>Sбок</b> = 2πRh</li>
              <li><b>V</b> = πR²h</li>
            </ul>
            <h3>Конус</h3>
            <ul>
              <li><b>Sбок</b> = πRl</li>
              <li><b>V</b> = ⅓πR²h</li>
            </ul>`,
            examples: ['Найди объём цилиндра', 'Вычисли площадь конуса'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'geom10-s2-t1-l1',
                title: 'Цилиндр',
                content: `<div class="lesson">
                  <h2>📦 Цилиндр</h2>
                  <h3>Формулы:</h3>
                  <p>Sбок = 2πRh</p>
                  <p>V = πR²h</p>
                  <div class="tip">💡 Цилиндр = прямоугольник, свёрнутый в трубу!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'geom10-s2-t2',
            title: 'Шар и сфера',
            description: 'Шар, его элементы',
            theory: `<h3>Шар и сфера</h3>
            <h4>Сфера:</h4>
            <p>S = 4πR²</p>
            <h4>Шар:</h4>
            <p>V = ⁴⁄₃πR³</p>`,
            examples: ['Найди объём шара', 'Вычисли площадь сферы'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 30,
            lessons: [
              {
                id: 'geom10-s2-t2-l1',
                title: 'Шар и сфера',
                content: `<div class="lesson">
                  <h2>🔮 Шар</h2>
                  <h3>Формулы:</h3>
                  <p>Sсферы = 4πR²</p>
                  <p>Vшара = ⁴⁄₃πR³</p>
                  <div class="tip">💡 Сфера — это "кожа" шара!</div>
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
        id: 'geom10-q1',
        question: 'Чему равен объём призмы с Sосн = 10 и h = 5?',
        options: ['50', '25', '15', '30'],
        correctAnswer: 0,
        explanation: 'V = Sосн·h = 10·5 = 50.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom10-q2',
        question: 'Чему равен объём цилиндра с R = 2, h = 3?',
        options: ['6π', '12π', '4π', '8π'],
        correctAnswer: 1,
        explanation: 'V = πR²h = π·4·3 = 12π.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom10-q3',
        question: 'Чему равен объём пирамиды?',
        options: ['Sосн·h', '⅓·Sосн·h', '½·Sосн·h', '¼·Sосн·h'],
        correctAnswer: 1,
        explanation: 'Vпирамиды = ⅓·Sосн·h.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom10-q4',
        question: 'Чему равна площадь поверхности сферы?',
        options: ['2πR²', '3πR²', '4πR²', 'πR²'],
        correctAnswer: 2,
        explanation: 'Sсферы = 4πR².',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom10-q5',
        question: 'Чему равен объём шара с R = 3?',
        options: ['12π', '27π', '36π', '9π'],
        correctAnswer: 2,
        explanation: 'Vшара = ⁴⁄₃πR³ = ⁴⁄₃π·27 = 36π.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geom10-q6',
        question: 'Какая фигура является боковой поверхностью цилиндра?',
        options: ['Круг', 'Прямоугольник', 'Треугольник', 'Трапеция'],
        correctAnswer: 1,
        explanation: 'Боковая поверхность цилиндра — прямоугольник.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom10-q7',
        question: 'Что такое апофема пирамиды?',
        options: ['Высота пирамиды', 'Высота боковой грани', 'Радиус основания', 'Диагональ основания'],
        correctAnswer: 1,
        explanation: 'Апофема — высота боковой грани правильной пирамиды.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ИСТОРИЯ ====================
  {
    id: 'history10',
    title: 'История',
    icon: <History className="w-5 h-5" />,
    color: 'text-amber-400',
    gradient: 'from-amber-500 to-orange-500',
    description: 'Россия в XIX-XX веках',
    sections: [
      {
        id: 'hist10-s1',
        title: 'Россия в XIX веке',
        description: 'От Александра I до Николая II',
        order: 1,
        topics: [
          {
            id: 'hist10-s1-t1',
            title: 'Правление Александра I',
            description: 'Реформы и Отечественная война 1812 года',
            theory: `<h3>Александр I (1801-1825)</h3>
            <h4>Либеральные реформы:</h4>
            <ul>
              <li>Министерская реформа (1802)</li>
              <li>Реформа образования</li>
              <li>Проект Конституции (М.М. Сперанский)</li>
              <li>Указ о вольных хлебопашцах (1803)</li>
            </ul>
            <h4>Отечественная война 1812:</h4>
            <ul>
              <li>Причина: нарушение Тильзитского мира</li>
              <li>Бородинское сражение (26 августа)</li>
              <li>Тарутинский манёвр Кутузова</li>
              <li>Изгнание Наполеона</li>
            </ul>
            <h4>Итоги:</h4>
            <p>Венский конгресс (1815), Священный союз</p>`,
            examples: ['Охарактеризуй реформы Александра I', 'Опиши Бородинское сражение'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 50,
            lessons: [
              {
                id: 'hist10-s1-t1-l1',
                title: 'Отечественная война 1812',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/history/t11.svg" alt="Отечественная война 1812" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>⚔️ Война 1812 года</h2>
                  <h3>Причины:</h3>
                  <p>Континентальная блокада, споры о Польше</p>
                  <h3>Хронология:</h3>
                  <ul>
                    <li>12 июня — переход Наполеона через Неман</li>
                    <li>8 августа — Кутузов главнокомандующий</li>
                    <li>26 августа — Бородино</li>
                    <li>октябрь — бегство Наполеона из Москвы</li>
                  </ul>
                  <div class="tip">💡 "Сражение выиграно, но война не закончена!" — Кутузов</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          },
          {
            id: 'hist10-s1-t2',
            title: 'Декабристы',
            description: 'Восстание 14 декабря 1825 года',
            theory: `<h3>Движение декабристов</h3>
            <h4>Причины:</h4>
            <ul>
              <li>Влияние идей Просвещения</li>
              <li>Отечественная война 1812</li>
              <li>Крепостное право</li>
            </ul>
            <h4>Организации:</h4>
            <ul>
              <li>Союз спасения (1816)</li>
              <li>Союз благоденствия (1818)</li>
              <li>Северное и Южное общества</li>
            </ul>
            <h4>Восстание 14 декабря 1825:</h4>
            <ul>
              <li>Сенатская площадь в Петербурге</li>
              <li>Требования: Конституция, отмена крепостничества</li>
              <li>Подавление войсками Николая I</li>
            </ul>
            <h4>Итоги:</h4>
            <p>5 казнены (Пестель, Муравьёв-Апостол и др.), 121 сослан</p>`,
            examples: ['Определи причины восстания', 'Сравни программы декабристов'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'hist10-s1-t2-l1',
                title: 'Программы декабристов',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/history/t12.svg" alt="Декабристы" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>📜 Программы декабристов</h2>
                  <h3>"Русская правда" (Пестель):</h3>
                  <ul>
                    <li>Республика</li>
                    <li>Отмена крепостничества с землёй</li>
                    <li>Однопалатный парламент</li>
                  </ul>
                  <h3>"Конституция" (Муравьёв):</h3>
                  <ul>
                    <li>Конституционная монархия</li>
                    <li>Освобождение без земли</li>
                    <li>Двухпалатный парламент</li>
                  </ul>
                  <div class="tip">💡 Декабристы — первые революционеры России!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          },
          {
            id: 'hist10-s1-t3',
            title: 'Отмена крепостного права',
            description: 'Реформы Александра II',
            theory: `<h3>Крестьянская реформа 1861</h3>
            <h4>Причины:</h4>
            <ul>
              <li>Кризис крепостничества</li>
              <li>Поражение в Крымской войне</li>
              <li>Рост крестьянских выступлений</li>
            </ul>
            <h4>Основные положения:</h4>
            <ul>
              <li>Личная свобода крестьян</li>
              <li>Выкуп земли у помещиков</li>
              <li>Отрезки — потеря части земли</li>
              <li>Временнообязанное состояние</li>
            </ul>
            <h4>Значение:</h4>
            <p>Начало модернизации России</p>`,
            examples: ['Оцени реформу 1861 года', 'Что такое отрезки?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'hist10-s1-t3-l1',
                title: 'Суть реформы',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/history/t11.svg" alt="Отмена крепостного права" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>📋 Реформа 1861 года</h2>
                  <h3>Ключевые даты:</h3>
                  <ul>
                    <li>19 февраля 1861 — Манифест</li>
                    <li>1881 — конец временнообязанного состояния</li>
                  </ul>
                  <h3>Условия:</h3>
                  <p>Выкуп = 20% крестьянин + 80% государство (кредит на 49 лет)</p>
                  <p>Отрезки = крестьяне потеряли до 20% земли</p>
                  <h3>Значение:</h3>
                  <p>Россия пошла по пути капитализма</p>
                  <div class="tip">💡 "Великие реформы" изменили Россию навсегда!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          }
        ]
      },
      {
        id: 'hist10-s2',
        title: 'Россия в начале XX века',
        description: 'Революции и реформы',
        order: 2,
        topics: [
          {
            id: 'hist10-s2-t1',
            title: 'Революция 1905-1907',
            description: 'Первая русская революция',
            theory: `<h3>Революция 1905-1907</h3>
            <h4>Причины:</h4>
            <ul>
              <li>Отсутствие политических прав</li>
              <li>Крепостнические пережитки</li>
              <li>Русско-японская война</li>
            </ul>
            <h4>Ход:</h4>
            <ul>
              <li>9 января — Кровавое воскресенье</li>
              <li>Май — забастовки в Иванове</li>
              <li>Июнь — восстание на "Потёмкине"</li>
              <li>Октябрь — Всероссийская стачка</li>
              <li>Декабрь — вооружённое восстание в Москве</li>
            </ul>
            <h4>Итоги:</h4>
            <ul>
              <li>Манифест 17 октября</li>
              <li>Создание Государственной Думы</li>
              <li>Политические партии легализованы</li>
            </ul>`,
            examples: ['Опиши ход революции', 'Оцени Манифест 17 октября'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 50,
            lessons: [
              {
                id: 'hist10-s2-t1-l1',
                title: 'Кровавое воскресенье',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/history/t12.svg" alt="Революция 1905" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>🗓️ 9 января 1905</h2>
                  <h3>Шествие к царю:</h3>
                  <p>Отец Гапон, 150 000 рабочих</p>
                  <h3>Требования:</h3>
                  <ul>
                    <li>8-часовой рабочий день</li>
                    <li>Учредительное собрание</li>
                    <li>Политические свободы</li>
                  </ul>
                  <h3>Итог:</h3>
                  <p>Более 1000 убитых, начало революции</p>
                  <div class="tip">💡 "У нас больше нет царя!" — реакция народа</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          }
        ]
      },
      {
        id: 'hist10-s3',
        title: 'Первая мировая война',
        description: '1914-1918 годы',
        order: 3,
        topics: [
          {
            id: 'hist10-s3-t1',
            title: 'Россия в Первой мировой войне',
            description: 'Участие России в войне',
            theory: `<h3>Первая мировая война (1914-1918)</h3>
            <h4>Причины:</h4>
            <ul>
              <li>Борьба за передел колоний</li>
              <li>Противоречия между державами</li>
              <li>Убийство эрцгерцога Франца Фердинанда</li>
            </ul>
            <h4>Военные действия:</h4>
            <ul>
              <li>1914 — Восточно-Прусская операция</li>
              <li>1915 — Великое отступление</li>
              <li>1916 — Брусиловский прорыв</li>
            </ul>
            <h4>Итоги для России:</h4>
            <ul>
              <li>Огромные потери</li>
              <li>Экономический кризис</li>
              <li>Рост недовольства</li>
              <li>Февральская революция 1917</li>
            </ul>`,
            examples: ['Опиши Брусиловский прорыв', 'Каковы причины вступления России в войну?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 50,
            lessons: [
              {
                id: 'hist10-s3-t1-l1',
                title: 'Брусиловский прорыв',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/history/t11.svg" alt="Первая мировая война" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>⚔️ Брусиловский прорыв</h2>
                  <h3>Дата:</h3>
                  <p>Май-июнь 1916 года</p>
                  <h3>Суть:</h3>
                  <p>Наступление Юго-Западного фронта под командованием А.А. Брусилова</p>
                  <h3>Результат:</h3>
                  <ul>
                    <li>Прорыв австрийского фронта на 340 км</li>
                    <li>Взятие 400 000 пленных</li>
                    <li>Спасение Франции от разгрома</li>
                  </ul>
                  <div class="tip">💡 Последний крупный успех Российской империи!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'hist10-s4',
        title: 'Революции 1917 года',
        description: 'Февраль и Октябрь',
        order: 4,
        topics: [
          {
            id: 'hist10-s4-t1',
            title: 'Февральская революция',
            description: 'Свержение монархии',
            theory: `<h3>Февральская революция 1917</h3>
            <h4>Причины:</h4>
            <ul>
              <li>Военные неудачи</li>
              <li>Экономический кризис</li>
              <li>Нерешённость аграрного вопроса</li>
              <li>"Министерская чехарда"</li>
            </ul>
            <h4>Ход:</h4>
            <ul>
              <li>23 февраля — забастовки в Петрограде</li>
              <li>27 февраля — переход армии на сторону народа</li>
              <li>2 марта — отречение Николая II</li>
            </ul>
            <h4>Итоги:</h4>
            <ul>
              <li>Свержение самодержавия</li>
              <li>Двоевластие: Временное правительство и Петросовет</li>
            </ul>`,
            examples: ['Опиши ход Февральской революции', 'Что такое двоевластие?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'hist10-s4-t1-l1',
                title: 'Отречение Николая II',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/history/t12.svg" alt="Февральская революция" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>📜 Отречение</h2>
                  <h3>Дата:</h3>
                  <p>2 марта 1917 года</p>
                  <h3>Место:</h3>
                  <p>Вагон поезда, станция Дно (Псков)</p>
                  <h3>Причина:</h3>
                  <p>Потеря поддержки армии, "Верхи не могут, низы не хотят"</p>
                  <h3>Итог:</h3>
                  <p>Конец 304-летней династии Романовых</p>
                  <div class="tip">💡 Двоевластие: Временное правительство и Петросовет!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'hist10-s4-t2',
            title: 'Октябрьская революция',
            description: 'Приход большевиков к власти',
            theory: `<h3>Октябрьская революция 1917</h3>
            <h4>Предпосылки:</h4>
            <ul>
              <li>Кризис Временного правительства</li>
              <li>"Апрельские тезисы" Ленина</li>
              <li>Корниловский мятеж</li>
              <li>Большевизация Советов</li>
            </ul>
            <h4>Ход:</h4>
            <ul>
              <li>24-25 октября — вооружённое восстание</li>
              <li>Штурм Зимнего дворца</li>
              <li>II съезд Советов</li>
            </ul>
            <h4>Первые декреты:</h4>
            <ul>
              <li>Декрет о мире</li>
              <li>Декрет о земле</li>
              <li>Декрет о власти</li>
            </ul>`,
            examples: ['Опиши ход Октябрьского восстания', 'Каковы первые декреты Советской власти?'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 55,
            lessons: [
              {
                id: 'hist10-s4-t2-l1',
                title: 'Первые декреты',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/history/t12.svg" alt="Октябрьская революция" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>📑 Декреты Советской власти</h2>
                  <h3>О мире (26 октября):</h3>
                  <p>Выход из войны без аннексий и контрибуций</p>
                  <h3>О земле (26 октября):</h3>
                  <p>Отмена частной собственности на землю, земля — крестьянам!</p>
                  <h3>О власти:</h3>
                  <p>Вся власть Советам! СНК во главе с Лениным</p>
                  <h3>Итог:</h3>
                  <p>Начало строительства социалистического государства</p>
                  <div class="tip">💡 "Мир — народам, земля — крестьянам, фабрики — рабочим!"</div>
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
        id: 'hist10-q1',
        question: 'В каком году была отменена крепостная зависимость?',
        options: ['1803', '1861', '1881', '1905'],
        correctAnswer: 1,
        explanation: 'Крепостное право было отменено в 1861 году Александром II.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'hist10-q2',
        question: 'Кто был главнокомандующим в войне 1812 года?',
        options: ['Александр I', 'Барклай-де-Толли', 'М.И. Кутузов', 'Сперанский'],
        correctAnswer: 2,
        explanation: 'М.И. Кутузов был назначен главнокомандующим 8 августа 1812 года.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'hist10-q3',
        question: 'Когда произошло Кровавое воскресенье?',
        options: ['1903', '1905', '1907', '1914'],
        correctAnswer: 1,
        explanation: 'Кровавое воскресенье — 9 января 1905 года.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist10-q4',
        question: 'Кто был автором проекта "Русская правда"?',
        options: ['Муравьёв', 'Пестель', 'Рылеев', 'Сперанский'],
        correctAnswer: 1,
        explanation: 'П.И. Пестель — автор "Русской правды".',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist10-q5',
        question: 'В каком году произошла Октябрьская революция?',
        options: ['1905', '1914', '1917', '1921'],
        correctAnswer: 2,
        explanation: 'Октябрьская революция произошла в октябре 1917 года.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'hist10-q6',
        question: 'Как назывался манифест, изданный 17 октября 1905 года?',
        options: ['Манифест о земле', 'Манифест о свободах', 'Манифест "Об усовершенствовании государственного порядка"', 'Манифест о войне'],
        correctAnswer: 2,
        explanation: 'Манифест 17 октября "Об усовершенствовании государственного порядка" даровал свободы.',
        difficulty: 'hard',
        points: 20
      },
      {
        id: 'hist10-q7',
        question: 'Какое событие началось 23 февраля 1917 года?',
        options: ['Октябрьская революция', 'Февральская революция', 'Первая мировая война', 'Гражданская война'],
        correctAnswer: 1,
        explanation: '23 февраля 1917 года началась Февральская революция.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist10-q8',
        question: 'Кто командовал Юго-Западным фронтом в 1916 году?',
        options: ['Кутузов', 'Брусилов', 'Колчак', 'Корнилов'],
        correctAnswer: 1,
        explanation: 'А.А. Брусилов командовал Юго-Западным фронтом и провёл знаменитый прорыв.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ФИЗИКА ====================
  {
    id: 'physics10',
    title: 'Физика',
    icon: <Atom className="w-5 h-5" />,
    color: 'text-pink-400',
    gradient: 'from-pink-500 to-rose-500',
    description: 'Молекулярная физика, электродинамика',
    sections: [
      {
        id: 'phys10-s1',
        title: 'Молекулярная физика',
        description: 'Газовые законы',
        order: 1,
        topics: [
          {
            id: 'phys10-s1-t1',
            title: 'Уравнение состояния идеального газа',
            description: 'Уравнение Менделеева-Клапейрона',
            theory: `<h3>Идеальный газ</h3>
            <h4>Уравнение Менделеева-Клапейрона:</h4>
            <p><b>pV = νRT</b></p>
            <h4>Изопроцессы:</h4>
            <ul>
              <li><b>Изотермический</b>: T = const, pV = const</li>
              <li><b>Изобарный</b>: p = const, V/T = const</li>
              <li><b>Изохорный</b>: V = const, p/T = const</li>
            </ul>`,
            examples: ['Найди давление газа', 'Определи температуру'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 50,
            lessons: [
              {
                id: 'phys10-s1-t1-l1',
                title: 'Уравнение состояния газа',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/physics/phys-18.svg" alt="Уравнение состояния газа" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>💨 Идеальный газ</h2>
                  <h3>Уравнение:</h3>
                  <p><b>pV = νRT</b></p>
                  <p>R = 8.31 Дж/(моль·К)</p>
                  <div class="tip">💡 R — универсальная газовая постоянная!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'phys10-s2',
        title: 'Электродинамика',
        description: 'Законы постоянного тока',
        order: 2,
        topics: [
          {
            id: 'phys10-s2-t1',
            title: 'Законы постоянного тока',
            description: 'Закон Ома',
            theory: `<h3>Закон Ома</h3>
            <h4>Для участка цепи:</h4>
            <p><b>I = U/R</b></p>
            <h4>Для полной цепи:</h4>
            <p><b>I = ε/(R + r)</b></p>
            <h4>Работа и мощность:</h4>
            <ul>
              <li>A = IUt</li>
              <li>P = IU</li>
              <li>Q = I²Rt (закон Джоуля-Ленца)</li>
            </ul>`,
            examples: ['Реши задачу на закон Ома', 'Найди мощность'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'phys10-s2-t1-l1',
                title: 'Закон Ома',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/physics/phys-10.svg" alt="Закон Ома" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>⚡ Закон Ома</h2>
                  <h3>Формула:</h3>
                  <p>I = U/R</p>
                  <h3>Единицы:</h3>
                  <p>I — Ампер, U — Вольт, R — Ом</p>
                  <div class="tip">💡 Закон Ома — основа электротехники!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'phys10-s3',
        title: 'Термодинамика',
        description: 'Законы термодинамики',
        order: 3,
        topics: [
          {
            id: 'phys10-s3-t1',
            title: 'Первый закон термодинамики',
            description: 'Закон сохранения энергии',
            theory: `<h3>Первый закон термодинамики</h3>
            <h4>Формулировка:</h4>
            <p>Количество теплоты, переданное системе, идёт на изменение её внутренней энергии и на совершение работы.</p>
            <h4>Формула:</h4>
            <p><b>Q = ΔU + A</b></p>
            <h4>Применение к изопроцессам:</h4>
            <ul>
              <li><b>Изохорный</b>: A = 0, Q = ΔU</li>
              <li><b>Изотермический</b>: ΔU = 0, Q = A</li>
              <li><b>Адиабатный</b>: Q = 0, A = -ΔU</li>
            </ul>`,
            examples: ['Рассчитай работу газа', 'Найди изменение внутренней энергии'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 50,
            lessons: [
              {
                id: 'phys10-s3-t1-l1',
                title: 'Применение первого закона',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/physics/phys-25.svg" alt="Первый закон термодинамики" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>🔥 Первый закон термодинамики</h2>
                  <h3>Формула:</h3>
                  <p>Q = ΔU + A</p>
                  <h3>Единицы:</h3>
                  <p>Q — Джоуль (Дж)</p>
                  <p>ΔU — изменение внутренней энергии</p>
                  <p>A — работа газа</p>
                  <div class="tip">💡 Это закон сохранения энергии для тепловых процессов!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'phys10-s3-t2',
            title: 'Второй закон термодинамики',
            description: 'Направление тепловых процессов',
            theory: `<h3>Второй закон термодинамики</h3>
            <h4>Формулировка Клаузиуса:</h4>
            <p>Теплота самопроизвольно переходит от более нагретого тела к менее нагретому.</p>
            <h4>Формулировка Кельвина:</h4>
            <p>Невозможно создать вечный двигатель второго рода.</p>
            <h4>Тепловые двигатели:</h4>
            <ul>
              <li><b>КПД</b> = A/Q₁ = (Q₁ - Q₂)/Q₁</li>
              <li><b>КПД идеальной машины</b> = (T₁ - T₂)/T₁</li>
            </ul>
            <h4>Цикл Карно:</h4>
            <p>Максимальный КПД для заданных температур</p>`,
            examples: ['Рассчитай КПД теплового двигателя', 'Определи работу двигателя'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 55,
            lessons: [
              {
                id: 'phys10-s3-t2-l1',
                title: 'Тепловые двигатели',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/physics/phys-19.svg" alt="Тепловые двигатели" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>⚙️ Тепловые двигатели</h2>
                  <h3>КПД:</h3>
                  <p>η = A/Q₁ = (T₁ - T₂)/T₁</p>
                  <h3>Примеры:</h3>
                  <ul>
                    <li>ДВС (автомобиль) — 25-40%</li>
                    <li>Паровой двигатель — 10-20%</li>
                  </ul>
                  <div class="tip">💡 КПД всегда меньше 100%!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'phys10-s4',
        title: 'Механика',
        description: 'Кинематика и динамика',
        order: 4,
        topics: [
          {
            id: 'phys10-s4-t1',
            title: 'Кинематика',
            description: 'Движение тел',
            theory: `<h3>Кинематика</h3>
            <h4>Основные понятия:</h4>
            <ul>
              <li><b>Перемещение</b> — вектор из начальной точки в конечную</li>
              <li><b>Скорость</b> — перемещение за единицу времени</li>
              <li><b>Ускорение</b> — изменение скорости</li>
            </ul>
            <h4>Уравнения равноускоренного движения:</h4>
            <ul>
              <li>v = v₀ + at</li>
              <li>S = v₀t + at²/2</li>
              <li>v² - v₀² = 2aS</li>
            </ul>
            <h4>Движение по окружности:</h4>
            <p>a = v²/R — центростремительное ускорение</p>`,
            examples: ['Найди скорость тела', 'Рассчитай тормозной путь'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'phys10-s4-t1-l1',
                title: 'Равноускоренное движение',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/physics/phys-13.svg" alt="Законы Ньютона" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>🚗 Равноускоренное движение</h2>
                  <h3>Формулы:</h3>
                  <p>v = v₀ + at</p>
                  <p>S = v₀t + at²/2</p>
                  <h3>Пример:</h3>
                  <p>Автомобиль разгоняется с a = 2 м/с²</p>
                  <p>За 10 с: v = 0 + 2·10 = 20 м/с</p>
                  <div class="tip">💡 При торможении ускорение отрицательное!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'phys10-s4-t2',
            title: 'Законы Ньютона',
            description: 'Основы динамики',
            theory: `<h3>Законы Ньютона</h3>
            <h4>Первый закон:</h4>
            <p>Тело сохраняет состояние покоя или равномерного движения, пока на него не действуют силы.</p>
            <h4>Второй закон:</h4>
            <p><b>F = ma</b></p>
            <p>Равнодействующая сил равна произведению массы на ускорение.</p>
            <h4>Третий закон:</h4>
            <p>Действие равно противодействию: F₁ = -F₂</p>
            <h4>Виды сил:</h4>
            <ul>
              <li>Сила тяжести: F = mg</li>
              <li>Сила упругости: F = kx</li>
              <li>Сила трения: F = μN</li>
            </ul>`,
            examples: ['Найди силу по второму закону', 'Рассчитай силу трения'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 50,
            lessons: [
              {
                id: 'phys10-s4-t2-l1',
                title: 'Применение законов Ньютона',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/physics/phys-20.svg" alt="Равноускоренное движение" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>⚡ Законы Ньютона</h2>
                  <h3>Второй закон:</h3>
                  <p>F = ma</p>
                  <h3>Пример:</h3>
                  <p>Масса 5 кг, ускорение 2 м/с²</p>
                  <p>F = 5·2 = 10 Н</p>
                  <div class="tip">💡 Второй закон — основа динамики!</div>
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
        id: 'phys10-q1',
        question: 'Какая формула выражает закон Ома для участка цепи?',
        options: ['I = q/t', 'I = U/R', 'P = IU', 'A = IUt'],
        correctAnswer: 1,
        explanation: 'Закон Ома: I = U/R.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'phys10-q2',
        question: 'Чему равна универсальная газовая постоянная?',
        options: ['6.63·10⁻³⁴ Дж·с', '8.31 Дж/(моль·К)', '3·10⁸ м/с', '9.8 м/с²'],
        correctAnswer: 1,
        explanation: 'R = 8.31 Дж/(моль·К).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'phys10-q3',
        question: 'Какой процесс происходит при постоянной температуре?',
        options: ['Изобарный', 'Изохорный', 'Изотермический', 'Адиабатный'],
        correctAnswer: 2,
        explanation: 'Изотермический процесс — процесс при T = const.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'phys10-q4',
        question: 'Чему равна работа газа при изохорном процессе?',
        options: ['p·ΔV', '0', 'ν·R·ΔT', 'p·V'],
        correctAnswer: 1,
        explanation: 'При изохорном процессе ΔV = 0, поэтому работа A = 0.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'phys10-q5',
        question: 'Какой закон выражается формулой F = ma?',
        options: ['Первый закон Ньютона', 'Второй закон Ньютона', 'Третий закон Ньютона', 'Закон Гука'],
        correctAnswer: 1,
        explanation: 'F = ma — второй закон Ньютона.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'phys10-q6',
        question: 'Что такое КПД теплового двигателя?',
        options: ['Отношение работы к полученной теплоте', 'Отношение теплоты к работе', 'Произведение работы и теплоты', 'Сумма работы и теплоты'],
        correctAnswer: 0,
        explanation: 'КПД = A/Q₁ = (Q₁ - Q₂)/Q₁.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'phys10-q7',
        question: 'Какая сила действует на тело массой 2 кг с ускорением 3 м/с²?',
        options: ['5 Н', '6 Н', '1.5 Н', '0.67 Н'],
        correctAnswer: 1,
        explanation: 'F = ma = 2·3 = 6 Н.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== ХИМИЯ ====================
  {
    id: 'chemistry10',
    title: 'Химия',
    icon: <FlaskConical className="w-5 h-5" />,
    color: 'text-cyan-400',
    gradient: 'from-cyan-500 to-teal-500',
    description: 'Органическая химия',
    sections: [
      {
        id: 'chem10-s1',
        title: 'Основы органической химии',
        description: 'Углеводороды',
        order: 1,
        topics: [
          {
            id: 'chem10-s1-t1',
            title: 'Предельные углеводороды',
            description: 'Алканы',
            theory: `<h3>Алканы (предельные углеводороды)</h3>
            <h4>Общая формула:</h4>
            <p><b>CnH2n+2</b></p>
            <h4>Примеры:</h4>
            <ul>
              <li>CH₄ — метан</li>
              <li>C₂H₆ — этан</li>
              <li>C₃H₈ — пропан</li>
              <li>C₄H₁₀ — бутан</li>
            </ul>
            <h4>Химические свойства:</h4>
            <ul>
              <li>Горение: CH₄ + 2O₂ → CO₂ + 2H₂O</li>
              <li>Галогенирование (свет)</li>
              <li>Нитрование (реакция Коновалова)</li>
            </ul>
            <h4>Получение:</h4>
            <p>Из природного газа, нефти</p>`,
            examples: ['Назови алкан C₅H₁₂', 'Напиши реакцию горения пропана'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'chem10-s1-t1-l1',
                title: 'Номенклатура алканов',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/chemistry/chem-15.svg" alt="Углеводороды" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>🧪 Алканы</h2>
                  <h3>Названия:</h3>
                  <ul>
                    <li>C₁ — метан</li>
                    <li>C₂ — этан</li>
                    <li>C₃ — пропан</li>
                    <li>C₄ — бутан</li>
                    <li>C₅ — пентан</li>
                    <li>C₆ — гексан</li>
                  </ul>
                  <div class="tip">💡 Мет-эт-проп-бут-пент-гекс-гепт-окт-нон-дек</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'chem10-s1-t2',
            title: 'Непредельные углеводороды',
            description: 'Алкены и алкины',
            theory: `<h3>Алкены</h3>
            <h4>Общая формула:</h4>
            <p><b>CnH2n</b></p>
            <h4>Примеры:</h4>
            <ul>
              <li>C₂H₄ — этен (этилен)</li>
              <li>C₃H₆ — пропен</li>
            </ul>
            <h4>Химические свойства:</h4>
            <ul>
              <li>Гидрирование: C₂H₄ + H₂ → C₂H₆</li>
              <li>Гидратация: C₂H₄ + H₂O → C₂H₅OH</li>
              <li>Полимеризация: n(C₂H₄) → (-CH₂-CH₂-)n</li>
            </ul>
            <h3>Алкины</h3>
            <h4>Общая формула:</h4>
            <p><b>CnH2n-2</b></p>
            <p>C₂H₂ — этин (ацетилен)</p>`,
            examples: ['Напиши реакцию гидратации этилена', 'Что такое полимеризация?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'chem10-s1-t2-l1',
                title: 'Реакции алкенов',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/chemistry/chem-08.svg" alt="Бензольное кольцо" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>⚗️ Алкены</h2>
                  <h3>Качественная реакция:</h3>
                  <p>C₂H₄ + Br₂ → C₂H₄Br₂</p>
                  <p>Обесцвечивание бромной воды</p>
                  <h3>Полимеризация:</h3>
                  <p>n(C₂H₄) → полиэтилен</p>
                  <div class="tip">💡 Двойная связь — источник активности!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'chem10-s2',
        title: 'Кислородсодержащие соединения',
        description: 'Спирты, альдегиды, карбоновые кислоты',
        order: 2,
        topics: [
          {
            id: 'chem10-s2-t1',
            title: 'Спирты',
            description: 'Одноатомные и многоатомные спирты',
            theory: `<h3>Спирты</h3>
            <h4>Общая формула:</h4>
            <p><b>R-OH</b></p>
            <h4>Примеры:</h4>
            <ul>
              <li>CH₃OH — метанол (ядовит!)</li>
              <li>C₂H₅OH — этанол (этиловый спирт)</li>
              <li>C₃H₇OH — пропанол</li>
            </ul>
            <h4>Химические свойства:</h4>
            <ul>
              <li>Горение: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O</li>
              <li>Окисление: C₂H₅OH → CH₃COH (альдегид)</li>
              <li>Взаимодействие с Na: 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂</li>
            </ul>
            <h4>Получение:</h4>
            <p>Гидратация этилена, брожение глюкозы</p>`,
            examples: ['Напиши реакцию горения этанола', 'Как получить этанол?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'chem10-s2-t1-l1',
                title: 'Свойства спиртов',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/chemistry/chem-15.svg" alt="Органические соединения" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>🍷 Спирты</h2>
                  <h3>Этанол:</h3>
                  <p>C₂H₅OH — этиловый спирт</p>
                  <h3>Качественная реакция:</h3>
                  <p>С CuO → альдегид (запах)</p>
                  <h3>Многоатомные спирты:</h3>
                  <p>Глицерин C₃H₅(OH)₃</p>
                  <div class="tip">💡 Спирты — производные углеводородов с группой -OH!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'chem10-s2-t2',
            title: 'Альдегиды и карбоновые кислоты',
            description: 'Производные углеводородов',
            theory: `<h3>Альдегиды</h3>
            <h4>Общая формула:</h4>
            <p><b>R-CHO</b></p>
            <h4>Примеры:</h4>
            <ul>
              <li>HCHO — формальдегид</li>
              <li>CH₃CHO — ацетальдегид</li>
            </ul>
            <h4>Качественные реакции:</h4>
            <ul>
              <li>Реакция "серебряного зеркала"</li>
              <li>Реакция с Cu(OH)₂</li>
            </ul>
            <h3>Карбоновые кислоты</h3>
            <h4>Общая формула:</h4>
            <p><b>R-COOH</b></p>
            <h4>Примеры:</h4>
            <ul>
              <li>HCOOH — муравьиная кислота</li>
              <li>CH₃COOH — уксусная кислота</li>
              <li>C₁₇H₃₅COOH — стеариновая кислота</li>
            </ul>`,
            examples: ['Напиши реакцию "серебряного зеркала"', 'Что такое уксусная кислота?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 50,
            lessons: [
              {
                id: 'chem10-s2-t2-l1',
                title: 'Альдегиды',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/chemistry/chem-15.svg" alt="Органические соединения" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>⚗️ Альдегиды</h2>
                  <h3>Реакция "серебряного зеркала":</h3>
                  <p>R-CHO + Ag₂O → R-COOH + 2Ag↓</p>
                  <p>Альдегид окисляется до кислоты</p>
                  <h3>Получение:</h3>
                  <p>Окисление спиртов</p>
                  <div class="tip">💡 Альдегиды содержат группу -CHO!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'chem10-s3',
        title: 'Углеводы',
        description: 'Моносахариды, дисахариды, полисахариды',
        order: 3,
        topics: [
          {
            id: 'chem10-s3-t1',
            title: 'Классификация углеводов',
            description: 'Строение и функции',
            theory: `<h3>Углеводы</h3>
            <h4>Моносахариды:</h4>
            <ul>
              <li><b>Глюкоза</b> C₆H₁₂O₆ — источник энергии</li>
              <li><b>Фруктоза</b> C₆H₁₂O₆ — фруктовый сахар</li>
              <li><b>Рибоза</b> C₅H₁₀O₅ — компонент РНК</li>
            </ul>
            <h4>Дисахариды:</h4>
            <ul>
              <li><b>Сахароза</b> C₁₂H₂₂O₁₁ — столовый сахар</li>
              <li><b>Лактоза</b> — молочный сахар</li>
              <li><b>Мальтоза</b> — солодовый сахар</li>
            </ul>
            <h4>Полисахариды:</h4>
            <ul>
              <li><b>Крахмал</b> (C₆H₁₀O₅)n — запасное вещество растений</li>
              <li><b>Целлюлоза</b> — клетчатка, основа клеточных стенок</li>
              <li><b>Гликоген</b> — "животный крахмал"</li>
            </ul>`,
            examples: ['Определи тип углевода', 'Напиши формулу глюкозы'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'chem10-s3-t1-l1',
                title: 'Глюкоза',
                content: `<div class="lesson">
                  <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="/inetshkola/images/topics/chemistry/chem-04.svg" alt="Молекулы" style="max-width: 100%; height: auto; border-radius: 12px;" />
                  </div>
                  <h2>🍬 Глюкоза</h2>
                  <h3>Формула:</h3>
                  <p>C₆H₁₂O₆</p>
                  <h3>Свойства:</h3>
                  <ul>
                    <li>Альдегидоспирт</li>
                    <li>Брожение: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂</li>
                    <li>Окисление: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O</li>
                  </ul>
                  <div class="tip">💡 Глюкоза — главный источник энергии!</div>
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
        id: 'chem10-q1',
        question: 'Какая общая формула алканов?',
        options: ['CnH2n', 'CnH2n+2', 'CnH2n-2', 'CnH2n-6'],
        correctAnswer: 1,
        explanation: 'Алканы: CnH2n+2 (предельные углеводороды).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'chem10-q2',
        question: 'Какой алкан имеет формулу C₄H₁₀?',
        options: ['Пропан', 'Бутан', 'Пентан', 'Метан'],
        correctAnswer: 1,
        explanation: 'C₄H₁₀ — бутан (4 атома углерода).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'chem10-q3',
        question: 'Какая общая формула алкенов?',
        options: ['CnH2n+2', 'CnH2n', 'CnH2n-2', 'CnH2n-6'],
        correctAnswer: 1,
        explanation: 'Алкены: CnH2n (непредельные углеводороды с двойной связью).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'chem10-q4',
        question: 'Какая реакция является качественной для алкенов?',
        options: ['Горение', 'Обесцвечивание бромной воды', 'Замещение', 'Нитрование'],
        correctAnswer: 1,
        explanation: 'Алкены обесцвечивают бромную воду из-за двойной связи.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'chem10-q5',
        question: 'Какая формула у этанола?',
        options: ['CH₃OH', 'C₂H₅OH', 'C₃H₇OH', 'C₄H₉OH'],
        correctAnswer: 1,
        explanation: 'C₂H₅OH — этанол (этиловый спирт).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'chem10-q6',
        question: 'Какая качественная реакция на альдегиды?',
        options: ['Реакция с водой', 'Реакция "серебряного зеркала"', 'Реакция горения', 'Реакция с кислородом'],
        correctAnswer: 1,
        explanation: 'Реакция "серебряного зеркала" — качественная реакция на альдегиды.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'chem10-q7',
        question: 'Какой углевод является источником энергии?',
        options: ['Крахмал', 'Целлюлоза', 'Глюкоза', 'Гликоген'],
        correctAnswer: 2,
        explanation: 'Глюкоза — основной источник энергии для клеток.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'chem10-q8',
        question: 'Какой продукт образуется при спиртовом брожении глюкозы?',
        options: ['Уксусная кислота', 'Этанол', 'Метанол', 'Глицерин'],
        correctAnswer: 1,
        explanation: 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ — спиртовое брожение.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== БИОЛОГИЯ ====================
  {
    id: 'biology10',
    title: 'Биология',
    icon: <Bug className="w-5 h-5" />,
    color: 'text-lime-400',
    gradient: 'from-lime-500 to-green-500',
    description: 'Общая биология',
    sections: [
      {
        id: 'bio10-s1',
        title: 'Клетка',
        description: 'Строение и функции',
        order: 1,
        topics: [
          {
            id: 'bio10-s1-t1',
            title: 'Строение клетки',
            description: 'Органеллы клетки',
            theory: `<h3>Строение эукариотической клетки</h3>
            <h4>Органеллы:</h4>
            <ul>
              <li><b>Ядро</b> — хранение генетической информации</li>
              <li><b>Митохондрии</b> — энергетические станции</li>
              <li><b>Рибосомы</b> — синтез белка</li>
              <li><b>ЭПР</b> — транспорт веществ</li>
              <li><b>Аппарат Гольджи</b> — упаковка белков</li>
              <li><b>Лизосомы</b> — пищеварение</li>
            </ul>
            <h4>Плазматическая мембрана:</h4>
            <p>Фосфолипидный бислой с белками</p>`,
            examples: ['Опиши функции митохондрий', 'Что такое рибосомы?'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'bio10-s1-t1-l1',
                title: 'Органеллы',
                content: `<div class="lesson">
                  <h2>🔬 Органеллы клетки</h2>
                  <h3>Митохондрии:</h3>
                  <p>АТФ — энергия клетки</p>
                  <h3>Рибосомы:</h3>
                  <p>Синтез белка из аминокислот</p>
                  <h3>Ядро:</h3>
                  <p>ДНК, хромосомы, наследственность</p>
                  <div class="tip">💡 "Клетка — элементарная единица жизни"</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'bio10-s2',
        title: 'Генетика',
        description: 'Основы наследственности',
        order: 2,
        topics: [
          {
            id: 'bio10-s2-t1',
            title: 'Законы Менделя',
            description: 'Наследование признаков',
            theory: `<h3>Законы Менделя</h3>
            <h4>Первый закон (единообразия):</h4>
            <p>При скрещивании гомозигот всё потомство единообразно.</p>
            <h4>Второй закон (расщепления):</h4>
            <p>Aa × Aa → 1AA : 2Aa : 1aa (3:1 по фенотипу)</p>
            <h4>Третий закон (независимого наследования):</h4>
            <p>Признаки наследуются независимо друг от друга.</p>
            <h4>Обозначения:</h4>
            <ul>
              <li>A — доминантный аллель</li>
              <li>a — рецессивный аллель</li>
              <li>AA, aa — гомозиготы</li>
              <li>Aa — гетерозигота</li>
            </ul>`,
            examples: ['Реши задачу на скрещивание', 'Определи генотип'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 50,
            lessons: [
              {
                id: 'bio10-s2-t1-l1',
                title: 'Решение задач',
                content: `<div class="lesson">
                  <h2>🧬 Генетические задачи</h2>
                  <h3>Алгоритм:</h3>
                  <ol>
                    <li>Определи признаки и аллели</li>
                    <li>Запиши генотипы родителей</li>
                    <li>Составь схему скрещивания</li>
                    <li>Определи гаметы</li>
                    <li>Найди расщепление</li>
                  </ol>
                  <div class="tip">💡 P — родители, F — потомство, G — гаметы</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          }
        ]
      },
      {
        id: 'bio10-s3',
        title: 'Эволюция',
        description: 'Теория эволюции',
        order: 3,
        topics: [
          {
            id: 'bio10-s3-t1',
            title: 'Дарвинизм',
            description: 'Эволюционная теория Ч. Дарвина',
            theory: `<h3>Теория эволюции</h3>
            <h4>Основные положения Ч. Дарвина:</h4>
            <ul>
              <li><b>Наследственная изменчивость</b> — материал для эволюции</li>
              <li><b>Борьба за существование</b> — конкуренция за ресурсы</li>
              <li><b>Естественный отбор</b> — выживание приспособленных</li>
            </ul>
            <h4>Формы естественного отбора:</h4>
            <ul>
              <li><b>Движущий</b> — изменение среды</li>
              <li><b>Стабилизирующий</b> — постоянство условий</li>
              <li><b>Разрывающий</b> — две формы в популяции</li>
            </ul>
            <h4>Приспособленность:</h4>
            <p>Результат действия естественного отбора</p>`,
            examples: ['Объясни механизм естественного отбора', 'Приведи пример приспособленности'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 50,
            lessons: [
              {
                id: 'bio10-s3-t1-l1',
                title: 'Естественный отбор',
                content: `<div class="lesson">
                  <h2>🌿 Естественный отбор</h2>
                  <h3>Суть:</h3>
                  <p>Выживают и размножаются наиболее приспособленные</p>
                  <h3>Пример:</h3>
                  <p>Берёзовая пяденица: тёмные формы выживают на загрязнённых деревьях</p>
                  <div class="tip">💡 "Выживает сильнейший" — не всегда самый сильный, а самый приспособленный!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'bio10-s3-t2',
            title: 'Видообразование',
            description: 'Процессы образования новых видов',
            theory: `<h3>Видообразование</h3>
            <h4>Пути видообразования:</h4>
            <ul>
              <li><b>Аллопатрическое</b> — географическое разделение</li>
              <li><b>Симпатрическое</b> — в одном ареале</li>
            </ul>
            <h4>Элементарные эволюционные факторы:</h4>
            <ul>
              <li><b>Мутации</b> — источник изменчивости</li>
              <li><b>Дрейф генов</b> — случайные изменения</li>
              <li><b>Изоляция</b> — разделение популяций</li>
              <li><b>Естественный отбор</b> — направляющий фактор</li>
            </ul>
            <h4>Микро- и макроэволюция:</h4>
            <p>Микроэволюция — в пределах вида</p>
            <p>Макроэволюция — надвидовой уровень</p>`,
            examples: ['Приведи пример аллопатрического видообразования', 'Что такое дрейф генов?'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 55,
            lessons: [
              {
                id: 'bio10-s3-t2-l1',
                title: 'Изоляция',
                content: `<div class="lesson">
                  <h2>🏝️ Изоляция</h2>
                  <h3>Типы:</h3>
                  <ul>
                    <li>Географическая — горы, реки, океаны</li>
                    <li>Экологическая — разные местообитания</li>
                    <li>Репродуктивная — невозможность скрещивания</li>
                  </ul>
                  <div class="tip">💡 Изоляция — ключевой фактор видообразования!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'bio10-s4',
        title: 'Экология',
        description: 'Взаимодействие организмов со средой',
        order: 4,
        topics: [
          {
            id: 'bio10-s4-t1',
            title: 'Экологические факторы',
            description: 'Факторы среды',
            theory: `<h3>Экологические факторы</h3>
            <h4>Абиотические:</h4>
            <ul>
              <li><b>Климатические</b> — температура, влажность, свет</li>
              <li><b>Эдафические</b> — почва</li>
              <li><b>Орографические</b> — рельеф</li>
            </ul>
            <h4>Биотические:</h4>
            <ul>
              <li><b>Хищник-жертва</b></li>
              <li><b>Симбиоз</b> — взаимовыгодное сожительство</li>
              <li><b>Паразитизм</b></li>
              <li><b>Конкуренция</b></li>
            </ul>
            <h4>Антропогенные:</h4>
            <p>Влияние человека на природу</p>`,
            examples: ['Классифицируй экологический фактор', 'Приведи пример симбиоза'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'bio10-s4-t1-l1',
                title: 'Биотические связи',
                content: `<div class="lesson">
                  <h2>🦠 Биотические факторы</h2>
                  <h3>Хищничество:</h3>
                  <p>Волк и заяц — "гонка вооружений"</p>
                  <h3>Симбиоз:</h3>
                  <p>Лишайник = гриб + водоросль</p>
                  <p>Клубеньковые бактерии и бобовые</p>
                  <div class="tip">💡 Симбиоз — взаимовыгодное сотрудничество!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'bio10-s4-t2',
            title: 'Экосистемы',
            description: 'Структура экосистем',
            theory: `<h3>Экосистема</h3>
            <h4>Структура:</h4>
            <ul>
              <li><b>Продуценты</b> — производители (растения)</li>
              <li><b>Консументы</b> — потребители (животные)</li>
              <li><b>Редуценты</b> — разрушители (грибы, бактерии)</li>
            </ul>
            <h4>Пищевые цепи:</h4>
            <p>Трава → Заяц → Лиса → Орёл</p>
            <h4>Правило 10%:</h4>
            <p>На каждый следующий уровень переходит ~10% энергии</p>
            <h4>Экологическая пирамида:</h4>
            <p>Отражает уменьшение биомассы и энергии</p>`,
            examples: ['Составь пищевую цепь', 'Объясни правило 10%'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'bio10-s4-t2-l1',
                title: 'Пищевые цепи',
                content: `<div class="lesson">
                  <h2>🔗 Пищевые цепи</h2>
                  <h3>Пример:</h3>
                  <p>Фитопланктон → Зоопланктон → Рыба → Тюлень → Белый медведь</p>
                  <h3>Правило:</h3>
                  <p>Каждый уровень — ~10% энергии предыдущего</p>
                  <div class="tip">💡 Чем короче цепь, тем эффективнее передача энергии!</div>
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
        id: 'bio10-q1',
        question: 'Какая органелла отвечает за синтез белка?',
        options: ['Митохондрия', 'Рибосома', 'Ядро', 'Лизосома'],
        correctAnswer: 1,
        explanation: 'Рибосомы синтезируют белки из аминокислот.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio10-q2',
        question: 'Какое расщепление по фенотипу даёт второй закон Менделя?',
        options: ['1:1', '1:2:1', '3:1', '9:3:3:1'],
        correctAnswer: 2,
        explanation: 'Второй закон: расщепление 3:1 по фенотипу.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio10-q3',
        question: 'Какая органелла является "энергетической станцией" клетки?',
        options: ['Рибосома', 'Митохондрия', 'Ядро', 'Лизосома'],
        correctAnswer: 1,
        explanation: 'Митохондрии производят АТФ — энергию клетки.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio10-q4',
        question: 'Кто является автором теории эволюции?',
        options: ['Менделеев', 'Мендель', 'Дарвин', 'Павлов'],
        correctAnswer: 2,
        explanation: 'Чарльз Дарвин — автор эволюционной теории.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio10-q5',
        question: 'Какой фактор эволюции является направляющим?',
        options: ['Мутации', 'Дрейф генов', 'Естественный отбор', 'Изоляция'],
        correctAnswer: 2,
        explanation: 'Естественный отбор — направляющий фактор эволюции.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio10-q6',
        question: 'Какие организмы являются продуцентами в экосистеме?',
        options: ['Животные', 'Растения', 'Грибы', 'Бактерии'],
        correctAnswer: 1,
        explanation: 'Продуценты (производители) — растения, создающие органические вещества.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio10-q7',
        question: 'Какое правило гласит, что на следующий трофический уровень переходит 10% энергии?',
        options: ['Правило Либиха', 'Правило 10%', 'Правило Аллена', 'Правило Бергмана'],
        correctAnswer: 1,
        explanation: 'Правило 10% — на следующий уровень переходит ~10% энергии.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio10-q8',
        question: 'Какой тип изоляции связан с географическим разделением популяций?',
        options: ['Репродуктивная', 'Экологическая', 'Географическая', 'Поведенческая'],
        correctAnswer: 2,
        explanation: 'Географическая изоляция — разделение популяций пространственными барьерами.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ИНФОРМАТИКА ====================
  {
    id: 'informatics10',
    title: 'Информатика',
    icon: <Monitor className="w-5 h-5" />,
    color: 'text-indigo-400',
    gradient: 'from-indigo-500 to-violet-500',
    description: 'Программирование и алгоритмы',
    sections: [
      {
        id: 'inf10-s1',
        title: 'Программирование',
        description: 'Основы Python',
        order: 1,
        topics: [
          {
            id: 'inf10-s1-t1',
            title: 'Введение в Python',
            description: 'Переменные и типы данных',
            theory: `<h3>Основы Python</h3>
            <h4>Типы данных:</h4>
            <ul>
              <li><b>int</b> — целые числа: 5, -3, 100</li>
              <li><b>float</b> — вещественные: 3.14, -0.5</li>
              <li><b>str</b> — строки: "Hello", 'World'</li>
              <li><b>bool</b> — логические: True, False</li>
              <li><b>list</b> — списки: [1, 2, 3]</li>
            </ul>
            <h4>Переменные:</h4>
            <pre>
x = 5
name = "Иван"
price = 99.99
is_student = True
            </pre>`,
            examples: ['Создай переменную', 'Определи тип данных'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 30,
            lessons: [
              {
                id: 'inf10-s1-t1-l1',
                title: 'Переменные',
                content: `<div class="lesson">
                  <h2>🐍 Python: Переменные</h2>
                  <h3>Создание:</h3>
                  <p>x = 10</p>
                  <p>name = "Мария"</p>
                  <h3>Операции:</h3>
                  <p>+ - * / // % **</p>
                  <div class="tip">💡 Python — язык с динамической типизацией!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'inf10-s1-t2',
            title: 'Условия и циклы',
            description: 'Конструкции управления',
            theory: `<h3>Условия</h3>
            <pre>
if x > 0:
    print("Положительное")
elif x < 0:
    print("Отрицательное")
else:
    print("Ноль")
            </pre>
            <h3>Цикл for:</h3>
            <pre>
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4
            </pre>
            <h3>Цикл while:</h3>
            <pre>
while x > 0:
    x -= 1
            </pre>`,
            examples: ['Напиши цикл for', 'Создай условие'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'inf10-s1-t2-l1',
                title: 'Циклы',
                content: `<div class="lesson">
                  <h2>🔄 Циклы в Python</h2>
                  <h3>for:</h3>
                  <p>for i in range(10):</p>
                  <h3>while:</h3>
                  <p>while условие:</p>
                  <h3>break и continue:</h3>
                  <p>break — выход из цикла</p>
                  <p>continue — следующая итерация</p>
                  <div class="tip">💡 Отступы важны в Python!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'inf10-s2',
        title: 'Алгоритмы',
        description: 'Сортировка и поиск',
        order: 2,
        topics: [
          {
            id: 'inf10-s2-t1',
            title: 'Сортировка',
            description: 'Алгоритмы сортировки',
            theory: `<h3>Сортировка пузырьком</h3>
            <pre>
for i in range(n):
    for j in range(n-1):
        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
            </pre>
            <h4>Сложность: O(n²)</h4>
            <h3>Быстрая сортировка (QuickSort)</h3>
            <p>Разделяй и властвуй — O(n log n)</p>`,
            examples: ['Реализуй сортировку', 'Определи сложность'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 50,
            lessons: [
              {
                id: 'inf10-s2-t1-l1',
                title: 'Сложность алгоритмов',
                content: `<div class="lesson">
                  <h2>📊 Сложность алгоритмов</h2>
                  <h3>O(n) — линейная:</h3>
                  <p>Поиск в массиве</p>
                  <h3>O(n²) — квадратичная:</h3>
                  <p>Сортировка пузырьком</p>
                  <h3>O(log n) — логарифмическая:</h3>
                  <p>Бинарный поиск</p>
                  <div class="tip">💡 Чем меньше O, тем быстрее!</div>
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
        id: 'inf10-q1',
        question: 'Какой тип данных для целых чисел в Python?',
        options: ['float', 'str', 'int', 'bool'],
        correctAnswer: 2,
        explanation: 'int — целые числа (integer).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'inf10-q2',
        question: 'Какая сложность у сортировки пузырьком?',
        options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'],
        correctAnswer: 1,
        explanation: 'Сортировка пузырьком имеет сложность O(n²).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'inf10-q3',
        question: 'Какой тип данных используется для хранения текста в Python?',
        options: ['int', 'float', 'str', 'bool'],
        correctAnswer: 2,
        explanation: 'str (string) — строковый тип данных для текста.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'inf10-q4',
        question: 'Какой цикл выполняется, пока условие истинно?',
        options: ['for', 'while', 'if', 'else'],
        correctAnswer: 1,
        explanation: 'Цикл while выполняется, пока условие истинно.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'inf10-q5',
        question: 'Что выведет print(range(3))?',
        options: ['[0, 1, 2]', '[1, 2, 3]', 'range(0, 3)', '[0, 1, 2, 3]'],
        correctAnswer: 2,
        explanation: 'range(3) возвращает объект range(0, 3).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'inf10-q6',
        question: 'Какая сложность у бинарного поиска?',
        options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'],
        correctAnswer: 2,
        explanation: 'Бинарный поиск имеет сложность O(log n).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'inf10-q7',
        question: 'Какое ключевое слово используется для выхода из цикла?',
        options: ['continue', 'break', 'return', 'exit'],
        correctAnswer: 1,
        explanation: 'break — выход из цикла.',
        difficulty: 'easy',
        points: 10
      }
    ]
  },

  // ==================== АНГЛИЙСКИЙ ЯЗЫК ====================
  {
    id: 'english10',
    title: 'Английский язык',
    icon: <Languages className="w-5 h-5" />,
    color: 'text-sky-400',
    gradient: 'from-sky-500 to-blue-500',
    description: 'Advanced grammar and vocabulary',
    sections: [
      {
        id: 'eng10-s1',
        title: 'Grammar',
        description: 'Advanced structures',
        order: 1,
        topics: [
          {
            id: 'eng10-s1-t1',
            title: 'Conditionals',
            description: 'Conditional sentences',
            theory: `<h3>Conditionals</h3>
            <h4>Zero Conditional:</h4>
            <p>If + Present Simple, Present Simple</p>
            <p>If you heat water to 100°C, it boils.</p>
            <h4>First Conditional:</h4>
            <p>If + Present Simple, will + infinitive</p>
            <p>If it rains, I will stay at home.</p>
            <h4>Second Conditional:</h4>
            <p>If + Past Simple, would + infinitive</p>
            <p>If I had money, I would buy a car.</p>
            <h4>Third Conditional:</h4>
            <p>If + Past Perfect, would have + V3</p>
            <p>If I had studied, I would have passed.</p>`,
            examples: ['Complete the conditional', 'Translate the sentence'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 45,
            lessons: [
              {
                id: 'eng10-s1-t1-l1',
                title: 'Second Conditional',
                content: `<div class="lesson">
                  <h2>🎯 Second Conditional</h2>
                  <h3>Structure:</h3>
                  <p>If + Past Simple, would + verb</p>
                  <h3>Usage:</h3>
                  <p>Imaginary situations in present/future</p>
                  <h3>Examples:</h3>
                  <p>If I were rich, I would travel the world.</p>
                  <p>If she knew the answer, she would tell us.</p>
                  <div class="tip">💡 Use "were" for all persons in formal English!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          },
          {
            id: 'eng10-s1-t2',
            title: 'Passive Voice',
            description: 'Страдательный залог',
            theory: `<h3>Passive Voice</h3>
            <h4>Formation:</h4>
            <p>Subject + to be + V3 (past participle)</p>
            <h4>Tenses:</h4>
            <ul>
              <li><b>Present Simple:</b> is/am/are + V3</li>
              <li><b>Past Simple:</b> was/were + V3</li>
              <li><b>Future Simple:</b> will be + V3</li>
              <li><b>Present Perfect:</b> have/has been + V3</li>
            </ul>
            <h4>Examples:</h4>
            <ul>
              <li>Active: They build houses.</li>
              <li>Passive: Houses are built.</li>
            </ul>`,
            examples: ['Transform to passive', 'Identify the tense'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'eng10-s1-t2-l1',
                title: 'Passive formation',
                content: `<div class="lesson">
                  <h2>📝 Passive Voice</h2>
                  <h3>Formula:</h3>
                  <p>Object + be + V3</p>
                  <h3>Examples:</h3>
                  <p>Active: Tom wrote a letter.</p>
                  <p>Passive: A letter was written by Tom.</p>
                  <div class="tip">💡 Use "by" to mention the agent!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'eng10-s2',
        title: 'Vocabulary',
        description: 'Advanced vocabulary',
        order: 2,
        topics: [
          {
            id: 'eng10-s2-t1',
            title: 'Phrasal Verbs',
            description: 'Common phrasal verbs',
            theory: `<h3>Phrasal Verbs</h3>
            <h4>Common phrasal verbs:</h4>
            <ul>
              <li><b>give up</b> — отказаться</li>
              <li><b>take off</b> — взлететь, снимать</li>
              <li><b>put on</b> — надевать</li>
              <li><b>turn up</b> — появляться, усиливать</li>
              <li><b>look after</b> — присматривать</li>
              <li><b>run out of</b> — заканчиваться</li>
              <li><b>get along</b> — ладить</li>
              <li><b>bring up</b> — воспитывать</li>
            </ul>`,
            examples: ['Fill in the phrasal verb', 'Translate the sentence'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'eng10-s2-t1-l1',
                title: 'Essential phrasal verbs',
                content: `<div class="lesson">
                  <h2>📚 Phrasal Verbs</h2>
                  <h3>Give up = quit:</h3>
                  <p>He gave up smoking.</p>
                  <h3>Run out of:</h3>
                  <p>We've run out of milk.</p>
                  <h3>Look after:</h3>
                  <p>Can you look after my cat?</p>
                  <div class="tip">💡 Context determines the meaning!</div>
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
        id: 'eng10-q1',
        question: 'Which conditional expresses imaginary situations?',
        options: ['Zero', 'First', 'Second', 'Third'],
        correctAnswer: 2,
        explanation: 'Second Conditional expresses imaginary/unreal situations.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'eng10-q2',
        question: 'What is the passive form of "They built a house"?',
        options: ['A house is built', 'A house was built', 'A house will be built', 'A house has been built'],
        correctAnswer: 1,
        explanation: 'Past Simple passive: was/were + V3.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'eng10-q3',
        question: 'Which conditional is used for real situations?',
        options: ['Zero', 'First', 'Second', 'Third'],
        correctAnswer: 1,
        explanation: 'First Conditional is used for real/possible future situations.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'eng10-q4',
        question: 'What does "give up" mean?',
        options: ['Start', 'Quit', 'Continue', 'Improve'],
        correctAnswer: 1,
        explanation: '"Give up" means to quit or stop doing something.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'eng10-q5',
        question: 'Which sentence is in Present Perfect?',
        options: ['I saw him yesterday', 'I have seen him', 'I will see him', 'I see him'],
        correctAnswer: 1,
        explanation: 'Present Perfect: have/has + V3.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'eng10-q6',
        question: 'What is the passive of "She writes letters"?',
        options: ['Letters are written by her', 'Letters is written by her', 'Letters were written by her', 'Letters will be written by her'],
        correctAnswer: 0,
        explanation: 'Present Simple passive: am/is/are + V3.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'eng10-q7',
        question: 'Which phrasal verb means "appear"?',
        options: ['Give up', 'Turn up', 'Put on', 'Look after'],
        correctAnswer: 1,
        explanation: '"Turn up" can mean to appear or arrive.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ОБЩЕСТВОЗНАНИЕ ====================
  {
    id: 'social10',
    title: 'Обществознание',
    icon: <Users className="w-5 h-5" />,
    color: 'text-emerald-400',
    gradient: 'from-emerald-500 to-teal-500',
    description: 'Человек и общество',
    sections: [
      {
        id: 'soc10-s1',
        title: 'Человек',
        description: 'Природа человека',
        order: 1,
        topics: [
          {
            id: 'soc10-s1-t1',
            title: 'Человек как биосоциальное существо',
            description: 'Природа и общество',
            theory: `<h3>Человек</h3>
            <h4>Биологическая природа:</h4>
            <ul>
              <li>Анатомические особенности</li>
              <li>Инстинкты и рефлексы</li>
              <li>Генетическая наследственность</li>
            </ul>
            <h4>Социальная природа:</h4>
            <ul>
              <li>Сознание и мышление</li>
              <li>Речь и общение</li>
              <li>Творчество и труд</li>
            </ul>
            <h4>Личность:</h4>
            <p>Человек как субъект отношений и деятельности</p>`,
            examples: ['Что такое личность?', 'Определи отличие человека от животного'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'soc10-s1-t1-l1',
                title: 'Индивид, личность, индивидуальность',
                content: `<div class="lesson">
                  <h2>👤 Понятия</h2>
                  <h3>Индивид:</h3>
                  <p>Представитель человеческого рода</p>
                  <h3>Личность:</h3>
                  <p>Субъект отношений и деятельности</p>
                  <h3>Индивидуальность:</h3>
                  <p>Уникальные черты человека</p>
                  <div class="tip">💡 Каждый человек — индивид, но не каждый — личность!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'soc10-s2',
        title: 'Общество',
        description: 'Социальные институты',
        order: 2,
        topics: [
          {
            id: 'soc10-s2-t1',
            title: 'Социальные институты',
            description: 'Основные институты общества',
            theory: `<h3>Социальные институты</h3>
            <h4>Определение:</h4>
            <p>Исторически сложившиеся формы организации деятельности людей</p>
            <h4>Основные институты:</h4>
            <ul>
              <li><b>Семья</b> — воспроизводство поколений</li>
              <li><b>Образование</b> — передача знаний</li>
              <li><b>Религия</b> — духовные потребности</li>
              <li><b>Государство</b> — управление, власть</li>
              <li><b>Экономика</b> — производство благ</li>
            </ul>`,
            examples: ['Назови функции семьи', 'Определи функции образования'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'soc10-s2-t1-l1',
                title: 'Функции институтов',
                content: `<div class="lesson">
                  <h2>🏛️ Социальные институты</h2>
                  <h3>Функции семьи:</h3>
                  <ul>
                    <li>Репродуктивная</li>
                    <li>Воспитательная</li>
                    <li>Эмоциональная</li>
                  </ul>
                  <h3>Функции образования:</h3>
                  <ul>
                    <li>Образовательная</li>
                    <li>Социализация</li>
                  </ul>
                  <div class="tip">💡 Институты обеспечивают стабильность общества!</div>
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
        id: 'soc10-q1',
        question: 'Что такое личность?',
        options: [
          'Представитель человеческого рода',
          'Субъект отношений и деятельности',
          'Биологический организм',
          'Генетический набор'
        ],
        correctAnswer: 1,
        explanation: 'Личность — человек как субъект отношений и сознательной деятельности.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'soc10-q2',
        question: 'Какой институт отвечает за воспроизводство поколений?',
        options: ['Государство', 'Образование', 'Семья', 'Религия'],
        correctAnswer: 2,
        explanation: 'Семья выполняет репродуктивную функцию.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'soc10-q3',
        question: 'Что такое индивид?',
        options: ['Субъект деятельности', 'Представитель человеческого рода', 'Уникальная личность', 'Социальная роль'],
        correctAnswer: 1,
        explanation: 'Индивид — представитель человеческого рода, отдельный человек.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'soc10-q4',
        question: 'Какой институт отвечает за передачу знаний?',
        options: ['Семья', 'Образование', 'Религия', 'Экономика'],
        correctAnswer: 1,
        explanation: 'Образование — институт, отвечающий за передачу знаний и социализацию.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'soc10-q5',
        question: 'Что отличает человека от животного?',
        options: ['Инстинкты', 'Сознание и речь', 'Биологические потребности', 'Дыхание'],
        correctAnswer: 1,
        explanation: 'Сознание, речь, творчество — отличительные черты человека.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'soc10-q6',
        question: 'Что такое индивидуальность?',
        options: ['Представитель рода', 'Субъект деятельности', 'Уникальные черты человека', 'Социальный статус'],
        correctAnswer: 2,
        explanation: 'Индивидуальность — уникальные, неповторимые черты человека.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'soc10-q7',
        question: 'Какая функция не относится к семье?',
        options: ['Репродуктивная', 'Воспитательная', 'Производственная', 'Эмоциональная'],
        correctAnswer: 2,
        explanation: 'Производственная функция — не основная функция семьи.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ГЕОГРАФИЯ ====================
  {
    id: 'geography10',
    title: 'География',
    icon: <Globe className="w-5 h-5" />,
    color: 'text-teal-400',
    gradient: 'from-teal-500 to-cyan-500',
    description: 'Социально-экономическая география мира',
    sections: [
      {
        id: 'geo10-s1',
        title: 'Население мира',
        description: 'Демография и расселение',
        order: 1,
        topics: [
          {
            id: 'geo10-s1-t1',
            title: 'Численность и воспроизводство населения',
            description: 'Демографические процессы',
            theory: `<h3>Население мира</h3>
            <h4>Численность:</h4>
            <p>На 2024 год — более 8 млрд человек</p>
            <h4>Типы воспроизводства:</h4>
            <ul>
              <li><b>Первый тип</b> — низкая рождаемость и смертность (Европа, Северная Америка)</li>
              <li><b>Второй тип</b> — высокая рождаемость, снижающаяся смертность (Африка, Азия)</li>
            </ul>
            <h4>Демографическая политика:</h4>
            <ul>
              <li><b>Антинаталистическая</b> — ограничение рождаемости (Китай, Индия)</li>
              <li><b>Пронаталистическая</b> — стимулирование рождаемости (Франция, Россия)</li>
            </ul>
            <h4>Демографический переход:</h4>
            <p>Переход от традиционного типа воспроизводства к современному</p>`,
            examples: ['Определи тип воспроизводства', 'Проанализируй демографическую политику'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'geo10-s1-t1-l1',
                title: 'Демографический переход',
                content: `<div class="lesson">
                  <h2>🌍 Демографический переход</h2>
                  <h3>Фазы перехода:</h3>
                  <ul>
                    <li>1 фаза: высокая рождаемость и смертность</li>
                    <li>2 фаза: высокая рождаемость, снижение смертности</li>
                    <li>3 фаза: снижение рождаемости и смертности</li>
                    <li>4 фаза: низкая рождаемость и смертность</li>
                  </ul>
                  <h3>Примеры:</h3>
                  <p>Китай — 2-3 фаза, Германия — 4 фаза, Нигер — 1-2 фаза</p>
                  <div class="tip">💡 Демографический взрыв — следствие 2-й фазы перехода!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          },
          {
            id: 'geo10-s1-t2',
            title: 'Миграции населения',
            description: 'Виды и причины миграций',
            theory: `<h3>Миграции</h3>
            <h4>Виды миграций:</h4>
            <ul>
              <li><b>Внутренние</b> — внутри страны</li>
              <li><b>Внешние</b> — между странами</li>
              <li><b>Эмиграция</b> — выезд из страны</li>
              <li><b>Иммиграция</b> — въезд в страну</li>
            </ul>
            <h4>Причины миграций:</h4>
            <ul>
              <li><b>Экономические</b> — поиск работы</li>
              <li><b>Политические</b> — преследования</li>
              <li><b>Экологические</b> — катастрофы</li>
              <li><b>Религиозные</b> — вера</li>
            </ul>
            <h4>Центры притяжения:</h4>
            <p>США, Западная Европа, Персидский залив</p>`,
            examples: ['Определи вид миграции', 'Назови причины миграции'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'geo10-s1-t2-l1',
                title: 'Миграционные потоки',
                content: `<div class="lesson">
                  <h2>🚶 Миграции</h2>
                  <h3>Главные направления:</h3>
                  <ul>
                    <li>Латинская Америка → США</li>
                    <li>Восточная Европа → Западная Европа</li>
                    <li>Южная Азия → Персидский залив</li>
                    <li>Африка → Европа</li>
                  </ul>
                  <h3>Последствия:</h3>
                  <p>Изменение демографической структуры, культурный обмен, трудовые ресурсы</p>
                  <div class="tip">💡 Миграция — важнейший фактор изменения населения!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'geo10-s2',
        title: 'Мировое хозяйство',
        description: 'Экономическая география',
        order: 2,
        topics: [
          {
            id: 'geo10-s2-t1',
            title: 'Международное разделение труда',
            description: 'МРТ и специализация стран',
            theory: `<h3>Международное разделение труда (МРТ)</h3>
            <h4>Сущность:</h4>
            <p>Специализация стран на производстве определённых товаров и услуг</p>
            <h4>Факторы МРТ:</h4>
            <ul>
              <li><b>Природные</b> — ресурсы, климат</li>
              <li><b>Экономические</b> — капитал, технологии</li>
              <li><b>Социальные</b> — трудовые ресурсы</li>
            </ul>
            <h4>Показатели:</h4>
            <ul>
              <li><b>Экспорт</b> — вывоз товаров</li>
              <li><b>Импорт</b> — ввоз товаров</li>
              <li><b>Сальдо</b> — разница экспорта и импорта</li>
            </ul>
            <h4>Международные организации:</h4>
            <p>ВТО, ЕС, НАФТА, АСЕАН, БРИКС</p>`,
            examples: ['Определи специализацию страны', 'Объясни причины МРТ'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'geo10-s2-t1-l1',
                title: 'Специализация стран',
                content: `<div class="lesson">
                  <h2>🏭 МРТ</h2>
                  <h3>Примеры специализации:</h3>
                  <ul>
                    <li>Саудовская Аравия — нефть</li>
                    <li>Китай — производство товаров</li>
                    <li>Япония — автомобили, электроника</li>
                    <li>Бразилия — кофе, соя</li>
                    <li>Швейцария — часы, банки</li>
                  </ul>
                  <div class="tip">💡 Глобализация усиливает МРТ!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'geo10-s2-t2',
            title: 'Топливно-энергетический комплекс',
            description: 'Энергетика мира',
            theory: `<h3>Энергетика мира</h3>
            <h4>Виды энергоресурсов:</h4>
            <ul>
              <li><b>Нефть</b> — главный энергоресурс (30%)</li>
              <li><b>Природный газ</b> — экологичное топливо (24%)</li>
              <li><b>Уголь</b> — самый распространённый (27%)</li>
              <li><b>Гидроэнергия</b> — возобновляемая (7%)</li>
              <li><b>Атомная энергия</b> — 4%</li>
            </ul>
            <h4>Главные нефтедобывающие страны:</h4>
            <p>США, Саудовская Аравия, Россия, Ирак, Канада</p>
            <h4>Энергопотребление:</h4>
            <p>США, Китай, Россия — лидеры потребления</p>`,
            examples: ['Назови главных экспортёров нефти', 'Сравни виды энергетики'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'geo10-s2-t2-l1',
                title: 'Нефтяная промышленность',
                content: `<div class="lesson">
                  <h2>🛢️ Нефть</h2>
                  <h3>Главные районы добычи:</h3>
                  <ul>
                    <li>Ближний Восток (Персидский залив)</li>
                    <li>Северное море</li>
                    <li>Мексиканский залив</li>
                    <li>Западная Сибирь</li>
                  </ul>
                  <h3>ОПЕК:</h3>
                  <p>Организация стран-экспортёров нефти</p>
                  <div class="tip">💡 "Чёрное золото" — главный энергоресурс мира!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'geo10-s3',
        title: 'Глобальные проблемы',
        description: 'Проблемы человечества',
        order: 3,
        topics: [
          {
            id: 'geo10-s3-t1',
            title: 'Экологические проблемы',
            description: 'Глобальные экологические вызовы',
            theory: `<h3>Экологические проблемы</h3>
            <h4>Глобальное потепление:</h4>
            <ul>
              <li>Причина — парниковые газы (CO₂)</li>
              <li>Последствия — таяние ледников, подъём уровня океана</li>
            </ul>
            <h4>Другие проблемы:</h4>
            <ul>
              <li><b>Истощение ресурсов</b> — нефть, газ, леса</li>
              <li><b>Загрязнение океана</b> — пластик, нефтяные разливы</li>
              <li><b>Опустынивание</b> — Сахель, Центральная Азия</li>
              <li><b>Сокращение биоразнообразия</b></li>
            </ul>
            <h4>Пути решения:</h4>
            <p>Киотский протокол, Парижское соглашение, "Зелёные технологии"</p>`,
            examples: ['Назови причины потепления', 'Предложи решение экологической проблемы'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'geo10-s3-t1-l1',
                title: 'Парниковый эффект',
                content: `<div class="lesson">
                  <h2>🌡️ Глобальное потепление</h2>
                  <h3>Механизм:</h3>
                  <p>CO₂ задерживает тепло в атмосфере</p>
                  <h3>Источники CO₂:</h3>
                  <ul>
                    <li>Сжигание ископаемого топлива</li>
                    <li>Вырубка лесов</li>
                    <li>Промышленность</li>
                  </ul>
                  <h3>Последствия:</h3>
                  <p>К 2100 году — повышение на 1.5-4°C</p>
                  <div class="tip">💡 Углеродный след — вклад каждого человека!</div>
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
        id: 'geo10-q1',
        question: 'Какой тип воспроизводства характерен для Европы?',
        options: ['Высокая рождаемость и смертность', 'Низкая рождаемость и смертность', 'Высокая рождаемость, низкая смертность', 'Средние показатели'],
        correctAnswer: 1,
        explanation: 'Для Европы характерен первый тип воспроизводства — низкая рождаемость и смертность.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo10-q2',
        question: 'Что такое эмиграция?',
        options: ['Въезд в страну', 'Выезд из страны', 'Внутренняя миграция', 'Сезонная миграция'],
        correctAnswer: 1,
        explanation: 'Эмиграция — выезд из страны на постоянное место жительства.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo10-q3',
        question: 'Какая страна является крупнейшим производителем нефти?',
        options: ['Саудовская Аравия', 'Россия', 'США', 'Китай'],
        correctAnswer: 2,
        explanation: 'США — крупнейший производитель нефти в мире.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geo10-q4',
        question: 'Что такое МРТ?',
        options: ['Международный рынок труда', 'Международное разделение труда', 'Мировой рынок товаров', 'Международная регистрация труда'],
        correctAnswer: 1,
        explanation: 'МРТ — Международное разделение труда, специализация стран.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo10-q5',
        question: 'Какая организация объединяет страны-экспортёры нефти?',
        options: ['ВТО', 'ОПЕК', 'ЕС', 'НАФТА'],
        correctAnswer: 1,
        explanation: 'ОПЕК — Организация стран-экспортёров нефти.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo10-q6',
        question: 'Какой газ является главной причиной парникового эффекта?',
        options: ['Азот', 'Кислород', 'Углекислый газ (CO₂)', 'Водород'],
        correctAnswer: 2,
        explanation: 'CO₂ (углекислый газ) — главный парниковый газ.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo10-q7',
        question: 'Что такое сальдо внешней торговли?',
        options: ['Сумма экспорта и импорта', 'Разница экспорта и импорта', 'Только экспорт', 'Только импорт'],
        correctAnswer: 1,
        explanation: 'Сальдо — разница между экспортом и импортом.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geo10-q8',
        question: 'Какое соглашение направлено на борьбу с изменением климата?',
        options: ['Киотский протокол', 'Вашингтонское соглашение', 'Лондонский договор', 'Берлинский пакт'],
        correctAnswer: 0,
        explanation: 'Киотский протокол — международное соглашение по сокращению выбросов парниковых газов.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ФИЗИЧЕСКАЯ КУЛЬТУРА ====================
  {
    id: 'pe10',
    title: 'Физическая культура',
    icon: <Target className="w-5 h-5" />,
    color: 'text-orange-400',
    gradient: 'from-orange-500 to-red-500',
    description: 'Физическое совершенствование',
    sections: [
      {
        id: 'pe10-s1',
        title: 'Физкультурно-оздоровительная деятельность',
        description: 'Здоровый образ жизни',
        order: 1,
        topics: [
          {
            id: 'pe10-s1-t1',
            title: 'Здоровый образ жизни',
            description: 'Составляющие ЗОЖ',
            theory: `<h3>Здоровый образ жизни</h3>
            <h4>Основные компоненты:</h4>
            <ul>
              <li><b>Двигательная активность</b> — минимум 10000 шагов в день</li>
              <li><b>Правильное питание</b> — баланс белков, жиров, углеводов</li>
              <li><b>Режим дня</b> — сон 7-9 часов</li>
              <li><b>Отказ от вредных привычек</b> — курение, алкоголь</li>
              <li><b>Закаливание</b> — укрепление иммунитета</li>
            </ul>
            <h4>Индекс массы тела (ИМТ):</h4>
            <p>ИМТ = вес (кг) / рост² (м)</p>
            <ul>
              <li>Норма: 18.5-25</li>
              <li>Избыточный вес: 25-30</li>
              <li>Ожирение: более 30</li>
            </ul>`,
            examples: ['Рассчитай ИМТ', 'Составь план ЗОЖ'],
            completed: false,
            difficulty: 'easy',
            estimatedTime: 30,
            lessons: [
              {
                id: 'pe10-s1-t1-l1',
                title: 'Компоненты ЗОЖ',
                content: `<div class="lesson">
                  <h2>💪 Здоровый образ жизни</h2>
                  <h3>Четыре кита здоровья:</h3>
                  <ul>
                    <li>🏃 Движение — основа жизни</li>
                    <li>🥗 Питание — топливо организма</li>
                    <li>😴 Сон — восстановление сил</li>
                    <li>🧘 Психическое здоровье</li>
                  </ul>
                  <div class="tip">💡 Здоровье — не всё, но всё без здоровья — ничто!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'pe10-s1-t2',
            title: 'Физическая нагрузка',
            description: 'Принципы тренировок',
            theory: `<h3>Принципы тренировки</h3>
            <h4>Основные принципы:</h4>
            <ul>
              <li><b>Постепенность</b> — плавное увеличение нагрузки</li>
              <li><b>Систематичность</b> — регулярные занятия</li>
              <li><b>Индивидуализация</b> — учёт особенностей организма</li>
              <li><b>Наглядность</b> — правильная техника</li>
            </ul>
            <h4>Пульсовые зоны:</h4>
            <ul>
              <li><b>Оздоровительная</b> — 50-60% от макс. пульса</li>
              <li><b>Аэробная</b> — 60-70%</li>
              <li><b>Силовая</b> — 70-80%</li>
              <li><b>Анаэробная</b> — 80-90%</li>
            </ul>
            <h4>Максимальный пульс:</h4>
            <p>ЧСС макс = 220 - возраст</p>`,
            examples: ['Рассчитай пульсовые зоны', 'Определи зону тренировки'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'pe10-s1-t2-l1',
                title: 'Пульсовые зоны',
                content: `<div class="lesson">
                  <h2>💓 Пульсовые зоны</h2>
                  <h3>Для 17 лет (макс. пульс = 203):</h3>
                  <ul>
                    <li>Зона 1 (101-122) — разминка</li>
                    <li>Зона 2 (122-142) — жиросжигание</li>
                    <li>Зона 3 (142-162) — аэробная</li>
                    <li>Зона 4 (162-183) — анаэробная</li>
                  </ul>
                  <div class="tip">💡 Оптимальная зона для здоровья — 2-3 зона!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'pe10-s2',
        title: 'Спортивная деятельность',
        description: 'Виды спорта',
        order: 2,
        topics: [
          {
            id: 'pe10-s2-t1',
            title: 'Лёгкая атлетика',
            description: 'Королева спорта',
            theory: `<h3>Лёгкая атлетика</h3>
            <h4>Виды:</h4>
            <ul>
              <li><b>Бег</b> — спринт (100м, 200м), средние дистанции (800м, 1500м), длинные (5000м, марафон)</li>
              <li><b>Прыжки</b> — в длину, в высоту, тройной, с шестом</li>
              <li><b>Метания</b> — копьё, диск, молот, ядро</li>
              <li><b>Многоборья</b> — десятиборье, семиборье</li>
            </ul>
            <h4>Мировые рекорды (мужчины):</h4>
            <ul>
              <li>100м — 9.58 с (Усэйн Болт)</li>
              <li>Прыжок в длину — 8.95 м</li>
              <li>Марафон — 2:01:39</li>
            </ul>`,
            examples: ['Изучи технику бега', 'Рассчитай темп бега'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'pe10-s2-t1-l1',
                title: 'Техника бега',
                content: `<div class="lesson">
                  <h2>🏃 Техника бега</h2>
                  <h3>Основные элементы:</h3>
                  <ul>
                    <li>Постановка стопы: с носка</li>
                    <li>Работа рук: согнуты под 90°</li>
                    <li>Корпус: небольшой наклон вперёд</li>
                    <li>Дыхание: ритмичное, 2-2 или 3-3</li>
                  </ul>
                  <div class="tip">💡 Правильная техника — залог успеха!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'pe10-s2-t2',
            title: 'Игровые виды спорта',
            description: 'Командные игры',
            theory: `<h3>Командные игры</h3>
            <h4>Футбол:</h4>
            <ul>
              <li>11 игроков в команде</li>
              <li>Матч — 2 тайма по 45 минут</li>
              <li>Поле — 100-110 × 64-75 м</li>
            </ul>
            <h4>Баскетбол:</h4>
            <ul>
              <li>5 игроков в команде</li>
              <li>Матч — 4 четверти по 10 минут</li>
              <li>Кольцо на высоте 3.05 м</li>
            </ul>
            <h4>Волейбол:</h4>
            <ul>
              <li>6 игроков в команде</li>
              <li>Партия до 25 очков</li>
              <li>Сетка высотой 2.43 м (мужчины)</li>
            </ul>`,
            examples: ['Изучи правила игры', 'Разучи тактику'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'pe10-s2-t2-l1',
                title: 'Правила баскетбола',
                content: `<div class="lesson">
                  <h2>🏀 Баскетбол</h2>
                  <h3>Основные правила:</h3>
                  <ul>
                    <li>Ведение мяча — только руками</li>
                    <li>3 шага с мячом — нарушение</li>
                    <li>24 секунды на атаку</li>
                    <li>Штрафной бросок — 1 очко</li>
                    <li>Трёхочковый бросок — из-за дуги</li>
                  </ul>
                  <div class="tip">💡 "Двойное ведение" — нарушение!</div>
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
        id: 'pe10-q1',
        question: 'Какова норма ИМТ?',
        options: ['15-18', '18.5-25', '25-30', '30-35'],
        correctAnswer: 1,
        explanation: 'Нормальный ИМТ — от 18.5 до 25.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe10-q2',
        question: 'Как рассчитать максимальный пульс?',
        options: ['200 - возраст', '220 - возраст', '180 - возраст', '240 - возраст'],
        correctAnswer: 1,
        explanation: 'Максимальный пульс = 220 - возраст.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe10-q3',
        question: 'Сколько игроков в команде в баскетболе?',
        options: ['4', '5', '6', '7'],
        correctAnswer: 1,
        explanation: 'В баскетболе 5 игроков в команде на площадке.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe10-q4',
        question: 'Какой принцип тренировки означает плавное увеличение нагрузки?',
        options: ['Систематичность', 'Постепенность', 'Индивидуализация', 'Наглядность'],
        correctAnswer: 1,
        explanation: 'Постепенность — плавное увеличение нагрузки.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe10-q5',
        question: 'Сколько длится футбольный матч?',
        options: ['60 минут', '80 минут', '90 минут', '100 минут'],
        correctAnswer: 2,
        explanation: 'Футбольный матч — 2 тайма по 45 минут (90 минут).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe10-q6',
        question: 'Какая высота баскетбольного кольца?',
        options: ['2.5 м', '2.85 м', '3.05 м', '3.25 м'],
        correctAnswer: 2,
        explanation: 'Баскетбольное кольцо на высоте 3.05 м.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'pe10-q7',
        question: 'Какой пульс оптимален для жиросжигания?',
        options: ['50-60% от макс.', '60-70% от макс.', '70-80% от макс.', '80-90% от макс.'],
        correctAnswer: 1,
        explanation: 'Зона жиросжигания — 60-70% от максимального пульса.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ОБЖ ====================
  {
    id: 'safety10',
    title: 'ОБЖ',
    icon: <Shield className="w-5 h-5" />,
    color: 'text-red-400',
    gradient: 'from-red-500 to-orange-500',
    description: 'Безопасность жизнедеятельности',
    sections: [
      {
        id: 'saf10-s1',
        title: 'Обеспечение личной безопасности',
        description: 'Безопасность в повседневной жизни',
        order: 1,
        topics: [
          {
            id: 'saf10-s1-t1',
            title: 'Пожарная безопасность',
            description: 'Профилактика пожаров',
            theory: `<h3>Пожарная безопасность</h3>
            <h4>Причины пожаров:</h4>
            <ul>
              <li><b>Электропроводка</b> — неисправная проводка, перегрузки</li>
              <li><b>Бытовые приборы</b> — оставленные без присмотра</li>
              <li><b>Открытый огонь</b> — курение, свечи, костры</li>
            </ul>
            <h4>Действия при пожаре:</h4>
            <ol>
              <li>Позвонить 101 или 112</li>
              <li>Вывести людей из помещения</li>
              <li>Отключить электричество</li>
              <li>Применить огнетушитель</li>
              <li>Покинуть помещение (при угрозе)</li>
            </ol>
            <h4>Типы огнетушителей:</h4>
            <ul>
              <li><b>ОП</b> — порошковый (универсальный)</li>
              <li><b>ОУ</b> — углекислотный (электрооборудование)</li>
              <li><b>ОВП</b> — воздушно-пенный</li>
            </ul>`,
            examples: ['Изучи правила эвакуации', 'Выбери огнетушитель'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'saf10-s1-t1-l1',
                title: 'Действия при пожаре',
                content: `<div class="lesson">
                  <h2>🔥 Пожар</h2>
                  <h3>Правила эвакуации:</h3>
                  <ul>
                    <li>Двигаться пригнувшись (дым снизу)</li>
                    <li>Дышать через мокрую ткань</li>
                    <li>Не пользоваться лифтом!</li>
                    <li>Закрывать двери за собой</li>
                  </ul>
                  <h3>Телефоны:</h3>
                  <p>101 — пожарная охрана, 112 — экстренные службы</p>
                  <div class="tip">💡 В дыму — на четвереньках! Дым поднимается вверх.</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'saf10-s1-t2',
            title: 'Первая помощь',
            description: 'Оказание первой помощи',
            theory: `<h3>Первая помощь</h3>
            <h4>Последовательность действий:</h4>
            <ol>
              <li><b>Оценить обстановку</b> — безопасность</li>
              <li><b>Проверить сознание</b> — окликнуть, потормошить</li>
              <li><b>Проверить дыхание</b> — 10 секунд</li>
              <li><b>Вызвать помощь</b> — 103 или 112</li>
            </ol>
            <h4>Сердечно-лёгочная реанимация (СЛР):</h4>
            <ul>
              <li>30 нажатий на грудную клетку</li>
              <li>2 вдоха</li>
              <li>Глубина нажатия — 5-6 см</li>
              <li>Темп — 100-120 в минуту</li>
            </ul>
            <h4>При кровотечении:</h4>
            <ul>
              <li><b>Артериальное</b> — жгут выше раны</li>
              <li><b>Венозное</b> — давящая повязка</li>
            </ul>`,
            examples: ['Освой СЛР', 'Наложи жгут'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 45,
            lessons: [
              {
                id: 'saf10-s1-t2-l1',
                title: 'СЛР',
                content: `<div class="lesson">
                  <h2>❤️ Сердечно-лёгочная реанимация</h2>
                  <h3>Алгоритм:</h3>
                  <ul>
                    <li>Проверь сознание и дыхание</li>
                    <li>Вызови скорую</li>
                    <li>Начни непрямой массаж сердца</li>
                    <li>30 нажатий + 2 вдоха</li>
                  </ul>
                  <h3>Точка нажатия:</h3>
                  <p>Центр грудной клетки, на 2 пальца выше мечевидного отростка</p>
                  <div class="tip">💡 "Staying Alive" — ритм для СЛР!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 20
              }
            ]
          }
        ]
      },
      {
        id: 'saf10-s2',
        title: 'Чрезвычайные ситуации',
        description: 'Действия в ЧС',
        order: 2,
        topics: [
          {
            id: 'saf10-s2-t1',
            title: 'Природные чрезвычайные ситуации',
            description: 'Стихийные бедствия',
            theory: `<h3>Природные ЧС</h3>
            <h4>Землетрясения:</h4>
            <ul>
              <li>В помещении: встать в дверной проём, под стол</li>
              <li>На улице: удалиться от зданий</li>
              <li>Не пользоваться лифтом</li>
            </ul>
            <h4>Наводнения:</h4>
            <ul>
              <li>Подняться на возвышенность</li>
              <li>Не пытаться переплыть поток</li>
              <li>Ждать помощи</li>
            </ul>
            <h4>Ураганы:</h4>
            <ul>
              <li>Укрыться в подвале, внутренней комнате</li>
              <li>Держаться подальше от окон</li>
            </ul>
            <h4>Шкала землетрясений:</h4>
            <p>До 4 баллов — слабое, 5-7 — сильное, 8+ — разрушительное</p>`,
            examples: ['Составь план действий', 'Определи тип ЧС'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'saf10-s2-t1-l1',
                title: 'Действия при землетрясении',
                content: `<div class="lesson">
                  <h2>🌍 Землетрясение</h2>
                  <h3>Правила:</h3>
                  <ul>
                    <li>Не паниковать!</li>
                    <li>Встань в дверной проём несущей стены</li>
                    <li>Или спрячься под крепкий стол</li>
                    <li>Держись подальше от окон</li>
                    <li>После толчков — покинь здание</li>
                  </ul>
                  <div class="tip">💡 Правило "Треугольника жизни" — рядом с крупными предметами!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          },
          {
            id: 'saf10-s2-t2',
            title: 'Террористические угрозы',
            description: 'Действия при теракте',
            theory: `<h3>Террористические угрозы</h3>
            <h4>При обнаружении подозрительного предмета:</h4>
            <ul>
              <li>Не трогать, не двигать</li>
              <li>Отойти на безопасное расстояние</li>
              <li>Сообщить охране, полиции (102)</li>
              <li>Не пользоваться радиосвязью рядом</li>
            </ul>
            <h4>При захвате заложников:</h4>
            <ul>
              <li>Не провоцировать террористов</li>
              <li>Выполнять требования</li>
              <li>Не совершать резких движений</li>
              <li>Запомнить внешность террористов</li>
            </ul>
            <h4>Телефоны экстренных служб:</h4>
            <p>112 — единый номер, 101 — пожарные, 102 — полиция, 103 — скорая</p>`,
            examples: ['Изучи правила поведения', 'Запомни телефоны'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'saf10-s2-t2-l1',
                title: 'Подозрительный предмет',
                content: `<div class="lesson">
                  <h2>⚠️ Подозрительный предмет</h2>
                  <h3>Признаки взрывного устройства:</h3>
                  <ul>
                    <li>Бесхозная сумка, пакет</li>
                    <li>Провода, антенны</li>
                    <li>Звуки (тиканье, гудение)</li>
                    <li>Запах топлива, химии</li>
                  </ul>
                  <h3>Действия:</h3>
                  <p>Не трогать! Отойти! Сообщить!</p>
                  <div class="tip">💡 Минимальное расстояние — 100 метров!</div>
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
        id: 'saf10-q1',
        question: 'Какой телефон для вызова пожарных?',
        options: ['102', '103', '101', '104'],
        correctAnswer: 2,
        explanation: '101 — телефон пожарной охраны.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'saf10-q2',
        question: 'Сколько нажатий делает при СЛР?',
        options: ['15', '20', '30', '40'],
        correctAnswer: 2,
        explanation: 'При СЛР делается 30 нажатий на грудную клетку.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'saf10-q3',
        question: 'Какой огнетушитель универсален?',
        options: ['ОУ', 'ОП', 'ОВП', 'ОХ'],
        correctAnswer: 1,
        explanation: 'ОП (порошковый) — универсальный огнетушитель.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'saf10-q4',
        question: 'Где укрыться при землетрясении?',
        options: ['У окна', 'В лифте', 'В дверном проёме', 'На балконе'],
        correctAnswer: 2,
        explanation: 'При землетрясении нужно встать в дверной проём несущей стены.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'saf10-q5',
        question: 'Какой единый номер экстренных служб?',
        options: ['101', '102', '103', '112'],
        correctAnswer: 3,
        explanation: '112 — единый номер экстренных служб.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'saf10-q6',
        question: 'Какое кровотечение требует наложения жгута?',
        options: ['Капиллярное', 'Венозное', 'Артериальное', 'Носовое'],
        correctAnswer: 2,
        explanation: 'Артериальное кровотечение требует наложения жгута выше раны.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'saf10-q7',
        question: 'Какое минимальное расстояние от подозрительного предмета?',
        options: ['10 м', '50 м', '100 м', '200 м'],
        correctAnswer: 2,
        explanation: 'Минимальное безопасное расстояние — 100 метров.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== ИЗО ====================
  {
    id: 'art10',
    title: 'ИЗО',
    icon: <Palette className="w-5 h-5" />,
    color: 'text-pink-400',
    gradient: 'from-pink-500 to-purple-500',
    description: 'Изобразительное искусство',
    sections: [
      {
        id: 'art10-s1',
        title: 'История искусства',
        description: 'Направления и стили',
        order: 1,
        topics: [
          {
            id: 'art10-s1-t1',
            title: 'Искусство XX века',
            description: 'Модернизм и авангард',
            theory: `<h3>Искусство XX века</h3>
            <h4>Основные направления:</h4>
            <ul>
              <li><b>Импрессионизм</b> — передача впечатления, света (Моне, Ренуар)</li>
              <li><b>Кубизм</b> — геометрические формы (Пикассо, Брак)</li>
              <li><b>Абстракционизм</b> — отказ от изображения реальности (Кандинский, Малевич)</li>
              <li><b>Сюрреализм</b> — мир подсознания (Дали, Магритт)</li>
              <li><b>Поп-арт</b> — массовая культура (Уорхол)</li>
            </ul>
            <h4>Русский авангард:</h4>
            <ul>
              <li>Казимир Малевич — "Чёрный квадрат"</li>
              <li>Василий Кандинский — основоположник абстракционизма</li>
              <li>Владимир Татлин — конструктивизм</li>
            </ul>`,
            examples: ['Определи стиль картины', 'Проанализируй произведение'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'art10-s1-t1-l1',
                title: 'Русский авангард',
                content: `<div class="lesson">
                  <h2>🎨 Русский авангард</h2>
                  <h3>Казимир Малевич:</h3>
                  <p>"Чёрный квадрат" (1915) — символ новой эпохи</p>
                  <p>Супрематизм — чистые геометрические формы</p>
                  <h3>Василий Кандинский:</h3>
                  <p>Первые абстрактные картины</p>
                  <p>"Синий всадник" — духовное в искусстве</p>
                  <div class="tip">💡 Авангард — разрыв с традицией!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'art10-s2',
        title: 'Практика изобразительного искусства',
        description: 'Техники и материалы',
        order: 2,
        topics: [
          {
            id: 'art10-s2-t1',
            title: 'Живописные техники',
            description: 'Материалы и методы',
            theory: `<h3>Живописные техники</h3>
            <h4>Виды живописи:</h4>
            <ul>
              <li><b>Акварель</b> — прозрачные краски, работа с водой</li>
              <li><b>Гуашь</b> — кроющие краски, яркие цвета</li>
              <li><b>Масло</b> — классическая техника, многослойность</li>
              <li><b>Акрил</b> — современный материал, быстро сохнет</li>
              <li><b>Темпера</b> — историческая техника (иконы)</li>
            </ul>
            <h4>Основные приёмы:</h4>
            <ul>
              <li><b>Лессировка</b> — тонкие прозрачные слои</li>
              <li><b>Алла прима</b> — работа по сырому, за один раз</li>
              <li><b>Смешивание</b> — получение новых оттенков</li>
            </ul>`,
            examples: ['Освой технику акварели', 'Создай цветовую растяжку'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 40,
            lessons: [
              {
                id: 'art10-s2-t1-l1',
                title: 'Акварель',
                content: `<div class="lesson">
                  <h2>💧 Акварель</h2>
                  <h3>Особенности:</h3>
                  <ul>
                    <li>Прозрачность красок</li>
                    <li>Работа "по-сырому" и "по-сухому"</li>
                    <li>Резерваж — сохранение белого</li>
                  </ul>
                  <h3>Техники:</h3>
                  <ul>
                    <li>Заливка — сплошное покрытие</li>
                    <li>Градиент — плавный переход цвета</li>
                    <li>Смачивание бумаги</li>
                  </ul>
                  <div class="tip">💡 В акварели белый цвет — это бумага!</div>
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
        id: 'art10-q1',
        question: 'Кто автор "Чёрного квадрата"?',
        options: ['Кандинский', 'Пикассо', 'Малевич', 'Дали'],
        correctAnswer: 2,
        explanation: '"Чёрный квадрат" создал Казимир Малевич в 1915 году.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'art10-q2',
        question: 'Какое направление изображает мир подсознания?',
        options: ['Кубизм', 'Сюрреализм', 'Импрессионизм', 'Поп-арт'],
        correctAnswer: 1,
        explanation: 'Сюрреализм изображает мир снов и подсознания (Дали, Магритт).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'art10-q3',
        question: 'Какая техника использует прозрачные краски?',
        options: ['Гуашь', 'Масло', 'Акварель', 'Акрил'],
        correctAnswer: 2,
        explanation: 'Акварель — техника прозрачных водорастворимых красок.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'art10-q4',
        question: 'Кто основоположник абстракционизма?',
        options: ['Малевич', 'Пикассо', 'Кандинский', 'Уорхол'],
        correctAnswer: 2,
        explanation: 'Василий Кандинский — основоположник абстрактного искусства.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'art10-q5',
        question: 'Что такое лессировка?',
        options: ['Работа по сырому', 'Тонкие прозрачные слои', 'Геометрические формы', 'Резкие контрасты'],
        correctAnswer: 1,
        explanation: 'Лессировка — нанесение тонких прозрачных слоёв краски.',
        difficulty: 'medium',
        points: 15
      }
    ]
  },

  // ==================== МУЗЫКА ====================
  {
    id: 'music10',
    title: 'Музыка',
    icon: <Music className="w-5 h-5" />,
    color: 'text-cyan-400',
    gradient: 'from-cyan-500 to-blue-500',
    description: 'Музыкальное искусство',
    sections: [
      {
        id: 'mus10-s1',
        title: 'История музыки',
        description: 'Музыкальные эпохи',
        order: 1,
        topics: [
          {
            id: 'mus10-s1-t1',
            title: 'Музыка XX века',
            description: 'Джаз, рок, поп-музыка',
            theory: `<h3>Музыка XX века</h3>
            <h4>Джаз:</h4>
            <ul>
              <li>Возник в США, начало XX века</li>
              <li>Импровизация — основа джаза</li>
              <li>Представители: Луи Армстронг, Дюк Эллингтон</li>
            </ul>
            <h4>Рок-музыка:</h4>
            <ul>
              <li>1950-е годы — рождение рока</li>
              <li>Представители: The Beatles, Queen, Pink Floyd</li>
              <li>Жанры: хард-рок, панк, метал</li>
            </ul>
            <h4>Поп-музыка:</h4>
            <ul>
              <li>Массовая музыкальная культура</li>
              <li>Майкл Джексон — "Король поп-музыки"</li>
              <li>Мадонна, Принс, Уитни Хьюстон</li>
            </ul>
            <h4>Русская музыка:</h4>
            <p>Виктор Цой, Земфира, ДДТ, Сплин</p>`,
            examples: ['Проанализируй музыкальный жанр', 'Послушай классику джаза'],
            completed: false,
            difficulty: 'medium',
            estimatedTime: 35,
            lessons: [
              {
                id: 'mus10-s1-t1-l1',
                title: 'Джаз',
                content: `<div class="lesson">
                  <h2>🎷 Джаз</h2>
                  <h3>Особенности:</h3>
                  <ul>
                    <li>Импровизация</li>
                    <li>Синкопированный ритм</li>
                    <li>Свинг — особое чувство ритма</li>
                    <li>Блюзовые ноты</li>
                  </ul>
                  <h3>Великие джазмены:</h3>
                  <p>Луи Армстронг — труба, вокал</p>
                  <p>Дюк Эллингтон — оркестр</p>
                  <div class="tip">💡 Джаз — музыка свободы!</div>
                </div>`,
                completed: false,
                order: 1,
                estimatedTime: 15
              }
            ]
          }
        ]
      },
      {
        id: 'mus10-s2',
        title: 'Музыкальная грамота',
        description: 'Теория музыки',
        order: 2,
        topics: [
          {
            id: 'mus10-s2-t1',
            title: 'Гармония и форма',
            description: 'Строение музыки',
            theory: `<h3>Музыкальная форма</h3>
            <h4>Простые формы:</h4>
            <ul>
              <li><b>Период</b> — простейшая форма (8 тактов)</li>
              <li><b>Двухчастная</b> — А + Б</li>
              <li><b>Трёхчастная</b> — А + Б + А</li>
            </ul>
            <h4>Сложные формы:</h4>
            <ul>
              <li><b>Рондо</b> — А + Б + А + В + А</li>
              <li><b>Вариации</b> — тема и её изменения</li>
              <li><b>Сонатная форма</b> — экспозиция, разработка, реприза</li>
            </ul>
            <h4>Гармония:</h4>
            <ul>
              <li><b>Тоника</b> — главная ступень (I)</li>
              <li><b>Доминанта</b> — V ступень</li>
              <li><b>Субдоминанта</b> — IV ступень</li>
            </ul>`,
            examples: ['Определи форму произведения', 'Построй аккорды'],
            completed: false,
            difficulty: 'hard',
            estimatedTime: 45,
            lessons: [
              {
                id: 'mus10-s2-t1-l1',
                title: 'Трёхчастная форма',
                content: `<div class="lesson">
                  <h2>🎼 Трёхчастная форма</h2>
                  <h3>Структура: А — Б — А</h3>
                  <h3>Части:</h3>
                  <ul>
                    <li>А — экспозиция (показ темы)</li>
                    <li>Б — разработка (развитие, контраст)</li>
                    <li>А — реприза (возвращение темы)</li>
                  </ul>
                  <h3>Примеры:</h3>
                  <p>Моцарт — "Турецкий марш"</p>
                  <p>Бетховен — "К Элизе"</p>
                  <div class="tip">💡 Реприза — возвращение к началу!</div>
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
        id: 'mus10-q1',
        question: 'Кого называют "Королём поп-музыки"?',
        options: ['Принс', 'Майкл Джексон', 'Фредди Меркьюри', 'Элвис Пресли'],
        correctAnswer: 1,
        explanation: 'Майкл Джексон — "Король поп-музыки".',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'mus10-q2',
        question: 'Что основа джаза?',
        options: ['Ноты', 'Импровизация', 'Оркестр', 'Танец'],
        correctAnswer: 1,
        explanation: 'Импровизация — основа джаза.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'mus10-q3',
        question: 'Какая форма имеет структуру А + Б + А?',
        options: ['Рондо', 'Вариации', 'Трёхчастная', 'Сонатная'],
        correctAnswer: 2,
        explanation: 'Трёхчастная форма: А + Б + А.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'mus10-q4',
        question: 'Какая группа стала символом рок-музыки?',
        options: ['ABBA', 'The Beatles', 'Nirvana', 'Metallica'],
        correctAnswer: 1,
        explanation: 'The Beatles — символ рок-музыки.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'mus10-q5',
        question: 'Какая ступень называется тоникой?',
        options: ['I', 'III', 'IV', 'V'],
        correctAnswer: 0,
        explanation: 'Тоника — I ступень лада.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'mus10-q6',
        question: 'Какой русский рок-музыкант стал легендой?',
        options: ['Филипп Киркоров', 'Виктор Цой', 'Николай Басков', 'Дима Билан'],
        correctAnswer: 1,
        explanation: 'Виктор Цой — легенда русского рока.',
        difficulty: 'easy',
        points: 10
      }
    ]
  }
]
