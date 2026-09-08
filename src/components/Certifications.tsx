'use client';

import { Award, BookOpen } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const certificationColors: Record<string, { bg: string; border: string; icon: string }> = {
  'Leadership': { bg: 'from-purple-500/10 to-pink-500/10', border: 'border-purple-500/30', icon: '🏆' },
  'Operations': { bg: 'from-blue-500/10 to-cyan-500/10', border: 'border-blue-500/30', icon: '⚙️' },
  'Technical': { bg: 'from-orange-500/10 to-red-500/10', border: 'border-orange-500/30', icon: '🔧' },
  'Cloud': { bg: 'from-sky-500/10 to-blue-500/10', border: 'border-sky-500/30', icon: '☁️' },
  'Vulnerability': { bg: 'from-yellow-500/10 to-orange-500/10', border: 'border-yellow-500/30', icon: '🎯' },
  'Platform': { bg: 'from-indigo-500/10 to-purple-500/10', border: 'border-indigo-500/30', icon: '📊' },
  'Network': { bg: 'from-emerald-500/10 to-green-500/10', border: 'border-emerald-500/30', icon: '🌐' },
  'AI': { bg: 'from-violet-500/10 to-pink-500/10', border: 'border-violet-500/30', icon: '🤖' },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">Certifications & Credentials</h2>
          </div>
          <p className="text-white/60 text-lg">Professional qualifications and formal training</p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {portfolioData.certifications.map((cert, index) => {
            const colorSet = certificationColors[cert.category] || certificationColors['Technical'];
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${colorSet.bg} border ${colorSet.border} rounded-lg p-6 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:border-primary/50`}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon and Category */}
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{colorSet.icon}</span>
                    <span className="text-xs font-semibold text-primary/60 bg-primary/10 px-3 py-1 rounded-full">
                      {cert.category}
                    </span>
                  </div>

                  {/* Certification Name */}
                  <h3 className="text-lg font-bold text-white mb-1">
                    {cert.name}
                  </h3>

                  {/* Issuer and Date */}
                  <p className="text-sm text-white/60 mb-3">
                    {cert.issuer}
                  </p>

                  {/* Expiry/Valid Date */}
                  {cert.validUntil && (
                    <p className="text-xs text-white/40">
                      Valid until: {cert.validUntil}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-secondary" />
            <h3 className="text-3xl font-bold">Education</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.education.map((edu, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/30 rounded-lg p-6 hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 hover:border-secondary/50"
              >
                {/* Degree */}
                <h4 className="text-xl font-bold text-white mb-2">
                  {edu.degree}
                </h4>

                {/* Institution */}
                <p className="text-base text-white/70 mb-3">
                  {edu.institution}
                </p>

                {/* Year */}
                <p className="text-sm text-white/50">
                  {edu.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
