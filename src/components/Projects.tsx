'use client'

import { portfolioData } from '@/data/portfolio'
import { useState } from 'react'

export default function Projects() {
  const { projects } = portfolioData
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null)

  // Get unique companies
  const companies = Array.from(new Set(projects.map((p) => p.company)))

  // Filter projects
  const filteredProjects = selectedCompany
    ? projects.filter((p) => p.company === selectedCompany)
    : projects

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Key projects and engagements across companies, showcasing security operations transformation, platform migrations, and detection engineering.
          </p>
        </div>

        {/* Company Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCompany(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCompany === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              All Projects
            </button>
            {companies.map((company) => (
              <button
                key={company}
                onClick={() => setSelectedCompany(company)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCompany === company
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {company}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-none transition-shadow border border-gray-200 dark:border-gray-600"
            >
              {/* Company & Period */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                    {project.company}
                  </h3>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {project.period}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">
                  Key Achievements:
                </h5>
                <ul className="space-y-2">
                  {project.achievements.slice(0, 3).map((achievement, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-700 dark:text-gray-300 flex gap-2"
                    >
                      <span className="text-orange-600 dark:text-orange-400 font-bold">
                        ✓
                      </span>
                      {achievement}
                    </li>
                  ))}
                  {project.achievements.length > 3 && (
                    <li className="text-sm text-gray-500 dark:text-gray-400 italic">
                      +{project.achievements.length - 3} more...
                    </li>
                  )}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-600">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
