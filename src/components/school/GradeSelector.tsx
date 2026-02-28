'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { GraduationCap, Star, Baby, BookOpen, Calculator, Leaf, Heart, Sparkles, Crown, Rocket, Palette, Globe, Trophy, GraduationCap as GradCap, Wand2 } from 'lucide-react'
import type { Grade } from '@/data/types'

interface GradeSelectorProps {
  grades: Grade[]
  selectedGrade: number
  onSelectGrade: (gradeId: number) => void
}

// Расширенные стили для каждого класса с милыми эмодзи
const gradeStyles: Record<number, { 
  emoji: string; 
  color: string; 
  gradient: string; 
  description: string;
  bgPattern: string;
  toyEmoji: string;
}> = {
  0: { 
    emoji: '🎈', 
    color: 'from-pink-400 via-rose-400 to-purple-400', 
    gradient: 'from-pink-500 via-rose-500 to-purple-500',
    description: 'Подготовишки',
    bgPattern: 'toy-pattern',
    toyEmoji: '🧸'
  },
  1: { 
    emoji: '🌟', 
    color: 'from-yellow-400 via-amber-400 to-orange-400', 
    gradient: 'from-yellow-500 via-amber-500 to-orange-500',
    description: 'Первоклашки',
    bgPattern: 'star-pattern',
    toyEmoji: '⭐'
  },
  2: { 
    emoji: '🌈', 
    color: 'from-blue-400 via-cyan-400 to-teal-400', 
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    description: 'Второклашки',
    bgPattern: 'rainbow-pattern',
    toyEmoji: '🦋'
  },
  3: { 
    emoji: '🚀', 
    color: 'from-green-400 via-emerald-400 to-teal-400', 
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    description: 'Третьеклашки',
    bgPattern: 'rocket-pattern',
    toyEmoji: '🌙'
  },
  4: { 
    emoji: '🎯', 
    color: 'from-purple-400 via-violet-400 to-indigo-400', 
    gradient: 'from-purple-500 via-violet-500 to-indigo-500',
    description: 'Четвероклашки',
    bgPattern: 'target-pattern',
    toyEmoji: '🎪'
  },
  5: { 
    emoji: '📚', 
    color: 'from-red-400 via-rose-400 to-pink-400', 
    gradient: 'from-red-500 via-rose-500 to-pink-500',
    description: 'Пятиклашки',
    bgPattern: 'book-pattern',
    toyEmoji: '📖'
  },
  6: { 
    emoji: '🔬', 
    color: 'from-teal-400 via-cyan-400 to-sky-400', 
    gradient: 'from-teal-500 via-cyan-500 to-sky-500',
    description: 'Шестиклассники',
    bgPattern: 'science-pattern',
    toyEmoji: '🧪'
  },
  7: { 
    emoji: '🎨', 
    color: 'from-orange-400 via-amber-400 to-red-400', 
    gradient: 'from-orange-500 via-amber-500 to-red-500',
    description: 'Семиклассники',
    bgPattern: 'art-pattern',
    toyEmoji: '🖼️'
  },
  8: { 
    emoji: '⚙️', 
    color: 'from-slate-400 via-zinc-400 to-neutral-400', 
    gradient: 'from-slate-500 via-zinc-500 to-neutral-500',
    description: 'Восьмиклассники',
    bgPattern: 'gear-pattern',
    toyEmoji: '🔧'
  },
  9: { 
    emoji: '🏆', 
    color: 'from-amber-400 via-yellow-400 to-orange-400', 
    gradient: 'from-amber-500 via-yellow-500 to-orange-500',
    description: 'Девятиклассники',
    bgPattern: 'trophy-pattern',
    toyEmoji: '🥇'
  },
  10: { 
    emoji: '🎓', 
    color: 'from-indigo-400 via-violet-400 to-purple-400', 
    gradient: 'from-indigo-500 via-violet-500 to-purple-500',
    description: 'Десятиклассники',
    bgPattern: 'grad-pattern',
    toyEmoji: '📜'
  },
  11: { 
    emoji: '👑', 
    color: 'from-rose-400 via-pink-400 to-fuchsia-400', 
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
    description: 'Выпускники',
    bgPattern: 'crown-pattern',
    toyEmoji: '💎'
  }
}

// Иконки для младших классов
const gradeIcons: Record<number, React.ReactNode> = {
  0: <Baby className="w-8 h-8" />,
  1: <Star className="w-8 h-8" />,
  2: <BookOpen className="w-8 h-8" />,
  3: <Rocket className="w-8 h-8" />,
  4: <Leaf className="w-8 h-8" />
}

// Анимации для карточки
const cardVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.08, 
    rotate: [-1, 1, -1, 0],
    transition: { 
      scale: { duration: 0.3 },
      rotate: { duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }
    }
  },
  tap: { scale: 0.95 },
  selected: { 
    scale: 1.05,
    transition: { duration: 0.3 }
  }
}

// Анимация для эмодзи
const emojiVariants = {
  initial: { y: 0, rotate: 0 },
  hover: { 
    y: [-5, 0, -5],
    rotate: [-10, 10, -10, 0],
    transition: { 
      y: { duration: 0.6, repeat: Infinity },
      rotate: { duration: 0.8, repeat: Infinity }
    }
  }
}

// Анимация появления
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  }
}

// Компонент для декоративных звёздочек
const FloatingStars = ({ color }: { color: string }) => (
  <>
    <motion.div
      className="absolute top-2 left-2 text-lg opacity-60"
      animate={{ 
        scale: [1, 1.3, 1],
        rotate: [0, 180, 360]
      }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      ✨
    </motion.div>
    <motion.div
      className="absolute bottom-3 left-4 text-sm opacity-50"
      animate={{ 
        scale: [1, 1.2, 1],
        y: [0, -5, 0]
      }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
    >
      ⭐
    </motion.div>
    <motion.div
      className="absolute top-4 right-4 text-sm opacity-40"
      animate={{ 
        scale: [1, 1.4, 1],
        rotate: [0, -90, 0]
      }}
      transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
    >
      💫
    </motion.div>
  </>
)

// Компонент для спецэффектов подготовишек
const PrepClassDecorations = () => (
  <>
    <motion.div
      className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-3xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Плавающие игрушки */}
      <motion.div
        className="absolute top-2 left-3 text-2xl"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 15, -15, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🧸
      </motion.div>
      <motion.div
        className="absolute top-6 right-4 text-xl"
        animate={{ 
          y: [0, -8, 0],
          x: [0, 5, 0]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
      >
        🎈
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-6 text-lg"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        🍭
      </motion.div>
      <motion.div
        className="absolute bottom-4 right-6 text-xl"
        animate={{ 
          y: [0, -5, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{ duration: 2.8, repeat: Infinity, delay: 0.8 }}
      >
        🎈
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-2 text-base"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        ⭐
      </motion.div>
    </motion.div>
  </>
)

export default function GradeSelector({ 
  grades, 
  selectedGrade, 
  onSelectGrade 
}: GradeSelectorProps) {
  const [showAll, setShowAll] = useState(false)

  // Младшие классы (0-4) - показываем большие карточки
  const youngerGrades = grades.filter(g => g.id <= 4)
  // Старшие классы (5-11) - показываем компактно
  const olderGrades = grades.filter(g => g.id > 4)

  return (
    <div className="mb-6 space-y-6">
      {/* Заголовок с анимацией */}
      <motion.div 
        className="flex items-center gap-3 mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <GraduationCap className="w-7 h-7 text-purple-400" />
        </motion.div>
        <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
          Выбери свой класс!
        </h2>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Sparkles className="w-5 h-5 text-yellow-400" />
        </motion.div>
      </motion.div>

      {/* Младшие классы - большие красивые карточки */}
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {youngerGrades.map((grade, index) => {
          const style = gradeStyles[grade.id] || gradeStyles[0]
          const isSelected = selectedGrade === grade.id
          const isPrepClass = grade.id === 0
          
          return (
            <motion.div
              key={grade.id}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              animate={isSelected ? "selected" : "initial"}
            >
              <Card
                onClick={() => onSelectGrade(grade.id)}
                className={`
                  relative overflow-hidden cursor-pointer transition-all duration-300
                  ${isSelected 
                    ? `bg-gradient-to-br ${style.gradient} ring-4 ring-white/50 shadow-2xl shadow-purple-500/30` 
                    : `bg-gradient-to-br ${style.color} hover:shadow-xl hover:shadow-purple-500/20`
                  }
                  rounded-3xl p-5 sm:p-6 border-0
                `}
              >
                {/* Декоративный фон */}
                <div className="absolute inset-0 bg-white/10 rounded-3xl" />
                
                {/* Спецэффекты для подготовишек */}
                {isPrepClass && <PrepClassDecorations />}
                
                {/* Плавающие звёздочки для всех классов */}
                <FloatingStars color={style.color} />

                {/* Основной эмодзи с анимацией */}
                <motion.div 
                  className="text-5xl sm:text-6xl mb-3 text-center relative z-10"
                  variants={emojiVariants}
                >
                  {style.emoji}
                </motion.div>

                {/* Игрушечный эмодзи */}
                <motion.div
                  className="absolute top-3 right-3 text-2xl opacity-70"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {style.toyEmoji}
                </motion.div>

                {/* Название класса */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-white text-center mb-1 drop-shadow-lg relative z-10">
                  {grade.shortName}
                </h3>

                {/* Описание */}
                <p className="text-sm sm:text-base text-white/90 text-center font-medium relative z-10">
                  {style.description}
                </p>

                {/* Галочка выбора с анимацией */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div 
                      className="absolute bottom-3 right-3 bg-white rounded-full p-1.5 shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ type: 'spring', stiffness: 500 }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Glow эффект для выбранной карточки */}
                {isSelected && (
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(255,255,255,0.3)',
                        '0 0 40px rgba(255,255,255,0.5)',
                        '0 0 20px rgba(255,255,255,0.3)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Старшие классы - компактные кнопки */}
      <motion.div 
        className="space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          onClick={() => setShowAll(!showAll)}
          className="text-purple-300 hover:text-purple-200 text-sm flex items-center gap-2 transition-colors group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span
            animate={{ rotate: showAll ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ▼
          </motion.span>
          {showAll ? 'Скрыть старшие классы' : 'Показать старшие классы (5-11)'}
          <Sparkles className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
        </motion.button>

        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex gap-3 pb-2">
                  {olderGrades.map((grade, index) => {
                    const style = gradeStyles[grade.id] || gradeStyles[5]
                    const isSelected = selectedGrade === grade.id
                    
                    return (
                      <motion.div
                        key={grade.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          onClick={() => onSelectGrade(grade.id)}
                          className={`
                            flex-shrink-0 rounded-2xl px-6 py-5 transition-all relative overflow-hidden
                            ${isSelected 
                              ? `bg-gradient-to-r ${style.gradient} ring-2 ring-white/30 shadow-lg` 
                              : `bg-gradient-to-r ${style.color} hover:shadow-md`
                            }
                          `}
                        >
                          {/* Shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                          />
                          
                          <span className="text-xl mr-2 relative z-10">{style.emoji}</span>
                          <span className="font-bold text-white text-lg relative z-10">{grade.shortName}</span>
                          
                          {isSelected && (
                            <motion.div
                              className="absolute -top-1 -right-1"
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            >
                              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                            </motion.div>
                          )}
                        </Button>
                      </motion.div>
                    )
                  })}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Звуковые эффекты - комментарий для разработчиков */}
      {/*
        🎵 ЗВУКОВЫЕ ЭФФЕКТЫ (для будущей реализации):
        - При наведении: мягкий "pop" или "ding" звук
        - При выборе: радостный "ta-da" или "fanfare" звук
        - Для подготовишек: звук колокольчика или смех
        - Для правильного ответа: звук победы
        - Библиотеки: use-sound, howler.js
        
        Пример:
        const [playHover] = useSound('/sounds/pop.mp3', { volume: 0.3 });
        const [playSelect] = useSound('/sounds/select.mp3', { volume: 0.5 });
        onHoverStart={() => playHover()}
        onClick={() => { playSelect(); onSelectGrade(grade.id); }}
      */}
    </div>
  )
}
