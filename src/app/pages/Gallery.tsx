import { motion } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState } from "react";
import { X } from "lucide-react";

// ==========================================
// GALLERY PAGE IMAGE CONFIGURATION
// Easily replace the placeholder URLs below
// with your actual image links.
// ==========================================
const galleryImages = [
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
  "https://images.unsplash.com/photo-1593113580326-9a2503957dd9?w=800&q=80",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
  "https://images.unsplash.com/photo-1526976663112-00d1b1df4005?w=800&q=80",
  "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
  "https://images.unsplash.com/photo-1628102491629-778571d893a3?w=800&q=80",
  "https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=800&q=80",
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-black text-[#3E2723] mb-6 tracking-tight drop-shadow-sm"
        >
          Visual <span className="bg-gradient-to-r from-[#C63D0F] to-[#FFC107] bg-clip-text text-transparent">Journey</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-[#5D4037] max-w-2xl mx-auto"
        >
          A glimpse into the lives we touch and the communities we build together.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="1.5rem">
            {galleryImages.map((src, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="overflow-hidden rounded-[2rem] cursor-pointer group shadow-[0_10px_25px_rgba(198,61,15,0.08)] border-4 border-white"
                 onClick={() => setSelectedImage(src)}
               >
                 <img
                   src={src}
                   alt="Gallery image"
                   className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                 />
               </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </motion.div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-6 right-6 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            src={selectedImage}
            alt="Enlarged gallery view"
            className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-4 border-white/10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
