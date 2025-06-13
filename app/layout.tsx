import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'EcoAI Sustainability Tracker',
  description: 'Track and reduce your environmental impact.',
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
        <footer className="p-4 text-center text-sm bg-gray-100 mt-8">
          © 2025 EcoAI  create by nagaraj. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
