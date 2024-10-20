import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const ProjectDetails = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-[#1C1C1C] p-8 rounded-2xl max-w-2xl w-full mx-4 shadow-2xl border-2 border-[#FFC107]"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-[#FFC107]">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-[#FFC107] transition-colors"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <div className="mb-4 rounded-lg overflow-hidden">
          <img 
            src={`/images/${project.image}`} 
            alt={project.title} 
            className="w-full object-contain max-h-64" 
          />
        </div>
        <p className="text-white mb-4">{project.description}</p>
        <div className="flex flex-wrap mb-4">
          {project.techStack.map((tech, index) => (
            <span key={index} className="bg-[#FFC107] text-black px-3 py-1 rounded-full text-sm mr-2 mb-2">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FFC107] text-black px-6 py-2 rounded-full inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-x hover:text-black hover:bg-white"
        >
          View Demo/Code
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;