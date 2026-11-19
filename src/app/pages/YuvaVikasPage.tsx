import { ProgramPage } from './ProgramPage';

export function YuvaVikasPage() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Youth in skills training',
    },
    {
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Team collaboration',
    },
    {
      url: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Professional development',
    },
    {
      url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Youth leadership',
    },
  ];

  const sections = [
    {
      type: 'text' as const,
      content:
        'Building confident and skilled youth through vocational training, leadership development, and entrepreneurship programs.',
    },
    {
      type: 'impact' as const,
      title: 'Impact',
      stats: [
        { label: 'Youth empowered', value: '3,500' },
        { label: 'Villages reached', value: '120' },
        { label: 'Training programs', value: '65' },
        { label: 'Enterprises started', value: '280' },
      ],
    },
    {
      type: 'list' as const,
      title: 'Program Highlights',
      items: [
        'Vocational skills training and certification',
        'Leadership and personality development',
        'Entrepreneurship mentorship programs',
        'Career guidance and placement support',
      ],
    },
    {
      type: 'mission' as const,
      missionText: 'Empowered Youth, Stronger Future',
    },
  ];

  return (
    <ProgramPage
      title="YUVA VIKAS - Youth Development"
      subtitle="Building tomorrow's leaders today"
      sections={sections}
      images={images}
    />
  );
}
