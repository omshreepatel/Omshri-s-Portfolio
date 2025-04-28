import React from "react";
import { motion } from "framer-motion";
import "../styles/Project.css";

const projectsData = [
  {
    title: "Social Media App",
    description: "A social media platform built with React and Firebase.",
    link: "https://social-media-app-theta-flame.vercel.app/",
  },

  {
    title: "E-commerce Store",
    description: "An e-commerce platform with payment gateway integration.",
    link: "https://myntracloneproject.netlify.app/",
  },
  {
    title: "Todo App",
    description: "A simple app to manage daily tasks efficiently.",
    link: "https://todo-app-nu-lilac-25.vercel.app/",
  },

  {
    title: "Calculator",
    description: "A responsive calculator app for basic arithmetic operations.",
    link: "https://calculator-5amw.vercel.app/",
  },
  {
    title: "Bharat Clock",
    description: "A simple clock app that displays the current time.",
    link: "https://bharat-clock-mu.vercel.app/",
  },
];

const Projects = () => {
  return (
    <motion.div
      id="projects"
      className="projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Floating background shapes */}
      <div className="floating-shapes-projects">
        <div className="shape-projects shape-projects-1"></div>
        <div className="shape-projects shape-projects-2"></div>
      </div>

      <div className="container py-5 projects-container">
        <h2 className="text-center mb-5 fw-bold text-primary display-5">
          Projects
        </h2>

        <div className="row g-4">
          {projectsData.map((project, index) => (
            <div key={index} className="col-md-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card border-0 shadow-sm h-100 project-card"
              >
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                  <div className="mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-custom w-100 mt-3"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
