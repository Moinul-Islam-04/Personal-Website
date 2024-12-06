import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home.js';
import Projects from './Pages/Projects.js';
import Coursework from './Pages/Coursework.js';
import About from './Pages/About.js';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
        <nav className="p-4 bg-purple-900/30">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/coursework" element={<Coursework />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
