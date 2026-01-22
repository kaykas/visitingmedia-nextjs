'use client'

import { useState } from 'react'

interface TimelineStep {
  title: string
  content: string
}

interface AccordionTimelineProps {
  steps: TimelineStep[]
}

export default function AccordionTimeline({ steps }: AccordionTimelineProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const toggleStep = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {steps.map((step, index) => (
        <div key={index} className="border border-[var(--color-gray-darken)] rounded-lg overflow-hidden bg-white shadow-md">
          <button
            onClick={() => toggleStep(index)}
            className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-[var(--color-azure-lighter)] transition-colors"
          >
            <h3 className="text-xl lg:text-2xl font-bold pr-4">{step.title}</h3>
            <span className={`text-2xl text-[var(--color-azure)] transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expandedIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-6 pt-2">
              <p className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)] leading-relaxed">
                {step.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
