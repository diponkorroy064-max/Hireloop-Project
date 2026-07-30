"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Bookmark, Briefcase, CreditCard, Envelope, FileText, Gear, House, LayoutSideContent, Magnifier, Person} from "@gravity-ui/icons";
import { Building, Users } from "lucide-react";
import { Button, Drawer } from "@heroui/react";


export default function DashboardSidebarClient({ role }) {
    const pathname = usePathname();

    const recruiterNavLinks = [
        { icon: House, href: "/dashboard/recruiter", label: "Home" },
        { icon: Magnifier, href: "/dashboard/recruiter/jobs", label: "Jobs" },
        { icon: Bell, href: "/dashboard/recruiter/jobs/new", label: "Post A Job" },
        { icon: Briefcase, href: "/dashboard/recruiter/company", label: "Company Profile" },
        { icon: Envelope, href: "/messages", label: "Messages" },
        { icon: Person, href: "/profile", label: "Profile" },
        { icon: Gear, href: "/settings", label: "Settings" },
    ];
    const seekerNavLinks = [
        { icon: House, href: "/dashboard/seeker", label: "Dashboard" },
        { icon: Magnifier, href: "/dashboard/seeker/jobs", label: "Jobs" },
        { icon: Bookmark, href: "/dashboard/seeker/saved-jobs", label: "Saved Jobs" },
        { icon: FileText, href: "/dashboard/seeker/applications", label: "Applications" },
        { icon: CreditCard, href: "/dashboard/seeker/billing", label: "Billing" },
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
        <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
                const isActive = item.href === `/dashboard/${role}` ? pathname === item.href : pathname.startsWith(item.href);
                console.log(`Checking if ${item.href} is active for role ${role}:`, isActive);

                return (
                    <Link  key={item.label}  href={item.href}
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${isActive ? "bg-white text-black font-semibold shadow" : "text-gray-400 hover:bg-zinc-800 hover:text-white"}`}>
                        
                        <item.icon className={`size-5 ${isActive ? "text-black" : "text-gray-400"}`}/>

                        <span>{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );


    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex w-72 flex-col bg-[#151515] border-r border-white/10 p-5">
                {navContent}
            </aside>

            {/* Mobile Drawer */}
            <Drawer>
                <Button
                    isIconOnly
                    className="lg:hidden"
                    variant="light">
                    <LayoutSideContent />
                </Button>

                <Drawer.Backdrop />

                <Drawer.Content placement="left">
                    <Drawer.Dialog className="bg-[#151515] text-white">
                        <Drawer.CloseTrigger />

                        <Drawer.Header>
                            <Drawer.Heading className="text-xl">
                                Navigation
                            </Drawer.Heading>
                        </Drawer.Header>

                        <Drawer.Body>{navContent}</Drawer.Body>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer>
        </>
    );
}


