'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { BookOpen, CheckCircle, ChevronRight, Baby, GraduationCap } from 'lucide-react'
import type { Topic } from '@/data/types'
import KidFriendlyLessonViewer from './KidFriendlyLessonViewer'

interface TopicDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  topic: Topic | null
  onComplete: () => void
  gradeId?: number  // ID класса для определения режима
}

export default function TopicDialog({ 
  open, 
  onOpenChange, 
  topic, 
  onComplete,
  gradeId = 0
}: TopicDialogProps) {
  const [showKidViewer, setShowKidViewer] = useState(false)

  if (!topic) return null

  // Определяем, использовать ли детский режим
  // Детский режим для классов 0-2 (подготовительный, 1, 2 класс)
  const useKidMode = gradeId <= 2

  // Открыть детский просмотрщик
  const handleOpenKidViewer = () => {
    setShowKidViewer(true)
  }

  // Закрыть детский просмотрщик
  const handleCloseKidViewer = () => {
    setShowKidViewer(false)
  }

  // Завершить урок (из детского режима)
  const handleCompleteKidMode = () => {
    setShowKidViewer(false)
    onComplete()
    onOpenChange(false)
  }

  // Если открыт детский просмотрщик
  if (showKidViewer && topic) {
    return (
      <KidFriendlyLessonViewer
        topic={topic}
        onComplete={handleCompleteKidMode}
        onBack={handleCloseKidViewer}
      />
    )
  }

  // Выбор режима просмотра для младших классов
  if (useKidMode && open) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-gradient-to-br from-purple-900 to-pink-900 border-white/20 text-white max-w-md overflow-hidden">
          <DialogHeader className="text-center pb-4">
            <div className="text-6xl mb-4 animate-bounce">📚</div>
            <DialogTitle className="text-2xl text-center">
              {topic.title}
            </DialogTitle>
            <DialogDescription className="text-purple-200 text-center text-lg">
              {topic.description}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 py-4">
            {/* Детский режим - БОЛЬШАЯ КНОПКА */}
            <Button
              onClick={handleOpenKidViewer}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-3xl py-8 text-xl font-bold shadow-xl flex flex-col items-center gap-2 transition-all hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <Baby className="w-8 h-8" />
                <span>Игровой урок</span>
              </div>
              <span className="text-sm font-normal opacity-80">
                Картинки и звёзды! ⭐
              </span>
            </Button>

            {/* Обычный режим - меньшая кнопка */}
            <Button
              onClick={handleOpenKidViewer}
              className="w-full bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 rounded-2xl py-4 text-base font-medium flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-5 h-5" />
              Обычный режим
            </Button>
          </div>

          <DialogFooter className="flex justify-center">
            <Button
              variant="ghost"
              onClick={() => onOpenChange(false)}
              className="text-white/60 hover:text-white hover:bg-white/10"
            >
              Закрыть
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }

  // Обычный режим для старших классов
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-900 border-white/10 text-white max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-400" />
            {topic.title}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {topic.description}
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[50vh]">
          <div className="space-y-4 pr-4">
            <div 
              className="prose prose-invert prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: topic.theory }}
            />
            
            {topic.examples.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-white font-medium">Примеры:</h4>
                <ul className="space-y-1">
                  {topic.examples.map((example, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <ChevronRight className="w-4 h-4 text-purple-400" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </ScrollArea>
        
        <DialogFooter>
          <Button
            onClick={() => {
              onComplete()
              onOpenChange(false)
            }}
            className="bg-gradient-to-r from-green-600 to-emerald-600"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Отметить как изученное
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
