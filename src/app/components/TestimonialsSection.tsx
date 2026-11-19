import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'Because of Gram Vikas, I can now support my family with dignity. My children go to school, and I have hope for tomorrow.',
      name: 'Lakshmi Devi',
      location: 'Kalaburagi, Karnataka',
      image: 'https://images.unsplash.com/photo-1609848350757-252557c83136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2aWxsYWdlJTIwZWxkZXIlMjB3b21hbnxlbnwxfHx8fDE3NzU1Mzg0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      quote: 'The skill training changed everything. Today, I run my own tailoring shop and teach other women in my village.',
      name: 'Savita Patil',
      location: 'Bagalkot, Karnataka',
      image: 'https://images.unsplash.com/photo-1727179297202-b1032c0f37eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2aWxsYWdlJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzU1Mzg0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      quote: 'They did not just give us help, they gave us confidence. Now we know we can create our own opportunities.',
      name: 'Ramesh Kumar',
      location: 'Raichur, Karnataka',
      image: 'https://images.unsplash.com/photo-1609252509102-aa73ff792667?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYXJtZXIlMjBhZ3JpY3VsdHVyZSUyMGZpZWxkc3xlbnwxfHx8fDE3NzU1Mzg0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section className="section-transparent px-4 py-12 sm:px-6 sm:py-16 md:py-24">
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
            Voices from the Villages
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
            Real words from real people whose lives have been touched
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 sm:p-8 transition-all duration-300 hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="mb-4 sm:mb-6">
                <Quote
                  className="h-8 w-8 sm:h-10 sm:w-10"
                  strokeWidth={1.5}
                  style={{ color: 'var(--glow-deep)', opacity: 0.3 }}
                />
              </div>

              {/* Quote Text */}
              <p
                className="mb-6 sm:mb-8"
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                }}
              >
                "{testimonial.quote}"
              </p>

              {/* Person Info */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  className="h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full flex-shrink-0"
                  style={{
                    boxShadow: 'var(--shadow-soft)',
                  }}
                >
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}