import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(
    process.env.PUBLIC_SUPABASE_URL!,
    process.env.PUBLIC_SUPABASE_ANONYMOUS_KEY!
);