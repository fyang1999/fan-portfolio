
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Photography from './Photography';
import Video from './Video';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/photography">Photography</Link></li>
            <li><Link to="/video">Video</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
