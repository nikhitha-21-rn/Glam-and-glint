'use client';

import React from 'react';
import { useBag } from '@/app/context/Bagcontext'; // ✅ Import global context

const girlsOutfits = [
  { id: 1, name: 'Frock Dress', price: '₹1,200', img: '/frock.jpg' },
  { id: 2, name: 'Princess Gown', price: '₹1,600', img: '/princess-gown.jpg' },
  { id: 3, name: 'Floral Lehenga', price: '₹1,400', img: '/floral-lehenga.jpg' },
  { id: 4, name: 'Cute Kurti Set', price: '₹1,100', img: '/kurti.jpg' },
  { id: 5, name: 'Festival Dress', price: '₹1,700', img: '/festival.jpg' }
];

export default function GirlsOutfitsPage() {
  const { addToBag } = useBag(); // ✅ Use shared context

  const handleAddToBag = (item) => {
    addToBag({
      id: item.id,
      title: item.name,
      price: item.price,
      img: item.img,
      category: 'Girls'
    });
    alert(`${item.name} added to bag!`);
  };

  return (
    <div className="p-6 bg-purple-50 min-h-screen">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Girls' Outfits</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {girlsOutfits.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-xl shadow-md text-center">
            <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-3" />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.price}</p>
            <button
              onClick={() => handleAddToBag(item)}
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              Add to Bag
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
