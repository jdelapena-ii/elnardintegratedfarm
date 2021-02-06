import React from 'react';
import { Link } from 'gatsby';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';

import { Logo2 } from './vectors';
import { mainNavigation } from '../data';

const transition = { min: 0, max: 100, bounceDamping: 9 };

function MobileMenu({ isOpen, setIsOpen }) {
  function close() {
    setIsOpen(false);
  }

  const MotionDialogOverlay = motion.custom(DialogOverlay);
  const MotionDialogContent = motion.custom(DialogContent);

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionDialogOverlay
          onDismiss={close}
          initial="closed"
          animate="open"
          exit="closed"
          variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
          transition={transition}
          className="fixed inset-0 z-40"
        >
          <div className="fixed inset-0 z-40 flex justify-end bg-gray-600 bg-opacity-75">
            <MotionDialogContent
              aria-label="Mobile navigation"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{ open: { x: 0 }, closed: { x: '100%' } }}
              transition={transition}
              className="relative flex flex-col flex-1 w-full max-w-xs py-4 bg-forest-green focus:outline-none"
            >
              <div aria-hidden className="flex-shrink-0 w-14">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
              <div className="absolute top-0 left-0 p-1 -ml-14">
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close sidebar"
                  className="flex items-center justify-center w-12 h-12 transition duration-150 ease-in-out rounded-full hover:bg-burnt-orange focus:outline-none focus:bg-burnt-orange"
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
              <div className="px-2">
                <Link
                  to="/"
                  onClick={close}
                  className="flex items-center px-2 py-2 rounded-md"
                >
                  <Logo2 className="h-16 md:h-20" />
                </Link>
              </div>
              <div className="flex-1 h-0 mt-5 overflow-y-auto">
                <ul className="px-2">
                  {mainNavigation.map((node) => (
                    <li key={node.id}>
                      {node.submenu ? (
                        <SubMenu node={node} close={close} />
                      ) : (
                        <ListItem node={node} close={close} />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </MotionDialogContent>
          </div>
        </MotionDialogOverlay>
      )}
    </AnimatePresence>
  );
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

function ListItem({ node, close }) {
  return (
    <Link
      to={node.slug}
      onClick={close}
      activeClassName="bg-burnt-orange"
      className="flex items-center px-2 py-2 mt-1 text-base font-normal leading-6 text-white transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-burnt-orange focus:outline-none focus:text-white focus:bg-burnt-orange"
    >
      {node.label}
    </Link>
  );
}

ListItem.propTypes = {
  close: PropTypes.func.isRequired,
  node: PropTypes.object.isRequired,
};

function SubMenu({ node, close }) {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className="flex items-center justify-between w-full px-2 py-2 mt-1 text-base font-normal leading-6 text-white transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-burnt-orange focus:outline-none focus:text-white focus:bg-burnt-orange">
            <span>{node.label}</span>
            <span className="ml-2 -mr-1">
              <motion.svg
                viewBox="0 0 20 20"
                fill="currentColor"
                initial={{ rotate: '0deg' }}
                animate={{ rotate: open ? '90deg' : '0deg' }}
                transition={transition}
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </span>
          </Menu.Button>
          <AnimatePresence>
            {open && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { height: 'auto', opacity: 1, overflow: 'visible' },
                  closed: { height: 0, opacity: 0, overflow: 'hidden' },
                }}
                transition={transition}
              >
                <Menu.Items static as="ul" className="rounded-md">
                  {node.submenu.map((submenu) => (
                    <Menu.Item key={submenu.id} as="li">
                      {({ active }) => (
                        <Link
                          to={submenu.slug}
                          onClick={close}
                          partiallyActive={false}
                          activeClassName="bg-burnt-orange"
                          className={`flex items-center pl-6 pr-2 py-2 mt-1 text-base font-normal leading-6 text-white transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-burnt-orange focus:outline-none focus:text-white focus:bg-burnt-orange ${
                            active ? 'bg-burnt-orange' : 'bg-navy'
                          }`}
                        >
                          {submenu.label}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  );
}

SubMenu.propTypes = {
  close: PropTypes.func.isRequired,
  node: PropTypes.object.isRequired,
};

export { MobileMenu };
