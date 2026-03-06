'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Calendar, Clock, Plus, Trash2, Edit, Bell, BookOpen, Calculator, 
  Globe, Palette, Music, Dumbbell, FlaskConical, Atom, Map, Users,
  Sun, Moon, CloudSun, Cloud, Coffee, Home
} from 'lucide-react'

interface Lesson {
  id: string
  subject: string
  time: string
  duration: number
  room?: string
  teacher?: string
  homework?: string
  color: string
}

interface DaySchedule {
  day: string
  shortDay: string
  lessons: Lesson[]
  isActive: boolean
}

const SUBJECTS = [
  { name: 'Математика', icon: Calculator, color: 'bg-blue-500' },
  { name: 'Русский язык', icon: BookOpen, color: 'bg-red-500' },
  { name: 'Литература', icon: BookOpen, color: 'bg-amber-500' },
  { name: 'Английский язык', icon: Globe, color: 'bg-purple-500' },
  { name: 'История', icon: Map, color: 'bg-yellow-600' },
  { name: 'Обществознание', icon: Users, color: 'bg-orange-500' },
  { name: 'География', icon: Globe, color: 'bg-green-500' },
  { name: 'Биология', icon: FlaskConical, color: 'bg-emerald-500' },
  { name: 'Физика', icon: Atom, color: 'bg-cyan-500' },
  { name: 'Химия', icon: FlaskConical, color: 'bg-teal-500' },
  { name: 'ИЗО', icon: Palette, color: 'bg-pink-500' },
  { name: 'Музыка', icon: Music, color: 'bg-violet-500' },
  { name: 'Физкультура', icon: Dumbbell, color: 'bg-lime-500' },
  { name: 'Окружающий мир', icon: Globe, color: 'bg-green-400' },
  { name: 'Информатика', icon: Atom, color: 'bg-indigo-500' },
]

const DEFAULT_SCHEDULE: DaySchedule[] = [
  { day: 'Понедельник', shortDay: 'Пн', lessons: [], isActive: true },
  { day: 'Вторник', shortDay: 'Вт', lessons: [], isActive: true },
  { day: 'Среда', shortDay: 'Ср', lessons: [], isActive: true },
  { day: 'Четверг', shortDay: 'Чт', lessons: [], isActive: true },
  { day: 'Пятница', shortDay: 'Пт', lessons: [], isActive: true },
  { day: 'Суббота', shortDay: 'Сб', lessons: [], isActive: false },
  { day: 'Воскресенье', shortDay: 'Вс', lessons: [], isActive: false },
]

const TIME_SLOTS = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', 
  '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00'
]

export default function Schedule() {
  const [schedule, setSchedule] = useState<DaySchedule[]>(DEFAULT_SCHEDULE)
  const [selectedDay, setSelectedDay] = useState(0)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingLesson, setEditingLesson] = useState<Lesson | null>(null)
  const [newLesson, setNewLesson] = useState<Partial<Lesson>>({
    subject: '',
    time: '08:00',
    duration: 45,
    room: '',
    teacher: '',
    homework: '',
    color: 'bg-blue-500'
  })

  // Загрузка расписания из localStorage
  useEffect(() => {
    const saved = localStorage.getItem('school-schedule')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setSchedule(parsed)
      } catch (e) {
        console.error('Error loading schedule:', e)
      }
    }
  }, [])

  // Сохранение расписания
  useEffect(() => {
    localStorage.setItem('school-schedule', JSON.stringify(schedule))
  }, [schedule])

  // Получить текущий день недели
  const getCurrentDayIndex = () => {
    const day = new Date().getDay()
    // JavaScript: 0 = воскресенье, 1 = понедельник...
    // Наш массив: 0 = понедельник
    return day === 0 ? 6 : day - 1
  }

  // Получить текущее время в минутах
  const getCurrentTimeInMinutes = () => {
    const now = new Date()
    return now.getHours() * 60 + now.getMinutes()
  }

  // Получить текущий урок
  const getCurrentLesson = () => {
    const dayIndex = getCurrentDayIndex()
    const daySchedule = schedule[dayIndex]
    if (!daySchedule || !daySchedule.isActive) return null

    const currentTime = getCurrentTimeInMinutes()
    
    for (const lesson of daySchedule.lessons) {
      const [hours, minutes] = lesson.time.split(':').map(Number)
      const lessonStart = hours * 60 + minutes
      const lessonEnd = lessonStart + lesson.duration
      
      if (currentTime >= lessonStart && currentTime <= lessonEnd) {
        return lesson
      }
    }
    return null
  }

  // Получить следующий урок
  const getNextLesson = () => {
    const dayIndex = getCurrentDayIndex()
    const daySchedule = schedule[dayIndex]
    if (!daySchedule || !daySchedule.isActive) return null

    const currentTime = getCurrentTimeInMinutes()
    
    const sortedLessons = [...daySchedule.lessons].sort((a, b) => {
      const [ah, am] = a.time.split(':').map(Number)
      const [bh, bm] = b.time.split(':').map(Number)
      return (ah * 60 + am) - (bh * 60 + bm)
    })
    
    for (const lesson of sortedLessons) {
      const [hours, minutes] = lesson.time.split(':').map(Number)
      const lessonStart = hours * 60 + minutes
      
      if (lessonStart > currentTime) {
        return lesson
      }
    }
    return null
  }

  // Добавить урок
  const addLesson = () => {
    if (!newLesson.subject || !newLesson.time) return
    
    const subject = SUBJECTS.find(s => s.name === newLesson.subject)
    const lesson: Lesson = {
      id: Date.now().toString(),
      subject: newLesson.subject,
      time: newLesson.time,
      duration: newLesson.duration || 45,
      room: newLesson.room,
      teacher: newLesson.teacher,
      homework: newLesson.homework,
      color: subject?.color || newLesson.color || 'bg-blue-500'
    }

    const updatedSchedule = [...schedule]
    updatedSchedule[selectedDay].lessons.push(lesson)
    updatedSchedule[selectedDay].lessons.sort((a, b) => {
      const [ah, am] = a.time.split(':').map(Number)
      const [bh, bm] = b.time.split(':').map(Number)
      return (ah * 60 + am) - (bh * 60 + bm)
    })
    
    setSchedule(updatedSchedule)
    setIsAddDialogOpen(false)
    resetNewLesson()
  }

  // Удалить урок
  const deleteLesson = (dayIndex: number, lessonId: string) => {
    const updatedSchedule = [...schedule]
    updatedSchedule[dayIndex].lessons = updatedSchedule[dayIndex].lessons.filter(
      l => l.id !== lessonId
    )
    setSchedule(updatedSchedule)
  }

  // Обновить урок
  const updateLesson = () => {
    if (!editingLesson) return
    
    const updatedSchedule = [...schedule]
    const dayIndex = schedule.findIndex(d => 
      d.lessons.some(l => l.id === editingLesson.id)
    )
    
    if (dayIndex !== -1) {
      const lessonIndex = updatedSchedule[dayIndex].lessons.findIndex(
        l => l.id === editingLesson.id
      )
      if (lessonIndex !== -1) {
        updatedSchedule[dayIndex].lessons[lessonIndex] = editingLesson
        updatedSchedule[dayIndex].lessons.sort((a, b) => {
          const [ah, am] = a.time.split(':').map(Number)
          const [bh, bm] = b.time.split(':').map(Number)
          return (ah * 60 + am) - (bh * 60 + bm)
        })
        setSchedule(updatedSchedule)
      }
    }
    
    setEditingLesson(null)
  }

  // Сбросить форму нового урока
  const resetNewLesson = () => {
    setNewLesson({
      subject: '',
      time: '08:00',
      duration: 45,
      room: '',
      teacher: '',
      homework: '',
      color: 'bg-blue-500'
    })
  }

  // Переключить активность дня
  const toggleDayActive = (dayIndex: number) => {
    const updatedSchedule = [...schedule]
    updatedSchedule[dayIndex].isActive = !updatedSchedule[dayIndex].isActive
    setSchedule(updatedSchedule)
  }

  // Получить иконку для времени суток
  const getTimeIcon = (time: string) => {
    const hour = parseInt(time.split(':')[0])
    if (hour < 9) return <Sun className="w-4 h-4 text-yellow-400" />
    if (hour < 12) return <CloudSun className="w-4 h-4 text-orange-400" />
    if (hour < 15) return <Cloud className="w-4 h-4 text-blue-400" />
    if (hour < 18) return <Coffee className="w-4 h-4 text-amber-600" />
    return <Moon className="w-4 h-4 text-indigo-400" />
  }

  const currentLesson = getCurrentLesson()
  const nextLesson = getNextLesson()
  const currentDayIndex = getCurrentDayIndex()

  return (
    <div className="space-y-4">
      {/* Текущий статус */}
      <Card className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-indigo-500/30">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-500/30 rounded-lg">
                <Clock className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Сейчас</p>
                <p className="text-lg font-semibold">
                  {currentLesson ? (
                    <span className="text-green-400">{currentLesson.subject}</span>
                  ) : (
                    <span className="text-gray-400">Нет урока</span>
                  )}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Следующий урок</p>
              <p className="font-medium">
                {nextLesson ? (
                  <span>{nextLesson.subject} в {nextLesson.time}</span>
                ) : (
                  <span className="text-gray-500">На сегодня всё!</span>
                )}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Дни недели */}
      <div className="flex gap-1 overflow-x-auto pb-2">
        {schedule.map((day, index) => (
          <Button
            key={day.day}
            variant={selectedDay === index ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedDay(index)}
            className={`flex-shrink-0 ${
              index === currentDayIndex 
                ? 'ring-2 ring-green-400 ring-offset-2 ring-offset-gray-900' 
                : ''
            } ${!day.isActive ? 'opacity-50' : ''}`}
          >
            <span className="mr-1">{day.shortDay}</span>
            {day.lessons.length > 0 && (
              <Badge variant="secondary" className="ml-1 px-1.5 py-0 text-xs">
                {day.lessons.length}
              </Badge>
            )}
          </Button>
        ))}
      </div>

      {/* Расписание на выбранный день */}
      <Card className="bg-purple-900/30 border-purple-500/30">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {schedule[selectedDay].day}
              {selectedDay === currentDayIndex && (
                <Badge className="bg-green-500 text-white ml-2">Сегодня</Badge>
              )}
            </CardTitle>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleDayActive(selectedDay)}
              >
                {schedule[selectedDay].isActive ? (
                  <>
                    <Bell className="w-4 h-4 mr-1" />
                    Учебный день
                  </>
                ) : (
                  <>
                    <Home className="w-4 h-4 mr-1" />
                    Выходной
                  </>
                )}
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  resetNewLesson()
                  setIsAddDialogOpen(true)
                }}
              >
                <Plus className="w-4 h-4 mr-1" />
                Урок
              </Button>
            </div>
          </div>
          <CardDescription>
            {schedule[selectedDay].isActive 
              ? `${schedule[selectedDay].lessons.length} уроков` 
              : 'Выходной день'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {schedule[selectedDay].lessons.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Нет уроков</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => {
                  resetNewLesson()
                  setIsAddDialogOpen(true)
                }}
              >
                <Plus className="w-4 h-4 mr-1" />
                Добавить первый урок
              </Button>
            </div>
          ) : (
            <ScrollArea className="h-[400px] pr-2">
              <div className="space-y-2">
                {schedule[selectedDay].lessons.map((lesson, lessonIndex) => (
                  <div
                    key={lesson.id}
                    className={`p-3 rounded-lg border ${
                      currentLesson?.id === lesson.id
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-gray-700 bg-gray-800/50'
                    } hover:bg-gray-700/50 transition-colors`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className={`w-1 h-full min-h-[60px] rounded-full ${lesson.color}`} />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 font-mono">
                              {lessonIndex + 1}.
                            </span>
                            {getTimeIcon(lesson.time)}
                            <span className="font-mono text-sm">{lesson.time}</span>
                            <span className="text-xs text-gray-500">
                              ({lesson.duration} мин)
                            </span>
                          </div>
                          <h4 className="font-semibold mt-1">{lesson.subject}</h4>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {lesson.room && (
                              <span className="text-xs text-gray-400">
                                📍 Каб. {lesson.room}
                              </span>
                            )}
                            {lesson.teacher && (
                              <span className="text-xs text-gray-400">
                                👨‍🏫 {lesson.teacher}
                              </span>
                            )}
                          </div>
                          {lesson.homework && (
                            <p className="text-xs text-yellow-400 mt-1">
                              📝 {lesson.homework}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setEditingLesson(lesson)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteLesson(selectedDay, lesson.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </CardContent>
      </Card>

      {/* Диалог добавления урока */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Добавить урок</DialogTitle>
            <DialogDescription>
              Добавьте новый урок в расписание на {schedule[selectedDay].day}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Предмет</label>
              <Select
                value={newLesson.subject}
                onValueChange={(value) => setNewLesson({ ...newLesson, subject: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Выберите предмет" />
                </SelectTrigger>
                <SelectContent>
                  {SUBJECTS.map((subject) => (
                    <SelectItem key={subject.name} value={subject.name}>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded ${subject.color}`} />
                        {subject.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Время начала</label>
                <Select
                  value={newLesson.time}
                  onValueChange={(value) => setNewLesson({ ...newLesson, time: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {TIME_SLOTS.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Длительность (мин)</label>
                <Select
                  value={newLesson.duration?.toString()}
                  onValueChange={(value) => setNewLesson({ ...newLesson, duration: parseInt(value) })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 мин</SelectItem>
                    <SelectItem value="40">40 мин</SelectItem>
                    <SelectItem value="45">45 мин</SelectItem>
                    <SelectItem value="60">60 мин</SelectItem>
                    <SelectItem value="90">90 мин</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Кабинет</label>
                <Input
                  placeholder="№ кабинета"
                  value={newLesson.room || ''}
                  onChange={(e) => setNewLesson({ ...newLesson, room: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Учитель</label>
                <Input
                  placeholder="Имя учителя"
                  value={newLesson.teacher || ''}
                  onChange={(e) => setNewLesson({ ...newLesson, teacher: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Домашнее задание</label>
              <Input
                placeholder="Что задали..."
                value={newLesson.homework || ''}
                onChange={(e) => setNewLesson({ ...newLesson, homework: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Отмена
            </Button>
            <Button onClick={addLesson} disabled={!newLesson.subject}>
              Добавить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Диалог редактирования урока */}
      <Dialog open={!!editingLesson} onOpenChange={() => setEditingLesson(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Редактировать урок</DialogTitle>
          </DialogHeader>
          {editingLesson && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Предмет</label>
                <Select
                  value={editingLesson.subject}
                  onValueChange={(value) => setEditingLesson({ ...editingLesson, subject: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {SUBJECTS.map((subject) => (
                      <SelectItem key={subject.name} value={subject.name}>
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded ${subject.color}`} />
                          {subject.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Время начала</label>
                  <Select
                    value={editingLesson.time}
                    onValueChange={(value) => setEditingLesson({ ...editingLesson, time: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {TIME_SLOTS.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Длительность (мин)</label>
                  <Select
                    value={editingLesson.duration.toString()}
                    onValueChange={(value) => setEditingLesson({ ...editingLesson, duration: parseInt(value) })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 мин</SelectItem>
                      <SelectItem value="40">40 мин</SelectItem>
                      <SelectItem value="45">45 мин</SelectItem>
                      <SelectItem value="60">60 мин</SelectItem>
                      <SelectItem value="90">90 мин</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Кабинет</label>
                  <Input
                    placeholder="№ кабинета"
                    value={editingLesson.room || ''}
                    onChange={(e) => setEditingLesson({ ...editingLesson, room: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Учитель</label>
                  <Input
                    placeholder="Имя учителя"
                    value={editingLesson.teacher || ''}
                    onChange={(e) => setEditingLesson({ ...editingLesson, teacher: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Домашнее задание</label>
                <Input
                  placeholder="Что задали..."
                  value={editingLesson.homework || ''}
                  onChange={(e) => setEditingLesson({ ...editingLesson, homework: e.target.value })}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditingLesson(null)}>
              Отмена
            </Button>
            <Button onClick={updateLesson}>
              Сохранить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
