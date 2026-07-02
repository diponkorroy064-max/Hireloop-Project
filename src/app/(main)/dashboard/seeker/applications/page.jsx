import { getApplicationsByApplicant } from '@/lib/api/applications';
import { getUserSession } from '@/lib/core/session';
import React from 'react';
import ApplicationsTable from './ApplicationTable';

const Applications = async () => {
    const user = await getUserSession();
    const jobs = await getApplicationsByApplicant(user?.id);
    // console.log("seeker application jobs", jobs);
    // console.log("seeker application user", user);

    return (
        <div>
            <ApplicationsTable jobs={jobs}></ApplicationsTable>
        </div>
    );
};

export default Applications;

