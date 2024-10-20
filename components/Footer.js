import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = ({ isFirstLoad }) => {
  const socialLinks = [
    { icon: FaInstagram, href: 'https://www.instagram.com/alan_uthuppan' },
    { icon: FaGithub, href: 'https://github.com/alanu21' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/alanuthuppan' },
    { icon: FaEnvelope, href: 'mailto:alanuthuppan1@gmail.com' },
  ];

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  return (
    <motion.footer
      initial={isFirstLoad ? "hidden" : "visible"}
      animate="visible"
      variants={footerVariants}
      className="sticky bg-transparent py-6"
    >
      <div className="container bg-transparent mx-auto px-4 flex flex-col items-center">
        <div className="flex bg-transparent space-x-6 mb-4">
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
              <Icon size={36} />
            </motion.a>
          ))}
        </div>
        <p className="text-white text-xs">&copy; 2024 Alan Uthuppan</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
