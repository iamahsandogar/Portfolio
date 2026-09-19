import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, CodeIcon } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { easeOut } from '../utils/motion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reversed = index % 2 === 1;
  const position = project.imagePosition ?? 'center';
  const fit = project.imageFit ?? 'cover';

  const media = (
    <img
      src={project.image}
      alt={project.imageAlt}
      loading="lazy"
      className={`transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02] ${
        fit === 'contain'
          ? 'max-h-full max-w-full object-contain p-4 sm:p-5'
          : 'h-full w-full object-cover'
      }`}
      style={{ objectPosition: position }}
    />
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, ease: easeOut }}
      className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      <div
        className={`group relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-[#0e1014] lg:col-span-7 ${
          reversed ? 'lg:order-2' : ''
        }`}>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open live demo of ${project.title}`}
            className="absolute inset-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            {media}
            <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-fg text-bg opacity-0 transition-[opacity,transform] duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRightIcon className="h-4 w-4" />
            </span>
          </a>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">{media}</div>
        )}
      </div>

      <div className={`flex flex-col lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-3 font-mono text-xs text-muted">
          <span>{project.year}</span>
          <span aria-hidden="true" className="h-px w-6 bg-line" />
          <span>{project.type}</span>
        </div>
        <h3 className="mt-4 text-3xl font-medium tracking-tight text-fg md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

        <p className="mt-6">
          <span className="font-mono text-2xl text-accent">{project.metric.value}</span>
          <span className="ml-3 text-sm text-muted">{project.metric.label}</span>
        </p>

        <ul aria-label="Tech stack" className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
              {tech}
            </li>
          ))}
        </ul>

        {(project.liveUrl || project.sourceUrl) && (
          <div className="mt-8 flex items-center gap-6 text-sm">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-1.5 rounded text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                Live demo
                <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-150 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded text-muted transition-colors duration-150 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                <CodeIcon className="h-4 w-4" />
                Source
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
