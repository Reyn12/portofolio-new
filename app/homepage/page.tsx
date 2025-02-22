'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="animate-pulse">Loading...</div>;
  }

  return (
    <div className={theme === 'dark' ? 'text-white' : 'text-gray-800'}>
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
          I'm passionate crafting exceptional web experiences by building efficient,
          scalable with functional and visually appealing digital solutions.
        </p>
      </section>

      <div className="space-y-4">
        <div>🚀 Open to exciting opportunities</div>
        <div>💫 Bringing digital dreams to life</div>
        <div>📍 Based in Yogyakarta, ID</div>
        <div>📍 Based in Yogyakarta, ID</div>
      </div>

      <div className="mt-8 space-x-4">
        <button className="bg-[#FF9B9B] px-4 py-2 rounded-md">Get in Touch</button>
        <button className="border border-[#FF9B9B] px-4 py-2 rounded-md">Get Resume</button>
      </div>
    </div>
  );
}