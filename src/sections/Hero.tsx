import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder - Replace with actual image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1596237563267-845d11661419?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Mehndi Art Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center text-white px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif font-bold mb-4"
        >
          Honey Mehindi Arts
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 font-light"
        >
          Exquisite Henna Designs for Every Occasion
        </motion.p>
        <motion.a 
          href="#contact"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-block bg-secondary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-yellow-600 transition-colors shadow-lg"
        >
          Book Now
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
