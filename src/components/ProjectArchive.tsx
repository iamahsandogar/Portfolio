import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { archive } from '../data/projects';
import { easeOut } from '../utils/motion';

export function ProjectArchive() {
  return (
    <div className="mt-28 lg:mt-40">
      <h3 className="text-2xl font-medium tracking-tight text-fg">More projects</h3>
      <div
        aria-hidden="true"
        className="mt-8 hidden grid-cols-12 gap-6 border-b border-line pb-3 font-mono text-xs text-muted md:grid"
      >
        <span className="col-span-1">Year</span>
        <span className="col-span-3">Project</span>
        <span className="col-span-5">About</span>
        <span className="col-span-3">Built with</span>
      </div>
      <ul className="mt-6 md:mt-0">
        {archive.map((item, i) => {
          const content = (
            <>
              <span className="col-span-2 font-mono text-sm text-muted md:col-span-1">{item.year}</span>
              <span className="col-span-10 flex items-center gap-2 font-medium text-fg md:col-span-3">
                {item.title}
                {item.href && (
                  <ArrowUpRightIcon className="h-4 w-4 text-muted transition-[transform,color] duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                )}
              </span>
              <span className="col-span-10 col-start-3 text-sm text-muted md:col-span-5 md:col-start-auto">
                {item.description}
              </span>
              <span className="hidden font-mono text-xs text-muted md:col-span-3 md:block">
                {item.stack.join(' · ')}
              </span>
            </>
          );

          return (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.25, delay: i * 0.05, ease: easeOut }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-12 items-baseline gap-x-6 gap-y-1 border-b border-line px-0 py-5 transition-colors duration-150 hover:bg-surface focus-visible:bg-surface focus-visible:outline-none md:px-2"
                >
                  {content}
                </a>
              ) : (
                <div className="grid grid-cols-12 items-baseline gap-x-6 gap-y-1 border-b border-line px-0 py-5 md:px-2">
                  {content}
                </div>
              )}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
