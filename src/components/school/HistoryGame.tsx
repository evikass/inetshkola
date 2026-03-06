'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HelpCircle, Trophy, RotateCcw, Star, Zap, Landmark } from 'lucide-react'
import { useSound } from '@/hooks/useSound'

// Типы
interface HistoryQuestion {
  question: string
  correctAnswer: string
  options: string[]
  year?: string
  period: string
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
}

// База вопросов по истории России
const historyQuestions: HistoryQuestion[] = [
  // Древняя Русь
  {
    question: 'Кто стал первым князем Древней Руси?',
    correctAnswer: 'Рюрик',
    options: ['Рюрик', 'Олег', 'Игорь', 'Святослав'],
    year: '862 г.',
    period: 'Древняя Русь',
    explanation: 'В 862 году Рюрик был призван на княжение в Новгород, что считается началом российской государственности.',
    difficulty: 'easy',
    category: 'ancient'
  },
  {
    question: 'В каком году произошло крещение Руси?',
    correctAnswer: '988',
    options: ['988', '862', '945', '1036'],
    period: 'Древняя Русь',
    explanation: 'Крещение Руси произошло в 988 году при князе Владимире Святославиче.',
    difficulty: 'easy',
    category: 'ancient'
  },
  {
    question: 'Какой город был столицей Древней Руси при Ярославе Мудром?',
    correctAnswer: 'Киев',
    options: ['Киев', 'Новгород', 'Москва', 'Владимир'],
    period: 'Древняя Русь',
    explanation: 'При Ярославе Мудром Киев стал одним из крупнейших городов Европы и центром Древней Руси.',
    difficulty: 'easy',
    category: 'ancient'
  },
  // Монголо-татарское иго
  {
    question: 'В каком году произошло нашествие Батыя на Русь?',
    correctAnswer: '1237',
    options: ['1237', '1223', '1240', '1380'],
    period: 'Монголо-татарское иго',
    explanation: 'В 1237 году началось нашествие хана Батыя на Северо-Восточную Русь.',
    difficulty: 'medium',
    category: 'mongol'
  },
  {
    question: 'Какое сражение произошло в 1380 году?',
    correctAnswer: 'Куликовская битва',
    options: ['Куликовская битва', 'Ледовое побоище', 'Невская битва', 'Битва на Калке'],
    year: '1380 г.',
    period: 'Монголо-татарское иго',
    explanation: 'Куликовская битва состоялась 8 сентября 1380 года, русские войска под предводительством Дмитрия Донского одержали победу.',
    difficulty: 'medium',
    category: 'mongol'
  },
  {
    question: 'В каком году Русь окончательно освободилась от монголо-татарского ига?',
    correctAnswer: '1480',
    options: ['1480', '1380', '1240', '1552'],
    period: 'Монголо-татарское иго',
    explanation: 'В 1480 году после Стояния на реке Угре Русь окончательно освободилась от зависимости от Золотой Орды.',
    difficulty: 'hard',
    category: 'mongol'
  },
  // Московское царство
  {
    question: 'Кто был первым русским царём?',
    correctAnswer: 'Иван IV Грозный',
    options: ['Иван IV Грозный', 'Иван III', 'Василий III', 'Пётр I'],
    year: '1547 г.',
    period: 'Московское царство',
    explanation: 'Иван IV Грозный принял титул царя в 1547 году, став первым русским царём.',
    difficulty: 'easy',
    category: 'moscow'
  },
  {
    question: 'В каком году был созван первый Земский собор?',
    correctAnswer: '1549',
    options: ['1549', '1547', '1556', '1613'],
    period: 'Московское царство',
    explanation: 'Первый Земский собор был созван Иваном IV в 1549 году.',
    difficulty: 'hard',
    category: 'moscow'
  },
  {
    question: 'Какое событие произошло в 1613 году?',
    correctAnswer: 'Избрание Михаила Романова',
    options: ['Избрание Михаила Романова', 'Смерть Ивана Грозного', 'Окончание Смуты', 'Взятие Казани'],
    year: '1613 г.',
    period: 'Московское царство',
    explanation: 'В 1613 году Земский собор избрал на царство Михаила Фёдоровича Романова, что положило начало династии Романовых.',
    difficulty: 'medium',
    category: 'moscow'
  },
  // Российская империя
  {
    question: 'В каком году Пётр I провозгласил Россию империей?',
    correctAnswer: '1721',
    options: ['1721', '1703', '1709', '1712'],
    period: 'Российская империя',
    explanation: 'В 1721 году после победы в Северной войне Пётр I принял титул императора.',
    difficulty: 'medium',
    category: 'empire'
  },
  {
    question: 'Какая война произошла в 1812 году?',
    correctAnswer: 'Отечественная война',
    options: ['Отечественная война', 'Крымская война', 'Северная война', 'Русско-турецкая война'],
    year: '1812 г.',
    period: 'Российская империя',
    explanation: 'Отечественная война 1812 года — война России с армией Наполеона Бонапарта.',
    difficulty: 'easy',
    category: 'empire'
  },
  {
    question: 'Кто был императором России во время Отечественной войны 1812 года?',
    correctAnswer: 'Александр I',
    options: ['Александр I', 'Николай I', 'Павел I', 'Александр II'],
    year: '1812 г.',
    period: 'Российская империя',
    explanation: 'Александр I был императором в 1801-1825 годах, в том числе во время войны 1812 года.',
    difficulty: 'medium',
    category: 'empire'
  },
  {
    question: 'В каком году отменили крепостное право?',
    correctAnswer: '1861',
    options: ['1861', '1855', '1881', '1905'],
    period: 'Российская империя',
    explanation: 'Крепостное право было отменено в 1861 году Александром II.',
    difficulty: 'medium',
    category: 'empire'
  },
  {
    question: 'Как называлась война 1853-1856 годов?',
    correctAnswer: 'Крымская война',
    options: ['Крымская война', 'Русско-японская война', 'Первая мировая', 'Отечественная война'],
    period: 'Российская империя',
    explanation: 'Крымская война (1853-1856) — война России с коалицией Османской империи, Франции и Великобритании.',
    difficulty: 'medium',
    category: 'empire'
  },
  // Революция и СССР
  {
    question: 'В каком году произошла Октябрьская революция?',
    correctAnswer: '1917',
    options: ['1917', '1905', '1914', '1922'],
    period: 'Революция и СССР',
    explanation: 'Октябрьская революция произошла в октябре 1917 года (по старому стилю) / ноябре по новому.',
    difficulty: 'easy',
    category: 'revolution'
  },
  {
    question: 'Когда был образован СССР?',
    correctAnswer: '1922',
    options: ['1922', '1917', '1924', '1918'],
    year: '30 декабря 1922 г.',
    period: 'Революция и СССР',
    explanation: 'СССР был образован 30 декабря 1922 года.',
    difficulty: 'easy',
    category: 'revolution'
  },
  {
    question: 'Когда началась Великая Отечественная война?',
    correctAnswer: '22 июня 1941',
    options: ['22 июня 1941', '1 сентября 1939', '9 мая 1945', '17 сентября 1939'],
    period: 'Революция и СССР',
    explanation: 'Великая Отечественная война началась 22 июня 1941 года нападением Германии на СССР.',
    difficulty: 'easy',
    category: 'revolution'
  },
  {
    question: 'В каком году произошла Битва за Москву?',
    correctAnswer: '1941-1942',
    options: ['1941-1942', '1942-1943', '1943', '1945'],
    period: 'Революция и СССР',
    explanation: 'Битва за Москву проходила с 30 сентября 1941 по 20 апреля 1942 года.',
    difficulty: 'medium',
    category: 'revolution'
  },
  {
    question: 'Когда был подписан акт о капитуляции Германии?',
    correctAnswer: '8 мая 1945',
    options: ['8 мая 1945', '9 мая 1945', '2 сентября 1945', '1 мая 1945'],
    period: 'Революция и СССР',
    explanation: 'Акт о безоговорочной капитуляции Германии был подписан 8 мая 1945 года (в Москве уже было 9 мая).',
    difficulty: 'medium',
    category: 'revolution'
  },
  // Современная Россия
  {
    question: 'В каком году распался СССР?',
    correctAnswer: '1991',
    options: ['1991', '1993', '1999', '2000'],
    period: 'Современная Россия',
    explanation: 'СССР официально прекратил существование 26 декабря 1991 года.',
    difficulty: 'easy',
    category: 'modern'
  },
  {
    question: 'Когда была принята современная Конституция РФ?',
    correctAnswer: '1993',
    options: ['1993', '1991', '1996', '2000'],
    period: 'Современная Россия',
    explanation: 'Конституция Российской Федерации была принята 12 декабря 1993 года.',
    difficulty: 'medium',
    category: 'modern'
  }
]

// Настройки уровней сложности
const difficultySettings = {
  easy: {
    name: 'Легко',
    questions: 6,
    timeLimit: 0,
    categories: ['ancient', 'revolution'],
    xpReward: 50
  },
  medium: {
    name: 'Средне',
    questions: 10,
    timeLimit: 25,
    categories: ['ancient', 'mongol', 'moscow', 'empire', 'revolution'],
    xpReward: 100
  },
  hard: {
    name: 'Сложно',
    questions: 15,
    timeLimit: 20,
    categories: ['mongol', 'moscow', 'empire', 'revolution', 'modern'],
    xpReward: 150
  }
}

interface HistoryGameProps {
  onExperience?: (xp: number) => void
  gradeId?: number
}

export default function HistoryGame({ onExperience, gradeId = 1 }: HistoryGameProps) {
  const { playSuccess, playError, playWin, playLevelUp, muted, toggleMute } = useSound()
  
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'result'>('menu')
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState<HistoryQuestion[]>([])
  const [wrongAnswers, setWrongAnswers] = useState<{ question: HistoryQuestion; selected: string }[]>([])
  
  const filteredQuestions = useMemo(() => {
    const settings = difficultySettings[difficulty]
    return historyQuestions.filter(q => settings.categories.includes(q.category))
  }, [difficulty])
  
  const gameQuestions = useMemo(() => {
    const settings = difficultySettings[difficulty]
    const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, settings.questions)
  }, [filteredQuestions, difficulty])
  
  const endGame = useCallback(() => {
    if (!muted) playWin()
    setGameState('result')
    
    const settings = difficultySettings[difficulty]
    const earnedXP = Math.floor((score / (settings.questions * 10)) * settings.xpReward)
    if (onExperience) {
      onExperience(earnedXP)
    }
  }, [difficulty, score, onExperience, muted, playWin])
  
  const moveToNextQuestion = useCallback(() => {
    if (currentQuestion >= gameQuestions.length - 1) {
      endGame()
    } else {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setShowHint(false)
      setTimeLeft(difficultySettings[difficulty].timeLimit)
    }
  }, [currentQuestion, gameQuestions.length, difficulty, endGame])
  
  const handleTimeout = useCallback(() => {
    if (!muted) playError()
    const currentQ = gameQuestions[currentQuestion]
    setWrongAnswers(prev => [...prev, { question: currentQ, selected: '' }])
    setStreak(0)
    setShowResult(true)
    
    setTimeout(() => {
      moveToNextQuestion()
    }, 2000)
  }, [currentQuestion, gameQuestions, muted, playError, moveToNextQuestion])
  
  const handleAnswer = useCallback((answer: string) => {
    if (showResult) return
    
    const currentQ = gameQuestions[currentQuestion]
    const isCorrect = answer === currentQ.correctAnswer
    
    setSelectedAnswer(answer)
    setShowResult(true)
    
    if (isCorrect) {
      if (!muted) playSuccess()
      setScore(prev => prev + (10 + streak * 2))
      setStreak(prev => prev + 1)
      setCorrectAnswers(prev => [...prev, currentQ])
      
      if (streak > 0 && (streak + 1) % 5 === 0 && !muted) {
        playLevelUp()
      }
    } else {
      if (!muted) playError()
      setStreak(0)
      setWrongAnswers(prev => [...prev, { question: currentQ, selected: answer }])
    }
    
    setTimeout(() => {
      moveToNextQuestion()
    }, 2500)
  }, [showResult, currentQuestion, gameQuestions, streak, muted, playSuccess, playError, playLevelUp, moveToNextQuestion])
  
  useEffect(() => {
    if (gameState !== 'playing' || showResult) return
    
    const settings = difficultySettings[difficulty]
    if (settings.timeLimit === 0) return
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleTimeout()
          return settings.timeLimit
        }
        return prev - 1
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [gameState, currentQuestion, showResult, difficulty, handleTimeout])
  
  const startGame = useCallback((diff: 'easy' | 'medium' | 'hard') => {
    setDifficulty(diff)
    setCurrentQuestion(0)
    setScore(0)
    setStreak(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setShowHint(false)
    setTimeLeft(difficultySettings[diff].timeLimit)
    setCorrectAnswers([])
    setWrongAnswers([])
    setGameState('playing')
  }, [])
  
  const resetGame = useCallback(() => {
    setGameState('menu')
  }, [])
  
  if (gameState === 'menu') {
    return (
      <Card className="p-6 bg-gradient-to-br from-amber-900/50 to-orange-900/50 backdrop-blur-lg border-white/20">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Landmark className="w-16 h-16 text-amber-300" />
            </motion.div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">История России</h2>
          <p className="text-white/70">Проверь знания по истории нашей страны!</p>
        </div>
        
        <div className="flex justify-end mb-4">
          <Button variant="ghost" size="sm" onClick={toggleMute} className="text-white/70 hover:text-white">
            {muted ? '🔇' : '🔊'}
          </Button>
        </div>
        
        <div className="space-y-3">
          {(Object.keys(difficultySettings) as Array<'easy' | 'medium' | 'hard'>).map(diff => {
            const settings = difficultySettings[diff]
            return (
              <motion.button
                key={diff}
                onClick={() => startGame(diff)}
                className={cn(
                  'w-full p-4 rounded-xl text-left transition-all',
                  'bg-white/10 hover:bg-white/20 border border-white/20',
                  diff === 'easy' && 'hover:border-green-400/50',
                  diff === 'medium' && 'hover:border-yellow-400/50',
                  diff === 'hard' && 'hover:border-red-400/50'
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-white">{settings.name}</div>
                    <div className="text-sm text-white/60">
                      {settings.questions} вопросов
                      {settings.timeLimit > 0 && ` • ${settings.timeLimit} сек`}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Zap className="w-4 h-4" />
                    <span className="font-bold">{settings.xpReward} XP</span>
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>
        
        <div className="mt-6 p-4 bg-white/5 rounded-xl">
          <h3 className="font-bold text-white/90 mb-2">🏛️ Периоды истории:</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-white/70">
            <span>• Древняя Русь</span>
            <span>• Монголо-татарское иго</span>
            <span>• Московское царство</span>
            <span>• Российская империя</span>
            <span>• Революция и СССР</span>
            <span>• Современная Россия</span>
          </div>
        </div>
      </Card>
    )
  }
  
  if (gameState === 'result') {
    const settings = difficultySettings[difficulty]
    const earnedXP = Math.floor((score / (settings.questions * 10)) * settings.xpReward)
    const percentage = Math.round((correctAnswers.length / gameQuestions.length) * 100)
    
    return (
      <Card className="p-6 bg-gradient-to-br from-amber-900/50 to-orange-900/50 backdrop-blur-lg border-white/20">
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Trophy className={cn(
              'w-20 h-20 mx-auto mb-4',
              percentage >= 80 ? 'text-yellow-400' : percentage >= 50 ? 'text-gray-300' : 'text-amber-600'
            )} />
          </motion.div>
          
          <h2 className="text-2xl font-bold text-white mb-2">
            {percentage >= 80 ? 'Отлично! 🎉' : percentage >= 50 ? 'Хорошо! 👍' : 'Попробуй ещё! 💪'}
          </h2>
          
          <div className="flex justify-center gap-6 mb-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{correctAnswers.length}</div>
              <div className="text-sm text-white/60">Правильно</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{wrongAnswers.length}</div>
              <div className="text-sm text-white/60">Ошибок</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">{score}</div>
              <div className="text-sm text-white/60">Очков</div>
            </div>
          </div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center items-center gap-2 bg-yellow-500/20 px-4 py-2 rounded-full"
          >
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-xl font-bold text-yellow-400">+{earnedXP} XP</span>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-lg font-bold text-white">{percentage}%</div>
            <div className="text-xs text-white/60">Точность</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-lg font-bold text-white">{difficultySettings[difficulty].name}</div>
            <div className="text-xs text-white/60">Сложность</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-lg font-bold text-white">{streak}</div>
            <div className="text-xs text-white/60">Лучшая серия</div>
          </div>
        </div>
        
        {wrongAnswers.length > 0 && (
          <div className="mb-6 p-4 bg-red-500/10 rounded-xl">
            <h3 className="font-bold text-white/90 mb-2">📚 Повтори материал:</h3>
            <div className="space-y-2">
              {wrongAnswers.slice(0, 3).map((item, i) => (
                <div key={i} className="text-sm">
                  <p className="text-white/80">{item.question.question}</p>
                  <p className="text-green-300 font-bold">{item.question.correctAnswer}</p>
                  <p className="text-white/50 text-xs">{item.question.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex gap-3">
          <Button variant="outline" onClick={resetGame} className="flex-1 border-white/20 text-white hover:bg-white/10">
            <RotateCcw className="w-4 h-4 mr-2" />
            Меню
          </Button>
          <Button onClick={() => startGame(difficulty)} className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
            Ещё раз
          </Button>
        </div>
      </Card>
    )
  }
  
  const currentQ = gameQuestions[currentQuestion]
  const settings = difficultySettings[difficulty]
  const progress = ((currentQuestion + 1) / gameQuestions.length) * 100
  
  return (
    <Card className="p-4 sm:p-6 bg-gradient-to-br from-amber-900/50 to-orange-900/50 backdrop-blur-lg border-white/20">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Landmark className="w-5 h-5 text-amber-300" />
          <span className="font-bold text-white">История России</span>
        </div>
        <div className="flex items-center gap-3">
          {streak > 0 && (
            <motion.div key={streak} initial={{ scale: 1.5 }} animate={{ scale: 1 }} className="flex items-center gap-1 bg-orange-500/20 px-2 py-1 rounded-full">
              <span className="text-sm">🔥</span>
              <span className="text-orange-300 font-bold text-sm">{streak}</span>
            </motion.div>
          )}
          <Button variant="ghost" size="sm" onClick={toggleMute} className="text-white/70 hover:text-white h-8 w-8 p-0">
            {muted ? '🔇' : '🔊'}
          </Button>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm text-white/70 mb-1">
          <span>{currentQuestion + 1} / {gameQuestions.length}</span>
          {settings.timeLimit > 0 && (
            <span className={cn(timeLeft <= 5 && 'text-red-400')}>⏱ {timeLeft} сек</span>
          )}
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div className="h-full bg-gradient-to-r from-amber-400 to-orange-500" initial={{ width: 0 }} animate={{ width: `${progress}%` }} />
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-white font-bold">{score}</span>
        </div>
        <div className="flex items-center gap-2 text-yellow-400">
          <Zap className="w-4 h-4" />
          <span className="text-sm">{settings.xpReward} XP</span>
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div key={currentQuestion} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="mb-6">
          <div className="text-center mb-4">
            {currentQ.year && (
              <div className="inline-block bg-amber-500/20 px-3 py-1 rounded-full mb-2">
                <span className="text-amber-300 text-sm font-medium">{currentQ.year}</span>
              </div>
            )}
            <p className="text-white/70 text-xs mb-2">{currentQ.period}</p>
            <motion.div className="text-lg sm:text-xl font-medium text-white py-4 px-4 bg-white/10 rounded-xl" animate={showResult ? { scale: [1, 1.02, 1] } : {}}>
              {currentQ.question}
            </motion.div>
          </div>
          
          {showHint && !showResult && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 p-3 bg-blue-500/20 rounded-xl text-center">
              <p className="text-blue-200 text-sm">💡 Период: {currentQ.period}</p>
            </motion.div>
          )}
          
          <div className="grid grid-cols-2 gap-2">
            {currentQ.options.map((option, i) => {
              const isSelected = selectedAnswer === option
              const isCorrect = option === currentQ.correctAnswer
              const showCorrectness = showResult
              
              return (
                <motion.button
                  key={i}
                  onClick={() => handleAnswer(option)}
                  disabled={showResult}
                  className={cn(
                    'p-3 sm:p-4 rounded-xl text-sm sm:text-base transition-all border-2',
                    !showCorrectness && 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40',
                    showCorrectness && isCorrect && 'bg-green-500/30 border-green-400 text-green-100',
                    showCorrectness && isSelected && !isCorrect && 'bg-red-500/30 border-red-400 text-red-100',
                    showCorrectness && !isSelected && !isCorrect && 'opacity-40'
                  )}
                  whileHover={!showResult ? { scale: 1.02 } : {}}
                  whileTap={!showResult ? { scale: 0.98 } : {}}
                >
                  {option}
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>
      
      <AnimatePresence>
        {showResult && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={cn(
            'p-4 rounded-xl mb-4',
            selectedAnswer === currentQ.correctAnswer ? 'bg-green-500/20 border border-green-400/30' : 'bg-red-500/20 border border-red-400/30'
          )}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{selectedAnswer === currentQ.correctAnswer ? '✅' : '❌'}</span>
              <span className="font-bold text-white">{selectedAnswer === currentQ.correctAnswer ? 'Правильно!' : 'Ошибка!'}</span>
            </div>
            <p className="text-green-300 text-sm mb-2 font-bold">{currentQ.correctAnswer}</p>
            <p className="text-white/70 text-sm">{currentQ.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!showResult && !showHint && (
        <Button variant="ghost" onClick={() => setShowHint(true)} className="w-full text-white/70 hover:text-white hover:bg-white/10">
          <HelpCircle className="w-4 h-4 mr-2" />
          Подсказка
        </Button>
      )}
    </Card>
  )
}
