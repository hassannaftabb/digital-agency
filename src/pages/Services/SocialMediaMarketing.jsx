import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import PricingCard from '../../components/Pricing/PricingCard';
import { db } from '../../firebase';

const SocialMediaMarketing = () => {
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
      orderNiche: 'Social Media Marketing',
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
        Social Media Marketing
      </h1>
      <p className='font-semibold text-lg text-center w-full mt-4'>
        With over 80% of consumers reporting that social media—especially
        influencer content—significantly impacts buying decisions, marketers
        across industries are driving the evolution of social media marketing
        (SMM) from a stand-alone tool to a multipronged source of marketing
        intelligence on an increasingly important—and growing—audience. 1 Within
        18 years, from 2004 (when MySpace became the first social media site to
        reach one million users) to 2022, the dramatic growth of interactive
        digital channels took social media to levels that challenge even the
        reach of television and radio. 2 By Q1 of 2022, there were 4.6 billion
        social media users globally—over 58% of the world’s population—an
        increase of over 10% in one year alone. 3 4 As the use of social media
        trends upward, marketers are perfecting strategies to capture the
        significant competitive advantage that engagement with this key audience
        can deliver even more rapidly and more effectively than traditional
        marketing.
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

export default SocialMediaMarketing;
