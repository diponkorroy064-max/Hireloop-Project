"use client";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";


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
        <section className="bg-black py-24 text-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[4px] text-gray-400">
                        <span className="h-0.5 w-4 bg-indigo-500" />
                        Pricing
                        <span className="h-0.5 w-4 bg-indigo-500" />
                    </div>

                    <h2 className="mt-6 text-4xl font-bold md:text-6xl">
                        Pay for the leverage,
                        <br />
                        not the listings
                    </h2>
                </div>

                
                {/* Toggle */}
                <div className="mt-10 flex justify-center">
                    <div className="flex items-center rounded-full bg-zinc-800 p-1">
                        <button
                            onClick={() => setBilling("monthly")}
                            className={`rounded-full px-5 py-2 text-sm transition ${billing === "monthly"
                                ? "bg-white text-black cursor-pointer"
                                : "text-gray-400 cursor-pointer"
                                }`}>
                            Monthly
                        </button>

                        <button
                            onClick={() => setBilling("yearly")}
                            className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm transition ${billing === "yearly"
                                    ? "bg-white text-black"
                                    : "text-gray-400"
                                }`}>
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
                                    ? "border-white/20 bg-linear-to-b from-zinc-900 to-zinc-950 shadow-[0_0_40px_rgba(255,255,255,0.08)]"
                                    : "border-white/10 bg-black hover:border-white/20"
                                }`}>
                            {/* Plan Header */}
                            <div className="flex items-start justify-between">
                                <h3 className="text-2xl font-semibold">{plan.name}</h3>

                                <div>
                                    <span className="text-5xl font-bold">
                                        $
                                        {billing === "monthly"
                                            ? plan.monthly
                                            : plan.yearly}
                                    </span>
                                    <span className="text-sm text-gray-400">
                                        /month
                                    </span>
                                </div>
                            </div>

                            <p className="mt-8 text-gray-300">
                                Start building your insights hub:
                            </p>

                            {/* Features */}
                            <ul className="mt-6 space-y-4">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-3 text-gray-400"
                                    >
                                        <div className="flex h-5 w-5 items-center justify-center rounded bg-zinc-800">
                                            <Check size={12} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            
                            {/* Button */}
                            <button
                                className={`mt-10 flex w-full items-center justify-between rounded-xl px-5 py-4 font-medium transition ${plan.featured
                                        ? "bg-white text-black hover:bg-gray-200"
                                        : "bg-zinc-800 hover:bg-zinc-700"
                                    }`}>
                                Choose This Plan
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default PricingSection;

