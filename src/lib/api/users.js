const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
// import { ServerFetch } from "../core/server";

export const getUsers = async () => {
    // return ServerFetch("/api/users");
    const res = await fetch(`${baseUrl}/api/users`);
    return res.json();
}


