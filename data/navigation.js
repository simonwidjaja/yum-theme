/**
 * Navigation
 */
export default [
  {
    label: 'Characters/Kurzvideos',
    href: '/page1',
  },
  {
    label: 'FAQ',
    href: '/page2',
  },
  {
    label: 'Full Service',
    href: null,
    children: [
      {
        label: 'Landing Pages',
        description: 'Optimiert für Performance, Conversion und Experience',
        href: '/page3',
      },
      {
        label: 'Marketing Design System',
        description: 'Engaging, systematisch, skalierbar und effizient',
        href: '/page4',
      },
    ]
  },
]