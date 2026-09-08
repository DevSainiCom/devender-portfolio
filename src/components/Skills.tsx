import { portfolioData } from '@/data/portfolio'

export default function Skills() {
  const { skills } = portfolioData

  const proficiencyColors = {
    Expert: 'bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-300',
    Advanced: 'bg-orange-100 dark:bg-orange-900/30 text-orange-900 dark:text-orange-300',
    Intermediate: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-900 dark:text-yellow-300',
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Deep expertise across security operations, detection engineering, cloud security, and infrastructure spanning 12+ years.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-none transition-shadow"
            >
              {/* Skill Header */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {skill.category}
                </h3>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    proficiencyColors[skill.proficiency as keyof typeof proficiencyColors]
                  }`}
                >
                  {skill.proficiency}
                </span>
              </div>

              {/* Skill Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {skill.details}
              </p>

              {/* Tools/Platforms */}
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Competencies Summary */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
            <div className="flex gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Detection Engineering & Threat Hunting</span>
            </div>
            <div className="flex gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>SOC Leadership & Operations</span>
            </div>
            <div className="flex gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>SIEM/SOAR Platform Ownership</span>
            </div>
            <div className="flex gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Cloud Security & IAM/PAM</span>
            </div>
            <div className="flex gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Incident Response & Crisis Management</span>
            </div>
            <div className="flex gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Security Architecture & Governance</span>
            </div>
            <div className="flex gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>EDR/XDR Platform Management</span>
            </div>
            <div className="flex gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Vulnerability Management</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
