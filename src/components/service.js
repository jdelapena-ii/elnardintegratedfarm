import React from 'react';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

function Service({ image, children, reverse, slug }) {
  function Image() {
    return (
      <div
        className={`absolute inset-0 flex ${
          reverse ? 'bg-sky-blue' : 'bg-white'
        }`}
      >
        {image && <GatsbyImage fluid={image} className="flex-1" />}
      </div>
    );
  }

  function SecondaryComponent() {
    return (
      <div className="order-first lg:order-none">
        <div className="mx-auto max-w-prose lg:max-w-none">
          <div className="relative h-0 aspect-ratio-square">
            {slug ? (
              <Link to={slug}>
                <Image />
              </Link>
            ) : (
              <Image />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className={`relative ${reverse ? 'bg-white' : 'bg-sky-blue'}`}>
      <div className="relative grid items-center w-full gap-12 px-4 py-12 mx-auto max-w-prose lg:max-w-7xl lg:grid-cols-2 sm:px-6 lg:px-8">
        {reverse && <SecondaryComponent />}
        <div>{children}</div>
        {!reverse && <SecondaryComponent />}
      </div>
    </article>
  );
}

Service.propTypes = {
  image: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  slug: PropTypes.string,
};

export { Service };
