'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Image from 'next/image';


export default function HomePage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Tambah di bagian atas file, di luar component
  const socialLinks = [
    {
      href: "mailto:your@email.com",
      icon: "@",
      label: "Email"
    },
    {
      href: "https://instagram.com/yourusername",
      icon: "@",
      label: "Instagram"
    },
    {
      href: "https://linkedin.com/in/yourusername",
      icon: "in",
      label: "Linkedin"
    },
    {
      href: "https://wa.me/yourphone",
      icon: "@",
      label: "Whatsapp"
    },
    {
      href: "https://github.com/yourusername",
      icon: "@",
      label: "Github"
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-64 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-96 bg-gray-200 dark:bg-gray-800 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex p-8 md:p-12 min-h-screen justify-center">
      {/* Background Circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gray-700/70 blur-2xl z-0" />

      {/* Left Column */}
      <div className="flex-1 max-w-md space-y-4 self-center">
        <h1 className="text-5xl font-bold">
          I'm <span className="text-[#FF9B9B]">James Adai</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
          A freelancer who provides services for digital programming and design content needs, for all businesses with more than 10 years of experience
        </p>
      </div>

      {/* Center Column - Profile Image */}
      <div className="flex-1 relative max-w-xl flex flex-col items-center justify-center mt-20">
        <Image
          src="/images/profile-rey.png"
          alt="Profile picture"
          width={380}
          height={380}
          className="object-cover z-0"
        />

        {/* Social Media Links Box */}
        <div className="mt-[-5px] bg-gray-800 p-4 rounded-xl flex gap-8 items-center z-10">
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="bg-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 text-gray-300 hover:text-[#FF9B9B] hover:bg-gray-600 transition-all"
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 max-w-md space-y-4 self-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Let's build quality products in programming and design with my services
          </p>
          <button className="mt-4 text-[#FF9B9B] hover:underline">
            show more →
          </button>
        </div>

        <div className="mt-8 flex gap-4">
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#FF9B9B]">
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#FF9B9B]">
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#FF9B9B]">
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#FF9B9B]">
            <span className="sr-only">Pinterest</span>
          </a>
        </div>
      </div>
    </div>
  );
}