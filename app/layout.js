'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navBar'
import NoSsr from '@mui/base/NoSsr';
import { AuthProvider } from '../context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Limitless',
  description: 'Frontend',
}

export default function RootLayout({ children }) {
  return (
    <>
<html lang="en">
      
      <body className={inter.className}>
      {/* <NoSsr> */}
      <AuthProvider>
      <Navbar/>
      {children}
      </AuthProvider>
      {/* </NoSsr> */}
      </body>
      
      </html>
    </>
  )
}
