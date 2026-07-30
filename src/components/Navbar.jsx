"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
// import ThemeToggle from "./ThemeToggle";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const { data, isPending } = authClient.useSession();
    // console.log("data from navbar", data);
    const user = data?.user;
    // console.log("user in  navbar", user);
    

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Browse Jobs", href: "/jobs" },
        { name: "Company", href: "/companies" },
        { name: "Pricing", href: "/plan" },
    ];

    const dashboardLinks = {
        seeker: '/dashboard/seeker',
        recruiter: '/dashboard/recruiter',
        admin: '/dashboard/admin'
    }

    if (user?.email) {
        navLinks.push(
            {
                name: 'Dashboard',
                href: dashboardLinks[user?.role || 'seeker']
            }
        )
    }


    return (
        <header className="container mx-auto w-full py-4 px-4 md:px-8 bg-black">
            <nav className="mx-auto max-w-7xl">
                <div className="flex items-center justify-between rounded-2xl border border-gray-400 bg-gray-900 px-6 py-4 backdrop-blur-md shadow-lg">

                    {/* Logo */}
                    <div>
                        <Link href="/" className="flex items-center">
                            <h1 className="text-3xl font-bold">
                                <span className="text-sky-500">hire</span>
                                <span className="text-orange-500">loop</span>
                            </h1>
                        </Link>
                    </div>


                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-6">

                        {/* Menu */}
                        <div className="hidden lg:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-gray-300 transition hover:text-white">
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="h-6 w-px bg-white/10" />
                        {
                            user ? <>
                                <p>{user?.name}</p>
                                <Link href="/dashboard/recruiter">
                                    <Avatar>
                                        <Avatar.Image alt="John Doe" src={user?.image} />
                                        <Avatar.Fallback>JD</Avatar.Fallback>
                                    </Avatar>
                                </Link>
                                <Link href="/signin" className="text-sm font-medium text-indigo-400 hover:text-indigo-300"> <Button className="rounded-xl" onClick={async () => await authClient.signOut()}>Sign Out</Button></Link>
                            </> : <>
                                <Link href="/signin" className="text-sm font-medium text-indigo-400 hover:text-indigo-300"> <Button className="rounded-xl">Sign In</Button></Link>

                                <Link href="/signup" className="rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-2 text-sm font-medium text-white transition hover:scale-105">Get Started</Link>
                            </>
                        }
                    </div>


                    {/* <ThemeToggle></ThemeToggle> */}

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-2">
                        <Avatar>
                            <Avatar.Image alt="John Doe" src={user?.image} />
                            <Avatar.Fallback>JD</Avatar.Fallback>
                        </Avatar>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white">
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>


                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mt-3 rounded-2xl border border-white/10 bg-[#151515]/95 p-5 lg:hidden">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white">
                                    {link.name}
                                </Link>
                            ))}

                            <hr className="border-white/10" />

                            {
                                user ? <>
                                    <Link href="/signin" className="rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 px-5 py-3 text-center text-white" onClick={async () => await authClient.signOut()}>Sign Out</Link>
                                </> : <>
                                    <Link href="/signin" className="rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 px-5 py-3 text-center text-white">Sign In</Link>

                                    <Link href="/signup" className="rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 px-5 py-3 text-center text-white">Get Started</Link>
                                </>
                            }
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

