"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, ShieldCheck, LayoutDashboard, Filter, Bell, Building2 } from "lucide-react";

const features = [
    {
        icon: Search,
        title: "Smart Job Search",
        description:
            "Search thousands of opportunities using job titles, skills, locations, and other useful filters.",
    },
    {
        icon: Filter,
        title: "Advanced Filtering",
        description:
            "Find relevant positions faster with filters for job type, category, location, remote work, and more.",
    },
    {
        icon: LayoutDashboard,
        title: "Role-Based Dashboards",
        description:
            "Dedicated dashboards give job seekers, recruiters, and administrators the tools they need.",
    },
    {
        icon: Building2,
        title: "Company Management",
        description:
            "Recruiters can create companies, publish jobs, and manage their recruitment activities.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Platform",
        description:
            "Authentication and authorization help protect user accounts and platform resources.",
    },
    {
        icon: Bell,
        title: "Application Tracking",
        description:
            "Job seekers can track their applications and recruiters can review incoming candidates.",
    },
];

const AboutFeatures = () => {
    return (
        <section className="bg-gray-100/60 dark:bg-zinc-900/30 px-6 py-24 transition-colors duration-300">
            <div className="mx-auto max-w-7xl">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl md:max-w-5xl text-center mx-auto"
                >
                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                        Platform Features
                    </p>

                    <h2 className="mt-3 text-3xl font-bold md:text-4xl text-gray-900 dark:text-white">
                        Everything You Need For Modern Hiring
                    </h2>

                    <p className="mt-4 text-gray-600 dark:text-zinc-400">
                        HireLoop provides powerful tools for both candidates
                        and companies.
                    </p>
                </motion.div>

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.title}
                                initial={{
                                    opacity: 0,
                                    scale: 0.95,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                whileHover={{
                                    y: -5,
                                    scale: 1.02,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.05,
                                }}
                                className="group relative rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 shadow-sm dark:shadow-none hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:shadow-md dark:hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer"
                            >
                                <div className="inline-block rounded-xl bg-indigo-50 dark:bg-indigo-950/50 p-3 transition-colors duration-300 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50">
                                    <Icon
                                        size={24}
                                        className="text-indigo-600 dark:text-indigo-400 transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>

                                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-zinc-400">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutFeatures;
