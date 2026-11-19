import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="section-transparent px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-3">
          {/* About */}
          <div>
            <h3
              className="mb-4 sm:mb-6"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.25rem, 4vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}
            >
              GRAM VIKAS SOCIETY
            </h3>
            <p
              className="mb-4 sm:mb-6"
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
              }}
            >
              Dedicated to rural development, empowerment, and sustainable growth across villages in India.
            </p>
            <p
              className="italic"
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                color: 'var(--text-secondary)',
              }}
            >
              "Together, we can build better villages"
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="mb-4 sm:mb-6"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              Contact Us
            </h4>
            <div className="space-y-4">
              <div>
                <p
                  className="mb-2"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  Corporate Office:
                </p>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" strokeWidth={1.5} style={{ color: 'var(--text-primary)' }} />
                  <span
                    style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    No. 107, Railway Parallel Road, Kumara Park West, Seshadripuram, Bengaluru - 560020, Karnataka, India.
                  </span>
                </div>
              </div>

              <div>
                <p
                  className="mb-2"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  Head Office:
                </p>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" strokeWidth={1.5} style={{ color: 'var(--text-primary)' }} />
                  <span
                    style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    No. 506, Kaushalya Kutir, 3rd Floor, Oswal Tower, Jubilee Circle, Dharwad - 580001, Karnataka, India.
                  </span>
                </div>
              </div>

              <div>
                <p
                  className="mb-2"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  Operations Office:
                </p>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" strokeWidth={1.5} style={{ color: 'var(--text-primary)' }} />
                  <span
                    style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    V-23, WWH, Peenya Industrial Association, Peenya 2nd Stage, Nelagadaranahalli Road, Peenya, Bengaluru - 560058, Karnataka, India.
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} style={{ color: 'var(--text-primary)' }} />
                <span
                  style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  0836-2434211
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} style={{ color: 'var(--text-primary)' }} />
                <span
                  style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  info@thegramvikas.org
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} style={{ color: 'var(--text-primary)' }} />
                <span
                  style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  www.thegramvikas.org
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h4
              className="mb-4 sm:mb-6"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              Quick Links
            </h4>
            <ul className="mb-6 sm:mb-8 space-y-3">
              {['About Us', 'Programs', 'Stories', 'Contact', 'Get Involved'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="transition-colors"
                    style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                      color: 'var(--text-secondary)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--glow-deep)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 sm:gap-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="rounded-full p-2.5 sm:p-3 transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'var(--button-gradient)',
                    boxShadow: 'var(--shadow-soft)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-8 sm:mt-12 border-t pt-6 sm:pt-8 text-center"
          style={{
            borderColor: 'var(--glow-deep)',
            opacity: 0.3,
          }}
        >
          <p
            className="px-4"
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)',
              color: 'var(--text-secondary)',
            }}
          >
            © 2026 Gram Vikas Society. All rights reserved. • Built with love for rural India
          </p>
        </div>
      </div>
    </footer>
  );
}