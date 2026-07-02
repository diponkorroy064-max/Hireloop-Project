"use client";

import {
    User,
    Lock,
    Bell,
    Moon,
    FileText,
    Trash2,
    Upload,
} from "lucide-react";

export default function SeekerSettingsPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white p-6">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold">Settings</h1>
                <p className="text-gray-400 mt-2">
                    Manage your account preferences and personal information.
                </p>
            </div>

            <div className="space-y-6">

                {/* Profile */}

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

                    <div className="flex items-center gap-2 mb-6">
                        <User className="text-blue-400" size={20} />
                        <h2 className="text-xl font-semibold">
                            Profile Information
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">

                        <div>
                            <label className="text-sm text-gray-400 block mb-2">
                                Full Name
                            </label>

                            <input
                                type="text"
                                defaultValue="Alex Rivera"
                                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-400 block mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                defaultValue="alex.rivera@email.com"
                                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-400 block mb-2">
                                Phone
                            </label>

                            <input
                                type="text"
                                defaultValue="+880 1712-345678"
                                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-400 block mb-2">
                                Location
                            </label>

                            <input
                                type="text"
                                defaultValue="Dhaka, Bangladesh"
                                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 outline-none"
                            />
                        </div>

                    </div>

                </div>

                {/* Password */}

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

                    <div className="flex items-center gap-2 mb-6">
                        <Lock className="text-yellow-400" size={20} />
                        <h2 className="text-xl font-semibold">
                            Change Password
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">

                        <input
                            type="password"
                            placeholder="Current Password"
                            className="bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 outline-none"
                        />

                        <input
                            type="password"
                            placeholder="New Password"
                            className="bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 outline-none"
                        />

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 outline-none"
                        />

                    </div>

                </div>

                {/* Notifications */}

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

                    <div className="flex items-center gap-2 mb-6">
                        <Bell className="text-green-400" size={20} />
                        <h2 className="text-xl font-semibold">
                            Notifications
                        </h2>
                    </div>

                    <div className="space-y-5">

                        <label className="flex justify-between items-center">
                            <span>Email Notifications</span>
                            <input type="checkbox" defaultChecked className="w-5 h-5" />
                        </label>

                        <label className="flex justify-between items-center">
                            <span>Job Recommendations</span>
                            <input type="checkbox" defaultChecked className="w-5 h-5" />
                        </label>

                        <label className="flex justify-between items-center">
                            <span>Interview Alerts</span>
                            <input type="checkbox" defaultChecked className="w-5 h-5" />
                        </label>

                        <label className="flex justify-between items-center">
                            <span>Marketing Emails</span>
                            <input type="checkbox" className="w-5 h-5" />
                        </label>

                    </div>

                </div>

                {/* Appearance */}

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

                    <div className="flex items-center gap-2 mb-6">
                        <Moon className="text-purple-400" size={20} />
                        <h2 className="text-xl font-semibold">
                            Appearance
                        </h2>
                    </div>

                    <label className="flex justify-between items-center">
                        <span>Dark Mode</span>
                        <input type="checkbox" defaultChecked className="w-5 h-5" />
                    </label>

                </div>

                {/* Resume */}

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

                    <div className="flex items-center gap-2 mb-6">
                        <FileText className="text-blue-400" size={20} />
                        <h2 className="text-xl font-semibold">
                            Resume
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between gap-5">

                        <div>
                            <p className="font-medium">
                                Resume.pdf
                            </p>

                            <p className="text-gray-400 text-sm">
                                Uploaded 5 days ago
                            </p>
                        </div>

                        <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700">
                            <Upload size={18} />
                            Upload New Resume
                        </button>

                    </div>

                </div>

                {/* Danger Zone */}

                <div className="bg-red-950/20 border border-red-900 rounded-xl p-6">

                    <div className="flex items-center gap-2 mb-5">
                        <Trash2 className="text-red-500" size={20} />
                        <h2 className="text-xl font-semibold text-red-400">
                            Danger Zone
                        </h2>
                    </div>

                    <p className="text-gray-400 mb-5">
                        Permanently delete your account and all associated data.
                    </p>

                    <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg">
                        Delete Account
                    </button>

                </div>

                {/* Save */}

                <div className="flex justify-end">
                    <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200">
                        Save Changes
                    </button>
                </div>

            </div>
        </div>
    );
}
