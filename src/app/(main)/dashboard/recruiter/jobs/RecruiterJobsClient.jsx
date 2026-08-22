"use client";
import React from "react";
import { Eye, Edit2, Trash2 } from "lucide-react";

const RecruiterJobsClient = ({ jobs = [] }) => {
    const getStatusStyle = (status) => {
        switch (status?.toLowerCase()) {
            case "active":
                return "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800";
            case "inactive":
                return "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800";
            default:
                return "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800";
        }
    };

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-6 text-slate-900 dark:text-slate-100">
            {/* Header Section */}
            <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                    Manage All Jobs
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    View, update, and manage your current job postings.
                </p>
            </div>

            {/* Standard HTML Table Container */}
            <div className="w-full overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
                <table className="w-full text-left text-sm border-collapse">
                    <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-semibold">Job Title</th>
                            <th scope="col" className="px-6 py-4 font-semibold">Type / Category</th>
                            <th scope="col" className="px-6 py-4 font-semibold">Location</th>
                            <th scope="col" className="px-6 py-4 font-semibold">Status</th>
                            <th scope="col" className="px-6 py-4 font-semibold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
                        {jobs.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">
                                    No jobs found for this company.
                                </td>
                            </tr>
                        ) : (
                            jobs.map((job) => {
                                const rowKey = typeof job._id === "string"
                                    ? job._id
                                    : job._id?.$oid || job._id?.toString?.() || job.id;

                                return (
                                    <tr
                                        key={rowKey}
                                        className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors duration-150"
                                    >
                                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100 whitespace-nowrap">
                                            {job.jobTitle}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex flex-col gap-0.5">
                                                <span className="capitalize font-medium text-slate-800 dark:text-slate-200">
                                                    {job.jobType}
                                                </span>
                                                <span className="text-xs text-slate-500 dark:text-slate-400 capitalize">
                                                    {job.jobCategory}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-slate-600 dark:text-slate-300">
                                            {job.isRemote ? "Remote" : job.location}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border capitalize ${getStatusStyle(job.status)}`}
                                            >
                                                {job.status || "Unknown"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <div className="flex items-center justify-end gap-1">
                                                <button
                                                    type="button"
                                                    title="View Details"
                                                    className="p-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button
                                                    type="button"
                                                    title="Edit Job"
                                                    className="p-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    type="button"
                                                    title="Delete Job"
                                                    className="p-1.5 rounded-lg text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecruiterJobsClient;
