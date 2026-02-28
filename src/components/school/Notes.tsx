'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Plus, Search, Trash2, Edit3, Save, X, FileText, 
  BookOpen, Pin, MoreVertical, Clock, Tag, FolderOpen
} from 'lucide-react'

interface Note {
  id: string
  title: string
  content: string
  subject: string
  tags: string[]
  createdAt: string
  updatedAt: string
  isPinned: boolean
  color: string
}

const SUBJECTS = [
  'Математика', 'Русский язык', 'Физика', 'Химия', 'Биология',
  'История', 'Обществознание', 'Английский', 'Информатика', 'Литература', 'Другое'
]

const NOTE_COLORS = [
  { name: 'Фиолетовый', value: 'from-purple-500/20 to-purple-600/20', border: 'border-purple-500/30' },
  { name: 'Синий', value: 'from-blue-500/20 to-blue-600/20', border: 'border-blue-500/30' },
  { name: 'Зелёный', value: 'from-green-500/20 to-green-600/20', border: 'border-green-500/30' },
  { name: 'Жёлтый', value: 'from-yellow-500/20 to-yellow-600/20', border: 'border-yellow-500/30' },
  { name: 'Красный', value: 'from-red-500/20 to-red-600/20', border: 'border-red-500/30' },
  { name: 'Розовый', value: 'from-pink-500/20 to-pink-600/20', border: 'border-pink-500/30' },
]

interface NotesProps {
  onNoteCreate?: (note: Note) => void
}

export default function Notes({ onNoteCreate }: NotesProps) {
  // Загрузка заметок при инициализации
  const [notes, setNotes] = useState<Note[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('studentNotes_v1')
      if (saved) return JSON.parse(saved)
    }
    return []
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
    subject: 'Математика',
    tags: [] as string[],
    color: NOTE_COLORS[0].value
  })
  const [newTag, setNewTag] = useState('')
  
  // Сохранение заметок
  useEffect(() => {
    localStorage.setItem('studentNotes_v1', JSON.stringify(notes))
  }, [notes])
  
  // Создание заметки
  const createNote = useCallback(() => {
    if (!newNote.title.trim() || !newNote.content.trim()) return
    
    const note: Note = {
      id: Date.now().toString(),
      title: newNote.title,
      content: newNote.content,
      subject: newNote.subject,
      tags: newNote.tags,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isPinned: false,
      color: newNote.color
    }
    
    setNotes(prev => [note, ...prev])
    setNewNote({ title: '', content: '', subject: 'Математика', tags: [], color: NOTE_COLORS[0].value })
    setIsCreating(false)
    onNoteCreate?.(note)
  }, [newNote, onNoteCreate])
  
  // Обновление заметки
  const updateNote = useCallback((id: string, updates: Partial<Note>) => {
    setNotes(prev => prev.map(note => 
      note.id === id 
        ? { ...note, ...updates, updatedAt: new Date().toISOString() }
        : note
    ))
  }, [])
  
  // Удаление заметки
  const deleteNote = useCallback((id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id))
  }, [])
  
  // Закрепление заметки
  const togglePin = useCallback((id: string) => {
    setNotes(prev => {
      const note = prev.find(n => n.id === id)
      if (!note) return prev
      
      const updated = prev.map(n => 
        n.id === id ? { ...n, isPinned: !n.isPinned } : n
      )
      
      // Сортировка: закреплённые в начале
      return updated.sort((a, b) => {
        if (a.isPinned && !b.isPinned) return -1
        if (!a.isPinned && b.isPinned) return 1
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      })
    })
  }, [])
  
  // Добавление тега
  const addTag = useCallback(() => {
    if (!newTag.trim()) return
    if (newNote.tags.includes(newTag.trim())) {
      setNewTag('')
      return
    }
    setNewNote(prev => ({
      ...prev,
      tags: [...prev.tags, newTag.trim()]
    }))
    setNewTag('')
  }, [newTag, newNote.tags])
  
  // Удаление тега
  const removeTag = useCallback((tag: string) => {
    setNewNote(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }))
  }, [])
  
  // Фильтрация заметок
  const filteredNotes = notes.filter(note => {
    const matchesSearch = searchQuery === '' || 
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesSubject = selectedSubject === null || note.subject === selectedSubject
    
    return matchesSearch && matchesSubject
  })
  
  // Форматирование даты
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    
    if (diff < 60000) return 'только что'
    if (diff < 3600000) return `${Math.floor(diff / 60000)} мин. назад`
    if (diff < 86400000) return `${Math.floor(diff / 3600000)} ч. назад`
    if (diff < 604800000) return `${Math.floor(diff / 86400000)} дн. назад`
    
    return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })
  }
  
  // Получение цвета заметки
  const getNoteColor = (colorValue: string) => {
    return NOTE_COLORS.find(c => c.value === colorValue) || NOTE_COLORS[0]
  }
  
  return (
    <div className="space-y-4">
      {/* Поиск и фильтры */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Поиск заметок..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          />
        </div>
        
        <Button
          onClick={() => setIsCreating(true)}
          className="bg-purple-600 hover:bg-purple-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Новая заметка
        </Button>
      </div>
      
      {/* Фильтр по предметам */}
      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          variant={selectedSubject === null ? "default" : "outline"}
          onClick={() => setSelectedSubject(null)}
          className={selectedSubject === null 
            ? "bg-purple-600 hover:bg-purple-700" 
            : "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
          }
        >
          Все
        </Button>
        {SUBJECTS.map(subject => (
          <Button
            key={subject}
            size="sm"
            variant={selectedSubject === subject ? "default" : "outline"}
            onClick={() => setSelectedSubject(subject)}
            className={selectedSubject === subject 
              ? "bg-purple-600 hover:bg-purple-700" 
              : "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
            }
          >
            {subject}
          </Button>
        ))}
      </div>
      
      {/* Форма создания заметки */}
      {isCreating && (
        <Card className="bg-white/5 border-white/10 backdrop-blur">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-white text-lg">Новая заметка</CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsCreating(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Input
                placeholder="Заголовок..."
                value={newNote.title}
                onChange={(e) => setNewNote(prev => ({ ...prev, title: e.target.value }))}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
              />
            </div>
            
            <div>
              <textarea
                placeholder="Содержание заметки..."
                value={newNote.content}
                onChange={(e) => setNewNote(prev => ({ ...prev, content: e.target.value }))}
                className="w-full h-32 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder:text-gray-500 resize-none"
              />
            </div>
            
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-xs text-gray-400 mb-1 block">Предмет</label>
                <select
                  value={newNote.subject}
                  onChange={(e) => setNewNote(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                >
                  {SUBJECTS.map(s => (
                    <option key={s} value={s} className="bg-slate-800">{s}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex-1">
                <label className="text-xs text-gray-400 mb-1 block">Цвет</label>
                <div className="flex gap-1">
                  {NOTE_COLORS.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setNewNote(prev => ({ ...prev, color: color.value }))}
                      className={`w-6 h-6 rounded-full bg-gradient-to-br ${color.value} border-2 transition-transform ${
                        newNote.color === color.value 
                          ? `${color.border} scale-110` 
                          : 'border-transparent'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Теги</label>
              <div className="flex gap-2 mb-2">
                {newNote.tags.map(tag => (
                  <Badge key={tag} className="bg-purple-500/20 text-purple-300 pr-1">
                    {tag}
                    <button onClick={() => removeTag(tag)} className="ml-1 hover:text-white">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Добавить тег..."
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addTag()}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 h-8"
                />
                <Button size="sm" onClick={addTag} variant="outline" className="bg-white/5 border-white/20">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <Button onClick={createNote} className="w-full bg-purple-600 hover:bg-purple-700">
              <Save className="w-4 h-4 mr-2" />
              Сохранить заметку
            </Button>
          </CardContent>
        </Card>
      )}
      
      {/* Список заметок */}
      {filteredNotes.length === 0 ? (
        <Card className="bg-white/5 border-white/10 backdrop-blur">
          <CardContent className="p-8 text-center">
            <FolderOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              {notes.length === 0 ? 'Нет заметок' : 'Ничего не найдено'}
            </h3>
            <p className="text-gray-400 mb-4">
              {notes.length === 0 
                ? 'Создайте свою первую заметку для учёбы' 
                : 'Попробуйте изменить параметры поиска'
              }
            </p>
            {notes.length === 0 && (
              <Button onClick={() => setIsCreating(true)} className="bg-purple-600 hover:bg-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Создать заметку
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredNotes.map(note => {
            const colorConfig = getNoteColor(note.color)
            
            return (
              <Card 
                key={note.id}
                className={`bg-gradient-to-br ${note.color} ${colorConfig.border} backdrop-blur group`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {note.isPinned && <Pin className="w-3 h-3 text-yellow-400" />}
                        <CardTitle className="text-white text-base truncate">{note.title}</CardTitle>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <BookOpen className="w-3 h-3" />
                        <span>{note.subject}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => togglePin(note.id)}
                        className="h-7 w-7 p-0 text-gray-400 hover:text-white"
                      >
                        <Pin className={`w-3.5 h-3.5 ${note.isPinned ? 'text-yellow-400' : ''}`} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteNote(note.id)}
                        className="h-7 w-7 p-0 text-gray-400 hover:text-red-400"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-300 line-clamp-4 mb-3 whitespace-pre-wrap">
                    {note.content}
                  </p>
                  
                  {note.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {note.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs border-white/20 text-gray-400">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{formatDate(note.updatedAt)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
      
      {/* Статистика */}
      {notes.length > 0 && (
        <div className="flex gap-4 text-sm text-gray-400">
          <span>Всего заметок: {notes.length}</span>
          <span>•</span>
          <span>Закреплено: {notes.filter(n => n.isPinned).length}</span>
          <span>•</span>
          <span>Тегов: {new Set(notes.flatMap(n => n.tags)).size}</span>
        </div>
      )}
    </div>
  )
}
