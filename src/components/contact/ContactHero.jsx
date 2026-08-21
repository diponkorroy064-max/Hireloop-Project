"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";


export default function ContactHero() {
    return (
        <section className="relative overflow-hidden bg-white text-gray-900 dark:bg-zinc-950 dark:text-white py-10 md:py-20 transition-colors duration-300">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/10 dark:bg-indigo-600/10 blur-3xl" />
                <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-3xl" />
            </div>

            <div className="relative container mx-auto px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
                    {/* Left Column: Text Content */}
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mx-auto lg:mx-0 mb-5 flex w-fit items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-gray-100/80 dark:bg-white/5 px-4 py-2 shadow-sm dark:shadow-none">
                            <MessageCircle size={16} className="text-indigo-600 dark:text-indigo-400" />
                            <span className="text-sm font-medium text-gray-700 dark:text-zinc-300">
                                We're here to help
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                            Let's Start a Conversation
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-6 max-w-2xl text-base leading-7 text-gray-600 dark:text-zinc-400 md:text-lg mx-auto lg:mx-0">
                            Have a question about HireLoop, need support, or want to
                            work with us? Send us a message and our team will get back
                            to you.
                        </motion.p>
                    </div>

                    {/* Right Column: Unsplash Job-Hunting Graphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="relative mx-auto w-full max-w-lg lg:max-w-none">
                        <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-100 dark:bg-zinc-900 shadow-xl dark:shadow-indigo-500/5">
                            <Image
                                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
                                alt="Job interview and team collaboration"
                                fill
                                priority
                                className="object-cover transition-transform duration-500 hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent dark:from-zinc-950/60" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
