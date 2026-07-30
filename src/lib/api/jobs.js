import { ServerFetch } from "../core/server";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getCompanyJobs = async (companyId, status) => { 
    console.log(`Fetching jobs for companyId: ${companyId} with status: ${status}`);
    
    const res = await fetch(`${baseUrl}/api/jobs?companyId=${companyId}&status=${status}`);
    return await res.json();  
}


export const getJobs = async (queryString) => {
    return ServerFetch(`/api/jobs?${queryString}`);
}   


export const getJobById = async (id) => {
    return ServerFetch(`/api/jobs/${id}`);
}

