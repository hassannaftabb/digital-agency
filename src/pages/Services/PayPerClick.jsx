import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import PricingCard from '../../components/Pricing/PricingCard';
import { db } from '../../firebase';

const PayPerClick = () => {
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
      orderNiche: 'Pay Per Click',
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
      <h1 className='text-2xl text-center w-full font-bold'>Pay Per Click</h1>
      <p className='font-semibold text-lg text-center w-full mt-4'>
        The pay-per-click model is primarily based on keywords. For example, in
        search engines, online ads (also known as sponsored links) only appear
        when someone searches a keyword related to the product or service being
        advertised. Therefore, companies that rely on pay-per-click advertising
        models research and analyze the keywords most applicable to their
        products or services. Investing in relevant keywords can result in a
        higher number of clicks and, eventually, higher profits. The PPC model
        is considered to be beneficial for both advertisers and publishers. For
        advertisers, the model is advantageous because it provides an
        opportunity to advertise products or services to a specific audience who
        is actively searching for related content. In addition, a well-designed
        PPC advertising campaign allows an advertiser to save a substantial
        amount of money as the value of each visit (click) from a potential
        customer exceeds the cost of the click paid to a publisher.
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

export default PayPerClick;
