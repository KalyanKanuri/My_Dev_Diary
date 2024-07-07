/* eslint-disable no-unused-vars */
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import CodingActivities from './pages/CodingActivities'
import Projects from './pages/Projects';
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/coding" element={<CodingActivities />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>     
    </Router>
  );
}
  
export default App;
