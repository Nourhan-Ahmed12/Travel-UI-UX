'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa'; 


const camps = [
  {
    id: 1,
    title: 'Mountain View Camp',
    location: 'Swiss Alps',
    description: 'Experience the beauty of alpine nature',
    image: '/img-1.png',
  },
  {
    id: 2,
    title: 'Beachside Camp',
    location: 'Maldives',
    description: 'Wake up to the sound of ocean waves',
    image: '/img-2.png',
  },
  {
    id: 3,
    title: 'Forest Retreat',
    location: 'Amazon',
    description: 'Immerse yourself in the green jungle',
    image: '/boat.png',
  },
];

export default function CampSection() {
  return (
    <section className="py-20 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Our Featured Camps</h2>
        <p className="text-gray-600 max-w-2xl">
          Discover our carefully selected camps that offer unique experiences in the most beautiful locations around the world.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {camps.map((camp, index) => (
          <motion.div
            key={camp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-64">
              <Image
                src={camp.image}
                alt={camp.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{camp.title}</h3>
              <div className="flex items-center text-green-600 mb-3">
                <FaMapMarkerAlt className="mr-2" />
                <span>{camp.location}</span>
              </div>
              <p className="text-gray-600 mb-4">{camp.description}</p>
              <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
                Explore Camp →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}