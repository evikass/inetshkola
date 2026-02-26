// ==================== 6 КЛАСС ====================

import { Atom, FlaskConical } from 'lucide-react'
import type { Grade } from '../types'

export const grade6: Grade = {
  id: 6,
  name: '6 класс',
  shortName: '6 кл.',
  subjects: [
    {
      id: 'physics6',
      title: 'Физика',
      icon: <Atom className="w-5 h-5" />,
      color: 'text-pink-400',
      gradient: 'from-pink-500 to-rose-500',
      description: 'Механика, силы, движение',
      topics: [
        { 
          id: 't1', 
          title: 'Механическое движение', 
          description: 'Что такое движение?',
          theory: `<h3>Механическое движение</h3>
          <p>Механическое движение — это изменение положения тела относительно других тел с течением времени.</p>
          <h4>Характеристики движения:</h4>
          <ul>
            <li><strong>Путь (S)</strong> — длина траектории, [м]</li>
            <li><strong>Время (t)</strong> — [с]</li>
            <li><strong>Скорость (v)</strong> — путь за единицу времени, [м/с]</li>
          </ul>
          <h4>Формула:</h4>
          <p>v = S / t (скорость = путь / время)</p>`,
          examples: ['Что такое путь?', 'Единицы скорости?', 'Рассчитай скорость: 100 м за 20 с'],
          completed: false,
          difficulty: 'medium',
          estimatedTime: 25
        },
        { 
          id: 't2', 
          title: 'Силы в природе', 
          description: 'Сила тяжести, трения, упругости',
          theory: `<h3>Силы в природе</h3>
          <h4>Сила тяжести:</h4>
          <p>Сила, с которой Земля притягивает тело. F = mg, где g ≈ 10 м/с²</p>
          <h4>Сила трения:</h4>
          <p>Препятствует движению тела. Зависит от поверхности.</p>
          <h4>Сила упругости:</h4>
          <p>Возникает при деформации. Закон Гука: F = kx</p>`,
          examples: ['Что такое сила тяжести?', 'От чего зависит трение?', 'Рассчитай F для m=5 кг'],
          completed: false,
          difficulty: 'medium',
          estimatedTime: 25
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Какая сила препятствует движению тела?',
          options: ['Сила тяжести', 'Сила трения', 'Сила упругости', 'Архимедова сила'],
          correctAnswer: 1,
          explanation: 'Сила трения всегда препятствует движению. Благодаря ей мы можем ходить и ездить на машинах.',
          difficulty: 'easy',
          points: 10
        }
      ]
    },
    {
      id: 'chem6',
      title: 'Химия',
      icon: <FlaskConical className="w-5 h-5" />,
      color: 'text-cyan-400',
      gradient: 'from-cyan-500 to-blue-500',
      description: 'Периодическая таблица, химические реакции',
      topics: [
        { 
          id: 't1', 
          title: 'Периодическая таблица', 
          description: 'Таблица Менделеева',
          theory: `<h3>Периодическая таблица Д.И. Менделеева</h3>
          <p>Таблица, в которой химические элементы расположены в порядке возрастания заряда ядра.</p>
          <h4>Структура:</h4>
          <ul>
            <li><strong>Периоды</strong> — горизонтальные ряды (7 периодов)</li>
            <li><strong>Группы</strong> — вертикальные столбцы (8 групп)</li>
          </ul>
          <h4>Важные элементы:</h4>
          <p>H (водород), O (кислород), C (углерод), Fe (железо), Au (золото)</p>`,
          examples: ['Сколько периодов?', 'Что такое группа?', 'Символ кислорода?'],
          completed: false,
          difficulty: 'medium',
          estimatedTime: 30
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Какой символ у кислорода?',
          options: ['C', 'O', 'K', 'Ca'],
          correctAnswer: 1,
          explanation: 'Кислород обозначается символом O (от лат. Oxygenium). Атомный номер — 8.',
          difficulty: 'easy',
          points: 10
        }
      ]
    }
  ]
}
