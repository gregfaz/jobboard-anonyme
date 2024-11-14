import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BrowseTalents from './pages/BrowseTalents';
import Companies from './pages/Companies';
import HowItWorks from './pages/HowItWorks';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="min-vh-100 bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/talents" element={<BrowseTalents />} />
          <Route path="/entreprises" element={<Companies />} />
          <Route path="/fonctionnement" element={<HowItWorks />} />
          <Route path="/inscription" element={<Register />} />
          <Route path="/connexion" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
