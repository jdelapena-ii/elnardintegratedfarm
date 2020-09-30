import React from 'react';
import { Link } from 'gatsby';

import { Layout, SEO, Hero, ContactSection, GoogleMap } from '../components';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <OurStory />
      <GoogleMap />
      <ContactSection />
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
    <article className="py-12">
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="bg-sky-blue">{/* Image goes here */}</div>
          <div className="lg:col-span-2 lg:py-12">
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

export default IndexPage;
