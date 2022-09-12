import { useMemo } from 'react';
import { VscHome } from 'react-icons/vsc';
import { useWindowScroll } from 'react-use';

import clsxm from '@/lib/clsxm';

import HeaderNav from '@/components/layout/HeaderNav';
import Icon from '@/components/layout/Icon';
import UnstyledLink from '@/components/links/UnstyledLink';

export default function Header() {
  const docScroll = useWindowScroll();

  const isDocHover = useMemo(() => {
    if (docScroll) return !!docScroll.y;
  }, [docScroll]);

  return (
    <header
      className={clsxm(
        'sticky top-0 z-50 w-full bg-transparent',
        isDocHover &&
          'solid border-b border-black border-opacity-[0.12] bg-white bg-opacity-[98] backdrop-blur-[40px]',
        'dark:border-b  dark:border-black dark:bg-[#215c8c]'
      )}
    >
      <section className='layout'>
        <div className='mx-8 flex h-[60px] items-center justify-between leading-[60px]'>
          <UnstyledLink href='/' className='hidden text-[22px] mb:inline'>
            <VscHome />
          </UnstyledLink>
          <HeaderNav />
          <Icon />
        </div>
      </section>
    </header>
  );
}
