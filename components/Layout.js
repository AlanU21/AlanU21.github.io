import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-light-gray">
      <NavBar isScrolled={isScrolled} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout