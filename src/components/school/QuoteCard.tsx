'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Sparkles } from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'

export function QuoteCard() {
  const { dailyQuote } = useSchool()

  return (
    <Card className="mb-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/20">
      <CardContent className="py-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <p className="text-sm italic text-slate-300">"{dailyQuote.text}"</p>
            <p className="text-xs text-slate-500 mt-1">— {dailyQuote.author}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
