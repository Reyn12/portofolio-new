'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi'
import { FaLanguage } from 'react-icons/fa'
import { FaHome, FaTachometerAlt, FaUser, FaCode, FaGlobe, FaMobile, FaPalette } from 'react-icons/fa'
import { FiChevronRight, FiMenu, FiX } from 'react-icons/fi'



export default function Sidebar() {
    const [activeMenu, setActiveMenu] = useState('home');
    const [language, setLanguage] = useState('id');
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    // Skeleton Loading
    if (!mounted) {
        return (
            <aside className="w-64 p-6 fixed h-full bg-gray-900 text-gray-400">
                <div className="animate-pulse space-y-6">
                    {/* Logo Placeholder */}
                    <div className="flex">
                        <div className="w-20 h-20 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full"></div>
                    </div>
    
                    {/* Welcome Text Placeholder */}
                    <div className="space-y-2">
                        <div className="h-6 w-2/3 bg-gradient-to-r from-gray-800 to-gray-700 rounded"></div>
                        <div className="h-4 w-1/2 bg-gray-800 rounded"></div>
                    </div>
    
                    {/* Theme & Language Toggle Placeholder */}
                    <div className="space-y-3">
                        <div className="flex justify-between gap-2">
                            <div className="h-10 w-full bg-gray-800 rounded-2xl"></div>
                            <div className="h-10 w-full bg-gray-800 rounded-2xl"></div>
                        </div>
                        <div className="flex justify-between gap-2">
                            <div className="h-10 w-full bg-gray-800 rounded-2xl"></div>
                            <div className="h-10 w-full bg-gray-800 rounded-2xl"></div>
                        </div>
                    </div>
    
                    {/* Menu Placeholder */}
                    <div className="space-y-3">
                        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gray-800 rounded-lg"></div>
                                <div className="h-4 w-3/4 bg-gradient-to-r from-gray-800 to-gray-700 rounded"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>
        );
    }

    const menus = [
        { id: 'home', label: 'Beranda', href: '#', icon: <FaHome /> },
        { id: 'dashboard', label: 'Dashboard', href: '#', icon: <FaTachometerAlt /> },
        { id: 'about', label: 'Tentang', href: '#', icon: <FaUser /> },
        { id: 'skills', label: 'Keahlian', href: '#', icon: <FaCode /> },
        { id: 'web-porto', label: 'Web Porto', href: '#', icon: <FaGlobe /> },
        { id: 'mobile-porto', label: 'Mobile Porto', href: '#', icon: <FaMobile /> },
        { id: 'uiux-porto', label: 'UI/UX Porto', href: '#', icon: <FaPalette /> },
    ];

    return ( 
        <>
            {/* Hamburger Button - Visible on mobile */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}

                 
                className={`lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg ${theme === 'dark'
                        ? 'bg-gray-800 text-[#FF9B9B] hover:bg-gray-700'
                        : 'bg-gray-100 text-[#E53E3E] hover:bg-gray-200'
                    }`}
            >
                {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Overlay - Visible when sidebar is open on mobile */}
            {isSidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`w-64 p-6 fixed h-full transition-all duration-300 z-40
                ${theme === 'dark' ? 'bg-[#1F2937] text-white' : 'bg-[#F7FAFC] text-gray-800'}
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
            >
                <div className="mb-6">
                    <Image
                        src="/images/logo-rey.png"
                        alt="Profile"
                        width={80}
                        height={80}
                        className=""
                    />
                </div>

                <div className="mb-4">
                    <h1 className={`text-2xl mb-2 ${theme === 'dark' ? 'text-[#8BA1B7]' : 'text-[#4A5568]'}`}>
                        Selamat Datang !
                    </h1>
                    <p className={`text-sm ${theme === 'dark' ? 'text-[#8BA1B7]' : 'text-[#4A5568]'}`}>
                        Diperbarui pada : 21 Feb 2025
                    </p>

                    <div className="mt-4 space-y-2">
                        {/* Theme Toggle */}
                        <div className={`inline-flex w-full justify-between mb-2 p-1 rounded-2xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <button
                                onClick={() => setTheme('light')}
                                className={`px-3 py-3 text-sm rounded-2xl w-full flex items-center justify-center gap-1.5 transition-all duration-200 ${theme === 'light'
                                    ? 'bg-white text-gray-800 shadow-sm'
                                    : 'text-gray-400 hover:text-gray-300'
                                    }`}
                            >
                                <span className="text-lg"><FiSun /></span>
                                <span>Light</span>
                            </button>
                            <button
                                onClick={() => setTheme('dark')}
                                className={`px-3 py-3 text-sm rounded-2xl w-full flex items-center justify-center gap-1.5 transition-all duration-200 ${theme === 'dark'
                                    ? 'bg-gray-800 text-white shadow-sm'
                                    : 'text-gray-600 hover:text-gray-700'
                                    }`}
                            >
                                <span className="text-lg"><FiMoon /></span>
                                <span>Dark</span>
                            </button>
                        </div>

                        {/* Language Toggle */}
                        <div className={`inline-flex w-full justify-between p-1 rounded-2xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <button
                                onClick={() => setLanguage('id')}
                                className={`px-3 py-3 text-sm rounded-2xl w-full flex items-center justify-center gap-1.5 transition-all duration-200 ${language === 'id'
                                    ? theme === 'dark'
                                        ? 'bg-gray-800 text-white shadow-sm'
                                        : 'bg-white text-gray-800 shadow-sm'
                                    : theme === 'dark'
                                        ? 'text-gray-400 hover:text-gray-300'
                                        : 'text-gray-600 hover:text-gray-700'
                                    }`}
                            >
                                <span className="text-lg"><FaLanguage /></span>
                                <span>ID</span>
                            </button>
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-3 py-3 text-sm rounded-2xl w-full flex items-center justify-center gap-1.5 transition-all duration-200 ${language === 'en'
                                    ? theme === 'dark'
                                        ? 'bg-gray-800 text-white shadow-sm'
                                        : 'bg-white text-gray-800 shadow-sm'
                                    : theme === 'dark'
                                        ? 'text-gray-400 hover:text-gray-300'
                                        : 'text-gray-600 hover:text-gray-700'
                                    }`}
                            >
                                <span className="text-lg"><FaLanguage /></span>
                                <span>EN</span>
                            </button>
                        </div>
                    </div>
                </div>

                <nav className="space-y-1">
                    {menus.map((menu) => (
                        <Link
                            key={menu.id}
                            href={menu.href}
                            className={`group flex items-center justify-between py-1.5 px-3 rounded-lg transition-all duration-300 hover:-translate-x-1 ${activeMenu === menu.id
                                ? theme === 'dark'
                                    ? 'bg-gray-800 text-[#FF9B9B]'
                                    : 'bg-gray-100 text-[#E53E3E]'
                                : theme === 'dark'
                                    ? 'hover:bg-gray-800 hover:text-[#FF9B9B]'
                                    : 'hover:bg-gray-100 hover:text-[#E53E3E]'
                                }`}
                            onClick={() => setActiveMenu(menu.id)}
                        >
                            <div className="flex items-center gap-2">
                                <span className={`p-1.5 rounded-lg transition-colors ${activeMenu === menu.id
                                    ? theme === 'dark'
                                        ? 'bg-gray-700'
                                        : 'bg-gray-200'
                                    : theme === 'dark'
                                        ? 'bg-gray-700'
                                        : 'bg-gray-200'
                                    }`}>
                                    {menu.icon}
                                </span>
                                <span>{menu.label}</span>
                            </div>
                            {activeMenu === menu.id && (
                                <FiChevronRight className="transition-transform duration-300" />
                            )}
                        </Link>
                    ))}
                </nav>
            </aside>
        </>
    );
}