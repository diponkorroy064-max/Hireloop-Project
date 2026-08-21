"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Mail,
    MapPin,
    Phone,
    Clock,
} from "lucide-react";

const contactItems = [
    {
        icon: Mail,
        title: "Email Us",
        value: "support@hireloop.com",
        description: "Send us an email anytime",
    },
    {
        icon: Phone,
        title: "Call Us",
        value: "+880 1XXX-XXXXXX",
        description: "Mon - Fri, 9:00 AM - 6:00 PM",
    },
    {
        icon: MapPin,
        title: "Our Location",
        value: "Dhaka, Bangladesh",
        description: "Our main office",
    },
    {
        icon: Clock,
        title: "Working Hours",
        value: "09:00 AM - 06:00 PM",
        description: "Monday - Friday",
    },
];

export default function ContactInfo() {
    return (
        <div className="grid gap-4 sm:grid-cols-2">

            {contactItems.map((item, index) => {
                const Icon = item.icon;

                return (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1,
                        }}
                        whileHover={{ y: -5 }}
                        className="group rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 p-6 shadow-sm dark:shadow-none transition-all duration-300 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:shadow-md dark:hover:shadow-indigo-500/10 cursor-pointer"
                    >

                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-500/10 transition-colors duration-300 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/40">
                            <Icon
                                size={20}
                                className="text-indigo-600 dark:text-indigo-400 transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>

                        <h3 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                            {item.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-gray-800 dark:text-zinc-200">
                            {item.value}
                        </p>

                        <p className="mt-1 text-sm text-gray-500 dark:text-zinc-400">
                            {item.description}
                        </p>

                    </motion.div>
                );
            })}

        </div>
    );
}
