import { BsGithub } from 'react-icons/bs';
import { SiBilibili } from 'react-icons/si';

import ThemeButton from '@/components/buttons/ThemeButton';

const Icon = () => {
  return (
    <div className='flex cursor-pointer gap-[24px] text-[22px]'>
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
