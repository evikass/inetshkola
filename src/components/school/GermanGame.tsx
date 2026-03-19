'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Languages, BookOpen, MessageSquare, Flag, GraduationCap, Pen,
  Trophy, Zap, Heart, Clock, Target, Check, X, Sparkles
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

interface GermanGameProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

// Категории вопросов
type GermanCategory = 'vocabulary' | 'grammar' | 'phrases' | 'culture' | 'numbers' | ' verbs'

interface GermanQuestion {
  question: string
  correctAnswer: string
  options: string[]
  category: GermanCategory
  difficulty: 1 | 2 | 3
  explanation?: string
  funFact?: string
}

// База вопросов по немецкому языку
const questions: GermanQuestion[] = [
  // === ЛЕКСИКА (vocabulary) - Лёгкий уровень ===
  {
    question: 'Как переводится "Hallo"?',
    correctAnswer: 'Привет',
    options: ['Привет', 'До свидания', 'Спасибо', 'Пожалуйста'],
    category: 'vocabulary',
    difficulty: 1,
    explanation: 'Hallo — стандартное приветствие на немецком языке.',
    funFact: 'Немцы также говорят "Guten Tag" (Добрый день) в официальной обстановке.'
  },
  {
    question: 'Как переводится "Danke"?',
    correctAnswer: 'Спасибо',
    options: ['Спасибо', 'Пожалуйста', 'Привет', 'Извините'],
    category: 'vocabulary',
    difficulty: 1,
    explanation: 'Danke — благодарность на немецком языке.',
    funFact: 'Полная форма "Danke schön" означает "Большое спасибо".'
  },
  {
    question: 'Как переводится "Ja"?',
    correctAnswer: 'Да',
    options: ['Да', 'Нет', 'Возможно', 'Хорошо'],
    category: 'vocabulary',
    difficulty: 1,
    explanation: 'Ja — утверждение "да" на немецком.',
    funFact: 'Противоположность — "Nein" (нет).'
  },
  {
    question: 'Как переводится "Nein"?',
    correctAnswer: 'Нет',
    options: ['Нет', 'Да', 'Возможно', 'Никогда'],
    category: 'vocabulary',
    difficulty: 1,
    explanation: 'Nein — отрицание "нет" на немецком.',
    funFact: 'В разговорной речи немцы часто говорят "Nee".'
  },
  {
    question: 'Как переводится "das Haus"?',
    correctAnswer: 'Дом',
    options: ['Дом', 'Школа', 'Машина', 'Дерево'],
    category: 'vocabulary',
    difficulty: 1,
    explanation: 'Das Haus — дом на немецком языке.',
    funFact: 'В немецком все существительные пишутся с большой буквы!'
  },
  {
    question: 'Как переводится "der Hund"?',
    correctAnswer: 'Собака',
    options: ['Собака', 'Кошка', 'Птица', 'Лошадь'],
    category: 'vocabulary',
    difficulty: 1,
    explanation: 'Der Hund — собака на немецком языке.',
    funFact: 'Немцы очень любят собак — в Германии более 9 миллионов собак!'
  },
  {
    question: 'Как переводится "die Katze"?',
    correctAnswer: 'Кошка',
    options: ['Кошка', 'Собака', 'Мышь', 'Рыба'],
    category: 'vocabulary',
    difficulty: 1,
    explanation: 'Die Katze — кошка на немецком языке.',
    funFact: 'Котёнок по-немецки — "das Kätzchen".'
  },
  {
    question: 'Как переводится "das Auto"?',
    correctAnswer: 'Машина',
    options: ['Машина', 'Велосипед', 'Поезд', 'Самолёт'],
    category: 'vocabulary',
    difficulty: 1,
    explanation: 'Das Auto — автомобиль на немецком языке.',
    funFact: 'Германия знаменита автомобильными брендами: BMW, Mercedes, Volkswagen, Porsche.'
  },
  
  // === ЛЕКСИКА - Средний уровень ===
  {
    question: 'Как переводится "die Schule"?',
    correctAnswer: 'Школа',
    options: ['Школа', 'Университет', 'Библиотека', 'Класс'],
    category: 'vocabulary',
    difficulty: 2,
    explanation: 'Die Schule — школа на немецком языке.',
    funFact: 'В Германии дети идут в школу с 6 лет, обучение длится минимум 9 лет.'
  },
  {
    question: 'Как переводится "der Freund"?',
    correctAnswer: 'Друг',
    options: ['Друг', 'Брат', 'Отец', 'Сын'],
    category: 'vocabulary',
    difficulty: 2,
    explanation: 'Der Freund — друг. Die Freundin — подруга.',
    funFact: 'Немецкие слова имеют род: мужской (der), женский (die), средний (das).'
  },
  {
    question: 'Как переводится "essen"?',
    correctAnswer: 'Есть (кушать)',
    options: ['Есть (кушать)', 'Пить', 'Готовить', 'Покупать'],
    category: 'vocabulary',
    difficulty: 2,
    explanation: 'Essen — есть, кушать. Das Essen — еда.',
    funFact: 'Знаменитое немецкое блюдо — сосиски (die Wurst) и квашеная капуста (das Sauerkraut).'
  },
  {
    question: 'Как переводится "trinken"?',
    correctAnswer: 'Пить',
    options: ['Пить', 'Есть', 'Наливать', 'Готовить'],
    category: 'vocabulary',
    difficulty: 2,
    explanation: 'Trinken — пить. Das Getränk — напиток.',
    funFact: 'Германия славится пивом — существует более 1500 сортов!'
  },
  {
    question: 'Как переводится "das Buch"?',
    correctAnswer: 'Книга',
    options: ['Книга', 'Тетрадь', 'Журнал', 'Газета'],
    category: 'vocabulary',
    difficulty: 2,
    explanation: 'Das Buch — книга. Die Bücher — книги.',
    funFact: 'Книжная ярмарка во Франкфурте — крупнейшая в мире!'
  },
  {
    question: 'Как переводится "arbeiten"?',
    correctAnswer: 'Работать',
    options: ['Работать', 'Отдыхать', 'Учиться', 'Играть'],
    category: 'vocabulary',
    difficulty: 2,
    explanation: 'Arbeiten — работать. Die Arbeit — работа.',
    funFact: 'Немцы очень ценят трудолюбие — "Arbeit macht das Leben süß" (Работа делает жизнь сладкой).'
  },
  
  // === ЛЕКСИКА - Сложный уровень ===
  {
    question: 'Как переводится "die Umgebung"?',
    correctAnswer: 'Окружающая среда',
    options: ['Окружающая среда', 'Окружение', 'Окружность', 'Круг'],
    category: 'vocabulary',
    difficulty: 3,
    explanation: 'Die Umgebung — окружающая среда, окрестности.',
    funFact: 'Германия — лидер по переработке мусора и защите окружающей среды.'
  },
  {
    question: 'Как переводится "die Wissenschaft"?',
    correctAnswer: 'Наука',
    options: ['Наука', 'Знание', 'Учёный', 'Школа'],
    category: 'vocabulary',
    difficulty: 3,
    explanation: 'Die Wissenschaft — наука.',
    funFact: 'Германия дала миру многих великих учёных: Эйнштейн, Планck, Гейзенберг.'
  },
  {
    question: 'Как переводится "die Erfahrung"?',
    correctAnswer: 'Опыт',
    options: ['Опыт', 'Попытка', 'Эксперимент', 'Испытание'],
    category: 'vocabulary',
    difficulty: 3,
    explanation: 'Die Erfahrung — опыт, переживание.',
    funFact: 'Немецкий язык богат сложными словами — "Erfahrungsbericht" — отчёт о опыте.'
  },
  
  // === ГРАММАТИКА (grammar) - Лёгкий уровень ===
  {
    question: 'Какой артикль мужского рода?',
    correctAnswer: 'der',
    options: ['der', 'die', 'das', 'den'],
    category: 'grammar',
    difficulty: 1,
    explanation: 'Der — определённый артикль мужского рода.',
    funFact: 'Die — женский род, das — средний род.'
  },
  {
    question: 'Какой артикль женского рода?',
    correctAnswer: 'die',
    options: ['die', 'der', 'das', 'dem'],
    category: 'grammar',
    difficulty: 1,
    explanation: 'Die — определённый артикль женского рода.',
    funFact: 'Множественное число всех родов тоже использует die!'
  },
  {
    question: 'Какой артикль среднего рода?',
    correctAnswer: 'das',
    options: ['das', 'der', 'die', 'den'],
    category: 'grammar',
    difficulty: 1,
    explanation: 'Das — определённый артикль среднего рода.',
    funFact: 'Das Mädchen (девочка) — среднего рода, хотя это может показаться странным!'
  },
  {
    question: 'Как сказать "я есть"?',
    correctAnswer: 'ich bin',
    options: ['ich bin', 'du bist', 'er ist', 'wir sind'],
    category: 'grammar',
    difficulty: 1,
    explanation: 'Ich bin — я есть. Глагол sein (быть).',
    funFact: 'Глагол sein — один из самых важных неправильных глаголов.'
  },
  {
    question: 'Как сказать "ты есть"?',
    correctAnswer: 'du bist',
    options: ['du bist', 'ich bin', 'er ist', 'ihr seid'],
    category: 'grammar',
    difficulty: 1,
    explanation: 'Du bist — ты есть (неформальное обращение).',
    funFact: 'Немцы используют "du" с друзьями и "Sie" с незнакомыми.'
  },
  
  // === ГРАММАТИКА - Средний уровень ===
  {
    question: 'Какое окончание у глагола для "ich"?',
    correctAnswer: '-e',
    options: ['-e', '-st', '-t', '-en'],
    category: 'grammar',
    difficulty: 2,
    explanation: 'Глаголы в настоящем времени для "ich" имеют окончание -e: ich lerne (я учусь).',
    funFact: 'Это называется Präsens — настоящее время.'
  },
  {
    question: 'Какое окончание у глагола для "du"?',
    correctAnswer: '-st',
    options: ['-st', '-e', '-t', '-en'],
    category: 'grammar',
    difficulty: 2,
    explanation: 'Глаголы в настоящем времени для "du" имеют окончание -st: du lernst (ты учишься).',
    funFact: 'Для вежливого "Sie" используется окончание -en: Sie lernen.'
  },
  {
    question: 'Какое окончание у глагола для "er/sie/es"?',
    correctAnswer: '-t',
    options: ['-t', '-e', '-st', '-en'],
    category: 'grammar',
    difficulty: 2,
    explanation: 'Глаголы в настоящем времени для "er/sie/es" имеют окончание -t: er lernt.',
    funFact: 'Это третье лицо единственного числа.'
  },
  {
    question: 'Какое окончание у глагола для "wir"?',
    correctAnswer: '-en',
    options: ['-en', '-e', '-st', '-t'],
    category: 'grammar',
    difficulty: 2,
    explanation: 'Глаголы в настоящем времени для "wir" имеют окончание -en: wir lernen.',
    funFact: 'Это первое лицо множественного числа.'
  },
  {
    question: 'Что такое Perfekt?',
    correctAnswer: 'Прошедшее разговорное время',
    options: ['Прошедшее разговорное время', 'Настоящее время', 'Будущее время', 'Повелительное наклонение'],
    category: 'grammar',
    difficulty: 2,
    explanation: 'Perfekt — прошедшее время, используемое в разговорной речи.',
    funFact: 'Perfekt образуется с помощью haben или sein + Partizip II.'
  },
  
  // === ГРАММАТИКА - Сложный уровень ===
  {
    question: 'Какой вспомогательный глагол для Perfekt глаголов движения?',
    correctAnswer: 'sein',
    options: ['sein', 'haben', 'werden', 'können'],
    category: 'grammar',
    difficulty: 3,
    explanation: 'Глаголы движения и изменения состояния в Perfekt используют sein.',
    funFact: 'Пример: Ich bin gegangen (я пошёл) — глагол движения.'
  },
  {
    question: 'Что такое Dativ?',
    correctAnswer: 'Дательный падеж',
    options: ['Дательный падеж', 'Именительный падеж', 'Винительный падеж', 'Родительный падеж'],
    category: 'grammar',
    difficulty: 3,
    explanation: 'Dativ — дательный падеж, отвечает на вопрос "кому? чему?".',
    funFact: 'Артикли в Dativ: dem (муж.), der (жен.), dem (сред.).'
  },
  {
    question: 'Что такое Akkusativ?',
    correctAnswer: 'Винительный падеж',
    options: ['Винительный падеж', 'Именительный падеж', 'Дательный падеж', 'Родительный падеж'],
    category: 'grammar',
    difficulty: 3,
    explanation: 'Akkusativ — винительный падеж, отвечает на вопрос "кого? что?".',
    funFact: 'Только мужской род меняет артикль: der → den.'
  },
  
  // === ФРАЗЫ (phrases) - Лёгкий уровень ===
  {
    question: 'Как сказать "До свидания"?',
    correctAnswer: 'Auf Wiedersehen',
    options: ['Auf Wiedersehen', 'Guten Morgen', 'Guten Tag', 'Gute Nacht'],
    category: 'phrases',
    difficulty: 1,
    explanation: 'Auf Wiedersehen — формальное прощание.',
    funFact: 'В разговорной речи немцы говорят "Tschüss" (Чао).'
  },
  {
    question: 'Как сказать "Доброе утро"?',
    correctAnswer: 'Guten Morgen',
    options: ['Guten Morgen', 'Guten Tag', 'Guten Abend', 'Gute Nacht'],
    category: 'phrases',
    difficulty: 1,
    explanation: 'Guten Morgen — приветствие утром (до 10-11 часов).',
    funFact: 'После 11 говорят "Guten Tag" (Добрый день).'
  },
  {
    question: 'Как сказать "Спокойной ночи"?',
    correctAnswer: 'Gute Nacht',
    options: ['Gute Nacht', 'Guten Abend', 'Guten Morgen', 'Guten Tag'],
    category: 'phrases',
    difficulty: 1,
    explanation: 'Gute Nacht — пожелание спокойной ночи перед сном.',
    funFact: 'Также говорят "Schlaf gut" (Спи хорошо).'
  },
  {
    question: 'Как сказать "Как дела?"',
    correctAnswer: 'Wie geht es dir?',
    options: ['Wie geht es dir?', 'Wie heißt du?', 'Wo wohnst du?', 'Wie alt bist du?'],
    category: 'phrases',
    difficulty: 1,
    explanation: 'Wie geht es dir? — Как дела? (неформально).',
    funFact: 'Формально: "Wie geht es Ihnen?"'
  },
  {
    question: 'Как сказать "Меня зовут..."?',
    correctAnswer: 'Ich heiße...',
    options: ['Ich heiße...', 'Ich bin...', 'Ich habe...', 'Ich wohne...'],
    category: 'phrases',
    difficulty: 1,
    explanation: 'Ich heiße... — Меня зовут... (дословно: Я называюсь...).',
    funFact: 'Также можно сказать "Mein Name ist..." (Моё имя...).'
  },
  
  // === ФРАЗЫ - Средний уровень ===
  {
    question: 'Как сказать "Я не понимаю"?',
    correctAnswer: 'Ich verstehe nicht',
    options: ['Ich verstehe nicht', 'Ich weiß nicht', 'Ich kann nicht', 'Ich mag nicht'],
    category: 'phrases',
    difficulty: 2,
    explanation: 'Ich verstehe nicht — Я не понимаю.',
    funFact: '"Ich verstehe" — Я понимаю. "Verstehen Sie?" — Понимаете?'
  },
  {
    question: 'Как сказать "Я учу немецкий"?',
    correctAnswer: 'Ich lerne Deutsch',
    options: ['Ich lerne Deutsch', 'Ich spreche Deutsch', 'Ich verstehe Deutsch', 'Ich lehre Deutsch'],
    category: 'phrases',
    difficulty: 2,
    explanation: 'Ich lerne Deutsch — Я учу немецкий язык.',
    funFact: 'Deutsch — немецкий язык. Deutschland — Германия.'
  },
  {
    question: 'Как спросить "Где находится..."?',
    correctAnswer: 'Wo ist...?',
    options: ['Wo ist...?', 'Was ist...?', 'Wie ist...?', 'Wer ist...?'],
    category: 'phrases',
    difficulty: 2,
    explanation: 'Wo ist...? — Где находится...?',
    funFact: 'Ответ может быть: "Es ist hier" (Это здесь) или "Es ist dort" (Это там).'
  },
  {
    question: 'Как сказать "Извините"?',
    correctAnswer: 'Entschuldigung',
    options: ['Entschuldigung', 'Danke', 'Bitte', 'Tschüss'],
    category: 'phrases',
    difficulty: 2,
    explanation: 'Entschuldigung — Извините, простите.',
    funFact: 'Также используется для привлечения внимания, как "Извините..."'
  },
  {
    question: 'Как сказать "Пожалуйста" (ответ на спасибо)?',
    correctAnswer: 'Bitte',
    options: ['Bitte', 'Danke', 'Entschuldigung', 'Natürlich'],
    category: 'phrases',
    difficulty: 2,
    explanation: 'Bitte — пожалуйста, не за что.',
    funFact: 'Bitte также означает "пожалуйста" при просьбе.'
  },
  
  // === ФРАЗЫ - Сложный уровень ===
  {
    question: 'Как сказать "Я хотел бы..."?',
    correctAnswer: 'Ich möchte...',
    options: ['Ich möchte...', 'Ich will...', 'Ich kann...', 'Ich soll...'],
    category: 'phrases',
    difficulty: 3,
    explanation: 'Ich möchte... — вежливая форма "Я хотел бы...".',
    funFact: 'Möchte — это Konjunktiv II от глагола mögen (нравиться).'
  },
  {
    question: 'Как сказать "Мне нужно..."?',
    correctAnswer: 'Ich muss...',
    options: ['Ich muss...', 'Ich will...', 'Ich kann...', 'Ich darf...'],
    category: 'phrases',
    difficulty: 3,
    explanation: 'Ich muss... — Я должен, мне нужно.',
    funFact: 'Müssen — модальный глагол (долженствовать).'
  },
  
  // === КУЛЬТУРА (culture) - Лёгкий уровень ===
  {
    question: 'Столица Германии?',
    correctAnswer: 'Берлин',
    options: ['Берлин', 'Мюнхен', 'Гамбург', 'Франкфурт'],
    category: 'culture',
    difficulty: 1,
    explanation: 'Берлин — столица и крупнейший город Германии.',
    funFact: 'В Берлине живёт около 3.7 миллиона человек.'
  },
  {
    question: 'Какой праздник 25 декабря в Германии?',
    correctAnswer: 'Рождество',
    options: ['Рождество', 'Пасха', 'Новый год', 'День объединения'],
    category: 'culture',
    difficulty: 1,
    explanation: 'Рождество (Weihnachten) — один из главных праздников в Германии.',
    funFact: 'Немецкие рождественские рынки (Weihnachtsmärkte) знамениты на весь мир!'
  },
  {
    question: 'Какое немецкое блюдо из сосисок?',
    correctAnswer: 'Wurst',
    options: ['Wurst', 'Schnitzel', 'Sauerkraut', 'Pretzel'],
    category: 'culture',
    difficulty: 1,
    explanation: 'Wurst — сосиски, колбаса. В Германии сотни видов!',
    funFact: 'Currywurst (карри-колбаска) — берлинское изобретение.'
  },
  {
    question: 'Какой немецкий автомобильный бренд?',
    correctAnswer: 'BMW',
    options: ['BMW', 'Toyota', 'Ford', 'Renault'],
    category: 'culture',
    difficulty: 1,
    explanation: 'BMW (Bayerische Motoren Werke) — немецкий автоконцерн.',
    funFact: 'Другие немецкие бренды: Mercedes, Volkswagen, Porsche, Audi.'
  },
  {
    question: 'Как называется немецкое пиво?',
    correctAnswer: 'Bier',
    options: ['Bier', 'Wein', 'Saft', 'Wasser'],
    category: 'culture',
    difficulty: 1,
    explanation: 'Bier — пиво. Германия славится своим пивом!',
    funFact: 'Октоберфест в Мюнхене — крупнейший пивной фестиваль мира.'
  },
  
  // === КУЛЬТУРА - Средний уровень ===
  {
    question: 'Кто написал "Фауста"?',
    correctAnswer: 'Гёте',
    options: ['Гёте', 'Шиллер', 'Гейне', 'Брехт'],
    category: 'culture',
    difficulty: 2,
    explanation: 'Иоганн Вольфганг фон Гёте — великий немецкий поэт и драматург.',
    funFact: 'Гёте работал над "Фаустом" более 60 лет!'
  },
  {
    question: 'В каком городе Октоберфест?',
    correctAnswer: 'Мюнхен',
    options: ['Мюнхен', 'Берлин', 'Гамбург', 'Кёльн'],
    category: 'culture',
    difficulty: 2,
    explanation: 'Октоберфест проходит в Мюнхене каждый год в конце сентября — начале октября.',
    funFact: 'На Октоберфест выпивают более 7 миллионов литров пива!'
  },
  {
    question: 'Какая река протекает через Берлин?',
    correctAnswer: 'Шпрее',
    options: ['Шпрее', 'Рейн', 'Эльба', 'Дунай'],
    category: 'culture',
    difficulty: 2,
    explanation: 'Река Шпрее (Spree) протекает через центр Берлина.',
    funFact: 'Рейн — самая длинная река Германии (1233 км).'
  },
  {
    question: 'Какой немецкий композитор написал 9 симфоний?',
    correctAnswer: 'Бетховен',
    options: ['Бетховен', 'Бах', 'Моцарт', 'Брамс'],
    category: 'culture',
    difficulty: 2,
    explanation: 'Людвиг ван Бетховен — великий немецкий композитор.',
    funFact: 'Бетховен писал музыку даже будучи полностью глухим!'
  },
  {
    question: 'Что такое Бранденбургские ворота?',
    correctAnswer: 'Символ Берлина',
    options: ['Символ Берлина', 'Дворец', 'Музей', 'Церковь'],
    category: 'culture',
    difficulty: 2,
    explanation: 'Бранденбургские ворота — символ Берлина и объединения Германии.',
    funFact: 'Построены в 1791 году, высота 26 метров.'
  },
  
  // === КУЛЬТУРА - Сложный уровень ===
  {
    question: 'В каком году пала Берлинская стена?',
    correctAnswer: '1989',
    options: ['1989', '1990', '1985', '1991'],
    category: 'culture',
    difficulty: 3,
    explanation: 'Берлинская стена пала 9 ноября 1989 года.',
    funFact: 'Стена разделяла Берлин 28 лет (1961-1989).'
  },
  {
    question: 'Какой немецкий философ написал "Критика чистого разума"?',
    correctAnswer: 'Кант',
    options: ['Кант', 'Гегель', 'Ницше', 'Маркс'],
    category: 'culture',
    difficulty: 3,
    explanation: 'Иммануил Кант — немецкий философ, основатель немецкой классической философии.',
    funFact: 'Кант всю жизнь прожил в Кёнигсберге (ныне Калининград).'
  },
  
  // === ЧИСЛА (numbers) - Лёгкий уровень ===
  {
    question: 'Как будет "один" по-немецки?',
    correctAnswer: 'eins',
    options: ['eins', 'zwei', 'drei', 'vier'],
    category: 'numbers',
    difficulty: 1,
    explanation: 'Eins — один на немецком языке.',
    funFact: 'Числа в немецком: 1=eins, 2=zwei, 3=drei, 4=vier, 5=fünf.'
  },
  {
    question: 'Как будет "два" по-немецки?',
    correctAnswer: 'zwei',
    options: ['zwei', 'eins', 'drei', 'vier'],
    category: 'numbers',
    difficulty: 1,
    explanation: 'Zwei — два на немецком языке.',
    funFact: 'Zwo — альтернативная форма "два", используется для ясности.'
  },
  {
    question: 'Как будет "три" по-немецки?',
    correctAnswer: 'drei',
    options: ['drei', 'eins', 'zwei', 'vier'],
    category: 'numbers',
    difficulty: 1,
    explanation: 'Drei — три на немецком языке.',
    funFact: 'Dreieck — треугольник (drei + Eck = три угла).'
  },
  {
    question: 'Как будет "десять" по-немецки?',
    correctAnswer: 'zehn',
    options: ['zehn', 'neun', 'elf', 'zwölf'],
    category: 'numbers',
    difficulty: 1,
    explanation: 'Zehn — десять на немецком языке.',
    funFact: 'Zehnmal — вдесятеро, в десять раз больше.'
  },
  
  // === ЧИСЛА - Средний уровень ===
  {
    question: 'Как будет "одиннадцать" по-немецки?',
    correctAnswer: 'elf',
    options: ['elf', 'zwölf', 'zehn', 'dreizehn'],
    category: 'numbers',
    difficulty: 2,
    explanation: 'Elf — одиннадцать на немецком языке.',
    funFact: 'Elf и zwölf — исключения, дальше числа образуются регулярно.'
  },
  {
    question: 'Как будет "двадцать" по-немецки?',
    correctAnswer: 'zwanzig',
    options: ['zwanzig', 'dreißig', 'vierzig', 'fünfzig'],
    category: 'numbers',
    difficulty: 2,
    explanation: 'Zwanzig — двадцать на немецком языке.',
    funFact: '21 = einundzwanzig (один и двадцать) — единицы идут перед десятками!'
  },
  {
    question: 'Как будет "сто" по-немецки?',
    correctAnswer: 'hundert',
    options: ['hundert', 'tausend', 'million', 'zehn'],
    category: 'numbers',
    difficulty: 2,
    explanation: 'Hundert — сто на немецком языке.',
    funFact: 'Tausend — тысяча. Million — миллион.'
  },
  {
    question: 'Как сказать 21 по-немецки?',
    correctAnswer: 'einundzwanzig',
    options: ['einundzwanzig', 'zwanzigeins', 'zwanzigundein', 'einzwanzig'],
    category: 'numbers',
    difficulty: 2,
    explanation: 'Einundzwanzig — 21. В немецком единицы перед десятками!',
    funFact: 'Это особенность немецких чисел: 45 = fünfundvierzig (пять и сорок).'
  },
  
  // === ЧИСЛА - Сложный уровень ===
  {
    question: 'Как будет "тысяча" по-немецки?',
    correctAnswer: 'tausend',
    options: ['tausend', 'hundert', 'million', 'milliarde'],
    category: 'numbers',
    difficulty: 3,
    explanation: 'Tausend — тысяча на немецком языке.',
    funFact: 'Million — миллион, Milliarde — миллиард.'
  },
  {
    question: 'Как сказать 345 по-немецки?',
    correctAnswer: 'dreihundertfünfundvierzig',
    options: ['dreihundertfünfundvierzig', 'dreihundertvierzigfünf', 'fünfundvierzigdreihundert', 'vierhundertfünfundreißig'],
    category: 'numbers',
    difficulty: 3,
    explanation: '345 = dreihundertfünfundvierzig (триста пять и сорок).',
    funFact: 'Немецкие числа могут быть очень длинными!'
  }
]

// Категории с иконками и цветами
const categoryConfig: Record<GermanCategory, { name: string; icon: React.ElementType; color: string }> = {
  vocabulary: { name: 'Лексика', icon: BookOpen, color: 'from-blue-400 to-cyan-500' },
  grammar: { name: 'Грамматика', icon: Pen, color: 'from-yellow-400 to-orange-500' },
  phrases: { name: 'Фразы', icon: MessageSquare, color: 'from-green-400 to-emerald-500' },
  culture: { name: 'Культура', icon: Flag, color: 'from-red-400 to-pink-500' },
  numbers: { name: 'Числа', icon: Target, color: 'from-purple-400 to-violet-500' },
  verbs: { name: 'Глаголы', icon: GraduationCap, color: 'from-indigo-400 to-blue-500' }
}

// Настройки уровней сложности
const difficultySettings = {
  1: { questionsCount: 8, timeLimit: 0, xp: 80, name: 'Базовый (1-3 год обучения)' },
  2: { questionsCount: 12, timeLimit: 30, xp: 110, name: 'Средний (4-6 год обучения)' },
  3: { questionsCount: 15, timeLimit: 25, xp: 140, name: 'Продвинутый (7+ год)' }
}

export default function GermanGame({ gradeId = 5, onExperience }: GermanGameProps) {
  const { playSound } = useSound()
  
  const [gameState, setGameState] = useState<'menu' | 'category' | 'playing' | 'result'>('menu')
  const [selectedCategory, setSelectedCategory] = useState<GermanCategory | 'all'>('all')
  const [difficulty, setDifficulty] = useState<1 | 2 | 3>(1)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [lives, setLives] = useState(3)
  const [timeLeft, setTimeLeft] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [streak, setStreak] = useState(0)
  const [gameQuestions, setGameQuestions] = useState<GermanQuestion[]>([])
  
  // Фильтрация и выборка вопросов
  const filteredQuestions = useMemo(() => {
    if (selectedCategory === 'all') return questions
    return questions.filter(q => q.category === selectedCategory)
  }, [selectedCategory])
  
  const startGame = useCallback((diff: 1 | 2 | 3, category: GermanCategory | 'all') => {
    const settings = difficultySettings[diff]
    setSelectedCategory(category)
    setDifficulty(diff)
    
    let availableQuestions = category === 'all' 
      ? questions 
      : questions.filter(q => q.category === category)
    
    const easyQuestions = availableQuestions.filter(q => q.difficulty === 1)
    const mediumQuestions = availableQuestions.filter(q => q.difficulty === 2)
    const hardQuestions = availableQuestions.filter(q => q.difficulty === 3)
    
    let selectedQuestions: GermanQuestion[] = []
    
    if (diff === 1) {
      selectedQuestions = [...easyQuestions]
    } else if (diff === 2) {
      selectedQuestions = [...easyQuestions.slice(0, 4), ...mediumQuestions]
    } else {
      selectedQuestions = [...easyQuestions.slice(0, 3), ...mediumQuestions.slice(0, 4), ...hardQuestions]
    }
    
    const shuffled = selectedQuestions.sort(() => Math.random() - 0.5)
    setGameQuestions(shuffled.slice(0, settings.questionsCount))
    
    setCurrentQuestionIndex(0)
    setScore(0)
    setCorrectAnswers(0)
    setLives(3)
    setStreak(0)
    setTimeLeft(settings.timeLimit)
    setGameState('playing')
    setSelectedAnswer(null)
    setShowResult(false)
  }, [])
  
  // Таймер
  useEffect(() => {
    if (gameState !== 'playing' || difficultySettings[difficulty].timeLimit === 0) return
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleAnswer(null)
          return difficultySettings[difficulty].timeLimit
        }
        return prev - 1
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [gameState, currentQuestionIndex, difficulty])
  
  const endGame = useCallback(() => {
    const settings = difficultySettings[difficulty]
    const percentage = correctAnswers / gameQuestions.length
    const earnedXp = Math.round(settings.xp * percentage)
    
    onExperience?.(earnedXp)
    playSound('win')
    setGameState('result')
  }, [difficulty, correctAnswers, gameQuestions.length, onExperience, playSound])
  
  const handleAnswer = useCallback((answer: string | null) => {
    if (showResult || selectedAnswer) return
    
    setSelectedAnswer(answer)
    setShowResult(true)
    
    const currentQuestion = gameQuestions[currentQuestionIndex]
    const isCorrect = answer === currentQuestion.correctAnswer
    
    if (isCorrect) {
      playSound('success')
      setCorrectAnswers(prev => prev + 1)
      setStreak(prev => prev + 1)
      const bonus = streak >= 3 ? 10 : 0
      setScore(prev => prev + 10 + bonus)
      playSound('levelUp')
    } else {
      playSound('error')
      setStreak(0)
      setLives(prev => prev - 1)
      if (lives <= 1) {
        setTimeout(() => endGame(), 1500)
        return
      }
    }
    
    setTimeout(() => {
      if (currentQuestionIndex < gameQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1)
        setSelectedAnswer(null)
        setShowResult(false)
        setTimeLeft(difficultySettings[difficulty].timeLimit)
      } else {
        endGame()
      }
    }, 2000)
  }, [showResult, selectedAnswer, gameQuestions, currentQuestionIndex, streak, lives, difficulty, playSound, endGame])
  
  
  // Рендер меню
  if (gameState === 'menu') {
    return (
      <div className="space-y-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
            <Languages className="w-8 h-8 text-yellow-400" />
            Немецкий язык
          </h2>
          <p className="text-gray-400">Willkommen! Добро пожаловать в мир немецкого языка!</p>
        </motion.div>
        
        <Card className="bg-gradient-to-br from-yellow-500/20 to-red-500/20 border-yellow-500/30">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-yellow-400" />
              Выбери уровень сложности
            </h3>
            <div className="grid gap-3">
              {[1, 2, 3].map((diff) => (
                <motion.div
                  key={diff}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => startGame(diff as 1 | 2 | 3, 'all')}
                    className={`w-full justify-between py-6 ${
                      diff === 1 ? 'bg-green-500 hover:bg-green-600' :
                      diff === 2 ? 'bg-yellow-500 hover:bg-yellow-600' :
                      'bg-red-500 hover:bg-red-600'
                    }`}
                  >
                    <span className="font-bold">{difficultySettings[diff as 1|2|3].name}</span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      {difficultySettings[diff as 1|2|3].xp} XP
                    </span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-400" />
              Или выбери категорию
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(categoryConfig).map(([key, config]) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => startGame(difficulty, key as GermanCategory)}
                    className={`w-full py-4 bg-gradient-to-r ${config.color}`}
                  >
                    <config.icon className="w-5 h-5 mr-2" />
                    {config.name}
                  </Button>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
  
  // Рендер игрового процесса
  if (gameState === 'playing') {
    const currentQuestion = gameQuestions[currentQuestionIndex]
    if (!currentQuestion) return null
    
    const config = categoryConfig[currentQuestion.category]
    
    return (
      <div className="space-y-4">
        {/* Статистика */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <Heart 
                  key={i} 
                  className={`w-6 h-6 ${i < lives ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} 
                />
              ))}
            </div>
            <div className="flex items-center gap-1 text-yellow-400">
              <Trophy className="w-5 h-5" />
              <span className="font-bold">{score}</span>
            </div>
            {streak >= 2 && (
              <motion.div 
                className="flex items-center gap-1 text-orange-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
              >
                <Zap className="w-5 h-5" />
                {streak}x
              </motion.div>
            )}
          </div>
          
          {difficultySettings[difficulty].timeLimit > 0 && (
            <div className={`flex items-center gap-1 ${timeLeft <= 10 ? 'text-red-400' : 'text-gray-400'}`}>
              <Clock className="w-5 h-5" />
              <span className="font-bold">{timeLeft}</span>
            </div>
          )}
        </div>
        
        {/* Прогресс */}
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-yellow-400 to-red-500"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIndex + 1) / gameQuestions.length) * 100}%` }}
          />
        </div>
        
        {/* Категория */}
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${config.color}`}>
          <config.icon className="w-4 h-4" />
          <span className="text-sm font-medium">{config.name}</span>
        </div>
        
        {/* Вопрос */}
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-6 text-center">
              {currentQuestion.question}
            </h3>
            
            <div className="grid gap-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === option
                const isCorrect = option === currentQuestion.correctAnswer
                let buttonClass = 'bg-white/10 hover:bg-white/20 border-white/20'
                
                if (showResult) {
                  if (isCorrect) {
                    buttonClass = 'bg-green-500 border-green-400'
                  } else if (isSelected && !isCorrect) {
                    buttonClass = 'bg-red-500 border-red-400'
                  }
                }
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      onClick={() => handleAnswer(option)}
                      disabled={showResult}
                      className={`w-full py-4 justify-start text-left ${buttonClass}`}
                    >
                      <span className="mr-3 font-bold">{['А', 'Б', 'В', 'Г'][index]}.</span>
                      {option}
                      {showResult && isCorrect && <Check className="w-5 h-5 ml-auto" />}
                      {showResult && isSelected && !isCorrect && <X className="w-5 h-5 ml-auto" />}
                    </Button>
                  </motion.div>
                )
              })}
            </div>
          </CardContent>
        </Card>
        
        {/* Объяснение */}
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className={`${
              selectedAnswer === currentQuestion.correctAnswer 
                ? 'bg-green-500/20 border-green-500/30' 
                : 'bg-red-500/20 border-red-500/30'
            }`}>
              <CardContent className="p-4">
                <p className="text-sm mb-2">{currentQuestion.explanation}</p>
                {currentQuestion.funFact && (
                  <p className="text-xs text-gray-400 italic">
                    💡 {currentQuestion.funFact}
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    )
  }
  
  // Рендер результатов
  if (gameState === 'result') {
    const percentage = Math.round((correctAnswers / gameQuestions.length) * 100)
    const earnedXp = Math.round(difficultySettings[difficulty].xp * (correctAnswers / gameQuestions.length))
    
    return (
      <div className="space-y-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Trophy className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Fertig! Готово!</h2>
          <p className="text-gray-400">Твой результат</p>
        </motion.div>
        
        <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30">
          <CardContent className="p-6 text-center">
            <div className="text-5xl font-bold text-yellow-400 mb-2">{percentage}%</div>
            <p className="text-gray-400">правильных ответов</p>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-4 text-center">
              <Check className="w-8 h-8 mx-auto text-green-400 mb-2" />
              <div className="text-2xl font-bold">{correctAnswers}</div>
              <p className="text-sm text-gray-400">Richtig (Правильно)</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-4 text-center">
              <Zap className="w-8 h-8 mx-auto text-yellow-400 mb-2" />
              <div className="text-2xl font-bold">+{earnedXp} XP</div>
              <p className="text-sm text-gray-400">Заработано</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-3">
          <Button
            onClick={() => setGameState('menu')}
            className="py-6 bg-gradient-to-r from-yellow-500 to-red-500"
          >
            Nochmal spielen (Играть снова)
          </Button>
        </div>
      </div>
    )
  }
  
  return null
}
