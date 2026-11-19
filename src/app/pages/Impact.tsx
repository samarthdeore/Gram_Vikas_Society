import { motion } from "motion/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { Leaf, GraduationCap, Users, TrendingUp } from "lucide-react";

const impactData = [
  { year: "2019", beneficiaries: 12000, villages: 45 },
  { year: "2020", beneficiaries: 25000, villages: 89 },
  { year: "2021", beneficiaries: 48000, villages: 156 },
  { year: "2022", beneficiaries: 85000, villages: 234 },
  { year: "2023", beneficiaries: 145000, villages: 312 },
  { year: "2024", beneficiaries: 210000, villages: 420 },
];

const stats = [
  { label: "Trees Planted", value: "2.5M+", icon: Leaf },
  { label: "Students Educated", value: "150K+", icon: GraduationCap },
  { label: "Women Empowered", value: "85K+", icon: Users },
  { label: "Livelihoods Created", value: "45K+", icon: TrendingUp },
];

export function Impact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black text-neutral-900 mb-6 tracking-tight"
        >
          Measuring <span className="bg-gradient-to-r from-[#C63D0F] to-[#FFC107] bg-clip-text text-transparent">Impact</span>
        </motion.h1>
        <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
          Transparency and measurable results are at the core of our approach to sustainable development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 rounded-[2rem] bg-white/70 backdrop-blur-xl border border-white shadow-[0_10px_35px_rgba(198,61,15,0.08),inset_0_2px_4px_rgba(255,255,255,0.8)] flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C63D0F] to-[#FFC107] p-[2px] shadow-[0_10px_25px_rgba(198,61,15,0.25)] mb-6">
              <div className="w-full h-full rounded-[14px] bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/40">
                <stat.icon className="text-white" size={28} />
              </div>
            </div>
            <h3 className="text-3xl font-black text-neutral-900 mb-2">{stat.value}</h3>
            <p className="text-neutral-500 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-8 md:p-12 rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-white shadow-[0_10px_35px_rgba(198,61,15,0.08),inset_0_2px_4px_rgba(255,255,255,0.8)]"
      >
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black text-neutral-900 mb-4">Growth in Beneficiaries</h2>
          <p className="text-neutral-500">Year over year expansion of our development programs</p>
        </div>
        
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={impactData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs key="defs">
                <linearGradient key="gradient" id="colorB" x1="0" y1="0" x2="0" y2="1">
                  <stop key="stop1" offset="5%" stopColor="#C63D0F" stopOpacity={0.3}/>
                  <stop key="stop2" offset="95%" stopColor="#C63D0F" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid key="grid" strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis key="xaxis" id="xaxis" dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} dy={10} />
              <YAxis key="yaxis" id="yaxis" axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} dx={-10} tickFormatter={(val) => `${val / 1000}k`} />
              <Tooltip 
                key="tooltip"
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                cursor={{ stroke: '#C63D0F', strokeWidth: 2, strokeDasharray: '4 4' }}
              />
              <Area key="area" type="monotone" dataKey="beneficiaries" stroke="#C63D0F" strokeWidth={4} fillOpacity={1} fill="url(#colorB)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}
