'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { 
  Shield, TrendingUp, Clock, Award, BookOpen, Target, Calendar,
  BarChart3, PieChart, Activity, Star, CheckCircle, XCircle,
  AlertTriangle, Bell, Settings, Eye, Lock, User, ChevronRight,
  Flame, Medal, Trophy, Brain, Heart
} from 'lucide-react'

interface ChildProgress {
  name: string
  grade: number
  avatar: string
  level: number
  experience: number
  totalPoints: number
  topicsCompleted: number
  quizzesCompleted: number
  streak: number
  totalStudyTime: number
  weeklyGoal: number
  weeklyProgress: number
  lastActive: string
  rank: string
  subjects: SubjectProgress[]
  recentActivity: ActivityItem[]
  achievements: string[]
  weakAreas: string[]
}

interface SubjectProgress {
  subject: string
  progress: number
  grade: number
  timeSpent: number
  quizzesTaken: number
  averageScore: number
}

interface ActivityItem {
  id: string
  type: 'topic' | 'quiz' | 'achievement' | 'streak'
  title: string
  timestamp: string
  points?: number
  subject?: string
}

interface ParentSettings {
  dailyLimit: number
  weeklyGoal: number
  notifications: boolean
  restrictContent: boolean
  pinCode: string
}

const DEFAULT_CHILD: ChildProgress = {
  name: 'Ученик',
  grade: 1,
  avatar: '👨‍🎓',
  level: 1,
  experience: 0,
  totalPoints: 0,
  topicsCompleted: 0,
  quizzesCompleted: 0,
  streak: 0,
  totalStudyTime: 0,
  weeklyGoal: 100,
  weeklyProgress: 0,
  lastActive: new Date().toISOString(),
  rank: 'Новичок',
  subjects: [
    { subject: 'Математика', progress: 0, grade: 0, timeSpent: 0, quizzesTaken: 0, averageScore: 0 },
    { subject: 'Русский язык', progress: 0, grade: 0, timeSpent: 0, quizzesTaken: 0, averageScore: 0 },
    { subject: 'Окружающий мир', progress: 0, grade: 0, timeSpent: 0, quizzesTaken: 0, averageScore: 0 },
  ],
  recentActivity: [],
  achievements: [],
  weakAreas: []
}

// Функции инициализации состояния
const initializeChildProgress = (): ChildProgress => {
  if (typeof window === 'undefined') return DEFAULT_CHILD
  
  const saved = localStorage.getItem('school-user-stats')
  if (!saved) return DEFAULT_CHILD
  
  try {
    const parsed = JSON.parse(saved)
    return {
      ...DEFAULT_CHILD,
      ...parsed,
      subjects: DEFAULT_CHILD.subjects.map(s => ({
        ...s,
        ...(parsed.subjects?.find((ps: SubjectProgress) => ps.subject === s.subject) || {})
      }))
    }
  } catch {
    return DEFAULT_CHILD
  }
}

const initializeSettings = (): ParentSettings => {
  if (typeof window === 'undefined') {
    return {
      dailyLimit: 120,
      weeklyGoal: 100,
      notifications: true,
      restrictContent: false,
      pinCode: ''
    }
  }
  
  const saved = localStorage.getItem('school-parent-settings')
  if (!saved) {
    return {
      dailyLimit: 120,
      weeklyGoal: 100,
      notifications: true,
      restrictContent: false,
      pinCode: ''
    }
  }
  
  try {
    return JSON.parse(saved)
  } catch {
    return {
      dailyLimit: 120,
      weeklyGoal: 100,
      notifications: true,
      restrictContent: false,
      pinCode: ''
    }
  }
}

export default function ParentDashboard() {
  const [childProgress, setChildProgress] = useState<ChildProgress>(initializeChildProgress)
  const [settings, setSettings] = useState<ParentSettings>(initializeSettings)
  const [isPinDialogOpen, setIsPinDialogOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [pinInput, setPinInput] = useState('')

  // Сохранение настроек
  useEffect(() => {
    localStorage.setItem('school-parent-settings', JSON.stringify(settings))
  }, [settings])

  // Расчёт времени в формате
  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes} мин`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return mins > 0 ? `${hours} ч ${mins} мин` : `${hours} ч`
  }

  // Расчёт среднего балла
  const calculateAverageGrade = () => {
    const subjects = childProgress.subjects.filter(s => s.grade > 0)
    if (subjects.length === 0) return 0
    return subjects.reduce((sum, s) => sum + s.grade, 0) / subjects.length
  }

  // Оценка успеваемости
  const getPerformanceLevel = () => {
    const avg = calculateAverageGrade()
    if (avg >= 4.5) return { label: 'Отлично', color: 'text-green-400', icon: Trophy }
    if (avg >= 3.5) return { label: 'Хорошо', color: 'text-blue-400', icon: Medal }
    if (avg >= 2.5) return { label: 'Удовлетворительно', color: 'text-yellow-400', icon: Star }
    return { label: 'Требует внимания', color: 'text-red-400', icon: AlertTriangle }
  }

  // Генерация рекомендаций
  const getRecommendations = () => {
    const recommendations: { icon: React.ReactNode; text: string; priority: 'high' | 'medium' | 'low' }[] = []
    
    if (childProgress.streak === 0) {
      recommendations.push({
        icon: <Flame className="w-5 h-5 text-orange-400" />,
        text: 'Начните серию занятий сегодня! Это поможет поддерживать мотивацию.',
        priority: 'high'
      })
    }
    
    if (childProgress.weeklyProgress < childProgress.weeklyGoal * 0.5) {
      recommendations.push({
        icon: <Target className="w-5 h-5 text-red-400" />,
        text: 'Недельная цель выполнена менее чем наполовину. Рекомендуется увеличить активность.',
        priority: 'high'
      })
    }
    
    if (childProgress.weakAreas.length > 0) {
      recommendations.push({
        icon: <BookOpen className="w-5 h-5 text-yellow-400" />,
        text: `Обратите внимание на: ${childProgress.weakAreas.join(', ')}`,
        priority: 'medium'
      })
    }
    
    if (childProgress.totalStudyTime > settings.dailyLimit * 0.8) {
      recommendations.push({
        icon: <Clock className="w-5 h-5 text-blue-400" />,
        text: 'Приближается к дневному лимиту времени. Рекомендуется сделать перерыв.',
        priority: 'low'
      })
    }
    
    return recommendations.length > 0 ? recommendations : [
      {
        icon: <CheckCircle className="w-5 h-5 text-green-400" />,
        text: 'Отличная работа! Продолжайте в том же духе.',
        priority: 'low'
      }
    ]
  }

  const performance = getPerformanceLevel()
  const recommendations = getRecommendations()
  const PerformanceIcon = performance.icon

  return (
    <div className="space-y-4">
      {/* Заголовок */}
      <Card className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border-purple-500/30">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/30 rounded-lg">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Родительская панель</h2>
                <p className="text-sm text-gray-400">Мониторинг прогресса и настройки</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-1" />
              Настройки
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Обзор</TabsTrigger>
          <TabsTrigger value="subjects">Предметы</TabsTrigger>
          <TabsTrigger value="activity">Активность</TabsTrigger>
          <TabsTrigger value="settings">Настройки</TabsTrigger>
        </TabsList>

        {/* Обзор */}
        <TabsContent value="overview" className="space-y-4">
          {/* Профиль ребёнка */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="text-5xl">{childProgress.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">{childProgress.name}</h3>
                    <Badge variant="outline">{childProgress.grade} класс</Badge>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm text-gray-400">
                      <Star className="w-4 h-4 inline mr-1 text-yellow-400" />
                      Уровень {childProgress.level}
                    </span>
                    <span className="text-sm text-gray-400">
                      <Trophy className="w-4 h-4 inline mr-1 text-amber-400" />
                      {childProgress.rank}
                    </span>
                    <span className="text-sm text-gray-400">
                      <Flame className="w-4 h-4 inline mr-1 text-orange-400" />
                      {childProgress.streak} дней подряд
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${performance.color}`}>
                    <PerformanceIcon className="w-6 h-6 inline mr-1" />
                    {performance.label}
                  </div>
                  <p className="text-sm text-gray-400">Средний балл: {calculateAverageGrade().toFixed(1)}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Card>
              <CardContent className="p-3 text-center">
                <Clock className="w-6 h-6 mx-auto mb-1 text-blue-400" />
                <p className="text-2xl font-bold">{formatTime(childProgress.totalStudyTime)}</p>
                <p className="text-xs text-gray-400">Время обучения</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-3 text-center">
                <BookOpen className="w-6 h-6 mx-auto mb-1 text-green-400" />
                <p className="text-2xl font-bold">{childProgress.topicsCompleted}</p>
                <p className="text-xs text-gray-400">Тем изучено</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-3 text-center">
                <CheckCircle className="w-6 h-6 mx-auto mb-1 text-purple-400" />
                <p className="text-2xl font-bold">{childProgress.quizzesCompleted}</p>
                <p className="text-xs text-gray-400">Тестов пройдено</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-3 text-center">
                <Target className="w-6 h-6 mx-auto mb-1 text-amber-400" />
                <p className="text-2xl font-bold">{childProgress.totalPoints}</p>
                <p className="text-xs text-gray-400">Очков заработано</p>
              </CardContent>
            </Card>
          </div>

          {/* Недельная цель */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Target className="w-4 h-4" />
                Недельная цель
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Progress 
                  value={(childProgress.weeklyProgress / childProgress.weeklyGoal) * 100} 
                  className="flex-1"
                />
                <span className="text-sm font-medium">
                  {childProgress.weeklyProgress} / {childProgress.weeklyGoal}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                {childProgress.weeklyProgress >= childProgress.weeklyGoal 
                  ? '✅ Цель выполнена!' 
                  : `Осталось: ${childProgress.weeklyGoal - childProgress.weeklyProgress} очков`
                }
              </p>
            </CardContent>
          </Card>

          {/* Рекомендации */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Рекомендации
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {recommendations.map((rec, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 p-2 rounded-lg ${
                      rec.priority === 'high' ? 'bg-red-500/10 border border-red-500/30' :
                      rec.priority === 'medium' ? 'bg-yellow-500/10 border border-yellow-500/30' :
                      'bg-green-500/10 border border-green-500/30'
                    }`}
                  >
                    {rec.icon}
                    <span className="text-sm">{rec.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Предметы */}
        <TabsContent value="subjects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Прогресс по предметам</CardTitle>
              <CardDescription>Детальная статистика по каждому предмету</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-4">
                  {childProgress.subjects.map((subject, index) => (
                    <div key={index} className="p-3 rounded-lg border border-gray-700 bg-gray-800/50">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{subject.subject}</h4>
                        {subject.grade > 0 && (
                          <Badge className={
                            subject.grade >= 4 ? 'bg-green-500' :
                            subject.grade >= 3 ? 'bg-yellow-500' : 'bg-red-500'
                          }>
                            Оценка: {subject.grade.toFixed(1)}
                          </Badge>
                        )}
                      </div>
                      <Progress value={subject.progress} className="mb-2" />
                      <div className="grid grid-cols-3 gap-2 text-xs text-gray-400">
                        <span>📖 {subject.progress}% пройдено</span>
                        <span>⏱️ {formatTime(subject.timeSpent)}</span>
                        <span>📝 {subject.quizzesTaken} тестов</span>
                      </div>
                      {subject.averageScore > 0 && (
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-xs text-gray-400">Средний результат:</span>
                          <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${
                                subject.averageScore >= 80 ? 'bg-green-500' :
                                subject.averageScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${subject.averageScore}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium">{subject.averageScore}%</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Активность */}
        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Последняя активность</CardTitle>
              <CardDescription>История занятий и достижений</CardDescription>
            </CardHeader>
            <CardContent>
              {childProgress.recentActivity.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Activity className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>Нет данных об активности</p>
                  <p className="text-sm">Начните заниматься, чтобы увидеть прогресс</p>
                </div>
              ) : (
                <ScrollArea className="h-[400px]">
                  <div className="space-y-2">
                    {childProgress.recentActivity.map((activity) => (
                      <div 
                        key={activity.id}
                        className="flex items-center gap-3 p-3 rounded-lg border border-gray-700 bg-gray-800/50"
                      >
                        <div className={`p-2 rounded-full ${
                          activity.type === 'topic' ? 'bg-blue-500/20' :
                          activity.type === 'quiz' ? 'bg-green-500/20' :
                          activity.type === 'achievement' ? 'bg-amber-500/20' :
                          'bg-orange-500/20'
                        }`}>
                          {activity.type === 'topic' && <BookOpen className="w-4 h-4 text-blue-400" />}
                          {activity.type === 'quiz' && <CheckCircle className="w-4 h-4 text-green-400" />}
                          {activity.type === 'achievement' && <Trophy className="w-4 h-4 text-amber-400" />}
                          {activity.type === 'streak' && <Flame className="w-4 h-4 text-orange-400" />}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.title}</p>
                          {activity.subject && (
                            <p className="text-xs text-gray-400">{activity.subject}</p>
                          )}
                        </div>
                        <div className="text-right">
                          {activity.points && (
                            <Badge variant="secondary">+{activity.points} очков</Badge>
                          )}
                          <p className="text-xs text-gray-400 mt-1">
                            {new Date(activity.timestamp).toLocaleDateString('ru-RU')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </CardContent>
          </Card>

          {/* Достижения */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Award className="w-4 h-4" />
                Достижения ({childProgress.achievements.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {childProgress.achievements.length === 0 ? (
                <p className="text-sm text-gray-400">Пока нет достижений</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {childProgress.achievements.map((achievement, index) => (
                    <Badge key={index} variant="secondary">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Настройки */}
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Родительский контроль</CardTitle>
              <CardDescription>Настройки ограничений и уведомлений</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Дневной лимит */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="font-medium">Дневной лимит времени</p>
                    <p className="text-sm text-gray-400">Максимальное время занятий в день</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSettings(prev => ({ 
                      ...prev, 
                      dailyLimit: Math.max(30, prev.dailyLimit - 30) 
                    }))}
                  >
                    -
                  </Button>
                  <span className="w-16 text-center font-mono">{formatTime(settings.dailyLimit)}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSettings(prev => ({ 
                      ...prev, 
                      dailyLimit: Math.min(300, prev.dailyLimit + 30) 
                    }))}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Недельная цель */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="font-medium">Недельная цель (очки)</p>
                    <p className="text-sm text-gray-400">Целевое количество очков в неделю</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSettings(prev => ({ 
                      ...prev, 
                      weeklyGoal: Math.max(50, prev.weeklyGoal - 25) 
                    }))}
                  >
                    -
                  </Button>
                  <span className="w-16 text-center font-mono">{settings.weeklyGoal}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSettings(prev => ({ 
                      ...prev, 
                      weeklyGoal: Math.min(500, prev.weeklyGoal + 25) 
                    }))}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Уведомления */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="font-medium">Уведомления</p>
                    <p className="text-sm text-gray-400">Получать отчёты о прогрессе</p>
                  </div>
                </div>
                <Button
                  variant={settings.notifications ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSettings(prev => ({ 
                    ...prev, 
                    notifications: !prev.notifications 
                  }))}
                >
                  {settings.notifications ? 'Включены' : 'Выключены'}
                </Button>
              </div>

              {/* Ограничение контента */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-red-400" />
                  <div>
                    <p className="font-medium">Безопасный режим</p>
                    <p className="text-sm text-gray-400">Ограничить доступ к некоторым функциям</p>
                  </div>
                </div>
                <Button
                  variant={settings.restrictContent ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSettings(prev => ({ 
                    ...prev, 
                    restrictContent: !prev.restrictContent 
                  }))}
                >
                  {settings.restrictContent ? 'Включён' : 'Выключен'}
                </Button>
              </div>

              <Separator />

              {/* PIN-код */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-amber-400" />
                  <div>
                    <p className="font-medium">PIN-код</p>
                    <p className="text-sm text-gray-400">Защита настроек паролем</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  {settings.pinCode ? 'Изменить' : 'Установить'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Экспорт отчёта */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-indigo-400" />
                  <div>
                    <p className="font-medium">Экспорт отчёта</p>
                    <p className="text-sm text-gray-400">Скачать подробный отчёт о прогрессе</p>
                  </div>
                </div>
                <Button variant="outline">
                  Скачать PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
