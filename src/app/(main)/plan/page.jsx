"use client";
import React, { useState } from "react";

const PricingPlanPage = () => {
    const [activeTab, setActiveTab] = useState("seeker");

    const seekerPlans = [
        {
            name: "Free",
            id: 'seeker_free',
            price: "$0",
            period: "/forever",
            features: [
                "Save up to 10 jobs",
                "Apply to up to 3 jobs/month",
                "Basic profile",
                "Email alerts",
            ],
        },
        {
            name: "Pro",
            id: 'seeker_pro',
            price: "$19",
            period: "/month",
            popular: true,
            features: [
                "Apply to up to 30 jobs/month",
                "Unlimited saved jobs",
                "Application tracking",
                "Salary insights",
            ],
        },
        {
            name: "Premium",
            id: 'seeker_premium',
            price: "$39",
            period: "/month",
            features: [
                "Unlimited applications",
                "Profile boost to recruiters",
                "Early access to jobs",
                "Priority support",
            ],
        },
    ];

    const recruiterPlans = [
        {
            name: "Free",
            id: 'recuter_free',
            price: "$0",
            period: "/forever",
            features: [
                "3 active job posts",
                "Basic applicant management",
                "Standard listing visibility",
            ],
        },
        {
            name: "Growth",
            id: 'recuter_growth',
            price: "$49",
            period: "/month",
            popular: true,
            features: [
                "10 active job posts",
                "Applicant tracking",
                "Basic analytics",
                "Email support",
            ],
        },
        {
            name: "Enterprise",
            id: 'recuter_enterprice',
            price: "$149",
            period: "/month",
            features: [
                "50 active job posts",
                "Advanced analytics",
                "Featured job listings",
                "Team collaboration",
                "Custom branding",
                "Priority support",
            ],
        },
    ];

    const plans =
        activeTab === "seeker"
            ? seekerPlans
            : recruiterPlans;

    return (
        <div className="container mx-auto py-16 bg-base-200 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-5xl font-bold">
                        Pricing Plans
                    </h1>

                    <p className="mt-4 text-base-content/70">
                        Choose the perfect plan for your hiring
                        or job-seeking journey.
                    </p>
                </div>

                
                {/* Tabs */}
                <div className="flex justify-center mt-10">
                    <div className="tabs tabs-boxed">
                        <button
                            onClick={() =>
                                setActiveTab("seeker")
                            }
                            className={`tab ${activeTab === "seeker"
                                    ? "tab-active"
                                    : ""
                                }`}>
                            For Job Seekers
                        </button>

                        <button
                            onClick={() =>
                                setActiveTab("recruiter")
                            }
                            className={`tab ${activeTab === "recruiter"
                                    ? "tab-active"
                                    : ""
                                }`}>
                            For Recruiters
                        </button>
                    </div>
                </div>

                {/* Pricing Cards--- */}
                <div className="grid md:grid-cols-3 gap-8 mt-14">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`card bg-base-100 shadow-xl border ${plan.popular ? "border-primary border-2" : "" }`}>
                            
                            <div className="card-body">
                                {plan.popular && (
                                    <div className="badge badge-primary mb-2">
                                        Most Popular
                                    </div>
                                )}

                                <h2 className="card-title text-3xl">
                                    {plan.name}
                                </h2>

                                <div className="my-4">
                                    <span className="text-5xl font-bold">
                                        {plan.price}
                                    </span>

                                    <span className="text-base-content/60">
                                        {plan.period}
                                    </span>
                                </div>

                                <div className="divider my-2"></div>

                                <ul className="space-y-3 flex-1">
                                    {plan.features.map(
                                        (feature) => (
                                            <li
                                                key={feature}
                                                className="flex gap-2">
                                                <span className="text-success font-bold">
                                                    ✓
                                                </span>
                                                <span>
                                                    {feature}
                                                </span>
                                            </li>
                                        )
                                    )}
                                </ul>

                                <div>
                                    <form action="/api/checkout_sessions" method="POST">
                                        <input type="hidden" name="plan_id" value={plan.id}/>
                                        <section>
                                            <button type="submit" role="link" className={`btn mt-6 w-full ${plan.popular
                                                ? "btn-primary"
                                                : "btn-outline"
                                                }`}>
                                                Choose Plan
                                            </button>
                                        </section>
                                    </form>
                               </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA--- */}
                <div className="text-center mt-20">
                    <h2 className="text-3xl font-bold">
                        Need something custom?
                    </h2>

                    <p className="mt-3 text-base-content/70">
                        Contact us for enterprise solutions and
                        custom hiring requirements.
                    </p>

                    <button className="btn btn-primary mt-6">
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PricingPlanPage;

