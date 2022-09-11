export default function Footer() {
  return (
    <footer className='mt-16 text-right text-[#b3b3b3] dark:text-gray-200'>
      <section className='flex flex-col'>
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
            © Chocolate
          </a>
        </div>
        <a href='https://beian.miit.gov.cn/' rel='noreferrer' target='_blank'>
          湘ICP备20002952号
        </a>
      </section>
    </footer>
  );
}
