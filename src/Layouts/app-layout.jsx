import { Header } from '@/components/ui/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <div>
        <div className='grid-background'></div>
        <main className='min-h-screen container' >
        <Header/>
        <Outlet />
        </main>
       
    </div>
  )
}
