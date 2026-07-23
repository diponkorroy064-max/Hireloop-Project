import CompanyClient from "@/components/CompanyClient";
import { getCompanies } from "@/lib/api/companies";
import React from 'react';

export default async function CompaniesPage() {
    const comanies = await getCompanies();
    
    return (
        <CompanyClient allCompanies={comanies}></CompanyClient>
    );
}

