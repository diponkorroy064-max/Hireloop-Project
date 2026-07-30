import React from "react";

export default function JobsLoading() {
    return (
        <div className="w-full min-h-screen bg-zinc-950 p-6 md:p-12 text-white">
            <div className="max-w-7xl mx-auto mb-10 animate-pulse">
                {/* Header Skeleton */}
                <div className="h-9 w-64 bg-zinc-800/80 rounded-xl mb-3" />
                <div className="h-5 w-80 bg-zinc-900 rounded-lg" />
            </div>

            <div className="max-w-7xl mx-auto space-y-8">
                {/* Filter Bar Skeleton */}
                <div className="h-14 w-full bg-zinc-900/60 border border-zinc-800/80 rounded-2xl animate-pulse" />

                {/* Counter Skeleton */}
                <div className="h-4 w-32 bg-zinc-900 rounded" />

                {/* Grid Skeletons */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div
                            key={item}
                            className="h-64 w-full rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 flex flex-col justify-between animate-pulse"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-zinc-800" />
                                    <div className="space-y-2">
                                        <div className="h-4 w-32 bg-zinc-800 rounded" />
                                        <div className="h-3 w-20 bg-zinc-800/60 rounded" />
                                    </div>
                                </div>
                                <div className="h-4 w-3/4 bg-zinc-800/60 rounded mt-4" />
                            </div>

                            <div className="flex justify-between items-center pt-4 border-t border-zinc-800/60">
                                <div className="h-6 w-20 bg-zinc-800/60 rounded-full" />
                                <div className="h-4 w-16 bg-zinc-800/60 rounded" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
