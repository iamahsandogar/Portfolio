import React from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectArchive } from './ProjectArchive';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  return (
    <section id="work" className="px-6 py-28 md:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="Portfolio" title="Projects" />

        <div className="mt-16 space-y-24 lg:mt-20 lg:space-y-36">
          {projects.map((project, i) =>
          <ProjectCard key={project.slug} project={project} index={i} />
          )}
        </div>
        <ProjectArchive />
      </div>
    </section>);

}