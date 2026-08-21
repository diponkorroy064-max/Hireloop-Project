"use client";

import React from "react";
import { MapPin, Briefcase, CircleDollarSign, ArrowRight } from "lucide-react";
import Link from "next/link";

// Mock data array
const jobOpenings = [
    {
        id: 1,
        title: "Frontend Developer",
        location: "New York, USA",
        type: "Hybrid",
        salary: "€25-€40/hour",
    },
    {
        id: 2,
        title: "Full Stack Developer",
        location: "New York, USA",
        type: "Hybrid",
        salary: "€25-€40/hour",
    },
    {
        id: 3,
        title: "Python Developer",
        location: "New York, USA",
        type: "Hybrid",
        salary: "€25-€40/hour",
    },
    {
        id: 4,
        title: "Javascript Developer",
        location: "New York, USA",
        type: "Hybrid",
        salary: "€25-€40/hour",
    },
    {
        id: 5,
        title: "Automation Designer",
        location: "New York, USA",
        type: "Hybrid",
        salary: "€25-€40/hour",
    },
    {
        id: 6,
        title: "Frontend Developer",
        location: "New York, USA",
        type: "Hybrid",
        salary: "€25-€40/hour",
    },
];

export default function JobDiscoverySection() {
    return (
        <section className="w-full bg-base-100 dark:bg-black text-gray-900 dark:text-white py-12 px-4 md:py-20 transition-colors duration-300">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                {/* Top Tag */}
                <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-500">
                    <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-sm" />
                    Smart Job Discovery
                    <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-sm" />
                </div>

                {/* Section Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center tracking-tight text-gray-900 dark:text-white mb-16 max-w-2xl leading-tight">
                    The roles you’d never find by searching
                </h2>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
                    {jobOpenings.map((job) => (
                        <div
                            key={job.id}
                            className="bg-white dark:bg-[#0D0D0D]/90 border border-gray-200 dark:border-white/10 rounded-2xl p-8 flex flex-col items-start shadow-sm dark:shadow-none hover:border-indigo-500/50 dark:hover:border-gray-400 transition-all duration-300 group"
                        >
                            {/* Job Title */}
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 tracking-wide">
                                {job.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-8 max-w-xs">
                                Showcase your commitment to diversity and inclusion by highlighting initiatives.
                            </p>

                            {/* Badges/Tags Grid */}
                            <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-10 w-full text-xs text-gray-600 dark:text-gray-400 font-medium">
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} className="text-pink-500 shrink-0" />
                                    <span>{job.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Briefcase size={16} className="text-purple-500 shrink-0" />
                                    <span>{job.type}</span>
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <CircleDollarSign size={16} className="text-emerald-500 dark:text-pink-400 shrink-0" />
                                    <span>{job.salary}</span>
                                </div>
                            </div>

                            {/* CTA Link */}
                            <button className="mt-auto flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-gray-300 group-hover:text-indigo-700 dark:group-hover:text-white transition-colors duration-200">
                                Apply Now
                                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-200" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Footer Button */}
                <Link href={'/jobs'}>
                    <button className="bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 shadow-md transition-all duration-200 hover:scale-105 cursor-pointer">
                        View all job openings
                    </button>
                </Link>
            </div>
        </section>
    );
}
