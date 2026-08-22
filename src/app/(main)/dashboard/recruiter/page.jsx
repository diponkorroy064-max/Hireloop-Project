"use client";
import React from "react";
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
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-white p-5 transition-colors duration-200">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Welcome back, Alex Sterling
                </h1>
                <p className="text-slate-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
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
                            className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm dark:shadow-none transition-colors"
                        >
                            <div className="w-11 h-11 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-white flex items-center justify-center mb-5">
                                <Icon size={20} />
                            </div>

                            <p className="text-slate-500 dark:text-gray-400 text-sm font-medium">
                                {item.title}
                            </p>

                            <h2 className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">
                                {item.value}
                            </h2>
                        </div>
                    );
                })}
            </div>

            {/* Main Section */}
            <div className="grid lg:grid-cols-3 gap-4">

                {/* Recent Applications */}
                <div className="lg:col-span-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl shadow-sm dark:shadow-none overflow-hidden transition-colors">

                    <div className="flex justify-between items-center p-6 border-b border-slate-200 dark:border-zinc-800">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                            Recent Applications
                        </h2>

                        <button className="text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors">
                            View All
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-50 dark:bg-zinc-950 text-slate-500 dark:text-gray-400 text-xs uppercase tracking-wider font-semibold border-b border-slate-200 dark:border-zinc-800">
                                <tr>
                                    <th className="px-6 py-4">Candidate</th>
                                    {/* <th className="px-6 py-4">Role</th> */}
                                    <th className="px-6 py-4">Applied</th>
                                    <th className="px-6 py-4">Experience</th>
                                    <th className="px-6 py-4">Status</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-200 dark:divide-zinc-800 text-sm text-slate-700 dark:text-slate-200">
                                {applications.map((app) => (
                                    <tr
                                        key={app.name}
                                        className="hover:bg-slate-50/80 dark:hover:bg-zinc-800/40 transition-colors">
                                        <td className="px-6 py-4 flex items-center gap-3 whitespace-nowrap font-medium text-slate-900 dark:text-white">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-zinc-700 shrink-0" />
                                            <div>
                                                <p>{app.name}</p>
                                                <p> {app.role}</p>
                                            </div>
                                        </td>

                                        {/* <td className="px-6 py-4 whitespace-nowrap text-slate-600 dark:text-gray-300">
                                           
                                        </td> */}

                                        <td className="px-6 py-4 whitespace-nowrap text-slate-500 dark:text-gray-400">
                                            {app.date}
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-slate-500 dark:text-gray-400">
                                            {app.experience}
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${app.status === "Interview"
                                                    ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60"
                                                    : app.status === "New"
                                                        ? "bg-slate-100 text-slate-800 dark:bg-zinc-800 dark:text-gray-300 border border-slate-200 dark:border-zinc-700"
                                                        : app.status === "Reviewing"
                                                            ? "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60"
                                                            : "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-400 border border-rose-200 dark:border-rose-800/60"
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
                <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl shadow-sm dark:shadow-none transition-colors">

                    <div className="flex justify-between items-center p-6 border-b border-slate-200 dark:border-zinc-800">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                            My Top Companies
                        </h2>

                        <button className="text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors">
                            View All
                        </button>
                    </div>

                    <div className="p-5 space-y-4">
                        {companies.map((company) => (
                            <div
                                key={company.name}
                                className="flex justify-between items-center p-4 rounded-lg border border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-800/40 transition-colors"
                            >
                                <div className="flex gap-3 items-center">
                                    <div className="w-11 h-11 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-gray-300 flex items-center justify-center shrink-0">
                                        <Building2 size={18} />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-slate-900 dark:text-white">
                                            {company.name}
                                        </h3>
                                        <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">
                                            {company.industry}
                                        </p>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="text-xl font-bold text-slate-900 dark:text-white">
                                        {company.jobs}
                                    </p>
                                    <p className="text-xs text-slate-500 dark:text-gray-400">
                                        Active Jobs
                                    </p>
                                </div>
                            </div>
                        ))}

                        <button className="w-full mt-2 py-3 rounded-lg border border-slate-300 dark:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-800 dark:text-white font-medium text-sm transition-colors">
                            View All Companies
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}
