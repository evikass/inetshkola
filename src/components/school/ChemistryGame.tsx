'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HelpCircle, Trophy, RotateCcw, Star, Zap, Atom } from 'lucide-react'
import { useSound } from '@/hooks/useSound'

// Типы
interface ElementQuestion {
  question: string
  correctAnswer: string
  options: string[]
  symbol?: string
  atomicNumber?: number
  category: string
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

// База вопросов по химии
const elementQuestions: ElementQuestion[] = [
  // Основные элементы
  {
    question: 'Какой химический элемент обозначается символом H?',
    correctAnswer: 'Водород',
    options: ['Водород', 'Гелий', 'Гафний', 'Ртуть'],
    symbol: 'H',
    atomicNumber: 1,
    category: 'Неметаллы',
    explanation: 'Водород (H) — самый лёгкий химический элемент, атомный номер 1. Самый распространённый элемент во Вселенной.',
    difficulty: 'easy'
  },
  {
    question: 'Какой химический элемент обозначается символом O?',
    correctAnswer: 'Кислород',
    options: ['Кислород', 'Осмий', 'Олово', 'Золото'],
    symbol: 'O',
    atomicNumber: 8,
    category: 'Неметаллы',
    explanation: 'Кислород (O) — элемент 8-й группы, необходим для дыхания живых организмов.',
    difficulty: 'easy'
  },
  {
    question: 'Какой химический элемент обозначается символом C?',
    correctAnswer: 'Углерод',
    options: ['Углерод', 'Кальций', 'Медь', 'Хлор'],
    symbol: 'C',
    atomicNumber: 6,
    category: 'Неметаллы',
    explanation: 'Углерод (C) — основа всех органических соединений, атомный номер 6.',
    difficulty: 'easy'
  },
  {
    question: 'Какой химический элемент обозначается символом N?',
    correctAnswer: 'Азот',
    options: ['Азот', 'Натрий', 'Неон', 'Никель'],
    symbol: 'N',
    atomicNumber: 7,
    category: 'Неметаллы',
    explanation: 'Азот (N) — составляет 78% атмосферы Земли, атомный номер 7.',
    difficulty: 'easy'
  },
  {
    question: 'Какой химический элемент обозначается символом Fe?',
    correctAnswer: 'Железо',
    options: ['Железо', 'Фтор', 'Фосфор', 'Фермий'],
    symbol: 'Fe',
    atomicNumber: 26,
    category: 'Металлы',
    explanation: 'Железо (Fe) — самый распространённый металл на Земле, от латинского Ferrum.',
    difficulty: 'easy'
  },
  {
    question: 'Какой химический элемент обозначается символом Au?',
    correctAnswer: 'Золото',
    options: ['Золото', 'Серебро', 'Алюминий', 'Аргон'],
    symbol: 'Au',
    atomicNumber: 79,
    category: 'Благородные металлы',
    explanation: 'Золото (Au) — благородный металл, от латинского Aurum.',
    difficulty: 'easy'
  },
  {
    question: 'Какой химический элемент обозначается символом Ag?',
    correctAnswer: 'Серебро',
    options: ['Серебро', 'Золото', 'Аргентум', 'Актиний'],
    symbol: 'Ag',
    atomicNumber: 47,
    category: 'Благородные металлы',
    explanation: 'Серебро (Ag) — благородный металл, от латинского Argentum.',
    difficulty: 'easy'
  },
  // Средняя сложность
  {
    question: 'Какой химический элемент обозначается символом Na?',
    correctAnswer: 'Натрий',
    options: ['Натрий', 'Неон', 'Азот', 'Никель'],
    symbol: 'Na',
    atomicNumber: 11,
    category: 'Щелочные металлы',
    explanation: 'Натрий (Na) — щелочной металл, от латинского Natrium.',
    difficulty: 'medium'
  },
  {
    question: 'Какой химический элемент обозначается символом Ca?',
    correctAnswer: 'Кальций',
    options: ['Кальций', 'Углерод', 'Кадмий', 'Калифорний'],
    symbol: 'Ca',
    atomicNumber: 20,
    category: 'Щёлочноземельные металлы',
    explanation: 'Кальций (Ca) — важен для костей и зубов, атомный номер 20.',
    difficulty: 'medium'
  },
  {
    question: 'Какой химический элемент обозначается символом Cl?',
    correctAnswer: 'Хлор',
    options: ['Хлор', 'Углерод', 'Кальций', 'Кобальт'],
    symbol: 'Cl',
    atomicNumber: 17,
    category: 'Галогены',
    explanation: 'Хлор (Cl) — газ жёлто-зелёного цвета, используется для дезинфекции воды.',
    difficulty: 'medium'
  },
  {
    question: 'Какой химический элемент обозначается символом Cu?',
    correctAnswer: 'Медь',
    options: ['Медь', 'Углерод', 'Кюрий', 'Кальций'],
    symbol: 'Cu',
    atomicNumber: 29,
    category: 'Переходные металлы',
    explanation: 'Медь (Cu) — от латинского Cuprum, хороший проводник электричества.',
    difficulty: 'medium'
  },
  {
    question: 'Какой химический элемент обозначается символом Zn?',
    correctAnswer: 'Цинк',
    options: ['Цинк', 'Цирконий', 'Олово', 'Титан'],
    symbol: 'Zn',
    atomicNumber: 30,
    category: 'Переходные металлы',
    explanation: 'Цинк (Zn) — используется для гальванизации и в батарейках.',
    difficulty: 'medium'
  },
  {
    question: 'Какой химический элемент обозначается символом Al?',
    correctAnswer: 'Алюминий',
    options: ['Алюминий', 'Аргон', 'Актиний', 'Америций'],
    symbol: 'Al',
    atomicNumber: 13,
    category: 'Лёгкие металлы',
    explanation: 'Алюминий (Al) — лёгкий металл, широко используется в промышленности.',
    difficulty: 'medium'
  },
  {
    question: 'Какой химический элемент обозначается символом S?',
    correctAnswer: 'Сера',
    options: ['Сера', 'Натрий', 'Кремний', 'Стронций'],
    symbol: 'S',
    atomicNumber: 16,
    category: 'Неметаллы',
    explanation: 'Сера (S) — жёлтый порошок, используется в производстве спичек.',
    difficulty: 'medium'
  },
  {
    question: 'Какой химический элемент обозначается символом P?',
    correctAnswer: 'Фосфор',
    options: ['Фосфор', 'Свинец', 'Платина', 'Прометий'],
    symbol: 'P',
    atomicNumber: 15,
    category: 'Неметаллы',
    explanation: 'Фосфор (P) — важен для костей и энергетического обмена.',
    difficulty: 'medium'
  },
  // Сложные элементы
  {
    question: 'Какой химический элемент обозначается символом Hg?',
    correctAnswer: 'Ртуть',
    options: ['Ртуть', 'Водород', 'Гафний', 'Гольмий'],
    symbol: 'Hg',
    atomicNumber: 80,
    category: 'Переходные металлы',
    explanation: 'Ртуть (Hg) — единственный жидкий металл при комнатной температуре, от латинского Hydrargyrum.',
    difficulty: 'hard'
  },
  {
    question: 'Какой химический элемент обозначается символом Pb?',
    correctAnswer: 'Свинец',
    options: ['Свинец', 'Палладий', 'Платина', 'Празеодим'],
    symbol: 'Pb',
    atomicNumber: 82,
    category: 'Тяжёлые металлы',
    explanation: 'Свинец (Pb) — токсичный металл, от латинского Plumbum.',
    difficulty: 'hard'
  },
  {
    question: 'Какой химический элемент обозначается символом Sn?',
    correctAnswer: 'Олово',
    options: ['Олово', 'Свинец', 'Сурьма', 'Стронций'],
    symbol: 'Sn',
    atomicNumber: 50,
    category: 'Лёгкие металлы',
    explanation: 'Олово (Sn) — от латинского Stannum, используется для пайки.',
    difficulty: 'hard'
  },
  {
    question: 'Какой химический элемент обозначается символом Pt?',
    correctAnswer: 'Платина',
    options: ['Платина', 'Свинец', 'Палладий', 'Пlutonium'],
    symbol: 'Pt',
    atomicNumber: 78,
    category: 'Благородные металлы',
    explanation: 'Платина (Pt) — благородный металл, дороже золота.',
    difficulty: 'hard'
  },
  {
    question: 'Какой химический элемент обозначается символом U?',
    correctAnswer: 'Уран',
    options: ['Уран', 'Углерод', 'Уран', 'Унунктий'],
    symbol: 'U',
    atomicNumber: 92,
    category: 'Актиноиды',
    explanation: 'Уран (U) — радиоактивный элемент, используется в ядерной энергетике.',
    difficulty: 'hard'
  },
  {
    question: 'Какой химический элемент обозначается символом K?',
    correctAnswer: 'Калий',
    options: ['Калий', 'Криптон', 'Кальций', 'Кобальт'],
    symbol: 'K',
    atomicNumber: 19,
    category: 'Щелочные металлы',
    explanation: 'Калий (K) — от латинского Kalium, важен для работы сердца.',
    difficulty: 'medium'
  },
  {
    question: 'Какой химический элемент обозначается символом He?',
    correctAnswer: 'Гелий',
    options: ['Гелий', 'Водород', 'Гафний', 'Гольмий'],
    symbol: 'He',
    atomicNumber: 2,
    category: 'Благородные газы',
    explanation: 'Гелий (He) — второй элемент, инертный газ, легче воздуха.',
    difficulty: 'medium'
  },
  {
    question: 'Какой химический элемент обозначается символом Si?',
    correctAnswer: 'Кремний',
    options: ['Кремний', 'Серебро', 'Сера', 'Свинец'],
    symbol: 'Si',
    atomicNumber: 14,
    category: 'Полуметаллы',
    explanation: 'Кремний (Si) — основа компьютерных чипов и электроники.',
    difficulty: 'medium'
  },
  {
    question: 'Какой химический элемент обозначается символом Mg?',
    correctAnswer: 'Магний',
    options: ['Магний', 'Марганец', 'Медь', 'Молибден'],
    symbol: 'Mg',
    atomicNumber: 12,
    category: 'Щёлочноземельные металлы',
    explanation: 'Магний (Mg) — лёгкий металл, горит ярким белым пламенем.',
    difficulty: 'medium'
  }
]

// Настройки уровней сложности
const difficultySettings = {
  easy: {
    name: 'Легко',
    questions: 6,
    timeLimit: 0,
    categories: ['Неметаллы', 'Металлы', 'Благородные металлы'],
    xpReward: 50
  },
  medium: {
    name: 'Средне',
    questions: 10,
    timeLimit: 20,
    categories: ['Неметаллы', 'Металлы', 'Благородные металлы', 'Щелочные металлы', 'Щёлочноземельные металлы', 'Галогены', 'Переходные металлы', 'Лёгкие металлы'],
    xpReward: 100
  },
  hard: {
    name: 'Сложно',
    questions: 15,
    timeLimit: 15,
    categories: ['Тяжёлые металлы', 'Благородные металлы', 'Актиноиды', 'Благородные газы', 'Полуметаллы'],
    xpReward: 150
  }
}

interface ChemistryGameProps {
  onExperience?: (xp: number) => void
  gradeId?: number
}

export default function ChemistryGame({ onExperience, gradeId = 1 }: ChemistryGameProps) {
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
  const [correctAnswers, setCorrectAnswers] = useState<ElementQuestion[]>([])
  const [wrongAnswers, setWrongAnswers] = useState<{ question: ElementQuestion; selected: string }[]>([])
  
  const filteredQuestions = useMemo(() => {
    const settings = difficultySettings[difficulty]
    return elementQuestions.filter(q => settings.categories.includes(q.category))
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
      <Card className="p-6 bg-gradient-to-br from-emerald-900/50 to-teal-900/50 backdrop-blur-lg border-white/20">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            >
              <Atom className="w-16 h-16 text-emerald-300" />
            </motion.div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Периодическая таблица</h2>
          <p className="text-white/70">Изучи химические элементы!</p>
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
          <h3 className="font-bold text-white/90 mb-2">⚗️ Категории элементов:</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-white/70">
            <span>• Неметаллы (H, O, C, N)</span>
            <span>• Щелочные металлы</span>
            <span>• Благородные газы</span>
            <span>• Галогены</span>
            <span>• Переходные металлы</span>
            <span>• Благородные металлы</span>
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
      <Card className="p-6 bg-gradient-to-br from-emerald-900/50 to-teal-900/50 backdrop-blur-lg border-white/20">
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
            <h3 className="font-bold text-white/90 mb-2">🧪 Повтори элементы:</h3>
            <div className="space-y-2">
              {wrongAnswers.slice(0, 3).map((item, i) => (
                <div key={i} className="text-sm">
                  <p className="text-white/80">{item.question.question}</p>
                  <p className="text-green-300 font-bold">{item.question.correctAnswer} ({item.question.symbol})</p>
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
          <Button onClick={() => startGame(difficulty)} className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
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
    <Card className="p-4 sm:p-6 bg-gradient-to-br from-emerald-900/50 to-teal-900/50 backdrop-blur-lg border-white/20">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Atom className="w-5 h-5 text-emerald-300" />
          <span className="font-bold text-white">Периодическая таблица</span>
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
          <motion.div className="h-full bg-gradient-to-r from-emerald-400 to-teal-500" initial={{ width: 0 }} animate={{ width: `${progress}%` }} />
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
          {/* Символ элемента */}
          {currentQ.symbol && (
            <div className="text-center mb-4">
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-xl border-2 border-emerald-400/50"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white">{currentQ.symbol}</div>
                  {currentQ.atomicNumber && (
                    <div className="text-xs text-white/60">{currentQ.atomicNumber}</div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
          
          <div className="text-center mb-4">
            <p className="text-white/70 text-xs mb-1">{currentQ.category}</p>
            <motion.div className="text-lg sm:text-xl font-medium text-white py-3 px-4 bg-white/10 rounded-xl" animate={showResult ? { scale: [1, 1.02, 1] } : {}}>
              {currentQ.question}
            </motion.div>
          </div>
          
          {showHint && !showResult && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 p-3 bg-blue-500/20 rounded-xl text-center">
              <p className="text-blue-200 text-sm">💡 Категория: {currentQ.category}</p>
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
            <p className="text-green-300 text-sm mb-2 font-bold">
              {currentQ.correctAnswer} ({currentQ.symbol}, №{currentQ.atomicNumber})
            </p>
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
