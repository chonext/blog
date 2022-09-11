import * as React from 'react';

import clsxm from '@/lib/clsxm';
import useLoaded from '@/hooks/useLoaded';

import Layout from '@/components/layout/Layout';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo />
      <main>
        <section className={clsxm(isLoaded && 'fade-in-start')}>
          <div className='mt-[120px] text-center'>
            <article className='layout '>
              <div className='flex flex-col items-start'>
                <h2 className='text-2x dark:text-gray-100' data-fade='1'>
                  Hi!
                </h2>
                <h1 className=' mt-1 text-3xl dark:text-gray-100' data-fade='2'>
                  You can call me Chocolate
                </h1>
                <p
                  className={clsxm(
                    ' mt-6 max-w-2xl text-gray-700 dark:text-gray-300',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='3'
                >
                  JS, TS, LeetCode, Vue, React, algorithm lovers.The 21st
                  front-end development, currently moving bricks in a large
                  factory.
                </p>
                <p
                  className={clsxm(
                    ' mt-2 max-w-2xl text-gray-700 dark:text-gray-300',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='4'
                >
                  Motto: Learning is like sailing against the current, if you
                  don't advance, you will retreat!
                </p>
                <div data-fade='5' className='mt-4 flex'>
                  <CustomLink href='/blog'>To Blog</CustomLink>
                  <CustomLink href='/about' className='ml-6'>
                    Learn more about me
                  </CustomLink>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
