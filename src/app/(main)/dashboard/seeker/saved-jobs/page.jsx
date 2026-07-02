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
        <div className="min-h-screen bg-zinc-950 text-white p-6">

            {/* Header */}

            <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">

                <div>
                    <h1 className="text-4xl font-bold">Saved Jobs</h1>

                    <p className="text-gray-400 mt-2">
                        Manage and track your bookmarked opportunities.
                    </p>
                </div>

                <div className="flex gap-4">

                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 w-44">
                        <div className="flex justify-between items-center">
                            <Bookmark className="text-yellow-400" size={18} />
                            <span className="text-xs text-gray-500">Total Saved</span>
                        </div>

                        <h2 className="text-3xl font-bold mt-3">24</h2>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 w-44">
                        <div className="flex justify-between items-center">
                            <Clock3 className="text-orange-400" size={18} />
                            <span className="text-xs text-gray-500">
                                Closing Soon
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold mt-3">3</h2>
                    </div>

                </div>

            </div>

            {/* Filters */}

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 mb-6 flex flex-col lg:flex-row justify-between gap-4">

                <div className="flex flex-wrap gap-3">

                    <button className="px-4 py-2 rounded-lg bg-white text-black">
                        All Saved
                    </button>

                    <button className="px-4 py-2 rounded-lg bg-zinc-800">
                        Design (8)
                    </button>

                    <button className="px-4 py-2 rounded-lg bg-zinc-800">
                        Engineering (12)
                    </button>

                    <button className="px-4 py-2 rounded-lg bg-zinc-800">
                        Product (4)
                    </button>

                </div>

                <select className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2">
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
                        className={`bg-zinc-900 border rounded-xl p-6 transition
              ${job.status === "closed"
                                ? "border-red-900 opacity-70"
                                : "border-zinc-800 hover:border-zinc-700"
                            }`}
                    >
                        <div className="flex flex-col lg:flex-row justify-between gap-6">

                            {/* Left */}

                            <div className="flex gap-5">

                                <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center">
                                    <Building2 size={24} />
                                </div>

                                <div>

                                    <div className="flex items-center gap-3 flex-wrap">
                                        <h2 className="text-xl font-semibold">
                                            {job.title}
                                        </h2>

                                        <span className="text-xs bg-zinc-800 px-2 py-1 rounded">
                                            {job.company}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-5 mt-3 text-sm text-gray-400">

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

                                <div className="text-right text-sm">
                                    <p className="text-gray-400">{job.saved}</p>

                                    {job.expires && (
                                        <p className="text-yellow-500">
                                            {job.expires}
                                        </p>
                                    )}
                                </div>

                                <div className="flex gap-3">

                                    <button className="w-10 h-10 rounded-lg border border-zinc-700 flex items-center justify-center">
                                        <Bookmark size={16} />
                                    </button>

                                    {job.status === "closed" ? (
                                        <button className="px-5 py-2 rounded-lg bg-red-900/20 text-red-400 border border-red-800">
                                            Remove
                                        </button>
                                    ) : job.status === "draft" ? (
                                        <button className="px-5 py-2 rounded-lg bg-zinc-800">
                                            Draft Started
                                        </button>
                                    ) : (
                                        <button className="px-5 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200">
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
                <button className="flex items-center gap-2 text-gray-400 hover:text-white">
                    Load More
                    <ChevronDown size={18} />
                </button>
            </div>

        </div>
    );
}

