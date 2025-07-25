'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function OutfitsPage() {
  return (
    <main className="min-h-screen bg-pink-50 p-10">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-10">Explore Outfit Categories</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        {/* Women */}
        <Link href="/collections/categories/women">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
            <Image
              src="/images/women.jpg"
              alt="Women"
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-full object-cover"
            />
            <h2 className="text-2xl font-semibold text-pink-500">👗 Women</h2>
          </div>
        </Link>

        {/* Men */}
        <Link href="/collections/categories/men">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
            <Image
              src="/images/men.jpg"
              alt="Men"
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-full object-cover"
            />
            <h2 className="text-2xl font-semibold text-blue-500">🧥 Men</h2>
          </div>
        </Link>

        {/* Girls */}
        <Link href="/collections/categories/girls">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
            <Image
              src="/images/girls.jpg"
              alt="Girls"
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-full object-cover"
            />
            <h2 className="text-2xl font-semibold text-purple-500">👧 Girls</h2>
          </div>
        </Link>

        {/* Boys */}
        <Link href="/collections/categories/boys">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
            <Image
              src="/images/boys.jpg"
              alt="Boys"
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-full object-cover"
            />
            <h2 className="text-2xl font-semibold text-green-500">👦 Boys</h2>
          </div>
        </Link>
      </div>
    </main>
  );
}
