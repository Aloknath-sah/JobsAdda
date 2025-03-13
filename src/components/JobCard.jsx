import { useUser } from "@clerk/clerk-react";
import { Heart, MapPinIcon, MapPinOffIcon, Trash2Icon } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const JobCard = ({
  job,
  isMyJob = false,
  savedInit = false,
  onJobSaved = () => {},
}) => {
  const { user } = useUser();
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
        <Link to={`job/${job.id}`} className="flex-1">
          <Button variant="secondary" className="w-full">
            More Details
          </Button>
        </Link>
        <Heart size={20} stroke="red" fill="red" />
      </CardFooter>
    </Card>
  );
};

export default JobCard;
