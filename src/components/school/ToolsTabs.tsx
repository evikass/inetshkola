'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { 
  Layers3, Timer, FileText, BookOpen, Calendar, Bot, Shield,
  Gamepad2, ArrowLeft, Sparkles, Atom, FlaskConical
} from 'lucide-react'
import { 
  Flashcards, StudyTimer, Notes, FormulaReference, 
  Schedule, AITeacher, ParentDashboard,
  CountingGame, AlphabetGame, MemoryGame, ShapeGame,
  MultiplicationGame, SpellingGame, VirtualLaboratory
} from '@/components/school'
import { PeriodicTable } from '@/components/school/PeriodicTable'
import { PeriodicTableGame } from '@/components/school/PeriodicTableGame'
import { PeriodicTableBuildGame } from '@/components/school/PeriodicTableBuildGame'
import { PeriodicTableMemoryGame } from '@/components/school/PeriodicTableMemoryGame'
import { PeriodicTableGuessGame } from '@/components/school/PeriodicTableGuessGame'

interface ToolsTabsProps {
  onExperience: (xp: number) => void
  gradeId?: number
}

export default function ToolsTabs({ onExperience, gradeId = 0 }: ToolsTabsProps) {
  const [showCountingGame, setShowCountingGame] = useState(false)
  const [showAlphabetGame, setShowAlphabetGame] = useState(false)
  const [showMemoryGame, setShowMemoryGame] = useState(false)
  const [showShapeGame, setShowShapeGame] = useState(false)
  const [showMultiplicationGame, setShowMultiplicationGame] = useState(false)
  const [showSpellingGame, setShowSpellingGame] = useState(false)
  const [showPeriodicGame, setShowPeriodicGame] = useState(false)
  const [showPeriodicBuildGame, setShowPeriodicBuildGame] = useState(false)
  const [showPeriodicMemoryGame, setShowPeriodicMemoryGame] = useState(false)
  const [showPeriodicGuessGame, setShowPeriodicGuessGame] = useState(false)

  // Режимы: детский (0-2), начальный (3-4), старший (5+)
  const useKidMode = gradeId <= 2
  const useElementaryMode = gradeId >= 3 && gradeId <= 4

  // Обработчики мини-игр
  const handleGameComplete = (stars: number) => {
    onExperience(stars * 10)
    setShowCountingGame(false)
    setShowAlphabetGame(false)
    setShowMemoryGame(false)
    setShowShapeGame(false)
    setShowMultiplicationGame(false)
    setShowSpellingGame(false)
    setShowPeriodicGame(false)
    setShowPeriodicBuildGame(false)
    setShowPeriodicMemoryGame(false)
    setShowPeriodicGuessGame(false)
  }

  // Если открыта игра "Счёт"
  if (showCountingGame) {
    return (
      <CountingGame
        onBack={() => setShowCountingGame(false)}
        onComplete={handleGameComplete}
      />
    )
  }

  // Если открыта игра "Буквы"
  if (showAlphabetGame) {
    return (
      <AlphabetGame
        onBack={() => setShowAlphabetGame(false)}
        onComplete={handleGameComplete}
      />
    )
  }

  // Если открыта игра "Память"
  if (showMemoryGame) {
    return (
      <MemoryGame
        onBack={() => setShowMemoryGame(false)}
        onComplete={handleGameComplete}
      />
    )
  }

  // Если открыта игра "Фигуры"
  if (showShapeGame) {
    return (
      <ShapeGame
        onBack={() => setShowShapeGame(false)}
        onComplete={handleGameComplete}
      />
    )
  }

  // Если открыта игра "Таблица умножения"
  if (showMultiplicationGame) {
    return (
      <MultiplicationGame
        onBack={() => setShowMultiplicationGame(false)}
        onComplete={handleGameComplete}
      />
    )
  }

  // Если открыта игра "Правописание"
  if (showSpellingGame) {
    return (
      <SpellingGame
        onBack={() => setShowSpellingGame(false)}
        onComplete={handleGameComplete}
      />
    )
  }

  // Если открыта игра "Периодическая таблица"
  if (showPeriodicGame) {
    return (
      <PeriodicTableGame
        onBack={() => setShowPeriodicGame(false)}
        onComplete={handleGameComplete}
      />
    )
  }

  // Если открыта игра "Собери таблицу"
  if (showPeriodicBuildGame) {
    return (
      <PeriodicTableBuildGame
        onBack={() => setShowPeriodicBuildGame(false)}
        onComplete={handleGameComplete}
      />
    )
  }

  // Если открыта игра "Мемори"
  if (showPeriodicMemoryGame) {
    return (
      <PeriodicTableMemoryGame
        onBack={() => setShowPeriodicMemoryGame(false)}
        onComplete={handleGameComplete}
      />
    )
  }

  // Если открыта игра "Угадай элемент"
  if (showPeriodicGuessGame) {
    return (
      <PeriodicTableGuessGame
        onBack={() => setShowPeriodicGuessGame(false)}
        onComplete={handleGameComplete}
      />
    )
  }

  // Детский режим - упрощённый интерфейс с мини-играми (0-2 классы)
  if (useKidMode) {
    return (
      <div className="space-y-6">
        {/* Заголовок */}
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-6 h-6 text-yellow-400" />
          <h2 className="text-xl font-bold text-white">
            Игры и инструменты
          </h2>
        </div>

        {/* Мини-игры */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Игра "Счёт" */}
          <Card
            onClick={() => setShowCountingGame(true)}
            className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 cursor-pointer hover:scale-105 transition-all shadow-xl border-0"
          >
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce-slow">🔢</div>
              <h4 className="text-xl font-bold text-white mb-2">
                Учим цифры
              </h4>
              <p className="text-white/80 text-sm">
                Считай предметы! 🎯
              </p>
              <Button className="mt-4 bg-white/20 hover:bg-white/30 text-white rounded-2xl">
                Играть!
              </Button>
            </div>
          </Card>

          {/* Игра "Буквы" */}
          <Card
            onClick={() => setShowAlphabetGame(true)}
            className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-6 cursor-pointer hover:scale-105 transition-all shadow-xl border-0"
          >
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce-slow">🔤</div>
              <h4 className="text-xl font-bold text-white mb-2">
                Учим буквы
              </h4>
              <p className="text-white/80 text-sm">
                Найди слово! 📚
              </p>
              <Button className="mt-4 bg-white/20 hover:bg-white/30 text-white rounded-2xl">
                Играть!
              </Button>
            </div>
          </Card>

          {/* Игра "Память" */}
          <Card
            onClick={() => setShowMemoryGame(true)}
            className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-6 cursor-pointer hover:scale-105 transition-all shadow-xl border-0"
          >
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce-slow">🃏</div>
              <h4 className="text-xl font-bold text-white mb-2">
                Найди пару
              </h4>
              <p className="text-white/80 text-sm">
                Запоминай картинки! 🧠
              </p>
              <Button className="mt-4 bg-white/20 hover:bg-white/30 text-white rounded-2xl">
                Играть!
              </Button>
            </div>
          </Card>

          {/* Игра "Фигуры" */}
          <Card
            onClick={() => setShowShapeGame(true)}
            className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-6 cursor-pointer hover:scale-105 transition-all shadow-xl border-0"
          >
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce-slow">🔷</div>
              <h4 className="text-xl font-bold text-white mb-2">
                Учим фигуры
              </h4>
              <p className="text-white/80 text-sm">
                Узнавай формы! ⭐
              </p>
              <Button className="mt-4 bg-white/20 hover:bg-white/30 text-white rounded-2xl">
                Играть!
              </Button>
            </div>
          </Card>
        </div>

        {/* Другие инструменты для малышей */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Таймер */}
          <Card className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border-white/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-white flex items-center gap-2">
                <Timer className="w-5 h-5 text-blue-400" />
                Таймер
              </CardTitle>
            </CardHeader>
            <CardContent>
              <StudyTimer onSessionComplete={(duration) => onExperience(duration * 2)} />
            </CardContent>
          </Card>

          {/* Расписание */}
          <Card className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border-white/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-400" />
                Расписание
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Schedule />
            </CardContent>
          </Card>
        </div>

        <style jsx>{`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        `}</style>
      </div>
    )
  }

  // Начальный режим для 3-4 классов
  if (useElementaryMode) {
    return (
      <div className="space-y-6">
        {/* Заголовок */}
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-6 h-6 text-yellow-400" />
          <h2 className="text-xl font-bold text-white">
            Игры и инструменты
          </h2>
        </div>

        {/* Образовательные игры */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Таблица умножения */}
          <Card
            onClick={() => setShowMultiplicationGame(true)}
            className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 cursor-pointer hover:scale-105 transition-all shadow-xl border-0"
          >
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce-slow">✖️</div>
              <h4 className="text-xl font-bold text-white mb-2">
                Таблица умножения
              </h4>
              <p className="text-white/80 text-sm">
                Изучи таблицу умножения! 🧮
              </p>
              <Button className="mt-4 bg-white/20 hover:bg-white/30 text-white rounded-2xl">
                Играть!
              </Button>
            </div>
          </Card>

          {/* Правописание */}
          <Card
            onClick={() => setShowSpellingGame(true)}
            className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-6 cursor-pointer hover:scale-105 transition-all shadow-xl border-0"
          >
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce-slow">📝</div>
              <h4 className="text-xl font-bold text-white mb-2">
                Правописание
              </h4>
              <p className="text-white/80 text-sm">
                ЖИ-ШИ, ЧА-ЩА, ЧУ-ЩУ! ✏️
              </p>
              <Button className="mt-4 bg-white/20 hover:bg-white/30 text-white rounded-2xl">
                Играть!
              </Button>
            </div>
          </Card>

          {/* Игра "Память" */}
          <Card
            onClick={() => setShowMemoryGame(true)}
            className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-6 cursor-pointer hover:scale-105 transition-all shadow-xl border-0"
          >
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce-slow">🃏</div>
              <h4 className="text-xl font-bold text-white mb-2">
                Найди пару
              </h4>
              <p className="text-white/80 text-sm">
                Тренируй память! 🧠
              </p>
              <Button className="mt-4 bg-white/20 hover:bg-white/30 text-white rounded-2xl">
                Играть!
              </Button>
            </div>
          </Card>

          {/* Игра "Фигуры" */}
          <Card
            onClick={() => setShowShapeGame(true)}
            className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-6 cursor-pointer hover:scale-105 transition-all shadow-xl border-0"
          >
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce-slow">🔷</div>
              <h4 className="text-xl font-bold text-white mb-2">
                Геометрия
              </h4>
              <p className="text-white/80 text-sm">
                Узнавай фигуры! ⭐
              </p>
              <Button className="mt-4 bg-white/20 hover:bg-white/30 text-white rounded-2xl">
                Играть!
              </Button>
            </div>
          </Card>
        </div>

        {/* Инструменты */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Таймер */}
          <Card className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border-white/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-white flex items-center gap-2">
                <Timer className="w-5 h-5 text-blue-400" />
                Таймер
              </CardTitle>
            </CardHeader>
            <CardContent>
              <StudyTimer onSessionComplete={(duration) => onExperience(duration * 2)} />
            </CardContent>
          </Card>

          {/* Карточки */}
          <Card className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border-white/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-white flex items-center gap-2">
                <Layers3 className="w-5 h-5 text-purple-400" />
                Карточки
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Flashcards onProgress={(cards) => onExperience(cards * 5)} />
            </CardContent>
          </Card>

          {/* Расписание */}
          <Card className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border-white/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-400" />
                Расписание
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Schedule />
            </CardContent>
          </Card>
        </div>

        <style jsx>{`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        `}</style>
      </div>
    )
  }

  // Обычный режим для старших классов
  return (
    <Tabs defaultValue="flashcards" className="w-full">
      <TabsList className="bg-white/5 border border-white/10 mb-4 h-10 flex flex-wrap">
        <TabsTrigger value="flashcards" className="data-[state=active]:bg-purple-600 h-8 text-sm">
          <Layers3 className="w-4 h-4 mr-1.5" />
          Карточки
        </TabsTrigger>
        <TabsTrigger value="timer" className="data-[state=active]:bg-purple-600 h-8 text-sm">
          <Timer className="w-4 h-4 mr-1.5" />
          Таймер
        </TabsTrigger>
        <TabsTrigger value="notes" className="data-[state=active]:bg-purple-600 h-8 text-sm">
          <FileText className="w-4 h-4 mr-1.5" />
          Заметки
        </TabsTrigger>
        <TabsTrigger value="formulas" className="data-[state=active]:bg-purple-600 h-8 text-sm">
          <BookOpen className="w-4 h-4 mr-1.5" />
          Формулы
        </TabsTrigger>
        <TabsTrigger value="periodic" className="data-[state=active]:bg-purple-600 h-8 text-sm">
          <Atom className="w-4 h-4 mr-1.5" />
          Таблица
        </TabsTrigger>
        <TabsTrigger value="laboratory" className="data-[state=active]:bg-purple-600 h-8 text-sm">
          <FlaskConical className="w-4 h-4 mr-1.5" />
          Лаборатория
        </TabsTrigger>
        <TabsTrigger value="schedule" className="data-[state=active]:bg-purple-600 h-8 text-sm">
          <Calendar className="w-4 h-4 mr-1.5" />
          Расписание
        </TabsTrigger>
        <TabsTrigger value="aiteacher" className="data-[state=active]:bg-purple-600 h-8 text-sm">
          <Bot className="w-4 h-4 mr-1.5" />
          Учитель
        </TabsTrigger>
        <TabsTrigger value="parent" className="data-[state=active]:bg-purple-600 h-8 text-sm">
          <Shield className="w-4 h-4 mr-1.5" />
          Родителям
        </TabsTrigger>
      </TabsList>

      <TabsContent value="flashcards">
        <Card className="bg-white/5 border-white/10 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Layers3 className="w-5 h-5 text-purple-400" />
              Карточки для запоминания
            </CardTitle>
            <CardDescription className="text-gray-400">
              Учите и повторяйте материал с помощью интерактивных карточек
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Flashcards onProgress={(cards) => onExperience(cards * 5)} />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="timer">
        <Card className="bg-white/5 border-white/10 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Timer className="w-5 h-5 text-blue-400" />
              Таймер для учёбы
            </CardTitle>
            <CardDescription className="text-gray-400">
              Техника Помодоро для эффективного обучения
            </CardDescription>
          </CardHeader>
          <CardContent>
            <StudyTimer onSessionComplete={(duration) => onExperience(duration * 2)} />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="notes">
        <Card className="bg-white/5 border-white/10 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-green-400" />
              Заметки ученика
            </CardTitle>
            <CardDescription className="text-gray-400">
              Записывайте важную информацию и идеи
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Notes />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="formulas">
        <Card className="bg-white/5 border-white/10 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-400" />
              Справочник формул
            </CardTitle>
            <CardDescription className="text-gray-400">
              Быстрый доступ к основным формулам по математике, физике и химии
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormulaReference />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="periodic">
        <div className="flex flex-wrap gap-3 mb-6">
          <Button
            onClick={() => setShowPeriodicGame(true)}
            className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl hover:from-violet-600"
          >
            🕵️ Найди элемент
          </Button>
          <Button
            onClick={() => setShowPeriodicBuildGame(true)}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:from-emerald-600"
          >
            🧩 Собери таблицу
          </Button>
          <Button
            onClick={() => setShowPeriodicMemoryGame(true)}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600"
          >
            🧠 Мемори: пары
          </Button>
          <Button
            onClick={() => setShowPeriodicGuessGame(true)}
            className="bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl hover:from-rose-600"
          >
            🔍 Угадай элемент
          </Button>
        </div>
        <PeriodicTable />
      </TabsContent>

      <TabsContent value="laboratory">
        <Card className="bg-white/5 border-white/10 backdrop-blur overflow-hidden">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-green-400" />
              Виртуальная лаборатория
            </CardTitle>
            <CardDescription className="text-gray-400">
              Проводите химические эксперименты в безопасной виртуальной среде
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <VirtualLaboratory />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="schedule">
        <Card className="bg-white/5 border-white/10 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-400" />
              Расписание уроков
            </CardTitle>
            <CardDescription className="text-gray-400">
              Планируйте своё учебное время и отслеживайте домашние задания
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Schedule />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="aiteacher">
        <AITeacher />
      </TabsContent>

      <TabsContent value="parent">
        <ParentDashboard />
      </TabsContent>
    </Tabs>
  )
}
