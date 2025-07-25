'use client';
import { useState } from 'react';
import { auth, provider } from '@/lib/firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Assume admin if email matches
      if (user.email === 'admin@example.com') {
        router.push('/admin');
      } else {
        router.push('/profile');
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const loginWithEmail = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (user.email === 'admin@example.com') {
      router.push('/admin');
    } else {
      router.push('/profile');
    }
  } catch (err) {
    console.error(err); // Helpful for debugging

    switch (err.code) {
      case 'auth/user-not-found':
        alert('No user found with this email. Please register first.');
        break;
      case 'auth/wrong-password':
        alert('Incorrect password. Please try again.');
        break;
      case 'auth/invalid-email':
        alert('Invalid email format.');
        break;
      default:
        alert('Login failed. Please try again later.');
    }
  }
};


  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <div className="space-y-4 max-w-sm">
        <button onClick={loginWithGoogle} className="bg-red-500 text-white px-4 py-2 rounded">
          Sign in with Google
        </button>

        <hr />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loginWithEmail} className="bg-pink-600 text-white px-4 py-2 rounded">
          Login with Email
        </button>
      </div>
    </main>
  );
}
