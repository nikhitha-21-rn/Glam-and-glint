'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BagPage() {
  const [bagItems, setBagItems] = useState([]);
  const router = useRouter();

  
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('bag')) || [];
    const validItems = Array.isArray(storedItems) ? storedItems : [];
    const itemsWithQty = validItems.map(item => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setBagItems(itemsWithQty);
  }, []);
  
  const updateLocalStorage = (items) => {
    localStorage.setItem('bag', JSON.stringify(items));
  };

  const incrementQty = (index) => {
    const updated = [...bagItems];
    updated[index].quantity += 1;
    setBagItems(updated);
    updateLocalStorage(updated);
  };

  const decrementQty = (index) => {
    const updated = [...bagItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      setBagItems(updated);
      updateLocalStorage(updated);
    }
  };

  const removeItem = (index) => {
    const updated = bagItems.filter((_, i) => i !== index);
    setBagItems(updated);
    updateLocalStorage(updated);
  };

  const calculateTotal = () =>
    bagItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ''), 10);
      return total + price * item.quantity;
    }, 0);

  const handleCheckout = () => {
    localStorage.setItem('bag', JSON.stringify(bagItems));
    router.push('/checkout');
  };

  return (
    <main className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">My Bag</h1>
      {bagItems.length === 0 ? (
        <p className="text-gray-600 text-lg">Your bag is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {bagItems.map((item, index) => (
              <div key={index} className="flex bg-white rounded-xl shadow p-4 gap-6 items-center">
                <img src={item.image} className="w-28 h-28 rounded-lg object-cover" />
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-pink-600 font-bold">{item.price}</p>
                  <div className="flex items-center mt-2">
                    <button onClick={() => decrementQty(index)} className="px-2 bg-gray-300 rounded-l">-</button>
                    <span className="px-4 bg-gray-100">{item.quantity}</span>
                    <button onClick={() => incrementQty(index)} className="px-2 bg-gray-300 rounded-r">+</button>
                    <button onClick={() => removeItem(index)} className="ml-4 text-red-500 hover:underline">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">Price Details</h2>
            <div className="flex justify-between mb-2">
              <span>Total Items:</span>
              <span>{bagItems.length}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Total Amount:</span>
              <span className="font-bold text-pink-600">₹{calculateTotal()}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="mt-4 w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
