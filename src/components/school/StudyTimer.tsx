'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { 
  Play, Pause, RotateCcw, Volume2, VolumeX, Coffee, 
  Brain, Target, Clock, Trophy, Zap, Settings, CheckCircle
} from 'lucide-react'

interface StudySession {
  id: string
  subject: string
  duration: number // в минутах
  completedAt: string
  type: 'focus' | 'break'
}

interface StudyTimerProps {
  onSessionComplete?: (duration: number) => void
}

const TIMER_PRESETS = [
  { name: 'Помодоро', focus: 25, break: 5 },
  { name: 'Длинный', focus: 50, break: 10 },
  { name: 'Короткий', focus: 15, break: 3 },
  { name: 'Свободный', focus: 0, break: 0 },
]

const SUBJECTS = [
  'Математика', 'Русский язык', 'Физика', 'Химия', 'Биология',
  'История', 'Обществознание', 'Английский', 'Информатика', 'Литература', 'Другое'
]

export default function StudyTimer({ onSessionComplete }: StudyTimerProps) {
  const [selectedPreset, setSelectedPreset] = useState(0)
  const [focusTime, setFocusTime] = useState(25)
  const [breakTime, setBreakTime] = useState(5)
  const [timeLeft, setTimeLeft] = useState(25 * 60) // в секундах
  const [isRunning, setIsRunning] = useState(false)
  const [isBreak, setIsBreak] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState('Математика')
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [showSettings, setShowSettings] = useState(false)
  
  // Загрузка данных при инициализации
  const [sessionsCompleted, setSessionsCompleted] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('studyTimer_v1')
      if (saved) return JSON.parse(saved).sessionsCompleted || 0
    }
    return 0
  })
  const [totalStudyTime, setTotalStudyTime] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('studyTimer_v1')
      if (saved) return JSON.parse(saved).totalStudyTime || 0
    }
    return 0
  })
  const [todaySessions, setTodaySessions] = useState<StudySession[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('studyTimer_v1')
      if (saved) return JSON.parse(saved).todaySessions || []
    }
    return []
  })
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  
  // Сохранение данных
  useEffect(() => {
    localStorage.setItem('studyTimer_v1', JSON.stringify({
      sessionsCompleted,
      totalStudyTime,
      todaySessions
    }))
  }, [sessionsCompleted, totalStudyTime, todaySessions])
  
  // Звуковой сигнал
  const playSound = useCallback((type: 'complete' | 'tick') => {
    if (!soundEnabled) return
    
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
      }
      
      const ctx = audioContextRef.current
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)
      
      if (type === 'complete') {
        oscillator.frequency.setValueAtTime(880, ctx.currentTime)
        oscillator.frequency.setValueAtTime(1100, ctx.currentTime + 0.1)
        oscillator.frequency.setValueAtTime(880, ctx.currentTime + 0.2)
        gainNode.gain.setValueAtTime(0.3, ctx.currentTime)
        if (gainNode.gain.exponentialDecayTo) {
          gainNode.gain.exponentialDecayTo(0.01, ctx.currentTime + 0.5)
        } else {
          gainNode.gain.setValueAtTime(0.01, ctx.currentTime + 0.5)
        }
        oscillator.start(ctx.currentTime)
        oscillator.stop(ctx.currentTime + 0.5)
      }
    } catch {
      // Audio not supported
    }
  }, [soundEnabled])
  
  // Обработка завершения сессии
  const handleSessionComplete = useCallback(() => {
    playSound('complete')
    
    if (!isBreak) {
      // Завершен период фокусировки
      const duration = focusTime
      setSessionsCompleted(prev => prev + 1)
      setTotalStudyTime(prev => prev + duration)
      
      const session: StudySession = {
        id: Date.now().toString(),
        subject: selectedSubject,
        duration,
        completedAt: new Date().toISOString(),
        type: 'focus'
      }
      setTodaySessions(prev => [...prev, session])
      
      onSessionComplete?.(duration)
      
      // Начать перерыв
      if (breakTime > 0) {
        setTimeLeft(breakTime * 60)
        setIsBreak(true)
      } else {
        setIsRunning(false)
        setTimeLeft(focusTime * 60)
      }
    } else {
      // Завершен перерыв
      setIsBreak(false)
      setTimeLeft(focusTime * 60)
      setIsRunning(false)
    }
  }, [isBreak, focusTime, breakTime, selectedSubject, onSessionComplete, playSound])
  
  // Таймер
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000)
    } else if (timeLeft === 0 && isRunning) {
      // Сессия завершена - обновляем состояние таймера
      // eslint-disable-next-line react-hooks/set-state-in-effect
      handleSessionComplete()
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning, timeLeft, handleSessionComplete])
  
  // Выбор пресета
  const selectPreset = useCallback((index: number) => {
    setSelectedPreset(index)
    const preset = TIMER_PRESETS[index]
    if (preset.focus > 0) {
      setFocusTime(preset.focus)
      setBreakTime(preset.break)
      setTimeLeft(preset.focus * 60)
    }
    setIsRunning(false)
    setIsBreak(false)
  }, [])
  
  // Запуск/пауза
  const toggleTimer = useCallback(() => {
    setIsRunning(prev => !prev)
  }, [])
  
  // Сброс
  const resetTimer = useCallback(() => {
    setIsRunning(false)
    setIsBreak(false)
    setTimeLeft(focusTime * 60)
  }, [focusTime])
  
  // Форматирование времени
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }
  
  // Прогресс
  const totalTime = isBreak ? breakTime * 60 : focusTime * 60
  const progressPercent = totalTime > 0 ? ((totalTime - timeLeft) / totalTime) * 100 : 0
  
  // Время сегодня по предметам
  const todayTimeBySubject = todaySessions.reduce((acc, session) => {
    acc[session.subject] = (acc[session.subject] || 0) + session.duration
    return acc
  }, {} as Record<string, number>)
  
  return (
    <div className="space-y-4">
      {/* Пресеты */}
      <div className="flex flex-wrap gap-2">
        {TIMER_PRESETS.map((preset, index) => (
          <Button
            key={preset.name}
            size="sm"
            variant={selectedPreset === index ? "default" : "outline"}
            onClick={() => selectPreset(index)}
            className={selectedPreset === index 
              ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" 
              : "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
            }
          >
            {preset.name}
            {preset.focus > 0 && (
              <span className="ml-1 text-xs opacity-70">
                ({preset.focus}/{preset.break})
              </span>
            )}
          </Button>
        ))}
      </div>
      
      {/* Выбор предмета */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-400">Предмет:</span>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-white text-sm"
        >
          {SUBJECTS.map(s => (
            <option key={s} value={s} className="bg-slate-800">{s}</option>
          ))}
        </select>
      </div>
      
      {/* Таймер */}
      <Card className={`bg-gradient-to-br ${isBreak ? 'from-green-500/20 to-teal-500/20 border-green-500/30' : 'from-purple-500/20 to-blue-500/20 border-purple-500/30'} backdrop-blur`}>
        <CardContent className="p-6">
          <div className="text-center">
            {/* Индикатор режима */}
            <div className="flex items-center justify-center gap-2 mb-4">
              {isBreak ? (
                <>
                  <Coffee className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-medium">Перерыв</span>
                </>
              ) : (
                <>
                  <Brain className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-medium">Фокус на {selectedSubject}</span>
                </>
              )}
            </div>
            
            {/* Время */}
            <div className="relative inline-block mb-6">
              <div className="text-7xl font-bold text-white font-mono tracking-wider">
                {formatTime(timeLeft)}
              </div>
              <Progress 
                value={progressPercent} 
                className="absolute -bottom-2 left-0 right-0 h-1"
              />
            </div>
            
            {/* Кнопки управления */}
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                onClick={resetTimer}
                className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
              
              <Button
                onClick={toggleTimer}
                size="lg"
                className={`w-20 h-20 rounded-full ${isBreak 
                  ? 'bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700' 
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                }`}
              >
                {isRunning ? (
                  <Pause className="w-8 h-8" />
                ) : (
                  <Play className="w-8 h-8 ml-1" />
                )}
              </Button>
              
              <Button
                variant="outline"
                onClick={() => setSoundEnabled(prev => !prev)}
                className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4" />
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Статистика сессий */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Card className="bg-white/5 border-white/10 backdrop-blur">
          <CardContent className="p-4 text-center">
            <Target className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{sessionsCompleted}</div>
            <div className="text-xs text-gray-400">Сессий сегодня</div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 border-white/10 backdrop-blur">
          <CardContent className="p-4 text-center">
            <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{totalStudyTime}</div>
            <div className="text-xs text-gray-400">Минут учёбы</div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 border-white/10 backdrop-blur">
          <CardContent className="p-4 text-center">
            <Trophy className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{Math.floor(totalStudyTime / focusTime)}</div>
            <div className="text-xs text-gray-400">Помодоро</div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 border-white/10 backdrop-blur">
          <CardContent className="p-4 text-center">
            <Zap className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{Math.round(totalStudyTime / 60 * 10)}</div>
            <div className="text-xs text-gray-400">XP заработано</div>
          </CardContent>
        </Card>
      </div>
      
      {/* Настройки времени (для свободного режима) */}
      {selectedPreset === 3 && (
        <Card className="bg-white/5 border-white/10 backdrop-blur">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-sm">Настройки времени</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="text-xs text-gray-400 mb-1 block">Фокус (мин)</label>
                <input
                  type="number"
                  value={focusTime}
                  onChange={(e) => {
                    const val = parseInt(e.target.value) || 0
                    setFocusTime(val)
                    setTimeLeft(val * 60)
                  }}
                  min={1}
                  max={120}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                />
              </div>
              <div className="flex-1">
                <label className="text-xs text-gray-400 mb-1 block">Перерыв (мин)</label>
                <input
                  type="number"
                  value={breakTime}
                  onChange={(e) => setBreakTime(parseInt(e.target.value) || 0)}
                  min={0}
                  max={30}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      {/* История сегодня */}
      {todaySessions.length > 0 && (
        <Card className="bg-white/5 border-white/10 backdrop-blur">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-sm">Сегодня</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Object.entries(todayTimeBySubject).map(([subject, time]) => (
                <div key={subject} className="flex items-center justify-between">
                  <span className="text-gray-300">{subject}</span>
                  <div className="flex items-center gap-2">
                    <Progress value={(time / totalStudyTime) * 100} className="w-20 h-1.5" />
                    <span className="text-sm text-gray-400">{time} мин</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
