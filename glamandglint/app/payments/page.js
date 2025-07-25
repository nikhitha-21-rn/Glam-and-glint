'use client';
import React from 'react';

const payments = [
  {
    id: 'P1001',
    item: 'Bridal Lehenga',
    date: 'June 10, 2025',
    amount: '₹2,500',
  },
  {
    id: 'P1002',
    item: 'Diamond Necklace',
    date: 'June 12, 2025',
    amount: '₹3,000',
  },
];

export default function PaymentsPage() {
  return (
    <main className="min-h-screen bg-pink-50 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Payment History</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {payments.map(payment => (
          <div key={payment.id} className="bg-white rounded-xl p-4 shadow-md">
            <h3 className="text-pink-600 font-semibold">Payment #{payment.id}</h3>
            <p><strong>Item:</strong> {payment.item}</p>
            <p><strong>Date:</strong> {payment.date}</p>
            <p><strong>Amount:</strong> {payment.amount}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
