"use client";
import { Search, MapPin, BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";
// import Navbar from "../Navbar";

const trendingItems = [
    "Trending Position",
    "Product Designer",
    "AI Engineering",
    "DevOps Engineer",
];

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-black text-white">
            {/* Background Glow */}
            <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.15),transparent_40%)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
            />

            {/* Floating Dots */}
            <div className="absolute bottom-0 left-0 right-0 h-48 opacity-50">
                <motion.div
                    className="absolute left-1/4 bottom-10 h-1 w-1 rounded-full bg-indigo-500"
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="absolute left-1/3 bottom-20 h-1 w-1 rounded-full bg-indigo-500"
                    animate={{
                        y: [0, -25, 0],
                        opacity: [0.2, 1, 0.2],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                    }}
                />

                <motion.div
                    className="absolute right-1/4 bottom-14 h-1 w-1 rounded-full bg-indigo-500"
                    animate={{
                        y: [0, -18, 0],
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />

                <motion.div
                    className="absolute right-1/3 bottom-8 h-1 w-1 rounded-full bg-indigo-500"
                    animate={{
                        y: [0, -22, 0],
                        opacity: [0.2, 1, 0.2],
                    }}
                    transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5,
                    }}
                />
            </div>

            {/* Navbar */}
            {/* <Navbar /> */}

            <div className="container mx-auto px-4 py-10 md:py-15">
                {/* Top Badge */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: -25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md"
                        whileHover={{
                            scale: 1.05,
                            borderColor: "rgba(99,102,241,0.5)",
                        }}
                    >
                        <motion.div
                            animate={{
                                rotate: [0, -10, 10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 2,
                            }}
                        >
                            <BriefcaseBusiness
                                size={16}
                                className="text-orange-400"
                            />
                        </motion.div>

                        <span className="font-semibold text-white">
                            50,000+
                        </span>

                        <span className="text-gray-400 uppercase tracking-widest text-xs">
                            New Jobs This Month
                        </span>
                    </motion.div>
                </motion.div>

                {/* Heading */}
                <motion.div
                    className="mx-auto mt-8 max-w-4xl text-center"
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: "easeOut",
                    }}
                >
                    <motion.h1
                        className="text-4xl font-bold leading-tight md:text-6xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                        }}
                    >
                        Find Your Dream Job Today
                    </motion.h1>

                    <motion.p
                        className="mt-6 text-gray-400 text-base md:text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.5,
                        }}
                    >
                        HireLoop connects top talent with world-class companies.
                        Browse thousands of curated opportunities and land your
                        next role — faster.
                    </motion.p>
                </motion.div>

                {/* Search Box */}
                <motion.div
                    className="mx-auto mt-10 max-w-4xl"
                    initial={{ opacity: 0, y: 35, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.7,
                        ease: "easeOut",
                    }}
                >
                    <motion.div
                        className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-2xl md:flex-row"
                        whileHover={{
                            borderColor: "rgba(99,102,241,0.35)",
                            boxShadow: "0 20px 60px rgba(79,70,229,0.12)",
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Job Search */}
                        <div className="flex flex-1 items-center px-5 py-4">
                            <motion.div
                                whileHover={{ scale: 1.15 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Search
                                    size={18}
                                    className="text-gray-400"
                                />
                            </motion.div>

                            <input
                                type="text"
                                placeholder="Job title, skill or company"
                                className="ml-3 w-full bg-transparent outline-none placeholder:text-gray-500"
                            />
                        </div>

                        <div className="hidden w-px bg-white/10 md:block" />

                        {/* Location */}
                        <div className="flex flex-1 items-center px-5 py-4">
                            <motion.div
                                whileHover={{ scale: 1.15 }}
                                transition={{ duration: 0.2 }}
                            >
                                <MapPin
                                    size={18}
                                    className="text-gray-400"
                                />
                            </motion.div>

                            <input
                                type="text"
                                placeholder="Location or Remote"
                                className="ml-3 w-full bg-transparent outline-none placeholder:text-gray-500"
                            />
                        </div>

                        {/* Search Button */}
                        <motion.button
                            className="m-2 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600"
                            whileHover={{
                                scale: 1.08,
                                backgroundColor: "#6366f1",
                            }}
                            whileTap={{ scale: 0.92 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Search size={18} />
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Trending Tags */}
                <motion.div
                    className="mt-8 flex flex-wrap items-center justify-center gap-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.9,
                            },
                        },
                    }}
                >
                    {trendingItems.map((item) => (
                        <motion.button
                            key={item}
                            className="rounded-full border border-gray-500 bg-white/5 px-4 py-2 text-sm text-gray-300"
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 15,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.4,
                                    },
                                },
                            }}
                            whileHover={{
                                scale: 1.05,
                                y: -3,
                                backgroundColor: "rgba(255,255,255,0.1)",
                                borderColor: "rgba(99,102,241,0.6)",
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item}
                        </motion.button>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
