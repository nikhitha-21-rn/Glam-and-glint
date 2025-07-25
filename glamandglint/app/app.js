// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Outfits from './pages/collections/categories';
import Jewellery from './pages/collections/Jewellery';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections/outfits" element={<Outfits />} />
        <Route path="/collections/jewellery" element={<Jewellery />} />
      </Routes>
    </Router>
  );
};

export default App;
