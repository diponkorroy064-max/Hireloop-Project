'use client';
import React, { useState } from 'react';
import { Form, Fieldset, TextField, TextArea, Label, Input, FieldError, Select, ListBox, Button } from '@heroui/react';
import { ArrowUpToLine, Globe, Factory, ArrowRight, Pencil, ChevronDown } from '@gravity-ui/icons';
import { createCompany } from '@/lib/actions/companies';
import { toast } from 'react-toastify';
import Image from 'next/image';

// Shared Dynamic Theme Styles
const textInputClass = "w-full bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white rounded-lg px-3 py-2.5 outline-none placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:border-slate-400 dark:focus:border-zinc-700 transition";
const selectBoxClass = "w-full flex flex-col gap-1";
const triggerClasses = "w-full bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white rounded-lg px-3 py-2.5 flex items-center justify-between outline-none data-[hover=true]:border-slate-300 dark:data-[hover=true]:border-zinc-700";
const popoverClasses = "bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-lg p-1 shadow-xl min-w-[200px]";
const listItemClasses = "text-slate-700 dark:text-zinc-300 px-3 py-2 rounded-md cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-900 hover:text-slate-900 dark:hover:text-white outline-none data-[focused=true]:bg-slate-100 dark:data-[focused=true]:bg-zinc-900";
const textAreaClass = "w-full bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white rounded-lg p-3 outline-none placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:border-slate-400 dark:focus:border-zinc-700 transition resize-none";

export default function CompanyProfile({ recruiter, recruiterCompany }) {
    // 1. Core State
    const [company, setCompany] = useState(recruiterCompany);
    const [isEditing, setIsEditing] = useState(false);
    const [errors, setErrors] = useState({});

    // Auxiliary Upload States
    const [logoUrl, setLogoUrl] = useState('');
    const [isUploading, setIsUploading] = useState(false);

    // 2. Client side Imgbb Upload Handler
    const handleLogoUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            setErrors(prev => ({ ...prev, logo: "File size exceeds 5MB limit" }));
            return;
        }

        setIsUploading(true);
        const formData = new FormData();
        formData.append('image', file);

        try {
            const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMAGE_UPLOAD_API;
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
                method: 'POST',
                body: formData
            });
            const data = await response.json();

            if (data.success) {
                setLogoUrl(data.data.url);
                setErrors(prev => ({ ...prev, logo: null }));
            } else {
                setErrors(prev => ({ ...prev, logo: "Upload failed. Try again." }));
            }
        } catch (err) {
            setErrors(prev => ({ ...prev, logo: "Network error during logo upload" }));
        } finally {
            setIsUploading(false);
        }
    };

    // 3. Submit Profile Form Data
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const companyName = formData.get('companyName');
        const websiteUrl = formData.get('websiteUrl');
        const industry = formData.get('industry');
        const location = formData.get('location');
        const employeeCount = formData.get('employeeCount');
        const description = formData.get('description');

        const newErrors = {};
        if (!companyName) newErrors.companyName = "Company name is required";
        if (!websiteUrl) newErrors.websiteUrl = "Website link is required";
        if (!location) newErrors.location = "Location coordinates required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const newCompanyData = {
            name: companyName,
            websiteUrl,
            industry: industry || 'Technology',
            location,
            employeeCount: employeeCount || '1-10 employees',
            description,
            logo: logoUrl || (company ? company.logo : ''),
            status: company && company.status ? company.status : 'Pending',
            recruiterId: recruiter.id
        };
        setCompany(newCompanyData);

        const payload = await createCompany(newCompanyData);

        if (payload.insertedId) {
            const savedCompany = { ...company, _id: payload.insertedId };
            setCompany(savedCompany);
            toast.success("Company profile created successfully!");
        }

        setErrors({});
        setIsEditing(false);
    };

    // 4. State Toggle Helpers
    const startRegistration = () => {
        setLogoUrl('');
        setIsEditing(true);
    };

    const startEditing = () => {
        setLogoUrl(company.logo);
        setIsEditing(true);
    };

    // Dynamic Status Color Classes
    const getStatusStyles = (status) => {
        switch (status) {
            case 'Approved':
                return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20';
            case 'Rejected':
                return 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20';
            default:
                return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20';
        }
    };


    return (
        <section className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-white py-8 transition-colors duration-200">

            {/* SUB-VIEW 1: Empty Profile */}
            {!company?._id && !isEditing && (
                <div className="max-w-2xl mx-auto py-12 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-600 rounded-xl p-8 text-center space-y-6 shadow-sm transition-colors duration-200">
                    <div className="w-16 h-16 bg-slate-100 dark:bg-zinc-900/50 rounded-full flex items-center justify-center mx-auto border border-slate-200 dark:border-zinc-800">
                        <Factory
                            size={24}
                            className="text-slate-500 dark:text-zinc-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-slate-800 dark:text-zinc-200">
                            No Company Registered Yet
                        </h2>

                        <p className="text-sm text-slate-500 dark:text-zinc-500 max-w-sm mx-auto">
                            To start creating structural job posts and tracking incoming
                            pipelines, configure your workspace profile.
                        </p>
                    </div>

                    <Button
                        onPress={startRegistration}
                        className="bg-slate-900 text-white dark:bg-white dark:text-black font-semibold hover:bg-slate-800 dark:hover:bg-zinc-200 rounded-lg px-6 h-11 transition-all"
                    >
                        Register Company
                        <ArrowRight size={16} className="ml-1" />
                    </Button>
                </div>
            )}

            {/* SUB-VIEW 2: Company Profile */}
            {company && !isEditing && (
                <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-600 rounded-xl p-8 space-y-8 shadow-sm transition-colors duration-200">

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 dark:border-zinc-900 pb-6">
                        <div className="flex items-center gap-4">
                            {company.logo ? (
                                <Image
                                    width={64}
                                    height={64}
                                    src={company.logo}
                                    alt={company.name}
                                    className="w-16 h-16 rounded-xl object-contain bg-slate-50 dark:bg-zinc-900 p-2 border border-slate-200 dark:border-zinc-800"
                                />
                            ) : (
                                <div className="w-16 h-16 rounded-xl bg-slate-50 dark:bg-zinc-900 flex items-center justify-center border border-slate-200 dark:border-zinc-800">
                                    <Factory
                                        size={24}
                                        className="text-slate-400 dark:text-zinc-600"
                                    />
                                </div>
                            )}

                            <div>
                                <div className="flex items-center gap-3">
                                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                                        {company.name}
                                    </h1>

                                    <span
                                        className={`text-xs px-2.5 py-1 rounded-full font-medium border ${getStatusStyles(
                                            company.status
                                        )}`}
                                    >
                                        {company.status || "Pending"}
                                    </span>
                                </div>

                                <a
                                    href={company.websiteUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm text-slate-500 dark:text-zinc-400 hover:underline flex items-center gap-1 mt-1"
                                >
                                    <Globe
                                        size={14}
                                        className="text-slate-400 dark:text-zinc-500"
                                    />
                                    {company.websiteUrl}
                                </a>
                            </div>
                        </div>

                        <Button
                            onPress={startEditing}
                            variant="bordered"
                            className="border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-900 rounded-lg px-4 font-medium h-10 flex items-center gap-2"
                        >
                            <Pencil size={14} />
                            Edit Profile
                        </Button>
                    </div>

                    {/* Profile Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-slate-50 dark:bg-zinc-900/30 border border-slate-200 dark:border-zinc-800/80 p-4 rounded-lg">
                            <span className="text-xs text-slate-500 dark:text-zinc-500 uppercase font-semibold block">
                                Industry Category
                            </span>
                            <span className="text-slate-800 dark:text-zinc-300 font-medium mt-1 block">
                                {company.industry}
                            </span>
                        </div>

                        <div className="bg-slate-50 dark:bg-zinc-900/30 border border-slate-200 dark:border-zinc-800/80 p-4 rounded-lg">
                            <span className="text-xs text-slate-500 dark:text-zinc-500 uppercase font-semibold block">
                                Location
                            </span>
                            <span className="text-slate-800 dark:text-zinc-300 font-medium mt-1 block">
                                {company.location}
                            </span>
                        </div>

                        <div className="bg-slate-50 dark:bg-zinc-900/30 border border-slate-200 dark:border-zinc-800/80 p-4 rounded-lg">
                            <span className="text-xs text-slate-500 dark:text-zinc-500 uppercase font-semibold block">
                                Company Scale
                            </span>
                            <span className="text-slate-800 dark:text-zinc-300 font-medium mt-1 block">
                                {company.employeeCount}
                            </span>
                        </div>
                    </div>

                    {/* Description */}
                    {company.description && (
                        <div className="space-y-2">
                            <h3 className="text-sm font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
                                About our Vision & Culture
                            </h3>

                            <p className="text-slate-700 dark:text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap bg-slate-50 dark:bg-zinc-900/20 border border-slate-200 dark:border-zinc-800/80 p-4 rounded-xl">
                                {company.description}
                            </p>
                        </div>
                    )}
                </div>
            )}

            {/* SUB-VIEW 3: Create / Edit Form */}
            {(isEditing || (!company?._id && isEditing)) && (
                <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-950 p-8 border border-slate-200 dark:border-zinc-600 rounded-xl shadow-sm transition-colors duration-200">
                    <Form
                        onSubmit={handleSubmit}
                        className="space-y-8"
                        validationErrors={errors}
                        validationBehavior="aria"
                    >
                        <Fieldset className="space-y-6 w-full">
                            <legend className="text-xl font-semibold text-slate-900 dark:text-zinc-200 border-b border-slate-100 dark:border-zinc-900 w-full pb-3 mb-2">
                                {company
                                    ? "Update Company Profile"
                                    : "Configure Workspace Platform"}
                            </legend>

                            {/* এখানে আপনার সম্পূর্ণ existing form code থাকবে */}
                        </Fieldset>

                        <div className="flex justify-end gap-3 pt-5 border-t border-slate-100 dark:border-zinc-900 w-full">
                            {company && (
                                <Button
                                    type="button"
                                    variant="bordered"
                                    onPress={() => setIsEditing(false)}
                                    className="border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-900 rounded-lg px-5 font-medium h-11"
                                >
                                    Cancel
                                </Button>
                            )}

                            <Button
                                type="submit"
                                className="bg-slate-900 text-white dark:bg-white dark:text-black font-semibold hover:bg-slate-800 dark:hover:bg-zinc-200 rounded-lg px-6 transition-colors h-11"
                            >
                                {company ? "Save Updates" : "Complete Setup"}
                            </Button>
                        </div>
                    </Form>
                </div>
            )}
        </section>
    );

}

