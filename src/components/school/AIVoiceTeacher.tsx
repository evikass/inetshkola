'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { 
  Volume2, VolumeX, Mic, MicOff, X, Send, 
  Sparkles, BookOpen, Lightbulb, MessageCircle
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface AIVoiceTeacherProps {
  subject?: string
  topic?: string
  onClose?: () => void
  className?: string
}

// Предустановленные ответы учителя
const teacherResponses: Record<string, string[]> = {
  greeting: [
    'Привет! Я твой AI учитель. Чем могу помочь? 🎓',
    'Здравствуй! Готов к новым знаниям? 📚',
    'Привет, ученик! Задавай вопросы! ✨'
  ],
  math: [
    'В математике важно понимать суть. Давай разберём это понятие шаг за шагом! 🔢',
    'Отличный вопрос по математике! Представь это так: если у тебя есть 5 яблок...',
    'Математика — это как игра с числами. Давай решим это вместе! 🧮'
  ],
  russian: [
    'Русский язык очень богатый! Это слово происходит от...',
    'В русском языке есть много правил, но это легко запомнить! 📖',
    'Давай разберём это правило на примерах! ✏️'
  ],
  science: [
    'Это интересное явление природы! Представь себе... 🌍',
    'Наука помогает понять мир вокруг нас. Это происходит так... 🔬',
    'Отличный вопрос! Учёные тоже задавались им много лет назад... 🧪'
  ],
  encouragement: [
    'Ты отлично справляешься! Продолжай в том же духе! 💪',
    'Я верю в тебя! Давай разберём это вместе! ⭐',
    'Каждый вопрос — это шаг к знаниям! Молодец! 🌟'
  ],
  default: [
    'Интересный вопрос! Давай подумаем об этом вместе... 🤔',
    'Хороший вопрос! Попробуем разобраться... 💭',
    'Это важная тема! Объясню простыми словами... 📝'
  ]
}

export default function AIVoiceTeacher({ 
  subject = '', 
  topic = '',
  onClose,
  className = ''
}: AIVoiceTeacherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const hasGreeted = useRef(false)
  const { playClick, playSuccess } = useSound()
  
  // Инициализация приветствия
  const greeting = teacherResponses.greeting[Math.floor(Math.random() * teacherResponses.greeting.length)]
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== 'undefined') {
      return [{
        id: '1',
        role: 'assistant',
        content: greeting,
        timestamp: new Date()
      }]
    }
    return []
  })

  // Автопрокрутка к последнему сообщению
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Получить ответ учителя
  const getTeacherResponse = useCallback((userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Определяем тему вопроса
    let category = 'default'
    if (lowerMessage.includes('математик') || lowerMessage.includes('числ') || lowerMessage.includes('пример') || lowerMessage.includes('задач')) {
      category = 'math'
    } else if (lowerMessage.includes('русск') || lowerMessage.includes('слов') || lowerMessage.includes('букв') || lowerMessage.includes('правил')) {
      category = 'russian'
    } else if (lowerMessage.includes('наук') || lowerMessage.includes('природ') || lowerMessage.includes('физик') || lowerMessage.includes('химия') || lowerMessage.includes('биолог')) {
      category = 'science'
    } else if (lowerMessage.includes('помог') || lowerMessage.includes('не понимаю') || lowerMessage.includes('сложн')) {
      category = 'encouragement'
    }
    
    const responses = teacherResponses[category]
    return responses[Math.floor(Math.random() * responses.length)]
  }, [])

  // Синтез речи (Web Speech API)
  const speak = useCallback((text: string) => {
    if (isMuted || typeof window === 'undefined') return
    
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'ru-RU'
    utterance.rate = 0.9
    utterance.pitch = 1.1
    
    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)
    
    window.speechSynthesis.speak(utterance)
  }, [isMuted])

  // Отправить сообщение
  const handleSendMessage = useCallback(() => {
    if (!inputValue.trim()) return
    
    playClick?.()
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)
    
    // Имитация задержки ответа
    setTimeout(() => {
      const response = getTeacherResponse(userMessage.content)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, assistantMessage])
      setIsTyping(false)
      playSuccess?.()
      speak(response)
    }, 1000 + Math.random() * 1000)
  }, [inputValue, playClick, playSuccess, getTeacherResponse, speak])

  // Переключить прослушивание
  const toggleListening = useCallback(() => {
    if (typeof window === 'undefined') return
    
    if (isListening) {
      window.speechSynthesis?.cancel()
      setIsListening(false)
    } else {
      // Простая симуляция голосового ввода
      setIsListening(true)
      setTimeout(() => {
        setInputValue('Расскажи о дробях')
        setIsListening(false)
      }, 2000)
    }
  }, [isListening])

  // Открыть/закрыть чат
  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev)
    playClick?.()
  }, [playClick])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    window.speechSynthesis?.cancel()
    onClose?.()
  }, [onClose])

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="chat"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="w-80 sm:w-96 h-[500px] flex flex-col bg-gradient-to-b from-purple-200 via-violet-300 to-fuchsia-200 dark:from-purple-800/90 dark:via-violet-800/90 dark:to-fuchsia-800/90 border-purple-300/50 dark:border-purple-500/30 shadow-2xl backdrop-blur-sm">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-purple-300/50 dark:border-purple-500/30">
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center"
                    animate={isSpeaking ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3, repeat: isSpeaking ? Infinity : 0 }}
                  >
                    <span className="text-xl">🤖</span>
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-purple-800 dark:text-white">AI Учитель</h3>
                    <p className="text-xs text-purple-600 dark:text-purple-300">
                      {isSpeaking ? 'Говорит...' : isTyping ? 'Печатает...' : 'Онлайн'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-purple-600 hover:text-purple-800 hover:bg-purple-200/50 dark:text-purple-300 dark:hover:text-white"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleClose}
                    className="text-purple-600 hover:text-purple-800 hover:bg-purple-200/50 dark:text-purple-300 dark:hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-br-md'
                          : 'bg-white/60 text-purple-900 rounded-bl-md dark:bg-purple-800/50 dark:text-purple-100'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs opacity-50 mt-1">
                        {message.timestamp.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/60 p-3 rounded-2xl rounded-bl-md dark:bg-purple-800/50">
                      <div className="flex gap-1">
                        <motion.span
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-purple-500 rounded-full"
                        />
                        <motion.span
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-purple-500 rounded-full"
                        />
                        <motion.span
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-purple-500 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              {/* Quick Actions */}
              <div className="px-4 pb-2 flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setInputValue('Объясни тему')}
                  className="text-purple-600 hover:text-purple-800 hover:bg-purple-200/50 text-xs"
                >
                  <BookOpen className="w-3 h-3 mr-1" />
                  Тема
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setInputValue('Дай подсказку')}
                  className="text-purple-600 hover:text-purple-800 hover:bg-purple-200/50 text-xs"
                >
                  <Lightbulb className="w-3 h-3 mr-1" />
                  Подсказка
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setInputValue('Помоги!')}
                  className="text-purple-600 hover:text-purple-800 hover:bg-purple-200/50 text-xs"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  Помощь
                </Button>
              </div>
              
              {/* Input */}
              <div className="p-4 border-t border-purple-300/50 dark:border-purple-500/30">
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleListening}
                    className={`${isListening ? 'text-red-500 animate-pulse' : 'text-purple-600 dark:text-purple-300'}`}
                  >
                    {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                  </Button>
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Спроси что-нибудь..."
                    className="bg-white/60 border-purple-300 text-purple-900 placeholder:text-purple-400 dark:bg-purple-800/50 dark:border-purple-500/50 dark:text-purple-100 dark:placeholder:text-purple-300/50"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ) : (
          <motion.button
            key="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleOpen}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 via-violet-500 to-fuchsia-500 shadow-lg flex items-center justify-center group relative"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-3xl">🤖</span>
            </motion.div>
            
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-violet-500 to-fuchsia-500 opacity-50"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-purple-100/90 dark:bg-purple-900/90 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-purple-200 dark:border-purple-500/30">
              AI Учитель
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
