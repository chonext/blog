import styles from './style.module.scss';

import clsxm from '@/lib/clsxm';

const HeaderButton = () => {
  return (
    <div className='flex flex-row items-center justify-end'>
      <div
        className={clsxm(
          'cursor-pointe inline-block cursor-pointer',
          styles.startButton
        )}
      >
        Started
      </div>
    </div>
  );
};

export default HeaderButton;
