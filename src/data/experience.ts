import type { ExperienceEntry } from '../types/portfolio';

export const experience: ExperienceEntry[] = [
  {
    period: 'Nov 2025 — Present',
    role: 'Associate Fullstack',
    company: 'Skylight Codeworks',
    location: 'Lahore',
    summary:
      'Building scalable frontend architecture and component-driven UIs for production office products, with a focus on performance and design consistency.',
    highlights: [
      'Built scalable and modular frontend architecture using React (Vite), leveraging functional components, hooks (useState, useEffect, useMemo), and efficient bundling for improved performance.',
      'Implemented a component-driven UI system using Material UI (MUI), customizing themes, breakpoints, and reusable components for responsive design and consistency across the application.',
      'Optimized backend data rendering performance with server-state management, memoization strategies, and component-level optimizations — reducing unnecessary re-renders and improving responsiveness.'
    ],
    tags: ['React', 'Vite', 'Material UI', 'Redux Toolkit']
  },
  {
    period: 'Jul 2024 — Jan 2025',
    role: 'React Developer Intern',
    company: 'SolitaryBiz',
    location: 'Lahore',
    summary:
      'Developed dynamic React interfaces with modern hooks, client-side routing, and API-driven state synchronization.',
    highlights: [
      'Utilized core React Hooks (useState, useEffect, useContext) along with advanced hooks such as useRef, useMemo, and useCallback to manage application behavior and optimize performance.',
      'Fetched and rendered real-time data using axios and APIs, keeping state synchronized across components with Context API.',
      'Developed dynamic web interfaces using both class-based and modern functional components, leveraging props and state for reusable, interactive UI.',
      'Implemented efficient client-side routing with React Router, including lazy loading for smoother SPA navigation.',
      'Handled errors and loading states with conditional rendering for a smooth experience during API calls.'
    ],
    tags: ['React', 'React Router', 'Context API', 'Axios']
  },
  {
    period: 'Aug 2022 — Oct 2022',
    role: 'WordPress Developer Intern',
    company: 'WasiSoft Technology',
    location: 'Lahore',
    summary:
      'Designed and customized WordPress sites for e-commerce, focusing on usability, widgets, and visual polish.',
    highlights: [
      'Gained hands-on experience designing and customizing WordPress pages using themes, plugins, and drag-and-drop page builders.',
      'Integrated and configured navigation menus, contact forms, sliders, sidebars, and featured product sections for an e-commerce website.',
      'Enhanced engagement with interactive widgets such as recent posts, featured products, and social media feeds.'
    ],
    tags: ['WordPress', 'Themes', 'Plugins']
  }
];
