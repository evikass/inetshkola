'use client'

import React, { useState, useMemo, useCallback } from 'react'
import MoleculeModal from './MoleculeModal'

// Паттерны для распознавания химических формул
const MOLECULE_PATTERNS = [
  // Формулы с индексами (H₂O, CO₂, CH₄, etc.)
  { pattern: /H₂O/g, key: 'H2O', display: 'H₂O' },
  { pattern: /H2O/g, key: 'H2O', display: 'H₂O' },
  { pattern: /CO₂/g, key: 'CO2', display: 'CO₂' },
  { pattern: /CO2/g, key: 'CO2', display: 'CO₂' },
  { pattern: /CH₄/g, key: 'CH4', display: 'CH₄' },
  { pattern: /CH4/g, key: 'CH4', display: 'CH₄' },
  { pattern: /NH₃/g, key: 'NH3', display: 'NH₃' },
  { pattern: /NH3/g, key: 'NH3', display: 'NH₃' },
  { pattern: /NaCl/g, key: 'NaCl', display: 'NaCl' },
  { pattern: /H₂SO₄/g, key: 'H2SO4', display: 'H₂SO₄' },
  { pattern: /H2SO4/g, key: 'H2SO4', display: 'H₂SO₄' },
  { pattern: /H₂O₂/g, key: 'H2O2', display: 'H₂O₂' },
  { pattern: /H2O2/g, key: 'H2O2', display: 'H₂O₂' },
  { pattern: /O₃/g, key: 'O3', display: 'O₃' },
  { pattern: /O3/g, key: 'O3', display: 'O₃' },
  // Русские названия
  { pattern: /воду|водой|воды|воде/gi, key: 'вода', display: 'вода' },
  { pattern: /углекислый газ|углекислого газа|углекислому газу/gi, key: 'углекислый газ', display: 'углекислый газ' },
  { pattern: /метан|метана|метану|метаном/gi, key: 'метан', display: 'метан' },
  { pattern: /аммиак|аммиака|аммиаку|аммиаком/gi, key: 'аммиак', display: 'аммиак' },
  { pattern: /поваренной соли|поваренная соль|поваренной солью/gi, key: 'NaCl', display: 'поваренная соль' },
  { pattern: /хлорид натрия|хлорида натрия|хлоридом натрия/gi, key: 'NaCl', display: 'хлорид натрия' },
  { pattern: /озон|озона|озону|озоном/gi, key: 'озон', display: 'озон' },
  { pattern: /пероксид водорода/gi, key: 'пероксид водорода', display: 'пероксид водорода' },
]

interface ChemicalFormulaProps {
  text: string
}

// Компонент для отображения текста с интерактивными химическими формулами
export default function ChemicalFormula({ text }: ChemicalFormulaProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedMolecule, setSelectedMolecule] = useState<string | null>(null)

  const handleMoleculeClick = useCallback((key: string) => {
    setSelectedMolecule(key)
    setModalOpen(true)
  }, [])

  // Разбираем текст и заменяем химические формулы на интерактивные элементы
  const content = useMemo(() => {
    if (!text) return []

    const parts: Array<{ type: 'text' | 'formula', content: string, key?: string }> = []
    let workingText = text
    let keyIndex = 0

    // Сначала обрабатываем молекулы
    for (const { pattern, key, display } of MOLECULE_PATTERNS) {
      const regex = new RegExp(pattern.source, pattern.flags)
      const matches = [...workingText.matchAll(regex)]
      
      if (matches.length > 0) {
        for (const match of matches) {
          workingText = workingText.replace(match[0], `##MOLECULE_${key}_${keyIndex}##`)
          keyIndex++
        }
      }
    }

    // Разбиваем на части по маркерам
    const tokenRegex = /##MOLECULE_([^#]+)_(\d+)##/g
    let lastIndex = 0
    let match

    while ((match = tokenRegex.exec(workingText)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ type: 'text', content: workingText.slice(lastIndex, match.index) })
      }
      
      const moleculeKey = match[1]
      const moleculeData = MOLECULE_PATTERNS.find(p => p.key === moleculeKey)
      parts.push({ 
        type: 'formula', 
        content: moleculeData?.display || moleculeKey,
        key: moleculeKey
      })
      
      lastIndex = match.index + match[0].length
    }

    if (lastIndex < workingText.length) {
      parts.push({ type: 'text', content: workingText.slice(lastIndex) })
    }

    if (parts.length === 0) {
      parts.push({ type: 'text', content: text })
    }

    return parts
  }, [text])

  return (
    <>
      <span className="inline">
        {content.map((part, index) => {
          if (part.type === 'text') {
            return <span key={index} dangerouslySetInnerHTML={{ __html: part.content }} />
          } else {
            return (
              <button
                key={index}
                onClick={() => handleMoleculeClick(part.key!)}
                className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 hover:text-purple-200 cursor-pointer transition-colors text-inherit font-normal border border-purple-500/30 hover:border-purple-400/50"
                title="Нажмите для просмотра 3D модели"
              >
                <span className="text-sm">🧪</span>
                <span>{part.content}</span>
              </button>
            )
          }
        })}
      </span>
      
      <MoleculeModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        moleculeKey={selectedMolecule}
      />
    </>
  )
}
