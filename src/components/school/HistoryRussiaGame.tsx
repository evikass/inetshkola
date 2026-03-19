'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Landmark, Crown, Sword, Castle, Scroll, Star,
  Trophy, Zap, CheckCircle, XCircle, RotateCcw
} from 'lucide-react'

interface HistoryRussiaGameProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

type Category = 'ancient' | 'medieval' | 'romanov' | 'revolution' | 'soviet' | 'modern'

interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: Category
  points: number
}

const questions: Question[] = [
  // Древняя Русь (ancient)
  {
    id: 'hr-a1',
    question: 'Когда произошло крещение Руси?',
    options: ['862 год', '988 год', '1147 год', '1240 год'],
    correctAnswer: 1,
    explanation: 'Крещение Руси произошло в 988 году при князе Владимире Святославиче.',
    difficulty: 'easy',
    category: 'ancient',
    points: 10
  },
  {
    id: 'hr-a2',
    question: 'Кто призвал варягов на Русь?',
    options: ['Рюрик', 'Олег', 'Славяне и чудь', 'Владимир'],
    correctAnswer: 2,
    explanation: 'Согласно "Повести временных лет", славяне и чудь призвали варягов в 862 году.',
    difficulty: 'medium',
    category: 'ancient',
    points: 15
  },
  {
    id: 'hr-a3',
    question: 'Какой город был столицей Древней Руси?',
    options: ['Москва', 'Киев', 'Новгород', 'Владимир'],
    correctAnswer: 1,
    explanation: 'Киев был столицей Древнерусского государства с IX века.',
    difficulty: 'easy',
    category: 'ancient',
    points: 10
  },
  {
    id: 'hr-a4',
    question: 'Как называлось народное собрание в Новгороде?',
    options: ['Дума', 'Вече', 'Сход', 'Совет'],
    correctAnswer: 1,
    explanation: 'Вече — народное собрание в Новгородской республике для решения важных вопросов.',
    difficulty: 'easy',
    category: 'ancient',
    points: 10
  },
  {
    id: 'hr-a5',
    question: 'Кто написал "Повесть временных лет"?',
    options: ['Нестор', 'Илларион', 'Сильвестр', 'Кирилл'],
    correctAnswer: 0,
    explanation: 'Монах Нестор написал "Повесть временных лет" в начале XII века.',
    difficulty: 'medium',
    category: 'ancient',
    points: 15
  },
  {
    id: 'hr-a6',
    question: 'Как назывался торговый путь "из варяг в греки"?',
    options: ['Волжский', 'Днепровский', 'Северный', 'Соляной'],
    correctAnswer: 1,
    explanation: 'Путь шёл по Днепру, соединяя Балтийское и Чёрное моря.',
    difficulty: 'medium',
    category: 'ancient',
    points: 15
  },
  
  // Раздробленность и монголы (medieval)
  {
    id: 'hr-m1',
    question: 'В каком году произошла битва на Калке?',
    options: ['1223 год', '1240 год', '1380 год', '1480 год'],
    correctAnswer: 0,
    explanation: 'Битва на Калке (1223) — первое столкновение русских с монголами.',
    difficulty: 'medium',
    category: 'medieval',
    points: 15
  },
  {
    id: 'hr-m2',
    question: 'Кто победил на Куликовом поле?',
    options: ['Иван Калита', 'Дмитрий Донской', 'Иван III', 'Александр Невский'],
    correctAnswer: 1,
    explanation: 'Дмитрий Донской победил Мамая на Куликовом поле в 1380 году.',
    difficulty: 'easy',
    category: 'medieval',
    points: 10
  },
  {
    id: 'hr-m3',
    question: 'Сколько длилось монголо-татарское иго?',
    options: ['100 лет', '150 лет', '240 лет', '300 лет'],
    correctAnswer: 2,
    explanation: 'Иго длилось с 1240 по 1480 год — около 240 лет.',
    difficulty: 'medium',
    category: 'medieval',
    points: 15
  },
  {
    id: 'hr-m4',
    question: 'Какой город называли "мать городов русских"?',
    options: ['Москву', 'Киев', 'Новгород', 'Владимир'],
    correctAnswer: 1,
    explanation: 'Киев называли "мать городов русских" из-за его значения как столицы.',
    difficulty: 'easy',
    category: 'medieval',
    points: 10
  },
  {
    id: 'hr-m5',
    question: 'Кто победил шведов на Неве?',
    options: ['Дмитрий Донской', 'Александр Невский', 'Иван III', 'Пётр I'],
    correctAnswer: 1,
    explanation: 'Александр Невский разгромил шведов в Невской битве 1240 года.',
    difficulty: 'easy',
    category: 'medieval',
    points: 10
  },
  {
    id: 'hr-m6',
    question: 'В каком году пала Византия?',
    options: ['1240', '1453', '1478', '1492'],
    correctAnswer: 1,
    explanation: 'Константинополь пал в 1453 году под натиском турок-османов.',
    difficulty: 'hard',
    category: 'medieval',
    points: 20
  },
  
  // Романовы (romanov)
  {
    id: 'hr-r1',
    question: 'Кто был первым царём из династии Романовых?',
    options: ['Алексей Михайлович', 'Михаил Фёдорович', 'Пётр I', 'Иван IV'],
    correctAnswer: 1,
    explanation: 'Михаил Фёдорович был избран царём в 1613 году.',
    difficulty: 'easy',
    category: 'romanov',
    points: 10
  },
  {
    id: 'hr-r2',
    question: 'В каком году Пётр I провозгласил Россию империей?',
    options: ['1703', '1721', '1725', '1730'],
    correctAnswer: 1,
    explanation: 'В 1721 году после Северной войны Пётр I принял титул императора.',
    difficulty: 'medium',
    category: 'romanov',
    points: 15
  },
  {
    id: 'hr-r3',
    question: 'Какая война называлась "Отечественной войной 1812 года"?',
    options: ['С Турцией', 'С Францией', 'С Швецией', 'С Пруссией'],
    correctAnswer: 1,
    explanation: 'Отечественная война 1812 года — война России с наполеоновской Францией.',
    difficulty: 'easy',
    category: 'romanov',
    points: 10
  },
  {
    id: 'hr-r4',
    question: 'Кто командовал русской армией в Бородинской битве?',
    options: ['А.В. Суворов', 'М.И. Кутузов', 'П.А. Румянцев', 'Г.А. Потёмкин'],
    correctAnswer: 1,
    explanation: 'Михаил Илларионович Кутузов командовал армией в Бородинском сражении.',
    difficulty: 'easy',
    category: 'romanov',
    points: 10
  },
  {
    id: 'hr-r5',
    question: 'Когда было отменено крепостное право?',
    options: ['1855 год', '1861 год', '1881 год', '1905 год'],
    correctAnswer: 1,
    explanation: 'Крепостное право отменено Александром II в 1861 году.',
    difficulty: 'easy',
    category: 'romanov',
    points: 10
  },
  {
    id: 'hr-r6',
    question: 'Как называлась война 1853-1856 годов?',
    options: ['Северная', 'Крымская', 'Отечественная', 'Семилетняя'],
    correctAnswer: 1,
    explanation: 'Крымская война (1853-1856) — война России с коалицией европейских держав.',
    difficulty: 'medium',
    category: 'romanov',
    points: 15
  },
  
  // Революция (revolution)
  {
    id: 'hr-rev1',
    question: 'В каком году произошла Февральская революция?',
    options: ['1905', '1917', '1918', '1921'],
    correctAnswer: 1,
    explanation: 'Февральская революция произошла в феврале 1917 года.',
    difficulty: 'easy',
    category: 'revolution',
    points: 10
  },
  {
    id: 'hr-rev2',
    question: 'Кто возглавил Октябрьскую революцию?',
    options: ['Керенский', 'Ленин', 'Троцкий', 'Сталин'],
    correctAnswer: 1,
    explanation: 'Владимир Ленин возглавил Октябрьскую революцию 1917 года.',
    difficulty: 'easy',
    category: 'revolution',
    points: 10
  },
  {
    id: 'hr-rev3',
    question: 'Как называлось правительство после Февральской революции?',
    options: ['Совнарком', 'Временное правительство', 'Совет министров', 'Госдума'],
    correctAnswer: 1,
    explanation: 'Временное правительство управляло страной после свержения монархии.',
    difficulty: 'medium',
    category: 'revolution',
    points: 15
  },
  {
    id: 'hr-rev4',
    question: 'Когда отрёкся Николай II?',
    options: ['Февраль 1917', 'Октябрь 1917', 'Март 1918', 'Ноябрь 1918'],
    correctAnswer: 0,
    explanation: 'Николай II отрёкся от престола 2 марта 1917 года.',
    difficulty: 'medium',
    category: 'revolution',
    points: 15
  },
  
  // Советский период (soviet)
  {
    id: 'hr-s1',
    question: 'Когда началась Великая Отечественная война?',
    options: ['22 июня 1940', '22 июня 1941', '1 сентября 1939', '7 ноября 1941'],
    correctAnswer: 1,
    explanation: '22 июня 1941 года Германия напала на СССР.',
    difficulty: 'easy',
    category: 'soviet',
    points: 10
  },
  {
    id: 'hr-s2',
    question: 'Когда закончилась Великая Отечественная война?',
    options: ['8 мая 1945', '9 мая 1945', '2 сентября 1945', '1 января 1946'],
    correctAnswer: 1,
    explanation: 'День Победы — 9 мая 1945 года (капитуляция Германии).',
    difficulty: 'easy',
    category: 'soviet',
    points: 10
  },
  {
    id: 'hr-s3',
    question: 'Кто первым полетел в космос?',
    options: ['Гагарин', 'Титов', 'Терешкова', 'Леонов'],
    correctAnswer: 0,
    explanation: 'Юрий Гагарин совершил первый полёт в космос 12 апреля 1961 года.',
    difficulty: 'easy',
    category: 'soviet',
    points: 10
  },
  {
    id: 'hr-s4',
    question: 'В каком году распался СССР?',
    options: ['1989', '1990', '1991', '1992'],
    correctAnswer: 2,
    explanation: 'СССР официально распался 26 декабря 1991 года.',
    difficulty: 'easy',
    category: 'soviet',
    points: 10
  },
  {
    id: 'hr-s5',
    question: 'Какой город выдержал 872-дневную блокаду?',
    options: ['Москву', 'Ленинград', 'Сталинград', 'Севастополь'],
    correctAnswer: 1,
    explanation: 'Блокада Ленинграда длилась 872 дня (1941-1944).',
    difficulty: 'easy',
    category: 'soviet',
    points: 10
  },
  {
    id: 'hr-s6',
    question: 'Какая битва стала переломной в Великой Отечественной войне?',
    options: ['Московская', 'Сталинградская', 'Курская', 'Берлинская'],
    correctAnswer: 2,
    explanation: 'Курская битва (1943) стала коренным переломом в войне.',
    difficulty: 'medium',
    category: 'soviet',
    points: 15
  },
  
  // Современная Россия (modern)
  {
    id: 'hr-mod1',
    question: 'Когда была принята Конституция РФ?',
    options: ['1991', '1993', '1996', '2000'],
    correctAnswer: 1,
    explanation: 'Конституция Российской Федерации принята 12 декабря 1993 года.',
    difficulty: 'medium',
    category: 'modern',
    points: 15
  },
  {
    id: 'hr-mod2',
    question: 'Кто был первым президентом России?',
    options: ['Путин', 'Ельцин', 'Медведев', 'Горбачёв'],
    correctAnswer: 1,
    explanation: 'Борис Ельцин — первый президент Российской Федерации (1991-1999).',
    difficulty: 'easy',
    category: 'modern',
    points: 10
  },
  {
    id: 'hr-mod3',
    question: 'В каком году прошли первые Олимпийские игры в России?',
    options: ['1980', '2000', '2014', '2018'],
    correctAnswer: 2,
    explanation: 'Зимние Олимпийские игры 2014 года прошли в Сочи.',
    difficulty: 'easy',
    category: 'modern',
    points: 10
  },
  {
    id: 'hr-mod4',
    question: 'Сколько субъектов в Российской Федерации?',
    options: ['83', '85', '89', '92'],
    correctAnswer: 2,
    explanation: 'В состав РФ входит 89 субъектов (по состоянию на 2024 год).',
    difficulty: 'hard',
    category: 'modern',
    points: 20
  }
]

const categories: { id: Category; name: string; icon: React.ElementType; color: string }[] = [
  { id: 'ancient', name: 'Древняя Русь', icon: Crown, color: 'from-amber-400 to-yellow-500' },
  { id: 'medieval', name: 'Раздробленность', icon: Castle, color: 'from-stone-400 to-gray-500' },
  { id: 'romanov', name: 'Романовы', icon: Landmark, color: 'from-red-400 to-rose-500' },
  { id: 'revolution', name: 'Революция', icon: Star, color: 'from-red-500 to-orange-500' },
  { id: 'soviet', name: 'СССР', icon: Scroll, color: 'from-red-600 to-red-700' },
  { id: 'modern', name: 'Современность', icon: Landmark, color: 'from-blue-400 to-indigo-500' }
]

export default function HistoryRussiaGame({ gradeId = 0, onExperience }: HistoryRussiaGameProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [gameEnded, setGameEnded] = useState(false)
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy')
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [gameStarted, setGameStarted] = useState(false)
  
  const filteredQuestions = questions.filter(q => {
    if (selectedCategory && q.category !== selectedCategory) return false
    if (difficulty === 'easy') return q.difficulty === 'easy'
    if (difficulty === 'medium') return q.difficulty === 'easy' || q.difficulty === 'medium'
    return true
  })
  
  const currentQ = filteredQuestions[currentQuestion]
  
  const handleAnswer = useCallback((answerIndex: number) => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(answerIndex)
    setShowResult(true)
    if (answerIndex === currentQ.correctAnswer) {
      setScore(prev => prev + currentQ.points)
    }
  }, [selectedAnswer, currentQ])
  
  const nextQuestion = useCallback(() => {
    if (currentQuestion + 1 >= filteredQuestions.length) {
      setGameEnded(true)
      onExperience?.(score + Math.floor(score * 0.1))
    } else {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }, [currentQuestion, filteredQuestions.length, score, onExperience])
  
  const restartGame = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setGameEnded(false)
    setGameStarted(false)
    setSelectedCategory(null)
  }
  
  if (!gameStarted) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
            <Landmark className="w-8 h-8 text-amber-400" />
            История России
          </h2>
          <p className="text-gray-400">От Древней Руси до наших дней!</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedCategory === cat.id
                  ? 'border-amber-400 bg-amber-400/20'
                  : 'border-white/20 bg-white/5 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <cat.icon className={`w-8 h-8 mx-auto mb-2 bg-gradient-to-r ${cat.color} bg-clip-text`} />
              <span className="text-sm text-white">{cat.name}</span>
            </motion.button>
          ))}
        </div>
        
        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-4 flex gap-3">
            {[
              { id: 'easy', name: 'Лёгкий' },
              { id: 'medium', name: 'Средний' },
              { id: 'hard', name: 'Сложный' }
            ].map((d) => (
              <motion.button
                key={d.id}
                onClick={() => setDifficulty(d.id as typeof difficulty)}
                className={`flex-1 p-3 rounded-lg border-2 transition-all ${
                  difficulty === d.id
                    ? 'border-amber-400 bg-amber-400/20'
                    : 'border-white/20 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-white font-medium">{d.name}</div>
              </motion.button>
            ))}
          </CardContent>
        </Card>
        
        <Button
          onClick={() => setGameStarted(true)}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white py-6 text-lg"
        >
          Начать игру!
        </Button>
      </div>
    )
  }
  
  if (gameEnded) {
    const percentage = Math.round((score / filteredQuestions.reduce((a, b) => a + b.points, 0)) * 100)
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6"
      >
        <Trophy className={`w-20 h-20 mx-auto ${percentage >= 70 ? 'text-yellow-400' : 'text-gray-400'}`} />
        <h2 className="text-3xl font-bold text-white">
          {percentage >= 70 ? 'Отлично!' : percentage >= 50 ? 'Хорошо!' : 'Попробуй ещё!'}
        </h2>
        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-6 space-y-4">
            <div className="text-4xl font-bold text-amber-400">{score} очков</div>
            <div className="flex justify-center gap-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400">+{Math.floor(score * 1.1)} XP</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Button onClick={restartGame} className="bg-gradient-to-r from-amber-500 to-orange-600">
          <RotateCcw className="w-4 h-4 mr-2" />Играть снова
        </Button>
      </motion.div>
    )
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-amber-400 font-bold">{score} очков</span>
        <span className="text-gray-400">{currentQuestion + 1} / {filteredQuestions.length}</span>
      </div>
      
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-400 to-orange-500"
          animate={{ width: `${((currentQuestion + 1) / filteredQuestions.length) * 100}%` }}
        />
      </div>
      
      <AnimatePresence mode="wait">
        {currentQ && (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">{currentQ.question}</h3>
                <div className="grid gap-3">
                  {currentQ.options.map((option, index) => {
                    const isSelected = selectedAnswer === index
                    const isCorrect = index === currentQ.correctAnswer
                    const showCorrect = showResult && isCorrect
                    const showWrong = showResult && isSelected && !isCorrect
                    
                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={selectedAnswer !== null}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          showCorrect ? 'border-green-400 bg-green-400/20' :
                          showWrong ? 'border-red-400 bg-red-400/20' :
                          'border-white/20 bg-white/5 hover:bg-white/10'
                        }`}
                        whileHover={!selectedAnswer ? { scale: 1.01 } : {}}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-gray-400">{String.fromCharCode(65 + index)}.</span>
                          <span className="text-white">{option}</span>
                          {showCorrect && <CheckCircle className="w-5 h-5 text-green-400 ml-auto" />}
                          {showWrong && <XCircle className="w-5 h-5 text-red-400 ml-auto" />}
                        </div>
                      </motion.button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
            
            {showResult && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4">
                <Card className={`${selectedAnswer === currentQ.correctAnswer ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'} border`}>
                  <CardContent className="p-4">
                    <p className="text-gray-300">{currentQ.explanation}</p>
                  </CardContent>
                </Card>
                <Button onClick={nextQuestion} className="w-full mt-4 bg-gradient-to-r from-amber-500 to-orange-600">
                  {currentQuestion + 1 >= filteredQuestions.length ? 'Результаты' : 'Следующий вопрос'}
                </Button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
