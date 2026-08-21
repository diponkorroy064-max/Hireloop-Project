"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const { data } = authClient.useSession();
    const user = data?.user;

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Browse Jobs", href: "/jobs" },
        { name: "Company", href: "/companies" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Pricing", href: "/plan" },
    ];

    const dashboardLinks = {
        seeker: "/dashboard/seeker",
        recruiter: "/dashboard/recruiter",
        admin: "/dashboard/admin",
    };

    if (user?.email) {
        navLinks.push({
            name: "Dashboard",
            href: dashboardLinks[user?.role || "seeker"],
        });
    }

    const isActive = (href) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-400 dark:border-gray-600/80 bg-white/80 dark:bg-black backdrop-blur-md transition-colors duration-300">
            <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-gray-50/70 dark:bg-gray-900/70 px-5 py-3 shadow-sm backdrop-blur-md transition-colors">
                    {/* Logo */}
                    <div>
                        <Link href="/" className="flex items-center">
                            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                                <span className="text-sky-500">hire</span>
                                <span className="text-orange-500">loop</span>
                            </h1>
                        </Link>
                    </div>

                    {/* Desktop Navigation & Actions */}
                    <div className="hidden lg:flex items-center gap-6">
                        {/* Navigation Links */}
                        <div className="flex items-center gap-7">
                            {navLinks.map((link) => {
                                const active = isActive(link.href);
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`text-sm font-medium transition-colors ${active
                                                ? "text-sky-600 dark:text-sky-400 font-semibold border-b-2 border-sky-500 pb-0.5"
                                                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="h-5 w-px bg-gray-300 dark:bg-gray-800" />

                        {/* Theme Toggle Button */}
                        <ThemeToggle />

                        {/* Action Buttons */}
                        {user ? (
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                    {user?.name}
                                </span>

                                <Link href={dashboardLinks[user?.role || "seeker"]}>
                                    <Avatar className="cursor-pointer transition-transform hover:scale-105 ring-2 ring-sky-500/40">
                                        <Avatar.Image
                                            alt={user?.name || "User"}
                                            src={user?.image}
                                        />
                                        <Avatar.Fallback className="bg-sky-500 text-white font-semibold">
                                            {user?.name
                                                ? user.name.slice(0, 2).toUpperCase()
                                                : "HL"}
                                        </Avatar.Fallback>
                                    </Avatar>
                                </Link>

                                <button
                                    onClick={async () => await authClient.signOut()}
                                    className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-600 dark:text-red-400 transition hover:bg-red-500 hover:text-white"
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link
                                    href="/signin"
                                    className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-600 dark:text-indigo-300 transition hover:bg-indigo-600 hover:text-white"
                                >
                                    Sign In
                                </Link>

                                <Link
                                    href="/signup"
                                    className="rounded-xl bg-indigo-600 dark:bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 dark:hover:bg-indigo-600 hover:scale-105"
                                >
                                    Get Started
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Actions */}
                    <div className="lg:hidden flex items-center gap-3">
                        <ThemeToggle />

                        {user && (
                            <Link href={dashboardLinks[user?.role || "seeker"]}>
                                <Avatar className="w-8 h-8">
                                    <Avatar.Image alt={user?.name || "User"} src={user?.image} />
                                    <Avatar.Fallback className="bg-sky-500 text-white text-xs font-semibold">
                                        {user?.name ? user.name.slice(0, 2).toUpperCase() : "HL"}
                                    </Avatar.Fallback>
                                </Avatar>
                            </Link>
                        )}

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 dark:text-gray-300 p-1.5 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-800/50 focus:outline-none transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                {isOpen && (
                    <div className="mt-2 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 p-5 lg:hidden backdrop-blur-xl shadow-xl transition-colors">
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => {
                                const active = isActive(link.href);
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-base font-medium py-1.5 transition-colors ${active
                                                ? "text-sky-500 font-semibold pl-2 border-l-2 border-sky-500"
                                                : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}

                            <hr className="my-1 border-gray-200 dark:border-gray-800" />

                            {user ? (
                                <button
                                    className="w-full rounded-xl bg-red-600 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-red-700"
                                    onClick={async () => {
                                        setIsOpen(false);
                                        await authClient.signOut();
                                    }}
                                >
                                    Sign Out
                                </button>
                            ) : (
                                <div className="flex flex-col gap-2.5 pt-1">
                                    <Link
                                        href="/signin"
                                        onClick={() => setIsOpen(false)}
                                        className="w-full rounded-xl border border-indigo-500/30 bg-indigo-500/10 py-2.5 text-center text-sm font-semibold text-indigo-600 dark:text-indigo-300 transition hover:bg-indigo-600 hover:text-white"
                                    >
                                        Sign In
                                    </Link>

                                    <Link
                                        href="/signup"
                                        onClick={() => setIsOpen(false)}
                                        className="w-full rounded-xl bg-indigo-600 dark:bg-indigo-500 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
