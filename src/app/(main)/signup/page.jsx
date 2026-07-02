'use client'
import React, { useState } from 'react';
import { Button, FieldError ,Form, Input, Label, TextField,} from "@heroui/react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Check } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { Radio, RadioGroup } from "@heroui/react";



const SignUpPage = () => {
    const [isShowPass, setIsShowPass] = useState(false);
    const router = useRouter();
    const [role, setRole] = useState("seeker");

    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirect") || "/";

    const onSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        console.log(user);

        const plan = role === "seeker" ? "seeker_free" : "recruiter_free";

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            image: user.image,
            email: user.email,
            password: user.password,
            role: user.role,
            plan: plan
        });

        console.log("sign up response", data, error);

        if (error) {
            toast.error("Sign up failed " + error.message);
        }
        else if (data) {
            toast.success("Sign up successfull! Verify your Email...");
            router.push(redirectTo);
        }
    }

    const handleSigninGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log("google sign in response", data);
    }


    return (
        <div className="container mx-auto min-h-screen bg-linear-to-br from-zinc-950 via-black to-zinc-900 flex justify-center px-4 py-10">
            <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.45)]">

                {/* LEFT SIDE */}
                {/* <div className="hidden lg:flex flex-col justify-center p-12 border-r border-zinc-800 bg-linear-to-br from-blue-500/10 via-violet-500/10 to-transparent">
                    <span className="inline-flex w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                        Welcome to HireLoop
                    </span>

                    <h1 className="mt-8 text-5xl font-bold text-white leading-tight">
                        Find Your
                        <span className="block text-blue-400">
                            Dream Career
                        </span>
                    </h1>

                    <p className="mt-6 text-zinc-400 text-lg">
                        Join thousands of professionals and recruiters.
                        Discover opportunities, track applications,
                        and grow your career.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-10">
                        <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
                            <h3 className="text-3xl font-bold text-white">
                                5K+
                            </h3>
                            <p className="text-zinc-500">
                                Active Jobs
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
                            <h3 className="text-3xl font-bold text-white">
                                2K+
                            </h3>
                            <p className="text-zinc-500">
                                Companies
                            </p>
                        </div>
                    </div>
                </div> */}

                {/* RIGHT SIDE */}
                <div className="p-8 lg:p-12 flex items-center justify-center">
                    <div className="w-full max-w-md">

                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-bold text-white">
                                Create Account
                            </h2>

                            <p className="text-zinc-400 mt-2">
                                Start your journey with HireLoop
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl">

                            <Form
                                onSubmit={onSubmit}
                                className="flex flex-col gap-5"
                            >

                                <TextField
                                    isRequired
                                    name="name"
                                    type="text"
                                >
                                    <Label className="text-zinc-300">
                                        Full Name
                                    </Label>

                                    <Input
                                        className="text-white w-full"
                                        placeholder="Enter your full name"
                                    />

                                    <FieldError />
                                </TextField>

                                <TextField
                                    isRequired
                                    name="image"
                                    type="text"
                                >
                                    <Label className="text-zinc-300">
                                        Profile Image URL
                                    </Label>

                                    <Input
                                        className="text-white w-full"
                                        placeholder="https://example.com/profile.jpg"
                                    />

                                    <FieldError />
                                </TextField>

                                <TextField
                                    isRequired
                                    name="email"
                                    type="email"
                                    validate={(value) => {
                                        if (
                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                                value
                                            )
                                        ) {
                                            return "Please enter a valid email address";
                                        }
                                        return null;
                                    }}
                                >
                                    <Label className="text-zinc-300">
                                        Email
                                    </Label>

                                    <Input
                                        className="text-white w-full"
                                        placeholder="Enter your email"
                                    />

                                    <FieldError />
                                </TextField>

                                <TextField
                                    isRequired
                                    minLength={8}
                                    className="relative"
                                    name="password"
                                    type={isShowPass ? "text" : "password"}
                                    validate={(value) => {
                                        if (value.length < 8) {
                                            return "Password must be at least 8 characters";
                                        }
                                        if (!/[A-Z]/.test(value)) {
                                            return "Password must contain at least one uppercase letter";
                                        }
                                        if (!/[a-z]/.test(value)) {
                                            return "Password must contain at least one lowercase letter";
                                        }
                                        if (!/[0-9]/.test(value)) {
                                            return "Password must contain at least one number";
                                        }
                                        return null;
                                    }}
                                >
                                    <Label className="text-zinc-300">
                                        Password
                                    </Label>

                                    <Input
                                        className="text-white w-full"
                                        placeholder="Create a password"
                                    />

                                    <FieldError />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setIsShowPass(!isShowPass)
                                        }
                                        className="absolute top-8 right-3 text-zinc-400 hover:text-white"
                                    >
                                        {isShowPass ? (
                                            <FaEyeSlash />
                                        ) : (
                                            <FaEye />
                                        )}
                                    </button>
                                </TextField>

                                <TextField
                                    isRequired
                                    minLength={8}
                                    className="relative"
                                    name="confirmPassword"
                                    type={isShowPass ? "text" : "password"}>
                                    <Label className="text-zinc-300">
                                        Confirm Password
                                    </Label>

                                    <Input
                                        className="text-white w-full"
                                        placeholder="Confirm your password"
                                    />

                                    <FieldError />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setIsShowPass(!isShowPass)
                                        }
                                        className="absolute top-8 right-3 text-zinc-400 hover:text-white">
                                        {isShowPass ? (
                                            <FaEyeSlash />
                                        ) : (
                                            <FaEye />
                                        )}
                                    </button>
                                </TextField>

                                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-4">
                                    <Label className="text-zinc-300 mb-3 block">
                                        Account Type
                                    </Label>

                                    <RadioGroup defaultValue="seeker" name="role" orientation="horizontal">
                                        <Radio value="seeker">
                                            <Radio.Control>
                                                <Radio.Indicator />
                                            </Radio.Control>

                                            <Radio.Content>
                                                <Label>
                                                    Job Seeker
                                                </Label>
                                            </Radio.Content>
                                        </Radio>

                                        <Radio value="recruiter">
                                            <Radio.Control>
                                                <Radio.Indicator />
                                            </Radio.Control>

                                            <Radio.Content>
                                                <Label>
                                                    Recruiter
                                                </Label>
                                            </Radio.Content>
                                        </Radio>
                                    </RadioGroup>
                                </div>

                                <Button
                                    className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold"
                                    type="submit">
                                    <Check size={18} />
                                    Create Account
                                </Button>

                                <div className="relative text-center">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-zinc-800" />
                                    </div>

                                    <span className="relative bg-zinc-900 px-4 text-sm text-zinc-500">
                                        Or continue with
                                    </span>
                                </div>
                            </Form>

                            <div className="mt-5 flex flex-col gap-4">
                                <Button
                                    onClick={handleSigninGoogle}
                                    className="w-full h-12 rounded-xl bg-zinc-900 border border-zinc-700 text-white hover:bg-zinc-800">
                                    <FcGoogle size={20} />
                                    Continue with Google
                                </Button>

                                <h2 className="text-center text-zinc-400">
                                    Already have an account?
                                    <Link href={`/signin?redirect=${redirectTo}`} className="ml-2 text-blue-400 hover:text-blue-300">
                                        Sign In
                                    </Link>
                                </h2>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;


