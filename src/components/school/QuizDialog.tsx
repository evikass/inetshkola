'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle, Zap, Baby, GraduationCap } from 'lucide-react'
import type { QuizQuestion } from '@/data/types'
import KidFriendlyQuiz from './KidFriendlyQuiz'
import { useSound } from '@/hooks/useSound'

interface QuizDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  questions: QuizQuestion[]
  subjectName: string
  onComplete: (correct: number, total: number) => void
  gradeId?: number
}

function QuizContent({ 
  questions, 
  subjectName, 
  onComplete,
  onClose 
}: { 
  questions: QuizQuestion[]
  subjectName: string
  onComplete: (correct: number, total: number) => void
  onClose: () => void
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const { playCorrect, playWrong, playSuccess } = useSound()

  const currentQuestion = questions[currentIndex]

  const handleAnswer = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
    setShowResult(true)
    
    if (index === currentQuestion.correctAnswer) {
      setCorrectCount(prev => prev + 1)
      playCorrect()
    } else {
      playWrong()
    }
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setIsComplete(true)
      playSuccess()
      onComplete(correctCount, questions.length)
    }
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2 text-lg">
          <Zap className="w-5 h-5 text-yellow-400" />
          Тест: {subjectName}
        </DialogTitle>
        <DialogDescription className="text-gray-400">
          {isComplete ? 'Результаты' : `Вопрос ${currentIndex + 1} из ${questions.length}`}
        </DialogDescription>
      </DialogHeader>
      
      {isComplete ? (
        <div className="text-center py-6">
          <div className="text-6xl mb-4">
            {correctCount === questions.length ? '🏆' : 
             correctCount >= questions.length / 2 ? '👍' : '📚'}
          </div>
          <h3 className="text-2xl font-bold mb-2">
            {correctCount === questions.length ? 'Отлично!' :
             correctCount >= questions.length / 2 ? 'Хорошо!' : 'Попробуй ещё раз'}
          </h3>
          <p className="text-gray-400 mb-4">
            Правильных ответов: {correctCount} из {questions.length}
          </p>
          <Button onClick={onClose} className="w-full">
            Закрыть
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Progress */}
          <div className="flex gap-1">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full ${
                  i < currentIndex ? 'bg-green-500' :
                  i === currentIndex ? 'bg-purple-500' : 'bg-white/10'
                }`}
              />
            ))}
          </div>
          
          {/* Question */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-lg font-medium text-white">
              {currentQuestion.question}
            </p>
          </div>
          
          {/* Options */}
          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === currentQuestion.correctAnswer
              let bgClass = 'bg-white/5 hover:bg-white/10 border-white/10'
              
              if (showResult) {
                if (isCorrect) bgClass = 'bg-green-500/20 border-green-500/30'
                else if (isSelected && !isCorrect) bgClass = 'bg-red-500/20 border-red-500/30'
              }
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                  className={`w-full p-3 rounded-xl border text-left transition-all ${bgClass}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium shrink-0">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-white">{option}</span>
                    {showResult && isCorrect && (
                      <CheckCircle className="w-5 h-5 text-green-400 ml-auto" />
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-red-400 ml-auto" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>
          
          {/* Explanation */}
          {showResult && (
            <div className={`p-3 rounded-xl text-sm ${
              selectedAnswer === currentQuestion.correctAnswer
                ? 'bg-green-500/10 border border-green-500/20'
                : 'bg-red-500/10 border border-red-500/20'
            }`}>
              <p className="font-medium mb-1">
                {selectedAnswer === currentQuestion.correctAnswer ? '✓ Правильно!' : '✗ Неправильно'}
              </p>
              <p className="text-gray-400">{currentQuestion.explanation}</p>
            </div>
          )}
          
          {showResult && (
            <Button
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              {currentIndex < questions.length - 1 ? 'Следующий вопрос' : 'Завершить тест'}
            </Button>
          )}
        </div>
      )}
    </>
  )
}

// Диалог выбора режима для малышей
function KidQuizModeSelector({
  subjectName,
  onSelectKidMode,
  onSelectStandardMode,
  onClose
}: {
  subjectName: string
  onSelectKidMode: () => void
  onSelectStandardMode: () => void
  onClose: () => void
}) {
  return (
    <div className="text-center py-6">
      <div className="text-6xl mb-4 animate-bounce">🎯</div>
      <h3 className="text-2xl font-bold mb-2 text-white">
        Тест: {subjectName}
      </h3>
      <p className="text-purple-200 mb-6">
        Выбери режим теста!
      </p>
      
      <div className="space-y-3">
        {/* Детский режим - БОЛЬШАЯ КНОПКА */}
        <Button
          onClick={onSelectKidMode}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl py-8 text-xl font-bold shadow-xl flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-2">
            <Baby className="w-8 h-8" />
            <span>Игровой тест</span>
          </div>
          <span className="text-sm font-normal opacity-80">
            Картинки и звёзды! ⭐
          </span>
        </Button>

        {/* Обычный режим */}
        <Button
          onClick={onSelectStandardMode}
          className="w-full bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 rounded-2xl py-4 text-base font-medium flex items-center justify-center gap-2"
        >
          <GraduationCap className="w-5 h-5" />
          Обычный тест
        </Button>
      </div>

      <Button
        variant="ghost"
        onClick={onClose}
        className="mt-4 text-white/60 hover:text-white hover:bg-white/10"
      >
        Отмена
      </Button>
    </div>
  )
}

export default function QuizDialog({ 
  open, 
  onOpenChange, 
  questions, 
  subjectName, 
  onComplete,
  gradeId = 0
}: QuizDialogProps) {
  const [showKidQuiz, setShowKidQuiz] = useState(false)
  const [showStandardQuiz, setShowStandardQuiz] = useState(false)

  // Детский режим для классов 0-2
  const useKidMode = gradeId <= 2

  // Открыть детский тест
  const handleOpenKidQuiz = () => {
    setShowKidQuiz(true)
    setShowStandardQuiz(false)
  }

  // Открыть обычный тест
  const handleOpenStandardQuiz = () => {
    setShowStandardQuiz(true)
    setShowKidQuiz(false)
  }

  // Закрыть всё
  const handleClose = () => {
    setShowKidQuiz(false)
    setShowStandardQuiz(false)
    onOpenChange(false)
  }

  // Завершить тест
  const handleComplete = (correct: number, total: number) => {
    onComplete(correct, total)
    handleClose()
  }

  if (questions.length === 0) return null

  // Если открыт детский тест
  if (showKidQuiz) {
    return (
      <KidFriendlyQuiz
        questions={questions}
        subjectName={subjectName}
        onComplete={handleComplete}
        onBack={handleClose}
      />
    )
  }

  // Если открыт обычный тест (для малышей)
  if (showStandardQuiz && useKidMode) {
    return (
      <Dialog open={true} onOpenChange={handleClose}>
        <DialogContent className="bg-slate-900 border-white/10 text-white max-w-lg">
          <QuizContent 
            key={subjectName}
            questions={questions} 
            subjectName={subjectName} 
            onComplete={handleComplete}
            onClose={handleClose}
          />
        </DialogContent>
      </Dialog>
    )
  }

  // Для малышей показываем выбор режима
  if (useKidMode && open) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-gradient-to-br from-purple-900 to-pink-900 border-white/20 text-white max-w-md">
          <KidQuizModeSelector
            subjectName={subjectName}
            onSelectKidMode={handleOpenKidQuiz}
            onSelectStandardMode={handleOpenStandardQuiz}
            onClose={handleClose}
          />
        </DialogContent>
      </Dialog>
    )
  }

  // Обычный тест для старших классов
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-900 border-white/10 text-white max-w-lg">
        {open && (
          <QuizContent 
            key={subjectName}
            questions={questions} 
            subjectName={subjectName} 
            onComplete={onComplete}
            onClose={() => onOpenChange(false)}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
