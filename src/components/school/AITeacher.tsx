'use client'

import { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { 
  Send, Bot, User, Sparkles, BookOpen, Calculator, Lightbulb,
  MessageCircle, Volume2, VolumeX, RefreshCw, ChevronDown,
  Maximize2, Minimize2, HelpCircle, Star, Zap
} from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  subject?: string
  helpful?: boolean | null
}

interface SuggestedQuestion {
  question: string
  category: string
  icon: React.ReactNode
}

const SUGGESTED_QUESTIONS: SuggestedQuestion[] = [
  { question: 'Объясни тему дроби простыми словами', category: 'Математика', icon: <Calculator className="w-4 h-4" /> },
  { question: 'Как правильно писать "не" с существительными?', category: 'Русский язык', icon: <BookOpen className="w-4 h-4" /> },
  { question: 'Расскажи о Солнечной системе', category: 'Окружающий мир', icon: <Sparkles className="w-4 h-4" /> },
  { question: 'Как решать уравнения?', category: 'Математика', icon: <Lightbulb className="w-4 h-4" /> },
  { question: 'Что такое части речи?', category: 'Русский язык', icon: <BookOpen className="w-4 h-4" /> },
  { question: 'Почему идёт дождь?', category: 'Окружающий мир', icon: <Sparkles className="w-4 h-4" /> },
]

// База знаний для ответов (без API)
const KNOWLEDGE_BASE: Record<string, string> = {
  'дроби': `<h3>Что такое дроби?</h3>
<p>Дробь — это часть целого. Представь пиццу, разрезанную на кусочки. Каждый кусочек — это дробь!</p>
<h4>Из чего состоит дробь:</h4>
<ul>
<li><b>Числитель</b> (верхнее число) — сколько частей взяли</li>
<li><b>Знаменатель</b> (нижнее число) — на сколько частей разделили</li>
</ul>
<h4>Пример:</h4>
<p>🍕 Пиццу разрезали на 8 кусков. Ты съел 3 куска. Это дробь 3/8 (три восьмых).</p>
<h4>Виды дробей:</h4>
<ul>
<li><b>Правильная</b> — числитель меньше знаменателя (1/2, 3/4)</li>
<li><b>Неправильная</b> — числитель больше или равен знаменателю (5/4, 7/3)</li>
</ul>`,

  'не с существительными': `<h3>Правописание НЕ с существительными</h3>
<h4>Слитно:</h4>
<ul>
<li>Если слово без НЕ не употребляется: <b>ненастье</b>, <b>невежда</b></li>
<li>Если можно заменить синонимом без НЕ: <b>неправда</b> (ложь), <b>недруг</b> (враг)</li>
</ul>
<h4>Раздельно:</h4>
<ul>
<li>Если есть противопоставление с союзом <b>а</b>: <b>не друг, а враг</b></li>
<li>Если есть слова: <b>вовсе не</b>, <b>далеко не</b>, <b>отнюдь не</b></li>
</ul>
<h4>Примеры:</h4>
<p>✅ <b>недруг</b> (враг) — слитно<br/>
❌ <b>не друг, а враг</b> — раздельно (есть противопоставление)</p>`,

  'солнечная система': `<h3>Солнечная система</h3>
<p>Солнечная система — это семья космических тел, которая вращается вокруг Солнца.</p>
<h4>Состав Солнечной системы:</h4>
<ul>
<li>☀️ <b>Солнце</b> — звезда в центре</li>
<li>🪨 <b>Планеты земной группы:</b> Меркурий, Венера, Земля, Марс</li>
<li>🪐 <b>Планеты-гиганты:</b> Юпитер, Сатурн, Уран, Нептун</li>
<li>🌙 <b>Спутники</b> — Луна и другие</li>
<li>☄️ <b>Кометы и астероиды</b></li>
</ul>
<h4>Интересные факты:</h4>
<ul>
<li>Юпитер — самая большая планета</li>
<li>Сатурн известен своими кольцами</li>
<li>На Венере самый жаркий климат</li>
</ul>`,

  'уравнения': `<h3>Как решать уравнения</h3>
<p>Уравнение — это равенство с неизвестным числом, которое нужно найти.</p>
<h4>Алгоритм решения:</h4>
<ol>
<li>Определи, где находится неизвестное (x)</li>
<li>Перенеси известные числа в одну сторону</li>
<li>Переноси через знак = с противоположным действием</li>
<li>Вычисли ответ</li>
<li>Проверь решение</li>
</ol>
<h4>Пример:</h4>
<p><b>x + 5 = 12</b><br/>
1. x слева, 5 тоже слева<br/>
2. Переносим 5 вправо: x = 12 - 5<br/>
3. x = 7<br/>
4. Проверка: 7 + 5 = 12 ✓</p>
<h4>Важно помнить:</h4>
<ul>
<li>При переносе через = знак меняется на противоположный (+ на -, × на ÷)</li>
</ul>`,

  'части речи': `<h3>Части речи в русском языке</h3>
<p>Часть речи — это группа слов с общими признаками.</p>
<h4>Самостоятельные части речи:</h4>
<ul>
<li><b>Существительное</b> — предмет: стол, книга, радость</li>
<li><b>Прилагательное</b> — признак предмета: красный, большой</li>
<li><b>Глагол</b> — действие: бежать, читать</li>
<li><b>Наречие</b> — признак действия: быстро, красиво</li>
<li><b>Числительное</b> — число: один, пять</li>
<li><b>Местоимение</b> — указывает: я, ты, он</li>
</ul>
<h4>Служебные части речи:</h4>
<ul>
<li><b>Предлог</b>: в, на, под, над</li>
<li><b>Союз</b>: и, а, но</li>
<li><b>Частица</b>: не, бы, же</li>
</ul>`,

  'дождь': `<h3>Почему идёт дождь?</h3>
<p>Дождь — это часть круговорота воды в природе!</p>
<h4>Как образуется дождь:</h4>
<ol>
<li>🌊 Солнце нагревает воду в реках, озёрах и океанах</li>
<li>💨 Вода испаряется и превращается в пар</li>
<li>☁️ Пар поднимается вверх и образует облака</li>
<li>💧 В облаках капельки воды становятся тяжёлыми</li>
<li>🌧️ Капли падают на землю — это и есть дождь!</li>
</ol>
<h4>Интересные факты:</h4>
<ul>
<li>Капли дождя падают со скоростью 8-10 км/ч</li>
<li>За год на Землю выпадает около 500 000 км³ осадков</li>
<li>Существуют разные виды дождя: ливень, морось, грозовой дождь</li>
</ul>`
}

// Функция для поиска релевантного ответа
const findAnswer = (question: string): string => {
  const lowerQuestion = question.toLowerCase()
  
  for (const [key, answer] of Object.entries(KNOWLEDGE_BASE)) {
    if (lowerQuestion.includes(key) || key.split(' ').some(k => lowerQuestion.includes(k))) {
      return answer
    }
  }
  
  // Общий ответ, если тема не найдена
  return `<h3>Интересный вопрос!</h3>
<p>К сожалению, у меня пока нет подробной информации по этой теме. Но вот несколько советов:</p>
<ul>
<li>📚 Попробуй перефразировать вопрос</li>
<li>🔍 Уточни, какой именно аспект тебя интересует</li>
<li>📖 Посмотри материалы по этой теме в разделе обучения</li>
</ul>
<p>Я постоянно учусь и скоро смогу ответить на больше вопросов!</p>`
}

export default function AITeacher() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `<h3>Привет! 👋</h3>
<p>Я — твой виртуальный учитель. Могу помочь с:</p>
<ul>
<li>📖 Объяснением тем по школьным предметам</li>
<li>💡 Подсказками при решении задач</li>
<li>❓ Ответами на вопросы</li>
</ul>
<p>Выбери готовый вопрос ниже или напиши свой!</p>`,
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Прокрутка к последнему сообщению
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  // Отправка сообщения
  const sendMessage = (text?: string) => {
    const messageText = text || input.trim()
    if (!messageText) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setShowSuggestions(false)
    setIsTyping(true)

    // Имитация задержки ответа
    setTimeout(() => {
      const answer = findAnswer(messageText)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: answer,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  // Оценка ответа
  const rateMessage = (messageId: string, helpful: boolean) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, helpful } : msg
    ))
  }

  // Очистка истории
  const clearHistory = () => {
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: `<h3>Начнём сначала! 🔄</h3>
<p>История очищена. Чем могу помочь?</p>`,
        timestamp: new Date()
      }
    ])
    setShowSuggestions(true)
  }

  return (
    <Card className={`transition-all duration-300 bg-gradient-to-br from-purple-900/50 to-violet-900/50 border-purple-500/30 ${isExpanded ? 'fixed inset-4 z-50' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <div className="relative">
              <Avatar className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500">
                <AvatarFallback className="bg-transparent">
                  <Bot className="w-6 h-6 text-white" />
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
            </div>
            <div>
              <span className="text-lg text-white">Виртуальный учитель</span>
              <p className="text-xs text-purple-300 font-normal">Всегда готов помочь</p>
            </div>
          </CardTitle>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? 'Выключить звук' : 'Включить звук'}
              className="text-purple-300 hover:text-white hover:bg-purple-700/50"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={clearHistory}
              title="Очистить историю"
              className="text-purple-300 hover:text-white hover:bg-purple-700/50"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(!isExpanded)}
              title={isExpanded ? 'Свернуть' : 'Развернуть'}
              className="text-purple-300 hover:text-white hover:bg-purple-700/50"
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Рекомендуемые вопросы */}
        {showSuggestions && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-purple-300 flex items-center gap-1">
                <Zap className="w-4 h-4" />
                Популярные вопросы
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSuggestions(false)}
                className="text-purple-300 hover:text-white hover:bg-purple-700/50"
              >
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED_QUESTIONS.slice(0, 4).map((sq, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="h-auto py-2 px-3 bg-purple-800/40 border-purple-500/30 text-purple-200 hover:bg-purple-700/60 hover:text-white"
                  onClick={() => sendMessage(sq.question)}
                >
                  {sq.icon}
                  <span className="ml-1 text-xs">{sq.question}</span>
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* История сообщений */}
        <ScrollArea className={`pr-2 ${isExpanded ? 'h-[calc(100vh-300px)]' : 'h-[300px]'}`} ref={scrollRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <Avatar className={`w-8 h-8 flex-shrink-0 ${
                  message.role === 'user' 
                    ? 'bg-blue-500' 
                    : 'bg-gradient-to-br from-indigo-500 to-purple-500'
                }`}>
                  <AvatarFallback className="bg-transparent">
                    {message.role === 'user' 
                      ? <User className="w-4 h-4 text-white" /> 
                      : <Bot className="w-4 h-4 text-white" />
                    }
                  </AvatarFallback>
                </Avatar>
                <div className={`flex-1 max-w-[80%] ${message.role === 'user' ? 'text-right' : ''}`}>
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-tr-none'
                        : 'bg-purple-100 border border-purple-200 rounded-tl-none'
                    }`}
                  >
                    <div
                      className={`prose prose-sm max-w-none ${message.role === 'assistant' ? 'prose-purple text-purple-900' : 'prose-invert'}`}
                      dangerouslySetInnerHTML={{ __html: message.content }}
                    />
                  </div>
                  {message.role === 'assistant' && message.helpful === null && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-purple-300">Был ли ответ полезен?</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 px-2"
                        onClick={() => rateMessage(message.id, true)}
                      >
                        👍
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 px-2"
                        onClick={() => rateMessage(message.id, false)}
                      >
                        👎
                      </Button>
                    </div>
                  )}
                  {message.helpful !== null && (
                    <Badge variant="outline" className="text-xs">
                      {message.helpful ? '👍 Полезно' : '👎 Не помогло'}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3">
                <Avatar className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500">
                  <AvatarFallback className="bg-transparent">
                    <Bot className="w-4 h-4 text-white" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-purple-100 border border-purple-200 rounded-lg rounded-tl-none p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Поле ввода */}
        <div className="flex gap-2">
          <Input
            placeholder="Задай вопрос..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
            className="flex-1 bg-purple-100 border-purple-300 text-purple-900 placeholder:text-purple-400"
          />
          <Button
            onClick={() => sendMessage()}
            disabled={!input.trim() || isTyping}
            className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>

        {/* Подсказки */}
        <div className="flex items-center justify-between text-xs text-purple-300">
          <span className="flex items-center gap-1">
            <HelpCircle className="w-3 h-3" />
            Задавай вопросы по школьным предметам
          </span>
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3" />
            Оценивай ответы
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
