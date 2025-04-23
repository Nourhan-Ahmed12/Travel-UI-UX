'use client';

import { motion } from 'framer-motion';
import { FiGlobe, FiCalendar, FiStar, FiHeart } from 'react-icons/fi';

const features = [
  {
    icon: <FiGlobe className="w-8 h-8" />,
    title: "Global Destinations",
    description: "Access to exclusive locations worldwide"
  },
  {
    icon: <FiCalendar className="w-8 h-8" />,
    title: "Flexible Booking",
    description: "Easy rescheduling and cancellation"
  },
  {
    icon: <FiStar className="w-8 h-8" />,
    title: "Premium Quality",
    description: "Curated high-end experiences"
  },
  {
    icon: <FiHeart className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Dedicated customer care team"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We're committed to providing exceptional travel experiences with these key features.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
            whileHover={{ y: -5 }}
          >
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}