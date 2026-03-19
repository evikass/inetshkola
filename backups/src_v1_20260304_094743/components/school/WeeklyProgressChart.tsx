'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  BarChart3, Clock, BookOpen, Target,
  ChevronLeft, ChevronRight
} from 'lucide-react'

interface DayData {
  day: string
  dayShort: string
  studyTime: number // minutes
  topicsCompleted: number
  quizScore: number | null // percentage
  date: Date
}

interface WeeklyProgressChartProps {
  data?: DayData[]
  onWeekChange?: (direction: 'prev' | 'next') => void
  showControls?: boolean
}

const DAYS_RU = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
const DAYS_RU_FULL = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

// Генерация демо-данных для недели
const generateWeekData = (weekOffset: number = 0): DayData[] => {
  const today = new Date()
  const startOfWeek = new Date(today)
  startOfWeek.setDate(today.getDate() - today.getDay() + 1 + (weekOffset * 7)) // Понедельник
  
  return DAYS_RU.map((day, index) => {
    const date = new Date(startOfWeek)
    date.setDate(startOfWeek.getDate() + index)
    
    // Генерируем случайные, но реалистичные данные
    const isWeekend = index >= 5
    const isToday = date.toDateString() === today.toDateString()
    const isFuture = date > today
    
    return {
      day: DAYS_RU_FULL[index],
      dayShort: day,
      studyTime: isFuture ? 0 : Math.floor(Math.random() * (isWeekend ? 90 : 60)) + (isToday ? 15 : 0),
      topicsCompleted: isFuture ? 0 : Math.floor(Math.random() * 4),
      quizScore: isFuture ? null : (Math.random() > 0.3 ? Math.floor(Math.random() * 30) + 70 : null),
      date
    }
  })
}

// Функция для получения начальных данных
const getInitialData = (propData?: DayData[]): DayData[] => {
  if (propData && propData.length > 0) return propData
  
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('school-weekly-progress')
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch {
        return generateWeekData(0)
      }
    }
  }
  
  return generateWeekData(0)
}

// Компонент столбчатой диаграммы
function BarChart({ 
  data, 
  maxValue, 
  color, 
  label, 
  icon: Icon,
  unit = ''
}: { 
  data: number[]
  maxValue: number
  color: string
  label: string
  icon: React.ElementType
  unit?: string
}) {
  const safeMax = Math.max(maxValue, 1)
  
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <Icon className={`w-4 h-4 ${color}`} />
        <span>{label}</span>
      </div>
      <div className="flex items-end gap-1 h-24">
        {data.map((value, index) => {
          const height = Math.max((value / safeMax) * 100, 2)
          return (
            <motion.div
              key={index}
              className="flex-1 flex flex-col items-center gap-1"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <span className="text-xs text-gray-500 tabular-nums">
                {value}{unit}
              </span>
              <div 
                className={`w-full rounded-t transition-all duration-300 ${color.replace('text-', 'bg-')}`}
                style={{ height: `${height}%`, minHeight: '4px' }}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// Компонент линейного графика (SVG)
function LineChart({ 
  data, 
  color 
}: { 
  data: (number | null)[]
  color: string
}) {
  const validData = data.filter(d => d !== null) as number[]
  if (validData.length < 2) return null
  
  const maxValue = Math.max(...validData)
  const minValue = Math.min(...validData)
  const range = Math.max(maxValue - minValue, 1)
  
  const points = data
    .map((value, index) => {
      if (value === null) return null
      const x = (index / (data.length - 1)) * 100
      const y = 100 - ((value - minValue) / range) * 80 - 10
      return `${x},${y}`
    })
    .filter(Boolean)
    .join(' ')
  
  const colorMap: Record<string, string> = {
    green: '#22c55e',
    blue: '#3b82f6',
    purple: '#a855f7',
    orange: '#f97316',
    red: '#ef4444'
  }
  
  return (
    <svg viewBox="0 0 100 100" className="w-full h-16 overflow-visible">
      <defs>
        <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={colorMap[color] || '#a855f7'} stopOpacity="0.3" />
          <stop offset="100%" stopColor={colorMap[color] || '#a855f7'} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.polyline
        points={points}
        fill="none"
        stroke={colorMap[color] || '#a855f7'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      {data.map((value, index) => {
        if (value === null) return null
        const x = (index / (data.length - 1)) * 100
        const y = 100 - ((value - minValue) / range) * 80 - 10
        return (
          <motion.circle
            key={index}
            cx={x}
            cy={y}
            r="3"
            fill={colorMap[color] || '#a855f7'}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          />
        )
      })}
    </svg>
  )
}

// Круговой прогресс
function CircularProgress({ 
  value, 
  maxValue, 
  size = 80,
  strokeWidth = 8,
  color = 'purple'
}: { 
  value: number
  maxValue: number
  size?: number
  strokeWidth?: number
  color?: string
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const safeMax = Math.max(maxValue, 1)
  const percentage = Math.min((value / safeMax) * 100, 100)
  const offset = circumference - (percentage / 100) * circumference
  
  const colorMap: Record<string, string> = {
    purple: '#a855f7',
    green: '#22c55e',
    blue: '#3b82f6',
    orange: '#f97316',
    red: '#ef4444',
    yellow: '#eab308'
  }
  
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={colorMap[color] || colorMap.purple}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold">{Math.round(percentage)}%</span>
      </div>
    </div>
  )
}

export default function WeeklyProgressChart({ 
  data: propData,
  onWeekChange,
  showControls = true 
}: WeeklyProgressChartProps) {
  const [weekOffset, setWeekOffset] = useState(0)
  const [initialData] = useState(() => getInitialData(propData))
  
  // Мемоизируем данные для текущей недели
  const chartData = useMemo(() => {
    if (propData && propData.length > 0) return propData
    if (weekOffset === 0) return initialData
    return generateWeekData(weekOffset)
  }, [propData, initialData, weekOffset])
  
  // Сохраняем данные в localStorage при изменении
  useEffect(() => {
    if (typeof window !== 'undefined' && chartData.length > 0) {
      localStorage.setItem('school-weekly-progress', JSON.stringify(chartData))
    }
  }, [chartData])
  
  const handlePrevWeek = () => {
    setWeekOffset(prev => prev - 1)
    onWeekChange?.('prev')
  }
  
  const handleNextWeek = () => {
    setWeekOffset(prev => Math.min(prev + 1, 0))
    onWeekChange?.('next')
  }
  
  // Вычисляем статистику
  const totalStudyTime = chartData.reduce((sum, d) => sum + d.studyTime, 0)
  const totalTopics = chartData.reduce((sum, d) => sum + d.topicsCompleted, 0)
  const avgScore = chartData.filter(d => d.quizScore !== null).length > 0
    ? Math.round(chartData.filter(d => d.quizScore !== null).reduce((sum, d) => sum + (d.quizScore || 0), 0) / chartData.filter(d => d.quizScore !== null).length)
    : 0
  
  const maxStudyTime = Math.max(...chartData.map(d => d.studyTime), 1)
  const maxTopics = Math.max(...chartData.map(d => d.topicsCompleted), 1)
  
  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes} мин`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return mins > 0 ? `${hours} ч ${mins} мин` : `${hours} ч`
  }
  
  // Получаем диапазон дат недели
  const weekStart = chartData[0]?.date
  const weekEnd = chartData[6]?.date
  const weekRange = weekStart && weekEnd 
    ? `${weekStart.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })} - ${weekEnd.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })}`
    : ''
  
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-white flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-purple-400" />
            Активность за неделю
          </CardTitle>
          {showControls && (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={handlePrevWeek} className="h-8 w-8 p-0">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-sm text-gray-400 min-w-[120px] text-center">{weekRange}</span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleNextWeek} 
                disabled={weekOffset >= 0}
                className="h-8 w-8 p-0"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Дни недели */}
        <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-400">
          {chartData.map((day, index) => (
            <div key={index} className="space-y-1">
              <span className={day.date.toDateString() === new Date().toDateString() ? 'text-purple-400 font-semibold' : ''}>
                {day.dayShort}
              </span>
            </div>
          ))}
        </div>
        
        {/* График времени обучения */}
        <BarChart
          data={chartData.map(d => d.studyTime)}
          maxValue={maxStudyTime}
          color="text-blue-400"
          label="Время обучения (мин)"
          icon={Clock}
          unit=""
        />
        
        {/* График тем */}
        <BarChart
          data={chartData.map(d => d.topicsCompleted)}
          maxValue={maxTopics}
          color="text-green-400"
          label="Изучено тем"
          icon={BookOpen}
        />
        
        {/* График оценок */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Target className="w-4 h-4 text-purple-400" />
            <span>Результаты тестов (%)</span>
          </div>
          <LineChart 
            data={chartData.map(d => d.quizScore)} 
            color="purple"
          />
          <div className="grid grid-cols-7 gap-1 text-center text-xs tabular-nums">
            {chartData.map((day, index) => (
              <span 
                key={index} 
                className={day.quizScore !== null 
                  ? day.quizScore >= 80 ? 'text-green-400' : day.quizScore >= 60 ? 'text-yellow-400' : 'text-red-400'
                  : 'text-gray-600'
                }
              >
                {day.quizScore !== null ? `${day.quizScore}%` : '-'}
              </span>
            ))}
          </div>
        </div>
        
        {/* Итоги недели */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
          <div className="text-center">
            <CircularProgress value={totalStudyTime} maxValue={300} size={60} strokeWidth={6} color="blue" />
            <p className="text-xs text-gray-400 mt-2">Время</p>
            <p className="text-sm font-semibold">{formatTime(totalStudyTime)}</p>
          </div>
          <div className="text-center">
            <CircularProgress value={totalTopics} maxValue={20} size={60} strokeWidth={6} color="green" />
            <p className="text-xs text-gray-400 mt-2">Тем</p>
            <p className="text-sm font-semibold">{totalTopics}</p>
          </div>
          <div className="text-center">
            <CircularProgress value={avgScore} maxValue={100} size={60} strokeWidth={6} color="purple" />
            <p className="text-xs text-gray-400 mt-2">Средний балл</p>
            <p className="text-sm font-semibold">{avgScore}%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Экспортируем вспомогательные компоненты
export { BarChart, LineChart, CircularProgress, generateWeekData }
export type { DayData, WeeklyProgressChartProps }
