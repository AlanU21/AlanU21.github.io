import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
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
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
            Hello 👋🏾, I&apos;m
          </h2>
          <h1 className="text-gold text-5xl md:text-7xl font-extrabold mb-6">
            Alan Uthuppan
          </h1>
          <p className="text-white text-lg md:text-xl mb-12">
            If I haven&apos;t had the chance to introduce myself yet, this is
            the next best thing...
            <span className="font-bold">welcome to my portfolio!</span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="flex justify-center space-x-6"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="docs/Alan_Uthuppan_Resume.pdf" passHref>
              <span className="bg-black text-white border-2 border-gold rounded-full px-6 py-3 font-regular hover:bg-gold hover:text-black hover:font-semibold transition-all duration-300 inline-block">
                DOWNLOAD RESUME
              </span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/projects" passHref>
              <span className="bg-black text-white border-2 border-gold rounded-full px-6 py-3 font-regular hover:bg-gold hover:text-black hover:font-semibold transition-all duration-300 inline-block">
                VIEW PROJECTS
              </span>
            </Link>
          </motion.div>
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
