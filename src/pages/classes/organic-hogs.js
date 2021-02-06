import React from 'react';
import { nanoid } from 'nanoid';
import GatsbyImage from 'gatsby-image';

import {
  Layout,
  SEO,
  Hero,
  OurStory,
  IconsGrid,
  ContactSection,
  GoogleMap,
} from '../../components';
import { useGraphQL } from '../../hooks';

function AboutPage() {
  return (
    <Layout>
      <SEO title="Organic Hogs" />
      <HeroSection />
      <OurStory />
      <AboutJoey />
      {/* <IconsGrid />
      <OurServices /> */}
      <ContactSection />
      <GoogleMap />
    </Layout>
  );
}

function HeroSection() {
  const { organicHog } = useGraphQL();
  return (
    <Hero image={organicHog.childImageSharp.fluid}>
      <div className="text-center">
        <h1 className="heading-1">Organic Hogs</h1>
      </div>
    </Hero>
  );
}

function AboutJoey() {
  const { elnard2 } = useGraphQL();
  return (
    <article className="relative bg-sky-blue">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid justify-center gap-6 md:grid-cols-3">
          <div className="md:col-span-2 md:py-12">
            <h2 className="heading-2 text-burnt-orange">
              Elnard, The Man Himself!
            </h2>
            <div className="mt-6 prose">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam eius illum porro quia eligendi amet cupiditate
                asperiores veniam vitae quo sequi, repellendus iusto harum ea
                accusantium rem dicta, vero doloremque!
              </p>
              <p>
                Eveniet quo atque dolorum voluptates fugit reiciendis nostrum
                ducimus eaque possimus tempora modi similique, dolorem molestias
                ex? Quidem, neque? Consectetur veritatis assumenda quis
                reprehenderit, quia a enim ad dolores eveniet?
              </p>
              <p>
                Aperiam, facere? Facilis obcaecati consectetur est recusandae
                repudiandae inventore consequuntur aut eveniet reprehenderit?
                Corrupti maxime eligendi repellendus modi nemo odit dolores! Sed
                numquam, error deleniti voluptatum dicta architecto ipsum
                nesciunt.
              </p>
            </div>
          </div>
          <div className="order-1 w-full mx-auto max-w-prose md:order-none">
            <div className="relative h-0 aspect-ratio-3/4">
              <div className="absolute inset-0 bg-white">
                {/* Image goes here */}
                <GatsbyImage fluid={elnard2.childImageSharp.fluid} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function OurServices() {
  const services = [
    {
      label: 'General Painting',
    },
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
    <article className="relative bg-white">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-center heading-2 text-burnt-orange">
          Our Services
        </h2>
        <ul className="grid gap-6 mt-3 md:grid-cols-3 lg:grid-cols-6">
          {services.map((service) => (
            <li key={nanoid()} className="w-full max-w-sm mx-auto">
              <div className="relative h-0 aspect-ratio-square">
                <div className="absolute inset-0 bg-sky-blue">
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

export default AboutPage;
