import React from 'react';

const products = {
  Necklace: [
    { name: 'Royal Gold Necklace', price: '₹1499/day', image: '/images/necklace1.jpg' },
    { name: 'Pearl Choker', price: '₹999/day', image: '/images/necklace2.jpg' },
    { name: 'Temple Long Haar', price: '₹1299/day', image: '/images/necklace3.jpg' },
    { name: 'American Diamond Set', price: '₹1199/day', image: '/images/necklace4.jpg' },
  ],
  Wristband: [
    { name: 'Diamond Wristband', price: '₹899/day', image: '/images/wristband1.jpg' },
    { name: 'Silk Thread Band', price: '₹499/day', image: '/images/wristband2.jpg' },
    { name: 'Gold Kada', price: '₹799/day', image: '/images/wristband3.jpg' },
    { name: 'Charm Band', price: '₹699/day', image: '/images/wristband4.jpg' },
  ],
  Earrings: [
    { name: 'Kundan Earrings', price: '₹799/day', image: '/images/earrings1.jpg' },
    { name: 'Jhumka Set', price: '₹599/day', image: '/images/earrings2.jpg' },
    { name: 'Pearl Drops', price: '₹699/day', image: '/images/earrings3.jpg' },
    { name: 'Hoop Earrings', price: '₹499/day', image: '/images/earrings4.jpg' },
  ],
  Kamarband: [
    { name: 'Gold Kamarband', price: '₹1199/day', image: '/images/kamarband1.jpg' },
    { name: 'Beaded Waist Chain', price: '₹799/day', image: '/images/kamarband2.jpg' },
    { name: 'Designer Kamarbelt', price: '₹1399/day', image: '/images/kamarband3.jpg' },
    { name: 'Threaded Kamarband', price: '₹599/day', image: '/images/kamarband4.jpg' },
  ],
  'Wedding Rings': [
    { name: 'Platinum Couple Ring', price: '₹1599/day', image: '/images/wedding1.jpg' },
    { name: 'Diamond Solitaire', price: '₹1799/day', image: '/images/wedding2.jpg' },
    { name: 'Rose Gold Ring', price: '₹1699/day', image: '/images/wedding3.jpg' },
    { name: 'Stone Studded Band', price: '₹1499/day', image: '/images/wedding4.jpg' },
  ],
  Anklets: [
    { name: 'Silver Anklet', price: '₹499/day', image: '/images/anklet1.jpg' },
    { name: 'Ghungroo Anklet', price: '₹399/day', image: '/images/anklet2.jpg' },
    { name: 'Oxidised Chain', price: '₹599/day', image: '/images/anklet3.jpg' },
    { name: 'Charm Anklet', price: '₹349/day', image: '/images/anklet4.jpg' },
  ],
  Piercings: [
    { name: 'Nose Stud', price: '₹299/day', image: '/images/piercing1.jpg' },
    { name: 'Ear Hoops', price: '₹399/day', image: '/images/piercing2.jpg' },
    { name: 'Gold Nose Ring', price: '₹449/day', image: '/images/piercing3.jpg' },
    { name: 'Trendy Ear Cuff', price: '₹499/day', image: '/images/piercing4.jpg' },
  ],
};

const Jewellery = () => {
  return (
    <div className="bg-pink-50 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-10">Jewellery Collection</h1>

      {Object.entries(products).map(([category, items]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 hover:shadow-pink-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover rounded-xl"
                />
                <h3 className="mt-3 text-lg font-semibold">{item.name}</h3>
                <p className="text-pink-500">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jewellery;
