export default function Footer() {
  return (
    <footer className='relative bottom-2 flex w-full justify-center text-gray-700 dark:text-gray-200'>
      © {new Date().getFullYear()} By{'  '}
      <a
        href='https://github.com/Chocolate1999'
        target='_blank'
        className='pl-1'
        rel='noreferrer'
      >
        Chocolate
      </a>
    </footer>
  );
}
