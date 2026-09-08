'use client'

import { portfolioData } from '@/data/portfolio'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Timeline() {
  const { experience } = portfolioData
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            12+ years leading security operations, detection engineering, and cyber defense across enterprise, MSSP, and telecom environments.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {experience.map((job, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-none transition-shadow"
            >
              {/* Header (Always visible) */}
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full p-6 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent text-left hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors flex justify-between items-start gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {job.title}
                    </h3>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                      {job.duration}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    {job.company} • {job.location}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{job.period}</p>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 transition-transform ${
                    expanded === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Expandable Content */}
              {expanded === index && (
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 animate-slide-up">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                          <span className="text-blue-600 dark:text-blue-400 font-bold flex-shrink-0">
                            ▸
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Domain Tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.domain.map((d, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-orange-700 dark:text-orange-300 bg-orange-50 dark:bg-orange-900/30 px-3 py-1 rounded-full"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
