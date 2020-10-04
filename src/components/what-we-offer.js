import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

function WhatWeOffer({ invert }) {
  const services = [
    {
      label: 'Restorations',
    },
    {
      label: 'New Homes',
    },
    {
      label: 'Commercial <br/>Painting',
    },
    {
      label: 'Concrete Epoxy <br/>Flooring',
    },
    {
      label: 'Rendering',
    },
  ];

  return (
    <article className={`relative ${invert ? 'bg-sky-blue' : 'bg-white'}`}>
      <div className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-center heading-2 text-burnt-orange">
          More of What We Offer
        </h2>
        <ul className="grid gap-6 mt-3 md:grid-cols-5">
          {services.map((service) => (
            <li key={nanoid()} className="w-full max-w-sm mx-auto">
              <div className="relative h-0 aspect-ratio-square">
                <div
                  className={`absolute inset-0 ${
                    invert ? 'bg-white' : 'bg-sky-blue'
                  }`}
                >
                  {/* Image goes here */}
                </div>
              </div>
              <h3
                dangerouslySetInnerHTML={{ __html: service.label }}
                className="mt-1 text-sm tracking-wider text-center uppercase"
              />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

WhatWeOffer.propTypes = {
  invert: PropTypes.bool,
};
export { WhatWeOffer };
