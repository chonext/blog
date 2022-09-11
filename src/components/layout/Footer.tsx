import UnderlineLink from '@/components/links/UnderlineLink';

export default function Footer() {
  return (
    <footer className='mt-16 text-right text-[#b3b3b3] dark:text-gray-200'>
      <section className='flex flex-col items-end'>
        <div>
          <a
            href='https://creativecommons.org/licenses/by-nc-sa/4.0/'
            rel='noreferrer'
            target='_blank'
          >
            CC BY-NC-SA 4.0
          </a>{' '}
          {new Date().getFullYear()}
          <a
            href='https://github.com/Chocolate1999'
            target='_blank'
            className='pl-1'
            rel='noreferrer'
          >
            © Yang Chao Yi
          </a>
        </div>
        <UnderlineLink href='https://beian.miit.gov.cn/'>
          湘ICP备20002952号
        </UnderlineLink>
      </section>
    </footer>
  );
}
