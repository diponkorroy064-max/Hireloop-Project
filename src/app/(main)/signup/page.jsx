'use client'
import React, { useState } from 'react';
import { Button, FieldError ,Form, Input, Label, TextField,} from "@heroui/react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Check } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { Radio, RadioGroup } from "@heroui/react";



const SignUpPage = () => {
    const [isShowPass, setIsShowPass] = useState(false);
    const router = useRouter();
    const [role, setRole] = useState("seeker");

    const onSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        console.log(user);

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            image: user.image,
            email: user.email,
            password: user.password,
            role: user.role,
            // callbackURL: "/",
        });

        console.log("sign up response", data, error);

        if (error) {
            toast.error("Sign up failed " + error.message);
        }
        else if (data) {
            toast.success("Sign up successfull! Verify your Email...");
            router.push('/signin');
        }
    }

    const handleSigninGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log("google sign in response", data);
    }


    return (
        <div className='container mx-auto py-20 space-y-5 px-5'>
            <div className='text-center'>
                <h2 className='text-3xl font-extrabold text-[#f58f95]'>Create Account</h2>
                <p>Start your adventure with Pet Haven</p>
            </div>

            <div className='mx-auto border border-gray-400 rounded-2xl shadow md:w-150 p-10 space-y-3 bg-gray-200'>
                <Form onSubmit={onSubmit} className="flex flex-col gap-4 space-y-3" >

                    <TextField
                        isRequired
                        name="name"
                        type="text">
                        <Label>Full Name</Label>
                        <Input className="text-white" placeholder="Enter Your Full Name" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="image"
                        type="text">
                        <Label>Image URL</Label>
                        <Input className="text-white" placeholder="Enter Your Image URL" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}>
                        <Label>Email</Label>
                        <Input className="text-white" placeholder="Enter Your Email" />
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
                        }}>
                        <Label>Password</Label>
                        <Input className="text-white" placeholder="Create a password" />
                        <FieldError />
                        <p className='absolute top-8 right-3 text-xl' onClick={() => setIsShowPass(!isShowPass)}>{isShowPass ? <FaEyeSlash/> : <FaEye/>}</p>
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
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}>
                        <Label>Confirm Password</Label>
                        <Input className="text-white" placeholder="Confirm your password" />
                        <FieldError />
                        <p className='absolute top-8 right-3 text-xl' onClick={() => setIsShowPass(!isShowPass)}>{isShowPass ? <FaEyeSlash /> : <FaEye />}</p>
                    </TextField>

                    <div className=''>
                        <Label>Subscription plan</Label>
                        <RadioGroup defaultValue="seeker" name="role" onChange={(value)=>setRole(value)} orientation="horizontal">
                            <Radio value="seeker">
                                <Radio.Control>
                                    <Radio.Indicator />
                                </Radio.Control>
                                <Radio.Content>
                                    <Label>Job Seeker</Label>
                                </Radio.Content>
                            </Radio>

                            <Radio value="recruiter">
                                <Radio.Control>
                                    <Radio.Indicator />
                                </Radio.Control>
                                <Radio.Content>
                                    <Label>Recruiter</Label>
                                </Radio.Content>
                            </Radio>
                        </RadioGroup>
                    </div>

                    <div className='flex justify-between items-center text-[12px]'>
                        <h2>Remember Me</h2>
                        <h2>Forget Password ?</h2>
                    </div>

                    <div className="flex gap-2">
                        <Button className="w-full rounded-md bg-[#f58f95] text-white" type='submit'>
                            <Check/>
                            Sign Up
                        </Button>
                    </div>

                    <div className='text-center'>
                        Or continue with
                    </div>
                </Form>

                <div className='flex justify-center flex-col space-y-3'>
                    <Button onClick={handleSigninGoogle} className="w-full rounded-md bg-white border border-gray-300 hover:text-white hover:bg-[#f58f95] text-gray-900"><FcGoogle /> Continue with Google</Button>

                    <h2 className='text-center'>Already have an account? <span><Link className='text-red-500' href={'/signin'}>Sign In</Link></span></h2>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;


