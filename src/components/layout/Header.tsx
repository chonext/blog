import { useScroll } from 'ahooks';
import { useMemo } from 'react';

import clsxm from '@/lib/clsxm';

import HeaderNav from '@/components/layout/hader-nav';
import HeaderButton from '@/components/layout/header-button';

export default function Header() {
  const docScroll = useScroll();

  const isDocHover = useMemo(() => {
    if (docScroll) return !!docScroll.top;
  }, [docScroll]);

  return (
    <header
      className={clsxm(
        'fixed top-0 z-50 w-full bg-transparent',
        isDocHover &&
          'solid border-b border-black border-opacity-[0.12] bg-white bg-opacity-[98] backdrop-blur-[40px]'
      )}
    >
      <div className='layout flex h-[60px] items-center justify-between leading-[60px]'>
        <HeaderNav />
        <HeaderButton />
      </div>
    </header>
  );
}
