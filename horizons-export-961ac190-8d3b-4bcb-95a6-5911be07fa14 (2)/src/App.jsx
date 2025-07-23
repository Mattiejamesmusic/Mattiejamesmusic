
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';
import Home from '@/pages/Home';
import Compositions from '@/pages/Compositions';
import Live from '@/pages/Live';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen art-deco-pattern">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compositions" element={<Compositions />} />
          <Route path="/live" element={<Live />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
