'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Calculator, Sigma, Triangle, Brain,
  Star, Trophy, Heart, Clock, Target, Check, X, Sparkles, Zap
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

interface AdvancedMathGameProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

// Категории вопросов
type MathCategory = 'algebra' | 'geometry' | 'powers' | 'trigonometry' | 'progressions' | 'logic'

interface MathQuestion {
  question: string
  correctAnswer: string
  options: string[]
  category: MathCategory
  difficulty: 1 | 2 | 3
  explanation: string
  hint?: string
}

// База вопросов по продвинутой математике (55+ вопросов)
const questions: MathQuestion[] = [
  // === АЛГЕБРА (difficulty 1) - 5-7 класс ===
  {
    question: 'Реши уравнение: 2x + 5 = 15',
    correctAnswer: 'x = 5',
    options: ['x = 5', 'x = 10', 'x = 7', 'x = 4'],
    category: 'algebra',
    difficulty: 1,
    explanation: '2x + 5 = 15 → 2x = 15 - 5 → 2x = 10 → x = 10 ÷ 2 → x = 5'
  },
  {
    question: 'Реши уравнение: 3x - 7 = 14',
    correctAnswer: 'x = 7',
    options: ['x = 5', 'x = 7', 'x = 6', 'x = 8'],
    category: 'algebra',
    difficulty: 1,
    explanation: '3x - 7 = 14 → 3x = 14 + 7 → 3x = 21 → x = 21 ÷ 3 → x = 7'
  },
  {
    question: 'Найди значение выражения: 5² - 3²',
    correctAnswer: '16',
    options: ['14', '16', '8', '4'],
    category: 'algebra',
    difficulty: 1,
    explanation: '5² - 3² = 25 - 9 = 16. Или по формуле разности квадратов: (5-3)(5+3) = 2 × 8 = 16'
  },
  {
    question: 'Упрости выражение: 4x + 3x - 2x',
    correctAnswer: '5x',
    options: ['5x', '6x', '4x', '9x'],
    category: 'algebra',
    difficulty: 1,
    explanation: '4x + 3x - 2x = (4 + 3 - 2)x = 5x. Приводим подобные слагаемые.'
  },
  {
    question: 'Реши уравнение: x/3 = 9',
    correctAnswer: 'x = 27',
    options: ['x = 3', 'x = 12', 'x = 27', 'x = 6'],
    category: 'algebra',
    difficulty: 1,
    explanation: 'x/3 = 9 → x = 9 × 3 → x = 27. Умножаем обе части уравнения на 3.'
  },

  // === АЛГЕБРА (difficulty 2) - 8-9 класс ===
  {
    question: 'Реши квадратное уравнение: x² - 9 = 0',
    correctAnswer: 'x = ±3',
    options: ['x = 3', 'x = ±3', 'x = 9', 'x = ±9'],
    category: 'algebra',
    difficulty: 2,
    explanation: 'x² - 9 = 0 → x² = 9 → x = ±√9 = ±3. Два корня: x = 3 и x = -3'
  },
  {
    question: 'Найди корни уравнения: x² - 5x + 6 = 0',
    correctAnswer: 'x = 2 и x = 3',
    options: ['x = 1 и x = 6', 'x = 2 и x = 3', 'x = -2 и x = -3', 'x = 2 и x = 4'],
    category: 'algebra',
    difficulty: 2,
    explanation: 'По теореме Виета: x₁ + x₂ = 5, x₁ × x₂ = 6. Корни: x₁ = 2, x₂ = 3'
  },
  {
    question: 'Реши неравенство: 2x - 4 > 6',
    correctAnswer: 'x > 5',
    options: ['x > 5', 'x > 2', 'x < 5', 'x < 2'],
    category: 'algebra',
    difficulty: 2,
    explanation: '2x - 4 > 6 → 2x > 10 → x > 5. При делении на положительное число знак неравенства не меняется.'
  },
  {
    question: 'Найди дискриминант уравнения: x² - 6x + 8 = 0',
    correctAnswer: 'D = 4',
    options: ['D = 4', 'D = 2', 'D = 28', 'D = -8'],
    category: 'algebra',
    difficulty: 2,
    explanation: 'D = b² - 4ac = (-6)² - 4×1×8 = 36 - 32 = 4. D > 0, значит два корня.'
  },
  {
    question: 'Разложи на множители: x² - 16',
    correctAnswer: '(x - 4)(x + 4)',
    options: ['(x - 4)(x + 4)', '(x - 8)(x + 2)', '(x - 4)²', '(x + 4)²'],
    category: 'algebra',
    difficulty: 2,
    explanation: 'Это разность квадратов: a² - b² = (a - b)(a + b). x² - 16 = x² - 4² = (x - 4)(x + 4)'
  },

  // === АЛГЕБРА (difficulty 3) - 10-11 класс + ЕГЭ ===
  {
    question: 'Реши уравнение: log₂(x + 1) = 3',
    correctAnswer: 'x = 7',
    options: ['x = 7', 'x = 8', 'x = 2', 'x = 9'],
    category: 'algebra',
    difficulty: 3,
    explanation: 'log₂(x + 1) = 3 → x + 1 = 2³ → x + 1 = 8 → x = 7. По определению логарифма.',
    hint: 'Логарифм — это показатель степени: log₂(8) = 3, так как 2³ = 8'
  },
  {
    question: 'Найди область определения функции: y = √(x - 4)',
    correctAnswer: 'x ≥ 4',
    options: ['x > 4', 'x ≥ 4', 'x ≥ 0', 'x > 0'],
    category: 'algebra',
    difficulty: 3,
    explanation: 'Подкоренное выражение должно быть неотрицательным: x - 4 ≥ 0 → x ≥ 4',
    hint: 'Под корнем не может быть отрицательное число'
  },
  {
    question: 'Найди производную функции: f(x) = x³ + 2x',
    correctAnswer: "f'(x) = 3x² + 2",
    options: ["f'(x) = 3x² + 2", "f'(x) = x² + 2", "f'(x) = 3x²", "f'(x) = 3x + 2"],
    category: 'algebra',
    difficulty: 3,
    explanation: "По правилу: (xⁿ)' = n·xⁿ⁻¹. f'(x) = 3x² + 2",
    hint: 'Производная x³ равна 3x², производная 2x равна 2'
  },
  {
    question: 'Вычисли: 2log₂(5)',
    correctAnswer: '25',
    options: ['5', '25', '10', '32'],
    category: 'algebra',
    difficulty: 3,
    explanation: '2log₂(5) = log₂(5²) = log₂(25). По свойству: a·log_b(c) = log_b(c^a)',
    hint: 'Коэффициент перед логарифмом можно внести в степень аргумента'
  },

  // === ГЕОМЕТРИЯ (difficulty 1) - 5-7 класс ===
  {
    question: 'Чему равна площадь прямоугольника со сторонами 5 и 8?',
    correctAnswer: '40',
    options: ['26', '40', '13', '45'],
    category: 'geometry',
    difficulty: 1,
    explanation: 'S = a × b = 5 × 8 = 40. Площадь прямоугольника равна произведению его сторон.'
  },
  {
    question: 'Чему равен периметр квадрата со стороной 6?',
    correctAnswer: '24',
    options: ['12', '36', '24', '18'],
    category: 'geometry',
    difficulty: 1,
    explanation: 'P = 4 × a = 4 × 6 = 24. Периметр квадрата — сумма всех четырёх сторон.'
  },
  {
    question: 'Найди площадь треугольника с основанием 10 и высотой 6',
    correctAnswer: '30',
    options: ['60', '16', '30', '36'],
    category: 'geometry',
    difficulty: 1,
    explanation: 'S = ½ × a × h = ½ × 10 × 6 = 30. Площадь треугольника — половина произведения основания на высоту.'
  },
  {
    question: 'Сколько градусов в прямом угле?',
    correctAnswer: '90°',
    options: ['180°', '90°', '45°', '60°'],
    category: 'geometry',
    difficulty: 1,
    explanation: 'Прямой угол равен 90°. Это четверть полного круга (360° ÷ 4 = 90°).'
  },
  {
    question: 'Чему равна сумма углов треугольника?',
    correctAnswer: '180°',
    options: ['360°', '180°', '90°', '270°'],
    category: 'geometry',
    difficulty: 1,
    explanation: 'Сумма углов любого треугольника равна 180°. Это фундаментальное свойство евклидовой геометрии.'
  },

  // === ГЕОМЕТРИЯ (difficulty 2) - 8-9 класс ===
  {
    question: 'Чему равна площадь круга с радиусом 3?',
    correctAnswer: '9π',
    options: ['6π', '9π', '3π', '12π'],
    category: 'geometry',
    difficulty: 2,
    explanation: 'S = πr² = π × 3² = 9π. Формула площади круга через радиус.'
  },
  {
    question: 'Найди длину окружности с радиусом 5 (ответ через π)',
    correctAnswer: '10π',
    options: ['5π', '10π', '25π', '2π'],
    category: 'geometry',
    difficulty: 2,
    explanation: 'C = 2πr = 2 × π × 5 = 10π. Длина окружности равна двум радиусам, умноженным на π.'
  },
  {
    question: 'По теореме Пифагора найди гипотенузу, если катеты равны 3 и 4',
    correctAnswer: '5',
    options: ['5', '7', '6', '8'],
    category: 'geometry',
    difficulty: 2,
    explanation: 'c² = a² + b² = 3² + 4² = 9 + 16 = 25 → c = 5. Это знаменитый "египетский треугольник"!'
  },
  {
    question: 'Чему равна площадь трапеции с основаниями 6 и 10 и высотой 4?',
    correctAnswer: '32',
    options: ['24', '32', '40', '16'],
    category: 'geometry',
    difficulty: 2,
    explanation: 'S = ½ × (a + b) × h = ½ × (6 + 10) × 4 = ½ × 16 × 4 = 32'
  },
  {
    question: 'Найди площадь ромба с диагоналями 8 и 6',
    correctAnswer: '24',
    options: ['48', '24', '14', '28'],
    category: 'geometry',
    difficulty: 2,
    explanation: 'S = ½ × d₁ × d₂ = ½ × 8 × 6 = 24. Площадь ромба равна половине произведения диагоналей.'
  },

  // === ГЕОМЕТРИЯ (difficulty 3) - 10-11 класс + ЕГЭ ===
  {
    question: 'Найди объём шара с радиусом 3',
    correctAnswer: '36π',
    options: ['12π', '36π', '9π', '27π'],
    category: 'geometry',
    difficulty: 3,
    explanation: 'V = ⁴⁄₃πr³ = ⁴⁄₃ × π × 27 = 36π. Объём шара вычисляется по формуле V = ⁴⁄₃πr³',
    hint: 'Формула объёма шара: V = 4/3 × π × r³'
  },
  {
    question: 'Найди площадь боковой поверхности цилиндра с радиусом 2 и высотой 5 (ответ через π)',
    correctAnswer: '20π',
    options: ['10π', '20π', '4π', '40π'],
    category: 'geometry',
    difficulty: 3,
    explanation: 'Sбок = 2πrh = 2 × π × 2 × 5 = 20π. Боковая поверхность цилиндра "разворачивается" в прямоугольник.',
    hint: 'Боковая поверхность цилиндра — это прямоугольник со сторонами 2πr и h'
  },
  {
    question: 'Чему равен объём куба с ребром 4?',
    correctAnswer: '64',
    options: ['16', '12', '64', '48'],
    category: 'geometry',
    difficulty: 3,
    explanation: 'V = a³ = 4³ = 64. Объём куба равен кубу его ребра.'
  },
  {
    question: 'Найди площадь поверхности куба с ребром 3',
    correctAnswer: '54',
    options: ['27', '9', '54', '36'],
    category: 'geometry',
    difficulty: 3,
    explanation: 'S = 6a² = 6 × 3² = 6 × 9 = 54. У куба 6 граней, каждая — квадрат со стороной a.',
    hint: 'У куба 6 одинаковых граней'
  },

  // === СТЕПЕНИ И КОРНИ (difficulty 1) - 5-7 класс ===
  {
    question: 'Вычисли: 2³',
    correctAnswer: '8',
    options: ['6', '8', '9', '5'],
    category: 'powers',
    difficulty: 1,
    explanation: '2³ = 2 × 2 × 2 = 8. Степень показывает, сколько раз число умножается само на себя.'
  },
  {
    question: 'Вычисли: 3²',
    correctAnswer: '9',
    options: ['6', '9', '8', '27'],
    category: 'powers',
    difficulty: 1,
    explanation: '3² = 3 × 3 = 9. "Три в квадрате" означает три, умноженное на себя.'
  },
  {
    question: 'Вычисли: 10²',
    correctAnswer: '100',
    options: ['20', '100', '1000', '50'],
    category: 'powers',
    difficulty: 1,
    explanation: '10² = 10 × 10 = 100. Квадрат числа 10 равен 100.'
  },
  {
    question: 'Чему равен √16?',
    correctAnswer: '4',
    options: ['2', '4', '8', '16'],
    category: 'powers',
    difficulty: 1,
    explanation: '√16 = 4, так как 4² = 16. Квадратный корень — число, которое в квадрате даёт 16.'
  },
  {
    question: 'Чему равен √25?',
    correctAnswer: '5',
    options: ['10', '5', '25', '15'],
    category: 'powers',
    difficulty: 1,
    explanation: '√25 = 5, так как 5² = 25. Квадратный корень из 25 равен 5.'
  },

  // === СТЕПЕНИ И КОРНИ (difficulty 2) - 8-9 класс ===
  {
    question: 'Вычисли: 2³ × 2²',
    correctAnswer: '32',
    options: ['10', '32', '12', '64'],
    category: 'powers',
    difficulty: 2,
    explanation: '2³ × 2² = 2³⁺² = 2⁵ = 32. При умножении степеней с одинаковым основанием показатели складываются.'
  },
  {
    question: 'Вычисли: 5⁶ ÷ 5⁴',
    correctAnswer: '25',
    options: ['5', '25', '125', '1'],
    category: 'powers',
    difficulty: 2,
    explanation: '5⁶ ÷ 5⁴ = 5⁶⁻⁴ = 5² = 25. При делении степеней показатели вычитаются.'
  },
  {
    question: 'Упрости: (3²)³',
    correctAnswer: '729',
    options: ['27', '729', '81', '243'],
    category: 'powers',
    difficulty: 2,
    explanation: '(3²)³ = 3²ˣ³ = 3⁶ = 729. При возведении степени в степень показатели перемножаются.'
  },
  {
    question: 'Вычисли: √144',
    correctAnswer: '12',
    options: ['14', '12', '72', '11'],
    category: 'powers',
    difficulty: 2,
    explanation: '√144 = 12, так как 12² = 144. Полезно запомнить квадраты чисел от 1 до 15!'
  },
  {
    question: 'Вычисли: √50 × √2',
    correctAnswer: '10',
    options: ['100', '10', '√100', '52'],
    category: 'powers',
    difficulty: 2,
    explanation: '√50 × √2 = √(50 × 2) = √100 = 10. Корни можно перемножать под одним знаком корня.'
  },

  // === СТЕПЕНИ И КОРНИ (difficulty 3) - 10-11 класс + ЕГЭ ===
  {
    question: 'Вычисли: 27^(2/3)',
    correctAnswer: '9',
    options: ['3', '9', '18', '81'],
    category: 'powers',
    difficulty: 3,
    explanation: '27^(2/3) = (∛27)² = 3² = 9. Дробная степень: числитель — степень, знаменатель — корень.',
    hint: 'Степень 2/3 означает: кубический корень, затем возвести в квадрат'
  },
  {
    question: 'Упрости: √18 + √50 - √98',
    correctAnswer: '2√2',
    options: ['√2', '2√2', '4√2', '0'],
    category: 'powers',
    difficulty: 3,
    explanation: '√18 + √50 - √98 = 3√2 + 5√2 - 7√2 = √2',
    hint: 'Вынеси множители из-под корня: √18 = √(9×2) = 3√2'
  },
  {
    question: 'Вычисли: 4^(-1.5)',
    correctAnswer: '1/8',
    options: ['1/2', '1/8', '1/16', '8'],
    category: 'powers',
    difficulty: 3,
    explanation: '4^(-1.5) = 4^(-3/2) = 1/(4^(3/2)) = 1/(√4)³ = 1/8',
    hint: 'Отрицательная степень: a^(-n) = 1/a^n'
  },

  // === ТРИГОНОМЕТРИЯ (difficulty 1) - базовые знания ===
  {
    question: 'Чему равен sin 30°?',
    correctAnswer: '0,5',
    options: ['1', '0,5', '√2/2', '0'],
    category: 'trigonometry',
    difficulty: 1,
    explanation: 'sin 30° = 0,5 = ½. Это табличное значение: sin 30° = ½, cos 30° = √3/2'
  },
  {
    question: 'Чему равен cos 60°?',
    correctAnswer: '0,5',
    options: ['1', '0,5', '√3/2', '√2/2'],
    category: 'trigonometry',
    difficulty: 1,
    explanation: 'cos 60° = 0,5 = ½. Примечательно, что cos 60° = sin 30°!'
  },
  {
    question: 'Чему равен sin 90°?',
    correctAnswer: '1',
    options: ['0', '1', '0,5', '√2/2'],
    category: 'trigonometry',
    difficulty: 1,
    explanation: 'sin 90° = 1. Это максимальное значение синуса. В прямоугольном треугольнике это отношение гипотенузы к самой себе.'
  },
  {
    question: 'Чему равен cos 0°?',
    correctAnswer: '1',
    options: ['0', '1', '0,5', '-1'],
    category: 'trigonometry',
    difficulty: 1,
    explanation: 'cos 0° = 1. При нулевом угле прилежащий катет совпадает с гипотенузой.'
  },
  {
    question: 'Чему равен tg 45°?',
    correctAnswer: '1',
    options: ['0', '1', '√3', '√2'],
    category: 'trigonometry',
    difficulty: 1,
    explanation: 'tg 45° = sin 45° / cos 45° = (√2/2) / (√2/2) = 1. В равнобедренном прямоугольном треугольнике тангенс равен 1.'
  },

  // === ТРИГОНОМЕТРИЯ (difficulty 2) - 9-10 класс ===
  {
    question: 'Чему равен sin²x + cos²x?',
    correctAnswer: '1',
    options: ['0', '1', '2', 'sin 2x'],
    category: 'trigonometry',
    difficulty: 2,
    explanation: 'sin²x + cos²x = 1. Это основное тригонометрическое тождество!'
  },
  {
    question: 'Чему равен sin 45°?',
    correctAnswer: '√2/2',
    options: ['√3/2', '√2/2', '1/2', '1'],
    category: 'trigonometry',
    difficulty: 2,
    explanation: 'sin 45° = √2/2 ≈ 0,707. В равнобедренном прямоугольном треугольнике с катетами 1 гипотенуза равна √2.'
  },
  {
    question: 'Чему равен cos 45°?',
    correctAnswer: '√2/2',
    options: ['√3/2', '√2/2', '1/2', '1'],
    category: 'trigonometry',
    difficulty: 2,
    explanation: 'cos 45° = √2/2. Интересно, что sin 45° = cos 45° = √2/2!'
  },
  {
    question: 'Чему равен tg 30°?',
    correctAnswer: '√3/3',
    options: ['√3', '√3/3', '1', '1/2'],
    category: 'trigonometry',
    difficulty: 2,
    explanation: 'tg 30° = sin 30° / cos 30° = (1/2) / (√3/2) = 1/√3 = √3/3'
  },
  {
    question: 'Упрости: 1 - sin²x',
    correctAnswer: 'cos²x',
    options: ['sin²x', 'cos²x', 'tg²x', '1'],
    category: 'trigonometry',
    difficulty: 2,
    explanation: 'Из основного тождества sin²x + cos²x = 1 следует: 1 - sin²x = cos²x'
  },

  // === ТРИГОНОМЕТРИЯ (difficulty 3) - 10-11 класс + ЕГЭ ===
  {
    question: 'Чему равен sin 2x?',
    correctAnswer: '2sin x cos x',
    options: ['sin²x + cos²x', '2sin x cos x', 'sin x + cos x', '2sin x'],
    category: 'trigonometry',
    difficulty: 3,
    explanation: 'sin 2x = 2sin x cos x. Это формула синуса двойного угла.',
    hint: 'Формула двойного угла: sin 2x = 2sin x cos x'
  },
  {
    question: 'Чему равен cos 2x через cos²x?',
    correctAnswer: '2cos²x - 1',
    options: ['cos²x - sin²x', '2cos²x - 1', '1 - 2sin²x', 'Все варианты равны'],
    category: 'trigonometry',
    difficulty: 3,
    explanation: 'cos 2x = cos²x - sin²x = 2cos²x - 1 = 1 - 2sin²x. Все три формулы эквивалентны!',
    hint: 'Cos 2x имеет три формы записи через разные функции'
  },
  {
    question: 'Найди tg x, если sin x = 3/5 и x ∈ (0; π/2)',
    correctAnswer: '3/4',
    options: ['3/4', '4/3', '3/5', '5/4'],
    category: 'trigonometry',
    difficulty: 3,
    explanation: 'cos x = √(1 - sin²x) = √(1 - 9/25) = 4/5. tg x = sin x / cos x = (3/5)/(4/5) = 3/4',
    hint: 'Сначала найди cos x через основное тригонометрическое тождество'
  },

  // === ПРОГРЕССИИ (difficulty 1) - 5-7 класс ===
  {
    question: 'Найди 5-й член арифметической прогрессии: 2, 5, 8, 11...',
    correctAnswer: '14',
    options: ['13', '14', '15', '17'],
    category: 'progressions',
    difficulty: 1,
    explanation: 'd = 5 - 2 = 3. a₅ = a₁ + 4d = 2 + 4×3 = 14. Разность прогрессии равна 3.'
  },
  {
    question: 'Найди разность арифметической прогрессии: 3, 7, 11, 15...',
    correctAnswer: '4',
    options: ['3', '4', '7', '2'],
    category: 'progressions',
    difficulty: 1,
    explanation: 'd = a₂ - a₁ = 7 - 3 = 4. Каждое следующее число больше предыдущего на 4.'
  },
  {
    question: 'Какое число следующее в последовательности: 1, 4, 7, 10, ?',
    correctAnswer: '13',
    options: ['11', '12', '13', '14'],
    category: 'progressions',
    difficulty: 1,
    explanation: 'Это арифметическая прогрессия с d = 3. Следующее число: 10 + 3 = 13'
  },
  {
    question: 'Найди сумму первых 5 натуральных чисел: 1 + 2 + 3 + 4 + 5',
    correctAnswer: '15',
    options: ['10', '15', '12', '20'],
    category: 'progressions',
    difficulty: 1,
    explanation: 'S₅ = 1 + 2 + 3 + 4 + 5 = 15. Или по формуле: Sₙ = n(a₁ + aₙ)/2 = 5×6/2 = 15'
  },

  // === ПРОГРЕССИИ (difficulty 2) - 8-9 класс ===
  {
    question: 'Найди сумму первых 10 членов арифметической прогрессии: 1, 3, 5...',
    correctAnswer: '100',
    options: ['50', '100', '55', '90'],
    category: 'progressions',
    difficulty: 2,
    explanation: 'd = 2, a₁₀ = 1 + 9×2 = 19. S₁₀ = 10×(1 + 19)/2 = 100'
  },
  {
    question: 'Найди 6-й член геометрической прогрессии: 2, 4, 8, 16...',
    correctAnswer: '64',
    options: ['32', '64', '128', '48'],
    category: 'progressions',
    difficulty: 2,
    explanation: 'q = 4/2 = 2. b₆ = b₁ × q⁵ = 2 × 2⁵ = 2 × 32 = 64'
  },
  {
    question: 'Найди знаменатель геометрической прогрессии: 3, 6, 12, 24...',
    correctAnswer: '2',
    options: ['2', '3', '4', '6'],
    category: 'progressions',
    difficulty: 2,
    explanation: 'q = b₂/b₁ = 6/3 = 2. Каждое следующее число в 2 раза больше предыдущего.'
  },
  {
    question: 'Найди сумму первых 5 членов геометрической прогрессии: 1, 2, 4...',
    correctAnswer: '31',
    options: ['15', '31', '16', '32'],
    category: 'progressions',
    difficulty: 2,
    explanation: 'q = 2. S₅ = 1×(2⁵ - 1)/(2 - 1) = 31'
  },

  // === ПРОГРЕССИИ (difficulty 3) - 10-11 класс + ЕГЭ ===
  {
    question: 'Найди сумму бесконечной геометрической прогрессии: 1, 1/2, 1/4...',
    correctAnswer: '2',
    options: ['1', '2', '1.5', 'Бесконечна'],
    category: 'progressions',
    difficulty: 3,
    explanation: 'S = b₁/(1 - q) = 1/(1 - 1/2) = 1/(1/2) = 2. Сумма сходится, так как |q| < 1',
    hint: 'Формула суммы бесконечной ГП: S = b₁/(1 - q), если |q| < 1'
  },
  {
    question: 'Найди сумму всех натуральных чисел от 1 до 100',
    correctAnswer: '5050',
    options: ['5000', '5050', '5100', '10000'],
    category: 'progressions',
    difficulty: 3,
    explanation: 'S₁₀₀ = n(a₁ + aₙ)/2 = 100×(1 + 100)/2 = 5050. Эту сумму вычислил 7-летний Гаусс!',
    hint: 'Используй формулу суммы арифметической прогрессии'
  },
  {
    question: 'В геометрической прогрессии b₃ = 12, b₅ = 48. Найди b₄',
    correctAnswer: '24',
    options: ['30', '24', '36', '20'],
    category: 'progressions',
    difficulty: 3,
    explanation: 'b₃ × b₅ = b₄² (свойство). b₄ = √(12 × 48) = √576 = 24',
    hint: 'В ГП квадрат среднего члена равен произведению соседних: bₙ² = bₙ₋₁ × bₙ₊₁'
  },

  // === ЛОГИКА (difficulty 1) - 5-7 класс ===
  {
    question: 'Сколько трёхзначных чисел можно составить из цифр 1, 2, 3 (цифры могут повторяться)?',
    correctAnswer: '27',
    options: ['6', '9', '27', '81'],
    category: 'logic',
    difficulty: 1,
    explanation: 'На каждое из 3 мест можно поставить любую из 3 цифр: 3 × 3 × 3 = 27 вариантов'
  },
  {
    question: 'Сколько существует двузначных чисел?',
    correctAnswer: '90',
    options: ['99', '100', '90', '89'],
    category: 'logic',
    difficulty: 1,
    explanation: 'Двузначные числа: от 10 до 99. Количество: 99 - 10 + 1 = 90'
  },
  {
    question: 'Если сегодня понедельник, какой день недели будет через 100 дней?',
    correctAnswer: 'Среда',
    options: ['Понедельник', 'Среда', 'Вторник', 'Четверг'],
    category: 'logic',
    difficulty: 1,
    explanation: '100 ÷ 7 = 14 остаток 2. Через 2 дня после понедельника — среда.'
  },
  {
    question: 'Сколько диагоналей у четырёхугольника?',
    correctAnswer: '2',
    options: ['2', '4', '1', '0'],
    category: 'logic',
    difficulty: 1,
    explanation: 'У четырёхугольника 2 диагонали. Диагональ соединяет две несоседние вершины.'
  },

  // === ЛОГИКА (difficulty 2) - 8-9 класс ===
  {
    question: 'Сколькими способами можно выбрать 2 предмета из 5?',
    correctAnswer: '10',
    options: ['5', '10', '20', '15'],
    category: 'logic',
    difficulty: 2,
    explanation: 'C(5,2) = 5!/(2!×3!) = (5×4)/(2×1) = 10. Формула сочетаний.'
  },
  {
    question: 'Сколько существует перестановок из 4 элементов?',
    correctAnswer: '24',
    options: ['16', '12', '24', '4'],
    category: 'logic',
    difficulty: 2,
    explanation: 'P(4) = 4! = 4×3×2×1 = 24. Количество перестановок равно факториалу числа элементов.'
  },
  {
    question: 'Сколько диагоналей у пятиугольника?',
    correctAnswer: '5',
    options: ['3', '5', '10', '4'],
    category: 'logic',
    difficulty: 2,
    explanation: 'Формула: n(n-3)/2 = 5×2/2 = 5. Каждая вершина соединяется с n-3 другими.'
  },
  {
    question: 'В классе 20 учеников. Сколькими способами можно выбрать старосту и заместителя?',
    correctAnswer: '380',
    options: ['400', '380', '190', '40'],
    category: 'logic',
    difficulty: 2,
    explanation: 'A(20,2) = 20 × 19 = 380. Это размещения — порядок важен.'
  },

  // === ЛОГИКА (difficulty 3) - 10-11 класс + ЕГЭ ===
  {
    question: 'Сколькими способами можно расставить 5 книг на полке, если 2 определённые должны стоять рядом?',
    correctAnswer: '48',
    options: ['24', '48', '120', '60'],
    category: 'logic',
    difficulty: 3,
    explanation: 'Две книги как один объект: 4! × 2! = 24 × 2 = 48. 2! — перестановки внутри пары.',
    hint: 'Рассмотри 2 книги как один объект, затем умножь на перестановки внутри пары'
  },
  {
    question: 'Вероятность выпадения орла 3 раза подряд при броске монеты:',
    correctAnswer: '1/8',
    options: ['1/2', '1/4', '1/8', '1/6'],
    category: 'logic',
    difficulty: 3,
    explanation: 'P = (1/2)³ = 1/8. Независимые события перемножаются.',
    hint: 'Вероятности независимых событий перемножаются'
  },
  {
    question: 'Сколько существует трёхзначных чисел, сумма цифр которых равна 5?',
    correctAnswer: '15',
    options: ['10', '15', '21', '12'],
    category: 'logic',
    difficulty: 3,
    explanation: 'Нужно перебрать случаи: 104, 113, 122, 131, 140, 203, 212, 221, 230, 302, 311, 320, 401, 410, 500. Всего 15.',
    hint: 'Перебери все комбинации трёх цифр, дающих в сумме 5'
  },
  {
    question: 'Найди количество способов разложить 6 одинаковых шаров по 3 разным ящикам',
    correctAnswer: '28',
    options: ['18', '21', '28', '36'],
    category: 'logic',
    difficulty: 3,
    explanation: 'C(6+3-1, 3-1) = C(8,2) = 28. Формула "звёзд и палочек" для комбинаций с повторениями.',
    hint: 'Используй формулу сочетаний с повторениями: C(n+k-1, k-1)'
  }
]

// Настройки сложности
const difficultySettings = {
  0: { name: 'Лёгкий', description: '5-7 класс', count: 10, time: 25, diffLevel: 1, xp: 80 },
  1: { name: 'Средний', description: '8-9 класс', count: 12, time: 20, diffLevel: 2, xp: 110 },
  2: { name: 'Сложный', description: '10-11 класс + ОГЭ/ЕГЭ', count: 15, time: 15, diffLevel: 3, xp: 140 }
}

// Настройки категорий
const categorySettings = {
  algebra: { name: 'Алгебра', icon: '📐', color: 'from-blue-400 to-cyan-500', iconComponent: Calculator },
  geometry: { name: 'Геометрия', icon: '📏', color: 'from-green-400 to-emerald-500', iconComponent: Triangle },
  powers: { name: 'Степени и корни', icon: '📊', color: 'from-purple-400 to-violet-500', iconComponent: Zap },
  trigonometry: { name: 'Тригонометрия', icon: '📈', color: 'from-orange-400 to-amber-500', iconComponent: Sigma },
  progressions: { name: 'Прогрессии', icon: '🔢', color: 'from-pink-400 to-rose-500', iconComponent: Star },
  logic: { name: 'Логика', icon: '🧩', color: 'from-indigo-400 to-blue-500', iconComponent: Brain }
}

export default function AdvancedMathGame({ gradeId = 0, onExperience }: AdvancedMathGameProps) {
  const { playSuccess, playError, playWin, playLevelUp } = useSound()
  
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'result'>('setup')
  const [difficulty, setDifficulty] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<MathCategory | 'all'>('all')
  
  const [currentQuestions, setCurrentQuestions] = useState<MathQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [hearts, setHearts] = useState(3)
  const [timeLeft, setTimeLeft] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  
  const currentQuestion = currentQuestions[currentIndex]
  const settings = difficultySettings[difficulty as keyof typeof difficultySettings]
  
  // Инициализация игры
  const startGame = useCallback(() => {
    const settings = difficultySettings[difficulty as keyof typeof difficultySettings]
    
    // Фильтруем вопросы по категории и сложности
    let filteredQuestions = questions.filter(q => {
      const diffMatch = q.difficulty <= settings.diffLevel
      const catMatch = selectedCategory === 'all' || q.category === selectedCategory
      return diffMatch && catMatch
    })
    
    // Перемешиваем
    filteredQuestions = [...filteredQuestions].sort(() => Math.random() - 0.5)
    
    // Берём нужное количество
    const gameQuestions = filteredQuestions.slice(0, settings.count)
    
    setCurrentQuestions(gameQuestions)
    setCurrentIndex(0)
    setScore(0)
    setStreak(0)
    setMaxStreak(0)
    setHearts(3)
    setTimeLeft(settings.time)
    setAnswered(false)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setGameState('playing')
  }, [difficulty, selectedCategory])
  
  // Генерация перемешанных вариантов ответа
  const shuffledOptions = useMemo(() => {
    if (!currentQuestion) return []
    return [...currentQuestion.options].sort(() => Math.random() - 0.5)
  }, [currentQuestion])
  
  // Обработка таймаута
  const handleTimeout = useCallback(() => {
    if (!answered) {
      playError()
      setAnswered(true)
      setStreak(0)
      setHearts(prev => prev - 1)
    }
  }, [answered, playError])
  
  // Завершение игры
  const endGame = useCallback(() => {
    playWin()
    const settings = difficultySettings[difficulty as keyof typeof difficultySettings]
    const earnedXP = Math.round((score / (settings.count * 10)) * settings.xp)
    onExperience?.(earnedXP)
    setGameState('result')
  }, [playWin, score, difficulty, onExperience])
  
  // Следующий вопрос
  const nextQuestion = useCallback(() => {
    const settings = difficultySettings[difficulty as keyof typeof difficultySettings]
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setTimeLeft(settings.time)
      setAnswered(false)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      endGame()
    }
  }, [currentIndex, currentQuestions.length, difficulty, endGame])
  
  // Таймер
  useEffect(() => {
    const settings = difficultySettings[difficulty as keyof typeof difficultySettings]
    if (gameState === 'playing' && settings.time > 0 && !answered) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleTimeout()
            return settings.time
          }
          return prev - 1
        })
      }, 1000)
      
      return () => clearInterval(timer)
    }
  }, [gameState, answered, difficulty, handleTimeout])
  
  // Автопереход после ответа
  useEffect(() => {
    if (answered) {
      const timer = setTimeout(() => {
        if (hearts <= 0) {
          endGame()
        } else {
          nextQuestion()
        }
      }, showExplanation ? 3500 : 2000)
      return () => clearTimeout(timer)
    }
  }, [answered, hearts, showExplanation, endGame, nextQuestion])
  
  // Обработка ответа
  const handleAnswer = (index: number) => {
    if (answered) return
    
    const answer = shuffledOptions[index]
    const isCorrect = answer === currentQuestion.correctAnswer
    setSelectedAnswer(index)
    setAnswered(true)
    
    if (isCorrect) {
      playSuccess()
      const streakBonus = Math.min(streak * 2, 10)
      setScore(prev => prev + 10 + streakBonus)
      setStreak(prev => {
        const newStreak = prev + 1
        if (newStreak > maxStreak) setMaxStreak(newStreak)
        if (newStreak === 5) playLevelUp()
        return newStreak
      })
    } else {
      playError()
      setStreak(0)
      setHearts(prev => prev - 1)
    }
    
    setShowExplanation(true)
  }

  // Рендер экрана настройки
  if (gameState === 'setup') {
    return (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
            <span className="text-3xl">🧮</span>
            Математика Продвинутый
            <span className="text-3xl">📐</span>
          </h2>
          <p className="text-gray-400">Алгебра, геометрия, тригонометрия и логика!</p>
        </motion.div>
        
        {/* Выбор категории */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Calculator className="w-5 h-5 text-blue-400" />
              Категория
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <motion.button
              onClick={() => setSelectedCategory('all')}
              className={`p-3 rounded-xl border-2 transition-all ${
                selectedCategory === 'all'
                  ? 'border-blue-400 bg-blue-400/20'
                  : 'border-white/20 hover:border-white/40'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl">📝</span>
              <div className="font-bold mt-1">Все темы</div>
            </motion.button>
            
            {Object.entries(categorySettings).map(([key, value]) => (
              <motion.button
                key={key}
                onClick={() => setSelectedCategory(key as MathCategory)}
                className={`p-3 rounded-xl border-2 transition-all ${
                  selectedCategory === key
                    ? 'border-blue-400 bg-blue-400/20'
                    : 'border-white/20 hover:border-white/40'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-2xl">{value.icon}</span>
                <div className="font-bold mt-1 text-sm">{value.name}</div>
              </motion.button>
            ))}
          </CardContent>
        </Card>
        
        {/* Выбор сложности */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              Уровень сложности
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {Object.entries(difficultySettings).map(([key, value]) => (
              <motion.button
                key={key}
                onClick={() => setDifficulty(Number(key))}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                  difficulty === Number(key)
                    ? 'border-yellow-400 bg-yellow-400/20'
                    : 'border-white/20 hover:border-white/40'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold">{value.name}</div>
                    <div className="text-sm text-gray-400">{value.description}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">{value.count} вопросов</div>
                    <div className="text-sm text-yellow-400">+{value.xp} XP</div>
                    {value.time > 0 && (
                      <div className="text-xs text-gray-500">⏱ {value.time} сек</div>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </CardContent>
        </Card>
        
        {/* Кнопка старт */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button
            onClick={startGame}
            className="w-full py-6 text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
          >
            <Sparkles className="w-6 h-6 mr-2" />
            Начать игру
          </Button>
        </motion.div>
      </div>
    )
  }

  // Рендер результата
  if (gameState === 'result') {
    const settings = difficultySettings[difficulty as keyof typeof difficultySettings]
    const earnedXP = Math.round((score / (settings.count * 10)) * settings.xp)
    const percentage = Math.round((score / (settings.count * 10)) * 100)
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-6"
      >
        <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-400/30">
          <CardContent className="p-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
            >
              <Trophy className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
            </motion.div>
            
            <h2 className="text-2xl font-bold mb-2">
              {percentage >= 80 ? 'Отлично! 🌟' : percentage >= 50 ? 'Хорошо! 👍' : 'Попробуй ещё раз! 💪'}
            </h2>
            
            <div className="grid grid-cols-3 gap-4 my-6">
              <div className="bg-white/10 rounded-xl p-3">
                <div className="text-3xl font-bold text-blue-400">{score}</div>
                <div className="text-sm text-gray-400">Очки</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3">
                <div className="text-3xl font-bold text-yellow-400">{earnedXP}</div>
                <div className="text-sm text-gray-400">XP</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3">
                <div className="text-3xl font-bold text-orange-400">{maxStreak}</div>
                <div className="text-sm text-gray-400">Макс. серия</div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-4 mb-4">
              <div className="flex justify-between mb-2">
                <span>Правильных ответов</span>
                <span>{Math.round(score / 10)} / {settings.count}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  className={`h-3 rounded-full ${
                    percentage >= 80 ? 'bg-green-500' : percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button
                onClick={() => setGameState('setup')}
                variant="outline"
                className="flex-1"
              >
                К настройкам
              </Button>
              <Button
                onClick={startGame}
                className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500"
              >
                Ещё раз
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  // Рендер игры
  return (
    <div className="space-y-4">
      {/* Заголовок с прогрессом */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-400">
            Вопрос {currentIndex + 1}/{currentQuestions.length}
          </div>
          <div className="flex gap-1">
            {[1, 2, 3].map(h => (
              <Heart
                key={h}
                className={`w-5 h-5 ${h <= hearts ? 'text-red-500 fill-red-500' : 'text-gray-600'}`}
              />
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {streak >= 3 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 text-orange-400"
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm font-bold">x{streak}</span>
            </motion.div>
          )}
          
          {settings.time > 0 && (
            <div className={`flex items-center gap-1 ${
              timeLeft <= 5 ? 'text-red-400' : 'text-gray-400'
            }`}>
              <Clock className="w-4 h-4" />
              <span className="font-mono">{timeLeft}</span>
            </div>
          )}
          
          <div className="flex items-center gap-1 text-yellow-400">
            <Star className="w-4 h-4" />
            <span className="font-bold">{score}</span>
          </div>
        </div>
      </motion.div>
      
      {/* Прогресс-бар */}
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / currentQuestions.length) * 100}%` }}
        />
      </div>
      
      {/* Карточка вопроса */}
      {currentQuestion && (
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          {/* Категория */}
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${categorySettings[currentQuestion.category].color} bg-opacity-20`}>
            <span>{categorySettings[currentQuestion.category].icon}</span>
            <span className="text-sm font-medium">{categorySettings[currentQuestion.category].name}</span>
          </div>
          
          {/* Вопрос */}
          <Card className={`bg-white/5 border-white/10 ${answered ? 'border-2' : ''} ${
            answered && selectedAnswer !== null && shuffledOptions[selectedAnswer] === currentQuestion.correctAnswer
              ? 'border-green-500'
              : answered
              ? 'border-red-500'
              : ''
          }`}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{currentQuestion.question}</h3>
              
              {/* Подсказка для сложных вопросов */}
              {currentQuestion.hint && !answered && difficulty === 2 && (
                <div className="text-sm text-gray-500 italic mb-4">
                  💡 Подсказка: {currentQuestion.hint}
                </div>
              )}
              
              {/* Варианты ответов */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {shuffledOptions.map((option, index) => {
                  const isSelected = selectedAnswer === index
                  const isCorrect = option === currentQuestion.correctAnswer
                  
                  let buttonClass = 'bg-white/10 hover:bg-white/20 border-white/20'
                  
                  if (answered) {
                    if (isCorrect) {
                      buttonClass = 'bg-green-500/30 border-green-500 text-green-300'
                    } else if (isSelected && !isCorrect) {
                      buttonClass = 'bg-red-500/30 border-red-500 text-red-300'
                    } else {
                      buttonClass = 'bg-white/5 border-white/10 opacity-50'
                    }
                  }
                  
                  return (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={answered}
                      className={`p-4 rounded-xl border-2 text-left font-medium transition-all ${buttonClass}`}
                      whileHover={!answered ? { scale: 1.02 } : {}}
                      whileTap={!answered ? { scale: 0.98 } : {}}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {answered && isCorrect && (
                          <Check className="w-5 h-5 text-green-400" />
                        )}
                        {answered && isSelected && !isCorrect && (
                          <X className="w-5 h-5 text-red-400" />
                        )}
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </CardContent>
          </Card>
          
          {/* Объяснение */}
          <AnimatePresence>
            {answered && showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <Card className={`bg-white/5 border-white/10 ${
                  shuffledOptions[selectedAnswer!] === currentQuestion.correctAnswer
                    ? 'border-l-4 border-l-green-500'
                    : 'border-l-4 border-l-red-500'
                }`}>
                  <CardContent className="p-4">
                    <div className="font-bold mb-1">
                      {shuffledOptions[selectedAnswer!] === currentQuestion.correctAnswer
                        ? '✅ Правильно!'
                        : '❌ Неправильно'}
                    </div>
                    <p className="text-gray-300 text-sm">{currentQuestion.explanation}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  )
}
