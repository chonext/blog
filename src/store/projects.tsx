import { BiCarousel } from 'react-icons/bi';
import { CgCodeSlash, CgNotes, CgWebsite } from 'react-icons/cg';
import { GiSelect } from 'react-icons/gi';
import { GrTemplate } from 'react-icons/gr';
import {
  SiGreensock,
  SiHexo,
  SiLeetcode,
  SiMarkdown,
  SiNextdotjs,
  SiShopify,
} from 'react-icons/si';
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
        {
          title: 'nextjs-tailwindcss-starter',
          description: 'my template for nextjs and tailwindcss',
          link: 'https://github.com/Chocolate1999/nextjs-tailwindcss-starter',
          icon: <GrTemplate />,
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
        {
          title: 'docusaurus-docs',
          description:
            'Little lion front-end programming growth learning document with docusaurus',
          link: 'https://github.com/LionCubFrontEnd/docs',
          icon: <SiMarkdown />,
        },
        {
          title: 'data-growth-component',
          description: 'data-growth-component with react and gsap',
          link: 'https://github.com/Chocolate1999/data-growth-component',
          icon: <SiGreensock />,
        },
        {
          title: 'react-china-division',
          description: 'React + Ts 实现中国省市级联选择器',
          link: 'https://github.com/Chocolate1999/react-china-division',
          icon: <GiSelect />,
        },
      ],
    },
    {
      category: 'Vue Ecosystem',
      child: [
        {
          title: 'vue-shop',
          description:
            'Vue family bucket development e-commerce management system (Element-UI)',
          link: 'https://github.com/Chocolate1999/vue-shop',
          icon: <SiShopify />,
        },
        {
          title: 'imitation meituan website',
          description:
            'The latest Vue family bucket + SSR + Koa2 full stack development in 2020',
          link: 'https://github.com/Chocolate1999/Vue-family-bucket-SSR-Koa2-full-stack-development-from-Meituan',
          icon: <CgWebsite />,
        },
        {
          title: 'Vue-MVVM',
          description:
            'Analyze the principle of vue implementation and implement a simple version of mvvm',
          link: 'https://github.com/Chocolate1999/Vue-MVVM',
          icon: <CgCodeSlash />,
        },
      ],
    },
    {
      category: 'Hexo Ecosystem',
      child: [
        {
          title: 'hexo-blog-lionkk',
          description:
            'Magic modified from butterfly theme, providing complete and detailed documentation',
          link: 'https://github.com/Chocolate1999/hexo-blog-lionkk',
          icon: <SiHexo />,
        },
      ],
    },
    {
      category: 'Notes',
      child: [
        {
          title: 'front-end-learning-to-organize-notes',
          description:
            'front-end knowledge system, more efficient absorption of experience and results',
          link: 'https://github.com/Chocolate1999/Front-end-learning-to-organize-notes',
          icon: <CgNotes />,
        },
        {
          title: 'leetcode-javascript',
          description:
            'The JavaScript problem solving warehouse of LeetCode, the front-end brushing route (mind map)',
          link: 'https://github.com/Chocolate1999/leetcode-javascript',
          icon: <SiLeetcode />,
        },
      ],
    },
  ],
});
