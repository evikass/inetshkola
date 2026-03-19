'use client'

import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Flame, Star, Trophy, Settings, GraduationCap } from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'

export function Header() {
  const {
    userStats,
    overallProgress,
    setShowSettings
  } = useSchool()

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-900/80 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ИНЕТШКОЛА
              </h1>
              <p className="text-xs text-slate-400">Интерактивная школа</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm">
              <Flame className="w-4 h-4 text-orange-400" />
              <span className="font-medium">{userStats.streak} дней</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">{userStats.totalPoints}</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30">
              <Trophy className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium">Ур. {userStats.level}</span>
            </div>

            <Button variant="ghost" size="icon" onClick={() => setShowSettings(true)}>
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-3">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Прогресс: {overallProgress}%</span>
            <span>{userStats.rank}</span>
          </div>
          <Progress value={overallProgress} className="h-1.5" />
        </div>
      </div>
    </header>
  )
}
