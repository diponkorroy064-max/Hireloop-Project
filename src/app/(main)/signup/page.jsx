'use client';

import React, { useState, Suspense } from 'react';
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Check, User, Briefcase, Sparkles, ShieldCheck } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

const SignUpForm = () => {
    const [isShowPass, setIsShowPass] = useState(false);
    const [isShowConfirmPass, setIsShowConfirmPass] = useState(false);
    const [role, setRole] = useState("seeker");
    const [passwordValue, setPasswordValue] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirect") || "/";

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        if (user.password !== user.confirmPassword) {
            toast.error("Passwords do not match");
            setLoading(false);
            return;
        }

        const plan = role === "seeker" ? "seeker_free" : "recruiter_free";

        try {
            const { data, error } = await authClient.signUp.email({
                name: user.name,
                image: user.image,
                email: user.email,
                password: user.password,
                role: role,
                plan: plan,
            });

            if (error) {
                toast.error("Sign up failed: " + error.message);
            } else if (data) {
                toast.success("Account created successfully! Please verify your email.");
                router.push(redirectTo);
            }
        } catch (err) {
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleSigninGoogle = async () => {
        const plan = role === "seeker" ? "seeker_free" : "recruiter_free";
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: redirectTo,
                additionalData: {
                    role: role,
                    plan: plan,
                },
            });
        } catch (err) {
            toast.error("Google sign-in failed");
        }
    };

    return (
        <div className="relative min-h-screen w-full bg-zinc-950 text-zinc-100 flex items-center justify-center p-4 md:p-8 overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-100 h-100 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/50 backdrop-blur-2xl shadow-2xl grid lg:grid-cols-12 min-h-175">

                {/* LEFT BRANDING SECTION */}
                <div className="hidden lg:flex lg:col-span-5 flex-col justify-between p-10 border-r border-zinc-800/80 bg-linear-to-br from-blue-900/20 via-zinc-900/40 to-transparent relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-position-[32px_32px] pointer-events-none" />

                    <div className="relative z-10">
                        <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-medium text-blue-400 backdrop-blur-md">
                            <Sparkles size={14} /> Welcome to HireLoop
                        </span>

                        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white leading-[1.15]">
                            Find Your <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-violet-400">
                                Dream Career
                            </span>
                        </h1>

                        <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
                            Join thousands of job seekers and employers matching skills with dynamic opportunities daily.
                        </p>
                    </div>

                    <div className="relative z-10 space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-white">5K+</h3>
                                <p className="text-xs text-zinc-400 mt-0.5">Active Jobs</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-white">2K+</h3>
                                <p className="text-xs text-zinc-400 mt-0.5">Companies</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-blue-950/30 border border-blue-800/30 text-xs text-blue-300">
                            <ShieldCheck size={20} className="shrink-0 text-blue-400" />
                            <span>Verified profiles & secure application handling guaranteed.</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT FORM SECTION */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
                    <div className="w-full max-w-md mx-auto space-y-6">

                        <div className="text-center sm:text-left">
                            <h2 className="text-3xl font-bold text-white tracking-tight">Create Account</h2>
                            <p className="text-zinc-400 text-sm mt-1">
                                Select your path and start your journey with us
                            </p>
                        </div>

                        <Form onSubmit={onSubmit} className="flex flex-col gap-4">

                            {/* ROLE SELECTION */}
                            <div className="flex flex-col gap-1.5">
                                <Label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                                    I want to join as a
                                </Label>

                                <input type="hidden" name="role" value={role} />

                                <div className="grid grid-cols-2 gap-3 pt-1">
                                    <button
                                        type="button"
                                        onClick={() => setRole('seeker')}
                                        className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${role === 'seeker'
                                            ? 'border-blue-500 bg-blue-500/10 text-white'
                                            : 'border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700'
                                            }`}>
                                        <div className="flex items-center gap-2 text-sm font-medium">
                                            <User size={16} className={role === 'seeker' ? 'text-blue-400' : 'text-zinc-400'} />
                                            Job Seeker
                                        </div>
                                        <div className={`w-2 h-2 rounded-full ${role === 'seeker' ? 'bg-blue-400' : 'bg-transparent'}`} />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setRole('recruiter')}
                                        className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${role === 'recruiter'
                                            ? 'border-blue-500 bg-blue-500/10 text-white'
                                            : 'border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700'
                                            }`}>
                                        <div className="flex items-center gap-2 text-sm font-medium">
                                            <Briefcase size={16} className={role === 'recruiter' ? 'text-blue-400' : 'text-zinc-400'} />
                                            Recruiter
                                        </div>
                                        <div className={`w-2 h-2 rounded-full ${role === 'recruiter' ? 'bg-blue-400' : 'bg-transparent'}`} />
                                    </button>
                                </div>
                            </div>

                            {/* NAME */}
                            <TextField isRequired name="name" type="text">
                                <Label className="text-xs text-zinc-300 font-medium">Full Name</Label>
                                <Input
                                    className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="John Doe"
                                />
                                <FieldError className="text-xs text-red-400 mt-1" />
                            </TextField>

                            {/* PROFILE IMAGE URL */}
                            <TextField isRequired name="image" type="text">
                                <Label className="text-xs text-zinc-300 font-medium">Profile Image URL</Label>
                                <Input
                                    className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="https://example.com/avatar.jpg"
                                />
                                <FieldError className="text-xs text-red-400 mt-1" />
                            </TextField>

                            {/* EMAIL */}
                            <TextField
                                isRequired
                                name="email"
                                type="email"
                                validate={(val) => (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(val) ? "Enter a valid email address" : null)}>
                                <Label className="text-xs text-zinc-300 font-medium">Email Address</Label>
                                <Input
                                    className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="john@example.com"
                                />
                                <FieldError className="text-xs text-red-400 mt-1" />
                            </TextField>

                            {/* PASSWORD GRID */}
                            <div className="grid sm:grid-cols-2 gap-3">
                                {/* PASSWORD */}
                                <TextField
                                    isRequired
                                    name="password"
                                    type={isShowPass ? "text" : "password"}
                                    validate={(val) => {
                                        if (val.length < 8) return "Min 8 characters";
                                        if (!/[A-Z]/.test(val)) return "Needs uppercase letter";
                                        if (!/[a-z]/.test(val)) return "Needs lowercase letter";
                                        if (!/[0-9]/.test(val)) return "Needs number";
                                        return null;
                                    }}>
                                    <Label className="text-xs text-zinc-300 font-medium">Password</Label>
                                    <div className="relative mt-1">
                                        <Input
                                            onChange={(e) => setPasswordValue(e.target.value)}
                                            className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 pl-3.5 pr-10 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition-colors"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setIsShowPass(!isShowPass)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors">
                                            {isShowPass ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                                        </button>
                                    </div>
                                    <FieldError className="text-xs text-red-400 mt-1" />
                                </TextField>

                                {/* CONFIRM PASSWORD */}
                                <TextField
                                    isRequired
                                    name="confirmPassword"
                                    type={isShowConfirmPass ? "text" : "password"}
                                    validate={(val) => (val !== passwordValue ? "Passwords match failed" : null)}>
                                    <Label className="text-xs text-zinc-300 font-medium">Confirm Password</Label>
                                    <div className="relative mt-1">
                                        <Input
                                            className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 pl-3.5 pr-10 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition-colors"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setIsShowConfirmPass(!isShowConfirmPass)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors">
                                            {isShowConfirmPass ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                                        </button>
                                    </div>
                                    <FieldError className="text-xs text-red-400 mt-1" />
                                </TextField>
                            </div>

                            {/* SUBMIT BUTTON */}
                            <Button
                                type="submit"
                                isLoading={loading}
                                className="mt-2 w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer">
                                {!loading && <Check size={16} />}
                                Create Account
                            </Button>
                        </Form>

                        {/* DIVIDER */}
                        <div className="relative my-4 text-center">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-zinc-800" />
                            </div>
                            <span className="relative bg-zinc-900 px-3 text-xs text-zinc-500 uppercase tracking-wider">
                                Or continue with
                            </span>
                        </div>

                        {/* GOOGLE SIGN IN */}
                        <Button
                            variant="bordered"
                            onClick={handleSigninGoogle}
                            className="w-full h-11 rounded-xl border-zinc-800 bg-zinc-950/40 hover:bg-zinc-800/60 text-zinc-200 text-sm font-medium flex items-center justify-center gap-2.5 transition-all cursor-pointer">
                            <FcGoogle size={18} />
                            Continue with Google
                        </Button>

                        {/* FOOTER */}
                        <p className="text-center text-xs text-zinc-400 pt-2">
                            Already have an account?{" "}
                            <Link
                                href={`/signin?redirect=${redirectTo}`}
                                className="text-blue-400 hover:text-blue-300 font-medium transition-colors underline-offset-4 hover:underline">
                                Sign In
                            </Link>
                        </p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default function SignUpPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-zinc-950" />}>
            <SignUpForm />
        </Suspense>
    );
}
