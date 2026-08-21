import Link from 'next/link';
import React from 'react';

export default function WorldSection() {
    return (
        <section
            className="relative w-full bg-base-200 dark:bg-black bg-top bg-cover bg-no-repeat text-gray-900 dark:text-white py-16 md:py-20 overflow-hidden flex flex-col items-center justify-center min-h-125 transition-colors duration-300"
            style={{ backgroundImage: "url('/images/cta_bg.png')" }}>
            
            {/* Gradient Overlay Layer - Glowing Dome Effect */}
            <div
                className="absolute inset-0 pointer-events-none mix-blend-multiply dark:mix-blend-screen opacity-40 dark:opacity-60 transition-opacity duration-300"
                style={{
                    background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(59, 130, 246, 0.25) 0%, rgba(29, 78, 216, 0.08) 45%, rgba(0, 0, 0, 0) 70%)"
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-gray-900 dark:text-white mb-6 leading-tight max-w-3xl mx-auto">
                    Your next role is <br className="sm:hidden" /> already looking for you
                </h1>

                {/* Subtext */}
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg font-light tracking-wide mb-10 max-w-xl mx-auto">
                    Build a profile in three minutes. The matches start arriving tomorrow morning.
                </p>

                
                {/* Call to Actions */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <Link href={'/signup'}>
                        <button type="button" className="w-full sm:w-auto bg-gray-900 text-white dark:bg-white dark:text-black font-medium px-6 py-3 rounded-md text-sm transition-all hover:bg-gray-800 dark:hover:bg-gray-200 duration-200 cursor-pointer shadow-md dark:shadow-none">
                            Create a free account
                        </button>
                    </Link>

                    <Link href={'/plan'}>
                        <button type="button" className="w-full sm:w-auto bg-white/80 dark:bg-transparent border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-md text-sm transition-all hover:bg-gray-100 dark:hover:bg-white/5 hover:border-gray-400 dark:hover:border-white/40 duration-200 cursor-pointer">
                            View pricing
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
}
