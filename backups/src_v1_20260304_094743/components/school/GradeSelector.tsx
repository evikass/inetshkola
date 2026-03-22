'use client'

import { memo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { ArrowLeft, Sparkles, Star, Zap } from 'lucide-react'
import type { Grade } from '@/data/types'

// Базовый путь для изображений (для GitHub Pages)
const basePath = process.env.NODE_ENV === 'production' ? '/inetshkola' : ''

interface GradeSelectorProps {
  grades: Grade[]
  selectedGrade: number | null
  onSelectGrade: (gradeId: number) => void
  onBack?: () => void
  showBackButton?: boolean
}

// Описание для каждого класса
const gradeStyles: Record<number, { 
  description: string;
  badge: string;
  gradient: string;
  accentColor: string;
  emoji: string;
}> = {
  0: { description: 'Подготовишки', badge: 'Начало', gradient: 'from-pink-400 to-rose-500', accentColor: 'text-pink-500', emoji: '🎈' },
  1: { description: 'Первоклашки', badge: 'Первый', gradient: 'from-orange-400 to-amber-500', accentColor: 'text-orange-500', emoji: '🎒' },
  2: { description: 'Второклашки', badge: 'Второй', gradient: 'from-yellow-400 to-orange-500', accentColor: 'text-yellow-600', emoji: '✏️' },
  3: { description: 'Третьеклашки', badge: 'Третий', gradient: 'from-lime-400 to-green-500', accentColor: 'text-lime-600', emoji: '📖' },
  4: { description: 'Четвероклашки', badge: 'Четвёртый', gradient: 'from-emerald-400 to-teal-500', accentColor: 'text-emerald-600', emoji: '🌟' },
  5: { description: 'Пятиклашки', badge: 'Пятый', gradient: 'from-cyan-400 to-blue-500', accentColor: 'text-cyan-600', emoji: '📚' },
  6: { description: 'Шестиклассники', badge: 'Шестой', gradient: 'from-blue-400 to-indigo-500', accentColor: 'text-blue-600', emoji: '🔬' },
  7: { description: 'Семиклассники', badge: 'Седьмой', gradient: 'from-violet-400 to-purple-500', accentColor: 'text-violet-600', emoji: '⚗️' },
  8: { description: 'Восьмиклассники', badge: 'Восьмой', gradient: 'from-purple-400 to-fuchsia-500', accentColor: 'text-purple-600', emoji: '🎯' },
  9: { description: 'Девятиклассники', badge: 'ОГЭ', gradient: 'from-fuchsia-400 to-pink-500', accentColor: 'text-fuchsia-600', emoji: '📝' },
  10: { description: 'Десятиклассники', badge: 'Десятый', gradient: 'from-rose-400 to-red-500', accentColor: 'text-rose-600', emoji: '🏆' },
  11: { description: 'Выпускники', badge: 'ЕГЭ', gradient: 'from-amber-400 to-orange-500', accentColor: 'text-amber-600', emoji: '🎓' }
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
  hidden: { opacity: 0, y: 25, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 15 }
  }
}

// Скелетон загрузки карточки класса
function GradeCardSkeleton() {
  return (
    <Card className="rounded-xl sm:rounded-2xl p-2 sm:p-3 aspect-square">
      <div className="flex flex-col items-center justify-center h-full space-y-1 sm:space-y-2">
        <Skeleton className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-white/20" />
        <Skeleton className="h-5 w-12 sm:h-6 sm:w-16 bg-white/20" />
        <Skeleton className="h-2 w-16 sm:h-3 sm:w-20 bg-white/20" />
      </div>
    </Card>
  )
}

// Компонент карточки класса с улучшенными эффектами
const GradeCard = memo(function GradeCard({ 
  grade, 
  style, 
  onSelect 
}: { 
  grade: Grade
  style: typeof gradeStyles[0]
  onSelect: () => void 
}) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.08, y: -8 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        onClick={onSelect}
        className={`
          relative overflow-hidden cursor-pointer transition-all duration-300
          bg-gradient-to-br ${style.gradient}
          rounded-xl sm:rounded-2xl p-2 sm:p-3
          aspect-square flex flex-col items-center justify-center
          group shadow-lg hover:shadow-2xl hover:shadow-purple-500/30
          border-2 border-white/30 hover:border-white/60
          active:scale-95 touch-manipulation
        `}
      >
        {/* Анимированный градиентный фон при наведении */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 
            transition-opacity duration-300 rounded-xl sm:rounded-2xl 
            bg-gradient-to-t from-white/20 to-transparent" 
        />
        
        {/* Свечение при наведении */}
        <motion.div
          className="absolute inset-0 rounded-xl sm:rounded-2xl"
          animate={{
            boxShadow: isHovered 
              ? '0 0 30px rgba(255,255,255,0.3)' 
              : '0 0 0px rgba(255,255,255,0)'
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Эмодзи класса */}
        <motion.div
          className="absolute top-1 right-1 text-sm sm:text-lg opacity-60"
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? [0, -10, 10, 0] : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {style.emoji}
        </motion.div>
        
        {/* Изображение класса */}
        <div className="relative w-10 h-10 sm:w-14 sm:h-14 mb-1 sm:mb-2 z-10">
          <motion.div
            className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden
              bg-white/30 backdrop-blur-sm border border-white/50 shadow-lg"
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? [0, -3, 3, 0] : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={`${basePath}/images/classes/class-${grade.id}.jpg`}
              alt={grade.shortName}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Название класса */}
        <h3 className="text-xl sm:text-2xl font-black text-white text-center 
          drop-shadow-lg relative z-10 mb-0.5 sm:mb-1">
          {grade.shortName}
        </h3>

        {/* Описание */}
        <p className="text-[8px] sm:text-[10px] text-white/90 text-center font-medium relative z-10">
          {style.description}
        </p>

        {/* Бейдж снизу */}
        <motion.div
          className="mt-1 sm:mt-1.5 px-1.5 py-0.5 rounded-full text-[8px] sm:text-[10px]
            bg-white/20 backdrop-blur-sm text-white font-bold 
            relative z-10 border border-white/30"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: isHovered ? 1 : 0.7, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {style.badge}
        </motion.div>
        
        {/* Звёздочки при наведении */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute -top-1 left-1/2"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -10 }}
              exit={{ opacity: 0, y: -5 }}
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
})

// Компонент выбора класса
function GradeSelectorComponent({ 
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
              ring-4 ring-white/30 shadow-2xl
              rounded-3xl p-6 sm:p-8 border-0
            `}
          >
            {/* Декоративный фон */}
            <div className="absolute inset-0 bg-white/10 rounded-3xl" />
            
            {/* Анимированные частицы */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                animate={{
                  x: [0, Math.random() * 50 - 25],
                  y: [0, Math.random() * 50 - 25],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 3) * 20}%`
                }}
              />
            ))}
            
            {/* Изображение класса */}
            <div className="flex justify-center mb-4 relative z-10">
              <motion.div
                className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden
                  bg-white/30 backdrop-blur-sm border-2 border-white/50 shadow-xl"
                animate={{ 
                  y: [-3, 3, -3],
                  rotate: [-2, 2, -2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <img
                  src={`${basePath}/images/classes/class-${selectedGrade}.jpg`}
                  alt={grade?.shortName || 'Класс'}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Бейдж */}
            <motion.div
              className="absolute top-4 right-4 px-3 py-1 rounded-full
                bg-white/20 backdrop-blur-sm text-white text-sm font-bold
                border border-white/30 flex items-center gap-1"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span>{style.emoji}</span>
              {style.badge}
            </motion.div>

            {/* Название класса */}
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-2 
              drop-shadow-lg relative z-10">
              {grade?.shortName}
            </h3>

            {/* Описание */}
            <p className="text-lg sm:text-xl text-white/90 text-center font-medium relative z-10">
              {style.description}
            </p>
            
            {/* Индикатор прогресса */}
            <motion.div
              className="mt-4 flex justify-center items-center gap-2 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              <span className="text-white/80 text-sm">Выбери предмет для изучения</span>
              <Zap className="w-4 h-4 text-yellow-300" />
            </motion.div>
          </Card>
        </motion.div>
      </motion.div>
    )
  }

  // Главный экран со всеми классами
  return (
    <div className="mb-4 sm:mb-6 space-y-4 sm:space-y-6">
      {/* Заголовок с анимацией */}
      <motion.div 
        className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-400" />
        </motion.div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
          Выбери свой класс!
        </h2>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-400" />
        </motion.div>
      </motion.div>

      {/* Сетка всех классов - 3 колонки на мобильных, 4 на планшетах, 6 на десктопе */}
      <motion.div 
        className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-6 gap-1.5 sm:gap-3 lg:gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {grades.map((grade) => {
          const style = gradeStyles[grade.id] || gradeStyles[0]
          
          return (
            <GradeCard
              key={grade.id}
              grade={grade}
              style={style}
              onSelect={() => onSelectGrade(grade.id)}
            />
          )
        })}
      </motion.div>

      {/* Подсказка */}
      <motion.p
        className="text-center text-gray-400 text-xs sm:text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Нажми на класс, чтобы увидеть предметы 📚
      </motion.p>
    </div>
  )
}

// Экспорт со скелетоном
export function GradeSelectorSkeleton() {
  return (
    <div className="mb-4 sm:mb-6 space-y-4 sm:space-y-6">
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <Skeleton className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white/20" />
        <Skeleton className="h-6 w-40 sm:h-8 sm:w-48 bg-white/20" />
        <Skeleton className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white/20" />
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-6 gap-1.5 sm:gap-3 lg:gap-4">
        {[...Array(12)].map((_, i) => (
          <GradeCardSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}

// Мемоизированный экспорт
const GradeSelector = memo(GradeSelectorComponent)

export default GradeSelector
