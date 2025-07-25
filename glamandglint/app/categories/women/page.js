'use client';

import React from 'react';
import { useBag } from '@/app/context/Bagcontext'; // ✅ Make sure the file name matches exactly

const womenOutfits = [
  { id: 1, name: 'Red Lehenga', price: '₹2,500', img: '/red-lehenga.jpg' },
  { id: 2, name: 'Pink Saree', price: '₹1,800', img: '/pink-saree.jpg' },
  { id: 3, name: 'Wedding Gown', price: '₹3,000', img: '/wedding-gown.jpg' },
  { id: 4, name: 'Designer Salwar', price: '₹2,200', img: '/designer-salwar.jpg' },
  { id: 5, name: 'Reception Gown', price: '₹3,500', img: '/reception-gown.jpg' }
];

export default function WomenOutfitsPage() {
  const { addToBag } = useBag(); // ✅ Use global bag

  const handleAddToBag = (item) => {
    addToBag({
      id: item.id,
      title: item.name,
      price: item.price,
      img: item.img,
      category: 'Women',
    });
    alert(`${item.name} added to bag!`);
  };

  return (
    <div className="p-6 bg-pink-50 min-h-screen">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Women's Outfits</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {womenOutfits.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-xl shadow-md text-center">
            <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-3" />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600 mb-2">{item.price}</p>
            <button
              onClick={() => handleAddToBag(item)}
              className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600"
            >
              Add to Bag
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
