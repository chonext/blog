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
          <div className='mt-[120px]  text-left'>
            <article className=''>
              <div className='mx-8 flex flex-col items-start'>
                <p
                  className='mb-8 text-4xl text-[#555] dark:text-[#bbb]'
                  data-fade='1'
                >
                  一百个Chocolate
                </p>
                <p
                  className='text-lg text-[#555] dark:text-[#bbb]'
                  data-fade='1'
                >
                  Hey, I am Chocolate, the 21st front-end development, currently
                  moving bricks in a large factory.
                </p>
                <p
                  className={clsxm(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='3'
                >
                  JS, TS, LeetCode, Vue, React, algorithm lovers.
                </p>
                <hr
                  className='mx-auto my-[2em] h-0 w-[50px] border-t-[1px] border-[#7d7d7d4d]'
                  data-fade='4'
                />
                <p
                  className={clsxm(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='3'
                >
                  After experiencing high school life, I understand that
                  "fortunately, the cold window has been bitter for several
                  years, and since then there are many warm springs"
                </p>
                <p
                  className={clsxm(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='3'
                >
                  And through college life, I understand that "learning is like
                  sailing against the current, if you don't advance, you will
                  retreat".
                </p>
                <p
                  className={clsxm(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='3'
                >
                  The dream is to become a person with a certain influence,
                  sweat with blood, and create the future with positivity!
                </p>
                <hr
                  className='mx-auto my-[2em] h-0 w-[50px] border-t-[1px] border-[#7d7d7d4d]'
                  data-fade='4'
                />
                <p
                  className={clsxm(
                    ' mt-2 text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='4'
                >
                  Find me on{' '}
                  <CustomLink href='https://github.com/Chocolate1999'>
                    Github
                  </CustomLink>{' '}
                  and{' '}
                  <CustomLink href='https://space.bilibili.com/351534170'>
                    哔哩哔哩
                  </CustomLink>
                  .
                </p>

                <p
                  className={clsxm(
                    ' mt-2 text-[#555] dark:text-[#bbb]',
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
