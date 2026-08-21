"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, BadgeCheck, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";


// Animation Variants---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const CompanyClient = ({ allCompanies }) => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const res = allCompanies;
                setCompanies(res || []);
            } catch (error) {
                console.error("Failed to load companies:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCompanies();
    }, [allCompanies]);

    const filteredCompanies = companies.filter((company) => {
        const keyword = search.toLowerCase();
        return (
            company.name?.toLowerCase().includes(keyword) ||
            company.industry?.toLowerCase().includes(keyword) ||
            company.location?.toLowerCase().includes(keyword)
        );
    });

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white p-6 transition-colors duration-300">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-8">
                <h1 className="text-4xl font-bold tracking-tight">Browse Companies</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-3xl">
                    Discover leading companies across different industries and find your next career opportunity.
                </p>
            </motion.div>

            {/* Search Section */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-5 mb-8 shadow-sm dark:shadow-none transition-colors duration-300">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-3.5 text-gray-400 dark:text-zinc-500" size={18} />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by company, industry or location..."
                            className="w-full bg-gray-50 dark:bg-zinc-950 border border-gray-300 dark:border-zinc-800 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-purple-500 dark:focus:border-purple-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 transition-all duration-200"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Company Cards Grid */}
            {loading ? (
                <div className="col-span-full text-center py-20 text-gray-500 dark:text-gray-400">
                    Loading companies...
                </div>
            ) : filteredCompanies.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full text-center py-20 text-gray-500 dark:text-gray-400"
                >
                    No companies found matching your search criteria.
                </motion.div>
            ) : (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredCompanies.map((company) => (
                            <motion.div
                                key={company._id}
                                variants={cardVariants}
                                layout
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md dark:shadow-none dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between">
                                <div>
                                    {/* Top / Logo & Status */}
                                    <div className="flex justify-between items-start mb-5">
                                        <div className="w-14 h-14 rounded-xl bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700/50 flex items-center justify-center p-2">
                                            {company?.logo ? (
                                                <Image
                                                    src={company.logo}
                                                    alt={company?.name || "Company"}
                                                    width={40}
                                                    height={40}
                                                    className="object-contain w-full h-full"
                                                />
                                            ) : (
                                                <span className="text-xl font-bold text-gray-400 dark:text-zinc-500">
                                                    {company?.name?.charAt(0) || "C"}
                                                </span>
                                            )}
                                        </div>

                                        {company?.verified && (
                                            <div className="flex items-center gap-1 bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400 text-xs font-medium px-2.5 py-1 rounded-full border border-green-500/20">
                                                <BadgeCheck size={14} />
                                                Verified
                                            </div>
                                        )}
                                    </div>

                                    {/* Info */}
                                    <div className="flex justify-between items-center gap-2">
                                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white truncate">
                                            {company?.name}
                                        </h2>
                                        <span className="text-gray-400 dark:text-zinc-500 text-sm truncate max-w-35">
                                            {company?.websiteUrl}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 dark:text-zinc-400 text-sm mt-3 line-clamp-3">
                                        {company?.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-5">
                                        {company?.industry && (
                                            <span className="bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 px-3 py-1 rounded-full text-sm font-medium">
                                                {company.industry}
                                            </span>
                                        )}
                                        {company?.location && (
                                            <span className="flex items-center gap-1 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 px-3 py-1 rounded-full text-sm font-medium">
                                                <MapPin size={14} className="text-purple-600 dark:text-purple-400" />
                                                {company.location}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="flex justify-between items-center mt-8 pt-5 border-t border-gray-100 dark:border-zinc-800/80">
                                    <div>
                                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{company?.jobs ?? 0}</p>
                                        <p className="text-xs text-gray-500 dark:text-zinc-500">Active Jobs</p>
                                    </div>

                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        className="group flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm cursor-pointer transition-colors">
                                        View Openings
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            )}

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-12">
                <button className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
                    <ChevronLeft size={18} />
                </button>

                <button className="w-10 h-10 rounded-xl bg-purple-600 dark:bg-white text-white dark:text-black font-semibold shadow-sm">
                    1
                </button>

                <button className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
                    2
                </button>

                <button className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
                    3
                </button>

                <span className="px-2 text-gray-400 dark:text-zinc-600">...</span>

                <button className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
                    12
                </button>

                <button className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
                    ChevronRight
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
};

export default CompanyClient;
