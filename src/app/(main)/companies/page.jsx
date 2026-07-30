import CompanyClient from "@/components/CompanyClient";
import { getCompanies } from "@/lib/api/companies";
import React from 'react';


export default async function CompaniesPage() {
    const companies = await getCompanies();
    // console.log("Fetched companies:", companies);

    if (!companies) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-red-400">
                <p>Unable to load companies. Please try logging in again or refresh.</p>
            </div>
        );
    }
    
    return (
        <CompanyClient allCompanies={companies}></CompanyClient>
    );
}

