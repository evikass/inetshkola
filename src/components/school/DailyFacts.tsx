'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Lightbulb, ChevronLeft, ChevronRight, RotateCCard, 
  Brain, Atom, Landmark, Globe, BookOpen, Leaf,
  Sparkles, Star, ThumbsUp
} from 'lucide-react'

interface DailyFactsProps {
  gradeId?: number
  onScore?: (points: number) => void
}

// Интересные факты по категориям
const facts = {
  science: [
    {
      question: 'Почему небо голубое?',
      answer: 'Солнечный свет состоит из всех цветов радуги. Когда свет проходит через атмосферу Земли, синий цвет рассеивается сильнее всего — именно поэтому мы видим небо голубым!',
      category: 'Физика',
      icon: Atom
    },
    {
      question: 'Сколько костей в теле человека?',
      answer: 'У взрослого человека 206 костей. При рождении их около 270, но многие срастаются по мере взросления. Самая маленькая кость — стремячко в ухе (всего 3 мм)!',
      category: 'Биология',
      icon: Leaf
    },
    {
      question: 'Почему вода в море солёная?',
      answer: 'Реки вымывают минералы из горных пород и несут их в океан. Вода испаряется, а соль остаётся. Этот процесс длится миллиарды лет!',
      category: 'География',
      icon: Globe
    },
    {
      question: 'Как работает молния?',
      answer: 'Внутри грозовой тучи капли воды и льда трутся друг о друга, создавая электрический заряд. Когда разница зарядов становится слишком большой, происходит разряд — молния!',
      category: 'Физика',
      icon: Atom
    },
    {
      question: 'Почему листья меняют цвет осенью?',
      answer: 'Зелёный цвет листьям придаёт хлорофилл. Осенью деревья перестают его производить, и становятся видны другие пигменты — жёлтые и красные!',
      category: 'Биология',
      icon: Leaf
    },
    {
      question: 'Что такое чёрная дыра?',
      answer: 'Это область космоса с такой сильной гравитацией, что даже свет не может из неё вырваться. Образуется при гибели массивных звёзд!',
      category: 'Астрономия',
      icon: Sparkles
    }
  ],
  history: [
    {
      question: 'Кто придумал алфавит?',
      answer: 'Современный алфавит создали финикийцы около 3000 лет назад. Греки добавили гласные, а римляне доработали его до современного вида!',
      category: 'Древний мир',
      icon: Landmark
    },
    {
      question: 'Сколько лет пирамидам?',
      answer: 'Пирамиды Гизы построены около 4500 лет назад! Они старше Титаника на 4000 лет и являются единственным сохранившимся чудом света.',
      category: 'Древний мир',
      icon: Landmark
    },
    {
      question: 'Кто первым полетел в космос?',
      answer: 'Юрий Гагарин — 12 апреля 1961 года. Его полёт длился всего 108 минут, но навсегда изменил историю человечества!',
      category: 'История России',
      icon: Globe
    },
    {
      question: 'Когда появилась первая книга?',
      answer: 'Первые книги появились в Древнем Египте около 5000 лет назад. Они делались из папируса! Печатные книги появились в XV веке.',
      category: 'Культура',
      icon: BookOpen
    },
    {
      question: 'Кто написал "Войну и мир"?',
      answer: 'Лев Николаевич Толстой! Роман писался 6 лет (1863-1869). В нём более 500 персонажей и он считается одним из величайших произведений мировой литературы.',
      category: 'Литература',
      icon: BookOpen
    }
  ],
  nature: [
    {
      question: 'Какое животное самое быстрое?',
      answer: 'Гепард! Он может развивать скорость до 120 км/ч, но только на короткие дистанции. В воде быстрее всех — парусник (110 км/ч)!',
      category: 'Животные',
      icon: Leaf
    },
    {
      question: 'Сколько видов животных на Земле?',
      answer: 'Учёные описали около 1.5 миллионов видов животных, но считают, что их может быть до 8 миллионов! Большинство — насекомые.',
      category: 'Биология',
      icon: Leaf
    },
    {
      question: 'Какое дерево самое высокое?',
      answer: 'Секвойя! Самое высокое дерево в мире — Гиперион (115 метров). Это выше Статуи Свободы! Растёт в Калифорнии, США.',
      category: 'Природа',
      icon: Leaf
    },
    {
      question: 'Почему пингвины не летают?',
      answer: 'Пингвины эволюционировали для плавания. Их крылья превратились в ласты, а кости стали плотнее, чтобы легче нырять. Зато они отлично плавают!',
      category: 'Животные',
      icon: Leaf
    },
    {
      question: 'Сколько океанов на Земле?',
      answer: 'Пять: Тихий, Атлантический, Индийский, Южный и Северный Ледовитый. Тихий — самый большой, он больше всей суши вместе взятой!',
      category: 'География',
      icon: Globe
    }
  ],
  math: [
    {
      question: 'Что такое число π?',
      answer: 'π (пи) — это отношение длины окружности к её диаметру. Оно примерно равно 3.14... и продолжается бесконечно без повторений!',
      category: 'Математика',
      icon: Brain
    },
    {
      question: 'Кто придумал ноль?',
      answer: 'Концепцию нуля придумали индийские математики около V века. До этого в Европе использовалась римская система без нуля!',
      category: 'Математика',
      icon: Brain
    },
    {
      question: 'Какое самое большое число?',
      answer: 'Гугол — это 1 со 100 нулями! Название придумал 9-летний мальчик. Есть ещё гуголплекс — 1 с гуглом нулей!',
      category: 'Математика',
      icon: Brain
    },
    {
      question: 'Почему нельзя делить на ноль?',
      answer: 'Деление — это обратная операция умножению. Но какое число ни умножай на 0, всё равно получится 0! Поэтому деление на 0 не имеет смысла.',
      category: 'Математика',
      icon: Brain
    },
    {
      question: 'Сколько граней у куба?',
      answer: 'У куба 6 граней, 12 рёбер и 8 вершин. Это один из пяти правильных многогранников, известных с древней Греции!',
      category: 'Геометрия',
      icon: Brain
    }
  ]
}

// Все факты в одном массиве
const allFacts = [...facts.science, ...facts.history, ...facts.nature, ...facts.math]

// Перемешивание
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Получить индекс факта дня
const getFactOfDayIndex = () => {
  const today = new Date()
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)
  return dayOfYear % allFacts.length
}

export default function DailyFacts({ onScore }: DailyFactsProps) {
  const [shuffledFacts, setShuffledFacts] = useState(() => shuffleArray(allFacts))
  const [currentIndex, setCurrentIndex] = useState(getFactOfDayIndex)
  const [isFlipped, setIsFlipped] = useState(false)
  const [learnedCount, setLearnedCount] = useState(0)
  const [likedFacts, setLikedFacts] = useState<Set<number>>(new Set())

  const currentFact = shuffledFacts[currentIndex]
  const IconComponent = currentFact?.icon || Lightbulb

  // Следующий факт
  const nextFact = () => {
    setIsFlipped(false)
    setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % shuffledFacts.length)
    }, 150)
  }

  // Предыдущий факт
  const prevFact = () => {
    setIsFlipped(false)
    setTimeout(() => {
      setCurrentIndex(prev => (prev - 1 + shuffledFacts.length) % shuffledFacts.length)
    }, 150)
  }

  // Переворот карточки
  const flipCard = () => {
    setIsFlipped(!isFlipped)
    if (!isFlipped) {
      setLearnedCount(prev => prev + 1)
      onScore?.(2)
    }
  }

  // Лайк факта
  const toggleLike = () => {
    setLikedFacts(prev => {
      const newSet = new Set(prev)
      if (newSet.has(currentIndex)) {
        newSet.delete(currentIndex)
      } else {
        newSet.add(currentIndex)
        onScore?.(1)
      }
      return newSet
    })
  }

  // Перемешать заново
  const reshuffle = () => {
    setShuffledFacts(shuffleArray(allFacts))
    setCurrentIndex(0)
    setIsFlipped(false)
  }

  return (
    <Card className="bg-white/5 border-white/10 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-400" />
            Факт дня
          </div>
          <div className="flex items-center gap-2 text-sm font-normal text-gray-400">
            <Brain className="w-4 h-4" />
            <span>Изучено: {learnedCount}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Карточка с фактом */}
        <div 
          className="relative h-48 cursor-pointer perspective-1000"
          onClick={flipCard}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentIndex}-${isFlipped}`}
              initial={{ rotateY: isFlipped ? -90 : 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: isFlipped ? 90 : -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`absolute inset-0 rounded-xl p-4 flex flex-col justify-center items-center text-center ${
                isFlipped 
                  ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30' 
                  : 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${
                isFlipped ? 'bg-green-500/20' : 'bg-purple-500/20'
              }`}>
                <IconComponent className={`w-5 h-5 ${isFlipped ? 'text-green-400' : 'text-purple-400'}`} />
              </div>
              
              {!isFlipped ? (
                <>
                  <div className="text-xs text-purple-300 mb-2">{currentFact?.category}</div>
                  <h3 className="text-lg font-bold">{currentFact?.question}</h3>
                  <p className="text-sm text-gray-400 mt-2">Нажми, чтобы узнать ответ!</p>
                </>
              ) : (
                <>
                  <p className="text-sm leading-relaxed">{currentFact?.answer}</p>
                  <p className="text-xs text-green-300 mt-3">✓ Факт изучен!</p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Навигация */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevFact}
            className="gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            Назад
          </Button>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLike}
              className={likedFacts.has(currentIndex) ? 'text-red-400' : ''}
            >
              <ThumbsUp className={`w-4 h-4 ${likedFacts.has(currentIndex) ? 'fill-current' : ''}`} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={reshuffle}
            >
              <RotateCCard className="w-4 h-4" />
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={nextFact}
            className="gap-1"
          >
            Далее
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Прогресс */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / shuffledFacts.length) * 100}%` }}
            />
          </div>
          <span className="text-xs text-gray-400">
            {currentIndex + 1}/{shuffledFacts.length}
          </span>
        </div>

        {/* Награды */}
        {learnedCount >= 5 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 p-2 bg-yellow-500/10 rounded-lg border border-yellow-500/20"
          >
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-yellow-400">
              Изучено {learnedCount} фактов! +{Math.floor(learnedCount / 5) * 10} XP
            </span>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}
