"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AboutCTA = () => {
    return (
        <section className="px-6 py-24 bg-zinc-900/40">
            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-indigo-500/20 bg-indigo-600 px-8 py-16 text-center"
            >
                <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

                <div className="relative">
                    <h2 className="text-3xl font-bold md:text-4xl">
                        Ready To Take The Next Step?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-indigo-100">
                        Whether you are looking for your next opportunity or
                        searching for exceptional talent, HireLoop is here to
                        help.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            href="/jobs"
                            className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-600 transition hover:bg-zinc-100"
                        >
                            Find Jobs
                            <ArrowRight size={18} />
                        </Link>

                        <Link
                            href="/signup"
                            className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                        >
                            Create Account
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutCTA;
