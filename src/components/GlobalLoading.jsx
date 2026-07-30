'use client';
import React from 'react';
import { Sparkles } from 'lucide-react';


export default function GlobalLoading({ label = "Loading HireLoop..." }) {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 text-zinc-100 overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center gap-6">
                {/* Brand Icon Badge */}
                <div className="relative flex items-center justify-center">
                    {/* Spinning ring */}
                    <div className="w-16 h-16 rounded-2xl border-2 border-blue-500/20 border-t-blue-500 animate-spin" />

                    {/* Centered Logo / Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                            <Sparkles size={22} className="animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* Status Text */}
                <div className="flex flex-col items-center gap-1.5 text-center">
                    <span className="text-sm font-medium tracking-wide text-zinc-200">
                        {label}
                    </span>
                    <p className="text-xs text-zinc-500">
                        Preparing your workspace
                    </p>
                </div>

                {/* Subtle Progress Bar */}
                <div className="w-36 h-1 bg-zinc-800/80 rounded-full overflow-hidden">
                    <div className="h-full bg-linear-to-r from-blue-500 to-violet-500 rounded-full animate-indeterminate" />
                </div>
            </div>
        </div>
    );
}

