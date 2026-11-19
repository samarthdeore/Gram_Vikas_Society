import { ProgramPage } from './ProgramPage';

export function ShikshakVikasPage() {
  const images = [
    {
      url: 'https://images.unsplash.com/flagged/photo-1574098335395-18cf525e45d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Student in classroom',
    },
    {
      url: 'https://images.unsplash.com/photo-1597743622436-c6b5661731e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Teachers in training',
    },
    {
      url: 'https://images.unsplash.com/photo-1572847748080-bac263fae977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Students learning',
    },
    {
      url: 'https://images.unsplash.com/photo-1722573783625-eceb04251036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Classroom training session',
    },
  ];

  const sections = [
    {
      type: 'text' as const,
      content:
        'Empowering rural teachers through comprehensive training programs, modern teaching methodologies, and continuous skill development.',
    },
    {
      type: 'impact' as const,
      title: 'Impact',
      stats: [
        { label: 'Teachers trained', value: '1,250' },
        { label: 'Villages reached', value: '85' },
        { label: 'Training programs', value: '42' },
        { label: 'Students impacted', value: '15,000' },
      ],
    },
    {
      type: 'list' as const,
      title: 'Key Focus Areas',
      items: [
        'Modern teaching methodologies and pedagogy',
        'Digital literacy and technology integration',
        'Child psychology and inclusive education',
        'Continuous professional development',
      ],
    },
    {
      type: 'mission' as const,
      missionText: 'Quality Education for All',
    },
  ];

  return (
    <ProgramPage
      title="SHIKSHAK VIKAS – Teacher Development"
      subtitle="Empowering educators to transform lives"
      sections={sections}
      images={images}
    />
  );
}
