import { Outlet, NavLink } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router";

export function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Development Pillars", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Impact", path: "/impact" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#3E2723] font-sans overflow-x-hidden selection:bg-[#FFC107] selection:text-[#3E2723]" style={{ scrollBehavior: "smooth" }}>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between rounded-full bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(198,61,15,0.08),inset_0_2px_4px_rgba(255,255,255,0.5)] px-6 py-3 transition-all">
          <NavLink to="/" className="text-2xl font-bold bg-gradient-to-r from-[#C63D0F] to-[#FFC107] bg-clip-text text-transparent drop-shadow-sm flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C63D0F] to-[#FFC107] shadow-[0_4px_10px_rgba(198,61,15,0.4),inset_0_2px_4px_rgba(255,255,255,0.6)]"></div>
            Gram Vikas
          </NavLink>

          <div className="hidden md:flex items-center gap-1 bg-[#FFF9C4]/30 p-1 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white text-[#C63D0F] shadow-[0_4px_15px_rgba(198,61,15,0.1)]"
                      : "text-[#5D4037] hover:text-[#C63D0F] hover:bg-white/50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-[#C63D0F]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/50 shadow-[0_15px_40px_rgba(198,61,15,0.15)] p-4 flex flex-col gap-2 origin-top"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-[#C63D0F]/10 to-[#FFC107]/10 text-[#C63D0F]"
                        : "text-[#5D4037]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Wrapping Outlet in AnimatePresence for smooth fade transitions */}
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="pt-28 pb-20 origin-top"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <footer className="bg-white border-t border-orange-100 py-12 text-center mt-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#FFC107]/10 to-transparent blur-3xl -z-10 rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex justify-center items-center gap-2 mb-10">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C63D0F] to-[#FFC107] shadow-[0_4px_10px_rgba(198,61,15,0.4),inset_0_2px_4px_rgba(255,255,255,0.6)]"></div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#C63D0F] to-[#FFC107] bg-clip-text text-transparent uppercase tracking-wider">
              GRAM VIKAS SOCIETY
            </span>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mb-12">
            <div>
              <h3 className="font-bold text-[#3E2723] mb-3">Corporate Office</h3>
              <p className="text-[#5D4037] text-sm leading-relaxed">
                No. 107, Railway Parallel Road,<br />
                Kumara Park West, Seshadripuram,<br />
                Bengaluru - 560020, Karnataka, India.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#3E2723] mb-3">Head Office</h3>
              <p className="text-[#5D4037] text-sm leading-relaxed">
                No. 506, Kaushalya Kutir, 3rd Floor,<br />
                Oswal Tower, Jubilee Circle,<br />
                Dharwad - 580001, Karnataka, India.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#3E2723] mb-3">Operations Office</h3>
              <p className="text-[#5D4037] text-sm leading-relaxed">
                V-23, WWH, Peenya Industrial Association,<br />
                Peenya 2nd Stage, Nelagadaranahalli Road,<br />
                Peenya, Bengaluru - 560058
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#3E2723] mb-3">Contact Details</h3>
              <div className="text-[#5D4037] text-sm leading-relaxed space-y-1">
                <p>Website: www.thegramvikas.org</p>
                <p>Email: info@thegramvikas.org</p>
                <p>Phone: 0836-2434211</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 text-sm text-[#8D6E63] border-t border-orange-100/50 pt-8">
            <span>© 2026 Gram Vikas Society</span>
            <a href="#" className="hover:text-[#C63D0F] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#C63D0F] transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}