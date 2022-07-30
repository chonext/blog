export default function Footer() {
  return (
    <footer className='absolute bottom-2 flex w-full justify-center text-gray-700'>
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
