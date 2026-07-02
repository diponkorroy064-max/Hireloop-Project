"use client";

import {
    Briefcase,
    Users,
    Zap,
    CheckCircle2,
    Building2,
} from "lucide-react";

const stats = [
    {
        title: "Total Job Posts",
        value: 48,
        icon: Briefcase,
    },
    {
        title: "Total Applicants",
        value: "1,284",
        icon: Users,
    },
    {
        title: "Active Jobs",
        value: 18,
        icon: Zap,
    },
    {
        title: "Jobs Closed",
        value: 32,
        icon: CheckCircle2,
    },
];

const applications = [
    {
        name: "Julianne Moore",
        role: "Senior Product Designer",
        date: "Oct 24, 2023",
        experience: "6 years",
        status: "Interview",
    },
    {
        name: "Robert Downey",
        role: "Backend Engineer",
        date: "Oct 23, 2023",
        experience: "4 years",
        status: "New",
    },
    {
        name: "Emma Stone",
        role: "Marketing Lead",
        date: "Oct 22, 2023",
        experience: "8 years",
        status: "Reviewing",
    },
    {
        name: "Chris Pratt",
        role: "Product Manager",
        date: "Oct 21, 2023",
        experience: "5 years",
        status: "Rejected",
    },
];

const companies = [
    {
        name: "Google Inc.",
        industry: "Technology • Mountain View",
        jobs: 24,
    },
    {
        name: "Meta Platforms",
        industry: "Social Media • Menlo Park",
        jobs: 18,
    },
    {
        name: "Stripe",
        industry: "FinTech • San Francisco",
        jobs: 12,
    },
    {
        name: "Tesla",
        industry: "Automotive • Austin",
        jobs: 31,
    },
];

export default function RecruiterDashboard() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white p-6">

            {/* Header */}

            <div className="mb-8">
                <h1 className="text-4xl font-bold">
                    Welcome back, Alex Sterling
                </h1>

                <p className="text-gray-400 mt-2">
                    Here is an overview of your recruitment activity.
                </p>
            </div>

            {/* Stats */}

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
                {stats.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.title}
                            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
                        >
                            <div className="w-11 h-11 rounded-lg bg-zinc-800 flex items-center justify-center mb-5">
                                <Icon size={20} />
                            </div>

                            <p className="text-gray-400 text-sm">
                                {item.title}
                            </p>

                            <h2 className="text-3xl font-bold mt-2">
                                {item.value}
                            </h2>
                        </div>
                    );
                })}
            </div>

            {/* Main Section */}

            <div className="grid lg:grid-cols-3 gap-6">

                {/* Applications */}

                <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl">

                    <div className="flex justify-between items-center p-6 border-b border-zinc-800">

                        <h2 className="text-xl font-semibold">
                            Recent Applications
                        </h2>

                        <button className="text-gray-400 hover:text-white text-sm">
                            View All
                        </button>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            <thead className="bg-zinc-950 text-gray-400 text-sm">

                                <tr>
                                    <th className="text-left px-6 py-4">Candidate</th>
                                    <th className="text-left px-6 py-4">Role</th>
                                    <th className="text-left px-6 py-4">Applied</th>
                                    <th className="text-left px-6 py-4">Experience</th>
                                    <th className="text-left px-6 py-4">Status</th>
                                </tr>

                            </thead>

                            <tbody>

                                {applications.map((app) => (
                                    <tr
                                        key={app.name}
                                        className="border-t border-zinc-800 hover:bg-zinc-800/40"
                                    >
                                        <td className="px-6 py-5 flex items-center gap-3">

                                            <div className="w-10 h-10 rounded-full bg-zinc-700" />

                                            <span>{app.name}</span>

                                        </td>

                                        <td className="px-6 py-5">{app.role}</td>

                                        <td className="px-6 py-5">{app.date}</td>

                                        <td className="px-6 py-5">{app.experience}</td>

                                        <td className="px-6 py-5">

                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium
                        ${app.status === "Interview"
                                                        ? "bg-green-900/30 text-green-400"
                                                        : app.status === "New"
                                                            ? "bg-gray-700 text-gray-300"
                                                            : app.status === "Reviewing"
                                                                ? "bg-yellow-900/30 text-yellow-400"
                                                                : "bg-red-900/30 text-red-400"
                                                    }`}
                                            >
                                                {app.status}
                                            </span>

                                        </td>
                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Companies */}

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl">

                    <div className="flex justify-between items-center p-6 border-b border-zinc-800">

                        <h2 className="text-xl font-semibold">
                            My Top Companies
                        </h2>

                        <button className="text-gray-400 hover:text-white text-sm">
                            View All
                        </button>

                    </div>

                    <div className="p-5 space-y-4">

                        {companies.map((company) => (
                            <div
                                key={company.name}
                                className="flex justify-between items-center p-4 rounded-lg border border-zinc-800 hover:bg-zinc-800/40"
                            >
                                <div className="flex gap-3">

                                    <div className="w-11 h-11 rounded-lg bg-zinc-800 flex items-center justify-center">
                                        <Building2 size={18} />
                                    </div>

                                    <div>

                                        <h3 className="font-semibold">
                                            {company.name}
                                        </h3>

                                        <p className="text-xs text-gray-400">
                                            {company.industry}
                                        </p>

                                    </div>

                                </div>

                                <div className="text-right">

                                    <p className="text-xl font-bold">
                                        {company.jobs}
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        Active Jobs
                                    </p>

                                </div>

                            </div>
                        ))}

                        <button className="w-full mt-2 py-3 rounded-lg border border-zinc-700 hover:bg-zinc-800">
                            View All Companies
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
}
