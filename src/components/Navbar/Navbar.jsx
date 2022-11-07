import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  PencilIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaHandsHelping } from 'react-icons/fa';
import { TbSocial } from 'react-icons/tb';
import React from 'react';
import Loader from '../UI/Loader';

const solutions = [
  {
    name: 'Website Development',
    href: '/services/web-development',
    icon: ChartBarIcon,
  },
  {
    name: 'Search Engine Optimization',

    href: '/services/search-engine-optimization',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Pay Per Click',
    href: '/services/pay-per-click',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Mobile Application Development',
    href: '/services/mobile-app-development',
    icon: Squares2X2Icon,
  },
  {
    name: 'Content Writing',
    href: '/services/content-writing',
    icon: PencilIcon,
  },
  {
    name: 'Amazon Virtual Assisstance',
    href: '/services/amazon-virtual-assisstance',
    icon: BsFillPersonFill,
  },
  {
    name: 'Reputation Management',
    href: '/services/reputation-management',
    icon: FaHandsHelping,
  },
  {
    name: 'Social Media Marketing',
    href: '/services/social-media-marketing',
    icon: TbSocial,
  },
];

const resources = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'My Orders',
    href: '/my-orders',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem('da-$user_obj'));
  const [signOutLoading, setSignOutLoading] = React.useState(false);
  let signOutUser = () => {
    setSignOutLoading(true);
    signOut(auth);
    localStorage.removeItem('da-$user_obj');
    window.location = '/';
  };

  return (
    <Popover className='relative bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link to='/'>
              <span className='text-xl font-bold text-indigo-600'>
                Digital Agency
              </span>
            </Link>
          </div>
          <div className='-my-2 -mr-2 md:hidden'>
            <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>

          <Popover.Group as='nav' className='hidden space-x-10 md:flex'>
            <Link
              to='/'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Home
            </Link>
            <Link
              to='/my-orders'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
            >
              My Orders
            </Link>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    )}
                  >
                    <span>Services</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden='true'
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'>
                      <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                          {solutions.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                            >
                              <item.icon
                                className='h-6 w-6 flex-shrink-0 text-indigo-600'
                                aria-hidden='true'
                              />
                              <div className='ml-4'>
                                <p className='text-base font-medium text-gray-900'>
                                  {item.name}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0'>
            {user ? (
              <>
                <div
                  to='/sign-in'
                  onClick={signOutUser}
                  className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer'
                >
                  {signOutLoading ? <Loader /> : 'SignOut'}
                </div>
              </>
            ) : (
              <>
                <Link
                  to='/sign-in'
                  className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer'
                >
                  Sign In
                </Link>
                <Link
                  to='/sign-up'
                  className='ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          static
          className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'
        >
          {({ close }) => (
            <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
              <div className='px-5 pt-5 pb-6'>
                <div className='flex items-center justify-between'>
                  <div className='flex justify-start lg:w-0 lg:flex-1'>
                    <Link to='/'>
                      <span className='text-xl font-bold text-indigo-600'>
                        Digital Agency
                      </span>
                    </Link>
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close menu</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='mt-6'>
                  <nav className='grid gap-y-8'>
                    {solutions.map((item) => (
                      <Link
                        to={item.href}
                        className='-m-3 flex items-center rounded-md p-3 hover:bg-gray-50'
                        onClick={() => close()}
                        key={item.name}
                      >
                        <item.icon
                          className='h-6 w-6 flex-shrink-0 text-indigo-600'
                          aria-hidden='true'
                        />
                        <span className='ml-3 text-base font-medium text-gray-900'>
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className='space-y-6 py-6 px-5'>
                <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                  {resources.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className='text-base font-medium text-gray-900 hover:text-gray-700'
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                {user ? (
                  <>
                    <div
                      onClick={signOutUser}
                      className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                    >
                      LogOut
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <Link
                        to='/sign-up'
                        className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                      >
                        Sign up
                      </Link>
                      <p className='mt-6 text-center text-base font-medium text-gray-500'>
                        Existing customer?{' '}
                        <Link
                          to='/sign-in'
                          className='text-indigo-600 hover:text-indigo-500'
                        >
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
