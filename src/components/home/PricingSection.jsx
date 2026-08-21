"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const PricingSection = () => {
    const [billing, setBilling] = useState("monthly");

    const plans = [
        {
            name: "Starter",
            monthly: 0,
            yearly: 0,
            features: [
                "Daily AI match brief (top 5)",
                "Verified salary bands",
                "Company insight dashboards",
                "1-click apply, unlimited",
            ],
        },
        {
            name: "Growth",
            monthly: 17,
            yearly: 13,
            featured: true,
            features: [
                "Daily AI match brief (top 5)",
                "Verified salary bands",
                "Company insight dashboards",
                "1-click apply, unlimited",
            ],
        },
        {
            name: "Premium",
            monthly: 99,
            yearly: 79,
            features: [
                "Everything in Pro",
                "Multi-profile career portfolios",
                "Shared talent rooms",
                "Recruiter view (read-only)",
            ],
        },
    ];

    
    return (
        <section className="bg-base-100 dark:bg-black py-24 text-gray-900 dark:text-white transition-colors duration-300">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[4px] text-gray-500 dark:text-gray-400">
                        <span className="h-0.5 w-4 bg-indigo-500" />
                        Pricing
                        <span className="h-0.5 w-4 bg-indigo-500" />
                    </div>

                    <h2 className="mt-6 text-4xl font-bold md:text-6xl text-gray-900 dark:text-white tracking-tight">
                        Pay for the leverage,
                        <br />
                        not the listings
                    </h2>
                </div>

                {/* Billing Toggle */}
                <div className="mt-10 flex justify-center">
                    <div className="flex items-center rounded-full bg-gray-200 dark:bg-zinc-800 p-1 transition-colors">
                        <button
                            type="button"
                            onClick={() => setBilling("monthly")}
                            className={`rounded-full px-5 py-2 text-sm font-medium transition cursor-pointer ${billing === "monthly"
                                    ? "bg-white text-gray-900 shadow-sm dark:bg-white dark:text-black"
                                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                }`}
                        >
                            Monthly
                        </button>

                        <button
                            type="button"
                            onClick={() => setBilling("yearly")}
                            className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition cursor-pointer ${billing === "yearly"
                                    ? "bg-white text-gray-900 shadow-sm dark:bg-white dark:text-black"
                                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                }`}
                        >
                            Yearly
                            <span className="rounded-full bg-fuchsia-600 px-2 py-0.5 text-[10px] text-white">
                                25%
                            </span>
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="mt-16 grid gap-8 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`rounded-3xl border p-7 transition-all duration-300 ${plan.featured
                                    ? "border-indigo-500/30 dark:border-white/20 bg-white dark:bg-linear-to-b dark:from-zinc-900 dark:to-zinc-950 shadow-xl dark:shadow-[0_0_40px_rgba(255,255,255,0.08)] ring-1 ring-indigo-500/20 dark:ring-0"
                                    : "border-gray-200 dark:border-white/10 bg-white/70 dark:bg-black hover:border-gray-300 dark:hover:border-white/20 shadow-sm dark:shadow-none"
                                }`}>
                            {/* Plan Header */}
                            <div className="flex items-start justify-between">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    {plan.name}
                                </h3>

                                <div>
                                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                                        $
                                        {billing === "monthly"
                                            ? plan.monthly
                                            : plan.yearly}
                                    </span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        /month
                                    </span>
                                </div>
                            </div>

                            <p className="mt-8 text-gray-600 dark:text-gray-300">
                                Start building your insights hub:
                            </p>

                            {/* Features List */}
                            <ul className="mt-6 space-y-4">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-indigo-50 text-indigo-600 dark:bg-zinc-800 dark:text-gray-200">
                                            <Check size={12} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Action Button */}
                            <Link href={'/plan'}>
                                <button
                                    type="button"
                                    className={`mt-10 flex w-full items-center justify-between rounded-xl px-5 py-4 font-medium transition cursor-pointer ${plan.featured
                                        ? "bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 shadow-md"
                                        : "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
                                        }`}>
                                    Choose This Plan
                                    <ArrowRight size={18} />
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
