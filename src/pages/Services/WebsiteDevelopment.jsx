import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import PricingCard from '../../components/Pricing/PricingCard';
import { db } from '../../firebase';

const WebsiteDevelopment = () => {
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
      orderNiche: 'Website Development',
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
        Website Development
      </h1>
      <p className='font-semibold text-lg text-center w-full mt-4'>
        Web development refers in general to the tasks associated with
        developing websites for hosting via intranet or internet. The web
        development process includes web design, web content development,
        client-side/server-side scripting and network security configuration,
        among other tasks. In a broader sense, web development encompasses all
        the actions, updates, and operations required to build, maintain and
        manage a website to ensure its performance, user experience, and speed
        are optimal. It might also, but not necessarily, include all those
        strategic actions needed to ensure its proper ranking on search engine
        results. Usually, those tasks pertain to a different specialization,
        namely search engine optimization (SEO) Web development is also known as
        website development, while the professionals that maintain a website are
        called web developers or (more commonly) web devs.
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

export default WebsiteDevelopment;
