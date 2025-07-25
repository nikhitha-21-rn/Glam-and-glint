'use client';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome, Admin!</p>
      <button onClick={handleLogout} className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
        Logout
      </button>
    </main>
  );
}
