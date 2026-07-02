"use client";

import {
    Bookmark,
    FileText,
    CalendarCheck,
    Briefcase,
    User,
    ArrowRight,
    Clock3,
} from "lucide-react";

const stats = [
    {
        title: "Saved Jobs",
        value: 12,
        icon: Bookmark,
        color: "text-blue-400",
    },
    {
        title: "Applications Submitted",
        value: 24,
        icon: FileText,
        color: "text-green-400",
    },
    {
        title: "Interviews Scheduled",
        value: 3,
        icon: CalendarCheck,
        color: "text-yellow-400",
    },
    {
        title: "Offers Received",
        value: 1,
        icon: Briefcase,
        color: "text-emerald-400",
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
        color: "bg-gray-300",
    },
    {
        label: "Under Review",
        value: 6,
        width: "55%",
        color: "bg-yellow-500",
    },
    {
        label: "Shortlisted",
        value: 5,
        width: "45%",
        color: "bg-blue-500",
    },
    {
        label: "Rejected",
        value: 2,
        width: "20%",
        color: "bg-red-500",
    },
    {
        label: "Hired",
        value: 1,
        width: "12%",
        color: "bg-green-500",
    },
];

export default function SeekerDashboard() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white p-6">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Seeker Dashboard</h1>
                <p className="text-gray-400 mt-1">
                    Overview of job applications, interviews and recent activity.
                </p>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                {stats.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-gray-400 text-sm">{item.title}</p>

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

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

                    <div className="flex items-center gap-4">

                        <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">
                            <User size={28} />
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">
                                Alex Rivera
                            </h2>

                            <p className="text-gray-400 text-sm">
                                alex.rivera@example.com
                            </p>
                        </div>

                    </div>

                    <button className="w-full mt-8 border border-zinc-700 rounded-lg py-3 hover:bg-zinc-800">
                        View Profile
                    </button>

                </div>

                {/* Application Status */}

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

                    <h2 className="font-semibold mb-6">
                        Application Status
                    </h2>

                    <div className="space-y-5">

                        {status.map((item) => (
                            <div key={item.label}>

                                <div className="flex justify-between text-sm mb-2">
                                    <span>{item.label}</span>
                                    <span>{item.value}</span>
                                </div>

                                <div className="h-2 rounded-full bg-zinc-800">
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

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl">

                <div className="flex justify-between items-center p-6 border-b border-zinc-800">

                    <h2 className="text-xl font-semibold">
                        Recent Activity
                    </h2>

                    <button className="text-gray-400 hover:text-white text-sm">
                        View All Activity
                    </button>

                </div>

                <div className="p-5 space-y-4">

                    {activities.map((activity, index) => {
                        const Icon = activity.icon;

                        return (
                            <div
                                key={index}
                                className="flex items-center justify-between bg-zinc-950 border border-zinc-800 rounded-lg p-4"
                            >
                                <div className="flex items-center gap-4">

                                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                                        <Icon size={18} />
                                    </div>

                                    <div>

                                        <p className="text-sm">
                                            {activity.text}

                                            {activity.highlight && (
                                                <span className="text-yellow-400 font-medium">
                                                    {" "}
                                                    {activity.highlight}
                                                </span>
                                            )}
                                        </p>

                                    </div>

                                </div>

                                <div className="flex items-center gap-2 text-gray-400 text-sm">

                                    <Clock3 size={15} />

                                    {activity.time}

                                </div>
                            </div>
                        );
                    })}

                </div>

            </div>

            {/* Floating Action Button */}

            <button className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-white text-black shadow-lg hover:scale-105 transition">
                <ArrowRight className="mx-auto" />
            </button>

        </div>
    );
}
