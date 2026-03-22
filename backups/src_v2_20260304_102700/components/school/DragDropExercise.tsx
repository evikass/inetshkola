'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
  UniqueIdentifier,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Lightbulb,
  CheckCircle,
  XCircle,
  RefreshCw,
  Volume2,
  VolumeX,
  Trophy,
  ArrowRight,
  GripVertical
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'
import { cn } from '@/lib/utils'

// Types
export type ExerciseType = 'match' | 'sort' | 'order' | 'build' | 'define'

export interface DragItem {
  id: string
  content: string
  image?: string
  category?: string
}

export interface DropZone {
  id: string
  label: string
  accepts?: string[]
  items: DragItem[]
}

export interface DragDropExerciseData {
  id: string
  type: ExerciseType
  title: string
  instruction: string
  subject: string
  hint?: string
  items: DragItem[]
  zones?: DropZone[]
  correctOrder?: string[]
  showTimer?: boolean
  xpReward?: number
}

interface DragDropExerciseProps {
  exercise: DragDropExerciseData
  onComplete?: (success: boolean, xp: number) => void
  onProgress?: (progress: number) => void
}

// Sortable Item Component
interface SortableItemProps {
  item: DragItem
  isCorrect?: boolean | null
  isDragging?: boolean
}

function SortableItem({ item, isCorrect, isDragging }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: item.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className={cn(
        'flex items-center gap-2 p-3 rounded-lg border-2 cursor-grab active:cursor-grabbing transition-all',
        isDragging && 'opacity-50',
        isCorrect === true && 'bg-green-500/20 border-green-500',
        isCorrect === false && 'bg-red-500/20 border-red-500',
        isCorrect === null && 'bg-white/10 border-white/20 hover:border-white/40',
        !isCorrect && isCorrect !== false && 'bg-white/10 border-white/20 hover:border-white/40'
      )}
    >
      <GripVertical className="w-4 h-4 text-gray-400" {...attributes} {...listeners} />
      <span className="flex-1 text-sm font-medium">{item.content}</span>
      {item.image && (
        <span className="text-2xl">{item.image}</span>
      )}
      {isCorrect === true && <CheckCircle className="w-5 h-5 text-green-500" />}
      {isCorrect === false && <XCircle className="w-5 h-5 text-red-500" />}
    </motion.div>
  )
}

// Draggable Item for matching
interface DraggableItemProps {
  item: DragItem
  isInZone?: boolean
}

function DraggableItem({ item, isInZone }: DraggableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isDragging ? 0.5 : 1, 
        scale: isDragging ? 1.05 : 1 
      }}
      exit={{ opacity: 0, scale: 0.8 }}
      className={cn(
        'flex items-center gap-2 p-3 rounded-lg border-2 cursor-grab active:cursor-grabbing transition-all',
        isInZone 
          ? 'bg-primary/20 border-primary/50' 
          : 'bg-white/10 border-white/20 hover:border-white/40',
        isDragging && 'shadow-lg shadow-primary/30'
      )}
      {...attributes}
      {...listeners}
    >
      {item.image && <span className="text-2xl">{item.image}</span>}
      <span className="text-sm font-medium">{item.content}</span>
    </motion.div>
  )
}

// Drop Zone Component
interface DropZoneComponentProps {
  zone: DropZone
  onRemoveItem?: (itemId: string) => void
}

function DropZoneComponent({ zone, onRemoveItem }: DropZoneComponentProps) {
  const { setNodeRef, isOver } = useSortable({ id: zone.id })

  return (
    <div
      ref={setNodeRef}
      className={cn(
        'min-h-[80px] p-3 rounded-lg border-2 border-dashed transition-all',
        isOver 
          ? 'bg-primary/20 border-primary' 
          : 'bg-white/5 border-white/20',
        zone.items.length > 0 && 'border-solid bg-white/10'
      )}
    >
      <div className="text-xs font-medium text-gray-400 mb-2">{zone.label}</div>
      <SortableContext items={zone.items.map(i => i.id)} strategy={verticalListSortingStrategy}>
        <div className="flex flex-wrap gap-2">
          <AnimatePresence>
            {zone.items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-1 px-3 py-1.5 bg-primary/30 rounded-full"
              >
                {item.image && <span>{item.image}</span>}
                <span className="text-sm">{item.content}</span>
                {onRemoveItem && (
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"
                  >
                    ×
                  </button>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </SortableContext>
      {zone.items.length === 0 && (
        <div className="text-sm text-gray-500 italic">Перетащите сюда...</div>
      )}
    </div>
  )
}

// Main Component
export default function DragDropExercise({ 
  exercise, 
  onComplete,
  onProgress 
}: DragDropExerciseProps) {
  const [items, setItems] = useState<DragItem[]>(exercise.items)
  const [zones, setZones] = useState<DropZone[]>(exercise.zones || [])
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)
  const [isComplete, setIsComplete] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [startTime] = useState(Date.now())

  const { playSuccess, playError, playWin, playClick, isMuted, toggleMute } = useSound()

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  // Calculate progress
  const progress = exercise.type === 'order' || exercise.type === 'build'
    ? items.length > 0 ? Math.round((correctCount / items.length) * 100) : 0
    : zones.length > 0 
      ? Math.round((zones.reduce((acc, z) => acc + z.items.length, 0) / exercise.items.length) * 100)
      : 0

  useEffect(() => {
    onProgress?.(progress)
  }, [progress, onProgress])

  // Handle drag start
  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id)
    playClick()
  }

  // Handle drag end for order/build exercises
  const handleDragEndOrder = (event: DragEndEvent) => {
    const { active, over } = event
    setActiveId(null)

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id)
        const newIndex = items.findIndex((i) => i.id === over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  // Handle drag end for match/sort exercises
  const handleDragEndMatch = (event: DragEndEvent) => {
    const { active, over } = event
    setActiveId(null)

    if (!over) return

    const activeItem = items.find(i => i.id === active.id) || 
      zones.flatMap(z => z.items).find(i => i.id === active.id)

    if (!activeItem) return

    // Check if dropped on a zone
    const targetZone = zones.find(z => z.id === over.id)
    if (targetZone) {
      // Remove from items or other zones
      setItems(prev => prev.filter(i => i.id !== active.id))
      setZones(prev => prev.map(z => ({
        ...z,
        items: z.id === targetZone?.id 
          ? [...z.items.filter(i => i.id !== active.id), activeItem]
          : z.items.filter(i => i.id !== active.id)
      })))
      playSuccess()
    } else if (over.id === 'source') {
      // Return to source
      setZones(prev => prev.map(z => ({
        ...z,
        items: z.items.filter(i => i.id !== active.id)
      })))
      setItems(prev => {
        if (prev.find(i => i.id === active.id)) return prev
        return [...prev, activeItem]
      })
      playClick()
    }
  }

  // Check answer
  const checkAnswer = useCallback(() => {
    setAttempts(prev => prev + 1)

    if (exercise.type === 'order' || exercise.type === 'build') {
      // Check order
      const currentOrder = items.map(i => i.id)
      const isCorrect = JSON.stringify(currentOrder) === JSON.stringify(exercise.correctOrder)
      
      if (isCorrect) {
        setCorrectCount(items.length)
        setShowResult(true)
        playWin()
        const xp = exercise.xpReward || 20
        onComplete?.(true, xp)
      } else {
        playError()
        setShowResult(true)
        onComplete?.(false, 0)
      }
    } else {
      // Check zones
      let correct = 0
      const totalItems = exercise.items.length

      zones.forEach(zone => {
        zone.items.forEach(item => {
          if (zone.accepts?.includes(item.id) || zone.accepts?.includes(item.category || '')) {
            correct++
          }
        })
      })

      setCorrectCount(correct)

      if (correct === totalItems) {
        setShowResult(true)
        playWin()
        const xp = exercise.xpReward || 20
        onComplete?.(true, xp)
      } else {
        playError()
        setShowResult(true)
        onComplete?.(false, 0)
      }
    }

    setIsComplete(true)
  }, [exercise, items, zones, playWin, playError, onComplete])

  // Reset exercise
  const resetExercise = () => {
    setItems(exercise.items)
    setZones(exercise.zones?.map(z => ({ ...z, items: [] })) || [])
    setIsComplete(false)
    setShowResult(false)
    setCorrectCount(0)
    setAttempts(0)
    setShowHint(false)
    playClick()
  }

  // Render based on exercise type
  const renderExercise = () => {
    switch (exercise.type) {
      case 'order':
      case 'build':
        return (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEndOrder}
          >
            <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
              <div className="space-y-2">
                {items.map((item, index) => (
                  <SortableItem
                    key={item.id}
                    item={item}
                    isCorrect={showResult ? 
                      exercise.correctOrder?.[index] === item.id : null
                    }
                  />
                ))}
              </div>
            </SortableContext>
            <DragOverlay>
              {activeId ? (
                <div className="p-3 bg-white/20 rounded-lg border-2 border-white/40 shadow-lg">
                  {items.find(i => i.id === activeId)?.content}
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>
        )

      case 'match':
      case 'sort':
      case 'define':
        return (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEndMatch}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Source items */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-400 mb-2">Доступные элементы</div>
                <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
                  <div className="space-y-2 min-h-[100px] p-3 bg-white/5 rounded-lg border border-white/10">
                    <AnimatePresence>
                      {items.map((item) => (
                        <DraggableItem key={item.id} item={item} />
                      ))}
                    </AnimatePresence>
                    {items.length === 0 && (
                      <div className="text-sm text-gray-500 italic text-center py-4">
                        Все элементы распределены
                      </div>
                    )}
                  </div>
                </SortableContext>
              </div>

              {/* Drop zones */}
              <div className="space-y-3">
                <div className="text-sm font-medium text-gray-400 mb-2">Категории</div>
                {zones.map((zone) => (
                  <DropZoneComponent 
                    key={zone.id} 
                    zone={zone}
                    onRemoveItem={(itemId) => {
                      const item = zones.flatMap(z => z.items).find(i => i.id === itemId)
                      if (item) {
                        setZones(prev => prev.map(z => ({
                          ...z,
                          items: z.items.filter(i => i.id !== itemId)
                        })))
                        setItems(prev => [...prev, item])
                        playClick()
                      }
                    }}
                  />
                ))}
              </div>
            </div>
            <DragOverlay>
              {activeId ? (
                <div className="p-3 bg-white/20 rounded-lg border-2 border-white/40 shadow-lg">
                  {(items.find(i => i.id === activeId) || 
                    zones.flatMap(z => z.items).find(i => i.id === activeId))?.content}
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>
        )

      default:
        return null
    }
  }

  // Calculate elapsed time
  const elapsedTime = Math.floor((Date.now() - startTime) / 1000)
  const minutes = Math.floor(elapsedTime / 60)
  const seconds = elapsedTime % 60

  return (
    <Card className="bg-white/5 border-white/10 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/20 to-primary/10">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">
                {exercise.type === 'order' && '📋'}
                {exercise.type === 'match' && '🔗'}
                {exercise.type === 'sort' && '📊'}
                {exercise.type === 'build' && '🧩'}
                {exercise.type === 'define' && '📝'}
              </span>
              {exercise.title}
            </CardTitle>
            <p className="text-sm text-gray-400 mt-1">{exercise.instruction}</p>
          </div>
          <div className="flex items-center gap-2">
            {exercise.showTimer && (
              <Badge variant="outline" className="font-mono">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </Badge>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMute}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Прогресс</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Exercise content */}
        {renderExercise()}

        {/* Hint */}
        {exercise.hint && (
          <AnimatePresence>
            {showHint && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3"
              >
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5" />
                  <p className="text-sm text-yellow-200">{exercise.hint}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* Result */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={cn(
                'rounded-lg p-4',
                correctCount === items.length || correctCount === exercise.items.length
                  ? 'bg-green-500/20 border border-green-500/30'
                  : 'bg-red-500/20 border border-red-500/30'
              )}
            >
              <div className="flex items-center gap-3">
                {correctCount === items.length || correctCount === exercise.items.length ? (
                  <>
                    <Trophy className="w-8 h-8 text-yellow-500" />
                    <div>
                      <p className="font-bold text-green-400">Отлично! Всё правильно!</p>
                      <p className="text-sm text-gray-400">
                        +{exercise.xpReward || 20} XP
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <XCircle className="w-8 h-8 text-red-500" />
                    <div>
                      <p className="font-bold text-red-400">Попробуй ещё раз!</p>
                      <p className="text-sm text-gray-400">
                        Правильных: {correctCount} из {exercise.items.length}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
          {exercise.hint && !showHint && (
            <Button
              variant="outline"
              onClick={() => setShowHint(true)}
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              Подсказка
            </Button>
          )}

          {!isComplete ? (
            <Button
              onClick={checkAnswer}
              className="ml-auto"
              disabled={
                (exercise.type === 'order' || exercise.type === 'build') 
                  ? false 
                  : zones.every(z => z.items.length === 0)
              }
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Проверить
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={resetExercise}
              className="ml-auto"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Начать заново
            </Button>
          )}
        </div>

        {/* Attempts counter */}
        {attempts > 0 && (
          <div className="text-center text-sm text-gray-500">
            Попыток: {attempts}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// Sample exercises for different subjects
export const sampleExercises: DragDropExerciseData[] = [
  // Math: Match equations with answers
  {
    id: 'math-match-1',
    type: 'match',
    title: 'Соедини примеры с ответами',
    instruction: 'Перетащите примеры к правильным ответам',
    subject: 'Математика',
    hint: 'Вспомни таблицу умножения',
    items: [
      { id: 'eq1', content: '7 × 8', category: '56' },
      { id: 'eq2', content: '6 × 9', category: '54' },
      { id: 'eq3', content: '8 × 8', category: '64' },
      { id: 'eq4', content: '9 × 7', category: '63' },
    ],
    zones: [
      { id: 'z1', label: '56', accepts: ['eq1'], items: [] },
      { id: 'z2', label: '54', accepts: ['eq2'], items: [] },
      { id: 'z3', label: '64', accepts: ['eq3'], items: [] },
      { id: 'z4', label: '63', accepts: ['eq4'], items: [] },
    ],
    xpReward: 15
  },
  // Russian: Sort words by parts of speech
  {
    id: 'russian-sort-1',
    type: 'sort',
    title: 'Разбери слова по частям речи',
    instruction: 'Распредели слова по категориям',
    subject: 'Русский язык',
    hint: 'Существительное - это предмет, прилагательное - признак, глагол - действие',
    items: [
      { id: 'w1', content: 'книга', category: 'noun' },
      { id: 'w2', content: 'бежать', category: 'verb' },
      { id: 'w3', content: 'красивый', category: 'adj' },
      { id: 'w4', content: 'стол', category: 'noun' },
      { id: 'w5', content: 'писать', category: 'verb' },
      { id: 'w6', content: 'умный', category: 'adj' },
    ],
    zones: [
      { id: 'nouns', label: '📚 Существительные', accepts: ['noun'], items: [] },
      { id: 'verbs', label: '🏃 Глаголы', accepts: ['verb'], items: [] },
      { id: 'adjs', label: '✨ Прилагательные', accepts: ['adj'], items: [] },
    ],
    xpReward: 20
  },
  // Science: Order life cycle stages
  {
    id: 'science-order-1',
    type: 'order',
    title: 'Расставь этапы жизненного цикла',
    instruction: 'Расположите этапы в правильном порядке',
    subject: 'Окружающий мир',
    hint: 'Всё начинается с семени',
    items: [
      { id: 'stage1', content: '🌱 Семя', image: '🌱' },
      { id: 'stage2', content: '🌿 Росток', image: '🌿' },
      { id: 'stage3', content: '🌸 Цветок', image: '🌸' },
      { id: 'stage4', content: '🍎 Плод', image: '🍎' },
    ],
    correctOrder: ['stage1', 'stage2', 'stage3', 'stage4'],
    xpReward: 15
  },
  // English: Build sentences
  {
    id: 'english-build-1',
    type: 'build',
    title: 'Составь предложение',
    instruction: 'Расставь слова в правильном порядке',
    subject: 'Английский язык',
    hint: 'Подлежащее - сказуемое - дополнение',
    items: [
      { id: 'w1', content: 'The' },
      { id: 'w2', content: 'cat' },
      { id: 'w3', content: 'is' },
      { id: 'w4', content: 'sleeping' },
    ],
    correctOrder: ['w1', 'w2', 'w3', 'w4'],
    xpReward: 15
  },
  // Define terms
  {
    id: 'define-1',
    type: 'define',
    title: 'Соотнеси термины и определения',
    instruction: 'Перетащите термины к их определениям',
    subject: 'Обществознание',
    hint: 'Вспомни основные понятия',
    items: [
      { id: 't1', content: 'Конституция', category: 'def1' },
      { id: 't2', content: 'Демократия', category: 'def2' },
      { id: 't3', content: 'Федерация', category: 'def3' },
    ],
    zones: [
      { id: 'def1', label: 'Основной закон государства', accepts: ['t1'], items: [] },
      { id: 'def2', label: 'Власть народа', accepts: ['t2'], items: [] },
      { id: 'def3', label: 'Союз государств', accepts: ['t3'], items: [] },
    ],
    xpReward: 25
  }
]
