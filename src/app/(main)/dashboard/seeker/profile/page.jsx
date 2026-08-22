import React from 'react';
import { Mail, Phone, MapPin, Briefcase, Linkedin, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { LiaLinkedin } from 'react-icons/lia';
import Image from 'next/image';

export default function SeekerProfile() {
    const activeJobs = [
        {
            id: 1,
            title: "Senior Full Stack Engineer",
            type: "Full-time",
            location: "Remote / New York, NY",
            department: "Engineering",
            applicants: 42,
            posted: "2 days ago",
        },
        {
            id: 2,
            title: "Lead Product Designer",
            type: "Full-time",
            location: "Hybrid (San Francisco, CA)",
            department: "Design",
            applicants: 19,
            posted: "5 days ago",
        },
        {
            id: 3,
            title: "Backend Developer (Node.js)",
            type: "Contract",
            location: "Remote",
            department: "Engineering",
            applicants: 31,
            posted: "1 week ago",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-5xl mx-auto space-y-6">

                {/* Header Card */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors">
                    <div className="h-32 bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-600 dark:from-indigo-950 dark:via-blue-900 dark:to-cyan-900"></div>
                    <div className="px-6 pb-6 pt-0 relative">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-16 sm:-mt-12 gap-4">
                            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 text-center sm:text-left">
                                <Image width={200} height={200}
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                                    alt="Recruiter profile"
                                    className="w-28 h-28 rounded-full border-4 border-white dark:border-slate-900 shadow-md object-cover bg-white dark:bg-slate-900"
                                />
                                <div className="sm:mb-1">
                                    <div className="flex items-center justify-center sm:justify-start gap-2">
                                        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Sarah Jenkins</h1>
                                        <CheckCircle className="w-5 h-5 text-blue-500 fill-blue-50 dark:fill-blue-950/50" />
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 font-medium">Senior Tech Recruiter @ TalentTech</p>
                                    <p className="text-xs text-slate-400 dark:text-slate-400 mt-0.5 flex items-center justify-center sm:justify-start gap-1">
                                        <MapPin className="w-3.5 h-3.5" /> San Francisco, CA (PST)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center gap-3">
                                <button className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition">
                                    Message
                                </button>
                                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg shadow-sm transition">
                                    Book Call
                                </button>
                            </div>
                        </div>

                        {/* Bio & Links */}
                        <div className="mt-6 border-t border-slate-100 dark:border-slate-800/80 pt-4">
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-3xl">
                                Passionate about connecting exceptional engineering talent with high-growth technology companies. Specializing in Senior Full Stack, DevOps, and Product Leadership roles.
                            </p>

                            <div className="flex flex-wrap gap-4 mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                                <a href="#" className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition">
                                    <LiaLinkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" /> linkedin.com/in/sjenkins
                                </a>
                                <a href="#" className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition">
                                    <Mail className="w-4 h-4 text-slate-400 dark:text-slate-500" /> s.jenkins@talenttech.io
                                </a>
                                <span className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
                                    <Calendar className="w-4 h-4" /> Avg. Response: &lt; 24 hrs
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Placements Made", value: "140+" },
                        { label: "Active Openings", value: "8" },
                        { label: "Time to Hire", value: "18 Days" },
                        { label: "Acceptance Rate", value: "94%" },
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-center transition-colors">
                            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{stat.value}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Active Jobs Section */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Open Opportunities</h2>
                            <span className="text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-2.5 py-1 rounded-full border border-blue-100 dark:border-blue-900/50">
                                3 Active Jobs
                            </span>
                        </div>

                        <div className="space-y-3">
                            {activeJobs.map((job) => (
                                <div key={job.id} className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition group">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                                                {job.title}
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                                                <span>{job.department}</span>
                                                <span>•</span>
                                                <span>{job.type}</span>
                                                <span>•</span>
                                                <span>{job.location}</span>
                                            </div>
                                        </div>
                                        <button className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                                            <ExternalLink className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
                                        <span>Posted {job.posted}</span>
                                        <span className="font-medium text-slate-600 dark:text-slate-300">{job.applicants} applicants</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-6">

                        {/* Specializations */}
                        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 transition-colors">
                            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Focus Areas</h3>
                            <div className="flex flex-wrap gap-2">
                                {["React / Next.js", "Node.js", "Python / ML", "Engineering Management", "Product Design", "Cloud Infrastructure"].map((tag, i) => (
                                    <span key={i} className="text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Agency / Company Box */}
                        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 transition-colors">
                            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Representing</h3>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 rounded-lg flex items-center justify-center font-bold text-sm border border-indigo-100 dark:border-indigo-900/50">
                                    TT
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">TalentTech Solutions</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Tech Recruitment Agency</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}
