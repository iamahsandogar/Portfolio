export const easeOut: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function wrap(min: number, max: number, value: number): number {
  const range = max - min;
  return ((value - min) % range + range) % range + min;
}