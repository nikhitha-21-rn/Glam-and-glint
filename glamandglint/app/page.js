'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-pink-50 text-gray-800 font-sans">
      <section className="text-center py-20 px-4 bg-gradient-to-r from-pink-100 to-pink-200">
        <h2 className="text-4xl font-bold mb-4">Rent Stunning Outfits & Dazzling Jewellery</h2>
        <p className="text-lg mb-6">Perfect for weddings, parties, and all special occasions – without buying!</p>
        <Link href="/collections">
          <button className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition duration-300">
            Browse Collections
          </button>
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-6 p-10">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Designer Outfits</h3>
          <p>Elegant sarees, lehengas, gowns, and more at your fingertips.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Bridal Jewellery</h3>
          <p>Traditional and modern jewellery sets to elevate your look.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Flexible Rentals</h3>
          <p>Choose rental durations and return easily after your event.</p>
        </div>
      </section>

      <footer className="text-center p-4 text-sm text-gray-600 bg-white border-t">
        © 2025 Glam & Glint. All rights reserved.
      </footer>
    </main>
  );
}
