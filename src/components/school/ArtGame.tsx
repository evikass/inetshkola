'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, Trophy, Star, Clock, CheckCircle, XCircle, 
  Palette, Brush, Music, Theater, Building2, Crown
} from 'lucide-react'

interface ArtGameProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

type Difficulty = 'easy' | 'medium' | 'hard'
type Category = 'painting' | 'sculpture' | 'architecture' | 'music' | 'theater' | 'artists'

interface Question {
  question: string
  options: string[]
  correct: number
  explanation: string
  category: Category
  difficulty: Difficulty
}

const categoryInfo: Record<Category, { name: string; icon: React.ElementType; color: string }> = {
  painting: { name: 'Живопись', icon: Palette, color: 'from-purple-400 to-pink-500' },
  sculpture: { name: 'Скульптура', icon: Crown, color: 'from-amber-400 to-orange-500' },
  architecture: { name: 'Архитектура', icon: Building2, color: 'from-gray-400 to-slate-500' },
  music: { name: 'Музыка', icon: Music, color: 'from-blue-400 to-indigo-500' },
  theater: { name: 'Театр', icon: Theater, color: 'from-red-400 to-rose-500' },
  artists: { name: 'Художники', icon: Brush, color: 'from-emerald-400 to-teal-500' }
}

const questions: Question[] = [
  // === ЖИВОПИСЬ ===
  {
    question: 'Кто написал картину "Мона Лиза"?',
    options: ['Микеланджело', 'Леонардо да Винчи', 'Рафаэль', 'Караваджо'],
    correct: 1,
    explanation: 'Леонардо да Винчи написал "Мону Лизу" (Джоконду) около 1503-1519 годов. Это самая известная картина в мире.',
    category: 'painting',
    difficulty: 'easy'
  },
  {
    question: 'К какому направлению принадлежит картина "Звёздная ночь" Ван Гога?',
    options: ['Импрессионизм', 'Постимпрессионизм', 'Кубизм', 'Сюрреализм'],
    correct: 1,
    explanation: 'Винсент Ван Гог — представитель постимпрессионизма. "Звёздная ночь" написана в 1889 году.',
    category: 'painting',
    difficulty: 'medium'
  },
  {
    question: 'Кто написал картину "Чёрный квадрат"?',
    options: ['Василий Кандинский', 'Казимир Малевич', 'Пит Мондриан', 'Эль Лисицкий'],
    correct: 1,
    explanation: 'Казимир Малевич создал "Чёрный квадрат" в 1915 году. Это символ супрематизма — направления в абстрактном искусстве.',
    category: 'painting',
    difficulty: 'easy'
  },
  {
    question: 'Какой художник известен своими "подсолнухами"?',
    options: ['Клод Моне', 'Винсент Ван Гог', 'Поль Сезанн', 'Анри Матисс'],
    correct: 1,
    explanation: 'Винсент Ван Гог создал серию картин с подсолнухами. Он написал несколько версий этой композиции в 1888-1889 годах.',
    category: 'painting',
    difficulty: 'easy'
  },
  {
    question: 'Кто автор картины "Девятый вал"?',
    options: ['Иван Айвазовский', 'Исаак Левитан', 'Иван Шишкин', 'Алексей Саврасов'],
    correct: 0,
    explanation: 'Иван Айвазовский — величайший маринист, автор "Девятого вала" (1850). Он написал более 6000 картин.',
    category: 'painting',
    difficulty: 'easy'
  },
  {
    question: 'Какое направление в искусстве основали Пикассо и Брак?',
    options: ['Импрессионизм', 'Кубизм', 'Фовизм', 'Дадаизм'],
    correct: 1,
    explanation: 'Кубизм возник в начале XX века. Пикассо и Брак разлагали предметы на геометрические формы.',
    category: 'painting',
    difficulty: 'medium'
  },
  {
    question: 'Кто написал "Троицу" — знаменитую русскую икону?',
    options: ['Андрей Рублёв', 'Феофан Грек', 'Дионисий', 'Симон Ушаков'],
    correct: 0,
    explanation: 'Андрей Рублёв написал икону "Троица" около 1411 года. Это шедевр древнерусской живописи.',
    category: 'painting',
    difficulty: 'medium'
  },

  // === СКУЛЬПТУРА ===
  {
    question: 'Кто создал статую Давида?',
    options: ['Донателло', 'Микеланджело', 'Бернини', 'Роден'],
    correct: 1,
    explanation: 'Микеланджело создал статую Давида в 1501-1504 годах. Высота скульптуры — 5,17 метров.',
    category: 'sculpture',
    difficulty: 'easy'
  },
  {
    question: 'Как называется знаменитая статуя в Копенгагене?',
    options: ['Русалочка', 'Давид', 'Венера', 'Ника'],
    correct: 0,
    explanation: 'Статуя Русалочки в Копенгагене — символ города, созданный по сказке Ганса Христиана Андерсена.',
    category: 'sculpture',
    difficulty: 'easy'
  },
  {
    question: 'Кто автор скульптуры "Мыслитель"?',
    options: ['Микеланджело', 'Огюст Роден', 'Антонио Канова', 'Жан-Батист Карпо'],
    correct: 1,
    explanation: 'Огюст Роден создал "Мыслителя" в 1880-1882 годах. Скульптура была частью композиции "Врата ада".',
    category: 'sculpture',
    difficulty: 'medium'
  },
  {
    question: 'Что изображает Венера Милосская?',
    options: ['Богиню победы', 'Богиню любви и красоты', 'Богиню мудрости', 'Царицу'],
    correct: 1,
    explanation: 'Венера Милосская — древнегреческая статуя богини Афродиты (Венеры), найденная на острове Милос в 1820 году.',
    category: 'sculpture',
    difficulty: 'medium'
  },
  {
    question: 'Кто создал статую "Дискобол"?',
    options: ['Мирон', 'Поликлет', 'Пракситель', 'Лисипп'],
    correct: 0,
    explanation: 'Мирон создал "Дискобола" в V веке до н.э. Это шедевр древнегреческой скульптуры, изображающий атлета.',
    category: 'sculpture',
    difficulty: 'hard'
  },
  {
    question: 'Какой скульптор создал памятник Минину и Пожарскому в Москве?',
    options: ['Иван Мартос', 'Петр Клодт', 'Марк Антокольский', 'Вера Мухина'],
    correct: 0,
    explanation: 'Иван Мартос создал памятник Минину и Пожарскому в 1818 году. Это первый памятник в Москве на народные деньги.',
    category: 'sculpture',
    difficulty: 'hard'
  },

  // === АРХИТЕКТУРА ===
  {
    question: 'Где находится Тадж-Махал?',
    options: ['Иран', 'Индия', 'Пакистан', 'Турция'],
    correct: 1,
    explanation: 'Тадж-Махал находится в Индии, в городе Агра. Это мавзолей, построенный шахом Джаханом в XVII веке.',
    category: 'architecture',
    difficulty: 'easy'
  },
  {
    question: 'Как называется знаменитая башня в Пизе?',
    options: ['Колокольня Пизанского собора', 'Пизанский небоскрёб', 'Башня Галилея', 'Пизанский шпиль'],
    correct: 0,
    explanation: 'Пизанская башня — это колокольня собора в Пизе. Она наклонена из-за проседания грунта.',
    category: 'architecture',
    difficulty: 'easy'
  },
  {
    question: 'Кто спроектировал собор Василия Блаженного?',
    options: ['Доменико Джиларди', 'Постник и Барма', 'Карл Росси', 'Огюст Монферран'],
    correct: 1,
    explanation: 'Постник и Барма (Яковлев) построили собор Василия Блаженного в 1555-1561 годах по приказу Ивана Грозного.',
    category: 'architecture',
    difficulty: 'medium'
  },
  {
    question: 'Какой архитектурный стиль характерен для готических соборов?',
    options: ['Острие и вертикаль', 'Симметрия и гармония', 'Купола и арки', 'Колонны и портики'],
    correct: 0,
    explanation: 'Готика характеризуется устремлённостью вверх, стрельчатыми арками, витражами и контрфорсами.',
    category: 'architecture',
    difficulty: 'medium'
  },
  {
    question: 'Где находится Колизей?',
    options: ['Афины', 'Рим', 'Париж', 'Стамбул'],
    correct: 1,
    explanation: 'Колизей (Флавиев амфитеатр) находится в Риме. Он был построен в I веке н.э. для гладиаторских боёв.',
    category: 'architecture',
    difficulty: 'easy'
  },
  {
    question: 'Какой стиль называется "русским барокко"?',
    options: ['Елизаветинское барокко', 'Рококо', 'Классицизм', 'Ампир'],
    correct: 0,
    explanation: 'Елизаветинское барокко — русский вариант стиля барокко при императрице Елизавете Петровне (Зимний дворец, Смольный собор).',
    category: 'architecture',
    difficulty: 'hard'
  },

  // === МУЗЫКА ===
  {
    question: 'Кто написал "Лунную сонату"?',
    options: ['Моцарт', 'Бетховен', 'Шопен', 'Бах'],
    correct: 1,
    explanation: 'Людвиг ван Бетховен написал Сонату №14, которую назвали "Лунной", в 1801 году.',
    category: 'music',
    difficulty: 'easy'
  },
  {
    question: 'Сколько симфоний написал Бетховен?',
    options: ['5', '7', '9', '11'],
    correct: 2,
    explanation: 'Бетховен написал 9 симфоний. Девятая симфония с "Одой к радости" — его последнее крупное произведение.',
    category: 'music',
    difficulty: 'medium'
  },
  {
    question: 'Кто автор оперы "Евгений Онегин"?',
    options: ['Михаил Глинка', 'Пётр Чайковский', 'Николай Римский-Корсаков', 'Сергей Прокофьев'],
    correct: 1,
    explanation: 'Пётр Ильич Чайковский написал оперу "Евгений Онегин" в 1877-1878 годах по роману Пушкина.',
    category: 'music',
    difficulty: 'medium'
  },
  {
    question: 'Какой композитор был глухим?',
    options: ['Моцарт', 'Бетховен', 'Бах', 'Вивальди'],
    correct: 1,
    explanation: 'Бетховен начал терять слух в 26 лет и к 44 годам полностью оглох. Тем не менее продолжал сочинять музыку.',
    category: 'music',
    difficulty: 'easy'
  },
  {
    question: 'Кто написал "Времена года"?',
    options: ['Бах', 'Моцарт', 'Вивальди', 'Гендель'],
    correct: 2,
    explanation: 'Антонио Вивальди написал цикл из четырёх скрипичных концертов "Времена года" в 1723 году.',
    category: 'music',
    difficulty: 'medium'
  },
  {
    question: 'Какой русский композитор написал "Картинки с выставки"?',
    options: ['Модест Мусоргский', 'Пётр Чайковский', 'Сергей Рахманинов', 'Дмитрий Шостакович'],
    correct: 0,
    explanation: 'Модест Мусоргский создал фортепианный цикл "Картинки с выставки" в 1874 году в память о друге-художнике.',
    category: 'music',
    difficulty: 'hard'
  },

  // === ТЕАТР ===
  {
    question: 'Кто написал пьесу "Гамлет"?',
    options: ['Мольер', 'Шекспир', 'Чехов', 'Ибсен'],
    correct: 1,
    explanation: 'Уильям Шекспир написал трагедию "Гамлет" около 1600 года. "Быть или не быть" — знаменитый монолог Гамлета.',
    category: 'theater',
    difficulty: 'easy'
  },
  {
    question: 'Как называется главный театр России?',
    options: ['Мариинский', 'Большой', 'Александровский', 'Малый'],
    correct: 1,
    explanation: 'Большой театр — главный театр России, находится в Москве. Основан в 1776 году.',
    category: 'theater',
    difficulty: 'easy'
  },
  {
    question: 'Кто автор пьесы "Вишнёвый сад"?',
    options: ['Александр Островский', 'Антон Чехов', 'Максим Горький', 'Иван Тургенев'],
    correct: 1,
    explanation: 'Антон Чехов написал "Вишнёвый сад" в 1903 году. Это его последняя пьеса.',
    category: 'theater',
    difficulty: 'easy'
  },
  {
    question: 'Какой театр основал Константин Станиславский?',
    options: ['Большой театр', 'МХАТ', 'Малый театр', 'Театр Вахтангова'],
    correct: 1,
    explanation: 'Станиславский и Немирович-Данченко основали МХАТ (Московский Художественный театр) в 1898 году.',
    category: 'theater',
    difficulty: 'medium'
  },
  {
    question: 'Кто написал "Ромео и Джульетту"?',
    options: ['Шекспир', 'Мольер', 'Гёте', 'Байрон'],
    correct: 0,
    explanation: 'Уильям Шекспир написал трагедию "Ромео и Джульетта" около 1595 года. Это история любви двух молодых людей.',
    category: 'theater',
    difficulty: 'easy'
  },
  {
    question: 'Что такое балет?',
    options: [
      'Музыкальный жанр',
      'Сценический танец с музыкой и сюжетом',
      'Оперное представление',
      'Драматическая пьеса'
    ],
    correct: 1,
    explanation: 'Балет — вид сценического искусства, спектакль, содержание которого воплощается через музыкально-хореографические образы.',
    category: 'theater',
    difficulty: 'easy'
  },

  // === ХУДОЖНИКИ ===
  {
    question: 'Кто написал "Утро в сосновом лесу"?',
    options: ['Иван Шишкин', 'Исаак Левитан', 'Алексей Саврасов', 'Василий Поленов'],
    correct: 0,
    explanation: 'Иван Шишкин написал "Утро в сосновом лесу" в 1889 году. Медведей на картине написал Константин Савицкий.',
    category: 'artists',
    difficulty: 'easy'
  },
  {
    question: 'Какой русский художник был также учёным?',
    options: ['Илья Репин', 'Василий Кандинский', 'Николай Рерих', 'Михаил Врубель'],
    correct: 2,
    explanation: 'Николай Рерих был художником, археологом, философом. Он номинировался на Нобелевскую премию мира.',
    category: 'artists',
    difficulty: 'medium'
  },
  {
    question: 'Кто написал картину "Бурлаки на Волге"?',
    options: ['Василий Верещагин', 'Илья Репин', 'Василий Суриков', 'Григорий Мясоедов'],
    correct: 1,
    explanation: 'Илья Репин написал "Бурлаков на Волге" в 1870-1873 годах. Картина показала тяжёлый труд бурлаков.',
    category: 'artists',
    difficulty: 'easy'
  },
  {
    question: 'Какой художник основал абстрактное искусство?',
    options: ['Казимир Малевич', 'Василий Кандинский', 'Пит Мондриан', 'Эль Лисицкий'],
    correct: 1,
    explanation: 'Василий Кандинский считается одним из основоположников абстрактного искусства. Он писал первые абстрактные картины около 1910 года.',
    category: 'artists',
    difficulty: 'medium'
  },
  {
    question: 'Кто автор картины "Явление Христа народу"?',
    options: ['Александр Иванов', 'Карл Брюллов', 'Иван Крамской', 'Николай Ге'],
    correct: 0,
    explanation: 'Александр Иванов работал над "Явлением Христа народу" 20 лет (1837-1857). Это грандиозное полотно.',
    category: 'artists',
    difficulty: 'hard'
  },
  {
    question: 'Какой художник написал "Последний день Помпей"?',
    options: ['Карл Брюллов', 'Александр Иванов', 'Иван Айвазовский', 'Орест Кипренский'],
    correct: 0,
    explanation: 'Карл Брюллов написал "Последний день Помпей" в 1830-1833 годах. Картина принесла ему мировую славу.',
    category: 'artists',
    difficulty: 'medium'
  }
]

export default function ArtGame({ gradeId = 0, onExperience }: ArtGameProps) {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'result'>('menu')
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all')
  const [difficulty, setDifficulty] = useState<Difficulty>('easy')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set())
  const [gameQuestions, setGameQuestions] = useState<Question[]>([])

  const isKidMode = gradeId <= 2

  // Filter and shuffle questions
  const prepareQuestions = useCallback(() => {
    let filtered = questions
    if (selectedCategory !== 'all') {
      filtered = questions.filter(q => q.category === selectedCategory)
    }
    
    // Filter by difficulty for younger students
    if (isKidMode) {
      filtered = filtered.filter(q => q.difficulty === 'easy')
    } else if (difficulty === 'easy') {
      filtered = filtered.filter(q => q.difficulty !== 'hard')
    }

    // Shuffle and take 10 questions
    const shuffled = [...filtered].sort(() => Math.random() - 0.5).slice(0, 10)
    return shuffled.length > 0 ? shuffled : filtered.slice(0, 10)
  }, [selectedCategory, difficulty, isKidMode])

  // Timer effect
  useEffect(() => {
    if (gameState !== 'playing' || selectedAnswer !== null || showExplanation) return

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleTimeout()
          return 30
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [gameState, selectedAnswer, showExplanation, currentQuestion])

  const handleTimeout = useCallback(() => {
    setSelectedAnswer(-1)
    setShowExplanation(true)
  }, [])

  const startGame = useCallback(() => {
    const questions = prepareQuestions()
    setGameQuestions(questions)
    setCurrentQuestion(0)
    setScore(0)
    setAnsweredQuestions(new Set())
    setSelectedAnswer(null)
    setShowExplanation(false)
    setTimeLeft(30)
    setGameState('playing')
  }, [prepareQuestions])

  const handleAnswer = useCallback((answerIndex: number) => {
    if (selectedAnswer !== null) return
    
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    
    if (answerIndex === gameQuestions[currentQuestion].correct) {
      setScore(prev => prev + 1)
    }
    
    setAnsweredQuestions(prev => new Set(prev).add(currentQuestion))
  }, [selectedAnswer, currentQuestion, gameQuestions])

  const nextQuestion = useCallback(() => {
    if (currentQuestion >= gameQuestions.length - 1) {
      setGameState('result')
    } else {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
      setTimeLeft(30)
    }
  }, [currentQuestion, gameQuestions.length])

  const calculateXP = useCallback(() => {
    const baseXP = 125
    const scoreBonus = score * 10
    const difficultyMultiplier = difficulty === 'hard' ? 1.5 : difficulty === 'medium' ? 1.2 : 1
    return Math.round((baseXP + scoreBonus) * difficultyMultiplier)
  }, [score, difficulty])

  const handleGameEnd = useCallback(() => {
    const xp = calculateXP()
    onExperience?.(xp)
  }, [calculateXP, onExperience])

  // Current question options with memoization
  const currentOptions = useMemo(() => {
    if (!gameQuestions[currentQuestion]) return []
    return gameQuestions[currentQuestion].options
  }, [gameQuestions, currentQuestion])

  // Menu screen
  if (gameState === 'menu') {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-6xl mb-4"
          >
            🎨
          </motion.div>
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Искусство
          </h2>
          <p className="text-gray-400">
            Живопись, музыка, архитектура!
          </p>
        </div>

        {/* Category Selection */}
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Palette className="w-5 h-5 text-yellow-400" />
              Выбери тему
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <motion.button
                onClick={() => setSelectedCategory('all')}
                className={`p-3 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-gray-400 to-gray-500 text-white'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                🎭 Все темы
              </motion.button>
              {(Object.keys(categoryInfo) as Category[]).map(cat => {
                const info = categoryInfo[cat]
                const Icon = info.icon
                return (
                  <motion.button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                      selectedCategory === cat
                        ? `bg-gradient-to-r ${info.color} text-white`
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-4 h-4" />
                    {info.name}
                  </motion.button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Difficulty Selection */}
        {!isKidMode && (
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Уровень сложности
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'easy', label: 'Лёгкий', color: 'from-green-400 to-emerald-500' },
                  { id: 'medium', label: 'Средний', color: 'from-yellow-400 to-orange-500' },
                  { id: 'hard', label: 'Сложный', color: 'from-red-400 to-rose-500' }
                ].map(diff => (
                  <motion.button
                    key={diff.id}
                    onClick={() => setDifficulty(diff.id as Difficulty)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all ${
                      difficulty === diff.id
                        ? `bg-gradient-to-r ${diff.color} text-white`
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {diff.label}
                  </motion.button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Start Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Button
            onClick={startGame}
            className="w-full py-6 text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600"
          >
            <Palette className="w-6 h-6 mr-2" />
            Начать игру
          </Button>
        </motion.div>

        {/* Info */}
        <div className="text-center text-gray-500 text-sm">
          <p>10 вопросов • +{125} XP за прохождение</p>
        </div>
      </div>
    )
  }

  // Result screen
  if (gameState === 'result') {
    const xp = calculateXP()
    const percentage = Math.round((score / gameQuestions.length) * 100)
    
    return (
      <div className="text-center space-y-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-8xl mb-4"
        >
          {percentage >= 80 ? '🏆' : percentage >= 50 ? '🎨' : '🖌️'}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            {percentage >= 80 ? 'Превосходно!' : percentage >= 50 ? 'Хорошо!' : 'Посети музей!'}
          </h2>
          <p className="text-gray-400">
            Правильных ответов: {score} из {gameQuestions.length}
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 inline-block">
            <CardContent className="p-4 flex items-center gap-3">
              <Star className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold text-yellow-400">+{xp} XP</span>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-white/5">
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-2xl font-bold">{score}</p>
              <p className="text-sm text-gray-400">Правильно</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5">
            <CardContent className="p-4 text-center">
              <XCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
              <p className="text-2xl font-bold">{gameQuestions.length - score}</p>
              <p className="text-sm text-gray-400">Ошибки</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5">
            <CardContent className="p-4 text-center">
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-2xl font-bold">{percentage}%</p>
              <p className="text-sm text-gray-400">Результат</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4">
          <Button
            onClick={startGame}
            className="flex-1 bg-gradient-to-r from-purple-400 to-pink-500"
          >
            Играть снова
          </Button>
          <Button
            onClick={() => {
              handleGameEnd()
              setGameState('menu')
            }}
            variant="outline"
            className="flex-1"
          >
            К меню
          </Button>
        </div>
      </div>
    )
  }

  // Playing screen
  const question = gameQuestions[currentQuestion]
  if (!question) return null

  const category = categoryInfo[question.category]

  return (
    <div className="space-y-4">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => setGameState('menu')}
          className="text-gray-400"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Выход
        </Button>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-yellow-400" />
            <span className={`font-mono ${timeLeft <= 10 ? 'text-red-400' : ''}`}>
              {timeLeft}с
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span>{score}/{gameQuestions.length}</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-400 to-pink-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentQuestion + 1) / gameQuestions.length) * 100}%` }}
        />
      </div>

      {/* Category Badge */}
      <div className="flex items-center gap-2">
        <span className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white flex items-center gap-1`}>
          <category.icon className="w-4 h-4" />
          {category.name}
        </span>
        <span className="text-sm text-gray-500">
          Вопрос {currentQuestion + 1} из {gameQuestions.length}
        </span>
      </div>

      {/* Question */}
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <p className="text-lg font-medium mb-6">
              {question.question}
            </p>

            <div className="space-y-3">
              {currentOptions.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = index === question.correct
                const showResult = selectedAnswer !== null

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 rounded-lg text-left transition-all ${
                      showResult
                        ? isCorrect
                          ? 'bg-green-500/20 border-2 border-green-500'
                          : isSelected
                          ? 'bg-red-500/20 border-2 border-red-500'
                          : 'bg-white/5 opacity-50'
                        : 'bg-white/10 hover:bg-white/20 border-2 border-transparent'
                    }`}
                    whileHover={!showResult ? { scale: 1.01 } : {}}
                    whileTap={!showResult ? { scale: 0.99 } : {}}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        showResult
                          ? isCorrect
                            ? 'bg-green-500 text-white'
                            : isSelected
                            ? 'bg-red-500 text-white'
                            : 'bg-white/20'
                          : 'bg-white/20'
                      }`}>
                        {showResult ? (isCorrect ? '✓' : isSelected ? '✗' : String.fromCharCode(65 + index)) : String.fromCharCode(65 + index)}
                      </span>
                      <span>{option}</span>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Explanation */}
      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className={`${
              selectedAnswer === question.correct
                ? 'bg-green-500/10 border-green-500/30'
                : 'bg-red-500/10 border-red-500/30'
            }`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  {selectedAnswer === question.correct ? (
                    <CheckCircle className="w-6 h-6 text-green-400 mt-0.5" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-400 mt-0.5" />
                  )}
                  <div>
                    <p className="font-medium mb-1">
                      {selectedAnswer === question.correct ? 'Правильно!' : 'Неверно'}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Next Button */}
      {showExplanation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Button
            onClick={nextQuestion}
            className="w-full bg-gradient-to-r from-purple-400 to-pink-500"
          >
            {currentQuestion >= gameQuestions.length - 1 ? 'Результаты' : 'Следующий вопрос'}
          </Button>
        </motion.div>
      )}
    </div>
  )
}
