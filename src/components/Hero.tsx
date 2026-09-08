import { portfolioData } from '@/data/portfolio'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const { hero, personal } = portfolioData

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8 pt-20 pb-32">
      <div className="max-w-4xl mx-auto text-center animate-slide-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-blue-900 dark:text-blue-300">
            Available for opportunities
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Security Operations</span>
          <br />
          <span className="text-gray-900 dark:text-white">Leader & Architect</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {hero.subheadline}
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 dark:text-gray-400">Email:</span>
            <a
              href={`mailto:${personal.email}`}
              className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              {personal.email}
            </a>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 dark:text-gray-400">Phone:</span>
            <a
              href={`tel:${personal.phone}`}
              className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              {personal.phone}
            </a>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#experience"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
        >
          {hero.cta}
          <ArrowDown size={20} />
        </a>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-gray-400 dark:text-gray-600" />
        </div>
      </div>
    </section>
  )
}
