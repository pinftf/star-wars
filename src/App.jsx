import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Duel from './pages/Duel';
import SoundBoard from './pages/Soundboard';
import Translator from './pages/Translator';
import './reset.css';
import CharacterQuiz from './pages/CharacterQuiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="Quiz" index element={<CharacterQuiz />} />
          <Route path="Lightsaber" index element={<Duel />} />
          <Route path="SoundBoard" index element={<SoundBoard />} />
          <Route path="Galactic Translator" index element={<Translator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
