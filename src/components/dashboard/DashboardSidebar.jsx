import { Bars, Bell, Briefcase, Envelope, Gear, House, LayoutSideContent, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from '@heroui/react';
import Link from "next/link";
import React from 'react';


const DashboardSidebar = () => {
    const navItems = [
        { icon: House, href: "/dashboard/recruiter", label: "Home" },
        { icon: Magnifier, href: "/dashboard/recruiter/jobs", label: "Jobs"},
        { icon: Bell, href: "/dashboard/recruiter/jobs/new", label: "Create a Jobs"},
        { icon: Envelope, href: "/dashboard/recruiter/messages", label: "Messages" },
        { icon: Briefcase, href: "/dashboard/recruiter/company", label: "Company" },
        { icon: Person, href: "/dashboard/recruiter/profile", label: "Profile" },
        { icon: Gear, href: "/dashboard/recruiter/settings", label: "Settings" },
    ];

    const navContent = <nav className="flex flex-col gap-1 text-white">
        {navItems.map((item) => (
            <Link
                key={item.label}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-default text-white" href={item.href}>
                <item.icon className="size-5 text-muted" />
                {item.label}
            </Link>
        ))}
    </nav>

    
    return (
        <>
            <aside className="hidden lg:flex w-70 flex-col gap-5 rounded-none border border-white/10 bg-[#151515]/95 p-5">
                {navContent}
            </aside>

            <Drawer>
                <Button className="lg:hidden" variant="secondary">
                    <LayoutSideContent />
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading className="text-white">Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {navContent}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
};

export default DashboardSidebar;
