'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  BookOpen, Quill, Scroll, BookMarked, Pen,
  Star, Trophy, Zap, Heart, Clock, Target, Check, X, Sparkles
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

interface LiteratureGameProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

// Категории вопросов
type LitCategory = 'authors' | 'works' | 'heroes' | 'fairytales' | 'poetry' | 'proverbs'

interface LitQuestion {
  question: string
  correctAnswer: string
  options: string[]
  category: LitCategory
  difficulty: 1 | 2 | 3
  explanation?: string
}

// База вопросов по литературе
const questions: LitQuestion[] = [
  // Писатели (difficulty 1)
  {
    question: 'Кто написал сказку "Золотой ключик"?',
    correctAnswer: 'А.Н. Толстой',
    options: ['А.С. Пушкин', 'А.Н. Толстой', 'П.П. Бажов', 'К.И. Чуковский'],
    category: 'authors',
    difficulty: 1,
    explanation: 'Алексей Николаевич Толстой написал "Золотой ключик, или Приключения Буратино" в 1936 году.'
  },
  {
    question: 'Кто автор рассказа "Му-му"?',
    correctAnswer: 'И.С. Тургенев',
    options: ['Л.Н. Толстой', 'И.С. Тургенев', 'А.П. Чехов', 'Ф.М. Достоевский'],
    category: 'authors',
    difficulty: 1,
    explanation: 'Иван Сергеевич Тургенев написал рассказ о глухонемом дворнике Герасиме и его собаке.'
  },
  {
    question: 'Кто написал басню "Стрекоза и Муравей"?',
    correctAnswer: 'И.А. Крылов',
    options: ['А.С. Пушкин', 'И.А. Крылов', 'М.Ю. Лермонтов', 'В.А. Жуковский'],
    category: 'authors',
    difficulty: 1,
    explanation: 'Иван Андреевич Крылов — великий русский баснописец.'
  },
  {
    question: 'Кто написал роман "Война и мир"?',
    correctAnswer: 'Л.Н. Толстой',
    options: ['Ф.М. Достоевский', 'Л.Н. Толстой', 'И.С. Тургенев', 'А.П. Чехов'],
    category: 'authors',
    difficulty: 1,
    explanation: 'Лев Николаевич Толстой написал роман-эпопею "Война и мир" в 1863-1869 годах.'
  },
  {
    question: 'Кто автор повести "Капитанская дочка"?',
    correctAnswer: 'А.С. Пушкин',
    options: ['А.С. Пушкин', 'М.Ю. Лермонтов', 'Н.В. Гоголь', 'И.С. Тургенев'],
    category: 'authors',
    difficulty: 1,
    explanation: 'Александр Сергеевич Пушкин написал историческую повесть о пугачёвском восстании.'
  },
  
  // Писатели (difficulty 2)
  {
    question: 'Кто написал повесть "Преступление и наказание"?',
    correctAnswer: 'Ф.М. Достоевский',
    options: ['Л.Н. Толстой', 'Ф.М. Достоевский', 'И.А. Гончаров', 'Н.Г. Чернышевский'],
    category: 'authors',
    difficulty: 2,
    explanation: 'Фёдор Михайлович Достоевский исследует психологию преступления в этом романе.'
  },
  {
    question: 'Кто автор романа "Отцы и дети"?',
    correctAnswer: 'И.С. Тургенев',
    options: ['И.С. Тургенев', 'И.А. Гончаров', 'Л.Н. Толстой', 'А.И. Герцен'],
    category: 'authors',
    difficulty: 2,
    explanation: 'В романе показан конфликт поколений и образ нигилиста Базарова.'
  },
  {
    question: 'Кто написал поэму "Мцыри"?',
    correctAnswer: 'М.Ю. Лермонтов',
    options: ['А.С. Пушкин', 'М.Ю. Лермонтов', 'В.А. Жуковский', 'К.Н. Батюшков'],
    category: 'authors',
    difficulty: 2,
    explanation: 'Михаил Юрьевич Лермонтов написал романтическую поэму о юном горце.'
  },
  
  // Писатели (difficulty 3)
  {
    question: 'Кто автор романа "Мастер и Маргарита"?',
    correctAnswer: 'М.А. Булгаков',
    options: ['М.А. Булгаков', 'А.П. Платонов', 'Б.Л. Пастернак', 'М.А. Шолохов'],
    category: 'authors',
    difficulty: 3,
    explanation: 'Михаил Афанасьевич Булгаков работал над романом с 1928 года до конца жизни.'
  },
  {
    question: 'Кто написал роман "Тихий Дон"?',
    correctAnswer: 'М.А. Шолохов',
    options: ['М.А. Шолохов', 'Б.Л. Пастернак', 'А.Н. Толстой', 'А.А. Фадеев'],
    category: 'authors',
    difficulty: 3,
    explanation: 'Михаил Александрович Шолохов получил Нобелевскую премию за этот роман.'
  },
  
  // Произведения (difficulty 1)
  {
    question: 'Как называется сказка А.С. Пушкина о рыбаке?',
    correctAnswer: 'Сказка о рыбаке и рыбке',
    options: ['Сказка о рыбаке и рыбке', 'Сказка о золотой рыбке', 'Сказка о море', 'Сказка о старике'],
    category: 'works',
    difficulty: 1,
    explanation: 'Сказка учит быть благодарным и не быть жадным.'
  },
  {
    question: 'В каком произведении герой превращается в собаку?',
    correctAnswer: 'Собачье сердце',
    options: ['Мастер и Маргарита', 'Собачье сердце', 'Роковые яйца', 'Дни Турбиных'],
    category: 'works',
    difficulty: 1,
    explanation: 'В повести М.А. Булгакова "Собачье сердце" пёс Шарик превращается в Полиграфа Полиграфовича Шарикова.'
  },
  {
    question: 'Какой рассказ А.П. Чехова о хамелеоне?',
    correctAnswer: 'Хамелеон',
    options: ['Толстый и тонкий', 'Хамелеон', 'Смерть чиновника', 'Лошадиная фамилия'],
    category: 'works',
    difficulty: 1,
    explanation: 'Рассказ "Хамелеон" высмеивает лицемерие и угодничество.'
  },
  
  // Произведения (difficulty 2)
  {
    question: 'Как называется роман И.А. Гончарова о ленивом помещике?',
    correctAnswer: 'Обломов',
    options: ['Обломов', 'Обыкновенная история', 'Обрыв', 'Гроза'],
    category: 'works',
    difficulty: 2,
    explanation: 'Илья Ильич Обломов — символ лени и апатии, но также и душевной чистоты.'
  },
  {
    question: 'Какое произведение Н.В. Гоголя о мёртвых душах?',
    correctAnswer: 'Мёртвые души',
    options: ['Ревизор', 'Мёртвые души', 'Шинель', 'Нос'],
    category: 'works',
    difficulty: 2,
    explanation: 'Поэма "Мёртвые души" показывает помещичью Россию XIX века.'
  },
  {
    question: 'Как называется пьеса А.Н. Островского о купеческой семье?',
    correctAnswer: 'Гроза',
    options: ['Бесприданница', 'Гроза', 'Снегурочка', 'Доходное место'],
    category: 'works',
    difficulty: 2,
    explanation: 'Трагедия Катерины в купеческом городе Калинове.'
  },
  
  // Герои (difficulty 1)
  {
    question: 'Как звали няню А.С. Пушкина?',
    correctAnswer: 'Арина Родионовна',
    options: ['Марья Ивановна', 'Арина Родионовна', 'Наталья Николаевна', 'Анна Петровна'],
    category: 'heroes',
    difficulty: 1,
    explanation: 'Арина Родионовна Яковлева — крепостная няня поэта, его муза и сказительница.'
  },
  {
    question: 'Как звали главного героя романа "Евгений Онегин"?',
    correctAnswer: 'Евгений Онегин',
    options: ['Владимир Ленский', 'Евгений Онегин', 'Пётр Гринёв', 'Григорий Печорин'],
    category: 'heroes',
    difficulty: 1,
    explanation: 'Евгений Онегин — "лишний человек", скучающий аристократ.'
  },
  {
    question: 'Как звали собаку в рассказе "Каштанка"?',
    correctAnswer: 'Каштанка',
    options: ['Муму', 'Каштанка', 'Белый Бим', 'Артемон'],
    category: 'heroes',
    difficulty: 1,
    explanation: 'А.П. Чехов написал трогательный рассказ о собаке, потерявшей хозяина.'
  },
  
  // Герои (difficulty 2)
  {
    question: 'Как звали главного героя поэмы "Герой нашего времени"?',
    correctAnswer: 'Григорий Печорин',
    options: ['Евгений Онегин', 'Григорий Печорин', 'Печорин', 'Григорий Александрович'],
    category: 'heroes',
    difficulty: 2,
    explanation: 'Печорин — тип "лишнего человека", разочарованного в жизни.'
  },
  {
    question: 'Как звали главного героя романа "Преступление и наказание"?',
    correctAnswer: 'Родион Раскольников',
    options: ['Родион Раскольников', 'Дмитрий Карамазов', 'Иван Карамазов', 'Аркадий Долгорукий'],
    category: 'heroes',
    difficulty: 2,
    explanation: 'Родион Романович Раскольников — бедный студент, совершивший убийство.'
  },
  {
    question: 'Как звали главного героя повести "Муму"?',
    correctAnswer: 'Герасим',
    options: ['Герасим', 'Андрей', 'Евсей', 'Кузьма'],
    category: 'heroes',
    difficulty: 2,
    explanation: 'Герасим — глухонемой дворник, который любил свою собаку Муму.'
  },
  
  // Сказки (difficulty 1)
  {
    question: 'Кто победил Кощея Бессмертного в русских сказках?',
    correctAnswer: 'Иван-царевич',
    options: ['Иван-дурак', 'Иван-царевич', 'Добрыня Никитич', 'Илья Муромец'],
    category: 'fairytales',
    difficulty: 1,
    explanation: 'Иван-царевич — один из популярных героев русских волшебных сказок.'
  },
  {
    question: 'В какой сказке девочка идёт к бабушке через лес?',
    correctAnswer: 'Красная Шапочка',
    options: ['Красная Шапочка', 'Маша и медведь', 'Снегурочка', 'Гуси-лебеди'],
    category: 'fairytales',
    difficulty: 1,
    explanation: 'Шарль Перро написал эту сказку, а Братья Гримм добавили счастливый конец.'
  },
  {
    question: 'Кто превратил тыкву в карету?',
    correctAnswer: 'Фея',
    options: ['Волшебник', 'Фея', 'Колдунья', 'Гном'],
    category: 'fairytales',
    difficulty: 1,
    explanation: 'В сказке "Золушка" добрая фея помогает Золушке попасть на бал.'
  },
  
  // Сказки (difficulty 2)
  {
    question: 'Кто написал "Сказку о царе Салтане"?',
    correctAnswer: 'А.С. Пушкин',
    options: ['П.П. Бажов', 'А.С. Пушкин', 'В.А. Жуковский', 'С.Т. Аксаков'],
    category: 'fairytales',
    difficulty: 2,
    explanation: 'Пушкин создал цикл сказок, основанных на народных сюжетах.'
  },
  {
    question: 'Какой герой вылез из яйца?',
    correctAnswer: 'Кощей Бессмертный',
    options: ['Колобок', 'Кощей Бессмертный', 'Курочка Ряба', 'Чиполлино'],
    category: 'fairytales',
    difficulty: 2,
    explanation: 'Смерть Кощея — в игле, игла — в яйце, яйцо — в утке, утка — в зайце.'
  },
  
  // Поэзия (difficulty 1)
  {
    question: 'Кто написал стихотворение "У лукоморья дуб зелёный"?',
    correctAnswer: 'А.С. Пушкин',
    options: ['М.Ю. Лермонтов', 'А.С. Пушкин', 'Ф.И. Тютчев', 'А.А. Фет'],
    category: 'poetry',
    difficulty: 1,
    explanation: 'Это начало поэмы "Руслан и Людмила" Александра Сергеевича Пушкина.'
  },
  {
    question: 'Кто написал стихотворение "Бородино"?',
    correctAnswer: 'М.Ю. Лермонтов',
    options: ['А.С. Пушкин', 'М.Ю. Лермонтов', 'Д.В. Давыдов', 'В.А. Жуковский'],
    category: 'poetry',
    difficulty: 1,
    explanation: 'Стихотворение посвящено Бородинской битве 1812 года.'
  },
  {
    question: 'Кто автор стихов "Я помню чудное мгновенье..."?',
    correctAnswer: 'А.С. Пушкин',
    options: ['А.С. Пушкин', 'М.Ю. Лермонтов', 'Ф.И. Тютчев', 'Н.А. Некрасов'],
    category: 'poetry',
    difficulty: 1,
    explanation: 'Стихотворение посвящено Анне Керн.'
  },
  
  // Поэзия (difficulty 2)
  {
    question: 'Кто написал стихотворение "Парус"?',
    correctAnswer: 'М.Ю. Лермонтов',
    options: ['А.С. Пушкин', 'М.Ю. Лермонтов', 'Ф.И. Тютчев', 'А.А. Фет'],
    category: 'poetry',
    difficulty: 2,
    explanation: 'Лермонтов написал это стихотворение в 17 лет, выразив одиночество души.'
  },
  {
    question: 'Кто автор стихотворения "Весенние воды"?',
    correctAnswer: 'Ф.И. Тютчев',
    options: ['А.А. Фет', 'Ф.И. Тютчев', 'А.Н. Майков', 'Н.А. Некрасов'],
    category: 'poetry',
    difficulty: 2,
    explanation: 'Фёдор Иванович Тютчев — мастер философской лирики о природе.'
  },
  
  // Поэзия (difficulty 3)
  {
    question: 'Кто написал поэму "Двенадцать"?',
    correctAnswer: 'А.А. Блок',
    options: ['А.А. Блок', 'В.В. Маяковский', 'С.А. Есенин', 'Б.Л. Пастернак'],
    category: 'poetry',
    difficulty: 3,
    explanation: 'Поэма Александра Блока о революции 1917 года.'
  },
  {
    question: 'Кто автор поэмы "Василий Тёркин"?',
    correctAnswer: 'А.Т. Твардовский',
    options: ['К.М. Симонов', 'А.Т. Твардовский', 'М.А. Шолохов', 'Б.Л. Пастернак'],
    category: 'poetry',
    difficulty: 3,
    explanation: 'Александр Трифонович Твардовский написал поэму во время Великой Отечественной войны.'
  },
  
  // Пословицы (difficulty 1)
  {
    question: 'Какое слово пропущено: "Терпение и труд всё ..."?',
    correctAnswer: 'перетрут',
    options: ['пройдут', 'перетрут', 'смогут', 'победят'],
    category: 'proverbs',
    difficulty: 1,
    explanation: 'Пословица учит упорству и терпению в достижении цели.'
  },
  {
    question: 'Как начинается пословица: "... лучше новых двух"?',
    correctAnswer: 'Старый друг',
    options: ['Новый друг', 'Старый друг', 'Верный друг', 'Любимый друг'],
    category: 'proverbs',
    difficulty: 1,
    explanation: 'Старый друг лучше новых двух — ценность проверенной дружбы.'
  },
  {
    question: 'Какое слово пропущено: "Без труда не вытащишь и ... из пруда"?',
    correctAnswer: 'рыбку',
    options: ['утку', 'рыбку', 'лягушку', 'камень'],
    category: 'proverbs',
    difficulty: 1,
    explanation: 'Без труда не вытащишь и рыбку из пруда — о важности усилий.'
  },
  
  // Пословицы (difficulty 2)
  {
    question: 'Какое слово пропущено: "Семь раз отмерь, один раз ..."?',
    correctAnswer: 'отрежь',
    options: ['подумай', 'отрежь', 'сделай', 'попробуй'],
    category: 'proverbs',
    difficulty: 2,
    explanation: 'Пословица советует быть осмотрительным перед принятием решения.'
  },
  {
    question: 'Как продолжается: "Поспешишь — людей ..."?',
    correctAnswer: 'насмешишь',
    options: ['погубишь', 'насмешишь', 'обидишь', 'потеряешь'],
    category: 'proverbs',
    difficulty: 2,
    explanation: 'Поспешишь — людей насмешишь: не стоит торопиться в делах.'
  }
]

// Настройки сложности
const difficultySettings = {
  0: { name: 'Лёгкий', count: 8, time: 0, diffLevel: 1, xp: 65 },
  1: { name: 'Средний', count: 12, time: 25, diffLevel: 2, xp: 95 },
  2: { name: 'Сложный', count: 15, time: 20, diffLevel: 3, xp: 130 }
}

// Настройки категорий
const categorySettings = {
  authors: { name: 'Писатели', icon: '✍️', color: 'from-amber-400 to-orange-500' },
  works: { name: 'Произведения', icon: '📖', color: 'from-blue-400 to-cyan-500' },
  heroes: { name: 'Герои', icon: '🎭', color: 'from-purple-400 to-violet-500' },
  fairytales: { name: 'Сказки', icon: '🧚', color: 'from-pink-400 to-rose-500' },
  poetry: { name: 'Поэзия', icon: '📜', color: 'from-indigo-400 to-blue-500' },
  proverbs: { name: 'Пословицы', icon: '💡', color: 'from-yellow-400 to-amber-500' }
}

export default function LiteratureGame({ gradeId = 0, onExperience }: LiteratureGameProps) {
  const { playSuccess, playError, playWin, playLevelUp } = useSound()
  
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'result'>('setup')
  const [difficulty, setDifficulty] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<LitCategory | 'all'>('all')
  
  const [currentQuestions, setCurrentQuestions] = useState<LitQuestion[]>([])
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
      }, showExplanation ? 3500 : 2000)
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
            <span className="text-3xl">📚</span>
            Литература
            <span className="text-3xl">✨</span>
          </h2>
          <p className="text-gray-400">Проверь знания о русской и мировой литературе!</p>
        </motion.div>
        
        {/* Выбор категории */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BookMarked className="w-5 h-5 text-purple-400" />
              Категория
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <motion.button
              onClick={() => setSelectedCategory('all')}
              className={`p-3 rounded-xl border-2 transition-all ${
                selectedCategory === 'all'
                  ? 'border-purple-400 bg-purple-400/20'
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
                onClick={() => setSelectedCategory(key as LitCategory)}
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
            className="w-full py-6 text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 rounded-2xl"
          >
            <BookOpen className="w-6 h-6 mr-2" />
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
        <h2 className="text-2xl sm:text-3xl font-bold">Превосходно!</h2>
        
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
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600"
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
          className="h-full bg-gradient-to-r from-purple-400 to-pink-500"
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
                <span className="font-bold text-white">📖 Объяснение: </span>
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
