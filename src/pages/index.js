import React from 'react';
import { Link } from 'gatsby';

import { Layout, SEO, Hero, ContactSection, GoogleMap } from '../components';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
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

export default IndexPage;
