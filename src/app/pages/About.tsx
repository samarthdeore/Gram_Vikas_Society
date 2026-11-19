import { motion } from "motion/react";
import { Target, Eye, Heart, Users } from "lucide-react";

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black text-neutral-900 mb-6 tracking-tight"
        >
          About <span className="bg-gradient-to-r from-[#C63D0F] to-[#FFC107] bg-clip-text text-transparent">Us</span>
        </motion.h1>
        <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
          Learn more about our mission, vision, and the dedicated team driving sustainable change across rural India.
        </p>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative rounded-[3rem] overflow-hidden mb-20 shadow-[0_20px_60px_rgba(198,61,15,0.15)] border-4 border-white"
      >
        <div className="aspect-[21/9] relative">
          <img
            src="/photos/75.jpg"
            alt="Team working together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#C63D0F]/60 via-transparent to-[#FFC107]/40"></div>
          <div className="absolute bottom-10 left-10 text-white">
            <h2 className="text-4xl font-black mb-2 drop-shadow-lg">25+ Years of Impact</h2>
            <p className="text-xl drop-shadow-md">Transforming rural communities since 2001</p>
          </div>
        </div>
      </motion.div>

      {/* Mission, Vision, Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          {
            icon: Target,
            title: "Mission",
            desc: "To empower rural communities through sustainable development, education, and environmental conservation.",
            color: "from-[#C63D0F] to-[#FF6B35]"
          },
          {
            icon: Eye,
            title: "Vision",
            desc: "A self-reliant and thriving rural India where every individual has access to opportunities and resources.",
            color: "from-[#FFAB4C] to-[#FFC857]"
          },
          {
            icon: Heart,
            title: "Values",
            desc: "Integrity, compassion, sustainability, community participation, and holistic development.",
            color: "from-[#FFD75E] to-[#FFC107]"
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="relative p-8 rounded-[2rem] bg-white/70 backdrop-blur-xl border border-white shadow-[0_10px_35px_rgba(198,61,15,0.08),inset_0_2px_4px_rgba(255,255,255,0.8)] hover:shadow-[0_20px_50px_rgba(198,61,15,0.15),inset_0_2px_4px_rgba(255,255,255,1)] transition-all duration-300"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-[2px] shadow-[0_8px_20px_rgba(198,61,15,0.25)] mb-6`}>
              <div className="w-full h-full rounded-[14px] bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/40 shadow-[inset_0_2px_6px_rgba(255,255,255,0.6)]">
                <item.icon className="text-white" size={28} strokeWidth={2.5} />
              </div>
            </div>
            <h3 className="text-2xl font-black text-neutral-900 mb-3">{item.title}</h3>
            <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Story Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl border border-white shadow-[0_15px_50px_rgba(198,61,15,0.1),inset_0_2px_4px_rgba(255,255,255,0.8)] p-8 md:p-12 lg:p-16 mb-20"
      >
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FFC107]/20 blur-[100px] rounded-full -z-10"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#C63D0F]/10 blur-[100px] rounded-full -z-10"></div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6 text-center">
            Our <span className="bg-gradient-to-r from-[#C63D0F] to-[#FFC107] bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              Founded in 2001, Gram Vikas Society emerged from a simple yet powerful vision: to create sustainable pathways for rural communities to thrive. What began as a small initiative in a handful of villages has grown into a comprehensive development movement spanning across 11 states.
            </p>
            <p>
              Our approach is rooted in the belief that true development comes from within communities. We don't just provide resources; we empower people with knowledge, skills, and opportunities to become architects of their own transformation.
            </p>
            <p>
              Through our eight Development Pillars—Prakruti Vikas, Guru Vikas, Yuva Vikas, Mahila Vikas, Vidya Vikas, Sena Vikas, Udyam Vikas, and Sahay Vikas—we address the interconnected challenges facing rural India, from environmental conservation to education, from women's empowerment to sustainable livelihoods.
            </p>
            <p>
              Today, we're proud to have touched over 5 million lives across 1,200+ villages, but our work is far from complete. Every day brings new opportunities to learn, grow, and expand our impact.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Impact Numbers */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { number: "1,200+", label: "Villages" },
          { number: "5M+", label: "Lives Impacted" },
          { number: "2.5M", label: "Trees Planted" },
          { number: "850+", label: "Water Bodies" },
        ].map((stat, i) => (
          <div
            key={i}
            className="relative p-8 rounded-[2rem] bg-white/60 backdrop-blur-md border border-white shadow-[0_8px_30px_rgba(198,61,15,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)] text-center"
          >
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-br from-[#C63D0F] to-[#FFC107] bg-clip-text text-transparent mb-2">
              {stat.number}
            </div>
            <div className="text-neutral-500 font-medium">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
