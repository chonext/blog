import clsx from 'clsx';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import TechIcons, { TechListType } from '@/components/TechIcons';

import { CollectionsType } from '@/types/frontmatters';

type CollectionCardProps = {
  collection: CollectionsType;
} & React.ComponentPropsWithoutRef<'li'>;

export default function CollectionCard({
  collection,
  className,
}: CollectionCardProps) {
  return (
    <ul className='mt-6 grid grid-cols-4 gap-4'>
      {collection.child.map((collectionItem) => (
        <li
          key={collectionItem.title}
          className={clsx(
            'collection-card md:w-full rounded-md',
            'border dark:border-gray-600',
            'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
            'transition duration-100',
            'motion-reduce:hover:scale-100',
            'animate-shadow',
            className
          )}
        >
          <UnstyledLink
            href={collectionItem.link}
            className='flex h-full flex-col items-start rounded-md p-4 focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
          >
            <h4>{collectionItem.title}</h4>
            <p className='mb-auto text-sm text-gray-700 dark:text-gray-300'>
              {collectionItem.description}
            </p>
            <div className='mt-2'>
              <TechIcons
                techs={collectionItem.techs.split(',') as Array<TechListType>}
              />
            </div>

            <p className='animated-underline mt-2 inline-block font-medium'>
              See On My Github →
            </p>
          </UnstyledLink>
        </li>
      ))}
    </ul>
  );
}
