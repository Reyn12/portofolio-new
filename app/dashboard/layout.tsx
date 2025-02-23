'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`min-h-screen ${!mounted ? 'bg-gray-900' : theme === 'dark' ? 'bg-[#181f2a]' : 'bg-gray-100'}`}>
      <main className="p-8">
        {children}
      </main>
    </div>
  )
}