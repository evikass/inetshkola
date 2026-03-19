'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import {
  Volume2, VolumeX, Keyboard, RotateCcw, Download, Upload, Trash2
} from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'

export function SettingsDialog() {
  const {
    showSettings,
    setShowSettings,
    soundEnabled,
    setSoundEnabled,
    setProgress,
    setUserStats,
    setAchievements,
    setVisitedClasses,
    setDailyTasks,
    setActivityLog,
    setDailyStats,
    setBookmarks,
    setNotes,
    setStudyTime,
    achievementsData,
    dailyTasksData
  } = useSchool()

  const handleResetProgress = () => {
    if (confirm('Вы уверены, что хотите сбросить весь прогресс? Это действие нельзя отменить.')) {
      setProgress({})
      setUserStats({
        level: 1,
        experience: 0,
        totalPoints: 0,
        topicsCompleted: 0,
        quizzesCompleted: 0,
        perfectQuizzes: 0,
        streak: 0,
        maxStreak: 0,
        lastActiveDate: '',
        totalStudyTime: 0,
        rank: 'Новичок'
      })
      setAchievements(achievementsData)
      setVisitedClasses(new Set([1]))
      setDailyTasks(dailyTasksData)
      setActivityLog([])
      setDailyStats({ topicsToday: 0, quizzesToday: 0, pointsToday: 0, timeToday: 0 })
      setBookmarks([])
      setNotes({})
      setStudyTime(0)

      // Очистка localStorage
      localStorage.clear()
    }
  }

  const handleExportData = () => {
    const data = {
      progress: localStorage.getItem('schoolProgress_v2'),
      stats: localStorage.getItem('schoolStats_v2'),
      achievements: localStorage.getItem('schoolAchievements_v2'),
      visitedClasses: localStorage.getItem('visitedClasses_v2'),
      bookmarks: localStorage.getItem('bookmarks_v2'),
      notes: localStorage.getItem('notes_v2'),
      studyTime: localStorage.getItem('studyTime_v2')
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `inetshkola-backup-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImportData = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (!file) return

      const reader = new FileReader()
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target?.result as string)
          if (data.progress) localStorage.setItem('schoolProgress_v2', data.progress)
          if (data.stats) localStorage.setItem('schoolStats_v2', data.stats)
          if (data.achievements) localStorage.setItem('schoolAchievements_v2', data.achievements)
          if (data.visitedClasses) localStorage.setItem('visitedClasses_v2', data.visitedClasses)
          if (data.bookmarks) localStorage.setItem('bookmarks_v2', data.bookmarks)
          if (data.notes) localStorage.setItem('notes_v2', data.notes)
          if (data.studyTime) localStorage.setItem('studyTime_v2', data.studyTime)

          alert('Данные успешно импортированы! Обновите страницу.')
          window.location.reload()
        } catch {
          alert('Ошибка при импорте данных')
        }
      }
      reader.readAsText(file)
    }
    input.click()
  }

  return (
    <Dialog open={showSettings} onOpenChange={setShowSettings}>
      <DialogContent className="max-w-md bg-slate-900 border-slate-700">
        <DialogHeader>
          <DialogTitle>Настройки</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Звуки */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {soundEnabled ? (
                    <Volume2 className="w-5 h-5 text-blue-400" />
                  ) : (
                    <VolumeX className="w-5 h-5 text-slate-400" />
                  )}
                  <div>
                    <p className="font-medium">Звуковые эффекты</p>
                    <p className="text-xs text-slate-400">Воспроизводить звуки при действиях</p>
                  </div>
                </div>
                <Switch
                  checked={soundEnabled}
                  onCheckedChange={setSoundEnabled}
                />
              </div>
            </CardContent>
          </Card>

          {/* Клавиатурные сокращения */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="py-4">
              <div className="flex items-center gap-3 mb-3">
                <Keyboard className="w-5 h-5 text-purple-400" />
                <p className="font-medium">Клавиатурные сокращения</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Переключить класс</span>
                  <kbd className="px-2 py-0.5 bg-slate-700 rounded text-xs">0-9</kbd>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Предметы</span>
                  <kbd className="px-2 py-0.5 bg-slate-700 rounded text-xs">T</kbd>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Практика</span>
                  <kbd className="px-2 py-0.5 bg-slate-700 rounded text-xs">P</kbd>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Задания</span>
                  <kbd className="px-2 py-0.5 bg-slate-700 rounded text-xs">A</kbd>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Достижения</span>
                  <kbd className="px-2 py-0.5 bg-slate-700 rounded text-xs">C</kbd>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Статистика</span>
                  <kbd className="px-2 py-0.5 bg-slate-700 rounded text-xs">S</kbd>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Справка</span>
                  <kbd className="px-2 py-0.5 bg-slate-700 rounded text-xs">?</kbd>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="bg-slate-700" />

          {/* Данные */}
          <div className="space-y-2">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={handleExportData}
            >
              <Download className="w-4 h-4 mr-2" />
              Экспорт данных
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={handleImportData}
            >
              <Upload className="w-4 h-4 mr-2" />
              Импорт данных
            </Button>
            <Button
              variant="destructive"
              className="w-full justify-start"
              onClick={handleResetProgress}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Сбросить прогресс
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
