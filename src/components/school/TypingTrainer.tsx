'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Keyboard, Clock, Target, Trophy, RotateCcw, 
  CheckCircle, XCircle, Zap, Star, TrendingUp
} from 'lucide-react'

interface TypingTrainerProps {
  gradeId?: number
  onScore?: (points: number) => void
}

// Тексты для тренировки по уровням сложности
const textsByLevel = {
  beginner: [
    'мама мыла раму',
    'мир труд май',
    'весна идёт',
    'солнце светит',
    'птицы поют',
    'дождь идёт',
    'снег падает',
    'листья летят',
    'цветы цветут',
    'река течёт'
  ],
  elementary: [
    'мой друг любит читать книги',
    'кошка сидит на окне',
    'ученик пишет в тетради',
    'зима пришла в наш город',
    'птицы улетают на юг',
    'дети играют в парке',
    'учитель объясняет урок',
    'яблоки растут в саду',
    'машина едет по дороге',
    'лодка плывёт по реке'
  ],
  intermediate: [
    'российская школа предлагает качественное образование',
    'математика развивает логическое мышление',
    'литература открывает мир прекрасного',
    'история хранит мудрость поколений',
    'природа требует бережного отношения',
    'дружба это великое сокровище',
    'знания это сила и возможность',
    'учёба требует терпения и труда',
    'книга лучший подарок для друга',
    'наука двигает мир вперёд'
  ],
  advanced: [
    'образование является фундаментом успешного будущего каждого человека',
    'пушкин величайший русский поэт создавший непревзойдённые произведения',
    'научные открытия меняют представление человека об окружающем мире',
    'культура и традиции народа сохраняются благодаря передаче из поколения в поколение',
    'экологическое сознание становится важной частью современного общества',
    'информационные технологии преобразуют все сферы человеческой деятельности',
    'международное сотрудничество способствует развитию науки и культуры',
    'спорт укрепляет здоровье и формирует характер человека',
    'искусство отражает духовный мир народа и эпохи',
    'демократия основана на участии граждан в управлении государством'
  ]
}

const quotesForTyping = [
  { author: 'А.С. Пушкин', text: 'чем меньше женщину мы любим тем легче нравимся мы ей' },
  { author: 'Л.Н. Толстой', text: 'все счастливые семьи похожи друг на друга' },
  { author: 'А.П. Чехов', text: 'краткость сестра таланта' },
  { author: 'М. Горький', text: 'человек это звучит гордо' },
  { author: 'И.А. Крылов', text: 'а ларчик просто открывался' },
  { author: 'Д.И. Менделеев', text: 'наука требует всего человека' },
  { author: 'М.В. Ломоносов', text: 'математику уже затем учить надо' },
  { author: 'Н.А. Некрасов', text: 'поэтом можешь ты не быть но гражданином быть обязан' }
]

type DifficultyLevel = 'beginner' | 'elementary' | 'intermediate' | 'advanced'

export default function TypingTrainer({ gradeId = 1, onScore }: TypingTrainerProps) {
  const [mode, setMode] = useState<'menu' | 'practice' | 'quotes'>('menu')
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('beginner')
  const [currentText, setCurrentText] = useState('')
  const [userInput, setUserInput] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [endTime, setEndTime] = useState<number | null>(null)
  const [errors, setErrors] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [stats, setStats] = useState({
    wpm: 0,
    accuracy: 100,
    totalChars: 0,
    totalTime: 0
  })
  
  // Получение текста в зависимости от уровня
  const getTextForDifficulty = useCallback(() => {
    const texts = textsByLevel[difficulty]
    return texts[Math.floor(Math.random() * texts.length)]
  }, [difficulty])

  // Начало новой игры
  const startGame = (selectedDifficulty: DifficultyLevel) => {
    setDifficulty(selectedDifficulty)
    const texts = textsByLevel[selectedDifficulty]
    setCurrentText(texts[Math.floor(Math.random() * texts.length)])
    setUserInput('')
    setIsPlaying(true)
    setStartTime(null)
    setEndTime(null)
    setErrors(0)
    setCurrentIndex(0)
    setCompleted(false)
    setMode('practice')
  }

  // Начать режим цитат
  const startQuotesMode = () => {
    const quote = quotesForTyping[Math.floor(Math.random() * quotesForTyping.length)]
    setCurrentText(quote.text)
    setUserInput('')
    setIsPlaying(true)
    setStartTime(null)
    setEndTime(null)
    setErrors(0)
    setCurrentIndex(0)
    setCompleted(false)
    setMode('quotes')
  }

  // Обработка ввода
  useEffect(() => {
    if (!isPlaying || completed) return

    // Начинаем отсчёт времени при первом вводе
    if (userInput.length === 1 && startTime === null) {
      setStartTime(Date.now())
    }

    // Проверка ошибок
    const lastChar = userInput[userInput.length - 1]
    const expectedChar = currentText[userInput.length - 1]
    if (lastChar && lastChar !== expectedChar) {
      setErrors(prev => prev + 1)
    }

    // Обновление текущей позиции
    setCurrentIndex(userInput.length)

    // Завершение при полном вводе
    if (userInput.length === currentText.length) {
      setEndTime(Date.now())
      setCompleted(true)
      setIsPlaying(false)
      
      // Подсчёт статистики
      const timeInSeconds = startTime ? (Date.now() - startTime) / 1000 : 0
      const words = currentText.split(' ').length
      const wpm = Math.round((words / timeInSeconds) * 60)
      const accuracy = Math.round(((currentText.length - errors) / currentText.length) * 100)
      
      setStats({
        wpm: Math.max(0, wpm),
        accuracy: Math.max(0, accuracy),
        totalChars: currentText.length,
        totalTime: Math.round(timeInSeconds)
      })

      // Начисление очков
      const basePoints = difficulty === 'beginner' ? 20 : 
                         difficulty === 'elementary' ? 40 :
                         difficulty === 'intermediate' ? 60 : 80
      const accuracyBonus = Math.floor(accuracy / 10)
      const totalPoints = basePoints + accuracyBonus
      onScore?.(totalPoints)
    }
  }, [userInput, isPlaying, completed, currentText, startTime, errors, difficulty, onScore])

  // Новая попытка
  const restartGame = () => {
    if (mode === 'quotes') {
      startQuotesMode()
    } else {
      startGame(difficulty)
    }
  }

  // Вернуться в меню
  const backToMenu = () => {
    setMode('menu')
    setIsPlaying(false)
    setCompleted(false)
    setUserInput('')
  }

  // Рендер меню
  const renderMenu = () => (
    <div className="space-y-6">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Keyboard className="w-16 h-16 mx-auto mb-4 text-purple-400" />
        <h2 className="text-2xl font-bold mb-2">Тренажёр печати</h2>
        <p className="text-gray-400">Улучшай скорость и точность печати!</p>
      </motion.div>

      {/* Выбор уровня */}
      <div className="grid gap-4">
        <Card className="bg-white/5 border-white/10 hover:border-white/30 transition-all cursor-pointer"
              onClick={() => startGame('beginner')}>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-green-400">Начальный</h3>
                <p className="text-sm text-gray-400">Короткие простые фразы</p>
              </div>
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 hover:border-white/30 transition-all cursor-pointer"
              onClick={() => startGame('elementary')}>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-blue-400">Базовый</h3>
                <p className="text-sm text-gray-400">Простые предложения</p>
              </div>
              <div className="flex">
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 hover:border-white/30 transition-all cursor-pointer"
              onClick={() => startGame('intermediate')}>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-purple-400">Средний</h3>
                <p className="text-sm text-gray-400">Длинные предложения</p>
              </div>
              <div className="flex">
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 hover:border-white/30 transition-all cursor-pointer"
              onClick={() => startGame('advanced')}>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-red-400">Продвинутый</h3>
                <p className="text-sm text-gray-400">Сложные тексты</p>
              </div>
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Режим цитат */}
        <Card className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-amber-500/30 hover:border-amber-500/50 transition-all cursor-pointer"
              onClick={startQuotesMode}>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                <span className="text-2xl">📜</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-400">Знаменитые цитаты</h3>
                <p className="text-sm text-gray-400">Печатай великие слова великих людей</p>
              </div>
              <Zap className="w-6 h-6 text-amber-400" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  // Рендер игры
  const renderGame = () => (
    <div className="space-y-6">
      {/* Заголовок и статистика */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={backToMenu}>
          ← Назад
        </Button>
        <div className="flex items-center gap-4">
          {startTime && !completed && (
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-4 h-4" />
              <span>{Math.round((Date.now() - startTime) / 1000)}с</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-red-400">
            <XCircle className="w-4 h-4" />
            <span>{errors}</span>
          </div>
        </div>
      </div>

      {/* Текст для ввода */}
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-6">
          <div className="text-xl leading-relaxed font-mono select-none">
            {currentText.split('').map((char, index) => {
              let colorClass = 'text-gray-500'
              if (index < userInput.length) {
                colorClass = userInput[index] === char ? 'text-green-400' : 'text-red-400 bg-red-500/20'
              } else if (index === currentIndex) {
                colorClass = 'text-white bg-purple-500/30 animate-pulse'
              }
              return (
                <motion.span
                  key={index}
                  className={colorClass}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.02 }}
                >
                  {char}
                </motion.span>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Поле ввода */}
      {!completed ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full p-4 text-xl font-mono bg-white/10 border-2 border-white/20 rounded-xl focus:border-purple-500 focus:outline-none text-white"
            placeholder="Начни печатать..."
            autoFocus
            disabled={completed}
          />
          <p className="text-center text-gray-400 mt-2 text-sm">
            Подсказка: печатай текст точно как показано выше
          </p>
        </motion.div>
      ) : (
        // Результаты
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-4"
        >
          <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-400" />
              <h3 className="text-2xl font-bold mb-4">Отлично!</h3>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-3xl font-bold text-purple-400">{stats.wpm}</div>
                  <div className="text-sm text-gray-400">символов/мин</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-3xl font-bold text-green-400">{stats.accuracy}%</div>
                  <div className="text-sm text-gray-400">точность</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-3xl font-bold text-blue-400">{stats.totalTime}с</div>
                  <div className="text-sm text-gray-400">время</div>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <Button onClick={restartGame} className="gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Ещё раз
                </Button>
                <Button variant="outline" onClick={backToMenu}>
                  В меню
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Подсказки */}
      {!completed && (
        <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-green-400"></div>
            <span>Верно</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-red-400"></div>
            <span>Ошибка</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-purple-500"></div>
            <span>Текущий символ</span>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Keyboard className="w-5 h-5 text-purple-400" />
          Тренажёр печати
          {mode !== 'menu' && (
            <span className="text-sm font-normal text-gray-400">
              • {difficulty === 'beginner' ? 'Начальный' : 
                  difficulty === 'elementary' ? 'Базовый' :
                  difficulty === 'intermediate' ? 'Средний' : 'Продвинутый'}
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {mode === 'menu' ? renderMenu() : renderGame()}
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}
