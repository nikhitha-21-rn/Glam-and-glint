'use client';
import React from 'react';

const products = [
  {
    id: 'n1',
    name: 'Diamond Necklace',
    price: '₹4,999',
    image: '/images/jewellery/necklace1.jpg',
  },
  {
    id: 'n2',
    name: 'Floral Gold Chain',
    price: '₹3,499',
    image: '/images/jewellery/necklace2.jpg',
  },
  {
    id: 'n3',
    name: 'Pearl Statement Piece',
    price: '₹2,799',
    image: '/images/jewellery/necklace3.jpg',
  },
];

export default function NecklacePage() {
  const addToBag = (item) => {
    const currentBag = JSON.parse(localStorage.getItem('bag')) || [];
    currentBag.push(item);
    localStorage.setItem('bag', JSON.stringify(currentBag));
    alert(`${item.name} added to bag!`);
  };

  return (
    <main className="p-10 bg-pink-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-pink-600">Necklaces</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div key={item.id} className="bg-white p-4 shadow-lg rounded-xl">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p>{item.price}</p>
            <button
              onClick={() => addToBag(item)}
              className="mt-3 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
            >
              Add to Bag
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
