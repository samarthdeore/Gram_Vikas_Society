import { motion } from "motion/react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black text-neutral-900 mb-6 tracking-tight"
        >
          Get in <span className="bg-gradient-to-r from-[#C63D0F] to-[#FFC107] bg-clip-text text-transparent">Touch</span>
        </motion.h1>
        <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
          Join us in our mission to transform rural India. We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-black text-neutral-900 mb-8">
            Contact Information
          </h2>

          {[
            {
              icon: MapPin,
              label: "Corporate Office",
              value: "No. 107, Railway Parallel Road, Kumara Park West, Seshadripuram, Bengaluru - 560020, Karnataka, India.",
              color: "from-[#C63D0F] to-[#FF6B35]"
            },
            {
              icon: MapPin,
              label: "Head Office",
              value: "No. 506, Kaushalya Kutir, 3rd Floor, Oswal Tower, Jubilee Circle, Dharwad - 580001, Karnataka, India.",
              color: "from-[#FF8C42] to-[#FFAB4C]"
            },
            {
              icon: MapPin,
              label: "Operations Office",
              value: "V-23, WWH, Peenya Industrial Association, Peenya 2nd Stage, Nelagadaranahalli Road, Peenya, Bengaluru - 560058",
              color: "from-[#FFC857] to-[#FFD75E]"
            },
            {
              icon: Globe,
              label: "Website",
              value: "www.thegramvikas.org",
              color: "from-[#FFE66D] to-[#FFC107]"
            },
            {
              icon: Mail,
              label: "Email",
              value: "info@thegramvikas.org",
              color: "from-[#C63D0F] to-[#FFC107]"
            },
            {
              icon: Phone,
              label: "Phone",
              value: "0836-2434211",
              color: "from-[#FF8C42] to-[#FFC857]"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-[1.5rem] bg-white/60 backdrop-blur-md border border-white shadow-[0_8px_25px_rgba(198,61,15,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)] hover:shadow-[0_12px_35px_rgba(198,61,15,0.12),inset_0_2px_4px_rgba(255,255,255,1)] transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-[2px] shadow-[0_6px_15px_rgba(198,61,15,0.2)]`}>
                <div className="w-full h-full rounded-[10px] bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/40 shadow-[inset_0_2px_6px_rgba(255,255,255,0.6)]">
                  <item.icon className="text-white" size={20} strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-1">{item.label}</h3>
                <p className="text-neutral-600">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-white shadow-[0_15px_50px_rgba(198,61,15,0.1),inset_0_2px_4px_rgba(255,255,255,0.8)] p-8 md:p-10"
        >
          <h2 className="text-3xl font-black text-neutral-900 mb-6">
            Send us a Message
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-neutral-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-white/80 border border-orange-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-neutral-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/80 border border-orange-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-neutral-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="How can we help?"
                className="w-full px-4 py-3 rounded-xl bg-white/80 border border-orange-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-neutral-700 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us more about your inquiry..."
                className="w-full px-4 py-3 rounded-xl bg-white/80 border border-orange-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-[#C63D0F] to-[#FFC107] text-white font-bold shadow-[0_8px_25px_rgba(198,61,15,0.3),inset_0_2px_4px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_30px_rgba(198,61,15,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Map Placeholder (Optional) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 rounded-[2.5rem] overflow-hidden shadow-[0_15px_50px_rgba(198,61,15,0.1)] border-4 border-white"
      >
        <div className="h-96 bg-gradient-to-br from-[#FFC107]/10 to-[#C63D0F]/10 flex items-center justify-center">
          <p className="text-neutral-400 font-medium">Map Location</p>
        </div>
      </motion.div>
    </div>
  );
}
