import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function VisualReferenceCards() {
  const [activeIndices, setActiveIndices] = useState([0, 0, 0, 0, 0, 0]);

  // Define multiple images per position
  const imagesByPosition = [
    // Position 0 - narrow (3 cols)
    [
      {
        image: 'https://images.unsplash.com/photo-1695462131822-368776114494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGJpb2hhY2tpbmclMjBldmVudHxlbnwxfHx8fDE3NjYxNTU1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Wellness',
      },
      {
        image: 'https://images.unsplash.com/photo-1758274526671-ad18176acb01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjBuYXR1cmV8ZW58MXx8fHwxNzY2MTUxNTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Mindfulness',
      },
    ],
    // Position 1 - wide (5 cols)
    [
      {
        image: 'https://images.unsplash.com/photo-1571645163064-77faa9676a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2NjA3MTM3NXww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Networking',
      },
      {
        image: 'https://images.unsplash.com/photo-1669101283985-ab2b293923df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY2MTUxNTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Science',
      },
    ],
    // Position 2 - medium (4 cols)
    [
      {
        image: 'https://images.unsplash.com/photo-1632858280935-d5611683e434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBzdW1taXQlMjBlbmVyZ3l8ZW58MXx8fHwxNzY2MTU1NTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Energy',
      },
      {
        image: 'https://images.unsplash.com/photo-1716284129276-c84a6b77325f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5kZnVsbmVzcyUyMGJyZWF0aGluZyUyMGV4ZXJjaXNlfGVufDF8fHx8MTc2NjE1MTU4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Breathwork',
      },
    ],
    // Position 3 - medium (4 cols)
    [
      {
        image: 'https://images.unsplash.com/photo-1550305550-ff3ab47ab63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwaGFwcHklMjBwZW9wbGV8ZW58MXx8fHwxNzY2MTU1NTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Community',
      },
      {
        image: 'https://images.unsplash.com/photo-1758577515333-e71b713059f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW9tZXRyaWMlMjBoZWFsdGglMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NjE1MTU4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Technology',
      },
    ],
    // Position 4 - narrow (3 cols)
    [
      {
        image: 'https://images.unsplash.com/photo-1647796853261-a4112c2ba315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjBldmVudHxlbnwxfHx8fDE3NjYxNTU1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Meditation',
      },
      {
        image: 'https://images.unsplash.com/photo-1724167934723-6ca990cb8a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHJldHJlYXQlMjBuYXR1cmFsfGVufDF8fHx8MTc2NjE1MTU4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Retreat',
      },
    ],
    // Position 5 - wide (5 cols)
    [
      {
        image: 'https://images.unsplash.com/photo-1649073586428-e288125d930a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW9oYWNraW5nJTIwdGVjaG5vbG9neSUyMGhlYWx0aHxlbnwxfHx8fDE3NjYxNTU1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Biohacking',
      },
      {
        image: 'https://images.unsplash.com/photo-1759177670217-72ddf0f95b7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25nZXZpdHklMjBoZWFsdGglMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzY2MTUxNTg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Longevity',
      },
    ],
  ];

  const colSpans = ['md:col-span-3', 'md:col-span-5', 'md:col-span-4', 'md:col-span-4', 'md:col-span-3', 'md:col-span-5'];

  // Each image rotates independently with different delays
  useEffect(() => {
    const intervals = imagesByPosition.map((_, index) => {
      return setInterval(() => {
        setActiveIndices((prev) => {
          const newIndices = [...prev];
          newIndices[index] = (newIndices[index] + 1) % imagesByPosition[index].length;
          return newIndices;
        });
      }, 6000 + index * 1000); // Each image rotates at different intervals (staggered)
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {imagesByPosition.map((position, posIndex) => {
            const currentImage = position[activeIndices[posIndex]];
            
            return (
              <div
                key={posIndex}
                className={`group relative h-72 rounded-lg overflow-hidden cursor-pointer col-span-1 ${colSpans[posIndex]}`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${posIndex}-${activeIndices[posIndex]}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    {/* Background image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${currentImage.image})` }}
                    />
                    {/* Subtle dark overlay on hover only */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                    
                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                      <h4 className="text-white">{currentImage.title}</h4>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Hover shadow */}
                <div className="absolute inset-0 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}