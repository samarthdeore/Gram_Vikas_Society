import { ProgramPage } from './ProgramPage';

export function MahilaVikasPage() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1616674202799-054e7c831378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Women in training session',
    },
    {
      url: 'https://images.unsplash.com/photo-1662909540324-c8c358c42aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Fashion designing work',
    },
    {
      url: 'https://images.unsplash.com/photo-1521401415461-83e7162b8e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Using sewing machine',
    },
    {
      url: 'https://images.unsplash.com/photo-1739184736115-a3d898e4c2b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Group training program',
    },
  ];

  const sections = [
    {
      type: 'text' as const,
      content:
        'Economic empowerment of women through vocational training in sewing, tailoring, and fashion designing for sustainable livelihood.',
    },
    {
      type: 'text' as const,
      content:
        'Free vocational training provided to 11,040 women across Dharwad, Hubballi, Kundagol, Kalaghatagi, Navalagund, and Shiggaon.',
    },
    {
      type: 'impact' as const,
      title: 'Impact',
      stats: [
        { label: 'Women trained', value: '11,040' },
        { label: 'Sewing machines distributed', value: 'Free' },
        { label: 'Duration', value: '1 Month' },
        { label: 'FY: 2022–23 & 2023–24', value: '2022-24' },
      ],
    },
    {
      type: 'list' as const,
      title: 'Urban Skilling',
      items: [
        '457 women trained (Dharwad + Gokak)',
        '4-month fashion designing training under NULM',
        'Certificates + sewing machines provided',
      ],
    },
    {
      type: 'list' as const,
      items: [
        '30 women trained in Badami (Bagalkot)',
        '30-day free training program',
      ],
    },
    {
      type: 'mission' as const,
      missionText: '1,00,000 Women Empowerment',
    },
  ];

  return (
    <ProgramPage
      title="MAHILA VIKAS – Women Empowerment"
      subtitle="Empowering women through skills and livelihood"
      sections={sections}
      images={images}
    />
  );
}
