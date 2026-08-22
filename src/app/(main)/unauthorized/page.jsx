'use client';
import Link from "next/link";
import React from "react";
import { ShieldAlert, ArrowLeft, Home } from "lucide-react";


const UnauthorizedPage = () => {
    return (
        <div className="relative min-h-[85vh] w-full bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 flex items-center justify-center p-4 md:p-8 overflow-hidden transition-colors duration-300">
            {/* Background Ambient Glows */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-120 bg-red-500/10 dark:bg-red-600/15 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 dark:bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative max-w-lg w-full">
                <div className="rounded-3xl border border-slate-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-2xl shadow-xl dark:shadow-2xl overflow-hidden transition-colors duration-300">
                    <div className="p-8 sm:p-10 flex flex-col items-center text-center">

                        {/* ICON HEADER */}
                        <div className="w-20 h-20 rounded-2xl bg-red-500/10 dark:bg-red-500/15 border border-red-500/20 flex items-center justify-center mb-6 text-red-600 dark:text-red-400 shadow-sm">
                            <ShieldAlert size={40} className="animate-pulse" />
                        </div>

                        {/* STATUS & HEADINGS */}
                        <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400 bg-red-500/10 dark:bg-red-500/15 px-3 py-1 rounded-full border border-red-500/20 mb-3">
                            Error 403
                        </span>

                        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight sm:text-4xl">
                            Access Denied
                        </h1>

                        <p className="text-slate-600 dark:text-zinc-400 text-sm mt-3 leading-relaxed max-w-sm">
                            You do not have permission to access this page. Please contact the administrator if you believe this is a mistake.
                        </p>

                        {/* ACTION BUTTONS */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 w-full">
                            <Link
                                href="/"
                                className="w-full sm:w-auto h-11 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer">
                                <Home size={16} />
                                Go Home
                            </Link>

                            <button
                                type="button"
                                onClick={() => window.history.back()}
                                className="w-full sm:w-auto h-11 px-6 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-100/50 dark:bg-zinc-950/40 hover:bg-slate-200/60 dark:hover:bg-zinc-800/60 text-slate-700 dark:text-zinc-200 font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer">
                                <ArrowLeft size={16} />
                                Go Back
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnauthorizedPage;
