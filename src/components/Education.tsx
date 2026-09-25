import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/education';
import { easeOut } from '../utils/motion';
import { SectionHeading } from './SectionHeading';

export function Education() {
  return (
    <section id="education" className="border-t border-line px-6 py-28 md:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="Background" title="Education" />

        <ul className="mt-16 space-y-0 border-t border-line">
          {education.map((entry, i) => (
            <motion.li
              key={entry.degree}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.3, delay: i * 0.05, ease: easeOut }}
              className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:items-baseline md:gap-6"
            >
              <p className="font-mono text-sm text-muted md:col-span-3">{entry.period}</p>
              <div className="md:col-span-6">
                <h3 className="text-xl font-medium tracking-tight text-fg md:text-2xl">
                  {entry.degree}
                </h3>
                <p className="mt-2 text-muted">
                  {entry.school}
                  <span className="mx-2 text-line">·</span>
                  {entry.location}
                </p>
              </div>
              <p className="font-mono text-sm text-accent md:col-span-3 md:text-right">
                {entry.detail}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
