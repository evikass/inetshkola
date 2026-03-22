'use client'

import { useState, useMemo, useCallback } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  BookOpen, Volume2, Star, Check, X, RotateCcw, ChevronRight,
  Brain, Globe, Languages, Sparkles, Award, Target
} from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'

// Типы
interface VocabularyWord {
  id: string
  word: string
  translation: string
  pronunciation?: string
  example?: string
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  subject: string
  mastered: boolean
  reviewCount: number
  correctCount: number
}

// Словарные наборы
const VOCABULARY_SETS: Record<string, Omit<VocabularyWord, 'id' | 'mastered' | 'reviewCount' | 'correctCount'>[]> = {
  // Английский - базовый
  'english-basic': [
    { word: 'Hello', translation: 'Привет', pronunciation: 'хэ-лоу', example: 'Hello, friend!', category: 'Приветствия', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Goodbye', translation: 'До свидания', pronunciation: 'гуд-бай', example: 'Goodbye, see you!', category: 'Приветствия', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Thank you', translation: 'Спасибо', pronunciation: 'сэнк ю', example: 'Thank you very much!', category: 'Вежливость', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Please', translation: 'Пожалуйста', pronunciation: 'плиз', example: 'Please help me.', category: 'Вежливость', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Yes', translation: 'Да', pronunciation: 'йес', example: 'Yes, I can!', category: 'Базовые', difficulty: 'beginner', subject: 'Английский' },
    { word: 'No', translation: 'Нет', pronunciation: 'ноу', example: 'No, thank you.', category: 'Базовые', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Friend', translation: 'Друг', pronunciation: 'френд', example: 'She is my friend.', category: 'Семья и друзья', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Family', translation: 'Семья', pronunciation: 'фэ-ми-ли', example: 'My family is big.', category: 'Семья и друзья', difficulty: 'beginner', subject: 'Английский' },
    { word: 'School', translation: 'Школа', pronunciation: 'скул', example: 'I go to school.', category: 'Образование', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Teacher', translation: 'Учитель', pronunciation: 'ти-чер', example: 'The teacher is kind.', category: 'Образование', difficulty: 'beginner', subject: 'Английский' },
  ],
  // Английский - животные
  'english-animals': [
    { word: 'Cat', translation: 'Кошка', pronunciation: 'кэт', example: 'The cat is sleeping.', category: 'Животные', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Dog', translation: 'Собака', pronunciation: 'дог', example: 'I have a dog.', category: 'Животные', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Bird', translation: 'Птица', pronunciation: 'бёрд', example: 'The bird can fly.', category: 'Животные', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Fish', translation: 'Рыба', pronunciation: 'фиш', example: 'Fish swim in water.', category: 'Животные', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Horse', translation: 'Лошадь', pronunciation: 'хорс', example: 'The horse runs fast.', category: 'Животные', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Rabbit', translation: 'Кролик', pronunciation: 'рэ-бит', example: 'The rabbit likes carrots.', category: 'Животные', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Elephant', translation: 'Слон', pronunciation: 'э-ле-фант', example: 'Elephants are big.', category: 'Животные', difficulty: 'intermediate', subject: 'Английский' },
    { word: 'Butterfly', translation: 'Бабочка', pronunciation: 'ба-тер-флай', example: 'A beautiful butterfly!', category: 'Животные', difficulty: 'intermediate', subject: 'Английский' },
  ],
  // Английский - цвета
  'english-colors': [
    { word: 'Red', translation: 'Красный', pronunciation: 'ред', example: 'The apple is red.', category: 'Цвета', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Blue', translation: 'Синий', pronunciation: 'блу', example: 'The sky is blue.', category: 'Цвета', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Green', translation: 'Зелёный', pronunciation: 'грин', example: 'Grass is green.', category: 'Цвета', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Yellow', translation: 'Жёлтый', pronunciation: 'йел-лоу', example: 'The sun is yellow.', category: 'Цвета', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Orange', translation: 'Оранжевый', pronunciation: 'о-риндж', example: 'An orange fruit.', category: 'Цвета', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Purple', translation: 'Фиолетовый', pronunciation: 'пёр-пл', example: 'Grapes are purple.', category: 'Цвета', difficulty: 'beginner', subject: 'Английский' },
    { word: 'White', translation: 'Белый', pronunciation: 'уайт', example: 'Snow is white.', category: 'Цвета', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Black', translation: 'Чёрный', pronunciation: 'блэк', example: 'The cat is black.', category: 'Цвета', difficulty: 'beginner', subject: 'Английский' },
  ],
  // Английский - числа
  'english-numbers': [
    { word: 'One', translation: 'Один', pronunciation: 'уан', example: 'One apple.', category: 'Числа', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Two', translation: 'Два', pronunciation: 'ту', example: 'Two cats.', category: 'Числа', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Three', translation: 'Три', pronunciation: 'три', example: 'Three books.', category: 'Числа', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Four', translation: 'Четыре', pronunciation: 'фо', example: 'Four birds.', category: 'Числа', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Five', translation: 'Пять', pronunciation: 'файв', example: 'Five fingers.', category: 'Числа', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Ten', translation: 'Десять', pronunciation: 'тен', example: 'Ten toes.', category: 'Числа', difficulty: 'beginner', subject: 'Английский' },
    { word: 'Twenty', translation: 'Двадцать', pronunciation: 'твен-ти', example: 'Twenty students.', category: 'Числа', difficulty: 'intermediate', subject: 'Английский' },
    { word: 'Hundred', translation: 'Сто', pronunciation: 'хан-дред', example: 'One hundred years.', category: 'Числа', difficulty: 'intermediate', subject: 'Английский' },
  ],
  // Математические термины
  'math-terms': [
    { word: 'Сложение', translation: 'Объединение чисел (+)', example: '5 + 3 = 8', category: 'Операции', difficulty: 'beginner', subject: 'Математика' },
    { word: 'Вычитание', translation: 'Уменьшение числа (-)', example: '10 - 4 = 6', category: 'Операции', difficulty: 'beginner', subject: 'Математика' },
    { word: 'Умножение', translation: 'Повторение сложения (×)', example: '3 × 4 = 12', category: 'Операции', difficulty: 'intermediate', subject: 'Математика' },
    { word: 'Деление', translation: 'Разделение на части (÷)', example: '12 ÷ 3 = 4', category: 'Операции', difficulty: 'intermediate', subject: 'Математика' },
    { word: 'Сумма', translation: 'Результат сложения', example: 'Сумма 2 и 3 равна 5', category: 'Результаты', difficulty: 'beginner', subject: 'Математика' },
    { word: 'Разность', translation: 'Результат вычитания', example: 'Разность 7 и 2 равна 5', category: 'Результаты', difficulty: 'beginner', subject: 'Математика' },
    { word: 'Произведение', translation: 'Результат умножения', example: 'Произведение 4 и 5 равно 20', category: 'Результаты', difficulty: 'intermediate', subject: 'Математика' },
    { word: 'Частное', translation: 'Результат деления', example: 'Частное 15 и 3 равно 5', category: 'Результаты', difficulty: 'intermediate', subject: 'Математика' },
    { word: 'Треугольник', translation: 'Фигура с 3 углами', example: '△', category: 'Геометрия', difficulty: 'beginner', subject: 'Математика' },
    { word: 'Квадрат', translation: 'Фигура с 4 равными сторонами', example: '□', category: 'Геометрия', difficulty: 'beginner', subject: 'Математика' },
  ],
  // Русский язык - правила
  'russian-rules': [
    { word: 'ЖИ-ШИ', translation: 'Пишется с буквой И', example: 'Жираф, шина, машина', category: 'Орфография', difficulty: 'beginner', subject: 'Русский язык' },
    { word: 'ЧА-ЩА', translation: 'Пишется с буквой А', example: 'Чай, чаща, задача', category: 'Орфография', difficulty: 'beginner', subject: 'Русский язык' },
    { word: 'ЧУ-ЩУ', translation: 'Пишется с буквой У', example: 'Чудо, щука, чулок', category: 'Орфография', difficulty: 'beginner', subject: 'Русский язык' },
    { word: 'ЧК, ЧН, НЧ', translation: 'Без мягкого знака', example: 'Дочка, ночной, пенчик', category: 'Орфография', difficulty: 'beginner', subject: 'Русский язык' },
    { word: 'Существительное', translation: 'Часть речи, обозначающая предмет', example: 'Стол, кошка, небо', category: 'Части речи', difficulty: 'intermediate', subject: 'Русский язык' },
    { word: 'Глагол', translation: 'Часть речи, обозначающая действие', example: 'Бежать, читать, спать', category: 'Части речи', difficulty: 'intermediate', subject: 'Русский язык' },
    { word: 'Прилагательное', translation: 'Часть речи, обозначающая признак', example: 'Красивый, умный, большой', category: 'Части речи', difficulty: 'intermediate', subject: 'Русский язык' },
    { word: 'Подлежащее', translation: 'Главный член предложения (кто? что?)', example: 'Кошка спит. Кошка - подлежащее', category: 'Синтаксис', difficulty: 'intermediate', subject: 'Русский язык' },
    { word: 'Сказуемое', translation: 'Главный член предложения (что делает?)', example: 'Кошка спит. Спит - сказуемое', category: 'Синтаксис', difficulty: 'intermediate', subject: 'Русский язык' },
  ],
}

// Загрузка данных
function loadVocabulary(): VocabularyWord[] {
  if (typeof window === 'undefined') return []
  try {
    const saved = localStorage.getItem('vocabulary_v1')
    if (saved) return JSON.parse(saved)
  } catch { /* ignore */ }

  // Инициализация
  const allWords: VocabularyWord[] = []
  Object.entries(VOCABULARY_SETS).forEach(([setId, words]) => {
    words.forEach((word, index) => {
      allWords.push({
        ...word,
        id: `${setId}-${index}`,
        mastered: false,
        reviewCount: 0,
        correctCount: 0
      })
    })
  })

  localStorage.setItem('vocabulary_v1', JSON.stringify(allWords))
  return allWords
}

// Основной компонент
export function VocabularyBuilder() {
  const { addExperience, playSound, setShowConfetti } = useSchool()

  const [words, setWords] = useState<VocabularyWord[]>(() => loadVocabulary())
  const [selectedSet, setSelectedSet] = useState<string | null>(null)
  const [mode, setMode] = useState<'browse' | 'learn' | 'quiz'>('browse')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showTranslation, setShowTranslation] = useState(false)
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null)
  const [quizOptions, setQuizOptions] = useState<string[]>([])
  const [sessionStats, setSessionStats] = useState({ reviewed: 0, correct: 0 })

  // Сохранение
  const saveWords = useCallback((data: VocabularyWord[]) => {
    setWords(data)
    localStorage.setItem('vocabulary_v1', JSON.stringify(data))
  }, [])

  // Наборы слов
  const sets = useMemo(() => {
    const setMap = new Map<string, { id: string, name: string, count: number, mastered: number, subject: string }>()

    words.forEach(word => {
      const setId = word.id.split('-').slice(0, 2).join('-')
      const setName = setId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())

      if (!setMap.has(setId)) {
        setMap.set(setId, {
          id: setId,
          name: setName,
          count: 0,
          mastered: 0,
          subject: word.subject
        })
      }

      const set = setMap.get(setId)!
      set.count++
      if (word.mastered) set.mastered++
    })

    return Array.from(setMap.values())
  }, [words])

  // Фильтрованные слова
  const filteredWords = useMemo(() => {
    if (!selectedSet) return []
    return words.filter(w => w.id.startsWith(selectedSet))
  }, [words, selectedSet])

  // Текущее слово
  const currentWord = filteredWords[currentIndex]

  // Статистика
  const stats = useMemo(() => ({
    total: words.length,
    mastered: words.filter(w => w.mastered).length,
    beginner: words.filter(w => w.difficulty === 'beginner').length,
    intermediate: words.filter(w => w.difficulty === 'intermediate').length,
  }), [words])

  // Начать изучение
  const startLearning = (setId: string) => {
    setSelectedSet(setId)
    setMode('browse')
    setCurrentIndex(0)
    setShowTranslation(false)
    setSessionStats({ reviewed: 0, correct: 0 })
  }

  // Начать викторину
  const startQuiz = () => {
    setMode('quiz')
    setCurrentIndex(0)
    generateQuizOptions(0)
    setSessionStats({ reviewed: 0, correct: 0 })
  }

  // Генерация вариантов ответа
  const generateQuizOptions = (index: number) => {
    const word = filteredWords[index]
    if (!word) return

    const otherTranslations = filteredWords
      .filter(w => w.id !== word.id)
      .map(w => w.translation)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)

    const options = [...otherTranslations, word.translation]
      .sort(() => Math.random() - 0.5)

    setQuizOptions(options)
    setQuizAnswer(null)
  }

  // Показать перевод
  const handleShowTranslation = () => {
    setShowTranslation(true)
    playSound('click')
  }

  // Следующее слово (режим просмотра)
  const handleNext = (known: boolean) => {
    if (!currentWord) return

    // Обновляем слово
    const updatedWords = words.map(w =>
      w.id === currentWord.id
        ? {
            ...w,
            reviewCount: w.reviewCount + 1,
            correctCount: w.correctCount + (known ? 1 : 0),
            mastered: w.correctCount + (known ? 1 : 0) >= 3
          }
        : w
    )
    saveWords(updatedWords)

    if (known) {
      playSound('success')
      setSessionStats(prev => ({ ...prev, correct: prev.correct + 1 }))
    } else {
      playSound('error')
    }

    setSessionStats(prev => ({ ...prev, reviewed: prev.reviewed + 1 }))

    if (currentIndex < filteredWords.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setShowTranslation(false)
    } else {
      // Завершение
      const xpGain = sessionStats.correct * 5 + sessionStats.reviewed * 2
      addExperience(xpGain)
      setMode('browse')
      setSelectedSet(null)
      if (sessionStats.correct >= 5) {
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 2000)
      }
    }
  }

  // Ответ на викторину
  const handleQuizAnswer = (answer: string) => {
    if (!currentWord || quizAnswer) return

    setQuizAnswer(answer)
    const isCorrect = answer === currentWord.translation

    if (isCorrect) {
      playSound('success')
      setSessionStats(prev => ({ ...prev, correct: prev.correct + 1, reviewed: prev.reviewed + 1 }))

      // Обновляем слово
      saveWords(words.map(w =>
        w.id === currentWord.id
          ? { ...w, reviewCount: w.reviewCount + 1, correctCount: w.correctCount + 1 }
          : w
      ))
    } else {
      playSound('error')
      setSessionStats(prev => ({ ...prev, reviewed: prev.reviewed + 1 }))
    }

    // Следующий вопрос
    setTimeout(() => {
      if (currentIndex < filteredWords.length - 1) {
        setCurrentIndex(prev => prev + 1)
        generateQuizOptions(currentIndex + 1)
      } else {
        // Завершение викторины
        addExperience(sessionStats.correct * 10)
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 2000)
        setMode('browse')
      }
    }, 1000)
  }

  // Вернуться к наборам
  const handleBack = () => {
    setSelectedSet(null)
    setMode('browse')
    setCurrentIndex(0)
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardContent className="py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Словарь</h3>
              <p className="text-xs text-slate-400">Учи новые слова!</p>
            </div>
          </div>
          {!selectedSet && (
            <Badge className="bg-indigo-500/20 text-indigo-400">
              {stats.mastered}/{stats.total}
            </Badge>
          )}
        </div>

        {!selectedSet ? (
          // Выбор набора
          <div className="space-y-4">
            {/* Статистика */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="p-2 bg-slate-700/30 rounded-lg text-center">
                <p className="text-lg font-bold text-indigo-400">{stats.total}</p>
                <p className="text-xs text-slate-400">Слов</p>
              </div>
              <div className="p-2 bg-slate-700/30 rounded-lg text-center">
                <p className="text-lg font-bold text-green-400">{stats.mastered}</p>
                <p className="text-xs text-slate-400">Освоено</p>
              </div>
              <div className="p-2 bg-slate-700/30 rounded-lg text-center">
                <p className="text-lg font-bold text-yellow-400">{sets.length}</p>
                <p className="text-xs text-slate-400">Наборов</p>
              </div>
            </div>

            {/* Список наборов */}
            <div className="space-y-2 max-h-[350px] overflow-y-auto">
              {sets.map(set => (
                <div
                  key={set.id}
                  className="p-3 bg-slate-700/30 rounded-lg border border-slate-600 hover:border-indigo-500/50 cursor-pointer transition-all"
                  onClick={() => startLearning(set.id)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{set.name}</p>
                      <p className="text-xs text-slate-400">{set.subject}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {set.mastered}/{set.count}
                      </Badge>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                  <Progress
                    value={(set.mastered / set.count) * 100}
                    className="h-1 mt-2"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : mode === 'browse' ? (
          // Режим просмотра
          <div>
            <div className="flex items-center justify-between mb-4">
              <Button variant="ghost" size="sm" onClick={handleBack}>
                ← Назад
              </Button>
              <Button variant="outline" size="sm" onClick={startQuiz}>
                <Target className="w-4 h-4 mr-1" />
                Викторина
              </Button>
            </div>

            {/* Прогресс */}
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-slate-400">Прогресс</span>
              <span>{currentIndex + 1}/{filteredWords.length}</span>
            </div>
            <Progress value={((currentIndex + 1) / filteredWords.length) * 100} className="h-1 mb-4" />

            {/* Карточка слова */}
            {currentWord && (
              <div className="space-y-4">
                <div
                  className="p-6 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-xl text-center cursor-pointer"
                  onClick={handleShowTranslation}
                >
                  <Badge className="mb-2">{currentWord.category}</Badge>
                  <p className="text-3xl font-bold mb-2">{currentWord.word}</p>
                  {currentWord.pronunciation && (
                    <p className="text-sm text-slate-400">[{currentWord.pronunciation}]</p>
                  )}

                  {showTranslation && (
                    <div className="mt-4 pt-4 border-t border-slate-600 animate-slide-up">
                      <p className="text-xl text-green-400">{currentWord.translation}</p>
                      {currentWord.example && (
                        <p className="text-sm text-slate-400 mt-2 italic">"{currentWord.example}"</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Кнопки */}
                {showTranslation ? (
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1 border-red-500/50 text-red-400"
                      onClick={() => handleNext(false)}
                    >
                      <X className="w-4 h-4 mr-1" />
                      Повторить
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-green-500/50 text-green-400"
                      onClick={() => handleNext(true)}
                    >
                      <Check className="w-4 h-4 mr-1" />
                      Знаю!
                    </Button>
                  </div>
                ) : (
                  <Button onClick={handleShowTranslation} className="w-full">
                    Показать перевод
                  </Button>
                )}
              </div>
            )}

            {/* Статистика сессии */}
            <div className="mt-4 flex justify-center gap-4 text-sm text-slate-400">
              <span>Изучено: {sessionStats.reviewed}</span>
              <span>•</span>
              <span className="text-green-400">Знаю: {sessionStats.correct}</span>
            </div>
          </div>
        ) : (
          // Режим викторины
          <div>
            <div className="flex items-center justify-between mb-4">
              <Button variant="ghost" size="sm" onClick={() => setMode('browse')}>
                ← Назад
              </Button>
              <Badge className="bg-indigo-500/20 text-indigo-400">
                {currentIndex + 1}/{filteredWords.length}
              </Badge>
            </div>

            {/* Вопрос */}
            {currentWord && (
              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-xl text-center">
                  <p className="text-sm text-slate-400 mb-2">Как переводится?</p>
                  <p className="text-3xl font-bold">{currentWord.word}</p>
                  {currentWord.pronunciation && (
                    <p className="text-sm text-slate-400 mt-1">[{currentWord.pronunciation}]</p>
                  )}
                </div>

                {/* Варианты ответа */}
                <div className="grid grid-cols-2 gap-2">
                  {quizOptions.map((option, i) => {
                    const isSelected = quizAnswer === option
                    const isCorrect = option === currentWord.translation
                    const showResult = quizAnswer !== null

                    return (
                      <Button
                        key={i}
                        variant="outline"
                        className={`
                          p-4 h-auto text-wrap
                          ${showResult && isCorrect ? 'border-green-500 bg-green-500/20 text-green-400' : ''}
                          ${showResult && isSelected && !isCorrect ? 'border-red-500 bg-red-500/20 text-red-400' : ''}
                          ${!showResult ? 'hover:border-indigo-500/50' : ''}
                        `}
                        onClick={() => handleQuizAnswer(option)}
                        disabled={quizAnswer !== null}
                      >
                        {option}
                      </Button>
                    )
                  })}
                </div>

                {/* Статистика */}
                <div className="mt-4 flex justify-center gap-4 text-sm text-slate-400">
                  <span>Правильно: {sessionStats.correct}</span>
                  <span>•</span>
                  <span>Из {sessionStats.reviewed}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// Мини-версия
export function VocabularyBuilderMini() {
  const stats = useMemo(() => {
    const words = loadVocabulary()
    return {
      total: words.length,
      mastered: words.filter(w => w.mastered).length
    }
  }, [])

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardContent className="py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium">Словарь</span>
          </div>
          <Badge variant="outline" className="text-xs">
            {stats.mastered}/{stats.total}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
