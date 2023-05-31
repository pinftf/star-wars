import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Lightsaber from './pages/Lightsaber';
import SoundBoard from './pages/Soundboard';
import Translator from './pages/Translator';

import './reset.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="Quiz" element={<Quiz />} />
          <Route path="Lightsaber" element={<Lightsaber />} />
          <Route path="SoundBoard" element={<SoundBoard />} />
          <Route path="Galactic Translator" element={<Translator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
