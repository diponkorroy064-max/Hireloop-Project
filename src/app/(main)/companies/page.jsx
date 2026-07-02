"use client";

import {
    Search,
    Building2,
    MapPin,
    BadgeCheck,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const companies = [
    {
        id: 1,
        name: "NexaSystems",
        description:
            "Pioneering autonomous cloud infrastructure for Fortune 500 companies.",
        industry: "Cloud Tech",
        location: "Remote",
        jobs: 16,
        verified: true,
    },
    {
        id: 2,
        name: "FinEdge Global",
        description:
            "Building intelligent financial solutions with AI-powered banking.",
        industry: "FinTech",
        location: "London",
        jobs: 8,
        verified: true,
    },
    {
        id: 3,
        name: "BioGen Research",
        description:
            "Leading biotechnology and software engineering innovations.",
        industry: "Health Tech",
        location: "Boston",
        jobs: 22,
        verified: true,
    },
    {
        id: 4,
        name: "CreativeX Studio",
        description:
            "Award-winning design agency creating next-generation digital products.",
        industry: "Design",
        location: "Berlin",
        jobs: 5,
        verified: true,
    },
    {
        id: 5,
        name: "Volt Energy",
        description:
            "Renewable energy technology company driving sustainable innovation.",
        industry: "GreenTech",
        location: "San Jose",
        jobs: 31,
        verified: true,
    },
    {
        id: 6,
        name: "Aura AI",
        description:
            "Building AI solutions for healthcare, finance, and automation.",
        industry: "AI & ML",
        location: "Remote",
        jobs: 11,
        verified: true,
    },
];

export default function CompaniesPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white p-6">

            {/* Header */}

            <div className="mb-8">
                <h1 className="text-4xl font-bold">Browse Companies</h1>

                <p className="text-gray-400 mt-2 max-w-3xl">
                    Discover leading companies across different industries and
                    find your next career opportunity.
                </p>
            </div>

            {/* Search */}

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 mb-8">

                <div className="flex flex-col md:flex-row gap-4">

                    <div className="relative flex-1">

                        <Search
                            className="absolute left-4 top-3.5 text-gray-500"
                            size={18}
                        />

                        <input
                            type="text"
                            placeholder="Search by company, industry or location..."
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-3 pl-11 pr-4 outline-none"
                        />

                    </div>

                    <button className="bg-white text-black px-8 rounded-lg font-semibold hover:bg-gray-200">
                        Find Companies
                    </button>

                </div>

            </div>

            {/* Company Cards */}

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                {companies.map((company) => (
                    <div
                        key={company.id}
                        className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition"
                    >

                        {/* Top */}

                        <div className="flex justify-between items-start mb-5">

                            <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center">
                                <Building2 size={24} />
                            </div>

                            {company.verified && (
                                <div className="flex items-center gap-1 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
                                    <BadgeCheck size={14} />
                                    Verified
                                </div>
                            )}

                        </div>

                        {/* Info */}

                        <h2 className="text-xl font-semibold">
                            {company.name}
                        </h2>

                        <p className="text-gray-400 text-sm mt-3 line-clamp-3">
                            {company.description}
                        </p>

                        {/* Tags */}

                        <div className="flex flex-wrap gap-2 mt-5">

                            <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                                {company.industry}
                            </span>

                            <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full text-sm">
                                <MapPin size={14} />
                                {company.location}
                            </span>

                        </div>

                        {/* Footer */}

                        <div className="flex justify-between items-center mt-8 pt-5 border-t border-zinc-800">

                            <div>
                                <p className="text-2xl font-bold">
                                    {company.jobs}
                                </p>

                                <p className="text-xs text-gray-500">
                                    Active Jobs
                                </p>
                            </div>

                            <button className="flex items-center gap-2 text-white hover:text-gray-300 font-medium">
                                View Openings
                                <ArrowRight size={16} />
                            </button>

                        </div>

                    </div>
                ))}

            </div>

            {/* Pagination */}

            <div className="flex justify-center items-center gap-2 mt-10">

                <button className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800">
                    <ChevronLeft size={18} />
                </button>

                <button className="w-10 h-10 rounded-lg bg-white text-black font-semibold">
                    1
                </button>

                <button className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800">
                    2
                </button>

                <button className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800">
                    3
                </button>

                <span className="px-2 text-gray-500">...</span>

                <button className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800">
                    12
                </button>

                <button className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800">
                    <ChevronRight size={18} />
                </button>

            </div>

        </div>
    );
}

