#!/usr/bin/env python3
import re

# Новые вопросы для добавления
new_questions = {
    # 5 класс
    'math5': '''
      {
        id: 'math5-q4',
        question: 'Вычисли: 5² - 3²',
        options: ['16', '4', '2', '34'],
        correctAnswer: 0,
        explanation: '5² - 3² = 25 - 9 = 16.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math5-q5',
        question: 'Какое число в квадрате даёт 36?',
        options: ['5', '6', '18', '9'],
        correctAnswer: 1,
        explanation: '6² = 36.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math5-q6',
        question: 'Приведи дробь 3/4 к знаменателю 12',
        options: ['6/12', '9/12', '3/12', '12/12'],
        correctAnswer: 1,
        explanation: '3/4 = 9/12.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math5-q7',
        question: 'Найди НОД чисел 12 и 18',
        options: ['2', '3', '6', '36'],
        correctAnswer: 2,
        explanation: 'НОД(12,18) = 6.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math5-q8',
        question: 'Вычисли: 2³',
        options: ['6', '5', '8', '9'],
        correctAnswer: 2,
        explanation: '2³ = 8.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math5-q9',
        question: 'Какой треугольник имеет все стороны равные?',
        options: ['Разносторонний', 'Равнобедренный', 'Равносторонний', 'Прямоугольный'],
        correctAnswer: 2,
        explanation: 'Равносторонний треугольник имеет три равные стороны.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math5-q10',
        question: 'Сумма углов треугольника равна:',
        options: ['90°', '180°', '360°', '270°'],
        correctAnswer: 1,
        explanation: 'Сумма углов любого треугольника = 180°.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'math5-q11',
        question: 'Вычисли: 15 + 27 - 12',
        options: ['20', '30', '40', '25'],
        correctAnswer: 1,
        explanation: '15 + 27 - 12 = 30.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math5-q12',
        question: 'Какое число является делителем 24?',
        options: ['5', '7', '8', '9'],
        correctAnswer: 2,
        explanation: '24 ÷ 8 = 3.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'math5-q13',
        question: 'Найди периметр квадрата со стороной 5 см',
        options: ['10 см', '15 см', '20 см', '25 см'],
        correctAnswer: 2,
        explanation: 'P = 4 × 5 = 20 см.',
        difficulty: 'easy',
        points: 10
      }''',

    'russian5': '''
      {
        id: 'rus5-q4',
        question: 'Какой тип связи в словосочетании "красивая девушка"?',
        options: ['Согласование', 'Управление', 'Примыкание', 'Нет связи'],
        correctAnswer: 0,
        explanation: 'Согласование — прилагательное согласуется с существительным.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus5-q5',
        question: 'Найди грамматическую основу: "Весёлые дети играли в парке"',
        options: ['весёлые дети', 'дети играли', 'играли в парке', 'весёлые дети играли'],
        correctAnswer: 1,
        explanation: 'Грамматическая основа — дети играли.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus5-q6',
        question: 'Какое предложение является побудительным?',
        options: ['Идём в кино!', 'Ты пойдёшь в кино?', 'Мы идём в кино.', 'Хорошее кино!'],
        correctAnswer: 0,
        explanation: 'Побудительное предложение побуждает к действию.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus5-q7',
        question: 'Найди наречие времени:',
        options: ['быстро', 'вчера', 'здесь', 'громко'],
        correctAnswer: 1,
        explanation: 'Вчера — наречие времени.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus5-q8',
        question: 'Какой знак препинания ставится в конце вопросительного предложения?',
        options: ['Точка', 'Вопросительный знак', 'Восклицательный знак', 'Запятая'],
        correctAnswer: 1,
        explanation: 'Вопросительный знак.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus5-q9',
        question: 'Главное слово в словосочетании "читать книгу":',
        options: ['читать', 'книгу', 'оба главных', 'нет главного'],
        correctAnswer: 0,
        explanation: 'Читать — главное слово.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus5-q10',
        question: 'Какой частью речи является слово "быстро"?',
        options: ['Существительное', 'Прилагательное', 'Наречие', 'Глагол'],
        correctAnswer: 2,
        explanation: 'Быстро — наречие.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'rus5-q11',
        question: 'Определи вид предложения: "Какой чудесный день!"',
        options: ['Вопросительное', 'Побудительное', 'Повествовательное восклицательное', 'Невосклицательное'],
        correctAnswer: 2,
        explanation: 'Повествовательное восклицательное.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus5-q12',
        question: 'Найди словосочетание с примыканием:',
        options: ['красивый цветок', 'читать книгу', 'бежать быстро', 'мой дом'],
        correctAnswer: 2,
        explanation: 'Бежать быстро — примыкание.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'rus5-q13',
        question: 'Сколько членов в грамматической основе?',
        options: ['Один', 'Два', 'Три', 'Зависит от предложения'],
        correctAnswer: 1,
        explanation: 'Два: подлежащее и сказуемое.',
        difficulty: 'easy',
        points: 10
      }''',

    'history5': '''
      {
        id: 'hist5-q4',
        question: 'Кто правил в Древнем Египте?',
        options: ['Царь', 'Фараон', 'Король', 'Император'],
        correctAnswer: 1,
        explanation: 'Фараон — правитель Египта.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'hist5-q5',
        question: 'Какая река была основой жизни в Египте?',
        options: ['Волга', 'Нил', 'Дунай', 'Амазонка'],
        correctAnswer: 1,
        explanation: 'Нил.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'hist5-q6',
        question: 'Как называлась письменность древних египтян?',
        options: ['Кириллица', 'Иероглифы', 'Буквы', 'Клинопись'],
        correctAnswer: 1,
        explanation: 'Иероглифы.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'hist5-q7',
        question: 'Для чего строили пирамиды?',
        options: ['Для жилья', 'Как гробницы фараонов', 'Как храмы', 'Как склады'],
        correctAnswer: 1,
        explanation: 'Пирамиды — гробницы.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'hist5-q8',
        question: 'В каком году состоялись первые Олимпийские игры?',
        options: ['776 г. до н.э.', '776 г. н.э.', '500 г. до н.э.', '1000 г. до н.э.'],
        correctAnswer: 0,
        explanation: '776 г. до н.э.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist5-q9',
        question: 'Как назывались города-государства в Греции?',
        options: ['Колонии', 'Полисы', 'Области', 'Регионы'],
        correctAnswer: 1,
        explanation: 'Полис — город-государство.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist5-q10',
        question: 'Где зародилась демократия?',
        options: ['В Риме', 'В Афинах', 'В Египте', 'В Спарте'],
        correctAnswer: 1,
        explanation: 'В Афинах.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist5-q11',
        question: 'Какой город был военным государством?',
        options: ['Афины', 'Спарта', 'Коринф', 'Фивы'],
        correctAnswer: 1,
        explanation: 'Спарта.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'hist5-q12',
        question: 'На чём писали египтяне?',
        options: ['На бумаге', 'На папирусе', 'На камне', 'На коже'],
        correctAnswer: 1,
        explanation: 'На папирусе.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'hist5-q13',
        question: 'В каких играх участвовали древние греки?',
        options: ['В Олимпийских', 'В Римских', 'В Египетских', 'В Азиатских'],
        correctAnswer: 0,
        explanation: 'В Олимпийских.',
        difficulty: 'easy',
        points: 10
      }''',

    'bio5': '''
      {
        id: 'bio5-q4',
        question: 'Какой признак живого отвечает за производство потомства?',
        options: ['Рост', 'Размножение', 'Дыхание', 'Питание'],
        correctAnswer: 1,
        explanation: 'Размножение.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio5-q5',
        question: 'Какая наука изучает растения?',
        options: ['Зоология', 'Ботаника', 'Анатомия', 'Экология'],
        correctAnswer: 1,
        explanation: 'Ботаника.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio5-q6',
        question: 'Какой прибор увеличивает изображение объектов?',
        options: ['Телескоп', 'Микроскоп', 'Бинокль', 'Лупа'],
        correctAnswer: 1,
        explanation: 'Микроскоп.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio5-q7',
        question: 'Что означает слово "биология"?',
        options: ['Наука о жизни', 'Наука о животных', 'Наука о растениях', 'Наука о Земле'],
        correctAnswer: 0,
        explanation: 'Биос = жизнь, логос = наука.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio5-q8',
        question: 'Какой признак живого проявляется в увеличении размеров?',
        options: ['Размножение', 'Рост', 'Дыхание', 'Питание'],
        correctAnswer: 1,
        explanation: 'Рост.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio5-q9',
        question: 'Какая наука изучает животных?',
        options: ['Ботаника', 'Зоология', 'Анатомия', 'Микробиология'],
        correctAnswer: 1,
        explanation: 'Зоология.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio5-q10',
        question: 'Какой процесс обеспечивает организм энергией?',
        options: ['Питание', 'Дыхание', 'Выделение', 'Размножение'],
        correctAnswer: 1,
        explanation: 'Дыхание.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio5-q11',
        question: 'Как называется реакция организма на воздействия среды?',
        options: ['Рост', 'Раздражимость', 'Размножение', 'Питание'],
        correctAnswer: 1,
        explanation: 'Раздражимость.',
        difficulty: 'medium',
        points: 15
      },
      {
        id: 'bio5-q12',
        question: 'Какая наука изучает строение человека?',
        options: ['Ботаника', 'Анатомия', 'Зоология', 'Экология'],
        correctAnswer: 1,
        explanation: 'Анатомия.',
        difficulty: 'easy',
        points: 10
      },
      {
        id: 'bio5-q13',
        question: 'Что не относится к признакам живого?',
        options: ['Рост', 'Дыхание', 'Падение', 'Размножение'],
        correctAnswer: 2,
        explanation: 'Падение — не признак живого.',
        difficulty: 'easy',
        points: 10
      }'''
}

def add_questions_to_file(filepath, subject_prefix, questions):
    """Добавляет вопросы в файл после последнего существующего вопроса предмета"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Найти последний quiz предмета и добавить вопросы перед ]
    # Ищем паттерн: id: 'SUBJ-qN' и после points: N } добавляем новые вопросы

    # Находим позицию последнего вопроса предмета
    pattern = rf"id: '{subject_prefix}-q\d+'.*?points: \d+\s*\}}"
    matches = list(re.finditer(pattern, content, re.DOTALL))

    if matches:
        last_match = matches[-1]
        # Вставляем после последнего матча
        insert_pos = last_match.end()
        new_content = content[:insert_pos] + ',' + questions + content[insert_pos:]

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Added questions to {filepath} for {subject_prefix}")
    else:
        print(f"No quiz found for {subject_prefix} in {filepath}")

if __name__ == '__main__':
    # 5 класс
    add_questions_to_file('/home/z/my-project/src/data/grade5-class.tsx', 'math5', new_questions['math5'])
    add_questions_to_file('/home/z/my-project/src/data/grade5-class.tsx', 'rus5', new_questions['russian5'])
    add_questions_to_file('/home/z/my-project/src/data/grade5-class.tsx', 'hist5', new_questions['history5'])
    add_questions_to_file('/home/z/my-project/src/data/grade5-class.tsx', 'bio5', new_questions['bio5'])
