import clsx from 'clsx';
import { format } from 'date-fns';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import * as React from 'react';
import { HiOutlineClock, HiOutlineEye } from 'react-icons/hi';
import { MdHistory } from 'react-icons/md';

import { trackEvent } from '@/lib/analytics';
import { cleanBlogPrefix } from '@/lib/helper';
import { getFileBySlug, getFiles, getRecommendations } from '@/lib/mdx';
import useContentMeta from '@/hooks/useContentMeta';
import useInjectContentMeta from '@/hooks/useInjectContentMeta';
import useScrollSpy from '@/hooks/useScrollspy';

import BlogCard from '@/components/content/blog/BlogCard';
import Comment from '@/components/content/Comment';
import MDXComponents from '@/components/content/MDXComponents';
import ReloadDevtool from '@/components/content/ReloadDevtool';
import TableOfContents, {
  HeadingScrollSpy,
} from '@/components/content/TableOfContents';
import Layout from '@/components/layout/Layout';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import Tooltip from '@/components/Tooltip';

import { BlogFrontmatter, BlogType } from '@/types/frontmatters';

type SingleBlogPageProps = {
  recommendations: BlogFrontmatter[];
} & BlogType;

export default function SingleBlogPage({
  code,
  frontmatter,
  recommendations,
}: SingleBlogPageProps) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  const populatedRecommendations = useInjectContentMeta(
    'blog',
    recommendations
  );

  //#region  //*=========== Link Constants ===========
  const COMMIT_HISTORY_LINK = `https://github.com/Chocolate1999/nextjs-tailwind-blog/commits/main/src/contents/blog/${frontmatter.slug}.mdx`;
  const GITHUB_EDIT_LINK = `https://github.com/Chocolate1999/nextjs-tailwind-blog/blob/main/src/contents/blog/${frontmatter.slug}.mdx`;
  const OG_BANNER_LINK = `https://res.cloudinary.com/chocolate1999/image/upload/f_auto,c_fill,ar_4:5,w_1200/chocolate1999/banner/${frontmatter.banner}`;
  //#endregion  //*======== Link Constants ===========

  //#region  //*=========== Blog Language ===========
  const cleanSlug = cleanBlogPrefix(frontmatter.slug);
  //#endregion  //*======== Blog Language ===========

  //#region  //*=========== Content Meta ===========
  const contentSlug = `b_${cleanSlug}`;
  const meta = useContentMeta(contentSlug, { runIncrement: true });
  //#endregion  //*======== Content Meta ===========

  //#region  //*=========== Scrollspy ===========
  const activeSection = useScrollSpy();

  const [toc, setToc] = React.useState<HeadingScrollSpy>();
  const minLevel =
    toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  React.useEffect(() => {
    const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');
    const headingArr: HeadingScrollSpy = [];
    headings.forEach((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace('H', '');
      const text = heading.textContent + '';

      headingArr.push({ id, level, text });
    });

    setToc(headingArr);
  }, [frontmatter.slug]);
  //#endregion  //*======== Scrollspy ===========

  return (
    <Layout>
      <Seo
        templateTitle={frontmatter.title}
        description={frontmatter.description}
        isBlog
        banner={OG_BANNER_LINK}
        date={new Date(
          frontmatter.lastUpdated ?? frontmatter.publishedAt
        ).toISOString()}
      />

      <main>
        <ReloadDevtool />
        <section className=''>
          <div className='layout  pt-8'>
            <section className='grid grid-cols-[auto,334px] gap-8  mid:grid-cols-none'>
              <article className='mdx prose dark:prose-invert mx-auto mt-4 w-full rounded-[8px] border border-white bg-white px-8 py-6 shadow transition-colors dark:border-gray-600 dark:bg-[#121212] mb:px-4 mb:pt-0'>
                <span className='mt-0 block  border-b-[1px] border-solid border-b-[#eee] pb-[0.2em] text-3xl font-normal leading-normal text-[#1f2d3d] dark:border-b-gray-600	dark:text-[#fff]	dark:opacity-90'>
                  {frontmatter.title}
                </span>
                <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>
                  Written on{' '}
                  {format(new Date(frontmatter.publishedAt), 'MMMM dd, yyyy')}
                </p>
                {frontmatter.lastUpdated && (
                  <div className='mt-2 flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-200'>
                    <span>
                      Last updated{' '}
                      {format(
                        new Date(frontmatter.lastUpdated),
                        'MMMM dd, yyyy'
                      )}
                      .
                    </span>
                    <UnstyledLink
                      href={COMMIT_HISTORY_LINK}
                      className={clsx(
                        'inline-flex items-center gap-1 rounded-sm font-medium',
                        'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-primary-300',
                        'focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
                      )}
                    >
                      <MdHistory className='text-lg' />
                      <span>See changes</span>
                    </UnstyledLink>
                  </div>
                )}
                <div className='my-2 flex items-center justify-start gap-2 text-sm font-medium text-gray-600 dark:text-gray-300'>
                  <div className='flex items-center gap-1'>
                    <HiOutlineClock className='inline-block text-base' />
                    {frontmatter.readingTime.text}
                  </div>
                  {meta?.devtoViews ? (
                    <Tooltip
                      content={
                        <>
                          {meta.devtoViews.toLocaleString()} views on{' '}
                          <CustomLink href='https://dev.to/theodorusclarence'>
                            dev.to
                          </CustomLink>
                        </>
                      }
                      position='bottom'
                    >
                      <div className='flex items-center gap-1'>
                        <HiOutlineEye className='inline-block text-base' />
                        {meta?.views?.toLocaleString() ?? '-'} views
                      </div>
                    </Tooltip>
                  ) : (
                    <div className='flex items-center gap-1'>
                      <HiOutlineEye className='inline-block text-base' />
                      {meta?.views?.toLocaleString() ?? '-'} views
                    </div>
                  )}
                </div>
                <Component
                  components={
                    {
                      ...MDXComponents,
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } as any
                  }
                />
              </article>

              <aside className='py-4 mid:hidden'>
                <div className='sticky top-[84px] rounded-[8px] bg-white px-4 py-5 shadow dark:bg-[#121212]'>
                  <TableOfContents
                    toc={toc}
                    minLevel={minLevel}
                    activeSection={decodeURI(activeSection as string)}
                  />
                  {/* <div className='flex items-center justify-center py-8'>
                    <LikeButton slug={contentSlug} />
                  </div> */}
                </div>
              </aside>
            </section>

            <figure className='mt-12 rounded-[8px] bg-white p-6 shadow dark:bg-[#121212]'>
              <Comment key={frontmatter.slug} />
            </figure>

            {populatedRecommendations.length > 0 && (
              <div className='mt-20 dark:text-gray-200'>
                <h2>Other posts that you might like</h2>
                <ul className='mt-4 grid grid-cols-1 gap-4'>
                  {populatedRecommendations.map((post, i) => (
                    <BlogCard
                      onClick={() => {
                        trackEvent(post.slug, 'recommend');
                      }}
                      className={clsx({ block: i === 2 })}
                      key={post.slug}
                      post={post}
                    />
                  ))}
                </ul>
              </div>
            )}

            <div className='mt-8 flex flex-row-reverse items-start justify-between gap-4'>
              <CustomLink href={GITHUB_EDIT_LINK}>
                Edit this on GitHub
              </CustomLink>
              <CustomLink href='/blog'>← Back to blog</CustomLink>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post = await getFileBySlug('blog', params?.slug as string);

  const recommendations = await getRecommendations(params?.slug as string);

  return {
    props: { ...post, recommendations },
  };
};
