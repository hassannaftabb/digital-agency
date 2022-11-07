import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import PricingCard from '../../components/Pricing/PricingCard';
import { db } from '../../firebase';

const ContentWriting = () => {
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
      orderNiche: 'Content Writing',
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
      <h1 className='text-2xl text-center w-full font-bold'>Content Writing</h1>
      <p className='font-semibold text-lg text-center w-full mt-4'>
        Content writing is the process of writing, editing, and publishing
        content in a digital format. That content can include blog posts, video
        or podcast scripts, ebooks or whitepapers, press releases, product
        category descriptions, landing page or social media copy ... and more.
        Simply put, content writers are the storytellers for their brand. They
        convey meaningful, helpful, and insightful messages to inspire and move
        an audience to take action — that action being a final sale. Nowadays,
        content creation is a critical component of most businesses marketing
        strategies — in fact, as of 2020, 70% of marketers now actively invest
        in content marketing. This means the role of content writer is more
        in-demand than ever before. However, the role varies depending on both
        industry and business needs. For instance, some businesses might invest
        heavily in a social media strategy, while other companies prefer
        creating content in the format of blog posts or e-books. Regardless of
        format, a content writer is critical for creating high-quality content
        that represents and strengthens a brand's voice, while attracting,
        engaging, and delighting the right audience.
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

export default ContentWriting;
