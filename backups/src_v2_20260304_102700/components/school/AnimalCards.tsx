'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Volume2, ArrowLeft, Star, Heart, Sparkles } from 'lucide-react'
import { useSound } from '@/hooks/useSound'

// ==================== ДАННЫЕ ЖИВОТНЫХ ====================
const ANIMALS = [
  {
    id: 'cat',
    name: 'Кошка',
    emoji: '🐱',
    sound: 'Мяу!',
    description: 'Домашнее животное с мягкой шёрсткой. Любит спать и играть.',
    facts: ['Спит 16 часов в сутки', 'У кошек 32 мышцы в ушах', 'Мурлыкают от удовольствия'],
    habitat: 'Дома',
    color: 'from-orange-400 to-yellow-400',
    category: 'Домашние'
  },
  {
    id: 'dog',
    name: 'Собака',
    emoji: '🐕',
    sound: 'Гав-гав!',
    description: 'Верный друг человека. Очень умная и преданная.',
    facts: ['Умеет понимать до 250 слов', 'Чует запах за километры', 'Спит 10 часов в сутки'],
    habitat: 'Дома',
    color: 'from-amber-500 to-orange-500',
    category: 'Домашние'
  },
  {
    id: 'elephant',
    name: 'Слон',
    emoji: '🐘',
    sound: 'Тууу!',
    description: 'Самое большое наземное животное. Живёт в Африке и Азии.',
    facts: ['Весит до 6 тонн', 'Живёт 60-70 лет', 'Отличная память'],
    habitat: 'Африка, Азия',
    color: 'from-gray-400 to-gray-500',
    category: 'Дикие'
  },
  {
    id: 'lion',
    name: 'Лев',
    emoji: '🦁',
    sound: 'Рррр!',
    description: 'Царь зверей! Живёт в саваннах Африки.',
    facts: ['Спит до 20 часов в день', 'Рёв слышно за 8 км', 'Живёт прайдами'],
    habitat: 'Африка',
    color: 'from-yellow-500 to-amber-500',
    category: 'Дикие'
  },
  {
    id: 'penguin',
    name: 'Пингвин',
    emoji: '🐧',
    sound: 'Кря-кря!',
    description: 'Птица, которая не летает, но отлично плавает!',
    facts: ['Плавает со скоростью 36 км/ч', 'Ныряет на 500 метров', 'Живёт в Антарктиде'],
    habitat: 'Антарктида',
    color: 'from-slate-700 to-slate-900',
    category: 'Птицы'
  },
  {
    id: 'dolphin',
    name: 'Дельфин',
    emoji: '🐬',
    sound: 'Иии-иии!',
    description: 'Умное морское млекопитающее. Очень дружелюбное!',
    facts: ['Спит одним полушарием мозга', 'Плавает до 50 км/ч', 'Живёт до 50 лет'],
    habitat: 'Моря и океаны',
    color: 'from-blue-400 to-cyan-500',
    category: 'Морские'
  },
  {
    id: 'owl',
    name: 'Сова',
    emoji: '🦉',
    sound: 'Уху-уху!',
    description: 'Ночная птица с большими глазами. Отлично видит в темноте.',
    facts: ['Поворачивает голову на 270°', 'Охотится ночью', 'Ест мышей'],
    habitat: 'Леса',
    color: 'from-amber-700 to-yellow-700',
    category: 'Птицы'
  },
  {
    id: 'butterfly',
    name: 'Бабочка',
    emoji: '🦋',
    sound: '*шуршание крыльев*',
    description: 'Красивое насекомое с яркими крыльями.',
    facts: ['Вкус ощущает лапками', 'Живёт от недели до года', 'Пьёт нектар'],
    habitat: 'Поля и сады',
    color: 'from-purple-400 to-pink-400',
    category: 'Насекомые'
  },
  {
    id: 'bear',
    name: 'Медведь',
    emoji: '🐻',
    sound: 'Рррр!',
    description: 'Крупный хищник. Зимой спит в берлоге.',
    facts: ['Спит всю зиму', 'Любит мёд', 'Бежит 50 км/ч'],
    habitat: 'Леса',
    color: 'from-amber-600 to-yellow-700',
    category: 'Дикие'
  },
  {
    id: 'rabbit',
    name: 'Кролик',
    emoji: '🐰',
    sound: 'Хрум-хрум!',
    description: 'Маленький пушистый зверёк с длинными ушами.',
    facts: ['Уши до 10 см', 'Ест морковку', 'Прыгает высоко'],
    habitat: 'Дома, поля',
    color: 'from-pink-300 to-rose-400',
    category: 'Домашние'
  },
  {
    id: 'fox',
    name: 'Лиса',
    emoji: '🦊',
    sound: 'Тяф-тяф!',
    description: 'Хитрый зверь с рыжей шёрсткой. Очень умная!',
    facts: ['Отличный слух', 'Охотится ночью', 'Живёт в норе'],
    habitat: 'Леса, поля',
    color: 'from-orange-500 to-red-500',
    category: 'Дикие'
  },
  {
    id: 'frog',
    name: 'Лягушка',
    emoji: '🐸',
    sound: 'Ква-ква!',
    description: 'Земноводное, которое живёт у воды.',
    facts: ['Прыгает в 20 раз выше себя', 'Пьёт кожей', 'Ест комаров'],
    habitat: 'Болота, пруды',
    color: 'from-green-500 to-emerald-500',
    category: 'Земноводные'
  }
]

// ==================== КОМПОНЕНТ КАРТОЧКИ ЖИВОТНОГО ====================
interface AnimalCardProps {
  animal: typeof ANIMALS[0]
  onClick: () => void
}

function AnimalCard({ animal, onClick }: AnimalCardProps) {
  const { play } = useSound()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => {
        play('click')
        onClick()
      }}
      className="cursor-pointer"
    >
      <Card className={`overflow-hidden border-2 border-white/20 hover:border-white/40 transition-all duration-300 ${
        isHovered ? 'shadow-xl shadow-purple-500/20' : ''
      }`}>
        <div className={`h-32 bg-gradient-to-br ${animal.color} flex items-center justify-center relative`}>
          {/* Анимированный фон */}
          <motion.div
            className="absolute inset-0 bg-white/20"
            animate={{ x: isHovered ? ['-100%', '100%'] : '100%' }}
            transition={{ duration: 0.5 }}
          />
          
          <motion.span 
            className="text-6xl relative z-10"
            animate={isHovered ? { scale: [1, 1.2, 1], rotate: [0, -5, 5, 0] } : {}}
            transition={{ duration: 0.3 }}
          >
            {animal.emoji}
          </motion.span>
        </div>
        
        <CardContent className="p-4 text-center">
          <h3 className="text-xl font-bold mb-1">{animal.name}</h3>
          <p className="text-sm text-gray-400">{animal.category}</p>
          
          <div className="flex items-center justify-center gap-2 mt-2">
            <Volume2 className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">{animal.sound}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// ==================== МОДАЛЬНОЕ ОКНО С ИНФОРМАЦИЕЙ ====================
interface AnimalModalProps {
  animal: typeof ANIMALS[0] | null
  onClose: () => void
}

function AnimalModal({ animal, onClose }: AnimalModalProps) {
  const { play } = useSound()
  const [showFacts, setShowFacts] = useState(false)

  if (!animal) return null

  const handleSound = () => {
    play('pop')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md"
      >
        <Card className={`overflow-hidden border-2 border-white/30 bg-gradient-to-br ${animal.color} bg-opacity-90`}>
          {/* Заголовок */}
          <div className="relative p-6 text-center text-white">
            <Button
              variant="ghost"
              onClick={onClose}
              className="absolute top-2 left-2 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-5 h-5 mr-1" />
              Назад
            </Button>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', bounce: 0.5 }}
            >
              <span className="text-8xl block mb-4">{animal.emoji}</span>
            </motion.div>
            
            <h2 className="text-3xl font-bold mb-2">{animal.name}</h2>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSound}
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-all"
            >
              <Volume2 className="w-5 h-5" />
              <span className="text-lg font-medium">{animal.sound}</span>
            </motion.button>
          </div>
          
          {/* Контент */}
          <CardContent className="bg-slate-900/90 p-6 space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">О животном:</h3>
              <p className="text-gray-300">{animal.description}</p>
            </div>
            
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-xl">📍</span>
              <span>Где живёт: {animal.habitat}</span>
            </div>
            
            <div>
              <Button
                variant="ghost"
                onClick={() => {
                  setShowFacts(!showFacts)
                  play('click')
                }}
                className="w-full flex items-center justify-between text-purple-300 hover:text-purple-200 hover:bg-purple-500/20"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Интересные факты
                </span>
                <span>{showFacts ? '▲' : '▼'}</span>
              </Button>
              
              <AnimatePresence>
                {showFacts && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-3 space-y-2">
                      {animal.facts.map((fact, i) => (
                        <motion.li
                          key={i}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                          <span>{fact}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

// ==================== ГЛАВНЫЙ КОМПОНЕНТ ====================
interface AnimalCardsProps {
  onBack?: () => void
  onComplete?: (stars: number) => void
}

export default function AnimalCards({ onBack, onComplete }: AnimalCardsProps) {
  const [selectedAnimal, setSelectedAnimal] = useState<typeof ANIMALS[0] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('Все')
  const { play } = useSound()
  
  const categories = ['Все', 'Домашние', 'Дикие', 'Птицы', 'Морские', 'Насекомые', 'Земноводные']
  
  const filteredAnimals = selectedCategory === 'Все' 
    ? ANIMALS 
    : ANIMALS.filter(a => a.category === selectedCategory)

  const handleAnimalClick = (animal: typeof ANIMALS[0]) => {
    setSelectedAnimal(animal)
    play('pop')
  }

  const handleClose = () => {
    setSelectedAnimal(null)
    play('whoosh')
  }

  return (
    <div className="space-y-6">
      {/* Заголовок */}
      <div className="text-center">
        <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
          <span className="text-3xl">🦁</span>
          Мир животных
          <span className="text-3xl">🐼</span>
        </h2>
        <p className="text-gray-400 mt-1">Нажми на карточку, чтобы узнать больше!</p>
      </div>
      
      {/* Фильтры категорий */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedCategory(cat)
              play('click')
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>
      
      {/* Сетка карточек */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredAnimals.map((animal, index) => (
          <motion.div
            key={animal.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <AnimalCard animal={animal} onClick={() => handleAnimalClick(animal)} />
          </motion.div>
        ))}
      </div>
      
      {/* Модальное окно */}
      <AnimatePresence>
        {selectedAnimal && (
          <AnimalModal animal={selectedAnimal} onClose={handleClose} />
        )}
      </AnimatePresence>
    </div>
  )
}

export { ANIMALS }
