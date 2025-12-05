import { ReactNode } from 'react'

interface StatCardProps {
  value: string
  label: string
  icon?: ReactNode
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {icon && <div className="flex justify-center mb-4">{icon}</div>}
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
        {value}
      </div>
      <div className="text-gray-600 text-sm md:text-base">{label}</div>
    </div>
  )
}

