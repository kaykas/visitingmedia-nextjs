'use client'

import { useState } from 'react'

interface Tab {
  id: string
  label: string
  title: string
  features: string[]
}

const tabs: Tab[] = [
  {
    id: 'truetour',
    label: 'TrueTour™',
    title: 'TrueTour™ - Virtual Tours That Sell',
    features: [
      'Immersive Tour',
      'Virtual Site Inspections',
      'Channel Distribution',
      'Sharing through text, email, QR code'
    ]
  },
  {
    id: 'saleshub',
    label: 'SalesHub™',
    title: 'SalesHub™ - Interactive Sales Enablement Platform',
    features: [
      'Immersive Tour',
      'Virtual Site Inspections',
      'Channel Distribution',
      'Sharing through text, email, QR code',
      'Personalization',
      'Digital Asset Management',
      'Tracking & Analytics',
      'Above-Property Selling',
      'Administrative Capabilities'
    ]
  },
  {
    id: 'product-studio',
    label: 'Product Studio',
    title: 'Product Studio - Professional Media Production',
    features: [
      '360° Photos',
      '3D Models',
      'Computer Generated Imagery (CGI)',
      'Virtual Staging',
      'Fly Through Video',
      'Drone Footage'
    ]
  },
  {
    id: 'training',
    label: 'Training & Support',
    title: 'Training & Support - Success at Every Step',
    features: [
      'Customer Success Managers',
      'Customer Support',
      'Video Guides',
      'In-App Training',
      'Webinar Training',
      'In Person Training',
      'Group Trainings at Your Events'
    ]
  }
]

export default function TabbedSolutions() {
  const [activeTab, setActiveTab] = useState<string>('truetour')

  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0]

  return (
    <div className="max-w-[1260px] mx-auto px-6">
      <h2 className="text-3xl lg:text-4xl text-center mb-12 font-bold">
        Our Solutions
      </h2>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded font-semibold uppercase text-sm tracking-wider transition-all ${
              activeTab === tab.id
                ? 'bg-[var(--color-azure)] text-white shadow-lg'
                : 'bg-white text-[var(--color-black)] hover:bg-[var(--color-azure-lighter)] border border-[var(--color-gray-darken)]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-8 lg:p-12 rounded-lg shadow-xl">
        <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-[var(--color-azure)]">
          {currentTab.title}
        </h3>
        <ul className="space-y-4">
          {currentTab.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[var(--color-azure)] mr-3 text-xl flex-shrink-0">✓</span>
              <span className="text-lg text-[var(--color-black-light)] font-[var(--font-secondary)]">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
