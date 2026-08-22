"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Bell,
    Bookmark,
    Briefcase,
    CreditCard,
    Envelope,
    FileText,
    Gear,
    House,
    LayoutSideContent,
    Magnifier,
    Person
} from "@gravity-ui/icons";
import { Building, Users } from "lucide-react";
import { Button, Drawer } from "@heroui/react";

export default function DashboardSidebarClient({ role }) {
    const pathname = usePathname();

    const recruiterNavLinks = [
        { icon: House, href: "/dashboard/recruiter", label: "Home" },
        { icon: Magnifier, href: "/dashboard/recruiter/jobs", label: "Jobs" },
        { icon: Bell, href: "/dashboard/recruiter/new", label: "Post A Job" },
        { icon: Briefcase, href: "/dashboard/recruiter/company", label: "Company Profile" },
        { icon: Envelope, href: "/dashboard/recruiter/messages", label: "Messages" },
        { icon: Gear, href: "/dashboard/recruiter/settings", label: "Settings" },
    ];

    const seekerNavLinks = [
        { icon: House, href: "/dashboard/seeker", label: "Dashboard" },
        { icon: Magnifier, href: "/dashboard/seeker/jobs", label: "Jobs" },
        { icon: Bookmark, href: "/dashboard/seeker/saved-jobs", label: "Saved Jobs" },
        { icon: FileText, href: "/dashboard/seeker/applications", label: "Applications" },
        { icon: CreditCard, href: "/dashboard/seeker/billing", label: "Billing" },
        { icon: Person, href: "/dashboard/seeker/profile", label: "Profile" },
        { icon: Gear, href: "/dashboard/seeker/settings", label: "Settings" },
    ];

    const adminNavLinks = [
        { icon: House, href: "/dashboard/admin", label: "Dashboard" },
        { icon: Users, href: "/dashboard/admin/users", label: "Users" },
        { icon: Building, href: "/dashboard/admin/companies", label: "Companies" },
        { icon: Briefcase, href: "/dashboard/admin/jobs", label: "Jobs" },
        { icon: CreditCard, href: "/dashboard/admin/payments", label: "Payments" },
        { icon: Gear, href: "/dashboard/admin/settings", label: "Settings" },
    ];

    const navLinksMap = {
        recruiter: recruiterNavLinks,
        seeker: seekerNavLinks,
        admin: adminNavLinks,
    };

    const navItems = navLinksMap[role] || seekerNavLinks;

    const navContent = (
        <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
                const isActive = item.href === `/dashboard/${role}`
                    ? pathname === item.href
                    : pathname.startsWith(item.href);

                return (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${isActive
                                ? "bg-blue-600 text-white shadow-md shadow-blue-600/20 dark:bg-blue-600 dark:text-white"
                                : "text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-900/80 hover:text-slate-900 dark:hover:text-white"
                            }`}>
                        <item.icon
                            className={`size-4.5 ${isActive
                                    ? "text-white"
                                    : "text-slate-400 dark:text-zinc-400 group-hover:text-slate-900 dark:group-hover:text-white"
                                }`}
                        />
                        <span>{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );


    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex w-72 flex-col bg-white dark:bg-zinc-950 border-r border-slate-200/80 dark:border-zinc-800/80 p-4 transition-colors duration-300">
                {navContent}
            </aside>

            {/* Mobile Drawer Trigger */}
            <div className="lg:hidden p-3">
                <Drawer>
                    <Button
                        isIconOnly
                        variant="light"
                        className="text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-900">
                        <LayoutSideContent className="size-5" />
                    </Button>

                    <Drawer.Backdrop />

                    <Drawer.Content placement="left">
                        <Drawer.Dialog className="bg-white dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 border-r border-slate-200/80 dark:border-zinc-800/80">
                            <Drawer.CloseTrigger />

                            <Drawer.Header>
                                <Drawer.Heading className="text-lg font-semibold text-slate-900 dark:text-white">
                                    Navigation
                                </Drawer.Heading>
                            </Drawer.Header>

                            <Drawer.Body className="px-3 py-2">
                                {navContent}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer>
            </div>
        </>
    );
}
