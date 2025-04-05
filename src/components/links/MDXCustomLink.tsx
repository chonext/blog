import clsxm from '@/lib/clsxm';

import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

export default function MDXCustomLink({
  children,
  className = '',
  ...rest
}: UnstyledLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsxm(
        'animated-underline custom-link inline-flex items-center font-medium text-sky-600',
        'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
        'border-b border-dotted border-dark hover:border-black/0',
        className
      )}
    >
      <span className='dark:bg-sky-300 dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent'>
        {children}
      </span>
    </UnstyledLink>
  );
}
