// ==================== УТИЛИТЫ ДЛЯ ИЗОБРАЖЕНИЙ ====================

// Базовый путь к изображениям
export const IMAGE_BASE_PATH = '/images'

// Пути к папкам с изображениями
export const IMAGE_PATHS = {
  classes: `${IMAGE_BASE_PATH}/classes`,
  subjects: `${IMAGE_BASE_PATH}/subjects`,
  sections: `${IMAGE_BASE_PATH}/sections`,
  topics: `${IMAGE_BASE_PATH}/topics`,
  lessons: `${IMAGE_BASE_PATH}/lessons`,
  icons: `${IMAGE_BASE_PATH}/icons`,
  backgrounds: `${IMAGE_BASE_PATH}/backgrounds`,
  illustrations: `${IMAGE_BASE_PATH}/illustrations`,
  achievements: `${IMAGE_BASE_PATH}/achievements`,
  badges: `${IMAGE_BASE_PATH}/badges`,
} as const

// Получить путь к изображению класса
export function getClassImagePath(classId: number): string {
  return `${IMAGE_PATHS.classes}/class-${classId}.jpg`
}

// Получить путь к изображению предмета
export function getSubjectImagePath(subjectId: string, type: 'hero' | 'icon' = 'hero'): string {
  return `${IMAGE_PATHS.subjects}/${subjectId}/${type}.jpg`
}

// Получить путь к изображению раздела
export function getSectionImagePath(sectionId: string): string {
  return `${IMAGE_PATHS.sections}/${sectionId}/cover.jpg`
}

// Получить путь к изображению темы
export function getTopicImagePath(topicId: string): string {
  return `${IMAGE_PATHS.topics}/${topicId}/cover.jpg`
}

// Получить путь к изображению урока
export function getLessonImagePath(lessonId: string, imageType: string = 'main'): string {
  return `${IMAGE_PATHS.lessons}/${lessonId}/${imageType}.jpg`
}

// Получить путь к иконке достижения
export function getAchievementIconPath(achievementId: string): string {
  return `${IMAGE_PATHS.achievements}/${achievementId}.svg`
}

// Получить путь к значку ранга
export function getBadgeIconPath(badgeId: string): string {
  return `${IMAGE_PATHS.badges}/${badgeId}.svg`
}

// Предметы и их папки
export const SUBJECT_FOLDERS: Record<string, string> = {
  'math': 'math',
  'russian': 'russian',
  'literature': 'literature',
  'english': 'english',
  'science': 'science',
  'history': 'history',
  'geography': 'geography',
  'biology': 'biology',
  'physics': 'physics',
  'chemistry': 'chemistry',
  'informatics': 'informatics',
  'art': 'art',
  'music': 'music',
  'pe': 'pe',
  'obzh': 'obzh',
  'social': 'social',
}

// Emoji-иконки для предметов (fallback)
export const SUBJECT_EMOJIS: Record<string, string> = {
  'math': '🔢',
  'russian': '📝',
  'literature': '📚',
  'english': '🇬🇧',
  'science': '🔬',
  'history': '🏛️',
  'geography': '🌍',
  'biology': '🧬',
  'physics': '⚛️',
  'chemistry': '🧪',
  'informatics': '💻',
  'art': '🎨',
  'music': '🎵',
  'pe': '⚽',
  'obzh': '🛡️',
  'social': '👥',
}

// Emoji для типов уроков
export const LESSON_TYPE_EMOJIS: Record<string, string> = {
  'theory': '📖',
  'practice': '✏️',
  'video': '🎬',
  'interactive': '🎮',
  'test': '📝',
  'project': '🔬',
}

// Emoji для сложности
export const DIFFICULTY_EMOJIS: Record<string, string> = {
  'easy': '🟢',
  'medium': '🟡',
  'hard': '🔴',
}

// Генерация placeholder-изображения с текстом
export function generatePlaceholderImage(text: string, width: number = 400, height: number = 300): string {
  // Создаём SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">
        ${text}
      </text>
    </svg>
  `
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

// Проверка существования изображения
export function checkImageExists(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
  })
}

// Получить изображение с fallback
export async function getImageWithFallback(
  primarySrc: string,
  fallbackSrc: string
): Promise<string> {
  const exists = await checkImageExists(primarySrc)
  return exists ? primarySrc : fallbackSrc
}
