import React from 'react';
import { Link } from 'gatsby';

import {
  Layout,
  SEO,
  Hero,
  IconsGrid,
  ContactSection,
  GoogleMap,
} from '../components';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <OurStory />
      <OurServices />
      <IconsGrid />
      <MoreOfWhatWeOffer />
      <ContactSection />
      <GoogleMap />
    </Layout>
  );
}

function HeroSection() {
  return (
    <Hero>
      <div className="w-full space-y-4 text-center">
        <h1 className="text-3xl italic uppercase sm:text-4xl">
          Get in touch for <br />
          <span className="heading-1">a free quote</span>
        </h1>
        <Link to="/contact/" className="button">
          Contact Us
        </Link>
      </div>
    </Hero>
  );
}

function OurStory() {
  return (
    <article className="relative bg-white">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid justify-center gap-6 md:grid-cols-3">
          <div className="w-full mx-auto max-w-prose">
            <div className="relative h-0 aspect-ratio-3/4">
              <div className="absolute inset-0 bg-sky-blue">
                {/* Image goes here */}
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

function OurServices() {
  const services = [
    {
      label: 'Restorations',
    },
    {
      label: 'General Painting',
    },
    {
      label: 'New Homes',
    },
  ];

  return (
    <article className="relative bg-light-gray">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-center heading-2 text-burnt-orange">
          Our Services
        </h2>
        <div className="grid gap-6 mt-3 md:grid-cols-3">
          {services.map((service) => (
            <div className="w-full max-w-sm mx-auto">
              <div className="relative h-0 aspect-ratio-square">
                <div className="absolute inset-0 bg-white">
                  {/* Image goes here */}
                </div>
              </div>
              <h3
                dangerouslySetInnerHTML={{ __html: service.label }}
                className="mt-1 text-sm tracking-wider text-center uppercase"
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function MoreOfWhatWeOffer() {
  const services = [
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
          More of What We Offer
        </h2>
        <div className="grid gap-6 mt-3 md:grid-cols-3">
          {services.map((service) => (
            <div className="w-full max-w-sm mx-auto">
              <div className="relative h-0 aspect-ratio-3/4">
                <div className="absolute inset-0 bg-sky-blue">
                  {/* Image goes here */}
                </div>
              </div>
              <h3
                dangerouslySetInnerHTML={{ __html: service.label }}
                className="mt-1 text-sm tracking-wider text-center uppercase"
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default IndexPage;
