#!/usr/bin/env python3
import re

remaining_questions = {
    # 5 класс - дополнительные предметы
    'eng5': '''
      {
        id: 'eng5-q4',
        question: 'Choose the correct form: "She ___ to school every day"',
        options: ['go', 'goes', 'going', 'went'],
        correctAnswer: 1,
        explanation: 'She goes — 3-е лицо единственного числа.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'eng5-q5',
        question: 'What is "книга" in English?',
        options: ['book', 'notebook', 'pen', 'pencil'],
        correctAnswer: 0,
        explanation: 'Book — книга.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'eng5-q6',
        question: 'How many letters in English alphabet?',
        options: ['25', '26', '27', '30'],
        correctAnswer: 1,
        explanation: '26 букв.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'eng5-q7',
        question: 'Translate: "I am a student"',
        options: ['Я студент', 'Ты студент', 'Он студент', 'Мы студенты'],
        correctAnswer: 0,
        explanation: 'I = я.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'eng5-q8',
        question: 'Choose: "This is ___ apple"',
        options: ['a', 'an', 'the', '—'],
        correctAnswer: 1,
        explanation: 'An apple (гласный звук).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'eng5-q9',
        question: 'What colour is "синий"?',
        options: ['red', 'blue', 'green', 'yellow'],
        correctAnswer: 1,
        explanation: 'Blue — синий.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'eng5-q10',
        question: 'Plural of "cat":',
        options: ['cats', 'cates', 'cat', 'caties'],
        correctAnswer: 0,
        explanation: 'Cats.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'eng5-q11',
        question: '"He ___ a doctor"',
        options: ['am', 'is', 'are', 'be'],
        correctAnswer: 1,
        explanation: 'He is.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'eng5-q12',
        question: 'Translate "mother":',
        options: ['папа', 'мама', 'брат', 'сестра'],
        correctAnswer: 1,
        explanation: 'Mother — мама.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'eng5-q13',
        question: 'Which is a verb?',
        options: ['book', 'run', 'big', 'happy'],
        correctAnswer: 1,
        explanation: 'Run — глагол.',
        difficulty: 'medium',
        points: 15
      }''',

    'geo5': '''
      {
        id: 'geo5-q4',
        question: 'Какая планета ближайшая к Солнцу?',
        options: ['Венера', 'Меркурий', 'Земля', 'Марс'],
        correctAnswer: 1,
        explanation: 'Меркурий.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo5-q5',
        question: 'Самый большой океан:',
        options: ['Атлантический', 'Индийский', 'Тихий', 'Северный Ледовитый'],
        correctAnswer: 2,
        explanation: 'Тихий океан.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo5-q6',
        question: 'Сколько материков на Земле?',
        options: ['5', '6', '7', '8'],
        correctAnswer: 1,
        explanation: '6 материков.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo5-q7',
        question: 'Самый большой материк:',
        options: ['Африка', 'Евразия', 'Северная Америка', 'Южная Америка'],
        correctAnswer: 1,
        explanation: 'Евразия.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo5-q8',
        question: 'Какой океан самый холодный?',
        options: ['Тихий', 'Атлантический', 'Северный Ледовитый', 'Индийский'],
        correctAnswer: 2,
        explanation: 'Северный Ледовитый.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo5-q9',
        question: 'География изучает:',
        options: ['Растения', 'Животных', 'Землю', 'Космос'],
        correctAnswer: 2,
        explanation: 'Землю.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo5-q10',
        question: 'В каком полушарии находится Россия?',
        options: ['Только северном', 'Только южном', 'В обоих', 'В западном'],
        correctAnswer: 0,
        explanation: 'Северное полушарие.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geo5-q11',
        question: 'Какая форма у Земли?',
        options: ['Плоская', 'Круглая', 'Шарообразная', 'Квадратная'],
        correctAnswer: 2,
        explanation: 'Геоид (шарообразная).',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'geo5-q12',
        question: 'Самая длинная река мира:',
        options: ['Амазонка', 'Нил', 'Волга', 'Дунай'],
        correctAnswer: 1,
        explanation: 'Нил.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'geo5-q13',
        question: 'Что такое масштаб?',
        options: ['Карта', 'Отношение расстояний', 'Компас', 'Глобус'],
        correctAnswer: 1,
        explanation: 'Отношение расстояния на карте к реальному.',
        difficulty: 'medium',
        points: 15
      }''',

    'lit5': '''
      {
        id: 'lit5-q4',
        question: 'Кто написал "Сказку о рыбаке и рыбке"?',
        options: ['Пушкин', 'Ершов', 'Андерсен', 'Братья Гримм'],
        correctAnswer: 0,
        explanation: 'А.С. Пушкин.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'lit5-q5',
        question: 'Какой жанр у сказки?',
        options: ['Рассказ', 'Сказка', 'Поэма', 'Басня'],
        correctAnswer: 1,
        explanation: 'Сказка.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'lit5-q6',
        question: 'Кто написал басни?',
        options: ['Пушкин', 'Крылов', 'Лермонтов', 'Толстой'],
        correctAnswer: 1,
        explanation: 'И.А. Крылов.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'lit5-q7',
        question: 'Главный герой произведения — это:',
        options: ['Автор', 'Персонаж', 'Читатель', 'Издатель'],
        correctAnswer: 1,
        explanation: 'Персонаж.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'lit5-q8',
        question: 'Кто написал "Конёк-Горбунок"?',
        options: ['Пушкин', 'Ершов', 'Жуковский', 'Одоевский'],
        correctAnswer: 1,
        explanation: 'П.П. Ершов.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'lit5-q9',
        question: 'Басня — это:',
        options: ['Сказка', 'Рассказ с моралью', 'Поэма', 'Роман'],
        correctAnswer: 1,
        explanation: 'Короткий рассказ с моралью.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'lit5-q10',
        question: 'Кто автор сказки о Царевне-лягушке?',
        options: ['Пушкин', 'Народная', 'Андерсен', 'Перро'],
        correctAnswer: 1,
        explanation: 'Народная сказка.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'lit5-q11',
        question: 'Сколько строк в четверостишии?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 2,
        explanation: '4 строки.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'lit5-q12',
        question: 'Рифма — это:',
        options: ['Сюжет', 'Созвучие окончаний', 'Герой', 'Настроение'],
        correctAnswer: 1,
        explanation: 'Созвучие.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'lit5-q13',
        question: 'Кто написал "Муму"?',
        options: ['Пушкин', 'Тургенев', 'Толстой', 'Чехов'],
        correctAnswer: 1,
        explanation: 'И.С. Тургенев.',
        difficulty: 'medium',
        points: 15
      }''',

    'music5': '''
      {
        id: 'music5-q4',
        question: 'Сколько нот в музыкальной гамме?',
        options: ['5', '6', '7', '8'],
        correctAnswer: 2,
        explanation: '7 нот.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'music5-q5',
        question: 'Какой инструмент клавишный?',
        options: ['Гитара', 'Скрипка', 'Фортепиано', 'Барабан'],
        correctAnswer: 2,
        explanation: 'Фортепиано.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'music5-q6',
        question: 'Как называется конец песни?',
        options: ['Запев', 'Припев', 'Кода', 'Вступление'],
        correctAnswer: 2,
        explanation: 'Кода.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'music5-q7',
        question: 'Кто написал "Детский альбом"?',
        options: ['Моцарт', 'Бетховен', 'Чайковский', 'Бах'],
        correctAnswer: 2,
        explanation: 'П.И. Чайковский.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'music5-q8',
        question: 'Дирижёр управляет:',
        options: ['Зрители', 'Оркестром', 'Инструментами', 'Нотами'],
        correctAnswer: 1,
        explanation: 'Оркестром.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'music5-q9',
        question: 'Какой инструмент струнный?',
        options: ['Флейта', 'Труба', 'Скрипка', 'Рояль'],
        correctAnswer: 2,
        explanation: 'Скрипка.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'music5-q10',
        question: 'Ноты пишутся на:',
        options: ['Бумаге', 'Нотоносце', 'Клавишах', 'Струнах'],
        correctAnswer: 1,
        explanation: 'На нотоносце.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'music5-q11',
        question: 'Какое произведение вокальное?',
        options: ['Соната', 'Песня', 'Симфония', 'Концерт'],
        correctAnswer: 1,
        explanation: 'Песня.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'music5-q12',
        question: 'Самый громкий динамический оттенок:',
        options: ['piano', 'forte', 'mezzo', 'pianissimo'],
        correctAnswer: 1,
        explanation: 'Forte — громко.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'music5-q13',
        question: 'Гимн — это:',
        options: ['Песня', 'Торжественная песня', 'Пьеса', 'Танец'],
        correctAnswer: 1,
        explanation: 'Торжественная песня.',
        difficulty: 'easy',
        points: 10
      }''',

    'pe5': '''
      {
        id: 'pe5-q4',
        question: 'Сколько игроков в футбольной команде?',
        options: ['9', '10', '11', '12'],
        correctAnswer: 2,
        explanation: '11 игроков.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe5-q5',
        question: 'Олимпийские игры проводятся:',
        options: ['Ежегодно', 'Раз в 2 года', 'Раз в 4 года', 'Раз в 5 лет'],
        correctAnswer: 2,
        explanation: 'Раз в 4 года.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe5-q6',
        question: 'Волейбольная площадка разделена сеткой:',
        options: ['На 2 части', 'На 3 части', 'На 4 части', 'Не разделена'],
        correctAnswer: 0,
        explanation: 'На 2 части.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe5-q7',
        question: 'Какой вид спорта зимний?',
        options: ['Футбол', 'Лыжи', 'Теннис', 'Плавание'],
        correctAnswer: 1,
        explanation: 'Лыжный спорт.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe5-q8',
        question: 'Бег на 100 метров — это:',
        options: ['Марафон', 'Спринт', 'Кросс', 'Эстафета'],
        correctAnswer: 1,
        explanation: 'Спринт.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'pe5-q9',
        question: 'В баскетболе мяч забрасывают:',
        options: ['В ворота', 'В корзину', 'В сетку', 'За линию'],
        correctAnswer: 1,
        explanation: 'В корзину.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe5-q10',
        question: 'Разминка нужна:',
        options: ['Для красоты', 'Для разогрева мышц', 'Для отдыха', 'Не нужна'],
        correctAnswer: 1,
        explanation: 'Разогрев мышц.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe5-q11',
        question: 'Сколько периодов в хоккее?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 1,
        explanation: '3 периода.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'pe5-q12',
        question: 'Гимнастика развивает:',
        options: ['Только силу', 'Гибкость и силу', 'Только скорость', 'Ничего'],
        correctAnswer: 1,
        explanation: 'Гибкость и силу.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'pe5-q13',
        question: 'Какой мяч используют в теннисе?',
        options: ['Большой', 'Маленький', 'Средний', 'Без мяча'],
        correctAnswer: 1,
        explanation: 'Маленький теннисный мяч.',
        difficulty: 'easy',
        points: 10
      }''',

    'soc5': '''
      {
        id: 'soc5-q4',
        question: 'Что такое семья?',
        options: ['Друзья', 'Группа родственников', 'Соседи', 'Коллеги'],
        correctAnswer: 1,
        explanation: 'Группа родственников.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'soc5-q5',
        question: 'Школа — это:',
        options: ['Магазин', 'Учебное заведение', 'Парк', 'Театр'],
        correctAnswer: 1,
        explanation: 'Учебное заведение.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'soc5-q6',
        question: 'Конституция — это:',
        options: ['Закон', 'Основной закон страны', 'Книга', 'Журнал'],
        correctAnswer: 1,
        explanation: 'Основной закон.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'soc5-q7',
        question: 'Правила поведения называются:',
        options: ['Законы', 'Этикет', 'Традиции', 'Обычаи'],
        correctAnswer: 1,
        explanation: 'Этикет.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'soc5-q8',
        question: 'Государственный язык России:',
        options: ['Английский', 'Русский', 'Немецкий', 'Французский'],
        correctAnswer: 1,
        explanation: 'Русский.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'soc5-q9',
        question: 'Столица России:',
        options: ['Санкт-Петербург', 'Москва', 'Новосибирск', 'Казань'],
        correctAnswer: 1,
        explanation: 'Москва.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'soc5-q10',
        question: 'Президент — это:',
        options: ['Мэр', 'Глава государства', 'Депутат', 'Судья'],
        correctAnswer: 1,
        explanation: 'Глава государства.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'soc5-q11',
        question: 'Права человека:',
        options: ['Не важны', 'Защищают личность', 'Нарушают законы', 'Мешают жить'],
        correctAnswer: 1,
        explanation: 'Защищают личность.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'soc5-q12',
        question: 'Труд — это:',
        options: ['Отдых', 'Деятельность', 'Игра', 'Сон'],
        correctAnswer: 1,
        explanation: 'Деятельность.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'soc5-q13',
        question: 'Гражданин — это:',
        options: ['Турист', 'Член государства', 'Гость', 'Иностранец'],
        correctAnswer: 1,
        explanation: 'Член государства.',
        difficulty: 'medium',
        points: 15
      }'''
}

def add_questions_to_file(filepath, subject_prefix, questions):
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
    # 5 класс - оставшиеся предметы
    add_questions_to_file('/home/z/my-project/src/data/grade5-class.tsx', 'eng5', remaining_questions['eng5'])
    add_questions_to_file('/home/z/my-project/src/data/grade5-class.tsx', 'geo5', remaining_questions['geo5'])
    add_questions_to_file('/home/z/my-project/src/data/grade5-class.tsx', 'lit5', remaining_questions['lit5'])
    add_questions_to_file('/home/z/my-project/src/data/grade5-class.tsx', 'music5', remaining_questions['music5'])
    add_questions_to_file('/home/z/my-project/src/data/grade5-class.tsx', 'pe5', remaining_questions['pe5'])
    add_questions_to_file('/home/z/my-project/src/data/grade5-class.tsx', 'soc5', remaining_questions['soc5'])
