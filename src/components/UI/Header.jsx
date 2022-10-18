import React from 'react';

const Header = () => {
  const user = JSON.parse(localStorage.getItem('da-$user_obj'));

  return (
    <>
      <header aria-label="Page Header" className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                {!(
                  user?.metadata?.lastLoginAt === user?.metadata?.createdAt
                ) ? (
                  <>Welcome Back, {user?.name}!</>
                ) : (
                  <>Welcome, {user?.name}!</>
                )}
              </h1>
              <p className="mt-1.5 text-sm text-gray-500">
                Let's explore Digital Agency! 🎉
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
