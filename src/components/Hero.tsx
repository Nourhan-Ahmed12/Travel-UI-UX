'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import heroImage from './../../public/hero.png';

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
      
      <Image
        src={heroImage}
        alt="Mountain view"
        fill
        className="object-cover"
        priority
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 container mx-auto px-6 h-full flex items-end pb-20"
      >
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Explore the World with Us
          </h1>
          <p className="text-lg mb-8">
            Discover amazing destinations and create unforgettable memories with our expert guides.
          </p>
          <div className="flex gap-4">
            <button className="bg-green-600 px-8 py-3 rounded-full hover:bg-green-700 transition-colors font-medium">
              Explore Now
            </button>
            <button className="border border-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors font-medium">
              Watch Demo
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}