'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function CheckoutPage() {
  const [bagItems, setBagItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Load bag items
    const storedItems = JSON.parse(localStorage.getItem('bag')) || [];
    setBagItems(storedItems);

    // Track auth state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        setUserEmail(user.email);
      } else {
        alert('User not logged in. Please log in to continue.');
        router.push('/login');
      }
    });

    return () => unsubscribe(); // cleanup
  }, []);

  const calculateTotal = () => {
    return bagItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ''), 10);
      return total + price * (item.quantity || 1);
    }, 0);
  };

  const handlePlaceOrder = async () => {
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    if (paymentMethod === 'upi' && !upiId.trim()) {
      alert('Please enter a valid UPI ID.');
      return;
    }

    if (!userEmail) {
      alert('User email not found. Please log in.');
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/api/orders/placeAll/${userEmail}?paymentType=${paymentMethod}`,
        {
          method: 'POST',
        }
      );

      if (response.ok) {
        localStorage.setItem('bag', JSON.stringify([]));
        router.push('/order-placed');
      } else {
        alert('Failed to place order. Please try again.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Something went wrong while placing the order.');
    }
  };

  return (
    <main className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Checkout</h1>

      {bagItems.length === 0 ? (
        <p className="text-gray-600">Your bag is empty. Add items before checking out.</p>
      ) : (
        <>
          <div className="bg-white rounded-xl shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-pink-600">Payment Method</h2>
            <div className="space-y-3">
              <label className="block">
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === 'upi'}
                  onChange={() => setPaymentMethod('upi')}
                />{' '}
                UPI
              </label>
              {paymentMethod === 'upi' && (
                <input
                  type="text"
                  placeholder="Enter UPI ID"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="mt-2 border p-2 w-full rounded"
                />
              )}
              <label className="block">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={() => setPaymentMethod('cash')}
                />{' '}
                Cash on Delivery
              </label>
              <label className="block text-gray-400">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  disabled
                />{' '}
                Credit / Debit Card (Coming Soon)
              </label>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-pink-600">Order Summary</h2>
            <p>Total Items: {bagItems.length}</p>
            <p className="text-lg mt-2 font-bold text-pink-500">
              Total Amount: ₹{calculateTotal()}
            </p>
            <button
              onClick={handlePlaceOrder}
              className="mt-6 bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </main>
  );
}
