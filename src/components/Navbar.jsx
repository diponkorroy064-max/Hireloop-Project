"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Browse Jobs", href: "/jobs" },
        { name: "Company", href: "/company" },
        { name: "Pricing", href: "/pricing" },
    ];
    

    return (
        <header className="container mx-auto w-full py-4 px-4 md:px-8 bg-black">
            <nav className="mx-auto max-w-7xl">
                <div className="flex items-center justify-between rounded-2xl border border-gray-400 bg-[#151515]/90 px-6 py-4 backdrop-blur-md shadow-lg">

                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <h1 className="text-3xl font-bold">
                            <span className="text-sky-500">hire</span>
                            <span className="text-orange-500">loop</span>
                        </h1>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm text-gray-300 transition hover:text-white"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-6">
                        <div className="h-6 w-px bg-white/10" />

                        <Link
                            href="/login"
                            className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
                        >
                            Sign In
                        </Link>

                        <Link
                            href="/register"
                            className="rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* <ThemeToggle></ThemeToggle> */}

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white"
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                
                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mt-3 rounded-2xl border border-white/10 bg-[#151515]/95 p-5 lg:hidden">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <hr className="border-white/10" />

                            <Link
                                href="/login"
                                className="text-indigo-400 hover:text-indigo-300"
                            >
                                Sign In
                            </Link>

                            <Link
                                href="/register"
                                className="rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 px-5 py-3 text-center text-white"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

