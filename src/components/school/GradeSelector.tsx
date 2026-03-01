'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { GraduationCap, Sparkles, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import type { Grade } from '@/data/types'

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
}> = {
  0: { description: 'Подготовишки', badge: 'Начало пути' },
  1: { description: 'Первоклашки', badge: 'Первый раз' },
  2: { description: 'Второклашки', badge: 'Учимся' },
  3: { description: 'Третьеклашки', badge: 'Вперед!' },
  4: { description: 'Четвероклашки', badge: 'Малыши+' },
  5: { description: 'Пятиклашки', badge: 'Средняя' },
  6: { description: 'Шестиклассники', badge: 'Наука' },
  7: { description: 'Семиклассники', badge: 'Углубленно' },
  8: { description: 'Восьмиклассники', badge: 'Серьезно' },
  9: { description: 'Девятиклассники', badge: 'ОГЭ' },
  10: { description: 'Десятиклассники', badge: 'Старшая' },
  11: { description: 'Выпускники', badge: 'ЕГЭ' }
}

// Анимация появления
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 15 }
  }
}

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
              bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400
              ring-4 ring-white/30 shadow-2xl shadow-purple-500/30
              rounded-3xl p-6 sm:p-8 border-0
            `}
          >
            {/* Декоративный фон */}
            <div className="absolute inset-0 bg-white/10 rounded-3xl" />
            
            {/* Изображение класса */}
            <div className="flex justify-center mb-4 relative z-10">
              <motion.div
                className="relative w-32 h-32 sm:w-40 sm:h-40"
                animate={{ 
                  y: [-5, 5, -5],
                  rotate: [-3, 3, -3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Image
                  src={`/images/classes/class-${selectedGrade}.png`}
                  alt={grade?.shortName || 'Класс'}
                  fill
                  unoptimized
                  priority
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
            </div>

            {/* Бейдж */}
            <motion.div
              className="absolute top-4 right-4 px-3 py-1 rounded-full
                bg-white/20 backdrop-blur-sm text-white text-sm font-medium
                border border-white/30"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {style.badge}
            </motion.div>

            {/* Название класса */}
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-2 drop-shadow-lg relative z-10">
              {grade?.shortName}
            </h3>

            {/* Описание */}
            <p className="text-lg sm:text-xl text-white/90 text-center font-medium relative z-10">
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
        className="flex items-center justify-center gap-3 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
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
        className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5"
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
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card
                onClick={() => onSelectGrade(grade.id)}
                className={`
                  relative overflow-hidden cursor-pointer transition-all duration-300
                  bg-gradient-to-br from-white/95 to-white/80
                  hover:from-white hover:to-white/95
                  border-2 border-purple-200/50 hover:border-purple-400
                  rounded-2xl sm:rounded-3xl p-3 sm:p-4
                  aspect-square flex flex-col items-center justify-center
                  group shadow-lg hover:shadow-2xl hover:shadow-purple-500/20
                `}
              >
                {/* Градиентное свечение при наведении */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20" />
                
                {/* Изображение класса */}
                <div className="relative w-14 h-14 sm:w-20 sm:h-20 mb-2 sm:mb-3 z-10">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Image
                      src={`/images/classes/class-${grade.id}.png`}
                      alt={grade.shortName}
                      fill
                      unoptimized
                      loading="eager"
                      className="object-contain drop-shadow-lg"
                    />
                  </motion.div>
                </div>

                {/* Название класса */}
                <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent text-center drop-shadow-lg relative z-10 mb-1">
                  {grade.shortName}
                </h3>

                {/* Описание */}
                <p className="text-xs sm:text-sm text-slate-600 text-center font-medium relative z-10">
                  {style.description}
                </p>

                {/* Бейдж снизу */}
                <motion.div
                  className="mt-2 px-2 py-0.5 rounded-full text-[10px] sm:text-xs
                    bg-gradient-to-r from-purple-500 to-pink-500
                    text-white font-medium relative z-10 opacity-0 group-hover:opacity-100
                    transition-opacity duration-300"
                  initial={{ y: 5 }}
                  whileHover={{ y: 0 }}
                >
                  {style.badge}
                </motion.div>

                {/* Декоративные элементы */}
                <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-purple-300/50 group-hover:bg-purple-400 transition-colors" />
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-pink-300/50 group-hover:bg-pink-400 transition-colors" />
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
