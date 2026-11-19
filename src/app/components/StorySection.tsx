import { ImageWithFallback } from './figma/ImageWithFallback';

export function StorySection() {
  return (
    <section className="section-transparent px-4 py-12 sm:px-6 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 md:gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl" style={{ boxShadow: 'var(--shadow-soft)' }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1587538018365-2a1f8b544c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2aWxsYWdlJTIwd29tZW4lMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NzU1Mzg0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Women empowerment in rural India"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Story Text */}
          <div>

            <h2
              className="mb-4 sm:mb-6"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.75rem, 6vw, 2.5rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                color: 'var(--text-primary)',
              }}
            >A Catalyst For Development</h2>
            <p
              className="mb-4 sm:mb-5"
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
              }}
            >Gram Vikas Society, Dharwad is a Team of Passionate Professional Social Workers and Creative Engineers, who identified contemporary issues & opportunities around Rural Development, Skill Development, Employment & Entrepreneurship. Subsequently, jotted down an action plan to address the issues with designed interventions & registered a non- for-profit, GRAM VIKAS SOCIETY, under the Karnataka Societies Registration Act, 1960 on 18-09-2008 with Reg. No. DRL/SOR/BGM/175/2008-09. We are an organization exempted u/s. 12 'A' and 80 'G' of Income Tax Act, 1961.&nbsp;&nbsp;Effective 1st April, 2021, we are also an entity registered with Ministry of Corporate Affairs, Govt. of India, for implementing CSR Projects in India as per directive from CSR guidelines.</p>
            <p
              className="mb-4 sm:mb-5"
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
              }}
            >We have been working in the field of Integrated Sustainability by undertaking various development programs in the areas of Youth Empowerment, Women and Child, Community Health, Socio-Economic, Rural Development, Environmental Sustainability, Skills and Livelihood, Education, Social Business Projects / Social Entrepreneurship etc... supported by various departments of Govt. at State and Central level. Extensive works are carried out under various Corporate Social Responsibility (CSR) initiatives.</p>

          </div>
        </div>
      </div>
    </section>
  );
}