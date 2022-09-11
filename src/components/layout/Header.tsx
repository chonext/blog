import { useScroll } from 'ahooks';
import { useMemo } from 'react';

import clsxm from '@/lib/clsxm';

import HeaderNav from '@/components/layout/HeaderNav';
import Icon from '@/components/layout/Icon';

export default function Header() {
  const docScroll = useScroll();

  const isDocHover = useMemo(() => {
    if (docScroll) return !!docScroll.top;
  }, [docScroll]);

  return (
    <header
      className={clsxm(
        'sticky top-0 z-50 w-full bg-transparent',
        isDocHover &&
          'solid border-b border-black border-opacity-[0.12] bg-white bg-opacity-[98] backdrop-blur-[40px]',
        'dark:border-b  dark:border-black dark:bg-[#060807]'
      )}
    >
      <section className='layout'>
        <div className='mx-8 flex h-[60px] items-center justify-between leading-[60px]'>
          <HeaderNav />
          <Icon />
        </div>
      </section>
    </header>
  );
}
