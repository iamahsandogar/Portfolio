import Lenis from 'lenis';

let instance: Lenis | null = null;

export function initSmoothScroll(): () => void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {};
  }
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t: number) => 1 - Math.pow(1 - t, 4)
  });
  instance = lenis;
  let frame = 0;
  const raf = (time: number) => {
    lenis.raf(time);
    frame = requestAnimationFrame(raf);
  };
  frame = requestAnimationFrame(raf);
  return () => {
    cancelAnimationFrame(frame);
    lenis.destroy();
    instance = null;
  };
}

export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  if (instance) {
    instance.scrollTo(el, { offset: id === 'top' ? 0 : -72 });
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}