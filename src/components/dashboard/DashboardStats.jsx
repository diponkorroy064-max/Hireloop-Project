import React from 'react';

const DashboardStats = ({ RecruiterStatsData }) => {
    console.log("RecruiterStatsData in DashboardStats", RecruiterStatsData);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 py-6 px-5">
            {RecruiterStatsData.map(item => <div
                key={item.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
                    {item.icon && <item.icon className="h-5 w-5 text-zinc-300" />}
                </div>

                <p className="text-sm text-zinc-500">
                    {item.title}
                </p>

                <h3 className="mt-2 text-3xl font-semibold text-white">
                    {item.value}
                </h3>
            </div>
            )}
        </div>
    );
};

export default DashboardStats;

