'use client';
import React from 'react';
import { Button } from '@heroui/react';
import { updateCompany } from '@/lib/actions/companies';


const CompanyTable = ({ companies = [] }) => {
    console.log('conaies from admin company table', companies);
    const handleApprove = async (id) => {
        const result = await updateCompany(id, { status: 'Approved' });

        if (result?.modifiedCount) {
            console.log(`Approved company with ID: ${id}`, result);
        }
    };

    const handleReject = async (id) => {
        const result = await updateCompany(id, { status: 'Rejected' });

        if (result?.modifiedCount) {
            console.log(`Rejected company with ID: ${id}`, result);
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';

        const date = new Date(dateString);

        if (isNaN(date.getTime())) return dateString;

        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        }).format(date);
    };

    const getStatusDetails = (status) => {
        switch (status?.toLowerCase()) {
            case 'approved':
                return {
                    color: 'text-emerald-700 dark:text-emerald-400',
                    dotColor: 'bg-emerald-500',
                    bgColor:
                        'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20',
                    label: 'Approved',
                };

            case 'rejected':
                return {
                    color: 'text-rose-700 dark:text-rose-400',
                    dotColor: 'bg-rose-500',
                    bgColor:
                        'bg-rose-50 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/20',
                    label: 'Rejected',
                };

            case 'pending':
            default:
                return {
                    color: 'text-amber-700 dark:text-amber-400',
                    dotColor: 'bg-amber-500',
                    bgColor:
                        'bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20',
                    label: 'Pending',
                };
        }
    };

    const getInitials = (name) => {
        return name
            ? name
                .split(' ')
                .map((word) => word[0])
                .join('')
                .substring(0, 2)
                .toUpperCase()
            : 'CO';
    };

    return (
        <div className="w-full">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                {/* Table Header */}
                <div className="border-b border-slate-200 px-5 py-4 dark:border-zinc-800">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Company Management
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">
                        Review and manage company registration requests.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-237.5 border-collapse">
                        <thead>
                            <tr className="border-b border-slate-200 bg-slate-50 dark:border-zinc-800 dark:bg-zinc-900/60">
                                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                                    Company
                                </th>

                                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                                    Industry
                                </th>

                                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                                    Jobs
                                </th>

                                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                                    Status
                                </th>

                                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                                    Date Submitted
                                </th>

                                <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {companies.length > 0 ? (
                                companies.map((company) => {
                                    const companyId =
                                        company._id?.$oid || company._id;

                                    const statusInfo = getStatusDetails(
                                        company.status
                                    );

                                    return (
                                        <tr key={companyId} className="border-b border-slate-100 transition-colors hover:bg-slate-50/80 last:border-0 dark:border-zinc-900 dark:hover:bg-zinc-900/50">
                                            {/* Company */}
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-sm font-bold tracking-wide text-slate-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                                                        {getInitials(
                                                            company.name
                                                        )}
                                                    </div>

                                                    <div className="min-w-0">
                                                        <p className="truncate font-semibold text-slate-900 dark:text-white">
                                                            {company.name}
                                                        </p>

                                                        <p className="mt-0.5 truncate text-xs text-slate-500 dark:text-zinc-400">
                                                            {company.recruiterEmail || company.websiteUrl || 'No email available'}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Industry */}
                                            <td className="px-5 py-4">
                                                <span className="inline-flex rounded-lg border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium capitalize text-slate-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                                                    {company.industry || 'N/A'}
                                                </span>
                                            </td>

                                            {/* Jobs Count */}
                                            <td className="px-5 py-4">
                                                <span className="inline-flex min-w-9 items-center justify-center rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 dark:bg-zinc-800 dark:text-zinc-300">
                                                    {company.jobCount ?? 0}
                                                </span>
                                            </td>

                                            {/* Status */}
                                            <td className="px-5 py-4 text-center">
                                                <span
                                                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${statusInfo.bgColor}`}
                                                >
                                                    <span
                                                        className={`h-2 w-2 rounded-full ${statusInfo.dotColor}`}
                                                    />

                                                    <span
                                                        className={
                                                            statusInfo.color
                                                        }
                                                    >
                                                        {statusInfo.label}
                                                    </span>
                                                </span>
                                            </td>

                                            {/* Date */}
                                            <td className="px-5 py-4">
                                                <span className="whitespace-nowrap text-sm text-slate-500 dark:text-zinc-400">
                                                    {formatDate(
                                                        company.createdAt
                                                            ?.$date ||
                                                        company.createdAt
                                                    )}
                                                </span>
                                            </td>

                                            {/* Actions */}
                                            <td className="px-5 py-4">
                                                <div className="flex justify-end gap-2">
                                                    {company.status?.toLowerCase() !==
                                                        'approved' && (
                                                            <Button
                                                                size="sm"
                                                                onClick={() =>
                                                                    handleApprove(
                                                                        companyId
                                                                    )
                                                                }
                                                                className="h-9 rounded-lg border border-emerald-200 bg-emerald-50 px-4 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500/20">
                                                                Approve
                                                            </Button>
                                                        )}

                                                    {company.status?.toLowerCase() !==
                                                        'rejected' && (
                                                            <Button
                                                                size="sm"
                                                                onClick={() =>
                                                                    handleReject(
                                                                        companyId
                                                                    )
                                                                }
                                                                className="h-9 rounded-lg border border-rose-200 bg-rose-50 px-4 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-400 dark:hover:bg-rose-500/20">
                                                                Reject
                                                            </Button>
                                                        )}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-16 text-center">
                                        <div className="flex flex-col items-center">
                                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-lg dark:bg-zinc-800">
                                                🏢
                                            </div>

                                            <h3 className="font-semibold text-slate-800 dark:text-zinc-200">
                                                No companies found
                                            </h3>

                                            <p className="mt-1 text-sm text-slate-500 dark:text-zinc-500">
                                                There are currently no company
                                                registrations to display.
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CompanyTable;

