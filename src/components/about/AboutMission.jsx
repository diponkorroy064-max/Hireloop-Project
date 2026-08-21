"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const items = [
    {
        icon: Target,
        title: "Our Mission",
        description: "Our mission is to simplify the hiring process and help talented people discover opportunities where they can grow and succeed.",
    },
    {
        icon: Eye,
        title: "Our Vision",
        description: "We envision a world where finding the right job or the right candidate is simple, transparent, and accessible to everyone.",
    },
    {
        icon: Heart,
        title: "Our Values",
        description: "We believe in transparency, innovation, accessibility, continuous learning, and creating meaningful connections.",
    },
];


const AboutMission = () => {
    return (
        <section className="bg-gray-50 dark:bg-zinc-950 px-6 py-24 text-gray-900 dark:text-white transition-colors duration-300">
            <div className="mx-auto max-w-7xl">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                        Who We Are
                    </p>

                    <h2 className="mt-3 text-3xl font-bold md:text-4xl text-gray-900 dark:text-white">
                        Making Hiring Better For Everyone
                    </h2>

                    <p className="mt-5 leading-7 text-gray-600 dark:text-zinc-400">
                        HireLoop was created to bridge the gap between talented
                        professionals and companies looking for exceptional
                        people.
                    </p>
                </motion.div>

                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {items.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.12,
                                }}
                                whileHover={{ y: -8 }}
                                className="rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 p-7 shadow-sm dark:shadow-none transition-colors hover:border-indigo-500/50 dark:hover:border-indigo-500/40">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                                    <Icon size={23} />
                                </div>

                                <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-zinc-400">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutMission;
