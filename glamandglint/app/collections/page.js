'use client';
import Link from 'next/link';

export default function BrowseCollections() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white text-gray-800 font-sans px-4 py-10">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">Browse Collections</h1>
        <p className="text-lg text-gray-600 mb-10">Choose from our wide range of outfits and jewellery</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Outfits Card */}
          <div className="bg-white border hover:shadow-xl transition-shadow rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">Outfits</h2>
            <div className="grid grid-cols-2 gap-4">
              {["women", "men", "girls", "boys"].map((category) => (
                <Link
                  key={category}
                  href={`/collections/categories/${category}`}
                  className="block bg-pink-100 hover:bg-pink-200 text-pink-800 rounded-lg px-4 py-2 font-medium transition"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Link>
              ))}
            </div>
          </div>

          {/* Jewellery Card */}
          <div className="bg-white border hover:shadow-xl transition-shadow rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">Jewellery</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "necklace",
                "wristband",
                "earrings",
                "kamarband",
                "wedding-rings",
                "anklets",
                "piercings",
              ].map((item) => (
                <Link
                  key={item}
                  href={`/collections/jewellery/${item}`}
                  className="block bg-pink-100 hover:bg-pink-200 text-pink-800 rounded-lg px-4 py-2 font-medium transition"
                >
                  {item
                    .split('-')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
