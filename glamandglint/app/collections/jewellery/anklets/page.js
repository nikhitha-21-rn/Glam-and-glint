'use client';

import Image from 'next/image';

const anklets = [
  { id: 1, name: 'Silver Charm Anklet', image: '/images/anklet1.jpg', price: '₹249' },
  { id: 2, name: 'Traditional Payal Anklet', image: '/images/anklet2.jpg', price: '₹349' },
  { id: 3, name: 'Beaded Anklet Set', image: '/images/anklet3.jpg', price: '₹299' },
  { id: 4, name: 'Kundan Design Anklet', image: '/images/anklet4.jpg', price: '₹399' },
  { id: 5, name: 'Gold Plated Designer Anklet', image: '/images/anklet5.jpg', price: '₹449' },
  { id: 6, name: 'Boho Feather Anklet', image: '/images/anklet6.jpg', price: '₹269' },
  { id: 7, name: 'Pearl Drop Anklet', image: '/images/anklet7.jpg', price: '₹379' },
  { id: 8, name: 'Minimalist Chain Anklet', image: '/images/anklet8.jpg', price: '₹199' }
];

export default function AnkletsPage() {
  const addToBag = (item) => {
    const currentBag = JSON.parse(localStorage.getItem('bag')) || [];
    currentBag.push(item);
    localStorage.setItem('bag', JSON.stringify(currentBag));
    alert(`${item.name} added to bag!`);
  };

  return (
    <main className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Anklets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {anklets.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-md p-4">
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={300}
              className="rounded-xl"
            />
            <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
            <p className="text-pink-600 font-bold">{item.price}</p>
            <button
              className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600"
              onClick={() => addToBag(item)}
            >
              Add to Bag
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
