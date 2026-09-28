import React from 'react';
import { ArrowUpIcon } from 'lucide-react';
import { profile } from '../data/profile';
import { scrollToSection } from '../utils/smoothScroll';

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}. Designed & built by hand.
        </p>
        <button
          type="button"
          onClick={() => scrollToSection('top')}
          className="group inline-flex items-center gap-2 transition-colors duration-150 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
          
          Back to top
          <ArrowUpIcon className="h-3.5 w-3.5 transition-transform duration-150 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>);

}