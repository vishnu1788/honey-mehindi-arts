import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const services = [
  {
    title: "Bridal Mehndi",
    price: "Starts at $150",
    features: ["Full Hands & Feet", "Intricate Designs", "Custom Motifs", "Home Service Available"],
  },
  {
    title: "Party Mehndi",
    price: "Starts at $20/hand",
    features: ["Simple to Moderate Designs", "Group Bookings", "Quick Application", "Variety of Styles"],
  },
  {
    title: "Engagement/Sangeet",
    price: "Starts at $80",
    features: ["Elaborate Designs", "Family Packages", "Traditional & Modern", "Consultation Included"],
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">Services & Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose the perfect package for your special occasion.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
            >
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">{service.title}</h3>
              <p className="text-xl font-bold text-secondary mb-6">{service.price}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block text-center w-full py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors">
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
