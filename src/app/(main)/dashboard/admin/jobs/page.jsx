"use client";
import React, { useState } from "react";
import {
    Plus,
    Eye,
    Pencil,
    Trash2,
    BarChart3,
    Clock3,
    Users,
    Search,
} from "lucide-react";

const jobs = [
    {
        title: "Senior Product Designer",
        company: "Nexus Lab",
        category: "Design",
        type: "Full-Time",
        posted: "Oct 24, 2023",
        status: "Active",
    },
    {
        title: "Full-Stack Engineer",
        company: "Quantum",
        category: "Engineering",
        type: "Contract",
        posted: "Oct 22, 2023",
        status: "Active",
    },
    {
        title: "Marketing Director",
        company: "Vanguard",
        category: "Marketing",
        type: "Full-Time",
        posted: "Oct 15, 2023",
        status: "Closed",
    },
    {
        title: "Backend Architect",
        company: "CloudScale",
        category: "Engineering",
        type: "Remote",
        posted: "Oct 20, 2023",
        status: "Active",
    },
    {
        title: "UX Research Lead",
        company: "Humanize",
        category: "Design",
        type: "Hybrid",
        posted: "Oct 19, 2023",
        status: "Active",
    },
];

export default function AdminJobsPage() {
    const [activeTab, setActiveTab] = useState("active");

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0d0d0f] text-slate-900 dark:text-neutral-100 transition-colors duration-300 p-6 md:p-8">
            <div className="max-w-7xl mx-auto space-y-6">

                {/* Header Section */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm dark:shadow-none transition-colors">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Manage Jobs
                        </h1>
                        <p className="text-sm text-slate-500 dark:text-neutral-400 mt-1 font-medium">
                            Oversee all active listings and historical job posts across the platform.
                        </p>
                    </div>

                    <button className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wide transition-all shadow-sm">
                        <Plus size={16} />
                        Create Job
                    </button>
                </div>

                {/* Filters & Navigation Controls */}
                <div className="bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-5 shadow-sm dark:shadow-none transition-colors">
                    <div className="flex flex-col lg:flex-row gap-4 justify-between lg:items-center">
                        <div className="flex flex-wrap items-center gap-3">
                            {/* Search Input */}
                            <div className="relative min-w-60">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-zinc-500" />
                                <input
                                    type="text"
                                    placeholder="Search listings..."
                                    className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-zinc-700 transition-all text-slate-800 dark:text-neutral-200"
                                />
                            </div>

                            {/* Dropdowns */}
                            <select className="bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl px-4 py-2 text-xs font-medium text-slate-700 dark:text-neutral-300 focus:outline-none transition-colors">
                                <option>All Statuses</option>
                                <option>Active</option>
                                <option>Closed</option>
                            </select>

                            <select className="bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl px-4 py-2 text-xs font-medium text-slate-700 dark:text-neutral-300 focus:outline-none transition-colors">
                                <option>All Categories</option>
                                <option>Engineering</option>
                                <option>Design</option>
                                <option>Marketing</option>
                            </select>
                        </div>

                        {/* Status Toggle Switch */}
                        <div className="inline-flex p-1 bg-slate-100 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl text-xs font-medium self-start lg:self-auto">
                            <button
                                onClick={() => setActiveTab("active")}
                                className={`px-4 py-1.5 rounded-lg transition-all ${activeTab === "active"
                                        ? "bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-sm font-semibold"
                                        : "text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
                                    }`}
                            >
                                Active (120)
                            </button>
                            <button
                                onClick={() => setActiveTab("closed")}
                                className={`px-4 py-1.5 rounded-lg transition-all ${activeTab === "closed"
                                        ? "bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-sm font-semibold"
                                        : "text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
                                    }`}
                            >
                                Closed (145)
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Table Structure */}
                <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900/40 shadow-sm dark:shadow-none transition-colors">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead className="bg-slate-50/80 dark:bg-zinc-800/50 text-slate-500 dark:text-neutral-400 font-semibold border-b border-slate-200 dark:border-zinc-800">
                                <tr>
                                    <th className="px-6 py-4">Title</th>
                                    <th className="px-6 py-4">Company</th>
                                    <th className="px-6 py-4">Category</th>
                                    <th className="px-6 py-4">Type</th>
                                    <th className="px-6 py-4">Date Posted</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/60">
                                {jobs.map((job, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-slate-50/60 dark:hover:bg-zinc-800/30 transition-colors"
                                    >
                                        <td className="px-6 py-4 font-semibold text-slate-900 dark:text-neutral-100">
                                            {job.title}
                                        </td>

                                        <td className="px-6 py-4 text-slate-600 dark:text-neutral-300">
                                            {job.company}
                                        </td>

                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-neutral-300 border border-slate-200 dark:border-zinc-700 rounded-full font-medium">
                                                {job.category}
                                            </span>
                                        </td>

                                        <td className="px-6 py-4 text-slate-600 dark:text-neutral-400">
                                            {job.type}
                                        </td>

                                        <td className="px-6 py-4 text-slate-500 dark:text-neutral-400 whitespace-nowrap">
                                            {job.posted}
                                        </td>

                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${job.status === "Active"
                                                        ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/60"
                                                        : "bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-neutral-400 border-slate-200 dark:border-zinc-700"
                                                    }`}
                                            >
                                                {job.status}
                                            </span>
                                        </td>

                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end items-center gap-1">
                                                <button
                                                    title="View details"
                                                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-neutral-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                                                >
                                                    <Eye size={16} />
                                                </button>

                                                <button
                                                    title="Edit job"
                                                    className="p-1.5 rounded-lg text-slate-500 hover:text-amber-600 dark:text-neutral-400 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                                                >
                                                    <Pencil size={16} />
                                                </button>

                                                <button
                                                    title="Delete listing"
                                                    className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 dark:text-neutral-400 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table Footer / Pagination */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-6 py-4 border-t border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/20 text-xs">
                        <p className="text-slate-500 dark:text-neutral-400 font-medium">
                            Showing <span className="font-semibold text-slate-800 dark:text-neutral-200">1–5</span> of <span className="font-semibold text-slate-800 dark:text-neutral-200">173</span> jobs
                        </p>

                        <div className="flex items-center gap-1.5">
                            <button className="w-8 h-8 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-black font-semibold flex items-center justify-center shadow-sm">
                                1
                            </button>
                            <button className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-zinc-700 flex items-center justify-center transition-colors">
                                2
                            </button>
                            <button className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-zinc-700 flex items-center justify-center transition-colors">
                                3
                            </button>
                            <span className="px-1 text-slate-400 dark:text-neutral-500">...</span>
                            <button className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-zinc-700 flex items-center justify-center transition-colors">
                                35
                            </button>
                        </div>
                    </div>
                </div>

                {/* Analytics Metrics Section */}
                <div className="grid md:grid-cols-3 gap-6 pt-2">
                    {/* Engagement Rate */}
                    <div className="bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm dark:shadow-none transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                            <BarChart3 size={20} />
                        </div>
                        <p className="text-slate-500 dark:text-neutral-400 text-xs font-medium">
                            Engagement Rate
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
                            82.4%
                        </h2>
                        <p className="text-emerald-600 dark:text-emerald-400 text-xs font-semibold mt-2">
                            +5.2% from last month
                        </p>
                    </div>

                    {/* Avg. Time to Fill */}
                    <div className="bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm dark:shadow-none transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                            <Clock3 size={20} />
                        </div>
                        <p className="text-slate-500 dark:text-neutral-400 text-xs font-medium">
                            Avg. Time to Fill
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
                            14 Days
                        </h2>
                        <p className="text-slate-500 dark:text-neutral-400 text-xs font-medium mt-2">
                            Stable performance
                        </p>
                    </div>

                    {/* Total Applications */}
                    <div className="bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm dark:shadow-none transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-100 dark:border-amber-900/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                            <Users size={20} />
                        </div>
                        <p className="text-slate-500 dark:text-neutral-400 text-xs font-medium">
                            Total Applications
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
                            12,840
                        </h2>
                        <p className="text-amber-600 dark:text-amber-400 text-xs font-semibold mt-2">
                            +2.1% across all sections
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
