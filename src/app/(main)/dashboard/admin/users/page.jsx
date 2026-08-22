"use client";
import { getUsers } from "@/lib/api/users";
import { Users, UserCheck, UserX, UserPlus, Search, Download } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
    {
        title: "Total Active Users",
        value: "12,842",
        change: "+12% vs last month",
        color: "text-emerald-600 dark:text-green-500",
        icon: Users,
    },
    {
        title: "Recruiter Growth",
        value: "843",
        change: "High demand",
        color: "text-emerald-600 dark:text-green-500",
        icon: UserCheck,
    },
    {
        title: "Suspended Accounts",
        value: "124",
        change: "0.8% of total",
        color: "text-slate-500 dark:text-gray-400",
        icon: UserX,
    },
    {
        title: "New Signups (24h)",
        value: "42",
        change: "Steady activity",
        color: "text-amber-600 dark:text-yellow-500",
        icon: UserPlus,
    },
];

const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;

    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    }).format(date);
};

export default function AdminUsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("All Roles");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await getUsers();
                setUsers(res || []);
            } catch (error) {
                console.error("Failed to fetch users:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    // Filter users dynamically by Search (Name or Email) and Role
    const filteredUsers = users.filter((user) => {
        const query = search.toLowerCase();
        const matchesName = user?.name?.toLowerCase().includes(query) || false;
        const matchesEmail = user?.email?.toLowerCase().includes(query) || false;
        const matchesSearch = matchesName || matchesEmail;

        const matchesRole =
            roleFilter === "All Roles" ||
            user?.role?.toLowerCase() === roleFilter.toLowerCase();

        return matchesSearch && matchesRole;
    });

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-white p-6 transition-colors duration-300">
            {/* --Header-- */}
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
                    <p className="text-slate-500 dark:text-gray-400 mt-1">
                        Monitor, filter and manage platform users.
                    </p>
                </div>

                <div className="flex gap-3">
                    <select
                        value={roleFilter}
                        onChange={(e) => setRoleFilter(e.target.value)}
                        className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-lg px-4 py-2 text-sm text-slate-700 dark:text-gray-200 shadow-sm focus:outline-none transition-colors">
                        <option value="All Roles">All Roles</option>
                        <option value="Admin">Admin</option>
                        <option value="Recruiter">Recruiter</option>
                        <option value="Seeker">Seeker</option>
                    </select>

                    <button className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-gray-200 transition-colors shadow-sm text-sm">
                        <Download size={18} /> Export List
                    </button>
                </div>
            </div>

            {/* --Stats-- */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
                {stats.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index}
                            className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm dark:shadow-none transition-colors">
                            <div className="flex justify-between mb-5">
                                <div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-gray-400">
                                        {item.title}
                                    </p>
                                    <h2 className="text-3xl font-bold mt-1 text-slate-900 dark:text-white">
                                        {item.value}
                                    </h2>
                                </div>

                                <div className="w-11 h-11 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-gray-200 flex items-center justify-center">
                                    <Icon size={20} />
                                </div>
                            </div>
                            <p className={`text-sm font-medium ${item.color}`}>{item.change}</p>
                        </div>
                    );
                })}
            </div>

            {/* --Search-- */}
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl p-4 mb-5 shadow-sm dark:shadow-none transition-colors">
                <div className="relative max-w-sm">
                    <Search size={18} className="absolute left-3 top-3 text-slate-400 dark:text-gray-500" />

                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by name or email..."
                        className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-zinc-700 transition-colors"
                    />
                </div>
            </div>

            {/* --Table-- */}
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl shadow-sm dark:shadow-none overflow-hidden transition-colors">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-slate-50 dark:bg-zinc-950 text-slate-600 dark:text-gray-400 border-b border-slate-200 dark:border-zinc-800">
                            <tr>
                                <th className="text-left px-6 py-4 font-semibold">Users</th>
                                <th className="text-left px-6 py-4 font-semibold">Email Address</th>
                                <th className="text-left px-6 py-4 font-semibold">Role</th>
                                <th className="text-left px-6 py-4 font-semibold">Join Date</th>
                                <th className="text-left px-6 py-4 font-semibold">Status</th>
                                <th className="text-right px-6 py-4 font-semibold">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/60">
                            {loading ? (
                                <tr>
                                    <td colSpan={6} className="text-center py-8 text-slate-500 dark:text-gray-400">
                                        Loading users...
                                    </td>
                                </tr>
                            ) : filteredUsers.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="text-center py-8 text-slate-500 dark:text-gray-400">
                                        No users found matching {search}
                                    </td>
                                </tr>
                            ) : (
                                filteredUsers.map((user, index) => (
                                    <tr
                                        key={user._id || user.id || index}
                                        className="hover:bg-slate-50 dark:hover:bg-zinc-800/40 transition-colors"
                                    >
                                        <td className="px-6 py-5 font-medium text-slate-900 dark:text-white">
                                            {user.name}
                                        </td>

                                        <td className="px-6 py-5 text-slate-500 dark:text-gray-400">
                                            {user.email}
                                        </td>

                                        <td className="px-6 py-5">
                                            <span
                                                className={`inline-flex items-center text-xs px-3 py-1 rounded-full font-semibold capitalize border transition-colors ${user.role?.toLowerCase() === "admin"
                                                    ? "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800/60"
                                                    : user.role?.toLowerCase() === "recruiter"
                                                        ? "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800/60"
                                                        : "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/60"
                                                    }`}>
                                                {user.role}
                                            </span>
                                        </td>

                                        <td className="px-6 py-5 text-slate-500 dark:text-gray-400 whitespace-nowrap">
                                            {formatDate(user.joined || user.createdAt)}
                                        </td>

                                        <td className="px-6 py-5">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${user.status === "Active"
                                                    ? "bg-emerald-100 text-emerald-700 dark:bg-green-900/40 dark:text-green-400"
                                                    : "bg-rose-100 text-rose-700 dark:bg-red-900/40 dark:text-red-400"
                                                    }`}>
                                                {user.status || "Pending"}
                                            </span>
                                        </td>

                                        <td className="px-6 py-5">
                                            <div className="flex justify-end items-center gap-3">
                                                {user.status === "Active" ? (
                                                    <>
                                                        <button className="text-amber-600 hover:text-amber-700 dark:text-yellow-400 dark:hover:text-yellow-300 text-sm font-medium transition-colors">
                                                            Suspend
                                                        </button>

                                                        <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium transition-colors">
                                                            Make Admin
                                                        </button>
                                                    </>
                                                ) : (
                                                    <button className="text-emerald-600 hover:text-emerald-700 dark:text-green-400 dark:hover:text-green-300 text-sm font-medium transition-colors">
                                                        Activate
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* --Footer-- */}
                <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 border-t border-slate-200 dark:border-zinc-800">
                    <p className="text-sm text-slate-500 dark:text-gray-400">
                        Showing {filteredUsers.length} of {users.length} users
                    </p>

                    <div className="flex gap-2 mt-3 md:mt-0">
                        <button className="w-8 h-8 rounded bg-slate-900 dark:bg-white text-white dark:text-black font-medium text-xs shadow-sm">
                            1
                        </button>
                        <button className="w-8 h-8 rounded bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-zinc-700 text-xs transition-colors">
                            2
                        </button>
                        <button className="w-8 h-8 rounded bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-zinc-700 text-xs transition-colors">
                            3
                        </button>
                        <button className="w-8 h-8 rounded bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-zinc-700 text-xs transition-colors">
                            ...
                        </button>
                        <button className="w-8 h-8 rounded bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-zinc-700 text-xs transition-colors">
                            128
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
