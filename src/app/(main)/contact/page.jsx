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
        <main className="min-h-screen bg-zinc-950">

            {/* Hero */}
            <ContactHero />

            {/* Contact Content */}
            <section className="container mx-auto px-6 py-16 md:py-20">

                <div className="grid gap-8 lg:grid-cols-2">

                    {/* Left */}
                    <div>
                        <div className="mb-7">
                            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
                                Contact HireLoop
                            </p>

                            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                                We're ready to help
                            </h2>

                            <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                                Whether you're looking for your next career
                                opportunity, hiring talented professionals, or
                                need help using HireLoop, our team is here for
                                you.
                            </p>
                        </div>

                        <ContactInfo />
                    </div>

                    {/* Right */}
                    <ContactForm />

                </div>

                {/* FAQ */}
                <ContactFAQ />

            </section>

        </main>
    );
}
