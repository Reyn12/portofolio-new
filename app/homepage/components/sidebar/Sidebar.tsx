'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi'

export default function Sidebar() {
    const [activeMenu, setActiveMenu] = useState('home');
    const [language, setLanguage] = useState('id');
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <aside className="w-64 p-6 fixed h-full bg-gray-900">
                <div className="animate-pulse">
                    <div className="w-20 h-20 bg-gray-800 rounded-full mb-6"></div>
                    <div className="h-4 bg-gray-800 rounded w-3/4 mb-4"></div>
                    <div className="h-3 bg-gray-800 rounded w-1/2 mb-8"></div>
                    <div className="space-y-3">
                        {[1,2,3,4,5,6].map((i) => (
                            <div key={i} className="h-3 bg-gray-800 rounded"></div>
                        ))}
                    </div>
                </div>
            </aside>
        );
    }

    const menus = [
        { id: 'home', label: 'Home', href: '#' },
        { id: 'about', label: 'About', href: '#' },
        { id: 'skillset', label: 'Skillset', href: '#' },
        { id: 'experience', label: 'Experience', href: '#' },
        { id: 'portfolio', label: 'Portfolio', href: '#' },
        { id: 'services', label: 'Services', href: '#' },
    ];

    return (
        <aside className={`w-64 p-6 fixed h-full transition-colors duration-300 ${theme === 'dark' ? 'bg-[#1F2937] text-white' : 'bg-[#F7FAFC] text-gray-800'}`}>
            <div className="flex flex-col">
                <div className="mb-8">
                    <Image
                        src="/images/logo-rey.png"
                        alt="Profile"
                        width={100}
                        height={100}
                        className="w-full"
                    />
                </div>
 
                <div className="mb-8">
                    <h1 className={`text-2xl mb-2 ${theme === 'dark' ? 'text-[#8BA1B7]' : 'text-[#4A5568]'}`}>Selamat Datang !</h1>
                    <p className={`text-sm ${theme === 'dark' ? 'text-[#8BA1B7]' : 'text-[#4A5568]'}`}>Diperbarui pada : 21 Feb 2025</p>

                    <div className="mt-4 space-y-2">
                        {/* Theme Toggle - New Style */}
                        <div className={`inline-flex w-full justify-between p-1 rounded-2xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <button
                                onClick={() => setTheme('light')}
                                className={`px-3 py-3 text-sm rounded-2xl w-full flex items-center gap-1.5 transition-all duration-200 ${
                                    theme === 'light'
                                        ? 'bg-white text-gray-800 shadow-sm'
                                        : 'text-gray-400 hover:text-gray-300'
                                }`}
                            >
                                <span className="text-lg"><FiSun /></span>
                                <span>Terang</span>
                            </button>
                            <button
                                onClick={() => setTheme('dark')}
                                className={`px-3 py-3 text-sm rounded-2xl w-full flex items-center gap-1.5 transition-all duration-200 ${
                                    theme === 'dark'
                                        ? 'bg-gray-800 text-white shadow-sm'
                                        : 'text-gray-600 hover:text-gray-700'
                                }`}
                            >
                                <span className="text-lg"><FiMoon /></span>
                                <span>Gelap</span>
                            </button>
                        </div>

                        <div className="flex gap-2">
                            <button
                                className={`flex-1 px-4 py-2 rounded-full ${
                                    language === 'id'
                                        ? theme === 'dark' ? 'bg-[#232D3F] text-[#8BA1B7]' : 'bg-[#E2E8F0] text-[#4A5568]'
                                        : theme === 'dark' ? 'bg-[#1A2331] hover:bg-[#232D3F] text-[#8BA1B7]' : 'bg-[#CBD5E0] hover:bg-[#E2E8F0] text-[#4A5568]'
                                }`}
                                onClick={() => setLanguage('id')}
                            >
                                🇮🇩 ID
                            </button>
                            <button
                                className={`flex-1 px-4 py-2 rounded-full ${
                                    language === 'en'
                                        ? theme === 'dark' ? 'bg-[#232D3F] text-[#8BA1B7]' : 'bg-[#E2E8F0] text-[#4A5568]'
                                        : theme === 'dark' ? 'bg-[#1A2331] hover:bg-[#232D3F] text-[#8BA1B7]' : 'bg-[#CBD5E0] hover:bg-[#E2E8F0] text-[#4A5568]'
                                }`}
                                onClick={() => setLanguage('en')}
                            >
                                🇺🇸 EN
                            </button>
                        </div>
                    </div>
                </div>

                <nav className="space-y-4">
                    {menus.map((menu) => (
                        <Link
                            key={menu.id}
                            href={menu.href}
                            className={`block transition-colors ${
                                activeMenu === menu.id
                                    ? theme === 'dark' ? 'text-[#FF9B9B]' : 'text-[#E53E3E]'
                                    : theme === 'dark' ? 'hover:text-[#FF9B9B]' : 'hover:text-[#E53E3E]'
                            }`}
                            onClick={() => setActiveMenu(menu.id)}
                        >
                            {menu.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    );
}