import { useEffect } from 'react';
import { initSmoothScroll } from '../utils/smoothScroll';

export function useSmoothScroll(): void {
  useEffect(() => initSmoothScroll(), []);
}