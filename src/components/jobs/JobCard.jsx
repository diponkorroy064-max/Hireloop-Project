import React from "react";
import { Card, Link } from "@heroui/react";
import { MapPin, Briefcase, CircleDollar, ArrowRight } from "@gravity-ui/icons";
import Image from "next/image";

export default function JobCard({ job }) {
    if (!job) return null;

    const formatSalary = (amount) => {
        if (!amount) return "0";
        const numericAmount = parseInt(amount, 10);
        return numericAmount >= 1000 ? `${numericAmount / 1000}k` : amount;
    };

    const salaryRange = job.minSalary && job.maxSalary
        ? `$${formatSalary(job.minSalary)}-$${formatSalary(job.maxSalary)} / year`
        : "Salary Negotiable";

    const jobId = job._id?.$oid || job._id;

    return (
        <Card className="p-6 w-full max-w-110 border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100 rounded-[32px] shadow-lg dark:shadow-2xl transition-colors duration-300">

            {/* Card Header: Company Info & Job Title */}
            <Card.Header className="flex flex-col items-start gap-4 p-0 pb-3">
                <div className="flex items-center gap-3">
                    {job.companyLogo && (
                        <Image width={100} height={100}
                            src={job.companyLogo}
                            alt={`${job.companyName || "Company"} logo`}
                            className="w-8 h-8 object-contain rounded-md border border-gray-100 dark:border-zinc-800"
                        />
                    )}
                    <span className="text-lg font-medium text-gray-600 dark:text-zinc-300">
                        {job.companyName || "Confidential"}
                    </span>
                </div>

                <Card.Title className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white leading-tight">
                    {job.jobTitle}
                </Card.Title>

                {job.responsibilities && (
                    <Card.Description className="text-base text-gray-600 dark:text-zinc-400 line-clamp-2">
                        {job.responsibilities}
                    </Card.Description>
                )}
            </Card.Header>

            {/* Card Content: Badges/Tags & Technical Details */}
            <Card.Content className="flex flex-col gap-5 p-0 py-4">
                <div className="flex flex-wrap gap-2">
                    {/* Location Tag */}
                    {job.location && (
                        <div className="flex items-center gap-2 bg-gray-100/80 dark:bg-zinc-800/60 px-4 py-2 rounded-full border border-gray-200 dark:border-zinc-800">
                            <MapPin className="text-purple-600 dark:text-purple-400 w-4 h-4" />
                            <span className="text-sm font-medium text-gray-700 dark:text-zinc-200">
                                {job.location} {job.isRemote && "(Remote)"}
                            </span>
                        </div>
                    )}

                    {/* Job Type Tag */}
                    {job.jobType && (
                        <div className="flex items-center gap-2 bg-gray-100/80 dark:bg-zinc-800/60 px-4 py-2 rounded-full border border-gray-200 dark:border-zinc-800">
                            <Briefcase className="text-purple-600 dark:text-purple-400 w-4 h-4" />
                            <span className="text-sm font-medium text-gray-700 dark:text-zinc-200 capitalize">
                                {job.jobType}
                            </span>
                        </div>
                    )}

                    {/* Salary Tag */}
                    <div className="flex items-center gap-2 bg-gray-100/80 dark:bg-zinc-800/60 px-4 py-2 rounded-full border border-gray-200 dark:border-zinc-800 w-fit">
                        <div className="flex justify-center items-center bg-purple-500/20 rounded-full w-5 h-5">
                            <CircleDollar className="text-purple-600 dark:text-purple-400 w-3 h-3" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-zinc-200">{salaryRange}</span>
                    </div>
                </div>

                {/* Supplemental info strings */}
                {(job.requirements || job.benefits) && (
                    <div className="text-xs text-gray-500 dark:text-zinc-500 space-y-1 border-t border-gray-100 dark:border-zinc-800/60 pt-3">
                        {job.requirements && (
                            <p><strong className="text-gray-700 dark:text-zinc-400">Requirements:</strong> {job.requirements}</p>
                        )}
                        {job.benefits && (
                            <p><strong className="text-gray-700 dark:text-zinc-400">Benefits:</strong> {job.benefits}</p>
                        )}
                    </div>
                )}
            </Card.Content>

            {/* Card Footer: Action Button */}
            <Card.Footer className="p-0 pt-4">
                <Link
                    href={`/jobs/${jobId}`}
                    className="group flex justify-start items-center gap-2 bg-transparent hover:bg-gray-100 dark:hover:bg-zinc-800/40 p-2 -ml-2 rounded-xl text-base font-medium text-gray-900 dark:text-white transition-all duration-200"
                    variant="light"
                    disableRipple
                >
                    Apply Now
                    <ArrowRight className="group-hover:translate-x-1 text-gray-500 group-hover:text-gray-900 dark:text-zinc-400 dark:group-hover:text-white w-4 h-4 transition-transform duration-200" />
                </Link>
            </Card.Footer>

        </Card>
    );
}
