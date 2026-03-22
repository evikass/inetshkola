#!/usr/bin/env python3
import re

# Новые вопросы для всех классов
all_questions = {
    # 6 класс
    'math6': '''
      {
        id: 'math6-q4',
        question: 'Чему равно |−7|?',
        options: ['−7', '7', '0', '−14'],
        correctAnswer: 1,
        explanation: 'Модуль числа всегда положительный.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math6-q5',
        question: 'Какое число больше: −5 или −2?',
        options: ['−5', '−2', 'Они равны', 'Нельзя сравнить'],
        correctAnswer: 1,
        explanation: '−2 правее на координатной прямой.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math6-q6',
        question: 'Вычисли: 12 − 17',
        options: ['5', '−5', '29', '−29'],
        correctAnswer: 1,
        explanation: '12 − 17 = −5.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math6-q7',
        question: 'Чему равно 15% от 60?',
        options: ['9', '15', '45', '75'],
        correctAnswer: 0,
        explanation: '60 × 0.15 = 9.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math6-q8',
        question: 'Какая дробь равна 1/2?',
        options: ['2/3', '3/6', '1/3', '2/5'],
        correctAnswer: 1,
        explanation: '3/6 = 1/2.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math6-q9',
        question: '−3 × 4 = ?',
        options: ['12', '−12', '−7', '7'],
        correctAnswer: 1,
        explanation: 'Минус на плюс даёт минус.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math6-q10',
        question: 'Найди 50% от 200',
        options: ['50', '100', '150', '250'],
        correctAnswer: 1,
        explanation: '50% от 200 = 100.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math6-q11',
        question: 'Проверь пропорцию: 2/4 = 5/10',
        options: ['Верна', 'Неверна', 'Нельзя проверить', 'Это не пропорция'],
        correctAnswer: 0,
        explanation: '2 × 10 = 4 × 5 = 20.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math6-q12',
        question: 'Чему равен модуль числа 0?',
        options: ['1', '−1', '0', 'Не определён'],
        correctAnswer: 2,
        explanation: '|0| = 0.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math6-q13',
        question: '−8 ÷ (−2) = ?',
        options: ['−4', '4', '−16', '16'],
        correctAnswer: 1,
        explanation: 'Минус на минус даёт плюс.',
        difficulty: 'medium',
        points: 15
      }''',

    'russian6': '''
      {
        id: 'rus6-q4',
        question: 'Причастие обозначает:',
        options: ['Действие', 'Признак предмета по действию', 'Признак предмета', 'Количество'],
        correctAnswer: 1,
        explanation: 'Причастие — признак по действию.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus6-q5',
        question: 'Деепричастие отвечает на вопросы:',
        options: ['Какой? Какая?', 'Что делая? Что сделав?', 'Что делать?', 'Как? Где?'],
        correctAnswer: 1,
        explanation: 'Деепричастие: что делая? что сделав?',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus6-q6',
        question: 'Какое причастие страдательное?',
        options: ['Бегущий', 'Читающий', 'Прочитанный', 'Пишущий'],
        correctAnswer: 2,
        explanation: 'Прочитанный — страдательное.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus6-q7',
        question: 'Сколько Н в слове "сонный"?',
        options: ['Н', 'НН', 'Зависит', 'Не пишется'],
        correctAnswer: 1,
        explanation: 'Сон + н = НН.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus6-q8',
        question: 'Причастие — это:',
        options: ['Часть речи', 'Форма глагола', 'Форма прилагательного', 'Служебная часть'],
        correctAnswer: 1,
        explanation: 'Особая форма глагола.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus6-q9',
        question: 'Какой суффикс в деепричастии?',
        options: ['−ущ−', '−ем−', '−а/−я', '−нн−'],
        correctAnswer: 2,
        explanation: 'Деепричастия: −а, −я.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus6-q10',
        question: 'Найди слово−исключение с НН:',
        options: ['Кожаный', 'Стеклянный', 'Серебряный', 'Глиняный'],
        correctAnswer: 1,
        explanation: 'Стеклянный — исключение.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus6-q11',
        question: 'Деепричастие в предложении является:',
        options: ['Подлежащим', 'Сказуемым', 'Обстоятельством', 'Дополнением'],
        correctAnswer: 2,
        explanation: 'Обстоятельство.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus6-q12',
        question: 'Краткое причастие пишется с:',
        options: ['Н', 'НН', 'Без Н', 'Зависит'],
        correctAnswer: 0,
        explanation: 'Краткое причастие — Н.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus6-q13',
        question: 'Причастие изменяется по:',
        options: ['Родам, числам, падежам', 'Только числам', 'Только падежам', 'Не изменяется'],
        correctAnswer: 0,
        explanation: 'По родам, числам и падежам.',
        difficulty: 'medium',
        points: 15
      }''',

    'history6': '''
      {
        id: 'hist6-q4',
        question: 'Что такое феодальная раздробленность?',
        options: ['Объединение', 'Распад государства', 'Война', 'Восстание'],
        correctAnswer: 1,
        explanation: 'Распад на отдельные княжества.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist6-q5',
        question: 'Когда Куликовская битва?',
        options: ['1223', '1237', '1380', '1480'],
        correctAnswer: 2,
        explanation: '1380 год.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist6-q6',
        question: 'Первый московский князь:',
        options: ['Дмитрий Донской', 'Иван Калита', 'Даниил Александрович', 'Иван III'],
        correctAnswer: 2,
        explanation: 'Даниил Александрович.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist6-q7',
        question: 'Сколько лет длилось иго?',
        options: ['100', '150', '240', '300'],
        correctAnswer: 2,
        explanation: '240 лет.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist6-q8',
        question: 'Какой город пал первым?',
        options: ['Москва', 'Рязань', 'Киев', 'Владимир'],
        correctAnswer: 1,
        explanation: 'Рязань в 1237.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist6-q9',
        question: 'Что такое ярлык на княжение?',
        options: ['Документ', 'Разрешение хана', 'Налог', 'Закон'],
        correctAnswer: 1,
        explanation: 'Разрешение править.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist6-q10',
        question: 'Какое княжество было республикой?',
        options: ['Московское', 'Владимирское', 'Новгородское', 'Галицкое'],
        correctAnswer: 2,
        explanation: 'Новгородская республика.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist6-q11',
        question: 'Кто победил на Куликовом поле?',
        options: ['Мамай', 'Дмитрий Донской', 'Иван Калита', 'Невский'],
        correctAnswer: 1,
        explanation: 'Дмитрий Донской.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'hist6-q12',
        question: 'Как называлась дань ордынцам?',
        options: ['Налог', 'Подать', 'Ордынский выход', 'Десятина'],
        correctAnswer: 2,
        explanation: 'Ордынский выход.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist6-q13',
        question: 'Где закончилось иго?',
        options: ['На Куликовом поле', 'На реке Угре', 'В Москве', 'В Киеве'],
        correctAnswer: 1,
        explanation: 'Стояние на Угре.',
        difficulty: 'medium',
        points: 15
      }''',

    'bio6': '''
      {
        id: 'bio6-q4',
        question: 'Какой орган всасывает воду?',
        options: ['Лист', 'Стебель', 'Корень', 'Цветок'],
        correctAnswer: 2,
        explanation: 'Корень.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio6-q5',
        question: 'Какой процесс в листьях?',
        options: ['Дыхание', 'Фотосинтез', 'Питание', 'Все три'],
        correctAnswer: 3,
        explanation: 'Все три процесса.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio6-q6',
        question: 'Генеративный орган:',
        options: ['Корень', 'Стебель', 'Лист', 'Цветок'],
        correctAnswer: 3,
        explanation: 'Цветок.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio6-q7',
        question: 'Где фотосинтез?',
        options: ['В корне', 'В стебле', 'В листе', 'В цветке'],
        correctAnswer: 2,
        explanation: 'В листьях.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio6-q8',
        question: 'Что выделяется при фотосинтезе?',
        options: ['Углекислый газ', 'Кислород', 'Азот', 'Водород'],
        correctAnswer: 1,
        explanation: 'Кислород.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio6-q9',
        question: 'Вегетативные органы:',
        options: ['Цветок, плод', 'Корень, стебель, лист', 'Только корень', 'Только листья'],
        correctAnswer: 1,
        explanation: 'Корень, стебель, лист.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio6-q10',
        question: 'Что такое корневое давление?',
        options: ['Давление воздуха', 'Сила, поднимающая воду', 'Давление почвы', 'Атмосферное'],
        correctAnswer: 1,
        explanation: 'Поднимает воду.',
        difficulty: 'hard',
        points: 20
      },
      {
        id: 'bio6-q11',
        question: 'Главный корень:',
        options: ['Боковой', 'Придаточный', 'Из зародыша', 'Воздушный'],
        correctAnswer: 2,
        explanation: 'Из зародышевого корешка.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio6-q12',
        question: 'Что образуется из цветка?',
        options: ['Корень', 'Плод', 'Лист', 'Стебель'],
        correctAnswer: 1,
        explanation: 'Плод.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio6-q13',
        question: 'Где хлорофилл?',
        options: ['В корне', 'В стебле', 'В листе', 'В цветке'],
        correctAnswer: 2,
        explanation: 'В листьях.',
        difficulty: 'easy',
        points: 10
      }''',

    # 7 класс
    'alg7': '''
      {
        id: 'alg7-q4',
        question: 'Реши: 5x − 3 = 12',
        options: ['x = 3', 'x = 5', 'x = 15', 'x = 2'],
        correctAnswer: 0,
        explanation: 'x = 3.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg7-q5',
        question: 'Какая функция линейная?',
        options: ['y = x²', 'y = kx + b', 'y = x³', 'y = 1/x'],
        correctAnswer: 1,
        explanation: 'y = kx + b.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg7-q6',
        question: 'Что показывает k?',
        options: ['Цвет', 'Наклон', 'Длину', 'Площадь'],
        correctAnswer: 1,
        explanation: 'Наклон прямой.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'alg7-q7',
        question: 'Вычисли: 3⁴',
        options: ['12', '81', '64', '27'],
        correctAnswer: 1,
        explanation: '3⁴ = 81.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg7-q8',
        question: 'Реши систему: x + y = 5, x − y = 1',
        options: ['(3; 2)', '(2; 3)', '(4; 1)', '(1; 4)'],
        correctAnswer: 0,
        explanation: 'x = 3, y = 2.',
        difficulty: 'hard',
        points: 20
      },
      {
        id: 'alg7-q9',
        question: 'Упрости: a³ · a⁴',
        options: ['a⁷', 'a¹²', 'a¹', 'a⁻¹'],
        correctAnswer: 0,
        explanation: 'a⁷.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg7-q10',
        question: 'Какая точка на y = 2x + 1?',
        options: ['(0; 0)', '(0; 1)', '(1; 0)', '(2; 0)'],
        correctAnswer: 1,
        explanation: '(0; 1).',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'alg7-q11',
        question: 'Реши: 7x + 14 = 0',
        options: ['x = 2', 'x = −2', 'x = 7', 'x = −7'],
        correctAnswer: 1,
        explanation: 'x = −2.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg7-q12',
        question: 'Вычисли: (2²)³',
        options: ['2⁵', '2⁶', '2⁸', '64'],
        correctAnswer: 1,
        explanation: '2⁶ = 64.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'alg7-q13',
        question: 'Если k > 0, прямая:',
        options: ['Убывает', 'Возрастает', 'Горизонтальная', 'Вертикальная'],
        correctAnswer: 1,
        explanation: 'Возрастает.',
        difficulty: 'medium',
        points: 15
      }''',

    'geom7': '''
      {
        id: 'geom7-q4',
        question: 'Сколько прямых через одну точку?',
        options: ['Одну', 'Две', 'Ни одной', 'Бесконечно'],
        correctAnswer: 3,
        explanation: 'Бесконечно много.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom7-q5',
        question: 'Тупой или прямой больше?',
        options: ['Прямой', 'Тупой', 'Равны', 'Нельзя сравнить'],
        correctAnswer: 1,
        explanation: 'Тупой больше 90°.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom7-q6',
        question: 'Вертикальные углы:',
        options: ['Равны', 'Не равны', 'Сумма 180°', 'Сумма 90°'],
        correctAnswer: 0,
        explanation: 'Равны.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom7-q7',
        question: 'Треугольник имеет:',
        options: ['2 угла', '3 угла', '4 угла', '5 углов'],
        correctAnswer: 1,
        explanation: '3 угла.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom7-q8',
        question: 'Равны при параллельных:',
        options: ['Все', 'Накрест лежащие', 'Смежные', 'Развёрнутые'],
        correctAnswer: 1,
        explanation: 'Накрест лежащие равны.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geom7-q9',
        question: 'Первый признак:',
        options: ['По трём сторонам', 'По стороне и углам', 'По двум сторонам и углу', 'По двум углам'],
        correctAnswer: 2,
        explanation: 'СУС.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geom7-q10',
        question: 'Сумма смежных:',
        options: ['90°', '180°', '360°', 'Зависит'],
        correctAnswer: 1,
        explanation: '180°.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom7-q11',
        question: 'Луч имеет:',
        options: ['Начало и конец', 'Только начало', 'Только конец', 'Ничего'],
        correctAnswer: 1,
        explanation: 'Начало, но не конец.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom7-q12',
        question: 'Отрезок — это:',
        options: ['Прямая', 'Часть прямой с концами', 'Линия', 'Угол'],
        correctAnswer: 1,
        explanation: 'Часть прямой между точками.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom7-q13',
        question: 'a || b значит:',
        options: ['Пересекаются', 'Параллельны', 'Перпендикулярны', 'Совпадают'],
        correctAnswer: 1,
        explanation: 'Параллельны.',
        difficulty: 'easy',
        points: 10
      }''',

    'rus7': '''
      {
        id: 'rus7-q4',
        question: 'Предлог — это:',
        options: ['Самостоятельная часть', 'Служебная часть', 'Член предложения', 'Знак'],
        correctAnswer: 1,
        explanation: 'Служебная часть речи.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus7-q5',
        question: 'Какой союз соединительный?',
        options: ['А', 'НО', 'И', 'ИЛИ'],
        correctAnswer: 2,
        explanation: 'И.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus7-q6',
        question: 'Какая частица отрицательная?',
        options: ['БЫ', 'НЕ', 'ЛИ', 'ВОТ'],
        correctAnswer: 1,
        explanation: 'НЕ.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus7-q7',
        question: 'Сочинительные связывают:',
        options: ['Главное и придаточное', 'Равноправные', 'Только слова', 'Только предложения'],
        correctAnswer: 1,
        explanation: 'Равноправные части.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus7-q8',
        question: 'Предлог пишется:',
        options: ['Слитно', 'Раздельно', 'Через дефис', 'Зависит'],
        correctAnswer: 1,
        explanation: 'Раздельно.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus7-q9',
        question: 'Подчинительный союз:',
        options: ['И', 'А', 'ЧТО', 'ИЛИ'],
        correctAnswer: 2,
        explanation: 'ЧТО.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus7-q10',
        question: 'БЫ образует:',
        options: ['Повелительное', 'Условное', 'Изъявительное', 'Прошедшее'],
        correctAnswer: 1,
        explanation: 'Условное.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus7-q11',
        question: 'Формообразующая частица:',
        options: ['НЕ', 'ДАЖЕ', 'ПУСТЬ', 'ВОТ'],
        correctAnswer: 2,
        explanation: 'ПУСТЬ.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus7-q12',
        question: 'Союзы делятся на:',
        options: ['Простые и сложные', 'Сочинительные и подчинительные', 'Главные и второстепенные', 'Большие и маленькие'],
        correctAnswer: 1,
        explanation: 'Сочинительные и подчинительные.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus7-q13',
        question: 'Пространственный предлог:',
        options: ['ПОСЛЕ', 'ИЗ−ЗА', 'НА', 'ДЛЯ'],
        correctAnswer: 2,
        explanation: 'НА.',
        difficulty: 'easy',
        points: 10
      }''',

    'hist7': '''
      {
        id: 'hist7-q4',
        question: 'Первый русский царь:',
        options: ['Иван III', 'Иван IV', 'Пётр I', 'Дмитрий Донской'],
        correctAnswer: 1,
        explanation: 'Иван IV Грозный.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'hist7-q5',
        question: 'Что такое опричнина?',
        options: ['Налог', 'Территория и войска царя', 'Закон', 'Война'],
        correctAnswer: 1,
        explanation: 'Территория под управлением царя.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist7-q6',
        question: 'Когда пала Казань?',
        options: ['1547', '1552', '1556', '1584'],
        correctAnswer: 1,
        explanation: '1552.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist7-q7',
        question: 'Что такое Земский собор?',
        options: ['Армия', 'Представительный орган', 'Церковь', 'Дворец'],
        correctAnswer: 1,
        explanation: 'Сословно−представительный орган.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist7-q8',
        question: 'Кто такие стрельцы?',
        options: ['Крестьяне', 'Постоянное войско', 'Священники', 'Купцы'],
        correctAnswer: 1,
        explanation: 'Постоянное войско.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'hist7-q9',
        question: 'Судебник 1550 — это:',
        options: ['Армия', 'Свод законов', 'Церковь', 'Договор'],
        correctAnswer: 1,
        explanation: 'Свод законов.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist7-q10',
        question: 'Какая война при Иване IV?',
        options: ['Северная', 'Ливонская', 'Крымская', 'Отечественная'],
        correctAnswer: 1,
        explanation: 'Ливонская.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist7-q11',
        question: 'Табель о рангах ввёл:',
        options: ['Иван IV', 'Пётр I', 'Екатерина II', 'Александр I'],
        correctAnswer: 1,
        explanation: 'Пётр I.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist7-q12',
        question: 'Когда приняли царское звание?',
        options: ['1547', '1552', '1584', '1613'],
        correctAnswer: 0,
        explanation: '1547.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist7-q13',
        question: 'Опричнина длилась:',
        options: ['1565−1572', '1547−1550', '1584−1598', '1613−1645'],
        correctAnswer: 0,
        explanation: '1565−1572.',
        difficulty: 'hard',
        points: 20
      }''',

    # 8 класс
    'alg8': '''
      {
        id: 'alg8-q4',
        question: 'Чему равен √144?',
        options: ['11', '12', '13', '14'],
        correctAnswer: 1,
        explanation: '12.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg8-q5',
        question: 'Реши: x² − 9 = 0',
        options: ['x = 3', 'x = −3', 'x = ±3', 'x = 9'],
        correctAnswer: 2,
        explanation: 'x = ±3.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg8-q6',
        question: 'D для x² − 6x + 9 = 0',
        options: ['0', '36', '−36', '18'],
        correctAnswer: 0,
        explanation: 'D = 0.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'alg8-q7',
        question: 'Реши: 2x − 4 > 0',
        options: ['x > 2', 'x < 2', 'x > 4', 'x < 4'],
        correctAnswer: 0,
        explanation: 'x > 2.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg8-q8',
        question: 'Сумма корней по Виету:',
        options: ['x₁ + x₂ = p', 'x₁ + x₂ = −p', 'x₁ + x₂ = q', 'x₁ + x₂ = −q'],
        correctAnswer: 1,
        explanation: '−p.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'alg8-q9',
        question: 'Упрости: √50',
        options: ['5√2', '2√5', '25', '10'],
        correctAnswer: 0,
        explanation: '5√2.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'alg8-q10',
        question: 'Сколько корней при D < 0?',
        options: ['0', '1', '2', 'Бесконечно'],
        correctAnswer: 0,
        explanation: '0.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'alg8-q11',
        question: 'Реши: x² − 5x + 6 = 0',
        options: ['2 и 3', '1 и 6', '−2 и −3', '2 и 4'],
        correctAnswer: 0,
        explanation: '2 и 3.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'alg8-q12',
        question: 'Реши: 5x + 10 ≤ 0',
        options: ['x ≤ 2', 'x ≤ −2', 'x ≥ −2', 'x ≥ 2'],
        correctAnswer: 1,
        explanation: 'x ≤ −2.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'alg8-q13',
        question: 'Произведение корней по Виету:',
        options: ['x₁·x₂ = p', 'x₁·x₂ = −p', 'x₁·x₂ = q', 'x₁·x₂ = −q'],
        correctAnswer: 2,
        explanation: 'q.',
        difficulty: 'medium',
        points: 15
      }''',

    'geom8': '''
      {
        id: 'geom8-q4',
        question: 'Противоположные стороны параллелограмма:',
        options: ['Перпендикулярны', 'Равны', 'Не равны', 'Параллельны две'],
        correctAnswer: 1,
        explanation: 'Равны.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom8-q5',
        question: 'Диагонали ромба:',
        options: ['Равны', 'Перпендикулярны', 'Параллельны', 'Совпадают'],
        correctAnswer: 1,
        explanation: 'Перпендикулярны.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geom8-q6',
        question: 'Площадь квадрата со стороной a:',
        options: ['a', '2a', 'a²', '4a'],
        correctAnswer: 2,
        explanation: 'a².',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom8-q7',
        question: 'Средняя линия трапеции:',
        options: ['Сумма оснований', 'Полусумма', 'Разность', 'Высота'],
        correctAnswer: 1,
        explanation: 'Полусумма.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geom8-q8',
        question: 'Диагонали прямоугольника:',
        options: ['Перпендикулярны', 'Равны', 'Не равны', 'Параллельны'],
        correctAnswer: 1,
        explanation: 'Равны.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom8-q9',
        question: 'Квадрат — это:',
        options: ['Только прямоугольник', 'Только ромб', 'И прямоугольник, и ромб', 'Параллелограмм'],
        correctAnswer: 2,
        explanation: 'Обладает свойствами обоих.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geom8-q10',
        question: 'Подобные треугольники имеют:',
        options: ['Равные стороны', 'Равные углы', 'Пропорц. стороны и равные углы', 'Равные площади'],
        correctAnswer: 2,
        explanation: 'Равные углы, пропорц. стороны.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geom8-q11',
        question: 'Площадь трапеции:',
        options: ['S = a · h', 'S = (a+b) · h', 'S = (a+b)/2 · h', 'S = a · b'],
        correctAnswer: 2,
        explanation: '(a+b)/2 · h.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geom8-q12',
        question: 'Признак по двум углам:',
        options: ['Два угла равны', 'Две стороны равны', 'Три угла равны', 'Стороны пропорц.'],
        correctAnswer: 0,
        explanation: 'Если два угла равны.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geom8-q13',
        question: 'Параллелограмм — это:',
        options: ['Ромб', 'Прямоугольник', 'Четырёхугольник', 'Треугольник'],
        correctAnswer: 2,
        explanation: 'Четырёхугольник.',
        difficulty: 'easy',
        points: 10
      }''',

    'phys8': '''
      {
        id: 'phys8-q4',
        question: 'Внутренняя энергия зависит от:',
        options: ['Массы', 'Температуры', 'Объёма', 'Цвета'],
        correctAnswer: 1,
        explanation: 'Температуры.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'phys8-q5',
        question: 'Теплопередача в вакууме:',
        options: ['Теплопроводность', 'Конвекция', 'Излучение', 'Никакая'],
        correctAnswer: 2,
        explanation: 'Излучение.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'phys8-q6',
        question: 'Температура плавления льда:',
        options: ['−10°C', '0°C', '100°C', '−273°C'],
        correctAnswer: 1,
        explanation: '0°C.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'phys8-q7',
        question: 'По Ому: U = ?',
        options: ['I · R', 'I / R', 'R / I', 'I + R'],
        correctAnswer: 0,
        explanation: 'I · R.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'phys8-q8',
        question: 'Единица силы тока:',
        options: ['Вольт', 'Ом', 'Ампер', 'Ватт'],
        correctAnswer: 2,
        explanation: 'Ампер.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'phys8-q9',
        question: 'При нагревании энергия:',
        options: ['Уменьшается', 'Увеличивается', 'Не меняется', 'Ноль'],
        correctAnswer: 1,
        explanation: 'Увеличивается.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'phys8-q10',
        question: 'Единица напряжения:',
        options: ['Ампер', 'Вольт', 'Ом', 'Джоуль'],
        correctAnswer: 1,
        explanation: 'Вольт.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'phys8-q11',
        question: 'Количество теплоты — это:',
        options: ['Температура', 'Энергия', 'Масса', 'Объём'],
        correctAnswer: 1,
        explanation: 'Энергия.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'phys8-q12',
        question: 'Сопротивление зависит от:',
        options: ['Материала', 'Длины', 'Сечения', 'От всего'],
        correctAnswer: 3,
        explanation: 'От материала, длины и сечения.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'phys8-q13',
        question: 'Конвекция в:',
        options: ['Твёрдых телах', 'Жидкостях и газах', 'Вакууме', 'Нигде'],
        correctAnswer: 1,
        explanation: 'В жидкостях и газах.',
        difficulty: 'medium',
        points: 15
      }''',

    'hist8': '''
      {
        id: 'hist8-q4',
        question: 'Когда Россия стала империей?',
        options: ['1703', '1721', '1547', '1613'],
        correctAnswer: 1,
        explanation: '1721.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist8-q5',
        question: 'Полтавская битва:',
        options: ['1700', '1703', '1709', '1721'],
        correctAnswer: 2,
        explanation: '1709.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist8-q6',
        question: 'Кто основал Петербург?',
        options: ['Иван IV', 'Пётр I', 'Екатерина II', 'Александр I'],
        correctAnswer: 1,
        explanation: 'Пётр I.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'hist8-q7',
        question: 'Табель о рангах — это:',
        options: ['Налог', 'Система чинов', 'Армия', 'Церковь'],
        correctAnswer: 1,
        explanation: 'Система чинов.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist8-q8',
        question: 'Екатерина II правила в:',
        options: ['XVII в.', 'XVIII в.', 'XIX в.', 'XVI в.'],
        correctAnswer: 1,
        explanation: 'XVIII век.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'hist8-q9',
        question: 'Крым присоединён в:',
        options: ['1709', '1721', '1783', '1812'],
        correctAnswer: 2,
        explanation: '1783.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist8-q10',
        question: 'Северная война — с:',
        options: ['Турцией', 'Швецией', 'Францией', 'Польшей'],
        correctAnswer: 1,
        explanation: 'Швецией.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'hist8-q11',
        question: 'Просвещённый абсолютизм — это:',
        options: ['Отмена монархии', 'Политика с идеями', 'Война', 'Религия'],
        correctAnswer: 1,
        explanation: 'Политика с идеями просвещения.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist8-q12',
        question: 'Пугачёвское восстание:',
        options: ['1773−1775', '1700−1721', '1783−1785', '1812'],
        correctAnswer: 0,
        explanation: '1773−1775.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist8-q13',
        question: 'Ништадтский мир:',
        options: ['1709', '1721', '1783', '1812'],
        correctAnswer: 1,
        explanation: '1721.',
        difficulty: 'medium',
        points: 15
      }'''
}

def add_questions_to_file(filepath, subject_prefix, questions):
    """Добавляет вопросы в файл после последнего существующего вопроса предмета"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    pattern = rf"id: '{subject_prefix}-q\d+'.*?points: \d+\s*\}}"
    matches = list(re.finditer(pattern, content, re.DOTALL))

    if matches:
        last_match = matches[-1]
        insert_pos = last_match.end()
        new_content = content[:insert_pos] + ',' + questions + content[insert_pos:]

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Added questions to {filepath} for {subject_prefix}")
    else:
        print(f"No quiz found for {subject_prefix} in {filepath}")

if __name__ == '__main__':
    # 6 класс
    add_questions_to_file('/home/z/my-project/src/data/grade6-class.tsx', 'math6', all_questions['math6'])
    add_questions_to_file('/home/z/my-project/src/data/grade6-class.tsx', 'rus6', all_questions['russian6'])
    add_questions_to_file('/home/z/my-project/src/data/grade6-class.tsx', 'hist6', all_questions['history6'])
    add_questions_to_file('/home/z/my-project/src/data/grade6-class.tsx', 'bio6', all_questions['bio6'])

    # 7 класс
    add_questions_to_file('/home/z/my-project/src/data/grade7-class.tsx', 'alg7', all_questions['alg7'])
    add_questions_to_file('/home/z/my-project/src/data/grade7-class.tsx', 'geom7', all_questions['geom7'])
    add_questions_to_file('/home/z/my-project/src/data/grade7-class.tsx', 'rus7', all_questions['rus7'])
    add_questions_to_file('/home/z/my-project/src/data/grade7-class.tsx', 'hist7', all_questions['hist7'])

    # 8 класс
    add_questions_to_file('/home/z/my-project/src/data/grade8-class.tsx', 'alg8', all_questions['alg8'])
    add_questions_to_file('/home/z/my-project/src/data/grade8-class.tsx', 'geom8', all_questions['geom8'])
    add_questions_to_file('/home/z/my-project/src/data/grade8-class.tsx', 'phys8', all_questions['phys8'])
    add_questions_to_file('/home/z/my-project/src/data/grade8-class.tsx', 'hist8', all_questions['hist8'])
