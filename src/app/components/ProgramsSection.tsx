import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProgramsSection() {
  const programs = [
    {
      title: 'Women Empowerment',
      image: 'https://images.unsplash.com/photo-1758390286700-06f93fddec45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGluZGlhbiUyMHdvbWVuJTIwd29ya2luZ3xlbnwxfHx8fDE3NzU1Mzg0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      story: 'Teaching skills that transform lives. Women learning tailoring, handicrafts, and entrepreneurship to become financially independent.',
    },
    {
      title: 'Health Awareness',
      image: 'https://images.unsplash.com/photo-1759738098462-90ffac98c554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2aWxsYWdlJTIwaGVhbHRoJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3NTUzODQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      story: 'Bringing healthcare to doorsteps. Regular health camps, maternal care, and nutrition programs reaching remote communities.',
    },
    {
      title: 'Education Support',
      image: 'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzY2hvb2wlMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NTUzODQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      story: 'Every child deserves to learn. Providing school supplies, scholarships, and after-school tutoring to children in need.',
    },
    {
      title: 'Farmer Development',
      image: 'https://images.unsplash.com/photo-1609252509102-aa73ff792667?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYXJtZXIlMjBhZ3JpY3VsdHVyZSUyMGZpZWxkc3xlbnwxfHx8fDE3NzU1Mzg0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      story: 'Empowering those who feed us. Training in sustainable farming, providing better seeds, and connecting farmers to fair markets.',
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
            Programs That Transform
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
            Real initiatives creating real change in rural communities
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {programs.map((program, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <ImageWithFallback
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3
                  className="mb-3 sm:mb-4"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  {program.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    lineHeight: 1.8,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {program.story}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}