'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GuideSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative h-96 w-full rounded-2xl overflow-hidden">
              <Image
                src="/photo-1503917988258-f87a78e3c995.avif"
                alt="Travel Guide"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6">Expert Travel Guides</h2>
            <p className="text-gray-600 mb-6">
              Our professional guides have extensive knowledge about the local culture, history, and hidden gems that you won&apos;t find in guidebooks.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <div className="bg-green-600 w-6 h-6 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">1</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Local Experts</h4>
                  <p className="text-gray-600">Born and raised in the area</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <div className="bg-green-600 w-6 h-6 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">2</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Safety First</h4>
                  <p className="text-gray-600">Certified in first aid and safety</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <div className="bg-green-600 w-6 h-6 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">3</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Customized Tours</h4>
                  <p className="text-gray-600">Tailored to your interests</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}