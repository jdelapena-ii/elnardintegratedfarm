import { nanoid } from 'nanoid';

import { FacebookIcon, InstagramIcon } from '../components/vectors';

const footerNavigation = {
  col1: [
    {
      id: nanoid(),
      label: 'About',
      slug: '/about/',
    },
    {
      id: nanoid(),
      label: 'Services',
      slug: '/services/',
      submenu: [
        {
          id: nanoid(),
          label: 'All Services',
          slug: '/services/',
        },
        {
          id: nanoid(),
          label: 'General Painting',
          slug: '/services/general-painting/',
        },
        {
          id: nanoid(),
          label: 'Restorations',
          slug: '/services/restorations/',
        },
        {
          id: nanoid(),
          label: 'New Homes',
          slug: '/services/new-homes/',
        },
      ],
    },
  ],
  col2: [
    {
      id: nanoid(),
      label: 'Commercial Painting',
      slug: '/services/commercial-painting/',
    },
    {
      id: nanoid(),
      label: 'Concrete Expoxy Flooring',
      slug: '/services/concrete-epoxy-flooring/',
    },
    {
      id: nanoid(),
      label: 'Rendering',
      slug: '/services/rendering/',
    },
    {
      id: nanoid(),
      label: 'Contact',
      slug: '/contact/',
    },
  ],
};

const mainNavigation = [...footerNavigation.col1, ...footerNavigation.col2];

const socialLinks = [
  {
    id: nanoid(),
    label: 'Instagram',
    url: 'https://www.instagram.com',
    icon: InstagramIcon,
  },
  {
    id: nanoid(),
    label: 'Facebook',
    url: 'https://www.facebook.com',
    icon: FacebookIcon,
  },
];

export { mainNavigation, footerNavigation, socialLinks };
