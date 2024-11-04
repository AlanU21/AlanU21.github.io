import Head from "next/head";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  const navControls = useAnimation();
  const helloControls = useAnimation();
  const nameControls = useAnimation();
  const textControls = useAnimation();
  const buttonControls = useAnimation();
  const footerControls = useAnimation();

  const [isNavComplete, setIsNavComplete] = useState(false);
  const [isHelloComplete, setIsHelloComplete] = useState(false);
  const [isNameComplete, setIsNameComplete] = useState(false);

  useEffect(() => {
    navControls.start("visible").then(() => {
      setIsNavComplete(true);
    });
  }, [navControls]);

  useEffect(() => {
    if (isNavComplete) {
      helloControls.start("visible").then(() => {
        setIsHelloComplete(true);
      });
    }
  }, [isNavComplete, helloControls]);

  useEffect(() => {
    if (isHelloComplete) {
      nameControls.start("visible").then(() => {
        setIsNameComplete(true);
      });
    }
  }, [isHelloComplete, nameControls]);

  useEffect(() => {
    if (isNameComplete) {
      textControls.start("visible");
      buttonControls.start("visible");
      footerControls.start("visible");
    }
  }, [isNameComplete, textControls, buttonControls, footerControls]);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const helloVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: [1.2, 0.8, 1],
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const nameVariants = {
    hidden: { width: 0, borderRight: "3px solid gold", opacity: 1 },
    visible: {
      width: "13ch",
      opacity: 1,
      transition: {
        duration: 3,
        ease: "linear",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  return (
    <div>
      <Head>
        <title>Alan Uthuppan - Portfolio</title>
        <meta
          name="description"
          content="Welcome to Alan Uthuppan's portfolio. Explore my projects and skills."
        />
        <link rel="canonical" href="https://www.alanuthuppan.com" />
      </Head>

      <div className="container mx-auto py-6 text-center">
        <motion.div
          initial="hidden"
          animate={helloControls}
          variants={helloVariants}
        >
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            Hello 👋🏾, I&apos;m
          </h2>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate={nameControls}
          variants={nameVariants}
          className="text-gold text-4xl md:text-7xl lg:text-8xl font-extrabold mb-6 typewriter"
        >
          Alan Uthuppan
        </motion.h1>

        <motion.div
          initial="hidden"
          animate={textControls}
          variants={textVariants}
        >
          <p className="text-white text-lg sm:text-md md:text-xl lg:text-2xl px-5 mb-6 mt-6">
            If I haven&apos;t had the chance to introduce myself yet,
            <br /> this is the next best thing...
            <span className="font-bold">welcome to my portfolio!</span>
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={buttonControls}
          variants={buttonVariants}
          className="flex flex-col justify-center items-center py-4 space-y-8 w-full"
        >
          <Link
            href="docs/AlanUthuppanResume.pdf"
            passHref
            className="bg-black text-white border-2 border-gold rounded-full py-4 font-regular hover:bg-gold hover:text-black hover:font-semibold hover:scale-105 transition-all duration-300 w-1/2 sm:w-1/3"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOWNLOAD RESUME
          </Link>
          <Link
            href="/projects"
            passHref
            className="bg-black text-white border-2 border-gold rounded-full py-4 font-regular hover:bg-gold hover:text-black hover:font-semibold hover:scale-105 transition-all duration-300 w-1/2 sm:w-1/3"
          >
            VIEW PROJECTS
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
