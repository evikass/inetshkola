'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { BookOpen, X } from 'lucide-react'
import type { FolkloreText } from '@/data/folklore-texts'

interface FolkloreTextModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  text: FolkloreText | null
}

const typeLabels: Record<string, string> = {
  fairy_tale: 'Русская народная сказка',
  bylina: 'Былина',
  fable: 'Басня',
  poem: 'Стихотворение',
  story: 'Рассказ'
}

const typeIcons: Record<string, string> = {
  fairy_tale: '📖',
  bylina: '⚔️',
  fable: '🦊',
  poem: '📝',
  story: '📚'
}

export default function FolkloreTextModal({ open, onOpenChange, text }: FolkloreTextModalProps) {
  if (!text) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 border-amber-500/30 text-white max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader className="border-b border-amber-500/20 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-2xl">
                {typeIcons[text.type]}
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold text-amber-200">
                  {text.title}
                </DialogTitle>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-amber-300/70">
                    {typeLabels[text.type]}
                  </span>
                  {text.author && (
                    <>
                      <span className="text-amber-500/50">•</span>
                      <span className="text-sm text-amber-300/70">
                        {text.author}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="text-amber-300 hover:text-amber-100 hover:bg-amber-500/20"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </DialogHeader>
        
        <ScrollArea className="h-[65vh] mt-4">
          <div 
            className="folktale-content prose prose-invert prose-lg max-w-none px-4"
            dangerouslySetInnerHTML={{ __html: text.content }}
          />
        </ScrollArea>
        
        <div className="border-t border-amber-500/20 pt-4 mt-4 flex items-center justify-between">
          <p className="text-sm text-amber-300/60">
            📚 Для {text.grade.join(', ')} классов
          </p>
          <Button
            onClick={() => onOpenChange(false)}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Вернуться к уроку
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
