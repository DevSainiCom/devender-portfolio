import { portfolioData } from '@/data/portfolio'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

export default function Contact() {
  const { contactSection, personal } = portfolioData

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {contactSection.heading}
          </h2>
          <p className="text-xl text-blue-100">
            {contactSection.subheading}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <a
            href={`mailto:${personal.email}`}
            className="group bg-white dark:bg-gray-800 rounded-lg p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
              <Mail className="text-blue-600 dark:text-blue-400" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Email</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">{personal.email}</p>
          </a>

          {/* Phone */}
          <a
            href={`tel:${personal.phone}`}
            className="group bg-white dark:bg-gray-800 rounded-lg p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
              <Phone className="text-orange-600 dark:text-orange-400" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Phone</h3>
            <p className="text-orange-600 dark:text-orange-400 font-medium">{personal.phone}</p>
          </a>

          {/* LinkedIn */}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-gray-800 rounded-lg p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50 transition-colors">
              <Linkedin className="text-indigo-600 dark:text-indigo-400" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium">devendersaini</p>
          </a>
        </div>

        {/* Location */}
        <div className="text-center mb-12 text-white">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin size={20} />
            <span className="text-lg font-medium">{personal.location}</span>
          </div>
          <p className="text-blue-100">
            Dutch Citizen • Open to global opportunities
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-lg p-8 text-center border border-white/20">
          <p className="text-lg text-white mb-6">
            Interested in discussing security strategy, detection engineering, or SOC transformation?
          </p>
          <a
            href="mailto:devender.saini.com@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  )
}
