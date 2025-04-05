import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { useWindowScroll } from 'react-use';

import clsxm from '@/lib/clsxm';

import Icon from '@/components/layout/Icon';
import UnstyledLink from '@/components/links/UnstyledLink';

import { NAV_ATOM, NavType } from '@/constants/nav';

export default function Header() {
  const docScroll = useWindowScroll();

  const isDocHover = useMemo(() => {
    if (docScroll) return !!docScroll.y;
  }, [docScroll]);

  const router = useRouter();
  const arrOfRoute = router.route.split('/');
  const baseRoute = '/' + arrOfRoute[1];

  return (
    <header
      className={clsxm(
        'sticky top-0 z-50 w-full bg-transparent transition',
        'dark:border-b  dark:border-black',
        isDocHover &&
          'solid border-b border-black border-opacity-[0.12] bg-opacity-[98] backdrop-blur-md dark:bg-neutral-800'
      )}
    >
      <section className='layout'>
        <div className='mx-4 lg:mx-8  flex transition-colors justify-between'>
          <nav
            className={clsx('w=full flex justify-between items-center py-4')}
          >
            <ul className='flex justify-between items-center space-x-3 text-xs md:space-x-4 md:text-base '>
              {NAV_ATOM.map((item: NavType) => (
                <p key={item.name}>
                  <UnstyledLink href={item.link}>
                    <span
                      className={clsx(
                        'rounded-sm py-2 transition-colors',
                        'font-medium text-black dark:text-white',
                        'group dark:hover:text-sky-300',
                        'focus:outline-none focus-visible:ring focus-visible:ring-sky-300'
                      )}
                    >
                      <span
                        className={clsx(
                          'transition-colors',
                          'bg-sky-300/0 group-hover:bg-sky-300/20 dark:group-hover:bg-sky-300/0',
                          item.link === baseRoute &&
                            '!bg-sky-300/50 dark:bg-gradient-to-tr dark:from-sky-300 dark:to-sky-400 dark:bg-clip-text dark:text-transparent'
                        )}
                      >
                        {item.name}
                      </span>
                    </span>
                  </UnstyledLink>
                </p>
              ))}
            </ul>
          </nav>
          <Icon />
        </div>
      </section>
    </header>
  );
}
