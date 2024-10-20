import React from "react";
import { motion } from "framer-motion";

const MobileProjectGallery = ({ projects, setSelectedProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-4 overflow-y-auto h-full"
    >
      <div className="space-y-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1C1C1C] p-4 rounded-xl cursor-pointer shadow-lg border-2 border-[#FFC107]"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={`/images/${project.image}`}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-[#FFC107] mb-2">
              {project.title}
            </h2>
            <p className="text-white text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#FFC107] text-black text-xs px-2 py-1 rounded-full mr-2 mb-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileProjectGallery;
