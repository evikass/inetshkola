'use client'

import { useState, useCallback, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { 
  RotateCcw, ChevronLeft, ChevronRight, Sparkles, Brain, 
  CheckCircle, XCircle, Lightbulb, Shuffle, BookOpen, Plus, X
} from 'lucide-react'

interface Flashcard {
  id: string
  front: string
  back: string
  subject: string
  difficulty: 'easy' | 'medium' | 'hard'
  lastReviewed?: string
  correctCount: number
  incorrectCount: number
}

interface FlashcardsProps {
  onProgress?: (cards: number) => void
}

// Предустановленные карточки по предметам
const defaultCards: Flashcard[] = [
  // Математика
  { id: 'm1', front: 'Формула дискриминанта', back: 'D = b² - 4ac', subject: 'Математика', difficulty: 'medium', correctCount: 0, incorrectCount: 0 },
  { id: 'm2', front: 'Формула корней квадратного уравнения', back: 'x = (-b ± √D) / 2a', subject: 'Математика', difficulty: 'medium', correctCount: 0, incorrectCount: 0 },
  { id: 'm3', front: 'Теорема Пифагора', back: 'a² + b² = c² (для прямоугольного треугольника)', subject: 'Математика', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  { id: 'm4', front: 'Формула площади круга', back: 'S = πR²', subject: 'Математика', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  { id: 'm5', front: 'Формула длины окружности', back: 'C = 2πR', subject: 'Математика', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  { id: 'm6', front: 'Формула площади треугольника', back: 'S = ½ · a · h', subject: 'Математика', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  
  // Физика
  { id: 'p1', front: 'Второй закон Ньютона', back: 'F = ma', subject: 'Физика', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  { id: 'p2', front: 'Закон Ома', back: 'I = U / R', subject: 'Физика', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  { id: 'p3', front: 'Формула кинетической энергии', back: 'E = ½mv²', subject: 'Физика', difficulty: 'medium', correctCount: 0, incorrectCount: 0 },
  { id: 'p4', front: 'Формула потенциальной энергии', back: 'E = mgh', subject: 'Физика', difficulty: 'medium', correctCount: 0, incorrectCount: 0 },
  { id: 'p5', front: 'Формула мощности', back: 'P = A/t = U·I', subject: 'Физика', difficulty: 'medium', correctCount: 0, incorrectCount: 0 },
  
  // Химия
  { id: 'c1', front: 'Формула метана', back: 'CH₄', subject: 'Химия', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  { id: 'c2', front: 'Формула воды', back: 'H₂O', subject: 'Химия', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  { id: 'c3', front: 'Формула углекислого газа', back: 'CO₂', subject: 'Химия', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  { id: 'c4', front: 'Формула серной кислоты', back: 'H₂SO₄', subject: 'Химия', difficulty: 'medium', correctCount: 0, incorrectCount: 0 },
  { id: 'c5', front: 'Формула соляной кислоты', back: 'HCl', subject: 'Химия', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  
  // Русский язык
  { id: 'r1', front: 'Правило ЖИ-ШИ', back: 'Пишется И: жи́знь, ши́на, маши́на', subject: 'Русский язык', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  { id: 'r2', front: 'Правило ЧА-ЩА', back: 'Пишется А: ча́шка, площа́дка, да́ча', subject: 'Русский язык', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  { id: 'r3', front: 'Правило ЧУ-ЩУ', back: 'Пишется У: чу́до, щу́ка, чу́лок', subject: 'Русский язык', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  { id: 'r4', front: 'Сколько падежей в русском языке?', back: '6 падежей: Именительный, Родительный, Дательный, Винительный, Творительный, Предложный', subject: 'Русский язык', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  
  // История
  { id: 'h1', front: 'Когда началась Великая Отечественная война?', back: '22 июня 1941 года', subject: 'История', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  { id: 'h2', front: 'Когда был первый полёт человека в космос?', back: '12 апреля 1961 года (Ю.А. Гагарин)', subject: 'История', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  { id: 'h3', front: 'Когда отменили крепостное право?', back: '1861 год (Александр II)', subject: 'История', difficulty: 'medium', correctCount: 0, incorrectCount: 0 },
  { id: 'h4', front: 'Год крещения Руси', back: '988 год (князь Владимир)', subject: 'История', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  
  // Биология
  { id: 'b1', front: 'Какие клетки переносят кислород?', back: 'Эритроциты (красные кровяные клетки)', subject: 'Биология', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  { id: 'b2', front: 'Какие клетки отвечают за иммунитет?', back: 'Лейкоциты (белые кровяные клетки)', subject: 'Биология', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  { id: 'b3', front: 'Сколько хромосом у человека?', back: '46 хромосом (23 пары)', subject: 'Биология', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  { id: 'b4', front: 'Что такое ДНК?', back: 'Дезоксирибонуклеиновая кислота — носитель генетической информации', subject: 'Биология', difficulty: 'medium', correctCount: 0, incorrectCount: 0 },
  
  // География
  { id: 'g1', front: 'Площадь России', back: '17.1 млн км² (1-е место в мире)', subject: 'География', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  { id: 'g2', front: 'Высшая точка России', back: 'г. Эльбрус (5642 м)', subject: 'География', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  { id: 'g3', front: 'Самая длинная река России', back: 'Обь с Иртышом (5410 км)', subject: 'География', difficulty: 'medium', correctCount: 0, incorrectCount: 0 },
  
  // Английский язык
  { id: 'e1', front: 'Past Simple: образование', back: 'V2 (правильные: V+ed) / did + not + V', subject: 'Английский', difficulty: 'easy', correctCount: 0, incorrectCount: 0 },
  { id: 'e2', front: 'Present Perfect: образование', back: 'have/has + V3 (Past Participle)', subject: 'Английский', difficulty: 'medium', correctCount: 0, incorrectCount: 0 },
  { id: 'e3', front: 'Conditionals Type 2', back: 'If + Past Simple, would + V (нереальное настоящее)', subject: 'Английский', difficulty: 'medium', correctCount: 0, incorrectCount: 0 },
]

const subjects = ['Все', 'Математика', 'Физика', 'Химия', 'Русский язык', 'История', 'Биология', 'География', 'Английский']

export default function Flashcards({ onProgress }: FlashcardsProps) {
  // Загрузка карточек из localStorage при инициализации
  const [cards, setCards] = useState<Flashcard[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('flashcards_v1')
      if (saved) return JSON.parse(saved)
    }
    return defaultCards
  })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState('Все')
  const [studyMode, setStudyMode] = useState<'browse' | 'quiz'>('browse')
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [incorrectAnswers, setIncorrectAnswers] = useState(0)
  const [shuffledCards, setShuffledCards] = useState<Flashcard[]>([])
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newCard, setNewCard] = useState({ front: '', back: '', subject: 'Математика', difficulty: 'medium' as const })
  
  // Сохранение карточек
  useEffect(() => {
    localStorage.setItem('flashcards_v1', JSON.stringify(cards))
  }, [cards])
  
  // Фильтрация карточек
  const filteredCards = selectedSubject === 'Все' 
    ? cards 
    : cards.filter(c => c.subject === selectedSubject)
  
  const currentCard = studyMode === 'quiz' 
    ? shuffledCards[currentIndex] 
    : filteredCards[currentIndex]
  
  // Перемешивание карточек для режима теста
  const shuffleCards = useCallback(() => {
    const shuffled = [...filteredCards].sort(() => Math.random() - 0.5)
    setShuffledCards(shuffled)
    setCurrentIndex(0)
    setCorrectAnswers(0)
    setIncorrectAnswers(0)
    setIsFlipped(false)
    setStudyMode('quiz')
  }, [filteredCards])
  
  // Перелистывание
  const flipCard = useCallback(() => {
    setIsFlipped(prev => !prev)
  }, [])
  
  // Следующая карточка
  const nextCard = useCallback(() => {
    const maxIndex = studyMode === 'quiz' ? shuffledCards.length : filteredCards.length
    setCurrentIndex(prev => (prev + 1) % maxIndex)
    setIsFlipped(false)
  }, [studyMode, shuffledCards.length, filteredCards.length])
  
  // Предыдущая карточка
  const prevCard = useCallback(() => {
    const maxIndex = studyMode === 'quiz' ? shuffledCards.length : filteredCards.length
    setCurrentIndex(prev => (prev - 1 + maxIndex) % maxIndex)
    setIsFlipped(false)
  }, [studyMode, shuffledCards.length, filteredCards.length])
  
  // Отметить правильный ответ
  const markCorrect = useCallback(() => {
    if (!currentCard) return
    
    setCards(prev => prev.map(c => 
      c.id === currentCard.id 
        ? { ...c, correctCount: c.correctCount + 1, lastReviewed: new Date().toISOString() }
        : c
    ))
    
    setCorrectAnswers(prev => prev + 1)
    onProgress?.(1)
    nextCard()
  }, [currentCard, nextCard, onProgress])
  
  // Отметить неправильный ответ
  const markIncorrect = useCallback(() => {
    if (!currentCard) return
    
    setCards(prev => prev.map(c => 
      c.id === currentCard.id 
        ? { ...c, incorrectCount: c.incorrectCount + 1, lastReviewed: new Date().toISOString() }
        : c
    ))
    
    setIncorrectAnswers(prev => prev + 1)
    nextCard()
  }, [currentCard, nextCard])
  
  // Добавление новой карточки
  const addCard = useCallback(() => {
    if (!newCard.front.trim() || !newCard.back.trim()) return
    
    const card: Flashcard = {
      id: `custom_${Date.now()}`,
      front: newCard.front,
      back: newCard.back,
      subject: newCard.subject,
      difficulty: newCard.difficulty,
      correctCount: 0,
      incorrectCount: 0
    }
    
    setCards(prev => [...prev, card])
    setNewCard({ front: '', back: '', subject: 'Математика', difficulty: 'medium' })
    setShowCreateForm(false)
  }, [newCard])
  
  // Прогресс изучения
  const totalCards = studyMode === 'quiz' ? shuffledCards.length : filteredCards.length
  const progressPercent = totalCards > 0 ? ((currentIndex + 1) / totalCards) * 100 : 0
  
  if (!currentCard && filteredCards.length === 0) {
    return (
      <Card className="bg-white/5 border-white/10 backdrop-blur">
        <CardContent className="p-8 text-center">
          <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Нет карточек</h3>
          <p className="text-gray-400 mb-4">Выберите другой предмет или создайте новую карточку</p>
          <Button onClick={() => setShowCreateForm(true)} className="bg-purple-600 hover:bg-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Создать карточку
          </Button>
        </CardContent>
      </Card>
    )
  }
  
  return (
    <div className="space-y-4">
      {/* Фильтры и режимы */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {subjects.map(subject => (
            <Button
              key={subject}
              size="sm"
              variant={selectedSubject === subject ? "default" : "outline"}
              onClick={() => {
                setSelectedSubject(subject)
                setCurrentIndex(0)
                setIsFlipped(false)
                setStudyMode('browse')
              }}
              className={selectedSubject === subject 
                ? "bg-purple-600 hover:bg-purple-700" 
                : "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
              }
            >
              {subject}
            </Button>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={shuffleCards}
            className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
          >
            <Shuffle className="w-4 h-4 mr-1" />
            Режим теста
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowCreateForm(true)}
            className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
          >
            <Plus className="w-4 h-4 mr-1" />
            Новая
          </Button>
        </div>
      </div>
      
      {/* Прогресс */}
      <div className="flex items-center gap-4">
        <Progress value={progressPercent} className="flex-1 h-2" />
        <span className="text-sm text-gray-400">
          {currentIndex + 1} / {totalCards}
        </span>
      </div>
      
      {/* Статистика в режиме теста */}
      {studyMode === 'quiz' && (
        <div className="flex gap-4">
          <div className="flex items-center gap-2 text-green-400">
            <CheckCircle className="w-4 h-4" />
            <span>{correctAnswers}</span>
          </div>
          <div className="flex items-center gap-2 text-red-400">
            <XCircle className="w-4 h-4" />
            <span>{incorrectAnswers}</span>
          </div>
        </div>
      )}
      
      {/* Карточка */}
      {currentCard && (
        <div 
          className="relative perspective-1000 cursor-pointer"
          onClick={flipCard}
          style={{ perspective: '1000px' }}
        >
          <div 
            className={`relative transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
            style={{ 
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
          >
            {/* Передняя сторона */}
            <Card className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/30 backdrop-blur min-h-[200px]"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <CardContent className="p-6 flex flex-col items-center justify-center min-h-[200px]">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className={
                    currentCard.difficulty === 'easy' ? 'bg-green-500/20 text-green-300' :
                    currentCard.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-red-500/20 text-red-300'
                  }>
                    {currentCard.difficulty === 'easy' ? 'Легко' : currentCard.difficulty === 'medium' ? 'Средне' : 'Сложно'}
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                    {currentCard.subject}
                  </Badge>
                </div>
                <p className="text-xl text-white text-center font-medium">{currentCard.front}</p>
                <div className="absolute bottom-4 text-gray-400 text-sm flex items-center gap-1">
                  <Lightbulb className="w-4 h-4" />
                  Нажмите, чтобы перевернуть
                </div>
              </CardContent>
            </Card>
            
            {/* Задняя сторона */}
            <Card 
              className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border-green-500/30 backdrop-blur min-h-[200px] absolute inset-0"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <CardContent className="p-6 flex flex-col items-center justify-center min-h-[200px]">
                <p className="text-xl text-white text-center font-medium">{currentCard.back}</p>
                <div className="mt-4 text-gray-400 text-xs">
                  ✓ {currentCard.correctCount} правильных | ✗ {currentCard.incorrectCount} ошибок
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
      
      {/* Кнопки управления */}
      <div className="flex items-center justify-center gap-4">
        <Button
          variant="outline"
          onClick={prevCard}
          className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Назад
        </Button>
        
        <Button
          variant="outline"
          onClick={flipCard}
          className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
        >
          <RotateCcw className="w-4 h-4 mr-1" />
          Перевернуть
        </Button>
        
        <Button
          variant="outline"
          onClick={nextCard}
          className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
        >
          Далее
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
      
      {/* Кнопки ответа в режиме теста */}
      {studyMode === 'quiz' && isFlipped && (
        <div className="flex justify-center gap-4">
          <Button
            onClick={markIncorrect}
            variant="outline"
            className="bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20"
          >
            <XCircle className="w-4 h-4 mr-2" />
            Не помню
          </Button>
          <Button
            onClick={markCorrect}
            className="bg-green-600 hover:bg-green-700"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Помню
          </Button>
        </div>
      )}
      
      {/* Форма создания карточки */}
      {showCreateForm && (
        <Card className="bg-white/5 border-white/10 backdrop-blur">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-white text-lg">Новая карточка</CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowCreateForm(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Вопрос (передняя сторона)</label>
              <input
                type="text"
                value={newCard.front}
                onChange={(e) => setNewCard(prev => ({ ...prev, front: e.target.value }))}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder:text-gray-500"
                placeholder="Введите вопрос..."
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Ответ (задняя сторона)</label>
              <input
                type="text"
                value={newCard.back}
                onChange={(e) => setNewCard(prev => ({ ...prev, back: e.target.value }))}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder:text-gray-500"
                placeholder="Введите ответ..."
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-sm text-gray-400 mb-1 block">Предмет</label>
                <select
                  value={newCard.subject}
                  onChange={(e) => setNewCard(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                >
                  {subjects.filter(s => s !== 'Все').map(s => (
                    <option key={s} value={s} className="bg-slate-800">{s}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="text-sm text-gray-400 mb-1 block">Сложность</label>
                <select
                  value={newCard.difficulty}
                  onChange={(e) => setNewCard(prev => ({ ...prev, difficulty: e.target.value as 'easy' | 'medium' | 'hard' }))}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                >
                  <option value="easy" className="bg-slate-800">Легко</option>
                  <option value="medium" className="bg-slate-800">Средне</option>
                  <option value="hard" className="bg-slate-800">Сложно</option>
                </select>
              </div>
            </div>
            <Button onClick={addCard} className="w-full bg-purple-600 hover:bg-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Создать карточку
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
