import { Search, MapPin, BriefcaseBusiness } from "lucide-react";


export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-black text-white">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.15),transparent_40%)]" />

            {/* Floating Dots */}
            <div className="absolute bottom-0 left-0 right-0 h-48 opacity-50">
                <div className="absolute left-1/4 bottom-10 h-1 w-1 rounded-full bg-indigo-500" />
                <div className="absolute left-1/3 bottom-20 h-1 w-1 rounded-full bg-indigo-500" />
                <div className="absolute right-1/4 bottom-14 h-1 w-1 rounded-full bg-indigo-500" />
                <div className="absolute right-1/3 bottom-8 h-1 w-1 rounded-full bg-indigo-500" />
            </div>

            <div className="container mx-auto px-4 py-24 md:py-15">
                {/* Top Badge */}
                <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md">
                        <BriefcaseBusiness size={16} className="text-orange-400" />
                        <span className="font-semibold text-white">
                            50,000+
                        </span>
                        <span className="text-gray-400 uppercase tracking-widest text-xs">
                            New Jobs This Month
                        </span>
                    </div>
                </div>

                {/* Heading */}
                <div className="mx-auto mt-8 max-w-4xl text-center">
                    <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                        Find Your Dream Job Today
                    </h1>

                    <p className="mt-6 text-gray-400 text-base md:text-lg">
                        HireLoop connects top talent with world-class companies.
                        Browse thousands of curated opportunities and land your
                        next role — faster.
                    </p>
                </div>

                {/* Search Box */}
                <div className="mx-auto mt-10 max-w-4xl">
                    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-2xl md:flex-row">

                        {/* Job Search */}
                        <div className="flex flex-1 items-center px-5 py-4">
                            <Search size={18} className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Job title, skill or company"
                                className="ml-3 w-full bg-transparent outline-none placeholder:text-gray-500"
                            />
                        </div>

                        <div className="hidden w-px bg-white/10 md:block" />

                        {/* Location */}
                        <div className="flex flex-1 items-center px-5 py-4">
                            <MapPin size={18} className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Location or Remote"
                                className="ml-3 w-full bg-transparent outline-none placeholder:text-gray-500"
                            />
                        </div>

                        {/* Search Button */}
                        <button className="m-2 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 transition hover:bg-indigo-500">
                            <Search size={18} />
                        </button>
                    </div>
                </div>

                
                {/* Trending Tags */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    {[  "Trending Position",
                        "Product Designer",
                        "AI Engineering",
                        "DevOps Engineer",
                    ].map((item) => (
                        <button
                            key={item}
                            className="rounded-full border border-gray-500 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10">
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}


