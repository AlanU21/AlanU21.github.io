import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const NavBar = ({ isScrolled }) => {
  return (
    <header className={`sticky top-2 px-2 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-2 py-2 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link href="/" passHref>
            <Image
              src="/images/logo.png"
              alt="Alan Uthuppan"
              width={60}
              height={60}
              priority
            />
          </Link>
        </motion.div>
        <ul className="flex space-x-6">
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href={`/${item === 'home' ? '' : item}`} passHref>
                  <span className="text-gold hover:underline transition-all duration-300 inline-block">
                    {item.charAt(0) + item.slice(1)}
                  </span>
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default NavBar