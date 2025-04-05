export type NavType = {
  name: string;
  link: string;
};

export const NAV_ATOM = [
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
] as NavType[];
