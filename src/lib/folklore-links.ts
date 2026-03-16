// Утилита для работы со ссылками на произведения в контенте уроков

import { folkloreTexts, type FolkloreText } from '@/data/folklore-texts'

// Паттерны для поиска упоминаний произведений в тексте
const folklorePatterns: { id: string; patterns: RegExp[] }[] = [
  // Русские народные сказки
  { id: 'gusi-lebedi', patterns: [/\bгуси-лебеди\b/gi, /\bгуси лебеди\b/gi] },
  { id: 'kasha-topor', patterns: [/\bкаша из топора\b/gi] },
  { id: 'lisa-i-zhuravl', patterns: [/\bлиса и журавль\b/gi, /\bжуравль и лиса\b/gi] },
  { id: 'morozko', patterns: [/\bморозко\b/gi] },
  { id: 'kolobok', patterns: [/\bколобок\b/gi] },
  { id: 'teremok', patterns: [/\bтеремок\b/gi] },
  { id: 'repka', patterns: [/\bрепка\b/gi] },
  
  // Стихи Чуковского
  { id: 'aibolit', patterns: [/\bдоктор айболит\b/gi, /\bайболит\b/gi] },
  { id: 'moydodyr', patterns: [/\bмойдодыр\b/gi] },
  
  // Былины
  { id: 'ilya-muromets', patterns: [/\bилья муромец\b/gi, /\bсоловей-разбойник\b/gi] },
  { id: 'dobrynya-nikitich', patterns: [/\bдобрыня никитич\b/gi, /\bзмей горыныч\b/gi] },
  
  // Басни Крылова
  { id: 'kvorobey-i-orel', patterns: [/\bворобей и орел\b/gi, /\bворобей и орёл\b/gi] },
  { id: 'strekoza-i-muravey', patterns: [/\bстрекоза и муравей\b/gi] },
  { id: 'lisitsa-i-vinograd', patterns: [/\bлисица и виноград\b/gi, /\bлиса и виноград\b/gi] },
]

/**
 * Найти все упоминания произведений в тексте
 */
export function findFolkloreMentions(htmlContent: string): FolkloreText[] {
  const foundIds = new Set<string>()
  
  // Удаляем HTML теги для поиска
  const textContent = htmlContent.replace(/<[^>]*>/g, ' ')
  
  for (const { id, patterns } of folklorePatterns) {
    for (const pattern of patterns) {
      if (pattern.test(textContent)) {
        foundIds.add(id)
        break
      }
    }
  }
  
  return folkloreTexts.filter(text => foundIds.has(text.id))
}

/**
 * Получить все ID упомянутых произведений
 */
export function getMentionedFolkloreIds(htmlContent: string): string[] {
  const mentions = findFolkloreMentions(htmlContent)
  return mentions.map(m => m.id)
}

/**
 * Обернуть упоминания в HTML ссылками (для использования в контенте)
 * Пример использования: <span class="folklore-link" data-folklore-id="gusi-lebedi">Гуси-лебеди</span>
 */
export function wrapFolkloreMentions(htmlContent: string): string {
  let result = htmlContent
  
  for (const { id, patterns } of folklorePatterns) {
    const folklore = folkloreTexts.find(f => f.id === id)
    if (!folklore) continue
    
    for (const pattern of patterns) {
      // Заменяем только если ещё не обёрнуто
      result = result.replace(pattern, (match) => {
        // Проверяем, не обёрнуто ли уже
        if (result.includes(`data-folklore-id="${id}"`)) {
          return match
        }
        return `<span class="folklore-link" data-folklore-id="${id}">${match}</span>`
      })
    }
  }
  
  return result
}

/**
 * Типы произведений для отображения
 */
export const folkloreTypeLabels: Record<string, string> = {
  fairy_tale: 'Сказка',
  bylina: 'Былина',
  fable: 'Басня',
  poem: 'Стихотворение',
  story: 'Рассказ'
}

export const folkloreTypeIcons: Record<string, string> = {
  fairy_tale: '📖',
  bylina: '⚔️',
  fable: '🦊',
  poem: '📝',
  story: '📚'
}
