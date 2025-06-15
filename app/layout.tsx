import './globals.css';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/Footer';
import SideAnimations from "@/components/framer-motion";
import Banner from "@/components/Banner";

export const metadata = {
  title: 'EcoAI Sustainability Tracker'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <header className="p-4 bg-green-600 text-white flex justify-between">
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="p-4 text-center text-2xl bg-gray-100 mt-15 font-bold">
          🌿ECO SUGGESIONS!
        </footer>
        <>
      {/* Your main content here */}
      <Footer />
    </>
    <div className="relative overflow-hidden">
      <SideAnimations />
      {/* Rest of the content */}
    </div>

    <div className="bg-white py-12 flex justify-around flex-wrap gap-6">
      <Banner />
    </div>
    </body>
    </html>
  );
}
