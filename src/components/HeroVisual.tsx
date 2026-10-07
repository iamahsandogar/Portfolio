import React from 'react';
import { motion } from 'framer-motion';
import { LayersIcon, ServerIcon, LayoutTemplateIcon } from 'lucide-react';
import { profile } from '../data/profile';
import { easeOut } from '../utils/motion';

const props: { key: string; value: string }[] = [
  { key: 'name', value: `"${profile.name}"` },
  { key: 'degree', value: '"BS CS @ UMT Lahore"' },
  { key: 'stack', value: '["React", "Node", "MongoDB"]' },
  { key: 'focus', value: '["MERN", "Responsive UIs"]' },
  { key: 'status', value: '"Available for Impact"' },
];

const cards = [
  {
    title: 'Full-Stack MERN',
    subtitle: 'Production Ready',
    icon: LayersIcon,
    tone: 'teal' as const,
    className: 'right-0 top-[6%] md:right-[-2%] lg:right-0',
    delay: 0,
  },
  {
    title: 'REST APIs',
    subtitle: 'Secure & Scalable',
    icon: ServerIcon,
    tone: 'green' as const,
    className: 'bottom-[18%] right-[-2%] md:bottom-[14%] lg:right-[-4%]',
    delay: 0.4,
  },
  {
    title: 'Responsive UIs',
    subtitle: 'Clean & Fast',
    icon: LayoutTemplateIcon,
    tone: 'violet' as const,
    className: 'bottom-[8%] left-0 md:bottom-[4%] lg:left-[-2%]',
    delay: 0.8,
  },
];

const toneIcon: Record<(typeof cards)[number]['tone'], string> = {
  teal: 'text-teal-300',
  green: 'text-accent',
  violet: 'text-violet-300',
};

const toneGlow: Record<(typeof cards)[number]['tone'], string> = {
  teal: 'shadow-[0_0_24px_rgba(45,212,191,0.12)]',
  green: 'shadow-[0_0_24px_rgba(158,240,122,0.14)]',
  violet: 'shadow-[0_0_24px_rgba(196,181,253,0.12)]',
};

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.25, ease: easeOut }}
      className="relative mx-auto aspect-square w-full max-w-[34rem] lg:max-w-none"
      aria-hidden="true">
      {/* soft radial glow */}
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(158,240,122,0.14)_0%,rgba(45,212,191,0.06)_38%,transparent_68%)]" />

      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(45,212,191,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(circle at center, black 35%, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 35%, transparent 72%)',
        }}
      />

      {/* orbital rings */}
      <motion.div
        className="pointer-events-none absolute inset-[6%] rounded-full border border-dashed border-teal-400/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="pointer-events-none absolute inset-[14%] rounded-full border border-dotted border-accent/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 64, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="pointer-events-none absolute inset-[22%] rounded-full border border-dashed border-violet-300/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      />

      {/* floating skill cards */}
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.title}
            className={`absolute z-20 ${card.className}`}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4.2,
              delay: card.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}>
            <div
              className={`flex items-center gap-3 rounded-2xl border border-white/10 bg-[rgb(18_20_24/0.88)] px-3.5 py-3 backdrop-blur-md ${toneGlow[card.tone]}`}>
              <span className={`flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04] ${toneIcon[card.tone]}`}>
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <div className="min-w-0 pr-1">
                <p className="text-sm font-medium tracking-tight text-fg">{card.title}</p>
                <p className="text-xs text-muted">{card.subtitle}</p>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* code window */}
      <div className="absolute inset-[18%] z-10 flex items-center justify-center sm:inset-[16%]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.4, ease: easeOut }}
          className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[rgb(14_16_20/0.95)] shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
          <div className="flex items-center gap-3 border-b border-white/[0.08] px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <p className="flex-1 text-center font-mono text-[11px] text-muted sm:text-xs">
              {profile.handle}.ts
            </p>
            <motion.span
              className="rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[10px] font-medium tracking-wide text-accent"
              animate={{ opacity: [1, 0.55, 1], scale: [1, 0.98, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}>
              ACTIVE
            </motion.span>
          </div>

          <pre className="overflow-x-auto px-4 py-4 font-mono text-[11px] leading-relaxed sm:px-5 sm:text-[12.5px] md:text-[13px]">
            <code>
              <motion.div
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.55, ease: easeOut }}>
                <span className="text-[#f97583]">const</span>{' '}
                <span className="text-[#79b8ff]">engineer</span>
                <span className="text-fg"> = {'{'}</span>
              </motion.div>

              {props.map((row, i) => (
                <motion.div
                  key={row.key}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.65 + i * 0.08, ease: easeOut }}
                  className="pl-4">
                  <span className="text-[#b392f0]">{row.key}</span>
                  <span className="text-fg">: </span>
                  <span className="text-accent">{row.value}</span>
                  <span className="text-fg">,</span>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.1, ease: easeOut }}>
                <span className="text-fg">{'};'}</span>
              </motion.div>
            </code>
          </pre>
        </motion.div>
      </div>
    </motion.div>
  );
}
