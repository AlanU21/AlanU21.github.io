import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Timeline from '../components/Timeline';
import styles from '../styles/About.module.css';

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Alan Uthuppan - Portfolio</title>
        <meta name="description" content="Learn more about Alan Uthuppan, an aspiring AI/ML Engineer with a strong foundation in data science, machine learning, and software development." />
      </Head>

      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <div className="relative w-48 h-48 mx-auto mb-8">
          <Image
            src="/images/prof.jpeg"
            alt="Alan Uthuppan"
            layout="fill"
            objectFit="cover"
            className={`rounded-full ${styles.profileImage} ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoadingComplete={() => setImageLoaded(true)}
          />
        </div>
        <h1 className="text-4xl font-bold text-gold mb-4">About Me</h1>
        <div className={`${styles.blurbContainer} mx-auto`}>
          <p className={`${styles.blurb} text-black text-lg`}>
            Aspiring AI/ML Engineer with a strong foundation in data science, machine learning, and software development. 
            Currently pursuing a Master of Science in Artificial Intelligence & Machine Learning at Drexel University, 
            while completing dual Bachelor's degrees in Computer Science and Data Science at Temple University. 
            Passionate about creating machine learning models and automating data extraction processes to solve complex, real-world problems.
          </p>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <h2 className="text-3xl font-semibold text-gold mb-8 text-center">My Journey</h2>
        <Timeline />
      </motion.div>
    </div>
  );
};

export default About;