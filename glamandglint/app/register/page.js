'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db, storage } from '@/lib/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  });
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Step 1: Create user in Auth
      const userCred = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCred.user;

      // Step 2: Upload photo to storage
      let photoURL = '';
      if (file) {
        const storageRef = ref(storage, `profileImages/${user.uid}`);
        await uploadBytes(storageRef, file);
        photoURL = await getDownloadURL(storageRef);
      }

      // Step 3: Update Auth profile
      await updateProfile(user, {
        displayName: form.name,
        photoURL: photoURL || '/default-userimage.jpg',
      });

      // Step 4: Store additional details in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name: form.name,
        email: form.email,
        phone: form.phone,
        address: form.address,
        photoURL: photoURL || '/default-userimage.jpg',
        uid: user.uid,
      });

      router.push('/profile'); // Redirect after registration
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        setError('This email is already registered. Please log in or use a different email.');
      } else {
        setError('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold text-pink-600 mb-4">Register</h2>
      {error && <p className="text-red-500 mb-3">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        />
        <input
          name="phone"
          type="text"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          name="address"
          type="text"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full border rounded p-2"
        />
        <button
          type="submit"
          className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}
