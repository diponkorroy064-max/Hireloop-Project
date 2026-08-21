"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How can I find a job on HireLoop?",
        answer:
            "You can browse available jobs, search by title or location, and use filters to find opportunities that match your skills.",
    },
    {
        question: "How can recruiters post jobs?",
        answer:
            "Recruiters can create an account, access their recruiter dashboard, create a company profile, and publish job opportunities.",
    },
    {
        question: "Can I track my job applications?",
        answer:
            "Yes. Job seekers can monitor their submitted applications from their dashboard.",
    },
    {
        question: "How can I contact HireLoop support?",
        answer:
            "You can contact our team using the contact form on this page.",
    },
];

export default function ContactFAQ() {
    return (
        <section className="mt-20">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Frequently Asked Questions
                </h2>

                <p className="mt-3 text-gray-600 dark:text-zinc-400">
                    Quick answers to some common questions.
                </p>
            </motion.div>

            <div className="mx-auto max-w-4xl space-y-3">

                {faqs.map((faq, index) => (
                    <motion.details
                        key={faq.question}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.08,
                        }}
                        className="group rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-5 shadow-sm dark:shadow-none transition-all duration-300 hover:border-indigo-500/40"
                    >
                        <summary className="cursor-pointer list-none font-medium text-gray-900 dark:text-white">
                            <div className="flex items-center justify-between">
                                <span className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {faq.question}
                                </span>

                                <ChevronDown
                                    size={18}
                                    className="text-gray-500 dark:text-zinc-400 transition-transform duration-300 group-open:rotate-180 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                                />
                            </div>
                        </summary>

                        <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-zinc-400 border-t border-gray-100 dark:border-zinc-800/60 pt-3">
                            {faq.answer}
                        </p>
                    </motion.details>
                ))}

            </div>

        </section>
    );
}
