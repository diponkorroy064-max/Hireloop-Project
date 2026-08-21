"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, Send, Users, CheckCircle } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: Search,
        title: "Discover Opportunities",
        description:
            "Job seekers browse and search for jobs that match their skills and career goals.",
    },
    {
        number: "02",
        icon: Send,
        title: "Apply With Confidence",
        description:
            "Find the right position and submit your application directly through HireLoop.",
    },
    {
        number: "03",
        icon: Users,
        title: "Connect With Recruiters",
        description:
            "Recruiters review applications and connect with promising candidates.",
    },
    {
        number: "04",
        icon: CheckCircle,
        title: "Build Your Future",
        description:
            "Move from application to opportunity and take the next step in your career.",
    },
];

const AboutHowItWorks = () => {
    return (
        <section className="bg-white dark:bg-zinc-950 px-6 py-24 text-gray-900 dark:text-white transition-colors duration-300">
            <div className="mx-auto max-w-7xl">

                <div className="mx-auto max-w-2xl text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400"
                    >
                        How It Works
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-3 text-3xl font-bold md:text-4xl text-gray-900 dark:text-white"
                    >
                        From Search To Success
                    </motion.h2>
                </div>

                <div className="relative mt-16 grid gap-8 md:grid-cols-4">

                    {/* Connecting Line */}
                    <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-gray-200 dark:bg-zinc-800 md:block" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.12,
                                }}
                                className="relative text-center"
                            >
                                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-indigo-500/30 bg-gray-50 dark:bg-zinc-900 text-indigo-600 dark:text-indigo-400 shadow-sm dark:shadow-none">
                                    <Icon size={24} />
                                </div>

                                <span className="mt-5 block text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400">
                                    {step.number}
                                </span>

                                <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                                    {step.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-zinc-400">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutHowItWorks;
