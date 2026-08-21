"use client";
import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Checkbox, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { Check } from "lucide-react";
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
        <section className="min-h-screen bg-linear-to-br from-zinc-950 via-zinc-900 to-black flex items-center justify-center px-5 py-10">
            <div className="max-w-6xl w-full grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">

                {/* Left Side */}
                <div className="hidden lg:flex flex-col justify-center bg-linear-to-br from-orange-500 to-red-500 p-14 text-white">
                    <h1 className="text-5xl font-bold leading-tight">
                        Welcome Back 👋
                    </h1>

                    <p className="mt-6 text-lg text-orange-100">
                        Continue your journey with Pet Haven.
                        Find loving homes for pets or discover your perfect companion.
                    </p>

                    <div className="mt-10 space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                                🐶
                            </div>
                            <span>Adopt amazing pets</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                                ❤️
                            </div>
                            <span>Trusted shelters & owners</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                                🏠
                            </div>
                            <span>Give pets a forever home</span>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="bg-zinc-950 p-5 md:p-8">

                    <div className="mb-8 text-center">
                        <h2 className="text-4xl font-bold text-white">
                            Sign In
                        </h2>

                        <p className="mt-2 text-zinc-400">
                            Login to continue using Pet Haven
                        </p>
                    </div>

                    <Form onSubmit={onSubmit} className="space-y-5">

                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            className="w-full"
                            validate={(value) => {
                                if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                                ) {
                                    return "Enter a valid email";
                                }
                                return null;
                            }}
                        >
                            <Label>Email Address</Label>

                            <Input
                                placeholder="Enter your email"
                                className="text-white w-full"
                            />

                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            name="password"
                            className="relative w-full"
                            type={showPassword ? "text" : "password"}
                            validate={(value) => {
                                if (value.length < 8)
                                    return "Password must be at least 8 characters";
                                if (!/[A-Z]/.test(value))
                                    return "Must contain uppercase letter";
                                if (!/[0-9]/.test(value))
                                    return "Must contain one number";
                                return null;
                            }}
                        >
                            <Label>Password</Label>

                            <Input
                                placeholder="Enter your password"
                                className="text-white w-full"
                            />

                            <FieldError />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-9 text-gray-400 hover:text-white"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </TextField>

                        <div className="flex justify-between items-center text-sm text-gray-400">

                            <label className="flex items-center gap-2 text-sm text-white cursor-pointer">
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="w-4 h-4 accent-orange-500"
                                />
                                <span>Remember Me</span>
                            </label>

                            <Link
                                href="/forgot-password"
                                className="hover:text-orange-400"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 rounded-xl bg-orange-500 text-white hover:bg-orange-600 font-semibold"
                        >
                            <Check size={18} />
                            Sign In
                        </Button>
                    </Form>

                    <div className="relative my-8">

                        <div className="border-t border-zinc-700"></div>

                        <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-zinc-950 px-4 text-sm text-zinc-400">
                            OR
                        </span>
                    </div>

                    <Button
                        onClick={handleGoogleSignin}
                        variant="bordered"
                        className="w-full border-zinc-700 hover:bg-zinc-800 text-white"
                    >
                        <FcGoogle size={22} />
                        Continue with Google
                    </Button>

                    <p className="text-center text-zinc-400 mt-6">
                        Do not have an account?{" "}
                        <Link
                            href={`/signup?redirect=${redirectTo}`}
                            className="text-orange-400 hover:text-orange-300 font-semibold"
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
        <Suspense fallback={<div className="min-h-screen bg-zinc-950" />}>
            <SignInContent />
        </Suspense>
    );
}
