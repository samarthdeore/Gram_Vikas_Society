import { Heart, Users, Sparkles } from 'lucide-react';

export function ImpactSection() {
  const impacts = [
    {
      icon: Heart,
      number: '10,000+',
      title: 'Lives Touched',
      caption: 'Each number is a real person with dreams',
    },
    {
      icon: Users,
      number: '100+',
      title: 'Villages Supported',
      caption: 'Communities growing together, stronger',
    },
    {
      icon: Sparkles,
      number: '500+',
      title: 'Women Empowered',
      caption: 'Creating ripples of change in families',
    },
  ];

  return (
    <section className="section-light-blend px-4 py-12 sm:px-6 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 md:mb-16 text-center">
          <h2
            className="mb-3 sm:mb-4"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.75rem, 6vw, 2.75rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
            }}
          >
            Our Impact, Their Stories
          </h2>
          <p
            className="mx-auto max-w-2xl px-4"
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
            }}
          >
            Behind every statistic is a human being whose life has been transformed
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="glass-card p-8 sm:p-10 text-center transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4 sm:mb-6 flex justify-center">
                <div
                  className="rounded-full p-4 sm:p-6"
                  style={{
                    background: 'var(--button-gradient)',
                    boxShadow: 'var(--shadow-soft)',
                  }}
                >
                  <impact.icon
                    className="h-8 w-8 sm:h-10 sm:w-10"
                    strokeWidth={1.5}
                    style={{ color: 'var(--text-primary)' }}
                  />
                </div>
              </div>
              <div
                className="mb-2 sm:mb-3"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 'clamp(2rem, 8vw, 3rem)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                {impact.number}
              </div>
              <h3
                className="mb-2 sm:mb-3"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                {impact.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                }}
              >
                {impact.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}