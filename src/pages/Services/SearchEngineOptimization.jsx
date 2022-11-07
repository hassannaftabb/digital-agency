import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import PricingCard from '../../components/Pricing/PricingCard';
import { db } from '../../firebase';

const SearchEngineOptimization = () => {
  const pricings = [
    {
      title: 'Basic',
      price: "Rs. 10'000",
      includes: ['Responsive', '3 Pages'],
      notIncludes: ['Content Upload', 'Custom Design', 'PWA'],
    },
    {
      title: 'Essential',
      price: "Rs. 20'000",
      includes: ['Responsive', '5 Pages', 'Content Upload', 'Custom Design'],
      notIncludes: ['PWA'],
    },
    {
      title: 'Pro',
      price: "Rs. 50'000",
      includes: [
        'Responsive',
        '10 Pages',
        'Content Upload',
        'Custom Design',
        'PWA',
      ],
      notIncludes: null,
    },
  ];
  const user = JSON.parse(localStorage.getItem('da-$user_obj'));
  let navigate = useNavigate();

  const placeOrder = async (order) => {
    let orderObj = {
      buyerId: user?.uid,
      buyerName: user?.name,
      orderIncludes: order?.includes,
      orderNotIncludes: order?.notIncludes,
      orderNiche: 'Search Engine Optimization',
      orderPrice: order?.price,
      orderStatus: 'Information Gathering',
      orderType: order?.title,
    };
    await addDoc(collection(db, 'orders', user?.uid, 'user-orders'), {
      ...orderObj,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        toast.success('Order placed successfully!');
        setTimeout(() => {
          navigate('/my-orders');
        }, 1500);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='my-6 mx-6'>
      <Toaster />
      <h1 className='text-2xl text-center w-full font-bold'>
        Search Engine Optimization
      </h1>
      <p className='font-semibold text-lg text-center w-full mt-4'>
        SEO means Search Engine Optimization and is the process used to optimize
        a website's technical configuration, content relevance and link
        popularity so its pages can become easily findable, more relevant and
        popular towards user search queries, and as a consequence, search
        engines rank them better. Search engines recommend SEO efforts that
        benefit both the user search experience and page’s ranking, by featuring
        content that fulfills user search needs. This includes the use of
        relevant keywords in titles, meta descriptions, and headlines (H1),
        featuring descriptive URLs with keywords rather than strings of numbers,
        and schema markup to specify the page's content meaning, among other SEO
        best practices.
      </p>
      <div className='grid grid-cols-3 gap-4 w-2/3 mx-auto my-8'>
        {pricings?.map((p, i) => {
          return (
            <PricingCard
              key={i}
              planPrice={p.price}
              planTitle={p.title}
              planIncludes={p.includes}
              planNotIncludes={p.notIncludes}
              onClick={() => placeOrder(p)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchEngineOptimization;
