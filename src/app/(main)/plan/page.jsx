"use client";

import React, { useState } from "react";
import { Check, Sparkles, HelpCircle } from "lucide-react";

export default function PricingPlanPage() {
    const [activeTab, setActiveTab] = useState("seeker");

    const seekerPlans = [
        {
            name: "Free",
            id: "seeker_free",
            price: "$0",
            period: "/forever",
            description: "Essential tools to kickstart your job search.",
            features: [
                "Save up to 10 jobs",
                "Apply to up to 3 jobs/month",
                "Basic profile visibility",
                "Standard email alerts",
            ],
        },
        {
            name: "Pro",
            id: "seeker_pro",
            price: "$19",
            period: "/month",
            popular: true,
            description: "Accelerate your career with enhanced application power.",
            features: [
                "Apply to up to 30 jobs/month",
                "Unlimited saved jobs",
                "Detailed application tracking",
                "Comprehensive salary insights",
                "Resume performance feedback",
            ],
        },
        {
            name: "Premium",
            id: "seeker_premium",
            price: "$39",
            period: "/month",
            description: "Maximum visibility and priority exposure for serious job seekers.",
            features: [
                "Unlimited job applications",
                "Profile boost to top recruiters",
                "Early access to new listings",
                "1-on-1 interview prep session",
                "24/7 Priority support",
            ],
        },
    ];

    const recruiterPlans = [
        {
            name: "Free",
            id: "recruiter_free",
            price: "$0",
            period: "/forever",
            description: "Perfect for testing out HireLoop or sporadic hiring.",
            features: [
                "3 active job posts",
                "Basic applicant management",
                "Standard listing visibility",
                "Community support",
            ],
        },
        {
            name: "Growth",
            id: "recruiter_growth",
            price: "$49",
            period: "/month",
            popular: true,
            description: "Ideal for growing teams looking for qualified talent quickly.",
            features: [
                "10 active job posts",
                "Full applicant tracking suite",
                "Sourcing analytics & reports",
                "Standard email support",
                "Candidate filtering tools",
            ],
        },
        {
            name: "Enterprise",
            id: "recruiter_enterprise",
            price: "$149",
            period: "/month",
            description: "Robust tools for scale hiring and employer branding.",
            features: [
                "50 active job posts",
                "Advanced analytics & insights",
                "Featured job listings boost",
                "Team collaboration seats",
                "Custom company branding",
                "Dedicated account manager",
            ],
        },
    ];

    const plans = activeTab === "seeker" ? seekerPlans : recruiterPlans;

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-zinc-950 dark:text-white transition-colors duration-300 py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50">
                        Flexible Pricing
                    </span>

                    <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
                        Simple, transparent plans
                    </h1>

                    <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-zinc-400">
                        Choose the perfect plan tailored to your hiring needs or job-seeking journey.
                    </p>
                </div>

                {/* Role Switcher Tabs */}
                <div className="mt-10 flex justify-center">
                    <div className="inline-flex rounded-2xl bg-gray-200/80 dark:bg-zinc-900 p-1.5 border border-gray-300/60 dark:border-zinc-800 backdrop-blur-md">
                        <button
                            type="button"
                            onClick={() => setActiveTab("seeker")}
                            className={`flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer ${activeTab === "seeker"
                                    ? "bg-white text-indigo-600 shadow-md dark:bg-indigo-600 dark:text-white"
                                    : "text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white"
                                }`}
                        >
                            For Job Seekers
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveTab("recruiter")}
                            className={`flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer ${activeTab === "recruiter"
                                    ? "bg-white text-indigo-600 shadow-md dark:bg-indigo-600 dark:text-white"
                                    : "text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white"
                                }`}
                        >
                            For Recruiters
                        </button>
                    </div>
                </div>

                {/* Pricing Cards Grid */}
                <div className="mt-14 grid gap-8 md:grid-cols-3 items-stretch">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${plan.popular
                                    ? "bg-white dark:bg-zinc-900 border-2 border-indigo-600 dark:border-indigo-500 shadow-2xl shadow-indigo-500/10 dark:shadow-indigo-500/5 md:-translate-y-2"
                                    : "bg-white/80 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 shadow-lg shadow-gray-200/50 dark:shadow-none hover:border-gray-300 dark:hover:border-zinc-700"
                                }`}
                        >
                            {/* Most Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                                        <Sparkles size={13} />
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div>
                                {/* Plan Header */}
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {plan.name}
                                    </h3>
                                </div>

                                <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400 min-h-10">
                                    {plan.description}
                                </p>

                                {/* Pricing */}
                                <div className="mt-6 flex items-baseline gap-1">
                                    <span className="text-5xl font-black tracking-tight text-gray-900 dark:text-white">
                                        {plan.price}
                                    </span>
                                    <span className="text-sm font-medium text-gray-500 dark:text-zinc-400">
                                        {plan.period}
                                    </span>
                                </div>

                                <div className="my-6 h-px bg-gray-200 dark:bg-zinc-800" />

                                {/* Features List */}
                                <ul className="space-y-3.5">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-3 text-sm text-gray-700 dark:text-zinc-300"
                                        >
                                            <div className="rounded-full bg-emerald-100 dark:bg-emerald-950/60 p-1 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Checkout Form */}
                            <form
                                action="/api/checkout_sessions"
                                method="POST"
                                className="mt-8"
                            >
                                <input
                                    type="hidden"
                                    name="plan_id"
                                    value={plan.id}
                                />
                                <button
                                    type="submit"
                                    className={`w-full rounded-xl py-3.5 px-4 text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${plan.popular
                                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 active:scale-[0.98]"
                                            : "bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-zinc-700 active:scale-[0.98]"
                                        }`}
                                >
                                    Choose {plan.name} Plan
                                </button>
                            </form>
                        </div>
                    ))}
                </div>

                {/* Custom Enterprise Callout */}
                <div className="mt-20 rounded-3xl border border-gray-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 p-8 md:p-12 text-center shadow-xl shadow-gray-200/50 dark:shadow-none backdrop-blur-md">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400">
                        <HelpCircle size={24} />
                    </div>

                    <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                        Need a custom enterprise solution?
                    </h2>

                    <p className="mt-3 mx-auto max-w-xl text-base text-gray-600 dark:text-zinc-400">
                        We offer tailored plans, dedicated infrastructure, and bulk candidate search capabilities for enterprise teams.
                    </p>

                    <a
                        href="/contact"
                        className="mt-6 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition-colors duration-200 cursor-pointer"
                    >
                        Contact Sales
                    </a>
                </div>

            </div>
        </div>
    );
}
