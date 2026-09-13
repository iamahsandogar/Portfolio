import React, { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity } from
'framer-motion';
import { tickerItems } from '../data/skills';
import { wrap } from '../utils/motion';

const baseVelocity = -2.5;

export function StackTicker() {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_t, delta) => {
    if (reduce) return;
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    const f = velocityFactor.get();
    if (f < 0) direction.current = -1;else
    if (f > 0) direction.current = 1;
    moveBy += direction.current * moveBy * f;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden border-y border-line py-6" aria-label="Technologies I work with">
      <motion.ul style={{ x }} className="flex w-max whitespace-nowrap">
        {[0, 1].map((copy) =>
        tickerItems.map((item) =>
        <li
          key={`${copy}-${item}`}
          aria-hidden={copy === 1 ? 'true' : undefined}
          className="flex items-center text-2xl font-medium tracking-tight text-muted md:text-4xl">
          
              <span className="px-6 md:px-10">{item}</span>
              <span className="font-mono text-base text-accent md:text-xl">/</span>
            </li>
        )
        )}
      </motion.ul>
    </div>);

}