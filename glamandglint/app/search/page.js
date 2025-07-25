'use client';
import { useState } from 'react';

export default function SearchPage() {
  const [query, setQuery] = useState('');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Search & Filter Items</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for outfits or jewellery..."
        className="border px-4 py-2 w-full rounded-lg"
      />

      <p className="mt-4 text-gray-600">
        You searched for: <strong>{query}</strong>
      </p>
    </div>
  );
}
