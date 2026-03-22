'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Search, Copy, Check, Calculator, Atom, FlaskConical, 
  BookOpen, ChevronDown, ChevronRight, Star, BookMarked
} from 'lucide-react'

interface Formula {
  id: string
  name: string
  formula: string
  description: string
  subject: 'math' | 'physics' | 'chemistry'
  category: string
  variables: { name: string; description: string }[]
  example?: string
  isFavorite?: boolean
}

const formulas: Formula[] = [
  // МАТЕМАТИКА
  // Алгебра
  { id: 'm1', name: 'Дискриминант', formula: 'D = b² - 4ac', description: 'Дискриминант квадратного уравнения ax² + bx + c = 0', subject: 'math', category: 'Алгебра',
    variables: [
      { name: 'a, b, c', description: 'коэффициенты квадратного уравнения' },
      { name: 'D', description: 'дискриминант' }
    ],
    example: 'x² - 5x + 6 = 0: D = 25 - 24 = 1 → x = (5±1)/2 → x₁=3, x₂=2'
  },
  { id: 'm2', name: 'Корни квадратного уравнения', formula: 'x = (-b ± √D) / 2a', description: 'Формула корней через дискриминант', subject: 'math', category: 'Алгебра',
    variables: [
      { name: 'D', description: 'дискриминант' },
      { name: 'a, b', description: 'коэффициенты' }
    ]
  },
  { id: 'm3', name: 'Теорема Виета', formula: 'x₁ + x₂ = -b/a, x₁ · x₂ = c/a', description: 'Связь корней с коэффициентами', subject: 'math', category: 'Алгебра',
    variables: [
      { name: 'x₁, x₂', description: 'корни уравнения' },
      { name: 'a, b, c', description: 'коэффициенты' }
    ]
  },
  { id: 'm4', name: 'Свойства логарифмов', formula: 'logₐ(xy) = logₐx + logₐy', description: 'Логарифм произведения', subject: 'math', category: 'Алгебра',
    variables: [
      { name: 'a', description: 'основание логарифма' },
      { name: 'x, y', description: 'аргументы' }
    ]
  },
  { id: 'm5', name: 'Производная степени', formula: "(xⁿ)' = n·xⁿ⁻¹", description: 'Производная степенной функции', subject: 'math', category: 'Производные',
    variables: [
      { name: 'n', description: 'показатель степени' }
    ]
  },
  { id: 'm6', name: 'Производная синуса', formula: "(sin x)' = cos x", description: 'Производная тригонометрической функции', subject: 'math', category: 'Производные',
    variables: []
  },
  { id: 'm7', name: 'Производная косинуса', formula: "(cos x)' = -sin x", description: 'Производная тригонометрической функции', subject: 'math', category: 'Производные',
    variables: []
  },
  { id: 'm8', name: 'Производная экспоненты', formula: "(eˣ)' = eˣ", description: 'Производная экспоненциальной функции', subject: 'math', category: 'Производные',
    variables: []
  },
  
  // Геометрия
  { id: 'm9', name: 'Теорема Пифагора', formula: 'a² + b² = c²', description: 'Для прямоугольного треугольника', subject: 'math', category: 'Геометрия',
    variables: [
      { name: 'a, b', description: 'катеты' },
      { name: 'c', description: 'гипотенуза' }
    ],
    example: 'Катеты 3 и 4 → c = √(9+16) = 5'
  },
  { id: 'm10', name: 'Площадь треугольника', formula: 'S = ½ · a · h', description: 'Площадь через основание и высоту', subject: 'math', category: 'Геометрия',
    variables: [
      { name: 'a', description: 'основание' },
      { name: 'h', description: 'высота' }
    ]
  },
  { id: 'm11', name: 'Площадь круга', formula: 'S = πR²', description: 'Площадь круга через радиус', subject: 'math', category: 'Геометрия',
    variables: [
      { name: 'R', description: 'радиус' },
      { name: 'π', description: 'число пи ≈ 3.14' }
    ]
  },
  { id: 'm12', name: 'Длина окружности', formula: 'C = 2πR', description: 'Длина окружности через радиус', subject: 'math', category: 'Геометрия',
    variables: [
      { name: 'R', description: 'радиус' }
    ]
  },
  { id: 'm13', name: 'Площадь трапеции', formula: 'S = ½ · (a + b) · h', description: 'Площадь трапеции через основания и высоту', subject: 'math', category: 'Геометрия',
    variables: [
      { name: 'a, b', description: 'основания' },
      { name: 'h', description: 'высота' }
    ]
  },
  { id: 'm14', name: 'Формула Герона', formula: 'S = √(p(p-a)(p-b)(p-c))', description: 'Площадь треугольника по трём сторонам', subject: 'math', category: 'Геометрия',
    variables: [
      { name: 'a, b, c', description: 'стороны треугольника' },
      { name: 'p', description: 'полупериметр = (a+b+c)/2' }
    ]
  },
  { id: 'm15', name: 'Сумма углов треугольника', formula: 'α + β + γ = 180°', description: 'Сумма внутренних углов любого треугольника', subject: 'math', category: 'Геометрия',
    variables: []
  },
  
  // Тригонометрия
  { id: 'm16', name: 'Основное тригонометрическое тождество', formula: 'sin²α + cos²α = 1', description: 'Связь синуса и косинуса', subject: 'math', category: 'Тригонометрия',
    variables: []
  },
  { id: 'm17', name: 'Тангенс', formula: 'tg α = sin α / cos α', description: 'Определение тангенса', subject: 'math', category: 'Тригонометрия',
    variables: []
  },
  { id: 'm18', name: 'Котангенс', formula: 'ctg α = cos α / sin α', description: 'Определение котангенса', subject: 'math', category: 'Тригонометрия',
    variables: []
  },
  
  // ФИЗИКА
  // Механика
  { id: 'p1', name: 'Второй закон Ньютона', formula: 'F = ma', description: 'Сила равна произведению массы на ускорение', subject: 'physics', category: 'Механика',
    variables: [
      { name: 'F', description: 'сила (Н)' },
      { name: 'm', description: 'масса (кг)' },
      { name: 'a', description: 'ускорение (м/с²)' }
    ]
  },
  { id: 'p2', name: 'Сила тяжести', formula: 'F = mg', description: 'Сила притяжения к Земле', subject: 'physics', category: 'Механика',
    variables: [
      { name: 'm', description: 'масса (кг)' },
      { name: 'g', description: 'ускорение свободного падения ≈ 10 м/с²' }
    ]
  },
  { id: 'p3', name: 'Кинетическая энергия', formula: 'Eк = ½mv²', description: 'Энергия движущегося тела', subject: 'physics', category: 'Механика',
    variables: [
      { name: 'm', description: 'масса (кг)' },
      { name: 'v', description: 'скорость (м/с)' }
    ]
  },
  { id: 'p4', name: 'Потенциальная энергия', formula: 'Eп = mgh', description: 'Энергия поднятого тела', subject: 'physics', category: 'Механика',
    variables: [
      { name: 'm', description: 'масса (кг)' },
      { name: 'h', description: 'высота (м)' }
    ]
  },
  { id: 'p5', name: 'Импульс тела', formula: 'p = mv', description: 'Количество движения', subject: 'physics', category: 'Механика',
    variables: [
      { name: 'p', description: 'импульс (кг·м/с)' },
      { name: 'm', description: 'масса' },
      { name: 'v', description: 'скорость' }
    ]
  },
  { id: 'p6', name: 'Скорость при равномерном движении', formula: 'v = S / t', description: 'Путь, пройденный за единицу времени', subject: 'physics', category: 'Механика',
    variables: [
      { name: 'v', description: 'скорость (м/с)' },
      { name: 'S', description: 'путь (м)' },
      { name: 't', description: 'время (с)' }
    ]
  },
  
  // Электричество
  { id: 'p7', name: 'Закон Ома', formula: 'I = U / R', description: 'Сила тока прямо пропорциональна напряжению', subject: 'physics', category: 'Электричество',
    variables: [
      { name: 'I', description: 'сила тока (А)' },
      { name: 'U', description: 'напряжение (В)' },
      { name: 'R', description: 'сопротивление (Ом)' }
    ]
  },
  { id: 'p8', name: 'Мощность электрического тока', formula: 'P = U · I', description: 'Мощность через напряжение и ток', subject: 'physics', category: 'Электричество',
    variables: [
      { name: 'P', description: 'мощность (Вт)' },
      { name: 'U', description: 'напряжение (В)' },
      { name: 'I', description: 'сила тока (А)' }
    ]
  },
  { id: 'p9', name: 'Работа электрического тока', formula: 'A = U · I · t', description: 'Работа тока за время', subject: 'physics', category: 'Электричество',
    variables: [
      { name: 'A', description: 'работа (Дж)' },
      { name: 't', description: 'время (с)' }
    ]
  },
  { id: 'p10', name: 'Закон Джоуля-Ленца', formula: 'Q = I²Rt', description: 'Количество теплоты от тока', subject: 'physics', category: 'Электричество',
    variables: [
      { name: 'Q', description: 'количество теплоты (Дж)' }
    ]
  },
  
  // Молекулярная физика
  { id: 'p11', name: 'Уравнение Менделеева-Клапейрона', formula: 'pV = νRT', description: 'Уравнение состояния идеального газа', subject: 'physics', category: 'Молекулярная физика',
    variables: [
      { name: 'p', description: 'давление (Па)' },
      { name: 'V', description: 'объём (м³)' },
      { name: 'ν', description: 'количество вещества (моль)' },
      { name: 'R', description: 'газовая постоянная = 8.31 Дж/(моль·К)' },
      { name: 'T', description: 'температура (К)' }
    ]
  },
  { id: 'p12', name: 'Первый закон термодинамики', formula: 'Q = ΔU + A', description: 'Количество теплоты идёт на изменение энергии и работу', subject: 'physics', category: 'Молекулярная физика',
    variables: [
      { name: 'Q', description: 'количество теплоты' },
      { name: 'ΔU', description: 'изменение внутренней энергии' },
      { name: 'A', description: 'работа' }
    ]
  },
  
  // ХИМИЯ
  { id: 'c1', name: 'Количество вещества', formula: 'n = m / M', description: 'Через массу и молярную массу', subject: 'chemistry', category: 'Основные формулы',
    variables: [
      { name: 'n', description: 'количество вещества (моль)' },
      { name: 'm', description: 'масса (г)' },
      { name: 'M', description: 'молярная масса (г/моль)' }
    ]
  },
  { id: 'c2', name: 'Объём газа (н.у.)', formula: 'V = n · Vm', description: 'Vm = 22.4 л/моль при нормальных условиях', subject: 'chemistry', category: 'Основные формулы',
    variables: [
      { name: 'V', description: 'объём газа (л)' },
      { name: 'n', description: 'количество вещества (моль)' },
      { name: 'Vm', description: 'молярный объём = 22.4 л/моль' }
    ]
  },
  { id: 'c3', name: 'Массовая доля', formula: 'ω = m(вещества) / m(раствора) · 100%', description: 'Отношение массы вещества к массе раствора', subject: 'chemistry', category: 'Растворы',
    variables: [
      { name: 'ω', description: 'массовая доля (%)' }
    ]
  },
  { id: 'c4', name: 'Молярная концентрация', formula: 'C = n / V', description: 'Количество вещества в единице объёма', subject: 'chemistry', category: 'Растворы',
    variables: [
      { name: 'C', description: 'концентрация (моль/л)' },
      { name: 'n', description: 'количество вещества (моль)' },
      { name: 'V', description: 'объём раствора (л)' }
    ]
  },
  { id: 'c5', name: 'Выход продукта', formula: 'η = m(практ) / m(теор) · 100%', description: 'Отношение практического выхода к теоретическому', subject: 'chemistry', category: 'Основные формулы',
    variables: [
      { name: 'η', description: 'выход продукта (%)' }
    ]
  },
]

const subjectIcons = {
  math: <Calculator className="w-5 h-5" />,
  physics: <Atom className="w-5 h-5" />,
  chemistry: <FlaskConical className="w-5 h-5" />
}

const subjectNames = {
  math: 'Математика',
  physics: 'Физика',
  chemistry: 'Химия'
}

const subjectColors = {
  math: 'from-blue-500/20 to-purple-500/20 border-blue-500/30',
  physics: 'from-pink-500/20 to-rose-500/20 border-pink-500/30',
  chemistry: 'from-cyan-500/20 to-green-500/20 border-cyan-500/30'
}

export default function FormulaReference() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['Алгебра', 'Геометрия', 'Механика', 'Электричество', 'Основные формулы']))
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)
  
  // Загрузка избранного
  useState(() => {
    const saved = localStorage.getItem('formulaFavorites_v1')
    if (saved) {
      setFavorites(new Set(JSON.parse(saved)))
    }
  })
  
  // Сохранение избранного
  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      localStorage.setItem('formulaFavorites_v1', JSON.stringify([...newSet]))
      return newSet
    })
  }
  
  // Копирование формулы
  const copyFormula = async (formula: Formula) => {
    await navigator.clipboard.writeText(formula.formula)
    setCopiedId(formula.id)
    setTimeout(() => setCopiedId(null), 2000)
  }
  
  // Переключение категории
  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev)
      if (newSet.has(category)) {
        newSet.delete(category)
      } else {
        newSet.add(category)
      }
      return newSet
    })
  }
  
  // Фильтрация формул
  const filteredFormulas = useMemo(() => {
    return formulas.filter(f => {
      const matchesSearch = searchQuery === '' || 
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.category.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesSubject = selectedSubject === null || f.subject === selectedSubject
      const matchesFavorites = !showOnlyFavorites || favorites.has(f.id)
      
      return matchesSearch && matchesSubject && matchesFavorites
    })
  }, [searchQuery, selectedSubject, showOnlyFavorites, favorites])
  
  // Группировка по предмету и категории
  const groupedFormulas = useMemo(() => {
    const grouped: Record<string, Record<string, Formula[]>> = {}
    
    filteredFormulas.forEach(f => {
      if (!grouped[f.subject]) grouped[f.subject] = {}
      if (!grouped[f.subject][f.category]) grouped[f.subject][f.category] = []
      grouped[f.subject][f.category].push(f)
    })
    
    return grouped
  }, [filteredFormulas])
  
  return (
    <div className="space-y-4">
      {/* Поиск и фильтры */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Поиск формул..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          />
        </div>
        
        <Button
          variant={showOnlyFavorites ? "default" : "outline"}
          onClick={() => setShowOnlyFavorites(prev => !prev)}
          className={showOnlyFavorites 
            ? "bg-yellow-600 hover:bg-yellow-700" 
            : "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
          }
        >
          <Star className="w-4 h-4 mr-2" />
          Избранное
          {favorites.size > 0 && (
            <Badge className="ml-2 bg-white/20">{favorites.size}</Badge>
          )}
        </Button>
      </div>
      
      {/* Фильтр по предметам */}
      <div className="flex gap-2">
        <Button
          size="sm"
          variant={selectedSubject === null ? "default" : "outline"}
          onClick={() => setSelectedSubject(null)}
          className={selectedSubject === null 
            ? "bg-purple-600 hover:bg-purple-700" 
            : "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
          }
        >
          Все предметы
        </Button>
        {(['math', 'physics', 'chemistry'] as const).map(subject => (
          <Button
            key={subject}
            size="sm"
            variant={selectedSubject === subject ? "default" : "outline"}
            onClick={() => setSelectedSubject(subject)}
            className={selectedSubject === subject 
              ? "bg-purple-600 hover:bg-purple-700" 
              : "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
            }
          >
            {subjectIcons[subject]}
            <span className="ml-2">{subjectNames[subject]}</span>
          </Button>
        ))}
      </div>
      
      {/* Результаты */}
      {Object.keys(groupedFormulas).length === 0 ? (
        <Card className="bg-white/5 border-white/10 backdrop-blur">
          <CardContent className="p-8 text-center">
            <BookMarked className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Формулы не найдены</h3>
            <p className="text-gray-400">Попробуйте изменить параметры поиска</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedFormulas).map(([subject, categories]) => (
            <div key={subject}>
              <div className="flex items-center gap-2 mb-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${subjectColors[subject as keyof typeof subjectColors]}`}>
                  {subjectIcons[subject as keyof typeof subjectIcons]}
                </div>
                <h3 className="text-lg font-bold text-white">{subjectNames[subject as keyof typeof subjectNames]}</h3>
              </div>
              
              <div className="space-y-3">
                {Object.entries(categories).map(([category, categoryFormulas]) => (
                  <Card key={category} className={`bg-gradient-to-br ${subjectColors[subject as keyof typeof subjectColors]} backdrop-blur`}>
                    <CardHeader 
                      className="pb-2 cursor-pointer"
                      onClick={() => toggleCategory(`${subject}-${category}`)}
                    >
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white text-sm">{category}</CardTitle>
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <span>{categoryFormulas.length} формул</span>
                          {expandedCategories.has(`${subject}-${category}`) 
                            ? <ChevronDown className="w-4 h-4" />
                            : <ChevronRight className="w-4 h-4" />
                          }
                        </div>
                      </div>
                    </CardHeader>
                    
                    {expandedCategories.has(`${subject}-${category}`) && (
                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          {categoryFormulas.map(formula => (
                            <div
                              key={formula.id}
                              className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                            >
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <h4 className="text-white font-medium">{formula.name}</h4>
                                  {favorites.has(formula.id) && (
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                  )}
                                </div>
                                
                                <div className="flex items-center gap-1">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => toggleFavorite(formula.id)}
                                    className="h-7 w-7 p-0 text-gray-400 hover:text-yellow-400"
                                  >
                                    <Star className={`w-4 h-4 ${favorites.has(formula.id) ? 'text-yellow-400 fill-yellow-400' : ''}`} />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => copyFormula(formula)}
                                    className="h-7 w-7 p-0 text-gray-400 hover:text-white"
                                  >
                                    {copiedId === formula.id 
                                      ? <Check className="w-4 h-4 text-green-400" />
                                      : <Copy className="w-4 h-4" />
                                    }
                                  </Button>
                                </div>
                              </div>
                              
                              <div className="text-2xl text-white font-mono mb-2 bg-black/20 px-3 py-2 rounded">
                                {formula.formula}
                              </div>
                              
                              <p className="text-sm text-gray-400 mb-2">{formula.description}</p>
                              
                              {formula.variables.length > 0 && (
                                <div className="text-xs text-gray-500">
                                  <span className="font-medium">Переменные: </span>
                                  {formula.variables.map(v => `${v.name} — ${v.description}`).join('; ')}
                                </div>
                              )}
                              
                              {formula.example && (
                                <div className="mt-2 p-2 bg-black/10 rounded text-xs text-gray-400">
                                  <span className="font-medium">Пример: </span>{formula.example}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Статистика */}
      <div className="flex gap-4 text-sm text-gray-400">
        <span>Всего формул: {formulas.length}</span>
        <span>•</span>
        <span>В избранном: {favorites.size}</span>
        <span>•</span>
        <span>Найдено: {filteredFormulas.length}</span>
      </div>
    </div>
  )
}
