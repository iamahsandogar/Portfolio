import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRightIcon, CheckIcon, CopyIcon, XIcon } from 'lucide-react';
import { profile, socials } from '../data/profile';
import { easeOut } from '../utils/motion';
import { SectionHeading } from './SectionHeading';

type CopyState = 'idle' | 'copied' | 'error';

export function Contact() {
  const [copyState, setCopyState] = useState<CopyState>('idle');

  useEffect(() => {
    if (copyState === 'idle') return;
    const id = window.setTimeout(() => setCopyState('idle'), 2000);
    return () => window.clearTimeout(id);
  }, [copyState]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState('copied');
    } catch {
      setCopyState('error');
    }
  };

  const label = copyState === 'copied' ? 'Copied' : copyState === 'error' ? 'Copy failed' : 'Copy';
  const Icon = copyState === 'copied' ? CheckIcon : copyState === 'error' ? XIcon : CopyIcon;

  return (
    <section id="contact" className="border-t border-line px-6 py-28 md:px-10 lg:py-44">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="Connect" title="Get In Touch" />

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="max-w-md leading-relaxed text-muted">
              I'm currently open to fullstack and frontend roles in a collaborative, fast-paced team.
              Reach out anytime — I reply within two days.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 font-mono text-xl text-fg underline decoration-line underline-offset-8 transition-colors duration-150 hover:decoration-accent md:text-3xl">
                
                {profile.email}
                <ArrowUpRightIcon className="h-5 w-5 text-accent transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <button
                type="button"
                onClick={copy}
                aria-live="polite"
                className="inline-flex min-w-[7.5rem] items-center justify-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-fg transition-[border-color,transform] duration-150 hover:border-muted active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copyState}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15, ease: easeOut }}
                    className={`inline-flex items-center gap-2 ${copyState === 'copied' ? 'text-accent' : ''}`}>
                    
                    <Icon className="h-4 w-4" />
                    {label}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="mt-4 inline-block font-mono text-sm text-muted transition-colors duration-150 hover:text-fg">
              {profile.phone}
            </a>
          </div>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 self-end lg:col-span-4 lg:col-start-9">
            {socials.map((s) =>
            <li key={s.label}>
                <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-muted transition-colors duration-150 hover:text-fg">
                
                  {s.label}
                  <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}