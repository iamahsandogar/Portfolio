export interface SocialLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  type: string;
  description: string;
  metric: { value: string; label: string };
  stack: string[];
  liveUrl?: string;
  sourceUrl?: string;
  image: string;
  imageAlt: string;
  /** CSS object-position for the cover image */
  imagePosition?: string;
  /** How the image should fill the frame */
  imageFit?: 'cover' | 'contain';
}

export interface ArchiveProject {
  year: string;
  title: string;
  description: string;
  stack: string[];
  href?: string;
}

export interface ExperienceEntry {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export interface Skill {
  name: string;
  core: boolean;
}

export interface SkillGroup {
  label: string;
  skills: Skill[];
}

export interface EducationEntry {
  period: string;
  degree: string;
  detail: string;
  school: string;
  location: string;
}
