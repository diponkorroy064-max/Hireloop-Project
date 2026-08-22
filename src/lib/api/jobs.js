import { ServerFetch } from "../core/server";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// export const getCompanyJobs = async (companyId, status) => { 
//     console.log(`Fetching jobs for companyId: ${companyId} with status: ${status}`);
    
//     const res = await fetch(`${baseUrl}/api/jobs?companyId=${companyId}&status=${status}`);
   
//     const companyJobs = await res.json();
//     console.log('get company jobs', companyJobs);
//     return companyJobs;
// }


export const getJobs = async (queryString) => {
    return ServerFetch(`/api/jobs?${queryString}`);
}   

export const getRecruiterJobs = async (companyId) => {
    if (!companyId) return [];
    const data = await ServerFetch(`/api/jobs/company/${companyId}`);
    // console.log('data from getRecruiterJobs api', data);
    return data || [];
};



export const getJobById = async (id) => {
    return ServerFetch(`/api/jobs/${id}`);
}

