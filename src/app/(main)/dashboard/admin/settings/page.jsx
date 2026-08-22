"use client";

import React, { useState } from "react";
import {
    User,
    Globe,
    Bell,
    Settings,
    Shield,
    CheckCircle2,
    Save,
    Lock,
    Mail,
    AlertTriangle,
} from "lucide-react";

export default function AdminSettingsPage() {
    const [maintenanceMode, setMaintenanceMode] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0d0d0f] text-slate-900 dark:text-neutral-100 transition-colors duration-300 p-6 md:p-8">
            <div className="max-w-5xl mx-auto space-y-6">

                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm dark:shadow-none transition-colors">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Settings
                        </h1>
                        <p className="text-sm text-slate-500 dark:text-neutral-400 mt-1 font-medium">
                            Manage your account credentials, notifications, and platform maintenance settings.
                        </p>
                    </div>

                    <button
                        onClick={handleSave}
                        className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wide transition-all shadow-sm active:scale-95"
                    >
                        {saved ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Save size={16} />}
                        {saved ? "Changes Saved!" : "Save Changes"}
                    </button>
                </div>

                <div className="space-y-6">

                    {/* Admin Profile */}
                    <div className="bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm dark:shadow-none transition-colors">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-zinc-800/80">
                            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                <User size={20} />
                            </div>
                            <div>
                                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                                    Admin Profile
                                </h2>
                                <p className="text-xs text-slate-500 dark:text-neutral-400">
                                    Update your personal administrative account details
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 mb-2">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-500" />
                                    <input
                                        type="text"
                                        defaultValue="Admin User"
                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 rounded-xl text-xs font-medium text-slate-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-zinc-700 transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-500" />
                                    <input
                                        type="email"
                                        defaultValue="admin@example.com"
                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 rounded-xl text-xs font-medium text-slate-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-zinc-700 transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Site Information */}
                    <div className="bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm dark:shadow-none transition-colors">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-zinc-800/80">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <Globe size={20} />
                            </div>
                            <div>
                                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                                    Site Information
                                </h2>
                                <p className="text-xs text-slate-500 dark:text-neutral-400">
                                    Global platform preferences and public support channels
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 mb-2">
                                    Website Name
                                </label>
                                <input
                                    type="text"
                                    defaultValue="Job Portal"
                                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 rounded-xl text-xs font-medium text-slate-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-zinc-700 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 mb-2">
                                    Support Email
                                </label>
                                <input
                                    type="email"
                                    defaultValue="support@example.com"
                                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 rounded-xl text-xs font-medium text-slate-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-zinc-700 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Notification Settings */}
                    <div className="bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm dark:shadow-none transition-colors">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-zinc-800/80">
                            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-100 dark:border-amber-900/60 flex items-center justify-center text-amber-600 dark:text-amber-400">
                                <Bell size={20} />
                            </div>
                            <div>
                                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                                    Notification Settings
                                </h2>
                                <p className="text-xs text-slate-500 dark:text-neutral-400">
                                    Configure system alert triggers and transactional emails
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 divide-y divide-slate-100 dark:divide-zinc-800/60">
                            {[
                                { id: "emailNotif", title: "Email Notifications", desc: "Receive summary digests of daily system events", defaultChecked: true },
                                { id: "userRegAlert", title: "New User Registration Alerts", desc: "Get notified when a new candidate or recruiter signs up", defaultChecked: true },
                                { id: "paymentNotif", title: "Payment Notifications", desc: "Receive real-time payment confirmation alerts", defaultChecked: false },
                            ].map((item) => (
                                <label
                                    key={item.id}
                                    htmlFor={item.id}
                                    className="flex items-center justify-between pt-4 first:pt-0 cursor-pointer group"
                                >
                                    <div>
                                        <span className="text-xs font-semibold text-slate-800 dark:text-neutral-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                            {item.title}
                                        </span>
                                        <p className="text-[11px] text-slate-500 dark:text-neutral-400 mt-0.5">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <input
                                        id={item.id}
                                        type="checkbox"
                                        defaultChecked={item.defaultChecked}
                                        className="w-4 h-4 rounded border-slate-300 dark:border-zinc-700 text-slate-900 dark:text-white focus:ring-slate-400 dark:focus:ring-zinc-600 cursor-pointer accent-slate-900 dark:accent-white"
                                    />
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Maintenance */}
                    <div className="bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm dark:shadow-none transition-colors">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-zinc-800/80">
                            <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-100 dark:border-rose-900/60 flex items-center justify-center text-rose-600 dark:text-rose-400">
                                <Settings size={20} />
                            </div>
                            <div>
                                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                                    Platform Maintenance
                                </h2>
                                <p className="text-xs text-slate-500 dark:text-neutral-400">
                                    Control live site availability and downtime operations
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800">
                            <div className="flex items-start gap-3">
                                <AlertTriangle size={18} className="text-amber-500 mt-0.5 shrink-0" />
                                <div>
                                    <span className="text-xs font-semibold text-slate-800 dark:text-neutral-200">
                                        Enable Maintenance Mode
                                    </span>
                                    <p className="text-[11px] text-slate-500 dark:text-neutral-400 mt-0.5">
                                        Temporarily disable public site access for standard users during system updates.
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => setMaintenanceMode(!maintenanceMode)}
                                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${maintenanceMode ? "bg-rose-600" : "bg-slate-300 dark:bg-zinc-700"
                                    }`}
                            >
                                <span
                                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${maintenanceMode ? "translate-x-5" : "translate-x-0"
                                        }`}
                                />
                            </button>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex justify-end pt-2">
                        <button
                            onClick={handleSave}
                            className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black px-6 py-3 rounded-xl font-semibold text-xs tracking-wide transition-all shadow-sm active:scale-95"
                        >
                            {saved ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Save size={16} />}
                            {saved ? "Changes Saved!" : "Save Changes"}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
