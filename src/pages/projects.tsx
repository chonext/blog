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
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout'>
            <div
              className='mx-8 mt-12 grid max-w-[820px] gap-4 mb:mx-0'
              data-fade='1'
            >
              <p className='text-[32px]'>Projects</p>
              <p className='mb-[32px] italic opacity-50'>
                Showcase of my projects on front-end development that I'm proud
                of.
              </p>
              {projects?.map((project, index) => (
                <div key={project.category}>
                  <h1
                    className='text-[18px] text-[#555] dark:text-[#aaa]'
                    data-fade={index + 1}
                  >
                    {project.category}
                  </h1>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
