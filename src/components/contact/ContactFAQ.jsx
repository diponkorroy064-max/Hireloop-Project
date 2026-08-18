"use client";

import { motion } from "framer-motion";

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
                className="mb-8 text-center"
            >
                <h2 className="text-3xl font-bold text-white">
                    Frequently Asked Questions
                </h2>

                <p className="mt-3 text-zinc-400">
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
                        className="group rounded-xl border border-zinc-800 bg-zinc-900/60 p-5"
                    >
                        <summary className="cursor-pointer list-none font-medium text-white">
                            <div className="flex items-center justify-between">
                                <span>{faq.question}</span>

                                <span className="text-xl text-zinc-500 transition group-open:rotate-45">
                                    +
                                </span>
                            </div>
                        </summary>

                        <p className="mt-4 text-sm leading-6 text-zinc-400">
                            {faq.answer}
                        </p>
                    </motion.details>
                ))}

            </div>

        </section>
    );
}
