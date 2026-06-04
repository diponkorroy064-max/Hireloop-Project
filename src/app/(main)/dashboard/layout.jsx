import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import React from 'react';


const DashboardLayout = ({ children }) => {
    return (
        <div className='flex gap-5 min-h-screen container mx-auto'>
            <DashboardSidebar></DashboardSidebar>
            <div className="flex-1">{children}</div>
        </div>
    );
};

export default DashboardLayout;

