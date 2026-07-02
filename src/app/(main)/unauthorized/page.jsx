'use client'
import Link from "next/link";
import React from "react";


const UnauthorizedPage = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
            <div className="max-w-lg w-full">
                <div className="card bg-base-100 shadow-2xl border">
                    <div className="card-body items-center text-center">
                        {/* Icon */}
                        <div className="w-24 h-24 rounded-full bg-error/10 flex items-center justify-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-error"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z"/>
                            </svg>
                        </div>

                        {/* Content */}
                        <h1 className="text-5xl font-bold text-error">
                            403
                        </h1>

                        <h2 className="text-2xl font-semibold mt-2">
                            Access Denied
                        </h2>

                        <p className="text-base-content/70 mt-3">
                            You do not have permission to access
                            this page. Please contact the administrator
                            if you believe this is a mistake.
                        </p>

                        {/* Actions */}
                        <div className="flex gap-3 mt-8">
                            <Link
                                href="/"
                                className="btn btn-primary">
                                Go Home
                            </Link>

                            <button
                                onClick={() => window.history.back()}
                                className="btn btn-outline">
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnauthorizedPage;

