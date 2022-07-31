import clsx from 'clsx';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';

import { getAllFilesFrontmatter } from '@/lib/mdx';
import { sortByDate } from '@/lib/mdx-client';
import useLoaded from '@/hooks/useLoaded';

import BlogCard from '@/components/content/blog/BlogCard';
import ContentPlaceholder from '@/components/content/ContentPlaceholder';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function IndexPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo
        templateTitle='Blog'
        description='Thoughts, mental models, and tutorials about front-end development. Rebuild your mental model so front-end development can be predictable.'
      />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start min-h-screen')}>
          <div className='layout mt-[60px] py-12 '>
            <h1 className='text-5xl dark:text-gray-100' data-fade='0'>
              Blog
            </h1>
            <p className='mt-2 text-gray-600 dark:text-gray-300' data-fade='1'>
              Thoughts, skill, and tutorials about front-end development.
            </p>
            <ul className=' mt-12 grid grid-cols-3 gap-4' data-fade='2'>
              {posts.length > 0 ? (
                posts.map((post) => <BlogCard key={post.slug} post={post} />)
              ) : (
                <ContentPlaceholder />
              )}
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = await getAllFilesFrontmatter('blog');
  const posts = sortByDate(files);

  return { props: { posts } };
}
