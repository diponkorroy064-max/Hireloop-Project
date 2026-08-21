"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     subject: "",
    //     message: "",
    // });

    // const handleChange = (
    //     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    // ) => {
    //     const { name, value } = e.target;

    //     setFormData((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    // };

    // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();

    //     console.log("Contact form:", formData);

    //     setFormData({
    //         name: "",
    //         email: "",
    //         subject: "",
    //         message: "",
    //     });
    // };


    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 p-6 shadow-sm dark:shadow-none md:p-8 transition-colors duration-300">
            <div className="mb-7">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Send Us a Message
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-zinc-400">
                    Fill out the form below and we'll get back to you as soon
                    as possible.
                </p>
            </div>

            <form
                // onSubmit={handleSubmit}
                className="space-y-5">
                {/* Name + Email */}
                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-zinc-300">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            // value={formData.name}
                            // onChange={handleChange}
                            placeholder="Enter your name"
                            required
                            className="w-full rounded-xl border border-gray-300 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 outline-none transition focus:border-indigo-600 dark:focus:border-indigo-500 focus:ring-1 focus:ring-indigo-600 dark:focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-zinc-300">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            // value={formData.email}
                            // onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            className="w-full rounded-xl border border-gray-300 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 outline-none transition focus:border-indigo-600 dark:focus:border-indigo-500 focus:ring-1 focus:ring-indigo-600 dark:focus:ring-indigo-500"
                        />
                    </div>
                </div>

                {/* Subject */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-zinc-300">
                        Subject
                    </label>

                    <input
                        type="text"
                        name="subject"
                        // value={formData.subject}
                        // onChange={handleChange}
                        placeholder="What can we help you with?"
                        required
                        className="w-full rounded-xl border border-gray-300 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 outline-none transition focus:border-indigo-600 dark:focus:border-indigo-500 focus:ring-1 focus:ring-indigo-600 dark:focus:ring-indigo-500"
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-zinc-300">
                        Message
                    </label>

                    <textarea
                        name="message"
                        // value={formData.message}
                        // onChange={handleChange}
                        placeholder="Write your message..."
                        rows={6}
                        required
                        className="w-full resize-none rounded-xl border border-gray-300 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 outline-none transition focus:border-indigo-600 dark:focus:border-indigo-500 focus:ring-1 focus:ring-indigo-600 dark:focus:ring-indigo-500"
                    />
                </div>

                {/* Submit */}
                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white shadow-md hover:bg-indigo-500 dark:shadow-none transition-colors duration-200 cursor-pointer">
                    <Send size={17} />
                    Send Message
                </motion.button>
            </form>
        </motion.div>
    );
}
