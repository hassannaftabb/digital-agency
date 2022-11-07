import React from 'react';
import { Link } from 'react-router-dom';

const MainServicesPage = () => {
  return (
    <section className='bg-gray-900 text-white'>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg text-center'>
          <h2 className='text-3xl font-bold sm:text-4xl'>Our Services</h2>
        </div>
        <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <Link
            className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10'
            to='/services/search-engine-optimization'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10 text-indigo-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M12 14l9-5-9-5-9 5 9 5z' />
              <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
              />
            </svg>
            <h2 className='mt-4 text-xl font-bold text-white'>
              Search Engine Optimization
            </h2>
            <p className='mt-1 text-sm text-gray-300'>
              Search engine optimization is the process of improving the quality
              and quantity of website traffic to a website or a web page from
              search engines. SEO targets unpaid traffic rather than direct
              traffic or paid traffic.
            </p>
          </Link>
          <Link
            className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10'
            to='/services/pay-per-click'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10 text-indigo-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M12 14l9-5-9-5-9 5 9 5z' />
              <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
              />
            </svg>
            <h2 className='mt-4 text-xl font-bold text-white'>Pay Per Click</h2>
            <p className='mt-1 text-sm text-gray-300'>
              Pay-per-click is an internet advertising model used to drive
              traffic to websites, in which an advertiser pays a publisher when
              the ad is clicked. Pay-per-click is usually associated with
              first-tier search engines.
            </p>
          </Link>
          <Link
            className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10'
            to='/services/mobile-app-development'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10 text-indigo-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M12 14l9-5-9-5-9 5 9 5z' />
              <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
              />
            </svg>
            <h2 className='mt-4 text-xl font-bold text-white'>
              Mobile App Development
            </h2>
            <p className='mt-1 text-sm text-gray-300'>
              Mobile application development is the process of creating software
              applications that run on a mobile device, and a typical mobile
              application.
            </p>
          </Link>
          <Link
            className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10'
            to='/services/content-writing'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10 text-indigo-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M12 14l9-5-9-5-9 5 9 5z' />
              <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
              />
            </svg>
            <h2 className='mt-4 text-xl font-bold text-white'>
              Content Writing
            </h2>
            <p className='mt-1 text-sm text-gray-300'>
              Content writing is the process of writing, editing, and publishing
              content in a digital format. That content can include blog posts,
              video or podcast scripts, ebooks or whitepapers, press releases,
              product category descriptions, landing page or social media copy
            </p>
          </Link>
          <Link
            className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10'
            to='/services/amazon-virtual-assisstance'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10 text-indigo-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M12 14l9-5-9-5-9 5 9 5z' />
              <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
              />
            </svg>
            <h2 className='mt-4 text-xl font-bold text-white'>
              Amazon And Virtual Assisstance
            </h2>
            <p className='mt-1 text-sm text-gray-300'>
              In Amazon terms, a Virtual Assistant (VA) is someone who works
              remotely in your Amazon business. They can either be employed
              full-time, part-time or on a casual (e.g. per task) basis. There
              are many tasks a VA can do, from admin to content creation,
              product sourcing and whatever your creativity stretches to.
            </p>
          </Link>
          <Link
            className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10'
            to='/services/website-development'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10 text-indigo-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M12 14l9-5-9-5-9 5 9 5z' />
              <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
              />
            </svg>
            <h2 className='mt-4 text-xl font-bold text-white'>
              Website Development
            </h2>
            <p className='mt-1 text-sm text-gray-300'>
              Web development is the work involved in developing a website for
              the Internet or an intranet. Web development can range from
              developing a simple single static page of plain text to complex
              web applications, electronic businesses, and social network
              services.
            </p>
          </Link>
          <Link
            className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10'
            to='/services/reputation-management'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10 text-indigo-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M12 14l9-5-9-5-9 5 9 5z' />
              <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
              />
            </svg>
            <h2 className='mt-4 text-xl font-bold text-white'>
              Reputation Management
            </h2>
            <p className='mt-1 text-sm text-gray-300'>
              Reputation management, originally a public relations term, refers
              to the influencing, controlling, enhancing, or concealing of an
              individual's or group's reputation.
            </p>
          </Link>
          <Link
            className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10'
            to='/services/social-media-marketing'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10 text-indigo-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M12 14l9-5-9-5-9 5 9 5z' />
              <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
              />
            </svg>
            <h2 className='mt-4 text-xl font-bold text-white'>
              Social Media Marketing
            </h2>
            <p className='mt-1 text-sm text-gray-300'>
              Social media marketing is the use of social media platforms and
              websites to promote a product or service. Although the terms
              e-marketing and digital marketing are still dominant in academia,
              social media marketing is becoming more popular for both
              practitioners and researchers.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainServicesPage;
