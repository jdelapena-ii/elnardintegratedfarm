import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Menu, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';

import { mainNavigation } from '../data';
import { Logo } from './vectors';
import { TopBar } from './topbar';
import { MobileMenu } from './mobile-menu';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-20 shadow bg-navy">
      <TopBar />
      <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between lg:items-end">
          <Link
            to="/"
            className="flex items-center flex-shrink-0 transition duration-150 ease-in-out"
          >
            <Logo className="h-16 fill-current md:h-20" />
          </Link>
          <ul className="items-center hidden space-x-8 lg:ml-6 lg:flex">
            {mainNavigation.map((node) =>
              node.submenu ? (
                <SubMenu key={node.id} node={node} />
              ) : (
                <li key={node.id}>
                  <Link
                    to={node.slug}
                    partiallyActive={node.slug !== '/'}
                    activeClassName="text-burnt-orange focus:text-burnt-orange"
                    className="inline-flex items-center px-1 pt-1 text-sm font-normal leading-5 text-white transition duration-150 ease-in-out border-b-2 border-transparent hover:text-burnt-orange focus:shadow-none focus:text-burnt-orange"
                  >
                    {node.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <div className="flex items-center -mr-2 lg:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen((prevState) => !prevState)}
              aria-label="Main menu"
              aria-expanded="false"
              className="inline-flex items-center justify-center p-2 text-white transition duration-150 ease-in-out rounded-md hover:bg-burnt-orange focus:outline-none focus:bg-burnt-orange"
            >
              {isOpen ? (
                <svg
                  className="block w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </nav>
  );
}

function SubMenu({ node }) {
  return (
    <li className="relative">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="inline-flex items-center px-1 pt-1 text-sm font-normal leading-5 text-white transition duration-150 ease-in-out border-b-2 border-transparent hover:text-burnt-orange focus:shadow-none focus:text-burnt-orange">
              <span>{node.label}</span>
              <span className="ml-2 -mr-1">
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    open
                      ? 'rotate-90 duration-100 ease-out'
                      : 'rotate-0 ease-in duration-75'
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Menu.Button>

            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute left-0 w-56 mt-2 origin-top-left bg-white divide-y divide-gray-100 shadow-lg"
              >
                <div className="py-1">
                  {node.submenu.map((submenu) => (
                    <Menu.Item key={submenu.id}>
                      {({ active }) => (
                        <Link
                          to={submenu.slug}
                          className={`${
                            active
                              ? 'bg-burnt-orange text-white'
                              : 'bg-white text-gray-700'
                          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          {submenu.label}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </li>
  );
}

SubMenu.propTypes = {
  node: PropTypes.object.isRequired,
};

export { Header };
