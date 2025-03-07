'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Image from 'next/image';
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { translations } from '@/app/translations';

export default function HomePage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();

  // Tambah di bagian atas file, di luar component
  const socialLinks = [
    {
      href: "muhammadrenaldi687@gmail.com",
      icon: <MdEmail className="text-xl" />,
      label: "Email"
    },
    {
      href: "https://instagram.com/muhreyy12_",
      icon: <FaInstagram className="text-xl" />,
      label: "Instagram"
    },
    {
      href: "https://linkedin.com/in/muhammad-renaldi-b83705230",
      icon: <FaLinkedin className="text-xl" />,
      label: "Linkedin"
    },
    {
      href: "https://wa.me/6281319678220",
      icon: <FaWhatsapp className="text-xl" />,
      label: "Whatsapp"
    },
    {
      href: "https://github.com/Reyn12",
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
    <>
      <div className="relative flex flex-col lg:flex-row p-4 md:p-8 lg:p-12 min-h-screen justify-center">
        {/* Background Circle dengan animasi */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] rounded-full blur-2xl z-0 ${theme === 'dark' ? 'bg-gray-700/70' : 'bg-gray-400/70'
            } animate-fadeInScale`}
        />

        {/* Left Column */}
        <div className="flex-1 max-w-md space-y-4 self-center mb-8 lg:mb-0 text-center lg:text-left">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className={theme === 'dark' ? 'text-white' : 'text-[#5e5c7f]'}>
              {translations[language].homepage.intro}
            </span>{" "}
            <span className={theme === 'dark' ? 'text-[#FF9B9B]' : 'text-[#5e5c7f]'}>
              {translations[language].homepage.name}
            </span>
          </motion.h1>
          <motion.div
            className={`text-base md:text-lg max-w-md mx-auto lg:mx-0 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ul className="space-y-2">
              {translations[language].homepage.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Center Column - Profile Image */}
        <div className="flex-1 relative max-w-xl flex flex-col items-center justify-center mb-8 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="z-0"
          >
            <Image
              src="/images/profile-rey.png"
              alt="Profile picture"
              width={380}
              height={380}
              className={`object-cover z-0 w-[280px] md:w-[320px] lg:w-[380px] ${theme === 'dark' ? 'opacity-85' : 'opacity-95'
                }`}
            />
          </motion.div>

{/* Test Mau Deploy */}

          {/* Social Media Links Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className={`mt-[-20px] p-4 rounded-xl flex lg:gap-8 items-center z-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
          >
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 lg:gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  href={link.href}
                  target='_blank'
                  className={`px-3 lg:px-6 py-2 lg:py-4 rounded-lg flex items-center gap-2 transition-all ${theme === 'dark'
                      ? 'bg-gray-700 text-gray-300 hover:text-[#FF9B9B] hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:text-[#FF9B9B] hover:bg-gray-200'
                    }`}
                >
                  {link.icon}
                  <span className="text-sm lg:text-base">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="flex-1 max-w-md space-y-4 self-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#5e5c7f]'}`}>
              {translations[language].homepage.services.title}
            </h2>
            <p className={`text-base md:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {translations[language].homepage.services.description}
            </p>
            <motion.button
              className="mt-4 text-[#FF9B9B] hover:underline"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {translations[language].homepage.services.showMore}
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex justify-center lg:justify-start gap-4"
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

      {/* Collaboration Card */}
      <div className="collaboration-card mt-8 lg:mt-[-100px] mx-4 md:mx-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`p-4 md:p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800/80' : 'bg-white/90'} shadow-lg w-full z-10`}
        >
          <h2 className={`text-lg md:text-xl font-semibold mb-2 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-[#5e5c7f]'}`}>
            {translations[language].homepage.collaboration.title}
          </h2>
          <p className={`text-xs md:text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {translations[language].homepage.collaboration.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:your@email.com"
              className="px-4 md:px-6 py-3 md:py-4 bg-[#FF9B9B] hover:bg-[#ff8383] text-white rounded-lg text-sm flex items-center justify-center gap-2"
            >
              {translations[language].homepage.collaboration.contactMe}
            </a>
            <a
              href="/resume.pdf"
              className={`px-4 md:px-6 py-3 md:py-4 rounded-lg text-sm flex items-center justify-center gap-2 ${theme === 'dark'
                  ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
            >
              {translations[language].homepage.collaboration.downloadResume}
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}