import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { icon: FaInstagram, href: 'https://www.instagram.com/alan_uthuppan' },
    { icon: FaGithub, href: 'https://github.com/alanu21' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/alanuthuppan' },
    { icon: FaEnvelope, href: 'mailto:alanuthuppan1@gmail.com' },
  ]

  return (
    <footer className="bg-transparent py-6">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          {socialLinks.map(({ icon: Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={48} />
            </motion.a>
          ))}
        </div>
        <p className="text-white text-xs">&copy; 2024 Alan Uthuppan</p>
      </div>
    </footer>
  )
}

export default Footer