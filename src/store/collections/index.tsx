import { atom } from 'recoil';

export const collectionsAtom = atom({
  key: 'COLLECTION_ATOM',
  default: [
    {
      category: 'Next Ecosystem',
      child: [
        {
          title: 'nextjs-tailwind-blog',
          description:
            'The most beautiful blog in modern times, using Next.js, TypeScript, Tailwind CSS, Welcome to visit',
          link: 'https://github.com/Chocolate1999/nextjs-tailwind-blog',
          techs: 'next,tailwindcss,typescript',
        },
      ],
    },
  ],
});
