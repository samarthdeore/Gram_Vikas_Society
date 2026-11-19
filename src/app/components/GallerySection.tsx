import { ImageWithFallback } from './figma/ImageWithFallback';

export function GallerySection() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1768729340146-263a6a349b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2aWxsYWdlJTIwbGlmZSUyMGF1dGhlbnRpY3xlbnwxfHx8fDE3NzU1Mzg0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Village life',
    },
    {
      src: 'https://images.unsplash.com/photo-1763816589196-45607083c4f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb3VudHJ5c2lkZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3NTUzODQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Agriculture',
    },
    {
      src: 'https://images.unsplash.com/photo-1761711952065-86e76f4dec7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGluZGlhJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nfGVufDF8fHx8MTc3NTUzODQ4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Community gathering',
    },
    {
      src: 'https://images.unsplash.com/photo-1727179297202-b1032c0f37eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2aWxsYWdlJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzU1Mzg0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Village woman',
    },
    {
      src: 'https://images.unsplash.com/photo-1587538018365-2a1f8b544c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2aWxsYWdlJTIwd29tZW4lMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NzU1Mzg0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Women empowerment',
    },
    {
      src: 'https://images.unsplash.com/photo-1758390286700-06f93fddec45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGluZGlhbiUyMHdvbWVuJTIwd29ya2luZ3xlbnwxfHx8fDE3NzU1Mzg0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Women working',
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
            Moments of Change
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
            Authentic glimpses from the communities we serve
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: 'var(--shadow-soft)',
              }}
            >
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}