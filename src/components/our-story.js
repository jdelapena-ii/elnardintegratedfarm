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
          <div className="md:col-span-2 md:py-2">
            <h2 className="heading-2 text-burnt-orange">Our Story</h2>
            <div className="mt-4 prose">
              <p>
                <strong>Love and passion</strong> of a young man.
              </p>
              <p>
                <strong>2005</strong>, Elnard Integrated Farm started in an
                unexpected way, for the purpose of his gardening was for family
                consumption. He started cultivation a land area of 500 square
                meters with a starting capital of P500 for the seeds and other
                farm needs. With his acquired knowledge from a Horticulture
                class from TESDA, he endured the challenges in gardening.
              </p>
              <p>
                <strong>2012</strong>, the farm was accredited as a private
                extension service provider of the Agricultural Training
                Institure of the Department of Agriculture.
              </p>
              <p>
                <strong>2017</strong>, the farm was accredited as Private Farm
                School of TESDA and the DepEd K12 Program Immersion for
                Agriculture.
              </p>
              <p>
                <strong>2018</strong>, recognized as Outstanding Farm Family in
                the Philippines.
              </p>
              <p>
                <strong>Now</strong>, the farm continues to be the premiere farm
                school in the island and generate organic and fresh produce for
                the province of Siquijor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export { OurStory };
