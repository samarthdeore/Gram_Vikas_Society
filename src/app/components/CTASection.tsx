import { Heart, HandHeart } from 'lucide-react';

export function CTASection() {
  return (
    <section className="section-light-blend relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-4xl text-center px-4">
        <h2
          className="mb-4 sm:mb-6"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.75rem, 6vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            color: 'var(--text-primary)',
          }}
        >
          Your Small Step Can Change Someone's Life
        </h2>
        <p
          className="mb-8 sm:mb-10 md:mb-12"
          style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
          }}
        >
          Join us in bringing hope, dignity, and opportunity to rural communities across India. Every contribution makes a real difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 sm:flex-row">
          <button className="glow-button group flex items-center gap-3 w-full sm:w-auto min-h-[44px]">
            <Heart
              className="h-5 w-5 transition-transform group-hover:scale-110"
              style={{ color: 'var(--text-primary)' }}
            />
            <span>Donate Now</span>
          </button>

          <button
            className="glass-card group flex items-center gap-3 rounded-full px-8 sm:px-10 py-4 sm:py-5 transition-all duration-300 hover:scale-105 w-full sm:w-auto min-h-[44px]"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              fontWeight: 600,
              color: 'var(--text-primary)',
            }}
          >
            <HandHeart className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span>Volunteer</span>
          </button>
        </div>

        {/* Supporting Text */}
        <p
          className="mt-8 sm:mt-10"
          style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            fontStyle: 'italic',
            color: 'var(--text-secondary)',
          }}
        >
          Together, we can build a future where every village thrives
        </p>
      </div>
    </section>
  );
}