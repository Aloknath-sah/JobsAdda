import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import {BarLoader} from 'react-spinners';

export const Onboarding = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate()

  //we will store the data in clerk only 
  const handleRoleSelection = async(role) => {
    await user.update({
      unsafeMetadata: {role},
    }).then(() => {
      navigate(role === "recruiter" ? "/post-job": "/jobs")
    }).catch((err) => {
      console.log("error in updating the role", err)
    })
  }

  if(!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
  }
  return (
    <div className='flex flex-col items-center justify-center mt-40' >
      <h2 className='gradient-title font-extrabold text-7xl' >I am a... </h2>
      <div className='mt-16 grid grid-cols-2 gap-4 w-full md:px-40' >
        <Button variant="blue" className="h-22 text-2xl" onClick={() => handleRoleSelection('candidate')} >Candidate</Button>
       <Button variant="destructive" className="h-22 text-2xl" onClick={() => handleRoleSelection('recruiter')}>Recruiter</Button>
      </div>
    </div>
  )
}
