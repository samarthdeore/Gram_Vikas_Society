import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Leaf, Users, BookOpen, Heart, GraduationCap, Briefcase, TreePine, HandHeart, X } from 'lucide-react';

interface Program {
  name: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  description: string;
  impact: string;
}

export function HeroSection() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const programs: Program[] = [
    {
      name: 'PRAKRUTI VIKAS',
      icon: TreePine,
      description: 'Environmental conservation and sustainable development initiatives for rural communities.',
      impact: 'Protecting nature while empowering communities',
    },
    {
      name: 'GURU VIKAS',
      icon: GraduationCap,
      description: 'Teacher development programs to enhance quality education in rural schools.',
      impact: 'Empowering educators to transform lives',
    },
    {
      name: 'YUVA VIKAS',
      icon: Users,
      description: 'Youth skill development and employment opportunities for sustainable careers.',
      impact: 'Building confident and skilled youth leaders',
    },
    {
      name: 'MAHILA VIKAS',
      icon: Heart,
      description: 'Women empowerment through vocational training and entrepreneurship support.',
      impact: 'Creating economic independence for women',
    },
    {
      name: 'VIDYA VIKAS',
      icon: BookOpen,
      description: 'Quality education access and learning support for underprivileged children.',
      impact: 'Ensuring every child can learn and grow',
    },
    {
      name: 'SENA VIKAS',
      icon: HandHeart,
      description: 'Community service networks building stronger village connections.',
      impact: 'Strengthening community bonds and support',
    },
    {
      name: 'UDYAM VIKAS',
      icon: Briefcase,
      description: 'Rural entrepreneurship development and business mentorship programs.',
      impact: 'Fostering local businesses and enterprises',
    },
    {
      name: 'SAHAY VIKAS',
      icon: Leaf,
      description: 'Integrated support services for holistic community development.',
      impact: 'Comprehensive development support systems',
    },
  ];

  return (
    <section className="section-transparent relative h-screen w-full overflow-hidden min-h-[500px]">
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 py-8">
        <div className="max-w-4xl text-center mb-10 sm:mb-16">
          <motion.h1
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              textShadow: '0 2px 10px rgba(255,255,255,0.5)',
            }}
            className="mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            A Catalyst For Development
          </motion.h1>
          <motion.p
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              fontWeight: 400,
              color: 'var(--text-secondary)',
            }}
            className="mb-8 sm:mb-10 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            JAL | JUNGLE | JAMEEN | JAANWAR | JAN
          </motion.p>
          <motion.button
            className="glow-button"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Be a Part of Change
          </motion.button>
        </div>

        {/* Circular Program Icons */}
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-8 px-4">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.name}
                  className="flex flex-col items-center cursor-pointer group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedProgram(program)}
                >
                  {/* Circle */}
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-3 transition-all duration-200"
                    style={{
                      background: 'var(--button-gradient)',
                      boxShadow: 'var(--shadow-soft)',
                    }}
                  >
                    <Icon
                      className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-200 group-hover:scale-110"
                      strokeWidth={1.5}
                      style={{ color: 'var(--text-primary)' }}
                    />
                  </div>

                  {/* Label */}
                  <p
                    className="text-center transition-opacity duration-200 group-hover:opacity-70"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: 'clamp(0.65rem, 1.5vw, 0.8rem)',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      letterSpacing: '0.3px',
                    }}
                  >
                    {program.name.split(' ')[0]}
                    <br />
                    {program.name.split(' ')[1]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProgram && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(8px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedProgram(null)}
          >
            <motion.div
              className="glass-card p-6 sm:p-8 md:p-10 max-w-2xl w-full relative"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 p-2 rounded-full transition-all duration-200"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center"
                  style={{
                    background: 'var(--button-gradient)',
                    boxShadow: 'var(--shadow-soft)',
                  }}
                >
                  {(() => {
                    const Icon = selectedProgram.icon;
                    return <Icon className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} style={{ color: 'var(--text-primary)' }} />;
                  })()}
                </div>
              </div>

              {/* Title */}
              <h2
                className="text-center mb-4"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(1.5rem, 5vw, 2rem)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                {selectedProgram.name}
              </h2>

              {/* Description */}
              <p
                className="text-center mb-6"
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                }}
              >
                {selectedProgram.description}
              </p>

              {/* Impact */}
              <div
                className="text-center px-6 py-4 rounded-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <p
                  className="italic"
                  style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    color: 'var(--text-primary)',
                  }}
                >
                  "{selectedProgram.impact}"
                </p>
              </div>

              {/* Learn More Button */}
              <div className="flex justify-center mt-8">
                <button
                  className="glow-button"
                  onClick={() => setSelectedProgram(null)}
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
