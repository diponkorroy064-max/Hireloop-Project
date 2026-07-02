import { ServerFetch } from "../core/server";

export const getPlanById = async (planId) => {
    return ServerFetch(`/api/plans?plan_id=${planId}`);
}




