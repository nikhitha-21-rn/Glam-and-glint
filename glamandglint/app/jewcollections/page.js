'use client';
import Link from 'next/link';

export default function BrowseCollections() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white text-gray-800 font-sans px-4 py-10">
      <div className="max-w-5xl mx-auto text-center">
       
        

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

  );
}
