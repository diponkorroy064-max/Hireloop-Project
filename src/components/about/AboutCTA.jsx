"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AboutCTA = () => {
    return (
        <section className="px-6 py-24 bg-gray-100/60 dark:bg-zinc-900/30 transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-indigo-500/20 bg-indigo-600 dark:bg-indigo-700 px-8 py-16 text-center text-white shadow-xl dark:shadow-none"
            >
                {/* Background Accent Blur Circles */}
                <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl pointer-events-none" />
                <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-black/10 dark:bg-white/5 blur-3xl pointer-events-none" />

                <div className="relative z-10">
                    <h2 className="text-3xl font-bold md:text-4xl text-white">
                        Ready To Take The Next Step?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-indigo-100 dark:text-indigo-200">
                        Whether you are looking for your next opportunity or
                        searching for exceptional talent, HireLoop is here to
                        help.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            href="/jobs"
                            className="group flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-600 shadow-md transition-all duration-300 hover:bg-zinc-100 hover:shadow-lg active:scale-95"
                        >
                            Find Jobs
                            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/signup"
                            className="rounded-xl border border-white/30 bg-white/5 dark:bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 active:scale-95"
                        >
                            Create Account
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutCTA;
