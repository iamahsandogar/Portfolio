import React from 'react';
import { motion } from 'framer-motion';
import { easeOut } from '../utils/motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  className?: string;
}

export function SectionHeading({ label, title, className = '' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.35, ease: easeOut }}
      className={`flex flex-col items-center text-center ${className}`}>
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent md:text-sm">
        {label}
      </p>
      <h2 className="mt-3 text-4xl font-semibold tracking-tight text-fg md:text-5xl lg:text-6xl">
        {title}
      </h2>
      <span
        aria-hidden="true"
        className="mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-accent/35 via-accent to-fg/80 md:mt-5 md:w-20"
      />
    </motion.div>
  );
}
