'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
  Star, Trophy, PartyPopper, Heart, Sparkles,
  CheckCircle, XCircle, ArrowRight, RotateCcw
} from 'lucide-react'
import type { QuizQuestion } from '@/data/types'

interface KidFriendlyQuizProps {
  questions: QuizQuestion[]
  subjectName: string
  onComplete: (correct: number, total: number) => void
  onBack: () => void
}

// Эмодзи для правильных ответов
const celebrationEmojis = ['🎉', '⭐', '🌟', '✨', '🏆', '👏', '🎊', '💪', '🥳', '🤩']
const encouragementEmojis = ['💪', '😊', '🌈', '🐝', '🦋', '🌻', '☀️', '🎈']

// Получить случайный эмодзи
const getRandomEmoji = (list: string[]) => list[Math.floor(Math.random() * list.length)]

// Цвета для вариантов ответа
const answerColors = [
  'from-red-400 to-pink-500',
  'from-blue-400 to-indigo-500',
  'from-green-400 to-emerald-500',
  'from-yellow-400 to-orange-500'
]

// Эмодзи для вариантов ответа
const answerEmojis = ['🔴', '🔵', '🟢', '🟡']

export default function KidFriendlyQuiz({
  questions,
  subjectName,
  onComplete,
  onBack
}: KidFriendlyQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [stars, setStars] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [wrongAnswers, setWrongAnswers] = useState<number[]>([])

  const question = questions[currentQuestion]
  const totalQuestions = questions.length
  const progress = ((currentQuestion + 1) / totalQuestions) * 100

  // Показываем финальный результат
  useEffect(() => {
    if (currentQuestion >= totalQuestions && !showResult) {
      setShowResult(true)
      // Большое празднование если все правильные
      if (score === totalQuestions) {
        setShowCelebration(true)
        setStars(prev => prev + 10) // Бонус за идеальный результат
      }
    }
  }, [currentQuestion, totalQuestions, showResult, score])

  // Обработка выбора ответа
  const handleSelectAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return // Уже ответили

    setSelectedAnswer(answerIndex)
    const correct = answerIndex === question.correctAnswer
    setIsCorrect(correct)

    if (correct) {
      setScore(prev => prev + 1)
      setStars(prev => prev + 2) // 2 звезды за правильный ответ

      // Вибрация успеха
      if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100])
      }

      // Автоматически переходим к следующему через 1.5 секунды
      setTimeout(() => {
        nextQuestion()
      }, 1500)
    } else {
      setWrongAnswers(prev => [...prev, currentQuestion])

      // Вибрация ошибки
      if (navigator.vibrate) {
        navigator.vibrate(200)
      }
    }
  }

  // Переход к следующему вопросу
  const nextQuestion = () => {
    setSelectedAnswer(null)
    setIsCorrect(null)
    setCurrentQuestion(prev => prev + 1)
  }

  // Повторить тест
  const retryQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setIsCorrect(null)
    setScore(0)
    setWrongAnswers([])
    setShowResult(false)
    setShowCelebration(false)
  }

  // Завершить тест
  const finishQuiz = () => {
    onComplete(score, totalQuestions)
  }

  // Финальный экран результатов
  if (showResult) {
    const percentage = Math.round((score / totalQuestions) * 100)
    const isPerfect = score === totalQuestions
    const isGood = percentage >= 70

    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center z-50 p-4">
        {/* Декоративные элементы */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float text-3xl sm:text-4xl opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {isPerfect ? '⭐' : isGood ? '🌟' : '💪'}
            </div>
          ))}
        </div>

        <Card className="relative z-10 w-full max-w-lg bg-white/95 rounded-3xl shadow-2xl overflow-hidden">
          {/* Шапка результата */}
          <div className={`p-6 sm:p-8 text-center ${
            isPerfect 
              ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
              : isGood 
                ? 'bg-gradient-to-r from-green-400 to-emerald-500'
                : 'bg-gradient-to-r from-blue-400 to-purple-500'
          }`}>
            <div className="text-6xl sm:text-8xl mb-4 animate-bounce-slow">
              {isPerfect ? '🏆' : isGood ? '🎉' : '💪'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {isPerfect ? 'ИДЕАЛЬНО!' : isGood ? 'ОТЛИЧНО!' : 'ПОПРОБУЙ ЕЩЁ!'}
            </h2>
          </div>

          {/* Результаты */}
          <div className="p-6 sm:p-8 text-center space-y-6">
            {/* Счёт */}
            <div className="flex justify-center items-center gap-4">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-bold text-purple-600">
                  {score}
                </div>
                <div className="text-gray-500 text-sm">правильных</div>
              </div>
              <div className="text-4xl text-gray-300">/</div>
              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-bold text-gray-400">
                  {totalQuestions}
                </div>
                <div className="text-gray-500 text-sm">вопросов</div>
              </div>
            </div>

            {/* Звёзды */}
            <div className="flex justify-center gap-2">
              {[...Array(Math.min(stars, 10))].map((_, i) => (
                <Star
                  key={i}
                  className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 fill-yellow-400 animate-star-pop"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>

            {/* Процент */}
            <div className="bg-gray-100 rounded-2xl p-4">
              <div className="text-3xl sm:text-4xl font-bold text-gray-700">
                {percentage}%
              </div>
              <Progress 
                value={percentage} 
                className="h-4 mt-2"
              />
            </div>

            {/* Подсказка */}
            {!isPerfect && (
              <p className="text-gray-500 text-sm">
                {isGood 
                  ? 'Ещё немного и будет идеально! 🌟'
                  : 'Не сдавайся! Ты справишься! 💪'
                }
              </p>
            )}

            {/* Кнопки */}
            <div className="flex flex-col gap-3">
              {!isPerfect && (
                <Button
                  onClick={retryQuiz}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-2xl py-5 sm:py-6 text-lg font-bold"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Попробовать снова
                </Button>
              )}

              <Button
                onClick={finishQuiz}
                className={`rounded-2xl py-5 sm:py-6 text-lg font-bold ${
                  isPerfect
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                {isPerfect ? (
                  <>
                    <Trophy className="w-5 h-5 mr-2" />
                    Забрать награду!
                  </>
                ) : (
                  'Закончить'
                )}
              </Button>
            </div>
          </div>
        </Card>

        {/* Празднование */}
        {showCelebration && (
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            <div className="text-center animate-celebration">
              <div className="text-9xl animate-bounce">🏆</div>
              <div className="text-4xl font-bold text-white mt-4 drop-shadow-lg">
                +10 ЗВЁЗД!
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes star-pop {
            0% { transform: scale(0); opacity: 0; }
            50% { transform: scale(1.3); }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes celebration {
            0% { transform: scale(0.5); opacity: 0; }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-float { animation: float 5s ease-in-out infinite; }
          .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
          .animate-star-pop { animation: star-pop 0.5s ease-out forwards; }
          .animate-celebration { animation: celebration 0.5s ease-out forwards; }
        `}</style>
      </div>
    )
  }

  // Экран вопроса
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 z-50 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float text-2xl sm:text-3xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {getRandomEmoji(encouragementEmojis)}
          </div>
        ))}
      </div>

      {/* Шапка */}
      <div className="relative z-10 p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          {/* Кнопка назад */}
          <Button
            onClick={onBack}
            className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-bold"
          >
            ← Выход
          </Button>

          {/* Счёт и звёзды */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/20 rounded-2xl px-4 sm:px-6 py-2 sm:py-3">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 fill-yellow-300 animate-pulse" />
              <span className="text-white text-xl sm:text-2xl font-bold">{stars}</span>
            </div>
          </div>
        </div>

        {/* Прогресс */}
        <div className="relative">
          <div className="bg-white/30 rounded-full h-4 sm:h-6 overflow-hidden">
            <div
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 px-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all ${
                  index < currentQuestion
                    ? 'bg-yellow-400'
                    : index === currentQuestion
                      ? 'bg-white ring-2 ring-yellow-400'
                      : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Вопрос */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-8">
        <Card className="w-full max-w-2xl bg-white/95 rounded-3xl shadow-2xl overflow-hidden">
          {/* Номер вопроса */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 sm:p-6 text-center">
            <div className="flex items-center justify-center gap-2 text-white/80 text-sm sm:text-base mb-2">
              <span>Вопрос</span>
              <span className="font-bold">{currentQuestion + 1}</span>
              <span>из</span>
              <span className="font-bold">{totalQuestions}</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white px-4">
              {question.question}
            </h2>
          </div>

          {/* Варианты ответа */}
          <div className="p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isTheCorrectAnswer = index === question.correctAnswer
              const showCorrect = selectedAnswer !== null && isTheCorrectAnswer
              const showWrong = isSelected && !isCorrect

              return (
                <Button
                  key={index}
                  onClick={() => handleSelectAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`
                    w-full rounded-2xl py-5 sm:py-6 lg:py-8 text-base sm:text-lg lg:text-xl font-bold
                    transition-all duration-300 relative overflow-hidden
                    ${showCorrect
                      ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white ring-4 ring-green-300 scale-105'
                      : showWrong
                        ? 'bg-gradient-to-r from-red-400 to-pink-500 text-white ring-4 ring-red-300 animate-shake'
                        : isSelected
                          ? `bg-gradient-to-r ${answerColors[index]} text-white scale-105`
                          : selectedAnswer === null
                            ? `bg-gradient-to-r ${answerColors[index]} hover:scale-105 hover:shadow-lg text-white`
                            : 'bg-gray-200 text-gray-400'
                    }
                  `}
                >
                  {/* Эмодзи */}
                  <span className="text-2xl sm:text-3xl mr-3">
                    {showCorrect ? '✅' : showWrong ? '❌' : answerEmojis[index]}
                  </span>
                  
                  {/* Текст ответа */}
                  <span className="flex-1 text-left">{option}</span>
                </Button>
              )
            })}

            {/* Объяснение после ответа */}
            {selectedAnswer !== null && question.explanation && (
              <div className={`mt-4 p-4 rounded-2xl ${
                isCorrect 
                  ? 'bg-green-100 border-2 border-green-300' 
                  : 'bg-orange-100 border-2 border-orange-300'
              }`}>
                <p className={`text-sm sm:text-base ${isCorrect ? 'text-green-700' : 'text-orange-700'}`}>
                  {isCorrect ? '🎉 ' : '💡 '}
                  {question.explanation}
                </p>
              </div>
            )}

            {/* Кнопка "Дальше" при неправильном ответе */}
            {selectedAnswer !== null && !isCorrect && (
              <Button
                onClick={nextQuestion}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl py-5 sm:py-6 text-lg font-bold mt-4"
              >
                Дальше
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            )}
          </div>
        </Card>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-shake { animation: shake 0.3s ease-in-out; }
      `}</style>
    </div>
  )
}
