"use client"
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { IoIosMenu } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center gap-4">
                        <FaDumbbell className="h-8 w-8 rotate-45 text-purple-600" />
                        <span className="ml-2 text-xl font-bold text-gray-900"><span className='text-blue-600'>Fit</span><span className='text-red-600'>Life</span> <span className='text-green-600'>Gym</span> </span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <NavLink href="/#home">Home</NavLink>
                        <NavLink href="/#Service&facilities">Service & Facilities</NavLink>
                        <NavLink href="/#pricing">Pricing</NavLink>
                        <NavLink href="/#trainers">Trainers</NavLink>
                        <NavLink href="/#gallery">gallery</NavLink>
                        <NavLink href="/Amenities">Amenities</NavLink>


                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-gray-900"
                        >
                            {isMenuOpen ? <RxCross2 className="h-6 w-6" /> : <IoIosMenu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <MobileNavLink href="#home">Home</MobileNavLink>
                        <MobileNavLink href="/#Service&facilities">Service & Facilities</MobileNavLink>
                        <MobileNavLink href="/#pricing">Pricing</MobileNavLink>
                        <MobileNavLink href="/#trainers">Trainers</MobileNavLink>
                        <MobileNavLink href="/#gallery">gallery</MobileNavLink>
                        <MobileNavLink href="/Amenities">Amenities</MobileNavLink>
                    </div>
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-gray-700 navBar hover:text-purple-600 px-2 py-1 text-sm font-medium transition-colors"
        >
            {children}
        </Link>
    );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium"
        >
            {children}
        </a>
    );
}
