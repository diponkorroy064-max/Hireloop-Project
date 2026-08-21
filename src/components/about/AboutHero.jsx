"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Users } from "lucide-react";
import Link from "next/link";


const AboutHero = () => {
    return (
        <section className="relative overflow-hidden bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white transition-colors duration-300">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-indigo-500/15 dark:bg-indigo-600/10 blur-3xl" />
                <div className="absolute right-1/4 top-40 h-72 w-72 rounded-full bg-blue-500/15 dark:bg-blue-600/10 blur-3xl" />
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-[0.07] dark:opacity-[0.04] pointer-events-none">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage:
                            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-20">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-5 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-300">
                        <BriefcaseBusiness size={16} />
                        Building the future of hiring
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="mx-auto mt-8 max-w-4xl text-center"
                >
                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-6xl">
                        Connecting{" "}
                        <span className="text-indigo-600 dark:text-indigo-500">
                            Great Talent
                        </span>{" "}
                        With Great Companies
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 dark:text-zinc-400 md:text-lg">
                        HireLoop is a modern hiring platform designed to make
                        recruitment simpler, faster, and more transparent for
                        job seekers, recruiters, and businesses.
                    </p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
                >
                    <Link
                        href="/jobs"
                        className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-indigo-600"
                    >
                        Explore Jobs
                        <ArrowRight size={18} />
                    </Link>

                    <Link
                        href="/signup"
                        className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-6 py-3 font-semibold text-gray-900 dark:text-white shadow-sm transition hover:bg-gray-100 dark:hover:bg-zinc-800"
                    >
                        <Users size={18} />
                        Join HireLoop
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;
