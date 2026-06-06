import { headers } from "next/headers";
import { auth } from "../auth";


// calling get session on the server---
export const getUserSession = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    return session?.user || null;
};


