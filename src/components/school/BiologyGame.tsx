'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Leaf, Dna, Bug, TreePine, Fish, Bird, 
  Star, Trophy, Zap, Heart, Clock, Target, Check, X, Sparkles, Microscope
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

interface BiologyGameProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

// Категории вопросов
type BioCategory = 'animals' | 'plants' | 'cells' | 'ecology' | 'human' | 'classification'

interface BioQuestion {
  question: string
  correctAnswer: string
  options: string[]
  category: BioCategory
  difficulty: 1 | 2 | 3
  explanation?: string
  image?: string
}

// База вопросов по биологии
const questions: BioQuestion[] = [
  // Животные (difficulty 1)
  {
    question: 'Какое животное является млекопитающим?',
    correctAnswer: 'Кит',
    options: ['Кит', 'Акула', 'Крокодил', 'Пингвин'],
    category: 'animals',
    difficulty: 1,
    explanation: 'Кит — млекопитающее, которое кормит детёнышей молоком.'
  },
  {
    question: 'Сколько ног у паука?',
    correctAnswer: '8',
    options: ['6', '8', '10', '4'],
    category: 'animals',
    difficulty: 1,
    explanation: 'Пауки — это паукообразные, у них 8 ног.'
  },
  {
    question: 'Какое животное впадает в зимнюю спячку?',
    correctAnswer: 'Медведь',
    options: ['Волк', 'Медведь', 'Заяц', 'Лиса'],
    category: 'animals',
    difficulty: 1,
    explanation: 'Медведи впадают в зимнюю спячку для экономения энергии.'
  },
  {
    question: 'Какая птица не умеет летать?',
    correctAnswer: 'Страус',
    options: ['Орёл', 'Страус', 'Ворона', 'Голубь'],
    category: 'animals',
    difficulty: 1,
    explanation: 'Страусы — самые большие птицы, которые не умеют летать.'
  },
  
  // Животные (difficulty 2)
  {
    question: 'Какой орган помогает рыбе дышать под водой?',
    correctAnswer: 'Жабры',
    options: ['Лёгкие', 'Жабры', 'Кожа', 'Трахеи'],
    category: 'animals',
    difficulty: 2,
    explanation: 'Жабры извлекают кислород из воды.'
  },
  {
    question: 'Как называется группа волков?',
    correctAnswer: 'Стая',
    options: ['Стадо', 'Стая', 'Табун', 'Колония'],
    category: 'animals',
    difficulty: 2,
    explanation: 'Волки живут и охотятся стаями.'
  },
  {
    question: 'Какое животное является самым быстрым на суше?',
    correctAnswer: 'Гепард',
    options: ['Лев', 'Гепард', 'Тигр', 'Антилопа'],
    category: 'animals',
    difficulty: 2,
    explanation: 'Гепард может развивать скорость до 120 км/ч!'
  },
  
  // Животные (difficulty 3)
  {
    question: 'Какой тип кровообращения у земноводных?',
    correctAnswer: 'Два круга, трёхкамерное сердце',
    options: ['Один круг', 'Два круга, трёхкамерное сердце', 'Два круга, четырёхкамерное сердце', 'Три круга'],
    category: 'animals',
    difficulty: 3,
    explanation: 'У земноводных два круга кровообращения и трёхкамерное сердце.'
  },
  {
    question: 'Какой класс животных включает лангустов и креветок?',
    correctAnswer: 'Ракообразные',
    options: ['Насекомые', 'Ракообразные', 'Моллюски', 'Паукообразные'],
    category: 'animals',
    difficulty: 3,
    explanation: 'Креветки, лангусты и крабы — это ракообразные.'
  },
  
  // Растения (difficulty 1)
  {
    question: 'Какой орган растения поглощает воду из почвы?',
    correctAnswer: 'Корень',
    options: ['Лист', 'Стебель', 'Корень', 'Цветок'],
    category: 'plants',
    difficulty: 1,
    explanation: 'Корни всасывают воду и минеральные вещества из почвы.'
  },
  {
    question: 'В каком процессе растения выделяют кислород?',
    correctAnswer: 'Фотосинтез',
    options: ['Дыхание', 'Фотосинтез', 'Испарение', 'Рост'],
    category: 'plants',
    difficulty: 1,
    explanation: 'При фотосинтезе растения используют свет для создания пищи и выделяют кислород.'
  },
  {
    question: 'Какой цветок является символом России?',
    correctAnswer: 'Ромашка',
    options: ['Роза', 'Ромашка', 'Тюльпан', 'Пион'],
    category: 'plants',
    difficulty: 1,
    explanation: 'Ромашка — один из самых распространённых цветов в России.'
  },
  
  // Растения (difficulty 2)
  {
    question: 'Как называется растение, которое живёт только один год?',
    correctAnswer: 'Однолетнее',
    options: ['Многолетнее', 'Однолетнее', 'Двухлетнее', 'Вечнозелёное'],
    category: 'plants',
    difficulty: 2,
    explanation: 'Однолетние растения проходят весь цикл развития за один сезон.'
  },
  {
    question: 'Какой газ растения поглощают из воздуха?',
    correctAnswer: 'Углекислый газ',
    options: ['Кислород', 'Азот', 'Углекислый газ', 'Водород'],
    category: 'plants',
    difficulty: 2,
    explanation: 'Для фотосинтеза растениям нужен углекислый газ.'
  },
  {
    question: 'Как называется часть цветка, где образуется пыльца?',
    correctAnswer: 'Тычинка',
    options: ['Пестик', 'Тычинка', 'Лепесток', 'Чашелистик'],
    category: 'plants',
    difficulty: 2,
    explanation: 'Тычинка — мужская часть цветка, производящая пыльцу.'
  },
  
  // Растения (difficulty 3)
  {
    question: 'Какой тип корневой системы у пшеницы?',
    correctAnswer: 'Мочковатая',
    options: ['Стержневая', 'Мочковатая', 'Воздушная', 'Корневище'],
    category: 'plants',
    difficulty: 3,
    explanation: 'У злаков (пшеница, рожь) мочковатая корневая система.'
  },
  
  // Клетки (difficulty 1)
  {
    question: 'Какой органоид клетки содержит наследственную информацию?',
    correctAnswer: 'Ядро',
    options: ['Ядро', 'Митохондрия', 'Рибосома', 'Вакуоль'],
    category: 'cells',
    difficulty: 1,
    explanation: 'В ядре находится ДНК — носитель генетической информации.'
  },
  {
    question: 'Какая часть клетки защищает её от внешней среды?',
    correctAnswer: 'Мембрана',
    options: ['Ядро', 'Мембрана', 'Цитоплазма', 'Вакуоль'],
    category: 'cells',
    difficulty: 1,
    explanation: 'Клеточная мембрана отделяет клетку от внешней среды.'
  },
  
  // Клетки (difficulty 2)
  {
    question: 'Какой органоид называют "энергетической станцией" клетки?',
    correctAnswer: 'Митохондрия',
    options: ['Рибосома', 'Митохондрия', 'Ядро', 'Лизосома'],
    category: 'cells',
    difficulty: 2,
    explanation: 'В митохондриях происходит клеточное дыхание и выработка энергии.'
  },
  {
    question: 'Чем растительная клетка отличается от животной?',
    correctAnswer: 'Наличием клеточной стенки и хлоропластов',
    options: ['Наличием ядра', 'Наличием клеточной стенки и хлоропластов', 'Наличием мембраны', 'Отсутствием рибосом'],
    category: 'cells',
    difficulty: 2,
    explanation: 'Растительные клетки имеют жёсткую стенку и хлоропласты для фотосинтеза.'
  },
  
  // Клетки (difficulty 3)
  {
    question: 'Какой процесс происходит в хлоропластах?',
    correctAnswer: 'Фотосинтез',
    options: ['Дыхание', 'Фотосинтез', 'Деление', 'Синтез белка'],
    category: 'cells',
    difficulty: 3,
    explanation: 'Хлоропласты содержат хлорофилл и осуществляют фотосинтез.'
  },
  
  // Экология (difficulty 1)
  {
    question: 'Что такое экосистема?',
    correctAnswer: 'Сообщество живых организмов и их среды обитания',
    options: ['Только растения', 'Сообщество живых организмов и их среды обитания', 'Только животные', 'Только почва'],
    category: 'ecology',
    difficulty: 1,
    explanation: 'Экосистема включает все живые организмы и неживую среду.'
  },
  {
    question: 'Кто является производителями в экосистеме?',
    correctAnswer: 'Растения',
    options: ['Животные', 'Растения', 'Грибы', 'Бактерии'],
    category: 'ecology',
    difficulty: 1,
    explanation: 'Растения производят органические вещества путём фотосинтеза.'
  },
  
  // Экология (difficulty 2)
  {
    question: 'Как называется цепь питания?',
    correctAnswer: 'Последовательность организмов, в которой каждый поедает предыдущего',
    options: ['Группа животных', 'Последовательность организмов, в которой каждый поедает предыдущего', 'Садовые растения', 'Семья бактерий'],
    category: 'ecology',
    difficulty: 2,
    explanation: 'Цепь питания показывает передачу энергии от одних организмов к другим.'
  },
  {
    question: 'Какие организмы разлагают мёртвую органику?',
    correctAnswer: 'Бактерии и грибы',
    options: ['Растения', 'Бактерии и грибы', 'Хищники', 'Травоядные'],
    category: 'ecology',
    difficulty: 2,
    explanation: 'Бактерии и грибы — редуценты, они разлагают органические остатки.'
  },
  
  // Человек (difficulty 1)
  {
    question: 'Какой орган перекачивает кровь по организму?',
    correctAnswer: 'Сердце',
    options: ['Лёгкие', 'Сердце', 'Печень', 'Желудок'],
    category: 'human',
    difficulty: 1,
    explanation: 'Сердце — это мышечный насос, перекачивающий кровь.'
  },
  {
    question: 'Сколько костей в теле взрослого человека?',
    correctAnswer: '206',
    options: ['100', '206', '300', '150'],
    category: 'human',
    difficulty: 1,
    explanation: 'У взрослого человека 206 костей.'
  },
  {
    question: 'Какой орган отвечает за зрение?',
    correctAnswer: 'Глаза',
    options: ['Уши', 'Глаза', 'Нос', 'Кожа'],
    category: 'human',
    difficulty: 1,
    explanation: 'Глаза — орган зрения, воспринимающий свет.'
  },
  
  // Человек (difficulty 2)
  {
    question: 'Какой витамин вырабатывается под воздействием солнца?',
    correctAnswer: 'Витамин D',
    options: ['Витамин A', 'Витамин C', 'Витамин D', 'Витамин B'],
    category: 'human',
    difficulty: 2,
    explanation: 'Витамин D синтезируется в коже под действием солнечного света.'
  },
  {
    question: 'Какая система органов отвечает за газообмен?',
    correctAnswer: 'Дыхательная',
    options: ['Пищеварительная', 'Дыхательная', 'Нервная', 'Кровеносная'],
    category: 'human',
    difficulty: 2,
    explanation: 'Дыхательная система обеспечивает поступление кислорода и удаление углекислого газа.'
  },
  
  // Человек (difficulty 3)
  {
    question: 'Какой гормон регулирует уровень сахара в крови?',
    correctAnswer: 'Инсулин',
    options: ['Адреналин', 'Инсулин', 'Тироксин', 'Глюкагон'],
    category: 'human',
    difficulty: 3,
    explanation: 'Инсулин вырабатывается поджелудочной железой и снижает уровень сахара.'
  },
  
  // Классификация (difficulty 1)
  {
    question: 'Как называется наука о классификации организмов?',
    correctAnswer: 'Таксономия',
    options: ['Экология', 'Таксономия', 'Генетика', 'Эволюция'],
    category: 'classification',
    difficulty: 1,
    explanation: 'Таксономия изучает классификацию и命名ание организмов.'
  },
  {
    question: 'К какому царству относятся грибы?',
    correctAnswer: 'Грибы',
    options: ['Растения', 'Животные', 'Грибы', 'Бактерии'],
    category: 'classification',
    difficulty: 1,
    explanation: 'Грибы выделены в отдельное царство живых организмов.'
  },
  
  // Классификация (difficulty 2)
  {
    question: 'Какую таксономическую категорию используют для обозначения вида?',
    correctAnswer: 'Вид',
    options: ['Род', 'Вид', 'Семейство', 'Класс'],
    category: 'classification',
    difficulty: 2,
    explanation: 'Вид — основная единица классификации (например, человек разумный).'
  },
  {
    question: 'К какому типу относятся млекопитающие?',
    correctAnswer: 'Хордовые',
    options: ['Членистоногие', 'Хордовые', 'Моллюски', 'Кишечнополостные'],
    category: 'classification',
    difficulty: 2,
    explanation: 'Млекопитающие относятся к типу хордовых.'
  },
  
  // Классификация (difficulty 3)
  {
    question: 'Кто разработал современную систему классификации?',
    correctAnswer: 'Карл Линней',
    options: ['Чарльз Дарвин', 'Карл Линней', 'Грегор Мендель', 'Луи Пастер'],
    category: 'classification',
    difficulty: 3,
    explanation: 'Карл Линней в XVIII веке создал бинарную номенклатуру.'
  }
]

// Настройки сложности
const difficultySettings = {
  0: { name: 'Лёгкий', count: 8, time: 0, diffLevel: 1, xp: 70 },
  1: { name: 'Средний', count: 12, time: 20, diffLevel: 2, xp: 100 },
  2: { name: 'Сложный', count: 15, time: 15, diffLevel: 3, xp: 130 }
}

// Настройки категорий
const categorySettings = {
  animals: { name: 'Животные', icon: '🐾', color: 'from-amber-400 to-orange-500' },
  plants: { name: 'Растения', icon: '🌱', color: 'from-green-400 to-emerald-500' },
  cells: { name: 'Клетки', icon: '🔬', color: 'from-purple-400 to-violet-500' },
  ecology: { name: 'Экология', icon: '🌍', color: 'from-blue-400 to-cyan-500' },
  human: { name: 'Человек', icon: '🫀', color: 'from-red-400 to-rose-500' },
  classification: { name: 'Классификация', icon: '📚', color: 'from-indigo-400 to-blue-500' }
}

export default function BiologyGame({ gradeId = 0, onExperience }: BiologyGameProps) {
  const { playSuccess, playError, playWin, playLevelUp } = useSound()
  
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'result'>('setup')
  const [difficulty, setDifficulty] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<BioCategory | 'all'>('all')
  
  const [currentQuestions, setCurrentQuestions] = useState<BioQuestion[]>([])
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
    
    // Фильтруем вопросы по категории и сложности
    let filteredQuestions = questions.filter(q => {
      const diffMatch = q.difficulty <= settings.diffLevel
      const catMatch = selectedCategory === 'all' || q.category === selectedCategory
      return diffMatch && catMatch
    })
    
    // Перемешиваем
    filteredQuestions = [...filteredQuestions].sort(() => Math.random() - 0.5)
    
    // Берём нужное количество
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
            <span className="text-3xl">🧬</span>
            Биология
            <span className="text-3xl">🌿</span>
          </h2>
          <p className="text-gray-400">Проверь знания о живой природе!</p>
        </motion.div>
        
        {/* Выбор категории */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Microscope className="w-5 h-5 text-green-400" />
              Категория
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <motion.button
              onClick={() => setSelectedCategory('all')}
              className={`p-3 rounded-xl border-2 transition-all ${
                selectedCategory === 'all'
                  ? 'border-green-400 bg-green-400/20'
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
                onClick={() => setSelectedCategory(key as BioCategory)}
                className={`p-3 rounded-xl border-2 transition-all ${
                  selectedCategory === key
                    ? `bg-gradient-to-br ${value.color} border-transparent`
                    : 'border-white/20 hover:border-white/40'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-2xl">{value.icon}</span>
                <div className="font-bold mt-1">{value.name}</div>
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
            className="w-full py-6 text-xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-2xl"
          >
            <Leaf className="w-6 h-6 mr-2" />
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
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600"
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
          className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
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
