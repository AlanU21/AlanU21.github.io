import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Timeline from "../components/Timeline";
import styles from "../styles/About.module.css";

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
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
        <meta
          name="description"
          content="Learn more about Alan Uthuppan, an aspiring AI/ML Engineer with a strong foundation in data science, machine learning, and software development."
        />
      </Head>

      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <h1 className="text-4xl font-bold text-gold mb-8">About Me</h1>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row items-center mb-12 mx-auto"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <div className="relative w-48 h-48 mx-auto md:mx-0 mb-8 md:mb-0 md:mr-8">
          <Image
            src="/images/prof.jpeg"
            alt="Alan Uthuppan"
            layout="fill"
            objectFit="cover"
            className={`rounded-full ${styles.profileImage} ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadingComplete={() => setImageLoaded(true)}
          />
        </div>

        <div className={`${styles.blurbContainer} mx-auto md:w-2/3`}>
          <p className={`${styles.blurb} text-white text-lg`}>
            Hi! I am an aspiring AI/ML Engineer with a strong foundation in data
            science, machine learning, and software development. I am currently
            pursuing a Master of Science in Artificial Intelligence & Machine
            Learning at Drexel University, as well as an AWS AI Practitioner
            Certification. I am passionate about creating machine learning
            models and automating data extraction processes to solve complex
            challenges. In my free time I enjoy dancing, exercising, and
            developing my own startup. I am actively seeking AI/ML internships
            for Summer 2025!
          </p>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <h2 className="text-3xl font-semibold text-gold mb-8 text-center">
          My Journey
        </h2>
        <Timeline />
      </motion.div>
    </div>
  );
};

export default About;
