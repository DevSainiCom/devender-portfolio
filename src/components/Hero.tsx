'use client';

import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Gradient circle background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-2xl opacity-30"></div>
              
              {/* Profile image container */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">👤</div>
                  <p className="text-sm text-white/60">Professional Headshot</p>
                  <p className="text-xs text-white/40">Add image to public/images/profile.jpg</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Devender Kumar
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-2">
                Cyber Defense Lead | Security Architect
              </p>
              <p className="text-lg text-white/60">
                EMEA & APAC | EPAM Systems, Netherlands
              </p>
            </div>

            <div className="space-y-3 border-l-2 border-primary/30 pl-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Security Operations Leader & Detection Engineer
              </h2>
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                12+ years building SOCs, leading cyber defense teams, and architecting detection systems across enterprise, MSSP, and telecom infrastructure.
              </p>
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
            </div>

            {/* CTA Button */}
            <a
              href="#experience"
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              View Work
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary/60" />
        </div>
      </div>
    </section>
  );
}
