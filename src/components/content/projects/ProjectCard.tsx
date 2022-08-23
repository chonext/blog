import clsx from 'clsx';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import TechIcons, { TechListType } from '@/components/TechIcons';

import { ProjectsType } from '@/types/frontmatters';

type ProjectCardProps = {
  project: ProjectsType;
} & React.ComponentPropsWithoutRef<'li'>;

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <ul className='mt-6 grid grid-cols-4 gap-4'>
      {project.child.map((projectItem) => (
        <li
          key={projectItem.title}
          className={clsx(
            'project-card md:w-full rounded-md',
            'border dark:border-gray-600',
            'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
            'transition duration-100',
            'motion-reduce:hover:scale-100',
            'animate-shadow',
            className
          )}
        >
          <UnstyledLink
            href={projectItem.link}
            className='flex h-full flex-col items-start rounded-md p-4 focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
          >
            <h4>{projectItem.title}</h4>
            <p className='mb-auto text-sm text-gray-700 dark:text-gray-300'>
              {projectItem.description}
            </p>
            <div className='mt-2'>
              <TechIcons
                techs={projectItem.techs.split(',') as Array<TechListType>}
              />
            </div>

            <p className='animated-underline mt-2 inline-block font-medium'>
              See On My Github →
            </p>
          </UnstyledLink>
        </li>
      ))}
    </ul>
  );
}
