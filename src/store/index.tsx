import { atom } from 'recoil';

// header/nav 是否 hover
export const isNavHoverAtom = atom({
  key: 'isNavHoverAtom',
  default: false,
});

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
      name: 'Projects',
      link: '/projects',
    },
    {
      name: 'Collection',
      link: '/collection',
    },
    {
      name: 'Talks',
      link: '/talks',
    },
    {
      name: 'Links',
      link: '/links',
    },
  ],
});
