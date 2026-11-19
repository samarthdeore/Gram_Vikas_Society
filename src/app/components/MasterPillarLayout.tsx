import { motion, useScroll, useTransform } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowLeft, MapPin } from "lucide-react";
import CountUp from "react-countup";
import { useRef } from "react";

export interface PillarData {
  titleStart: string;
  titleHighlight: string;
  subtitle: string;
  heroImage: string;
  heroIcon: any;
  missionTitle: string;
  missionValue: string;
  missionSubtitle: string;
  sections: Array<{
    titleStart: string;
    titleHighlight: string;
    description: string;
    layout: 'style-1' | 'style-2' | 'style-3' | 'simple';
    images: string[];
    badge?: {
      icon: any;
      title: string;
      subtitle: string;
    };
    location?: string;
  }>;
  milestonesTitle?: string;
  milestonesSubtitle?: string;
  milestones: Array<{
    end: number | null;
    textValue?: string;
    label: string;
    icon: any;
  }>;
}

export function MasterPillarLayout({ data }: { data: PillarData }) {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const HeroIcon = data.heroIcon;

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FFFDF9] overflow-hidden font-sans text-[#2C3625]">
      
      {/* Back Button */}
      <div className="fixed top-8 left-6 md:left-12 z-50">
        <button 
          onClick={() => navigate('/#pillars')} 
          className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-all font-medium bg-black/20 hover:bg-black/40 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.12)] group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="tracking-wide text-sm">Back</span>
        </button>
      </div>

      {/* ==================================================== */}
      {/* ULTRA PREMIUM HERO SECTION */}
      {/* ==================================================== */}
      <div className="relative w-full h-[95vh] md:h-screen bg-[#1E3F20] rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden shadow-2xl">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 w-full h-full">
          <img 
            src={data.heroImage} 
            alt={`${data.titleStart} Hero`} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#1E3F20]/60 to-[#122614] mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#122614] via-transparent to-transparent"></div>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute z-10 text-[#F4B41A]/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              scale: 0.5 + Math.random() * 1
            }}
          >
            {HeroIcon && <HeroIcon size={32} />}
          </motion.div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 uppercase tracking-[0.3em] text-xs font-bold mb-8">
              {HeroIcon && <HeroIcon size={16} className="text-[#F4B41A]" />}
              Gram Vikas Society
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tight drop-shadow-2xl mb-6">
              {data.titleStart} <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4B41A] to-[#F3E5AB]">{data.titleHighlight}</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed tracking-wide drop-shadow-md">
              “{data.subtitle}”
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
        >
          <span className="text-white/60 text-xs uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="w-10 h-16 rounded-full border-2 border-white/30 flex justify-center p-2 backdrop-blur-sm bg-white/5">
            <motion.div className="w-1.5 h-3 bg-[#F4B41A] rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
        
        {/* ==================================================== */}
        {/* SECTIONS RENDERING */}
        {/* ==================================================== */}
        {data.sections.map((section, idx) => {
          
          if (section.layout === 'style-1') {
            const BadgeIcon = section.badge?.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}
                className="pt-32 pb-20"
              >
                <div className="mb-16">
                  <h2 className="text-4xl md:text-6xl font-black text-[#1E3F20] tracking-tight uppercase mb-6">
                    {section.titleStart} <span className="text-[#D49A11]">{section.titleHighlight}</span>
                  </h2>
                  <div className="w-24 h-2 bg-gradient-to-r from-[#1E3F20] to-[#F4B41A] rounded-full mb-8"></div>
                  <p className="text-xl md:text-2xl text-[#4A5D4E] font-medium leading-relaxed max-w-4xl border-l-4 border-[#1E3F20]/20 pl-6 py-2">
                    “{section.description}”
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
                  <div className="lg:col-span-7 relative h-[400px] lg:h-[700px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(30,63,32,0.15)] group">
                    <img src={section.images[0] || data.heroImage} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E3F20]/80 via-transparent to-transparent opacity-60"></div>
                  </div>

                  <div className="lg:col-span-5 grid grid-rows-3 gap-6 h-[700px] lg:h-[700px]">
                    <div className="row-span-2 relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(30,63,32,0.12)] group">
                      <img src={section.images[1] || data.heroImage} alt="Supporting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
                    </div>
                    <div className="row-span-1 grid grid-cols-2 gap-6">
                      <div className="relative rounded-[2rem] overflow-hidden shadow-lg group">
                        <img src={section.images[2] || data.heroImage} alt="Supporting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
                      </div>
                      <div className="relative rounded-[2rem] overflow-hidden shadow-lg group">
                        <img src={section.images[3] || data.heroImage} alt="Supporting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
                      </div>
                    </div>
                  </div>

                  {section.badge && (
                    <motion.div 
                      animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-[55%] lg:-translate-x-1/2 z-30 w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full bg-white/70 backdrop-blur-2xl border border-white shadow-[0_30px_80px_rgba(30,63,32,0.2)] p-8 md:p-12 flex flex-col items-center justify-center text-center group hover:bg-white/90 transition-colors duration-500"
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F4B41A]/10 to-[#1E3F20]/5 animate-spin-slow"></div>
                      {BadgeIcon && <BadgeIcon size={40} className="text-[#1E3F20] mb-4 relative z-10" />}
                      <h4 className="text-2xl md:text-3xl font-black text-[#1E3F20] uppercase tracking-wider mb-4 relative z-10">{section.badge.title}</h4>
                      <p className="text-sm md:text-base text-[#4A5D4E] font-medium leading-relaxed relative z-10 px-2">
                        “{section.badge.subtitle}”
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          }

          if (section.layout === 'style-2') {
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}
                className="pt-20 pb-32"
              >
                <div className="flex flex-col lg:flex-row items-center gap-16 relative">
                  
                  <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px]">
                    <div className="absolute top-0 left-0 w-3/4 h-[70%] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(30,63,32,0.2)] z-10">
                      <img src={section.images[0] || data.heroImage} alt="Collage" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-2/3 h-[60%] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(30,63,32,0.3)] border-8 border-[#FFFDF9] z-20">
                      <img src={section.images[1] || data.heroImage} alt="Collage" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#F4B41A]/30 rounded-full blur-[100px] z-0"></div>
                  </div>

                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-6xl font-black text-[#1E3F20] tracking-tight uppercase mb-6">
                      {section.titleStart} <span className="text-[#D49A11]">{section.titleHighlight}</span>
                    </h2>
                    <div className="w-24 h-2 bg-gradient-to-r from-[#1E3F20] to-[#F4B41A] rounded-full mb-8"></div>
                    
                    <div className="bg-white/50 backdrop-blur-xl border border-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(30,63,32,0.08)] relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F4B41A]/20 to-transparent rounded-bl-full"></div>
                      {HeroIcon && <HeroIcon size={32} className="text-[#1E3F20] mb-6" />}
                      <p className="text-xl md:text-2xl text-[#4A5D4E] font-medium leading-relaxed relative z-10 italic">
                        “{section.description}”
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-8">
                      <div className="relative h-48 rounded-[2rem] overflow-hidden shadow-lg group">
                        <img src={section.images[2] || data.heroImage} alt="Activities" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
                      </div>
                      <div className="relative h-48 rounded-[2rem] overflow-hidden shadow-lg group bg-[#1E3F20] flex flex-col justify-center items-center text-center p-6 border border-[#1E3F20]/50">
                        <MapPin size={28} className="text-[#F4B41A] mb-3" />
                        <span className="text-white font-bold tracking-widest uppercase text-sm">{section.location || "Multiple Locations"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          }

          if (section.layout === 'style-3') {
            const BadgeIcon = section.badge?.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}
                className="pt-10 pb-20 relative"
              >
                <div className="absolute top-0 right-0 w-full h-[80%] bg-gradient-to-b from-[#1E3F20]/5 to-transparent rounded-[4rem] -z-10"></div>
                
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                  <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(30,63,32,0.15)] group mt-0 md:mt-12">
                      <img src={section.images[0] || data.heroImage} alt="Gallery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
                    </div>
                    <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(30,63,32,0.15)] group">
                      <img src={section.images[1] || data.heroImage} alt="Gallery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
                    </div>
                    
                    {section.badge && (
                      <motion.div 
                        animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-[#1E3F20] to-[#122614] rounded-full shadow-[0_20px_50px_rgba(30,63,32,0.4)] border-4 border-white flex flex-col items-center justify-center text-center p-6 z-30"
                      >
                        {BadgeIcon && <BadgeIcon size={32} className="text-[#F4B41A] mb-2" />}
                        <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-wider mb-1">{section.badge.title}</h4>
                        <p className="text-white/80 text-xs md:text-sm font-bold uppercase tracking-widest">{section.badge.subtitle}</p>
                      </motion.div>
                    )}
                  </div>

                  <div className="w-full lg:w-2/5">
                    <h2 className="text-4xl md:text-6xl font-black text-[#1E3F20] tracking-tight uppercase mb-6">
                      {section.titleStart} <span className="text-[#D49A11]">{section.titleHighlight}</span>
                    </h2>
                    <div className="w-24 h-2 bg-gradient-to-r from-[#1E3F20] to-[#F4B41A] rounded-full mb-8"></div>
                    
                    <div className="bg-white/80 backdrop-blur-2xl border border-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(30,63,32,0.08)] relative">
                      {HeroIcon && <HeroIcon size={48} className="text-[#F4B41A]/20 absolute top-8 right-8" />}
                      <p className="text-lg md:text-xl text-[#4A5D4E] font-medium leading-relaxed relative z-10">
                        “{section.description}”
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          }

          // Fallback / simple layout
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}
              className="pt-20 pb-20"
            >
              <div className="mb-12">
                <h2 className="text-4xl md:text-6xl font-black text-[#1E3F20] tracking-tight uppercase mb-6">
                  {section.titleStart} <span className="text-[#D49A11]">{section.titleHighlight}</span>
                </h2>
                <div className="w-24 h-2 bg-gradient-to-r from-[#1E3F20] to-[#F4B41A] rounded-full mb-8"></div>
              </div>
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="w-full lg:w-1/2">
                  <div className="bg-white/50 backdrop-blur-xl border border-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(30,63,32,0.08)]">
                    <p className="text-xl md:text-2xl text-[#4A5D4E] font-medium leading-relaxed">
                      “{section.description}”
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(30,63,32,0.2)]">
                    <img src={section.images[0] || data.heroImage} alt="Featured" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* ==================================================== */}
        {/* PROJECT MILESTONES (Ultra Premium Animated Cards) */}
        {/* ==================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1 }}
          className="pt-24 pb-12"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#1E3F20] uppercase tracking-widest drop-shadow-sm mb-4">
              {data.milestonesTitle || "Project Milestones"}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#F4B41A] to-[#1E3F20] mx-auto rounded-full"></div>
            <p className="mt-6 text-[#4A5D4E] font-medium tracking-wide">
              {data.milestonesSubtitle || "Transforming our communities through measurable impact."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {data.milestones.map((stat, idx) => {
              const Icon = stat.icon || HeroIcon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10, scale: 1.02 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 shadow-[0_15px_40px_rgba(30,63,32,0.06)] border border-white relative overflow-hidden group cursor-default"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] to-transparent opacity-50"></div>
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-bl from-[#F4B41A]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    {Icon && <Icon size={32} className="text-[#D49A11] mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />}
                    
                    <div>
                      {stat.end !== null && stat.end !== undefined ? (
                        <div className="text-5xl md:text-6xl font-black text-[#1E3F20] tracking-tight mb-2 font-sans group-hover:text-[#D49A11] transition-colors">
                          <CountUp end={stat.end} duration={2.5} separator="," enableScrollSpy scrollSpyOnce />
                        </div>
                      ) : (
                        <div className="text-5xl md:text-6xl font-black text-[#1E3F20] tracking-tight mb-2 font-sans group-hover:text-[#D49A11] transition-colors uppercase">
                          {stat.textValue}
                        </div>
                      )}
                      
                      <div className="text-[#4A5D4E] font-bold text-sm md:text-base uppercase tracking-widest border-t border-[#1E3F20]/10 pt-4 mt-4">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>

      {/* ==================================================== */}
      {/* ULTRA PREMIUM FOOTER */}
      {/* ==================================================== */}
      <div className="bg-[#122614] w-full pt-24 pb-12 text-[#FFFDF9] font-sans relative z-30 rounded-t-[3rem] md:rounded-t-[5rem] mt-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#F4B41A]/30 to-transparent blur-sm"></div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-3">
              {HeroIcon && <HeroIcon size={32} className="text-[#F4B41A]" />}
              <h3 className="text-[#FFFDF9] text-2xl font-black uppercase tracking-widest">
                Gram Vikas <br/> Society
              </h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs font-medium">
              Empowering communities and sustaining the environment for a better tomorrow, rooted in deep heritage and global vision.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#F4B41A] mb-6">Corporate Office</h4>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs font-light tracking-wide">
              #123 Corporate Tower, Phase 1,<br/>
              Industrial Area, Hubballi,<br/>
              Karnataka, India
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#F4B41A] mb-6">Head Office</h4>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs font-light tracking-wide">
              GVS Bhavan, Main Road,<br/>
              Dharwad District,<br/>
              Karnataka, India
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#F4B41A] mb-6">Operations & Contact</h4>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs mb-6 font-light tracking-wide">
              Block C, Operations Wing,<br/>
              Dharwad, Karnataka
            </p>
            <div className="space-y-2">
              <p className="text-white font-bold text-sm tracking-widest transition-colors hover:text-[#F4B41A] cursor-pointer">
                info@gramvikassociety.org
              </p>
              <p className="text-white font-bold text-sm tracking-widest transition-colors hover:text-[#F4B41A] cursor-pointer">
                +91 800 000 0000
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-xs font-medium tracking-widest uppercase">
            © {new Date().getFullYear()} Gram Vikas Society.
          </div>
          <div className="text-white/40 text-xs font-medium tracking-widest uppercase">
            All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}