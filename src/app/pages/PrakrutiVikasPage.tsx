import { ProgramPage } from './ProgramPage';

export function PrakrutiVikasPage() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Tree plantation',
    },
    {
      url: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Organic farming',
    },
    {
      url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Water management',
    },
    {
      url: 'https://images.unsplash.com/photo-1584710892742-1207629ac4b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Environmental conservation',
    },
  ];

  const sections = [
    {
      type: 'text' as const,
      content:
        'Promoting environmental conservation through tree plantation, water management, and organic farming practices.',
    },
    {
      type: 'impact' as const,
      title: 'Impact',
      stats: [
        { label: 'Villages reached', value: '135' },
        { label: 'Programs conducted', value: '58' },
        { label: 'Beneficiaries', value: '6,500' },
        { label: 'Families supported', value: '3,200' },
      ],
    },
    {
      type: 'list' as const,
      title: 'Conservation Efforts',
      items: [
        'Large-scale tree plantation drives',
        'Sustainable water management systems',
        'Organic farming training and support',
        'Environmental awareness campaigns',
      ],
    },
    {
      type: 'mission' as const,
      missionText: 'Protect Nature, Secure Future',
    },
  ];

  return (
    <ProgramPage
      title="PRAKRUTI VIKAS – Nature Development"
      subtitle="Preserving our environment for generations"
      sections={sections}
      images={images}
    />
  );
}
