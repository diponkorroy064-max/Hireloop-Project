'use server'
import { ServerMutation } from "../core/server"

export const CreateSubscription = async (subInfo) => {
    return ServerMutation('/api/subscriptions', subInfo);
}


