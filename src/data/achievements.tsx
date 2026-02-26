// ==================== ДОСТИЖЕНИЯ ====================

import { Star, Target, BookOpen, GraduationCap, Trophy, Medal, Flame, Zap, Crown, Sparkles, Brain, Heart, Rocket } from 'lucide-react'
import type { Achievement } from './types'

export const achievementsData: Achievement[] = [
  // === ОБЫЧНЫЕ ===
  { 
    id: 'first_step', 
    title: 'Первый шаг', 
    description: 'Изучите первую тему', 
    icon: <Star className="w-6 h-6" />, 
    unlocked: false, 
    condition: 'complete_1_topic', 
    points: 50, 
    rarity: 'common' 
  },
  { 
    id: 'explorer', 
    title: 'Исследователь', 
    description: 'Изучите 10 тем', 
    icon: <Target className="w-6 h-6" />, 
    unlocked: false, 
    condition: 'complete_10_topics', 
    points: 100, 
    rarity: 'common' 
  },
  { 
    id: 'quiz_master', 
    title: 'Мастер тестов', 
    description: 'Пройдите 5 квизов', 
    icon: <Trophy className="w-6 h-6" />, 
    unlocked: false, 
    condition: 'complete_5_quizzes', 
    points: 150, 
    rarity: 'common' 
  },
  { 
    id: 'streak_3', 
    title: '3 дня подряд', 
    description: 'Занимайтесь 3 дня подряд', 
    icon: <Flame className="w-6 h-6" />, 
    unlocked: false, 
    condition: '3_day_streak', 
    points: 100, 
    rarity: 'common' 
  },
  
  // === РЕДКИЕ ===
  { 
    id: 'scholar', 
    title: 'Учёный', 
    description: 'Изучите 50 тем', 
    icon: <BookOpen className="w-6 h-6" />, 
    unlocked: false, 
    condition: 'complete_50_topics', 
    points: 300, 
    rarity: 'rare' 
  },
  { 
    id: 'expert', 
    title: 'Эксперт', 
    description: 'Изучите 100 тем', 
    icon: <GraduationCap className="w-6 h-6" />, 
    unlocked: false, 
    condition: 'complete_100_topics', 
    points: 500, 
    rarity: 'rare' 
  },
  { 
    id: 'perfect_score', 
    title: 'Идеальный результат', 
    description: 'Получите 100% в квизе', 
    icon: <Medal className="w-6 h-6" />, 
    unlocked: false, 
    condition: 'perfect_quiz', 
    points: 200, 
    rarity: 'rare' 
  },
  { 
    id: 'streak_7', 
    title: 'Неделя знаний', 
    description: 'Занимайтесь 7 дней подряд', 
    icon: <Zap className="w-6 h-6" />, 
    unlocked: false, 
    condition: '7_day_streak', 
    points: 300, 
    rarity: 'rare' 
  },
  { 
    id: 'brain_power', 
    title: 'Мозговая сила', 
    description: 'Наберите 1000 очков', 
    icon: <Brain className="w-6 h-6" />, 
    unlocked: false, 
    condition: '1000_points', 
    points: 250, 
    rarity: 'rare' 
  },
  
  // === ЭПИЧЕСКИЕ ===
  { 
    id: 'all_classes', 
    title: 'Все классы', 
    description: 'Откройте все классы', 
    icon: <Crown className="w-6 h-6" />, 
    unlocked: false, 
    condition: 'visit_all_classes', 
    points: 250, 
    rarity: 'epic' 
  },
  { 
    id: 'streak_30', 
    title: 'Месяц упорства', 
    description: 'Занимайтесь 30 дней подряд', 
    icon: <Heart className="w-6 h-6" />, 
    unlocked: false, 
    condition: '30_day_streak', 
    points: 500, 
    rarity: 'epic' 
  },
  { 
    id: 'all_subjects', 
    title: 'Энциклопедист', 
    description: 'Изучите темы по всем предметам класса', 
    icon: <Rocket className="w-6 h-6" />, 
    unlocked: false, 
    condition: 'all_subjects_in_grade', 
    points: 400, 
    rarity: 'epic' 
  },
  
  // === ЛЕГЕНДАРНЫЕ ===
  { 
    id: 'genius', 
    title: 'Гений', 
    description: 'Изучите все темы', 
    icon: <Sparkles className="w-6 h-6" />, 
    unlocked: false, 
    condition: 'complete_all', 
    points: 1000, 
    rarity: 'legendary' 
  },
  { 
    id: 'streak_100', 
    title: 'Легенда упорства', 
    description: 'Занимайтесь 100 дней подряд', 
    icon: <Crown className="w-6 h-6" />, 
    unlocked: false, 
    condition: '100_day_streak', 
    points: 1000, 
    rarity: 'legendary' 
  }
]
