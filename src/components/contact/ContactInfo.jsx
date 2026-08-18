"use client";

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
                        className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 transition-colors hover:border-indigo-500/40"
                    >

                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10">
                            <Icon
                                size={20}
                                className="text-indigo-400"
                            />
                        </div>

                        <h3 className="font-semibold text-white">
                            {item.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-zinc-200">
                            {item.value}
                        </p>

                        <p className="mt-1 text-sm text-zinc-500">
                            {item.description}
                        </p>

                    </motion.div>
                );
            })}

        </div>
    );
}
