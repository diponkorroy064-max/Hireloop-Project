"use client";
import { Search, Building2, MapPin, BadgeCheck, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import React from 'react';

const CompanyClient = ({ allCompanies }) => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const res = allCompanies;
                console.log("Fetched companies:", res);
                setCompanies(res || []);
            }
            catch (error) {
                console.error(error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchCompanies();
    }, []);

    const filteredCompanies = companies.filter((company) => {
        const keyword = search.toLowerCase();
        return (
            company.name?.toLowerCase().includes(keyword) ||
            company.industry?.toLowerCase().includes(keyword) ||
            company.location?.toLowerCase().includes(keyword)
        );
    });


    return (
        <div className="min-h-screen bg-zinc-950 text-white p-6">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold">Browse Companies</h1>

                <p className="text-gray-400 mt-2 max-w-3xl"> Discover leading companies across different industries and find your next career opportunity.</p>
            </div>

            {/* Search */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-3.5 text-gray-500" size={18} />

                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by company, industry or location..." className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-3 pl-11 pr-4 outline-none" />
                    </div>
                </div>
            </div>

            {/* Company Cards */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {loading ? (
                    <div className="col-span-full text-center py-20">
                        Loading companies...
                    </div>
                ) : filteredCompanies.length === 0 ? (
                    <div className="col-span-full text-center py-20 text-gray-400">
                        No companies found.
                    </div>
                ) : (
                    filteredCompanies.map((company) => (
                        <div key={company._id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition">

                            {/* Top */}
                            <div className="flex justify-between items-start mb-5">
                                <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center">
                                    <Image src={company?.logo} alt={company?.name} width={40} height={40} className="object-contain" />
                                </div>

                                {company?.verified && (
                                    <div className="flex items-center gap-1 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
                                        <BadgeCheck size={14} />
                                        Verified
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold">{company?.name}</h2>
                                <p className="text-gray-400 text-sm">{company?.websiteUrl}</p>
                            </div>
                            
                            <p className="text-gray-400 text-sm mt-3 line-clamp-3">{company?.description}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-5">
                                <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">{company?.industry}</span>

                                <span className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-full text-sm"><MapPin size={14} />{company?.location}</span>
                            </div>

                            {/* Footer */}
                            <div className="flex justify-between items-center mt-8 pt-5 border-t border-zinc-800">
                                <div>
                                    <p className="text-2xl font-bold">{company?.jobs}</p>
                                    <p className="text-xs text-gray-500">Active Jobs</p>
                                </div>

                                <button className="flex items-center gap-2 text-white hover:text-gray-300 font-medium cursor-pointer">
                                    View Openings
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>)
                    ))}
            </div>


            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-10">

                <button className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800">
                    <ChevronLeft size={18} />
                </button>

                <button className="w-10 h-10 rounded-lg bg-white text-black font-semibold">
                    1
                </button>

                <button className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800">
                    2
                </button>

                <button className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800">
                    3
                </button>

                <span className="px-2 text-gray-500">...</span>

                <button className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800">
                    12
                </button>

                <button className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800">
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
};
export default CompanyClient;

