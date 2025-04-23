'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaApple, FaPlay } from 'react-icons/fa';

export default function GetAppSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6">Get Our Mobile App</h2>
            <p className="mb-8 text-green-100 max-w-lg">
              Download our app to book trips on the go, get exclusive mobile-only deals, and access your itinerary anytime, anywhere.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <FaApple className="w-5 h-5" />
                <div className="text-left">
                  <p className="text-xs">Download on the</p>
                  <p className="font-medium">App Store</p>
                </div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <FaPlay className="w-5 h-5" />
                <div className="text-left">
                  <p className="text-xs">Get it on</p>
                  <p className="font-medium">Google Play</p>
                </div>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-96">
              <Image
                src="/phone.png"
                alt="Mobile App"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}