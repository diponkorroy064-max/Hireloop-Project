"use client";
import { Bookmark, FileText, CalendarCheck, Briefcase, User, Clock3 } from "lucide-react";

const stats = [
    {
        title: "Saved Jobs",
        value: 12,
        icon: Bookmark,
        color: "text-blue-500 dark:text-blue-400",
    },
    {
        title: "Applications Submitted",
        value: 24,
        icon: FileText,
        color: "text-green-500 dark:text-green-400",
    },
    {
        title: "Interviews Scheduled",
        value: 3,
        icon: CalendarCheck,
        color: "text-amber-500 dark:text-yellow-400",
    },
    {
        title: "Offers Received",
        value: 1,
        icon: Briefcase,
        color: "text-emerald-500 dark:text-emerald-400",
    },
];

const activities = [
    {
        icon: FileText,
        text: "Application for Senior Product Designer at TechFlow updated to",
        highlight: "Under Review",
        time: "2 hours ago",
    },
    {
        icon: Briefcase,
        text: "New Job Alert: Lead Frontend Engineer at FinGrid matches your profile.",
        highlight: "",
        time: "5 hours ago",
    },
    {
        icon: User,
        text: "You have a new message from Sarah Jenkins (Hiring Manager at CloudLab).",
        highlight: "",
        time: "1 day ago",
    },
];

const status = [
    {
        label: "Applied",
        value: 10,
        width: "75%",
        color: "bg-gray-400 dark:bg-gray-300",
    },
    {
        label: "Under Review",
        value: 6,
        width: "55%",
        color: "bg-amber-500 dark:bg-yellow-500",
    },
    {
        label: "Shortlisted",
        value: 5,
        width: "45%",
        color: "bg-blue-500 dark:bg-blue-500",
    },
    {
        label: "Rejected",
        value: 2,
        width: "20%",
        color: "bg-red-500 dark:bg-red-500",
    },
    {
        label: "Hired",
        value: 1,
        width: "12%",
        color: "bg-green-500 dark:bg-green-500",
    },
];


export default function SeekerDashboard() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-white p-6 transition-colors duration-300">

            {/* Header */}
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className="text-3xl font-bold">Seeker Dashboard</h1>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                        Overview of job applications, interviews and recent activity.
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                {stats.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                                    {item.title}
                                </p>

                                <Icon className={item.color} size={18} />
                            </div>

                            <h2 className="text-3xl font-bold">{item.value}</h2>
                        </div>
                    );
                })}
            </div>

            {/* Profile + Status */}
            <div className="grid lg:grid-cols-2 gap-6 mb-10">

                {/* Profile */}
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-200">
                            <User size={28} />
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">Alex Rivera</h2>
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                                alex.rivera@example.com
                            </p>
                        </div>
                    </div>

                    <button className="w-full mt-8 border border-zinc-300 dark:border-zinc-700 rounded-lg py-3 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                        View Profile
                    </button>
                </div>

                {/* Application Status */}
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm">
                    <h2 className="font-semibold mb-6">Application Status</h2>

                    <div className="space-y-5">
                        {status.map((item) => (
                            <div key={item.label}>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-zinc-700 dark:text-zinc-300">{item.label}</span>
                                    <span className="text-zinc-500 dark:text-zinc-400">{item.value}</span>
                                </div>

                                <div className="h-2 rounded-full bg-zinc-100 dark:bg-zinc-800">
                                    <div
                                        className={`h-2 rounded-full ${item.color}`}
                                        style={{ width: item.width }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Activity */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm">
                <div className="flex justify-between items-center p-6 border-b border-zinc-200 dark:border-zinc-800">
                    <h2 className="text-xl font-semibold">Recent Activity</h2>

                    <button className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-sm font-medium transition-colors">
                        View All Activity
                    </button>
                </div>

                <div className="p-5 space-y-4">
                    {activities.map((activity, index) => {
                        const Icon = activity.icon;

                        return (
                            <div
                                key={index}
                                className="flex flex-col sm:flex-row sm:items-center justify-between bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 gap-3 sm:gap-0"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 shrink-0 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                                        <Icon size={18} />
                                    </div>

                                    <div>
                                        <p className="text-sm text-zinc-800 dark:text-zinc-200">
                                            {activity.text}
                                            {activity.highlight && (
                                                <span className="text-amber-600 dark:text-yellow-400 font-medium">
                                                    {" "}
                                                    {activity.highlight}
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm shrink-0">
                                    <Clock3 size={15} />
                                    {activity.time}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
