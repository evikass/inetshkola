'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import MoleculeViewer from './MoleculeViewer'

interface MoleculeModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  moleculeKey: string | null
}

// База данных молекул
const moleculesDatabase: Record<string, { name: string; formula: string; description: string }> = {
  'H2O': {
    name: 'Вода',
    formula: 'H₂O',
    description: 'Самое распространённое соединение на Земле. Состоит из двух атомов водорода и одного атома кислорода.'
  },
  'H2O2': {
    name: 'Перекись водорода',
    formula: 'H₂O₂',
    description: 'Бесцветная жидкость с металлическим привкусом. Используется как антисептик.'
  },
  'CO2': {
    name: 'Углекислый газ',
    formula: 'CO₂',
    description: 'Бесцветный газ без запаха. Продукт дыхания и горения.'
  },
  'CH4': {
    name: 'Метан',
    formula: 'CH₄',
    description: 'Простейший углеводород, основной компонент природного газа.'
  },
  'NH3': {
    name: 'Аммиак',
    formula: 'NH₃',
    description: 'Бесцветный газ с резким запахом. Используется в производстве удобрений.'
  },
  'NaCl': {
    name: 'Хлорид натрия',
    formula: 'NaCl',
    description: 'Поваренная соль. Необходима для жизнедеятельности организма.'
  },
  'H2SO4': {
    name: 'Серная кислота',
    formula: 'H₂SO₄',
    description: 'Сильная двухосновная кислота. Одна из важнейших химических продуктов.'
  },
  'O3': {
    name: 'Озон',
    formula: 'O₃',
    description: 'Аллотропная модификация кислорода. Защищает Землю от УФ-излучения.'
  },
  'O2': {
    name: 'Кислород',
    formula: 'O₂',
    description: 'Бесцветный газ, необходимый для дыхания и горения.'
  },
  'H2': {
    name: 'Водород',
    formula: 'H₂',
    description: 'Самый лёгкий газ. Используется как топливо и в химической промышленности.'
  },
  'N2': {
    name: 'Азот',
    formula: 'N₂',
    description: 'Бесцветный газ. Составляет 78% атмосферы Земли.'
  }
}

export default function MoleculeModal({ open, onOpenChange, moleculeKey }: MoleculeModalProps) {
  const molecule = moleculeKey ? moleculesDatabase[moleculeKey] : null

  if (!molecule) {
    return null
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-900 border-purple-500/30 text-white max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-purple-300">
            🧪 {molecule.name}
          </DialogTitle>
          <DialogDescription className="text-2xl font-mono text-white/80">
            {molecule.formula}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* 3D Визуализация */}
          <div className="bg-slate-800 rounded-xl p-4 h-[250px] flex items-center justify-center">
            <MoleculeViewer moleculeKey={moleculeKey} />
          </div>
          
          {/* Описание */}
          <p className="text-white/70 text-sm">
            {molecule.description}
          </p>
          
          <Button 
            onClick={() => onOpenChange(false)} 
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            Закрыть
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
