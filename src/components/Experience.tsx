import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { DownloadIcon } from 'lucide-react';
import { experience } from '../data/experience';
import { profile } from '../data/profile';
import { ExperienceItem } from './ExperienceItem';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 65%', 'end 60%'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  return (
    <section id="experience" className="border-t border-line px-6 py-28 md:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="Career" title="Experience" />

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="max-w-lg leading-relaxed text-muted">
            From WordPress foundations to React internships and fullstack product work — building
            clean UIs and reliable frontend systems in Lahore.
          </p>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-fg transition-colors duration-150 hover:border-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            <DownloadIcon className="h-4 w-4" />
            Download résumé
          </a>
        </div>

        <div ref={listRef} className="relative mx-auto mt-16 max-w-3xl lg:mt-20">
          <div aria-hidden="true" className="absolute bottom-2 left-[5px] top-2 w-px bg-line" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute bottom-2 left-[5px] top-2 w-px origin-top bg-accent"
          />

          <ol className="space-y-16 lg:space-y-20">
            {experience.map((entry) => (
              <ExperienceItem key={`${entry.company}-${entry.period}`} entry={entry} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
