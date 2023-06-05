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
      <Navbar />
      <Routes>
        <Route path="/quiz" element={<CharacterQuiz />} />
        <Route path="/lightsaber" element={<Duel />} />
        <Route path="/soundBoard" element={<SoundBoard />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
