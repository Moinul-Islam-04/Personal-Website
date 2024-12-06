import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <div className="max-w-2xl px-4">
        <h1 className="home-title">Hello, I'm Moinul Islam</h1>
        <p className="home-subtitle">
          Software Developer | Tech Enthusiast | Powerlifter
        </p>
        
        <div className="btn-container">
          <Link 
            to="/projects" 
            className="btn btn-primary"
          >
            View Projects
          </Link>
          <Link 
            to="/about" 
            className="btn btn-secondary"
          >
            About Me
          </Link>
          <Link 
            to="/coursework" 
            className="btn btn-tertiary"
          >
            Coursework
          </Link>
        </div>

        <div className="skills-container">
          <div className="skill-item">
            <h3>React</h3>
          </div>
          <div className="skill-item">
            <h3>JavaScript</h3>
          </div>
          <div className="skill-item">
            <h3>Python</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;