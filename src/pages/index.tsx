import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <section className='bg-[#fff1f1]'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='mt-4'>
              Next.js + Tailwind CSS + TypeScript Starter For Chocolate
            </h1>
            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By <a href='/'>Chocolate</a>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
