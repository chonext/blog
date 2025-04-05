import { BsGithub } from 'react-icons/bs';
import { SiBilibili } from 'react-icons/si';

import ThemeButton from '@/components/buttons/ThemeButton';
import UnstyledLink from '@/components/links/UnstyledLink';

const Icon = () => {
  return (
    <div className='flex items-center space-x-3 md:space-x-4 text-base md:text-lg'>
      <UnstyledLink
        href='https://github.com/Chocolate1999'
        rel='noreferrer'
        target='_blank'
      >
        <BsGithub />
      </UnstyledLink>
      <UnstyledLink
        href='https://space.bilibili.com/351534170'
        rel='noreferrer'
        target='_blank'
      >
        <SiBilibili />
      </UnstyledLink>
      <ThemeButton />
    </div>
  );
};

export default Icon;
