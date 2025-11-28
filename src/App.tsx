import React from 'react';

import Hero from './sections/Hero';
import Gallery from './sections/Gallery';
import Services from './sections/Services';
import Contact from './sections/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-accent text-dark overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold text-primary">Honey Mehindi Arts</h1>
          <ul className="hidden md:flex space-x-8 font-medium text-primary">
            <li><a href="#hero" className="hover:text-secondary transition-colors">Home</a></li>
            <li><a href="#gallery" className="hover:text-secondary transition-colors">Gallery</a></li>
            <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <Hero />
        <Gallery />
        <Services />
        <Contact />
      </main>

      <footer className="bg-primary text-white py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Honey Mehindi Arts. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
