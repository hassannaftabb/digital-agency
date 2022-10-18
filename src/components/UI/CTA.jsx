import React from 'react';
import { Link } from 'react-router-dom';

const Cta = () => {
  return (
    <aside className="p-12 pt-48 sm:p-8 sm:pt-64 bg-blue-900">
      <div className="sm:items-end sm:justify-between sm:flex">
        <div className="max-w-xl">
          <div className="text-3xl font-bold text-white sm:text-4xl">
            Get linked with Digital Agency
          </div>
        </div>
        <Link to="/contact">
          <div className="inline-block px-8 py-4 mt-4 text-blue-500 bg-white rounded-lg shadow-lg hover:opacity-75 sm:mt-0 sm:ml-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:h-8 sm:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Cta;
