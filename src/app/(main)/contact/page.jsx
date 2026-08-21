import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactFAQ from "@/components/contact/ContactFAQ";

export const metadata = {
    title: "Contact Us | HireLoop",
    description:
        "Get in touch with the HireLoop team for support, questions, and partnership opportunities.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-zinc-950 dark:text-white transition-colors duration-300">
            {/* Hero */}
            <ContactHero />

            {/* Contact Content Container */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <section className="rounded-3xl border border-gray-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 p-6 sm:p-8 md:p-12 shadow-xl shadow-gray-200/50 dark:shadow-none backdrop-blur-md transition-colors duration-300">
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-start">

                        {/* Left Column: Header & Info Cards */}
                        <div className="space-y-8">
                            <div>
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50">
                                    Contact HireLoop
                                </span>

                                <h2 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl tracking-tight">
                                    We&apos;re ready to help
                                </h2>

                                <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-zinc-400">
                                    Whether you&apos;re looking for your next career
                                    opportunity, hiring talented professionals, or
                                    need help using HireLoop, our team is here for
                                    you.
                                </p>
                            </div>

                            <ContactInfo />
                        </div>

                        {/* Right Column: Interactive Form */}
                        <div className="lg:pl-4">
                            <ContactForm />
                        </div>

                    </div>
                </section>

                {/* FAQ Section */}
                <ContactFAQ />
            </div>
        </main>
    );
}
