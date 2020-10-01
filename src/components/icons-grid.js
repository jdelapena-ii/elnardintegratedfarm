import React from 'react';
import { nanoid } from 'nanoid';

import { TickIcon, PaintRollerIcon, StarIcon, MoneyIcon } from './vectors';

const services = [
  { label: 'Fully Qualified <br/>&amp; Insured', icon: TickIcon },
  { label: 'Professional <br/>&amp; Experienced', icon: PaintRollerIcon },
  { label: 'Quality <br/>Guaranteed', icon: StarIcon },
  { label: 'Competitive <br/>Prices', icon: MoneyIcon },
];

function IconsGrid() {
  return (
    <article className="relative">
      <div className="absolute inset-0">{/* Image goes here */}</div>
      <div className="relative bg-opacity-50 bg-navy">
        <div className="w-full max-w-lg px-4 py-24 mx-auto md:max-w-5xl sm:px-6 lg:px-8">
          <ul className="grid grid-cols-2 gap-6 text-white md:grid-cols-4">
            {services.map((service) => (
              <li key={nanoid()} className="space-y-6 text-center">
                <service.icon className="h-24 mx-auto sm:h-32" />
                <h3
                  dangerouslySetInnerHTML={{ __html: service.label }}
                  className="font-bold heading-2"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export { IconsGrid };
