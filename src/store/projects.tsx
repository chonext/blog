import { BiCarousel } from 'react-icons/bi';
import { SiNextdotjs } from 'react-icons/si';
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
          icon: <SiNextdotjs />,
        },
      ],
    },
    {
      category: 'React Ecosystem',
      child: [
        {
          title: 'customer-carousel-case',
          description: 'a demo for customer carousel case use swiper and slick',
          link: 'https://github.com/Chocolate1999/customer-carousel-case',
          icon: <BiCarousel />,
        },
      ],
    },
  ],
});
