import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="min-h-screen flex flex-col bg-gradient-to-b from-black to-light-gray"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <main className="flex-grow">{children}</main>
    </motion.div>
  );
};

export default Layout;