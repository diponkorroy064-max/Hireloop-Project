import React from 'react';
import PostJobForm from './PostJobForm';
import { getLoggedInRecruiterCompany } from '@/lib/api/companies';


const NewJobPage = async () => {

    const company = await getLoggedInRecruiterCompany();
    console.log("Company data in NewJobPage:", company);

    return (
        <div>
            <PostJobForm company={company}></PostJobForm>
        </div>
    );
};

export default NewJobPage;

