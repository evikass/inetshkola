'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { SchoolProvider, useSchool } from '@/context/SchoolContext'
import { 
  GradeSelector, SubjectGrid, SectionList, TopicDialog, 
  QuizDialog, ToolsTabs, ProgressTab, AchievementsTab,
  GamesTab, FloatingNav, WelcomeScreen, RewardCelebration
} from '@/components/school'
import { schoolData } from '@/data/school-data'
import type { Subject, Topic, QuizQuestion } from '@/data/types'

function SchoolApp() {
  const { 
    completedTopics, completeTopic, completeQuiz, addExperience,
    isFirstVisit, setFirstVisit, celebrationData, hideCelebration
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
      <div className="container mx-auto p-4 pl-20 md:pl-24 relative">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Learn Tab */}
          <TabsContent value="learn" className="space-y-6">
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
            <GamesTab 
              gradeId={selectedGrade || 0}
              onExperience={addExperience}
            />
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
      <div className="h-20 md:hidden" />
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
