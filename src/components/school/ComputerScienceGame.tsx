'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HelpCircle, Trophy, RotateCcw, Star, Zap, Monitor, Code, Cpu, Globe, Database, Binary } from 'lucide-react'
import { useSound } from '@/hooks/useSound'

// Типы
interface ComputerScienceQuestion {
  question: string
  correctAnswer: string
  options: string[]
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: 'basics' | 'algorithms' | 'programming' | 'computer' | 'networks' | 'data'
  categoryLabel: string
  funFact?: string
}

// База вопросов по информатике (55 вопросов)
const computerScienceQuestions: ComputerScienceQuestion[] = [
  // === ОСНОВЫ ИНФОРМАТИКИ (basics) - Лёгкий уровень ===
  {
    question: 'Сколько бит в одном байте?',
    correctAnswer: '8 бит',
    options: ['8 бит', '4 бита', '16 бит', '10 бит'],
    explanation: 'В одном байте содержится 8 бит. Это стандартная единица измерения информации.',
    difficulty: 'easy',
    category: 'basics',
    categoryLabel: 'Основы информатики',
    funFact: 'Байт был выбран как минимальная единица для хранения одного символа.'
  },
  {
    question: 'Как называется наименьшая единица информации?',
    correctAnswer: 'Бит',
    options: ['Бит', 'Байт', 'Ниббл', 'Слово'],
    explanation: 'Бит — наименьшая единица измерения информации, может принимать значения 0 или 1.',
    difficulty: 'easy',
    category: 'basics',
    categoryLabel: 'Основы информатики',
    funFact: 'Слово «бит» происходит от англ. binary digit — двоичная цифра.'
  },
  {
    question: 'Какая система счисления используется в компьютерах?',
    correctAnswer: 'Двоичная',
    options: ['Двоичная', 'Десятичная', 'Шестнадцатеричная', 'Восьмеричная'],
    explanation: 'Компьютеры работают в двоичной системе счисления (0 и 1), так как электронные элементы имеют два состояния.',
    difficulty: 'easy',
    category: 'basics',
    categoryLabel: 'Основы информатики',
    funFact: 'Двоичную систему предложил Готфрид Лейбниц в 1703 году.'
  },
  {
    question: 'Чему равно число 10 в двоичной системе?',
    correctAnswer: '2',
    options: ['2', '10', '3', '1'],
    explanation: '10₂ = 1×2¹ + 0×2⁰ = 2 + 0 = 2 в десятичной системе.',
    difficulty: 'easy',
    category: 'basics',
    categoryLabel: 'Основы информатики'
  },
  {
    question: 'Сколько байт в одном килобайте (КБ)?',
    correctAnswer: '1024 байта',
    options: ['1024 байта', '1000 байт', '512 байт', '2048 байт'],
    explanation: '1 КБ = 1024 байта = 2¹⁰ байт. Это связано с двоичной системой счисления.',
    difficulty: 'easy',
    category: 'basics',
    categoryLabel: 'Основы информатики',
    funFact: 'Производители дисков используют 1000 байт, а Windows показывает 1024.'
  },
  {
    question: 'Какой символ обозначает мегабайт?',
    correctAnswer: 'МБ',
    options: ['МБ', 'МГ', 'Мб', 'MB'],
    explanation: 'Мегабайт обозначается как МБ (кириллицей) или MB (латиницей).',
    difficulty: 'easy',
    category: 'basics',
    categoryLabel: 'Основы информатики'
  },
  // === ОСНОВЫ ИНФОРМАТИКИ - Средний уровень ===
  {
    question: 'Переведите число 15 в двоичную систему счисления:',
    correctAnswer: '1111',
    options: ['1111', '1010', '1100', '1110'],
    explanation: '15₁₀ = 8 + 4 + 2 + 1 = 1111₂. Каждый бит представляет степень двойки.',
    difficulty: 'medium',
    category: 'basics',
    categoryLabel: 'Основы информатики',
    funFact: 'Числа из одних единиц в двоичной системе — это степени двойки минус 1.'
  },
  {
    question: 'Какое число обозначает шестнадцатеричная цифра A?',
    correctAnswer: '10',
    options: ['10', '11', '12', '1'],
    explanation: 'В шестнадцатеричной системе: A=10, B=11, C=12, D=13, E=14, F=15.',
    difficulty: 'medium',
    category: 'basics',
    categoryLabel: 'Основы информатики',
    funFact: 'Шестнадцатеричная система удобна для записи двоичных чисел кратко.'
  },
  {
    question: 'Чему равен 1 гигабайт в мегабайтах?',
    correctAnswer: '1024 МБ',
    options: ['1024 МБ', '1000 МБ', '512 МБ', '2048 МБ'],
    explanation: '1 ГБ = 1024 МБ = 2¹⁰ МБ. Каждая следующая единица в 1024 раза больше.',
    difficulty: 'medium',
    category: 'basics',
    categoryLabel: 'Основы информатики'
  },
  {
    question: 'Что такое информационный объём сообщения?',
    correctAnswer: 'Количество информации в битах/байтах',
    options: ['Количество информации в битах/байтах', 'Длина текста', 'Количество слов', 'Время передачи'],
    explanation: 'Информационный объём — это количество информации, измеряемое в битах, байтах и их производных.',
    difficulty: 'medium',
    category: 'basics',
    categoryLabel: 'Основы информатики'
  },
  // === ОСНОВЫ ИНФОРМАТИКИ - Сложный уровень ===
  {
    question: 'Переведите число AF из шестнадцатеричной в десятичную систему:',
    correctAnswer: '175',
    options: ['175', '165', '185', '195'],
    explanation: 'AF₁₆ = 10×16 + 15 = 160 + 15 = 175₁₀',
    difficulty: 'hard',
    category: 'basics',
    categoryLabel: 'Основы информатики',
    funFact: 'Шестнадцатеричные числа часто используются в программировании.'
  },
  {
    question: 'Сколько различных значений можно закодировать 8 битами?',
    correctAnswer: '256',
    options: ['256', '128', '512', '64'],
    explanation: '8 бит могут хранить 2⁸ = 256 различных значений (от 0 до 255).',
    difficulty: 'hard',
    category: 'basics',
    categoryLabel: 'Основы информатики',
    funFact: 'Поэтому в таблице ASCII 256 символов.'
  },
  
  // === АЛГОРИТМЫ (algorithms) - Лёгкий уровень ===
  {
    question: 'Какой алгоритм повторяет действия несколько раз?',
    correctAnswer: 'Циклический',
    options: ['Циклический', 'Линейный', 'Разветвляющийся', 'Рекурсивный'],
    explanation: 'Циклический алгоритм содержит повторяющиеся действия (цикл).',
    difficulty: 'easy',
    category: 'algorithms',
    categoryLabel: 'Алгоритмы',
    funFact: 'Циклы позволяют выполнять одни и те же действия много раз.'
  },
  {
    question: 'Какой алгоритм выполняется строго по порядку?',
    correctAnswer: 'Линейный',
    options: ['Линейный', 'Циклический', 'Разветвляющийся', 'Ветвящийся'],
    explanation: 'Линейный алгоритм выполняет команды последовательно, одну за другой.',
    difficulty: 'easy',
    category: 'algorithms',
    categoryLabel: 'Алгоритмы'
  },
  {
    question: 'Какой алгоритм содержит условие?',
    correctAnswer: 'Разветвляющийся',
    options: ['Разветвляющийся', 'Линейный', 'Циклический', 'Последовательный'],
    explanation: 'Разветвляющийся алгоритм содержит условие и разные ветви выполнения.',
    difficulty: 'easy',
    category: 'algorithms',
    categoryLabel: 'Алгоритмы',
    funFact: 'В программировании это конструкции if-else.'
  },
  {
    question: 'Какой фигурой обозначается начало алгоритма в блок-схеме?',
    correctAnswer: 'Овал',
    options: ['Овал', 'Прямоугольник', 'Ромб', 'Параллелограмм'],
    explanation: 'Начало и конец алгоритма обозначаются овалом (скруглённым прямоугольником).',
    difficulty: 'easy',
    category: 'algorithms',
    categoryLabel: 'Алгоритмы',
    funFact: 'Овал — это символ «терминатор» в блок-схемах.'
  },
  {
    question: 'Какой фигурой обозначается условие в блок-схеме?',
    correctAnswer: 'Ромб',
    options: ['Ромб', 'Овал', 'Прямоугольник', 'Параллелограмм'],
    explanation: 'Условие (ветвление) в блок-схеме обозначается ромбом.',
    difficulty: 'easy',
    category: 'algorithms',
    categoryLabel: 'Алгоритмы'
  },
  // === АЛГОРИТМЫ - Средний уровень ===
  {
    question: 'Какой фигурой обозначается ввод/вывод данных в блок-схеме?',
    correctAnswer: 'Параллелограмм',
    options: ['Параллелограмм', 'Прямоугольник', 'Ромб', 'Овал'],
    explanation: 'Параллелограмм используется для обозначения ввода и вывода данных.',
    difficulty: 'medium',
    category: 'algorithms',
    categoryLabel: 'Алгоритмы',
    funFact: 'Действие (процесс) обозначается прямоугольником.'
  },
  {
    question: 'Что такое итерация?',
    correctAnswer: 'Один проход цикла',
    options: ['Один проход цикла', 'Условие цикла', 'Переменная цикла', 'Выход из цикла'],
    explanation: 'Итерация — это одно выполнение тела цикла.',
    difficulty: 'medium',
    category: 'algorithms',
    categoryLabel: 'Алгоритмы',
    funFact: 'Слово «итерация» происходит от лат. iteratio — повторение.'
  },
  {
    question: 'Какой цикл выполняется хотя бы один раз?',
    correctAnswer: 'Цикл с постусловием',
    options: ['Цикл с постусловием', 'Цикл с предусловием', 'Цикл for', 'Цикл while'],
    explanation: 'Цикл с постусловием (do-while) сначала выполняет тело, потом проверяет условие.',
    difficulty: 'medium',
    category: 'algorithms',
    categoryLabel: 'Алгоритмы'
  },
  {
    question: 'Что такое рекурсия?',
    correctAnswer: 'Вызов функции самой себя',
    options: ['Вызов функции самой себя', 'Повторение кода', 'Бесконечный цикл', 'Возврат значения'],
    explanation: 'Рекурсия — это когда функция вызывает сама себя.',
    difficulty: 'medium',
    category: 'algorithms',
    categoryLabel: 'Алгоритмы',
    funFact: 'Рекурсия должна иметь базовый случай для завершения.'
  },
  // === АЛГОРИТМЫ - Сложный уровень ===
  {
    question: 'Какой алгоритм использует метод «разделяй и властвуй»?',
    correctAnswer: 'Быстрая сортировка',
    options: ['Быстрая сортировка', 'Линейный поиск', 'Сортировка выбором', 'Пузырьковая сортировка'],
    explanation: 'Быстрая сортировка (QuickSort) делит массив на части и сортирует каждую отдельно.',
    difficulty: 'hard',
    category: 'algorithms',
    categoryLabel: 'Алгоритмы',
    funFact: 'QuickSort был разработан Тони Хоаром в 1960 году.'
  },
  {
    question: 'Какова сложность бинарного поиска?',
    correctAnswer: 'O(log n)',
    options: ['O(log n)', 'O(n)', 'O(n²)', 'O(1)'],
    explanation: 'Бинарный поиск имеет логарифмическую сложность O(log n) — каждый шаг вдвое уменьшает область поиска.',
    difficulty: 'hard',
    category: 'algorithms',
    categoryLabel: 'Алгоритмы',
    funFact: 'Для массива из 1 млн элементов бинарный поиск делает максимум 20 сравнений.'
  },
  
  // === ПРОГРАММИРОВАНИЕ (programming) - Лёгкий уровень ===
  {
    question: 'Какая функция в Python выводит текст на экран?',
    correctAnswer: 'print()',
    options: ['print()', 'output()', 'write()', 'display()'],
    explanation: 'Функция print() выводит данные на экран. Пример: `print("Hello")`',
    difficulty: 'easy',
    category: 'programming',
    categoryLabel: 'Программирование',
    funFact: 'В Python 2 можно было писать print без скобок.'
  },
  {
    question: 'Какой символ используется для комментариев в Python?',
    correctAnswer: '#',
    options: ['#', '//', '/*', '--'],
    explanation: 'Символ # начинает однострочный комментарий в Python. Пример: `# это комментарий`',
    difficulty: 'easy',
    category: 'programming',
    categoryLabel: 'Программирование'
  },
  {
    question: 'Как объявить переменную в Python?',
    correctAnswer: 'x = 5',
    options: ['x = 5', 'var x = 5', 'int x = 5', 'let x = 5'],
    explanation: 'В Python переменные объявляются простым присваиванием: `x = 5`',
    difficulty: 'easy',
    category: 'programming',
    categoryLabel: 'Программирование',
    funFact: 'Python автоматически определяет тип переменной.'
  },
  {
    question: 'Какая функция в Python получает ввод от пользователя?',
    correctAnswer: 'input()',
    options: ['input()', 'get()', 'read()', 'scan()'],
    explanation: 'Функция input() считывает строку с клавиатуры. Пример: `name = input("Имя: ")`',
    difficulty: 'easy',
    category: 'programming',
    categoryLabel: 'Программирование'
  },
  {
    question: 'Какой тип данных хранит целые числа?',
    correctAnswer: 'int',
    options: ['int', 'float', 'str', 'bool'],
    explanation: 'Тип int (integer) хранит целые числа. Пример: `x = 42`',
    difficulty: 'easy',
    category: 'programming',
    categoryLabel: 'Программирование',
    funFact: 'В Python целые числа могут быть сколь угодно большими.'
  },
  {
    question: 'Какой тип данных хранит текст?',
    correctAnswer: 'str',
    options: ['str', 'int', 'float', 'char'],
    explanation: 'Тип str (string) хранит строки текста. Пример: `name = "Python"`',
    difficulty: 'easy',
    category: 'programming',
    categoryLabel: 'Программирование'
  },
  // === ПРОГРАММИРОВАНИЕ - Средний уровень ===
  {
    question: 'Что выведет код: `print(2 ** 3)`?',
    correctAnswer: '8',
    options: ['8', '6', '5', '9'],
    explanation: 'Оператор ** возводит в степень: 2³ = 8',
    difficulty: 'medium',
    category: 'programming',
    categoryLabel: 'Программирование'
  },
  {
    question: 'Что делает оператор // в Python?',
    correctAnswer: 'Целочисленное деление',
    options: ['Целочисленное деление', 'Обычное деление', 'Возведение в степень', 'Комментарий'],
    explanation: 'Оператор // выполняет целочисленное деление. Пример: `7 // 2 = 3`',
    difficulty: 'medium',
    category: 'programming',
    categoryLabel: 'Программирование',
    funFact: 'Обычное деление / всегда возвращает float.'
  },
  {
    question: 'Что выведет код: `print(len("Python"))`?',
    correctAnswer: '6',
    options: ['6', '5', '7', 'Ошибка'],
    explanation: 'Функция len() возвращает длину строки. В слове "Python" 6 букв.',
    difficulty: 'medium',
    category: 'programming',
    categoryLabel: 'Программирование'
  },
  {
    question: 'Какой оператор проверяет равенство в Python?',
    correctAnswer: '==',
    options: ['==', '=', '!=', '==='],
    explanation: 'Оператор == проверяет равенство значений. = это присваивание.',
    difficulty: 'medium',
    category: 'programming',
    categoryLabel: 'Программирование'
  },
  {
    question: 'Что такое список (list) в Python?',
    correctAnswer: 'Упорядоченная изменяемая коллекция',
    options: ['Упорядоченная изменяемая коллекция', 'Неупорядоченная коллекция', 'Неизменяемая коллекция', 'Только числа'],
    explanation: 'Список — упорядоченная изменяемая коллекция. Пример: `a = [1, 2, 3]`',
    difficulty: 'medium',
    category: 'programming',
    categoryLabel: 'Программирование',
    funFact: 'Списки могут содержать элементы разных типов.'
  },
  // === ПРОГРАММИРОВАНИЕ - Сложный уровень (ЕГЭ) ===
  {
    question: 'Что выведет код: `print([i for i in range(5) if i % 2 == 0])`?',
    correctAnswer: '[0, 2, 4]',
    options: ['[0, 2, 4]', '[1, 3]', '[0, 1, 2, 3, 4]', '[2, 4]'],
    explanation: 'Генератор списка создаёт список из чётных чисел от 0 до 4.',
    difficulty: 'hard',
    category: 'programming',
    categoryLabel: 'Программирование',
    funFact: 'Генераторы списков — мощный инструмент Python.'
  },
  {
    question: 'Что выведет код: `print("hello".upper())`?',
    correctAnswer: 'HELLO',
    options: ['HELLO', 'Hello', 'hello', 'Ошибка'],
    explanation: 'Метод .upper() преобразует строку в верхний регистр.',
    difficulty: 'hard',
    category: 'programming',
    categoryLabel: 'Программирование'
  },
  {
    question: 'Сколько раз выполнится цикл: `for i in range(3, 8):`?',
    correctAnswer: '5 раз',
    options: ['5 раз', '3 раза', '8 раз', '6 раз'],
    explanation: 'range(3, 8) генерирует числа 3, 4, 5, 6, 7 — всего 5 чисел.',
    difficulty: 'hard',
    category: 'programming',
    categoryLabel: 'Программирование',
    funFact: 'range(start, stop) не включает stop.'
  },
  {
    question: 'Какой результат: `print(17 % 5)`?',
    correctAnswer: '2',
    options: ['2', '3', '1', '17'],
    explanation: 'Оператор % возвращает остаток от деления: 17 = 5×3 + 2',
    difficulty: 'hard',
    category: 'programming',
    categoryLabel: 'Программирование'
  },
  
  // === КОМПЬЮТЕР (computer) - Лёгкий уровень ===
  {
    question: 'Какое устройство обрабатывает данные в компьютере?',
    correctAnswer: 'Процессор',
    options: ['Процессор', 'Жёсткий диск', 'Клавиатура', 'Монитор'],
    explanation: 'Процессор (CPU) — основное вычислительное устройство компьютера.',
    difficulty: 'easy',
    category: 'computer',
    categoryLabel: 'Компьютер',
    funFact: 'Современные процессоры содержат миллиарды транзисторов.'
  },
  {
    question: 'Какое устройство выводит изображение?',
    correctAnswer: 'Монитор',
    options: ['Монитор', 'Клавиатура', 'Мышь', 'Процессор'],
    explanation: 'Монитор — устройство вывода визуальной информации.',
    difficulty: 'easy',
    category: 'computer',
    categoryLabel: 'Компьютер'
  },
  {
    question: 'Какое устройство вводит текст?',
    correctAnswer: 'Клавиатура',
    options: ['Клавиатура', 'Монитор', 'Принтер', 'Колонки'],
    explanation: 'Клавиатура — основное устройство для ввода текста и команд.',
    difficulty: 'easy',
    category: 'computer',
    categoryLabel: 'Компьютер',
    funFact: 'Первая клавиатура появилась в 1868 году для пишущей машинки.'
  },
  {
    question: 'Где хранятся данные, когда компьютер выключен?',
    correctAnswer: 'На жёстком диске',
    options: ['На жёстком диске', 'В оперативной памяти', 'В процессоре', 'В кэше'],
    explanation: 'Жёсткий диск (HDD или SSD) хранит данные постоянно, даже без питания.',
    difficulty: 'easy',
    category: 'computer',
    categoryLabel: 'Компьютер'
  },
  {
    question: 'Как называется временная память компьютера?',
    correctAnswer: 'Оперативная память (ОЗУ)',
    options: ['Оперативная память (ОЗУ)', 'Жёсткий диск', 'Флешка', 'BIOS'],
    explanation: 'ОЗУ (RAM) — быстрая временная память, очищается при выключении.',
    difficulty: 'easy',
    category: 'computer',
    categoryLabel: 'Компьютер',
    funFact: 'Чем больше ОЗУ, тем больше программ можно запускать одновременно.'
  },
  // === КОМПЬЮТЕР - Средний уровень ===
  {
    question: 'Что такое тактовая частота процессора?',
    correctAnswer: 'Количество операций в секунду',
    options: ['Количество операций в секунду', 'Размер процессора', 'Температура', 'Потребление энергии'],
    explanation: 'Тактовая частота измеряется в ГГц и показывает скорость работы процессора.',
    difficulty: 'medium',
    category: 'computer',
    categoryLabel: 'Компьютер',
    funFact: '1 ГГц = 1 миллиард тактов в секунду.'
  },
  {
    question: 'Какое устройство соединяет компьютер с сетью?',
    correctAnswer: 'Сетевая карта',
    options: ['Сетевая карта', 'Видеокарта', 'Звуковая карта', 'Контроллер'],
    explanation: 'Сетевая карта (NIC) обеспечивает подключение к локальной сети или интернету.',
    difficulty: 'medium',
    category: 'computer',
    categoryLabel: 'Компьютер'
  },
  {
    question: 'Что такое периферийные устройства?',
    correctAnswer: 'Внешние устройства компьютера',
    options: ['Внешние устройства компьютера', 'Внутренние компоненты', 'Только принтеры', 'Только мышки'],
    explanation: 'Периферийные устройства — это внешние устройства: принтер, сканер, мышь, клавиатура.',
    difficulty: 'medium',
    category: 'computer',
    categoryLabel: 'Компьютер',
    funFact: 'Слово «периферия» означает «окружение».'
  },
  {
    question: 'Какой порт используется для подключения USB-устройств?',
    correctAnswer: 'USB',
    options: ['USB', 'HDMI', 'VGA', 'Ethernet'],
    explanation: 'USB (Universal Serial Bus) — универсальный порт для подключения устройств.',
    difficulty: 'medium',
    category: 'computer',
    categoryLabel: 'Компьютер',
    funFact: 'USB 3.0 в 10 раз быстрее USB 2.0.'
  },
  // === КОМПЬЮТЕР - Сложный уровень ===
  {
    question: 'Что такое кэш-память процессора?',
    correctAnswer: 'Быстрая память для частых данных',
    options: ['Быстрая память для частых данных', 'Основная память', 'Долговременное хранилище', 'Буфер принтера'],
    explanation: 'Кэш — сверхбыстрая память внутри процессора для хранения часто используемых данных.',
    difficulty: 'hard',
    category: 'computer',
    categoryLabel: 'Компьютер',
    funFact: 'Процессоры имеют несколько уровней кэша: L1, L2, L3.'
  },
  {
    question: 'Какая шина передаёт данные между процессором и памятью?',
    correctAnswer: 'Системная шина',
    options: ['Системная шина', 'USB шина', 'Видеошина', 'Сетевая шина'],
    explanation: 'Системная шина (Front Side Bus) соединяет процессор с оперативной памятью.',
    difficulty: 'hard',
    category: 'computer',
    categoryLabel: 'Компьютер'
  },
  
  // === СЕТИ И ИНТЕРНЕТ (networks) - Лёгкий уровень ===
  {
    question: 'Какой протокол используется для просмотра веб-страниц?',
    correctAnswer: 'HTTP/HTTPS',
    options: ['HTTP/HTTPS', 'FTP', 'SMTP', 'SSH'],
    explanation: 'HTTP (HyperText Transfer Protocol) — протокол передачи веб-страниц. HTTPS — защищённая версия.',
    difficulty: 'easy',
    category: 'networks',
    categoryLabel: 'Сети и интернет',
    funFact: 'HTTPS шифрует данные для безопасности.'
  },
  {
    question: 'Что такое IP-адрес?',
    correctAnswer: 'Уникальный адрес устройства в сети',
    options: ['Уникальный адрес устройства в сети', 'Адрес сайта', 'Имя компьютера', 'Пароль'],
    explanation: 'IP-адрес — уникальный числовой адрес каждого устройства в сети.',
    difficulty: 'easy',
    category: 'networks',
    categoryLabel: 'Сети и интернет',
    funFact: 'IPv4 содержит 4 числа от 0 до 255, например: 192.168.1.1'
  },
  {
    question: 'Что такое Wi-Fi?',
    correctAnswer: 'Беспроводная сеть',
    options: ['Беспроводная сеть', 'Тип интернета', 'Провайдер', 'Браузер'],
    explanation: 'Wi-Fi — технология беспроводной локальной сети.',
    difficulty: 'easy',
    category: 'networks',
    categoryLabel: 'Сети и интернет'
  },
  {
    question: 'Какая программа используется для просмотра сайтов?',
    correctAnswer: 'Браузер',
    options: ['Браузер', 'Поисковик', 'Антивирус', 'Текстовый редактор'],
    explanation: 'Браузер — программа для просмотра веб-страниц: Chrome, Firefox, Safari.',
    difficulty: 'easy',
    category: 'networks',
    categoryLabel: 'Сети и интернет',
    funFact: 'Первый браузер назывался WorldWideWeb (1990).'
  },
  {
    question: 'Что такое поисковик?',
    correctAnswer: 'Сайт для поиска информации',
    options: ['Сайт для поиска информации', 'Браузер', 'Провайдер', 'Антивирус'],
    explanation: 'Поисковик — система для поиска информации в интернете: Google, Яндекс.',
    difficulty: 'easy',
    category: 'networks',
    categoryLabel: 'Сети и интернет'
  },
  // === СЕТИ И ИНТЕРНЕТ - Средний уровень ===
  {
    question: 'Какой протокол используется для отправки электронной почты?',
    correctAnswer: 'SMTP',
    options: ['SMTP', 'POP3', 'IMAP', 'HTTP'],
    explanation: 'SMTP (Simple Mail Transfer Protocol) — протокол отправки электронной почты.',
    difficulty: 'medium',
    category: 'networks',
    categoryLabel: 'Сети и интернет',
    funFact: 'Для получения почты используются POP3 или IMAP.'
  },
  {
    question: 'Что такое DNS?',
    correctAnswer: 'Система доменных имён',
    options: ['Система доменных имён', 'Тип сети', 'Протокол передачи', 'Браузер'],
    explanation: 'DNS преобразует доменные имена (google.com) в IP-адреса.',
    difficulty: 'medium',
    category: 'networks',
    categoryLabel: 'Сети и интернет',
    funFact: 'DNS работает как телефонная книга интернета.'
  },
  {
    question: 'Какой протокол обеспечивает защищённое соединение?',
    correctAnswer: 'HTTPS',
    options: ['HTTPS', 'HTTP', 'FTP', 'Telnet'],
    explanation: 'HTTPS шифрует данные между браузером и сервером с помощью SSL/TLS.',
    difficulty: 'medium',
    category: 'networks',
    categoryLabel: 'Сети и интернет'
  },
  {
    question: 'Что такое фишинг?',
    correctAnswer: 'Мошенничество для кражи данных',
    options: ['Мошенничество для кражи данных', 'Вирус', 'Спам', 'Реклама'],
    explanation: 'Фишинг — вид мошенничества, когда злоумышленники пытаются получить ваши данные.',
    difficulty: 'medium',
    category: 'networks',
    categoryLabel: 'Сети и интернет',
    funFact: 'Никогда не переходите по подозрительным ссылкам!'
  },
  // === СЕТИ И ИНТЕРНЕТ - Сложный уровень ===
  {
    question: 'Сколько бит в IPv4-адресе?',
    correctAnswer: '32 бита',
    options: ['32 бита', '64 бита', '128 бит', '16 бит'],
    explanation: 'IPv4-адрес состоит из 32 бит (4 байта), записывается как 4 числа от 0 до 255.',
    difficulty: 'hard',
    category: 'networks',
    categoryLabel: 'Сети и интернет',
    funFact: 'IPv6 использует 128 бит — это 340 секстиллионов адресов!'
  },
  {
    question: 'Что такое маска подсети?',
    correctAnswer: 'Определяет часть IP-адреса для сети',
    options: ['Определяет часть IP-адреса для сети', 'Скрывает IP-адрес', 'Увеличивает скорость', 'Шифрует данные'],
    explanation: 'Маска подсети определяет, какая часть IP-адреса относится к сети, а какая — к устройству.',
    difficulty: 'hard',
    category: 'networks',
    categoryLabel: 'Сети и интернет'
  },
  
  // === ДАННЫЕ И ФАЙЛЫ (data) - Лёгкий уровень ===
  {
    question: 'Какое расширение у текстового документа Word?',
    correctAnswer: '.docx',
    options: ['.docx', '.txt', '.pdf', '.xlsx'],
    explanation: 'Файлы Microsoft Word имеют расширение .docx (или .doc для старых версий).',
    difficulty: 'easy',
    category: 'data',
    categoryLabel: 'Данные и файлы',
    funFact: '.docx — это архив с XML-файлами внутри.'
  },
  {
    question: 'Какое расширение у изображения в формате JPEG?',
    correctAnswer: '.jpg или .jpeg',
    options: ['.jpg или .jpeg', '.png', '.gif', '.bmp'],
    explanation: 'Фотографии обычно сохраняются в формате JPEG с расширением .jpg или .jpeg.',
    difficulty: 'easy',
    category: 'data',
    categoryLabel: 'Данные и файлы'
  },
  {
    question: 'Что такое файл?',
    correctAnswer: 'Именованная область данных',
    options: ['Именованная область данных', 'Папка', 'Программа', 'Иконка'],
    explanation: 'Файл — это именованная область данных на диске. Имя состоит из названия и расширения.',
    difficulty: 'easy',
    category: 'data',
    categoryLabel: 'Данные и файлы',
    funFact: 'Файловая система организует файлы в папки.'
  },
  {
    question: 'Какое расширение у таблиц Excel?',
    correctAnswer: '.xlsx',
    options: ['.xlsx', '.docx', '.pptx', '.txt'],
    explanation: 'Файлы Microsoft Excel имеют расширение .xlsx.',
    difficulty: 'easy',
    category: 'data',
    categoryLabel: 'Данные и файлы'
  },
  {
    question: 'Что такое архив?',
    correctAnswer: 'Сжатый файл',
    options: ['Сжатый файл', 'Удалённый файл', 'Папка', 'Резервная копия'],
    explanation: 'Архив — это сжатый файл (например, .zip, .rar), занимающий меньше места.',
    difficulty: 'easy',
    category: 'data',
    categoryLabel: 'Данные и файлы',
    funFact: 'Архивы могут содержать несколько файлов.'
  },
  // === ДАННЫЕ И ФАЙЛЫ - Средний уровень ===
  {
    question: 'Что такое кодирование информации?',
    correctAnswer: 'Преобразование в другой формат',
    options: ['Преобразование в другой формат', 'Шифрование', 'Сжатие', 'Удаление'],
    explanation: 'Кодирование — преобразование информации из одной формы в другую для хранения или передачи.',
    difficulty: 'medium',
    category: 'data',
    categoryLabel: 'Данные и файлы',
    funFact: 'Текст кодируется в ASCII или UTF-8.'
  },
  {
    question: 'Какой формат лучше для прозрачных изображений?',
    correctAnswer: 'PNG',
    options: ['PNG', 'JPEG', 'BMP', 'TIFF'],
    explanation: 'PNG поддерживает прозрачность, JPEG — нет. PNG лучше для графики с прозрачным фоном.',
    difficulty: 'medium',
    category: 'data',
    categoryLabel: 'Данные и файлы',
    funFact: 'PNG использует сжатие без потерь качества.'
  },
  {
    question: 'Что такое база данных?',
    correctAnswer: 'Организованная коллекция данных',
    options: ['Организованная коллекция данных', 'Таблица Excel', 'Файл', 'Папка'],
    explanation: 'База данных — организованная структура для хранения и управления большими объёмами данных.',
    difficulty: 'medium',
    category: 'data',
    categoryLabel: 'Данные и файлы',
    funFact: 'SQL — язык для работы с базами данных.'
  },
  {
    question: 'Что такое битрейт аудиофайла?',
    correctAnswer: 'Количество данных в секунду',
    options: ['Количество данных в секунду', 'Громкость', 'Длительность', 'Размер файла'],
    explanation: 'Битрейт показывает качество звука — чем выше, тем лучше качество.',
    difficulty: 'medium',
    category: 'data',
    categoryLabel: 'Данные и файлы'
  },
  // === ДАННЫЕ И ФАЙЛЫ - Сложный уровень ===
  {
    question: 'Какая кодировка используется для русского языка?',
    correctAnswer: 'UTF-8',
    options: ['UTF-8', 'ASCII', 'ANSI', 'Latin-1'],
    explanation: 'UTF-8 — универсальная кодировка, поддерживающая все языки мира, включая русский.',
    difficulty: 'hard',
    category: 'data',
    categoryLabel: 'Данные и файлы',
    funFact: 'UTF-8 использует от 1 до 4 байт на символ.'
  },
  {
    question: 'Что такое реляционная база данных?',
    correctAnswer: 'База данных с таблицами',
    options: ['База данных с таблицами', 'База с файлами', 'База с графикой', 'База с объектами'],
    explanation: 'Реляционная БД организует данные в связанные таблицы. Примеры: MySQL, PostgreSQL.',
    difficulty: 'hard',
    category: 'data',
    categoryLabel: 'Данные и файлы',
    funFact: 'Первую реляционную БД создал Эдгар Кодд в 1970 году.'
  },
  {
    question: 'Что такое сжатие без потерь?',
    correctAnswer: 'Сжатие с полным восстановлением',
    options: ['Сжатие с полным восстановлением', 'Удаление данных', 'Частичное сжатие', 'Архивация'],
    explanation: 'При сжатии без потерь исходные данные полностью восстанавливаются. Примеры: ZIP, PNG, FLAC.',
    difficulty: 'hard',
    category: 'data',
    categoryLabel: 'Данные и файлы'
  }
]

// Настройки уровней сложности
const difficultySettings = {
  easy: {
    name: 'Лёгкий',
    description: '5-7 класс',
    questionsCount: 8,
    timeLimit: 0, // Без таймера
    xp: 90
  },
  medium: {
    name: 'Средний',
    description: '8-9 класс + ОГЭ',
    questionsCount: 12,
    timeLimit: 30, // 30 секунд
    xp: 120
  },
  hard: {
    name: 'Сложный',
    description: '10-11 класс + ЕГЭ',
    questionsCount: 15,
    timeLimit: 25, // 25 секунд
    xp: 140
  }
}

// Категории с иконками и цветами
const categoryConfig = {
  basics: { icon: Binary, color: 'from-blue-400 to-cyan-500', bgColor: 'bg-blue-500/20' },
  algorithms: { icon: Code, color: 'from-purple-400 to-violet-500', bgColor: 'bg-purple-500/20' },
  programming: { icon: Code, color: 'from-green-400 to-emerald-500', bgColor: 'bg-green-500/20' },
  computer: { icon: Cpu, color: 'from-orange-400 to-amber-500', bgColor: 'bg-orange-500/20' },
  networks: { icon: Globe, color: 'from-cyan-400 to-teal-500', bgColor: 'bg-cyan-500/20' },
  data: { icon: Database, color: 'from-pink-400 to-rose-500', bgColor: 'bg-pink-500/20' }
}

interface ComputerScienceGameProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

export default function ComputerScienceGame({ gradeId = 0, onExperience }: ComputerScienceGameProps) {
  const { playSound } = useSound()
  
  // Состояния игры
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'result'>('menu')
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [streak, setStreak] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [answered, setAnswered] = useState(false)
  
  // Получаем вопросы для текущего уровня сложности
  const questions = useMemo(() => {
    const settings = difficultySettings[difficulty]
    const filtered = computerScienceQuestions.filter(q => {
      if (difficulty === 'easy') return q.difficulty === 'easy'
      if (difficulty === 'medium') return q.difficulty === 'easy' || q.difficulty === 'medium'
      return true // hard — все вопросы
    })
    
    // Перемешиваем и берём нужное количество
    return filtered
      .sort(() => Math.random() - 0.5)
      .slice(0, settings.questionsCount)
  }, [difficulty])
  
  const currentQuestion = questions[currentQuestionIndex]
  const settings = difficultySettings[difficulty]
  
  // Завершение игры
  const endGame = useCallback(() => {
    setGameState('result')
    playSound(score >= questions.length * 0.7 ? 'win' : 'levelUp')
    
    // Начисляем XP
    const earnedXP = Math.round((score / questions.length) * settings.xp)
    onExperience?.(earnedXP)
  }, [score, questions.length, settings.xp, playSound, onExperience])
  
  // Следующий вопрос
  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex >= questions.length - 1) {
      endGame()
    } else {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
      setAnswered(false)
    }
  }, [currentQuestionIndex, questions.length, endGame])
  
  // Обработка истечения времени
  const handleTimeout = useCallback(() => {
    if (answered) return
    setAnswered(true)
    playSound('error')
    setLives(prev => prev - 1)
    setStreak(0)
    setShowExplanation(true)
    
    setTimeout(() => {
      setLives(currentLives => {
        if (currentLives <= 1) {
          endGame()
        } else {
          nextQuestion()
        }
        return currentLives
      })
    }, 2000)
  }, [answered, playSound, endGame, nextQuestion])
  
  // Таймер
  useEffect(() => {
    if (gameState !== 'playing' || settings.timeLimit === 0 || answered) return
    
    setTimeLeft(settings.timeLimit)
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          handleTimeout()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [currentQuestionIndex, gameState, answered, settings.timeLimit, handleTimeout])
  
  // Выбор ответа
  const handleAnswer = (answer: string) => {
    if (answered) return
    setAnswered(true)
    setSelectedAnswer(answer)
    
    const isCorrect = answer === currentQuestion.correctAnswer
    
    if (isCorrect) {
      playSound('success')
      setScore(prev => prev + 1)
      setStreak(prev => prev + 1)
    } else {
      playSound('error')
      setLives(prev => prev - 1)
      setStreak(0)
    }
    
    setShowExplanation(true)
    
    setTimeout(() => {
      if (!isCorrect && lives <= 1) {
        endGame()
      } else {
        nextQuestion()
      }
    }, 2500)
  }
  
  // Начало игры
  const startGame = (diff: 'easy' | 'medium' | 'hard') => {
    setDifficulty(diff)
    setGameState('playing')
    setCurrentQuestionIndex(0)
    setScore(0)
    setLives(3)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setStreak(0)
    setAnswered(false)
  }
  
  // Перезапуск
  const restart = () => {
    setGameState('menu')
  }
  
  // Рендер меню
  const renderMenu = () => (
    <div className="space-y-6">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Monitor className="w-10 h-10 text-blue-400" />
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Информатика
          </h2>
          <Cpu className="w-10 h-10 text-cyan-400" />
        </div>
        <p className="text-gray-400">Проверь свои знания по информатике!</p>
      </motion.div>
      
      {/* Выбор уровня */}
      <div className="grid gap-4">
        {(Object.entries(difficultySettings) as [keyof typeof difficultySettings, typeof difficultySettings.easy][]).map(([key, setting]) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: Object.keys(difficultySettings).indexOf(key) * 0.1 }}
          >
            <Card 
              className="cursor-pointer overflow-hidden hover:border-white/30 transition-all border-white/10"
              onClick={() => startGame(key)}
            >
              <div className={`h-2 bg-gradient-to-r ${
                key === 'easy' ? 'from-green-400 to-emerald-500' :
                key === 'medium' ? 'from-yellow-400 to-orange-500' :
                'from-red-400 to-rose-500'
              }`} />
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">{setting.name}</h3>
                    <p className="text-gray-400 text-sm">{setting.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-5 h-5" />
                      <span className="font-bold">+{setting.xp} XP</span>
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {setting.questionsCount} вопросов
                      {setting.timeLimit > 0 && ` • ${setting.timeLimit} сек`}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {/* Категории */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-400" />
          Категории вопросов
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {Object.entries(categoryConfig).map(([key, config]) => {
            const IconComponent = config.icon
            return (
              <Card key={key} className={`${config.bgColor} border-white/10 p-3`}>
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${config.color}`}>
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">
                    {key === 'basics' && 'Основы'}
                    {key === 'algorithms' && 'Алгоритмы'}
                    {key === 'programming' && 'Программирование'}
                    {key === 'computer' && 'Компьютер'}
                    {key === 'networks' && 'Сети'}
                    {key === 'data' && 'Данные'}
                  </span>
                </div>
              </Card>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
  
  // Рендер игры
  const renderGame = () => {
    if (!currentQuestion) return null
    
    const category = categoryConfig[currentQuestion.category]
    const CategoryIcon = category.icon
    
    return (
      <div className="space-y-4">
        {/* Прогресс */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 1 }}
                animate={{ scale: lives > i ? 1 : 0.8 }}
              >
                <span className={`text-2xl ${lives > i ? '' : 'grayscale opacity-30'}`}>
                  ❤️
                </span>
              </motion.div>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            {streak >= 2 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-1 text-orange-400"
              >
                <Zap className="w-4 h-4" />
                <span className="text-sm font-bold">x{streak}</span>
              </motion.div>
            )}
            
            <div className="text-sm text-gray-400">
              {currentQuestionIndex + 1} / {questions.length}
            </div>
          </div>
        </div>
        
        {/* Таймер */}
        {settings.timeLimit > 0 && (
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${
                timeLeft > 10 ? 'bg-green-500' :
                timeLeft > 5 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              initial={{ width: '100%' }}
              animate={{ width: `${(timeLeft / settings.timeLimit) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}
        
        {/* Категория */}
        <div className={`flex items-center gap-2 ${category.bgColor} rounded-lg px-3 py-2 w-fit`}>
          <CategoryIcon className="w-4 h-4" />
          <span className="text-sm font-medium">{currentQuestion.categoryLabel}</span>
        </div>
        
        {/* Вопрос */}
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card className="p-4 sm:p-6 border-white/10">
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              {currentQuestion.question}
            </h3>
            
            {/* Варианты ответов */}
            <div className="grid gap-2">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === option
                const isCorrect = option === currentQuestion.correctAnswer
                const showResult = showExplanation
                
                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    disabled={answered}
                    className={`w-full text-left p-3 sm:p-4 rounded-lg border transition-all ${
                      showResult
                        ? isCorrect
                          ? 'bg-green-500/20 border-green-500 text-green-400'
                          : isSelected
                            ? 'bg-red-500/20 border-red-500 text-red-400'
                            : 'bg-white/5 border-white/10 text-gray-400'
                        : isSelected
                          ? 'bg-blue-500/20 border-blue-500'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30'
                    }`}
                    whileHover={!answered ? { scale: 1.02 } : {}}
                    whileTap={!answered ? { scale: 0.98 } : {}}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        showResult
                          ? isCorrect
                            ? 'bg-green-500 text-white'
                            : isSelected
                              ? 'bg-red-500 text-white'
                              : 'bg-white/10'
                          : 'bg-white/10'
                      }`}>
                        {showResult && isCorrect ? '✓' : showResult && isSelected ? '✗' : index + 1}
                      </span>
                      <span className="font-medium">{option}</span>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </Card>
        </motion.div>
        
        {/* Объяснение */}
        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className={`p-4 border ${
                selectedAnswer === currentQuestion.correctAnswer
                  ? 'bg-green-500/10 border-green-500/30'
                  : 'bg-red-500/10 border-red-500/30'
              }`}>
                <p className="text-sm">
                  <span className="font-bold">💡 {selectedAnswer === currentQuestion.correctAnswer ? 'Правильно!' : 'Неверно!'} </span>
                  {currentQuestion.explanation}
                </p>
                {currentQuestion.funFact && (
                  <p className="text-xs text-gray-400 mt-2">
                    📌 Интересный факт: {currentQuestion.funFact}
                  </p>
                )}
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }
  
  // Рендер результата
  const renderResult = () => {
    const percentage = Math.round((score / questions.length) * 100)
    const earnedXP = Math.round((score / questions.length) * settings.xp)
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6"
      >
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className={`w-24 h-24 rounded-full flex items-center justify-center ${
              percentage >= 70 ? 'bg-green-500/20' :
              percentage >= 50 ? 'bg-yellow-500/20' : 'bg-red-500/20'
            }`}
          >
            <Trophy className={`w-12 h-12 ${
              percentage >= 70 ? 'text-green-400' :
              percentage >= 50 ? 'text-yellow-400' : 'text-red-400'
            }`} />
          </motion.div>
        </div>
        
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            {percentage >= 70 ? 'Отлично! 🎉' :
             percentage >= 50 ? 'Хорошо! 👍' : 'Попробуй ещё раз! 💪'}
          </h2>
          <p className="text-gray-400">
            Результат: {score} из {questions.length} ({percentage}%)
          </p>
        </div>
        
        {/* Награды */}
        <Card className="p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30">
          <div className="flex items-center justify-center gap-3">
            <Star className="w-8 h-8 text-yellow-400" />
            <div className="text-left">
              <div className="text-xl font-bold text-yellow-400">+{earnedXP} XP</div>
              <div className="text-sm text-gray-400">Заработано опыта</div>
            </div>
          </div>
        </Card>
        
        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={restart}
            variant="outline"
            className="gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            К уровням
          </Button>
          <Button
            onClick={() => startGame(difficulty)}
            className="gap-2 bg-gradient-to-r from-blue-500 to-cyan-500"
          >
            <Zap className="w-4 h-4" />
            Играть снова
          </Button>
        </div>
      </motion.div>
    )
  }
  
  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {gameState === 'menu' && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {renderMenu()}
          </motion.div>
        )}
        
        {gameState === 'playing' && (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {renderGame()}
          </motion.div>
        )}
        
        {gameState === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {renderResult()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
