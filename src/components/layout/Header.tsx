import { useRecoilValue } from 'recoil';

import clsxm from '@/lib/clsxm';

import HeaderNav from '@/components/layout/hader-nav';
import HeaderButton from '@/components/layout/header-button';

import { isNavHoverAtom } from '@/store';

export default function Header() {
  const isNavHover = useRecoilValue(isNavHoverAtom);

  return (
    <header
      className={clsxm(
        'fixed top-0 z-50 w-full bg-transparent',
        isNavHover &&
          'solid border-b border-black border-opacity-[0.12] bg-white'
      )}
    >
      <div className='layout flex h-[60px] items-center justify-between leading-[60px]'>
        <HeaderNav />
        <HeaderButton />
      </div>
    </header>
  );
}
