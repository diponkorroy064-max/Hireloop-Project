"use client";

import React, { useState } from "react";
import {
    DollarSign,
    Wallet,
    Users,
    Crown,
    Filter,
    Download,
    TrendingUp,
    Search,
    ChevronRight,
} from "lucide-react";

const stats = [
    {
        title: "Total Revenue",
        value: "$1,284,500",
        change: "+12.4%",
        icon: DollarSign,
        color: "text-emerald-600 dark:text-emerald-400",
        bg: "bg-emerald-50 dark:bg-emerald-950/50 border-emerald-100 dark:border-emerald-900/60",
    },
    {
        title: "Monthly Revenue",
        value: "$94,210",
        change: "+8.7%",
        icon: Wallet,
        color: "text-emerald-600 dark:text-emerald-400",
        bg: "bg-blue-50 dark:bg-blue-950/50 border-blue-100 dark:border-blue-900/60",
    },
    {
        title: "Active Pro Users",
        value: "12,408",
        change: "+2.3%",
        icon: Users,
        color: "text-amber-600 dark:text-amber-400",
        bg: "bg-amber-50 dark:bg-amber-950/50 border-amber-100 dark:border-amber-900/60",
    },
    {
        title: "Active Enterprise Users",
        value: "842",
        change: "+5.7%",
        icon: Crown,
        color: "text-emerald-600 dark:text-emerald-400",
        bg: "bg-purple-50 dark:bg-purple-950/50 border-purple-100 dark:border-purple-900/60",
    },
];

const transactions = [
    {
        email: "jordan.daniels@enterprise.com",
        plan: "Enterprise",
        amount: "$4,500.00",
        date: "May 18, 2024",
        transaction: "TRX-38342343",
        status: "Success",
    },
    {
        email: "sarah@techflow.io",
        plan: "Pro",
        amount: "$299.00",
        date: "May 18, 2024",
        transaction: "TRX-77462876",
        status: "Success",
    },
    {
        email: "marcus.lee@gmail.com",
        plan: "Starter",
        amount: "$49.00",
        date: "May 17, 2024",
        transaction: "TRX-13278467",
        status: "Pending",
    },
    {
        email: "alex@globalventures.com",
        plan: "Enterprise",
        amount: "$12,000.00",
        date: "May 10, 2024",
        transaction: "TRX-94834712",
        status: "Failed",
    },
];

export default function AdminPaymentsPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0d0d0f] text-slate-900 dark:text-neutral-100 transition-colors duration-300 p-6 md:p-8">
            <div className="max-w-7xl mx-auto space-y-6">

                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm dark:shadow-none transition-colors">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Payments & Subscriptions
                        </h1>
                        <p className="text-sm text-slate-500 dark:text-neutral-400 mt-1 font-medium">
                            Comprehensive overview of platform revenue and active subscriptions.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-700 dark:text-neutral-200 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors">
                            <Filter size={16} />
                            Filter
                        </button>
                        <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black px-4 py-2.5 rounded-xl font-semibold text-xs tracking-wide transition-all shadow-sm">
                            <Download size={16} />
                            Export CSV
                        </button>
                    </div>
                </div>

                {/* Metric Cards */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm dark:shadow-none transition-colors"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${item.bg}`}>
                                        <Icon size={18} className="text-slate-700 dark:text-neutral-200" />
                                    </div>

                                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 ${item.color}`}>
                                        {item.change}
                                    </span>
                                </div>

                                <p className="text-slate-500 dark:text-neutral-400 text-xs font-medium">
                                    {item.title}
                                </p>

                                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
                                    {item.value}
                                </h2>
                            </div>
                        );
                    })}
                </div>

                {/* Transactions Table Section */}
                <div className="border border-slate-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900/40 shadow-sm dark:shadow-none transition-colors">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 p-5 border-b border-slate-200 dark:border-zinc-800">
                        <div>
                            <h2 className="font-bold text-base text-slate-900 dark:text-white">
                                Recent Transactions
                            </h2>
                            <p className="text-xs text-slate-500 dark:text-neutral-400 mt-0.5">
                                Real-time transaction logs and billing statuses.
                            </p>
                        </div>

                        <div className="relative min-w-55">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Search by email or TRX ID..."
                                className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-zinc-700 transition-all text-slate-800 dark:text-neutral-200"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead className="bg-slate-50/80 dark:bg-zinc-800/50 text-slate-500 dark:text-neutral-400 font-semibold border-b border-slate-200 dark:border-zinc-800">
                                <tr>
                                    <th className="px-6 py-4">User Email</th>
                                    <th className="px-6 py-4">Plan</th>
                                    <th className="px-6 py-4">Amount</th>
                                    <th className="px-6 py-4">Date</th>
                                    <th className="px-6 py-4">Transaction ID</th>
                                    <th className="px-6 py-4">Status</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/60">
                                {transactions.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-slate-50/60 dark:hover:bg-zinc-800/30 transition-colors"
                                    >
                                        <td className="px-6 py-4 font-semibold text-slate-900 dark:text-neutral-100">
                                            {item.email}
                                        </td>

                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-neutral-300 border border-slate-200 dark:border-zinc-700 rounded-full font-medium">
                                                {item.plan}
                                            </span>
                                        </td>

                                        <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">
                                            {item.amount}
                                        </td>

                                        <td className="px-6 py-4 text-slate-500 dark:text-neutral-400 whitespace-nowrap">
                                            {item.date}
                                        </td>

                                        <td className="px-6 py-4 font-mono text-slate-500 dark:text-neutral-400">
                                            {item.transaction}
                                        </td>

                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${item.status === "Success"
                                                        ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/60"
                                                        : item.status === "Pending"
                                                            ? "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/60"
                                                            : "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/60"
                                                    }`}
                                            >
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-6 py-4 border-t border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/20 text-xs">
                        <p className="text-slate-500 dark:text-neutral-400 font-medium">
                            Showing <span className="font-semibold text-slate-800 dark:text-neutral-200">1–4</span> of <span className="font-semibold text-slate-800 dark:text-neutral-200">2,410</span> transactions
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
                        </div>
                    </div>
                </div>

                {/* Bottom Charts & Analytics Section */}
                <div className="grid lg:grid-cols-3 gap-6">

                    {/* Revenue Chart Box */}
                    <div className="lg:col-span-2 bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm dark:shadow-none transition-colors">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h2 className="font-bold text-base text-slate-900 dark:text-white">
                                    Revenue Trend (Last 7 Days)
                                </h2>
                                <p className="text-xs text-slate-500 dark:text-neutral-400 mt-0.5">
                                    Daily financial accumulation pattern
                                </p>
                            </div>

                            <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900/60 text-emerald-600 dark:text-emerald-400">
                                <TrendingUp size={18} />
                            </div>
                        </div>

                        <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-zinc-800 rounded-xl bg-slate-50/50 dark:bg-zinc-950/30 text-slate-400 dark:text-neutral-500 text-xs font-medium">
                            <span>Revenue Chart Placeholder</span>
                            <span className="text-[11px] text-slate-400 dark:text-zinc-600 mt-1">Integrate Recharts, Chart.js, or Tremor here</span>
                        </div>
                    </div>

                    {/* Plan Distribution Box */}
                    <div className="bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm dark:shadow-none transition-colors flex flex-col justify-between">
                        <div>
                            <h2 className="font-bold text-base text-slate-900 dark:text-white mb-1">
                                Plan Distribution
                            </h2>
                            <p className="text-xs text-slate-500 dark:text-neutral-400 mb-6">
                                Active user share per subscription tier
                            </p>

                            <div className="space-y-5">
                                {[
                                    { name: "Enterprise", value: 35, color: "bg-indigo-600 dark:bg-indigo-500" },
                                    { name: "Professional", value: 52, color: "bg-emerald-600 dark:bg-emerald-500" },
                                    { name: "Starter", value: 13, color: "bg-amber-500" },
                                ].map((plan) => (
                                    <div key={plan.name}>
                                        <div className="flex justify-between text-xs font-semibold mb-2">
                                            <span className="text-slate-700 dark:text-neutral-300">{plan.name}</span>
                                            <span className="text-slate-900 dark:text-white">{plan.value}%</span>
                                        </div>

                                        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-zinc-800 overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${plan.color}`}
                                                style={{ width: `${plan.value}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="w-full mt-6 inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-800 dark:text-neutral-200 font-semibold rounded-xl py-3 text-xs transition-colors">
                            <span>View Detailed Report</span>
                            <ChevronRight size={14} />
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}

