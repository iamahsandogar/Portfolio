import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import type { ExperienceEntry } from '../types/portfolio';
import { easeOut } from '../utils/motion';

interface ExperienceItemProps {
  entry: ExperienceEntry;
}

export function ExperienceItem({ entry }: ExperienceItemProps) {
  const ref = useRef<HTMLLIElement>(null);
  const reached = useInView(ref, { once: true, margin: '0px 0px -40% 0px' });

  return (
    <li ref={ref} className="relative pl-10 md:pl-14">
      <span
        aria-hidden="true"
        className={`absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border transition-colors duration-300 ${
        reached ? 'border-accent bg-accent' : 'border-line bg-bg'}`
        } />
      
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3, ease: easeOut }}>
        
        <p className="font-mono text-sm text-muted">
          {entry.period} <span className="mx-2 text-line">/</span> {entry.location}
        </p>
        <h3 className="mt-3 text-2xl font-medium tracking-tight text-fg">
          {entry.role}{' '}
          <span className="text-muted">at</span>{' '}
          {entry.companyUrl ?
          <a
            href={entry.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1 text-fg underline decoration-line underline-offset-4 transition-colors duration-150 hover:decoration-accent">
            
            {entry.company}
            <ArrowUpRightIcon className="h-4 w-4 text-muted transition-colors duration-150 group-hover:text-accent" />
          </a> :
          <span className="text-fg">{entry.company}</span>}
        </h3>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">{entry.summary}</p>
        <ul className="mt-5 max-w-2xl space-y-2.5">
          {entry.highlights.map((h) =>
          <li key={h} className="flex gap-3 text-fg/90">
              <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
              <span className="leading-relaxed">{h}</span>
            </li>
          )}
        </ul>
        <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
          {entry.tags.map((t) =>
          <li key={t}>{t}</li>
          )}
        </ul>
      </motion.div>
    </li>);

}