'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Cpu, Code, Binary, Database, Globe, Terminal,
  Star, Trophy, Zap, Heart, Clock, Target, Check, X, Sparkles, Monitor
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

interface InformaticsGameProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

// Категории вопросов
type InfoCategory = 'hardware' | 'software' | 'programming' | 'networks' | 'binary' | 'algorithms'

interface InfoQuestion {
  question: string
  correctAnswer: string
  options: string[]
  category: InfoCategory
  difficulty: 1 | 2 | 3
  explanation?: string
}

// База вопросов по информатике
const questions: InfoQuestion[] = [
  // Железо (difficulty 1)
  {
    question: 'Какое устройство называется "мозгом" компьютера?',
    correctAnswer: 'Процессор',
    options: ['Процессор', 'Оперативная память', 'Жёсткий диск', 'Видеокарта'],
    category: 'hardware',
    difficulty: 1,
    explanation: 'Процессор (CPU) выполняет вычисления и управляет работой компьютера.'
  },
  {
    question: 'Для чего нужна оперативная память (RAM)?',
    correctAnswer: 'Для временного хранения данных при работе программ',
    options: ['Для постоянного хранения файлов', 'Для временного хранения данных при работе программ', 'Для вывода изображения', 'Для подключения к интернету'],
    category: 'hardware',
    difficulty: 1,
    explanation: 'RAM хранит данные только при включённом компьютере и очищается при выключении.'
  },
  {
    question: 'Какое устройство выводит изображение на экран?',
    correctAnswer: 'Видеокарта',
    options: ['Процессор', 'Звуковая карта', 'Видеокарта', 'Сетевая карта'],
    category: 'hardware',
    difficulty: 1,
    explanation: 'Видеокарта обрабатывает графические данные и выводит изображение на монитор.'
  },
  {
    question: 'Как называется устройство для ввода текста?',
    correctAnswer: 'Клавиатура',
    options: ['Мышь', 'Клавиатура', 'Сканер', 'Микрофон'],
    category: 'hardware',
    difficulty: 1,
    explanation: 'Клавиатура — основное устройство для ввода текстовой информации.'
  },
  {
    question: 'Что такое SSD?',
    correctAnswer: 'Твердотельный накопитель',
    options: ['Твердотельный накопитель', 'Оперативная память', 'Звуковая карта', 'Процессор'],
    category: 'hardware',
    difficulty: 1,
    explanation: 'SSD (Solid State Drive) — быстрый накопитель без движущихся частей.'
  },
  
  // Железо (difficulty 2)
  {
    question: 'В чём измеряется тактовая частота процессора?',
    correctAnswer: 'Герцах (ГГц)',
    options: ['Байтах', 'Герцах (ГГц)', 'Ваттах', 'Вольтах'],
    category: 'hardware',
    difficulty: 2,
    explanation: 'Тактовая частота показывает, сколько операций процессор выполняет в секунду.'
  },
  {
    question: 'Сколько бит в одном байте?',
    correctAnswer: '8',
    options: ['4', '8', '16', '32'],
    category: 'hardware',
    difficulty: 2,
    explanation: '1 байт = 8 бит. Это стандартная единица измерения информации.'
  },
  
  // Программное обеспечение (difficulty 1)
  {
    question: 'Какая программа является операционной системой?',
    correctAnswer: 'Windows',
    options: ['Word', 'Windows', 'Chrome', 'Photoshop'],
    category: 'software',
    difficulty: 1,
    explanation: 'Операционная система управляет компьютером: Windows, macOS, Linux.'
  },
  {
    question: 'Что такое антивирус?',
    correctAnswer: 'Программа для защиты от вредоносных программ',
    options: ['Программа для печати текста', 'Программа для защиты от вредоносных программ', 'Программа для просмотра видео', 'Игра'],
    category: 'software',
    difficulty: 1,
    explanation: 'Антивирус защищает компьютер от вирусов, троянов и других угроз.'
  },
  {
    question: 'Какое расширение имеет исполняемый файл Windows?',
    correctAnswer: '.exe',
    options: ['.txt', '.doc', '.exe', '.jpg'],
    category: 'software',
    difficulty: 1,
    explanation: '.exe (executable) — расширение программ, которые можно запустить.'
  },
  
  // Программное обеспечение (difficulty 2)
  {
    question: 'Что такое драйвер?',
    correctAnswer: 'Программа для работы устройства',
    options: ['Игра', 'Программа для работы устройства', 'Вирус', 'Браузер'],
    category: 'software',
    difficulty: 2,
    explanation: 'Драйвер — программа, позволяющая ОС работать с конкретным устройством.'
  },
  {
    question: 'Какой тип программного обеспечения — Microsoft Word?',
    correctAnswer: 'Текстовый редактор',
    options: ['Текстовый редактор', 'Графический редактор', 'Браузер', 'Операционная система'],
    category: 'software',
    difficulty: 2,
    explanation: 'Word — текстовый процессор для создания и редактирования документов.'
  },
  
  // Программирование (difficulty 1)
  {
    question: 'Какой язык программирования изучают в школе чаще всего?',
    correctAnswer: 'Python',
    options: ['C++', 'Python', 'Java', 'Swift'],
    category: 'programming',
    difficulty: 1,
    explanation: 'Python популярен в образовании благодаря простому синтаксису.'
  },
  {
    question: 'Что такое переменная в программировании?',
    correctAnswer: 'Именованная область памяти для хранения данных',
    options: ['Команда программы', 'Именованная область памяти для хранения данных', 'Ошибка в коде', 'Комментарий'],
    category: 'programming',
    difficulty: 1,
    explanation: 'Переменная хранит значение, которое можно изменять во время работы программы.'
  },
  {
    question: 'Какая команда выводит текст на экран в Python?',
    correctAnswer: 'print()',
    options: ['print()', 'show()', 'display()', 'write()'],
    category: 'programming',
    difficulty: 1,
    explanation: 'Функция print() выводит текст и значения в консоль.'
  },
  
  // Программирование (difficulty 2)
  {
    question: 'Что такое цикл в программировании?',
    correctAnswer: 'Повторяющееся выполнение команд',
    options: ['Однократное выполнение', 'Повторяющееся выполнение команд', 'Ошибка', 'Комментарий'],
    category: 'programming',
    difficulty: 2,
    explanation: 'Цикл (for, while) позволяет выполнять код многократно.'
  },
  {
    question: 'Какой результат выражения: 2 ** 3 в Python?',
    correctAnswer: '8',
    options: ['6', '8', '5', '9'],
    category: 'programming',
    difficulty: 2,
    explanation: 'Оператор ** возводит в степень: 2³ = 8.'
  },
  {
    question: 'Что такое массив?',
    correctAnswer: 'Упорядоченный набор данных',
    options: ['Одно число', 'Упорядоченный набор данных', 'Переменная', 'Функция'],
    category: 'programming',
    difficulty: 2,
    explanation: 'Массив (список) хранит несколько значений под одним именем.'
  },
  
  // Программирование (difficulty 3)
  {
    question: 'Что такое алгоритм?',
    correctAnswer: 'Последовательность действий для решения задачи',
    options: ['Программа', 'Последовательность действий для решения задачи', 'Переменная', 'Ошибка'],
    category: 'programming',
    difficulty: 3,
    explanation: 'Алгоритм — чёткая последовательность шагов для достижения результата.'
  },
  {
    question: 'Какая алгоритмическая конструкция используется для выбора?',
    correctAnswer: 'Ветвление (if-else)',
    options: ['Цикл', 'Ветвление (if-else)', 'Массив', 'Функция'],
    category: 'programming',
    difficulty: 3,
    explanation: 'Ветвление позволяет выполнять разные действия в зависимости от условия.'
  },
  
  // Сети (difficulty 1)
  {
    question: 'Что такое интернет?',
    correctAnswer: 'Глобальная компьютерная сеть',
    options: ['Программа', 'Глобальная компьютерная сеть', 'Устройство', 'Файл'],
    category: 'networks',
    difficulty: 1,
    explanation: 'Интернет — всемирная система объединённых компьютерных сетей.'
  },
  {
    question: 'Какая программа используется для просмотра веб-сайтов?',
    correctAnswer: 'Браузер',
    options: ['Word', 'Браузер', 'Excel', 'Photoshop'],
    category: 'networks',
    difficulty: 1,
    explanation: 'Браузеры: Chrome, Firefox, Safari, Edge — для просмотра сайтов.'
  },
  {
    question: 'Что такое Wi-Fi?',
    correctAnswer: 'Технология беспроводной связи',
    options: ['Программа', 'Технология беспроводной связи', 'Устройство', 'Файл'],
    category: 'networks',
    difficulty: 1,
    explanation: 'Wi-Fi позволяет устройствам соединяться без проводов.'
  },
  
  // Сети (difficulty 2)
  {
    question: 'Что такое IP-адрес?',
    correctAnswer: 'Уникальный адрес устройства в сети',
    options: ['Имя файла', 'Уникальный адрес устройства в сети', 'Пароль', 'Имя пользователя'],
    category: 'networks',
    difficulty: 2,
    explanation: 'IP-адрес идентифицирует устройство в компьютерной сети.'
  },
  {
    question: 'Какой протокол используется для веб-сайтов?',
    correctAnswer: 'HTTP',
    options: ['FTP', 'HTTP', 'SSH', 'TCP'],
    category: 'networks',
    difficulty: 2,
    explanation: 'HTTP (HyperText Transfer Protocol) — протокол передачи веб-страниц.'
  },
  
  // Двоичная система (difficulty 1)
  {
    question: 'Какая система счисления используется в компьютерах?',
    correctAnswer: 'Двоичная',
    options: ['Десятичная', 'Двоичная', 'Шестнадцатеричная', 'Римская'],
    category: 'binary',
    difficulty: 1,
    explanation: 'Компьютеры работают с нулями и единицами — двоичной системой.'
  },
  {
    question: 'Сколько цифр в двоичной системе?',
    correctAnswer: '2',
    options: ['2', '8', '10', '16'],
    category: 'binary',
    difficulty: 1,
    explanation: 'В двоичной системе две цифры: 0 и 1.'
  },
  
  // Двоичная система (difficulty 2)
  {
    question: 'Чему равно число 10 в двоичной системе в десятичной?',
    correctAnswer: '2',
    options: ['1', '2', '10', '3'],
    category: 'binary',
    difficulty: 2,
    explanation: '10₂ = 1×2¹ + 0×2⁰ = 2 в десятичной системе.'
  },
  {
    question: 'Как записать число 4 в двоичной системе?',
    correctAnswer: '100',
    options: ['11', '100', '1000', '101'],
    category: 'binary',
    difficulty: 2,
    explanation: '4 = 100₂ (1×2² + 0×2¹ + 0×2⁰ = 4).'
  },
  {
    question: 'Чему равно 111₂ в десятичной системе?',
    correctAnswer: '7',
    options: ['5', '6', '7', '8'],
    category: 'binary',
    difficulty: 2,
    explanation: '111₂ = 1×4 + 1×2 + 1×1 = 7.'
  },
  
  // Двоичная система (difficulty 3)
  {
    question: 'Сколько байт в 1 килобайте?',
    correctAnswer: '1024',
    options: ['1000', '1024', '512', '2048'],
    category: 'binary',
    difficulty: 3,
    explanation: '1 КБ = 1024 байта = 2¹⁰ байт (в двоичной системе).'
  },
  {
    question: 'Чему равно 1010₂ в десятичной системе?',
    correctAnswer: '10',
    options: ['8', '9', '10', '12'],
    category: 'binary',
    difficulty: 3,
    explanation: '1010₂ = 1×8 + 0×4 + 1×2 + 0×1 = 10.'
  },
  
  // Алгоритмы (difficulty 2)
  {
    question: 'Какой алгоритм сортировки самый простой?',
    correctAnswer: 'Сортировка пузырьком',
    options: ['Сортировка пузырьком', 'Быстрая сортировка', 'Слиянием', 'Бинарная'],
    category: 'algorithms',
    difficulty: 2,
    explanation: 'Пузырьковая сортировка — простой, но медленный алгоритм.'
  },
  {
    question: 'Что такое линейный поиск?',
    correctAnswer: 'Поиск элемента перебором всех элементов',
    options: ['Поиск элемента перебором всех элементов', 'Быстрый поиск', 'Двоичный поиск', 'Хэш-поиск'],
    category: 'algorithms',
    difficulty: 2,
    explanation: 'Линейный поиск проверяет каждый элемент по порядку.'
  },
  
  // Алгоритмы (difficulty 3)
  {
    question: 'Какой поиск работает быстрее в отсортированном массиве?',
    correctAnswer: 'Двоичный (бинарный) поиск',
    options: ['Линейный поиск', 'Двоичный (бинарный) поиск', 'Случайный поиск', 'Пузырьковый поиск'],
    category: 'algorithms',
    difficulty: 3,
    explanation: 'Бинарный поиск делит массив пополам, работая за O(log n).'
  },
  {
    question: 'Что такое блок-схема?',
    correctAnswer: 'Графическое изображение алгоритма',
    options: ['Программа', 'Графическое изображение алгоритма', 'Текст', 'Таблица'],
    category: 'algorithms',
    difficulty: 3,
    explanation: 'Блок-схема показывает структуру алгоритма графически.'
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
  hardware: { name: 'Железо', icon: '💻', color: 'from-slate-400 to-gray-500' },
  software: { name: 'Программы', icon: '💿', color: 'from-blue-400 to-indigo-500' },
  programming: { name: 'Программирование', icon: '👨‍💻', color: 'from-green-400 to-emerald-500' },
  networks: { name: 'Сети', icon: '🌐', color: 'from-cyan-400 to-blue-500' },
  binary: { name: 'Двоичная система', icon: '🔢', color: 'from-purple-400 to-violet-500' },
  algorithms: { name: 'Алгоритмы', icon: '📊', color: 'from-orange-400 to-amber-500' }
}

export default function InformaticsGame({ gradeId = 0, onExperience }: InformaticsGameProps) {
  const { playSuccess, playError, playWin, playLevelUp } = useSound()
  
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'result'>('setup')
  const [difficulty, setDifficulty] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<InfoCategory | 'all'>('all')
  
  const [currentQuestions, setCurrentQuestions] = useState<InfoQuestion[]>([])
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
            <span className="text-3xl">💻</span>
            Информатика
            <span className="text-3xl">🖥️</span>
          </h2>
          <p className="text-gray-400">Проверь знания о компьютерах и программировании!</p>
        </motion.div>
        
        {/* Выбор категории */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Monitor className="w-5 h-5 text-green-400" />
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
                onClick={() => setSelectedCategory(key as InfoCategory)}
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
            className="w-full py-6 text-xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-2xl"
          >
            <Cpu className="w-6 h-6 mr-2" />
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
