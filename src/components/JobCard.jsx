import { useUser } from "@clerk/clerk-react";
import { Heart, MapPinIcon, MapPinOffIcon, Trash2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { deleteJob, savedJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/use-fetch";

const JobCard = ({
  job,
  isMyJob = false,
  savedInit = false,
  onJobSaved = () => {},
}) => {
    const [saved, setSaved] = useState(savedInit)
    const { loading: loadingDeleteJob, fn: fnDeleteJob } = useFetch(deleteJob, {
        job_id: job.id,
      });
    const {
        fn: fnsavedJobs,
        data: savedJobData,
        loading: loadingSavedJob,
      } = useFetch(savedJobs, {alreadySaved: saved});
    
     
  const { user } = useUser();
  const handleSaveJob = async() => {
    await fnsavedJobs({
        user_id: user.id,
        job_id: job.id
    })
    onJobSaved()
  }

  const handleDeleteJob = async () => {
    await fnDeleteJob();
    onJobSaved();
  };

  useEffect(() => {
    if(savedJobData !== undefined) setSaved(savedJobData?.length > 0)
  }, [savedJobData])
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between font-bold">
          {job.title}
          {!isMyJob && (
            <Trash2Icon
              fill="red"
              size={18}
              className="text-red-300 cursor-pointer"
            />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          {job.company && <img src={job.company.logo_url} className="h-6" />}
          <div>
            <MapPinOffIcon size={15} />
            <span>{job.location}</span>
          </div>
          <hr />
          {job.description.substring(0, job.description.indexOf("."))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Link to={`/job/${job.id}`} className="flex-1">
          <Button variant="secondary" className="w-full">
            More Details
          </Button>
        </Link>
        {!isMyJob && (
            <Button variant='outline' className='w-15' onClick={handleSaveJob} disabled={loadingSavedJob} >
                {
                    saved ? (<Heart size={20} stroke="red" fill="red" />) : (<Heart size={20} />)
                }
            </Button>
        )}
        
      </CardFooter>
    </Card>
  );
};

export default JobCard;
