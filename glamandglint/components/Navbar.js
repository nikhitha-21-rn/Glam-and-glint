// app/layout.js
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Glam & Glint',
  description: 'Rent Outfits & Jewellery',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-pink-50 font-sans text-gray-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
