import { SUPABASE_URL, SUPABASE_SERVICE_ROLE } from "$env/static/private";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);
