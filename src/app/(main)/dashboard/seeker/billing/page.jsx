"use client";

import {
    CreditCard,
    CheckCircle2,
    Download,
    Plus,
    LifeBuoy,
} from "lucide-react";

const billingHistory = [
    {
        date: "Sep 24, 2023",
        plan: "Professional Tier",
        amount: "$29.00",
        transaction: "TRX-445234",
        status: "Paid",
    },
    {
        date: "Aug 24, 2023",
        plan: "Professional Tier",
        amount: "$29.00",
        transaction: "TRX-174294",
        status: "Paid",
    },
    {
        date: "Jul 24, 2023",
        plan: "Professional Tier",
        amount: "$29.00",
        transaction: "TRX-145992",
        status: "Paid",
    },
    {
        date: "Jun 24, 2023",
        plan: "Starter Plan",
        amount: "$12.00",
        transaction: "TRX-136005",
        status: "Paid",
    },
];

export default function BillingPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white p-6 transition-colors duration-200">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Subscription & Billing</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Manage your subscription, payment methods, and billing history.
                </p>
            </div>

            {/* Top Section */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
                {/* Current Plan */}
                <div className="lg:col-span-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm dark:shadow-none">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <span className="bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                                CURRENT PLAN
                            </span>
                            <h2 className="text-2xl font-bold mt-4">Professional Tier</h2>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                Unlock premium job insights and unlimited applications.
                            </p>
                        </div>

                        <div className="text-right">
                            <h2 className="text-4xl font-bold">
                                $29
                                <span className="text-lg text-gray-500 dark:text-gray-400">
                                    /mo
                                </span>
                            </h2>
                            <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                                Next billing on April 15, 2026
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {[
                            "Unlimited Applications",
                            "Priority Candidate Badge",
                            "Premium Job Insights",
                            "Direct Recruiter Messaging",
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <CheckCircle2 className="text-emerald-500" size={18} />
                                <span className="text-gray-700 dark:text-gray-200 font-medium">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <button className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:bg-zinc-800 dark:hover:bg-gray-200 transition-colors">
                            Upgrade Plan
                        </button>
                        <button className="px-6 py-3 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors">
                            Manage Plan
                        </button>
                    </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm dark:shadow-none">
                    <div className="flex justify-between mb-6">
                        <h2 className="font-semibold text-gray-900 dark:text-white">
                            Payment Method
                        </h2>
                        <CreditCard className="text-gray-400 dark:text-gray-400" />
                    </div>

                    <div className="bg-gray-900 dark:bg-zinc-800 text-white rounded-xl p-5 shadow-inner">
                        <div className="flex justify-between mb-6">
                            <div className="flex gap-2">
                                <div className="w-6 h-4 rounded bg-amber-500"></div>
                                <div className="w-6 h-4 rounded bg-gray-400"></div>
                            </div>
                            <span className="text-sm font-semibold tracking-wider">VISA</span>
                        </div>

                        <h2 className="tracking-widest text-xl mb-5 font-mono">
                            •••• •••• •••• 4242
                        </h2>

                        <div className="flex justify-between text-sm text-gray-300 dark:text-gray-400">
                            <div>
                                <p className="text-xs text-gray-400">Card Holder</p>
                                <p className="text-white font-medium">Alex Rivera</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">Expires</p>
                                <p className="text-white font-medium">09/26</p>
                            </div>
                        </div>
                    </div>

                    <button className="w-full mt-5 border border-dashed border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-200 rounded-lg py-3 hover:bg-gray-50 dark:hover:bg-zinc-800 flex justify-center items-center gap-2 transition-colors">
                        <Plus size={18} />
                        Add New Payment Method
                    </button>
                </div>
            </div>

            {/* Billing History */}
            <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden mb-8 shadow-sm dark:shadow-none">
                <div className="flex justify-between items-center p-5 border-b border-gray-200 dark:border-zinc-800">
                    <h2 className="text-xl font-semibold">Billing History</h2>
                    <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium">
                        <Download size={16} />
                        Export PDF
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-zinc-950 text-gray-500 dark:text-gray-400 text-sm">
                            <tr>
                                <th className="text-left px-6 py-4 font-medium">Date</th>
                                <th className="text-left px-6 py-4 font-medium">Plan</th>
                                <th className="text-left px-6 py-4 font-medium">Amount</th>
                                <th className="text-left px-6 py-4 font-medium">
                                    Transaction ID
                                </th>
                                <th className="text-left px-6 py-4 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-zinc-800">
                            {billingHistory.map((bill, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-gray-50/80 dark:hover:bg-zinc-800/40 transition-colors"
                                >
                                    <td className="px-6 py-5 text-gray-700 dark:text-gray-300">
                                        {bill.date}
                                    </td>
                                    <td className="px-6 py-5 text-gray-900 dark:text-white font-medium">
                                        {bill.plan}
                                    </td>
                                    <td className="px-6 py-5 font-semibold text-gray-900 dark:text-white">
                                        {bill.amount}
                                    </td>
                                    <td className="px-6 py-5 text-gray-500 dark:text-gray-400 font-mono text-sm">
                                        {bill.transaction}
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 px-3 py-1 rounded-full text-xs font-medium">
                                            {bill.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Support */}
            <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm dark:shadow-none">
                <div>
                    <h2 className="text-xl font-semibold mb-2">Need help with your invoice?</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Our support team is available 24/7 to help with billing questions or payment issues.
                    </p>
                </div>

                <div className="flex gap-4 w-full md:w-auto">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-semibold hover:bg-zinc-800 dark:hover:bg-gray-200 transition-colors">
                        <LifeBuoy size={18} />
                        Contact Support
                    </button>
                    <button className="flex-1 md:flex-none bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors">
                        Read Billing Policy
                    </button>
                </div>
            </div>
        </div>
    );
}
