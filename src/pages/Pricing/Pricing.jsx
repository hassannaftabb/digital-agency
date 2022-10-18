import React from 'react';
import PricingCard from '../../components/Pricing/PricingCard';

const Pricing = () => {
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
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 w-2/3 mx-auto my-8">
        {pricings?.map((p, i) => {
          return (
            <PricingCard
              key={i}
              planPrice={p.price}
              planTitle={p.title}
              planIncludes={p.includes}
              planNotIncludes={p.notIncludes}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
