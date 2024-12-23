"use client"
import React from 'react';
import { useState } from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { IoIosMenu } from 'react-icons/io';
import { LuDumbbell } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center gap-4">
                        <FaDumbbell className="h-8 w-8 rotate-45 text-purple-600" /> 
                        <span className="ml-2 text-xl font-bold text-gray-900">FitLife Gym</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <NavLink href="#home">Home</NavLink>
                        <NavLink href="#classes">Classes</NavLink>
                        <NavLink href="#pricing">Pricing</NavLink>
                        <NavLink href="#trainers">Trainers</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
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
                        <MobileNavLink href="#classes">Classes</MobileNavLink>
                        <MobileNavLink href="#pricing">Pricing</MobileNavLink>
                        <MobileNavLink href="#trainers">Trainers</MobileNavLink>
                        <MobileNavLink href="#contact">Contact</MobileNavLink>
                    </div>
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
        >
            {children}
        </a>
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