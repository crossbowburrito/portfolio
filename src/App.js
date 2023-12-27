import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="element">
        <Header />
        <h1>Welcome to My Portfolio</h1>
        <p>This is a React-based portfolio site.</p>
        {/* More JSX can be added here */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
