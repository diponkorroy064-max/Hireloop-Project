import React from 'react';


export default function CompaniesLoading() {
    return (
        <div className="w-full min-h-screen bg-zinc-950 p-6 md:p-12 text-white">
            {/* Header Skeleton */}
            <div className="max-w-7xl mx-auto mb-10 animate-pulse">
                <div className="h-9 w-64 bg-zinc-800/80 rounded-xl mb-3" />
                <div className="h-5 w-80 bg-zinc-900 rounded-lg" />
            </div>

            <div className="max-w-7xl mx-auto space-y-8">
                {/* Search Bar Skeleton */}
                <div className="h-14 w-full bg-zinc-900/60 border border-zinc-800/80 rounded-2xl animate-pulse" />

                {/* Company Cards Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div
                            key={item}
                            className="h-56 w-full rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 flex flex-col justify-between animate-pulse"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-zinc-800 shrink-0" />
                                    <div className="space-y-2 flex-1">
                                        <div className="h-5 w-3/4 bg-zinc-800 rounded" />
                                        <div className="h-3 w-1/2 bg-zinc-800/60 rounded" />
                                    </div>
                                </div>
                                <div className="h-3 w-full bg-zinc-800/60 rounded mt-2" />
                                <div className="h-3 w-4/5 bg-zinc-800/60 rounded" />
                            </div>

                            <div className="flex justify-between items-center pt-4 border-t border-zinc-800/60">
                                <div className="h-6 w-24 bg-zinc-800/60 rounded-full" />
                                <div className="h-4 w-16 bg-zinc-800/60 rounded" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
