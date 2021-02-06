import React from 'react';
import GatsbyImage from 'gatsby-image';

import { useGraphQL } from '../hooks';

function OurStory() {
  const { poultry } = useGraphQL();
  return (
    <article className="relative bg-white">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid justify-center gap-6 md:grid-cols-3">
          <div className="w-full mx-auto max-w-prose">
            <div className="relative h-0 aspect-ratio-3/4">
              <div className="absolute inset-0 bg-sky-blue">
                {/* Image goes here */}
                <GatsbyImage fluid={poultry.childImageSharp.fluid} />
              </div>
            </div>
          </div>
          <div className="md:col-span-2 md:py-12">
            <h2 className="heading-2 text-burnt-orange">Our Story</h2>
            <div className="mt-6 prose">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
                reiciendis nobis! Magnam aperiam delectus in facere molestiae
                consequatur error numquam labore autem aliquam, deleniti
                laudantium, facilis quod eveniet corporis officiis?
              </p>
              <p>
                Amet repudiandae non libero consequuntur labore reprehenderit
                modi voluptatem voluptate, ipsa temporibus, impedit saepe.
                Fugiat maxime in sed mollitia quia eveniet, velit, commodi iste
                temporibus dolore inventore facere quasi a!
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export { OurStory };
