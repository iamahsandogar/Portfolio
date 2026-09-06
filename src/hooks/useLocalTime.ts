import { useEffect, useState } from 'react';

export function useLocalTime(timeZone: string): string {
  const [time, setTime] = useState(() => format(timeZone));

  useEffect(() => {
    const id = window.setInterval(() => setTime(format(timeZone)), 1000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return time;
}

function format(timeZone: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(new Date());
}