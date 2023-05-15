import clsx from 'clsx';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';
import { SiBilibili, SiGithub, SiTwitter, SiYoutube } from 'react-icons/si';
import { InView } from 'react-intersection-observer';

import { trackEvent } from '@/lib/analytics';
import clsxm from '@/lib/clsxm';
import { getAllFilesFrontmatter, getFeatured } from '@/lib/mdx';
import { generateRss } from '@/lib/rss';
import useInjectContentMeta from '@/hooks/useInjectContentMeta';
import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import BlogCard from '@/components/content/blog/BlogCard';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';

export default function HomePage({
  featuredPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const populatedPosts = useInjectContentMeta('blog', featuredPosts);

  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo />
      <main>
        <section className={clsxm(isLoaded && 'fade-in-start')}>
          <div className='md:mt-[120px]  text-left mt-[40px]'>
            <article className=''>
              <div className='flex flex-col items-start'>
                <Accent
                  className='mb-8 md:text-4xl text-[#555] dark:text-[#bbb] text-3xl'
                  data-fade='1'
                >
                  超逸の博客
                </Accent>
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
                <div
                  className={clsxm(
                    'mt-2 text-[#555] dark:text-[#bbb]',
                    'lg:text-xl text-left text-lg'
                  )}
                  data-fade='4'
                >
                  Find me on
                  <div className='lg:my-4 my-2 gap-4 flex flex-wrap items-center'>
                    <CustomLink href='https://github.com/Chocolate1999'>
                      <div className='flex items-center gap-1'>
                        <SiGithub />
                        GitHub
                      </div>
                    </CustomLink>
                    <CustomLink href='https://www.youtube.com/@chocolate1999'>
                      <div className='flex items-center gap-1'>
                        <SiYoutube />
                        YouTube
                      </div>
                    </CustomLink>
                    <CustomLink href='https://space.bilibili.com/351534170'>
                      <div className='flex items-center gap-1'>
                        <SiBilibili />
                        Bilibili
                      </div>
                    </CustomLink>
                    <CustomLink href='https://twitter.com/ycyChocolate'>
                      <div className='flex items-center gap-1'>
                        <SiTwitter />
                        Twitter
                      </div>
                    </CustomLink>
                  </div>
                </div>

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
                  <CustomLink
                    href='/blog'
                    onClick={() =>
                      trackEvent('Home: Read blogs', { type: 'navigate' })
                    }
                  >
                    To Blog
                  </CustomLink>
                  <CustomLink
                    href='/projects'
                    className='ml-6'
                    onClick={() =>
                      trackEvent('Home: See more project', { type: 'navigate' })
                    }
                  >
                    To Projects
                  </CustomLink>
                </div>
              </div>
            </article>
          </div>
        </section>
        <InView triggerOnce rootMargin='-40% 0px'>
          {({ ref, inView }) => (
            <section
              ref={ref}
              className={clsx('py-20', inView && 'fade-in-start')}
            >
              <article className='layout' data-fade='0'>
                <h2 className='text-2xl md:text-4xl' id='blog'>
                  <Accent>Featured Posts</Accent>
                </h2>
                <ul className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
                  {populatedPosts.map((post, i) => (
                    <BlogCard
                      key={post.slug}
                      post={post}
                      className={clsx(i > 2 && 'hidden sm:block')}
                    />
                  ))}
                </ul>
                <ButtonLink
                  className='mt-4'
                  href='/blog'
                  onClick={() =>
                    trackEvent('Home: See more post', { type: 'navigate' })
                  }
                >
                  See more post
                </ButtonLink>
              </article>
            </section>
          )}
        </InView>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  generateRss();
  const blogs = await getAllFilesFrontmatter('blog');

  const featuredPosts = getFeatured(blogs, [
    '15-job-summary',
    '05-hundsun',
    'autumn-tips-list',
  ]);

  return {
    props: { featuredPosts },
  };
}
