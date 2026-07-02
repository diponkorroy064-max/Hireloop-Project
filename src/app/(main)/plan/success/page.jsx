import Link from "next/link";
import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";
import { CreateSubscription } from "@/lib/actions/subscription";

export default async function Page({ searchParams }) {
    const { session_id } = await searchParams;

    if (!session_id) {
        redirect("/");
    }

    const session = await stripe.checkout.sessions.retrieve(
        session_id,
        {
            expand: ["line_items", "payment_intent"],
        }
    );
    // console.log("session", session);

    if (session.status === "open") {
        redirect("/");
    }

    const customerEmail = session.customer_details?.email;

    // update the user table about the new---
    // console.log("user email of success", session?.customer_details?.email);

    const subsInfo = {
        email: session?.customer_details?.email,
        planId: session?.metadata.planId
    }
    console.log("subsInfo", subsInfo);

    const result = await CreateSubscription(subsInfo);
    console.log("result info", result);


    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
            <div className="card w-full max-w-2xl bg-base-100 shadow-2xl">
                <div className="card-body text-center p-10">
                    {/* Success Icon */}
                    <div className="mx-auto mb-6">
                        <div className="w-24 h-24 rounded-full bg-success/10 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-12 text-success"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl font-bold text-success">
                        Payment Successful!
                    </h1>

                    <p className="mt-4 text-lg text-base-content/70">
                        Thank you for your purchase. Your
                        subscription has been activated
                        successfully.
                    </p>

                    {/* Email */}
                    {customerEmail && (
                        <div className="alert alert-success mt-6">
                            <span>
                                Confirmation email sent to{" "}
                                <strong>
                                    {customerEmail}
                                </strong>
                            </span>
                        </div>
                    )}

                    {/* Summary */}
                    <div className="bg-base-200 rounded-xl p-6 mt-6 text-left">
                        <h3 className="font-semibold text-lg mb-2">
                            What is Next?
                        </h3>

                        <ul className="space-y-2">
                            <li>
                                ✅ Your subscription is now
                                active
                            </li>
                            <li>
                                ✅ Premium features are ready
                                to use
                            </li>
                            <li>
                                ✅ You can manage your plan
                                anytime
                            </li>
                        </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
                        <Link
                            href="/dashboard"
                            className="btn btn-primary"
                        >
                            Go to Dashboard
                        </Link>

                        <Link
                            href="/jobs"
                            className="btn btn-outline"
                        >
                            Browse Jobs
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}



