'use client';

import React from 'react';
import { useBag } from '@/app/context/Bagcontext'; // ✅ Import the global Bag context

const boysOutfits = [
  { id: 1, name: 'Nehru Jacket Set', price: '₹1,400', img: '/nehru-jacket.jpg' },
  { id: 2, name: 'Ethnic Kurta', price: '₹1,300', img: '/ethnic-kurta.jpg' },
  { id: 3, name: 'Party Suit', price: '₹1,800', img: '/party-suit.jpg' },
  { id: 4, name: 'Casual Blazer', price: '₹1,600', img: '/casual-blazer.jpg' },
  { id: 5, name: 'Pathani Kurta', price: '₹1,500', img: '/pathani-kurta.jpg' },
  { id: 6, name: 'Sherwani Set', price: '₹1,900', img: '/sherwani.jpg' },
  { id: 7, name: 'Indo Western Outfit', price: '₹2,000', img: '/indo-western.jpg' },
  { id: 8, name: 'Formal Suit', price: '₹1,750', img: '/formal-suit.jpg' },
  { id: 9, name: 'Casual Wear Combo', price: '₹1,200', img: '/casual-combo.jpg' },
  { id: 10, name: 'Traditional Dhoti Set', price: '₹1,350', img: '/dhoti-set.jpg' },
];

export default function BoysOutfitsPage() {
  const { addToBag } = useBag(); // ✅ Use global Bag context

  const handleAddToBag = (item) => {
    addToBag({
      id: item.id,
      title: item.name,
      price: item.price,
      img: item.img,
      category: 'Boys',
    });
    alert(`${item.name} added to bag!`);
  };

  return (
    <div className="p-6 bg-yellow-50 min-h-screen">
      <h1 className="text-3xl font-bold text-yellow-600 mb-6">Boys' Outfits</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {boysOutfits.map((item) => (
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
              className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Add to Bag
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
