import { ProgramPage } from './ProgramPage';

export function SamajVikasPage() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Community gathering',
    },
    {
      url: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Cultural programs',
    },
    {
      url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Health initiatives',
    },
    {
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Awareness campaign',
    },
  ];

  const sections = [
    {
      type: 'text' as const,
      content:
        'Strengthening community bonds through cultural programs, social awareness campaigns, and health initiatives.',
    },
    {
      type: 'impact' as const,
      title: 'Impact',
      stats: [
        { label: 'Beneficiaries', value: '18,000' },
        { label: 'Villages reached', value: '180' },
        { label: 'Programs conducted', value: '92' },
        { label: 'Families impacted', value: '4,500' },
      ],
    },
    {
      type: 'list' as const,
      title: 'Key Activities',
      items: [
        'Cultural programs and community festivals',
        'Social awareness campaigns',
        'Health and wellness initiatives',
        'Community cohesion building',
      ],
    },
    {
      type: 'mission' as const,
      missionText: 'Stronger Communities, Better Lives',
    },
  ];

  return (
    <ProgramPage
      title="SAMAJ VIKAS – Social Development"
      subtitle="Nurturing community bonds"
      sections={sections}
      images={images}
    />
  );
}
