"use client";

import {
    Plus,
    Eye,
    Pencil,
    Trash2,
    Briefcase,
    BarChart3,
    Clock3,
    Users,
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
    return (
        <div className="min-h-screen bg-zinc-950 text-white p-6">

            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mb-8">

                <div>
                    <h1 className="text-3xl font-bold">Manage Jobs</h1>
                    <p className="text-gray-400 mt-1">
                        Oversee all active listings and historical job posts across the
                        platform.
                    </p>
                </div>

                <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200">
                    <Plus size={18} />
                    Create Job
                </button>
            </div>

            {/* Filters */}

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 mb-6">

                <div className="flex flex-col lg:flex-row gap-4 justify-between">

                    <div className="flex gap-3 flex-wrap">

                        <select className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2">
                            <option>All Statuses</option>
                            <option>Active</option>
                            <option>Closed</option>
                        </select>

                        <select className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2">
                            <option>All Categories</option>
                            <option>Engineering</option>
                            <option>Design</option>
                            <option>Marketing</option>
                        </select>

                    </div>

                    <div className="flex rounded-lg overflow-hidden border border-zinc-800">
                        <button className="bg-zinc-800 px-5 py-2">
                            Active (120)
                        </button>

                        <button className="bg-zinc-950 px-5 py-2">
                            Closed (145)
                        </button>
                    </div>

                </div>

            </div>

            {/* Table */}

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-zinc-950 text-gray-400 text-sm">
                            <tr>
                                <th className="text-left px-6 py-4">Title</th>
                                <th className="text-left px-6 py-4">Company</th>
                                <th className="text-left px-6 py-4">Category</th>
                                <th className="text-left px-6 py-4">Type</th>
                                <th className="text-left px-6 py-4">Date Posted</th>
                                <th className="text-left px-6 py-4">Status</th>
                                <th className="text-right px-6 py-4">Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {jobs.map((job, index) => (
                                <tr
                                    key={index}
                                    className="border-t border-zinc-800 hover:bg-zinc-800/40"
                                >
                                    <td className="px-6 py-5">
                                        <p className="font-semibold">{job.title}</p>
                                    </td>

                                    <td className="px-6 py-5">{job.company}</td>

                                    <td className="px-6 py-5">
                                        <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs">
                                            {job.category}
                                        </span>
                                    </td>

                                    <td className="px-6 py-5">{job.type}</td>

                                    <td className="px-6 py-5">{job.posted}</td>

                                    <td className="px-6 py-5">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${job.status === "Active"
                                                    ? "bg-green-900/30 text-green-400"
                                                    : "bg-gray-700 text-gray-300"
                                                }`}
                                        >
                                            {job.status}
                                        </span>
                                    </td>

                                    <td className="px-6 py-5">
                                        <div className="flex justify-end gap-3">
                                            <button className="hover:text-blue-400">
                                                <Eye size={18} />
                                            </button>

                                            <button className="hover:text-yellow-400">
                                                <Pencil size={18} />
                                            </button>

                                            <button className="hover:text-red-500">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>

                {/* Footer */}

                <div className="flex justify-between items-center px-6 py-4 border-t border-zinc-800">

                    <p className="text-gray-400 text-sm">
                        Showing 1–5 of 173 jobs
                    </p>

                    <div className="flex gap-2">

                        <button className="w-8 h-8 rounded bg-white text-black">
                            1
                        </button>

                        <button className="w-8 h-8 rounded bg-zinc-800">
                            2
                        </button>

                        <button className="w-8 h-8 rounded bg-zinc-800">
                            3
                        </button>

                        <button className="w-8 h-8 rounded bg-zinc-800">
                            ...
                        </button>

                        <button className="w-8 h-8 rounded bg-zinc-800">
                            35
                        </button>

                    </div>

                </div>

            </div>

            {/* Analytics */}

            <div className="grid md:grid-cols-3 gap-6 mt-8">

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <BarChart3 className="mb-5" />

                    <p className="text-gray-400 text-sm">
                        Engagement Rate
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        82.4%
                    </h2>

                    <p className="text-green-500 text-sm mt-2">
                        +5.2% from last month
                    </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <Clock3 className="mb-5" />

                    <p className="text-gray-400 text-sm">
                        Avg. Time to Fill
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        14 Days
                    </h2>

                    <p className="text-gray-400 text-sm mt-2">
                        Stable performance
                    </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <Users className="mb-5" />

                    <p className="text-gray-400 text-sm">
                        Total Applications
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        12,840
                    </h2>

                    <p className="text-yellow-500 text-sm mt-2">
                        +2.1% across all sections
                    </p>
                </div>

            </div>

        </div>
    );
}

