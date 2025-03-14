import supabaseClient from "@/utils/supabase";

export async function getJobs(token, { location, company_id, searchQuery }) {
  const supabase = supabaseClient(token);

  let query = supabase
    .from("jobs")
    .select("*, company:companies(name, logo_url), saved: saved_jobs(id)");

  if (location) {
    query = query.eq("location", location);
  }

  if (company_id) {
    query = query.eq("company_id", company_id);
  }

  if (searchQuery) {
    query = query.ilike("title", `%${searchQuery}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.error("🔴 Error fetching jobs:", error);
    return null;
  }

  return data;
}

export async function getSingleJob(token, { job_id }) {
  const supabase = supabaseClient(token);

  let query = supabase
    .from("jobs")
    .select(
      "*, company:companies(name, logo_url), applications: applications(*)"
    )
    .eq("id", job_id)
    .single();

  const { data, error } = await query;

  if (error) {
    console.error("🔴 Error fetching company:", error);
    return null;
  }

  return data;
}

export async function savedJobs(token, { alreadySaved }, saveData) {
  const supabase = supabaseClient(token);

  if (alreadySaved) {
    const { data, error: deleteError } = await supabase
      .from("saved_jobs")
      .delete()
      .eq("job_id", saveData.job_id);
    if (deleteError) {
      console.error("Error deleting saved jobs", error);
      return null;
    }
    return data;
  } else {
    const { data, error: insertError } = await supabase
      .from("saved_jobs")
      .insert([saveData])
      .eq("job_id", saveData.job_id);
    if (insertError) {
      console.error("Error Fetching jobs", insertError);
      return null;
    }
  }

  let query = supabase
    .from("jobs")
    .select("*, company:companies(name, logo_url), saved: saved_jobs(id)");

  const { data, error } = await query;

  if (error) {
    console.error("🔴 Error fetching jobs:", error);
    return null;
  }

  return data;
}
export async function deleteJob(token, { job_id }) {
  const supabase = await supabaseClient(token);

  const { data, error: deleteError } = await supabase
    .from("jobs")
    .delete()
    .eq("id", job_id)
    .select();

  if (deleteError) {
    console.error("Error deleting job:", deleteError);
    return data;
  }

  return data;
}
