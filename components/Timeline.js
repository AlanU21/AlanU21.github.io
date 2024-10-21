import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaChalkboardTeacher,
} from "react-icons/fa";
import styles from "../styles/timeline.module.css";

const timelineData = [
  {
    date: "September 2024 - June 2026",
    title: "Master of Science - Artificial Intelligence & Machine Learning",
    description: "Drexel University",
    icon: <FaGraduationCap />,
    side: "left",
  },
  {
    date: "May 2022 - October 2024",
    title: "Research Assistant - Python Development",
    description:
      "Implemented automated scraping tools and created ground-truth labels for AI artifacts.",
    icon: <FaLaptopCode />,
    side: "right",
  },
  {
    date: "September 2021 - January 2022",
    title: "Teaching Assistant",
    description:
      "Assisted in teaching and grading Java programming for over 120 students in CIS 1068: Program Design and Abstraction.",
    icon: <FaChalkboardTeacher />,
    side: "left",
  },
  {
    date: "August 2020 - May 2024",
    title: "Bachelor of Science - Computer Science & Data Science",
    description: "Temple University",
    icon: <FaGraduationCap />,
    side: "right",
  },
];

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      <div className={styles.timelineLine}></div>

      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          className={`${styles.timelineItem} ${styles[item.side]}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.timelineWrapper}>
            {/* Left side of timeline */}
            {item.side === "left" && (
              <>
                <div className={styles.timelineContent}>
                  <h3 className="text-gold font-semibold">{item.title}</h3>
                  <p className="text-white">{item.date}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
                <motion.div
                  className={styles.timelineIcon}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>
              </>
            )}

            {/* Right side of timeline */}
            {item.side === "right" && (
              <>
                <motion.div
                  className={styles.timelineIcon}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>
                <div className={styles.timelineContent}>
                  <h3 className="text-gold font-semibold">{item.title}</h3>
                  <p className="text-white">{item.date}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
