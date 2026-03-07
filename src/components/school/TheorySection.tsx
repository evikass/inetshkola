'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  BookOpen, ChevronDown, ChevronUp, Lightbulb, 
  Play, Code, Calculator, Atom, Globe,
  PenLine, FlaskConical, History, Music, Palette,
  Dna, Languages, Sparkles, Zap
} from 'lucide-react'

// Types
export interface TheoryContent {
  title: string
  description: string
  sections: TheorySection[]
  examples?: TheoryExample[]
  formulas?: string[]
  codeExamples?: CodeExample[]
}

export interface TheorySection {
  id: string
  title: string
  content: string
  icon?: string
  visual?: VisualElement
}

export interface TheoryExample {
  id: string
  title: string
  content: string
  illustration?: string
}

export interface CodeExample {
  language: string
  code: string
  description: string
}

export interface VisualElement {
  type: 'shape' | 'diagram' | 'animation' | 'emoji'
  value: string
}

interface TheorySectionProps {
  subject: string
  topic: string
  content: TheoryContent
  onPractice?: () => void
}

// Subject configurations
const subjectConfig: Record<string, { 
  icon: React.ReactNode; 
  gradient: string; 
  bgGradient: string;
  accentColor: string;
}> = {
  'Математика': {
    icon: <Calculator className="w-8 h-8" />,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-600/20 to-cyan-600/20',
    accentColor: 'blue'
  },
  'Алгебра': {
    icon: <Calculator className="w-8 h-8" />,
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-600/20 to-indigo-600/20',
    accentColor: 'indigo'
  },
  'Русский язык': {
    icon: <PenLine className="w-8 h-8" />,
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-600/20 to-rose-600/20',
    accentColor: 'pink'
  },
  'Физика': {
    icon: <Atom className="w-8 h-8" />,
    gradient: 'from-purple-500 to-violet-500',
    bgGradient: 'from-purple-600/20 to-violet-600/20',
    accentColor: 'purple'
  },
  'История': {
    icon: <History className="w-8 h-8" />,
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-600/20 to-orange-600/20',
    accentColor: 'amber'
  },
  'Биология': {
    icon: <Dna className="w-8 h-8" />,
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-600/20 to-emerald-600/20',
    accentColor: 'green'
  },
  'Химия': {
    icon: <FlaskConical className="w-8 h-8" />,
    gradient: 'from-teal-500 to-cyan-500',
    bgGradient: 'from-teal-600/20 to-cyan-600/20',
    accentColor: 'teal'
  },
  'География': {
    icon: <Globe className="w-8 h-8" />,
    gradient: 'from-sky-500 to-blue-500',
    bgGradient: 'from-sky-600/20 to-blue-600/20',
    accentColor: 'sky'
  },
  'Информатика': {
    icon: <Code className="w-8 h-8" />,
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-600/20 to-purple-600/20',
    accentColor: 'indigo'
  },
  'Литература': {
    icon: <BookOpen className="w-8 h-8" />,
    gradient: 'from-rose-500 to-pink-500',
    bgGradient: 'from-rose-600/20 to-pink-600/20',
    accentColor: 'rose'
  },
  'Музыка': {
    icon: <Music className="w-8 h-8" />,
    gradient: 'from-fuchsia-500 to-pink-500',
    bgGradient: 'from-fuchsia-600/20 to-pink-600/20',
    accentColor: 'fuchsia'
  },
  'ИЗО': {
    icon: <Palette className="w-8 h-8" />,
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-600/20 to-purple-600/20',
    accentColor: 'violet'
  },
  'Английский язык': {
    icon: <Languages className="w-8 h-8" />,
    gradient: 'from-red-500 to-orange-500',
    bgGradient: 'from-red-600/20 to-orange-600/20',
    accentColor: 'red'
  },
  'default': {
    icon: <BookOpen className="w-8 h-8" />,
    gradient: 'from-gray-500 to-slate-500',
    bgGradient: 'from-gray-600/20 to-slate-600/20',
    accentColor: 'gray'
  }
}

// Animated shape components
const AnimatedCircle = ({ color = 'blue' }: { color?: string }) => (
  <motion.div
    className={`w-16 h-16 rounded-full bg-gradient-to-br from-${color}-400 to-${color}-600`}
    animate={{
      scale: [1, 1.1, 1],
      rotate: [0, 180, 360]
    }}
    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
  />
)

const AnimatedSquare = ({ color = 'purple' }: { color?: string }) => (
  <motion.div
    className={`w-16 h-16 rounded-lg bg-gradient-to-br from-${color}-400 to-${color}-600`}
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 90, 180, 270, 360]
    }}
    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
  />
)

const AnimatedTriangle = () => (
  <motion.div
    className="relative w-0 h-0"
    style={{
      borderLeft: '32px solid transparent',
      borderRight: '32px solid transparent',
      borderBottom: '56px solid #a855f7'
    }}
    animate={{
      rotate: [0, 360]
    }}
    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
  />
)

// Formula display component
const FormulaDisplay = ({ formula }: { formula: string }) => {
  // Simple LaTeX-like formatting
  const formatFormula = (text: string) => {
    return text
      .replace(/\^(\d+)/g, '<sup>$1</sup>')
      .replace(/\^(\w+)/g, '<sup>$1</sup>')
      .replace(/_(\d+)/g, '<sub>$1</sub>')
      .replace(/_(\w+)/g, '<sub>$1</sub>')
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '<span class="inline-flex flex-col items-center mx-1"><span class="border-b border-current pb-0.5">$1</span><span class="pt-0.5">$2</span></span>')
      .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
      .replace(/\\times/g, '×')
      .replace(/\\div/g, '÷')
      .replace(/\\cdot/g, '·')
      .replace(/\\pi/g, 'π')
      .replace(/\\infty/g, '∞')
  }

  return (
    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4 border border-blue-500/20">
      <div 
        className="text-xl font-mono text-center"
        dangerouslySetInnerHTML={{ __html: formatFormula(formula) }}
      />
    </div>
  )
}

// Code block component
const CodeBlock = ({ code, language, description }: { code: string; language: string; description: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="bg-gray-900 border-gray-700 overflow-hidden">
      <CardHeader className="bg-gray-800 py-2 px-4 flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Code className="w-4 h-4 text-green-400" />
          <span className="text-sm text-gray-300">{language}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="text-xs text-gray-400 hover:text-white"
        >
          {copied ? '✓ Скопировано' : 'Копировать'}
        </Button>
      </CardHeader>
      <CardContent className="p-4">
        <pre className="text-sm font-mono text-green-400 overflow-x-auto">
          <code>{code}</code>
        </pre>
        <p className="text-xs text-gray-500 mt-2">{description}</p>
      </CardContent>
    </Card>
  )
}

// Expandable section component
const ExpandableSection = ({ 
  section, 
  isExpanded, 
  onToggle,
  accentColor
}: { 
  section: TheorySection
  isExpanded: boolean
  onToggle: () => void
  accentColor: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 rounded-xl overflow-hidden border border-white/10"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          {section.icon && <span className="text-2xl">{section.icon}</span>}
          <span className="font-medium text-white">{section.title}</span>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pb-4">
              <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-lg p-4">
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
                
                {/* Visual element */}
                {section.visual && (
                  <div className="mt-4 flex justify-center">
                    {section.visual.type === 'shape' && (
                      section.visual.value === 'circle' ? <AnimatedCircle color={accentColor} /> :
                      section.visual.value === 'square' ? <AnimatedSquare color={accentColor} /> :
                      section.visual.value === 'triangle' ? <AnimatedTriangle /> :
                      null
                    )}
                    {section.visual.type === 'emoji' && (
                      <motion.span 
                        className="text-6xl"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {section.visual.value}
                      </motion.span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Visual illustration based on subject
const SubjectIllustration = ({ subject }: { subject: string }) => {
  const illustrations: Record<string, React.ReactNode> = {
    'Математика': (
      <div className="flex gap-4 items-center">
        <motion.div
          className="text-4xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ➕
        </motion.div>
        <motion.div
          className="text-4xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ➖
        </motion.div>
        <motion.div
          className="text-4xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        >
          ✖️
        </motion.div>
        <motion.div
          className="text-4xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          ➗
        </motion.div>
      </div>
    ),
    'Физика': (
      <div className="flex gap-4 items-center">
        <motion.div
          className="text-4xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          ⚡
        </motion.div>
        <motion.div
          className="text-4xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          ⚛️
        </motion.div>
        <motion.div
          className="text-4xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🔬
        </motion.div>
      </div>
    ),
    'Химия': (
      <div className="flex gap-4 items-center">
        <motion.div
          className="text-4xl"
          animate={{ rotate: [0, -20, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🧪
        </motion.div>
        <motion.div
          className="text-4xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ⚗️
        </motion.div>
        <motion.div
          className="text-4xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          🔬
        </motion.div>
      </div>
    ),
    'Биология': (
      <div className="flex gap-4 items-center">
        <motion.div
          className="text-4xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🧬
        </motion.div>
        <motion.div
          className="text-4xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🌿
        </motion.div>
        <motion.div
          className="text-4xl"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          🦠
        </motion.div>
      </div>
    ),
    'История': (
      <div className="flex gap-4 items-center">
        <motion.div
          className="text-4xl"
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          📜
        </motion.div>
        <motion.div
          className="text-4xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🏰
        </motion.div>
        <motion.div
          className="text-4xl"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          ⚔️
        </motion.div>
      </div>
    ),
    'Русский язык': (
      <div className="flex gap-4 items-center">
        <motion.div
          className="text-4xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          ✏️
        </motion.div>
        <motion.div
          className="text-4xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          📖
        </motion.div>
        <motion.div
          className="text-4xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          🔤
        </motion.div>
      </div>
    ),
    'Информатика': (
      <div className="flex gap-4 items-center">
        <motion.div
          className="text-4xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        >
          💻
        </motion.div>
        <motion.div
          className="text-4xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          ⌨️
        </motion.div>
        <motion.div
          className="text-4xl"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          🖱️
        </motion.div>
      </div>
    ),
    'default': (
      <motion.div
        className="text-4xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        📚
      </motion.div>
    )
  }

  return (
    <div className="flex justify-center p-4">
      {illustrations[subject] || illustrations['default']}
    </div>
  )
}

// Main component
export default function TheorySectionComponent({ 
  subject, 
  topic, 
  content,
  onPractice 
}: TheorySectionProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  
  const config = subjectConfig[subject] || subjectConfig['default']

  const toggleSection = (id: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${config.bgGradient} border border-white/10`}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/5"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -left-5 -bottom-5 w-32 h-32 rounded-full bg-white/5"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        <div className="relative p-6 sm:p-8">
          {/* Subject icon and title */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <motion.div
              className={`p-4 rounded-2xl bg-gradient-to-br ${config.gradient} shadow-lg`}
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {config.icon}
            </motion.div>
            
            <div className="flex-1">
              <motion.h1
                className="text-2xl sm:text-3xl font-bold text-white mb-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                {topic}
              </motion.h1>
              <motion.p
                className="text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {subject} • {content.title}
              </motion.p>
            </div>
          </div>

          {/* Visual illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <SubjectIllustration subject={subject} />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-gray-300 mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {content.description}
          </motion.p>
        </div>
      </motion.div>

      {/* Theory Sections */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-3"
      >
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-400" />
          Теория
        </h2>
        
        {content.sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <ExpandableSection
              section={section}
              isExpanded={expandedSections.has(section.id)}
              onToggle={() => toggleSection(section.id)}
              accentColor={config.accentColor}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Formulas (for math subjects) */}
      {content.formulas && content.formulas.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-blue-400" />
            Формулы
          </h2>
          
          <div className="grid gap-3 sm:grid-cols-2">
            {content.formulas.map((formula, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <FormulaDisplay formula={formula} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Code Examples (for computer science) */}
      {content.codeExamples && content.codeExamples.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-3"
        >
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <Code className="w-5 h-5 text-green-400" />
            Примеры кода
          </h2>
          
          <div className="space-y-4">
            {content.codeExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <CodeBlock
                  code={example.code}
                  language={example.language}
                  description={example.description}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Examples */}
      {content.examples && content.examples.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-3"
        >
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            Примеры
          </h2>
          
          <div className="grid gap-3 sm:grid-cols-2">
            {content.examples.map((example, index) => (
              <motion.div
                key={example.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/5 border-white/10 overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <span className="text-lg">{example.illustration || '📌'}</span>
                      {example.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm">{example.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Practice Button */}
      {onPractice && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center pt-4"
        >
          <motion.button
            onClick={onPractice}
            className={`
              flex items-center gap-3 px-8 py-4 rounded-2xl
              bg-gradient-to-r ${config.gradient}
              text-white font-bold text-lg
              shadow-lg hover:shadow-xl
              transition-all duration-300
            `}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-6 h-6" />
            Практика
            <Zap className="w-5 h-5" />
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}
