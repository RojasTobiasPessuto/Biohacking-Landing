import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function EventPhotos() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const photos = [
    { 
      url: 'https://images.unsplash.com/photo-1634155938686-24a26c55d71a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwZXZlbnQlMjBhdWRpZW5jZXxlbnwxfHx8fDE3NjYxNTE2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080', 
      alt: 'Summit 2025 - Conferencia principal',
      colSpan: 'md:col-span-3',
    },
    { 
      url: 'https://images.unsplash.com/photo-1603206004639-22635b71ac08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHdvcmtzaG9wJTIwcGVvcGxlfGVufDF8fHx8MTc2NjE1MTY3OHww&ixlib=rb-4.1.0&q=80&w=1080', 
      alt: 'Taller de wellness',
      colSpan: 'md:col-span-5',
    },
    { 
      url: 'https://images.unsplash.com/photo-1763739527636-d3d8cac52d6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JraW5nJTIwZXZlbnQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY2MTUxNjc5fDA&ixlib=rb-4.1.0&q=80&w=1080', 
      alt: 'Networking y conexiones',
      colSpan: 'md:col-span-4',
    },
    { 
      url: 'https://images.unsplash.com/photo-1765438863717-49fca900f861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pbmFyJTIwcHJlc2VudGF0aW9uJTIwc3BlYWtlcnxlbnwxfHx8fDE3NjYxNTE2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080', 
      alt: 'Presentación de expertos',
      colSpan: 'md:col-span-4',
    },
    { 
      url: 'https://images.unsplash.com/photo-1616992510024-f1293eb00e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBzdW1taXQlMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzY2MTUxNjc4fDA&ixlib=rb-4.1.0&q=80&w=1080', 
      alt: 'Experiencias de salud',
      colSpan: 'md:col-span-3',
    },
    { 
      url: 'https://images.unsplash.com/photo-1758797315487-b3b225dff7d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd2VsbG5lc3MlMjByZXRyZWF0fGVufDF8fHx8MTc2NjEzNTcwOXww&ixlib=rb-4.1.0&q=80&w=1080', 
      alt: 'Sesión de yoga y bienestar',
      colSpan: 'md:col-span-5',
    },
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % photos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-24 bg-white" id="galeria">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Revive nuestro último evento</h2>
        </motion.div>

        {/* Photo Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-12 gap-2">
          {photos.map((photo, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className={`group relative h-72 rounded-lg overflow-hidden cursor-pointer col-span-1 ${photo.colSpan}`}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>

        {/* Photo Carousel - Mobile */}
        <div className="md:hidden">
          <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
            <div className="flex gap-4" style={{ scrollSnapType: 'x mandatory' }}>
              {photos.map((photo, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => openLightbox(index)}
                  className="flex-shrink-0 w-[85vw] aspect-[4/3] rounded-2xl overflow-hidden"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
              onClick={closeLightbox}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={24} className="text-white" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-6 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              >
                <ChevronLeft size={24} className="text-white" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-6 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              >
                <ChevronRight size={24} className="text-white" />
              </button>

              {/* Image */}
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                src={photos[currentImageIndex].url}
                alt={photos[currentImageIndex].alt}
                className="max-w-[90vw] max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Counter */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm">
                {currentImageIndex + 1} / {photos.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}