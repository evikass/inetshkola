'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Atom, Zap, Waves, Thermometer, Lightbulb, Magnet,
  Star, Trophy, Heart, Clock, Target, Check, X, Sparkles, Gauge
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

interface PhysicsGameProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

// Категории вопросов
type PhysicsCategory = 'mechanics' | 'electricity' | 'optics' | 'thermodynamics' | 'waves' | 'atoms'

interface PhysicsQuestion {
  question: string
  correctAnswer: string
  options: string[]
  category: PhysicsCategory
  difficulty: 1 | 2 | 3
  formula?: string
  explanation?: string
}

// База вопросов по физике
const questions: PhysicsQuestion[] = [
  // Механика (difficulty 1)
  {
    question: 'Какая единица измерения скорости в системе СИ?',
    correctAnswer: 'м/с',
    options: ['км/ч', 'м/с', 'м/мин', 'км/с'],
    category: 'mechanics',
    difficulty: 1,
    explanation: 'Метр в секунду (м/с) — основная единица скорости в СИ.'
  },
  {
    question: 'Как называется сила, с которой Земля притягивает тело?',
    correctAnswer: 'Сила тяжести',
    options: ['Сила упругости', 'Сила тяжести', 'Сила трения', 'Сила Архимеда'],
    category: 'mechanics',
    difficulty: 1,
    explanation: 'Сила тяжести — это сила, с которой Земля притягивает к себе тела.'
  },
  {
    question: 'Чему равно ускорение свободного падения на Земле?',
    correctAnswer: '9,8 м/с²',
    options: ['10 м/с²', '9,8 м/с²', '8,9 м/с²', '9,8 км/с²'],
    category: 'mechanics',
    difficulty: 1,
    explanation: 'Ускорение свободного падения g ≈ 9,8 м/с².'
  },
  {
    question: 'Какой прибор измеряет силу?',
    correctAnswer: 'Динамометр',
    options: ['Весы', 'Динамометр', 'Барометр', 'Манометр'],
    category: 'mechanics',
    difficulty: 1,
    explanation: 'Динамометр — прибор для измерения силы.'
  },
  {
    question: 'Какая физическая величина равна произведению массы на скорость?',
    correctAnswer: 'Импульс',
    options: ['Энергия', 'Импульс', 'Сила', 'Мощность'],
    category: 'mechanics',
    difficulty: 1,
    formula: 'p = m·v',
    explanation: 'Импульс тела p = m·v, где m — масса, v — скорость.'
  },
  
  // Механика (difficulty 2)
  {
    question: 'По какой формуле вычисляется кинетическая энергия?',
    correctAnswer: 'E = mv²/2',
    options: ['E = mgh', 'E = mv²/2', 'E = F·s', 'E = kx²/2'],
    category: 'mechanics',
    difficulty: 2,
    formula: 'Eк = mv²/2',
    explanation: 'Кинетическая энергия зависит от массы и квадрата скорости.'
  },
  {
    question: 'Какой закон описывает сохранение импульса?',
    correctAnswer: 'Третий закон Ньютона',
    options: ['Первый закон Ньютона', 'Второй закон Ньютона', 'Третий закон Ньютона', 'Закон Гука'],
    category: 'mechanics',
    difficulty: 2,
    explanation: 'Третий закон Ньютона: действие равно противодействию.'
  },
  {
    question: 'Чему равна работа силы тяжести при падении тела массой 2 кг с высоты 5 м?',
    correctAnswer: '100 Дж',
    options: ['10 Дж', '50 Дж', '100 Дж', '200 Дж'],
    category: 'mechanics',
    difficulty: 2,
    formula: 'A = mgh = 2·10·5 = 100 Дж',
    explanation: 'Работа A = mgh = 2·10·5 = 100 Дж.'
  },
  
  // Механика (difficulty 3)
  {
    question: 'Как называется движение тела под действием только силы тяжести?',
    correctAnswer: 'Свободное падение',
    options: ['Равноускоренное движение', 'Свободное падение', 'Равномерное движение', 'Колебательное движение'],
    category: 'mechanics',
    difficulty: 3,
    explanation: 'Свободное падение — движение только под действием силы тяжести.'
  },
  {
    question: 'По какой формуле рассчитывается период колебаний математического маятника?',
    correctAnswer: 'T = 2π√(l/g)',
    options: ['T = 2π√(m/k)', 'T = 2π√(l/g)', 'T = 1/ν', 'T = 2π√(g/l)'],
    category: 'mechanics',
    difficulty: 3,
    formula: 'T = 2π√(l/g)',
    explanation: 'Период маятника зависит от его длины и ускорения свободного падения.'
  },
  
  // Электричество (difficulty 1)
  {
    question: 'Какая частица имеет отрицательный заряд?',
    correctAnswer: 'Электрон',
    options: ['Протон', 'Электрон', 'Нейтрон', 'Атом'],
    category: 'electricity',
    difficulty: 1,
    explanation: 'Электрон — элементарная частица с отрицательным зарядом.'
  },
  {
    question: 'Какой прибор измеряет силу тока?',
    correctAnswer: 'Амперметр',
    options: ['Вольтметр', 'Амперметр', 'Омметр', 'Ваттметр'],
    category: 'electricity',
    difficulty: 1,
    explanation: 'Амперметр включается в цепь последовательно для измерения силы тока.'
  },
  {
    question: 'В каких единицах измеряется электрическое напряжение?',
    correctAnswer: 'Вольт',
    options: ['Ампер', 'Вольт', 'Ом', 'Ватт'],
    category: 'electricity',
    difficulty: 1,
    explanation: 'Напряжение измеряется в вольтах (В).'
  },
  {
    question: 'Какой закон связывает силу тока, напряжение и сопротивление?',
    correctAnswer: 'Закон Ома',
    options: ['Закон Ома', 'Закон Джоуля-Ленца', 'Закон Кулона', 'Закон Фарадея'],
    category: 'electricity',
    difficulty: 1,
    formula: 'I = U/R',
    explanation: 'Закон Ома: I = U/R.'
  },
  
  // Электричество (difficulty 2)
  {
    question: 'По какой формуле вычисляется сопротивление проводника?',
    correctAnswer: 'R = ρl/S',
    options: ['R = U/I', 'R = ρl/S', 'R = UI', 'R = U²/P'],
    category: 'electricity',
    difficulty: 2,
    formula: 'R = ρl/S',
    explanation: 'Сопротивление зависит от материала (ρ), длины (l) и площади сечения (S).'
  },
  {
    question: 'Как соединены лампочки в гирлянде?',
    correctAnswer: 'Последовательно',
    options: ['Параллельно', 'Последовательно', 'Смешанно', 'Звездой'],
    category: 'electricity',
    difficulty: 2,
    explanation: 'В гирлянде лампочки соединены последовательно.'
  },
  {
    question: 'Чему равно общее сопротивление двух резисторов 2 Ом и 3 Ом, соединённых параллельно?',
    correctAnswer: '1,2 Ом',
    options: ['5 Ом', '1,2 Ом', '6 Ом', '0,6 Ом'],
    category: 'electricity',
    difficulty: 2,
    formula: '1/R = 1/R₁ + 1/R₂',
    explanation: 'При параллельном соединении: 1/R = 1/2 + 1/3 = 5/6, R = 1,2 Ом.'
  },
  
  // Электричество (difficulty 3)
  {
    question: 'Какая сила действует на проводник с током в магнитном поле?',
    correctAnswer: 'Сила Ампера',
    options: ['Сила Лоренца', 'Сила Ампера', 'Сила Кулона', 'Сила тяжести'],
    category: 'electricity',
    difficulty: 3,
    explanation: 'Сила Ампера действует на проводник с током в магнитном поле.'
  },
  {
    question: 'По какой формуле вычисляется мощность электрического тока?',
    correctAnswer: 'P = UI',
    options: ['P = U/I', 'P = UI', 'P = I/U', 'P = UR'],
    category: 'electricity',
    difficulty: 3,
    formula: 'P = UI = I²R = U²/R',
    explanation: 'Мощность P = UI (произведение напряжения и силы тока).'
  },
  
  // Оптика (difficulty 1)
  {
    question: 'Какая линза собирает световые лучи?',
    correctAnswer: 'Собирающая',
    options: ['Рассеивающая', 'Собирающая', 'Плоская', 'Вогнутая'],
    category: 'optics',
    difficulty: 1,
    explanation: 'Собирающая (выпуклая) линза фокусирует параллельные лучи в одну точку.'
  },
  {
    question: 'С какой скоростью распространяется свет в вакууме?',
    correctAnswer: '300 000 км/с',
    options: ['300 000 м/с', '300 000 км/с', '30 000 км/с', '3 000 000 км/с'],
    category: 'optics',
    difficulty: 1,
    explanation: 'Скорость света в вакууме ≈ 3·10⁸ м/с = 300 000 км/с.'
  },
  {
    question: 'Какое явление объясняет радугу?',
    correctAnswer: 'Дисперсия',
    options: ['Преломление', 'Отражение', 'Дисперсия', 'Поглощение'],
    category: 'optics',
    difficulty: 1,
    explanation: 'Дисперсия — разложение белого света на цвета радуги.'
  },
  
  // Оптика (difficulty 2)
  {
    question: 'Какой угол равен углу падения при отражении света?',
    correctAnswer: 'Угол отражения',
    options: ['Угол преломления', 'Угол отражения', 'Угол падения', 'Угол наблюдения'],
    category: 'optics',
    difficulty: 2,
    explanation: 'Закон отражения: угол падения равен углу отражения.'
  },
  {
    question: 'Как называется величина, обратная фокусному расстоянию линзы?',
    correctAnswer: 'Оптическая сила',
    options: ['Увеличение', 'Оптическая сила', 'Фокус', 'Аберрация'],
    category: 'optics',
    difficulty: 2,
    formula: 'D = 1/F (дптр)',
    explanation: 'Оптическая сила D = 1/F, измеряется в диоптриях.'
  },
  
  // Оптика (difficulty 3)
  {
    question: 'По какой формуле строится изображение в тонкой линзе?',
    correctAnswer: '1/F = 1/d + 1/f',
    options: ['1/F = 1/d + 1/f', '1/F = d + f', 'F = d·f', '1/F = d - f'],
    category: 'optics',
    difficulty: 3,
    formula: '1/F = 1/d + 1/f',
    explanation: 'Формула тонкой линзы связывает фокусное расстояние (F), расстояние до предмета (d) и до изображения (f).'
  },
  
  // Термодинамика (difficulty 1)
  {
    question: 'В каких единицах измеряется температура в СИ?',
    correctAnswer: 'Кельвин',
    options: ['Градус Цельсия', 'Кельвин', 'Градус Фаренгейта', 'Джоуль'],
    category: 'thermodynamics',
    difficulty: 1,
    explanation: 'Кельвин (К) — основная единица температуры в СИ.'
  },
  {
    question: 'Каким способом передаётся тепловая энергия от Солнца к Земле?',
    correctAnswer: 'Излучением',
    options: ['Теплопроводностью', 'Конвекцией', 'Излучением', 'Все варианты'],
    category: 'thermodynamics',
    difficulty: 1,
    explanation: 'В вакууме тепло передаётся только излучением.'
  },
  {
    question: 'Какой процесс происходит при кипении воды?',
    correctAnswer: 'Парообразование',
    options: ['Плавление', 'Парообразование', 'Конденсация', 'Кристаллизация'],
    category: 'thermodynamics',
    difficulty: 1,
    explanation: 'Кипение — это интенсивное парообразование по всему объёму жидкости.'
  },
  
  // Термодинамика (difficulty 2)
  {
    question: 'По какой формуле вычисляется количество теплоты при нагревании?',
    correctAnswer: 'Q = cmΔt',
    options: ['Q = λm', 'Q = cmΔt', 'Q = Lm', 'Q = qm'],
    category: 'thermodynamics',
    difficulty: 2,
    formula: 'Q = cmΔt',
    explanation: 'Q = cmΔt, где c — удельная теплоёмкость, m — масса, Δt — изменение температуры.'
  },
  {
    question: 'Какой газовый закон связывает давление и объём при постоянной температуре?',
    correctAnswer: 'Закон Бойля-Мариотта',
    options: ['Закон Гей-Люссака', 'Закон Бойля-Мариотта', 'Закон Шарля', 'Уравнение Менделеева-Клапейрона'],
    category: 'thermodynamics',
    difficulty: 2,
    formula: 'pV = const',
    explanation: 'При T = const: p₁V₁ = p₂V₂.'
  },
  
  // Волны (difficulty 1)
  {
    question: 'Какой диапазон частот слышит человек?',
    correctAnswer: '20 Гц - 20 000 Гц',
    options: ['0-100 Гц', '20 Гц - 20 000 Гц', '100 Гц - 10 000 Гц', '1 Гц - 100 кГц'],
    category: 'waves',
    difficulty: 1,
    explanation: 'Человеческое ухо воспринимает звуки частотой от 20 Гц до 20 кГц.'
  },
  {
    question: 'В какой среде звук распространяется быстрее всего?',
    correctAnswer: 'В твёрдых телах',
    options: ['В вакууме', 'В воздухе', 'В воде', 'В твёрдых телах'],
    category: 'waves',
    difficulty: 1,
    explanation: 'Скорость звука максимальна в твёрдых телах, минимальна в газах.'
  },
  {
    question: 'Как называется физическая величина, равная числу колебаний в единицу времени?',
    correctAnswer: 'Частота',
    options: ['Период', 'Частота', 'Амплитуда', 'Длина волны'],
    category: 'waves',
    difficulty: 1,
    explanation: 'Частота ν показывает число колебаний за 1 секунду.'
  },
  
  // Волны (difficulty 2)
  {
    question: 'По какой формуле связанны длина волны, частота и скорость?',
    correctAnswer: 'λ = v/ν',
    options: ['λ = v·ν', 'λ = v/ν', 'λ = T/v', 'λ = ν/v'],
    category: 'waves',
    difficulty: 2,
    formula: 'λ = v/ν = v·T',
    explanation: 'Длина волны равна скорости, делённой на частоту.'
  },
  {
    question: 'Какое явление объясняет эхо?',
    correctAnswer: 'Отражение звука',
    options: ['Преломление звука', 'Отражение звука', 'Дифракция звука', 'Резонанс'],
    category: 'waves',
    difficulty: 2,
    explanation: 'Эхо — результат отражения звуковых волн от препятствий.'
  },
  
  // Атомная физика (difficulty 2)
  {
    question: 'Кто открыл явление радиоактивности?',
    correctAnswer: 'Анри Беккерель',
    options: ['Мария Кюри', 'Анри Беккерель', 'Эрнест Резерфорд', 'Нильс Бор'],
    category: 'atoms',
    difficulty: 2,
    explanation: 'Анри Беккерель открыл радиоактивность в 1896 году.'
  },
  {
    question: 'Какая частица не имеет заряда?',
    correctAnswer: 'Нейтрон',
    options: ['Протон', 'Электрон', 'Нейтрон', 'Позитрон'],
    category: 'atoms',
    difficulty: 2,
    explanation: 'Нейтрон — нейтральная частица в ядре атома.'
  },
  
  // Атомная физика (difficulty 3)
  {
    question: 'Какой вид излучения имеет наибольшую проникающую способность?',
    correctAnswer: 'Гамма-излучение',
    options: ['Альфа-излучение', 'Бета-излучение', 'Гамма-излучение', 'Рентгеновское излучение'],
    category: 'atoms',
    difficulty: 3,
    explanation: 'Гамма-лучи обладают максимальной проникающей способностью.'
  },
  {
    question: 'По какой формуле вычисляется энергия связи ядра?',
    correctAnswer: 'E = Δm·c²',
    options: ['E = mc²', 'E = Δm·c²', 'E = hv', 'E = kq²/r'],
    category: 'atoms',
    difficulty: 3,
    formula: 'E = Δm·c²',
    explanation: 'Энергия связи равна дефекту массы, умноженному на квадрат скорости света.'
  }
]

// Настройки сложности
const difficultySettings = {
  0: { name: 'Лёгкий', count: 8, time: 0, diffLevel: 1, xp: 80 },
  1: { name: 'Средний', count: 12, time: 20, diffLevel: 2, xp: 110 },
  2: { name: 'Сложный', count: 15, time: 15, diffLevel: 3, xp: 150 }
}

// Настройки категорий
const categorySettings = {
  mechanics: { name: 'Механика', icon: '⚙️', color: 'from-blue-400 to-cyan-500' },
  electricity: { name: 'Электричество', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
  optics: { name: 'Оптика', icon: '💡', color: 'from-pink-400 to-purple-500' },
  thermodynamics: { name: 'Термодинамика', icon: '🌡️', color: 'from-red-400 to-orange-500' },
  waves: { name: 'Волны', icon: '🌊', color: 'from-teal-400 to-blue-500' },
  atoms: { name: 'Атомная физика', icon: '⚛️', color: 'from-violet-400 to-purple-500' }
}

export default function PhysicsGame({ gradeId = 0, onExperience }: PhysicsGameProps) {
  const { playSuccess, playError, playWin, playLevelUp } = useSound()
  
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'result'>('setup')
  const [difficulty, setDifficulty] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<PhysicsCategory | 'all'>('all')
  
  const [currentQuestions, setCurrentQuestions] = useState<PhysicsQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [hearts, setHearts] = useState(3)
  const [timeLeft, setTimeLeft] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  
  const currentQuestion = currentQuestions[currentIndex]
  const settings = difficultySettings[difficulty]
  
  // Инициализация игры
  const startGame = useCallback(() => {
    const settings = difficultySettings[difficulty]
    
    let filteredQuestions = questions.filter(q => {
      const diffMatch = q.difficulty <= settings.diffLevel
      const catMatch = selectedCategory === 'all' || q.category === selectedCategory
      return diffMatch && catMatch
    })
    
    filteredQuestions = [...filteredQuestions].sort(() => Math.random() - 0.5)
    const gameQuestions = filteredQuestions.slice(0, settings.count)
    
    setCurrentQuestions(gameQuestions)
    setCurrentIndex(0)
    setScore(0)
    setStreak(0)
    setMaxStreak(0)
    setHearts(3)
    setTimeLeft(settings.time)
    setAnswered(false)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setGameState('playing')
  }, [difficulty, selectedCategory])
  
  // Генерация перемешанных вариантов ответа
  const shuffledOptions = useMemo(() => {
    if (!currentQuestion) return []
    return [...currentQuestion.options].sort(() => Math.random() - 0.5)
  }, [currentQuestion])
  
  // Обработка таймаута
  const handleTimeout = useCallback(() => {
    if (!answered) {
      playError()
      setAnswered(true)
      setStreak(0)
      setHearts(prev => prev - 1)
    }
  }, [answered, playError])
  
  // Завершение игры
  const endGame = useCallback(() => {
    playWin()
    const earnedXP = Math.round((score / (settings.count * 10)) * settings.xp)
    onExperience?.(earnedXP)
    setGameState('result')
  }, [playWin, score, settings, onExperience])
  
  // Следующий вопрос
  const nextQuestion = useCallback(() => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setTimeLeft(settings.time)
      setAnswered(false)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      endGame()
    }
  }, [currentIndex, currentQuestions.length, settings.time, endGame])
  
  // Таймер
  useEffect(() => {
    if (gameState === 'playing' && settings.time > 0 && !answered) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleTimeout()
            return settings.time
          }
          return prev - 1
        })
      }, 1000)
      
      return () => clearInterval(timer)
    }
  }, [gameState, answered, settings.time, handleTimeout])
  
  // Автопереход после ответа
  useEffect(() => {
    if (answered) {
      const timer = setTimeout(() => {
        if (hearts <= 0) {
          endGame()
        } else {
          nextQuestion()
        }
      }, showExplanation ? 3000 : 2000)
      return () => clearTimeout(timer)
    }
  }, [answered, hearts, showExplanation, endGame, nextQuestion])
  
  // Обработка ответа
  const handleAnswer = (index: number) => {
    if (answered) return
    
    const answer = shuffledOptions[index]
    const isCorrect = answer === currentQuestion.correctAnswer
    setSelectedAnswer(index)
    setAnswered(true)
    
    if (isCorrect) {
      playSuccess()
      const streakBonus = Math.min(streak * 2, 10)
      setScore(prev => prev + 10 + streakBonus)
      setStreak(prev => {
        const newStreak = prev + 1
        if (newStreak > maxStreak) setMaxStreak(newStreak)
        if (newStreak === 5) playLevelUp()
        return newStreak
      })
    } else {
      playError()
      setStreak(0)
      setHearts(prev => prev - 1)
    }
    
    setShowExplanation(true)
  }
  
  // Рендер экрана настройки
  if (gameState === 'setup') {
    return (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
            <span className="text-3xl">⚡</span>
            Физика
            <span className="text-3xl">🔬</span>
          </h2>
          <p className="text-gray-400">Проверь знания о законах природы!</p>
        </motion.div>
        
        {/* Выбор категории */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Gauge className="w-5 h-5 text-cyan-400" />
              Категория
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <motion.button
              onClick={() => setSelectedCategory('all')}
              className={`p-3 rounded-xl border-2 transition-all ${
                selectedCategory === 'all'
                  ? 'border-cyan-400 bg-cyan-400/20'
                  : 'border-white/20 hover:border-white/40'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl">📝</span>
              <div className="font-bold mt-1">Все темы</div>
            </motion.button>
            
            {Object.entries(categorySettings).map(([key, value]) => (
              <motion.button
                key={key}
                onClick={() => setSelectedCategory(key as PhysicsCategory)}
                className={`p-3 rounded-xl border-2 transition-all ${
                  selectedCategory === key
                    ? `bg-gradient-to-br ${value.color} border-transparent`
                    : 'border-white/20 hover:border-white/40'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-2xl">{value.icon}</span>
                <div className="font-bold mt-1 text-sm">{value.name}</div>
              </motion.button>
            ))}
          </CardContent>
        </Card>
        
        {/* Выбор сложности */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Сложность
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-2">
            {Object.entries(difficultySettings).map(([key, value]) => (
              <motion.button
                key={key}
                onClick={() => setDifficulty(Number(key))}
                className={`p-3 rounded-xl border-2 transition-all ${
                  difficulty === Number(key)
                    ? 'border-yellow-400 bg-yellow-400/20'
                    : 'border-white/20 hover:border-white/40'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="font-bold">{value.name}</div>
                <div className="text-xs text-gray-400">
                  {value.count} вопросов
                  {value.time > 0 && ` • ${value.time}сек`}
                </div>
                <div className="text-xs text-yellow-400 mt-1">+{value.xp} XP</div>
              </motion.button>
            ))}
          </CardContent>
        </Card>
        
        {/* Кнопка старта */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            onClick={startGame}
            className="w-full py-6 text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-2xl"
          >
            <Atom className="w-6 h-6 mr-2" />
            Начать игру
          </Button>
        </motion.div>
      </div>
    )
  }
  
  // Рендер результатов
  if (gameState === 'result') {
    const earnedXP = Math.round((score / (settings.count * 10)) * settings.xp)
    const accuracy = Math.round((score / (settings.count * 10)) * 100)
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6"
      >
        <div className="text-6xl mb-4">🏆</div>
        <h2 className="text-2xl sm:text-3xl font-bold">Отлично!</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-4">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{score}</div>
              <div className="text-xs text-gray-400">Очков</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-4">
              <Zap className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{earnedXP}</div>
              <div className="text-xs text-gray-400">XP</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-4">
              <Target className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{accuracy}%</div>
              <div className="text-xs text-gray-400">Точность</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-4">
              <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{maxStreak}</div>
              <div className="text-xs text-gray-400">Макс. серия</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex gap-4">
          <Button
            onClick={() => setGameState('setup')}
            variant="outline"
            className="flex-1"
          >
            К настройкам
          </Button>
          <Button
            onClick={startGame}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600"
          >
            <Trophy className="w-5 h-5 mr-2" />
            Играть снова
          </Button>
        </div>
      </motion.div>
    )
  }
  
  // Рендер игры
  return (
    <div className="space-y-4">
      {/* Прогресс */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {[...Array(3)].map((_, i) => (
            <Heart
              key={i}
              className={`w-6 h-6 ${i < hearts ? 'text-red-400 fill-red-400' : 'text-gray-600'}`}
            />
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="font-bold">{score}</span>
          </div>
          
          {streak >= 3 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 text-orange-400"
            >
              <Zap className="w-5 h-5" />
              <span className="font-bold">x{streak}</span>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Прогресс бар */}
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / currentQuestions.length) * 100}%` }}
        />
      </div>
      
      {/* Таймер */}
      {settings.time > 0 && (
        <div className="flex items-center justify-center gap-2">
          <Clock className={`w-5 h-5 ${timeLeft <= 5 ? 'text-red-400' : 'text-gray-400'}`} />
          <span className={`font-mono text-lg ${timeLeft <= 5 ? 'text-red-400' : ''}`}>
            {timeLeft}с
          </span>
        </div>
      )}
      
      {/* Карточка вопроса */}
      {currentQuestion && (
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <Card className={`bg-gradient-to-br ${categorySettings[currentQuestion.category].color} border-0`}>
            <CardContent className="pt-6 pb-6">
              <div className="text-center">
                <div className="text-sm text-white/70 mb-2">
                  {categorySettings[currentQuestion.category].icon} {categorySettings[currentQuestion.category].name}
                </div>
                
                <div className="text-xl sm:text-2xl font-bold">
                  {currentQuestion.question}
                </div>
                
                {currentQuestion.formula && (
                  <div className="mt-3 p-2 bg-white/20 rounded-lg">
                    <code className="text-white font-mono">{currentQuestion.formula}</code>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Варианты ответа */}
          <div className="grid grid-cols-2 gap-3">
            {shuffledOptions.map((option, index) => {
              const isCorrect = option === currentQuestion.correctAnswer
              const isSelected = selectedAnswer === index
              
              return (
                <motion.button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={answered}
                  className={`p-4 rounded-xl border-2 font-medium text-base transition-all ${
                    answered
                      ? isCorrect
                        ? 'border-green-400 bg-green-400/20 text-green-300'
                        : isSelected
                          ? 'border-red-400 bg-red-400/20 text-red-300'
                          : 'border-white/10 text-gray-500'
                      : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                  }`}
                  whileHover={!answered ? { scale: 1.02 } : {}}
                  whileTap={!answered ? { scale: 0.98 } : {}}
                >
                  <div className="flex items-center justify-center gap-2">
                    {answered && isCorrect && <Check className="w-5 h-5" />}
                    {answered && isSelected && !isCorrect && <X className="w-5 h-5" />}
                    {option}
                  </div>
                </motion.button>
              )
            })}
          </div>
          
          {/* Объяснение */}
          {answered && showExplanation && currentQuestion.explanation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-white/10 rounded-xl"
            >
              <div className="text-sm text-gray-300">
                <span className="font-bold text-white">💡 Объяснение: </span>
                {currentQuestion.explanation}
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
      
      {/* Счётчик вопросов */}
      <div className="text-center text-gray-400">
        {currentIndex + 1} / {currentQuestions.length}
      </div>
    </div>
  )
}
