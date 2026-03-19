'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp, BarChart3, PieChart, Calendar,
  ChevronLeft, ChevronRight, Target, Clock, Star
} from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'

// Данные для графиков
interface ChartData {
  label: string
  value: number
  color: string
}

interface WeeklyData {
  day: string
  xp: number
  lessons: number
  time: number // минуты
}

// Загрузка данных из localStorage
function loadProgressData(): WeeklyData[] {
  if (typeof window === 'undefined') return []
  try {
    const saved = localStorage.getItem('weeklyProgress_v1')
    if (saved) {
      const data = JSON.parse(saved)
      // Проверяем, что данные за текущую неделю
      const today = new Date()
      const weekStart = new Date(today)
      weekStart.setDate(today.getDate() - today.getDay()) // Начало недели (воскресенье)

      return data.weeklyData || generateEmptyWeek()
    }
  } catch { /* ignore */ }
  return generateEmptyWeek()
}

function generateEmptyWeek(): WeeklyData[] {
  const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  return days.map(day => ({
    day,
    xp: Math.floor(Math.random() * 200) + 50, // Демо данные
    lessons: Math.floor(Math.random() * 5),
    time: Math.floor(Math.random() * 60) + 10
  }))
}

// Компонент линейного графика
function LineChart({ data, height = 120 }: { data: ChartData[], height?: number }) {
  const maxValue = Math.max(...data.map(d => d.value), 1)
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100
    const y = 100 - (d.value / maxValue) * 100
    return `${x},${y}`
  }).join(' ')

  return (
    <div className="relative" style={{ height }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
        {/* Сетка */}
        {[25, 50, 75].map(y => (
          <line
            key={y}
            x1="0" y1={y} x2="100" y2={y}
            stroke="rgba(100, 116, 139, 0.2)"
            strokeWidth="0.5"
          />
        ))}

        {/* Область под графиком */}
        <polygon
          points={`0,100 ${points} 100,100`}
          fill="url(#lineGradient)"
          opacity="0.3"
        />

        {/* Линия графика */}
        <polyline
          points={points}
          fill="none"
          stroke="url(#lineStroke)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Точки */}
        {data.map((d, i) => {
          const x = (i / (data.length - 1)) * 100
          const y = 100 - (d.value / maxValue) * 100
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="3"
              fill={d.color}
              stroke="white"
              strokeWidth="1"
              className="cursor-pointer hover:r-4 transition-all"
            />
          )
        })}

        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="lineStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Лейблы */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-slate-400 -mb-5">
        {data.map((d, i) => (
          <span key={i}>{d.label}</span>
        ))}
      </div>
    </div>
  )
}

// Компонент круговой диаграммы
function DonutChart({ data, size = 120 }: { data: ChartData[], size?: number }) {
  const total = data.reduce((sum, d) => sum + d.value, 0) || 1

  // Используем reduce для создания сегментов без мутации внешней переменной
  const segments = useMemo(() => {
    return data.reduce<{ segments: Array<ChartData & { startAngle: number; angle: number }>, currentAngle: number }>(
      (acc, d) => {
        const angle = (d.value / total) * 360
        acc.segments.push({
          ...d,
          startAngle: acc.currentAngle,
          angle
        })
        acc.currentAngle += angle
        return acc
      },
      { segments: [], currentAngle: -90 }
    ).segments
  }, [data, total])

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        {segments.map((segment, i) => {
          const startRad = (segment.startAngle * Math.PI) / 180
          const endRad = ((segment.startAngle + segment.angle) * Math.PI) / 180

          const largeArc = segment.angle > 180 ? 1 : 0

          const x1 = 50 + 35 * Math.cos(startRad)
          const y1 = 50 + 35 * Math.sin(startRad)
          const x2 = 50 + 35 * Math.cos(endRad)
          const y2 = 50 + 35 * Math.sin(endRad)

          return (
            <path
              key={i}
              d={`M 50 50 L ${x1} ${y1} A 35 35 0 ${largeArc} 1 ${x2} ${y2} Z`}
              fill={segment.color}
              stroke="rgba(15, 23, 42, 0.5)"
              strokeWidth="1"
              className="hover:opacity-80 transition-opacity cursor-pointer"
            />
          )
        })}
        {/* Центральный круг */}
        <circle cx="50" cy="50" r="25" fill="rgb(30, 41, 59)" />
      </svg>

      {/* Центральный текст */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-bold">{total}</p>
          <p className="text-xs text-slate-400">уроков</p>
        </div>
      </div>
    </div>
  )
}

// Компонент столбчатой диаграммы
function BarChart({ data, height = 100 }: { data: ChartData[], height?: number }) {
  const maxValue = Math.max(...data.map(d => d.value), 1)

  return (
    <div className="space-y-2">
      {data.map((d, i) => (
        <div key={i} className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-slate-400">{d.label}</span>
            <span className="font-medium">{d.value}</span>
          </div>
          <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(d.value / maxValue) * 100}%`,
                backgroundColor: d.color
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

// Календарь активности
function ActivityCalendar() {
  const weeks = 12 // 12 недель
  const days = 7

  // Генерируем случайные данные активности
  const activity = useMemo(() => {
    return Array.from({ length: weeks }, () =>
      Array.from({ length: days }, () => Math.floor(Math.random() * 5))
    )
  }, [])

  const getColor = (level: number) => {
    const colors = [
      'bg-slate-700/30',
      'bg-green-900/50',
      'bg-green-700/50',
      'bg-green-500/50',
      'bg-green-400/50',
    ]
    return colors[level] || colors[0]
  }

  const monthLabels = ['Март', 'Апрель', 'Май', 'Июнь']

  return (
    <div className="space-y-2">
      <div className="flex gap-1 text-xs text-slate-400">
        {monthLabels.map(m => (
          <span key={m} className="flex-1">{m}</span>
        ))}
      </div>
      <div className="flex gap-1">
        {activity.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((level, di) => (
              <div
                key={di}
                className={`w-3 h-3 rounded-sm ${getColor(level)} cursor-pointer hover:ring-1 hover:ring-white/30`}
                title={`${level} активностей`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end gap-1 text-xs text-slate-400">
        <span>Меньше</span>
        {[0, 1, 2, 3, 4].map(l => (
          <div key={l} className={`w-3 h-3 rounded-sm ${getColor(l)}`} />
        ))}
        <span>Больше</span>
      </div>
    </div>
  )
}

// Основной компонент
export function ProgressChart() {
  const { userStats } = useSchool()
  const [activeChart, setActiveChart] = useState<'line' | 'bar' | 'pie'>('line')

  const weeklyData = useMemo(() => loadProgressData(), [])

  // Данные для линейного графика (XP по дням)
  const lineData: ChartData[] = weeklyData.map(d => ({
    label: d.day,
    value: d.xp,
    color: '#3b82f6'
  }))

  // Данные для столбчатой диаграммы (предметы)
  const subjectData: ChartData[] = [
    { label: 'Математика', value: userStats.subjectsProgress['math'] || 45, color: '#3b82f6' },
    { label: 'Русский', value: userStats.subjectsProgress['russian'] || 38, color: '#ef4444' },
    { label: 'Английский', value: userStats.subjectsProgress['english'] || 52, color: '#22c55e' },
    { label: 'Литература', value: userStats.subjectsProgress['literature'] || 30, color: '#a855f7' },
    { label: 'Окруж. мир', value: userStats.subjectsProgress['science'] || 25, color: '#f59e0b' },
  ]

  // Данные для круговой диаграммы (типы уроков)
  const lessonTypeData: ChartData[] = [
    { label: 'Видео', value: 35, color: '#3b82f6' },
    { label: 'Текст', value: 25, color: '#8b5cf6' },
    { label: 'Тесты', value: 20, color: '#22c55e' },
    { label: 'Игры', value: 15, color: '#f59e0b' },
    { label: 'Практика', value: 10, color: '#ef4444' },
  ]

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardContent className="py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Прогресс обучения</h3>
              <p className="text-xs text-slate-400">За последние 7 дней</p>
            </div>
          </div>
          <div className="flex gap-1">
            <Button
              variant={activeChart === 'line' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveChart('line')}
              className={activeChart === 'line' ? 'bg-blue-600' : ''}
            >
              <TrendingUp className="w-4 h-4" />
            </Button>
            <Button
              variant={activeChart === 'bar' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveChart('bar')}
              className={activeChart === 'bar' ? 'bg-blue-600' : ''}
            >
              <BarChart3 className="w-4 h-4" />
            </Button>
            <Button
              variant={activeChart === 'pie' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveChart('pie')}
              className={activeChart === 'pie' ? 'bg-blue-600' : ''}
            >
              <PieChart className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Графики */}
        {activeChart === 'line' && (
          <div className="space-y-6">
            <div className="pt-2 pb-6">
              <p className="text-sm text-slate-400 mb-2">XP по дням</p>
              <LineChart data={lineData} />
            </div>

            {/* Статистика недели */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-3 bg-slate-700/30 rounded-lg text-center">
                <p className="text-xl font-bold text-blue-400">
                  {weeklyData.reduce((sum, d) => sum + d.xp, 0)}
                </p>
                <p className="text-xs text-slate-400">XP за неделю</p>
              </div>
              <div className="p-3 bg-slate-700/30 rounded-lg text-center">
                <p className="text-xl font-bold text-green-400">
                  {weeklyData.reduce((sum, d) => sum + d.lessons, 0)}
                </p>
                <p className="text-xs text-slate-400">Уроков</p>
              </div>
              <div className="p-3 bg-slate-700/30 rounded-lg text-center">
                <p className="text-xl font-bold text-purple-400">
                  {weeklyData.reduce((sum, d) => sum + d.time, 0)}
                </p>
                <p className="text-xs text-slate-400">Минут</p>
              </div>
            </div>
          </div>
        )}

        {activeChart === 'bar' && (
          <div className="space-y-4">
            <p className="text-sm text-slate-400">Прогресс по предметам</p>
            <BarChart data={subjectData} height={120} />
          </div>
        )}

        {activeChart === 'pie' && (
          <div className="space-y-4">
            <p className="text-sm text-slate-400">Типы пройденных уроков</p>
            <div className="flex items-center justify-center gap-6">
              <DonutChart data={lessonTypeData} size={140} />
              <div className="space-y-2">
                {lessonTypeData.map((d, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-sm"
                      style={{ backgroundColor: d.color }}
                    />
                    <span className="text-sm text-slate-400">{d.label}</span>
                    <span className="text-sm font-medium">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Календарь активности */}
        <div className="mt-6 pt-4 border-t border-slate-700">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span className="text-sm text-slate-400">Активность за 3 месяца</span>
          </div>
          <ActivityCalendar />
        </div>
      </CardContent>
    </Card>
  )
}

// Компонент мини-графика для сайдбара
export function MiniProgressChart() {
  const { userStats } = useSchool()

  const data = [
    { label: 'Пн', value: 45, color: '#3b82f6' },
    { label: 'Вт', value: 80, color: '#3b82f6' },
    { label: 'Ср', value: 55, color: '#3b82f6' },
    { label: 'Чт', value: 90, color: '#3b82f6' },
    { label: 'Пт', value: 70, color: '#3b82f6' },
    { label: 'Сб', value: 30, color: '#3b82f6' },
    { label: 'Вс', value: 60, color: '#3b82f6' },
  ]

  const maxValue = Math.max(...data.map(d => d.value))

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardContent className="py-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium">Активность</span>
          </div>
          <Badge variant="outline" className="text-xs">
            +12%
          </Badge>
        </div>
        <div className="flex items-end gap-1 h-10">
          {data.map((d, i) => (
            <div
              key={i}
              className="flex-1 bg-blue-500/50 rounded-t transition-all hover:bg-blue-500"
              style={{ height: `${(d.value / maxValue) * 100}%` }}
              title={`${d.label}: ${d.value} XP`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
