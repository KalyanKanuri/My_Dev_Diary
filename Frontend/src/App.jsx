/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import APIHandler from './lib/APIHandler';
import Header from './components/Header';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ContactMe from "./pages/ContactMe";

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    APIHandler.get('/test')
      .then(response => {
        console.log("Api Response", response.data);
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <div className="toast">
        <div className="alert alert-info">
          <span>{message}</span>
        </div>
      </div>      
    </Router>
  );
}
  
export default App;
