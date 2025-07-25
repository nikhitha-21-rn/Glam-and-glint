'use client';

import { useEffect, useState } from 'react';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const orderHistory = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(orderHistory);
  }, []);

  return (
    <main className="min-h-screen bg-pink-50 p-10">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Order History</h1>

      {orders.length === 0 ? (
        <p className="text-gray-700">No previous orders.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div key={index} className="bg-white shadow p-6 rounded-xl">
              <h2 className="text-lg font-bold mb-2">Order #{index + 1}</h2>
              <p className="text-sm text-gray-600 mb-2">Placed on: {order.orderTime}</p>
              <p className="text-sm">Payment: {order.paymentMethod === 'upi' ? `UPI - ${order.upiId}` : 'Cash on Delivery'}</p>
              <ul className="mt-4 space-y-2">
                {order.items.map((item, idx) => (
                  <li key={idx} className="border-t pt-2">
                    <strong>{item.name}</strong> — {item.price} × {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
