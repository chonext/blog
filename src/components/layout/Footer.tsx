import * as React from 'react';
import { FiMail } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import { SiBilibili, SiGithub, SiTwitter } from 'react-icons/si';

import { trackEvent } from '@/lib/analytics';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';

import Accent from '@/components/Accent';
import Spotify from '@/components/layout/Spotify';
import UnstyledLink from '@/components/links/UnstyledLink';
import Tooltip from '@/components/Tooltip';

import { feedbackFlag, spotifyFlag } from '@/constants/env';

export default function Footer() {
  return (
    <footer className='mt-4 pb-2'>
      <main className='layout flex flex-col items-center border-t pt-6 dark:border-gray-600'>
        <FooterLinks />

        {spotifyFlag && <Spotify className='mt-8' />}

        <p className='mt-12 font-medium text-gray-600 dark:text-gray-300'>
          Reach me out
        </p>
        <SocialLinks />

        <p className='mt-8 text-sm text-gray-600 dark:text-gray-300'>
          © Choi Yang 2022 - {new Date().getFullYear()}
          {feedbackFlag && <>{' • '}</>}
        </p>
      </main>
    </footer>
  );
}

function FooterLinks() {
  return (
    <div className='flex flex-wrap justify-center gap-x-8 gap-y-4'>
      {footerLinks.map(({ href, text, tooltip }) => (
        <Tooltip interactive={false} key={href} tipChildren={tooltip}>
          <UnstyledLink
            className='animated-underline rounded-sm text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primary-300 dark:text-gray-200'
            href={href}
            onClick={() => {
              trackEvent(`Footer Link: ${text}`, { type: 'link' });
            }}
          >
            {text}
          </UnstyledLink>
        </Tooltip>
      ))}
    </div>
  );
}

function SocialLinks() {
  const [copyStatus, setCopyStatus] = React.useState<'idle' | 'copied'>('idle');

  const [copy] = useCopyToClipboard();

  return (
    <div className='mt-2 flex space-x-4'>
      <div className='flex items-center justify-center'>
        <Tooltip
          trigger='mouseenter'
          hideOnClick={false}
          interactive
          html={
            <div className='inline-block rounded-md border bg-white p-2 text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200'>
              {copyStatus === 'idle'
                ? 'Click the mail logo to copy'
                : 'Copied to clipboard 🥳'}
              <Accent className='inline-block font-medium'>
                ycychocolate@163.com
              </Accent>
            </div>
          }
        >
          <button
            onClick={() => {
              copy('ycychocolate@163.com').then(() => {
                setCopyStatus('copied');
                setTimeout(() => setCopyStatus('idle'), 1500);
              });
            }}
            className='rounded-sm align-middle focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
          >
            <FiMail className='h-7 w-7 align-middle text-gray-600 hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300' />
          </button>
        </Tooltip>
      </div>
      {socials.map((social) => (
        <Tooltip
          interactive={false}
          key={social.href}
          tipChildren={social.text}
        >
          <UnstyledLink
            className='inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
            href={social.href}
            onClick={() => {
              trackEvent(`Footer Link: ${social.id}`, { type: 'link' });
            }}
          >
            <social.icon className='my-auto h-6 w-6 align-middle text-gray-600 transition-colors hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300' />
          </UnstyledLink>
        </Tooltip>
      ))}
    </div>
  );
}

const footerLinks: { href: string; text: string; tooltip: React.ReactNode }[] =
  [
    {
      href: 'https://github.com/chonext/blog',
      text: 'Source Code',
      tooltip: (
        <>
          This website is <strong>open source</strong>!
        </>
      ),
    },
    {
      href: 'https://chodocs.cn/',
      text: 'Docs',
      tooltip: 'Front-end learning document collection',
    },
    {
      href: 'https://choiyang.notion.site/33b734c859a641f58f522dc844267785?v=0533bc2f8fa343eaa1f61d55fbf02862',
      text: 'Book Notes',
      tooltip: 'Note collection of books that I read',
    },
    {
      href: 'https://analytics.umami.is/share/gmqt0gLnaqPGkpoF/yangchaoyi.vip',
      text: 'Analytics',
      tooltip: 'yangchaoyi.vip views and visitors analytics',
    },
    // {
    //   href: '/statistics',
    //   text: 'Statistics',
    //   tooltip: 'Blog, Projects, and Library Statistics',
    // },
    {
      href: '/guestbook',
      text: 'Guestbook',
      tooltip:
        'Leave whatever you like to say—message, appreciation, suggestions',
    },
    {
      href: '/subscribe',
      text: 'Subscribe',
      tooltip: 'Get an email whenever I post, no spam',
    },
    {
      href: 'https://yangchaoyi.vip/rss.xml',
      text: 'RSS',
      tooltip: 'Add yangchaoyi.vip blog to your feeds',
    },
  ];

type Social = {
  href: string;
  icon: IconType;
  id: string;
  text: React.ReactNode;
};
const socials: Social[] = [
  {
    href: 'https://github.com/Chocolate1999',
    icon: SiGithub,
    id: 'Github',
    text: (
      <>
        See my projects on <Accent className='font-medium'>Github</Accent>
      </>
    ),
  },
  {
    href: 'https://space.bilibili.com/351534170',
    icon: SiBilibili,
    id: 'Bilibili',
    text: (
      <>
        Find me on <Accent className='font-medium'>Bilibili</Accent>
      </>
    ),
  },
  {
    href: 'https://twitter.com/ycyChocolate',
    icon: SiTwitter,
    id: 'Twitter',
    text: (
      <>
        I post updates, tips, insight, and sometimes do some talk. Follow me on{' '}
        <Accent className='font-medium'>Twitter</Accent>!
      </>
    ),
  },
];
