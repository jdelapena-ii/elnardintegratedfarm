import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { Logo } from './vectors';
import { useGraphQL } from '../hooks';
import { footerNavigation, socialLinks } from '../data';

function Footer() {
  const {
    site: {
      siteMetadata: { title, phone, email, address },
    },
  } = useGraphQL();
  return (
    <footer className="text-white bg-navy">
      <div className="w-full px-4 py-10 mx-auto sm:px-6 max-w-7xl lg:px-8">
        <div className="xl:grid xl:grid-cols-3">
          <div className="xl:col-span-1">
            <div className="flex justify-center xl:pt-6">
              <Link to="/">
                <span className="sr-only">{title}</span>
                <Logo aria-hidden focusable={false} className="h-24" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:ml-10 md:mx-auto md:gap-x-4 xl:col-span-2">
            <div className="my-6">
              <ul className="space-y-1">
                {footerNavigation.col1.map((node) =>
                  node.submenu ? (
                    <SubMenu key={node.id} node={node} />
                  ) : (
                    <li key={node.id}>
                      <Link
                        to={node.slug}
                        className="hover:underline focus:underline"
                      >
                        {node.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="my-6">
              <ul className="space-y-1">
                {footerNavigation.col2.map((node) =>
                  node.submenu ? (
                    <SubMenu key={node.id} node={node} />
                  ) : (
                    <li key={node.id}>
                      <Link
                        to={node.slug}
                        className="hover:underline focus:underline"
                      >
                        {node.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="my-6">
              <dl className="space-y-1">
                <div>
                  <dt className="sr-only">Phone: </dt>
                  <dd>
                    <a
                      href={`tel:${phone.split(' ').join('')}`}
                      className="hover:underline focus:underline"
                    >
                      {phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Email: </dt>
                  <dd>
                    <a
                      href={`mailto:${email}`}
                      className="break-all hover:underline focus:underline"
                    >
                      {email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Address: </dt>
                  <dd>
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline focus:underline"
                    >
                      {address.line1}, {address.line2}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="flex justify-start mt-1 space-x-3">
                {socialLinks.map((socialLink) => (
                  <a
                    key={socialLink.id}
                    href={socialLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{socialLink.label}</span>
                    <socialLink.icon className="h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-10 border-t border-white">
          <p className="italic tracking-wider text-center uppercase">
            Website by{' '}
            <a
              href="https://www.phirannodesigns.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold uppercase hover:underline focus:underline"
            >
              Phiranno Designs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SubMenu({ node }) {
  return (
    <li>
      <Link to={node.slug} className="hover:underline focus:underline">
        {node.label}
      </Link>
      <ul className="space-y-1">
        {node.submenu.map((sub) => (
          <li className="ml-2" key={sub.id}>
            <Link className="hover:underline focus:underline" to={sub.slug}>
              <span aria-hidden className="select-none">
                -{' '}
              </span>
              {sub.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

SubMenu.propTypes = {
  node: PropTypes.object.isRequired,
};

export { Footer };
