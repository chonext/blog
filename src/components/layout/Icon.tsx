import { BsGithub } from 'react-icons/bs';
import { FaRegLightbulb } from 'react-icons/fa';
import { MdOutlineArticle } from 'react-icons/md';
import { SiBilibili } from 'react-icons/si';

import ThemeButton from '@/components/buttons/ThemeButton';
import UnstyledLink from '@/components/links/UnstyledLink';

const Icon = () => {
  return (
    <div className='flex cursor-pointer gap-[24px] text-[22px]'>
      <UnstyledLink href='/blog' className='hidden mb:inline'>
        <MdOutlineArticle />
      </UnstyledLink>
      <UnstyledLink href='/projects' className='hidden mb:inline'>
        <FaRegLightbulb />
      </UnstyledLink>
      <a
        href='https://github.com/Chocolate1999'
        rel='noreferrer'
        target='_blank'
      >
        <BsGithub />
      </a>
      <a
        href='https://space.bilibili.com/351534170'
        rel='noreferrer'
        target='_blank'
      >
        <SiBilibili />
      </a>
      <ThemeButton />
    </div>
  );
};

export default Icon;
