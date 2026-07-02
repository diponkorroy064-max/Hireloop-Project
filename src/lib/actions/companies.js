'use server'
import { revalidatePath } from "next/cache";
import { ServerMutation } from "../core/server";


export const createCompany = async (newCompanyData) => {
    return ServerMutation('/api/companies', newCompanyData);
}

export const updateCompany = async (id, data) => {
    const result = ServerMutation(`/api/companies/${id}`, data, 'PATCH');
    revalidatePath('dashboard/admin/companies');
    return result;
}
