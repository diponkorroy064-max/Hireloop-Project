"use client";

import {
    Bookmark,
    Clock3,
    MapPin,
    Building2,
    Briefcase,
    ChevronDown,
} from "lucide-react";

const jobs = [
    {
        id: 1,
        title: "Senior Product Designer",
        company: "TECHFLOW",
        location: "San Francisco, CA (Hybrid)",
        salary: "$160K - $200K + Equity",
        saved: "Saved 2 hours ago",
        expires: "Closes in 3 days",
        status: "active",
    },
    {
        id: 2,
        title: "Frontend Engineer",
        company: "VERCEL",
        location: "Remote, Global",
        salary: "$140K - $180K",
        saved: "Saved yesterday",
        status: "active",
    },
    {
        id: 3,
        title: "Staff UI Researcher",
        company: "LINEAR",
        location: "New York, NY (On-site)",
        salary: "$180K - $220K",
        saved: "Saved 3 days ago",
        status: "draft",
    },
    {
        id: 4,
        title: "Full Stack Developer",
        company: "META",
        location: "Menlo Park, CA (Hybrid)",
        salary: "$150K - $210K + Bonus",
        saved: "Saved 5 days ago",
        status: "active",
    },
    {
        id: 5,
        title: "Design Systems Lead",
        company: "SPOTIFY",
        location: "Remote, USA",
        salary: "$170K - $210K",
        saved: "Closed yesterday",
        status: "closed",
    },
];

export default function SavedJobsPage() {
    return (
        <div className="min-h-screen transition-colors duration-200 p-6 bg-gray-50 text-zinc-900 dark:bg-zinc-950 dark:text-white">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">
                <div>
                    <h1 className="text-4xl font-bold">Saved Jobs</h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Manage and track your bookmarked opportunities.
                    </p>
                </div>

                <div className="flex gap-4">
                    <div className="border rounded-xl px-6 py-4 w-44 bg-white border-gray-200 shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
                        <div className="flex justify-between items-center">
                            <Bookmark className="text-yellow-500 dark:text-yellow-400" size={18} />
                            <span className="text-xs text-gray-500 dark:text-gray-400">Total Saved</span>
                        </div>
                        <h2 className="text-3xl font-bold mt-3">24</h2>
                    </div>

                    <div className="border rounded-xl px-6 py-4 w-44 bg-white border-gray-200 shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
                        <div className="flex justify-between items-center">
                            <Clock3 className="text-orange-500 dark:text-orange-400" size={18} />
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                Closing Soon
                            </span>
                        </div>
                        <h2 className="text-3xl font-bold mt-3">3</h2>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="border rounded-xl p-5 mb-6 flex flex-col lg:flex-row justify-between gap-4 bg-white border-gray-200 shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
                <div className="flex flex-wrap gap-3">
                    <button className="px-4 py-2 rounded-lg font-medium transition bg-zinc-900 text-white dark:bg-white dark:text-black">
                        All Saved
                    </button>

                    <button className="px-4 py-2 rounded-lg transition bg-gray-100 hover:bg-gray-200 text-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-gray-200">
                        Design (8)
                    </button>

                    <button className="px-4 py-2 rounded-lg transition bg-gray-100 hover:bg-gray-200 text-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-gray-200">
                        Engineering (12)
                    </button>

                    <button className="px-4 py-2 rounded-lg transition bg-gray-100 hover:bg-gray-200 text-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-gray-200">
                        Product (4)
                    </button>
                </div>

                <select className="border rounded-lg px-4 py-2 outline-none bg-gray-50 border-gray-200 text-zinc-900 dark:bg-zinc-950 dark:border-zinc-800 dark:text-white">
                    <option>Recently Saved</option>
                    <option>Newest</option>
                    <option>Highest Salary</option>
                </select>
            </div>

            {/* Job List */}
            <div className="space-y-5">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className={`border rounded-xl p-6 transition bg-white shadow-sm dark:bg-zinc-900 ${job.status === "closed"
                                ? "border-red-300 bg-red-50/50 opacity-70 dark:border-red-900 dark:bg-zinc-900/50"
                                : "border-gray-200 hover:border-gray-300 dark:border-zinc-800 dark:hover:border-zinc-700"
                            }`}
                    >
                        <div className="flex flex-col lg:flex-row justify-between gap-6">
                            {/* Left */}
                            <div className="flex gap-5">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gray-100 text-zinc-800 dark:bg-zinc-800 dark:text-white">
                                    <Building2 size={24} />
                                </div>

                                <div>
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <h2 className="text-xl font-semibold">{job.title}</h2>

                                        <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 dark:bg-zinc-800 dark:text-gray-300">
                                            {job.company}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-5 mt-3 text-sm text-gray-600 dark:text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <MapPin size={15} />
                                            {job.location}
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <Briefcase size={15} />
                                            {job.salary}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right */}
                            <div className="flex flex-col lg:items-end gap-4">
                                <div className="lg:text-right text-sm">
                                    <p className="text-gray-500 dark:text-gray-400">{job.saved}</p>

                                    {job.expires && (
                                        <p className="text-amber-600 dark:text-yellow-500 font-medium">
                                            {job.expires}
                                        </p>
                                    )}
                                </div>

                                <div className="flex gap-3">
                                    <button className="w-10 h-10 rounded-lg border flex items-center justify-center transition border-gray-300 hover:bg-gray-100 dark:border-zinc-700 dark:hover:bg-zinc-800">
                                        <Bookmark size={16} />
                                    </button>

                                    {job.status === "closed" ? (
                                        <button className="px-5 py-2 rounded-lg bg-red-100 text-red-700 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800">
                                            Remove
                                        </button>
                                    ) : job.status === "draft" ? (
                                        <button className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white">
                                            Draft Started
                                        </button>
                                    ) : (
                                        <button className="px-5 py-2 rounded-lg font-medium transition bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                                            Apply Now
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center mt-10">
                <button className="flex items-center gap-2 transition text-gray-600 hover:text-zinc-900 dark:text-gray-400 dark:hover:text-white">
                    Load More
                    <ChevronDown size={18} />
                </button>
            </div>
        </div>
    );
}

