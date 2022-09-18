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

  const getYear = (a: Date | string | number) => new Date(a).getFullYear();

  const isSameYear = (a: Date | string | number, b: Date | string | number) =>
    a && b && getYear(a) === getYear(b);

  return (
    <Layout>
      <Seo
        templateTitle='Blog'
        description='Thoughts, mental models, and tutorials about front-end development. Rebuild your mental model so front-end development can be predictable.'
      />
      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout'>
            <ul className='mx-8 mt-12 grid gap-4 mb:mx-0' data-fade='1'>
              {posts.length > 0 ? (
                posts.map((post, index) => (
                  <div key={post.slug}>
                    {!isSameYear(
                      post.publishedAt,
                      posts[index - 1]?.publishedAt
                    ) && (
                      <span className='inline-block pb-2 text-[24px] text-[#aaa]'>
                        {getYear(post.publishedAt)}
                      </span>
                    )}
                    <BlogCard post={post} key={post.slug} />
                  </div>
                ))
              ) : (
                <ContentPlaceholder key='error_boundary' />
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
