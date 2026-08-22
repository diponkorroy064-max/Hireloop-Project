import { protectedFetch, ServerFetch } from "../core/server";
import { getUserSession } from "../core/session";


export const getRecruiterCompany = async (recruiterId) => {
    return ServerFetch(`/api/companies/my?recruiterId=${recruiterId}`);
};


export const getLoggedInRecruiterCompany = async () => {
    const user = await getUserSession();
    // console.log('user', user);
    const recruiterComany = await getRecruiterCompany(user?.id);
    // console.log('recruiter company', recruiterComany);
    return recruiterComany;
};


export const getCompanies = async () => {
    return ServerFetch(`/api/companies`);
    // return protectedFetch(`/api/companies`);
    // return protectedFetch(`/api/companies2`);
};


