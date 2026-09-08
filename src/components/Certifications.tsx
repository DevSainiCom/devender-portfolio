import { portfolioData } from '@/data/portfolio'
import { Award, BookOpen } from 'lucide-react'

export default function Certifications() {
  const { certifications, education } = portfolioData

  const categoryColors = {
    Leadership: 'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20',
    Operations: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20',
    Technical: 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20',
    Cloud: 'border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20',
    Vulnerability: 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20',
    Platform: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20',
    Network: 'border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-900/20',
    AI: 'border-pink-200 dark:border-pink-800 bg-pink-50 dark:bg-pink-900/20',
  }

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications & Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Professional certifications and academic qualifications demonstrating expertise in cybersecurity leadership and technical domains.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
            <Award className="text-orange-500" size={28} />
            Professional Certifications
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border-2 ${
                  categoryColors[cert.category as keyof typeof categoryColors] ||
                  'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {cert.name}
                  </h4>
                  {cert.year && (
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-2 py-1 rounded">
                      {cert.year}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  {cert.issuer}
                </p>
                {cert.details && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
            <BookOpen className="text-blue-500" size={28} />
            Education
          </h3>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-none transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {edu.year}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{edu.school}</p>
                {edu.achievement && (
                  <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      ✨ {edu.achievement}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg">
            <div className="text-4xl font-bold gradient-text mb-2">
              {certifications.length}
            </div>
            <p className="text-gray-600 dark:text-gray-400">Professional Certifications</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg">
            <div className="text-4xl font-bold gradient-text mb-2">12+</div>
            <p className="text-gray-600 dark:text-gray-400">Years of Experience</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg">
            <div className="text-4xl font-bold gradient-text mb-2">
              {education.length}
            </div>
            <p className="text-gray-600 dark:text-gray-400">Degrees</p>
          </div>
        </div>
      </div>
    </section>
  )
}
