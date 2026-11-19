import { ProgramPage } from './ProgramPage';

export function UdyamVikasPage() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Entrepreneurship training',
    },
    {
      url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Business planning',
    },
    {
      url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Market access',
    },
    {
      url: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Enterprise development',
    },
  ];

  const sections = [
    {
      type: 'text' as const,
      content:
        'Supporting rural entrepreneurs with training, financial linkages, market access, and mentorship.',
    },
    {
      type: 'impact' as const,
      title: 'Impact',
      stats: [
        { label: 'Enterprises supported', value: '680' },
        { label: 'Beneficiaries', value: '1,850' },
        { label: 'Villages reached', value: '110' },
        { label: 'Training programs', value: '45' },
      ],
    },
    {
      type: 'list' as const,
      title: 'Support Services',
      items: [
        'Entrepreneurship and business skills training',
        'Financial literacy and linkages',
        'Market access and value chain integration',
        'Ongoing mentorship and guidance',
      ],
    },
    {
      type: 'mission' as const,
      missionText: 'Empowering Rural Entrepreneurs',
    },
  ];

  return (
    <ProgramPage
      title="UDYAM VIKAS – Enterprise Development"
      subtitle="Building sustainable livelihoods"
      sections={sections}
      images={images}
    />
  );
}
