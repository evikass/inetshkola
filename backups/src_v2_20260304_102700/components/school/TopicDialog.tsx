'use client'

import { useState, useMemo } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { 
  BookOpen, CheckCircle, ChevronRight, ChevronLeft, Zap,
  Star, PartyPopper, Lightbulb, Video, Info, Sparkles
} from 'lucide-react'
import type { Topic, Subject, QuizQuestion } from '@/data/types'
import InteractiveLesson from './InteractiveLesson'
import { sampleLessons } from '@/data/sample-lessons'

interface TopicDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  topic: Topic | null
  subject?: Subject | null
  onComplete: () => void
  onOpenQuiz?: () => void
  gradeId?: number
  hasVideoLesson?: boolean
}

// Эмодзи для разных типов контента
const contentEmojis: Record<string, string[]> = {
  math: ['🔢', '➕', '➖', '✖️', '➗', '🧮', '📐', '📏'],
  russian: ['🔤', '📖', '✏️', '📝', '📚', '🖋️'],
  world: ['🌍', '🌳', '🌸', '🐕', '🐈', '🦋', '🌺'],
  default: ['⭐', '🌟', '✨', '💫', '🎉', '🎈', '🏆']
}

function getEmojis(topicId: string): string[] {
  if (topicId.includes('math') || topicId.includes('счёт')) return contentEmojis.math
  if (topicId.includes('rus') || topicId.includes('writing') || topicId.includes('письм')) return contentEmojis.russian
  if (topicId.includes('world') || topicId.includes('окруж')) return contentEmojis.world
  return contentEmojis.default
}

// Парсинг контента в шаги
interface LessonStep {
  type: 'intro' | 'item' | 'example' | 'complete'
  title: string
  content: string
  emoji: string
}

function parseContentToSteps(theory: string, examples: string[], topicTitle?: string, lessons?: import('@/data/types').Lesson[]): LessonStep[] {
  const steps: LessonStep[] = []

  // Добавляем введение
  steps.push({
    type: 'intro',
    title: topicTitle || 'Урок',
    content: 'Нажми на стрелочку, чтобы продолжить! →',
    emoji: '👋'
  })

  // Если есть уроки, парсим их
  if (lessons && lessons.length > 0) {
    lessons.forEach((lesson, index) => {
      // Парсим контент урока
      if (typeof document !== 'undefined') {
        const tempDiv = document.createElement('div')
        tempDiv.innerHTML = lesson.content

        // Заголовки как подсказки
        const headings = tempDiv.querySelectorAll('h3, h4')
        headings.forEach((heading, hIndex) => {
          const text = heading.textContent || ''
          if (text.length > 2) {
            steps.push({
              type: 'item',
              title: lesson.title,
              content: text,
              emoji: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'][(index + hIndex) % 10] || '•'
            })
          }
        })

        // Пункты списка
        const lists = tempDiv.querySelectorAll('ul li, ol li')
        lists.forEach((item, lIndex) => {
          const text = item.textContent || ''
          if (text.length > 2 && text.length < 200) {
            steps.push({
              type: 'item',
              title: 'Важно!',
              content: text,
              emoji: ['🌟', '✨', '⭐', '💫', '🎈'][lIndex % 5] || '⭐'
            })
          }
        })

        // Если из урока ничего не извлекли, добавляем сокращённый контент
        if (tempDiv.querySelectorAll('h3, h4, ul li, ol li').length === 0) {
          const plainText = lesson.content.replace(/<[^>]*>/g, ' ').trim().substring(0, 150)
          if (plainText.length > 10) {
            steps.push({
              type: 'item',
              title: lesson.title,
              content: plainText,
              emoji: '📖'
            })
          }
        }
      }
    })
  } else {
    // Парсим HTML теории и создаём простые шаги
    if (typeof document !== 'undefined') {
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = theory

      // Заголовки как подсказки
      const headings = tempDiv.querySelectorAll('h3, h4')
      headings.forEach((heading, index) => {
        const text = heading.textContent || ''
        if (text.length > 2) {
          steps.push({
            type: 'item',
            title: 'Запомни!',
            content: text,
            emoji: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'][index] || '•'
          })
        }
      })

      // Пункты списка
      const lists = tempDiv.querySelectorAll('ul li, ol li')
      lists.forEach((item, index) => {
        const text = item.textContent || ''
        if (text.length > 2 && text.length < 200) {
          steps.push({
            type: 'item',
            title: 'Важно!',
            content: text,
            emoji: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'][index % 10] || '•'
          })
        }
      })
    }

    // Если шагов мало, добавляем базовые
    if (steps.length < 3) {
      steps.push({
        type: 'item',
        title: 'Важно!',
        content: theory.replace(/<[^>]*>/g, ' ').substring(0, 150),
        emoji: '⭐'
      })
    }
  }

  // Добавляем примеры
  examples.forEach((example, index) => {
    steps.push({
      type: 'example',
      title: `Пример ${index + 1}`,
      content: example,
      emoji: '💡'
    })
  })

  // Добавляем финальный шаг
  steps.push({
    type: 'complete',
    title: 'Отлично! 🎉',
    content: 'Ты прошёл весь урок! Нажми кнопку, чтобы получить звезду!',
    emoji: '🏆'
  })

  return steps
}

// Мини-тест внутри урока
function MiniQuiz({
  questions,
  onComplete
}: {
  questions: QuizQuestion[]
  onComplete: () => void
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)

  const question = questions[currentQuestion]
  const isLastQuestion = currentQuestion === questions.length - 1
  const isFinished = currentQuestion >= questions.length

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(index)
    const correct = index === question.correctAnswer
    setIsCorrect(correct)

    if (correct) {
      setScore(prev => prev + 1)
    }
  }

  const nextQuestion = () => {
    if (isLastQuestion) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setIsCorrect(null)
    }
  }

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100)
    const isPerfect = score === questions.length

    return (
      <div className="text-center space-y-4 py-6">
        <div className="text-6xl animate-bounce">
          {isPerfect ? '🏆' : percentage >= 70 ? '🎉' : '💪'}
        </div>
        <h3 className="text-2xl font-bold text-white">
          {isPerfect ? 'Идеально!' : percentage >= 70 ? 'Отлично!' : 'Хорошая попытка!'}
        </h3>
        <p className="text-lg text-white/80">
          {score} из {questions.length} правильных ответов
        </p>
        <div className="flex justify-center gap-2">
          {[...Array(Math.min(score, 5))].map((_, i) => (
            <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <Button
          onClick={onComplete}
          className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl px-8 py-4 text-lg font-bold"
        >
          <PartyPopper className="w-5 h-5 mr-2" />
          Завершить
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-white/60">Вопрос {currentQuestion + 1} из {questions.length}</span>
        <div className="flex items-center gap-1">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <span className="font-bold text-white">{score}</span>
        </div>
      </div>

      <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />

      <div className="bg-white/10 rounded-2xl p-4">
        <h4 className="text-lg font-medium text-white mb-4">{question.question}</h4>
        
        <div className="space-y-2">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index
            const isTheCorrectAnswer = index === question.correctAnswer
            const showCorrect = selectedAnswer !== null && isTheCorrectAnswer

            return (
              <Button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={`w-full rounded-xl py-4 text-left transition-all ${
                  showCorrect
                    ? 'bg-green-500 text-white'
                    : isSelected && !isCorrect
                      ? 'bg-red-500 text-white'
                      : isSelected
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {showCorrect ? '✅ ' : isSelected && !isCorrect ? '❌ ' : ''}
                {option}
              </Button>
            )
          })}
        </div>

        {selectedAnswer !== null && (
          <div className="mt-4">
            <p className="text-sm text-white/80 mb-3">{question.explanation}</p>
            <Button
              onClick={nextQuestion}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl py-3"
            >
              {isLastQuestion ? 'Результаты' : 'Дальше'}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

// Генерация интересных фактов (вынесено в отдельную функцию)
function generateInterestingFacts(topic: Topic | null, subjectName: string): string[] {
  if (!topic) return []
  
  const facts: string[] = []
  const title = topic.title.toLowerCase()
  
  // Математика
  if (title.includes('сло') || title.includes('сумм') || title.includes('сложен')) {
    facts.push('🔢 Самое большое число в мире — гуголплекс. Его невозможно записать на бумаге!')
    facts.push('🧮 Древние римляне использовали абак для сложения — это был первый «калькулятор» более 2000 лет назад!')
    facts.push('➕ Ноль был изобретён в Индии около V века нашей эры.')
  }
  if (title.includes('вычит') || title.includes('разност')) {
    facts.push('➖ Древние египтяне использовали вычитание для расчёта налогов ещё 4000 лет назад!')
    facts.push('📐 Отрицательные числа впервые появились в Китае во II веке до н.э.')
  }
  if (title.includes('умн') || title.includes('произведен')) {
    facts.push('✖️ Таблица умножения появилась более 4000 лет назад в Древнем Вавилоне!')
    facts.push('🌟 Умножение на 9: сумма цифр результата всегда равна 9 (9×7=63, 6+3=9)!')
  }
  if (title.includes('делен') || title.includes('делим')) {
    facts.push('➗ При делении на ноль получается бесконечность!')
    facts.push('🔢 Дроби использовали ещё древние египтяне для измерения земли.')
  }
  if (title.includes('дроб')) {
    facts.push('🥧 Число π — бесконечная дробь, вычисленная до 50 триллионов знаков!')
    facts.push('📊 Дроби впервые появились в Древнем Египте около 1800 года до н.э.')
  }
  if (title.includes('уравнен')) {
    facts.push('⚖️ Алгебра происходит от арабского слова «аль-джабр» — «восстановление»!')
    facts.push('📜 Первые уравнения решали в Древнем Вавилоне почти 4000 лет назад.')
  }
  if (title.includes('геометр') || title.includes('фигур') || title.includes('треугольн')) {
    facts.push('📐 Геометрия означает «измерение земли»!')
    facts.push('🔺 Сумма углов любого треугольника всегда равна 180°!')
  }
  
  // Русский язык
  if (subjectName.includes('русск') || title.includes('букв') || title.includes('звук')) {
    facts.push('🔤 В русском языке 33 буквы. Буква «Ё» появилась только в 1783 году.')
    facts.push('📝 Самое длинное слово — «превысокомногорассмотрительствующий» (35 букв)!')
    facts.push('📚 Русский язык — один из 6 официальных языков ООН.')
  }
  if (title.includes('существ') || title.includes('имя')) {
    facts.push('📛 Существительные составляют около 40% всех слов в русском языке!')
    facts.push('🏛️ Самое длинное существительное — «высокопревосходительство».')
  }
  if (title.includes('глагол') || title.includes('сказуем')) {
    facts.push('🏃 Глагол — самая «активная» часть речи!')
    facts.push('⏰ Глаголы имеют 3 времени: прошлое, настоящее и будущее.')
  }
  if (title.includes('прилагат') || title.includes('определен')) {
    facts.push('🎨 Прилагательные делают речь яркой и образной!')
    facts.push('🌈 Прилагательные изменяются по родам, числам и падежам.')
  }
  if (title.includes('предл') || title.includes('синтаксис')) {
    facts.push('📝 Самое длинное предложение в литературе содержит 1288 слов!')
    facts.push('📚 В русском языке 6 членов предложения.')
  }
  
  // Окружающий мир
  if (subjectName.includes('окруж') || title.includes('природ') || title.includes('мир')) {
    facts.push('🌍 Земля вращается вокруг Солнца со скоростью 107 000 км/ч!')
    facts.push('🌊 Океаны занимают 71% поверхности Земли!')
    facts.push('🦕 Динозавры вымерли 66 миллионов лет назад, но птицы — их потомки!')
  }
  if (title.includes('растен') || title.includes('цвет')) {
    facts.push('🌸 Самый большой цветок — раффлезия, диаметр до 1 метра!')
    facts.push('🌱 Одно большое дерево обеспечивает кислородом 4 человека!')
    facts.push('🌻 Подсолнух всегда поворачивается к солнцу.')
  }
  if (title.includes('животн') || title.includes('звер')) {
    facts.push('🐘 Слоны — единственные животные, которые не могут прыгать!')
    facts.push('🐬 Дельфины спят с одним открытым глазом!')
    facts.push('🦈 Акулы живут на Земле 400 миллионов лет!')
  }
  if (title.includes('косм') || title.includes('звезд') || title.includes('планет')) {
    facts.push('🌌 Во Вселенной больше звёзд, чем песчинок на Земле!')
    facts.push('🌑 Следы астронавтов на Луне останутся на миллионы лет!')
    facts.push('☀️ Свет от Солнца идёт до Земли 8 минут 20 секунд!')
  }
  if (title.includes('вод') || title.includes('рек') || title.includes('озёр')) {
    facts.push('💧 Вода существует в трёх состояниях!')
    facts.push('🌊 Самая длинная река — Нил, 6650 километров!')
  }
  
  // История
  if (subjectName.includes('истор')) {
    facts.push('📜 Письменность существует более 5000 лет!')
    facts.push('🏺 Древние греки изобрели демократию около 2500 лет назад!')
    facts.push('🗡️ Рыцари на самом деле воевали друг с другом, а не с драконами!')
  }
  
  // Если фактов не нашлось, добавляем общие
  if (facts.length === 0) {
    facts.push('🔍 Учёные каждый день делают новые открытия!')
    facts.push('📚 Человек, который знает много фактов, называется эрудитом!')
    facts.push('⭐ Знания — это сокровище, которое всегда с тобой!')
    facts.push('🧠 Мозг может запомнить информацию, равную 3 миллионам часов видео!')
  }
  
  return facts.slice(0, 4)
}

// Генерация подробной информации (вынесено в отдельную функцию)
function generateDetailedInfo(topic: Topic | null, subjectName: string): string {
  if (!topic) return ''
  
  const title = topic.title.toLowerCase()
  let info = ''
  
  // Математика
  if (title.includes('сло') || title.includes('сумм') || title.includes('сложен')) {
    info = `<h3>📐 Подробнее о сложении</h3>
    <p><strong>Определение:</strong> Сложение — это математическая операция объединения чисел.</p>
    <p><strong>Компоненты:</strong> слагаемое + слагаемое = сумма</p>
    <p><strong>Свойства:</strong></p>
    <ul>
      <li>Переместительное: a + b = b + a</li>
      <li>Сочетательное: (a + b) + c = a + (b + c)</li>
      <li>Свойство нуля: a + 0 = a</li>
    </ul>
    <p><strong>Применение:</strong> подсчёт денег, расчёт времени, измерение расстояний.</p>`
  } else if (title.includes('вычит') || title.includes('разност')) {
    info = `<h3>📐 Подробнее о вычитании</h3>
    <p><strong>Определение:</strong> Вычитание — операция, обратная сложению.</p>
    <p><strong>Компоненты:</strong> уменьшаемое - вычитаемое = разность</p>
    <p><strong>Правила:</strong></p>
    <ul>
      <li>a - 0 = a</li>
      <li>a - a = 0</li>
    </ul>
    <p><strong>Применение:</strong> расчёт сдачи, определение остатка.</p>`
  } else if (title.includes('умн') || title.includes('произведен')) {
    info = `<h3>✖️ Подробнее об умножении</h3>
    <p><strong>Определение:</strong> Умножение — увеличение числа в несколько раз.</p>
    <p><strong>Компоненты:</strong> множитель × множитель = произведение</p>
    <p><strong>Свойства:</strong></p>
    <ul>
      <li>Переместительное: a × b = b × a</li>
      <li>Сочетательное: (a × b) × c = a × (b × c)</li>
      <li>Распределительное: a × (b + c) = a × b + a × c</li>
    </ul>
    <p><strong>Применение:</strong> расчёт площади, покупка товаров.</p>`
  } else if (title.includes('делен') || title.includes('делим')) {
    info = `<h3>➗ Подробнее о делении</h3>
    <p><strong>Определение:</strong> Деление — разбивка числа на равные части.</p>
    <p><strong>Компоненты:</strong> делимое ÷ делитель = частное</p>
    <p><strong>Правила:</strong></p>
    <ul>
      <li>На ноль делить нельзя!</li>
      <li>a ÷ 1 = a</li>
      <li>a ÷ a = 1</li>
    </ul>
    <p><strong>Применение:</strong> разделение поровну, расчёт скорости.</p>`
  } else if (title.includes('дроб')) {
    info = `<h3>📊 Подробнее о дробях</h3>
    <p><strong>Определение:</strong> Дробь — число из равных частей единицы.</p>
    <p><strong>Структура:</strong> числитель/знаменатель</p>
    <p><strong>Виды:</strong></p>
    <ul>
      <li>Правильные: числитель < знаменатель</li>
      <li>Неправильные: числитель ≥ знаменатель</li>
      <li>Смешанные: целая + дробная часть</li>
    </ul>
    <p><strong>Применение:</strong> измерение, рецепты, проценты.</p>`
  } else if (title.includes('уравнен')) {
    info = `<h3>⚖️ Подробнее об уравнениях</h3>
    <p><strong>Определение:</strong> Уравнение — равенство с неизвестной.</p>
    <p><strong>Корень уравнения</strong> — значение, делающее равенство верным.</p>
    <p><strong>Правила:</strong></p>
    <ul>
      <li>При переносе через «=» меняется знак</li>
      <li>Обе части можно умножать/делить на одно число</li>
      <li>Всегда делай проверку!</li>
    </ul>`
  }
  // Русский язык
  else if (title.includes('существ') || title.includes('имя существ')) {
    info = `<h3>📛 Подробнее об имени существительном</h3>
    <p><strong>Определение:</strong> Часть речи, обозначающая предмет.</p>
    <p><strong>Вопросы:</strong> кто? что?</p>
    <p><strong>Признаки:</strong></p>
    <ul>
      <li>Постоянные: одушевлённость, род, склонение</li>
      <li>Непостоянные: падеж, число</li>
    </ul>
    <p><strong>Рода:</strong> мужской, женский, средний</p>
    <p><strong>Падежи:</strong> Именительный, Родительный, Дательный, Винительный, Творительный, Предложный</p>`
  } else if (title.includes('глагол')) {
    info = `<h3>🏃 Подробнее о глаголе</h3>
    <p><strong>Определение:</strong> Часть речи, обозначающая действие.</p>
    <p><strong>Вопросы:</strong> что делать? что сделать?</p>
    <p><strong>Признаки:</strong></p>
    <ul>
      <li>Вид: совершенный и несовершенный</li>
      <li>Время: настоящее, прошедшее, будущее</li>
      <li>Наклонение: изъявительное, условное, повелительное</li>
      <li>Спряжение: I и II</li>
    </ul>
    <p><strong>В предложении</strong> — сказуемое.</p>`
  } else if (title.includes('прилагат')) {
    info = `<h3>🎨 Подробнее об имени прилагательном</h3>
    <p><strong>Определение:</strong> Часть речи, обозначающая признак предмета.</p>
    <p><strong>Вопросы:</strong> какой? чей?</p>
    <p><strong>Разряды:</strong></p>
    <ul>
      <li>Качественные: большой, красивый</li>
      <li>Относительные: деревянный, летний</li>
      <li>Притяжательные: мамин, лисий</li>
    </ul>
    <p><strong>Изменяется:</strong> по родам, числам, падежам.</p>
    <p><strong>В предложении</strong> — определение.</p>`
  } else if (title.includes('предл') && subjectName.includes('русск')) {
    info = `<h3>📝 Подробнее о предложении</h3>
    <p><strong>Определение:</strong> Слово или слова, выражающие мысль.</p>
    <p><strong>Главные члены:</strong> подлежащее и сказуемое</p>
    <p><strong>Виды:</strong></p>
    <ul>
      <li>По цели: повествовательные, вопросительные, побудительные</li>
      <li>По интонации: невосклицательные и восклицательные</li>
      <li>По членам: распространённые и нераспространённые</li>
    </ul>`
  }
  // Окружающий мир
  else if (title.includes('растен')) {
    info = `<h3>🌿 Подробнее о растениях</h3>
    <p><strong>Определение:</strong> Живые организмы, создающие органические вещества.</p>
    <p><strong>Органы:</strong> корень, стебель, листья, цветок, плод с семенами.</p>
    <p><strong>Значение:</strong></p>
    <ul>
      <li>Выделяют кислород</li>
      <li>Пища для животных и людей</li>
      <li>Круговорот воды в природе</li>
      <li>Сырьё для промышленности</li>
    </ul>`
  } else if (title.includes('животн') || title.includes('звер')) {
    info = `<h3>🐾 Подробнее о животных</h3>
    <p><strong>Определение:</strong> Живые организмы, питающиеся готовыми веществами.</p>
    <p><strong>Группы:</strong></p>
    <ul>
      <li>Млекопитающие: кормят молоком</li>
      <li>Птицы: перья, яйца</li>
      <li>Рыбы: вода, жабры</li>
      <li>Насекомые: шесть ног</li>
      <li>Земноводные: вода и суша</li>
      <li>Пресмыкающиеся: сухая кожа</li>
    </ul>`
  } else if (title.includes('косм') || title.includes('планет')) {
    info = `<h3>🌌 Подробнее о космосе</h3>
    <p><strong>Солнечная система:</strong> Солнце и небесные тела вокруг него.</p>
    <p><strong>Планеты:</strong> Меркурий, Венера, Земля, Марс, Юпитер, Сатурн, Уран, Нептун.</p>
    <p><strong>Интересные факты:</strong></p>
    <ul>
      <li>Солнце — ближайшая к Земле звезда</li>
      <li>Луна — спутник Земли</li>
      <li>Первый космонавт — Юрий Гагарин (1961)</li>
    </ul>`
  }
  
  return info
}

export default function TopicDialog({ 
  open, 
  onOpenChange, 
  topic, 
  subject,
  onComplete,
  onOpenQuiz,
  gradeId = 0,
  hasVideoLesson = false
}: TopicDialogProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [starsEarned, setStarsEarned] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [showVideoLesson, setShowVideoLesson] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  // Все useMemo ДО условных return
  const steps = useMemo(() => {
    if (!topic) return []
    return parseContentToSteps(topic.theory, topic.examples, topic.title, topic.lessons)
  }, [topic])

  const videoLesson = useMemo(() => {
    if (!hasVideoLesson || !topic) return null
    const matchingLesson = sampleLessons.find(lesson => 
      topic.title.toLowerCase().includes(lesson.title.toLowerCase()) ||
      lesson.title.toLowerCase().includes(topic.title.toLowerCase())
    )
    return matchingLesson
  }, [hasVideoLesson, topic])

  const subjectName = subject?.name?.toLowerCase() || ''
  
  const interestingFacts = useMemo(() => {
    return generateInterestingFacts(topic, subjectName)
  }, [topic, subjectName])

  const detailedInfo = useMemo(() => {
    return generateDetailedInfo(topic, subjectName)
  }, [topic, subjectName])

  // Early return после всех хуков
  if (!topic) return null

  const useKidMode = gradeId <= 2
  const hasTopicQuiz = topic.quiz && topic.quiz.length > 0
  const hasSubjectQuiz = subject?.quiz && subject.quiz.length > 0
  
  const progress = steps.length > 0 ? ((currentStep + 1) / steps.length) * 100 : 0
  const currentStepData = steps[currentStep]
  const emojis = getEmojis(topic.id)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
      setStarsEarned(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleComplete = () => {
    onComplete()
    onOpenChange(false)
    setCurrentStep(0)
    setStarsEarned(0)
    setShowQuiz(false)
    setQuizCompleted(false)
  }

  const handleQuizComplete = () => {
    setQuizCompleted(true)
    setShowQuiz(false)
  }

  const handleStartTopicQuiz = () => {
    setShowQuiz(true)
  }

  const handleVideoProgress = (progress: number) => {
    console.log('Video lesson progress:', progress)
  }

  const handleVideoComplete = () => {
    setShowVideoLesson(false)
    onComplete()
  }

  // Video Lesson View
  if (showVideoLesson && videoLesson) {
    return (
      <Dialog open={true} onOpenChange={() => setShowVideoLesson(false)}>
        <DialogContent className="bg-slate-900 border-white/10 text-white max-w-5xl max-h-[90vh] p-0 overflow-hidden">
          <InteractiveLesson
            lesson={videoLesson}
            onComplete={handleVideoComplete}
            onProgress={handleVideoProgress}
            onClose={() => setShowVideoLesson(false)}
          />
        </DialogContent>
      </Dialog>
    )
  }

  // Детский режим
  if (useKidMode) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 border-white/20 text-white max-w-lg overflow-hidden rounded-3xl">
          {/* Шапка с прогрессом */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse" />
              <span className="font-bold text-lg">{starsEarned}</span>
            </div>
            <div className="flex-1 mx-4">
              <Progress value={showQuiz ? 100 : progress} className="h-2" />
            </div>
            <Button
              variant="ghost"
              onClick={() => onOpenChange(false)}
              className="text-white/60 hover:text-white"
            >
              ✕
            </Button>
          </div>

          {/* Контент */}
          <div className="p-4 min-h-[300px]">
            {showQuiz && hasTopicQuiz ? (
              <MiniQuiz
                questions={topic.quiz!}
                onComplete={handleComplete}
              />
            ) : showQuiz && hasSubjectQuiz && onOpenQuiz ? (
              <div className="text-center space-y-4 py-6">
                <p className="text-white/80">Тест по предмету</p>
                <Button
                  onClick={() => {
                    onOpenChange(false)
                    onOpenQuiz()
                  }}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-2xl px-8 py-4 text-lg font-bold"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Начать тест
                </Button>
              </div>
            ) : currentStepData ? (
              <div className="space-y-6">
                {/* Эмодзи */}
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-bounce-slow">
                    {currentStepData.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {currentStepData.title}
                  </h3>
                </div>

                {/* Контент шага */}
                {currentStepData.type === 'complete' ? (
                  <div className="text-center space-y-4">
                    <p className="text-lg text-white/80">{currentStepData.content}</p>
                    <div className="flex justify-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-8 h-8 text-yellow-400 fill-yellow-400 animate-bounce"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>

                    {/* Кнопки */}
                    <div className="space-y-2 pt-4">
                      {(hasTopicQuiz || hasSubjectQuiz) && (
                        <Button
                          onClick={handleStartTopicQuiz}
                          className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-2xl py-4 text-lg font-bold"
                        >
                          <Zap className="w-5 h-5 mr-2" />
                          Тест
                        </Button>
                      )}
                      
                      <Button
                        onClick={handleComplete}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl py-4 text-lg font-bold"
                      >
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Завершить урок
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-lg text-white/90 text-center">
                      {currentStepData.content}
                    </p>

                    {currentStepData.type === 'example' && (
                      <div className="bg-white/10 rounded-2xl p-4 text-center">
                        <Lightbulb className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                        <p className="text-white/80">Попробуй сам!</p>
                      </div>
                    )}

                    {/* Навигация */}
                    <div className="flex gap-2 pt-4">
                      <Button
                        onClick={handlePrev}
                        disabled={currentStep === 0}
                        className="flex-1 bg-white/10 hover:bg-white/20 disabled:opacity-50 text-white rounded-xl py-3"
                      >
                        <ChevronLeft className="w-5 h-5 mr-1" />
                        Назад
                      </Button>
                      <Button
                        onClick={handleNext}
                        className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl py-3"
                      >
                        Дальше
                        <ChevronRight className="w-5 h-5 ml-1" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-white/60">
                Загрузка...
              </div>
            )}
          </div>

          <style jsx>{`
            @keyframes bounce-slow {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
          `}</style>
        </DialogContent>
      </Dialog>
    )
  }

  // Обычный режим для старших классов
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-900 border-white/10 text-white max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-400" />
            {topic.title}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {topic.description}
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="lesson" className="flex-1 flex flex-col min-h-0">
          <TabsList className="bg-slate-800/50 border border-white/10">
            <TabsTrigger value="lesson" className="data-[state=active]:bg-purple-600">
              <BookOpen className="w-4 h-4 mr-1" />
              Урок
            </TabsTrigger>
            <TabsTrigger value="details" className="data-[state=active]:bg-blue-600">
              <Info className="w-4 h-4 mr-1" />
              Подробнее
            </TabsTrigger>
            <TabsTrigger value="facts" className="data-[state=active]:bg-amber-600">
              <Sparkles className="w-4 h-4 mr-1" />
              Факты
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="lesson" className="flex-1 min-h-0 overflow-hidden">
            <ScrollArea className="h-[40vh]">
              <div className="space-y-4 pr-4">
                <div 
                  className="prose prose-invert prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: topic.theory }}
                />
                
                {topic.examples.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-white font-medium">Примеры:</h4>
                    <ul className="space-y-1">
                      {topic.examples.map((example, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300">
                          <ChevronRight className="w-4 h-4 text-purple-400" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="details" className="flex-1 min-h-0 overflow-hidden">
            <ScrollArea className="h-[40vh]">
              <div className="space-y-4 pr-4">
                {detailedInfo ? (
                  <div 
                    className="prose prose-invert prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: detailedInfo }}
                  />
                ) : (
                  <div className="space-y-4">
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                      <h4 className="text-purple-400 font-medium mb-2">📚 Дополнительные материалы</h4>
                      <p className="text-gray-300">{topic.description}</p>
                    </div>
                    <div 
                      className="prose prose-invert prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: topic.theory }}
                    />
                  </div>
                )}
              </div>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="facts" className="flex-1 min-h-0 overflow-hidden">
            <ScrollArea className="h-[40vh]">
              <div className="space-y-3 pr-4">
                {interestingFacts.map((fact, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-lg p-4 border border-amber-500/20"
                  >
                    <p className="text-white/90">{fact}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
        
        <div className="flex flex-col sm:flex-row gap-2 p-4 border-t border-white/10">
          {videoLesson && (
            <Button
              onClick={() => setShowVideoLesson(true)}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
            >
              <Video className="w-4 h-4 mr-2" />
              Видеоурок
            </Button>
          )}
          
          {hasTopicQuiz && (
            <Button
              onClick={() => setShowQuiz(true)}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
            >
              <Zap className="w-4 h-4 mr-2" />
              Тест по уроку ({topic.quiz?.length})
            </Button>
          )}
          
          {!hasTopicQuiz && hasSubjectQuiz && onOpenQuiz && (
            <Button
              onClick={() => {
                onOpenChange(false)
                onOpenQuiz()
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            >
              <Zap className="w-4 h-4 mr-2" />
              Тест
            </Button>
          )}
          
          <Button
            onClick={handleComplete}
            className={quizCompleted 
              ? "bg-gradient-to-r from-green-600 to-emerald-600" 
              : "bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-500 hover:to-slate-500"
            }
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            {quizCompleted ? 'Пройдено' : 'Не пройдено'}
          </Button>
        </div>

        {showQuiz && hasTopicQuiz && (
          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center p-4 z-10">
            <MiniQuiz
              questions={topic.quiz!}
              onComplete={handleQuizComplete}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
