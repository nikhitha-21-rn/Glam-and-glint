'use client';
import { useEffect } from 'react';

export default function OrderPlacedPage() {
  useEffect(() => {
    // Extra protection: make sure bag is cleared in both state and storage
    localStorage.removeItem('bag');
  }, []);

  return (
    <main className="min-h-screen bg-pink-50 p-10 text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">🎉 Order Placed!</h1>
      <p className="text-gray-700 text-lg">Thank you for shopping with Glam & Glint!</p>
    </main>
  );
}
