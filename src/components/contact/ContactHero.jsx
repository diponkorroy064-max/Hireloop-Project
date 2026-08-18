"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ContactHero() {
    return (
        <section className="relative overflow-hidden bg-zinc-950 text-white py-15 md:py-28">

            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-3xl" />
                <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />
            </div>

            <div className="relative container mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    <MessageCircle size={16} className="text-indigo-400" />

                    <span className="text-sm text-zinc-300">
                        We're here to help
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl font-bold tracking-tight md:text-6xl">
                    Let's Start a Conversation
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
                    Have a question about HireLoop, need support, or want to
                    work with us? Send us a message and our team will get back
                    to you.
                </motion.p>
            </div>
        </section>
    );
}
