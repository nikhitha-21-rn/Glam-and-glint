'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Moon, Sun, Bell } from 'lucide-react';

export default function NavbarClient() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [notifications, setNotifications] = useState(0);
  const [bagCount, setBagCount] = useState(0);
  const router = useRouter();
  const menuRef = useRef();

  // Fetch auth state
  useEffect(() => {
    setIsClient(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Load dark mode
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mode = localStorage.getItem('darkMode') === 'true';
      setDarkMode(mode);
      document.documentElement.classList.toggle('dark', mode);
    }
  }, []);

  // Persist dark mode
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Simulate notification count
  useEffect(() => {
    if (user) {
      setNotifications(3); // Replace with actual logic later
    }
  }, [user]);

  // Bag count from localStorage
  useEffect(() => {
    const bag = JSON.parse(localStorage.getItem('bag')) || [];
    setBagCount(bag.length);
  }, []);

  const handleLogout = async () => {
    if (confirm('Are you sure you want to logout?')) {
      await signOut(auth);
      router.push('/');
    }
  };

  return (
    <header className="flex justify-between items-center p-6 bg-white dark:bg-gray-900 shadow-md relative z-50">
      <Link href="/">
        <h1 className="text-2xl font-bold text-pink-700 dark:text-pink-200 cursor-pointer">Glam & Glint</h1>
      </Link>

      <nav className="flex items-center space-x-6 text-pink-600 dark:text-pink-200">
        <ul className="flex space-x-6 items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/collections/categories">Outfits</Link></li>
          <li><Link href="/jewcollections">Jewellery</Link></li>
          <li className="relative">
            <Link href="/bag">Bag</Link>
            {bagCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-pink-600 text-white text-xs px-1 rounded-full">
                {bagCount}
              </span>
            )}
          </li>
        </ul>

        <div className="relative">
          <Bell className="w-5 h-5 hover:text-pink-400 cursor-pointer" />
          {notifications > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              {notifications}
            </span>
          )}
        </div>

        <button onClick={() => setDarkMode(!darkMode)} className="hover:text-yellow-400 transition">
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {user ? (
          <div className="relative flex items-center space-x-2" ref={menuRef}>
            <span className="text-sm hidden md:block text-gray-700 dark:text-gray-300">
              Hello, {user.displayName?.split(' ')[0] || 'User'} 👋
            </span>
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none group">
              <Image
                src={user?.photoURL || '/userimg.jpg'}
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full border-2 border-pink-400 group-hover:scale-110 group-hover:ring-2 transition duration-200 object-cover"
              />
            </button>

            {menuOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-sm border dark:border-gray-700 transition-all duration-200 z-50">

                <ul className="flex flex-col py-2">
                  <li className="px-4 py-2 hover:bg-pink-50 dark:hover:bg-gray-700"><Link href="/profile">👤 View Profile</Link></li>
                  <li className="px-4 py-2 hover:bg-pink-50 dark:hover:bg-gray-700"><Link href="/search">🔍 Search</Link></li>
                  <li className="px-4 py-2 hover:bg-pink-50 dark:hover:bg-gray-700"><Link href="/history">🕒 Rental History</Link></li>
                  <li className="px-4 py-2 hover:bg-pink-50 dark:hover:bg-gray-700"><Link href="/orders">📦 Orders</Link></li>
                  <li className="px-4 py-2 hover:bg-pink-50 dark:hover:bg-gray-700"><Link href="/payments">💳 Payment History</Link></li>
                  <li className="px-4 py-2 hover:bg-pink-50 dark:hover:bg-gray-700"><Link href="/returns">↩️ Returns</Link></li>

                  {/* ADMIN PANEL FOR SPECIFIC USER */}
                  {user?.email === 'admin@example.com' && (
                    <li className="px-4 py-2 hover:bg-pink-50 dark:hover:bg-gray-700">
                      <Link href="/admin">🛠 Admin Panel</Link>
                    </li>
                  )}

                  <li
                    className="px-4 py-2 hover:bg-red-100 dark:hover:bg-red-600 text-red-600 dark:text-red-300 cursor-pointer"
                    onClick={handleLogout}
                  >
                    🚪 Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link href="/login" className="hover:text-pink-800 dark:hover:text-pink-300">Login</Link>
            <Link href="/register" className="hover:text-pink-800 dark:hover:text-pink-300">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
