"use client";
import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Form, Input, Label, TextField, FieldError } from "@heroui/react";
import { Check, Briefcase, Building2, Users } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";


function SignInContent() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirect") || "/";

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
            rememberMe: true,
        });

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("Welcome Back to HireLoop 🎉");
        router.push(redirectTo);
    };

    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: redirectTo,
        });
    };

    
    return (
        <section className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white transition-colors duration-300 flex items-center justify-center px-4 py-12">
            <div className="max-w-5xl w-full grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl transition-all duration-300">

                {/* Left Side (Branding Panel) */}
                <div className="hidden lg:flex flex-col justify-between bg-linear-to-br from-indigo-600 via-indigo-700 to-indigo-900 p-12 text-white relative overflow-hidden">
                    {/* Background Subtle Shapes */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-indigo-500/30 blur-2xl pointer-events-none" />
                    <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-indigo-400/20 blur-2xl pointer-events-none" />

                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-white/20">
                            <Briefcase size={14} /> HireLoop Portal
                        </span>

                        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight">
                            Welcome Back 👋
                        </h1>

                        <p className="mt-4 text-indigo-100 leading-relaxed">
                            Sign in to manage job listings, track applications, and connect with top tech talent seamlessly.
                        </p>
                    </div>

                    <div className="my-8 space-y-4">
                        <div className="flex items-center gap-3 bg-white/10 p-3.5 rounded-2xl backdrop-blur-md border border-white/10">
                            <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                                <Briefcase size={20} className="text-white" />
                            </div>
                            <span className="text-sm font-medium">Verified Job Listings & Applications</span>
                        </div>

                        <div className="flex items-center gap-3 bg-white/10 p-3.5 rounded-2xl backdrop-blur-md border border-white/10">
                            <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                                <Building2 size={20} className="text-white" />
                            </div>
                            <span className="text-sm font-medium">Direct Employer Connections</span>
                        </div>

                        <div className="flex items-center gap-3 bg-white/10 p-3.5 rounded-2xl backdrop-blur-md border border-white/10">
                            <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                                <Users size={20} className="text-white" />
                            </div>
                            <span className="text-sm font-medium">Real-time Application Status Updates</span>
                        </div>
                    </div>

                    <p className="text-xs text-indigo-200">
                        © {new Date().getFullYear()} HireLoop Inc. All rights reserved.
                    </p>
                </div>

                {/* Right Side (Form) */}
                <div className="p-6 sm:p-10 flex flex-col justify-center bg-white dark:bg-zinc-900 transition-colors duration-300">

                    <div className="mb-8 text-center sm:text-left">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                            Sign In
                        </h2>

                        <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400">
                            Access your account to continue on HireLoop
                        </p>
                    </div>

                    <Form onSubmit={onSubmit} className="space-y-5">

                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            className="w-full"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-zinc-300 mb-1.5">
                                Email Address
                            </Label>

                            <Input
                                placeholder="name@company.com"
                                className="w-full rounded-xl border border-gray-300 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:border-indigo-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
                            />

                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>

                        <TextField
                            isRequired
                            name="password"
                            className="relative w-full"
                            type={showPassword ? "text" : "password"}
                            validate={(value) => {
                                if (value.length < 8) return "Password must be at least 8 characters";
                                if (!/[A-Z]/.test(value)) return "Must contain uppercase letter";
                                if (!/[0-9]/.test(value)) return "Must contain one number";
                                return null;
                            }}
                        >
                            <Label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-zinc-300 mb-1.5">
                                Password
                            </Label>

                            <div className="relative">
                                <Input
                                    placeholder="••••••••"
                                    className="w-full rounded-xl border border-gray-300 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 px-4 py-3 pr-10 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:border-indigo-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors cursor-pointer"
                                    aria-label="Toggle password visibility"
                                >
                                    {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                                </button>
                            </div>

                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-zinc-300">
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="h-4 w-4 rounded border-gray-300 dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800 text-indigo-600 focus:ring-indigo-500 accent-indigo-600 cursor-pointer"
                                />
                                <span>Remember me</span>
                            </label>

                            <Link
                                href="/forgot-password"
                                className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 cursor-pointer"
                        >
                            <Check size={18} />
                            Sign In
                        </Button>
                    </Form>

                    <div className="relative my-6">
                        <div className="border-t border-gray-200 dark:border-zinc-800" />
                        <span className="absolute left-1/2 -translate-x-1/2 -top-2.5 bg-white dark:bg-zinc-900 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-zinc-500">
                            OR
                        </span>
                    </div>

                    <Button
                        onClick={handleGoogleSignin}
                        variant="bordered"
                        className="w-full h-12 rounded-xl border border-gray-300 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950/50 hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-900 dark:text-white font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <FcGoogle size={20} />
                        Continue with Google
                    </Button>

                    <p className="mt-8 text-center text-sm text-gray-600 dark:text-zinc-400">
                        Don't have an account?{" "}
                        <Link
                            href={`/signup?redirect=${redirectTo}`}
                            className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors"
                        >
                            Create Account
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default function SignInPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-gray-50 dark:bg-zinc-950 transition-colors duration-300" />}>
            <SignInContent />
        </Suspense>
    );
}

