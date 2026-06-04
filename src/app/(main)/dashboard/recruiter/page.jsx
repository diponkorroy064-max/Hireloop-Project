'use client';
import { authClient } from '@/lib/auth-client';
import React from 'react';
import DashboardStats from '@/components/dashboard/DashboardStats';
import { Briefcase, Persons, ChartAreaStacked, Link } from '@gravity-ui/icons';


const RecruiterDashboardPage = () => {
    const { data, isPending } = authClient.useSession();
    // console.log("data from Recruiter Dashboard", data);
    const user = data?.user;
    console.log("user in Recruiter Dashboard", user);

    if (isPending) {
        return <p>Loading...</p>;
    }

    const RecruiterStatsData = [
        {
            title: "Total Job Posts",
            value: "48",
            icon: Briefcase,
        },
        {
            title: "Total Applicants",
            value: "1,284",
            icon: Persons,
        },
        {
            title: "Active Jobs",
            value: "18",
            icon: ChartAreaStacked,
        },
        {
            title: "Jobs Closed",
            value: "32",
            icon: Link,
        },
    ];


    return (
        <div>
            <p className='text-2xl font-bold mt-4'>Welcome Back, {user?.name} !</p>
            <DashboardStats RecruiterStatsData={RecruiterStatsData}></DashboardStats>
        </div>
    );
};

export default RecruiterDashboardPage;

