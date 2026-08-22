"use client"
import React from 'react';
import { Link } from '@heroui/react';
import { MapPin, Briefcase, CircleDollar, Calendar, ArrowUpRight } from '@gravity-ui/icons';
import Image from 'next/image';

// Salary string utility formatter---
const formatSalary = (amount) => {
    if (!amount) return "0";
    const numericAmount = parseInt(amount, 10);
    return numericAmount >= 1000 ? `${(numericAmount / 1000).toLocaleString()}k` : amount;
};

// Humanize standard date formats---
const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

const JobDetailClient = ({ job, id }) => {
    return (
        <main className="w-full min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 p-6 md:p-12 lg:p-16 transition-colors duration-300">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                {/* LEFT BLOCK: Corporate Identity, Description & Details */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Header Group */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            {job.companyLogo && (
                                <Image
                                    width={500}
                                    height={500}
                                    src={job.companyLogo}
                                    alt={`${job.companyName} Branding`}
                                    className="w-14 h-14 object-contain bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-2 rounded-xl shadow-sm dark:shadow-none transition-colors"
                                />
                            )}
                            <div>
                                <h2 className="text-xl font-medium text-slate-700 dark:text-zinc-300">{job.companyName}</h2>
                                <p className="text-sm text-slate-500 dark:text-zinc-500 capitalize">{job.jobCategory} Role</p>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                            {job.jobTitle}
                        </h1>
                    </div>

                    {/* Section: Responsibilities */}
                    <section className="space-y-3">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Core Responsibilities</h3>
                        <p className="text-slate-600 dark:text-zinc-300 text-base leading-relaxed whitespace-pre-line">
                            {job.responsibilities || "No description responsibilities specified for this listing."}
                        </p>
                    </section>

                    {/* Section: Core Technical Requirements */}
                    <section className="space-y-3">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Requirements & Credentials</h3>
                        <div className="bg-white dark:bg-zinc-900/40 border border-slate-200 dark:border-zinc-800/60 rounded-2xl p-5 shadow-sm dark:shadow-none transition-colors">
                            <p className="text-slate-600 dark:text-zinc-300 text-base leading-relaxed">
                                {job.requirements || "Standard industry standards apply."}
                            </p>
                        </div>
                    </section>

                    {/* Section: Benefits & Perks */}
                    {job.benefits && (
                        <section className="space-y-3">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Benefits & Perks</h3>
                            <p className="text-slate-600 dark:text-zinc-300 text-base leading-relaxed">
                                {job.benefits}
                            </p>
                        </section>
                    )}
                </div>

                {/* RIGHT BLOCK: Core Metadata Panel Widget */}
                <aside className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800/80 rounded-[32px] p-6 lg:sticky lg:top-8 space-y-6 shadow-md dark:shadow-xl transition-colors">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Job Overview</h3>

                    <div className="space-y-4">
                        {/* Location Element */}
                        <div className="flex items-start gap-3">
                            <MapPin className="text-purple-600 dark:text-purple-400 w-5 h-5 mt-0.5 shrink-0" />
                            <div>
                                <span className="text-xs text-slate-500 dark:text-zinc-500 block">Location</span>
                                <span className="text-sm font-medium text-slate-800 dark:text-zinc-200">
                                    {job.location} {job.isRemote && <span className="text-purple-600 dark:text-purple-400 font-normal text-xs ml-1">(Remote Friendly)</span>}
                                </span>
                            </div>
                        </div>

                        {/* Position Type Element */}
                        <div className="flex items-start gap-3">
                            <Briefcase className="text-purple-600 dark:text-purple-400 w-5 h-5 mt-0.5 shrink-0" />
                            <div>
                                <span className="text-xs text-slate-500 dark:text-zinc-500 block">Job Type</span>
                                <span className="text-sm font-medium text-slate-800 dark:text-zinc-200 capitalize">{job.jobType}</span>
                            </div>
                        </div>

                        {/* Comp/Salary Element */}
                        <div className="flex items-start gap-3">
                            <CircleDollar className="text-purple-600 dark:text-purple-400 w-5 h-5 mt-0.5 shrink-0" />
                            <div>
                                <span className="text-xs text-slate-500 dark:text-zinc-500 block">Salary Range</span>
                                <span className="text-sm font-medium text-slate-800 dark:text-zinc-200">
                                    {job.minSalary && job.maxSalary
                                        ? `$${formatSalary(job.minSalary)} – $${formatSalary(job.maxSalary)} / year`
                                        : "Competitive Salary"}
                                </span>
                            </div>
                        </div>

                        {/* Deadline Element */}
                        <div className="flex items-start gap-3">
                            <Calendar className="text-purple-600 dark:text-purple-400 w-5 h-5 mt-0.5 shrink-0" />
                            <div>
                                <span className="text-xs text-slate-500 dark:text-zinc-500 block">Application Deadline</span>
                                <span className="text-sm font-medium text-slate-800 dark:text-zinc-200">{formatDate(job.deadline)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Button: Apply Routing Link Container */}
                    <Link
                        href={`/jobs/${id}/apply`}
                        className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white font-medium py-4 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                        endContent={<ArrowUpRight className="w-4 h-4" />}>
                        Apply For This Job
                    </Link>
                </aside>

            </div>
        </main>
    );
};

export default JobDetailClient;

