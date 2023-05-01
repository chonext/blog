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
          <div className='md:mt-[120px]  text-left tablet:mt-[80px] mt-[40px]'>
            <article className=''>
              <div className='mx-8 flex flex-col items-start mb:mx-0'>
                <p
                  className='mb-8 md:text-4xl text-[#555] dark:text-[#bbb] text-3xl'
                  data-fade='1'
                >
                  一百个Chocolate
                </p>
                <p
                  className={clsxm(
                    'text-lg text-[#555] dark:text-[#bbb]',
                    'lg:text-xl'
                  )}
                  data-fade='1'
                >
                  Hey, I am Chocolate, the 21st front-end development, currently
                  moving bricks in a large factory.
                </p>
                <p
                  className={clsxm(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    'lg:text-xl text-left text-lg'
                  )}
                  data-fade='3'
                >
                  JS, TS, LeetCode, Vue, React, algorithm lovers.
                </p>
                <hr
                  className='mx-auto md:my-[2em] h-0 w-[50px] border-t-[1px] border-[#7d7d7d4d] my-[1em]'
                  data-fade='4'
                />
                <p
                  className={clsxm(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    'lg:text-xl text-left text-lg'
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
                    'lg:text-xl text-left text-lg'
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
                    'lg:text-xl text-left text-lg'
                  )}
                  data-fade='3'
                >
                  The dream is to become a person with a certain influence,
                  sweat with blood, and create the future with positivity!
                </p>
                <hr
                  className='mx-auto md:my-[2em] h-0 w-[50px] border-t-[1px] border-[#7d7d7d4d] my-[1em]'
                  data-fade='4'
                />
                <p
                  className={clsxm(
                    ' mt-2 text-[#555] dark:text-[#bbb]',
                    'lg:text-xl text-left text-lg'
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
                    'lg:text-xl text-left text-lg'
                  )}
                  data-fade='4'
                >
                  Motto: Learning is like sailing against the current, if you
                  don't advance, you will retreat!
                </p>

                <div data-fade='5' className='mt-4 flex'>
                  <CustomLink href='/blog'>To Blog</CustomLink>
                  <CustomLink href='/projects' className='ml-6'>
                    To Projects
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
