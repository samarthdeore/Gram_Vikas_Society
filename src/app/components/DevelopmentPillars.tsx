import { motion } from "motion/react";
import { useNavigate } from "react-router";
import {
  Leaf,
  GraduationCap,
  Sprout,
  User,
  BookOpen,
  Shield,
  Briefcase,
  Users,
  ArrowRight
} from "lucide-react";

const pillars = [
  {
    id: "prakruti-vikas",
    num: "01",
    name: "Prakruti Vikas",
    icon: Leaf,
    path: "/programs/prakruti-vikas",
    color: "from-[#C63D0F] to-[#FF6B35]"
  },
  {
    id: "guru-vikas",
    num: "02",
    name: "Guru Vikas",
    icon: GraduationCap,
    path: "/programs/guru-vikas",
    color: "from-[#FF6B35] to-[#FF8C42]"
  },
  {
    id: "yuva-vikas",
    num: "03",
    name: "Yuva Vikas",
    icon: Sprout,
    path: "/programs/yuva-vikas",
    color: "from-[#FF8C42] to-[#FFAB4C]"
  },
  {
    id: "mahila-vikas",
    num: "04",
    name: "Mahila Vikas",
    icon: User,
    path: "/programs/mahila-vikas",
    color: "from-[#FFAB4C] to-[#FFC857]"
  },
  {
    id: "vidya-vikas",
    num: "05",
    name: "Vidya Vikas",
    icon: BookOpen,
    path: "/programs/vidya-vikas",
    color: "from-[#FFC857] to-[#FFD75E]"
  },
  {
    id: "sena-vikas",
    num: "06",
    name: "Sena Vikas",
    icon: Shield,
    path: "/programs/sena-vikas",
    color: "from-[#FFD75E] to-[#FFE66D]"
  },
  {
    id: "udyam-vikas",
    num: "07",
    name: "Udyam Vikas",
    icon: Briefcase,
    path: "/programs/udyam-vikas",
    color: "from-[#FFE66D] to-[#FFF176]"
  },
  {
    id: "samaj-vikas",
    num: "08",
    name: "Samaj Vikas",
    icon: Users,
    path: "/programs/samaj-vikas",
    color: "from-[#FFF176] to-[#FFC107]"
  }
];

export function DevelopmentPillars() {
  const navigate = useNavigate();
  // We use different radii for desktop vs tablet to prevent cutting off
  // We'll calculate the positions inline to allow responsive radius
  
  return (
    <section id="pillars" className="w-full px-4 md:px-8 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#3E2723] mb-6"
          >
            Development Pillars
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#5D4037] max-w-2xl mx-auto text-lg md:text-xl font-medium"
          >
            Eight comprehensive pillars driving holistic transformation in rural communities.
          </motion.p>
        </div>

        {/* Desktop & Tablet Circular Layout Container */}
        <div className="hidden md:flex relative w-full items-center justify-center min-h-[600px] lg:min-h-[800px] py-10">
          
          <div className="relative w-[460px] h-[460px] lg:w-[640px] lg:h-[640px] flex items-center justify-center">
            {/* Center Logo/Title */}
            <div className="absolute z-20 pointer-events-none flex items-center justify-center">
              <div className="w-40 h-40 lg:w-56 lg:h-56 rounded-full bg-white/95 backdrop-blur-2xl border border-white/80 shadow-[0_15px_40px_rgba(245,124,0,0.15),inset_0_4px_10px_rgba(255,255,255,1)] flex items-center justify-center p-4 lg:p-6 text-center pointer-events-auto transition-all duration-300">
                <p className="text-lg lg:text-2xl font-black bg-gradient-to-r from-[#C63D0F] to-[#FFC107] bg-clip-text text-transparent uppercase tracking-wider leading-snug">
                  GRAM VIKAS<br />SOCIETY
                </p>
              </div>
            </div>

            {/* Orbit Path Decoration - responsive sizes using SVG viewbox */}
            <div className="absolute inset-0 pointer-events-none opacity-30 z-[5]">
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="overflow-visible">
                <circle cx="50" cy="50" r="50" fill="none" stroke="url(#gradient)" strokeWidth="0.3" strokeDasharray="1.5 1.5" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C63D0F" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#FFC107" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Circular Elements */}
            {pillars.map((pillar, index) => {
              const angle = (index * 360) / pillars.length - 90;
              const radian = (angle * Math.PI) / 180;
              // using percentages for positioning allows responsive scaling
              const leftPercent = 50 + 50 * Math.cos(radian);
              const topPercent = 50 + 50 * Math.sin(radian);

              return (
                <div
                  key={pillar.id}
                  className="absolute"
                  style={{
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    onClick={() => navigate(pillar.path)}
                    className="relative cursor-pointer z-10 group"
                  >
                    {/* Hover Info */}
                    <div className="absolute -top-14 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none z-50">
                      <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white text-[#C63D0F] font-black text-xs flex items-center justify-center shadow-[0_4px_15px_rgba(245,124,0,0.15)] border border-[#FFE082]/30">
                        {pillar.num}
                      </div>
                      <div className="px-3 lg:px-4 py-1 lg:py-1.5 rounded-full bg-gradient-to-r from-[#C63D0F] to-[#FFB300] text-white text-[10px] lg:text-xs font-bold uppercase tracking-widest shadow-[0_4px_15px_rgba(245,124,0,0.2)] whitespace-nowrap border border-white/20">
                        View
                      </div>
                    </div>

                    {/* Main Pillar Circle */}
                    <div className="transform transition-transform duration-300 ease-out group-hover:scale-105">
                      <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-[#FFC107] to-[#C63D0F] p-[2px] shadow-[0_10px_25px_rgba(245,124,0,0.2)] group-hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] transition-shadow duration-300 relative overflow-visible">
                        <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-md flex flex-col items-center justify-center p-2 lg:p-3 relative overflow-hidden group-hover:bg-white/30 transition-colors duration-300">
                          <pillar.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white drop-shadow-md mb-1 lg:mb-2 relative z-10" strokeWidth={2} />
                          <p className="text-[10px] lg:text-xs font-bold text-white text-center leading-tight drop-shadow-md relative z-10 px-1">
                            {pillar.name}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Grid Layout Container (2 Columns) */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => navigate(pillar.path)}
              className="relative cursor-pointer group"
            >
              <div className="w-full aspect-square rounded-[2rem] bg-gradient-to-br from-[#FFC107] to-[#C63D0F] p-[2px] shadow-[0_8px_20px_rgba(245,124,0,0.15)] group-hover:shadow-[0_0_25px_rgba(255,193,7,0.4)] transition-shadow duration-300">
                <div className="w-full h-full rounded-[calc(2rem-2px)] bg-white/20 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center group-hover:bg-white/30 transition-colors duration-300">
                  <div className="w-12 h-12 mb-3 rounded-full bg-white/30 flex items-center justify-center shadow-inner">
                    <pillar.icon size={24} className="text-white drop-shadow-md" strokeWidth={2} />
                  </div>
                  <span className="text-white/90 text-xs font-bold tracking-wider mb-1">{pillar.num}</span>
                  <p className="text-sm font-bold text-white drop-shadow-md leading-tight">
                    {pillar.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}