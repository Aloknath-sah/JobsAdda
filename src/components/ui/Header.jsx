import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './button'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react'
import { PenBox } from 'lucide-react'

export const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    if(search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search])

  const handleOverlayClick = (e) => {
    if(e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({})
    }
  }
  return (
    <>
    <nav className='pt-4 flex justify-between items-center' >
      <Link>
        <img src="/jobs_adda.png" className='h-42' />
      </Link>

      <div>
      
      <SignedOut>
      <Button variant="outline" onClick={() => setShowSignIn(true)} >Login</Button>
      </SignedOut>
      <SignedIn>
        <Link to="/post-job">
        <Button variant='destructive' className='rounded-full'><PenBox size={20} className='mr-2' /> Post a Job</Button>
        </Link>
        <UserButton />
      </SignedIn>
      </div>
    </nav>
    {
      showSignIn && <div className='fixed inset-10 flex justify-center' onClick={handleOverlayClick}>
        <SignIn signUpForceRedirectUrl='/onboarding' fallbackRedirectUrl='/onboarding' />
      </div>
    }
    </>
  )
}
