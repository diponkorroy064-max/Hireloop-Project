import { getUserToken } from "./session";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


export const authHeader = async(path) => {
    const token = await getUserToken()
    const header = token ? {
        authorization: `Bearer ${token}`
    } : {};
    return header;
}


export const protectedFetch = async (path) => {
    const url = `${baseUrl || ''}${path}`;

    try {
        const res = await fetch(url, {
            headers: await authHeader(),
            cache: 'no-store', 
        });

        if (!res.ok) {
            console.error(`Fetch error [${res.status}]: ${res.statusText} at ${url}`);
            return null; 
        }

        return await res.json();
    } catch (error) {
        console.error(`Network or JSON parsing error for ${url}:`, error);
        return null;
    }
};


// export const protectedFetch = async(path) => {
//     const res = await fetch(`${baseUrl}${path}`, 
//         {
//             headers: await authHeader()
//         }
//     );

    // handle 401, 404, 403---
    // return res.json();
// }


export const ServerMutation = async (path, data, method = 'POST') => {
    const res = await fetch(`${baseUrl}${path}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ...await authHeader()
        },
        body: JSON.stringify(data),
    });
    return res.json();
};


export const ServerFetch = async (path) => {
    const res = await fetch(`${baseUrl}${path}`);

    if (!res.ok) {
        throw new Error(
            `Request failed: ${res.status} ${res.statusText}`
        );
    }

    return res.json();
};


