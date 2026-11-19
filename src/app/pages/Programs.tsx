import { motion } from "motion/react";
import { NavLink } from "react-router";
import {
  TreePine,
  GraduationCap,
  Users,
  Heart,
  BookOpen,
  Shield,
  Briefcase,
  Handshake,
  ArrowRight
} from "lucide-react";

const pillars = [
  {
    id: 1,
    name: "Prakruti Vikas",
    tagline: "Nature Development",
    icon: TreePine,
    desc: "Comprehensive environmental conservation programs focusing on afforestation, biodiversity protection, and natural resource management for sustainable ecosystems.",
    color: "from-[#C63D0F] to-[#FF6B35]",
    path: "/programs/prakruti-vikas"
  },
  {
    id: 2,
    name: "Guru Vikas",
    tagline: "Teacher Development",
    icon: GraduationCap,
    desc: "Empowering educators through training, skill enhancement, and continuous professional development to build quality learning environments in rural schools.",
    color: "from-[#FF6B35] to-[#FF8C42]",
    path: "/programs/guru-vikas"
  },
  {
    id: 3,
    name: "Yuva Vikas",
    tagline: "Youth Development",
    icon: Users,
    desc: "Nurturing young leaders through skill development, vocational training, leadership programs, and innovation initiatives for rural youth empowerment.",
    color: "from-[#FF8C42] to-[#FFAB4C]",
    path: "/programs/yuva-vikas"
  },
  {
    id: 4,
    name: "Mahila Vikas",
    tagline: "Women Empowerment",
    icon: Heart,
    desc: "Promoting women's empowerment through self-help groups, entrepreneurship training, financial literacy, and leadership development in rural communities.",
    color: "from-[#FFAB4C] to-[#FFC857]",
    path: "/programs/mahila-vikas"
  },
  {
    id: 5,
    name: "Vidya Vikas",
    tagline: "Education Development",
    icon: BookOpen,
    desc: "Ensuring quality education access through school infrastructure, scholarships, digital literacy programs, and innovative teaching methodologies.",
    color: "from-[#FFC857] to-[#FFD75E]",
    path: "/programs/vidya-vikas"
  },
  {
    id: 6,
    name: "Sena Vikas",
    tagline: "Community Resilience",
    icon: Shield,
    desc: "Building disaster-resilient communities through preparedness training, safety infrastructure, and rapid response systems for rural areas.",
    color: "from-[#FFD75E] to-[#FFE66D]",
    path: "/programs/sena-vikas"
  },
  {
    id: 7,
    name: "Udyam Vikas",
    tagline: "Enterprise Development",
    icon: Briefcase,
    desc: "Fostering entrepreneurship and sustainable livelihoods through business training, microfinance support, and market linkage programs.",
    color: "from-[#FFE66D] to-[#FFF176]",
    path: "/programs/udyam-vikas"
  },
  {
    id: 8,
    name: "Samaj Vikas",
    tagline: "Social Support",
    icon: Handshake,
    desc: "Comprehensive social support systems including healthcare access, community welfare programs, and support for vulnerable populations.",
    color: "from-[#FFF176] to-[#FFC107]",
    path: "/programs/samaj-vikas"
  },
];

export function Programs() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black text-neutral-900 mb-6 tracking-tight"
        >
          Development <span className="bg-gradient-to-r from-[#C63D0F] to-[#FFC107] bg-clip-text text-transparent">Pillars</span>
        </motion.h1>
        <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
          Explore the 8 comprehensive pillars driving holistic transformation across rural India.
        </p>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative"
          >
            <NavLink to={pillar.path}>
              <div className="relative p-8 rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-white shadow-[0_10px_35px_rgba(198,61,15,0.08),inset_0_2px_4px_rgba(255,255,255,0.8)] hover:shadow-[0_25px_60px_rgba(198,61,15,0.2),inset_0_2px_4px_rgba(255,255,255,1)] transition-all duration-300 overflow-hidden h-full">
                {/* Background gradient accent */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${pillar.color} opacity-10 rounded-bl-[6rem] pointer-events-none transition-opacity duration-300 group-hover:opacity-20`}></div>

                {/* Icon */}
                <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.color} p-[2px] shadow-[0_10px_25px_rgba(198,61,15,0.25)] mb-6 group-hover:shadow-[0_15px_35px_rgba(198,61,15,0.35)] transition-all duration-300`}>
                  <div className="w-full h-full rounded-[14px] bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/40 shadow-[inset_0_2px_6px_rgba(255,255,255,0.6)]">
                    <pillar.icon className="text-white" size={32} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-2">
                    <span className="text-sm font-bold text-neutral-500 uppercase tracking-wider">
                      {pillar.tagline}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-neutral-900 mb-4 group-hover:text-[#C63D0F] transition-colors">
                    {pillar.name}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {pillar.desc}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-[#C63D0F] font-bold group-hover:gap-4 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </NavLink>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 text-center"
      >
        <div className="relative rounded-[3rem] bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl border border-white shadow-[0_20px_60px_rgba(198,61,15,0.15),inset_0_2px_4px_rgba(255,255,255,0.8)] p-12 md:p-16">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FFC107]/20 blur-[100px] rounded-full -z-10"></div>

          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Join Our <span className="bg-gradient-to-r from-[#C63D0F] to-[#FFC107] bg-clip-text text-transparent">Mission</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
            Partner with us to create lasting impact in rural communities. Together, we can transform lives.
          </p>
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C63D0F] to-[#FFC107] text-white font-bold shadow-[0_8px_25px_rgba(198,61,15,0.3),inset_0_2px_4px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_30px_rgba(198,61,15,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300">
            Get Involved
          </button>
        </div>
      </motion.div>
    </div>
  );
}
