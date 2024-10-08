import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import styles from '../styles/timeline.module.css';

const timelineData = [
  {
    date: 'August 2020 - May 2024',
    title: 'Temple University',
    description: 'Bachelor of Science - Computer Science & Data Science',
    icon: <FaGraduationCap />,
    side: 'left',
  },
  {
    date: 'May 2022 - October 2024',
    title: 'Research Assistant - Python Development',
    description: 'Implemented automated scraping tools and created ground-truth labels for AI artifacts.',
    icon: <FaLaptopCode />,
    side: 'right',
  },
  {
    date: 'Graduating June 2026',
    title: 'Drexel University',
    description: 'Master of Science - Artificial Intelligence & Machine Learning',
    icon: <FaGraduationCap />,
    side: 'left',
  },
];

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          className={`${styles.timelineItem} ${styles[item.side]}`}
          initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.timelineContent}>
            <div className={styles.timelineIcon}>{item.icon}</div>
            <motion.div
              className={styles.timelineDetails}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-gold font-semibold">{item.title}</h3>
              <p className="text-white">{item.date}</p>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;