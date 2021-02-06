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
      label: 'Classes',
      slug: '/classes/',
      submenu: [
        {
          id: nanoid(),
          label: 'All Classes',
          slug: '/classes/',
        },
        {
          id: nanoid(),
          label: 'Organic Vegetables',
          slug: '/classes/organic-vegetables/',
        },
        {
          id: nanoid(),
          label: 'Organic Fertilizers and Concoctions',
          slug: '/classes/organic-fertilizers-and-concoctions/',
        },
        {
          id: nanoid(),
          label: 'Organic Chickens',
          slug: '/classes/organic-chicken/',
        },
        {
          id: nanoid(),
          label: 'Organic Hogs',
          slug: '/classes/organic-hogs/',
        },
        {
          id: nanoid(),
          label: 'Organic Small Ruminants',
          slug: '/classes/organic-small-ruminants/',
        },
      ],
    },
  ],
  col2: [
    {
      id: nanoid(),
      label: 'Who We Are',
      slug: '/who-we-are/',
    },
    {
      id: nanoid(),
      label: 'What We Do',
      slug: '/what-we-do/',
    },
    {
      id: nanoid(),
      label: 'Get Involved',
      slug: '/get-involved/',
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
