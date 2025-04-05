import clsx from 'clsx';

import useLoaded from '@/hooks/useLoaded';

import Comment from '@/components/content/Comment';
import ContentPlaceholder from '@/components/content/ContentPlaceholder';
import LinkCard from '@/components/content/links/LinkCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { ILinkProps, LINKS_ATOM } from '@/constants/links';

export default function ProjectsPage() {
  const isLoaded = useLoaded();

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
              <p
                className='my-2 text-gray-600 dark:text-gray-300'
                data-fade='1'
              >
                Thoughts, mental models, and tutorials about front-end
                development.
              </p>
            </div>
            <hr />
            <p className='opacity-50 py-8' data-fade='2'>
              过去（大概 20-21
              年）的时候，添加了许多友链，最近迁移到此站点。目前旧的 hexo
              博客已不再使用，在做迁移的时候快速看了一下过去的友链，原来的一些伙伴们许多网站都打不开了，或者也很久没有更新了，因此迁移的时候没有添加各位了，如若您还留有我的友链，也欢迎来本页提交，我会重新添加进来。
            </p>
            <ul
              className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4'
              data-fade='3'
            >
              {LINKS_ATOM.length > 0 ? (
                LINKS_ATOM.map((info: ILinkProps, index) => (
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
          <div className='text-gray-600 dark:text-gray-300' data-fade='4'>
            <p className='pb-2'>以下是我的博客信息，欢迎添加友链：</p>
            <p>博客名称：超逸の博客</p>
            <p>网站地址：https://yangchaoyi.vip/</p>
            <p>描述： 学如逆水行舟，不进则退</p>
            <p>头像：https://www.github.com/Chocolate1999.png</p>
          </div>
          <figure className='mt-12'>
            <Comment />
          </figure>
        </section>
      </main>
    </Layout>
  );
}
