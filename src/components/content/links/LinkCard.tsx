import clsx from 'clsx';

import Tag from '@/components/content/Tag';
import CloudinaryImg from '@/components/images/CloudinaryImg';
import UnstyledLink from '@/components/links/UnstyledLink';

import { ILinkProps } from '@/constants/links';

const LinkCard: React.FC<ILinkProps> = ({
  name,
  desc,
  url,
  avatar,
  banner,
  tags,
}) => {
  return (
    <li
      className={clsx(
        'w-full rounded-md border border-gray-300 bg-white dark:border-gray-600 dark:bg-dark',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow'
      )}
    >
      <UnstyledLink
        className='block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
        href={url}
        openNewTab
      >
        <div className='relative'>
          {banner ? (
            <CloudinaryImg
              noStyle
              className='pointer-events-none overflow-hidden rounded-t-md'
              publicId={`links/${banner}`}
              alt='Photo taken from unsplash'
              width={1200}
              height={(1200 * 2) / 5}
              aspect={{ height: 2, width: 5 }}
              preview={false}
            />
          ) : (
            ''
          )}
          <div
            className={clsx(
              'absolute bottom-0 w-full px-4 py-2',
              'mt-2 flex flex-wrap justify-end gap-x-2 gap-y-1 text-sm text-black dark:text-gray-100'
            )}
          >
            {tags.split(',').map((tag) => (
              <Tag
                tabIndex={-1}
                className='bg-opacity-80 dark:!bg-opacity-60'
                key={tag}
              >
                {tag}
              </Tag>
            ))}
          </div>
        </div>
        <div className='p-4 flex items-center gap-4'>
          {avatar ? (
            <CloudinaryImg
              noStyle
              className='pointer-events-none overflow-hidden rounded-full h-12 w-12 ring-2 ring-neutral-300'
              publicId={`links/avatar/${avatar}`}
              alt='Photo taken from unsplash'
              width={1200}
              height={1200}
              aspect={{ height: 1, width: 1 }}
              preview={false}
            />
          ) : (
            ''
          )}
          <div className='flex flex-col max-w-[70%]'>
            <h4 className='text-gray-800 dark:text-gray-100'>{name}</h4>
            <p className='text-sm text-gray-700 dark:text-gray-300'>{desc}</p>
          </div>
        </div>
      </UnstyledLink>
    </li>
  );
};

export default LinkCard;
