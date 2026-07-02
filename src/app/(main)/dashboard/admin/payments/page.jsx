"use client";

import {
    DollarSign,
    Wallet,
    Users,
    Crown,
    Filter,
    Download,
    TrendingUp,
} from "lucide-react";

const stats = [
    {
        title: "Total Revenue",
        value: "$1,284,500",
        change: "+12.4%",
        icon: DollarSign,
        color: "text-green-500",
    },
    {
        title: "Monthly Revenue",
        value: "$94,210",
        change: "+8.7%",
        icon: Wallet,
        color: "text-green-500",
    },
    {
        title: "Active Pro Users",
        value: "12,408",
        change: "+2.3%",
        icon: Users,
        color: "text-yellow-500",
    },
    {
        title: "Active Enterprise Users",
        value: "842",
        change: "+5.7%",
        icon: Crown,
        color: "text-green-500",
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
        <div className="min-h-screen bg-zinc-950 text-white p-6">

            {/* Header */}

            <div className="flex justify-between items-center mb-8">

                <div>
                    <h1 className="text-3xl font-bold">
                        Payments & Subscriptions
                    </h1>

                    <p className="text-gray-400 mt-1">
                        Comprehensive overview of platform revenue and active subscriptions.
                    </p>
                </div>

            </div>

            {/* Stats */}

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

                {stats.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                                    <Icon size={18} />
                                </div>

                                <span className={`text-sm ${item.color}`}>
                                    {item.change}
                                </span>
                            </div>

                            <p className="text-gray-400 text-sm">
                                {item.title}
                            </p>

                            <h2 className="text-3xl font-bold mt-1">
                                {item.value}
                            </h2>
                        </div>
                    );
                })}

            </div>

            {/* Transactions */}

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden mb-8">

                <div className="flex justify-between items-center p-5 border-b border-zinc-800">

                    <h2 className="font-semibold text-lg">
                        Recent Transactions
                    </h2>

                    <div className="flex gap-3">

                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-sm">
                            <Filter size={16} />
                            Filter
                        </button>

                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200 text-sm font-medium">
                            <Download size={16} />
                            Export CSV
                        </button>

                    </div>
                </div>

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-zinc-950 text-gray-400 text-sm">
                            <tr>
                                <th className="text-left px-6 py-4">User Email</th>
                                <th className="text-left px-6 py-4">Plan</th>
                                <th className="text-left px-6 py-4">Amount</th>
                                <th className="text-left px-6 py-4">Date</th>
                                <th className="text-left px-6 py-4">Transaction ID</th>
                                <th className="text-left px-6 py-4">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {transactions.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-t border-zinc-800 hover:bg-zinc-800/40"
                                >
                                    <td className="px-6 py-5">{item.email}</td>

                                    <td className="px-6 py-5">
                                        <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs">
                                            {item.plan}
                                        </span>
                                    </td>

                                    <td className="px-6 py-5 font-semibold">
                                        {item.amount}
                                    </td>

                                    <td className="px-6 py-5">{item.date}</td>

                                    <td className="px-6 py-5 text-gray-400">
                                        {item.transaction}
                                    </td>

                                    <td className="px-6 py-5">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${item.status === "Success"
                                                    ? "bg-green-900/30 text-green-400"
                                                    : item.status === "Pending"
                                                        ? "bg-yellow-900/30 text-yellow-400"
                                                        : "bg-red-900/30 text-red-400"
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

                <div className="flex justify-between items-center px-6 py-4 border-t border-zinc-800">

                    <p className="text-sm text-gray-400">
                        Showing 1–4 of 2,410 transactions
                    </p>

                    <div className="flex gap-2">
                        <button className="w-8 h-8 rounded bg-white text-black">1</button>
                        <button className="w-8 h-8 rounded bg-zinc-800">2</button>
                        <button className="w-8 h-8 rounded bg-zinc-800">3</button>
                    </div>

                </div>

            </div>

            {/* Bottom Section */}

            <div className="grid lg:grid-cols-3 gap-6">

                {/* Revenue Chart */}

                <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl p-6">

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="font-semibold">
                            Revenue Trend (Last 7 Days)
                        </h2>

                        <TrendingUp size={18} className="text-green-400" />
                    </div>

                    <div className="h-64 flex items-center justify-center text-gray-500">
                        Revenue Chart Placeholder
                    </div>

                </div>

                {/* Plan Distribution */}

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

                    <h2 className="font-semibold mb-6">
                        Plan Distribution
                    </h2>

                    {[
                        { name: "Enterprise", value: 35 },
                        { name: "Professional", value: 52 },
                        { name: "Starter", value: 13 },
                    ].map((plan) => (
                        <div key={plan.name} className="mb-6">

                            <div className="flex justify-between text-sm mb-2">
                                <span>{plan.name}</span>
                                <span>{plan.value}%</span>
                            </div>

                            <div className="w-full h-2 rounded-full bg-zinc-800">
                                <div
                                    className="h-2 rounded-full bg-white"
                                    style={{ width: `${plan.value}%` }}
                                />
                            </div>

                        </div>
                    ))}

                    <button className="w-full mt-4 bg-zinc-800 hover:bg-zinc-700 rounded-lg py-3">
                        View Detailed Report
                    </button>

                </div>

            </div>

        </div>
    );
}

