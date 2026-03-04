// Компоненты для школьного приложения ИНЕТШКОЛА

export { default as Flashcards } from './Flashcards'
export { default as StudyTimer } from './StudyTimer'
export { default as Notes } from './Notes'
export { default as FormulaReference } from './FormulaReference'
export { default as Schedule } from './Schedule'
export { default as ParentDashboard } from './ParentDashboard'
export { default as AITeacher } from './AITeacher'
export { default as QuizDialog } from './QuizDialog'
export { default as TopicDialog } from './TopicDialog'
export { default as Sidebar } from './Sidebar'
export { default as FloatingNav } from './FloatingNav'
export { default as GradeSelector } from './GradeSelector'
export { default as SubjectGrid } from './SubjectGrid'
export { default as SectionList } from './SectionList'
export { default as ToolsTabs } from './ToolsTabs'
export { default as ProgressTab } from './ProgressTab'
export { default as AchievementsTab } from './AchievementsTab'
export { default as KidFriendlyLessonViewer } from './KidFriendlyLessonViewer'
export { default as KidFriendlyQuiz } from './KidFriendlyQuiz'
export { CountingGame, AlphabetGame, MemoryGame, ShapeGame, MiniGameSelector } from './KidMiniGames'
export { default as KidDailyRewards } from './KidDailyRewards'
export { default as KidProgressBar, KidSubjectProgress, KidOverallProgress } from './KidProgressBar'
export { default as KidLessonViewer } from './KidLessonViewer'
export { default as KidTopicCard } from './KidTopicCard'
export { MultiplicationGame } from './MultiplicationGame'

// Новые детские компоненты
export { 
  default as KidButton,
  KidButtonPink,
  KidButtonBlue,
  KidButtonYellow,
  KidButtonGreen,
  KidButtonRainbow,
  KidButtonGroup,
  KidMenu
} from './KidButton'
export { default as MathGame } from './MathGame'
export { default as ReadingGame } from './ReadingGame'
export { default as GamesTab } from './GamesTab'
export { default as WelcomeScreen } from './WelcomeScreen'
export { default as RewardCelebration } from './RewardCelebration'

// Новые игры
export { 
  default as NewGames,
  WordBuilder, 
  NumberSequence, 
  ColorMatch, 
  PictureQuiz,
  NewGamesSelector
} from './NewGames'

// Интерактивные карточки
export { default as AnimalCards } from './AnimalCards'

// UI компоненты
export { 
  default as AnimatedCard, 
  AnimatedCardGrid, 
  MagneticCard, 
  FlipCard, 
  PulseCard 
} from './AnimatedCard'
export { default as WelcomeBanner } from './WelcomeBanner'
export { 
  default as StatsCard, 
  StatsGrid,
  StatsCardXP,
  StatsCardStreak,
  StatsCardTopics,
  StatsCardLevel,
  StatsCardQuizzes,
  StatsCardTime,
  StatsCardRank
} from './StatsCard'
export { 
  default as ProgressBar, 
  CircularProgress, 
  SemiCircularProgress, 
  MultiProgress, 
  StepProgress 
} from './ProgressBar'

// Educational games
export { default as MultiplicationTableGame } from './MultiplicationTableGame'
export { default as AdditionSubtractionGame } from './AdditionSubtractionGame'

// Theory component
export { default as TheorySection } from './TheorySection'
export type { TheoryContent, TheorySection as TheorySectionType, TheoryExample, CodeExample, VisualElement } from './TheorySection'

// Hooks
export { useSound } from '@/hooks/useSound'

// Leaderboard and Rewards
export { default as Leaderboard } from './Leaderboard'
export { default as DailyRewardsCalendar } from './DailyRewardsCalendar'

// Drag and Drop Exercises
export { default as DragDropExercise } from './DragDropExercise'
export type { 
  DragDropExerciseData, 
  DragItem, 
  DropZone, 
  ExerciseType 
} from './DragDropExercise'
export { sampleExercises } from './DragDropExercise'

// Badge Collection
export { default as BadgeCollection, unlockBadgeById, useBadgeManager } from './BadgeCollection'

// Weekly Progress Chart
export { default as WeeklyProgressChart } from './WeeklyProgressChart'
export type { DayData, WeeklyProgressChartProps } from './WeeklyProgressChart'

// Interactive Video Lesson
export { default as InteractiveLesson } from './InteractiveLesson'
export type { LessonSlide, InteractiveLessonProps } from './InteractiveLesson'

// AI Voice Teacher
export { default as AIVoiceTeacher } from './AIVoiceTeacher'
export type { AIVoiceTeacherProps, Message } from './AIVoiceTeacher'

// Geography Quiz
export { default as GeographyQuiz } from './GeographyQuiz'

// Science Experiments
export { default as ScienceExperiments } from './ScienceExperiments'

// Friends System
export { default as FriendsSystem } from './FriendsSystem'

// Math Problem Generator
export { default as MathProblemGenerator } from './MathProblemGenerator'

// Study History Calendar
export { default as StudyHistoryCalendar } from './StudyHistoryCalendar'

// Quiz Builder
export { default as QuizBuilder } from './QuizBuilder'

// Marathons and Competitions
export { default as MarathonsCompetitions } from './MarathonsCompetitions'

// Site Header
export { default as SiteHeader } from './SiteHeader'

// Spelling Game
export { default as SpellingGame } from './SpellingGame'

// Punctuation Game
export { default as PunctuationGame } from './PunctuationGame'

// History Game
export { default as HistoryGame } from './HistoryGame'

// Chemistry Game
export { default as ChemistryGame } from './ChemistryGame'

// English Game
export { default as EnglishGame } from './EnglishGame'

// Biology Game
export { default as BiologyGame } from './BiologyGame'

// Daily Challenge Widget
export { default as DailyChallengeWidget } from './DailyChallengeWidget'

// Weekly Goals Widget
export { default as WeeklyGoalsWidget } from './WeeklyGoalsWidget'
