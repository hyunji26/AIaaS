// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import DropdownMenu from './components/DropdownMenu';
import SearchOverlay from './components/SearchOverlay';

import Home from './pages/Home';
import PerfumeList from './pages/PerfumeList';
import PerfumeDetail from './pages/PerfumeDetail';

const App = () => {
  return (
    <>
      <Header />
      <DropdownMenu />
      <div id="overlay-dark"></div>
      <SearchOverlay />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfume" element={<PerfumeList />} />
        <Route path="/perfume/:id" element={<PerfumeDetail />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
