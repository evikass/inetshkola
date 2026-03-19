'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FlaskConical, Atom, Zap, Thermometer, Beaker, 
  TestTube, Sparkles, AlertTriangle, CheckCircle,
  Play, RotateCcw, BookOpen
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Experiment {
  id: string
  title: string
  category: 'physics' | 'chemistry' | 'biology'
  description: string
  materials: string[]
  steps: string[]
  result: string
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  points: number
}

const EXPERIMENTS: Experiment[] = [
  // Физика
  {
    id: 'exp-1',
    title: 'Электростатика',
    category: 'physics',
    description: 'Узнай, как работает статическое электричество',
    materials: ['Воздушный шарик', 'Ваши волосы', 'Мелкие кусочки бумаги'],
    steps: [
      'Надуй воздушный шарик',
      'Потри шарик о волосы в течение 30 секунд',
      'Поднеси шарик к мелким кусочкам бумаги',
      'Наблюдай, как бумага прилипает к шарику'
    ],
    result: 'Бумажки притягиваются к шарику!',
    explanation: 'При трении шарик получает отрицательный заряд. Бумага нейтральна, но заряды в ней перераспределяются, создавая притяжение.',
    difficulty: 'easy',
    points: 15
  },
  {
    id: 'exp-2',
    title: 'Преломление света',
    category: 'physics',
    description: 'Исследуй, как свет меняет направление в воде',
    materials: ['Стакан с водой', 'Карандаш', 'Лист бумаги'],
    steps: [
      'Налей воду в прозрачный стакан',
      'Опусти карандаш в воду под углом',
      'Посмотри на карандаш сбоку',
      'Попробуй с разными углами наклона'
    ],
    result: 'Карандаш кажется сломанным на границе воды и воздуха!',
    explanation: 'Свет меняет скорость при переходе из воздуха в воду. Это называется преломлением света.',
    difficulty: 'easy',
    points: 15
  },
  {
    id: 'exp-3',
    title: 'Центробежная сила',
    category: 'physics',
    description: 'Узнай, почему вода не выливается из вращающегося ведра',
    materials: ['Маленькое ведёрко', 'Вода', 'Верёвка'],
    steps: [
      'Привяжи верёвку к ведёрку',
      'Налей немного воды в ведёрко',
      'Начни вращать ведёрко по кругу',
      'Постепенно увеличивай скорость'
    ],
    result: 'Вода остаётся в ведёрке даже когда оно перевёрнуто!',
    explanation: 'Центробежная сила толкает воду ко дну ведёрка, не давая ей вылиться.',
    difficulty: 'medium',
    points: 20
  },
  // Химия
  {
    id: 'exp-4',
    title: 'Уксус + Сода',
    category: 'chemistry',
    description: 'Наблюдай химическую реакцию с выделением газа',
    materials: ['Пищевая сода', 'Уксус', 'Стакан', 'Ложка'],
    steps: [
      'Положи ложку соды в стакан',
      'Медленно добавляй уксус',
      'Наблюдай за реакцией',
      'Попробуй добавить больше соды'
    ],
    result: 'Образуется много пузырьков - это углекислый газ!',
    explanation: 'Сода (NaHCO₃) реагирует с уксусной кислотой, выделяя CO₂. Это газ, который мы видим как пузырьки.',
    difficulty: 'easy',
    points: 15
  },
  {
    id: 'exp-5',
    title: 'Лавовая лампа',
    category: 'chemistry',
    description: 'Создай свою лавовую лампу',
    materials: ['Прозрачная бутылка', 'Растительное масло', 'Вода', 'Пищевой краситель', 'Шипучая таблетка'],
    steps: [
      'Заполни бутылку на 1/4 водой',
      'Добавь масло до верха',
      'Добавь несколько капель красителя',
      'Брось шипучую таблетку'
    ],
    result: 'Цветные капли плавно поднимаются и опускаются!',
    explanation: 'Таблетка выделяет газ, который поднимает окрашенную воду. На поверхности газ выходит, и вода опускается.',
    difficulty: 'medium',
    points: 25
  },
  {
    id: 'exp-6',
    title: 'pH индикатор',
    category: 'chemistry',
    description: 'Сделай индикатор кислотности из капусты',
    materials: ['Краснокочанная капуста', 'Горячая вода', 'Лимон', 'Сода', 'Уксус'],
    steps: [
      'Нарежь капусту и залей горячей водой',
      'Дай настояться 15 минут',
      'Процеди - получился индикатор!',
      'Добавь разные вещества и наблюдай за цветом'
    ],
    result: 'Цвет меняется: красный (кислота), фиолетовый (нейтрально), синий/зелёный (щелочь)!',
    explanation: 'Пигменты капусты меняют цвет в зависимости от pH раствора. Это натуральный индикатор кислотности.',
    difficulty: 'medium',
    points: 25
  },
  // Биология
  {
    id: 'exp-7',
    title: 'Фотосинтез',
    category: 'biology',
    description: 'Увидь, как растения вырабатывают кислород',
    materials: ['Свежий лист', 'Стакан воды', 'Солнечный свет'],
    steps: [
      'Положи лист в стакан с водой',
      'Поставь на солнечное место',
      'Жди 1-2 часа',
      'Наблюдай за пузырьками на листе'
    ],
    result: 'На листе появляются маленькие пузырьки кислорода!',
    explanation: 'Растения используют солнечный свет для превращения CO₂ и воды в глюкозу и кислород. Пузырьки - это O₂.',
    difficulty: 'easy',
    points: 15
  },
  {
    id: 'exp-8',
    title: 'ДНК из банана',
    category: 'biology',
    description: 'Извлеки ДНК из банана в домашних условиях',
    materials: ['Банан', 'Соль', 'Средство для мытья посуды', 'Спирт'],
    steps: [
      'Разомни половину банана',
      'Добавь щепотку соли и средство',
      'Перемешай и процеди',
      'Осторожно добавь холодный спирт'
    ],
    result: 'Появляются белые нити - это ДНК банана!',
    explanation: 'Средство разрушает клеточные мембраны. Соль помогает ДНК собраться вместе. Спирт делает ДНК видимой.',
    difficulty: 'hard',
    points: 35
  }
]

interface Props {
  onScore?: (points: number) => void
  gradeId?: number
}

export default function ScienceLab({ onScore, gradeId = 5 }: Props) {
  const [selectedExperiment, setSelectedExperiment] = useState<Experiment | null>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [experimentCompleted, setExperimentCompleted] = useState(false)
  const [completedExperiments, setCompletedExperiments] = useState<string[]>([])

  const handleStartExperiment = (experiment: Experiment) => {
    setSelectedExperiment(experiment)
    setCurrentStep(0)
    setCompletedSteps([])
    setShowResult(false)
    setExperimentCompleted(false)
  }

  const handleCompleteStep = () => {
    if (!selectedExperiment) return
    
    setCompletedSteps(prev => [...prev, currentStep])
    
    if (currentStep < selectedExperiment.steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleFinishExperiment = () => {
    if (!selectedExperiment) return
    
    setExperimentCompleted(true)
    setCompletedExperiments(prev => [...prev, selectedExperiment.id])
    onScore?.(selectedExperiment.points)
  }

  const handleResetExperiment = () => {
    setCurrentStep(0)
    setCompletedSteps([])
    setShowResult(false)
    setExperimentCompleted(false)
  }

  const handleBack = () => {
    setSelectedExperiment(null)
    handleResetExperiment()
  }

  const filteredExperiments = gradeId <= 4 
    ? EXPERIMENTS.filter(e => e.difficulty === 'easy')
    : gradeId <= 7 
      ? EXPERIMENTS.filter(e => e.difficulty !== 'hard')
      : EXPERIMENTS

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'physics': return <Atom className="w-5 h-5" />
      case 'chemistry': return <FlaskConical className="w-5 h-5" />
      case 'biology': return <TestTube className="w-5 h-5" />
      default: return <Beaker className="w-5 h-5" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'physics': return 'from-blue-500 to-cyan-500'
      case 'chemistry': return 'from-green-500 to-emerald-500'
      case 'biology': return 'from-purple-500 to-pink-500'
      default: return 'from-gray-500 to-slate-500'
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500/20 text-green-300 border-green-500/30'
      case 'medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
      case 'hard': return 'bg-red-500/20 text-red-300 border-red-500/30'
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    }
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-emerald-900/80 to-teal-900/80 border-emerald-500/30 backdrop-blur">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <FlaskConical className="w-6 h-6 text-emerald-400" />
              Научная лаборатория
            </h3>
            <p className="text-emerald-300">Проведи виртуальные эксперименты!</p>
          </div>
          <div className="px-3 py-1 bg-emerald-500/30 rounded-lg">
            <span className="text-emerald-300 text-xs">Выполнено</span>
            <span className="text-white font-bold ml-1">{completedExperiments.length}/{filteredExperiments.length}</span>
          </div>
        </div>

        {!selectedExperiment ? (
          /* Experiment List */
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-white/10 border border-white/20">
              <TabsTrigger value="all" className="data-[state=active]:bg-emerald-500/30">Все</TabsTrigger>
              <TabsTrigger value="physics" className="data-[state=active]:bg-blue-500/30">
                <Atom className="w-4 h-4 mr-1" /> Физика
              </TabsTrigger>
              <TabsTrigger value="chemistry" className="data-[state=active]:bg-green-500/30">
                <FlaskConical className="w-4 h-4 mr-1" /> Химия
              </TabsTrigger>
              <TabsTrigger value="biology" className="data-[state=active]:bg-purple-500/30">
                <TestTube className="w-4 h-4 mr-1" /> Биология
              </TabsTrigger>
            </TabsList>

            {['all', 'physics', 'chemistry', 'biology'].map(category => (
              <TabsContent key={category} value={category}>
                <div className="grid gap-3">
                  {filteredExperiments
                    .filter(exp => category === 'all' || exp.category === category)
                    .map(exp => (
                      <motion.div
                        key={exp.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleStartExperiment(exp)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          completedExperiments.includes(exp.id)
                            ? 'bg-emerald-500/20 border-emerald-500/30'
                            : 'bg-white/5 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${getCategoryColor(exp.category)}`}>
                              {getCategoryIcon(exp.category)}
                            </div>
                            <div>
                              <h4 className="font-bold text-white flex items-center gap-2">
                                {exp.title}
                                {completedExperiments.includes(exp.id) && (
                                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                                )}
                              </h4>
                              <p className="text-white/60 text-sm">{exp.description}</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className={`px-2 py-0.5 rounded text-xs border ${getDifficultyColor(exp.difficulty)}`}>
                              {exp.difficulty === 'easy' ? 'Легко' : exp.difficulty === 'medium' ? 'Средне' : 'Сложно'}
                            </span>
                            <span className="text-yellow-400 text-sm font-bold">+{exp.points} XP</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          /* Experiment Detail */
          <div className="space-y-6">
            {/* Back button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="text-white/60 hover:text-white hover:bg-white/10"
            >
              ← Назад к экспериментам
            </Button>

            {/* Experiment header */}
            <div className={`p-4 rounded-xl bg-gradient-to-r ${getCategoryColor(selectedExperiment.category)}`}>
              <div className="flex items-center gap-3">
                {getCategoryIcon(selectedExperiment.category)}
                <div>
                  <h4 className="text-xl font-bold text-white">{selectedExperiment.title}</h4>
                  <p className="text-white/80">{selectedExperiment.description}</p>
                </div>
              </div>
            </div>

            {/* Materials */}
            <div className="p-4 bg-white/5 rounded-xl">
              <h5 className="text-white font-bold mb-2 flex items-center gap-2">
                <Beaker className="w-4 h-4 text-cyan-400" />
                Материалы:
              </h5>
              <div className="flex flex-wrap gap-2">
                {selectedExperiment.materials.map((material, i) => (
                  <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                    {material}
                  </span>
                ))}
              </div>
            </div>

            {/* Steps */}
            {!showResult ? (
              <div className="space-y-3">
                <h5 className="text-white font-bold flex items-center gap-2">
                  <Play className="w-4 h-4 text-green-400" />
                  Шаги эксперимента:
                </h5>
                {selectedExperiment.steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`p-4 rounded-xl border ${
                      completedSteps.includes(i)
                        ? 'bg-green-500/20 border-green-500/30'
                        : i === currentStep
                          ? 'bg-yellow-500/20 border-yellow-500/30'
                          : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        completedSteps.includes(i)
                          ? 'bg-green-500 text-white'
                          : i === currentStep
                            ? 'bg-yellow-500 text-white'
                            : 'bg-white/10 text-white/50'
                      }`}>
                        {completedSteps.includes(i) ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          i + 1
                        )}
                      </div>
                      <p className={`flex-1 ${
                        completedSteps.includes(i)
                          ? 'text-green-300'
                          : i === currentStep
                            ? 'text-white'
                            : 'text-white/50'
                      }`}>
                        {step}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Action button */}
                {currentStep < selectedExperiment.steps.length && (
                  <Button
                    onClick={handleCompleteStep}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                  >
                    {completedSteps.includes(currentStep) ? 'Далее →' : '✓ Выполнить шаг'}
                  </Button>
                )}
              </div>
            ) : (
              /* Result */
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-4"
                >
                  <div className="p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-500/30">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-yellow-400" />
                      <h5 className="text-yellow-400 font-bold">Результат:</h5>
                    </div>
                    <p className="text-white text-lg">{selectedExperiment.result}</p>
                  </div>

                  <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-blue-400" />
                      <h5 className="text-blue-400 font-bold">Объяснение:</h5>
                    </div>
                    <p className="text-white/80">{selectedExperiment.explanation}</p>
                  </div>

                  {!experimentCompleted ? (
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={handleResetExperiment}
                        className="flex-1 border-white/20 text-white hover:bg-white/10"
                      >
                        <RotateCcw className="w-4 h-4 mr-2" /> Повторить
                      </Button>
                      <Button
                        onClick={handleFinishExperiment}
                        className="flex-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" /> Завершить (+{selectedExperiment.points} XP)
                      </Button>
                    </div>
                  ) : (
                    <div className="p-4 bg-emerald-500/20 rounded-xl text-center">
                      <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                      <p className="text-emerald-300 font-bold">Эксперимент завершён!</p>
                      <p className="text-white/60 text-sm">+{selectedExperiment.points} опыта</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}
