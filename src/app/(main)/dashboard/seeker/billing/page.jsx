"use client";

import {
    BadgeCheck,
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
        <div className="min-h-screen bg-zinc-950 text-white p-6">

            {/* Header */}

            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    Subscription & Billing
                </h1>

                <p className="text-gray-400 mt-2">
                    Manage your subscription, payment methods, and billing history.
                </p>
            </div>

            {/* Top Section */}

            <div className="grid lg:grid-cols-3 gap-6 mb-8">

                {/* Current Plan */}

                <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl p-6">

                    <div className="flex justify-between items-start mb-6">

                        <div>
                            <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs">
                                CURRENT PLAN
                            </span>

                            <h2 className="text-2xl font-bold mt-4">
                                Professional Tier
                            </h2>

                            <p className="text-gray-400 mt-2">
                                Unlock premium job insights and unlimited applications.
                            </p>
                        </div>

                        <div className="text-right">
                            <h2 className="text-4xl font-bold">
                                $29
                                <span className="text-lg text-gray-400">/mo</span>
                            </h2>

                            <p className="text-gray-500 text-sm">
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
                                <CheckCircle2
                                    className="text-green-500"
                                    size={18}
                                />
                                <span>{item}</span>
                            </div>
                        ))}

                    </div>

                    <div className="flex gap-4">

                        <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200">
                            Upgrade Plan
                        </button>

                        <button className="px-6 py-3 bg-zinc-800 rounded-lg hover:bg-zinc-700">
                            Manage Plan
                        </button>

                    </div>

                </div>

                {/* Payment Method */}

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

                    <div className="flex justify-between mb-6">
                        <h2 className="font-semibold">
                            Payment Method
                        </h2>

                        <CreditCard className="text-gray-400" />
                    </div>

                    <div className="bg-zinc-800 rounded-xl p-5">

                        <div className="flex justify-between mb-6">

                            <div className="flex gap-2">
                                <div className="w-6 h-4 rounded bg-yellow-500"></div>
                                <div className="w-6 h-4 rounded bg-gray-500"></div>
                            </div>

                            <span className="text-sm">VISA</span>

                        </div>

                        <h2 className="tracking-widest text-xl mb-5">
                            •••• •••• •••• 4242
                        </h2>

                        <div className="flex justify-between text-sm text-gray-400">

                            <div>
                                <p>Card Holder</p>
                                <p className="text-white">
                                    Alex Rivera
                                </p>
                            </div>

                            <div>
                                <p>Expires</p>
                                <p className="text-white">
                                    09/26
                                </p>
                            </div>

                        </div>

                    </div>

                    <button className="w-full mt-5 border border-dashed border-zinc-700 rounded-lg py-3 hover:bg-zinc-800 flex justify-center items-center gap-2">
                        <Plus size={18} />
                        Add New Payment Method
                    </button>

                </div>

            </div>

            {/* Billing History */}

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden mb-8">

                <div className="flex justify-between items-center p-5 border-b border-zinc-800">

                    <h2 className="text-xl font-semibold">
                        Billing History
                    </h2>

                    <button className="flex items-center gap-2 text-gray-400 hover:text-white">
                        <Download size={16} />
                        Export PDF
                    </button>

                </div>

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-zinc-950 text-gray-400 text-sm">

                            <tr>
                                <th className="text-left px-6 py-4">Date</th>
                                <th className="text-left px-6 py-4">Plan</th>
                                <th className="text-left px-6 py-4">Amount</th>
                                <th className="text-left px-6 py-4">Transaction ID</th>
                                <th className="text-left px-6 py-4">Status</th>
                            </tr>

                        </thead>

                        <tbody>

                            {billingHistory.map((bill, index) => (
                                <tr
                                    key={index}
                                    className="border-t border-zinc-800 hover:bg-zinc-800/40"
                                >
                                    <td className="px-6 py-5">{bill.date}</td>

                                    <td className="px-6 py-5">{bill.plan}</td>

                                    <td className="px-6 py-5 font-semibold">
                                        {bill.amount}
                                    </td>

                                    <td className="px-6 py-5 text-gray-400">
                                        {bill.transaction}
                                    </td>

                                    <td className="px-6 py-5">

                                        <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-xs">
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

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-6">

                <div>
                    <h2 className="text-xl font-semibold mb-2">
                        Need help with your invoice?
                    </h2>

                    <p className="text-gray-400">
                        Our support team is available 24/7 to help with billing
                        questions or payment issues.
                    </p>
                </div>

                <div className="flex gap-4">

                    <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
                        <LifeBuoy size={18} />
                        Contact Support
                    </button>

                    <button className="bg-zinc-800 px-6 py-3 rounded-lg hover:bg-zinc-700">
                        Read Billing Policy
                    </button>

                </div>

            </div>

        </div>
    );
}

