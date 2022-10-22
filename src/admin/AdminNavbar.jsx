import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import adminAvatar from '../assets/admin-avatar.png';
import { auth } from '../firebase';
const AdminNavbar = () => {
  const [menu, setMenu] = React.useState(false);
  let signOutAdmin = () => {
    signOut(auth);
    localStorage.removeItem('da-$admin_obj');
    window.location = '/admin/login';
  };
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white font-bold text-xl">
              Digital Agency
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/admin/messages"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Messages
                </Link>
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Orders
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => setMenu(!menu)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={adminAvatar}
                      alt=""
                    />
                  </button>
                </div>

                {menu && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    <div
                      className="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-2"
                      onClick={signOutAdmin}
                    >
                      Sign out
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden"></div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className="md:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <Link
            to="/admin/messages"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Messages
          </Link>
          <Link
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Orders
          </Link>
        </div>
        <div className="border-t border-gray-700 pt-4 pb-3">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={adminAvatar}
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">
                Admin
              </div>
              <div className="text-sm font-medium leading-none text-gray-400">
                admin@digital-agency.com
              </div>
            </div>
          </div>
          <div className="mt-3 space-y-1 px-2">
            <div className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
              Sign out
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
