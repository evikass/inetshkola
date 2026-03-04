'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Calculator, Atom, Triangle, Circle, Square, Zap, 
  Thermometer, Clock, Weight, Ruler, TrendingUp, Battery,
  Waves, Compass, Droplets, Wind
} from 'lucide-react'

interface FormulaCalculatorProps {
  gradeId?: number
  onScore?: (points: number) => void
}

// Категории формул
type CategoryType = 'math' | 'physics' | 'geometry'

interface Formula {
  id: string
  name: string
  category: CategoryType
  icon: React.ElementType
  description: string
  variables: { name: string; label: string; unit: string; default?: number }[]
  calculate: (values: Record<string, number>) => number | null
  formula: string
  explanation: string
}

// Формулы
const formulas: Formula[] = [
  // Математика
  {
    id: 'quadratic',
    name: 'Квадратное уравнение',
    category: 'math',
    icon: Square,
    description: 'Дискриминант квадратного уравнения',
    variables: [
      { name: 'a', label: 'a', unit: '', default: 1 },
      { name: 'b', label: 'b', unit: '', default: -5 },
      { name: 'c', label: 'c', unit: '', default: 6 }
    ],
    calculate: (v) => v.b * v.b - 4 * v.a * v.c,
    formula: 'D = b² - 4ac',
    explanation: 'Дискриминант показывает количество корней: D > 0 — два корня, D = 0 — один корень, D < 0 — нет корней'
  },
  {
    id: 'percentage',
    name: 'Процент от числа',
    category: 'math',
    icon: TrendingUp,
    description: 'Найти процент от числа',
    variables: [
      { name: 'number', label: 'Число', unit: '', default: 200 },
      { name: 'percent', label: 'Процент', unit: '%', default: 15 }
    ],
    calculate: (v) => (v.number * v.percent) / 100,
    formula: 'P = (n × %) / 100',
    explanation: 'Чтобы найти процент от числа, умножаем число на процент и делим на 100'
  },
  {
    id: 'average',
    name: 'Среднее арифметическое',
    category: 'math',
    icon: Calculator,
    description: 'Вычислить среднее значение',
    variables: [
      { name: 'n1', label: 'Число 1', unit: '', default: 10 },
      { name: 'n2', label: 'Число 2', unit: '', default: 20 },
      { name: 'n3', label: 'Число 3', unit: '', default: 30 }
    ],
    calculate: (v) => (v.n1 + v.n2 + v.n3) / 3,
    formula: 'S = (a + b + c) / n',
    explanation: 'Среднее арифметическое — сумма всех чисел, делённая на их количество'
  },
  
  // Геометрия
  {
    id: 'triangle_area',
    name: 'Площадь треугольника',
    category: 'geometry',
    icon: Triangle,
    description: 'Площадь по основанию и высоте',
    variables: [
      { name: 'base', label: 'Основание', unit: 'см', default: 10 },
      { name: 'height', label: 'Высота', unit: 'см', default: 5 }
    ],
    calculate: (v) => (v.base * v.height) / 2,
    formula: 'S = (a × h) / 2',
    explanation: 'Площадь треугольника равна половине произведения основания на высоту'
  },
  {
    id: 'circle_area',
    name: 'Площадь круга',
    category: 'geometry',
    icon: Circle,
    description: 'Площадь по радиусу',
    variables: [
      { name: 'radius', label: 'Радиус', unit: 'см', default: 5 }
    ],
    calculate: (v) => Math.PI * v.radius * v.radius,
    formula: 'S = π × r²',
    explanation: 'Площадь круга равна произведению числа π на квадрат радиуса (π ≈ 3.14)'
  },
  {
    id: 'circle_circumference',
    name: 'Длина окружности',
    category: 'geometry',
    icon: Compass,
    description: 'Длина по радиусу',
    variables: [
      { name: 'radius', label: 'Радиус', unit: 'см', default: 5 }
    ],
    calculate: (v) => 2 * Math.PI * v.radius,
    formula: 'C = 2 × π × r',
    explanation: 'Длина окружности равна удвоенному произведению числа π на радиус'
  },
  {
    id: 'rectangle_area',
    name: 'Площадь прямоугольника',
    category: 'geometry',
    icon: Square,
    description: 'Площадь по сторонам',
    variables: [
      { name: 'width', label: 'Ширина', unit: 'см', default: 5 },
      { name: 'height', label: 'Высота', unit: 'см', default: 8 }
    ],
    calculate: (v) => v.width * v.height,
    formula: 'S = a × b',
    explanation: 'Площадь прямоугольника равна произведению его сторон'
  },
  
  // Физика
  {
    id: 'speed',
    name: 'Скорость',
    category: 'physics',
    icon: Zap,
    description: 'Скорость равномерного движения',
    variables: [
      { name: 'distance', label: 'Расстояние', unit: 'м', default: 100 },
      { name: 'time', label: 'Время', unit: 'с', default: 20 }
    ],
    calculate: (v) => v.distance / v.time,
    formula: 'v = s / t',
    explanation: 'Скорость — это расстояние, пройденное за единицу времени (м/с)'
  },
  {
    id: 'density',
    name: 'Плотность',
    category: 'physics',
    icon: Weight,
    description: 'Плотность вещества',
    variables: [
      { name: 'mass', label: 'Масса', unit: 'кг', default: 50 },
      { name: 'volume', label: 'Объём', unit: 'м³', default: 0.02 }
    ],
    calculate: (v) => v.mass / v.volume,
    formula: 'ρ = m / V',
    explanation: 'Плотность — масса единицы объёма вещества (кг/м³)'
  },
  {
    id: 'force',
    name: 'Сила (Второй закон Ньютона)',
    category: 'physics',
    icon: Atom,
    description: 'F = ma',
    variables: [
      { name: 'mass', label: 'Масса', unit: 'кг', default: 10 },
      { name: 'acceleration', label: 'Ускорение', unit: 'м/с²', default: 5 }
    ],
    calculate: (v) => v.mass * v.acceleration,
    formula: 'F = m × a',
    explanation: 'Сила равна произведению массы на ускорение (Ньютон)'
  },
  {
    id: 'work',
    name: 'Работа',
    category: 'physics',
    icon: Battery,
    description: 'Механическая работа',
    variables: [
      { name: 'force', label: 'Сила', unit: 'Н', default: 100 },
      { name: 'distance', label: 'Расстояние', unit: 'м', default: 5 }
    ],
    calculate: (v) => v.force * v.distance,
    formula: 'A = F × s',
    explanation: 'Работа равна произведению силы на перемещение (Джоуль)'
  },
  {
    id: 'power',
    name: 'Мощность',
    category: 'physics',
    icon: Zap,
    description: 'Мощность по работе и времени',
    variables: [
      { name: 'work', label: 'Работа', unit: 'Дж', default: 500 },
      { name: 'time', label: 'Время', unit: 'с', default: 10 }
    ],
    calculate: (v) => v.work / v.time,
    formula: 'N = A / t',
    explanation: 'Мощность — работа, совершаемая за единицу времени (Ватт)'
  },
  {
    id: 'potential_energy',
    name: 'Потенциальная энергия',
    category: 'physics',
    icon: Waves,
    description: 'Энергия поднятого тела',
    variables: [
      { name: 'mass', label: 'Масса', unit: 'кг', default: 5 },
      { name: 'height', label: 'Высота', unit: 'м', default: 10 }
    ],
    calculate: (v) => v.mass * 9.8 * v.height,
    formula: 'Eп = m × g × h',
    explanation: 'Потенциальная энергия тела, поднятого над землёй (g ≈ 9.8 м/с²)'
  },
  {
    id: 'kinetic_energy',
    name: 'Кинетическая энергия',
    category: 'physics',
    icon: Wind,
    description: 'Энергия движущегося тела',
    variables: [
      { name: 'mass', label: 'Масса', unit: 'кг', default: 10 },
      { name: 'velocity', label: 'Скорость', unit: 'м/с', default: 5 }
    ],
    calculate: (v) => (v.mass * v.velocity * v.velocity) / 2,
    formula: 'Eк = m × v² / 2',
    explanation: 'Кинетическая энергия тела при поступательном движении'
  },
  {
    id: 'pressure',
    name: 'Давление',
    category: 'physics',
    icon: Droplets,
    description: 'Давление твёрдого тела',
    variables: [
      { name: 'force', label: 'Сила', unit: 'Н', default: 500 },
      { name: 'area', label: 'Площадь', unit: 'м²', default: 0.5 }
    ],
    calculate: (v) => v.force / v.area,
    formula: 'p = F / S',
    explanation: 'Давление — сила, действующая на единицу площади (Паскаль)'
  }
]

// Категории
const categories = [
  { id: 'all' as const, label: 'Все', icon: Calculator, color: 'text-gray-400' },
  { id: 'math' as const, label: 'Математика', icon: Calculator, color: 'text-blue-400' },
  { id: 'geometry' as const, label: 'Геометрия', icon: Triangle, color: 'text-green-400' },
  { id: 'physics' as const, label: 'Физика', icon: Atom, color: 'text-purple-400' }
]

export default function FormulaCalculator({ onScore }: FormulaCalculatorProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'all'>('all')
  const [selectedFormula, setSelectedFormula] = useState<Formula | null>(null)
  const [values, setValues] = useState<Record<string, string>>({})
  const [calculatedResult, setCalculatedResult] = useState<number | null>(null)
  const [usedFormulas, setUsedFormulas] = useState<Set<string>>(new Set())

  // Фильтрация формул
  const filteredFormulas = useMemo(() => {
    if (selectedCategory === 'all') return formulas
    return formulas.filter(f => f.category === selectedCategory)
  }, [selectedCategory])

  // Выбор формулы
  const handleSelectFormula = (formula: Formula) => {
    setSelectedFormula(formula)
    // Устанавливаем значения по умолчанию
    const defaultValues: Record<string, string> = {}
    formula.variables.forEach(v => {
      defaultValues[v.name] = v.default?.toString() || ''
    })
    setValues(defaultValues)
    setCalculatedResult(null)
  }

  // Обновление значения
  const handleValueChange = (name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }))
    setCalculatedResult(null)
  }

  // Вычисление
  const handleCalculate = () => {
    if (!selectedFormula) return

    const numericValues: Record<string, number> = {}
    for (const v of selectedFormula.variables) {
      const num = parseFloat(values[v.name])
      if (isNaN(num)) {
        setCalculatedResult(null)
        return
      }
      numericValues[v.name] = num
    }

    const result = selectedFormula.calculate(numericValues)
    setCalculatedResult(result)

    // Начисляем очки за использование
    if (!usedFormulas.has(selectedFormula.id)) {
      setUsedFormulas(prev => new Set([...prev, selectedFormula.id]))
      onScore?.(5)
    }
  }

  // Назад к списку
  const handleBack = () => {
    setSelectedFormula(null)
    setValues({})
    setCalculatedResult(null)
  }

  // Рендер списка формул
  const renderFormulaList = () => (
    <div className="space-y-4">
      {/* Категории */}
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <Button
            key={cat.id}
            variant={selectedCategory === cat.id ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(cat.id)}
            className="gap-2"
          >
            <cat.icon className="w-4 h-4" />
            {cat.label}
          </Button>
        ))}
      </div>

      {/* Список формул */}
      <div className="grid gap-3">
        {filteredFormulas.map((formula, index) => (
          <motion.div
            key={formula.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card 
              className="bg-white/5 border-white/10 hover:border-white/30 transition-all cursor-pointer"
              onClick={() => handleSelectFormula(formula)}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center ${
                    formula.category === 'math' ? 'text-blue-400' :
                    formula.category === 'geometry' ? 'text-green-400' : 'text-purple-400'
                  }`}>
                    <formula.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{formula.name}</h3>
                    <p className="text-sm text-gray-400">{formula.formula}</p>
                  </div>
                  <div className="text-sm text-gray-500 bg-white/5 px-2 py-1 rounded">
                    {formula.category === 'math' ? 'Математика' :
                     formula.category === 'geometry' ? 'Геометрия' : 'Физика'}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )

  // Рендер калькулятора
  const renderCalculator = () => {
    if (!selectedFormula) return null

    return (
      <div className="space-y-6">
        {/* Заголовок */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={handleBack}>
            ← Назад
          </Button>
          <div className="flex items-center gap-3">
            <selectedFormula.icon className={`w-6 h-6 ${
              selectedFormula.category === 'math' ? 'text-blue-400' :
              selectedFormula.category === 'geometry' ? 'text-green-400' : 'text-purple-400'
            }`} />
            <div>
              <h3 className="font-bold text-lg">{selectedFormula.name}</h3>
              <p className="text-sm text-gray-400">{selectedFormula.description}</p>
            </div>
          </div>
        </div>

        {/* Формула */}
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-mono text-purple-400 mb-2">
              {selectedFormula.formula}
            </div>
            <p className="text-sm text-gray-400">{selectedFormula.explanation}</p>
          </CardContent>
        </Card>

        {/* Ввод данных */}
        <div className="grid gap-4">
          {selectedFormula.variables.map((v) => (
            <div key={v.name} className="flex items-center gap-4">
              <label className="w-32 text-sm text-gray-300">{v.label}</label>
              <Input
                type="number"
                value={values[v.name] || ''}
                onChange={(e) => handleValueChange(v.name, e.target.value)}
                placeholder={`Введите ${v.label}`}
                className="flex-1 bg-white/10 border-white/20"
              />
              <span className="w-16 text-sm text-gray-400">{v.unit}</span>
            </div>
          ))}
        </div>

        {/* Кнопка вычисления */}
        <Button 
          onClick={handleCalculate}
          className="w-full py-6 text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          <Calculator className="w-5 h-5 mr-2" />
          Вычислить
        </Button>

        {/* Результат */}
        <AnimatePresence>
          {calculatedResult !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <Card className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30">
                <CardContent className="p-6 text-center">
                  <div className="text-sm text-gray-400 mb-2">Результат:</div>
                  <div className="text-4xl font-bold text-green-400">
                    {calculatedResult % 1 === 0 
                      ? calculatedResult 
                      : calculatedResult.toFixed(4)}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">
                    {selectedFormula.variables[0]?.unit && (
                      <span>{selectedFormula.variables[0].unit}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Примеры использования */}
        <Card className="bg-blue-500/10 border-blue-500/20">
          <CardContent className="p-4">
            <h4 className="font-medium text-blue-400 mb-2">💡 Пример</h4>
            <p className="text-sm text-gray-300">
              {selectedFormula.variables.map(v => `${v.label} = ${v.default || 1} ${v.unit}`).join(', ')}
              {' → '}Результат = {
                selectedFormula.calculate(
                  Object.fromEntries(selectedFormula.variables.map(v => [v.name, v.default || 1]))
                )?.toFixed(2)
              }
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-blue-400" />
          Калькулятор формул
          {usedFormulas.size > 0 && (
            <span className="text-sm font-normal text-gray-400 ml-2">
              • Использовано: {usedFormulas.size}
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFormula ? 'calculator' : 'list'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {selectedFormula ? renderCalculator() : renderFormulaList()}
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}
