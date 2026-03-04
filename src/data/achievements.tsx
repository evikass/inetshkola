// ==================== ДОСТИЖЕНИЯ ====================

import { Star, Target, BookOpen, GraduationCap, Trophy, Medal, Flame, Zap, Crown, Sparkles, Gamepad2, Puzzle, Brain, Palette, Image as ImageIcon, Rocket, Wand2, Lightbulb, Heart, Award, Swords } from 'lucide-react'
import type { Achievement } from './types'

export const achievementsData: Achievement[] = [
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
    id: 'streak_3', 
    title: '3 дня подряд', 
    description: 'Занимайтесь 3 дня подряд', 
    icon: <Flame className="w-6 h-6" />, 
    unlocked: false, 
    condition: '3_day_streak', 
    points: 100, 
    rarity: 'common' 
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
    id: 'genius', 
    title: 'Гений', 
    description: 'Изучите все темы', 
    icon: <Sparkles className="w-6 h-6" />, 
    unlocked: false, 
    condition: 'complete_all', 
    points: 1000, 
    rarity: 'legendary' 
  },

  // ==================== НОВЫЕ ДОСТИЖЕНИЯ (10 шт.) ====================
  
  // 1. Игрок - common
  { 
    id: 'first_game', 
    title: 'Первый игрок', 
    description: 'Сыграйте в первую игру', 
    icon: <Gamepad2 className="w-6 h-6" />, 
    unlocked: false, 
    condition: 'play_first_game', 
    points: 50, 
    rarity: 'common' 
  },
  
  // 2. Словесный гений - rare
  { 
    id: 'word_master', 
    title: 'Словесный гений', 
    description: 'Соберите 20 слов в игре "Собери слово"', 
    icon: <Puzzle className="w-6 h-6" />, 
    unlocked: false, 
    condition: 'complete_20_words', 
    points: 200, 
    rarity: 'rare' 
  },
  
  // 3. Математик - rare
  { 
    id: 'sequence_master', 
    title: 'Математик', 
    description: 'Разгадайте 15 числовых последовательностей', 
    icon: <Brain className="w-6 h-6" />, 
    unlocked: false, 
    condition: 'solve_15_sequences', 
    points: 250, 
    rarity: 'rare' 
  },
  
  // 4. Внимательный - epic
  { 
    id: 'color_expert', 
    title: 'Внимательный', 
    description: 'Пройдите игру "Цвет и слово" без ошибок', 
    icon: <Palette className="w-6 h-6" />, 
    unlocked: false, 
    condition: 'color_match_perfect', 
    points: 300, 
    rarity: 'epic' 
  },
  
  // 5. Знаток - rare
  { 
    id: 'quiz_champion', 
    title: 'Знаток', 
    description: 'Правильно ответьте на 50 вопросов в викторине', 
    icon: <ImageIcon className="w-6 h-6" />, 
    unlocked: false, 
    condition: 'answer_50_quiz', 
    points: 200, 
    rarity: 'rare' 
  },
  
  // 6. Игровой маньяк - epic
  { 
    id: 'game_addict', 
    title: 'Игровой маньяк', 
    description: 'Сыграйте 50 игр', 
    icon: <Rocket className="w-6 h-6" />, 
    unlocked: false, 
    condition: 'play_50_games', 
    points: 400, 
    rarity: 'epic' 
  },
  
  // 7. Мастер сложности - legendary
  { 
    id: 'difficulty_master', 
    title: 'Мастер сложности', 
    description: 'Пройдите все игры на сложном уровне', 
    icon: <Wand2 className="w-6 h-6" />, 
    unlocked: false, 
    condition: 'complete_all_hard', 
    points: 500, 
    rarity: 'legendary' 
  },
  
  // 8. Быстрый ум - rare
  { 
    id: 'speed_demon', 
    title: 'Быстрый ум', 
    description: 'Отвечайте за 2 секунды в игре "Цвет и слово" 10 раз', 
    icon: <Lightbulb className="w-6 h-6" />, 
    unlocked: false, 
    condition: 'fast_answers_10', 
    points: 250, 
    rarity: 'rare' 
  },
  
  // 9. Серия побед - epic
  { 
    id: 'winning_streak', 
    title: 'Серия побед', 
    description: 'Выиграйте 10 игр подряд без ошибок', 
    icon: <Heart className="w-6 h-6" />, 
    unlocked: false, 
    condition: '10_wins_streak', 
    points: 350, 
    rarity: 'epic' 
  },
  
  // 10. Чемпион игр - legendary
  { 
    id: 'game_champion', 
    title: 'Чемпион игр', 
    description: 'Соберите 1000 звёзд во всех играх', 
    icon: <Award className="w-6 h-6" />, 
    unlocked: false, 
    condition: 'collect_1000_stars', 
    points: 1000, 
    rarity: 'legendary' 
  }
]
