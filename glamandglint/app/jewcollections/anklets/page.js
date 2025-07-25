'use client';

import Image from 'next/image';

const anklets = [
  {
    id: 1,
    name: 'Silver Charm Anklet',
    image: '/images/anklet1.jpg',
    price: '₹249',
  },
  {
    id: 2,
    name: 'Traditional Payal Anklet',
    image: '/images/anklet2.jpg',
    price: '₹349',
  },
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {anklets.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-md p-4">
            <Image src={item.image} alt={item.name} width={300} height={300} className="rounded-xl" />
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
