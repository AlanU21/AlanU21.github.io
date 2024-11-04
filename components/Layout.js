import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children, isFirstLoad }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-black to-light-gray">
      <NavBar isScrolled={isScrolled} isFirstLoad={isFirstLoad} />
      <main className="flex-grow p-4 md:p-8">{children}</main>
      <Footer isFirstLoad={isFirstLoad} />
    </div>
  );
};

export default Layout;
