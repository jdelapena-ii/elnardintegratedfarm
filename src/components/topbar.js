import React from 'react';

import { useGraphQL } from '../hooks';
import { socialLinks } from '../data';

function TopBar() {
  const {
    site: { siteMetadata },
  } = useGraphQL();
  return (
    <div className="bg-burnt-orange">
      <div className="flex items-center justify-end w-full px-4 py-2 mx-auto space-x-6 text-white sm:px-6 lg:px-8 max-w-7xl">
        <a
          href={`tel:${siteMetadata.phone.split(' ').join(' ')}`}
          className="font-bold"
        >
          {siteMetadata.phone}
        </a>
        <div className="flex space-x-3">
          {socialLinks.map((socialLink) => (
            <a
              key={socialLink.id}
              href={socialLink.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{socialLink.label}</span>
              <socialLink.icon className="h-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export { TopBar };
