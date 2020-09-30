import { nanoid } from 'nanoid';

import { HomeIcon, FacebookIcon, InstagramIcon } from '../components/vectors';

export const mainNavigation = [
  {
    id: nanoid(),
    label: 'Home',
    slug: '/',
    icon: HomeIcon,
  },
];

export const footerNavigation = {
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
          label: 'General Painting',
          slug: '/services/',
        },
        {
          id: nanoid(),
          label: 'Restorations',
          slug: '/services/',
        },
        {
          id: nanoid(),
          label: 'New Homes',
          slug: '/services/',
        },
      ],
    },
  ],
  col2: [
    {
      id: nanoid(),
      label: 'Commercial Painting',
      slug: '/commercial-painting/',
    },
    {
      id: nanoid(),
      label: 'Concrete Expoxy Flooring',
      slug: '/concrete-epoxy-flooring/',
    },
    {
      id: nanoid(),
      label: 'Rendering',
      slug: '/rendering/',
    },
    {
      id: nanoid(),
      label: 'Contact',
      slug: '/contact/',
    },
  ],
};

export const socialLinks = [
  {
    id: nanoid(),
    label: 'Facebook',
    url: 'https://www.facebook.com',
    icon: FacebookIcon,
  },
  {
    id: nanoid(),
    label: 'Instagram',
    url: 'https://www.instagram.com',
    icon: InstagramIcon,
  },
];
