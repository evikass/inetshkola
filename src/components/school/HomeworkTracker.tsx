'use client'

import { useState, useMemo, useCallback } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import {
  ClipboardList, Plus, Check, Trash2, Calendar, Clock,
  AlertCircle, CheckCircle, BookOpen, ChevronDown, ChevronUp,
  Edit2, X, Flag, Star
} from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'

// Типы
interface Homework {
  id: string
  title: string
  subject: string
  description: string
  dueDate: string // ISO date
  dueTime: string
  completed: boolean
  priority: 'low' | 'medium' | 'high'
  created: number
  completedAt: number | null
}

// Предметы
const SUBJECTS = [
  { id: 'math', name: 'Математика', color: 'bg-blue-500', emoji: '🔢' },
  { id: 'russian', name: 'Русский язык', color: 'bg-red-500', emoji: '📝' },
  { id: 'literature', name: 'Литература', color: 'bg-purple-500', emoji: '📚' },
  { id: 'english', name: 'Английский', color: 'bg-sky-500', emoji: '🇬🇧' },
  { id: 'science', name: 'Окружающий мир', color: 'bg-green-500', emoji: '🌍' },
  { id: 'music', name: 'Музыка', color: 'bg-cyan-500', emoji: '🎵' },
  { id: 'pe', name: 'Физкультура', color: 'bg-emerald-500', emoji: '🏃' },
  { id: 'art', name: 'ИЗО', color: 'bg-orange-500', emoji: '🎨' },
  { id: 'other', name: 'Другое', color: 'bg-slate-500', emoji: '📋' },
]

// Загрузка данных
function loadHomework(): Homework[] {
  if (typeof window === 'undefined') return []
  try {
    const saved = localStorage.getItem('homework_v1')
    if (saved) return JSON.parse(saved)
  } catch { /* ignore */ }
  return []
}

// Основной компонент
export function HomeworkTracker() {
  const { addExperience, playSound } = useSchool()

  const [homework, setHomework] = useState<Homework[]>(() => loadHomework())
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('active')
  const [sortBy, setSortBy] = useState<'dueDate' | 'priority' | 'subject'>('dueDate')

  // Форма добавления
  const [newHomework, setNewHomework] = useState({
    title: '',
    subject: 'math',
    description: '',
    dueDate: '',
    dueTime: '',
    priority: 'medium' as 'low' | 'medium' | 'high'
  })

  // Сохранение
  const saveHomework = useCallback((data: Homework[]) => {
    setHomework(data)
    localStorage.setItem('homework_v1', JSON.stringify(data))
  }, [])

  // Добавление
  const handleAdd = () => {
    if (!newHomework.title.trim() || !newHomework.dueDate) return

    const hw: Homework = {
      id: `hw-${Date.now()}`,
      title: newHomework.title.trim(),
      subject: newHomework.subject,
      description: newHomework.description.trim(),
      dueDate: newHomework.dueDate,
      dueTime: newHomework.dueTime,
      completed: false,
      priority: newHomework.priority,
      created: Date.now(),
      completedAt: null
    }

    saveHomework([hw, ...homework])
    setNewHomework({
      title: '',
      subject: 'math',
      description: '',
      dueDate: '',
      dueTime: '',
      priority: 'medium'
    })
    setShowAddForm(false)
    playSound('click')
  }

  // Завершение
  const handleComplete = (id: string) => {
    const hw = homework.find(h => h.id === id)
    if (!hw) return

    const updated = homework.map(h =>
      h.id === id
        ? { ...h, completed: !h.completed, completedAt: !h.completed ? Date.now() : null }
        : h
    )

    saveHomework(updated)

    if (!hw.completed) {
      playSound('success')
      // XP за выполненное задание
      const xpGain = hw.priority === 'high' ? 30 : hw.priority === 'medium' ? 20 : 10
      addExperience(xpGain)
    }
  }

  // Удаление
  const handleDelete = (id: string) => {
    saveHomework(homework.filter(h => h.id !== id))
    playSound('click')
  }

  // Фильтрация и сортировка
  const filteredHomework = useMemo(() => {
    let filtered = homework

    // Фильтр
    if (filter === 'active') {
      filtered = homework.filter(h => !h.completed)
    } else if (filter === 'completed') {
      filtered = homework.filter(h => h.completed)
    }

    // Сортировка
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'dueDate') {
        const dateA = new Date(a.dueDate + (a.dueTime ? `T${a.dueTime}` : '')).getTime()
        const dateB = new Date(b.dueDate + (b.dueTime ? `T${b.dueTime}` : '')).getTime()
        return dateA - dateB
      } else if (sortBy === 'priority') {
        const priorityOrder = { high: 0, medium: 1, low: 2 }
        return priorityOrder[a.priority] - priorityOrder[b.priority]
      } else {
        return a.subject.localeCompare(b.subject)
      }
    })

    return sorted
  }, [homework, filter, sortBy])

  // Статистика
  const stats = useMemo(() => {
    const now = new Date()
    const today = now.toISOString().split('T')[0]
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]

    return {
      total: homework.length,
      completed: homework.filter(h => h.completed).length,
      active: homework.filter(h => !h.completed).length,
      overdue: homework.filter(h => !h.completed && h.dueDate < today).length,
      dueToday: homework.filter(h => !h.completed && h.dueDate === today).length,
      dueTomorrow: homework.filter(h => !h.completed && h.dueDate === tomorrow).length,
    }
  }, [homework])

  // Прогресс
  const progress = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0

  // Получить информацию о предмете
  const getSubjectInfo = (subjectId: string) => {
    return SUBJECTS.find(s => s.id === subjectId) || SUBJECTS[SUBJECTS.length - 1]
  }

  // Форматирование даты
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    if (dateStr === today.toISOString().split('T')[0]) return 'Сегодня'
    if (dateStr === tomorrow.toISOString().split('T')[0]) return 'Завтра'

    return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })
  }

  // Просрочено ли задание
  const isOverdue = (hw: Homework) => {
    if (hw.completed) return false
    const today = new Date().toISOString().split('T')[0]
    return hw.dueDate < today
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardContent className="py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
              <ClipboardList className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Домашние задания</h3>
              <p className="text-xs text-slate-400">{stats.active} активных</p>
            </div>
          </div>
          <Button
            size="sm"
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-violet-600 hover:bg-violet-700"
          >
            {showAddForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </Button>
        </div>

        {/* Прогресс */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate-400">Выполнено</span>
            <span className="text-violet-400">{stats.completed}/{stats.total}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-4 gap-2 mb-4 text-center">
          <div className="p-2 bg-slate-700/30 rounded-lg">
            <p className="text-lg font-bold text-red-400">{stats.overdue}</p>
            <p className="text-xs text-slate-400">Просрочено</p>
          </div>
          <div className="p-2 bg-slate-700/30 rounded-lg">
            <p className="text-lg font-bold text-yellow-400">{stats.dueToday}</p>
            <p className="text-xs text-slate-400">Сегодня</p>
          </div>
          <div className="p-2 bg-slate-700/30 rounded-lg">
            <p className="text-lg font-bold text-blue-400">{stats.dueTomorrow}</p>
            <p className="text-xs text-slate-400">Завтра</p>
          </div>
          <div className="p-2 bg-slate-700/30 rounded-lg">
            <p className="text-lg font-bold text-green-400">{stats.completed}</p>
            <p className="text-xs text-slate-400">Готово</p>
          </div>
        </div>

        {/* Форма добавления */}
        {showAddForm && (
          <div className="mb-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600 space-y-3 animate-slide-up">
            <Input
              placeholder="Название задания..."
              value={newHomework.title}
              onChange={e => setNewHomework(prev => ({ ...prev, title: e.target.value }))}
              className="bg-slate-800/50 border-slate-600"
            />

            <div className="grid grid-cols-2 gap-2">
              <select
                value={newHomework.subject}
                onChange={e => setNewHomework(prev => ({ ...prev, subject: e.target.value }))}
                className="w-full p-2 rounded-lg bg-slate-800/50 border border-slate-600 text-sm"
              >
                {SUBJECTS.map(s => (
                  <option key={s.id} value={s.id}>{s.emoji} {s.name}</option>
                ))}
              </select>

              <select
                value={newHomework.priority}
                onChange={e => setNewHomework(prev => ({ ...prev, priority: e.target.value as 'low' | 'medium' | 'high' }))}
                className="w-full p-2 rounded-lg bg-slate-800/50 border border-slate-600 text-sm"
              >
                <option value="low">🟢 Низкий</option>
                <option value="medium">🟡 Средний</option>
                <option value="high">🔴 Высокий</option>
              </select>
            </div>

            <Input
              placeholder="Описание (необязательно)..."
              value={newHomework.description}
              onChange={e => setNewHomework(prev => ({ ...prev, description: e.target.value }))}
              className="bg-slate-800/50 border-slate-600"
            />

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs text-slate-400 mb-1 block">Дата сдачи</label>
                <Input
                  type="date"
                  value={newHomework.dueDate}
                  onChange={e => setNewHomework(prev => ({ ...prev, dueDate: e.target.value }))}
                  className="bg-slate-800/50 border-slate-600"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1 block">Время (необязательно)</label>
                <Input
                  type="time"
                  value={newHomework.dueTime}
                  onChange={e => setNewHomework(prev => ({ ...prev, dueTime: e.target.value }))}
                  className="bg-slate-800/50 border-slate-600"
                />
              </div>
            </div>

            <Button onClick={handleAdd} className="w-full bg-violet-600 hover:bg-violet-700">
              <Plus className="w-4 h-4 mr-2" />
              Добавить задание
            </Button>
          </div>
        )}

        {/* Фильтры */}
        <div className="flex gap-1 mb-4 overflow-x-auto">
          <Button
            variant={filter === 'active' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setFilter('active')}
            className={filter === 'active' ? 'bg-violet-600' : ''}
          >
            Активные ({stats.active})
          </Button>
          <Button
            variant={filter === 'completed' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setFilter('completed')}
            className={filter === 'completed' ? 'bg-violet-600' : ''}
          >
            Выполненные
          </Button>
          <Button
            variant={filter === 'all' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'bg-violet-600' : ''}
          >
            Все
          </Button>
        </div>

        {/* Список заданий */}
        <div className="space-y-2 max-h-[400px] overflow-y-auto scrollbar-custom">
          {filteredHomework.length === 0 ? (
            <div className="text-center py-6 text-slate-400">
              <ClipboardList className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Нет заданий</p>
            </div>
          ) : (
            filteredHomework.map(hw => {
              const subject = getSubjectInfo(hw.subject)
              const overdue = isOverdue(hw)

              return (
                <div
                  key={hw.id}
                  className={`
                    p-3 rounded-lg border transition-all
                    ${hw.completed
                      ? 'bg-green-500/10 border-green-500/30'
                      : overdue
                        ? 'bg-red-500/10 border-red-500/30'
                        : 'bg-slate-700/30 border-slate-600'
                    }
                  `}
                >
                  <div className="flex items-start gap-3">
                    {/* Чекбокс */}
                    <button
                      onClick={() => handleComplete(hw.id)}
                      className={`
                        mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                        ${hw.completed
                          ? 'bg-green-500 border-green-500'
                          : 'border-slate-500 hover:border-green-500'
                        }
                      `}
                    >
                      {hw.completed && <Check className="w-3 h-3 text-white" />}
                    </button>

                    {/* Контент */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{subject.emoji}</span>
                        <p className={`font-medium ${hw.completed ? 'line-through text-slate-400' : ''}`}>
                          {hw.title}
                        </p>
                        {hw.priority === 'high' && !hw.completed && (
                          <Flag className="w-4 h-4 text-red-400" />
                        )}
                      </div>

                      {hw.description && (
                        <p className="text-sm text-slate-400 mb-2">{hw.description}</p>
                      )}

                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className={`flex items-center gap-1 ${overdue ? 'text-red-400' : ''}`}>
                          <Calendar className="w-3 h-3" />
                          {formatDate(hw.dueDate)}
                          {hw.dueTime && ` ${hw.dueTime}`}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {subject.name}
                        </Badge>
                      </div>
                    </div>

                    {/* Удалить */}
                    <button
                      onClick={() => handleDelete(hw.id)}
                      className="p-1 text-slate-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// Мини-версия
export function HomeworkTrackerMini() {
  const stats = useMemo(() => {
    const homework = loadHomework()
    const now = new Date()
    const today = now.toISOString().split('T')[0]

    return {
      active: homework.filter(h => !h.completed).length,
      overdue: homework.filter(h => !h.completed && h.dueDate < today).length,
      dueToday: homework.filter(h => !h.completed && h.dueDate === today).length,
    }
  }, [])

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardContent className="py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ClipboardList className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium">Домашка</span>
          </div>
          <div className="flex items-center gap-2">
            {stats.overdue > 0 && (
              <Badge className="bg-red-500/20 text-red-400 text-xs">
                {stats.overdue}!
              </Badge>
            )}
            <Badge variant="outline" className="text-xs">
              {stats.active}
            </Badge>
          </div>
        </div>
        {stats.dueToday > 0 && (
          <p className="text-xs text-yellow-400 mt-1">
            ⚡ {stats.dueToday} на сегодня
          </p>
        )}
      </CardContent>
    </Card>
  )
}
