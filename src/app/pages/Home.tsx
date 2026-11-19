// import image_lTRICONE_MUSICAL_SUMMER_CAMP___1__jpg__1_ from '@/imports/lTRICONE_MUSICAL_SUMMER_CAMP___1_.jpg__1_.jpg'
import { motion } from "motion/react";
import CountUp from "react-countup";
import { ArrowRight } from "lucide-react";
import { DevelopmentPillars } from "../components/DevelopmentPillars";
import { IndiaMapSection } from "../components/IndiaMapSection";

// ==========================================
// HOME PAGE IMAGE CONFIGURATION
// Easily replace the placeholder URLs below
// with your actual image links.
// ==========================================
const homeImages = {
  showcaseBanner: "https://images.unsplash.com/photo-1707721690746-cdbdabadebc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  aboutSection: "https://images.unsplash.com/photo-1716105625610-fde0425031d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
};

export function Home() {
  return (
    <div className="flex flex-col gap-32">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#C63D0F]/20 to-[#FFC107]/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#FFC107]/30 blur-[80px] rounded-full -z-10"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#C63D0F]/20 blur-[100px] rounded-full -z-10"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-2 px-6 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_15px_rgba(198,61,15,0.1),inset_0_2px_4px_rgba(255,255,255,0.8)] text-[#C63D0F] font-semibold tracking-wide text-sm mb-8">
              Welcome to Gram Vikas Society
            </span>
            <h1 className="font-black text-[#3E2723] tracking-tight leading-[1.1] mb-8 drop-shadow-sm text-[64px]"><br /><span className="bg-gradient-to-r from-[#C63D0F] to-[#FFC107] bg-clip-text text-transparent">A Cataltst For Development</span></h1>
            <p className="text-xl md:text-2xl text-[#5D4037] mb-4 font-bold max-w-3xl mx-auto uppercase tracking-widest drop-shadow-sm">
              JAL | JUNGLE | JAMEEN | JAANWAR | JAN
            </p>
            <p className="text-lg md:text-xl text-[#795548] mb-12 max-w-2xl mx-auto leading-relaxed">
              Empowering rural life through sustainability and community development.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C63D0F] to-[#FFC107] text-white font-bold text-lg shadow-[0_8px_30px_rgba(198,61,15,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:shadow-[0_15px_40px_rgba(198,61,15,0.5),inset_0_2px_4px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group">
                Be a Part of the Change
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Development Pillars Section */}
      <DevelopmentPillars />

      {/* Showcase Section */}
      <section className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] p-4 bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_20px_60px_rgba(198,61,15,0.15),inset_0_2px_4px_rgba(255,255,255,0.8)]"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-video shadow-inner group">
            {/* MANUAL REPLACEMENT: Update homeImages.showcaseBanner at top of file */}
            <img 
              src="/photos/74.jpg"
              alt="Indian farmer in a field"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#C63D0F]/60 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-10 left-10 right-10">
              <h3 className="text-3xl md:text-5xl font-black text-white drop-shadow-lg mb-4">Empowering Generations</h3>
              <p className="text-white/90 text-lg max-w-2xl font-medium drop-shadow-md">
                Our initiatives reach the deepest roots of rural India, ensuring sustainable agriculture and prosperous communities.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl border border-white shadow-[0_15px_50px_rgba(198,61,15,0.1),inset_0_2px_4px_rgba(255,255,255,0.8)] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Background Blur Effect */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FFC107]/20 blur-[100px] rounded-full -z-10"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#C63D0F]/10 blur-[100px] rounded-full -z-10"></div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-[2rem] overflow-hidden aspect-square shadow-[0_15px_40px_rgba(0,0,0,0.15)] transform rotate-2 hover:rotate-0 transition-transform duration-500 group">
              {/* MANUAL REPLACEMENT: Update homeImages.aboutSection at top of file */}
              <img 
                src="/photos/113.jpeg"
                alt="Women empowerment and teamwork"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-[0_10px_30px_rgba(198,61,15,0.15),inset_0_2px_4px_rgba(255,255,255,0.8)] border border-white border-b-0 border-r-0">
              <p className="text-4xl font-black text-[#C63D0F]">25+</p>
              <p className="text-sm font-bold text-[#5D4037]">Years of Impact</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#3E2723] leading-tight mb-2">
              Building Better <br />
              <span className="bg-gradient-to-r from-[#C63D0F] to-[#FFC107] bg-clip-text text-transparent">Development</span>
            </h2>
            <div className="text-base text-[#5D4037] leading-relaxed space-y-4">
              <p>Gram Vikas Society, Dharwad is a Team of Passionate Professional Social Workers and Creative Engineers, who identified contemporary issues & opportunities around Rural Development, Skill Development, Employment & Entrepreneurship. Subsequently, jotted down an action plan to address the issues with designed interventions & registered a non- for-profit, GRAM VIKAS SOCIETY, under the Karnataka Societies Registration Act, 1960 on 18-09-2008 with Reg. No. DRL/SOR/BGM/175/2008-09. We are an organization exempted u/s. 12 'A' and 80 'G' of Income Tax Act, 1961.  Effective 1st April, 2021, we are also an entity registered with Ministry of Corporate Affairs, Govt. of India, for implementing CSR Projects in India as per directive from CSR guidelines.</p>
              <p>We have been working in the field of Integrated Sustainability by undertaking various development programs in the areas of Youth Empowerment, Women and Child, Community Health, Socio-Economic, Rural Development, Environmental Sustainability, Skills and Livelihood, Education, Social Business Projects / Social Entrepreneurship etc... supported by various departments of Govt. at State and Central level. Extensive works are carried out under various Corporate Social Responsibility (CSR) initiatives</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Impact Section */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Villages Reached", value: 1200, suffix: "+" },
            { label: "Lives Impacted", value: 5, suffix: "M+" },
            { label: "Trees Planted", value: 2.5, suffix: "M", decimals: 1 },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="bg-white/60 backdrop-blur-md rounded-[2rem] p-8 text-center border border-white shadow-[0_8px_30px_rgba(198,61,15,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)]"
            >
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-br from-[#C63D0F] to-[#FFC107] bg-clip-text text-transparent mb-2">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  decimals={stat.decimals || 0}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.suffix}
              </div>
              <div className="text-[#5D4037] font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* India Map Section */}
      <IndiaMapSection />
    </div>
  );
}
