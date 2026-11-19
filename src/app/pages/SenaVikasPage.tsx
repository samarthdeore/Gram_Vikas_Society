import { ProgramPage } from './ProgramPage';

export function SenaVikasPage() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Community service',
    },
    {
      url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Volunteers working',
    },
    {
      url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Community gathering',
    },
    {
      url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Service activities',
    },
  ];

  const sections = [
    {
      type: 'text' as const,
      content:
        'Creating a network of community volunteers and service providers who work together to address local challenges.',
    },
    {
      type: 'impact' as const,
      title: 'Impact',
      stats: [
        { label: 'Beneficiaries', value: '2,800' },
        { label: 'Villages reached', value: '75' },
        { label: 'Service programs', value: '38' },
        { label: 'Families supported', value: '1,500' },
      ],
    },
    {
      type: 'list' as const,
      title: 'Service Areas',
      items: [
        'Community volunteer network building',
        'Local challenge identification and resolution',
        'Service provider coordination',
        'Community-driven development initiatives',
      ],
    },
    {
      type: 'mission' as const,
      missionText: 'Service Before Self',
    },
  ];

  return (
    <ProgramPage
      title="SENA VIKAS – Service Development"
      subtitle="Building communities through service"
      sections={sections}
      images={images}
    />
  );
}
