'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, Trophy, Star, Clock, CheckCircle, XCircle, 
  Sun, Moon, Sparkles, Globe, Rocket, Telescope
} from 'lucide-react'

interface AstronomyGameProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

type Difficulty = 'easy' | 'medium' | 'hard'
type Category = 'solar' | 'planets' | 'stars' | 'galaxies' | 'cosmos' | 'history'

interface Question {
  question: string
  options: string[]
  correct: number
  explanation: string
  category: Category
  difficulty: Difficulty
}

const categoryInfo: Record<Category, { name: string; icon: React.ElementType; color: string }> = {
  solar: { name: 'Солнечная система', icon: Sun, color: 'from-yellow-400 to-orange-500' },
  planets: { name: 'Планеты', icon: Globe, color: 'from-blue-400 to-cyan-500' },
  stars: { name: 'Звёзды', icon: Sparkles, color: 'from-purple-400 to-pink-500' },
  galaxies: { name: 'Галактики', icon: Telescope, color: 'from-indigo-400 to-violet-500' },
  cosmos: { name: 'Космос', icon: Rocket, color: 'from-cyan-400 to-blue-500' },
  history: { name: 'История', icon: Moon, color: 'from-gray-400 to-slate-500' }
}

const questions: Question[] = [
  // === СОЛНЕЧНАЯ СИСТЕМА ===
  {
    question: 'Сколько планет в Солнечной системе?',
    options: ['7', '8', '9', '10'],
    correct: 1,
    explanation: 'В Солнечной системе 8 планет: Меркурий, Венера, Земля, Марс, Юпитер, Сатурн, Уран, Нептун. Плутон был лишён статуса планеты в 2006 году.',
    category: 'solar',
    difficulty: 'easy'
  },
  {
    question: 'Какая планета находится ближе всего к Солнцу?',
    options: ['Венера', 'Земля', 'Меркурий', 'Марс'],
    correct: 2,
    explanation: 'Меркурий — самая близкая к Солнцу планета. Расстояние до Солнца составляет около 58 миллионов километров.',
    category: 'solar',
    difficulty: 'easy'
  },
  {
    question: 'Какая планета самая большая в Солнечной системе?',
    options: ['Сатурн', 'Юпитер', 'Уран', 'Нептун'],
    correct: 1,
    explanation: 'Юпитер — самая большая планета Солнечной системы. Его масса более чем в 2,5 раза превышает массу всех остальных планет вместе взятых.',
    category: 'solar',
    difficulty: 'easy'
  },
  {
    question: 'Что такое Солнце?',
    options: ['Планета', 'Звезда', 'Спутник', 'Астероид'],
    correct: 1,
    explanation: 'Солнце — это звезда, раскалённый газовый шар. В центре Солнца происходят термоядерные реакции, превращающие водород в гелий.',
    category: 'solar',
    difficulty: 'easy'
  },
  {
    question: 'Какой газ составляет основу атмосферы Солнца?',
    options: ['Кислород', 'Углекислый газ', 'Водород', 'Азот'],
    correct: 2,
    explanation: 'Солнце состоит примерно на 73% из водорода и на 25% из гелия. Водород служит топливом для термоядерных реакций.',
    category: 'solar',
    difficulty: 'medium'
  },
  {
    question: 'Что такое пояс астероидов?',
    options: [
      'Область между Землёй и Марсом',
      'Область между Марсом и Юпитером',
      'Область за Нептуном',
      'Кольца Сатурна'
    ],
    correct: 1,
    explanation: 'Пояс астероидов находится между орбитами Марса и Юпитера. Он содержит миллионы астероидов разных размеров.',
    category: 'solar',
    difficulty: 'medium'
  },
  {
    question: 'Какая карликовая планета находится в поясе Койпера?',
    options: ['Церера', 'Плутон', 'Эрида', 'Макемаке'],
    correct: 1,
    explanation: 'Плутон — самая известная карликовая планета в поясе Койпера. До 2006 года он считался девятой планетой Солнечной системы.',
    category: 'solar',
    difficulty: 'hard'
  },

  // === ПЛАНЕТЫ ===
  {
    question: 'Какая планета называется "красной планетой"?',
    options: ['Венера', 'Юпитер', 'Марс', 'Меркурий'],
    correct: 2,
    explanation: 'Марс называют "красной планетой" из-за окислов железа (ржавчины) на его поверхности, которые придают ему красноватый оттенок.',
    category: 'planets',
    difficulty: 'easy'
  },
  {
    question: 'У какой планеты есть кольца?',
    options: ['Юпитер', 'Сатурн', 'Уран', 'Все перечисленные'],
    correct: 3,
    explanation: 'Кольца есть у всех планет-гигантов: Юпитера, Сатурна, Урана и Нептуна. Но у Сатурна они самые заметные и красивые.',
    category: 'planets',
    difficulty: 'medium'
  },
  {
    question: 'Какая планета вращается в обратную сторону?',
    options: ['Марс', 'Венера', 'Нептун', 'Уран'],
    correct: 1,
    explanation: 'Венера вращается в обратную сторону (ретроградное вращение) по сравнению с большинством планет. День на Венере длиннее года!',
    category: 'planets',
    difficulty: 'hard'
  },
  {
    question: 'Какая планета самая горячая?',
    options: ['Меркурий', 'Венера', 'Марс', 'Юпитер'],
    correct: 1,
    explanation: 'Венера — самая горячая планета (около 465°C). Плотная атмосфера из углекислого газа создаёт парниковый эффект.',
    category: 'planets',
    difficulty: 'medium'
  },
  {
    question: 'Сколько спутников у Земли?',
    options: ['0', '1', '2', '3'],
    correct: 1,
    explanation: 'У Земли один естественный спутник — Луна. Она является пятым по размеру спутником в Солнечной системе.',
    category: 'planets',
    difficulty: 'easy'
  },
  {
    question: 'Какая планета имеет самый большой спутник в Солнечной системе?',
    options: ['Сатурн', 'Юпитер', 'Уран', 'Нептун'],
    correct: 1,
    explanation: 'Ганимед — спутник Юпитера — самый большой в Солнечной системе. Он даже больше планеты Меркурий!',
    category: 'planets',
    difficulty: 'medium'
  },
  {
    question: 'Какая планета имеет самую плотную атмосферу?',
    options: ['Юпитер', 'Венера', 'Нептун', 'Сатурн'],
    correct: 1,
    explanation: 'Венера имеет самую плотную атмосферу среди планет земной группы. Давление на её поверхности в 92 раза больше земного.',
    category: 'planets',
    difficulty: 'hard'
  },

  // === ЗВЁЗДЫ ===
  {
    question: 'Что такое звезда?',
    options: [
      'Холодный камень',
      'Раскалённый газовый шар, излучающий свет',
      'Отражающий свет объект',
      'Планета'
    ],
    correct: 1,
    explanation: 'Звезда — это массивный газовый шар, в котором происходят термоядерные реакции, выделяющие энергию в виде света и тепла.',
    category: 'stars',
    difficulty: 'easy'
  },
  {
    question: 'Какая звезда ближайшая к Земле?',
    options: ['Сириус', 'Солнце', 'Альфа Центавра', 'Полярная'],
    correct: 1,
    explanation: 'Солнце — ближайшая к Земле звезда. Следующая ближайшая — Проксима Центавра, находится на расстоянии 4,2 световых лет.',
    category: 'stars',
    difficulty: 'easy'
  },
  {
    question: 'Какая звезда самая яркая на ночном небе?',
    options: ['Полярная', 'Сириус', 'Вега', 'Арктур'],
    correct: 1,
    explanation: 'Сириус — самая яркая звезда на ночном небе. Она находится в созвездии Большого Пса на расстоянии 8,6 световых лет.',
    category: 'stars',
    difficulty: 'medium'
  },
  {
    question: 'Из чего состоят звёзды?',
    options: [
      'Твёрдых пород',
      'Плазмы (ионизированного газа)',
      'Жидкого металла',
      'Ледяной смеси'
    ],
    correct: 1,
    explanation: 'Звёзды состоят из плазмы — ионизированного газа. В центре звезды температура достигает миллионов градусов.',
    category: 'stars',
    difficulty: 'medium'
  },
  {
    question: 'Что происходит со звездой в конце жизни?',
    options: [
      'Она исчезает бесследно',
      'Превращается в чёрную дыру, нейтронную звезду или белый карлик',
      'Становится планетой',
      'Остаётся неизменной'
    ],
    correct: 1,
    explanation: 'Судьба звезды зависит от её массы: маленькие становятся белыми карликами, средние — нейтронными звёздами, массивные — чёрными дырами.',
    category: 'stars',
    difficulty: 'hard'
  },
  {
    question: 'Что такое созвездие?',
    options: [
      'Группа физически связанных звёзд',
      'Группа звёзд, образующая узор на небе',
      'Галактика',
      'Планетарная система'
    ],
    correct: 1,
    explanation: 'Созвездие — это участок неба с группой звёзд, которые образуют узор. Звёзды в созвездии могут находиться на разных расстояниях от нас.',
    category: 'stars',
    difficulty: 'easy'
  },
  {
    question: 'Сколько созвездий официально признано?',
    options: ['12', '48', '88', '108'],
    correct: 2,
    explanation: 'Международный астрономический союз официально признаёт 88 созвездий, покрывающих всё небо.',
    category: 'stars',
    difficulty: 'hard'
  },

  // === ГАЛАКТИКИ ===
  {
    question: 'Что такое галактика?',
    options: [
      'Одна звезда',
      'Группа планет',
      'Гравитационно связанная система звёзд, газа и пыли',
      'Созвездие'
    ],
    correct: 2,
    explanation: 'Галактика — это гравитационно связанная система, состоящая из миллиардов звёзд, газа, пыли и тёмной материи.',
    category: 'galaxies',
    difficulty: 'medium'
  },
  {
    question: 'Как называется наша галактика?',
    options: ['Андромеда', 'Млечный Путь', 'Треугольник', 'Магелланово облако'],
    correct: 1,
    explanation: 'Наша галактика называется Млечный Путь. Она содержит от 200 до 400 миллиардов звёзд.',
    category: 'galaxies',
    difficulty: 'easy'
  },
  {
    question: 'Какая галактика ближайшая к нам?',
    options: [
      'Галактика Андромеды',
      'Большое Магелланово Облако',
      'Галактика Треугольника',
      'Галактика Сомбреро'
    ],
    correct: 1,
    explanation: 'Большое Магелланово Облако — ближайшая к нам галактика (158 200 световых лет). Галактика Андромеды — ближайшая крупная спиральная галактика.',
    category: 'galaxies',
    difficulty: 'hard'
  },
  {
    question: 'Сколько звёзд в нашей галактике?',
    options: [
      'Миллион',
      'Миллиард',
      '200-400 миллиардов',
      'Триллион'
    ],
    correct: 2,
    explanation: 'В Млечном Пути, по оценкам учёных, от 200 до 400 миллиардов звёзд. Точное число определить сложно.',
    category: 'galaxies',
    difficulty: 'medium'
  },
  {
    question: 'К какому типу относится галактика Млечный Путь?',
    options: ['Эллиптическая', 'Спиральная', 'Неправильная', 'Линзовидная'],
    correct: 1,
    explanation: 'Млечный Путь — спиральная галактика с перемычкой (баром). У неё есть спиральные рукава, выходящие из центральной перемычки.',
    category: 'galaxies',
    difficulty: 'medium'
  },
  {
    question: 'Сталкиваются ли галактики?',
    options: [
      'Нет, они слишком далеко друг от друга',
      'Да, галактики могут сталкиваться и сливаться',
      'Только в кино',
      'Только при взрыве звезды'
    ],
    correct: 1,
    explanation: 'Галактики могут сталкиваться и сливаться. Сейчас Млечный Путь сближается с галактикой Андромеды — они столкнутся через 4 миллиарда лет.',
    category: 'galaxies',
    difficulty: 'hard'
  },

  // === КОСМОС ===
  {
    question: 'Что такое космос?',
    options: [
      'Воздушное пространство над Землёй',
      'Пространство за пределами земной атмосферы',
      'Океан',
      'Пустота'
    ],
    correct: 1,
    explanation: 'Космос — это пространство за пределами земной атмосферы. Официальная граница космоса проходит на высоте 100 км (линия Кармана).',
    category: 'cosmos',
    difficulty: 'easy'
  },
  {
    question: 'Что такое невесомость?',
    options: [
      'Отсутствие массы',
      'Состояние, при котором вес тела равен нулю',
      'Отсутствие воздуха',
      'Очень низкая температура'
    ],
    correct: 1,
    explanation: 'Невесомость — это состояние, при котором на тело не действуют силы реакции опоры или подвеса. В космосе это обычное явление.',
    category: 'cosmos',
    difficulty: 'medium'
  },
  {
    question: 'Почему в космосе темно?',
    options: [
      'Там нет звёзд',
      'Там вакуум, и свет не рассеивается',
      'Солнце не светит в космосе',
      'Космос поглощает свет'
    ],
    correct: 1,
    explanation: 'В космосе вакуум — нет частиц воздуха, которые рассеивали бы свет. Поэтому даже при ярком Солнце небо кажется чёрным.',
    category: 'cosmos',
    difficulty: 'medium'
  },
  {
    question: 'Какая температура в космосе?',
    options: [
      'Всегда очень холодно',
      'Всегда очень жарко',
      'Зависит от освещённости Солнцем',
      'Комнатная температура'
    ],
    correct: 2,
    explanation: 'Температура в космосе зависит от освещённости: на солнечной стороне может быть +120°C, в тени — -160°C и ниже.',
    category: 'cosmos',
    difficulty: 'medium'
  },
  {
    question: 'Что такое чёрная дыра?',
    options: [
      'Пустое место в космосе',
      'Область пространства с настолько сильной гравитацией, что оттуда не может вырваться даже свет',
      'Тёмная планета',
      'Пропасть в космосе'
    ],
    correct: 1,
    explanation: 'Чёрная дыра — область пространства-времени, гравитация которой настолько сильна, что покинуть её не могут даже кванты света.',
    category: 'cosmos',
    difficulty: 'hard'
  },
  {
    question: 'Какой скорости должен достичь объект, чтобы стать спутником Земли?',
    options: [
      '100 км/ч',
      '1000 км/ч',
      '7,9 км/с (первая космическая)',
      '11,2 км/с (вторая космическая)'
    ],
    correct: 2,
    explanation: 'Первая космическая скорость — 7,9 км/с. С такой скоростью объект может стать спутником Земли и вращаться вокруг неё.',
    category: 'cosmos',
    difficulty: 'hard'
  },

  // === ИСТОРИЯ ОСВОЕНИЯ КОСМОСА ===
  {
    question: 'Кто стал первым человеком в космосе?',
    options: ['Нил Армстронг', 'Юрий Гагарин', 'Алексей Леонов', 'Герман Титов'],
    correct: 1,
    explanation: 'Юрий Гагарин стал первым человеком в космосе 12 апреля 1961 года. Его полёт на корабле "Восток-1" длился 108 минут.',
    category: 'history',
    difficulty: 'easy'
  },
  {
    question: 'Когда был запущен первый искусственный спутник Земли?',
    options: ['1955 год', '1957 год', '1961 год', '1965 год'],
    correct: 1,
    explanation: 'Первый искусственный спутник Земли был запущен 4 октября 1957 года в СССР. Это положило начало космической эре.',
    category: 'history',
    difficulty: 'medium'
  },
  {
    question: 'Кто первым ступил на Луну?',
    options: ['Юрий Гагарин', 'Нил Армстронг', 'Базз Олдрин', 'Алексей Леонов'],
    correct: 1,
    explanation: 'Нил Армстронг первым ступил на Луну 20 июля 1969 года в ходе миссии "Аполлон-11". Его слова стали легендарными.',
    category: 'history',
    difficulty: 'easy'
  },
  {
    question: 'Кто первым вышел в открытый космос?',
    options: ['Юрий Гагарин', 'Нил Армстронг', 'Алексей Леонов', 'Валентина Терешкова'],
    correct: 2,
    explanation: 'Алексей Леонов первым вышел в открытый космос 18 марта 1965 года. Его выход длился 12 минут.',
    category: 'history',
    difficulty: 'medium'
  },
  {
    question: 'Как называлась первая женщина-космонавт?',
    options: ['Светлана Савицкая', 'Валентина Терешкова', 'Елена Кондакова', 'Салли Райд'],
    correct: 1,
    explanation: 'Валентина Терешкова — первая женщина-космонавт. Она совершила полёт 16 июня 1963 года на корабле "Восток-6".',
    category: 'history',
    difficulty: 'medium'
  },
  {
    question: 'Как называлась первая орбитальная космическая станция?',
    options: ['Мир', 'МКС', 'Салют-1', 'Скайлэб'],
    correct: 2,
    explanation: '"Салют-1" — первая орбитальная станция, запущенная СССР 19 апреля 1971 года. Станция "Мир" была запущена позже, в 1986 году.',
    category: 'history',
    difficulty: 'hard'
  },
  {
    question: 'В каком году началось строительство МКС?',
    options: ['1990', '1998', '2000', '2005'],
    correct: 1,
    explanation: 'Строительство Международной космической станции началось в 1998 году. МКС — крупнейший международный космический проект.',
    category: 'history',
    difficulty: 'hard'
  }
]

export default function AstronomyGame({ gradeId = 0, onExperience }: AstronomyGameProps) {
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
    const baseXP = 105
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
            🌌
          </motion.div>
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Астрономия
          </h2>
          <p className="text-gray-400">
            Отправься в путешествие по космосу!
          </p>
        </div>

        {/* Category Selection */}
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Telescope className="w-5 h-5 text-yellow-400" />
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
                🚀 Все темы
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
            className="w-full py-6 text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-500 hover:from-indigo-500 hover:to-purple-600"
          >
            <Rocket className="w-6 h-6 mr-2" />
            Начать путешествие
          </Button>
        </motion.div>

        {/* Info */}
        <div className="text-center text-gray-500 text-sm">
          <p>10 вопросов • +{105} XP за прохождение</p>
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
          {percentage >= 80 ? '🏆' : percentage >= 50 ? '🌟' : '🌙'}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            {percentage >= 80 ? 'Превосходно!' : percentage >= 50 ? 'Хороший полёт!' : 'Продолжай изучать космос!'}
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
          <Card className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-indigo-500/30 inline-block">
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
            className="flex-1 bg-gradient-to-r from-indigo-400 to-purple-500"
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
          className="h-full bg-gradient-to-r from-indigo-400 to-purple-500"
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
            className="w-full bg-gradient-to-r from-indigo-400 to-purple-500"
          >
            {currentQuestion >= gameQuestions.length - 1 ? 'Результаты' : 'Следующий вопрос'}
          </Button>
        </motion.div>
      )}
    </div>
  )
}
