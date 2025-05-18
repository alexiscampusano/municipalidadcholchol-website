import React from 'react';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
import { ScrollToTop } from '@/components/shared';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans w-full">
      <TopBar />
      <Header />
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;