import React from 'react';
import { getJobById } from '@/lib/api/jobs';
import JobDetailClient from './JobDetailClient';

const DetailsJobPage = async ({ params }) => {
    const { id } = await params;
    const job = await getJobById(id);

    if (!job) {
        return (
            <div className="w-full min-h-screen bg-slate-50 dark:bg-zinc-950 flex flex-col justify-center items-center text-slate-800 dark:text-white p-6 transition-colors duration-300">
                <div className="max-w-md text-center p-8 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-sm dark:shadow-none space-y-3">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Job Not Found</h2>
                    <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">
                        This position could not be found or is no longer active.
                    </p>
                </div>
            </div>
        );
    }

    return <JobDetailClient job={job} id={id} />;
};

export default DetailsJobPage;
