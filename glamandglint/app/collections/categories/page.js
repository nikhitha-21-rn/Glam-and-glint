'use client';
import Link from 'next/link';

const categories = [
  { name: 'Women', image: '/images/women.jpg', value: 'women' },
  { name: 'Men', image: '/images/men.jpg', value: 'men' },
  { name: 'Girls', image: '/images/girls.jpg', value: 'girls' },
  { name: 'Boys', image: '/images/boys.jpg', value: 'boys' },
];

export default function OutfitCategoriesPage() {
  return (
    <main className="min-h-screen bg-pink-50 py-10 px-6 text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-2">Outfit Categories</h1>
      <p className="text-gray-600 mb-10">Explore our outfit collection by category</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={`/categories/${cat.value}`}
            className="no-underline"
          >
            <div className="cursor-pointer bg-white rounded-xl shadow-md p-4 w-48 hover:shadow-lg transition">
              <img
                src={cat.image}
                alt={cat.name}
                className="rounded-full w-32 h-32 mx-auto object-cover mb-3 border-4 border-pink-200"
              />
              <h3 className="text-lg font-semibold text-pink-700">{cat.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
