import type { SkillGroup } from '../types/portfolio';

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React.js', core: true },
      { name: 'TypeScript', core: true },
      { name: 'JavaScript', core: true },
      { name: 'Next.js', core: true },
      { name: 'Redux Toolkit', core: true },
      { name: 'Tailwind CSS', core: true },
      { name: 'Material UI', core: true },
      { name: 'HTML5 / CSS3', core: false },
      { name: 'Bootstrap5', core: false },
      { name: 'Ant Design', core: false },
      { name: 'Shadcn', core: false }
    ]
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', core: true },
      { name: 'Express.js', core: true },
      { name: 'Python', core: false },
      { name: 'Django / DRF', core: false },
      { name: 'C#', core: false }
    ]
  },
  {
    label: 'Database',
    skills: [
      { name: 'MongoDB', core: true },
      { name: 'SQL', core: true }
    ]
  },
  {
    label: 'Tools & platforms',
    skills: [
      { name: 'Git / GitHub', core: true },
      { name: 'VS Code', core: true },
      { name: 'Figma', core: true },
      { name: 'Vercel', core: true },
      { name: 'Netlify', core: false },
      { name: 'Trello / ClickUp', core: false },
      { name: 'reCAPTCHA', core: false },
      { name: 'AdSense', core: false }
    ]
  }
];

export const tickerItems = [
  'React.js',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Redux Toolkit',
  'Tailwind CSS',
  'Material UI',
  'Python'
];
