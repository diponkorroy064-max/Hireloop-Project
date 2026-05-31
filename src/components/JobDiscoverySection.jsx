import React from 'react';

// Mock data array to keep the code clean and scalable
const jobOpenings = [
    { id: 1, title: "Frontend Developer", location: "New York, USA", type: "Hybrid", salary: "€25-€40/hour" },
    { id: 2, title: "Full Stack Developer", location: "New York, USA", type: "Hybrid", salary: "€25-€40/hour" },
    { id: 3, title: "Python Developer", location: "New York, USA", type: "Hybrid", salary: "€25-€40/hour" },
    { id: 4, title: "Javascript Developer", location: "New York, USA", type: "Hybrid", salary: "€25-€40/hour" },
    { id: 5, title: "Automation Designer", location: "New York, USA", type: "Hybrid", salary: "€25-€40/hour" },
    { id: 6, title: "Frontend Developer", location: "New York, USA", type: "Hybrid", salary: "€25-€40/hour" },
];


export default function JobDiscoverySection() {
    return (
        <section
            className="w-full bg-black bg-top bg-cover bg-no-repeat text-white py-20 px-4 md:py-28"
            style={{ backgroundImage: "url('/images/cta-bg.png')" }}>
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* Top Tag */}
                <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></span>
                    Smart Job Discovery
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></span>
                </div>

                {/* Section Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center tracking-tight text-white mb-16 max-w-2xl leading-tight">
                    The roles you`d never find by searching
                </h2>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
                    {jobOpenings.map((job) => (
                        <div
                            key={job.id}
                            className="bg-[#0D0D0D]/90 border border-white/4 rounded-2xl p-8 flex flex-col items-start hover:border-gray-400 tansition-all duration-300 group">
                            {/* Job Title */}
                            <h3 className="text-xl font-medium text-white mb-3 tracking-wide">
                                {job.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-500 font-light leading-relaxed mb-8 max-w-65">
                                Showcase your commitment to diversity and inclusion by highlighting initiatives
                            </p>

                            {/* Badges/Tags Grid */}
                            <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-10 w-full text-xs text-gray-400 font-light">
                                <div className="flex items-center gap-2">
                                    <span className="text-pink-500 text-sm">📍</span>
                                    <span>{job.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-purple-500 text-sm">💼</span>
                                    <span>{job.type}</span>
                                </div>
                                <div className="flex items-center gap-2 col-span-2">
                                    <span className="text-pink-400 text-sm">🪙</span>
                                    <span>{job.salary}</span>
                                </div>
                            </div>

                            {/* CTA Link */}
                            <button className="mt-auto flex items-center gap-2 text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                                Apply Now
                                <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Footer Button */}
                <button className="bg-white text-black text-sm font-medium px-6 py-3 rounded-md hover:bg-gray-200 transition-colors duration-200">View all job open</button>

            </div>
        </section>
    );
}


