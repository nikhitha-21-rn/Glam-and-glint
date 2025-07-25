'use client';

import React from 'react';
import { useBag } from '@/app/context/Bagcontext'; // ✅ Global Bag context

const menOutfits = [
  { id: 1, name: 'Sherwani', price: '₹2,800', img: '/sherwani.jpg' },
  { id: 2, name: 'Formal Suit', price: '₹1,900', img: '/formal-suit.jpg' },
  { id: 3, name: 'Casual Blazer', price: '₹2,000', img: '/casual-blazer.jpg' },
  { id: 4, name: 'Kurta Pajama', price: '₹1,600', img: '/kurta-pajama.jpg' },
  { id: 5, name: 'Wedding Tuxedo', price: '₹3,200', img: '/wedding-tuxedo.jpg' },
  { id: 6, name: 'Denim Jacket Look', price: '₹1,700', img: '/denim-jacket.jpg' },
  { id: 7, name: 'Nehru Jacket Combo', price: '₹1,800', img: '/nehru-jacket-men.jpg' },
  { id: 8, name: 'Ethnic Dhoti Kurta', price: '₹2,100', img: '/dhoti-kurta.jpg' },
  { id: 9, name: 'Printed Short Kurta', price: '₹1,200', img: '/printed-kurta.jpg' },
  { id: 10, name: 'Linen Casual Shirt', price: '₹950', img: '/linen-shirt.jpg' },
];

export default function MenOutfitsPage() {
  const { addToBag } = useBag(); // ✅ use context

  const handleAddToBag = (item) => {
    addToBag({
      id: item.id,
      title: item.name,
      price: item.price,
      img: item.img,
      category: 'Men',
    });
    alert(`${item.name} added to bag!`);
  };

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Men's Outfits</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menOutfits.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow-md text-center"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.price}</p>
            <button
              onClick={() => handleAddToBag(item)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add to Bag
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
