import './globals.css';
import NavbarClient from './NavbarClient';
import { BagProvider } from './context/Bagcontext';
import { UserProvider } from '@/profilecontext/UserContext';
import 'react-toastify/dist/ReactToastify.css';


export const metadata = {
  title: 'Glam & Glint',
  description: 'Outfits and Jewellery Rental System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <BagProvider>
            <NavbarClient />
            <main className="p-4">{children}</main>
          </BagProvider>
        </UserProvider>
      </body>
    </html>
  );
}
