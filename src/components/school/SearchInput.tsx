'use client'

import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'

export function SearchInput() {
  const { searchQuery, setSearchQuery } = useSchool()

  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      <Input
        placeholder="Поиск предметов..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 bg-slate-800/50 border-slate-700"
      />
    </div>
  )
}
