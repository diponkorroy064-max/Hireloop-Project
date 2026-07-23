"use client";
import { Users, UserCheck, UserX, UserPlus, Search, Download } from "lucide-react";
// import { getUsers } from "@/lib/api/users";
// import { useEffect, useState } from "react";

const stats = [
    {
        title: "Total Active Users",
        value: "12,842",
        change: "+12% vs last month",
        color: "text-green-500",
        icon: Users,
    },
    {
        title: "Recruiter Growth",
        value: "843",
        change: "High demand",
        color: "text-green-500",
        icon: UserCheck,
    },
    {
        title: "Suspended Accounts",
        value: "124",
        change: "0.8% of total",
        color: "text-gray-400",
        icon: UserX,
    },
    {
        title: "New Signups (24h)",
        value: "42",
        change: "Steady activity",
        color: "text-yellow-500",
        icon: UserPlus,
    },
];

const users = [
    {
        name: "Jordan Davis",
        email: "jordan.davis@example.com",
        role: "Seeker",
        joined: "Oct 12, 2023",
        status: "Active",
    },
    {
        name: "Elena Rodriguez",
        email: "elena@creative.io",
        role: "Recruiter",
        joined: "Sep 28, 2023",
        status: "Active",
    },
    {
        name: "Marcus Webb",
        email: "m.webb@outlook.com",
        role: "Seeker",
        joined: "Aug 03, 2023",
        status: "Suspended",
    },
    {
        name: "Tom Hiddleston",
        email: "th@high-tech.com",
        role: "Recruiter",
        joined: "Nov 01, 2023",
        status: "Active",
    },
    {
        name: "Sarah Johnson",
        email: "sarah@mail.com",
        role: "Admin",
        joined: "Jan 14, 2024",
        status: "Active",
    },
];


export default function AdminUsersPage() {
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [search, setSearch] = useState("");
    // const [roleFilter, setRoleFilter] = useState("All");

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             const res = await getUsers();

    //             setUsers(res || []);
    //             console.log("Fetched users:", res);
    //         } catch (error) {
    //             console.error("Failed to fetch users:", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchUsers();
    // }, []);


    return (
        <div className="min-h-screen bg-zinc-950 text-white p-6">

            {/* --Header-- */}
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold">User Management</h1>
                    <p className="text-gray-400 mt-1">Monitor, filter and manage platform users.</p>
                </div>

                <div className="flex gap-3">
                    <select className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-sm">
                        <option>All Roles</option>
                        <option>Admin</option>
                        <option>Recruiter</option>
                        <option>Seeker</option>
                    </select>

                    <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200">
                        <Download size={18}/> Export List
                    </button>
                </div>
            </div>

            {/* --Stats-- */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
                {stats.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                            <div className="flex justify-between mb-5">
                                <div>
                                    <p className="text-sm text-gray-400">{item.title}</p>
                                    <h2 className="text-3xl font-bold mt-1">{item.value}</h2>
                                </div>

                                <div className="w-11 h-11 rounded-lg bg-zinc-800 flex items-center justify-center">
                                    <Icon size={20} />
                                </div>
                            </div>
                            <p className={`text-sm ${item.color}`}>{item.change}</p>
                        </div>
                    );
                })}
            </div>

            {/* --Search-- */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-5">
                <div className="relative max-w-sm">
                    <Search size={18} className="absolute left-3 top-3 text-gray-500"/>

                    <input
                        type="text"
                        // value={search}
                        // onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search users..."
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-2 focus:outline-none"
                    />
                </div>
            </div>

            {/* --Table-- */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">

                <div className="overflow-x-auto">
                    <table className="w-full">

                        <thead className="bg-zinc-950 text-gray-400 text-sm">
                            <tr>
                                <th className="text-left px-6 py-4">User Name</th>
                                <th className="text-left px-6 py-4">Email Address</th>
                                <th className="text-left px-6 py-4">Role</th>
                                <th className="text-left px-6 py-4">Join Date</th>
                                <th className="text-left px-6 py-4">Status</th>
                                <th className="text-right px-6 py-4">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} className="border-t border-zinc-800 hover:bg-zinc-800/40">
                                    <td className="px-6 py-5 font-medium">{user.name}</td>

                                    <td className="px-6 py-5 text-gray-400">{user.email}</td>

                                    <td className="px-6 py-5">
                                        <span className="bg-zinc-800 text-sm px-3 py-1 rounded-full">
                                            {user.role}
                                        </span>
                                    </td>

                                    <td className="px-6 py-5">{user.joined}</td>

                                    <td className="px-6 py-5">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${user.status === "Active" ? "bg-green-900/40 text-green-400" : "bg-red-900/40 text-red-400"}`}>
                                            {user.status}
                                        </span>
                                    </td>

                                    <td className="px-6 py-5">
                                        <div className="flex justify-end items-center gap-3">
                                            {user.status === "Active" ? (
                                                <>
                                                    <button className="text-yellow-400 hover:text-yellow-300 text-sm">
                                                        Suspend
                                                    </button>

                                                    <button className="text-blue-400 hover:text-blue-300 text-sm">
                                                        Make Admin
                                                    </button>
                                                </>
                                            ) : (
                                                <button className="text-green-400 hover:text-green-300 text-sm">
                                                    Activate
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* --Footer-- */}
                <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 border-t border-zinc-800">
                    <p className="text-sm text-gray-400">Showing 1-5 of 12,842 users</p>

                    <div className="flex gap-2 mt-3 md:mt-0">
                        <button className="w-8 h-8 rounded bg-white text-black">1</button>
                        <button className="w-8 h-8 rounded bg-zinc-800 hover:bg-zinc-700">2</button>
                        <button className="w-8 h-8 rounded bg-zinc-800 hover:bg-zinc-700">3</button>
                        <button className="w-8 h-8 rounded bg-zinc-800 hover:bg-zinc-700">...</button>
                        <button className="w-8 h-8 rounded bg-zinc-800 hover:bg-zinc-700">128</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

