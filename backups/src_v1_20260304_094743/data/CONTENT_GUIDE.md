# Инструкция по использованию дополнительного контента

## Добавленные файлы

1. **`additional-subjects.tsx`** — новые предметы:
   - Литературное чтение
   - Технология (Труд)
   - ИЗО (Изобразительное искусство)
   - Музыка
   - Физкультура
   - Английский язык

2. **`expanded-content.tsx`** — расширенный контент для основных предметов:
   - Математика: сравнение чисел, задачи
   - Русский язык: слово и предложение
   - Окружающий мир: природа, времена года, части тела

## Как интегрировать контент

### Вариант 1: Объединение при импорте

```typescript
// В school-data.tsx или другом файле

import { grade1Subjects } from './grade1-class'
import { additionalGrade1Subjects } from './additional-subjects'
import { 
  mathGrade1AdditionalSections, 
  mathGrade1AdditionalQuiz,
  russianGrade1AdditionalSections,
  worldGrade1AdditionalSections
} from './expanded-content'

// Объединение предметов
const allGrade1Subjects = [...grade1Subjects, ...additionalGrade1Subjects]

// Или добавление разделов к существующим предметам
const enrichedGrade1Subjects = grade1Subjects.map(subject => {
  if (subject.id === 'math1') {
    return {
      ...subject,
      sections: [...(subject.sections || []), ...mathGrade1AdditionalSections],
      quiz: [...(subject.quiz || []), ...mathGrade1AdditionalQuiz]
    }
  }
  if (subject.id === 'russian1') {
    return {
      ...subject,
      sections: [...(subject.sections || []), ...russianGrade1AdditionalSections]
    }
  }
  if (subject.id === 'world1') {
    return {
      ...subject,
      sections: [...(subject.sections || []), ...worldGrade1AdditionalSections]
    }
  }
  return subject
})
```

### Вариант 2: Полная замена grade1-class.tsx

Можно создать новый файл с полным содержанием всех предметов.

## Структура данных

```
Subject (Предмет)
├── id: string                    // math1, literature1
├── title: string                 // Математика
├── icon: ReactNode               // иконка из lucide-react
├── color: string                 // Tailwind класс цвета
├── gradient: string              // Tailwind градиент
├── description: string           // описание
├── sections: Section[]           // разделы
│   ├── id: string                // math1-s1
│   ├── title: string             // Раздел
│   ├── description: string       // описание
│   ├── order: number             // порядок
│   └── topics: Topic[]           // темы
│       ├── id: string            // math1-s1-t1
│       ├── title: string         // Тема
│       ├── description: string   // описание
│       ├── theory: string        // HTML контент
│       ├── examples: string[]    // примеры
│       ├── completed: boolean    // пройдено?
│       ├── difficulty: string    // easy/medium/hard
│       ├── estimatedTime: number // минуты
│       ├── lessons: Lesson[]     // уроки
│       │   ├── id: string        // math1-s1-t1-l1
│       │   ├── title: string     // Урок
│       │   ├── content: string   // HTML контент
│       │   ├── completed: boolean
│       │   ├── order: number
│       │   └── estimatedTime: number
│       └── quiz: QuizQuestion[]  // тест по теме
└── quiz: QuizQuestion[]          // тест по предмету
```

## Новые предметы

### Литературное чтение (literature1-4)
- Устное народное творчество (потешки, сказки)
- Русские писатели (Пушкин, Барто, Чуковский)
- Зарубежные сказки

### Технология (technology1-4)
- Работа с бумагой (аппликации)
- Лепка из пластилина
- Поделки из природных материалов

### ИЗО (art1-4)
- Цвета радуги
- Рисование
- Жанры живописи

### Музыка (music1-4)
- Народные инструменты
- Детские песни
- Классическая музыка

### Физкультура (pe1-4)
- Утренняя зарядка
- Подвижные игры
- Правила безопасности

### Английский язык (english1-4)
- Приветствия
- Цвета
- Числа
- Семья
- Животные

## Рекомендации

1. **Добавляйте контент постепенно** — начните с 1-2 классов
2. **Тестируйте** — проверьте что все уроки отображаются корректно
3. **Адаптируйте** — меняйте сложность в зависимости от класса
4. **Расширяйте** — добавляйте новые темы и уроки

## Пример расширения для 5-11 классов

```typescript
// Для старших классов можно добавить:
const highSchoolSubjects = {
  // 5 класс
  literature5: {
    topics: ['Басни Крылова', 'Сказки', 'Рассказы']
  },
  // 7 класс
  literature7: {
    topics: ['Былины', 'Древнерусская литература', 'Литература 19 века']
  },
  // 10-11 класс
  literature11: {
    topics: ['Литература 20 века', 'Современная проза', 'Поэзия Серебряного века']
  }
}
```
