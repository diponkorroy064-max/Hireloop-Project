import CompanyTable from '@/components/dashboard/CompanyTable';
import { getCompanies } from '@/lib/api/companies';
import React from 'react';


const AdminCompaniesPage = async () => {
    const companies = (await getCompanies()) || [];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0d0d0f] text-slate-900 dark:text-neutral-100 transition-colors duration-300 p-4 md:p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm dark:shadow-none transition-colors">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-neutral-200">
                        Companies for review
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-neutral-400 mt-1 font-medium">
                        Total items submitted: <span className="text-slate-900 dark:text-white font-semibold">{companies.length}</span>
                    </p>
                </div>

                {/* Direct Table Component */}
                <CompanyTable companies={companies} />
            </div>
        </div>
    );
};

export default AdminCompaniesPage;
