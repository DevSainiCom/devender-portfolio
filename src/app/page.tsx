import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Devender Kumar - Security Operations & Architecture',
  description: '12+ years of cyber defense, SOC leadership, and detection engineering expertise',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Timeline />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}
