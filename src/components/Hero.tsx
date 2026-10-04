import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';
import { profile } from '../data/profile';
import { useLocalTime } from '../hooks/useLocalTime';
import { easeOut } from '../utils/motion';
import { scrollToSection } from '../utils/smoothScroll';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const time = useLocalTime(profile.timezone);
  const lastIndex = profile.headline.length - 1;

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-14 pt-28 md:px-10 lg:pb-16 lg:pt-32">
      <motion.div style={{ y, opacity }} className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6 xl:col-span-6">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="mb-6 flex items-center gap-3 font-mono text-xs text-muted md:mb-8 md:text-sm">
            <span className="relative flex h-2 w-2">
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-accent"
                animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
              />
              <span className="relative h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </motion.p>

          <p className="mb-4 font-mono text-sm text-accent md:text-base">{profile.name}</p>

          <h1 className="text-[11vw] font-medium leading-[0.95] tracking-[-0.045em] text-fg sm:text-5xl md:text-6xl xl:text-[4.75rem]">
            <span className="sr-only">
              {profile.name} — {profile.headline.join(' ')}
            </span>
            {profile.headline.map((line, i) => (
              <span key={line} aria-hidden="true" className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.07, ease: easeOut }}>
                  {line}
                  {i === lastIndex && (
                    <motion.span
                      className="ml-[0.08em] inline-block h-[0.72em] w-[0.38em] translate-y-[0.06em] bg-accent"
                      animate={{ opacity: [1, 1, 0, 0] }}
                      transition={{
                        duration: 1.1,
                        repeat: Infinity,
                        ease: 'linear',
                        times: [0, 0.5, 0.5, 1],
                      }}
                    />
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.35, ease: easeOut }}
            className="mt-6 max-w-md text-base leading-relaxed text-muted md:mt-8 md:text-lg">
            {profile.intro}
          </motion.p>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.45, ease: easeOut }}
            className="mt-8 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 font-mono text-sm">
            <dt className="text-muted">Based in</dt>
            <dd className="text-fg">{profile.location}</dd>
            <dt className="text-muted">Local time</dt>
            <dd className="tabular-nums text-fg">{time}</dd>
            <dt className="text-muted">Focus</dt>
            <dd className="text-fg">{profile.focus}</dd>
          </motion.dl>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.55, ease: easeOut }}
            className="mt-10 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection('work')}
              className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-transform duration-150 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg">
              View work
              <ArrowDownIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="whitespace-nowrap rounded-full border border-line px-5 py-2.5 text-sm text-fg transition-colors duration-150 hover:border-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              Get in touch
            </button>
          </motion.div>
        </div>

        <div className="lg:col-span-6">
          <HeroVisual />
        </div>
      </motion.div>
    </section>
  );
}
