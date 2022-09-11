import { useRecoilValue } from 'recoil';

import UnstyledLink from '@/components/links/UnstyledLink';

import { navAtom } from '@/store';

const HeaderNav = () => {
  const navVal = useRecoilValue(navAtom);

  return (
    <div className='flex h-full w-auto flex-row items-center justify-center gap-[24px] mb:hidden'>
      {navVal.map((item) => {
        return (
          <div key={item.name}>
            <UnstyledLink href={item.link}>
              <span className='hover:text-[#0066ff] dark:text-gray-100'>
                {item.name}
              </span>
            </UnstyledLink>
          </div>
        );
      })}
    </div>
  );
};
export default HeaderNav;
