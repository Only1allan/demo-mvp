import {createClient} from "@supabase/supabase-js";
import {auth} from "@clerk/nextjs/server";

// Authenticated Supabase client (for server actions that need auth)
export const createSupabaseClient = () => {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
            async accessToken() {
                return ((await auth()).getToken());
            }
        }
    )
}

// Public Supabase client (for public data that doesn't need auth)
export const createPublicSupabaseClient = () => {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
}