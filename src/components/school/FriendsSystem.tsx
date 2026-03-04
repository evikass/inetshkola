'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Users, UserPlus, Search, MessageCircle, Trophy, 
  Clock, Flame, Zap, Star, X, QrCode, Send,
  Gamepad2, BookOpen, Award, Swords, Check, Crown
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

interface Friend {
  id: string
  name: string
  avatar: string
  level: number
  xp: number
  streak: number
  isOnline: boolean
  lastActive: string
  currentSubject?: string
  progress: number
}

interface FriendRequest {
  id: string
  name: string
  avatar: string
  level: number
  mutualFriends: number
}

interface Activity {
  id: string
  friendId: string
  friendName: string
  friendAvatar: string
  type: 'achievement' | 'subject' | 'challenge' | 'streak'
  message: string
  timestamp: string
}

// Mock data
const mockFriends: Friend[] = [
  { id: '1', name: 'Александр', avatar: '🦁', level: 15, xp: 750, streak: 12, isOnline: true, lastActive: 'сейчас', currentSubject: 'Математика', progress: 78 },
  { id: '2', name: 'Мария', avatar: '🦊', level: 18, xp: 890, streak: 25, isOnline: true, lastActive: 'сейчас', currentSubject: 'Русский язык', progress: 92 },
  { id: '3', name: 'Дмитрий', avatar: '🐯', level: 12, xp: 340, streak: 5, isOnline: false, lastActive: '2 часа назад', progress: 45 },
  { id: '4', name: 'Анна', avatar: '🐻', level: 20, xp: 950, streak: 30, isOnline: false, lastActive: '1 день назад', progress: 88 },
  { id: '5', name: 'Максим', avatar: '🐼', level: 8, xp: 200, streak: 3, isOnline: false, lastActive: '3 дня назад', progress: 35 },
  { id: '6', name: 'Елена', avatar: '🐨', level: 16, xp: 600, streak: 18, isOnline: true, lastActive: 'сейчас', currentSubject: 'Физика', progress: 67 },
]

const mockRequests: FriendRequest[] = [
  { id: 'r1', name: 'София', avatar: '🦄', level: 14, mutualFriends: 3 },
  { id: 'r2', name: 'Артём', avatar: '🐙', level: 10, mutualFriends: 1 },
]

const mockActivities: Activity[] = [
  { id: 'a1', friendId: '1', friendName: 'Александр', friendAvatar: '🦁', type: 'achievement', message: 'Получил достижение "Мастер математики"', timestamp: '5 мин назад' },
  { id: 'a2', friendId: '2', friendName: 'Мария', friendAvatar: '🦊', type: 'streak', message: 'Серия 25 дней! 🔥', timestamp: '10 мин назад' },
  { id: 'a3', friendId: '6', friendName: 'Елена', friendAvatar: '🐨', type: 'challenge', message: 'Вызывает тебя на соревнование!', timestamp: '30 мин назад' },
  { id: 'a4', friendId: '3', friendName: 'Дмитрий', friendAvatar: '🐯', type: 'subject', message: 'Завершил тему "Квадратные уравнения"', timestamp: '1 час назад' },
]

type TabType = 'friends' | 'requests' | 'activity'

export default function FriendsSystem() {
  const [activeTab, setActiveTab] = useState<TabType>('friends')
  const [friends, setFriends] = useState<Friend[]>([])
  const [requests, setRequests] = useState<FriendRequest[]>([])
  const [activities, setActivities] = useState<Activity[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showQRModal, setShowQRModal] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null)
  const { playSuccess, playClick, playLevelUp } = useSound()

  useEffect(() => {
    const savedFriends = localStorage.getItem('friends-data')
    const savedRequests = localStorage.getItem('friend-requests')
    const savedActivities = localStorage.getItem('friend-activities')

    if (savedFriends) setFriends(JSON.parse(savedFriends))
    else {
      setFriends(mockFriends)
      localStorage.setItem('friends-data', JSON.stringify(mockFriends))
    }

    if (savedRequests) setRequests(JSON.parse(savedRequests))
    else {
      setRequests(mockRequests)
      localStorage.setItem('friend-requests', JSON.stringify(mockRequests))
    }

    if (savedActivities) setActivities(JSON.parse(savedActivities))
    else {
      setActivities(mockActivities)
      localStorage.setItem('friend-activities', JSON.stringify(mockActivities))
    }
  }, [])

  useEffect(() => {
    if (friends.length > 0) {
      localStorage.setItem('friends-data', JSON.stringify(friends))
    }
  }, [friends])

  const filteredFriends = friends.filter(f =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAcceptRequest = (requestId: string) => {
    playSuccess()
    const request = requests.find(r => r.id === requestId)
    if (request) {
      const newFriend: Friend = {
        id: request.id,
        name: request.name,
        avatar: request.avatar,
        level: request.level,
        xp: 0,
        streak: 0,
        isOnline: false,
        lastActive: 'только что',
        progress: 0
      }
      setFriends([...friends, newFriend])
      setRequests(requests.filter(r => r.id !== requestId))
    }
  }

  const handleRejectRequest = (requestId: string) => {
    playClick()
    setRequests(requests.filter(r => r.id !== requestId))
  }

  const handleChallenge = (friendId: string) => {
    playLevelUp()
    // Simulate challenge
  }

  const onlineFriends = friends.filter(f => f.isOnline).length

  const tabs = [
    { id: 'friends' as TabType, label: 'Друзья', icon: Users, count: friends.length },
    { id: 'requests' as TabType, label: 'Запросы', icon: UserPlus, count: requests.length },
    { id: 'activity' as TabType, label: 'Активность', icon: Zap, count: activities.length },
  ]

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl font-bold text-white">Друзья</h2>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            {onlineFriends} онлайн
          </Badge>
        </div>
        <Button
          size="sm"
          onClick={() => setShowAddModal(true)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          <UserPlus className="w-4 h-4 mr-1" />
          Добавить
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-white/5 rounded-xl p-1">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            size="sm"
            variant="ghost"
            onClick={() => { setActiveTab(tab.id); playClick(); }}
            className={`
              flex-1 transition-all
              ${activeTab === tab.id
                ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white'
                : 'text-white/60 hover:text-white hover:bg-white/5'
              }
            `}
          >
            <tab.icon className="w-4 h-4 mr-1" />
            {tab.label}
            {tab.count > 0 && (
              <Badge className="ml-1 bg-white/10 text-white/80 text-xs">
                {tab.count}
              </Badge>
            )}
          </Button>
        ))}
      </div>

      {/* Search (only for friends tab) */}
      {activeTab === 'friends' && (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <Input
            placeholder="Поиск друзей..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40"
          />
        </div>
      )}

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'friends' && (
          <motion.div
            key="friends"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-2">
                {filteredFriends.map((friend, index) => (
                  <motion.div
                    key={friend.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card 
                      className="bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer transition-all"
                      onClick={() => { setSelectedFriend(friend); playClick(); }}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-center gap-3">
                          {/* Avatar with status */}
                          <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center text-2xl">
                              {friend.avatar}
                            </div>
                            {friend.isOnline && (
                              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-green-500 border-2 border-slate-900" />
                            )}
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="font-medium text-white truncate">{friend.name}</p>
                              {friend.level >= 15 && <Crown className="w-4 h-4 text-yellow-400" />}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-white/50">
                              <span>Ур. {friend.level}</span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Flame className="w-3 h-3 text-orange-400" />
                                {friend.streak}
                              </span>
                              {friend.currentSubject && (
                                <>
                                  <span>•</span>
                                  <span className="text-purple-400">{friend.currentSubject}</span>
                                </>
                              )}
                            </div>
                            {/* Progress bar */}
                            <div className="mt-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${friend.progress}%` }}
                              />
                            </div>
                          </div>

                          {/* Status & Actions */}
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-xs text-white/40">{friend.lastActive}</span>
                            <div className="flex gap-1">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={(e) => { e.stopPropagation(); handleChallenge(friend.id); }}
                                className="h-7 w-7 p-0 text-yellow-400 hover:bg-yellow-500/20"
                              >
                                <Swords className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-7 w-7 p-0 text-purple-400 hover:bg-purple-500/20"
                              >
                                <MessageCircle className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {filteredFriends.length === 0 && (
                  <div className="text-center py-8 text-white/50">
                    <Users className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>Друзья не найдены</p>
                  </div>
                )}
              </div>
            </ScrollArea>
          </motion.div>
        )}

        {activeTab === 'requests' && (
          <motion.div
            key="requests"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <ScrollArea className="h-[400px]">
              <div className="space-y-2">
                {requests.map((request, index) => (
                  <motion.div
                    key={request.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-white/5 border-white/10">
                      <CardContent className="p-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center text-2xl">
                            {request.avatar}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-white">{request.name}</p>
                            <div className="flex items-center gap-2 text-xs text-white/50">
                              <span>Ур. {request.level}</span>
                              <span>•</span>
                              <span>{request.mutualFriends} общих друзей</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={() => handleAcceptRequest(request.id)}
                              className="bg-green-500 hover:bg-green-600"
                            >
                              <Check className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleRejectRequest(request.id)}
                              className="text-white/60 hover:text-white"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {requests.length === 0 && (
                  <div className="text-center py-8 text-white/50">
                    <UserPlus className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>Нет запросов</p>
                  </div>
                )}
              </div>
            </ScrollArea>
          </motion.div>
        )}

        {activeTab === 'activity' && (
          <motion.div
            key="activity"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <ScrollArea className="h-[400px]">
              <div className="space-y-2">
                {activities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="bg-white/5 border-white/10">
                      <CardContent className="p-3">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center text-xl shrink-0">
                            {activity.friendAvatar}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="font-medium text-white">{activity.friendName}</p>
                              {activity.type === 'achievement' && <Award className="w-4 h-4 text-yellow-400" />}
                              {activity.type === 'streak' && <Flame className="w-4 h-4 text-orange-400" />}
                              {activity.type === 'challenge' && <Swords className="w-4 h-4 text-purple-400" />}
                              {activity.type === 'subject' && <BookOpen className="w-4 h-4 text-green-400" />}
                            </div>
                            <p className="text-sm text-white/70">{activity.message}</p>
                            <p className="text-xs text-white/40 mt-1">{activity.timestamp}</p>
                          </div>
                          {activity.type === 'challenge' && (
                            <Button
                              size="sm"
                              onClick={() => playLevelUp()}
                              className="bg-gradient-to-r from-purple-500 to-pink-500"
                            >
                              Принять
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Leaderboard with Friends */}
      {activeTab === 'friends' && (
        <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2 text-yellow-400">
              <Trophy className="w-4 h-4" />
              Соревнование недели
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {friends.slice(0, 3).map((friend, index) => (
                <div key={friend.id} className="flex items-center gap-2">
                  <span className="w-6 text-center font-bold text-yellow-400">
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                  </span>
                  <span className="text-xl">{friend.avatar}</span>
                  <span className="flex-1 text-white text-sm">{friend.name}</span>
                  <span className="text-yellow-400 text-sm font-bold">{friend.xp} XP</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Add Friend Modal */}
      <AnimatePresence>
        {showAddModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setShowAddModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-white/10"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white">Добавить друга</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowAddModal(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <Input
                    placeholder="Введите имя или код..."
                    className="pl-10 bg-white/5 border-white/10 text-white"
                  />
                </div>

                <Button
                  onClick={() => { playClick(); setShowQRModal(true); }}
                  variant="outline"
                  className="w-full border-white/20 text-white"
                >
                  <QrCode className="w-4 h-4 mr-2" />
                  Показать мой QR-код
                </Button>

                <div className="text-center text-white/50 text-sm">
                  — или —
                </div>

                <Button
                  onClick={() => { playSuccess(); setShowAddModal(false); }}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Отправить приглашение
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* QR Code Modal */}
      <AnimatePresence>
        {showQRModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setShowQRModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xs bg-white rounded-2xl p-6"
            >
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="grid grid-cols-5 gap-1">
                    {[...Array(25)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-6 h-6 rounded-sm ${Math.random() > 0.5 ? 'bg-slate-800' : 'bg-transparent'}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-slate-800 font-bold">Мой код</p>
                <p className="text-slate-500 text-sm">Покажите другу для добавления</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Friend Profile Modal */}
      <AnimatePresence>
        {selectedFriend && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedFriend(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-white/10"
            >
              <div className="text-center mb-4">
                <div className="relative inline-block">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center text-5xl mx-auto">
                    {selectedFriend.avatar}
                  </div>
                  {selectedFriend.isOnline && (
                    <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-green-500 border-3 border-slate-800" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mt-2">{selectedFriend.name}</h3>
                <p className="text-white/50">Уровень {selectedFriend.level}</p>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-center p-2 bg-white/5 rounded-lg">
                  <Zap className="w-5 h-5 mx-auto mb-1 text-yellow-400" />
                  <p className="text-lg font-bold text-white">{selectedFriend.xp}</p>
                  <p className="text-xs text-white/50">XP</p>
                </div>
                <div className="text-center p-2 bg-white/5 rounded-lg">
                  <Flame className="w-5 h-5 mx-auto mb-1 text-orange-400" />
                  <p className="text-lg font-bold text-white">{selectedFriend.streak}</p>
                  <p className="text-xs text-white/50">Серия</p>
                </div>
                <div className="text-center p-2 bg-white/5 rounded-lg">
                  <Star className="w-5 h-5 mx-auto mb-1 text-purple-400" />
                  <p className="text-lg font-bold text-white">{selectedFriend.progress}%</p>
                  <p className="text-xs text-white/50">Прогресс</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={() => handleChallenge(selectedFriend.id)}
                  className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500"
                >
                  <Swords className="w-4 h-4 mr-1" />
                  Вызов
                </Button>
                <Button variant="outline" className="flex-1 border-white/20 text-white">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Чат
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
