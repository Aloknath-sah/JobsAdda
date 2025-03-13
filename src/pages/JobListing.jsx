import { getJobs } from '@/api/apiJobs'
import { useSession } from '@clerk/clerk-react'
import React, { useEffect } from 'react'

export const JobListing = () => {
 /*  const { session } = useSession(); 
  console.log("session", session)

  const fetchJobs = async () => {
    if (!session) {
      console.error("Session is not available");
      return;
    }

    try {
      const supabaseAccessToken = await session.getToken({
        template: "supabase"
      });
      console.log("🟢 Supabase Token:", supabaseAccessToken);
        if (!supabaseAccessToken) {
            console.error("🔴 Error: Supabase access token is null or undefined");
            return;
        }

      const data = await getJobs(supabaseAccessToken);
      
      
      console.log("data", data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    if(session) {
      fetchJobs();
    }
    
  }, [session]);  */

  //we are using custom hooks instead of this code 
  

  return <div>JobListing</div>;
};
