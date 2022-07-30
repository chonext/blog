import * as React from 'react';
import { RecoilRoot } from 'recoil';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <RecoilRoot>
      <Header />
      {children}
      <Footer />
    </RecoilRoot>
  );
}
