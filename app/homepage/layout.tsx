'use client'
import { useTheme } from 'next-themes'
import Sidebar from './components/sidebar/Sidebar'
import { useState, useEffect } from 'react'

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`flex min-h-screen ${!mounted ? 'bg-gray-900' : theme === 'dark' ? 'bg-[#181f2a]' : 'bg-gray-100'}`}>
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  );
}