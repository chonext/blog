import { atom } from 'recoil';

export const navAtom = atom({
  key: 'NAV_ATOM',
  default: [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Blog',
      link: '/blog',
    },
    {
      name: 'Archives',
      link: '/archives',
    },
    {
      name: 'Projects',
      link: '/projects',
    },
    {
      name: 'Links',
      link: '/links',
    },
  ],
});
