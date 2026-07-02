"use client";
import { SubmitApplication } from "@/lib/actions/application";
import React, { useState } from "react";
import { toast } from "react-toastify";


const JobApply = ({ job, applicant }) => {
    // console.log("applicant in apply", applicant);

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(
            new FormData(e.currentTarget)
        );

        const applicationData = {
            jobId: job?._id,
            jobTitle: job?.jobTitle,
            companyName: job?.companyName,
            applicantId : applicant?.id,
            applicantName: applicant?.name,
            applicantEmail: applicant?.email,
            resumeUrl: formData.resumeUrl,
            portfolioUrl: formData.portfolioUrl,
            linkedinUrl: formData.linkedinUrl,
            coverLetter: formData.coverLetter,
            status:"Applied"
        };

        try {
            setLoading(true);
            console.log("application data ",applicationData);

            const res = await SubmitApplication(applicationData);
            toast.success('Applicatin Submitted Successfully !');
        }
        catch (error) {
            // console.error(error);
            toast.error('Applicatin not Submitted');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="max-w-2xl mx-auto text-white">
            <div className="card bg-base-100 shadow-xl border">
                <div className="card-body">
                    <div className="mb-4">
                        <h2 className="card-title text-2xl">
                            Apply for {job?.jobTitle}
                        </h2>
                        <p className="text-base-content/70">Submit your application by providing your resume link.</p>
                    </div>

                    {/* Applicant Info */}
                    <div className="bg-base-200 rounded-lg p-4 mb-4">
                        <h3 className="font-semibold mb-2">Applicant Information</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                            <p>
                                <span className="font-medium">Name:</span>{" "}
                                {applicant?.name}
                            </p>
                            <p>
                                <span className="font-medium">Email:</span>{" "}
                                {applicant?.email}
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Resume URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-white">
                                    Resume URL *
                                </span>
                            </label>

                            <input type="url" name="resumeUrl" required placeholder="https://drive.google.com/..." className="input input-bordered w-full"/>
                            <label className="label">
                                <span className="label-text-alt text-white">
                                    Provide a publicly accessible resume link.
                                </span>
                            </label>
                        </div>

                        {/* Portfolio */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-white">
                                    Portfolio Website
                                </span>
                            </label>
                            <input
                                type="url"
                                name="portfolioUrl"
                                placeholder="https://yourportfolio.com"
                                className="input input-bordered w-full text-white"
                            />
                        </div>

                        {/* LinkedIn--- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-white">
                                    LinkedIn Profile
                                </span>
                            </label>
                            <input
                                type="url"
                                name="linkedinUrl"
                                placeholder="https://linkedin.com/in/username"
                                className="input input-bordered w-full text-white"
                            />
                        </div>

                        {/* Optional Message--- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-white">
                                    Additional Message
                                </span>
                            </label>
                            <textarea name="coverLetter" rows={4} placeholder="Anything you'd like the recruiter to know..." className="textarea textarea-bordered w-full text-white"/>
                        </div>

                        <button type="submit" disabled={loading} className="btn btn-primary w-full">
                            {loading ? (
                                <>
                                    <span className="loading loading-spinner loading-sm"></span>
                                    Submitting...
                                </>
                            ) : (
                                "Submit Application"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApply;

