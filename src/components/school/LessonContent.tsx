'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  BookOpen, Play, Gamepad2, CheckCircle, ChevronRight,
  Star, Zap, Clock, Heart, Trophy, Sparkles, RefreshCw,
  Volume2, Image as ImageIcon, Video, ExternalLink
} from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'

// ==================== ТИПЫ ====================

export type LessonType = 'story' | 'task' | 'video' | 'game'

interface BaseLessonContent {
  id: string
  title: string
  type: LessonType
  points: number
  estimatedTime: number
}

export interface StoryLesson extends BaseLessonContent {
  type: 'story'
  content: string
  paragraphs: Array<{
    text: string
    image?: string
    emoji?: string
    highlightWords?: string[]
  }>
  questions?: Array<{
    question: string
    options: string[]
    correctAnswer: number
  }>
}

export interface TaskLesson extends BaseLessonContent {
  type: 'task'
  instructions: string
  tasks: Array<{
    id: string
    type: 'choice' | 'input' | 'match' | 'order'
    question: string
    options?: string[]
    correctAnswer: string | number
    hint?: string
    points: number
  }>
}

export interface VideoLesson extends BaseLessonContent {
  type: 'video'
  videoUrl?: string
  thumbnail?: string
  description: string
  duration: string
  subtitles?: string
}

export interface GameLesson extends BaseLessonContent {
  type: 'game'
  gameUrl: string
  gameType: 'quiz' | 'puzzle' | 'memory' | 'adventure' | 'custom'
  instructions: string
  thumbnail?: string
}

export type LessonContent = StoryLesson | TaskLesson | VideoLesson | GameLesson

// ==================== АНИМИРОВАННЫЙ ТЕКСТ ====================

function AnimatedParagraph({
  text,
  highlightWords = [],
  delay = 0
}: {
  text: string
  highlightWords?: string[]
  delay?: number
}) {
  if (!highlightWords.length) {
    return (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
      >
        {text}
      </motion.p>
    )
  }

  const regex = new RegExp(`(${highlightWords.join('|')})`, 'gi')
  const parts = text.split(regex)

  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="text-lg leading-relaxed"
    >
      {parts.map((part, index) => {
        const isHighlighted = highlightWords.some(
          word => part.toLowerCase() === word.toLowerCase()
        )
        return isHighlighted ? (
          <motion.span
            key={index}
            className="text-yellow-400 font-bold bg-yellow-500/20 px-1.5 py-0.5 rounded"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
          >
            {part}
          </motion.span>
        ) : (
          <span key={index}>{part}</span>
        )
      })}
    </motion.p>
  )
}

// ==================== УРОК-ИСТОРИЯ ====================

export function StoryLessonContent({ lesson }: { lesson: StoryLesson }) {
  const [currentParagraph, setCurrentParagraph] = useState(0)
  const [showQuestions, setShowQuestions] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [completed, setCompleted] = useState(false)

  const { addExperience, playSound } = useSchool()

  const handleNextParagraph = () => {
    playSound('click')
    if (currentParagraph < lesson.paragraphs.length - 1) {
      setCurrentParagraph(prev => prev + 1)
    } else if (lesson.questions && lesson.questions.length > 0) {
      setShowQuestions(true)
    } else {
      handleComplete()
    }
  }

  const handleAnswer = (answerIndex: number) => {
    playSound('click')
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    if (currentQuestion < lesson.questions!.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      handleComplete(newAnswers)
    }
  }

  const handleComplete = (finalAnswers = answers) => {
    let correctCount = 0
    if (lesson.questions) {
      correctCount = finalAnswers.filter(
        (a, i) => a === lesson.questions![i].correctAnswer
      ).length
    }

    const earnedPoints = lesson.points + (correctCount * 5)
    playSound('achievement')
    addExperience(earnedPoints)
    setCompleted(true)
  }

  // Экран завершения
  if (completed) {
    const correctCount = lesson.questions
      ? answers.filter((a, i) => a === lesson.questions![i].correctAnswer).length
      : 0

    return (
      <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/30 border-purple-500/30">
        <CardContent className="py-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring' }}
            className="text-8xl mb-4"
          >
            📚
          </motion.div>
          <h2 className="text-2xl font-bold text-white mb-2">История завершена!</h2>
          <p className="text-slate-300 mb-4">{lesson.title}</p>

          {lesson.questions && (
            <div className="flex justify-center gap-4 mb-4">
              <div className="bg-green-500/20 px-4 py-2 rounded-lg">
                <span className="text-green-400 font-bold">{correctCount}</span>
                <span className="text-slate-400 ml-1">правильных</span>
              </div>
              <div className="bg-yellow-500/20 px-4 py-2 rounded-lg">
                <span className="text-yellow-400 font-bold">+{lesson.points}</span>
                <span className="text-slate-400 ml-1">XP</span>
              </div>
            </div>
          )}

          <Button onClick={() => {
            setCurrentParagraph(0)
            setShowQuestions(false)
            setCurrentQuestion(0)
            setAnswers([])
            setCompleted(false)
          }}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Прочитать ещё раз
          </Button>
        </CardContent>
      </Card>
    )
  }

  // Вопросы
  if (showQuestions && lesson.questions) {
    const question = lesson.questions[currentQuestion]

    return (
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              Вопрос {currentQuestion + 1}/{lesson.questions.length}
            </CardTitle>
            <Badge variant="outline" className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-yellow-400" />
              +{5} XP
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-medium mb-6">{question.question}</p>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(index)}
                className="w-full p-4 rounded-xl border border-slate-600 bg-slate-700/30 hover:bg-slate-700/50 text-left transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  // История
  const paragraph = lesson.paragraphs[currentParagraph]
  const progress = ((currentParagraph + 1) / lesson.paragraphs.length) * 100

  return (
    <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/30">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-400" />
            {lesson.title}
          </CardTitle>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Clock className="w-4 h-4" />
            {lesson.estimatedTime} мин
          </div>
        </div>
        <Progress value={progress} className="h-2" />
        <p className="text-xs text-slate-400 mt-1">
          Страница {currentParagraph + 1} из {lesson.paragraphs.length}
        </p>
      </CardHeader>

      <CardContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentParagraph}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {/* Эмодзи или изображение */}
            {paragraph.emoji && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="text-center text-6xl mb-4"
              >
                {paragraph.emoji}
              </motion.div>
            )}

            {/* Текст */}
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
              <AnimatedParagraph
                text={paragraph.text}
                highlightWords={paragraph.highlightWords}
                delay={0.1}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Кнопки */}
        <div className="flex justify-between items-center mt-6">
          <Button
            variant="ghost"
            onClick={() => setCurrentParagraph(Math.max(0, currentParagraph - 1))}
            disabled={currentParagraph === 0}
          >
            ← Назад
          </Button>

          <Button
            onClick={handleNextParagraph}
            className="bg-gradient-to-r from-blue-500 to-purple-500"
          >
            {currentParagraph < lesson.paragraphs.length - 1 ? (
              <>
                Далее
                <ChevronRight className="w-4 h-4 ml-1" />
              </>
            ) : lesson.questions ? (
              <>
                К вопросам
                <BookOpen className="w-4 h-4 ml-1" />
              </>
            ) : (
              <>
                Завершить
                <CheckCircle className="w-4 h-4 ml-1" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// ==================== УРОК-ЗАДАНИЕ ====================

export function TaskLessonContent({ lesson }: { lesson: TaskLesson }) {
  const [currentTask, setCurrentTask] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const { addExperience, playSound } = useSchool()

  const task = lesson.tasks[currentTask]
  const isLastTask = currentTask === lesson.tasks.length - 1

  const handleCheck = () => {
    const isCorrect = selectedAnswer === task.correctAnswer

    if (isCorrect) {
      playSound('success')
      setScore(prev => prev + task.points)
    } else {
      playSound('error')
    }

    setShowResult(true)
  }

  const handleNext = () => {
    if (isLastTask) {
      playSound('achievement')
      addExperience(score + lesson.points)
      setCompleted(true)
    } else {
      setCurrentTask(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setShowHint(false)
    }
  }

  // Экран завершения
  if (completed) {
    const maxScore = lesson.tasks.reduce((sum, t) => sum + t.points, 0) + lesson.points
    const percentage = Math.round((score / maxScore) * 100)

    return (
      <Card className="bg-gradient-to-br from-green-900/50 to-teal-900/30 border-green-500/30">
        <CardContent className="py-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring' }}
          >
            <Trophy className="w-20 h-20 mx-auto text-yellow-400 mb-4" />
          </motion.div>
          <h2 className="text-2xl font-bold text-white mb-2">Задания выполнены!</h2>
          <p className="text-slate-300 mb-4">{lesson.title}</p>

          <div className="flex justify-center gap-4 mb-6">
            <div className="bg-green-500/20 px-4 py-2 rounded-lg">
              <span className="text-green-400 text-2xl font-bold">{percentage}%</span>
            </div>
            <div className="bg-yellow-500/20 px-4 py-2 rounded-lg">
              <span className="text-yellow-400 text-2xl font-bold">+{score + lesson.points}</span>
              <span className="text-slate-400 ml-1">XP</span>
            </div>
          </div>

          <div className="flex justify-center gap-2 mb-4">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <Star className={`w-10 h-10 ${
                  i < Math.ceil(percentage / 33) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'
                }`} />
              </motion.div>
            ))}
          </div>

          <Button onClick={() => {
            setCurrentTask(0)
            setSelectedAnswer(null)
            setShowResult(false)
            setScore(0)
            setCompleted(false)
          }}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Попробовать снова
          </Button>
        </CardContent>
      </Card>
    )
  }

  const progress = ((currentTask + 1) / lesson.tasks.length) * 100

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            {lesson.title}
          </CardTitle>
          <Badge variant="outline" className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-yellow-400" />
            {score} XP
          </Badge>
        </div>
        <Progress value={progress} className="h-2 mt-2" />
        <p className="text-xs text-slate-400 mt-1">
          Задание {currentTask + 1} из {lesson.tasks.length}
        </p>
      </CardHeader>

      <CardContent>
        <p className="text-lg font-medium mb-6">{task.question}</p>

        {/* Варианты ответов */}
        {task.type === 'choice' && task.options && (
          <div className="space-y-3 mb-6">
            {task.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === task.correctAnswer
              const showCorrect = showResult && isCorrect
              const showWrong = showResult && isSelected && !isCorrect

              return (
                <motion.button
                  key={index}
                  whileHover={!showResult ? { scale: 1.02 } : {}}
                  whileTap={!showResult ? { scale: 0.98 } : {}}
                  onClick={() => !showResult && setSelectedAnswer(index)}
                  className={`w-full p-4 rounded-xl border text-left transition-all ${
                    showCorrect
                      ? 'bg-green-500/20 border-green-500/50 text-green-300'
                      : showWrong
                        ? 'bg-red-500/20 border-red-500/50 text-red-300'
                        : isSelected
                          ? 'bg-purple-500/20 border-purple-500/50'
                          : 'border-slate-600 bg-slate-700/30 hover:bg-slate-700/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      showCorrect ? 'bg-green-500 text-white' :
                      showWrong ? 'bg-red-500 text-white' :
                      isSelected ? 'bg-purple-500 text-white' : 'bg-slate-600 text-slate-300'
                    }`}>
                      {showCorrect ? '✓' : showWrong ? '✗' : String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                  </div>
                </motion.button>
              )
            })}
          </div>
        )}

        {/* Подсказка */}
        {task.hint && !showResult && (
          <div className="mb-4">
            {showHint ? (
              <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-blue-300">💡 {task.hint}</p>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHint(true)}
                className="text-slate-400"
              >
                <Volume2 className="w-4 h-4 mr-2" />
                Показать подсказку
              </Button>
            )}
          </div>
        )}

        {/* Результат */}
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg mb-4 ${
              selectedAnswer === task.correctAnswer
                ? 'bg-green-500/10 border border-green-500/30'
                : 'bg-red-500/10 border border-red-500/30'
            }`}
          >
            <div className="flex items-center gap-2">
              {selectedAnswer === task.correctAnswer ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Правильно! +{task.points} XP</span>
                </>
              ) : (
                <>
                  <Heart className="w-5 h-5 text-red-400" />
                  <span className="text-red-300">
                    Неправильно. Правильный ответ: {task.options?.[task.correctAnswer as number]}
                  </span>
                </>
              )}
            </div>
          </motion.div>
        )}

        {/* Кнопки */}
        <div className="flex justify-end gap-2">
          {!showResult ? (
            <Button
              onClick={handleCheck}
              disabled={selectedAnswer === null}
              className="bg-gradient-to-r from-purple-500 to-pink-500"
            >
              Проверить
            </Button>
          ) : (
            <Button onClick={handleNext} className="bg-gradient-to-r from-green-500 to-teal-500">
              {isLastTask ? 'Завершить' : 'Далее'}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// ==================== УРОК-ВИДЕО ====================

export function VideoLessonContent({ lesson }: { lesson: VideoLesson }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [watched, setWatched] = useState(false)

  const { addExperience, playSound } = useSchool()

  const handleWatchComplete = () => {
    if (!watched) {
      playSound('success')
      addExperience(lesson.points)
      setWatched(true)
    }
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Video className="w-5 h-5 text-red-400" />
            {lesson.title}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {lesson.duration}
            </Badge>
            {watched && (
              <Badge className="bg-green-500/20 text-green-400">
                <CheckCircle className="w-3 h-3 mr-1" />
                Просмотрено
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* Видео-заглушка */}
        <div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden mb-4">
          {lesson.thumbnail ? (
            <img
              src={lesson.thumbnail}
              alt={lesson.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-900/30 to-orange-900/30">
              <div className="text-center">
                <Video className="w-16 h-16 mx-auto text-red-400 mb-2" />
                <p className="text-slate-400">Видеоурок</p>
              </div>
            </div>
          )}

          {/* Кнопка воспроизведения */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setIsPlaying(!isPlaying)
              playSound('click')
            }}
            className="absolute inset-0 flex items-center justify-center bg-black/30 group"
          >
            <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center shadow-lg group-hover:bg-red-600 transition-colors">
              {isPlaying ? (
                <div className="flex gap-1">
                  <div className="w-2 h-8 bg-white rounded" />
                  <div className="w-2 h-8 bg-white rounded" />
                </div>
              ) : (
                <Play className="w-8 h-8 text-white ml-1" />
              )}
            </div>
          </motion.button>
        </div>

        {/* Описание */}
        <p className="text-slate-300 mb-4">{lesson.description}</p>

        {/* Кнопки */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-slate-400 flex items-center gap-1">
            <ImageIcon className="w-4 h-4" />
            {lesson.subtitles || 'Субтитры доступны'}
          </p>

          {!watched ? (
            <Button
              onClick={handleWatchComplete}
              className="bg-gradient-to-r from-red-500 to-orange-500"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Отметить как просмотренное
            </Button>
          ) : (
            <Badge className="bg-green-500/20 text-green-400 text-base px-4 py-2">
              +{lesson.points} XP получено!
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// ==================== УРОК-ИГРА ====================

export function GameLessonContent({ lesson }: { lesson: GameLesson }) {
  const [started, setStarted] = useState(false)
  const [completed, setCompleted] = useState(false)

  const { addExperience, playSound } = useSchool()

  const gameIcons = {
    quiz: '🎯',
    puzzle: '🧩',
    memory: '🧠',
    adventure: '🗺️',
    custom: '🎮'
  }

  const gameColors = {
    quiz: 'from-blue-500 to-cyan-500',
    puzzle: 'from-purple-500 to-pink-500',
    memory: 'from-green-500 to-teal-500',
    adventure: 'from-orange-500 to-red-500',
    custom: 'from-indigo-500 to-purple-500'
  }

  const handleStartGame = () => {
    playSound('click')
    setStarted(true)
    // В реальном приложении здесь была бы логика игры
  }

  const handleCompleteGame = () => {
    playSound('achievement')
    addExperience(lesson.points)
    setCompleted(true)
  }

  // Экран завершения
  if (completed) {
    return (
      <Card className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-yellow-500/30">
        <CardContent className="py-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring' }}
          >
            <Trophy className="w-20 h-20 mx-auto text-yellow-400 mb-4" />
          </motion.div>
          <h2 className="text-2xl font-bold text-white mb-2">Игра пройдена!</h2>
          <p className="text-slate-300 mb-4">{lesson.title}</p>

          <div className="bg-yellow-500/20 inline-flex items-center gap-2 px-6 py-3 rounded-lg mb-4">
            <Zap className="w-6 h-6 text-yellow-400" />
            <span className="text-2xl font-bold text-yellow-400">+{lesson.points} XP</span>
          </div>

          <div className="flex justify-center gap-4">
            <Button variant="outline" onClick={() => setCompleted(false)}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Играть снова
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Игра запущена (заглушка)
  if (started) {
    return (
      <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-purple-400" />
              {lesson.title}
            </CardTitle>
            <Badge className="bg-purple-500/20 text-purple-400">
              Игра
            </Badge>
          </div>
        </CardHeader>

        <CardContent>
          {/* Игровая область */}
          <div className="aspect-video bg-slate-900 rounded-xl border border-slate-700 flex items-center justify-center mb-4">
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="text-6xl mb-4"
              >
                {gameIcons[lesson.gameType]}
              </motion.div>
              <p className="text-slate-400 mb-4">Игра загружается...</p>
              <p className="text-xs text-slate-500">
                {lesson.gameUrl ? (
                  <a
                    href={lesson.gameUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 flex items-center gap-1 justify-center"
                  >
                    Открыть игру <ExternalLink className="w-3 h-3" />
                  </a>
                ) : 'Ссылка на игру появится здесь'}
              </p>
            </div>
          </div>

          <p className="text-slate-300 mb-4">{lesson.instructions}</p>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStarted(false)}>
              ← Назад
            </Button>
            <Button
              onClick={handleCompleteGame}
              className="bg-gradient-to-r from-green-500 to-teal-500"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Завершить игру
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Стартовый экран
  return (
    <Card className={`bg-gradient-to-br ${gameColors[lesson.gameType]} bg-opacity-10 border-opacity-30`}>
      <CardContent className="py-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring' }}
          className="text-8xl mb-4"
        >
          {gameIcons[lesson.gameType]}
        </motion.div>

        <h2 className="text-2xl font-bold text-white mb-2">{lesson.title}</h2>
        <p className="text-slate-300 mb-4">{lesson.instructions}</p>

        <div className="flex justify-center gap-4 mb-6 text-sm">
          <div className="flex items-center gap-1 text-slate-400">
            <Clock className="w-4 h-4" />
            {lesson.estimatedTime} мин
          </div>
          <div className="flex items-center gap-1 text-yellow-400">
            <Zap className="w-4 h-4" />
            +{lesson.points} XP
          </div>
        </div>

        <Button
          onClick={handleStartGame}
          size="lg"
          className={`bg-gradient-to-r ${gameColors[lesson.gameType]} text-white font-bold px-8 py-6 rounded-full`}
        >
          <Gamepad2 className="w-5 h-5 mr-2" />
          Начать игру
        </Button>
      </CardContent>
    </Card>
  )
}

// ==================== УНИВЕРСАЛЬНЫЙ КОМПОНЕНТ ====================

interface LessonContentRendererProps {
  lesson: LessonContent
}

export function LessonContentRenderer({ lesson }: LessonContentRendererProps) {
  switch (lesson.type) {
    case 'story':
      return <StoryLessonContent lesson={lesson} />
    case 'task':
      return <TaskLessonContent lesson={lesson} />
    case 'video':
      return <VideoLessonContent lesson={lesson} />
    case 'game':
      return <GameLessonContent lesson={lesson} />
    default:
      return (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="py-8 text-center">
            <p className="text-slate-400">Неизвестный тип урока</p>
          </CardContent>
        </Card>
      )
  }
}

// ==================== ПРИМЕРЫ ДАННЫХ ====================

export const exampleStoryLesson: StoryLesson = {
  id: 'story-1',
  title: 'Путешествие в мир букв',
  type: 'story',
  points: 20,
  estimatedTime: 5,
  content: 'Давным-давно в одной далёкой стране жили-были буквы...',
  paragraphs: [
    {
      text: 'Давным-давно в одной далёкой стране жили-были буквы. Они были очень дружные и любили играть вместе.',
      emoji: '📖',
      highlightWords: ['буквы', 'дружные']
    },
    {
      text: 'Буква А была самой первой в алфавите. Она говорила: "А-а-а!" и все её слышали.',
      emoji: '🅰️',
      highlightWords: ['А', 'первой', 'алфавите']
    },
    {
      text: 'Буква Б была второй. Она любила бегать и прыгать. "Б-б-б!" — весело смеялась она.',
      emoji: '🔤',
      highlightWords: ['Б', 'второй', 'бегать']
    }
  ],
  questions: [
    {
      question: 'Какая буква была первой в алфавите?',
      options: ['Буква Б', 'Буква А', 'Буква В', 'Буква Г'],
      correctAnswer: 1
    },
    {
      question: 'Что любила делать буква Б?',
      options: ['Спать', 'Читать', 'Бегать и прыгать', 'Петь'],
      correctAnswer: 2
    }
  ]
}

export const exampleTaskLesson: TaskLesson = {
  id: 'task-1',
  title: 'Практика: Счёт от 1 до 10',
  type: 'task',
  points: 15,
  estimatedTime: 10,
  instructions: 'Реши примеры на сложение и вычитание',
  tasks: [
    {
      id: 't1',
      type: 'choice',
      question: 'Сколько будет 2 + 3?',
      options: ['4', '5', '6', '7'],
      correctAnswer: 1,
      hint: 'Можно посчитать на пальчиках',
      points: 5
    },
    {
      id: 't2',
      type: 'choice',
      question: 'Сколько будет 7 - 2?',
      options: ['4', '5', '6', '7'],
      correctAnswer: 1,
      hint: 'Было 7, убрали 2',
      points: 5
    },
    {
      id: 't3',
      type: 'choice',
      question: 'Какое число больше: 6 или 4?',
      options: ['6', '4', 'Они равны', 'Не знаю'],
      correctAnswer: 0,
      hint: '6 идёт после 4',
      points: 5
    }
  ]
}

export const exampleVideoLesson: VideoLesson = {
  id: 'video-1',
  title: 'Видеоурок: Учим цвета',
  type: 'video',
  points: 25,
  estimatedTime: 15,
  description: 'В этом видео мы выучим основные цвета на русском и английском языке. Весёлые персонажи помогут запомнить названия цветов!',
  duration: '12:34',
  subtitles: 'Русские и английские субтитры'
}

export const exampleGameLesson: GameLesson = {
  id: 'game-1',
  title: 'Игра: Найди буквы',
  type: 'game',
  points: 30,
  estimatedTime: 10,
  gameType: 'memory',
  gameUrl: '#',
  instructions: 'Найди все пары одинаковых букв! Открывай карточки и запоминай их расположение.'
}
