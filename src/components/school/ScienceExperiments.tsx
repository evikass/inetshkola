'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, FlaskConical, Atom, Leaf, ChevronRight, Play, Pause,
  RotateCcw, CheckCircle, AlertTriangle, Volume2, VolumeX, Sparkles,
  Lightbulb, Clock, Droplets, Palette
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

interface ExperimentStep {
  instruction: string
  action: string
  result: string
}

interface Experiment {
  id: string
  title: string
  subject: 'chemistry' | 'physics' | 'biology'
  difficulty: 'easy' | 'medium' | 'hard'
  steps: ExperimentStep[]
  materials: string[]
  duration: number
  safetyTips: string[]
  learnSummary: string
}

interface ScienceExperimentsProps {
  onBack: () => void
  onComplete: (stars: number, xp: number) => void
}

// Sample experiments
const experiments: Experiment[] = [
  {
    id: 'color-mixing',
    title: 'Смешивание цветов',
    subject: 'chemistry',
    difficulty: 'easy',
    materials: ['Красный краситель', 'Синий краситель', 'Жёлтый краситель', 'Стаканы с водой'],
    duration: 5,
    safetyTips: ['Не пейте окрашенную воду', 'Осторожно с красителями - могут окрасить одежду'],
    steps: [
      { instruction: 'Возьми три стакана с чистой водой', action: 'prepare', result: 'Три стакана с водой готовы' },
      { instruction: 'Добавь красный краситель в первый стакан', action: 'add_red', result: 'Вода стала красной' },
      { instruction: 'Добавь синий краситель во второй стакан', action: 'add_blue', result: 'Вода стала синей' },
      { instruction: 'Добавь жёлтый краситель в третий стакан', action: 'add_yellow', result: 'Вода стала жёлтой' },
      { instruction: 'Смешай красную и синюю воду', action: 'mix_rb', result: 'Получился фиолетовый цвет!' },
      { instruction: 'Смешай синюю и жёлтую воду', action: 'mix_by', result: 'Получился зелёный цвет!' },
      { instruction: 'Смешай красную и жёлтую воду', action: 'mix_ry', result: 'Получился оранжевый цвет!' },
    ],
    learnSummary: 'Ты узнал о смешивании основных цветов! Красный, синий и жёлтый - это основные цвета. Смешивая их, можно получить новые цвета: фиолетовый, зелёный и оранжевый.'
  },
  {
    id: 'pendulum',
    title: 'Маятник',
    subject: 'physics',
    difficulty: 'medium',
    materials: ['Нитка', 'Грузик (шарик)', 'Линейка', 'Секундомер'],
    duration: 8,
    safetyTips: ['Не размахивай грузиком сильно', 'Следи, чтобы маятник никого не задел'],
    steps: [
      { instruction: 'Привяжи грузик к нитке длиной 30 см', action: 'setup_30', result: 'Маятник длиной 30 см готов' },
      { instruction: 'Отклони маятник на 10 градусов', action: 'swing', result: 'Маятник качается!' },
      { instruction: 'Измерь время 10 колебаний', action: 'measure_30', result: '10 колебаний = ~11 секунд' },
      { instruction: 'Измени длину маятника на 60 см', action: 'setup_60', result: 'Маятник длиной 60 см готов' },
      { instruction: 'Снова измерь время 10 колебаний', action: 'measure_60', result: '10 колебаний = ~16 секунд' },
      { instruction: 'Сравни результаты', action: 'compare', result: 'Длинный маятник качается медленнее!' },
    ],
    learnSummary: 'Ты открыл закон маятника! Период колебаний зависит от длины маятника. Чем длиннее маятник, тем медленнее он качается. Это открыл Галилей более 400 лет назад!'
  },
  {
    id: 'seed-germination',
    title: 'Прорастание семян',
    subject: 'biology',
    difficulty: 'easy',
    materials: ['Семена фасоли', 'Вата', 'Вода', 'Прозрачный стакан'],
    duration: 10,
    safetyTips: ['Не ешь семена до проращивания', 'Мой руки после работы с семенами'],
    steps: [
      { instruction: 'Положи вату на дно стакана', action: 'cotton', result: 'Вата в стакане' },
      { instruction: 'Смочи вату водой', action: 'water', result: 'Вата влажная' },
      { instruction: 'Положи 5 семян фасоли на вату', action: 'seeds', result: 'Семена на влажной вате' },
      { instruction: 'Поставь стакан в тёплое место', action: 'warm', result: 'Семена в тепле' },
      { instruction: 'Жди 2-3 дня...', action: 'wait', result: 'Появились корешки!' },
      { instruction: 'Ещё 2-3 дня...', action: 'wait_more', result: 'Появились первые листочки!' },
    ],
    learnSummary: 'Ты наблюдал神奇 magical процесс прорастания! Для прорастания семенам нужны: вода, тепло и воздух. Сначала появляется корешок, потом стебелёк и первые листочки.'
  }
]

type ViewState = 'menu' | 'experiment' | 'complete'

export default function ScienceExperiments({ onBack, onComplete }: ScienceExperimentsProps) {
  const { playSuccess, playClick, playWin, isMuted, toggleMute } = useSound()
  const [viewState, setViewState] = useState<ViewState>('menu')
  const [selectedExperiment, setSelectedExperiment] = useState<Experiment | null>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [completedSteps, setCompletedSteps] = useState<boolean[]>([])
  const [experimentData, setExperimentData] = useState<Record<string, unknown>>({})

  // Color mixing state
  const [colors, setColors] = useState({
    glass1: 'transparent',
    glass2: 'transparent', 
    glass3: 'transparent',
    mixResult: 'transparent'
  })

  // Pendulum state
  const [pendulumAngle, setPendulumAngle] = useState(0)
  const [pendulumLength, setPendulumLength] = useState(30)

  // Seed state
  const [seedStage, setSeedStage] = useState(0)

  const subjectIcons = {
    chemistry: <FlaskConical className="w-5 h-5" />,
    physics: <Atom className="w-5 h-5" />,
    biology: <Leaf className="w-5 h-5" />
  }

  const subjectColors = {
    chemistry: 'from-purple-400 to-pink-500',
    physics: 'from-blue-400 to-cyan-500',
    biology: 'from-green-400 to-emerald-500'
  }

  const difficultyLabels = {
    easy: { text: 'Лёгкий', color: 'bg-green-500/20 text-green-400' },
    medium: { text: 'Средний', color: 'bg-yellow-500/20 text-yellow-400' },
    hard: { text: 'Сложный', color: 'bg-red-500/20 text-red-400' }
  }

  const startExperiment = useCallback((exp: Experiment) => {
    setSelectedExperiment(exp)
    setCurrentStep(0)
    setCompletedSteps(new Array(exp.steps.length).fill(false))
    setIsRunning(false)
    setViewState('experiment')
    setExperimentData({})
    
    // Reset specific experiment states
    setColors({
      glass1: 'transparent',
      glass2: 'transparent',
      glass3: 'transparent',
      mixResult: 'transparent'
    })
    setPendulumAngle(0)
    setPendulumLength(30)
    setSeedStage(0)
  }, [])

  const executeStep = useCallback((step: ExperimentStep, stepIndex: number) => {
    if (!selectedExperiment) return
    
    playClick()
    setIsRunning(true)
    
    // Handle different actions based on experiment
    if (selectedExperiment.id === 'color-mixing') {
      setTimeout(() => {
        switch (step.action) {
          case 'add_red':
            setColors(prev => ({ ...prev, glass1: '#ef4444' }))
            break
          case 'add_blue':
            setColors(prev => ({ ...prev, glass2: '#3b82f6' }))
            break
          case 'add_yellow':
            setColors(prev => ({ ...prev, glass3: '#eab308' }))
            break
          case 'mix_rb':
            setColors(prev => ({ ...prev, mixResult: '#8b5cf6' }))
            break
          case 'mix_by':
            setColors(prev => ({ ...prev, mixResult: '#22c55e' }))
            break
          case 'mix_ry':
            setColors(prev => ({ ...prev, mixResult: '#f97316' }))
            break
        }
        setIsRunning(false)
        playSuccess()
        setCompletedSteps(prev => {
          const newSteps = [...prev]
          newSteps[stepIndex] = true
          return newSteps
        })
      }, 500)
    } else if (selectedExperiment.id === 'pendulum') {
      switch (step.action) {
        case 'setup_30':
          setPendulumLength(30)
          setTimeout(() => { setIsRunning(false); playSuccess() }, 300)
          break
        case 'setup_60':
          setPendulumLength(60)
          setTimeout(() => { setIsRunning(false); playSuccess() }, 300)
          break
        case 'swing':
          setIsRunning(true)
          const swingInterval = setInterval(() => {
            setPendulumAngle(prev => Math.sin(Date.now() / (pendulumLength * 10)) * 30)
          }, 50)
          setTimeout(() => {
            clearInterval(swingInterval)
            setPendulumAngle(0)
            setIsRunning(false)
            playSuccess()
          }, 2000)
          break
        default:
          setTimeout(() => { setIsRunning(false); playSuccess() }, 500)
      }
      setCompletedSteps(prev => {
        const newSteps = [...prev]
        newSteps[stepIndex] = true
        return newSteps
      })
    } else if (selectedExperiment.id === 'seed-germination') {
      const stageMap: Record<string, number> = {
        'cotton': 1,
        'water': 2,
        'seeds': 3,
        'warm': 4,
        'wait': 5,
        'wait_more': 6
      }
      setSeedStage(stageMap[step.action] || 0)
      setTimeout(() => {
        setIsRunning(false)
        playSuccess()
        setCompletedSteps(prev => {
          const newSteps = [...prev]
          newSteps[stepIndex] = true
          return newSteps
        })
      }, 800)
    }
    
    // Move to next step if there is one
    if (stepIndex < selectedExperiment.steps.length - 1) {
      setTimeout(() => {
        setCurrentStep(stepIndex + 1)
      }, 1000)
    }
  }, [selectedExperiment, playClick, playSuccess, pendulumLength])

  const finishExperiment = useCallback(() => {
    playWin()
    setViewState('complete')
  }, [playWin])

  // Render menu
  const renderMenu = () => (
    <div className="space-y-6">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-6xl mb-4">🔬</div>
        <h2 className="text-2xl font-bold mb-2">Виртуальная лаборатория</h2>
        <p className="text-gray-400">Проведи увлекательные эксперименты!</p>
      </motion.div>

      <div className="grid gap-4 max-w-md mx-auto">
        {experiments.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card 
              className="cursor-pointer border-2 border-white/10 hover:border-white/30 transition-all overflow-hidden"
              onClick={() => startExperiment(exp)}
            >
              <div className={`h-2 bg-gradient-to-r ${subjectColors[exp.subject]}`} />
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">
                    {exp.subject === 'chemistry' && '🧪'}
                    {exp.subject === 'physics' && '⚛️'}
                    {exp.subject === 'biology' && '🌱'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {subjectIcons[exp.subject]}
                      <h3 className="font-bold">{exp.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyLabels[exp.difficulty].color}`}>
                        {difficultyLabels[exp.difficulty].text}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {exp.duration} мин
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )

  // Render color mixing experiment
  const renderColorMixing = () => (
    <div className="space-y-4">
      <div className="flex justify-center gap-4">
        {[
          { color: colors.glass1, label: 'Красный' },
          { color: colors.glass2, label: 'Синий' },
          { color: colors.glass3, label: 'Жёлтый' }
        ].map((glass, i) => (
          <motion.div 
            key={i}
            className="relative"
            animate={glass.color !== 'transparent' ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            <div 
              className="w-16 h-24 rounded-b-lg border-2 border-white/20 relative overflow-hidden"
              style={{ 
                background: glass.color === 'transparent' 
                  ? 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
                  : glass.color,
                boxShadow: glass.color !== 'transparent' ? `0 0 20px ${glass.color}40` : 'none'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
            </div>
            <p className="text-xs text-center mt-1 text-gray-400">{glass.label}</p>
          </motion.div>
        ))}
      </div>

      {colors.mixResult !== 'transparent' && (
        <motion.div 
          className="flex justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="text-center">
            <div 
              className="w-20 h-28 rounded-b-lg border-2 border-white/30 mx-auto relative overflow-hidden"
              style={{ 
                background: colors.mixResult,
                boxShadow: `0 0 30px ${colors.mixResult}60`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
              <Sparkles className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 text-white animate-pulse" />
            </div>
            <p className="text-sm mt-2 font-medium" style={{ color: colors.mixResult }}>Результат!</p>
          </div>
        </motion.div>
      )}
    </div>
  )

  // Render pendulum experiment
  const renderPendulum = () => (
    <div className="relative h-48 flex justify-center">
      <div className="relative">
        {/* Pivot point */}
        <div className="w-4 h-4 bg-gray-400 rounded-full absolute left-1/2 -translate-x-1/2 top-0 z-10" />
        
        {/* String */}
        <motion.div
          className="w-0.5 bg-gray-300 origin-top"
          style={{ 
            height: pendulumLength * 1.5,
            transform: `rotate(${pendulumAngle}deg)`,
            transition: 'transform 0.05s linear'
          }}
        >
          {/* Ball */}
          <div 
            className="absolute -bottom-4 -left-3.5 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg"
            style={{ boxShadow: '0 4px 20px rgba(59, 130, 246, 0.5)' }}
          />
        </motion.div>
      </div>
      
      {/* Length indicator */}
      <div className="absolute left-4 top-0 text-sm text-gray-400">
        Длина: {pendulumLength} см
      </div>
    </div>
  )

  // Render seed germination
  const renderSeedGermination = () => {
    const seedEmojis = ['🌰', '🌱', '🌿', '🪴', '🌳']
    
    return (
      <div className="flex justify-center">
        <div className="relative w-40 h-48 bg-amber-900/30 rounded-b-lg border-2 border-amber-800/30 overflow-hidden">
          {/* Soil/Cotton */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-800/50 to-amber-700/30 rounded-b-lg">
            {/* Seeds/Plants */}
            <div className="flex justify-center gap-4 -mt-4">
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="text-3xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.2 }}
                >
                  {seedEmojis[Math.min(seedStage, seedEmojis.length - 1)]}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Water drops animation */}
          {seedStage >= 2 && (
            <motion.div
              className="absolute top-4 left-1/2 -translate-x-1/2"
              animate={{ y: [0, 60], opacity: [1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Droplets className="w-4 h-4 text-blue-400" />
            </motion.div>
          )}
          
          {/* Sun */}
          {seedStage >= 4 && (
            <motion.div 
              className="absolute top-2 right-2 text-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            >
              ☀️
            </motion.div>
          )}
        </div>
      </div>
    )
  }

  // Render experiment view
  const renderExperiment = () => {
    if (!selectedExperiment) return null

    const step = selectedExperiment.steps[currentStep]

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {subjectIcons[selectedExperiment.subject]}
            <span className="font-bold">{selectedExperiment.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">
              Шаг {currentStep + 1}/{selectedExperiment.steps.length}
            </span>
          </div>
        </div>

        {/* Progress */}
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
            animate={{ width: `${((currentStep + 1) / selectedExperiment.steps.length) * 100}%` }}
          />
        </div>

        {/* Experiment Visualization */}
        <Card className="border-2 border-white/20 min-h-[200px]">
          <CardContent className="p-6 flex items-center justify-center">
            {selectedExperiment.id === 'color-mixing' && renderColorMixing()}
            {selectedExperiment.id === 'pendulum' && renderPendulum()}
            {selectedExperiment.id === 'seed-germination' && renderSeedGermination()}
          </CardContent>
        </Card>

        {/* Current Step */}
        <Card className="border-2 border-white/20">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">
                {currentStep + 1}
              </div>
              <div className="flex-1">
                <p className="font-medium mb-2">{step.instruction}</p>
                
                {!completedSteps[currentStep] ? (
                  <Button
                    onClick={() => executeStep(step, currentStep)}
                    disabled={isRunning}
                    className="bg-gradient-to-r from-green-500 to-emerald-500"
                  >
                    {isRunning ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <RotateCcw className="w-4 h-4 mr-2" />
                        </motion.div>
                        Выполняется...
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Выполнить
                      </>
                    )}
                  </Button>
                ) : (
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span>{step.result}</span>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Safety Tips */}
        <Card className="bg-yellow-500/10 border-yellow-500/30">
          <CardContent className="p-3">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400 shrink-0" />
              <div>
                <p className="text-sm font-medium text-yellow-400">Техника безопасности:</p>
                <p className="text-xs text-gray-400">{selectedExperiment.safetyTips[0]}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Materials */}
        <div className="flex flex-wrap gap-2">
          {selectedExperiment.materials.map((material, i) => (
            <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded-full">
              {material}
            </span>
          ))}
        </div>

        {/* Finish Button */}
        {completedSteps.every(Boolean) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button
              onClick={finishExperiment}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Завершить эксперимент
            </Button>
          </motion.div>
        )}
      </div>
    )
  }

  // Render complete view
  const renderComplete = () => {
    if (!selectedExperiment) return null

    const xp = selectedExperiment.difficulty === 'easy' ? 30 : selectedExperiment.difficulty === 'medium' ? 50 : 70

    return (
      <motion.div 
        className="text-center space-y-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="text-6xl">🎉</div>
        
        <div>
          <h2 className="text-2xl font-bold mb-2">Эксперимент завершён!</h2>
          <p className="text-gray-400">{selectedExperiment.title}</p>
        </div>

        {/* What we learned */}
        <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              Что мы узнали?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-300 leading-relaxed">
              {selectedExperiment.learnSummary}
            </p>
          </CardContent>
        </Card>

        {/* XP Reward */}
        <div className="flex items-center justify-center gap-2 text-xl">
          <Sparkles className="w-6 h-6 text-yellow-400" />
          <span className="font-bold text-yellow-400">+{xp} XP</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 max-w-xs mx-auto">
          <Button
            onClick={() => startExperiment(selectedExperiment)}
            variant="outline"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Повторить
          </Button>
          <Button
            onClick={() => {
              onComplete(1, xp)
              onBack()
            }}
          >
            Завершить
          </Button>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <motion.div 
        className="flex items-center justify-between mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Button
          variant="ghost"
          onClick={() => {
            if (viewState === 'experiment') {
              setViewState('menu')
            } else if (viewState === 'complete') {
              setViewState('menu')
            } else {
              onBack()
            }
          }}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {viewState === 'menu' ? 'Назад' : 'К опытам'}
        </Button>
        
        <div className="flex items-center gap-2">
          <span className="text-2xl">🔬</span>
          <span className="font-bold">Опыты</span>
        </div>

        <Button variant="ghost" size="icon" onClick={toggleMute}>
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </Button>
      </motion.div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={viewState}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {viewState === 'menu' && renderMenu()}
          {viewState === 'experiment' && renderExperiment()}
          {viewState === 'complete' && renderComplete()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
