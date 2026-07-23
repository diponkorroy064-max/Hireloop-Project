import { getUserSession } from "@/lib/core/session";
import React from 'react';
import DashboardSidebarClient from "./DashboardSidebarClient";

const DashboardSidebar = async () => {
    const user = await getUserSession();
    // console.log("User role in DashboardSidebar:", user?.role);
    
    return (
        <DashboardSidebarClient role={user?.role || "seeker"} />
    );
};
export default DashboardSidebar;
