'use client';
import React from 'react';

const returns = [
  {
    id: 'R2001',
    item: 'Kundan Jewellery Set',
    date: 'June 13, 2025',
    status: 'Return Requested',
  },
  {
    id: 'R2002',
    item: 'Silk Saree',
    date: 'June 12, 2025',
    status: 'Returned',
  },
];

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-pink-50 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Return History</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {returns.map(ret => (
          <div key={ret.id} className="bg-white rounded-xl p-4 shadow-md">
            <h3 className="text-pink-600 font-semibold">Return #{ret.id}</h3>
            <p><strong>Item:</strong> {ret.item}</p>
            <p><strong>Date:</strong> {ret.date}</p>
            <p><strong>Status:</strong> {ret.status}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
