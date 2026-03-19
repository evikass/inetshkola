'use client'

import { useSchool } from '@/context/SchoolContext'
import { SubjectCard } from './SubjectCard'

export function SubjectsTab() {
  const { filteredSubjects } = useSchool()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredSubjects.map(subject => (
        <SubjectCard key={subject.id} subject={subject} />
      ))}
    </div>
  )
}
