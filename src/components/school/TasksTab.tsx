'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, Target } from 'lucide-react'
import { useSchool } from '@/context/SchoolContext'

export function TasksTab() {
  const { dailyTasks } = useSchool()

  return (
    <div className="grid gap-3">
      {dailyTasks.map(task => (
        <Card key={task.id} className="bg-slate-800/50 border-slate-700">
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  task.completed ? 'bg-green-500/20' : 'bg-blue-500/20'
                }`}>
                  {task.completed ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <Target className="w-5 h-5 text-blue-400" />
                  )}
                </div>
                <div>
                  <h3 className="font-medium">{task.title}</h3>
                  <p className="text-sm text-slate-400">{task.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{task.progress}/{task.target}</p>
                <p className="text-xs text-yellow-400">+{task.reward} XP</p>
              </div>
            </div>
            <div className="mt-3">
              <Progress
                value={(task.progress / task.target) * 100}
                className={`h-2 ${task.completed ? 'bg-green-500/20' : ''}`}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
