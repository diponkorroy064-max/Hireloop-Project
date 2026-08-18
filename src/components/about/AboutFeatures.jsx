"use client";
import { motion } from "framer-motion";
import { Search, ShieldCheck, LayoutDashboard, Filter, Bell, Building2} from "lucide-react";

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
        <section className="bg-zinc-900/30 px-6 py-24">
            <div className="mx-auto max-w-7xl">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl md:max-w-5xl text-center mx-auto">
                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
                        Platform Features
                    </p>

                    <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                        Everything You Need For Modern Hiring
                    </h2>

                    <p className="mt-4 text-zinc-400">
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
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
                            >
                                <Icon
                                    size={24}
                                    className="text-indigo-400"
                                />

                                <h3 className="mt-5 text-lg font-semibold">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-zinc-400">
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
