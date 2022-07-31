import { useRecoilValue } from 'recoil';

import UnstyledLink from '@/components/links/UnstyledLink';

import { navAtom } from '@/store';

const HeaderNav = () => {
  const navVal = useRecoilValue(navAtom);

  return (
    <div className='flex h-full w-auto flex-row items-center justify-center'>
      {navVal.map((item) => {
        return (
          <div className='pr-[32px]' key={item.name}>
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
