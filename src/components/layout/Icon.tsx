import { BsGithub } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { SiBilibili } from 'react-icons/si';

const Logo = () => {
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
      <FiSun />
    </div>
  );
};

export default Logo;
