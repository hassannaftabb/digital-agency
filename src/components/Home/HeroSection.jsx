import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  let handleGetStartedClick = () => {
    if (user) {
      navigate('/services');
    } else {
      navigate('/sign-in');
    }
  };
  return (
    <div>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <>
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Get Started with
                <strong className="font-extrabold text-indigo-600 sm:block ml-1 sm:ml-0">
                  Digital Agency
                </strong>
              </h1>
            </>
            <p className="mt-4 sm:text-xl sm:leading-relaxed font-bold">
              <em>
                Let's get started with digital agency and explore our amazing IT
                services!
              </em>
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div
                className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-800 focus:outline-none focus:ring active:bg-red-500 sm:w-auto cursor-pointer"
                onClick={handleGetStartedClick}
              >
                Get Started
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
