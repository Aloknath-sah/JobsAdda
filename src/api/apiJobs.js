import supabaseClient from "@/utils/supabase";

export async function getJobs(token, {location, company_id, searchQuery}) {
    console.log("🟢 getJobs received token:", token);
    const supabase = supabaseClient(token)

    let query = supabase.from("jobs").select("*, company:companies(name, logo_url), saved: saved_jobs(id)")
    console.log("query", query)

    if(location) {
        query = query.eq("location", location);
    }

    if(company_id) {
        query = query.eq("company_id", company_id);
    }

    if(searchQuery) {
        query = query.ilike("title", `%${searchQuery}%`);
    }

    const {data, error} = await query
    console.log("🟢 Supabase Query Response:", data, error);

    if(error) {
        console.error("🔴 Error fetching jobs:", error);
        return null;
    }

    return data;
}