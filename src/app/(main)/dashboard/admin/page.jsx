import { Users, Briefcase, FileText, CreditCard, DollarSign, TrendingUp } from "lucide-react";

const stats = [
    {
        title: "Total Users",
        value: "124,892",
        icon: Users,
        growth: "+12%",
    },
    {
        title: "Total Companies",
        value: "12,405",
        icon: Briefcase,
        growth: "+8%",
    },
    {
        title: "Total Job Posts",
        value: "4,281",
        icon: FileText,
        growth: "+5%",
    },
    {
        title: "Active Premium",
        value: "8,920",
        icon: CreditCard,
        growth: "+10%",
    },
    {
        title: "Revenue",
        value: "$245,800",
        icon: DollarSign,
        growth: "+15%",
    },
];

const transactions = [
    {
        user: "John Doe",
        plan: "Enterprise Monthly",
        id: "TRX-623488",
        amount: "$1,299",
        date: "Oct 25, 2025",
        status: "Succeeded",
    },
    {
        user: "Sarah Smith",
        plan: "Professional",
        id: "TRX-531246",
        amount: "$499",
        date: "Oct 24, 2025",
        status: "Success",
    },
    {
        user: "Michael Brown",
        plan: "Basic Monthly",
        id: "TRX-783249",
        amount: "$49",
        date: "Oct 23, 2025",
        status: "Pending",
    },
    {
        user: "Alex Wilson",
        plan: "Enterprise",
        id: "TRX-392001",
        amount: "$1,299",
        date: "Oct 22, 2025",
        status: "Failed",
    },
];

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-white p-6 transition-colors duration-300">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
                    <p className="text-slate-500 dark:text-gray-400 mt-1">
                        Real-time platform performance and growth metrics.
                    </p>
                </div>

                <div className="flex gap-3 mt-4 md:mt-0">
                    <button className="px-4 py-2 rounded-lg bg-white dark:bg-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-700 text-slate-700 dark:text-gray-200 border border-slate-200 dark:border-zinc-700/60 shadow-sm text-sm font-medium transition-colors">
                        Last 30 Days
                    </button>

                    <button className="px-4 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-slate-800 dark:hover:bg-gray-200 text-sm font-semibold shadow-sm transition-colors">
                        Export Report
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 mb-8">
                {stats.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="bg-white dark:bg-zinc-900 rounded-xl p-5 border border-slate-200 dark:border-zinc-800 shadow-sm dark:shadow-none transition-colors"
                        >
                            <div className="flex justify-between items-center mb-5">
                                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-gray-200 flex items-center justify-center">
                                    <Icon size={18} />
                                </div>

                                <span className="text-emerald-600 dark:text-green-400 text-sm font-medium bg-emerald-50 dark:bg-transparent px-2 py-0.5 rounded dark:p-0">
                                    {item.growth}
                                </span>
                            </div>

                            <p className="text-slate-500 dark:text-gray-400 text-sm font-medium">{item.title}</p>

                            <h2 className="text-3xl font-bold mt-1 text-slate-900 dark:text-white">{item.value}</h2>
                        </div>
                    );
                })}
            </div>

            {/* Charts */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
                {/* Bar Chart Placeholder */}
                <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-xl p-6 border border-slate-200 dark:border-zinc-800 shadow-sm dark:shadow-none transition-colors">
                    <div className="flex justify-between mb-6">
                        <h2 className="font-semibold text-slate-900 dark:text-white">Job Posts by Category</h2>

                        <div className="text-sm text-slate-500 dark:text-gray-400 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-slate-800 dark:bg-white"></div>
                            Active Listings
                        </div>
                    </div>

                    <div className="h-64 flex items-end justify-around">
                        {[90, 65, 50, 75, 40].map((h, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div
                                    className="w-16 rounded-t bg-slate-700 dark:bg-gray-500 transition-colors"
                                    style={{ height: `${h * 2}px` }}
                                ></div>

                                <p className="text-xs text-slate-500 dark:text-gray-400 mt-3 font-medium">
                                    {["Business", "Design", "Finance", "HR", "Marketing"][i]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Line Chart Placeholder */}
                <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-slate-200 dark:border-zinc-800 shadow-sm dark:shadow-none transition-colors">
                    <h2 className="font-semibold mb-4 text-slate-900 dark:text-white">New Users (30d)</h2>

                    <div className="relative h-64 flex items-center justify-center">
                        <svg viewBox="0 0 300 180" className="w-full h-full" fill="none">
                            <path
                                d="M20 140 C80 120 90 50 150 90 S220 160 280 40"
                                className="stroke-slate-900 dark:stroke-white transition-colors"
                                strokeWidth="3"
                            />

                            <circle cx="280" cy="40" r="5" className="fill-slate-900 dark:fill-white transition-colors" />
                        </svg>

                        <div className="absolute right-4 top-6 bg-slate-900 dark:bg-white text-white dark:text-black px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                            +2,810 Users
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl border border-slate-200 dark:border-zinc-800 shadow-sm dark:shadow-none overflow-hidden transition-colors">
                <div className="flex justify-between items-center px-6 py-5 border-b border-slate-200 dark:border-zinc-800">
                    <h2 className="font-semibold text-slate-900 dark:text-white">
                        Recent Subscription Transactions
                    </h2>

                    <button className="text-sm text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                        View All Activity
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-slate-50 dark:bg-zinc-950 text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-zinc-800">
                            <tr>
                                <th className="text-left px-6 py-4 font-semibold">User</th>
                                <th className="text-left px-6 py-4 font-semibold">Plan</th>
                                <th className="text-left px-6 py-4 font-semibold">Transaction ID</th>
                                <th className="text-left px-6 py-4 font-semibold">Amount</th>
                                <th className="text-left px-6 py-4 font-semibold">Date</th>
                                <th className="text-left px-6 py-4 font-semibold">Status</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/60">
                            {transactions.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-t border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-800/40 transition-colors"
                                >
                                    <td className="px-6 py-4 text-slate-900 dark:text-white font-medium">{item.user}</td>

                                    <td className="px-6 py-4">
                                        <span className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-transparent px-3 py-1 rounded-full text-xs font-medium">
                                            {item.plan}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-slate-500 dark:text-gray-400 font-mono text-xs">{item.id}</td>

                                    <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">
                                        {item.amount}
                                    </td>

                                    <td className="px-6 py-4 text-slate-500 dark:text-gray-400">{item.date}</td>

                                    <td
                                        className={`px-6 py-4 font-semibold ${item.status === "Success" ||
                                            item.status === "Succeeded"
                                            ? "text-emerald-600 dark:text-green-400"
                                            : item.status === "Pending"
                                                ? "text-amber-600 dark:text-yellow-400"
                                                : "text-rose-600 dark:text-red-400"
                                            }`}
                                    >
                                        {item.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-center gap-2 p-5 border-t border-slate-100 dark:border-zinc-800/60">
                    <button className="w-8 h-8 rounded bg-slate-900 dark:bg-white text-white dark:text-black font-semibold text-xs shadow-sm">1</button>
                    <button className="w-8 h-8 rounded bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-zinc-700 text-xs transition-colors">2</button>
                    <button className="w-8 h-8 rounded bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-zinc-700 text-xs transition-colors">3</button>
                    <button className="w-8 h-8 rounded bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-zinc-700 text-xs transition-colors">4</button>
                </div>
            </div>
        </div>
    );
}
