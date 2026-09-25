import React from 'react';
import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';
import { easeOut } from '../utils/motion';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="border-t border-line px-6 py-28 md:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="Toolkit" title="Skills & Tools" />

        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, gi) => (
            <div key={group.label} className="border-t border-line pt-6">
              <h3 className="font-mono text-sm text-muted">{group.label}</h3>
              <ul className="mt-6 space-y-3">
                {group.skills.map((skill, si) => (
                  <motion.li
                    key={skill.name}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 0.25,
                      delay: gi * 0.06 + si * 0.04,
                      ease: easeOut,
                    }}
                    className="flex items-center gap-3 text-xl tracking-tight text-fg">
                    <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-accent" />
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
