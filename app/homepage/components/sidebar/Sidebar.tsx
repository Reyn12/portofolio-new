'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';


export default function Sidebar() {
    const [activeMenu, setActiveMenu] = useState('home');

    const menus = [
        { id: 'home', label: 'Home', href: '#' },
        { id: 'about', label: 'About', href: '#' },
        { id: 'skillset', label: 'Skillset', href: '#' },
        { id: 'experience', label: 'Experience', href: '#' },
        { id: 'portfolio', label: 'Portfolio', href: '#' },
        { id: 'services', label: 'Services', href: '#' },
    ];

    return (
        <aside className="w-64 bg-[#1F2937] text-white p-6 fixed h-full">
            <div className="flex flex-col">
                <div className="mb-8">  {/* Kasih margin bottom */}
                    <Image
                        src="/images/logo-rey.png"
                        alt="Profile"
                        width={100}  
                        height={100}
                        className=" w-full "
                    />
                </div>

                <nav className="space-y-4">
                    {menus.map((menu) => (
                        <Link
                            key={menu.id}
                            href={menu.href}
                            className={`block transition-colors ${activeMenu === menu.id
                                    ? 'text-[#FF9B9B]'
                                    : 'hover:text-[#FF9B9B]'
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