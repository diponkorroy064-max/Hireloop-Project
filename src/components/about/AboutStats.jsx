"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Briefcase,
    Building2,
    Users,
    UserCheck,
} from "lucide-react";

const stats = [
    {
        value: "10K+",
        label: "Job Seekers",
        icon: Users,
    },
    {
        value: "2K+",
        label: "Companies",
        icon: Building2,
    },
    {
        value: "5K+",
        label: "Active Jobs",
        icon: Briefcase,
    },
    {
        value: "95%",
        label: "Successful Matches",
        icon: UserCheck,
    },
];

const AboutStats = () => {
    return (
        <section className="border-y border-gray-200 dark:border-zinc-800/80 bg-gray-100/60 dark:bg-zinc-900/40 transition-colors duration-300">
            <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;

                    return (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            className="border-r border-b md:border-b-0 border-gray-200 dark:border-zinc-800/80 p-8 text-center last:border-r-0 nth-2:border-r-0 md:nth-2:border-r">
                            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                                <Icon size={21} />
                            </div>

                            <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                                {stat.value}
                            </h3>

                            <p className="mt-1 text-sm font-medium text-gray-600 dark:text-zinc-400">
                                {stat.label}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default AboutStats;
