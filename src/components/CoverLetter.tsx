'use client'

import { portfolioData } from '@/data/portfolio'
import { FileText, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function CoverLetter() {
  const { coverLetter } = portfolioData
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(coverLetter)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="cover-letter" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <FileText className="text-blue-600 dark:text-blue-400" size={32} />
            <span className="gradient-text">Cover Letter</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A professional overview tailored for security leadership roles.
          </p>
        </div>

        {/* Copy Button */}
        <div className="mb-6 flex gap-3">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            {copied ? (
              <>
                <Check size={20} />
                Copied!
              </>
            ) : (
              <>
                <Copy size={20} />
                Copy to Clipboard
              </>
            )}
          </button>
        </div>

        {/* Cover Letter Content */}
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 whitespace-pre-wrap text-gray-700 dark:text-gray-300 leading-relaxed font-serif text-base md:text-lg">
          {coverLetter}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Discuss?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I'm open to discussing security leadership opportunities that align with my experience in SOC transformation, detection engineering, and cyber defense strategy.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:devender.saini.com@gmail.com"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/devendersaini"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-medium transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
