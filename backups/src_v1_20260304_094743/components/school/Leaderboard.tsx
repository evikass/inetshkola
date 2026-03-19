'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Trophy, Crown, Medal, Star, TrendingUp, TrendingDown, 
  Flame, Zap, Target, Swords, Sparkles, ChevronUp, ChevronDown
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

interface LeaderboardStudent {
  id: string
  name: string
  avatar: string
  level: number
  xp: number
  streak: number
  rank: number
  previousRank: number
  isCurrentUser?: boolean
  xpToNextLevel: number
}

type TimeFilter = 'daily' | 'weekly' | 'all-time'

// Mock data for students
const generateMockStudents = (currentUserName: string = 'Ты'): LeaderboardStudent[] => {
  const names = [
    'Александр', 'Мария', 'Дмитрий', 'Анна', 'Максим',
    'Елена', 'Артём', 'София', 'Иван', 'Ольга',
    'Кирилл', 'Алиса', 'Никита', 'Виктория', 'Андрей',
    'Полина', 'Михаил', 'Дарья', 'Владислав', currentUserName
  ]
  
  return names.map((name, index) => ({
    id: `student-${index}`,
    name,
    avatar: ['🦁', '🐯', '🦊', '🐻', '🐼', '🐨', '🦄', '🐙', '🦋', '🐸', '🦉', '🦜', '🐬', '🦈', '🦅', '🐝', '🦩', '🦚', '🦤', '🎓'][index],
    level: Math.floor(Math.random() * 50) + 1,
    xp: Math.floor(Math.random() * 100),
    streak: Math.floor(Math.random() * 30),
    rank: index + 1,
    previousRank: index + 1 + Math.floor(Math.random() * 3) - 1,
    isCurrentUser: name === currentUserName,
    xpToNextLevel: 100
  })).sort((a, b) => b.xp - a.xp).map((student, index) => ({
    ...student,
    rank: index + 1
  }))
}

export default function Leaderboard() {
  const [students, setStudents] = useState<LeaderboardStudent[]>([])
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('weekly')
  const [showConfetti, setShowConfetti] = useState(false)
  const [animatingRank, setAnimatingRank] = useState<string | null>(null)
  const { playSuccess, playWin, playLevelUp } = useSound()

  // Load students on mount
  useEffect(() => {
    const savedStudents = localStorage.getItem('leaderboard-students')
    const savedTime = localStorage.getItem('leaderboard-time')
    
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents))
    } else {
      const newStudents = generateMockStudents()
      setStudents(newStudents)
      localStorage.setItem('leaderboard-students', JSON.stringify(newStudents))
    }
    
    if (savedTime) {
      setTimeFilter(savedTime as TimeFilter)
    }
  }, [])

  // Save students to localStorage
  useEffect(() => {
    if (students.length > 0) {
      localStorage.setItem('leaderboard-students', JSON.stringify(students))
    }
  }, [students])

  // Handle time filter change
  const handleTimeFilterChange = (filter: TimeFilter) => {
    setTimeFilter(filter)
    localStorage.setItem('leaderboard-time', filter)
    
    // Simulate rank changes
    const updatedStudents = [...students].sort(() => Math.random() - 0.5)
      .map((student, index) => ({
        ...student,
        previousRank: student.rank,
        rank: index + 1
      }))
      .sort((a, b) => a.rank - b.rank)
    
    setStudents(updatedStudents)
    playSuccess()
  }

  // Handle challenge button
  const handleChallenge = (studentId: string) => {
    playClick()
    const student = students.find(s => s.id === studentId)
    if (student) {
      // Simulate challenge result
      const won = Math.random() > 0.5
      if (won) {
        playWin()
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 3000)
        
        // Update ranks
        setStudents(prev => {
          const updated = prev.map(s => {
            if (s.id === studentId) {
              return { ...s, previousRank: s.rank, rank: s.rank + 1 }
            }
            if (s.isCurrentUser) {
              return { ...s, previousRank: s.rank, rank: s.rank - 1, xp: s.xp + 10 }
            }
            return s
          })
          return updated.sort((a, b) => b.xp - a.xp).map((s, i) => ({ ...s, rank: i + 1 }))
        })
      } else {
        playError()
      }
    }
  }

  // Get rank badge
  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return (
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            className="relative"
          >
            <Crown className="w-8 h-8 text-yellow-400" />
            <motion.div
              className="absolute -top-1 -right-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </motion.div>
          </motion.div>
        )
      case 2:
        return <Medal className="w-8 h-8 text-gray-300" />
      case 3:
        return <Medal className="w-8 h-8 text-amber-600" />
      default:
        return (
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-lg">
            {rank}
          </div>
        )
    }
  }

  // Get rank change indicator
  const getRankChange = (current: number, previous: number) => {
    const diff = previous - current
    if (diff > 0) {
      return (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex items-center gap-1 text-green-400"
        >
          <ChevronUp className="w-4 h-4" />
          <span className="text-sm">{diff}</span>
        </motion.div>
      )
    } else if (diff < 0) {
      return (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex items-center gap-1 text-red-400"
        >
          <ChevronDown className="w-4 h-4" />
          <span className="text-sm">{Math.abs(diff)}</span>
        </motion.div>
      )
    }
    return null
  }

  // Current user position
  const currentUser = students.find(s => s.isCurrentUser)

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="w-6 h-6 text-yellow-400" />
          <h2 className="text-xl font-bold text-white">Лидерборд</h2>
        </div>
        <div className="flex gap-1 bg-white/10 rounded-lg p-1">
          {(['daily', 'weekly', 'all-time'] as TimeFilter[]).map((filter) => (
            <Button
              key={filter}
              size="sm"
              variant={timeFilter === filter ? 'default' : 'ghost'}
              onClick={() => handleTimeFilterChange(filter)}
              className={`
                text-xs transition-all
                ${timeFilter === filter 
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' 
                  : 'text-white/70 hover:text-white'
                }
              `}
            >
              {filter === 'daily' ? 'День' : filter === 'weekly' ? 'Неделя' : 'Всё время'}
            </Button>
          ))}
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="flex items-end justify-center gap-2 h-40 mb-4">
        {students.slice(0, 3).map((student, index) => {
          const positions = [1, 0, 2] // Silver, Gold, Bronze order
          const actualIndex = positions[index]
          const heights = ['h-28', 'h-36', 'h-24']
          const colors = [
            'from-gray-400 to-gray-500',
            'from-yellow-400 to-amber-500',
            'from-amber-600 to-amber-700'
          ]
          const posStudent = students[actualIndex]
          
          return (
            <motion.div
              key={posStudent.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`
                flex flex-col items-center justify-end
                ${student.isCurrentUser ? 'ring-2 ring-purple-400 rounded-lg' : ''}
              `}
            >
              {/* Avatar */}
              <motion.div
                className="relative mb-2"
                animate={actualIndex === 0 ? { y: [0, -5, 0] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className={`
                  w-14 h-14 rounded-full flex items-center justify-center text-3xl
                  bg-gradient-to-br ${colors[actualIndex]}
                  shadow-lg
                `}>
                  {posStudent.avatar}
                </div>
                {actualIndex === 0 && (
                  <motion.div
                    className="absolute -top-2 left-1/2 -translate-x-1/2"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  >
                    👑
                  </motion.div>
                )}
              </motion.div>
              
              {/* Name and XP */}
              <p className="text-sm font-medium text-white text-center max-w-16 truncate">
                {posStudent.name}
              </p>
              <p className="text-xs text-white/60">Ур. {posStudent.level}</p>
              
              {/* Podium */}
              <div className={`
                w-20 ${heights[actualIndex]} rounded-t-lg mt-2
                bg-gradient-to-t ${colors[actualIndex]}
                flex flex-col items-center justify-end pb-2
              `}>
                <span className="text-2xl font-bold text-white">
                  {actualIndex + 1}
                </span>
                <div className="flex items-center gap-1 text-white/80 text-xs">
                  <Zap className="w-3 h-3" />
                  {posStudent.xp} XP
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Current User Position Card (if not in top 3) */}
      {currentUser && currentUser.rank > 3 && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <Card className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/30">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold text-purple-400">#{currentUser.rank}</div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-2xl">
                  {currentUser.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white">{currentUser.name}</p>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <span>Ур. {currentUser.level}</span>
                    <span className="flex items-center gap-1">
                      <Flame className="w-3 h-3 text-orange-400" />
                      {currentUser.streak}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-yellow-400">{currentUser.xp} XP</p>
                  <Progress value={currentUser.xp} className="w-20 h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Leaderboard List */}
      <Card className="bg-white/5 border-white/10">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-white/60">Рейтинг учеников</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[300px]">
            <div className="space-y-1 p-4 pt-0">
              <AnimatePresence mode="popLayout">
                {students.map((student) => (
                  <motion.div
                    key={student.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className={`
                      flex items-center gap-3 p-3 rounded-lg
                      ${student.isCurrentUser 
                        ? 'bg-gradient-to-r from-purple-500/30 to-blue-500/30 ring-1 ring-purple-400/50' 
                        : 'bg-white/5 hover:bg-white/10'
                      }
                      transition-colors
                    `}
                  >
                    {/* Rank */}
                    <div className="w-10 flex justify-center">
                      {getRankBadge(student.rank)}
                    </div>
                    
                    {/* Avatar */}
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center text-xl
                      ${student.isCurrentUser 
                        ? 'bg-gradient-to-br from-purple-500 to-blue-500' 
                        : 'bg-white/10'
                      }
                    `}>
                      {student.avatar}
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-white truncate">
                          {student.name}
                          {student.isCurrentUser && (
                            <Badge className="ml-2 bg-purple-500 text-xs">Вы</Badge>
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-white/50">
                        <span>Ур. {student.level}</span>
                        <span className="flex items-center gap-1">
                          <Flame className="w-3 h-3 text-orange-400" />
                          {student.streak}
                        </span>
                      </div>
                      {/* XP Progress */}
                      <Progress value={student.xp} className="h-1 mt-1" />
                    </div>
                    
                    {/* XP & Rank Change */}
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="font-bold text-white">{student.xp}</span>
                      </div>
                      {getRankChange(student.rank, student.previousRank)}
                    </div>
                    
                    {/* Challenge Button */}
                    {!student.isCurrentUser && student.rank <= 10 && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleChallenge(student.id)}
                        className="shrink-0 border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/20"
                      >
                        <Swords className="w-4 h-4 mr-1" />
                        Вызов
                      </Button>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Confetti Animation */}
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
          >
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  y: -20, 
                  x: Math.random() * window.innerWidth,
                  rotate: 0 
                }}
                animate={{ 
                  y: window.innerHeight + 100,
                  x: Math.random() * window.innerWidth,
                  rotate: Math.random() * 720 - 360
                }}
                transition={{ 
                  duration: 2 + Math.random() * 2,
                  delay: Math.random() * 0.5
                }}
                className="absolute text-2xl"
              >
                {['🎉', '⭐', '🌟', '✨', '🎊', '🏆', '💎'][Math.floor(Math.random() * 7)]}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Footer */}
      <div className="grid grid-cols-3 gap-2">
        <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30">
          <CardContent className="p-3 text-center">
            <Trophy className="w-5 h-5 mx-auto mb-1 text-yellow-400" />
            <p className="text-lg font-bold text-white">
              #{currentUser?.rank || '-'}
            </p>
            <p className="text-xs text-white/60">Место</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30">
          <CardContent className="p-3 text-center">
            <Target className="w-5 h-5 mx-auto mb-1 text-purple-400" />
            <p className="text-lg font-bold text-white">
              {students.filter(s => s.rank < (currentUser?.rank || 0)).length}
            </p>
            <p className="text-xs text-white/60">До топа</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30">
          <CardContent className="p-3 text-center">
            <TrendingUp className="w-5 h-5 mx-auto mb-1 text-green-400" />
            <p className="text-lg font-bold text-white">
              {currentUser?.streak || 0}
            </p>
            <p className="text-xs text-white/60">Дней подряд</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
