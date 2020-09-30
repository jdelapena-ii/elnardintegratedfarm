import React from 'react';
import { Link } from 'gatsby';

import { Layout, SEO, Hero, ContactSection, GoogleMap } from '../components';

function SuccessPage() {
  return (
    <Layout>
      <SEO title="Success" />
      <HeroSection />
      <ContactSection />
      <GoogleMap />
    </Layout>
  );
}

function HeroSection() {
  return (
    <Hero>
      <div className="w-full space-y-4 text-center">
        <h1 className="heading-1">Success</h1>
        <p className="text-2xl italic uppercase sm:text-3xl">
          Thank you, our team will get <br />
          back to you shortly
        </p>
        <Link to="/" className="button">
          Return Home
        </Link>
      </div>
    </Hero>
  );
}

export default SuccessPage;
