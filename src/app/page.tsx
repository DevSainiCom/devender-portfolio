'use client'

import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import CoverLetter from '@/components/CoverLetter'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Timeline />
      <Projects />
      <Skills />
      <Certifications />
      <CoverLetter />
      <Contact />
    </>
  )
}
