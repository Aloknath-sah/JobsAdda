import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import { AppLayout } from './Layouts/app-layout'
import { Landing } from './pages/Landing'
import { Onboarding } from './pages/Onboarding'
import { ThemeProvider } from './components/ui/theme-provider'
import { Job } from './pages/job'
import { PostJob } from './pages/PostJob'
import { ProtectedRoutes } from './components/ProtectedRoutes'
import { JobListing } from './pages/JobListing'

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Landing/>
      },
      {
        path: '/onboarding',
        element: (
          <ProtectedRoutes>
            <Onboarding/>
          </ProtectedRoutes>
        ) 
      },
      {
        path: '/jobs',
        element: (
          <ProtectedRoutes>
            <JobListing/>
          </ProtectedRoutes>
        ) 
      },
      {
        path: '/post-job',
        element: <PostJob/>
      }
    ]
  }
])

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
