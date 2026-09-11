import React, { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useActiveSection } from '../hooks/useActiveSection';
import { scrollToSection } from '../utils/smoothScroll';
import { profile } from '../data/profile';

const links = [
{ id: 'work', label: 'Work' },
{ id: 'experience', label: 'Experience' },
{ id: 'education', label: 'Education' },
{ id: 'skills', label: 'Skills' },
{ id: 'contact', label: 'Contact' }];


const sectionIds = links.map((l) => l.id);

export function Nav() {
  const active = useActiveSection(sectionIds);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24));

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color] duration-200 ${
      scrolled ? 'border-line bg-bg/80 backdrop-blur-md' : 'border-transparent bg-transparent'}`
      }>
      
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        
        <a
          href="#top"
          onClick={(e) => go(e, 'top')}
          className="font-mono text-sm text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
          
          {profile.handle.split('.')[0]}
          <span className="text-accent">.</span>
          {profile.handle.split('.')[1]}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => go(e, link.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative block rounded-full px-4 py-1.5 text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive ? 'text-fg' : 'text-muted hover:text-fg'}`
                  }>
                  
                  {isActive &&
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full border border-line bg-surface"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }} />

                  }
                  <span className="relative">{link.label}</span>
                </a>
              </li>);

          })}
        </ul>

        <a
          href="#contact"
          onClick={(e) => go(e, 'contact')}
          className="rounded-full border border-line px-4 py-1.5 text-sm text-fg md:hidden">
          
          Contact
        </a>
      </nav>
    </header>);

}