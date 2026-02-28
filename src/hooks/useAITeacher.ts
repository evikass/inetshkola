'use client'

import { useState, useCallback } from 'react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export function useAITeacher() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const askQuestion = useCallback(async (question: string, previousMessages: Message[]): Promise<string> => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/teacher', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          question,
          previousMessages: previousMessages.map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      })

      if (!response.ok) {
        throw new Error('Ошибка при получении ответа')
      }

      const data = await response.json()
      return data.answer
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Неизвестная ошибка'
      setError(errorMessage)
      
      // Fallback ответ при ошибке
      return `Извини, у меня небольшие технические неполадки! 😅

Но вот что я могу посоветовать:
- 📚 Попробуй перезагрузить страницу
- 💡 Перефразируй свой вопрос
- 🎯 Или загляни в раздел обучения — там много полезной информации!

Попробуй ещё раз через минуту! 🌟`
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    askQuestion,
    isLoading,
    error,
    clearError: () => setError(null)
  }
}
