import type { ArchiveProject, Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    slug: 'skyschool',
    title: 'SkySchool',
    year: '2025',
    type: 'Office project',
    description:
      'Frontend for a multi-tenant school management system supporting Super Admin, Organization Admin, School Admin, Branch Admin, Admission Officer, and Account Officer roles — with permission-driven dashboards, routes, and actions.',
    metric: { value: '6 roles', label: 'permission-driven multi-tenant access' },
    stack: ['React', 'Redux Toolkit', 'RTK Query', 'REST APIs'],
    image: '/916235ae-4a09-43fd-bf9f-08d3710e41c1.jpg',
    imageAlt: 'SkySchool multi-tenant school management dashboard with role-based navigation'
  },
  {
    slug: 'skycrm',
    title: 'SkyCRM',
    year: '2025',
    type: 'Office project',
    description:
      'Office CRM frontend with separate Admin and Employee panels. Dynamic dashboard for leads, project completion, and employee performance — plus light/dark mode and cross-device responsiveness.',
    metric: { value: '2 panels', label: 'Admin and Employee with live metrics' },
    stack: ['React', 'Vite', 'Material UI'],
    image: '/a03a3b47-3dd9-442c-b1f8-4cad50368337.jpg',
    imageAlt: 'SkyCRM dashboard showing leads, project status, and employee performance metrics'
  },
  {
    slug: 'verstyle',
    title: 'VerStyle',
    year: '2023',
    type: 'Final year project',
    description:
      'Full-featured online clothing store built with the MERN stack. Includes user panel and admin dashboard, product CRUD, shopping cart, wishlist, filtering, and a simulated secure checkout with Visa and MasterCard options.',
    metric: { value: 'MERN', label: 'full-stack e-commerce from UI to APIs' },
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    image: '/project1.png',
    imageAlt: 'VerStyle online clothing store hero with nav and shop banner',
    imagePosition: 'center',
    imageFit: 'contain'
  }
];

export const archive: ArchiveProject[] = [
  {
    year: '2025',
    title: 'SkyLogs',
    description:
      'Employee attendance portal with check-in/out, leave applications, overtime requests, and approval tracking.',
    stack: ['React', 'Redux Toolkit', 'REST APIs']
  },
  {
    year: '2024',
    title: 'Logo Authority',
    description:
      'Mobile-responsive voting platform with CAPTCHA vote limiting and logo search on results.',
    stack: ['React', 'Firebase']
  },
  {
    year: '2024',
    title: 'Portfolio Website',
    description:
      'Responsive React portfolio with CSS smooth-scroll navigation and modular components.',
    stack: ['React', 'CSS']
  },
  {
    year: '2023',
    title: 'Diabetes Prediction',
    description:
      'ML models (KNN, Naive Bayes, Decision Tree) predicting Type 2 Diabetes on the Pima Indians dataset.',
    stack: ['Python', 'scikit-learn']
  }
];
