'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, Trophy, Star, Clock, CheckCircle, XCircle, 
  Hexagon, Triangle, Square, Circle, Pentagon, Compass
} from 'lucide-react'

interface GeometryGameProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

type Difficulty = 'easy' | 'medium' | 'hard'
type Category = 'shapes' | 'angles' | 'triangles' | 'circles' | 'formulas' | 'solids'

interface Question {
  question: string
  options: string[]
  correct: number
  explanation: string
  category: Category
  difficulty: Difficulty
}

const categoryInfo: Record<Category, { name: string; icon: React.ElementType; color: string }> = {
  shapes: { name: 'Фигуры', icon: Square, color: 'from-blue-400 to-cyan-500' },
  angles: { name: 'Углы', icon: Triangle, color: 'from-green-400 to-emerald-500' },
  triangles: { name: 'Треугольники', icon: Triangle, color: 'from-yellow-400 to-orange-500' },
  circles: { name: 'Окружности', icon: Circle, color: 'from-purple-400 to-pink-500' },
  formulas: { name: 'Формулы', icon: Hexagon, color: 'from-red-400 to-rose-500' },
  solids: { name: 'Объёмные тела', icon: Pentagon, color: 'from-indigo-400 to-violet-500' }
}

const questions: Question[] = [
  // === ФИГУРЫ ===
  {
    question: 'Сколько сторон у квадрата?',
    options: ['3', '4', '5', '6'],
    correct: 1,
    explanation: 'Квадрат — это четырёхугольник, у которого все стороны равны и все углы прямые. У квадрата 4 стороны.',
    category: 'shapes',
    difficulty: 'easy'
  },
  {
    question: 'Какая фигура имеет 3 стороны?',
    options: ['Квадрат', 'Треугольник', 'Пятиугольник', 'Шестиугольник'],
    correct: 1,
    explanation: 'Треугольник — это геометрическая фигура, состоящая из трёх точек, не лежащих на одной прямой, и трёх отрезков, соединяющих эти точки.',
    category: 'shapes',
    difficulty: 'easy'
  },
  {
    question: 'Чему равна сумма углов четырёхугольника?',
    options: ['180°', '270°', '360°', '540°'],
    correct: 2,
    explanation: 'Сумма углов любого четырёхугольника равна 360°. Это можно доказать, разделив четырёхугольник на два треугольника диагональю.',
    category: 'shapes',
    difficulty: 'medium'
  },
  {
    question: 'Как называется четырёхугольник, у которого противоположные стороны параллельны?',
    options: ['Трапеция', 'Параллелограмм', 'Ромб', 'Квадрат'],
    correct: 1,
    explanation: 'Параллелограмм — это четырёхугольник, у которого противоположные стороны попарно параллельны.',
    category: 'shapes',
    difficulty: 'medium'
  },
  {
    question: 'Какой четырёхугольник является одновременно параллелограммом, прямоугольником и ромбом?',
    options: ['Трапеция', 'Квадрат', 'Дельтоид', 'Произвольный'],
    correct: 1,
    explanation: 'Квадрат обладает всеми свойствами параллелограмма (параллельные стороны), прямоугольника (прямые углы) и ромба (равные стороны).',
    category: 'shapes',
    difficulty: 'hard'
  },
  {
    question: 'Как называется четырёхугольник с двумя параллельными сторонами?',
    options: ['Параллелограмм', 'Трапеция', 'Ромб', 'Квадрат'],
    correct: 1,
    explanation: 'Трапеция — это четырёхугольник, у которого две стороны параллельны (основания), а две другие — нет.',
    category: 'shapes',
    difficulty: 'medium'
  },

  // === УГЛЫ ===
  {
    question: 'Какой угол называется прямым?',
    options: ['30°', '45°', '90°', '180°'],
    correct: 2,
    explanation: 'Прямой угол равен 90°. Он образуется перпендикулярными прямыми.',
    category: 'angles',
    difficulty: 'easy'
  },
  {
    question: 'Какой угол называется острым?',
    options: [
      'Больше 90°',
      'Меньше 90°',
      'Равен 90°',
      'Равен 180°'
    ],
    correct: 1,
    explanation: 'Острый угол — это угол, который меньше 90° (прямого угла).',
    category: 'angles',
    difficulty: 'easy'
  },
  {
    question: 'Какой угол называется тупым?',
    options: [
      'Меньше 90°',
      'Больше 90°, но меньше 180°',
      'Равен 180°',
      'Равен 360°'
    ],
    correct: 1,
    explanation: 'Тупой угол — это угол, который больше 90°, но меньше 180°.',
    category: 'angles',
    difficulty: 'easy'
  },
  {
    question: 'Чему равна сумма смежных углов?',
    options: ['90°', '180°', '270°', '360°'],
    correct: 1,
    explanation: 'Смежные углы — это два угла, у которых одна сторона общая, а две другие составляют прямую. Их сумма всегда равна 180°.',
    category: 'angles',
    difficulty: 'medium'
  },
  {
    question: 'Как называются углы, стороны которых являются продолжением друг друга?',
    options: ['Смежные', 'Вертикальные', 'Накрест лежащие', 'Соответственные'],
    correct: 1,
    explanation: 'Вертикальные углы — это углы, стороны одного из которых являются продолжениями сторон другого. Вертикальные углы равны.',
    category: 'angles',
    difficulty: 'medium'
  },
  {
    question: 'Чему равен угол между биссектрисами смежных углов?',
    options: ['45°', '90°', '180°', 'Зависит от углов'],
    correct: 1,
    explanation: 'Биссектрисы смежных углов всегда перпендикулярны, поэтому угол между ними равен 90°.',
    category: 'angles',
    difficulty: 'hard'
  },

  // === ТРЕУГОЛЬНИКИ ===
  {
    question: 'Чему равна сумма углов треугольника?',
    options: ['90°', '180°', '270°', '360°'],
    correct: 1,
    explanation: 'Сумма углов любого треугольника равна 180°. Это одна из фундаментальных теорем геометрии.',
    category: 'triangles',
    difficulty: 'easy'
  },
  {
    question: 'Как называется треугольник, у которого все стороны равны?',
    options: ['Разносторонний', 'Равнобедренный', 'Равносторонний', 'Прямоугольный'],
    correct: 2,
    explanation: 'Равносторонний (правильный) треугольник — это треугольник, у которого все три стороны равны.',
    category: 'triangles',
    difficulty: 'easy'
  },
  {
    question: 'Как называется треугольник с прямым углом?',
    options: ['Остроугольный', 'Тупоугольный', 'Прямоугольный', 'Равносторонний'],
    correct: 2,
    explanation: 'Прямоугольный треугольник — это треугольник, у которого один угол равен 90° (прямой угол).',
    category: 'triangles',
    difficulty: 'easy'
  },
  {
    question: 'Как называется сторона прямоугольного треугольника, лежащая против прямого угла?',
    options: ['Катет', 'Гипотенуза', 'Основание', 'Боковая сторона'],
    correct: 1,
    explanation: 'Гипотенуза — это самая длинная сторона прямоугольного треугольника, лежащая против прямого угла.',
    category: 'triangles',
    difficulty: 'medium'
  },
  {
    question: 'Как называется теорема: a² + b² = c²?',
    options: [
      'Теорема синусов',
      'Теорема косинусов',
      'Теорема Пифагора',
      'Теорема Фалеса'
    ],
    correct: 2,
    explanation: 'Теорема Пифагора: в прямоугольном треугольнике квадрат гипотенузы равен сумме квадратов катетов.',
    category: 'triangles',
    difficulty: 'medium'
  },
  {
    question: 'Чему равны углы равностороннего треугольника?',
    options: ['30°, 60°, 90°', '45°, 45°, 90°', '60°, 60°, 60°', '90°, 90°, 0°'],
    correct: 2,
    explanation: 'В равностороннем треугольнике все углы равны 60°, так как 180° / 3 = 60°.',
    category: 'triangles',
    difficulty: 'medium'
  },
  {
    question: 'Какой признак равенства треугольников связывает три стороны?',
    options: [
      'Первый признак (по двум сторонам и углу)',
      'Второй признак (по стороне и двум углам)',
      'Третий признак (по трём сторонам)',
      'Четвёртый признак'
    ],
    correct: 2,
    explanation: 'Третий признак равенства треугольников: если три стороны одного треугольника соответственно равны трём сторонам другого, то треугольники равны.',
    category: 'triangles',
    difficulty: 'hard'
  },

  // === ОКРУЖНОСТИ ===
  {
    question: 'Что такое радиус окружности?',
    options: [
      'Отрезок, проходящий через центр',
      'Расстояние от центра до любой точки окружности',
      'Длина окружности',
      'Площадь круга'
    ],
    correct: 1,
    explanation: 'Радиус — это расстояние от центра окружности до любой её точки. Все радиусы одной окружности равны.',
    category: 'circles',
    difficulty: 'easy'
  },
  {
    question: 'Что такое диаметр окружности?',
    options: [
      'Половина радиуса',
      'Отрезок, соединяющий две точки окружности',
      'Отрезок, проходящий через центр и соединяющий две точки окружности',
      'Длина окружности'
    ],
    correct: 2,
    explanation: 'Диаметр — это отрезок, проходящий через центр окружности и соединяющий две её точки. Диаметр равен двум радиусам.',
    category: 'circles',
    difficulty: 'easy'
  },
  {
    question: 'Чему равно число π (приблизительно)?',
    options: ['2.14', '3.14', '4.14', '5.14'],
    correct: 1,
    explanation: 'Число π — это отношение длины окружности к её диаметру. Приблизительно π ≈ 3.14159...',
    category: 'circles',
    difficulty: 'easy'
  },
  {
    question: 'Какая формула выражает длину окружности?',
    options: ['C = πr', 'C = 2πr', 'C = πr²', 'C = 2πr²'],
    correct: 1,
    explanation: 'Длина окружности C = 2πr, где r — радиус окружности. Также можно записать как C = πd, где d — диаметр.',
    category: 'circles',
    difficulty: 'medium'
  },
  {
    question: 'Какая формула выражает площадь круга?',
    options: ['S = πr', 'S = 2πr', 'S = πr²', 'S = 2πr²'],
    correct: 2,
    explanation: 'Площадь круга S = πr², где r — радиус круга.',
    category: 'circles',
    difficulty: 'medium'
  },
  {
    question: 'Как называется отрезок, соединяющий две точки окружности?',
    options: ['Радиус', 'Диаметр', 'Хорда', 'Дуга'],
    correct: 2,
    explanation: 'Хорда — это отрезок, соединяющий две точки окружности. Диаметр — это хорда, проходящая через центр.',
    category: 'circles',
    difficulty: 'medium'
  },

  // === ФОРМУЛЫ ===
  {
    question: 'Какая формула выражает площадь прямоугольника?',
    options: ['S = a + b', 'S = a × b', 'S = 2(a + b)', 'S = a²'],
    correct: 1,
    explanation: 'Площадь прямоугольника равна произведению его смежных сторон: S = a × b.',
    category: 'formulas',
    difficulty: 'easy'
  },
  {
    question: 'Какая формула выражает площадь квадрата со стороной a?',
    options: ['S = a', 'S = 2a', 'S = a²', 'S = 4a'],
    correct: 2,
    explanation: 'Площадь квадрата равна квадрату его стороны: S = a².',
    category: 'formulas',
    difficulty: 'easy'
  },
  {
    question: 'Какая формула выражает площадь треугольника?',
    options: ['S = a × h', 'S = ½ × a × h', 'S = a + h', 'S = 2 × a × h'],
    correct: 1,
    explanation: 'Площадь треугольника равна половине произведения основания на высоту: S = ½ × a × h.',
    category: 'formulas',
    difficulty: 'medium'
  },
  {
    question: 'Какая формула выражает периметр прямоугольника?',
    options: ['P = a + b', 'P = a × b', 'P = 2(a + b)', 'P = 4a'],
    correct: 2,
    explanation: 'Периметр прямоугольника равен удвоенной сумме смежных сторон: P = 2(a + b).',
    category: 'formulas',
    difficulty: 'medium'
  },
  {
    question: 'Какая формула выражает площадь трапеции?',
    options: [
      'S = ½ × a × h',
      'S = ½ × (a + b) × h',
      'S = a × b × h',
      'S = (a + b) × h'
    ],
    correct: 1,
    explanation: 'Площадь трапеции равна половине произведения суммы оснований на высоту: S = ½ × (a + b) × h.',
    category: 'formulas',
    difficulty: 'medium'
  },
  {
    question: 'Какая формула выражает площадь параллелограмма?',
    options: ['S = a + b', 'S = a × h', 'S = ½ × a × h', 'S = 2 × a × h'],
    correct: 1,
    explanation: 'Площадь параллелограмма равна произведению основания на высоту: S = a × h.',
    category: 'formulas',
    difficulty: 'medium'
  },

  // === ОБЪЁМНЫЕ ТЕЛА ===
  {
    question: 'Как называется геометрическое тело, образованное вращением прямоугольника вокруг одной из сторон?',
    options: ['Конус', 'Шар', 'Цилиндр', 'Пирамида'],
    correct: 2,
    explanation: 'Цилиндр — это тело, образованное вращением прямоугольника вокруг одной из его сторон.',
    category: 'solids',
    difficulty: 'medium'
  },
  {
    question: 'Как называется геометрическое тело, все грани которого — треугольники?',
    options: ['Куб', 'Призма', 'Пирамида', 'Цилиндр'],
    correct: 2,
    explanation: 'Пирамида — это многогранник, основание которого — многоугольник, а боковые грани — треугольники с общей вершиной.',
    category: 'solids',
    difficulty: 'medium'
  },
  {
    question: 'Сколько граней у куба?',
    options: ['4', '6', '8', '12'],
    correct: 1,
    explanation: 'У куба 6 граней, каждая из которых является квадратом.',
    category: 'solids',
    difficulty: 'easy'
  },
  {
    question: 'Какая формула выражает объём куба со стороной a?',
    options: ['V = a', 'V = a²', 'V = a³', 'V = 6a²'],
    correct: 2,
    explanation: 'Объём куба равен кубу его стороны: V = a³.',
    category: 'solids',
    difficulty: 'medium'
  },
  {
    question: 'Какая формула выражает объём прямоугольного параллелепипеда?',
    options: ['V = a + b + c', 'V = a × b × c', 'V = 2(ab + bc + ac)', 'V = abc²'],
    correct: 1,
    explanation: 'Объём прямоугольного параллелепипеда равен произведению трёх его измерений: V = a × b × c.',
    category: 'solids',
    difficulty: 'medium'
  },
  {
    question: 'Как называется тело, образованное вращением прямоугольного треугольника вокруг катета?',
    options: ['Цилиндр', 'Шар', 'Конус', 'Призма'],
    correct: 2,
    explanation: 'Конус — это тело, образованное вращением прямоугольного треугольника вокруг одного из его катетов.',
    category: 'solids',
    difficulty: 'hard'
  }
]

export default function GeometryGame({ gradeId = 0, onExperience }: GeometryGameProps) {
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
    const baseXP = 115
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
            📐
          </motion.div>
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            Геометрия
          </h2>
          <p className="text-gray-400">
            Фигуры, углы, формулы и теоремы!
          </p>
        </div>

        {/* Category Selection */}
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Compass className="w-5 h-5 text-yellow-400" />
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
                📏 Все темы
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
            className="w-full py-6 text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600"
          >
            <Hexagon className="w-6 h-6 mr-2" />
            Начать игру
          </Button>
        </motion.div>

        {/* Info */}
        <div className="text-center text-gray-500 text-sm">
          <p>10 вопросов • +{115} XP за прохождение</p>
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
          {percentage >= 80 ? '🏆' : percentage >= 50 ? '📐' : '📏'}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            {percentage >= 80 ? 'Отлично!' : percentage >= 50 ? 'Хорошо!' : 'Повтори формулы!'}
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
          <Card className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30 inline-block">
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
            className="flex-1 bg-gradient-to-r from-blue-400 to-cyan-500"
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
          className="h-full bg-gradient-to-r from-blue-400 to-cyan-500"
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
            className="w-full bg-gradient-to-r from-blue-400 to-cyan-500"
          >
            {currentQuestion >= gameQuestions.length - 1 ? 'Результаты' : 'Следующий вопрос'}
          </Button>
        </motion.div>
      )}
    </div>
  )
}
