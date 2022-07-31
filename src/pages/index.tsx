import * as React from 'react';
import { SiGithub, SiWechat } from 'react-icons/si';

import { trackEvent } from '@/lib/analytics';
import clsxm from '@/lib/clsxm';
import useLoaded from '@/hooks/useLoaded';

import Layout from '@/components/layout/Layout';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import Tooltip from '@/components/Tooltip';

export default function HomePage() {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo />
      <main>
        <section className={clsxm('min-h-screen', isLoaded && 'fade-in-start')}>
          <div className='flex min-h-screen flex-col justify-center text-center'>
            <article className=' layout flex flex-col items-start'>
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
              <div className='flex'>
                <Tooltip content={<p>Chocolate1999</p>}>
                  <div
                    data-fade='6'
                    className='mt-8 flex flex-wrap gap-4 gap-y-2'
                  >
                    <UnstyledLink
                      href='https://github.com/Chocolate1999'
                      className={clsxm(
                        'inline-flex items-center gap-1 text-base font-medium',
                        'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                        'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                        'transition-colors'
                      )}
                      onClick={() => {
                        trackEvent('Social Link: Github', 'link');
                      }}
                    >
                      <SiGithub className='shrink-0' />
                    </UnstyledLink>
                  </div>
                </Tooltip>
                <Tooltip content={<p>小狮子前端</p>}>
                  <div
                    data-fade='6'
                    className='mt-8 ml-4 flex flex-wrap gap-4 gap-y-2'
                  >
                    <UnstyledLink
                      href='https://github.com/Chocolate1999'
                      className={clsxm(
                        'inline-flex items-center gap-1 text-base font-medium',
                        'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                        'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                        'transition-colors'
                      )}
                    >
                      <SiWechat className='shrink-0' />
                    </UnstyledLink>
                  </div>
                </Tooltip>
              </div>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
