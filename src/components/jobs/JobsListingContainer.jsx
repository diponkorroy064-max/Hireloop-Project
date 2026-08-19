"use client";
import React, { useState, useEffect } from "react";
import JobCard from "@/components/jobs/JobCard";
import JobFilters from "@/components/jobs/JobFilters";
import { useRouter } from "next/navigation";
import { PaginationBasic } from "../pagination/PaginationBasic";


export default function JobListingContainer({ jobs, filters, total }) {
    const [searchQuery, setSearchQuery] = useState(filters.search);
    const [selectedType, setSelectedType] = useState(filters.jobType || "all");
    const [selectedCategory, setSelectedCategory] = useState(filters.jobCategory || "all");
    const [isRemoteOnly, setIsRemoteOnly] = useState(filters.isRemote || false);
    const router = useRouter();


    const [page, setPage] = useState(filters.page || 1);
    const totalItems = total;

    useEffect(() => {
        const sp = new URLSearchParams();
        if (searchQuery) {
            sp.set("search", searchQuery);
        }

        if (selectedType !== "all") {
            sp.set("jobType", selectedType);
        };

        if (selectedCategory !== "all") {
            sp.set("jobCategory", selectedCategory);
        }

        if (isRemoteOnly) {
            sp.set("isRemote", true);
        }
        // console.log("search params", sp.toString());

        if (page) {
            sp.set("page", page);
        }

        const path = `?${sp.toString()}`;
        router.push(path);
    }, [searchQuery, router, selectedCategory, isRemoteOnly, selectedType, page]);


    return (
        <>
            <JobFilters searchQuery={searchQuery} setSearchQuery={setSearchQuery} selectedType={selectedType} setSelectedType={setSelectedType} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} isRemoteOnly={isRemoteOnly} setIsRemoteOnly={setIsRemoteOnly} />


            <div className="max-w-7xl mx-auto mb-6 text-sm text-zinc-500">
                Showing {jobs?.length} position{jobs?.length !== 1 && "s"}
            </div>


            {jobs?.length > 0 ? (
                <>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-10">
                        {jobs.map((jobItem) => (
                            <JobCard key={jobItem._id?.$oid || jobItem._id} job={jobItem} />
                        ))}
                    </div>
                    
                    <PaginationBasic totalItems={totalItems} page={page} setPage={setPage} />
                </>
            ) : (
                <div className="text-center py-20 border border-dashed border-zinc-800 rounded-[32px] max-w-7xl mx-auto">
                    <p className="text-zinc-500 text-lg">No positions match your search criteria.</p>
                </div>
            )}
        </>
    );
}


