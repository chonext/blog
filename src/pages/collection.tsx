import clsx from 'clsx';
import { useRecoilValue } from 'recoil';

import useLoaded from '@/hooks/useLoaded';

import CollectionCard from '@/components/content/collections/CollectionCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { collectionsAtom } from '@/store/collections';

export default function ProjectsPage() {
  const isLoaded = useLoaded();
  const collections = useRecoilValue(collectionsAtom);

  return (
    <Layout>
      <Seo
        templateTitle='Projects'
        description="Showcase of my collections on front-end development that I'm proud of."
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

            {collections.map((collection, index) => (
              <div key={collection.category}>
                <h1
                  className='my-6 text-xl dark:text-gray-100'
                  data-fade={index + 1}
                >
                  {collection.category}
                </h1>
                <CollectionCard collection={collection} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
