'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, Trophy, Star, Clock, CheckCircle, XCircle, 
  MapPin, Mountain, Droplets, Building, Cloud, TreePine
} from 'lucide-react'

interface GeographyRussiaGameProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

type Difficulty = 'easy' | 'medium' | 'hard'
type Category = 'cities' | 'rivers' | 'mountains' | 'regions' | 'climate' | 'nature'

interface Question {
  question: string
  options: string[]
  correct: number
  explanation: string
  category: Category
  difficulty: Difficulty
}

const categoryInfo: Record<Category, { name: string; icon: React.ElementType; color: string }> = {
  cities: { name: 'Города', icon: Building, color: 'from-blue-400 to-indigo-500' },
  rivers: { name: 'Реки и озёра', icon: Droplets, color: 'from-cyan-400 to-blue-500' },
  mountains: { name: 'Горы', icon: Mountain, color: 'from-gray-400 to-slate-500' },
  regions: { name: 'Регионы', icon: MapPin, color: 'from-amber-400 to-orange-500' },
  climate: { name: 'Климат', icon: Cloud, color: 'from-sky-400 to-blue-500' },
  nature: { name: 'Природа', icon: TreePine, color: 'from-green-400 to-emerald-500' }
}

const questions: Question[] = [
  // === ГОРОДА ===
  {
    question: 'Какой город является столицей России?',
    options: ['Санкт-Петербург', 'Москва', 'Новосибирск', 'Казань'],
    correct: 1,
    explanation: 'Москва — столица Российской Федерации, крупнейший город страны. Население более 13 миллионов человек.',
    category: 'cities',
    difficulty: 'easy'
  },
  {
    question: 'Какой город России называют "Северной столицей"?',
    options: ['Мурманск', 'Архангельск', 'Санкт-Петербург', 'Петрозаводск'],
    correct: 2,
    explanation: 'Санкт-Петербург называют "Северной столицей" или "Северной Пальмирой". Город был столицей Российской империи с 1712 по 1918 год.',
    category: 'cities',
    difficulty: 'easy'
  },
  {
    question: 'Какой город России самый населённый после Москвы?',
    options: ['Новосибирск', 'Екатеринбург', 'Санкт-Петербург', 'Казань'],
    correct: 2,
    explanation: 'Санкт-Петербург — второй по населению город России после Москвы. Население около 5,4 миллионов человек.',
    category: 'cities',
    difficulty: 'easy'
  },
  {
    question: 'Какой город расположен на берегах Волги и является столицей Татарстана?',
    options: ['Самара', 'Саратов', 'Казань', 'Волгоград'],
    correct: 2,
    explanation: 'Казань — столица Республики Татарстан, один из крупнейших городов на Волге. Население более 1,2 миллионов человек.',
    category: 'cities',
    difficulty: 'medium'
  },
  {
    question: 'Какой город называют "Городом невест"?',
    options: ['Тула', 'Иваново', 'Владимир', 'Кострома'],
    correct: 1,
    explanation: 'Иваново называют "Городом невест" из-за исторически развитой текстильной промышленности, где работало много женщин.',
    category: 'cities',
    difficulty: 'medium'
  },
  {
    question: 'Какой город России расположен в двух частях света?',
    options: ['Москва', 'Екатеринбург', 'Магнитогорск', 'Оренбург'],
    correct: 2,
    explanation: 'Магнитогорск расположен на восточном склоне Южного Урала, часть города находится в Европе, часть — в Азии.',
    category: 'cities',
    difficulty: 'hard'
  },
  {
    question: 'Какой город является крупнейшим промышленным центром Урала?',
    options: ['Пермь', 'Екатеринбург', 'Челябинск', 'Уфа'],
    correct: 1,
    explanation: 'Екатеринбург — крупнейший город Урала, важный промышленный, культурный и научный центр.',
    category: 'cities',
    difficulty: 'medium'
  },

  // === РЕКИ И ОЗЁРА ===
  {
    question: 'Какая река самая длинная в России?',
    options: ['Волга', 'Енисей', 'Обь', 'Лена'],
    correct: 3,
    explanation: 'Лена — самая длинная река России (4400 км). Она течёт полностью по территории России.',
    category: 'rivers',
    difficulty: 'medium'
  },
  {
    question: 'Какая река называется "Волга-матушка"?',
    options: ['Дон', 'Волга', 'Енисей', 'Нева'],
    correct: 1,
    explanation: 'Волга — крупнейшая река Европы, в народе её называют "Волга-матушка". Длина 3530 км.',
    category: 'rivers',
    difficulty: 'easy'
  },
  {
    question: 'Какое озеро самое глубокое в мире?',
    options: ['Каспийское море', 'Ладожское', 'Байкал', 'Онежское'],
    correct: 2,
    explanation: 'Байкал — самое глубокое озеро в мире (1642 м). В нём содержится 20% мировых запасов пресной воды.',
    category: 'rivers',
    difficulty: 'easy'
  },
  {
    question: 'Какая река течёт через Санкт-Петербург?',
    options: ['Волга', 'Дон', 'Нева', 'Москва'],
    correct: 2,
    explanation: 'Нева — река, на которой стоит Санкт-Петербург. Её длина всего 74 км, но она очень полноводна.',
    category: 'rivers',
    difficulty: 'easy'
  },
  {
    question: 'Какое море является самым большим озером в мире?',
    options: ['Байкал', 'Каспийское море', 'Аральское море', 'Ладожское'],
    correct: 1,
    explanation: 'Каспийское море — крупнейшее замкнутое водоём в мире, которое называют морем из-за размера, но по сути является озером.',
    category: 'rivers',
    difficulty: 'medium'
  },
  {
    question: 'Где находятся истоки Волги?',
    options: [
      'На Урале',
      'На Валдайской возвышенности',
      'В Сибири',
      'На Кавказе'
    ],
    correct: 1,
    explanation: 'Исток Волги находится на Валдайской возвышенности в Тверской области, у деревни Волговерховье.',
    category: 'rivers',
    difficulty: 'hard'
  },
  {
    question: 'Какая река называется "Тихий Дон"?',
    options: ['Волга', 'Дон', 'Урал', 'Кубань'],
    correct: 1,
    explanation: 'Дон — река в Европейской части России. Её называют "Тихий Дон" из-за спокойного течения.',
    category: 'rivers',
    difficulty: 'easy'
  },

  // === ГОРЫ ===
  {
    question: 'Какая горная система разделяет Европу и Азию?',
    options: ['Кавказ', 'Урал', 'Алтай', 'Саяны'],
    correct: 1,
    explanation: 'Уральские горы — естественная граница между Европой и Азией. Протяжённость более 2000 км.',
    category: 'mountains',
    difficulty: 'easy'
  },
  {
    question: 'Какая гора самая высокая в России?',
    options: ['Эльбрус', 'Казбек', 'Белуха', 'Ключевская Сопка'],
    correct: 0,
    explanation: 'Эльбрус (5642 м) — высочайшая вершина России и Европы. Находится на Кавказе.',
    category: 'mountains',
    difficulty: 'easy'
  },
  {
    question: 'Где находится гора Белуха?',
    options: ['На Урале', 'На Алтае', 'На Кавказе', 'В Саянах'],
    correct: 1,
    explanation: 'Белуха (4506 м) — высочайшая вершина Алтая и Сибири. Внесена в список Всемирного наследия ЮНЕСКО.',
    category: 'mountains',
    difficulty: 'medium'
  },
  {
    question: 'Какой вулкан самый высокий в России?',
    options: ['Ключевская Сопка', 'Корякский вулкан', 'Авачинская сопка', 'Толбачик'],
    correct: 0,
    explanation: 'Ключевская Сопка (4750 м) — высочайший действующий вулкан в России и Евразии. Находится на Камчатке.',
    category: 'mountains',
    difficulty: 'hard'
  },
  {
    question: 'Какая горная система находится между Чёрным и Каспийским морями?',
    options: ['Урал', 'Кавказ', 'Алтай', 'Памир'],
    correct: 1,
    explanation: 'Кавказские горы расположены между Чёрным и Каспийским морями. Это молодая складчатая горная система.',
    category: 'mountains',
    difficulty: 'medium'
  },
  {
    question: 'Как называется горы на юге Сибири у границы с Монголией?',
    options: ['Урал', 'Саяны', 'Алтай', 'Становой хребет'],
    correct: 2,
    explanation: 'Алтай — горная страна на юге Сибири. Известен красивейшими озёрами, включая Телецкое.',
    category: 'mountains',
    difficulty: 'medium'
  },

  // === РЕГИОНЫ ===
  {
    question: 'Какой субъект РФ самый большой по площади?',
    options: ['Красноярский край', 'Якутия', 'Хабаровский край', 'Ямало-Ненецкий АО'],
    correct: 1,
    explanation: 'Республика Саха (Якутия) — самый большой субъект РФ. Её площадь 3,1 млн км² (больше Аргентины!).',
    category: 'regions',
    difficulty: 'medium'
  },
  {
    question: 'Какой край называют "Жемчужиной России"?',
    options: ['Краснодарский', 'Приморский', 'Красноярский', 'Алтайский'],
    correct: 0,
    explanation: 'Краснодарский край называют "Жемчужиной России" благодаря курортам Чёрного моря и мягкому климату.',
    category: 'regions',
    difficulty: 'medium'
  },
  {
    question: 'Какая республика находится на Северном Кавказе?',
    options: ['Татарстан', 'Башкортостан', 'Дагестан', 'Якутия'],
    correct: 2,
    explanation: 'Дагестан — республика на Северном Кавказе, самая южная и многонациональная республика России.',
    category: 'regions',
    difficulty: 'easy'
  },
  {
    question: 'Какой полуостров занимает территорию округа?',
    options: ['Камчатский', 'Кольский', 'Ямало-Ненецкий', 'Чукотский'],
    correct: 0,
    explanation: 'Камчатский край занимает полуостров Камчатка. Известен вулканами, гейзерами и дикими лососями.',
    category: 'regions',
    difficulty: 'medium'
  },
  {
    question: 'Какой край самый южный в России?',
    options: ['Краснодарский', 'Ставропольский', 'Приморский', 'Алтайский'],
    correct: 0,
    explanation: 'Краснодарский край — самый южный регион России. Включает курорты Сочи, Анапу, Геленджик.',
    category: 'regions',
    difficulty: 'medium'
  },
  {
    question: 'Какой субъект РФ граничит с Китаем?',
    options: ['Якутия', 'Приморский край', 'Хабаровский край', 'Все перечисленные'],
    correct: 3,
    explanation: 'Все перечисленные субъекты граничат с Китаем. Граница с Китаем составляет более 4000 км.',
    category: 'regions',
    difficulty: 'hard'
  },

  // === КЛИМАТ ===
  {
    question: 'Какой климат преобладает на большей части территории России?',
    options: ['Тропический', 'Умеренно-континентальный', 'Арктический', 'Субтропический'],
    correct: 1,
    explanation: 'Умеренно-континентальный климат преобладает на большей части европейской территории России.',
    category: 'climate',
    difficulty: 'easy'
  },
  {
    question: 'Где в России субтропический климат?',
    options: ['Калининград', 'Сочи', 'Владивосток', 'Мурманск'],
    correct: 1,
    explanation: 'Сочи — единственное место в России с субтропическим климатом. Пальмы и тёплое море!',
    category: 'climate',
    difficulty: 'easy'
  },
  {
    question: 'Какой город России называют "полюсом холода"?',
    options: ['Якутск', 'Оймякон', 'Норильск', 'Воркута'],
    correct: 1,
    explanation: 'Оймякон — самый холодный населённый пункт в мире. Рекорд: -67,7°C. Там живут около 500 человек.',
    category: 'climate',
    difficulty: 'medium'
  },
  {
    question: 'Что такое вечная мерзлота?',
    options: [
      'Лёд, который не тает летом',
      'Грунт, который постоянно остаётся мёрзлым',
      'Снежный покров круглый год',
      'Ледники в горах'
    ],
    correct: 1,
    explanation: 'Вечная мерзлота — грунт, который не оттаивает в течение многих лет. Занимает 65% территории России.',
    category: 'climate',
    difficulty: 'medium'
  },
  {
    question: 'Какое море замерзает зимой?',
    options: ['Чёрное', 'Каспийское', 'Балтийское', 'Баренцево'],
    correct: 2,
    explanation: 'Балтийское море замерзает зимой, особенно Финский залив. Чёрное и Каспийское — нет.',
    category: 'climate',
    difficulty: 'medium'
  },
  {
    question: 'Как называется холодный ветер с гор на побережье Чёрного моря?',
    options: ['Бора', 'Муссон', 'Пассат', 'Сирокко'],
    correct: 0,
    explanation: 'Бора — холодный порывистый ветер, дующий с гор на побережье. Типичен для Новороссийска.',
    category: 'climate',
    difficulty: 'hard'
  },

  // === ПРИРОДА ===
  {
    question: 'Какое животное является символом России?',
    options: ['Тигр', 'Медведь', 'Орёл', 'Соболь'],
    correct: 1,
    explanation: 'Медведь — неофициальный символ России. Это связано с обилием медведей в русских лесах.',
    category: 'nature',
    difficulty: 'easy'
  },
  {
    question: 'Какой лес преобладает в России?',
    options: ['Тропический', 'Хвойный (тайга)', 'Лиственный', 'Смешанный'],
    correct: 1,
    explanation: 'Тайга (хвойный лес) — самый распространённый тип леса в России. Занимает более 50% лесной площади.',
    category: 'nature',
    difficulty: 'easy'
  },
  {
    question: 'Какой редкий вид тигра живёт в России?',
    options: ['Бенгальский', 'Амурский', 'Суматранский', 'Малайский'],
    correct: 1,
    explanation: 'Амурский (уссурийский) тигр — крупнейший тигр в мире. Живёт в Приморском крае. Около 600 особей.',
    category: 'nature',
    difficulty: 'easy'
  },
  {
    question: 'Какая природная зона занимает больше всего территории России?',
    options: ['Тундра', 'Тайга', 'Степь', 'Пустыня'],
    correct: 1,
    explanation: 'Тайга — самая большая природная зона России. Простирается от западных границ до Тихого океана.',
    category: 'nature',
    difficulty: 'medium'
  },
  {
    question: 'Где обитает снежный барс (ирбис)?',
    options: ['На Урале', 'На Кавказе', 'На Алтае и в Саянах', 'В тайге'],
    correct: 2,
    explanation: 'Снежный барс обитает в горах Алтая, Саян и Тывы. Очень редкий вид, около 100 особей в России.',
    category: 'nature',
    difficulty: 'hard'
  },
  {
    question: 'Какое растение является символом России?',
    options: ['Роза', 'Берёза', 'Сосна', 'Дуб'],
    correct: 1,
    explanation: 'Берёза — символ России. Берёзовые рощи — неотъемлемая часть русского пейзажа.',
    category: 'nature',
    difficulty: 'easy'
  },
  {
    question: 'Какой заповедник первым был создан в России?',
    options: ['Байкальский', 'Баргузинский', 'Аскания-Нова', 'Кавказский'],
    correct: 1,
    explanation: 'Баргузинский заповедник был создан в 1916 году для сохранения соболя. Первый заповедник России.',
    category: 'nature',
    difficulty: 'hard'
  }
]

export default function GeographyRussiaGame({ gradeId = 0, onExperience }: GeographyRussiaGameProps) {
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
    const baseXP = 120
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
            🗺️
          </motion.div>
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            География России
          </h2>
          <p className="text-gray-400">
            Открой для себя огромную страну!
          </p>
        </div>

        {/* Category Selection */}
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-yellow-400" />
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
                🇷🇺 Все темы
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
            className="w-full py-6 text-lg font-bold bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600"
          >
            <MapPin className="w-6 h-6 mr-2" />
            Начать путешествие
          </Button>
        </motion.div>

        {/* Info */}
        <div className="text-center text-gray-500 text-sm">
          <p>10 вопросов • +{120} XP за прохождение</p>
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
          {percentage >= 80 ? '🏆' : percentage >= 50 ? '🗺️' : '🧭'}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            {percentage >= 80 ? 'Отлично!' : percentage >= 50 ? 'Хорошо!' : 'Изучай карту!'}
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
          <Card className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-blue-500/30 inline-block">
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
            className="flex-1 bg-gradient-to-r from-blue-400 to-indigo-500"
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
          className="h-full bg-gradient-to-r from-blue-400 to-indigo-500"
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
            className="w-full bg-gradient-to-r from-blue-400 to-indigo-500"
          >
            {currentQuestion >= gameQuestions.length - 1 ? 'Результаты' : 'Следующий вопрос'}
          </Button>
        </motion.div>
      )}
    </div>
  )
}
