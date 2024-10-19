import "../styles/globals.css";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
    setIsFirstLoad(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="h-16 w-16 border-4 border-gold border-t-transparent rounded-full"
        ></motion.div>
      </div>
    );
  }

  return (
    <Layout isFirstLoad={isFirstLoad}>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: { opacity: 0 },
            pageAnimate: { opacity: 1 },
            pageExit: { opacity: 0 },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;