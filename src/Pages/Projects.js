import React from 'react';
import './Projects.css'

const Projects = () => {
    const projectsList = [
      {
        id: 1,
        name: "Personal Portfolio Website",
        description: "A responsive personal portfolio website built with React and Tailwind CSS, showcasing my projects and skills.",
        technologies: ["React", "Tailwind CSS", "React Router"],
        githubLink: "#",
        liveLink: "#"
      },
      {
        id: 2,
        name: "Task Management App",
        description: "A full-stack task management application with user authentication, real-time updates, and drag-and-drop functionality.",
        technologies: ["React", "Node.js", "MongoDB", "Socket.IO"],
        githubLink: "#",
        liveLink: "#"
      },
      {
        id: 3,
        name: "Weather Forecast App",
        description: "A weather application that provides real-time weather information and forecasts using an external API.",
        technologies: ["JavaScript", "OpenWeatherMap API", "HTML", "CSS"],
        githubLink: "#",
        liveLink: "#"
      }
    ];
  
    return (
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <div className="projects-grid">
          {projectsList.map((project) => (
            <div key={project.id} className="project-card">
              <h2 className="project-name">{project.name}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link github-link"
                >
                  GitHub
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link live-link"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;