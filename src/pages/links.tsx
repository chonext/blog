import clsx from 'clsx';
import { useRecoilValue } from 'recoil';

import useLoaded from '@/hooks/useLoaded';

import Comment from '@/components/content/Comment';
import ContentPlaceholder from '@/components/content/ContentPlaceholder';
import LinkCard from '@/components/content/links/LinkCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { linksAtom } from '@/store/links';

export default function ProjectsPage() {
  const isLoaded = useLoaded();
  const links = useRecoilValue(linksAtom);

  return (
    <Layout>
      <Seo
        templateTitle='Links'
        description='Chocolate friends, learn from each other and make progress together.'
      />
      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout'>
            <div className='mt-12 grid max-w-[820px] gap-4' data-fade='1'>
              <p className='text-[32px]'>Links</p>
              <p className='mb-[32px] italic opacity-50'>
                Showcase of my projects on front-end development that I'm proud
                of.
              </p>
            </div>
            <ul
              className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4'
              data-fade='2'
            >
              {links.length > 0 ? (
                links.map((info, index) => (
                  <LinkCard
                    name={info.name}
                    desc={info.desc}
                    banner={info.banner}
                    url={info.url}
                    avatar={info.avatar}
                    tags={info.tags}
                    key={index}
                  />
                ))
              ) : (
                <ContentPlaceholder />
              )}
            </ul>
          </div>
          <figure className='mt-12'>
            <Comment />
          </figure>
        </section>
      </main>
    </Layout>
  );
}
