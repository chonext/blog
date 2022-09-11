import { BsGithub } from 'react-icons/bs';
import { SiBilibili, SiNextdotjs, SiVite } from 'react-icons/si';
import { atom } from 'recoil';

export const projectsAtom = atom({
  key: 'PROJECTS_ATOM',
  default: [
    {
      category: 'Next Ecosystem',
      child: [
        {
          title: 'nextjs-tailwind-blog',
          description:
            'The most beautiful blog in modern times, using Next.js, TypeScript, Tailwind CSS, Welcome to visit',
          link: 'https://github.com/Chocolate1999/nextjs-tailwind-blog',
          icon: <BsGithub />,
        },
        {
          title: 'nextjs-tailwind-blog',
          description:
            'The most beautiful blog in modern times, using Next.js, TypeScript, Tailwind CSS, Welcome to visit',
          link: 'https://github.com/Chocolate1999/nextjs-tailwind-blog',
          icon: <SiBilibili />,
        },
        {
          title: 'nextjs-tailwind-blog',
          description:
            'The most beautiful blog in modern times, using Next.js, TypeScript, Tailwind CSS, Welcome to visit',
          link: 'https://github.com/Chocolate1999/nextjs-tailwind-blog',
          icon: <SiVite />,
        },
        {
          title: 'nextjs-tailwind-blog',
          description:
            'The most beautiful blog in modern times, using Next.js, TypeScript, Tailwind CSS, Welcome to visit',
          link: 'https://github.com/Chocolate1999/nextjs-tailwind-blog',
          icon: <SiNextdotjs />,
        },
        {
          title: 'nextjs-tailwind-blog',
          description:
            'The most beautiful blog in modern times, using Next.js, TypeScript, Tailwind CSS, Welcome to visit',
          link: 'https://github.com/Chocolate1999/nextjs-tailwind-blog',
          icon: <SiNextdotjs />,
        },
        {
          title: 'nextjs-tailwind-blog',
          description:
            'The most beautiful blog in modern times, using Next.js, TypeScript, Tailwind CSS, Welcome to visit',
          link: 'https://github.com/Chocolate1999/nextjs-tailwind-blog',
          icon: <SiNextdotjs />,
        },
      ],
    },
  ],
});
