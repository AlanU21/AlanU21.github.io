import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectCarousel = ({ projects, setSelectedProject }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalProjects = projects.length;

  const nextProject = (event) => {
    event.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProjects);
  };

  const prevProject = (event) => {
    event.stopPropagation();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalProjects) % totalProjects
    );
  };

  const handleCardClick = (index) => {
    setCurrentIndex(index);
    setSelectedProject(projects[index]);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <AnimatePresence initial={false}>
        {projects.map((project, index) => {
          let offset = (index - currentIndex + totalProjects) % totalProjects;
          if (offset > Math.floor(totalProjects / 2)) {
            offset -= totalProjects;
          }

          const isActive = index === currentIndex;

          return (
            <motion.div
              key={project.id}
              className={`absolute w-3/8 h-3/4 bg-[#1C1C1C] rounded-lg border-2 border-[#FFC107] shadow-lg cursor-pointer
                              ${isActive ? "z-10" : "z-0"}`}
              style={{
                originX: 0.5,
                originY: 0.5,
              }}
              initial={{
                scale: 0.8,
                x: offset * 300 + "px",
                opacity: Math.abs(offset) > 1 ? 0 : 0.7,
              }}
              animate={{
                scale: isActive ? 1 : 0.8,
                x: offset * 300 + "px",
                opacity: isActive ? 1 : Math.abs(offset) > 1 ? 0 : 0.7,
                zIndex: isActive ? 10 : 10 - Math.abs(offset),
              }}
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(index)}
              whileHover={{ scale: isActive ? 1.05 : 0.85 }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center p-8">
                <div className="w-full h-3/4 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={`/images/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-[#FFC107] text-center">
                  {project.title}
                </h2>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      <button
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-[#FFC107] text-black p-4 rounded-full text-2xl z-20
                     transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:text-black hover:bg-white"
        onClick={(e) => {
          e.stopPropagation();
          prevProject(e);
        }}
      >
        <FaChevronLeft />
      </button>

      <button
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-[#FFC107] text-black p-4 rounded-full text-2xl z-20
                     transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-x hover:text-black hover:bg-white"
        onClick={(e) => {
          e.stopPropagation();
          nextProject(e);
        }}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ProjectCarousel;
