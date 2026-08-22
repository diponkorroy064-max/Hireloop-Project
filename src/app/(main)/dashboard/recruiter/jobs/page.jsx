import { getLoggedInRecruiterCompany } from "@/lib/api/companies";
import RecruiterJobsClient from "./RecruiterJobsClient";
import { getRecruiterJobs } from "@/lib/api/jobs";


export default async function RecruiterJobsPage() {
    const company = await getLoggedInRecruiterCompany();
    // console.log('company from recruiter jobs page', company);

    // Safely extract string ID
    const companyId = company?._id?.toString?.() || company?._id;
    // console.log('companyId', companyId);

    const jobs = companyId ? await getRecruiterJobs(companyId) : [];
    // console.log('jobs from recruiter jobs page', jobs);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
            <RecruiterJobsClient jobs={Array.isArray(jobs) ? jobs : []} />
        </div>
    );
}


