'use client'

import { useState, useEffect, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  ChevronLeft, ChevronRight, Calendar, Clock, Flame, Star,
  Download, Filter, Target, TrendingUp, Award, BookOpen
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Types
interface StudySubject {
  name: string
  topicsCompleted: number
  timeSpent: number // minutes
  quizScore?: number
}

interface StudyDay {
  date: string // YYYY-MM-DD
  subjects: StudySubject[]
  totalXP: number
  streakDay: number
}

interface StudyHistoryCalendarProps {
  onXP?: (xp: number) => void
}

// Subject colors
const SUBJECT_COLORS: Record<string, string> = {
  'Математика': 'from-blue-500 to-cyan-500',
  'Русский язык': 'from-red-500 to-pink-500',
  'Литература': 'from-amber-500 to-orange-500',
  'История': 'from-yellow-500 to-amber-500',
  'Биология': 'from-green-500 to-emerald-500',
  'География': 'from-teal-500 to-cyan-500',
  'Физика': 'from-purple-500 to-violet-500',
  'Химия': 'from-rose-500 to-pink-500',
  'Информатика': 'from-indigo-500 to-blue-500',
  'Английский язык': 'from-sky-500 to-blue-500',
  'Обществознание': 'from-orange-500 to-red-500',
}

const MONTHS = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
]

const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

// Generate mock data
function generateMockData(): StudyDay[] {
  const data: StudyDay[] = []
  const today = new Date()
  
  for (let i = 0; i < 60; i++) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    
    // Random chance of activity (higher for recent days)
    const activityChance = Math.max(0.3, 1 - i / 80)
    
    if (Math.random() < activityChance) {
      const subjects: StudySubject[] = []
      const subjectCount = Math.floor(Math.random() * 3) + 1
      const subjectNames = Object.keys(SUBJECT_COLORS)
      
      for (let j = 0; j < subjectCount; j++) {
        const randomSubject = subjectNames[Math.floor(Math.random() * subjectNames.length)]
        if (!subjects.find(s => s.name === randomSubject)) {
          subjects.push({
            name: randomSubject,
            topicsCompleted: Math.floor(Math.random() * 4) + 1,
            timeSpent: Math.floor(Math.random() * 45) + 15,
            quizScore: Math.random() > 0.3 ? Math.floor(Math.random() * 30) + 70 : undefined
          })
        }
      }
      
      data.push({
        date: date.toISOString().split('T')[0],
        subjects,
        totalXP: subjects.reduce((sum, s) => sum + s.topicsCompleted * 10 + (s.quizScore ? 20 : 0), 0),
        streakDay: i === 0 ? Math.floor(Math.random() * 10) + 1 : 0
      })
    }
  }
  
  return data
}

// Initialize state from localStorage
function getInitialStudyData(): StudyDay[] {
  if (typeof window === 'undefined') return []
  const saved = localStorage.getItem('studyHistoryData')
  if (saved) {
    return JSON.parse(saved)
  }
  const mockData = generateMockData()
  localStorage.setItem('studyHistoryData', JSON.stringify(mockData))
  return mockData
}

export default function StudyHistoryCalendar({ onXP }: StudyHistoryCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [studyData, setStudyData] = useState<StudyDay[]>(getInitialStudyData)
  const [selectedDay, setSelectedDay] = useState<StudyDay | null>(null)
  const [filterSubject, setFilterSubject] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'calendar' | 'stats'>('calendar')
  
  // Get calendar days
  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const days: (Date | null)[] = []
    
    // Add empty days for the start of the week
    const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1
    for (let i = 0; i < startDay; i++) {
      days.push(null)
    }
    
    // Add days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i))
    }
    
    return days
  }, [currentDate])
  
  // Get activity for a date
  const getActivityForDate = (date: Date): StudyDay | undefined => {
    const dateStr = date.toISOString().split('T')[0]
    return studyData.find(d => d.date === dateStr)
  }
  
  // Calculate stats
  const stats = useMemo(() => {
    const totalMinutes = studyData.reduce((sum, day) => 
      sum + day.subjects.reduce((s, sub) => s + sub.timeSpent, 0), 0
    )
    
    const subjectTotals: Record<string, { time: number; topics: number; quizzes: number }> = {}
    
    studyData.forEach(day => {
      day.subjects.forEach(sub => {
        if (!subjectTotals[sub.name]) {
          subjectTotals[sub.name] = { time: 0, topics: 0, quizzes: 0 }
        }
        subjectTotals[sub.name].time += sub.timeSpent
        subjectTotals[sub.name].topics += sub.topicsCompleted
        if (sub.quizScore) subjectTotals[sub.name].quizzes++
      })
    })
    
    const maxStreak = Math.max(...studyData.map(d => d.streakDay), 0)
    const totalXP = studyData.reduce((sum, d) => sum + d.totalXP, 0)
    
    return { totalMinutes, subjectTotals, maxStreak, totalXP, totalDays: studyData.length }
  }, [studyData])
  
  // Export data
  const exportData = () => {
    const dataStr = JSON.stringify(studyData, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `study-history-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }
  
  // Navigate months
  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  
  // Filter subjects
  const filteredData = filterSubject 
    ? studyData.map(d => ({
        ...d,
        subjects: d.subjects.filter(s => s.name === filterSubject)
      })).filter(d => d.subjects.length > 0)
    : studyData

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <Calendar className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl font-bold text-white">История обучения</h2>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setViewMode(viewMode === 'calendar' ? 'stats' : 'calendar')}
            className="text-white/70 hover:text-white"
          >
            {viewMode === 'calendar' ? <TrendingUp className="w-4 h-4 mr-1" /> : <Calendar className="w-4 h-4 mr-1" />}
            {viewMode === 'calendar' ? 'Статистика' : 'Календарь'}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={exportData}
            className="text-white/70 hover:text-white"
          >
            <Download className="w-4 h-4 mr-1" />
            Экспорт
          </Button>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30">
          <CardContent className="p-3 text-center">
            <Clock className="w-5 h-5 mx-auto mb-1 text-blue-400" />
            <p className="text-2xl font-bold">{Math.floor(stats.totalMinutes / 60)}ч</p>
            <p className="text-xs text-gray-400">Время обучения</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30">
          <CardContent className="p-3 text-center">
            <Flame className="w-5 h-5 mx-auto mb-1 text-orange-400" />
            <p className="text-2xl font-bold">{stats.maxStreak}</p>
            <p className="text-xs text-gray-400">Макс. серия</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border-yellow-500/30">
          <CardContent className="p-3 text-center">
            <Star className="w-5 h-5 mx-auto mb-1 text-yellow-400" />
            <p className="text-2xl font-bold">{stats.totalXP}</p>
            <p className="text-xs text-gray-400">Всего XP</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30">
          <CardContent className="p-3 text-center">
            <Target className="w-5 h-5 mx-auto mb-1 text-green-400" />
            <p className="text-2xl font-bold">{stats.totalDays}</p>
            <p className="text-xs text-gray-400">Активных дней</p>
          </CardContent>
        </Card>
      </div>
      
      {viewMode === 'calendar' ? (
        <div className="grid md:grid-cols-3 gap-4">
          {/* Calendar */}
          <Card className="md:col-span-2 bg-white/5 border-white/10">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center gap-2">
                  {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
                </CardTitle>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" onClick={prevMonth} className="h-8 w-8">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={nextMonth} className="h-8 w-8">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Weekday headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {WEEKDAYS.map(day => (
                  <div key={day} className="text-center text-xs text-gray-400 py-1">
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((date, i) => {
                  if (!date) return <div key={`empty-${i}`} className="aspect-square" />
                  
                  const activity = getActivityForDate(date)
                  const isToday = date.toDateString() === new Date().toDateString()
                  const isSelected = selectedDay?.date === date.toISOString().split('T')[0]
                  
                  // Calculate heat intensity
                  const intensity = activity 
                    ? Math.min(activity.subjects.length * 0.3 + 0.2, 1) 
                    : 0
                  
                  return (
                    <motion.button
                      key={date.toISOString()}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => activity && setSelectedDay(activity)}
                      className={`
                        aspect-square rounded-lg flex flex-col items-center justify-center
                        transition-all text-sm relative
                        ${isToday ? 'ring-2 ring-purple-400' : ''}
                        ${isSelected ? 'ring-2 ring-yellow-400' : ''}
                        ${activity ? 'cursor-pointer' : 'cursor-default opacity-30'}
                      `}
                      style={{
                        background: activity 
                          ? `rgba(139, 92, 246, ${intensity})` 
                          : 'rgba(255,255,255,0.05)'
                      }}
                    >
                      <span className={isToday ? 'font-bold text-purple-300' : ''}>
                        {date.getDate()}
                      </span>
                      {activity && (
                        <div className="flex gap-0.5 mt-0.5">
                          {activity.subjects.slice(0, 3).map((s, j) => (
                            <div 
                              key={j}
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${SUBJECT_COLORS[s.name] || 'from-gray-500 to-gray-400'}`}
                            />
                          ))}
                        </div>
                      )}
                      {activity?.streakDay > 0 && (
                        <Flame className="w-3 h-3 absolute -top-1 -right-1 text-orange-400" />
                      )}
                    </motion.button>
                  )
                })}
              </div>
              
              {/* Legend */}
              <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded bg-purple-500/20" /> Нет активности
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded bg-purple-500/60" /> Средняя
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded bg-purple-500" /> Высокая
                </span>
              </div>
            </CardContent>
          </Card>
          
          {/* Daily Summary */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-sm flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                {selectedDay ? `День ${selectedDay.date}` : 'Выберите день'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedDay ? (
                <ScrollArea className="h-64">
                  <div className="space-y-3">
                    {/* XP and Streak */}
                    <div className="flex gap-2">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500">
                        <Star className="w-3 h-3 mr-1" />
                        {selectedDay.totalXP} XP
                      </Badge>
                      {selectedDay.streakDay > 0 && (
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500">
                          <Flame className="w-3 h-3 mr-1" />
                          День {selectedDay.streakDay}
                        </Badge>
                      )}
                    </div>
                    
                    {/* Subjects */}
                    {selectedDay.subjects.map((subject, i) => (
                      <motion.div
                        key={subject.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`p-3 rounded-lg bg-gradient-to-r ${SUBJECT_COLORS[subject.name] || 'from-gray-500 to-gray-400'} bg-opacity-20`}
                      >
                        <h4 className="font-medium text-white text-sm">{subject.name}</h4>
                        <div className="grid grid-cols-2 gap-2 mt-2 text-xs text-white/70">
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            {subject.topicsCompleted} тем
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {subject.timeSpent} мин
                          </div>
                        </div>
                        {subject.quizScore !== undefined && (
                          <div className="mt-2">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Результат теста</span>
                              <span className={subject.quizScore >= 80 ? 'text-green-400' : subject.quizScore >= 60 ? 'text-yellow-400' : 'text-red-400'}>
                                {subject.quizScore}%
                              </span>
                            </div>
                            <Progress value={subject.quizScore} className="h-1.5" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              ) : (
                <div className="h-64 flex items-center justify-center text-gray-400 text-center">
                  <div>
                    <Calendar className="w-12 h-12 mx-auto mb-2 opacity-30" />
                    <p className="text-sm">Выберите день на календаре для просмотра подробностей</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      ) : (
        /* Statistics View */
        <div className="grid md:grid-cols-2 gap-4">
          {/* Subject Distribution */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-sm flex items-center gap-2">
                <Award className="w-4 h-4" />
                Распределение по предметам
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* CSS Pie Chart */}
              <div className="relative w-48 h-48 mx-auto">
                <div 
                  className="w-full h-full rounded-full"
                  style={{
                    background: Object.entries(stats.subjectTotals)
                      .sort((a, b) => b[1].time - a[1].time)
                      .reduce((acc, [name, data], i, arr) => {
                        const total = arr.reduce((s, [_, d]) => s + d.time, 0)
                        const percent = (data.time / total) * 100
                        const prevPercent = arr.slice(0, i).reduce((s, [_, d]) => s + (d.time / total) * 100, 0)
                        const colors = ['bg-purple-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-pink-500', 'bg-cyan-500', 'bg-orange-500']
                        return acc + `${colors[i % colors.length]} ${prevPercent}% ${prevPercent + percent}%, `
                      }, 'conic-gradient(').slice(0, -2) + ')'
                  }}
                />
              </div>
              
              {/* Legend */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                {Object.entries(stats.subjectTotals)
                  .sort((a, b) => b[1].time - a[1].time)
                  .slice(0, 6)
                  .map(([name, data], i) => {
                    const colors = ['bg-purple-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-pink-500']
                    return (
                      <div key={name} className="flex items-center gap-2 text-xs">
                        <div className={`w-3 h-3 rounded ${colors[i]}`} />
                        <span className="text-white/70 truncate">{name}</span>
                        <span className="text-white/50 ml-auto">{Math.floor(data.time / 60)}ч</span>
                      </div>
                    )
                  })}
              </div>
            </CardContent>
          </Card>
          
          {/* Subject Filter */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-sm flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Фильтр по предмету
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Button
                  variant={filterSubject === null ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterSubject(null)}
                  className={filterSubject === null ? 'bg-purple-600' : 'border-white/20'}
                >
                  Все предметы
                </Button>
                {Object.keys(SUBJECT_COLORS).map(subject => (
                  <Button
                    key={subject}
                    variant={filterSubject === subject ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilterSubject(subject)}
                    className={filterSubject === subject ? `bg-gradient-to-r ${SUBJECT_COLORS[subject]}` : 'border-white/20'}
                  >
                    {subject}
                  </Button>
                ))}
              </div>
              
              {/* Filtered stats */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-white/70">Активность (последние 7 дней)</h4>
                {filteredData.slice(0, 7).map(day => (
                  <div key={day.date} className="flex items-center justify-between p-2 rounded bg-white/5">
                    <span className="text-sm text-white/70">{day.date}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/50">{day.subjects.length} предм.</span>
                      <Badge variant="outline" className="text-xs">+{day.totalXP} XP</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Goals */}
          <Card className="md:col-span-2 bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-sm flex items-center gap-2">
                <Target className="w-4 h-4" />
                Цели обучения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/70">Часов в неделю</span>
                    <span className="text-white">{Math.floor(stats.totalMinutes / 60)}/10</span>
                  </div>
                  <Progress value={Math.min((stats.totalMinutes / 60) / 10 * 100, 100)} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/70">Активных дней</span>
                    <span className="text-white">{stats.totalDays}/30</span>
                  </div>
                  <Progress value={Math.min(stats.totalDays / 30 * 100, 100)} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/70">Серия дней</span>
                    <span className="text-white">{stats.maxStreak}/14</span>
                  </div>
                  <Progress value={Math.min(stats.maxStreak / 14 * 100, 100)} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
