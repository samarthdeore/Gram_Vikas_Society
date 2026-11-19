import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface ProgramData {
  name: string;
  translation: string;
  description: string;
  stats: {
    beneficiaries?: number;
    villages?: number;
    programs?: number;
    teachers?: number;
    students?: number;
    women?: number;
    enterprises?: number;
    families?: number;
  };
}

export function VikasRingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCircle, setHoveredCircle] = useState<number | null>(null);
  const [expandedCircle, setExpandedCircle] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const vikasPrograms: (ProgramData & {
    images: string[];
    sections: string[];
    highlights: string[];
  })[] = [
    {
      name: 'SHIKSHAK VIKAS',
      translation: 'Teacher Development',
      description: 'Empowering rural teachers through comprehensive training programs, modern teaching methodologies, and continuous skill development.',
      stats: { teachers: 1250, villages: 85, programs: 42, students: 15000 },
      images: [
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
      ],
      sections: [
        'Comprehensive teacher training programs focusing on modern pedagogical approaches and digital literacy.',
        'Continuous professional development workshops to enhance teaching quality and student engagement.',
        'Mentorship programs connecting experienced educators with rural teachers for knowledge sharing.',
      ],
      highlights: ['Modern Teaching Methods', 'Digital Literacy Training', 'Continuous Support', 'Quality Education']
    },
    {
      name: 'YUVA VIKAS',
      translation: 'Youth Development',
      description: 'Building confident and skilled youth through vocational training, leadership development, and entrepreneurship programs.',
      stats: { beneficiaries: 3500, villages: 120, programs: 65, enterprises: 280 },
      images: [
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800',
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800',
      ],
      sections: [
        'Vocational skills training in high-demand sectors including IT, manufacturing, and service industries.',
        'Leadership development programs to build confidence and decision-making abilities among youth.',
        'Entrepreneurship support with mentorship, business planning, and access to startup resources.',
      ],
      highlights: ['Vocational Training', 'Leadership Skills', 'Entrepreneurship', 'Career Guidance']
    },
    {
      name: 'MAHILA VIKAS',
      translation: 'Women Development',
      description: 'Empowering women through skill training, self-help groups, financial literacy, and entrepreneurship support.',
      stats: { villages: 450, 'total women empowered': 11726 },
      images: [
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800',
        'https://images.unsplash.com/photo-1616674202799-054e7c831378?w=800',
        'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?w=800',
      ],
      sections: [
        'Skill training programs in tailoring, handicrafts, and traditional arts to enable economic independence.',
        'Self-help group formation for collective savings, micro-credit access, and community support.',
        'Financial literacy workshops covering budgeting, banking, and digital payment systems.',
      ],
      highlights: ['Skill Training', 'Self-Help Groups', 'Financial Literacy', 'Economic Independence']
    },
    {
      name: 'VIDYA VIKAS',
      translation: 'Education Development',
      description: 'Ensuring quality education for every child through scholarships, after-school support, and learning materials.',
      stats: { students: 8500, villages: 95, programs: 52, beneficiaries: 12000 },
      images: [
        'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800',
        'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
      ],
      sections: [
        'Scholarship programs for underprivileged students to ensure continued access to education.',
        'After-school tutoring and mentorship support to strengthen learning outcomes.',
        'Distribution of learning materials, books, and digital resources to enhance educational quality.',
      ],
      highlights: ['Scholarships', 'Tutoring Support', 'Learning Materials', 'Digital Resources']
    },
    {
      name: 'SENA VIKAS',
      translation: 'Service Development',
      description: 'Creating a network of community volunteers and service providers who work together to address local challenges.',
      stats: { beneficiaries: 2800, villages: 75, programs: 38, families: 1500 },
      images: [
        'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800',
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
        'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800',
      ],
      sections: [
        'Building volunteer networks to address community needs through collective action and service.',
        'Training community leaders in conflict resolution, problem-solving, and project management.',
        'Coordinating health camps, awareness drives, and social welfare initiatives across villages.',
      ],
      highlights: ['Community Volunteers', 'Local Leadership', 'Health Camps', 'Social Welfare']
    },
    {
      name: 'UDYAM VIKAS',
      translation: 'Enterprise Development',
      description: 'Supporting rural entrepreneurs with training, financial linkages, market access, and mentorship.',
      stats: { enterprises: 680, beneficiaries: 1850, villages: 110, programs: 45 },
      images: [
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      ],
      sections: [
        'Business development training covering planning, marketing, finance, and operations management.',
        'Financial linkage programs connecting entrepreneurs with banks, microfinance institutions, and investors.',
        'Market access support through product development, branding, and distribution networks.',
      ],
      highlights: ['Business Training', 'Financial Linkages', 'Market Access', 'Mentorship']
    },
    {
      name: 'SAMAJ VIKAS',
      translation: 'Social Development',
      description: 'Strengthening community bonds through cultural programs, social awareness campaigns, and health initiatives.',
      stats: { beneficiaries: 18000, villages: 180, programs: 92, families: 4500 },
      images: [
        'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800',
        'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800',
        'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800',
      ],
      sections: [
        'Cultural programs celebrating local traditions, festivals, and arts to strengthen community identity.',
        'Social awareness campaigns on health, hygiene, education, and women empowerment.',
        'Community health initiatives including medical camps, nutrition programs, and preventive care.',
      ],
      highlights: ['Cultural Programs', 'Awareness Campaigns', 'Health Initiatives', 'Community Building']
    },
    {
      name: 'PRAKRUTI VIKAS',
      translation: 'Nature Development',
      description: 'Promoting environmental conservation through tree plantation, water management, and organic farming practices.',
      stats: { villages: 135, programs: 58, beneficiaries: 6500, families: 3200 },
      images: [
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
        'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800',
        'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
      ],
      sections: [
        'Large-scale tree plantation drives to combat deforestation and improve air quality.',
        'Water conservation programs including rainwater harvesting and watershed management.',
        'Organic farming training promoting chemical-free agriculture and sustainable practices.',
      ],
      highlights: ['Tree Plantation', 'Water Conservation', 'Organic Farming', 'Sustainability']
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const isPaused = hoveredCircle !== null || expandedCircle !== null;

  return (
    <section
      ref={sectionRef}
      className="section-light-blend relative px-4 py-12 sm:px-6 sm:py-16 md:py-24 overflow-hidden"
    >
      <style>{`
        @keyframes orbit-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes orbit-spin-reverse {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        .glass-panel {
          background: var(--glass-background);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          box-shadow: var(--shadow-soft);
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <div className="mb-12 sm:mb-16 md:mb-20 text-center relative z-20">
          <motion.h2
            className="mb-3 sm:mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 6vw, 2.5rem)', fontWeight: 700, color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Our Development Pillars
          </motion.h2>
          <motion.p
            className="px-4"
            style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Click any circle to explore in detail
          </motion.p>
        </div>

        {/* Orbit System Container */}
        <div className="relative mx-auto flex h-[750px] sm:h-[850px] md:h-[1000px] w-full max-w-6xl items-center justify-center pointer-events-none">
          
          <div className="relative w-full h-full max-w-[800px] max-h-[800px] scale-[0.6] sm:scale-[0.8] md:scale-100 origin-center">
            
            {/* Center Circle (Strictly Locked) */}
            <div
              className="absolute z-40 flex items-center justify-center rounded-full pointer-events-auto glass-panel"
              style={{
                width: '140px', height: '140px',
                left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
                boxShadow: 'var(--shadow-medium)',
                background: 'var(--button-gradient)',
              }}
            >
              <p
                className="uppercase text-center px-2"
                style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 800, letterSpacing: '0.02em', lineHeight: '1.3', color: 'var(--text-primary)' }}
              >
                GRAM<br/>VIKAS
              </p>
            </div>

            {/* Orbit Wrapper (Rotates 360deg) */}
            <div
              className="absolute left-1/2 top-1/2 w-0 h-0 z-30"
              style={{
                animation: 'orbit-spin 25s linear infinite',
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              {vikasPrograms.map((program, index) => {
                const radius = 280; // Distance from center
                const angleInRadians = ((index * 360) / vikasPrograms.length - 90) * (Math.PI / 180);
                const x = Math.cos(angleInRadians) * radius;
                const y = Math.sin(angleInRadians) * radius;

                // Popups Outward logic
                const popupRadius = 150;
                const dx_num = Math.cos(angleInRadians) * popupRadius;
                const dy_num = Math.sin(angleInRadians) * popupRadius;
                
                const perpAngle = angleInRadians + Math.PI / 2;
                const spacing = 110;
                const dx_info = dx_num + Math.cos(perpAngle) * -spacing;
                const dy_info = dy_num + Math.sin(perpAngle) * -spacing;
                const dx_view = dx_num + Math.cos(perpAngle) * spacing;
                const dy_view = dy_num + Math.sin(perpAngle) * spacing;

                const isHovered = hoveredCircle === index;

                return (
                  <div key={program.name} className="absolute" style={{ left: x, top: y }}>
                    
                    {/* Inner Counter-Rotating Wrapper for Main Circle */}
                    <div
                      className="absolute"
                      style={{
                        animation: 'orbit-spin-reverse 25s linear infinite',
                        animationPlayState: isPaused ? 'paused' : 'running'
                      }}
                    >
                      <motion.div
                        className="flex flex-col items-center justify-center rounded-full cursor-pointer pointer-events-auto relative z-20"
                        style={{
                          width: '120px', height: '120px',
                          background: isHovered ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.15)',
                          backdropFilter: isHovered ? 'blur(20px)' : 'blur(12px)',
                          WebkitBackdropFilter: isHovered ? 'blur(20px)' : 'blur(12px)',
                          border: isHovered ? '1px solid rgba(255, 255, 255, 0.6)' : '1px solid rgba(255, 255, 255, 0.25)',
                          boxShadow: isHovered
                            ? '0 0 24px rgba(255, 255, 255, 0.5), inset 0 2px 8px rgba(255, 255, 255, 0.8)'
                            : '0 4px 16px rgba(0, 0, 0, 0.05), inset 0 2px 4px rgba(255, 255, 255, 0.4)',
                        }}
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ duration: 0.3 }}
                        onMouseEnter={() => setHoveredCircle(index)}
                        onMouseLeave={() => setHoveredCircle(null)}
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedCircle(index);
                          setHoveredCircle(null);
                        }}
                      >
                        <div className="relative z-10 text-center px-2">
                          <p className="mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.8rem', fontWeight: 700, lineHeight: '1.2', color: 'var(--text-primary)' }}>
                            {program.name}
                          </p>
                          <p className="font-medium" style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '0.65rem', color: 'var(--text-secondary)' }}>
                            {program.translation}
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Popups in Rotating Space, with inner Counter-Rotating Wrappers */}
                    {/* Info Popup */}
                    <div className="absolute" style={{ left: dx_info, top: dy_info, zIndex: 10 }}>
                      <div
                        className="absolute"
                        style={{
                          animation: 'orbit-spin-reverse 25s linear infinite',
                          animationPlayState: isPaused ? 'paused' : 'running'
                        }}
                      >
                        <motion.div
                          className="flex flex-col items-center justify-center rounded-full p-3 pointer-events-none glass-panel"
                          style={{ width: '95px', height: '95px' }}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-primary)' }}>INFO</p>
                          <p className="text-center leading-tight" style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '0.55rem', color: 'var(--text-secondary)' }}>
                            {program.description.substring(0, 45)}...
                          </p>
                        </motion.div>
                      </div>
                    </div>

                    {/* Numbers Popup */}
                    <div className="absolute" style={{ left: dx_num, top: dy_num, zIndex: 10 }}>
                      <div
                        className="absolute"
                        style={{
                          animation: 'orbit-spin-reverse 25s linear infinite',
                          animationPlayState: isPaused ? 'paused' : 'running'
                        }}
                      >
                        <motion.div
                          className="flex flex-col items-center justify-center rounded-full p-2 pointer-events-none glass-panel"
                          style={{ width: '95px', height: '95px' }}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.5 }}
                          transition={{ duration: 0.3, delay: 0.05 }}
                        >
                          {Object.entries(program.stats).slice(0, 2).map(([key, value]) => (
                            <div key={key} className="text-center mb-1 last:mb-0">
                              <p className="bg-white/40 px-1.5 rounded" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                                {value.toLocaleString()}
                              </p>
                              <p className="capitalize" style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '0.5rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                                {key}
                              </p>
                            </div>
                          ))}
                        </motion.div>
                      </div>
                    </div>

                    {/* View More Popup */}
                    <div className="absolute" style={{ left: dx_view, top: dy_view, zIndex: 15 }}>
                      <div
                        className="absolute"
                        style={{
                          animation: 'orbit-spin-reverse 25s linear infinite',
                          animationPlayState: isPaused ? 'paused' : 'running'
                        }}
                      >
                        <motion.button
                          className="flex flex-col items-center justify-center rounded-full pointer-events-auto glass-panel transition-colors"
                          style={{ width: '95px', height: '95px', cursor: isHovered ? 'pointer' : 'default' }}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.5 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          onClick={(e) => {
                            if (isHovered) {
                              e.stopPropagation();
                              setExpandedCircle(index);
                              setHoveredCircle(null);
                            }
                          }}
                        >
                          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                            VIEW<br/>MORE
                          </p>
                        </motion.button>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Expanded View Overlay */}
        <AnimatePresence>
          {expandedCircle !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto"
              style={{ background: 'rgba(0, 0, 0, 0.5)' }}
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setExpandedCircle(null)}
            >
              <motion.div
                className="relative w-full h-full overflow-y-auto"
                style={{
                  background: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  boxShadow: 'var(--shadow-soft)'
                }}
                initial={{ scale: 0, borderRadius: '50%' }}
                animate={{ scale: 1, borderRadius: '0%' }}
                exit={{ scale: 0, borderRadius: '50%' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
                  <button
                    onClick={() => setExpandedCircle(null)}
                    className="glass-card fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-200"
                    style={{ backdropFilter: 'blur(10px)' }}
                  >
                    <X size={28} style={{ color: 'var(--text-primary)' }} />
                  </button>

                  <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h1 className="mb-3" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, letterSpacing: '0.01em', color: 'var(--text-primary)' }}>
                      {vikasPrograms[expandedCircle].name}
                    </h1>
                    <p className="font-medium mb-6" style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: 'var(--text-secondary)' }}>
                      {vikasPrograms[expandedCircle].translation}
                    </p>
                    <div className="glass-card max-w-3xl mx-auto p-6">
                      <p className="leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: 'var(--text-secondary)' }}>
                        {vikasPrograms[expandedCircle].description}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="grid gap-4 mb-12 justify-center"
                    style={{
                      gridTemplateColumns: Object.keys(vikasPrograms[expandedCircle].stats).length <= 2
                        ? 'repeat(2, minmax(200px, 280px))'
                        : 'repeat(auto-fit, minmax(180px, 1fr))'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {Object.entries(vikasPrograms[expandedCircle].stats).map(([key, value]) => (
                      <div key={key} className="glass-card p-5 text-center">
                        <div
                          className="mb-2 px-3 py-1 rounded-lg inline-block"
                          style={{
                            background: 'var(--button-gradient)',
                            boxShadow: 'var(--shadow-soft)',
                          }}
                        >
                          <p
                            style={{
                              fontFamily: 'Poppins, sans-serif',
                              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                              fontWeight: 800,
                              color: 'var(--text-primary)',
                            }}
                          >
                            {value.toLocaleString()}<span style={{ fontSize: '0.7em', fontWeight: 700 }}>+</span>
                          </p>
                        </div>
                        <p className="capitalize font-semibold" style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 'clamp(0.85rem, 2vw, 1rem)', color: 'var(--text-secondary)' }}>
                          {key}
                        </p>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Key Highlights
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {vikasPrograms[expandedCircle].highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          className="glass-card px-4 py-3 text-center"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                        >
                          <p className="font-semibold" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(0.85rem, 2vw, 1rem)', color: 'var(--text-primary)' }}>
                            {highlight}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Program Details
                    </h2>
                    <div className="space-y-5">
                      {vikasPrograms[expandedCircle].sections.map((section, idx) => (
                        <motion.div
                          key={idx}
                          className="glass-card p-6"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                        >
                          <p className="leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', color: 'var(--text-secondary)' }}>
                            {section}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Gallery
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {vikasPrograms[expandedCircle].images.map((image, idx) => (
                        <motion.div
                          key={idx}
                          className="overflow-hidden rounded-2xl border-2 border-white/50 shadow-lg"
                          style={{ backdropFilter: 'blur(8px)', background: 'rgba(255, 255, 255, 0.3)' }}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                        >
                          <img
                            src={image}
                            alt={`${vikasPrograms[expandedCircle].name} - Image ${idx + 1}`}
                            className="w-full h-[250px] sm:h-[300px] object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
