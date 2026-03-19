'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Globe, Map, Flag, Mountain, Cloud, Compass,
  Star, Trophy, Zap, Heart, Clock, Target, Check, X, Sparkles, MapPin
} from 'lucide-react'
import { useSound } from '@/hooks/useSound'

interface GeographyGameProps {
  gradeId?: number
  onExperience?: (xp: number) => void
}

// Категории вопросов
type GeoCategory = 'countries' | 'continents' | 'nature' | 'climate' | 'russia' | 'flags'

interface GeoQuestion {
  question: string
  correctAnswer: string
  options: string[]
  category: GeoCategory
  difficulty: 1 | 2 | 3
  explanation?: string
  image?: string
}

// База вопросов по географии
const questions: GeoQuestion[] = [
  // Страны и столицы (difficulty 1)
  {
    question: 'Какая столица Франции?',
    correctAnswer: 'Париж',
    options: ['Париж', 'Лондон', 'Берлин', 'Мадрид'],
    category: 'countries',
    difficulty: 1,
    explanation: 'Париж — столица и крупнейший город Франции, расположен на реке Сена. Известен Эйфелевой башней!'
  },
  {
    question: 'Какая столица Японии?',
    correctAnswer: 'Токио',
    options: ['Киото', 'Токио', 'Осака', 'Нагоя'],
    category: 'countries',
    difficulty: 1,
    explanation: 'Токио — столица Японии, один из крупнейших городов мира с населением более 13 миллионов человек.'
  },
  {
    question: 'Какая столица Италии?',
    correctAnswer: 'Рим',
    options: ['Милан', 'Венеция', 'Рим', 'Флоренция'],
    category: 'countries',
    difficulty: 1,
    explanation: 'Рим — столица Италии, «Вечный город». Здесь находится Колизей и Ватикан.'
  },
  {
    question: 'Какая столица Германии?',
    correctAnswer: 'Берлин',
    options: ['Мюнхен', 'Гамбург', 'Берлин', 'Франкфурт'],
    category: 'countries',
    difficulty: 1,
    explanation: 'Берлин — столица Германии, город с богатой историей и современной архитектурой.'
  },
  {
    question: 'Какая самая большая страна в мире по площади?',
    correctAnswer: 'Россия',
    options: ['Китай', 'США', 'Россия', 'Канада'],
    category: 'countries',
    difficulty: 1,
    explanation: 'Россия — крупнейшая страна мира, занимает более 17 миллионов квадратных километров!'
  },
  {
    question: 'На каком материке находится Египет?',
    correctAnswer: 'Африка',
    options: ['Азия', 'Африка', 'Европа', 'Австралия'],
    category: 'countries',
    difficulty: 1,
    explanation: 'Египет находится на северо-востоке Африки. Там находятся знаменитые пирамиды Гизы!'
  },
  
  // Страны и столицы (difficulty 2)
  {
    question: 'Какая столица Австралии?',
    correctAnswer: 'Канберра',
    options: ['Сидней', 'Мельбурн', 'Канберра', 'Брисбен'],
    category: 'countries',
    difficulty: 2,
    explanation: 'Канберра — столица Австралии. Многие думают, что это Сидней, но это не так!'
  },
  {
    question: 'Какая столица Бразилии?',
    correctAnswer: 'Бразилиа',
    options: ['Рио-де-Жанейро', 'Сан-Паулу', 'Бразилиа', 'Сальвадор'],
    category: 'countries',
    difficulty: 2,
    explanation: 'Бразилиа — столица Бразилии с 1960 года. Город был специально построен как столица.'
  },
  {
    question: 'Какая столица Канады?',
    correctAnswer: 'Оттава',
    options: ['Торонто', 'Ванкувер', 'Оттава', 'Монреаль'],
    category: 'countries',
    difficulty: 2,
    explanation: 'Оттава — столица Канады. Город известен своими парками и каналами.'
  },
  {
    question: 'Сколько стран в Европе?',
    correctAnswer: 'Около 50',
    options: ['Около 30', 'Около 40', 'Около 50', 'Около 60'],
    category: 'countries',
    difficulty: 2,
    explanation: 'В Европе около 50 стран, включая Россию, которая находится и в Европе, и в Азии.'
  },
  {
    question: 'Какая страна самая населённая в мире?',
    correctAnswer: 'Индия',
    options: ['Китай', 'Индия', 'США', 'Индонезия'],
    category: 'countries',
    difficulty: 2,
    explanation: 'В 2023 году Индия обогнала Китай по населению и стала самой населённой страной мира!'
  },
  
  // Страны и столицы (difficulty 3)
  {
    question: 'Какая столица Шри-Ланки?',
    correctAnswer: 'Коломбо',
    options: ['Коломбо', 'Канди', 'Джафна', 'Галле'],
    category: 'countries',
    difficulty: 3,
    explanation: 'Коломбо — крупнейший город и коммерческая столица Шри-Ланки, островного государства в Индийском океане.'
  },
  {
    question: 'Какая столица Казахстана?',
    correctAnswer: 'Астана',
    options: ['Алматы', 'Астана', 'Шымкент', 'Караганда'],
    category: 'countries',
    difficulty: 3,
    explanation: 'Астана (ранее Нур-Султан) — столица Казахстана с 1997 года. Город активно развивается и строится.'
  },
  {
    question: 'Какая страна имеет самую длинную береговую линию?',
    correctAnswer: 'Канада',
    options: ['Россия', 'Австралия', 'Канада', 'Индонезия'],
    category: 'countries',
    difficulty: 3,
    explanation: 'Канада имеет самую длинную береговую линию в мире — более 202 000 километров!'
  },
  
  // Материки и океаны (difficulty 1)
  {
    question: 'Какой самый большой материк?',
    correctAnswer: 'Евразия',
    options: ['Африка', 'Евразия', 'Северная Америка', 'Южная Америка'],
    category: 'continents',
    difficulty: 1,
    explanation: 'Евразия — крупнейший материк, занимает около 36% суши Земли. Здесь живёт более 70% населения планеты!'
  },
  {
    question: 'Сколько материков на Земле?',
    correctAnswer: '6',
    options: ['5', '6', '7', '8'],
    category: 'continents',
    difficulty: 1,
    explanation: 'На Земле 6 материков: Евразия, Африка, Северная Америка, Южная Америка, Австралия и Антарктида.'
  },
  {
    question: 'Какой океан самый большой?',
    correctAnswer: 'Тихий',
    options: ['Атлантический', 'Тихий', 'Индийский', 'Северный Ледовитый'],
    category: 'continents',
    difficulty: 1,
    explanation: 'Тихий океан — самый большой океан Земли, он занимает около трети поверхности планеты!'
  },
  {
    question: 'Какой материк самый холодный?',
    correctAnswer: 'Антарктида',
    options: ['Евразия', 'Северная Америка', 'Антарктида', 'Австралия'],
    category: 'continents',
    difficulty: 1,
    explanation: 'Антарктида — самый холодный материк. Там зафиксирована температура -89,2°C!'
  },
  {
    question: 'Какой океан находится вокруг Северного полюса?',
    correctAnswer: 'Северный Ледовитый',
    options: ['Тихий', 'Атлантический', 'Северный Ледовитый', 'Индийский'],
    category: 'continents',
    difficulty: 1,
    explanation: 'Северный Ледовитый океан — самый маленький океан Земли, расположен вокруг Северного полюса.'
  },
  
  // Материки и океаны (difficulty 2)
  {
    question: 'Какой океан омывает берега Европы и Африки?',
    correctAnswer: 'Атлантический',
    options: ['Тихий', 'Атлантический', 'Индийский', 'Северный Ледовитый'],
    category: 'continents',
    difficulty: 2,
    explanation: 'Атлантический океан находится между Европой, Африкой и Америкой.'
  },
  {
    question: 'Какой пролив separates Европу от Африки?',
    correctAnswer: 'Гибралтарский',
    options: ['Берингов', 'Гибралтарский', 'Ла-Манш', 'Босфор'],
    category: 'continents',
    difficulty: 2,
    explanation: 'Гибралтарский пролив соединяет Атлантический океан со Средиземным морем и отделяет Европу от Африки.'
  },
  {
    question: 'Какое море самое большое в мире?',
    correctAnswer: 'Филиппинское',
    options: ['Карибское', 'Филиппинское', 'Средиземное', 'Охотское'],
    category: 'continents',
    difficulty: 2,
    explanation: 'Филиппинское море — самое большое море в мире, его площадь более 5 миллионов км².'
  },
  {
    question: 'Какой материк пересекается экватором?',
    correctAnswer: 'Африка',
    options: ['Евразия', 'Африка', 'Северная Америка', 'Антарктида'],
    category: 'continents',
    difficulty: 2,
    explanation: 'Африка — единственный материк, который экватор пересекает посередине.'
  },
  
  // Материки и океаны (difficulty 3)
  {
    question: 'Какая самая длинная река в мире?',
    correctAnswer: 'Нил',
    options: ['Амазонка', 'Нил', 'Янцзы', 'Миссисипи'],
    category: 'continents',
    difficulty: 3,
    explanation: 'Нил — самая длинная река в мире (около 6650 км). Она течёт через северо-восточную Африку.'
  },
  {
    question: 'Какое море самое солёное в мире?',
    correctAnswer: 'Мёртвое море',
    options: ['Красное море', 'Мёртвое море', 'Средиземное море', 'Каспийское море'],
    category: 'continents',
    difficulty: 3,
    explanation: 'Мёртвое море — самое солёное море в мире. В нём невозможно утонуть из-за высокой солёности воды!'
  },
  {
    question: 'Где находится Марианская впадина?',
    correctAnswer: 'Тихий океан',
    options: ['Атлантический океан', 'Тихий океан', 'Индийский океан', 'Северный Ледовитый'],
    category: 'continents',
    difficulty: 3,
    explanation: 'Марианская впадина — самое глубокое место на Земле (11034 м), находится в Тихом океане.'
  },
  
  // Природные явления (difficulty 1)
  {
    question: 'Что такое цунами?',
    correctAnswer: 'Огромные волны',
    options: ['Ураган', 'Землетрясение', 'Огромные волны', 'Наводнение'],
    category: 'nature',
    difficulty: 1,
    explanation: 'Цунами — это гигантские волны, вызванные подводными землетрясениями или извержениями вулканов.'
  },
  {
    question: 'Как называется гора, из которой идёт лава?',
    correctAnswer: 'Вулкан',
    options: ['Гейзер', 'Вулкан', 'Холм', 'Плато'],
    category: 'nature',
    difficulty: 1,
    explanation: 'Вулкан — гора с отверстием на вершине, через которое из недр Земли выходит лава, пепел и газы.'
  },
  {
    question: 'Что такое землетрясение?',
    correctAnswer: 'Колебания земной поверхности',
    options: ['Наводнение', 'Колебания земной поверхности', 'Ураган', 'Гроза'],
    category: 'nature',
    difficulty: 1,
    explanation: 'Землетрясение — это колебания земной поверхности, вызванные движением тектонических плит.'
  },
  {
    question: 'Как называется место, где река впадает в море?',
    correctAnswer: 'Устье',
    options: ['Исток', 'Устье', 'Русло', 'Дельта'],
    category: 'nature',
    difficulty: 1,
    explanation: 'Устье — место, где река впадает в море, озеро или другую реку.'
  },
  
  // Природные явления (difficulty 2)
  {
    question: 'Что такое гейзер?',
    correctAnswer: 'Источник горячей воды',
    options: ['Горячий источник', 'Источник горячей воды', 'Вулкан', 'Ледник'],
    category: 'nature',
    difficulty: 2,
    explanation: 'Гейзер — горячий источник, периодически выбрасывающий фонтан горячей воды и пара.'
  },
  {
    question: 'Как называется низменность, где выпадает мало осадков?',
    correctAnswer: 'Пустыня',
    options: ['Степь', 'Пустыня', 'Тундра', 'Саванна'],
    category: 'nature',
    difficulty: 2,
    explanation: 'Пустыня — область с очень малым количеством осадков (менее 250 мм в год).'
  },
  {
    question: 'Что такое ледник?',
    correctAnswer: 'Массив льда на суше',
    options: ['Замёрзшее озеро', 'Массив льда на суше', 'Снежный сугроб', 'Айсберг'],
    category: 'nature',
    difficulty: 2,
    explanation: 'Ледник — это массив льда, который образуется из снега и медленно движется под своей тяжестью.'
  },
  {
    question: 'Какая самая высокая гора в мире?',
    correctAnswer: 'Эверест',
    options: ['Килиманджаро', 'Эверест', 'Эльбрус', 'Мак-Кинли'],
    category: 'nature',
    difficulty: 2,
    explanation: 'Эверест (Джомолунгма) — самая высокая гора в мире, её высота 8848 метров над уровнем моря!'
  },
  
  // Природные явления (difficulty 3)
  {
    question: 'Что такое айсберг?',
    correctAnswer: 'Плавучая ледяная гора',
    options: ['Гора из снега', 'Плавучая ледяная гора', 'Ледник', 'Замёрзшее море'],
    category: 'nature',
    difficulty: 3,
    explanation: 'Айсберг — это огромный кусок льда, отломившийся от ледника и плавающий в океане. Над водой только 10%!'
  },
  {
    question: 'Что такое коралловый риф?',
    correctAnswer: 'Подводная постройка из кораллов',
    options: ['Подводная скала', 'Подводная постройка из кораллов', 'Водоросли', 'Песчаная отмель'],
    category: 'nature',
    difficulty: 3,
    explanation: 'Коралловый риф — подводная структура, образованная колониями коралловых полипов. Дом для множества рыб!'
  },
  
  // Климат (difficulty 1)
  {
    question: 'Какой климат в тундре?',
    correctAnswer: 'Холодный',
    options: ['Тёплый', 'Холодный', 'Жаркий', 'Тропический'],
    category: 'climate',
    difficulty: 1,
    explanation: 'В тундре холодный климат. Зима длится 8-9 месяцев, а лето короткое и прохладное.'
  },
  {
    question: 'Что такое сезон дождей?',
    correctAnswer: 'Период обильных осадков',
    options: ['Засуха', 'Период обильных осадков', 'Снегопад', 'Гроза'],
    category: 'climate',
    difficulty: 1,
    explanation: 'Сезон дождей — период года, когда выпадает много осадков. Характерен для тропиков.'
  },
  {
    question: 'Где на Земле самый жаркий климат?',
    correctAnswer: 'В тропиках',
    options: ['На полюсах', 'В тропиках', 'В умеренном поясе', 'В тундре'],
    category: 'climate',
    difficulty: 1,
    explanation: 'В тропиках самый жаркий климат — там круглый год тепло, температура редко опускается ниже 25°C.'
  },
  {
    question: 'Что такое засуха?',
    correctAnswer: 'Длительное отсутствие дождей',
    options: ['Наводнение', 'Длительное отсутствие дождей', 'Сильный ветер', 'Похолодание'],
    category: 'climate',
    difficulty: 1,
    explanation: 'Засуха — это длительный период без дождей, который приводит к высыханию почвы и гибели растений.'
  },
  
  // Климат (difficulty 2)
  {
    question: 'Какой климатический пояс находится на экваторе?',
    correctAnswer: 'Экваториальный',
    options: ['Тропический', 'Экваториальный', 'Умеренный', 'Арктический'],
    category: 'climate',
    difficulty: 2,
    explanation: 'Экваториальный пояс — самый жаркий и влажный, расположен вдоль экватора.'
  },
  {
    question: 'Почему на полюсах холодно?',
    correctAnswer: 'Солнечные лучи падают под углом',
    options: ['Там нет суши', 'Солнечные лучи падают под углом', 'Там дуют ветры', 'Там мало воды'],
    category: 'climate',
    difficulty: 2,
    explanation: 'На полюсах холодно, потому что солнечные лучи падают на Землю под очень острым углом.'
  },
  {
    question: 'Что такое муссон?',
    correctAnswer: 'Ветер, меняющий направление по сезонам',
    options: ['Холодный ветер', 'Ветер, меняющий направление по сезонам', 'Ураган', 'Смерч'],
    category: 'climate',
    difficulty: 2,
    explanation: 'Муссон — устойчивый ветер, который дует зимой с суши на море, а летом — с моря на сушу.'
  },
  {
    question: 'Как называется граница между тёплым и холодным воздухом?',
    correctAnswer: 'Атмосферный фронт',
    options: ['Атмосферный фронт', 'Циклон', 'Антициклон', 'Изотерма'],
    category: 'climate',
    difficulty: 2,
    explanation: 'Атмосферный фронт — переходная зона между тёплыми и холодными воздушными массами.'
  },
  
  // Климат (difficulty 3)
  {
    question: 'Что такое парниковый эффект?',
    correctAnswer: 'Нагревание атмосферы газами',
    options: ['Охлаждение планеты', 'Нагревание атмосферы газами', 'Озоновая дыра', 'Кислотный дождь'],
    category: 'climate',
    difficulty: 3,
    explanation: 'Парниковый эффект — нагревание поверхности Земли из-за того, что газы атмосферы удерживают тепло.'
  },
  {
    question: 'Какое влияние оказывает Гольфстрим на климат Европы?',
    correctAnswer: 'Делает его теплее',
    options: ['Делает его холоднее', 'Делает его теплее', 'Не влияет', 'Делает суше'],
    category: 'climate',
    difficulty: 3,
    explanation: 'Гольфстрим — тёплое океаническое течение, которое делает климат Европы значительно теплее.'
  },
  
  // Россия (difficulty 1)
  {
    question: 'Какая река самая длинная в России?',
    correctAnswer: 'Обь с Иртышом',
    options: ['Волга', 'Енисей', 'Обь с Иртышом', 'Лена'],
    category: 'russia',
    difficulty: 1,
    explanation: 'Обь с Иртышом — самая длинная речная система России (5410 км). Волга — самая длинная река, текущая полностью по России.'
  },
  {
    question: 'Какое море омывает Россию на севере?',
    correctAnswer: 'Северный Ледовитый океан',
    options: ['Тихий океан', 'Северный Ледовитый океан', 'Атлантический океан', 'Индийский океан'],
    category: 'russia',
    difficulty: 1,
    explanation: 'На севере Россию омывают моря Северного Ледовитого океана: Баренцево, Карское, Лаптевых и другие.'
  },
  {
    question: 'Столица России?',
    correctAnswer: 'Москва',
    options: ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург'],
    category: 'russia',
    difficulty: 1,
    explanation: 'Москва — столица России, крупнейший город страны. Основана в 1147 году князем Юрием Долгоруким.'
  },
  {
    question: 'Какая самая высокая гора в России?',
    correctAnswer: 'Эльбрус',
    options: ['Казбек', 'Эльбрус', 'Белуха', 'Ключевская Сопка'],
    category: 'russia',
    difficulty: 1,
    explanation: 'Эльбрус — самая высокая гора России (5642 м). Это потухший вулкан на Кавказе.'
  },
  {
    question: 'Как называется самое глубокое озеро в мире, находящееся в России?',
    correctAnswer: 'Байкал',
    options: ['Ладожское', 'Байкал', 'Онежское', 'Каспийское'],
    category: 'russia',
    difficulty: 1,
    explanation: 'Байкал — самое глубокое озеро в мире (1642 м). В нём содержится 20% мировых запасов пресной воды!'
  },
  
  // Россия (difficulty 2)
  {
    question: 'Сколько часовых поясов в России?',
    correctAnswer: '11',
    options: ['9', '10', '11', '12'],
    category: 'russia',
    difficulty: 2,
    explanation: 'Россия занимает 11 часовых поясов — больше, чем любая другая страна мира!'
  },
  {
    question: 'Какой город России называют «Северной столицей»?',
    correctAnswer: 'Санкт-Петербург',
    options: ['Москва', 'Санкт-Петербург', 'Мурманск', 'Архангельск'],
    category: 'russia',
    difficulty: 2,
    explanation: 'Санкт-Петербург называют «Северной столицей» или «Северной Венецией» из-за множества каналов и мостов.'
  },
  {
    question: 'Какой полуостров находится на востоке России?',
    correctAnswer: 'Камчатка',
    options: ['Кольский', 'Камчатка', 'Ямал', 'Таймыр'],
    category: 'russia',
    difficulty: 2,
    explanation: 'Камчатка — полуостров на востоке России, известен своими вулканами и гейзерами.'
  },
  {
    question: 'Какое озеро самое большое в Европе?',
    correctAnswer: 'Ладожское',
    options: ['Онежское', 'Ладожское', 'Байкал', 'Ильмень'],
    category: 'russia',
    difficulty: 2,
    explanation: 'Ладожское озеро — крупнейшее озеро Европы, находится в Ленинградской области.'
  },
  {
    question: 'Какой пролив отделяет Россию от Аляски?',
    correctAnswer: 'Берингов',
    options: ['Берингов', 'Лаперуза', 'Кунаширский', 'Пролив Невельского'],
    category: 'russia',
    difficulty: 2,
    explanation: 'Берингов пролив отделяет Чукотку (Россия) от Аляски (США). В самом узком месте — всего 86 км!'
  },
  
  // Россия (difficulty 3)
  {
    question: 'Как называется самая восточная точка России?',
    correctAnswer: 'Мыс Дежнёва',
    options: ['Мыс Дежнёва', 'Мыс Челюскин', 'Мыс Лопатка', 'Мыс Канин Нос'],
    category: 'russia',
    difficulty: 3,
    explanation: 'Мыс Дежнёва — восточная оконечность Чукотского полуострова, самая восточная точка России.'
  },
  {
    question: 'Какая равнина самая большая в России?',
    correctAnswer: 'Восточно-Европейская',
    options: ['Западно-Сибирская', 'Восточно-Европейская', 'Среднесибирское плоскогорье', 'Прикаспийская'],
    category: 'russia',
    difficulty: 3,
    explanation: 'Восточно-Европейская (Русская) равнина — крупнейшая равнина Европы, занимает большую часть европейской России.'
  },
  {
    question: 'Какой город России является крупнейшим портом на Тихом океане?',
    correctAnswer: 'Владивосток',
    options: ['Петропавловск-Камчатский', 'Владивосток', 'Находка', 'Магадан'],
    category: 'russia',
    difficulty: 3,
    explanation: 'Владивосток — крупнейший порт России на Тихом океане, конечный пункт Транссибирской магистрали.'
  },
  
  // Флаги и символы (difficulty 1)
  {
    question: 'Какие цвета на флаге России?',
    correctAnswer: 'Белый, синий, красный',
    options: ['Белый, синий, красный', 'Белый, красный, синий', 'Синий, белый, красный', 'Красный, белый, синий'],
    category: 'flags',
    difficulty: 1,
    explanation: 'Флаг России имеет три горизонтальные полосы: белую (сверху), синюю и красную (снизу).'
  },
  {
    question: 'Какие цвета на флаге США?',
    correctAnswer: 'Красный, белый, синий',
    options: ['Красный, белый, синий', 'Красный, белый, зелёный', 'Синий, жёлтый, красный', 'Белый, синий, жёлтый'],
    category: 'flags',
    difficulty: 1,
    explanation: 'Флаг США состоит из 13 красных и белых полос и синего прямоугольника с 50 белыми звёздами.'
  },
  {
    question: 'Какой символ изображён на флаге Канады?',
    correctAnswer: 'Клён',
    options: ['Медведь', 'Клён', 'Бобр', 'Роза'],
    category: 'flags',
    difficulty: 1,
    explanation: 'На флаге Канады изображён красный кленовый лист — символ страны кленового сиропа!'
  },
  {
    question: 'Какие цвета на флаге Китая?',
    correctAnswer: 'Красный и жёлтый',
    options: ['Красный и белый', 'Красный и жёлтый', 'Синий и жёлтый', 'Зелёный и красный'],
    category: 'flags',
    difficulty: 1,
    explanation: 'Флаг Китая красный с пятью жёлтыми звёздами. Красный — цвет революции.'
  },
  
  // Флаги и символы (difficulty 2)
  {
    question: 'Какая страна имеет флаг с изображением кенгуру?',
    correctAnswer: 'Австралия',
    options: ['Австралия', 'Новая Зеландия', 'Канада', 'ЮАР'],
    category: 'flags',
    difficulty: 2,
    explanation: 'Австралия — страна, где кенгуру изображён на гербе, а не на флаге! Но кенгуру — неофициальный символ Австралии.'
  },
  {
    question: 'Сколько звёзд на флаге США?',
    correctAnswer: '50',
    options: ['48', '49', '50', '51'],
    category: 'flags',
    difficulty: 2,
    explanation: 'На флаге США 50 звёзд — по одной на каждый штат. Последняя звезда добавлена в 1960 году.'
  },
  {
    question: 'Какие цвета на флаге Германии?',
    correctAnswer: 'Чёрный, красный, золотой',
    options: ['Чёрный, красный, белый', 'Чёрный, красный, золотой', 'Красный, белый, синий', 'Чёрный, жёлтый, красный'],
    category: 'flags',
    difficulty: 2,
    explanation: 'Флаг Германии состоит из трёх горизонтальных полос: чёрной, красной и золотой (жёлтой).'
  },
  {
    question: 'Какая страна имеет красный флаг с белым кругом в центре?',
    correctAnswer: 'Япония',
    options: ['Китай', 'Япония', 'Южная Корея', 'Бангладеш'],
    category: 'flags',
    difficulty: 2,
    explanation: 'Флаг Японии — красный круг (солнце) на белом фоне. Японию называют «Страной восходящего солнца».'
  },
  
  // Флаги и символы (difficulty 3)
  {
    question: 'Какая страна имеет флаг с изображением солнца?',
    correctAnswer: 'Аргентина',
    options: ['Аргентина', 'Уругвай', 'Бангладеш', 'Япония'],
    category: 'flags',
    difficulty: 3,
    explanation: 'Флаг Аргентины имеет светло-голубые и белые полосы с «Солнцем Мая» в центре.'
  },
  {
    question: 'Какая страна имеет самый старый флаг в мире?',
    correctAnswer: 'Дания',
    options: ['Великобритания', 'Дания', 'Франция', 'Нидерланды'],
    category: 'flags',
    difficulty: 3,
    explanation: 'Флаг Дании (Даннеброг) — самый старый государственный флаг в мире, используется с 1219 года!'
  },
  {
    question: 'Какой символ изображён на флаге Израиля?',
    correctAnswer: 'Звезда Давида',
    options: ['Полумесяц', 'Звезда Давида', 'Крест', 'Мечеть'],
    category: 'flags',
    difficulty: 3,
    explanation: 'На флаге Израиля изображён Маген Давид (Звезда Давида) — еврейский символ в виде шестиконечной звезды.'
  }
]

// Настройки сложности
const difficultySettings = {
  0: { name: 'Лёгкий', count: 8, time: 0, diffLevel: 1, xp: 70 },
  1: { name: 'Средний', count: 12, time: 20, diffLevel: 2, xp: 100 },
  2: { name: 'Сложный', count: 15, time: 15, diffLevel: 3, xp: 130 }
}

// Настройки категорий
const categorySettings = {
  countries: { name: 'Страны и столицы', icon: '🌍', color: 'from-blue-400 to-cyan-500' },
  continents: { name: 'Материки и океаны', icon: '🗺️', color: 'from-green-400 to-emerald-500' },
  nature: { name: 'Природные явления', icon: '🌋', color: 'from-orange-400 to-red-500' },
  climate: { name: 'Климат', icon: '🌤️', color: 'from-yellow-400 to-orange-500' },
  russia: { name: 'Россия', icon: '🇷🇺', color: 'from-red-400 to-rose-500' },
  flags: { name: 'Флаги и символы', icon: '🚩', color: 'from-purple-400 to-violet-500' }
}

export default function GeographyGame({ gradeId = 0, onExperience }: GeographyGameProps) {
  const { playSuccess, playError, playWin, playLevelUp } = useSound()
  
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'result'>('setup')
  const [difficulty, setDifficulty] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<GeoCategory | 'all'>('all')
  
  const [currentQuestions, setCurrentQuestions] = useState<GeoQuestion[]>([])
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
    const currentSettings = difficultySettings[difficulty as keyof typeof difficultySettings]
    const earnedXP = Math.round((score / (currentSettings.count * 10)) * currentSettings.xp)
    onExperience?.(earnedXP)
    setGameState('result')
  }, [playWin, score, difficulty, onExperience])
  
  // Следующий вопрос
  const nextQuestion = useCallback(() => {
    const currentSettings = difficultySettings[difficulty as keyof typeof difficultySettings]
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setTimeLeft(currentSettings.time)
      setAnswered(false)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      endGame()
    }
  }, [currentIndex, currentQuestions.length, difficulty, endGame])
  
  // Таймер
  useEffect(() => {
    const currentSettings = difficultySettings[difficulty as keyof typeof difficultySettings]
    if (gameState === 'playing' && currentSettings.time > 0 && !answered) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleTimeout()
            return currentSettings.time
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
      }, showExplanation ? 3000 : 2000)
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
            <span className="text-3xl">🌍</span>
            География
            <span className="text-3xl">🗺️</span>
          </h2>
          <p className="text-gray-400">Проверь знания о нашей планете!</p>
        </motion.div>
        
        {/* Выбор категории */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cyan-400" />
              Категория
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <motion.button
              onClick={() => setSelectedCategory('all')}
              className={`p-3 rounded-xl border-2 transition-all ${
                selectedCategory === 'all'
                  ? 'border-cyan-400 bg-cyan-400/20'
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
                onClick={() => setSelectedCategory(key as GeoCategory)}
                className={`p-3 rounded-xl border-2 transition-all ${
                  selectedCategory === key
                    ? `bg-gradient-to-br ${value.color} border-transparent`
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
              <Zap className="w-5 h-5 text-yellow-400" />
              Сложность
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-2">
            {Object.entries(difficultySettings).map(([key, value]) => (
              <motion.button
                key={key}
                onClick={() => setDifficulty(Number(key))}
                className={`p-3 rounded-xl border-2 transition-all ${
                  difficulty === Number(key)
                    ? 'border-yellow-400 bg-yellow-400/20'
                    : 'border-white/20 hover:border-white/40'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="font-bold">{value.name}</div>
                <div className="text-xs text-gray-400">
                  {value.count} вопросов
                  {value.time > 0 && ` • ${value.time}сек`}
                </div>
                <div className="text-xs text-yellow-400 mt-1">+{value.xp} XP</div>
              </motion.button>
            ))}
          </CardContent>
        </Card>
        
        {/* Кнопка старта */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            onClick={startGame}
            className="w-full py-6 text-xl font-bold bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 rounded-2xl"
          >
            <Globe className="w-6 h-6 mr-2" />
            Начать игру
          </Button>
        </motion.div>
      </div>
    )
  }
  
  // Рендер результатов
  if (gameState === 'result') {
    const currentSettings = difficultySettings[difficulty as keyof typeof difficultySettings]
    const earnedXP = Math.round((score / (currentSettings.count * 10)) * currentSettings.xp)
    const accuracy = Math.round((score / (currentSettings.count * 10)) * 100)
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6"
      >
        <div className="text-6xl mb-4">🏆</div>
        <h2 className="text-2xl sm:text-3xl font-bold">Отлично!</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-4">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{score}</div>
              <div className="text-xs text-gray-400">Очков</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-4">
              <Zap className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{earnedXP}</div>
              <div className="text-xs text-gray-400">XP</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-4">
              <Target className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{accuracy}%</div>
              <div className="text-xs text-gray-400">Точность</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-4">
              <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{maxStreak}</div>
              <div className="text-xs text-gray-400">Макс. серия</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex gap-4">
          <Button
            onClick={() => setGameState('setup')}
            variant="outline"
            className="flex-1"
          >
            К настройкам
          </Button>
          <Button
            onClick={startGame}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-teal-600"
          >
            <Trophy className="w-5 h-5 mr-2" />
            Играть снова
          </Button>
        </div>
      </motion.div>
    )
  }
  
  // Рендер игры
  return (
    <div className="space-y-4">
      {/* Прогресс */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {[...Array(3)].map((_, i) => (
            <Heart
              key={i}
              className={`w-6 h-6 ${i < hearts ? 'text-red-400 fill-red-400' : 'text-gray-600'}`}
            />
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="font-bold">{score}</span>
          </div>
          
          {streak >= 3 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 text-orange-400"
            >
              <Zap className="w-5 h-5" />
              <span className="font-bold">x{streak}</span>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Прогресс бар */}
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 to-teal-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / currentQuestions.length) * 100}%` }}
        />
      </div>
      
      {/* Таймер */}
      {settings.time > 0 && (
        <div className="flex items-center justify-center gap-2">
          <Clock className={`w-5 h-5 ${timeLeft <= 5 ? 'text-red-400' : 'text-gray-400'}`} />
          <span className={`font-mono text-lg ${timeLeft <= 5 ? 'text-red-400' : ''}`}>
            {timeLeft}с
          </span>
        </div>
      )}
      
      {/* Карточка вопроса */}
      {currentQuestion && (
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <Card className={`bg-gradient-to-br ${categorySettings[currentQuestion.category].color} border-0`}>
            <CardContent className="pt-6 pb-6">
              <div className="text-center">
                <div className="text-sm text-white/70 mb-2">
                  {categorySettings[currentQuestion.category].icon} {categorySettings[currentQuestion.category].name}
                </div>
                
                <div className="text-xl sm:text-2xl font-bold">
                  {currentQuestion.question}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Варианты ответа */}
          <div className="grid grid-cols-2 gap-3">
            {shuffledOptions.map((option, index) => {
              const isCorrect = option === currentQuestion.correctAnswer
              const isSelected = selectedAnswer === index
              
              return (
                <motion.button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={answered}
                  className={`p-4 rounded-xl border-2 font-medium text-base transition-all ${
                    answered
                      ? isCorrect
                        ? 'border-green-400 bg-green-400/20 text-green-300'
                        : isSelected
                          ? 'border-red-400 bg-red-400/20 text-red-300'
                          : 'border-white/10 text-gray-500'
                      : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                  }`}
                  whileHover={!answered ? { scale: 1.02 } : {}}
                  whileTap={!answered ? { scale: 0.98 } : {}}
                >
                  <div className="flex items-center justify-center gap-2">
                    {answered && isCorrect && <Check className="w-5 h-5" />}
                    {answered && isSelected && !isCorrect && <X className="w-5 h-5" />}
                    {option}
                  </div>
                </motion.button>
              )
            })}
          </div>
          
          {/* Объяснение */}
          {answered && showExplanation && currentQuestion.explanation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-white/10 rounded-xl"
            >
              <div className="text-sm text-gray-300">
                <span className="font-bold text-white">💡 Интересный факт: </span>
                {currentQuestion.explanation}
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
      
      {/* Счётчик вопросов */}
      <div className="text-center text-gray-400">
        {currentIndex + 1} / {currentQuestions.length}
      </div>
    </div>
  )
}
