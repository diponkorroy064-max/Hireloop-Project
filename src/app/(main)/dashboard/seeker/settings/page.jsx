"use client";
import { User, Lock, Bell, Moon, FileText, Trash2, Upload} from "lucide-react";


export default function SeekerSettingsPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white p-6 transition-colors duration-200">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold">Settings</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Manage your account preferences and personal information.
                </p>
            </div>

            <div className="space-y-6">

                {/* Profile */}
                <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm dark:shadow-none">

                    <div className="flex items-center gap-2 mb-6">
                        <User className="text-blue-600 dark:text-blue-400" size={20} />
                        <h2 className="text-xl font-semibold">
                            Profile Information
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">

                        <div>
                            <label className="text-sm text-gray-600 dark:text-gray-400 block mb-2">
                                Full Name
                            </label>

                            <input
                                type="text"
                                defaultValue="Alex Rivera"
                                className="w-full bg-gray-50 dark:bg-zinc-950 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 dark:text-gray-400 block mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                defaultValue="alex.rivera@email.com"
                                className="w-full bg-gray-50 dark:bg-zinc-950 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 dark:text-gray-400 block mb-2">
                                Phone
                            </label>

                            <input
                                type="text"
                                defaultValue="+880 1712-345678"
                                className="w-full bg-gray-50 dark:bg-zinc-950 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 dark:text-gray-400 block mb-2">
                                Location
                            </label>

                            <input
                                type="text"
                                defaultValue="Dhaka, Bangladesh"
                                className="w-full bg-gray-50 dark:bg-zinc-950 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                            />
                        </div>

                    </div>

                </div>

                {/* Password */}
                <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm dark:shadow-none">

                    <div className="flex items-center gap-2 mb-6">
                        <Lock className="text-amber-600 dark:text-yellow-400" size={20} />
                        <h2 className="text-xl font-semibold">
                            Change Password
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">

                        <input
                            type="password"
                            placeholder="Current Password"
                            className="bg-gray-50 dark:bg-zinc-950 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                        />

                        <input
                            type="password"
                            placeholder="New Password"
                            className="bg-gray-50 dark:bg-zinc-950 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                        />

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="bg-gray-50 dark:bg-zinc-950 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                        />

                    </div>

                </div>

                {/* Notifications */}
                <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm dark:shadow-none">

                    <div className="flex items-center gap-2 mb-6">
                        <Bell className="text-emerald-600 dark:text-green-400" size={20} />
                        <h2 className="text-xl font-semibold">
                            Notifications
                        </h2>
                    </div>

                    <div className="space-y-5">

                        <label className="flex justify-between items-center cursor-pointer">
                            <span className="text-gray-700 dark:text-gray-200 font-medium">Email Notifications</span>
                            <input type="checkbox" defaultChecked className="w-5 h-5 accent-zinc-900 dark:accent-white" />
                        </label>

                        <label className="flex justify-between items-center cursor-pointer">
                            <span className="text-gray-700 dark:text-gray-200 font-medium">Job Recommendations</span>
                            <input type="checkbox" defaultChecked className="w-5 h-5 accent-zinc-900 dark:accent-white" />
                        </label>

                        <label className="flex justify-between items-center cursor-pointer">
                            <span className="text-gray-700 dark:text-gray-200 font-medium">Interview Alerts</span>
                            <input type="checkbox" defaultChecked className="w-5 h-5 accent-zinc-900 dark:accent-white" />
                        </label>

                        <label className="flex justify-between items-center cursor-pointer">
                            <span className="text-gray-700 dark:text-gray-200 font-medium">Marketing Emails</span>
                            <input type="checkbox" className="w-5 h-5 accent-zinc-900 dark:accent-white" />
                        </label>

                    </div>

                </div>

                {/* Appearance */}
                <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm dark:shadow-none">

                    <div className="flex items-center gap-2 mb-6">
                        <Moon className="text-purple-600 dark:text-purple-400" size={20} />
                        <h2 className="text-xl font-semibold">
                            Appearance
                        </h2>
                    </div>

                    <label className="flex justify-between items-center cursor-pointer">
                        <span className="text-gray-700 dark:text-gray-200 font-medium">Dark Mode</span>
                        <input type="checkbox" defaultChecked className="w-5 h-5 accent-zinc-900 dark:accent-white" />
                    </label>

                </div>

                {/* Resume */}
                <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm dark:shadow-none">

                    <div className="flex items-center gap-2 mb-6">
                        <FileText className="text-blue-600 dark:text-blue-400" size={20} />
                        <h2 className="text-xl font-semibold">
                            Resume
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">

                        <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                                Resume.pdf
                            </p>

                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                Uploaded 5 days ago
                            </p>
                        </div>

                        <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-zinc-700 font-medium transition-colors">
                            <Upload size={18} />
                            Upload New Resume
                        </button>

                    </div>

                </div>

                {/* Danger Zone */}
                <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-xl p-6 shadow-sm dark:shadow-none">

                    <div className="flex items-center gap-2 mb-5">
                        <Trash2 className="text-red-600 dark:text-red-500" size={20} />
                        <h2 className="text-xl font-semibold text-red-600 dark:text-red-400">
                            Danger Zone
                        </h2>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-5">
                        Permanently delete your account and all associated data.
                    </p>

                    <button className="bg-red-600 text-white hover:bg-red-700 px-6 py-3 rounded-lg font-medium transition-colors">
                        Delete Account
                    </button>

                </div>

                {/* Save */}
                <div className="flex justify-end">
                    <button className="bg-zinc-900 dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg font-semibold hover:bg-zinc-800 dark:hover:bg-gray-200 transition-colors">
                        Save Changes
                    </button>
                </div>

            </div>
        </div>
    );
}
