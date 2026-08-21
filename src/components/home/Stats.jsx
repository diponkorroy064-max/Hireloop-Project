"use client";
import { Briefcase, Factory, Magnifier, Star } from "@gravity-ui/icons";
import { motion } from "framer-motion";

export default function Stats() {
    const stats = [
        {
            id: 1,
            icon: <Briefcase className="h-5 w-5" />,
            value: "50K",
            label: "Active Jobs",
        },
        {
            id: 2,
            icon: <Factory className="h-5 w-5" />,
            value: "12K",
            label: "Companies",
        },
        {
            id: 3,
            icon: <Magnifier className="h-5 w-5" />,
            value: "2M",
            label: "Job Seekers",
        },
        {
            id: 4,
            icon: <Star className="h-5 w-5" />,
            value: "97%",
            label: "Satisfaction Rate",
        },
    ];


    return (
        <section className="relative overflow-hidden bg-base-200 dark:bg-gray-900 py-16 md:py-24 text-gray-900 dark:text-white transition-colors duration-300">
            {/* Background Globe Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 dark:opacity-40 transition-opacity"
                style={{ backgroundImage: "url('/images/globe.png')" }}
            />

            {/* Subtle Gradient Glow */}
            <div className="absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-400/20 dark:bg-violet-600/20 blur-[120px] pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mx-auto max-w-3xl md:max-w-5xl text-center">
                    <h2 className="text-2xl md:text-4xl font-medium leading-relaxed text-gray-800 dark:text-white/90 mb-6">
                        <span className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
                            Assisting over 15,000 job seekers
                        </span>
                        <br />
                        find their dream positions.
                    </h2>

                    
                    {/* Interactive Animated Badges */}
                    <div className="flex items-center justify-center gap-6 mt-4">
                        <motion.span className="inline-block rounded-full bg-orange-500/20 px-4 py-1.5 text-sm font-semibold text-orange-600 dark:text-orange-400 border border-orange-500"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}>
                            Remote Jobs
                        </motion.span>

                        <motion.span className="inline-block rounded-full bg-sky-500/20 px-4 py-1.5 text-sm font-semibold text-sky-500 dark:text-sky-400 border border-sky-500"
                            animate={{ scale: [1.05, 1, 1.05] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}>
                            On-site Jobs
                        </motion.span>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 p-8 backdrop-blur-xl shadow-sm dark:shadow-none transition duration-300 hover:border-violet-500/60 dark:hover:border-violet-500/70"
                            whileHover={{ y: -4 }}>
                            {/* Card Background Glow */}
                            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-violet-500/10 dark:bg-violet-500/20 blur-2xl transition duration-300 group-hover:scale-125" />

                            {/* Icon Container */}
                            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400">
                                {stat.icon}
                            </div>

                            {/* Stat Value */}
                            <h3 className="relative z-10 mt-8 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {stat.value}
                            </h3>

                            {/* Stat Label */}
                            <p className="relative z-10 mt-2 text-sm md:text-base font-medium text-gray-600 dark:text-gray-400">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
