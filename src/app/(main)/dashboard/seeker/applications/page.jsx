import { getApplicationsByApplicant } from '@/lib/api/applications';
import { getUserSession } from '@/lib/core/session';
import React from 'react';
import ApplicationsTable from './ApplicationTable';

const Applications = async () => {
    const user = await getUserSession();
    // console.log("seeker application user", user);
    const jobs = await getApplicationsByApplicant(user?.id);
    // console.log("seeker application jobs", jobs);

    return (
        <div>
            <ApplicationsTable jobs={jobs}></ApplicationsTable>
        </div>
    );
};

export default Applications;

