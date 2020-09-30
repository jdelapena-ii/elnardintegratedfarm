import React from 'react';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

function Hero({ image, children }) {
  return (
    <article className="relative w-full mx-auto max-w-7xl">
      <div className="relative h-0 aspect-ratio-16/9">
        {image && (
          <div className="absolute inset-0 flex">
            <GatsbyImage fluid={image} className="flex-1" />
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 text-navy">
          {children}
        </div>
      </div>
    </article>
  );
}

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.object,
};

export { Hero };
