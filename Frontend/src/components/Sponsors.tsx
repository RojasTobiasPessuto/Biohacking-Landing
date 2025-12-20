import React from 'react';
import { motion } from 'motion/react';

export default function Sponsors() {
  // Placeholder sponsor logos (using simple text placeholders)
  const sponsors = [
    'SPONSOR 01',
    'SPONSOR 02',
    'SPONSOR 03',
    'SPONSOR 04',
    'SPONSOR 05',
    'SPONSOR 06',
    'SPONSOR 07',
    'SPONSOR 08',
    'SPONSOR 09',
    'SPONSOR 10',
    'SPONSOR 11',
    'SPONSOR 12',
  ];

  return (
    <section className="py-24 bg-gray-50" id="sponsors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Estos serán nuestros sponsors</h2>
        </motion.div>

        {/* Sponsor Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group aspect-video bg-white rounded-2xl flex items-center justify-center p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Placeholder logo - using grayscale by default, color on hover */}
              <div className="text-center grayscale group-hover:grayscale-0 transition-all duration-300">
                <div className="w-full h-16 flex items-center justify-center text-gray-400 group-hover:text-black transition-colors">
                  <svg
                    className="w-20 h-20"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="100" height="100" rx="20" fill="currentColor" opacity="0.1" />
                    <text
                      x="50"
                      y="55"
                      textAnchor="middle"
                      fill="currentColor"
                      fontSize="12"
                      fontFamily="system-ui, sans-serif"
                    >
                      LOGO
                    </text>
                  </svg>
                </div>
                <p className="text-xs text-gray-400 group-hover:text-gray-600 mt-2 transition-colors">
                  {sponsor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}