"use client";

import { User, Globe, Bell, Settings } from "lucide-react";

export default function AdminSettingsPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white p-6">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Settings</h1>
                <p className="text-gray-400 mt-1">
                    Manage your account and platform settings.
                </p>
            </div>

            <div className="space-y-6">
                {/* Profile Settings */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-5">
                        <User size={20} />
                        <h2 className="text-xl font-semibold">Admin Profile</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                defaultValue="Admin User"
                                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                defaultValue="admin@example.com"
                                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-white"
                            />
                        </div>
                    </div>
                </div>

                {/* Site Settings */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-5">
                        <Globe size={20} />
                        <h2 className="text-xl font-semibold">Site Information</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">
                                Website Name
                            </label>
                            <input
                                type="text"
                                defaultValue="Job Portal"
                                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-2">
                                Support Email
                            </label>
                            <input
                                type="email"
                                defaultValue="support@example.com"
                                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:border-white"
                            />
                        </div>
                    </div>
                </div>

                {/* Notifications */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-5">
                        <Bell size={20} />
                        <h2 className="text-xl font-semibold">
                            Notification Settings
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <label className="flex items-center justify-between">
                            <span>Email Notifications</span>
                            <input type="checkbox" defaultChecked className="w-5 h-5" />
                        </label>

                        <label className="flex items-center justify-between">
                            <span>New User Registration Alerts</span>
                            <input type="checkbox" defaultChecked className="w-5 h-5" />
                        </label>

                        <label className="flex items-center justify-between">
                            <span>Payment Notifications</span>
                            <input type="checkbox" className="w-5 h-5" />
                        </label>
                    </div>
                </div>

                {/* Maintenance */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-5">
                        <Settings size={20} />
                        <h2 className="text-xl font-semibold">Maintenance</h2>
                    </div>

                    <label className="flex items-center justify-between">
                        <span>Enable Maintenance Mode</span>
                        <input type="checkbox" className="w-5 h-5" />
                    </label>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                    <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

