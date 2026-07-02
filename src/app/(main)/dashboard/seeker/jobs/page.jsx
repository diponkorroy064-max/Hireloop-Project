"use client";

import {
    Search,
    MapPin,
    Briefcase,
    DollarSign,
    Bookmark,
    Clock3,
    Building2,
} from "lucide-react";

const jobs = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        company: "TechFlow",
        location: "Remote",
        salary: "$4,500 - $6,500",
        type: "Full-Time",
        posted: "2 days ago",
    },
    {
        id: 2,
        title: "UI/UX Designer",
        company: "Creative Studio",
        location: "Dhaka, Bangladesh",
        salary: "$2,000 - $3,000",
        type: "Hybrid",
        posted: "1 day ago",
    },
    {
        id: 3,
        title: "Backend Developer",
        company: "CloudSoft",
        location: "Remote",
        salary: "$5,000 - $7,000",
        type: "Remote",
        posted: "3 days ago",
    },
    {
        id: 4,
        title: "Marketing Executive",
        company: "GrowthX",
        location: "Chattogram",
        salary: "$1,500 - $2,500",
        type: "Full-Time",
        posted: "5 days ago",
    },
    {
        id: 5,
        title: "DevOps Engineer",
        company: "ByteLab",
        location: "Singapore",
        salary: "$6,000 - $8,000",
        type: "Full-Time",
        posted: "Today",
    },
    {
        id: 6,
        title: "Mobile App Developer",
        company: "NextWave",
        location: "Remote",
        salary: "$4,000 - $5,500",
        type: "Contract",
        posted: "4 days ago",
    },
];

export default function JobsPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white p-6">

            {/* Header */}

            <div className="mb-8">
                <h1 className="text-4xl font-bold">Find Jobs</h1>
                <p className="text-gray-400 mt-2">
                    Discover opportunities that match your skills and interests.
                </p>
            </div>

            {/* Filters */}

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 mb-8">

                <div className="grid lg:grid-cols-4 gap-4">

                    <div className="relative">
                        <Search
                            size={18}
                            className="absolute left-3 top-3 text-gray-500"
                        />

                        <input
                            type="text"
                            placeholder="Search jobs..."
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-2 outline-none"
                        />
                    </div>

                    <select className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2">
                        <option>All Categories</option>
                        <option>Engineering</option>
                        <option>Design</option>
                        <option>Marketing</option>
                        <option>Business</option>
                    </select>

                    <select className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2">
                        <option>All Locations</option>
                        <option>Remote</option>
                        <option>Bangladesh</option>
                        <option>Singapore</option>
                        <option>USA</option>
                    </select>

                    <button className="bg-white text-black rounded-lg font-semibold hover:bg-gray-200">
                        Search Jobs
                    </button>

                </div>

            </div>

            {/* Jobs */}

            <div className="space-y-5">

                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition"
                    >
                        <div className="flex flex-col lg:flex-row justify-between gap-6">

                            {/* Left */}

                            <div className="flex gap-5">

                                <div className="w-16 h-16 rounded-xl bg-zinc-800 flex items-center justify-center">
                                    <Building2 size={28} />
                                </div>

                                <div>

                                    <h2 className="text-2xl font-semibold">
                                        {job.title}
                                    </h2>

                                    <p className="text-gray-400 mt-1">
                                        {job.company}
                                    </p>

                                    <div className="flex flex-wrap gap-5 mt-4 text-sm text-gray-400">

                                        <div className="flex items-center gap-1">
                                            <MapPin size={16} />
                                            {job.location}
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <DollarSign size={16} />
                                            {job.salary}
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <Briefcase size={16} />
                                            {job.type}
                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* Right */}

                            <div className="flex flex-col items-end justify-between">

                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <Clock3 size={15} />
                                    {job.posted}
                                </div>

                                <div className="flex gap-3 mt-6">

                                    <button className="w-11 h-11 rounded-lg border border-zinc-700 hover:bg-zinc-800">
                                        <Bookmark className="mx-auto" size={18} />
                                    </button>

                                    <button className="px-5 py-2 rounded-lg border border-zinc-700 hover:bg-zinc-800">
                                        View Details
                                    </button>

                                    <button className="px-6 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200">
                                        Apply Now
                                    </button>

                                </div>

                            </div>

                        </div>
                    </div>
                ))}

            </div>

            {/* Pagination */}

            <div className="flex justify-center gap-2 mt-10">

                <button className="w-10 h-10 rounded-lg bg-white text-black">
                    1
                </button>

                <button className="w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700">
                    2
                </button>

                <button className="w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700">
                    3
                </button>

                <button className="w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700">
                    4
                </button>

            </div>
        </div>
    );
}

