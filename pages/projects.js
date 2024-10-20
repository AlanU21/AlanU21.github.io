import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import ProjectCarousel from "../components/ProjectCarousel";
import ProjectDetails from "../components/ProjectDetails";
import MobileProjectGallery from "../components/MobileProjectGallery";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "LSTM Air Quality Predictor",
      description:
        "Developed a Long Short-Term Memory (LSTM) recurrent neural network to forecast PM2.5 and PM10 levels in Philadelphia.",
      techStack: ["Python", "TensorFlow"],
      demoLink: "https://github.com/AlanU21/LSTM_AirQuality_Predictor",
      image: "lstm.png",
    },
    {
      id: 2,
      title: "SpreadSight",
      description:
        "Implemented SARIMAX Time Series Regression and ensemble models to predict and analyze Credit Default Swap (CDS) index valuations.",
      techStack: ["Python", "AWS S3", "Tableau"],
      demoLink:
        "https://public.tableau.com/app/profile/colby.eigen/viz/NorthAmericanCDXRegressionAnalysis/InvestmentGradeIndex",
      image: "spreadsight.png",
    },
    {
      id: 3,
      title: "LOMO",
      description:
        "Contributed to the full lifecycle of LOMO, a web application that facilitates in-person gaming experiences.",
      techStack: ["ReactJS", "Tailwind", "Laravel", "PostgreSQL", "Netlify"],
      demoLink: "https://lomogaming.netlify.app/",
      image: "lomo.png",
    },
    {
      id: 4,
      title: "Valorant Discord Bot",
      description:
        "Implemented user-focused functionalities such as agent recommendation and account information retrieval through REST APIs.",
      techStack: ["Python"],
      demoLink: "https://github.com/cis3296s23/project-02-valorant-discord-bot",
      image: "valorant.png",
    },
    {
      id: 5,
      title: "Portfolio",
      description:
        "Created digital portfolio to showcase projects and skills from scratch",
      techStack: [
        "Next.js",
        "JavaScript",
        "Tailwind",
        "Framer Motion",
        "GitHub Pages",
      ],
      demoLink: "https://github.com/AlanU21/AlanU21.github.io",
      image: "logo.png",
    },
    {
      id: 6,
      title: "SEC Investment Scrapers",
      description:
        "Implemented automated web scraping tools for targeted extraction of quarterly investment tables from various SEC EDGAR filings.",
      techStack: ["Python", "BeautifulSoup", "Pandas"],
      demoLink: "https://github.com/AlanU21/SECscraper",
      image: "scraper.png",
    },
  ];

  return (
    <div className="w-full h-screen bg-transparent overflow-hidden">
      <Head>
        <title>Alan Uthuppan - Projects</title>
        <meta
          name="description"
          content="Explore Alan Uthuppan's project portfolio showcasing expertise in AI, data science, and software development."
        />
      </Head>

      <h1 className="text-4xl pt-5 font-bold text-center text-[#FFC107] mb-6">Projects</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full h-full items-center justify-center"
      >
        {isMobile ? (
          <MobileProjectGallery
            projects={projects}
            setSelectedProject={setSelectedProject}
          />
        ) : (
          <div className="w-full h-4/5">
            <ProjectCarousel
              projects={projects}
              setSelectedProject={setSelectedProject}
            />
          </div>
        )}

        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </motion.div>
    </div>
  );
};

export default Projects;
