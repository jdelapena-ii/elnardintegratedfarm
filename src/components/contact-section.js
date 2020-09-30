import React from 'react';
import { FacebookIcon, InstagramIcon } from './vectors';

import { ContactForm } from './contact-form';
import { useGraphQL } from '../hooks';

function ContactSection() {
  return (
    <article className="relative px-4 py-12 bg-navy sm:px-6 lg:px-8">
      <div className="grid w-full gap-6 mx-auto max-w-7xl lg:grid-cols-3">
        <ContactInfo />
        <ContactForm />
      </div>
    </article>
  );
}

function ContactInfo() {
  const {
    site: { siteMetadata },
  } = useGraphQL();
  return (
    <div className="text-white lg:col-span-1">
      <h2 className="heading-2">Contact Us</h2>
      <dl className="mt-6 space-y-3">
        <div>
          <dt className="inline">Phone: </dt>
          <dd className="inline">
            <a
              href={`tel:${siteMetadata.phone.split(' ').join('')}`}
              className="hover:underline focus:underline"
            >
              {siteMetadata.phone}
            </a>
          </dd>
        </div>
        <div>
          <dt className="inline">Address: </dt>
          {/* // TODO: Update address */}
          <dd className="inline">123 Fake Street, Port Macquarie, NSW</dd>
        </div>
        <div>
          <dt className="inline">Email: </dt>
          <dd className="inline">
            <a
              href={`mailto:${siteMetadata.email}`}
              className="hover:underline focus:underline"
            >
              {siteMetadata.email}
            </a>
          </dd>
        </div>
      </dl>
      <div className="mt-12 space-y-6">
        <h3>Follow us on:</h3>
        <div className="flex space-x-3">
          <a href={siteMetadata.instagram}>
            <InstagramIcon className="w-7 h-7" />
          </a>
          <a href={siteMetadata.facebook}>
            <FacebookIcon className="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  );
}

export { ContactSection };
