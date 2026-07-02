import { getJobById } from '@/lib/api/jobs';
import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';
import JobApply from './jobApply';
import { getApplicationsByApplicant } from '@/lib/api/applications';
import Link from 'next/link';
import { getPlanById } from '@/lib/api/plans';

const ApplyPage = async ({ params }) => {
    const user = await getUserSession();
    // console.log(user);

    const { id } = await params;

    if (!user) {
        redirect(`/signin?redirect=/jobs/${id}/apply`);
    }

    if (user.role !== 'seeker') {
        return (
            <div className="min-h-[60vh] flex items-center justify-center px-4">
                <div className="alert alert-error max-w-lg">
                    <span>
                        Only job seekers can apply for this position.
                    </span>
                </div>
            </div>
        );
    }

    const applications = await getApplicationsByApplicant(user?.id);

    console.log("user plan", user?.plan);

    const plan = await getPlanById(user?.plan || "seeker_free");
    console.log("plan", plan);

    const job = await getJobById(id);

    const remainingApplications =
        plan?.maxApplicationPerMonth - applications.length;

    const progress =
        (applications?.length / plan?.maxApplicationPerMonth) * 100;

    return (
        <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
            {/* Application Usage Card */}
            <div className="card bg-base-100 shadow-lg border">
                <div className="card-body">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-bold">
                                Apply for Position
                            </h1>

                            <p className="text-base-content/70 mt-1">
                                Track your monthly application limit.
                            </p>
                        </div>

                        <div className="badge badge-primary badge-lg">
                            {plan?.name} Plan
                        </div>
                    </div>

                    <div className="mt-5 space-y-3">
                        <div className="flex justify-between text-sm font-medium">
                            <span>
                                Applications Used
                            </span>

                            <span>
                                {applications.length} /{" "}
                                {plan?.maxApplicationPerMonth}
                            </span>
                        </div>

                        <progress
                            className="progress progress-primary w-full"
                            value={applications.length}
                            max={plan?.maxApplicationPerMonth}
                        ></progress>

                        <div className="flex justify-between items-center">
                            <p className="text-sm text-base-content/70">
                                Remaining applications:{" "}
                                <span className="font-semibold">
                                    {remainingApplications}
                                </span>
                            </p>

                            <Link href="/plan" className="btn btn-sm btn-outline btn-primary"> Upgrade Plan</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Limit Reached */}
            {applications.length >= plan?.maxApplicationPerMonth ? (
                <div className="alert alert-warning shadow-md">
                    <span>
                        You`ve reached your monthly application limit.
                        Upgrade your plan to apply for more jobs.
                    </span>
                </div>
            ) : (
                <div className="space-y-6">
                    {/* Job Summary */}
                    <div className="card bg-base-100 shadow-lg border">
                        <div className="card-body">
                            <h2 className="card-title text-xl">
                                {job?.jobTitle}
                            </h2>

                            <div className="flex flex-wrap gap-2 mt-2">
                                <div className="badge badge-outline">
                                    {job?.jobType}
                                </div>

                                <div className="badge badge-outline">
                                    {job?.jobCategory}
                                </div>

                                {job?.currency && (
                                    <div className="badge badge-success badge-outline">
                                        {job?.minSalary} - {job?.maxSalary}{" "}
                                        {job?.currency}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Application Form */}
                    <JobApply
                        applicant={user}
                        job={job}
                    />
                </div>
            )}
        </div>
    );
};

export default ApplyPage;

