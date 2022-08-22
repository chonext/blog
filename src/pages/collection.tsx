import clsx from 'clsx';
import { useRecoilValue } from 'recoil';

import useLoaded from '@/hooks/useLoaded';

import ProjectCard from '@/components/content/projects/ProjectCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { projectsAtom } from '@/store/projects';

export default function ProjectsPage() {
  const isLoaded = useLoaded();
  const projects = useRecoilValue(projectsAtom);

  return (
    <Layout>
      <Seo
        templateTitle='Projects'
        description="Showcase of my projects on front-end development that I'm proud of."
      />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start min-h-screen')}>
          <div className='layout mt-[60px] min-h-screen py-12'>
            <h1 className='text-5xl dark:text-gray-100' data-fade='0'>
              Collections
            </h1>
            <p data-fade='1' className='mt-2 text-gray-600 dark:text-gray-300'>
              Showcase some of my favorite useful websites.
            </p>

            {projects.map((project, index) => (
              <div key={project.category}>
                <h1
                  className='my-6 text-xl dark:text-gray-100'
                  data-fade={index + 1}
                >
                  {project.category}
                </h1>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
