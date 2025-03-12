import { useUser } from '@clerk/clerk-react'
import React from 'react'
import {BarLoader} from 'react-spinners';

export const Onboarding = () => {
  const { user, isLoaded } = useUser();

  if(!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
  }
  return (
    <div>
      
    </div>
  )
}
