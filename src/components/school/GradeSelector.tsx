'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { GraduationCap, Sparkles, Star, ArrowLeft } from 'lucide-react'
import type { Grade } from '@/data/types'

interface GradeSelectorProps {
  grades: Grade[]
  selectedGrade: number | null
  onSelectGrade: (gradeId: number) => void
  onBack?: () => void
  showBackButton?: boolean
}

// Расширенные стили для каждого класса с милыми эмодзи
const gradeStyles: Record<number, { 
  emoji: string; 
  color: string; 
  gradient: string; 
  description: string;
  toyEmoji: string;
}> = {
  0: { 
    emoji: '🎈', 
    color: 'from-pink-400 via-rose-400 to-purple-400', 
    gradient: 'from-pink-500 via-rose-500 to-purple-500',
    description: 'Подготовишки',
    toyEmoji: '🧸'
  },
  1: { 
    emoji: '🌟', 
    color: 'from-yellow-400 via-amber-400 to-orange-400', 
    gradient: 'from-yellow-500 via-amber-500 to-orange-500',
    description: 'Первоклашки',
    toyEmoji: '⭐'
  },
  2: { 
    emoji: '🌻', 
    color: 'from-blue-400 via-cyan-400 to-teal-400', 
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    description: 'Второклашки',
    toyEmoji: '🐝'
  },
  3: { 
    emoji: '🚀', 
    color: 'from-green-400 via-emerald-400 to-teal-400', 
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    description: 'Третьеклашки',
    toyEmoji: '🌙'
  },
  4: { 
    emoji: '🎯', 
    color: 'from-purple-400 via-violet-400 to-indigo-400', 
    gradient: 'from-purple-500 via-violet-500 to-indigo-500',
    description: 'Четвероклашки',
    toyEmoji: '🎪'
  },
  5: { 
    emoji: '📚', 
    color: 'from-red-400 via-rose-400 to-pink-400', 
    gradient: 'from-red-500 via-rose-500 to-pink-500',
    description: 'Пятиклашки',
    toyEmoji: '📖'
  },
  6: { 
    emoji: '🔬', 
    color: 'from-teal-400 via-cyan-400 to-sky-400', 
    gradient: 'from-teal-500 via-cyan-500 to-sky-500',
    description: 'Шестиклассники',
    toyEmoji: '🧪'
  },
  7: { 
    emoji: '🎨', 
    color: 'from-orange-400 via-amber-400 to-red-400', 
    gradient: 'from-orange-500 via-amber-500 to-red-500',
    description: 'Семиклассники',
    toyEmoji: '🖼️'
  },
  8: { 
    emoji: '⚙️', 
    color: 'from-slate-400 via-zinc-400 to-neutral-400', 
    gradient: 'from-slate-500 via-zinc-500 to-neutral-500',
    description: 'Восьмиклассники',
    toyEmoji: '🔧'
  },
  9: { 
    emoji: '🏆', 
    color: 'from-amber-400 via-yellow-400 to-orange-400', 
    gradient: 'from-amber-500 via-yellow-500 to-orange-500',
    description: 'Девятиклассники',
    toyEmoji: '🥇'
  },
  10: { 
    emoji: '🎓', 
    color: 'from-indigo-400 via-violet-400 to-purple-400', 
    gradient: 'from-indigo-500 via-violet-500 to-purple-500',
    description: 'Десятиклассники',
    toyEmoji: '📜'
  },
  11: { 
    emoji: '👑', 
    color: 'from-rose-400 via-pink-400 to-fuchsia-400', 
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
    description: 'Выпускники',
    toyEmoji: '💎'
  }
}

// Анимация появления
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
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

export default function GradeSelector({ 
  grades, 
  selectedGrade, 
  onSelectGrade,
  onBack,
  showBackButton = false
}: GradeSelectorProps) {
  // Если выбран класс и нужна кнопка назад - показываем только выбранный класс
  if (showBackButton && selectedGrade !== null) {
    const grade = grades.find(g => g.id === selectedGrade)
    const style = gradeStyles[selectedGrade] || gradeStyles[0]
    
    return (
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Кнопка Назад */}
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 mb-4 px-4 py-2 rounded-xl
            bg-white/10 hover:bg-white/20 text-white transition-all
            border border-white/20"
          whileHover={{ scale: 1.02, x: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Все классы</span>
        </motion.button>
        
        {/* Выбранный класс - большая карточка */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card
            className={`
              relative overflow-hidden cursor-pointer transition-all duration-300
              bg-gradient-to-br ${style.gradient} 
              ring-4 ring-white/30 shadow-2xl shadow-purple-500/30
              rounded-3xl p-6 sm:p-8 border-0
            `}
          >
            {/* Декоративный фон */}
            <div className="absolute inset-0 bg-white/10 rounded-3xl" />
            
            {/* Плавающие звёздочки */}
            <FloatingStars color={style.color} />

            {/* Основной эмодзи с анимацией */}
            <motion.div 
              className="text-6xl sm:text-7xl mb-4 text-center relative z-10"
              animate={{ 
                y: [-5, 0, -5],
                rotate: [-5, 5, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {style.emoji}
            </motion.div>

            {/* Игрушечный эмодзи */}
            <motion.div
              className="absolute top-4 right-4 text-3xl opacity-70"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 15, -15, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {style.toyEmoji}
            </motion.div>

            {/* Название класса */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-2 drop-shadow-lg relative z-10">
              {grade?.shortName}
            </h3>

            {/* Описание */}
            <p className="text-base sm:text-lg text-white/90 text-center font-medium relative z-10">
              {style.description}
            </p>
          </Card>
        </motion.div>
      </motion.div>
    )
  }

  // Главный экран со всеми классами
  return (
    <div className="mb-6 space-y-6">
      {/* Заголовок с анимацией */}
      <motion.div 
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <GraduationCap className="w-8 h-8 text-purple-400" />
        </motion.div>
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
          Выбери свой класс!
        </h2>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </motion.div>
      </motion.div>

      {/* Сетка всех классов - 3 колонки на мобильных, 4 на планшетах, 6 на десктопе */}
      <motion.div 
        className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {grades.map((grade, index) => {
          const style = gradeStyles[grade.id] || gradeStyles[0]
          
          return (
            <motion.div
              key={grade.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card
                onClick={() => onSelectGrade(grade.id)}
                className={`
                  relative overflow-hidden cursor-pointer transition-all duration-300
                  bg-gradient-to-br ${style.color}
                  hover:shadow-xl hover:shadow-purple-500/20
                  rounded-2xl sm:rounded-3xl p-4 sm:p-5 border-0
                  aspect-square flex flex-col items-center justify-center
                `}
              >
                {/* Декоративный фон */}
                <div className="absolute inset-0 bg-white/10 rounded-2xl sm:rounded-3xl" />
                
                {/* Основной эмодзи */}
                <motion.div 
                  className="text-4xl sm:text-5xl mb-2 relative z-10"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {style.emoji}
                </motion.div>

                {/* Название класса */}
                <h3 className="text-base sm:text-lg font-extrabold text-white text-center drop-shadow-lg relative z-10">
                  {grade.shortName}
                </h3>

                {/* Описание - скрыто на мобильных */}
                <p className="hidden sm:block text-xs text-white/80 text-center mt-1 relative z-10">
                  {style.description}
                </p>

                {/* Маленькая звёздочка */}
                <motion.div
                  className="absolute bottom-2 right-2 text-sm opacity-60"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                >
                  {style.toyEmoji}
                </motion.div>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Подсказка */}
      <motion.p
        className="text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Нажми на класс, чтобы увидеть предметы 📚
      </motion.p>
    </div>
  )
}
