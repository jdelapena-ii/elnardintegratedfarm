import PropTypes from 'prop-types';
import React from 'react';
import { useTransition, animated } from 'react-spring';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { Link } from 'gatsby';
import { Logo } from './vectors';
import { mainNavigation } from '../data';

function MobileMenu({ isOpen, setIsOpen }) {
  function close() {
    setIsOpen(false);
  }

  const AnimatedDialogOverlay = animated(DialogOverlay);
  const AnimatedDialogContent = animated(DialogContent);

  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0, x: 100 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 100 },
  });

  return transitions.map(
    ({ item, key, props: styles }) =>
      item && (
        <AnimatedDialogOverlay
          key={key}
          onDismiss={close}
          style={{ opacity: styles.opacity }}
          className="fixed inset-0 z-40"
        >
          <div className="fixed inset-0 z-40 flex justify-end bg-gray-600 bg-opacity-75">
            <AnimatedDialogContent
              aria-label="Mobile navigation"
              style={{
                transform: styles.x.interpolate(
                  (value) => `translate3d(${value}%, 0, 0)`
                ),
              }}
              className="relative flex flex-col flex-1 w-full max-w-xs py-4 bg-navy focus:outline-none"
            >
              <div aria-hidden className="flex-shrink-0 w-14">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
              <div className="absolute top-0 left-0 p-1 -ml-14">
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close sidebar"
                  className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-burnt-orange focus:outline-none focus:bg-burnt-orange"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <Link
                to="/"
                onClick={close}
                className="flex items-center flex-shrink-0 px-4"
              >
                <Logo className="w-auto h-16 text-teal-300 fill-current md:h-20" />
              </Link>
              <div className="flex-1 h-0 mt-5 overflow-y-auto">
                <nav className="px-2">
                  {mainNavigation.map((node) => (
                    <Link
                      key={node.id}
                      to={node.slug}
                      onClick={close}
                      activeClassName="bg-burnt-orange"
                      className="flex items-center px-2 py-2 mt-1 text-base font-normal leading-6 text-white transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-burnt-orange focus:outline-none focus:text-white focus:bg-burnt-orange"
                    >
                      {node.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </AnimatedDialogContent>
          </div>
        </AnimatedDialogOverlay>
      )
  );
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export { MobileMenu };
