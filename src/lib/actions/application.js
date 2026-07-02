'use server'

import { ServerMutation } from "../core/server"

export const SubmitApplication = async (applicationData) => {
    return ServerMutation('/api/applications', applicationData);
}