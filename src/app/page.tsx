'use client'

import { useState } from 'react'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { SchoolProvider, useSchool } from '@/context/SchoolContext'
import { 
  GradeSelector, SubjectGrid, TopicDialog, 
  QuizDialog, ToolsTabs, ProgressTab, AchievementsTab,
  GamesTab, FloatingNav
} from '@/components/school'
import { schoolData } from '@/data/school-data'
import type { Subject, Topic } from '@/data/types'

function SchoolApp() {
  const { completedTopics, completeTopic, completeQuiz, addExperience } = useSchool()
  
  const [activeTab, setActiveTab] = useState('learn')
  const [selectedGrade, setSelectedGrade] = useState(0)
  const [topicDialogOpen, setTopicDialogOpen] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)
  const [quizDialogOpen, setQuizDialogOpen] = useState(false)
  const [quizSubject, setQuizSubject] = useState<Subject | null>(null)

  const currentGradeData = schoolData.find(g => g.id === selectedGrade)

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
    setQuizDialogOpen(true)
  }

  const handleCompleteQuiz = (correct: number, total: number) => {
    if (quizSubject) {
      completeQuiz(quizSubject.id, correct, total)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Декоративный фон */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Плавающая навигация */}
      <FloatingNav 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedGrade={selectedGrade}
      />
      
      {/* Основной контент */}
      <div className="container mx-auto p-4 pl-20 md:pl-24 relative">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Learn Tab */}
          <TabsContent value="learn" className="space-y-6">
            <GradeSelector
              grades={schoolData}
              selectedGrade={selectedGrade}
              onSelectGrade={setSelectedGrade}
            />
            
            {currentGradeData && (
              <SubjectGrid
                subjects={currentGradeData.subjects}
                completedTopics={completedTopics}
                onOpenTopic={handleOpenTopic}
                onStartQuiz={handleStartQuiz}
                gradeId={selectedGrade}
              />
            )}
          </TabsContent>
          
          {/* Games Tab */}
          <TabsContent value="games" className="space-y-6">
            <GamesTab 
              gradeId={selectedGrade}
              onExperience={addExperience}
            />
          </TabsContent>
          
          {/* Progress Tab */}
          <TabsContent value="progress">
            <ProgressTab gradeId={selectedGrade} />
          </TabsContent>
          
          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <AchievementsTab />
          </TabsContent>
          
          {/* Tools Tab */}
          <TabsContent value="tools" className="space-y-6">
            <ToolsTabs onExperience={addExperience} gradeId={selectedGrade} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Topic Dialog */}
      <TopicDialog
        open={topicDialogOpen}
        onOpenChange={setTopicDialogOpen}
        topic={selectedTopic}
        onComplete={handleCompleteTopic}
        gradeId={selectedGrade}
      />

      {/* Quiz Dialog */}
      <QuizDialog
        open={quizDialogOpen}
        onOpenChange={setQuizDialogOpen}
        questions={quizSubject?.quiz || []}
        subjectName={quizSubject?.title || ''}
        onComplete={handleCompleteQuiz}
        gradeId={selectedGrade}
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
