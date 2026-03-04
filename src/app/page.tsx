'use client'

import { useState, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { Skeleton } from '@/components/ui/skeleton'
import { SchoolProvider, useSchool } from '@/context/SchoolContext'
import { 
  GradeSelector, SubjectGrid, SectionList, TopicDialog, 
  QuizDialog, ToolsTabs, ProgressTab, AchievementsTab,
  FloatingNav, WelcomeScreen, RewardCelebration, AIVoiceTeacher,
  FriendsSystem, MarathonsCompetitions, SiteHeader,
  DailyChallengeWidget, WeeklyGoalsWidget, FloatingDonationButton,
  DailyQuestsWidget, MotivationalQuotes, ExamPrep, SoundControl
} from '@/components/school'
import { schoolData } from '@/data/school-data'
import type { Subject, Topic, QuizQuestion } from '@/data/types'

// Динамический импорт для GamesTab (тяжёлый компонент)
const GamesTab = lazy(() => import('@/components/school/GamesTab'))

// Скелетон для GamesTab
function GamesTabSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-12 w-64 mx-auto bg-white/10" />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-24 bg-white/10" />
            <Skeleton className="h-4 w-3/4 bg-white/10" />
            <Skeleton className="h-3 w-1/2 bg-white/10" />
          </div>
        ))}
      </div>
    </div>
  )
}

function SchoolApp() {
  const { 
    completedTopics, completeTopic, completeQuiz, addExperience,
    isFirstVisit, setFirstVisit, celebrationData, hideCelebration,
    userStats
  } = useSchool()
  
  const [activeTab, setActiveTab] = useState('learn')
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null)
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null)
  const [topicDialogOpen, setTopicDialogOpen] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)
  const [quizDialogOpen, setQuizDialogOpen] = useState(false)
  const [quizSubject, setQuizSubject] = useState<Subject | null>(null)
  const [topicQuizData, setTopicQuizData] = useState<{ questions: QuizQuestion[], title: string } | null>(null)

  const currentGradeData = selectedGrade !== null 
    ? schoolData.find(g => g.id === selectedGrade) 
    : null

  const handleOpenTopic = (topic: Topic) => {
    setSelectedTopic(topic)
    setTopicDialogOpen(true)
  }

  const handleCompleteTopic = () => {
    if (selectedTopic) {
      completeTopic(selectedTopic.id)
    }
  }

  const handleStartQuiz = (subject: Subject) => {
    setQuizSubject(subject)
    setTopicQuizData(null) // Сбрасываем тест темы
    setQuizDialogOpen(true)
  }

  // Обработчик для запуска теста по теме
  const handleStartTopicQuiz = (quiz: QuizQuestion[], title: string) => {
    setQuizSubject(null) // Сбрасываем предмет
    setTopicQuizData({ questions: quiz, title })
    setQuizDialogOpen(true)
  }

  const handleCompleteQuiz = (correct: number, total: number) => {
    if (quizSubject) {
      completeQuiz(quizSubject.id, correct, total)
    }
    // Для теста по теме тоже начисляем XP
    if (topicQuizData) {
      addExperience(correct * 10)
    }
  }

  const handleWelcomeClose = () => {
    setFirstVisit(false)
  }

  const handleSelectGrade = (gradeId: number) => {
    setSelectedGrade(gradeId)
    setSelectedSubject(null) // Сбрасываем выбранный предмет при смене класса
  }

  const handleBackToGrades = () => {
    setSelectedGrade(null)
    setSelectedSubject(null)
  }

  const handleSelectSubject = (subject: Subject) => {
    setSelectedSubject(subject)
  }

  const handleBackToSubjects = () => {
    setSelectedSubject(null)
  }

  const gradeName = currentGradeData?.name || '1 класс'

  // Определяем, какие вопросы показывать
  const quizQuestions = topicQuizData?.questions || quizSubject?.quiz || []
  const quizTitle = topicQuizData?.title || quizSubject?.title || ''

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Декоративный фон */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Приветственный экран для новых пользователей */}
      <WelcomeScreen 
        isOpen={isFirstVisit}
        onClose={handleWelcomeClose}
        gradeName={gradeName}
      />
      
      {/* Экран празднования награды */}
      <RewardCelebration
        isOpen={celebrationData?.isOpen || false}
        onClose={hideCelebration}
        title={celebrationData?.title || ''}
        message={celebrationData?.message || ''}
        stars={celebrationData?.stars || 0}
        xp={celebrationData?.xp}
        achievement={celebrationData?.achievement}
      />
      
      {/* Плавающая навигация */}
      <FloatingNav 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedGrade={selectedGrade || 0}
      />
      
      {/* Основной контент */}
      <div className="container mx-auto p-2 sm:p-4 pl-16 sm:pl-20 md:pl-24 relative">
        {/* Заголовок сайта */}
        {selectedGrade === null && (
          <SiteHeader />
        )}
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Learn Tab */}
          <TabsContent value="learn" className="space-y-4">
            {/* Компактные виджеты - только на главном экране */}
            {selectedGrade === null && (
              <div className="space-y-3">
                {/* Заголовок с настройками звука */}
                <div className="flex items-center justify-end">
                  <SoundControl compact />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-3">
                  <DailyChallengeWidget
                    completedTopics={userStats.topicsCompleted}
                    quizzesCompleted={userStats.quizzesCompleted}
                    gamesPlayed={userStats.gamesPlayed || 0}
                    studyTime={userStats.totalStudyTime}
                    perfectQuizzes={userStats.perfectQuizzes}
                    onNavigate={() => {}}
                    onClaim={(xp) => addExperience(xp)}
                  />
                  <WeeklyGoalsWidget
                    completedTopics={userStats.topicsCompleted}
                    quizzesCompleted={userStats.quizzesCompleted}
                    gamesPlayed={userStats.gamesPlayed || 0}
                    studyTime={userStats.totalStudyTime}
                    perfectQuizzes={userStats.perfectQuizzes}
                    streak={userStats.streak}
                    onClaim={(xp) => addExperience(xp)}
                  />
                </div>
                
                {/* Ежедневные квесты и мотивация */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <DailyQuestsWidget
                    completedTopics={userStats.topicsCompleted}
                    quizzesCompleted={userStats.quizzesCompleted}
                    gamesPlayed={userStats.gamesPlayed || 0}
                    studyTime={userStats.totalStudyTime}
                    perfectQuizzes={userStats.perfectQuizzes}
                    streak={userStats.streak}
                    onClaim={(xp) => addExperience(xp)}
                  />
                  <MotivationalQuotes compact />
                </div>
                
                {/* Подготовка к ОГЭ/ЕГЭ для старших классов */}
                {(selectedGrade === null || selectedGrade >= 9) && (
                  <ExamPrep 
                    gradeId={selectedGrade || 9}
                    onScore={(xp) => addExperience(xp)}
                  />
                )}
              </div>
            )}
            
            <GradeSelector
              grades={schoolData}
              selectedGrade={selectedGrade}
              onSelectGrade={handleSelectGrade}
              onBack={handleBackToGrades}
              showBackButton={selectedGrade !== null}
            />
            
            {/* Показываем предметы когда выбран класс, но не выбран предмет */}
            {selectedGrade !== null && currentGradeData && !selectedSubject && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SubjectGrid
                  subjects={currentGradeData.subjects}
                  completedTopics={completedTopics}
                  onSelectSubject={handleSelectSubject}
                  onStartQuiz={handleStartQuiz}
                  gradeId={selectedGrade}
                />
              </motion.div>
            )}

            {/* Показываем темы когда выбран предмет */}
            {selectedGrade !== null && selectedSubject && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SectionList
                  subject={selectedSubject}
                  completedTopics={completedTopics}
                  onOpenTopic={handleOpenTopic}
                  onBack={handleBackToSubjects}
                  onStartQuiz={handleStartQuiz}
                  onStartTopicQuiz={handleStartTopicQuiz}
                  gradeId={selectedGrade}
                />
              </motion.div>
            )}
          </TabsContent>
          
          {/* Games Tab */}
          <TabsContent value="games" className="space-y-6">
            <Suspense fallback={<GamesTabSkeleton />}>
              <GamesTab 
                gradeId={selectedGrade || 0}
                onExperience={addExperience}
              />
            </Suspense>
          </TabsContent>
          
          {/* Friends Tab */}
          <TabsContent value="friends" className="space-y-6">
            <FriendsSystem />
            <MarathonsCompetitions />
          </TabsContent>
          
          {/* Progress Tab */}
          <TabsContent value="progress">
            <ProgressTab gradeId={selectedGrade || 0} />
          </TabsContent>
          
          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <AchievementsTab />
          </TabsContent>
          
          {/* Tools Tab */}
          <TabsContent value="tools" className="space-y-6">
            <ToolsTabs onExperience={addExperience} gradeId={selectedGrade || 0} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Topic Dialog */}
      <TopicDialog
        open={topicDialogOpen}
        onOpenChange={setTopicDialogOpen}
        topic={selectedTopic}
        subject={selectedSubject}
        onComplete={handleCompleteTopic}
        onOpenQuiz={() => {
          if (selectedSubject) {
            setTopicDialogOpen(false)
            handleStartQuiz(selectedSubject)
          }
        }}
        gradeId={selectedGrade || 0}
      />

      {/* Quiz Dialog - поддерживает тесты по предмету и по теме */}
      <QuizDialog
        open={quizDialogOpen}
        onOpenChange={setQuizDialogOpen}
        questions={quizQuestions}
        subjectName={quizTitle}
        onComplete={handleCompleteQuiz}
        gradeId={selectedGrade || 0}
      />
      
      {/* Отступ для мобильной навигации */}
      <div className="h-24 sm:h-20 md:hidden" />
      
      {/* AI Voice Teacher - показываем только для классов 1+ */}
      {selectedGrade !== null && selectedGrade >= 1 && (
        <AIVoiceTeacher 
          subject={selectedSubject?.title}
          topic={selectedTopic?.title}
        />
      )}
      
      {/* Плавающая кнопка поддержки проекта */}
      <FloatingDonationButton />
      
      {/* Версия сайта */}
      <div className="fixed bottom-0 right-0 z-40 p-2 text-[10px] text-gray-600 bg-black/30 rounded-tl">
        v20260304.2
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <SchoolProvider>
      <SchoolApp />
    </SchoolProvider>
  )
}
