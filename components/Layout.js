import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Layout = ({ children, isFirstLoad }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-light-gray">
      <NavBar isScrolled={isScrolled} isFirstLoad={isFirstLoad} />
      <main className="flex-grow">{children}</main>
      <Footer isFirstLoad={isFirstLoad} />
    </div>
  );
};

export default Layout;