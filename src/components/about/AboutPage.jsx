"use client";
import React from "react";
import { motion } from "framer-motion";
import AboutCTA from "./AboutCTA";
import AboutFeatures from "./AboutFeatures";
import AboutHero from "./AboutHero";
import AboutHowItWorks from "./AboutHowItWorks";
import AboutMission from "./AboutMission";
import AboutStats from "./AboutStats";

// Framer motion container for staggered children animations
const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};


const AboutPage = () => {
    return (
        <main className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}>
                <AboutHero />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}>
                <AboutStats />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}>
                <AboutMission />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}>
                <AboutFeatures />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}>
                <AboutHowItWorks />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}>
                <AboutCTA />
            </motion.div>
        </main>
    );
};

export default AboutPage;
