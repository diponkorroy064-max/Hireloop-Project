import React from 'react';


export default function WorldSection() {
    return (
        <section className="relative w-full bg-black bg-top bg-cover bg-no-repeat text-white md:py-20 overflow-hidden flex flex-col items-center justify-center min-h-125" style={{ backgroundImage: "url('/images/cta_bg.png')" }}>

            {/* Blue Gradient Overlay Layer (Adds the vibrant dome glow over the image) */}
            <div
                className="absolute inset-0 pointer-events-none mix-blend-screen opacity-60"
                style={{
                    background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(59, 130, 246, 0.4) 0%, rgba(29, 78, 216, 0.1) 45%, rgba(0, 0, 0, 0) 70%)"
                }}/>

            {/* Content Container */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
                    Your next role is <br className="sm:hidden" /> already looking for you
                </h1>

                {/* Subtext */}
                <p className="text-gray-400 text-base sm:text-lg font-light tracking-wide mb-10 max-w-xl mx-auto opacity-90">
                    Build a profile in three minutes. The matches start arriving tomorrow morning.
                </p>

                {/* Call to Actions */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <button className="w-full sm:w-auto bg-white text-black font-medium px-6 py-3 rounded-md text-sm transition-all hover:bg-gray-200 duration-200">
                        Create a free account
                    </button>

                    <button className="w-full sm:w-auto bg-transparent border border-white/20 text-gray-300 px-6 py-3 rounded-md text-sm transition-all hover:bg-white/5 hover:border-white/40 duration-200">
                        View pricing
                    </button>
                </div>

            </div>
        </section>
    );
}

