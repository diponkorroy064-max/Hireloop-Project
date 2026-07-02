import 'server-only'
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1ThNOo0d7OXlYKkgIv9UJNzA',
    'seeker_free': 'price_1ThORq0d7OXlYKkgiiJ9bhfN',
    'seeker_premium': 'price_1ThOQR0d7OXlYKkgYFQVA4pR',
    'recuter_free': 'price_1ThQpE0d7OXlYKkgpXEpQ1EF',
    'recuter_growth': 'price_1ThQjW0d7OXlYKkgsT654YTE',
    'recuter_enterprice': 'price_1ThQiO0d7OXlYKkgC4gZCyLL'
};

