import type { PageServerLoad } from "./$types";
import { supabase } from "$lib/supabase";
import type { Database } from "$lib/db_types";

export const load = (async ({params}) => {
    let {data: daily_kits_delivered, error} = await supabase
        .from("daily_kits_delivered")
        .select("*");

    if (error) {
        throw new Error(error.message);
    }

    return {
        stats: daily_kits_delivered as Database["public"]["Tables"]["daily_kits_delivered"]["Row"][],
    };

}) satisfies PageServerLoad;
