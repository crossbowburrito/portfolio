import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
      <div className="shared-background">
        <Header />
        <Routes> {/* Use 'Routes' instead of 'Switch' */}
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
      </div>
    </Router>
  );
}

export default App;
