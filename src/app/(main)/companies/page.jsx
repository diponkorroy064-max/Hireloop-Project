import CompanyClient from "@/components/CompanyClient";
import { getCompanies } from "@/lib/api/companies";
import React from "react";


export default async function CompaniesPage() {
    const companies = await getCompanies();
    // console.log("Fetched companies:", companies);

    if (!companies) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-zinc-950 text-red-500 dark:text-red-400 p-6 text-center transition-colors duration-300">
                <div className="bg-white dark:bg-zinc-900 border border-red-200 dark:border-red-900/50 p-6 rounded-2xl shadow-sm dark:shadow-none max-w-md">
                    <p className="font-medium">
                        Unable to load companies. Please try logging in again or refresh.
                    </p>
                </div>
            </div>
        );
    }

    return <CompanyClient allCompanies={companies} />;
}
