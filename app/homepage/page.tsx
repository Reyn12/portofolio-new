'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Image from 'next/image';
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function HomePage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Tambah di bagian atas file, di luar component
  const socialLinks = [
    {
      href: "mailto:your@email.com",
      icon: <MdEmail className="text-xl" />,
      label: "Email"
    },
    {
      href: "https://instagram.com/yourusername",
      icon: <FaInstagram className="text-xl" />,
      label: "Instagram"
    },
    {
      href: "https://linkedin.com/in/yourusername",
      icon: <FaLinkedin className="text-xl" />,
      label: "Linkedin"
    },
    {
      href: "https://wa.me/yourphone",
      icon: <FaWhatsapp className="text-xl" />,
      label: "Whatsapp"
    },
    {
      href: "https://github.com/yourusername",
      icon: <FaGithub className="text-xl" />,
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
      {/* Background Circle dengan animasi */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-2xl z-0 ${theme === 'dark' ? 'bg-gray-700/70' : 'bg-gray-400/70'
          } animate-fadeInScale`}
      />

      {/* Left Column */}
      <div className="flex-1 max-w-md space-y-4 self-center">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className={theme === 'dark' ? 'text-white' : 'text-[#5e5c7f]'}>I'm</span>{" "}
          <span className={theme === 'dark' ? 'text-[#FF9B9B]' : 'text-[#5e5c7f]'}>Reyy</span>
        </motion.h1>
        <motion.p
          className={`text-lg max-w-md ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          A seasoned software developer with over 10 years of expertise in crafting robust digital solutions. I specialize in programming, web development, and custom software design for businesses worldwide.
        </motion.p>
      </div>

      {/* Center Column - Profile Image */}
      <div className="flex-1 relative max-w-xl flex flex-col items-center justify-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Image
            src="/images/profile-rey.png"
            alt="Profile picture"
            width={380}
            height={380}
            className={`object-cover z-0 ${theme === 'dark' ? 'opacity-85' : 'opacity-95'
              }`}
          />
        </motion.div>

        {/* Social Media Links Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className={`mt-[-5px] p-4 rounded-xl flex gap-8 items-center z-10 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
        >
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                href={link.href}
                className={`px-6 py-4 rounded-lg flex items-center gap-2 transition-all ${theme === 'dark'
                    ? 'bg-gray-700 text-gray-300 hover:text-[#FF9B9B] hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:text-[#FF9B9B] hover:bg-gray-200'
                  }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex-1 max-w-md space-y-4 self-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#5e5c7f]'}`}>
            Services
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          Let’s create innovative software solutions—custom web apps, mobile apps, and scalable systems tailored to your business needs. Ready to elevate your digital presence?
          </p>
          <motion.button
            className="mt-4 text-[#FF9B9B] hover:underline"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            show more →
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 flex gap-4"
        >
          {['Facebook', 'Twitter', 'Instagram', 'Pinterest'].map((social) => (
            <a
              key={social}
              href="#"
              className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-[#FF9B9B]`}
            >
              <span className="sr-only">{social}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}