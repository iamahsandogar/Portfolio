import React from 'react';
import { MotionConfig } from 'framer-motion';
import { ScrollProgress } from './components/ScrollProgress';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { StackTicker } from './components/StackTicker';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export function App() {
  useSmoothScroll();

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full bg-bg font-sans text-fg">
        <ScrollProgress />
        <Nav />
        <main>
          <Hero />
          <StackTicker />
          <Projects />
          <Experience />
          <Education />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>);

}