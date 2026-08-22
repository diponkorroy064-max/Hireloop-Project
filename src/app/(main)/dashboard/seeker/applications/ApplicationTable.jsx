"use client";
import React from 'react';
import { Table, Chip, Button } from '@heroui/react';
import { Code, LayoutCells, Database, Cloud, Cpu, Gear } from '@gravity-ui/icons';

const formatRelativeTime = (dateString) => {
    const now = new Date();
    const appliedDate = new Date(dateString);
    const diffInMs = now - appliedDate;

    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    if (diffInHours < 24) {
        return diffInHours <= 1 ? "1 hour ago" : `${diffInHours} hours ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
        return diffInDays === 1 ? "1 day ago" : `${diffInDays} days ago`;
    }

    const diffInWeeks = Math.floor(diffInDays / 7);
    return diffInWeeks === 1 ? "1 week ago" : `${diffInWeeks} weeks ago`;
};

// Helper mapping to choose icons and theme-adaptive background colors
const getJobStyle = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('frontend') || lowerTitle.includes('web')) {
        return { icon: <Code width="16" height="16" />, bg: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300' };
    }
    if (lowerTitle.includes('designer') || lowerTitle.includes('product')) {
        return { icon: <LayoutCells width="16" height="16" />, bg: 'bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300' };
    }
    if (lowerTitle.includes('data') || lowerTitle.includes('scientist')) {
        return { icon: <Database width="16" height="16" />, bg: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400' };
    }
    if (lowerTitle.includes('cloud') || lowerTitle.includes('architect')) {
        return { icon: <Cloud width="16" height="16" />, bg: 'bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-500' };
    }
    if (lowerTitle.includes('ai') || lowerTitle.includes('research')) {
        return { icon: <Cpu width="16" height="16" />, bg: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300' };
    }
    return { icon: <Gear width="16" height="16" />, bg: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300' };
};

// Helper mapping for status badges with theme-aware styling
const getStatusChip = (status = "Applied") => {
    const normalized = status.toLowerCase();
    switch (normalized) {
        case 'applied':
            return (
                <Chip variant="bordered" className="border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-100 text-xs font-medium px-3 py-1">
                    Applied
                </Chip>
            );
        case 'review':
            return (
                <Chip variant="bordered" className="border-amber-500/70 dark:border-amber-600/70 text-amber-600 dark:text-amber-500 text-xs font-medium px-3 py-1 bg-amber-50 dark:bg-amber-950/20">
                    Review
                </Chip>
            );
        case 'shortlisted':
            return (
                <Chip variant="bordered" className="border-emerald-500/70 dark:border-emerald-600/70 text-emerald-600 dark:text-emerald-500 text-xs font-medium px-3 py-1 bg-emerald-50 dark:bg-emerald-950/20">
                    Shortlisted
                </Chip>
            );
        case 'rejected':
            return (
                <Chip variant="bordered" className="border-rose-500/70 dark:border-rose-700/70 text-rose-600 dark:text-rose-500 text-xs font-medium px-3 py-1 bg-rose-50 dark:bg-rose-950/20">
                    Rejected
                </Chip>
            );
        case 'offered':
            return (
                <Chip variant="bordered" className="border-zinc-400 dark:border-zinc-400 text-zinc-800 dark:text-zinc-200 text-xs font-medium px-3 py-1">
                    Offered
                </Chip>
            );
        default:
            return (
                <Chip variant="bordered" className="border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-100 text-xs font-medium">
                    {status}
                </Chip>
            );
    }
};


const ApplicationsTable = ({ jobs }) => {
    return (
        <div className="w-full bg-white dark:bg-[#121212] p-6 min-h-screen text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
            <h2 className="text-xl font-semibold mb-6 text-zinc-800 dark:text-zinc-200">
                Applications ({jobs.length})
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
                <Table className="w-full">
                    <Table.ScrollContainer>
                        <Table.Content aria-label="Job applications tracking table">
                            <Table.Header>
                                <Table.Column isRowHeader className="w-[40%] text-zinc-600 dark:text-zinc-400">
                                    Job Title
                                </Table.Column>
                                <Table.Column className="w-[20%] text-zinc-600 dark:text-zinc-400">
                                    Company
                                </Table.Column>
                                <Table.Column className="w-[15%] text-zinc-600 dark:text-zinc-400">
                                    Applied
                                </Table.Column>
                                <Table.Column className="w-[15%] text-zinc-600 dark:text-zinc-400">
                                    Status
                                </Table.Column>
                                <Table.Column className="w-[10%] text-center text-zinc-600 dark:text-zinc-400">
                                    Action
                                </Table.Column>
                            </Table.Header>

                            <Table.Body emptyContent={"No applications found."}>
                                {jobs.map((job) => {
                                    const style = getJobStyle(job.jobTitle);

                                    const workType = job.workType || "Full-time";
                                    const locationType = job.locationType || "Remote";
                                    const status = job.status || "Applied";

                                    return (
                                        <Table.Row key={job._id?.$oid || job.jobId} className="border-b border-zinc-200/60 dark:border-zinc-800/60">
                                            {/* JOB TITLE COLUMN */}
                                            <Table.Cell>
                                                <div className="flex items-center gap-4">
                                                    <div className={`p-2.5 rounded-lg flex items-center justify-center ${style.bg}`}>
                                                        {style.icon}
                                                    </div>
                                                    <div className="flex flex-col gap-0.5">
                                                        <span className="font-medium text-zinc-900 dark:text-zinc-100 text-[15px]">
                                                            {job.jobTitle}
                                                        </span>
                                                        <span className="text-xs text-zinc-500 dark:text-zinc-400 font-normal">
                                                            {workType} • {locationType}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Table.Cell>

                                            {/* COMPANY COLUMN */}
                                            <Table.Cell>
                                                <span className="text-zinc-700 dark:text-zinc-300 text-[14px]">
                                                    {job.companyName}
                                                </span>
                                            </Table.Cell>

                                            {/* APPLIED COLUMN */}
                                            <Table.Cell>
                                                <span className="text-zinc-500 dark:text-zinc-400 text-[14px]">
                                                    {formatRelativeTime(job.createdAt?.$date || job.createdAt)}
                                                </span>
                                            </Table.Cell>

                                            {/* STATUS COLUMN */}
                                            <Table.Cell>
                                                {getStatusChip(status)}
                                            </Table.Cell>

                                            {/* ACTION COLUMN */}
                                            <Table.Cell className="text-right">
                                                <Button
                                                    size="sm"
                                                    variant="light"
                                                    className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 font-normal text-sm"
                                                    onClick={() => console.log('Details for:', job.jobId)}
                                                >
                                                    Details
                                                </Button>
                                            </Table.Cell>
                                        </Table.Row>
                                    );
                                })}
                            </Table.Body>
                        </Table.Content>
                    </Table.ScrollContainer>
                </Table>
            </div>
        </div>
    );
};

export default ApplicationsTable;
