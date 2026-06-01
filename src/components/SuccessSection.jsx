'use client'
import React from "react"
import { motion } from "motion/react"
import { Search, TrendingUp, Building2, Bookmark, Zap, FileText, Hexagon, LineChart} from "lucide-react"

const features = [
    {
        icon: Search,
        title: "Smart Search",
        description: "Find your ideal job with advanced filters.",
    },
    {
        icon: TrendingUp,
        title: "Salary Insights",
        description: "Get real salary data to negotiate confidently.",
    },
    {
        icon: Building2,
        title: "Top Companies",
        description: "Apply to vetted companies that are hiring.",
    },
    {
        icon: Bookmark,
        title: "Saved Jobs",
        description: "Manage apps & favorites on your dashboard.",
    },
    {
        icon: Zap,
        title: "One-Click Apply",
        description: "Simplify your job applications for an easier process!",
    },
    {
        icon: FileText,
        title: "Resume Builder",
        description: "Create professional resumes with modern templates.",
    },
    {
        icon: Hexagon,
        title: "Skill-Based Matching",
        description: "Discover jobs that match your skills and experience.",
    },
    {
        icon: LineChart,
        title: "Career Growth Resources",
        description: "Boost your career with quick interview tips.",
    },
]


export default function SuccessSection() {
    // Animation variants for staggered grid layout
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    }

    
    return (
        <section className="bg-[#0b0b0c] text-white py-10 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

                {/* Top Tag */}
                <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4">
                    <span className="h-1.5 w-1.5 bg-blue-600 rounded-sm"></span>
                    Features Job
                    <span className="h-1.5 w-1.5 bg-blue-600 rounded-sm"></span>
                </div>

                {/* Main Heading */}
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl leading-tight mb-16">
                    Everything you need <br /> to succeed
                </h2>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ scale: 1.02, backgroundColor: "#161618" }}
                                className="flex items-start gap-4 p-5 rounded-xl bg-[#111113] border border-zinc-900 text-left transition-colors duration-200">
                                
                                {/* Icon Container */}
                                <div className="flex items-center justify-center p-3 rounded-lg bg-gray-950 border border-zinc-800 shrink-0">
                                    <IconComponent className="h-5 w-5 text-zinc-300" />
                                </div>

                                {/* Content */}
                                <div className="space-y-1 pt-1">
                                    <h3 className="text-sm font-medium text-zinc-100">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xs text-zinc-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>

            </div>
        </section>
    )
}

